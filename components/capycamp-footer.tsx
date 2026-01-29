"use client"

import Link from "next/link"
import { siteConfig, footerLinks } from "@/lib/capycamp-data"

export default function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                CC
              </div>
              <span className="font-space-grotesk font-bold text-foreground">CapyCamp</span>
            </div>
            <p className="text-sm text-muted-foreground">The Scout Universe on Abstract</p>
            <div className="flex gap-4 mt-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href={siteConfig.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
              </a>
              <a
                href={siteConfig.links.opensea}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                OpenSea
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/story" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Story & Lore
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/glamping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  IRL Glamping
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Holder Portal
                </Link>
              </li>
              <li>
                <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <Link href="/brand" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Brand Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/safety" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} CapyCamp. Not financial advice. DYOR.
            </p>
            <p className="text-xs text-muted-foreground">
              Built on Abstract with ❤️ by Scouts
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
