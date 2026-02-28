"use client"

import Link from "next/link"
import { siteConfig } from "@/lib/capycamp-data"

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#1b1b1b] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 sm:py-9">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/branding/BWLOGO.png" alt="CapyCamp" className="h-6 w-auto" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/70">
              CapyCamp
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/70">
            <Link href="/brand" className="hover:text-white">
              Brand
            </Link>
            <Link href="/story" className="hover:text-white">
              Story
            </Link>
            <Link href="/roadmap" className="hover:text-white">
              Roadmap
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </div>
        </div>
        <div className="mt-6 text-[10px] uppercase tracking-[0.35em] text-white/50">
          © 2026 CapyCamp. Not financial advice. Definitely not supervision.
        </div>
      </div>
    </footer>
  )
}
