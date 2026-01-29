"use client"

import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { useSiweAuthQuery } from "@/hooks/use-siwe-auth-query"
import { useSiweSignInMutation } from "@/hooks/use-siwe-sign-in-mutation"
import { useSiweLogoutMutation } from "@/hooks/use-siwe-logout-mutation"
import { cn } from "@/lib/utils"
import { type ClassValue } from "clsx"

interface SiweButtonProps {
  className?: ClassValue
}

export function SiweButton({ className }: SiweButtonProps) {
  const { isConnected } = useAccount()
  const { data: authData, isLoading: isAuthLoading } = useSiweAuthQuery()
  const signInMutation = useSiweSignInMutation()
  const logoutMutation = useSiweLogoutMutation()

  const isAuthenticated = authData?.ok && authData?.user?.isAuthenticated

  if (!isConnected) {
    return <ConnectWalletButton className={className} />
  }

  if (isConnected && isAuthenticated) {
    return (
      <ConnectWalletButton
        className={className}
        customDropdownItems={[
          <DropdownMenuSeparator key="separator" />,
          <DropdownMenuItem
            key="signout"
            onClick={() => logoutMutation.mutate()}
            className="text-destructive"
          >
            {logoutMutation.isPending ? "Signing out..." : "Sign Out"}
          </DropdownMenuItem>,
        ]}
      />
    )
  }

  return (
    <Button
      onClick={() => signInMutation.mutate()}
      disabled={signInMutation.isPending || isAuthLoading}
      className={cn("min-w-40", className)}
    >
      {signInMutation.isPending ? (
        <>
          <Spinner className="mr-2 h-4 w-4" />
          Signing in...
        </>
      ) : isAuthLoading ? (
        <>
          <Spinner className="mr-2 h-4 w-4" />
          Checking...
        </>
      ) : (
        <>
          <KeyIcon className="mr-2 h-4 w-4" />
          Sign Message
        </>
      )}
    </Button>
  )
}

function Spinner({ className }: { className?: ClassValue }) {
  return (
    <div
      className={cn("h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current", className)}
    />
  )
}

function KeyIcon({ className }: { className?: ClassValue }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6" />
      <path d="M15.5 7.5L21 13" />
    </svg>
  )
}
