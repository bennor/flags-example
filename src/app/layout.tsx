import { VercelToolbar } from "@vercel/toolbar/next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feature Flags Demo",
  description: "Demonstrating feature flags with Flags SDK, Vercel Edge Config",
  keywords: ["feature flags", "Next.js", "Vercel", "Edge Config"],
  authors: [{ name: "Feature Flags Demo" }],
  openGraph: {
    title: "Feature Flags Demo",
    description: "Interactive demo showcasing feature flags",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
