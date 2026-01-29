'use client';

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { safetyTips } from "@/lib/capycamp-data"
import { AlertTriangle, CheckCircle2, ShieldAlert, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              How to Mint Safely
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your security is our priority. Follow these guidelines to protect yourself and ensure a safe minting experience.
            </p>
          </div>

          {/* Critical Warning */}
          <Card className="p-8 mb-12 border-2 border-accent/50 bg-accent/5">
            <div className="flex gap-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Critical: Verify Everything</h3>
                <p className="text-muted-foreground">
                  The Web3 space has many scammers. Always verify the official contract address, double-check URLs, and never rush. When in doubt, ask in Discord before proceeding.
                </p>
              </div>
            </div>
          </Card>

          {/* Safety Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {safetyTips.map((tip, idx) => (
              <Card key={idx} className="p-6 border-border hover-lift">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </Card>
            ))}
          </div>

          {/* Official Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Official Links</h2>
            <Card className="p-8 border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-6 border-b border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Website</h4>
                    <code className="text-sm bg-muted px-3 py-1 rounded block w-fit text-foreground">
                      capycamp.xyz
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-6 border-b border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Twitter</h4>
                    <code className="text-sm bg-muted px-3 py-1 rounded block w-fit text-foreground">
                      @capycampxyz
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Discord</h4>
                    <code className="text-sm bg-muted px-3 py-1 rounded block w-fit text-foreground">
                      discord.gg/capycamp
                    </code>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Common Scams */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Scams to Avoid</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Phishing Websites",
                  description:
                    "Scammers create fake websites that look identical to the real mint page. Always bookmark the official site and check the URL carefully.",
                },
                {
                  title: "Fake Discord Invites",
                  description:
                    "Never click invite links from DMs or unverified sources. Join only through the official link in verified channels.",
                },
                {
                  title: "Impersonator Accounts",
                  description:
                    "Scammers impersonate team members on Twitter and Discord. Check for verified badges and official handles.",
                },
                {
                  title: "Malicious Contracts",
                  description:
                    "Approving unverified contracts can drain your wallet. Always verify the contract address matches our documentation.",
                },
                {
                  title: "Gas Token Scams",
                  description:
                    "Avoid buying 'gas' from unknown sources. Gas is paid directly to the network, not through third parties.",
                },
                {
                  title: "Too-Good-To-Be-True Offers",
                  description:
                    "If someone offers guaranteed profit, free Scouts, or special deals, it's a scam. CapyCamp never makes such promises.",
                },
              ].map((scam, idx) => (
                <Card key={idx} className="p-6 border-border">
                  <div className="flex gap-4">
                    <ShieldAlert className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{scam.title}</h4>
                      <p className="text-sm text-muted-foreground">{scam.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-transparent">
                <Lightbulb className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-4">Before Minting</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Create a fresh wallet or use dedicated mint wallet</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Transfer only necessary funds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Disable browser extensions temporarily</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Test transaction with small amount first</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border bg-gradient-to-br from-accent/5 to-transparent">
                <Lightbulb className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-4">During Minting</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Never approve unlimited token transfers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Check gas price—extreme fees may indicate issues</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Verify contract address one more time</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>Don't rush—take your time to verify everything</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Support */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">If Something Goes Wrong</h2>
            <Card className="p-8 border-border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transaction Failed</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Check your wallet balance and ensure you have enough for gas. Look up the transaction on the Abstract block explorer.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-2">Uncertain About a Link</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Post the link in Discord and ask the moderators before clicking. We're happy to verify.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-2">Suspect You've Been Scammed</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Report the scam to Discord moderators immediately. Document the evidence and share what happened so we can warn others.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-2">General Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Join our Discord and reach out to support channel. Include transaction hash if applicable.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Final CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Mint Safely?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community, ask any questions you have, and mint with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#" onClick={() => alert("Join Discord: discord.gg/capycamp")}>
                  Join Discord
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/mint">
                  Go to Mint
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
