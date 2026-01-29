"use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

export default function AgwProviderPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              AGW Provider
            </h1>
            <p className="text-lg text-muted-foreground">
              An AGW wrapper component for using AGW Reusables.
            </p>
          </header>

          <section className="space-y-4">
            <p className="text-muted-foreground italic">
              Note: this component is already configured as part of the{" "}
              <a href="/installation" className="text-primary hover:underline">
                installation process
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              The <span className="font-semibold text-foreground">AGW Provider</span>{" "}
              wraps your application in the required provider components{" "}
              <a
                href="https://wagmi.sh/react/api/WagmiProvider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                wagmi
              </a>{" "}
              and{" "}
              <a
                href="https://tanstack.com/query/latest/docs/framework/react/reference/QueryClientProvider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Tanstack Query
              </a>{" "}
              required to use the features of AGW Reusables.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Installation</h2>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                npx shadcn@latest add "https://build.abs.xyz/r/agw-provider.json"
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Usage</h2>
            <p className="text-muted-foreground">
              Wrap your entire application with the AGW Provider in your root
              layout:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { NextAbstractWalletProvider } from "@/components/agw-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NextAbstractWalletProvider>
        <body>
          {children}
          <Toaster />
        </body>
      </NextAbstractWalletProvider>
    </html>
  );
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What's included</h2>
            <p className="text-muted-foreground">
              This command installs the following files:
            </p>
            <div className="space-y-4">
              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  agw-provider.tsx
                </h3>
                <p className="text-sm text-muted-foreground">
                  A wrapper component to enable the use of AGW Reusables, wagmi,
                  and Tanstack Query.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  components/agw-provider.tsx
                </p>
              </Card>
              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  chain.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  A global chain constant that is environmentally aware and
                  automatically selects the appropriate Abstract network (testnet
                  for local development, mainnet for production).
                </p>
                <p className="mt-2 text-xs text-muted-foreground">config/chain.ts</p>
              </Card>
              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  viem-clients.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pre-configured Viem public and wallet client configurations for
                  ZK Stack chains (i.e., Abstract).
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  config/viem-clients.ts
                </p>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
