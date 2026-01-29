"use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

const installationSteps = [
  {
    step: 1,
    title: "Install the component",
    body: ['npx shadcn@latest add "https://build.abs.xyz/r/session-keys.json"'],
    isCode: true,
  },
  {
    step: 2,
    title: "Configure session policies for your contracts",
    body: [
      "Update your session key policies in session-key-policies.ts with your contract addresses, function selectors, limits, and any constraints.",
      "For mainnet deployments, review the going to production guide for policy restrictions, requirements, and best practices.",
    ],
    isCode: false,
  },
]

export default function SessionKeyManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Session Key Management
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive session key management system that enables
              transactions without requiring user signatures for each
              transaction.
            </p>
          </header>

          <section className="space-y-4">
            <Card className="p-8 border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Component Preview
              </p>
              <div className="rounded-lg border border-dashed border-border py-10 text-muted-foreground">
                Session Keys Preview
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
                    item.isCode || line.startsWith("npx") ? (
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
                  {item.step === 2 && (
                    <p className="text-muted-foreground">
                      For mainnet deployments, review the{" "}
                      <a
                        className="underline text-primary"
                        href="https://docs.abs.xyz/abstract-global-wallet/session-keys/going-to-production"
                        target="_blank"
                        rel="noreferrer"
                      >
                        going to production
                      </a>{" "}
                      guide for policy restrictions, requirements, and best
                      practices.
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Usage</h2>
            <p className="text-muted-foreground">
              The basic session key button that handles the complete lifecycle:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { SessionKeyButton } from "@/components/session-key-button"

export default function SessionKeyButtonDemo() {
  return (
    <SessionKeyButton />
  )
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Using Hooks Directly</h3>
            <Card className="p-6 border-border">
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client";

import { Button } from "@/components/ui/button";
import { useAccount } from "wagmi";
import { useSessionKey } from "@/hooks/use-session-key";
import { useCreateSessionKey } from "@/hooks/use-create-session-key";
import { useRevokeSessionKey } from "@/hooks/use-revoke-session-key";
import { ConnectWalletButton } from "@/components/connect-wallet-button";

export default function SessionKeyHooksDemo() {
  const { isConnected } = useAccount();
  const { data: sessionData, isLoading } = useSessionKey();
  const createSessionMutation = useCreateSessionKey();
  const { revokeSession, isPending: isRevoking } = useRevokeSessionKey();

  const hasActiveSession = !!sessionData;

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-4">
        {!isConnected ? (
          <ConnectWalletButton />
        ) : !hasActiveSession ? (
          <Button
            onClick={() => createSessionMutation.mutate()}
            disabled={createSessionMutation.isPending || isLoading}
            className="w-full"
          >
            {createSessionMutation.isPending
              ? "Creating..."
              : "Create Session Key"}
          </Button>
        ) : (
          <Button
            onClick={() =>
              sessionData?.session && revokeSession(sessionData.session)
            }
            disabled={isRevoking}
            variant="destructive"
            className="w-full"
          >
            {isRevoking ? "Revoking..." : "Revoke Session Key"}
          </Button>
        )}
      </div>
    </div>
  );
}`}
                </code>
              </pre>
            </Card>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Submitting Transactions with Session Keys
            </h3>
            <Card className="p-6 border-border">
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client";

import { Button } from "@/components/ui/button";
import { useSessionKeyTransaction } from "@/hooks/use-session-key-transaction";
import { toast } from "sonner";
import { useAccount } from "wagmi";

const EXAMPLE_CONTRACT_ABI = [
  {
    name: "mint",
    type: "function",
    stateMutability: "payable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
  },
] as const;

export default function SessionKeyTransactionDemo() {
  const { address } = useAccount();
  const { mutate: submitTransaction, isPending } = useSessionKeyTransaction({
    onSuccess: (data) => {
      toast.success(\`Transaction successful! Hash: \${data.hash}\`);
    },
    onError: (error) => {
      toast.error(\`Transaction failed: \${error.message}\`);
    },
  });

  const handleMintToken = () => {
    submitTransaction({
      abi: EXAMPLE_CONTRACT_ABI,
      address: "0xC4822AbB9F05646A9Ce44EFa6dDcda0Bf45595AA",
      functionName: "mint",
      args: [address!, BigInt(1)],
    });
  };

  return (
    <div className="space-y-4">
      <h3>Submit Transaction Without Signature</h3>
      <Button onClick={handleMintToken} disabled={isPending}>
        {isPending ? "Minting..." : "Mint Token (No Signature Required)"}
      </Button>
    </div>
  );
}`}
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
                  components/session-key-button.tsx
                </h3>
                <p className="text-sm text-muted-foreground">
                  The main session key management button.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  hooks
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>use-session-key.ts - Retrieve and validate sessions</li>
                  <li>use-create-session-key.ts - Create session keys</li>
                  <li>use-revoke-session-key.ts - Revoke session keys</li>
                  <li>use-session-key-transaction.ts - Submit transactions</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  lib
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>get-stored-session-key.ts - Retrieve stored sessions</li>
                  <li>create-and-store-session-key.ts - Create/store sessions</li>
                  <li>clear-stored-session-key.ts - Clear stored sessions</li>
                  <li>session-encryption-utils.ts - Encryption utilities</li>
                  <li>validate-session-key.ts - Validate session keys</li>
                </ul>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  config/session-key-policies.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Configuration file defining which contracts and functions
                  session keys are authorized to interact with.
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
