 "use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SiweButton } from "@/components/siwe-button"
import { useAccount } from "wagmi"
import { useSiweAuthQuery } from "@/hooks/use-siwe-auth-query"
import { ClientSiweConfigurationError } from "@/types/siwe-auth"

export default function MintPage() {
  const { isConnected } = useAccount()
  const { data: authData, isLoading, error } = useSiweAuthQuery()
  const isAuthenticated = authData?.ok && authData?.user?.isAuthenticated
  const configError =
    error instanceof ClientSiweConfigurationError ? error.message : null

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Mint Page
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-foreground">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The CapyCamp mint is getting ready. Check back soon and keep an eye
            on Discord for launch details.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            {configError && (
              <div className="relative max-w-xl overflow-hidden rounded-lg border border-white/10 bg-black/30 px-4 py-6 text-sm">
                <div className="absolute inset-0 backdrop-blur-md" aria-hidden="true" />
                <div className="relative text-white/80 text-xs uppercase tracking-[0.2em]">
                  Coming Soon
                </div>
                <div className="relative mt-2 text-sm text-white/70">
                  Mint authentication setup is in progress.
                </div>
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              {isLoading
                ? "Checking authentication..."
                : isAuthenticated
                  ? "You're signed in and ready for mint access."
                  : isConnected
                    ? "Sign in to unlock mint access when it goes live."
                    : "Connect your wallet to get ready for mint access."}
            </div>
            <SiweButton className="w-56" />
          </div>
        </div>
      </main>
      <img
        src="/comingsoon.png"
        alt=""
        aria-hidden="true"
        className="fixed bottom-0 left-1/2 z-10 w-40 -translate-x-1/2 pointer-events-none select-none sm:w-56 md:w-72"
      />
      <SiteFooter />
    </div>
  )
}
