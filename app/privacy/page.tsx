import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <Card className="p-8 space-y-6 border-border">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                CapyCamp respects your privacy. This policy explains how we handle personal information collected through our website, Discord community, and events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect:</p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Wallet addresses for minting and verification</li>
                <li>• Email addresses for newsletter signups</li>
                <li>• Discord usernames and participation data</li>
                <li>• Event registration information</li>
                <li>• Usage analytics from website visits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use information to: facilitate minting and community participation, send updates and announcements, improve the CapyCamp experience, and comply with legal obligations. We never sell personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Blockchain and Public Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wallet addresses and blockchain transactions are publicly visible. Be aware that your Scout holdings are tied to publicly visible wallet addresses. We do not control blockchain data or privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Access personal data we hold</li>
                <li>• Request deletion of non-essential data</li>
                <li>• Opt out of communications</li>
                <li>• Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect personal information. However, no method is 100% secure. We cannot guarantee absolute security of any data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy concerns, contact us via Discord. We'll respond to requests within 30 days.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
