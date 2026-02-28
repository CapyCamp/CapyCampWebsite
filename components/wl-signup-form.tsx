"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { SiweButton } from "@/components/siwe-button"
import { useSiweAuthQuery } from "@/hooks/use-siwe-auth-query"
import { cn } from "@/lib/utils"

function trimAddress(addr: string) {
  if (!addr || addr.length < 10) return addr
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

export default function WlSignupForm() {
  const { isConnected, address } = useAccount()
  const { data: authData, isLoading: isAuthLoading } = useSiweAuthQuery({
    refetchOnWindowFocus: false,
    refetchInterval: 0,
    staleTime: 1000 * 60 * 5,
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isAuthenticated = authData?.ok && authData?.user?.isAuthenticated

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/wl-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
        credentials: "same-origin",
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data?.error ?? "Signup failed. Please try again.")
      }

      setIsSubmitted(true)
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : "Signup failed. Please try again."
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-xl">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl">WL Signup</CardTitle>
        <CardDescription className="text-white/80">
          Sign in with your wallet. That wallet will be used for the whitelist.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="rounded-xl border border-white/15 bg-black/40 p-4 text-sm text-white/90">
            Thanks! Your wallet has been submitted. We&apos;ll reach out with updates.
          </div>
        ) : !isConnected ? (
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              Connect your wallet to continue.
            </p>
            <ConnectWalletButton className="w-full justify-center" />
          </div>
        ) : isAuthLoading ? (
          <p className="text-center text-sm text-white/70">Checking sign-in...</p>
        ) : !isAuthenticated ? (
          <div className="space-y-4">
            <p className="text-sm text-white/80">
              Sign the message to prove you own this wallet. This wallet will be used for WL.
            </p>
            <SiweButton className={cn("w-full justify-center")} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-medium text-white/70">Wallet for WL</p>
              <p className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 font-mono text-sm text-white/90">
                {address ? trimAddress(address) : ""}
              </p>
              <p className="text-xs text-white/60">
                This is the wallet you signed in with. It will be added to the whitelist.
              </p>
            </div>
            {error ? <p className="text-sm text-red-200">{error}</p> : null}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Join the WL"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
