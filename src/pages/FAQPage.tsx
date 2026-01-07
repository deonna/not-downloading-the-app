import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Footer } from '../components/Footer';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-5xl sm:text-6xl mb-4 uppercase tracking-tight">
              FAQ
            </h1>
            <p className="text-xl text-gray-700 font-medium">
              Questions people probably have (with answers you might actually want)
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Why can't I just use the app?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Because you don't need another app hogging your phone's storage just to watch a 15-second video.
                We're taking a stand against app bloat, one link at a time.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Is this legal?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                We're just making links. Totally legal. We're not downloading or hosting anything—just
                pointing you to content that's already public. Think of us as a really helpful URL translator.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Does this work on mobile?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Yes! And you don't even have to download anything (that's literally the point). There's even
                an iOS Shortcut that lets you share links directly from other apps to this site.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Why do apps force me to download them anyway?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Money, data, engagement metrics. The usual tech company stuff. They want you trapped in
                their ecosystem so they can show you ads and track your behavior. We think that's annoying.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Will this always be free?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Yes. No ads, no premium tier, no BS. This is a passion project to make the internet
                slightly less annoying.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Can I trust this?
              </h2>
              <p className="text-gray-800 leading-relaxed mb-3">
                It's open source. You can literally read every line of code and see exactly what we're doing
                (spoiler: not much, just URL manipulation).
              </p>
              <a
                href="https://github.com/deonna/not-downloading-the-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-bold uppercase text-sm tracking-wide hover:bg-[#FF2B51] transition-colors border-2 border-black"
              >
                <Github className="w-4 h-4" strokeWidth={3} />
                View Source Code
              </a>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                What happens to my links?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                We store your last 5 converted links in your browser's local storage (so you can access
                them again). We don't track anything server-side. Your data stays on your device.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-display font-bold text-2xl mb-3 uppercase">
                Why "not installing that"?
              </h2>
              <p className="text-gray-800 leading-relaxed">
                Because we're all tired of the "Download our app to continue!" prompts. It's 2026.
                Let people use browsers.
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <div className="border-4 border-black p-8 bg-[#FF2B51] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4 mb-4">
                <Code2 className="w-8 h-8 flex-shrink-0" strokeWidth={3} />
                <div>
                  <h2 className="font-display font-bold text-3xl mb-3 uppercase">
                    How Was This Built?
                  </h2>
                  <div className="space-y-2 text-white/95">
                    <p className="leading-relaxed">
                      <span className="font-bold">Frontend:</span> Vite + React + TypeScript + Tailwind CSS
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold">Backend:</span> Supabase Edge Functions (Deno runtime) for secure link expansion
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold">Design:</span> Brutalist/Neo-brutalist aesthetic (because subtlety is overrated)
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold">Privacy:</span> Local storage only, no tracking, no analytics, no cookies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4 mb-4">
                <Github className="w-8 h-8 flex-shrink-0" strokeWidth={3} />
                <div className="flex-1">
                  <h2 className="font-display font-bold text-3xl mb-3 uppercase">
                    Found a Bug or Want More Platforms?
                  </h2>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    This project is open source and actively maintained. If you spot a bug, want to add
                    support for another platform, or have ideas for improvement, we'd love to hear from you!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/deonna/not-downloading-the-app/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-bold uppercase text-sm tracking-wide hover:bg-[#FF2B51] transition-colors border-2 border-black"
                    >
                      <ExternalLink className="w-4 h-4" strokeWidth={3} />
                      Report Bug
                    </a>
                    <a
                      href="https://github.com/deonna/not-downloading-the-app/issues/new"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-bold uppercase text-sm tracking-wide hover:bg-[#FF2B51] hover:text-white transition-colors border-2 border-black"
                    >
                      <ExternalLink className="w-4 h-4" strokeWidth={3} />
                      Request Platform
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
