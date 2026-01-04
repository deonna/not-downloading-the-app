import { useState, useEffect, useCallback } from 'react';
import { Link2, AlertCircle, Loader2, ExternalLink, Copy, Check, ShieldCheck, Link as LinkIcon, Share2 } from 'lucide-react';
import { supabase } from './lib/supabase';

type Platform = 'Instagram' | 'Reddit' | 'TikTok';

interface ValidationResult {
  success: boolean;
  url?: URL;
  platform?: Platform;
  error?: string;
  wasExpanded?: boolean;
  trackersRemoved?: number;
  wasAlreadyClean?: boolean;
}

interface ExpandUrlResponse {
  expandedUrl: string;
}

interface ExpandUrlError {
  error: string;
}

interface RecentUrl {
  input: string;
  output: string;
  platform: Platform;
  timestamp: number;
}

const RECENT_URLS_KEY = 'recentUrls';
const MAX_RECENT_URLS = 5;

function getRecentUrls(): RecentUrl[] {
  try {
    const stored = localStorage.getItem(RECENT_URLS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveRecentUrl(item: RecentUrl): void {
  try {
    const existing = getRecentUrls();
    // Remove duplicate if exists
    const filtered = existing.filter(u => u.input !== item.input);
    // Add new at front, limit to MAX
    const updated = [item, ...filtered].slice(0, MAX_RECENT_URLS);
    localStorage.setItem(RECENT_URLS_KEY, JSON.stringify(updated));
  } catch {
    // Ignore localStorage errors
  }
}

function isShortLink(url: URL): boolean {
  const hostname = url.hostname.toLowerCase();
  return hostname === 'vm.tiktok.com' || hostname === 'vt.tiktok.com' || hostname === 'redd.it';
}

function cleanTrackingParams(url: URL): { cleanedUrl: URL; trackersRemoved: number } {
  const trackingParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    '_r',
    '_t',
    'igshid',
    'igsh',
    'context',
    'ref',
    'ref_src',
    'ref_url',
    'fbclid',
    'gclid',
    'msclkid',
    'mc_cid',
    'mc_eid'
  ];

  const cleanedUrl = new URL(url.href);
  let removed = 0;

  trackingParams.forEach(param => {
    if (cleanedUrl.searchParams.has(param)) {
      cleanedUrl.searchParams.delete(param);
      removed++;
    }
  });

  return { cleanedUrl, trackersRemoved: removed };
}

async function expandShortUrl(url: string): Promise<{ success: boolean; expandedUrl?: string; error?: string }> {
  try {
    const { data, error } = await supabase.functions.invoke<ExpandUrlResponse>('expand-url', {
      body: { url }
    });

    if (error) {
      return {
        success: false,
        error: error.message || 'Network error while expanding short link. Please try again.'
      };
    }

    if (data && data.expandedUrl) {
      return {
        success: true,
        expandedUrl: data.expandedUrl
      };
    }

    return {
      success: false,
      error: 'Could not expand short link. Please try the full URL instead.'
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error while expanding short link. Please try again.'
    };
  }
}

function detectPlatform(url: URL): Platform | null {
  const hostname = url.hostname.toLowerCase();

  if (hostname === 'instagram.com' || hostname === 'www.instagram.com') {
    return 'Instagram';
  }

  if (hostname === 'reddit.com' || hostname === 'www.reddit.com' || hostname === 'old.reddit.com') {
    return 'Reddit';
  }

  if (hostname === 'tiktok.com' || hostname === 'www.tiktok.com') {
    return 'TikTok';
  }

  return null;
}

function rewriteInstagramUrl(url: URL): URL {
  const pathname = url.pathname;
  const reelMatch = pathname.match(/\/reels?\/([a-zA-Z0-9_-]+)/);

  if (reelMatch && reelMatch[1]) {
    const reelId = reelMatch[1];
    const rewrittenUrl = new URL(`https://www.instagram.com/reels/${reelId}/`);
    return rewrittenUrl;
  }

  return url;
}

function rewriteRedditUrl(url: URL): URL {
  const pathname = url.pathname;
  const rewrittenUrl = new URL(`https://old.reddit.com${pathname}`);
  return rewrittenUrl;
}

function rewriteTikTokUrl(url: URL): URL | null {
  const pathname = url.pathname;
  const videoMatch = pathname.match(/\/@([a-zA-Z0-9._-]+)\/video\/(\d+)/);

  if (videoMatch && videoMatch[1] && videoMatch[2]) {
    const username = videoMatch[1];
    const videoId = videoMatch[2];
    const rewrittenUrl = new URL(`https://www.tiktok.com/@${username}/video/${videoId}`);
    return rewrittenUrl;
  }

  return null;
}

async function validateAndNormalizeUrl(input: string): Promise<ValidationResult> {
  if (!input || input.trim() === '') {
    return {
      success: false,
      error: 'Please enter a URL'
    };
  }

  let urlString = input.trim();

  if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
    urlString = 'https://' + urlString;
  }

  try {
    const url = new URL(urlString);
    let wasExpanded = false;

    if (isShortLink(url)) {
      const expansionResult = await expandShortUrl(urlString);

      if (!expansionResult.success || !expansionResult.expandedUrl) {
        return {
          success: false,
          error: expansionResult.error || 'Could not expand short link. Please try the full URL instead.'
        };
      }

      urlString = expansionResult.expandedUrl;
      const expandedUrl = new URL(urlString);
      const platform = detectPlatform(expandedUrl);
      wasExpanded = true;

      if (!platform) {
        return {
          success: false,
          error: 'This short link does not lead to a supported platform. We only support Instagram, Reddit, and TikTok.'
        };
      }

      let normalizedUrl = expandedUrl;

      if (platform === 'Instagram') {
        normalizedUrl = rewriteInstagramUrl(expandedUrl);
      } else if (platform === 'Reddit') {
        normalizedUrl = rewriteRedditUrl(expandedUrl);
      } else if (platform === 'TikTok') {
        const tiktokUrl = rewriteTikTokUrl(expandedUrl);
        if (!tiktokUrl) {
          normalizedUrl = expandedUrl;
        } else {
          normalizedUrl = tiktokUrl;
        }
      }

      const { cleanedUrl, trackersRemoved } = cleanTrackingParams(normalizedUrl);

      return {
        success: true,
        url: cleanedUrl,
        platform: platform,
        wasExpanded,
        trackersRemoved,
        wasAlreadyClean: !wasExpanded && trackersRemoved === 0
      };
    }

    const platform = detectPlatform(url);

    if (!platform) {
      return {
        success: false,
        error: 'We only support Instagram, Reddit, and TikTok links right now.'
      };
    }

    let normalizedUrl = url;

    if (platform === 'Instagram') {
      normalizedUrl = rewriteInstagramUrl(url);
    } else if (platform === 'Reddit') {
      normalizedUrl = rewriteRedditUrl(url);
    } else if (platform === 'TikTok') {
      const tiktokUrl = rewriteTikTokUrl(url);
      if (!tiktokUrl) {
        return {
          success: false,
          error: 'This TikTok link format is not supported. Please use a link to a specific video.'
        };
      }
      normalizedUrl = tiktokUrl;
    }

    const { cleanedUrl, trackersRemoved } = cleanTrackingParams(normalizedUrl);

    return {
      success: true,
      url: cleanedUrl,
      platform: platform,
      wasExpanded,
      trackersRemoved,
      wasAlreadyClean: trackersRemoved === 0
    };
  } catch (error) {
    return {
      success: false,
      error: 'Invalid URL format. Please check the link and try again.'
    };
  }
}

function App() {
  const [linkInput, setLinkInput] = useState('');
  const [normalizedUrl, setNormalizedUrl] = useState<URL | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [wasExpanded, setWasExpanded] = useState(false);
  const [trackersRemoved, setTrackersRemoved] = useState(0);
  const [wasAlreadyClean, setWasAlreadyClean] = useState(false);
  const [recentUrls, setRecentUrls] = useState<RecentUrl[]>([]);

  // Load recent URLs from localStorage on mount
  useEffect(() => {
    setRecentUrls(getRecentUrls());
  }, []);

  const processUrl = useCallback(async (urlToProcess: string) => {
    setIsLoading(true);
    setError('');
    setNormalizedUrl(null);
    setPlatform(null);
    setWasExpanded(false);
    setTrackersRemoved(0);
    setWasAlreadyClean(false);

    try {
      // Add 5-second timeout for slow/hanging requests
      const timeoutPromise = new Promise<ValidationResult>((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out. Please try again.')), 5000);
      });

      const result = await Promise.race([
        validateAndNormalizeUrl(urlToProcess),
        timeoutPromise
      ]);

      if (result.success && result.url && result.platform) {
        setNormalizedUrl(result.url);
        setPlatform(result.platform);
        setWasExpanded(result.wasExpanded || false);
        setTrackersRemoved(result.trackersRemoved || 0);
        setWasAlreadyClean(result.wasAlreadyClean || false);
        setError('');

        // Save to recent URLs
        const newRecent: RecentUrl = {
          input: urlToProcess,
          output: result.url.href,
          platform: result.platform,
          timestamp: Date.now()
        };
        saveRecentUrl(newRecent);
        setRecentUrls(getRecentUrls());
      } else {
        setError(result.error || 'An error occurred');
        setNormalizedUrl(null);
        setPlatform(null);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setNormalizedUrl(null);
      setPlatform(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlParam = params.get('url');

    if (urlParam) {
      try {
        const decodedUrl = decodeURIComponent(urlParam);
        setLinkInput(decodedUrl);
        processUrl(decodedUrl);
      } catch (error) {
        setError('Could not process URL from link. Please paste a link directly.');
      }
    }
  }, [processUrl]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
    setError('');
    setNormalizedUrl(null);
    setPlatform(null);
    setWasExpanded(false);
    setTrackersRemoved(0);
    setWasAlreadyClean(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && linkInput.trim() && !isLoading) {
      processUrl(linkInput);
    }
  };

  const handleButtonClick = async () => {
    await processUrl(linkInput);
  };

  const handleWatchNow = () => {
    if (normalizedUrl) {
      window.location.href = normalizedUrl.href;
    }
  };

  const handleCopy = async () => {
    if (normalizedUrl) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(normalizedUrl.href);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        } else {
          setError('Copy to clipboard is not supported in your browser.');
        }
      } catch (error) {
        setError('Could not copy to clipboard. Please copy the link manually.');
      }
    }
  };

  const handleShare = async () => {
    if (normalizedUrl && navigator.share) {
      try {
        await navigator.share({
          title: 'Clean Social Media Link',
          text: `Watch ${platform} content without logging in`,
          url: normalizedUrl.href
        });
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          setError('Could not share link. Please copy it manually.');
        }
      }
    }
  };

  return (
    <div className="min-h-screen geometric-bg flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center justify-center w-16 h-16 border-4 border-black bg-[#FF2B51] mb-6 relative">
            <Link2 className="w-8 h-8 text-white" strokeWidth={3} />
            <div className="absolute -z-10 top-2 left-2 w-full h-full bg-black"></div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-extrabold mb-3 uppercase tracking-tight">
            not installing that
          </h1>
          <p className="text-lg font-display font-normal text-black/60">
            Watch social media without logging in
          </p>
        </div>

        <div className="brutalist-card p-8">
          <div className="space-y-5">
            <div>
              <input
                type="text"
                value={linkInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Paste Instagram, Reddit, or TikTok link..."
                className="brutalist-input w-full px-6 py-4 text-lg font-mono-custom"
              />
              <p className="mt-2 text-xs font-mono-custom text-black/50 text-center uppercase tracking-wider">Press Enter to unwrap</p>
              {error && (
                <div className="mt-4 flex items-start gap-3 text-black bg-white px-4 py-3 border-l-8 border-red-600">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" strokeWidth={3} />
                  <span className="text-sm font-semibold">{error}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleButtonClick}
              disabled={!linkInput.trim() || isLoading}
              className="brutalist-button-primary w-full py-4 px-6 text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                'Unwrap Link'
              )}
            </button>

            {recentUrls.length > 0 && !normalizedUrl && (
              <div className="pt-2">
                <p className="text-xs font-mono-custom text-black/50 uppercase tracking-wider mb-2">Recent</p>
                <div className="flex flex-wrap gap-2">
                  {recentUrls.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setLinkInput(item.input);
                        processUrl(item.input);
                      }}
                      className="text-xs font-mono-custom px-3 py-1.5 bg-white border-2 border-black hover:bg-[#FF2B51] hover:text-white transition-colors truncate max-w-[200px]"
                      title={item.input}
                    >
                      {item.platform}: {new URL(item.output).pathname.slice(0, 20)}...
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {normalizedUrl && platform && (
            <div className="mt-6 brutalist-card-sm p-6">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-xs font-mono-custom font-semibold uppercase tracking-wide">Detected Platform:</span>
                <span className="brutalist-badge">
                  {platform}
                </span>
                {wasExpanded && (
                  <span className="brutalist-badge-outline inline-flex items-center gap-1">
                    <LinkIcon className="w-3 h-3" />
                    Expanded
                  </span>
                )}
                {trackersRemoved > 0 && (
                  <span className="brutalist-badge-outline inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {trackersRemoved} Tracker{trackersRemoved !== 1 ? 's' : ''}
                  </span>
                )}
                {wasAlreadyClean && (
                  <span className="brutalist-badge-outline inline-flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Clean
                  </span>
                )}
              </div>
              <div className="relative group mb-5">
                <p className="text-xs font-mono-custom break-all bg-white px-4 py-3 pr-12 border-3 border-black select-all">
                  {normalizedUrl.href}
                </p>
                <button
                  onClick={handleCopy}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-[#FF2B51] hover:text-white border-2 border-black transition-colors"
                  title="Copy URL"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4" strokeWidth={3} />
                  ) : (
                    <Copy className="w-4 h-4" strokeWidth={3} />
                  )}
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleCopy}
                  className="brutalist-button-secondary w-full py-3 px-6 text-sm flex items-center justify-center gap-2"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" strokeWidth={3} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" strokeWidth={3} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <div className="flex flex-col sm:flex-row gap-3">
                  {navigator.share && (
                    <button
                      onClick={handleShare}
                      className="brutalist-button-secondary flex-1 py-3 px-6 text-sm flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-4 h-4" strokeWidth={3} />
                      <span>Share</span>
                    </button>
                  )}
                  <button
                    onClick={handleWatchNow}
                    className="brutalist-button-primary flex-1 py-3 px-6 text-sm flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" strokeWidth={3} />
                    <span>Watch Now</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs font-mono-custom text-black/60 uppercase tracking-wider">
          Supports Instagram Reels, Reddit posts, and TikTok videos
        </div>
      </div>
    </div>
  );
}

export default App;
