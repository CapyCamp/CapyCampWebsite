import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import BackgroundAudio from "@/components/background-audio"
import { CursorGlow } from "@/components/cursor-glow"
import TipsGuide from "@/components/tips-guide"
import { NextAbstractWalletProvider } from "@/components/agw-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

// Configure fonts with proper options
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const diloWorldComic = localFont({
  src: [
    {
      path: "../public/fonts/DiloWorld.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dilo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://capycamp.xyz'),
  title: {
    default: "CapyCamp — The Scout Universe",
    template: "%s | CapyCamp",
  },
  description:
    "Join 3,333 Scouts in CapyCamp on Abstract. A premium Web3 brand with hilarious lore, real-world glamping experiences, and onchain identity.",
  keywords: ["NFT", "Web3", "Abstract", "Scout", "Glamping", "Community", "IRL Events", "Blockchain"],
  authors: [{ name: "CapyCamp" }],
  creator: "CapyCamp",
  publisher: "CapyCamp",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "CapyCamp — The Scout Universe",
    description: "Join 3,333 Scouts in CapyCamp on Abstract. A premium Web3 brand with hilarious lore, real-world glamping experiences.",
    siteName: "CapyCamp",
    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "CapyCamp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CapyCamp — The Scout Universe",
    description: "Join 3,333 Scouts in CapyCamp. Premium NFT brand with real-world experiences.",
    creator: "@capycampxyz",
    images: ["/branding/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/branding/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/branding/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/branding/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/branding/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/branding/apple-icon.png",
    shortcut: "/branding/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${diloWorldComic.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased text-outline">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/mysteryforest.png')] bg-cover bg-center" />
        <NextAbstractWalletProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="theme-mode">
            <div className="fireflies" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, idx) => (
                <span key={`firefly-${idx}`} />
              ))}
            </div>
            <TipsGuide />
            <CursorGlow />
            <BackgroundAudio />
            {children}
            <Toaster />
          </ThemeProvider>
        </NextAbstractWalletProvider>
        <Analytics />
      </body>
    </html>
  )
}
