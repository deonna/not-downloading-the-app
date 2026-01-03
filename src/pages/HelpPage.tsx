import { Share2, Smartphone, Download, CheckCircle, ExternalLink } from 'lucide-react';

export function HelpPage() {
  return (
    <div className="min-h-screen geometric-bg pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 border-4 border-black bg-[#FF2B51] mb-6 relative">
            <Share2 className="w-8 h-8 text-white" strokeWidth={3} />
            <div className="absolute -z-10 top-2 left-2 w-full h-full bg-black"></div>
          </div>
          <h1 className="text-5xl font-display font-extrabold mb-3 uppercase tracking-tight">
            How to Share Links
          </h1>
          <p className="text-lg font-serif text-black/70">
            Make it easy to unwrap social media links on mobile
          </p>
        </div>

        <div className="space-y-8">
          <section className="brutalist-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border-3 border-black flex items-center justify-center flex-shrink-0 bg-white">
                <Smartphone className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-extrabold mb-2 uppercase tracking-tight">Android Sharing</h2>
                <p className="font-serif text-black/70">Share links directly from any app</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Open the share menu</h3>
                  <p className="text-black/70 text-sm">In Instagram, Reddit, or TikTok, tap the share button on any post or video</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Select this app</h3>
                  <p className="text-black/70 text-sm">Look for "not downloading this" or "not dl this" in your share menu</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Watch instantly</h3>
                  <p className="text-black/70 text-sm">The link will be automatically unwrapped and ready to watch</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border-l-8 border-[#FF2B51]">
                <p className="text-sm text-black">
                  <strong className="font-mono-custom uppercase tracking-wide">First time setup:</strong> Add this website to your home screen by opening the browser menu and selecting "Add to Home Screen" or "Install App"
                </p>
              </div>
            </div>
          </section>

          <section className="brutalist-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border-3 border-black flex items-center justify-center flex-shrink-0 bg-white">
                <Download className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-extrabold mb-2 uppercase tracking-tight">iOS Shortcuts</h2>
                <p className="font-serif text-black/70">Create a quick action for Safari and other apps</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Open Shortcuts app</h3>
                  <p className="text-black/70 text-sm">Find the Shortcuts app on your iPhone (it comes pre-installed)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Create new shortcut</h3>
                  <p className="text-black/70 text-sm mb-3">Tap the "+" button and add these actions:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-3 border-3 border-black font-mono-custom">
                      <div className="font-bold text-black mb-1 text-xs uppercase tracking-wide">Action 1: Receive URLs from Share Sheet</div>
                      <div className="text-black/70 text-xs">Search for "Receive" and select "Receive URLs from Share Sheet"</div>
                    </div>
                    <div className="bg-white p-3 border-3 border-black font-mono-custom">
                      <div className="font-bold text-black mb-1 text-xs uppercase tracking-wide">Action 2: URL</div>
                      <div className="text-black/70 text-xs mb-2">Search for "URL" and add it. Set the URL to:</div>
                      <div className="text-[#FF2B51] font-bold text-xs break-all">
                        https://notdownloadingthis.com/?url=[Shortcut Input]
                      </div>
                    </div>
                    <div className="bg-white p-3 border-3 border-black font-mono-custom">
                      <div className="font-bold text-black mb-1 text-xs uppercase tracking-wide">Action 3: Open URLs</div>
                      <div className="text-black/70 text-xs">Search for "Open URLs" and add it</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Name and save</h3>
                  <p className="text-black/70 text-sm">Name it "not downloading this" and tap Done</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center flex-shrink-0 font-bold font-mono-custom">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1 uppercase tracking-wide text-sm">Use from share menu</h3>
                  <p className="text-black/70 text-sm">Now when you share a link from Instagram, Reddit, or TikTok, you'll see your shortcut in the share menu</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border-l-8 border-amber-500">
                <p className="text-sm text-black">
                  <strong className="font-mono-custom uppercase tracking-wide">Note:</strong> Replace "notdownloadingthis.com" with your actual domain name in the URL field
                </p>
              </div>
            </div>
          </section>

          <section className="brutalist-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border-3 border-black flex items-center justify-center flex-shrink-0 bg-white">
                <CheckCircle className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-extrabold mb-2 uppercase tracking-tight">Tips & Tricks</h2>
                <p className="font-serif text-black/70">Get the most out of this tool</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white border-l-4 border-black">
                <h3 className="font-bold text-black mb-2 uppercase tracking-wide text-sm">Bookmark for quick access</h3>
                <p className="text-black/70 text-sm">Save this page to your browser bookmarks for instant access when you need to unwrap a link</p>
              </div>

              <div className="p-4 bg-white border-l-4 border-black">
                <h3 className="font-bold text-black mb-2 uppercase tracking-wide text-sm">Copy and share cleaned links</h3>
                <p className="text-black/70 text-sm">After unwrapping, use the "Copy Link" button to easily share the clean URL with friends</p>
              </div>

              <div className="p-4 bg-white border-l-4 border-black">
                <h3 className="font-bold text-black mb-2 uppercase tracking-wide text-sm">Works with shortened links</h3>
                <p className="text-black/70 text-sm">Automatically expands short links like vm.tiktok.com and redd.it before processing</p>
              </div>

              <div className="p-4 bg-white border-l-4 border-black">
                <h3 className="font-bold text-black mb-2 uppercase tracking-wide text-sm">No login required</h3>
                <p className="text-black/70 text-sm">View content from Instagram, Reddit, and TikTok without needing to log in or download their apps</p>
              </div>
            </div>
          </section>

          <section className="brutalist-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 border-3 border-black flex items-center justify-center flex-shrink-0 bg-white">
                <ExternalLink className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-extrabold mb-2 uppercase tracking-tight">Browser Extension</h2>
                <p className="font-serif text-black/70">For desktop users</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-black/70">
                While this tool works great in any browser, you can also create a browser bookmarklet for one-click access:
              </p>

              <div className="p-4 bg-white border-l-8 border-[#FF2B51]">
                <p className="text-sm text-black mb-2">
                  <strong className="font-mono-custom uppercase tracking-wide">Create a bookmarklet:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-black/70">
                  <li>Create a new bookmark in your browser</li>
                  <li>Name it "Unwrap Link"</li>
                  <li className="break-all">For the URL, paste: <code className="bg-black text-white px-2 py-1 text-xs font-mono-custom">javascript:window.location='https://notdownloadingthis.com/?url='+encodeURIComponent(window.location.href)</code></li>
                  <li>Click the bookmarklet while on any Instagram, Reddit, or TikTok page</li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="brutalist-button-primary inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Try It Now
          </a>
        </div>
      </div>
    </div>
  );
}
