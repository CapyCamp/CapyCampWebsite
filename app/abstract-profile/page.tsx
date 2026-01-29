"use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

export default function AbstractProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Abstract Profile
            </h1>
            <p className="text-lg text-muted-foreground">
              A profile component that displays user profile pictures from
              Abstract Portal with tier-based styling and loading states.
            </p>
          </header>

          <section className="space-y-4">
            <Card className="p-8 border-border text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Component Preview
              </p>
              <div className="rounded-lg border border-dashed border-border py-10 text-muted-foreground">
                Abstract Profile Preview
              </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Installation</h2>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                npx shadcn@latest add "https://build.abs.xyz/r/abstract-profile.json"
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Usage</h2>
            <p className="text-muted-foreground">
              The component automatically uses the connected wallet address:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { AbstractProfile } from "@/components/abstract-profile"

export default function AbstractProfileDemo() {
  return (
    <AbstractProfile />
  )
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Custom Address</h3>
            <p className="text-muted-foreground">
              Display a profile for a specific wallet address:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { AbstractProfile } from "@/components/abstract-profile"

export default function CustomAddressProfile() {
  return (
    <AbstractProfile address="0x06639F064b82595F3BE7621F607F8e8726852fCf" />
  )
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Size Variants</h3>
            <p className="text-muted-foreground">
              The component supports three size variants:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { AbstractProfile } from "@/components/abstract-profile"

export default function ProfileSizes() {
  return (
    <div className="flex items-center gap-4">
      <AbstractProfile size="sm" />
      <AbstractProfile size="md" />
      <AbstractProfile size="lg" />
    </div>
  )
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Custom Styling</h3>
            <p className="text-muted-foreground">
              Override the tier-based border color with a custom color:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { AbstractProfile } from "@/components/abstract-profile"

export default function CustomStyledProfile() {
  return (
    <AbstractProfile
      shineColor="#8B5CF6"
      fallback="JS"
    />
  )
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Without Tooltip</h3>
            <p className="text-muted-foreground">
              Disable the tooltip that shows the display name:
            </p>
            <pre className="rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto">
              <code>
                {`import { AbstractProfile } from "@/components/abstract-profile"

export default function ProfileWithoutTooltip() {
  return (
    <AbstractProfile showTooltip={false} />
  )
}`}
              </code>
            </pre>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Using Hooks Directly
            </h3>
            <Card className="p-6 border-border">
              <pre className="text-sm text-foreground overflow-x-auto">
                <code>
                  {`"use client";

import { useAbstractProfile } from "@/hooks/use-abstract-profile";
import { getTierName } from "@/lib/tier-colors";

export default function ProfileDataDemo() {
  const { data: profile, isLoading, error } = useAbstractProfile();

  if (error) {
    return <div className="text-red-500">Failed to load profile</div>;
  }

  return (
    <div className="space-y-6">
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Connected Wallet Profile</h3>
        {isLoading ? (
          <div className="animate-pulse">Loading profile...</div>
        ) : profile ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">{profile.user.name}</p>
                <p className="text-sm text-muted-foreground">
                  {getTierName(profile.user.tier)} Tier •{" "}
                  {profile.user.badges.length} badges
                </p>
              </div>
            </div>

            {profile.user.description && (
              <p className="text-sm">{profile.user.description}</p>
            )}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No profile found for connected wallet
          </p>
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
            <h2 className="text-2xl font-bold text-foreground">What's included</h2>
            <p className="text-muted-foreground">
              This command installs the following files:
            </p>

            <div className="space-y-4">
              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  components/abstract-profile.tsx
                </h3>
                <p className="text-sm text-muted-foreground">
                  The main profile component with tier-based styling.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  hooks/use-abstract-profile.ts
                </h3>
                <p className="text-sm text-muted-foreground">
                  React Query hooks for fetching profile data.
                </p>
              </Card>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  lib
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>get-user-profile.ts - API utility for fetching profiles</li>
                  <li>tier-colors.ts - Tier color mapping utilities</li>
                  <li>address-utils.ts - Address formatting utilities</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              abstract-profile.tsx
            </h3>
            <p className="text-muted-foreground">
              A profile component that displays user profile pictures from
              Abstract Portal with automatic tier-based border styling, loading
              states, and fallback support.
            </p>
            <Card className="p-6 border-border">
              <p className="text-sm text-muted-foreground">
                Component source: registry/new-york/blocks/abstract-profile/abstract-profile.tsx
              </p>
            </Card>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Props</h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/30 text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2 text-left">Prop</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Default</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">address</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">undefined</td>
                    <td className="px-4 py-2">
                      Optional wallet address to display profile for (defaults to
                      connected wallet).
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">fallback</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">First 2 chars of address</td>
                    <td className="px-4 py-2">
                      Fallback text to display if image fails to load.
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">shineColor</td>
                    <td className="px-4 py-2">string</td>
                    <td className="px-4 py-2">Tier-based color</td>
                    <td className="px-4 py-2">
                      Custom border color (overrides tier color).
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">size</td>
                    <td className="px-4 py-2">"sm" | "md" | "lg"</td>
                    <td className="px-4 py-2">"md"</td>
                    <td className="px-4 py-2">Avatar size variant.</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2">showTooltip</td>
                    <td className="px-4 py-2">boolean</td>
                    <td className="px-4 py-2">true</td>
                    <td className="px-4 py-2">
                      Whether to show tooltip with display name on hover.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
