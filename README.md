# Feature Flags Demo

A Next.js application demonstrating feature flags implementation using the [Flags SDK](https://flags-sdk.dev) with Vercel Edge Config integration.

## Features

- **Feature Flags**: Three example flags with Edge Config backend
- **Dual Design System**: Switch between modern and brutalist designs
- **Three-State Theming**: System/Light/Dark theme support with toggle
- **Component Architecture**: Modular, reusable React components
- **Vercel Toolbar**: Local development flag management
- **Edge Config Integration**: Centralized flag management
- **Flag Analytics**: Encrypted flag value emission for monitoring

## Feature Flags

This demo includes three feature flags:

- `new-design`: Toggles between modern UI and brutalist black & white design
- `beta-features`: Shows/hides experimental feature sections
- `theming`: Enables three-state theme system (system/light/dark) with icon toggle

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up Vercel Edge Config:
   - Create an Edge Config store in your Vercel dashboard
   - Add these keys with boolean values:
     - `new-design`: true/false (enables brutalist design)
     - `beta-features`: true/false (shows experimental features)
     - `theming`: true/false (enables theme switching)
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
- When `theming` flag is enabled, use the theme toggle (Monitor/Sun/Moon icons) in the top-right corner
- Refresh the page to see flag changes take effect
- Toggle flags in your Vercel Edge Config dashboard for persistent changes

### Theme System

When the `theming` flag is enabled:
- **Monitor icon**: Follow system preference (light/dark)
- **Sun icon**: Force light mode
- **Moon icon**: Force dark mode
- Theme preference is saved to localStorage

## Tech Stack

- **Next.js 15** with App Router
- **Flags SDK** for feature flag management
- **Vercel Edge Config** for flag storage
- **Tailwind CSS v4** for styling with class-based dark mode
- **Lucide React** for icons
- **TypeScript** for type safety

## Architecture

### Core Files
- `src/flags.ts`: Flag definitions with Edge Config integration
- `src/app/page.tsx`: Main page orchestration and flag value emission
- `src/app/layout.tsx`: Root layout with Vercel integrations
- `src/app/.well-known/vercel/flags/route.ts`: Discovery endpoint for Vercel Toolbar

### Components
- `src/components/theme-provider.tsx`: Theme state management and dark class handling
- `src/components/theme-toggle.tsx`: Three-state theme toggle with adaptive styling
- `src/components/flag-status-dashboard.tsx`: Flag status display (standard + brutalist)
- `src/components/brutalist-layout.tsx`: Full brutalist design layout
- `src/components/standard-layout.tsx`: Standard modern design layout
- `src/components/new-design-section.tsx`: Purple gradient showcase section
- `src/components/beta-features-section.tsx`: Beta features content (both styles)
- `src/components/brutalist-mode.tsx`: Static brutalist description component

### Configuration
- `tailwind.config.js`: Tailwind CSS configuration with class-based dark mode
- Environment variables for secure Edge Config connection
