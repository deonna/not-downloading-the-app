# not installing that

> Watch social media content in your browser without being forced to download yet another app.

A web tool that converts Instagram, Reddit, and TikTok links into viewer-friendly URLs that work without authentication or app downloads. Because it's 2026 and we shouldn't need to install an app just to watch a 15-second video.

## What is this?

Social media platforms increasingly force users to download their apps to view content. This tool fights back by converting those links into formats that work directly in your browser—no login required, no app needed.

## Features

- 🔗 **Link Conversion**: Instantly converts Instagram Reels, Reddit posts, and TikTok videos to browser-friendly URLs
- 🔄 **Short Link Expansion**: Automatically expands shortened URLs (vm.tiktok.com, vt.tiktok.com, redd.it)
- 📱 **iOS Shortcut**: Share links directly from other apps to this tool (see below)
- 💾 **Recent History**: Stores your last 5 converted links locally for quick access
- 🎨 **Brutalist Design**: Bold, unapologetic interface that gets the job done
- 🔒 **Privacy-First**: No tracking, no analytics, all processing happens locally or through secure edge functions

## Try It Out

Visit [not-installing-that.com](https://not-installing-that.com) (or wherever this is deployed) and paste any Instagram, Reddit, or TikTok link.

## iOS Shortcut

For iPhone users, you can add a shortcut to share links directly from other apps:

1. Download the shortcut: [Not Installing That Shortcut](https://www.icloud.com/shortcuts/2fb40633d6654f118a0aa640051e79c7)
2. Open any Instagram, Reddit, or TikTok link
3. Tap the Share button
4. Select "Not Installing That" from the share sheet
5. View the content in your browser without downloading the app

## How It Was Built

This project showcases a modern, privacy-focused web architecture:

### Frontend
- **Vite** for blazing-fast development and optimized production builds
- **React 18** with TypeScript for type-safe component development
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Lucide React** for crisp, consistent icons

### Backend
- **Supabase Edge Functions** (Deno runtime) for serverless link expansion
- Edge functions handle short link resolution securely without exposing implementation details
- No traditional server needed—everything runs on the edge

### Design Philosophy
- **Brutalist/Neo-brutalist aesthetic**: Bold borders, stark contrasts, geometric shapes
- **Accessibility-first**: High contrast ratios, clear visual hierarchy
- **Mobile-responsive**: Works seamlessly on all device sizes

### Privacy & Security
- **Local storage only**: Recent links are stored in your browser's localStorage
- **No tracking**: Zero analytics, cookies, or user tracking
- **No data collection**: We don't store, log, or analyze your links
- **Secure edge functions**: Short link expansion uses whitelisted domains only

## Setup

Want to run this locally or contribute?

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment variables:**
   The `.env` file contains Supabase connection details (already configured in the repo)

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Supported Platforms

| Platform | Supported Links | Output |
|----------|----------------|--------|
| **Instagram** | Reels (`/reel/`, `/reels/`) | Direct Instagram URLs |
| **Reddit** | Any post or comment | old.reddit.com (no login wall) |
| **TikTok** | Video links, short links | Normalized TikTok URLs |
| **Short Links** | vm.tiktok.com, vt.tiktok.com, redd.it | Expanded full URLs |

## Architecture

```
User Input → Frontend (React)
                ↓
        Short link? → Yes → Edge Function (expand-url) → Expanded URL
                ↓                                              ↓
               No                                             ↓
                ↓ ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
                ↓
        Platform Detection
                ↓
        URL Transformation
                ↓
        Display Result
```

## Contributing

This is an open-source project and contributions are welcome!

### Found a Bug?
[Report it on GitHub Issues](https://github.com/deonna/not-downloading-the-app/issues)

### Want to Add a Platform?
[Request it here](https://github.com/deonna/not-downloading-the-app/issues/new) or submit a pull request!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Feedback & Support

- **Questions?** Check out the [FAQ page](https://not-installing-that.com/faq) or open an issue
- **Feature requests?** [Let us know](https://github.com/deonna/not-downloading-the-app/issues/new)
- **Found this useful?** Star the repo on GitHub!

## License

MIT License - Feel free to use this code for your own projects.

## Why This Exists

Because the web should be open and accessible. Because not every piece of content requires a dedicated app. Because sometimes you just want to watch a video without creating an account, downloading an app, or jumping through authentication hoops.

This tool is a small act of resistance against app bloat and walled gardens. Use it freely.

---

Built with ❤️ and a healthy dose of spite toward unnecessary app downloads.
