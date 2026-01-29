"use client"

import React from "react"
import { useAccount } from "wagmi"
import { type ClassValue } from "clsx"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"
import { useAbstractProfileByAddress } from "@/hooks/use-abstract-profile"
import { getTierColor } from "@/lib/tier-colors"
import { getDisplayName } from "@/lib/address-utils"

interface AbstractProfileProps {
  address?: `0x${string}`
  fallback?: string
  shineColor?: string
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
  className?: ClassValue
}

export function AbstractProfile({
  address: providedAddress,
  fallback: providedFallback,
  shineColor,
  size = "md",
  showTooltip = true,
  className,
}: AbstractProfileProps) {
  const { address: connectedAddress, isConnecting, isReconnecting } = useAccount()
  const address = providedAddress || connectedAddress
  const fallback = providedFallback || (address ? address.slice(2, 4).toUpperCase() : "??")

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const { data: profile, isLoading } = useAbstractProfileByAddress(address)

  if (!address || isConnecting || isReconnecting || isLoading) {
    return (
      <div className={cn("inline-flex", className)}>
        <Skeleton className={cn(sizeClasses[size], "rounded-full")} />
      </div>
    )
  }

  const avatarSrc =
    profile?.user?.overrideProfilePictureUrl ||
    "https://abstract-assets.abs.xyz/avatars/1-1-1.png"

  const displayName = getDisplayName(profile?.user?.name || "", address)

  const tierColor = profile?.user?.tier ? getTierColor(profile.user.tier) : getTierColor(1)
  const finalBorderColor = shineColor || tierColor

  const avatarElement = (
    <div className={cn("inline-flex", className)}>
      <div
        className="rounded-full p-[2px] shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ background: finalBorderColor }}
      >
        <Avatar className={cn(sizeClasses[size], "bg-black/20")}>
          <AvatarImage src={avatarSrc} alt={displayName} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )

  if (!showTooltip) {
    return avatarElement
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{avatarElement}</TooltipTrigger>
      <TooltipContent>{displayName}</TooltipContent>
    </Tooltip>
  )
}
