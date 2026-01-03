import { Share2, Smartphone, Download, CheckCircle, ExternalLink } from 'lucide-react';

export function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Share2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            How to Share Links
          </h1>
          <p className="text-lg text-slate-600">
            Make it easy to unwrap social media links on mobile
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Android Sharing</h2>
                <p className="text-slate-600">Share links directly from any app</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Open the share menu</h3>
                  <p className="text-slate-600">In Instagram, Reddit, or TikTok, tap the share button on any post or video</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Select this app</h3>
                  <p className="text-slate-600">Look for "not downloading this" or "not dl this" in your share menu</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Watch instantly</h3>
                  <p className="text-slate-600">The link will be automatically unwrapped and ready to watch</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>First time setup:</strong> Add this website to your home screen by opening the browser menu and selecting "Add to Home Screen" or "Install App"
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">iOS Shortcuts</h2>
                <p className="text-slate-600">Create a quick action for Safari and other apps</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Open Shortcuts app</h3>
                  <p className="text-slate-600">Find the Shortcuts app on your iPhone (it comes pre-installed)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Create new shortcut</h3>
                  <p className="text-slate-600 mb-2">Tap the "+" button and add these actions:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono">
                      <div className="font-semibold text-slate-700 mb-1">Action 1: Receive URLs from Share Sheet</div>
                      <div className="text-slate-500">Search for "Receive" and select "Receive URLs from Share Sheet"</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono">
                      <div className="font-semibold text-slate-700 mb-1">Action 2: URL</div>
                      <div className="text-slate-500">Search for "URL" and add it. Set the URL to:</div>
                      <div className="text-blue-600 mt-1 break-all">
                        https://notdownloadingthis.com/?url=[Shortcut Input]
                      </div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono">
                      <div className="font-semibold text-slate-700 mb-1">Action 3: Open URLs</div>
                      <div className="text-slate-500">Search for "Open URLs" and add it</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Name and save</h3>
                  <p className="text-slate-600">Name it "not downloading this" and tap Done</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Use from share menu</h3>
                  <p className="text-slate-600">Now when you share a link from Instagram, Reddit, or TikTok, you'll see your shortcut in the share menu</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>Note:</strong> Replace "notdownloadingthis.com" with your actual domain name in the URL field
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Tips & Tricks</h2>
                <p className="text-slate-600">Get the most out of this tool</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Bookmark for quick access</h3>
                <p className="text-slate-600 text-sm">Save this page to your browser bookmarks for instant access when you need to unwrap a link</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Copy and share cleaned links</h3>
                <p className="text-slate-600 text-sm">After unwrapping, use the "Copy Link" button to easily share the clean URL with friends</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Works with shortened links</h3>
                <p className="text-slate-600 text-sm">Automatically expands short links like vm.tiktok.com and redd.it before processing</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">No login required</h3>
                <p className="text-slate-600 text-sm">View content from Instagram, Reddit, and TikTok without needing to log in or download their apps</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Browser Extension</h2>
                <p className="text-slate-600">For desktop users</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-600">
                While this tool works great in any browser, you can also create a browser bookmarklet for one-click access:
              </p>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-900 mb-2">
                  <strong>Create a bookmarklet:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-purple-800">
                  <li>Create a new bookmark in your browser</li>
                  <li>Name it "Unwrap Link"</li>
                  <li>For the URL, paste: <code className="bg-purple-100 px-2 py-1 rounded text-xs">javascript:window.location='https://notdownloadingthis.com/?url='+encodeURIComponent(window.location.href)</code></li>
                  <li>Click the bookmarklet while on any Instagram, Reddit, or TikTok page</li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
          >
            Try It Now
          </a>
        </div>
      </div>
    </div>
  );
}
