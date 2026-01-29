"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { navConfig, siteConfig } from "@/lib/capycamp-data"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { AbstractProfile } from "@/components/abstract-profile"
import { useAbstractProfile } from "@/hooks/use-abstract-profile"
import { useAccount } from "wagmi"
import { getTierName } from "@/lib/tier-colors"
import { trimAddress } from "@/lib/address-utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { address, isConnected } = useAccount()
  const { data: profile } = useAbstractProfile()

  const playClickSound = () => {
    const audio = new Audio("/woodcreak.mp3")
    audio.currentTime = 0
    audio.play().catch(() => {
      // Ignore if autoplay is blocked
    })
    window.setTimeout(() => {
      audio.pause()
      audio.currentTime = 0
    }, 2500)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group pl-2">
          <img
            src="/branding/BWLOGO.png"
            alt="CapyCamp"
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navConfig.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={playClickSound}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Menu */}
        <div className="relative flex items-center gap-2">
          {isConnected && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="hidden sm:inline-flex items-center justify-center rounded-full"
                  aria-label="Open profile menu"
                >
                  <AbstractProfile size="sm" showTooltip={false} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="px-3 py-2">
                  <div className="text-sm font-semibold text-foreground">
                    {profile?.user?.name || "Scout"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {address ? trimAddress(address) : "Not connected"}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {profile?.user?.tier
                      ? `${getTierName(profile.user.tier)} Tier`
                      : "Bronze Tier"}
                    {profile?.user?.badges?.length
                      ? ` • ${profile.user.badges.length} badges`
                      : ""}
                  </div>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/portal">Go to Portal</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <ConnectWalletButton className="hidden sm:inline-flex" />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col gap-4 mt-8">
                {navConfig.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      playClickSound()
                      setIsOpen(false)
                    }}
                    className="px-4 py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <ConnectWalletButton className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
