# Feature Flags Demo

A Next.js application demonstrating feature flags implementation using the [Flags SDK](https://flags-sdk.dev) with Vercel Edge Config integration.

## Features

- **Feature Flags**: Three example flags with Edge Config backend
- **Dual Design System**: Switch between modern and brutalist designs
- **Dark Mode**: Full dark/light theme support
- **Vercel Toolbar**: Local development flag management
- **Edge Config Integration**: Centralized flag management

## Feature Flags

This demo includes three feature flags:

- `new-design`: Toggles between modern UI and brutalist black & white design
- `beta-features`: Shows/hides experimental feature sections
- `dark-mode`: Controls application-wide dark theme

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up Vercel Edge Config:
   - Create an Edge Config store in your Vercel dashboard
   - Add these keys with boolean values:
     - `new-design`: true/false
     - `beta-features`: true/false
     - `dark-mode`: true/false
   - Copy the connection string to `.env.local`:
   ```
   EDGE_CONFIG=your_edge_config_url
   FLAGS_SECRET=your_32_byte_base64_secret
   ```

3. Link project to Vercel (for toolbar):
```bash
vercel link
```

4. Run development server:
```bash
pnpm dev
```

## Usage

- Visit [http://localhost:3000](http://localhost:3000) to see the demo
- Use the Vercel Toolbar (appears in development) to toggle flags
- Refresh the page to see flag changes take effect
- Toggle flags in your Vercel Edge Config dashboard for persistent changes

## Tech Stack

- **Next.js 15** with App Router
- **Flags SDK** for feature flag management
- **Vercel Edge Config** for flag storage
- **Tailwind CSS** for styling
- **TypeScript** for type safety

## Architecture

- `src/flags.ts`: Flag definitions with Edge Config integration
- `src/app/page.tsx`: Main page with conditional rendering
- `src/app/.well-known/vercel/flags/route.ts`: Discovery endpoint for Vercel Toolbar
- Environment variables for secure configuration
