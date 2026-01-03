# Link Unwrapper

Watch social media content in your browser without logging in. This app converts Instagram, Reddit, and TikTok links into viewer-friendly URLs that work without authentication.

## Features

- Supports Instagram Reels, Reddit posts, and TikTok videos
- Automatically expands short links (vm.tiktok.com, vt.tiktok.com, redd.it)
- Serverless architecture using Supabase Edge Functions
- Clean, modern UI with loading states and error handling

## Setup

1. Install dependencies:
```bash
npm install
```

2. Environment variables are already configured in `.env`

3. Start the development server:
```bash
npm run dev
```

## How It Works

The app uses a Supabase Edge Function to securely expand short links before processing. For regular links, it applies platform-specific URL rewrites to generate viewer-friendly URLs.

### Supported Platforms

- **Instagram**: Reels are converted to direct Instagram URLs
- **Reddit**: Posts are rewritten to use old.reddit.com
- **TikTok**: Videos are normalized to standard format
- **Short Links**: vm.tiktok.com, vt.tiktok.com, and redd.it are automatically expanded

## Architecture

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Supabase Edge Function (Deno runtime)
- **Security**: Short link expansion is restricted to whitelisted domains only
