import { useState } from 'react';
import { Link2, AlertCircle } from 'lucide-react';

type Platform = 'Instagram' | 'Reddit' | 'TikTok';

interface ValidationResult {
  success: boolean;
  url?: URL;
  platform?: Platform;
  error?: string;
}

function detectPlatform(url: URL): Platform | null {
  const hostname = url.hostname.toLowerCase();

  if (hostname === 'instagram.com' || hostname === 'www.instagram.com') {
    return 'Instagram';
  }

  if (hostname === 'reddit.com' || hostname === 'www.reddit.com' || hostname === 'old.reddit.com') {
    return 'Reddit';
  }

  if (hostname === 'tiktok.com' || hostname === 'www.tiktok.com' || hostname === 'vm.tiktok.com') {
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

function validateAndNormalizeUrl(input: string): ValidationResult {
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
    const platform = detectPlatform(url);

    if (!platform) {
      return {
        success: false,
        error: 'Unsupported platform. Please use an Instagram, Reddit, or TikTok link.'
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
          error: 'Invalid TikTok URL. Please use a TikTok video link (e.g., tiktok.com/@user/video/123456).'
        };
      }
      normalizedUrl = tiktokUrl;
    }

    return {
      success: true,
      url: normalizedUrl,
      platform: platform
    };
  } catch (error) {
    return {
      success: false,
      error: 'Invalid URL format. Please enter a valid web address.'
    };
  }
}

function App() {
  const [linkInput, setLinkInput] = useState('');
  const [normalizedUrl, setNormalizedUrl] = useState<URL | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
    setError('');
    setNormalizedUrl(null);
    setPlatform(null);
  };

  const handleButtonClick = () => {
    const result = validateAndNormalizeUrl(linkInput);

    if (result.success && result.url && result.platform) {
      setNormalizedUrl(result.url);
      setPlatform(result.platform);
      setError('');
    } else {
      setError(result.error || 'An error occurred');
      setNormalizedUrl(null);
      setPlatform(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Link2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Link Unwrapper
          </h1>
          <p className="text-lg text-slate-600">
            Watch social media content in your browser without logging in
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={linkInput}
                onChange={handleInputChange}
                placeholder="Paste your Instagram, Reddit, or TikTok link here..."
                className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
              {error && (
                <div className="mt-3 flex items-start gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleButtonClick}
              disabled={!linkInput.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-lg py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-lg disabled:shadow-none"
            >
              Unwrap Link
            </button>
          </div>

          {normalizedUrl && platform && (
            <div className="mt-6 p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-green-700">Detected Platform:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                  {platform}
                </span>
              </div>
              <p className="text-sm text-slate-900 break-all font-mono bg-white px-4 py-3 rounded border border-green-200">
                {normalizedUrl.href}
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Supports Instagram Reels, Reddit posts, and TikTok videos
        </div>
      </div>
    </div>
  );
}

export default App;
