"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { navConfig } from "@/lib/capycamp-data"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/branding/BWLOGO.png"
            alt="CapyCamp"
            className="h-6 w-auto sm:h-7"
          />
          <span className="text-xs uppercase tracking-[0.35em] text-foreground/70">
            CapyCamp
          </span>
        </Link>

        {/* Wallet + Menu */}
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
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 min-w-56">
              {navConfig.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
              <div className="md:hidden border-t border-border mt-2 pt-2">
                <ConnectWalletButton className="w-full justify-center" />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
