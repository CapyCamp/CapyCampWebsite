"use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

const installationSteps = [
  {
    step: 1,
    title: "Required: Install the base onboarding dialog",
    body: ['npx shadcn@latest add "https://build.abs.xyz/r/onboarding-dialog.json"'],
    isCode: true,
  },
  {
    step: 2,
    title: "Required: Add the onboarding dialog to your layout",
    body: [
      "Add the <Onboarder /> component to your app/layout.tsx:",
      `import { NextAbstractWalletProvider } from "@/components/agw-provider";
import { Toaster } from "@/components/ui/sonner";
import { Onboarder } from "@/components/onboarder";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NextAbstractWalletProvider>
        <body>
          {children}
          <Onboarder />
          <Toaster />
        </body>
      </NextAbstractWalletProvider>
    </html>
  );
}`,
    ],
    isCode: true,
  },
]

export default function OnboardingDialogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Onboarding Dialog
            </h1>
            <p className="text-lg text-muted-foreground">
              A configurable multi-step onboarding dialog that guides users
              through AGW authentication steps with progress indication.
            </p>
          </header>

          <section className="space-y-4">
            <Card className="p-8 border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Component Preview
              </p>
              <div className="rounded-lg border border-dashed border-border py-10 text-muted-foreground">
                Onboarding Dialog Preview
              </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Installation</h2>
            <p className="text-muted-foreground">
              The onboarding dialog has three optional phases. Install the
              components you need:
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
                    item.isCode ? (
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

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Usage</h2>
            <p className="text-muted-foreground">
              Use the ready flag and require() function from the useOnboarding()
              hook to gate actions behind onboarding requirements such as
              requiring a wallet connection, SIWE authentication, or session key
              creation.
            </p>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ready
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                The ready flag is true when all required steps are completed. Use
                this flag to conditionally render UI.
              </p>
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client"

import { useOnboarding } from "@/hooks/use-onboarding"

export default function MyComponent() {
  const { ready } = useOnboarding({
    connectWallet: true,
    signWithEthereum: true,
    createSessionKey: true,
  });

  return <div>{ready ? "Ready" : "Not Ready"}</div>;
}`}
                </code>
              </pre>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                require()
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call require() before any logic that requires the user to be in
                a ready state (e.g. wallet connected &amp; authenticated).
              </p>
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client"

import { Button } from "@/components/ui/button"
import { useOnboarding } from "@/hooks/use-onboarding"

export default function MyComponent() {
  const { ready, require } = useOnboarding({
    connectWallet: true,
    signWithEthereum: true,
    createSessionKey: true,
  });

  const handleProtectedAction = () => {
    if (!require()) return;

    console.log("Action executed!");
  }

  return (
    <Button onClick={handleProtectedAction}>
      {ready ? "Execute Action" : "Complete Onboarding First"}
    </Button>
  );
}`}
                </code>
              </pre>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                showDialog()
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use showDialog() to manually trigger the onboarding dialog. The
                dialog will not open if all steps are already completed.
              </p>
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client";

import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/hooks/use-onboarding";

export default function MyComponent() {
  const { ready, isLoading, isError, showDialog } = useOnboarding({
    connectWallet: true,
    signWithEthereum: true,
    createSessionKey: true,
  });

  if (isError) return <div>Error occurred during onboarding</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>{ready ? "Ready" : "Not Ready"}</div>
      {!ready && (
        <Button onClick={showDialog} disabled={isLoading}>
          {isLoading ? "Loading..." : "Show Dialog"}
        </Button>
      )}
    </div>
  );
}`}
                </code>
              </pre>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Hook API</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">ready:</span> True
                when all required steps are completed.
              </li>
              <li>
                <span className="font-semibold text-foreground">pending:</span>{" "}
                True when the onboarding dialog is currently open.
              </li>
              <li>
                <span className="font-semibold text-foreground">require():</span>{" "}
                Shows dialog if not ready, returns true if ready.
              </li>
              <li>
                <span className="font-semibold text-foreground">showDialog():</span>{" "}
                Manually show the onboarding dialog.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
