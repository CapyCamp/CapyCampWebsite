"use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

const installationSteps = [
  {
    step: 1,
    title: "Install the component",
    body: ['npx shadcn@latest add "https://build.abs.xyz/r/siwe-button.json"'],
    isCode: true,
  },
  {
    step: 2,
    title: "Generate a secure password",
    body: [
      "Generate a secure password for iron-session using openssl:",
      "openssl rand -base64 32",
    ],
    isCode: true,
  },
  {
    step: 3,
    title: "Add environment variable",
    body: [
      "Add the password to your .env.local file:",
      'IRON_SESSION_PASSWORD="your_secure_password_here"  # Ensure it is wrapped in double quotes',
    ],
    isCode: true,
  },
]

export default function SiweAuthenticationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              SIWE Authentication
            </h1>
            <p className="text-lg text-muted-foreground">
              A SIWE authentication system with server-side utilities for
              protecting routes and API endpoints.
            </p>
          </header>

          <section className="space-y-4">
            <Card className="p-8 border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Component Preview
              </p>
              <div className="rounded-lg border border-dashed border-border py-10 text-muted-foreground">
                SIWE Button Preview
              </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Installation</h2>
            <p className="text-muted-foreground">
              Ensure you have installed and setup the AGW Provider wrapper
              component first.
            </p>
            <div className="space-y-4">
              {installationSteps.map((item) => (
                <Card key={item.step} className="p-6 border-border">
                  <div className="text-sm font-semibold text-primary mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  {item.body.map((line, idx) =>
                    item.isCode || line.startsWith("openssl") ? (
                      <pre
                        key={`${item.step}-code-${idx}`}
                        className="mt-3 rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto"
                      >
                        <code>{line}</code>
                      </pre>
                    ) : (
                      <p key={`${item.step}-text-${idx}`} className="text-muted-foreground">
                        {line}
                      </p>
                    ),
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Usage</h2>
            <p className="text-muted-foreground">
              A button that prompts the user to connect their Abstract Global
              Wallet and sign the SIWE message to authenticate with your
              application.
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { SiweButton } from "@/components/siwe-button"

export default function App() {
  return <SiweButton />
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Using Hooks</h3>
            <Card className="p-6 border-border">
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { useAccount } from "wagmi"
import { useSiweAuthQuery } from "@/hooks/use-siwe-auth-query"
import { useSiweSignInMutation } from "@/hooks/use-siwe-sign-in-mutation"
import { useSiweLogoutMutation } from "@/hooks/use-siwe-logout-mutation"

export default function SiweButtonDemo() {
  const { address, isConnected } = useAccount()
  const { data: authData, isLoading: isAuthLoading } = useSiweAuthQuery()
  const signInMutation = useSiweSignInMutation()
  const logoutMutation = useSiweLogoutMutation()

  const isAuthenticated = authData?.ok && authData?.user?.isAuthenticated

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign in with Ethereum</CardTitle>
        <CardDescription>
          Authenticate your wallet to access protected features
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isConnected ? (
          <ConnectWalletButton className="w-full" />
        ) : !isAuthenticated ? (
          <Button
            onClick={() => signInMutation.mutate()}
            disabled={signInMutation.isPending || isAuthLoading}
            className="w-full"
          >
            {signInMutation.isPending ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
                Signing Message...
              </>
            ) : isAuthLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
                Checking Status...
              </>
            ) : (
              "Sign Authentication Message"
            )}
          </Button>
        ) : (
          <div className="space-y-3">
            <Button
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              variant="destructive"
              className="w-full"
            >
              {logoutMutation.isPending ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
                  Signing Out...
                </>
              ) : (
                "Sign Out"
              )}
            </Button>
          </div>
        )}

        {isConnected && (
          <div className="space-y-2 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status:</span>
              <div className="flex items-center space-x-2">
                {isAuthLoading ? (
                  <>
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm text-blue-600 dark:text-blue-400">Checking</span>
                  </>
                ) : isAuthenticated ? (
                  <>
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-green-600 dark:text-green-400">Authenticated</span>
                  </>
                ) : (
                  <>
                    <div className="h-2 w-2 bg-yellow-500 rounded-full" />
                    <span className="text-sm text-yellow-600 dark:text-yellow-400">Connected</span>
                  </>
                )}
              </div>
            </div>
            {address && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Address:</span>
                <span className="text-sm font-mono">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}`}
                </code>
              </pre>
            </Card>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Server-side Utilities
            </h3>
            <p className="text-muted-foreground">
              Included are utilities for checking authentication status in
              server components and API routes.
            </p>

            <Card className="p-6 border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Server Component
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Gate content to authenticated users in a server component.
              </p>
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`import { SiweButton } from "@/components/siwe-button";
import { getServerAuthUser } from "@/lib/auth-server";

export default async function ProtectedPage() {
  const auth = await getServerAuthUser();

  if (!auth.isAuthenticated) {
    return <SiweButton />;
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Your address: {auth.user?.address}</p>
    </div>
  );
}
`}
                </code>
              </pre>
            </Card>

            <Card className="p-6 border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                API Route
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Protect API routes with the requireServerAuth utility.
              </p>
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`import { NextResponse } from "next/server";
import { requireServerAuth } from "@/lib/auth-server";

export async function GET() {
  try {
    const user = await requireServerAuth();

    const userData = {
      address: user.address,
      chainId: user.chainId,
      isAuthenticated: user.isAuthenticated,
      expirationTime: user.expirationTime,
      message: "This is protected data only available to authenticated users",
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Authentication required" },
      { status: 401 }
    );
  }
}
`}
                </code>
              </pre>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">What's included</h2>
            <p className="text-muted-foreground">
              This command installs the following files:
            </p>

            <div className="space-y-4">
              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  components/siwe-button.tsx
                </h3>
                <p className="text-sm text-muted-foreground">
                  A button that prompts the user to connect their Abstract Global
                  Wallet and sign the SIWE message to authenticate with your
                  application.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  app/api/auth
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>nonce/route.ts - API route for generating nonces</li>
                  <li>verify/route.ts - API route for verifying SIWE messages</li>
                  <li>user/route.ts - API route for getting user auth status</li>
                  <li>logout/route.ts - API route for logging out</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  config/auth.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Iron Session configuration object.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  hooks
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>use-siwe-auth-query.ts - Hook for checking auth status</li>
                  <li>use-siwe-sign-in-mutation.ts - Hook for signing in</li>
                  <li>use-siwe-logout-mutation.ts - Hook for logging out</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  lib/auth-server.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Server-side authentication utilities for API routes and server
                  components.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  types/siwe-auth.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  TypeScript type definitions for SIWE authentication.
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
