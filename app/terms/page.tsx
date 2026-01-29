import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <Card className="p-8 space-y-6 border-border">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By minting, purchasing, or holding CapyCamp Scouts NFTs, you agree to these terms and conditions. CapyCamp is a creative project and community experience. Scout NFTs are digital collectibles and do not represent ownership of physical assets or equity in any company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Risks and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CapyCamp is a Web3 project involving blockchain transactions and NFTs. This involves risks including:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li>• Loss of funds due to network issues or user error</li>
                <li>• Volatility in NFT market value and resale prices</li>
                <li>• Smart contract risks and potential vulnerabilities</li>
                <li>• No guaranteed returns or utility guarantees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Community Guidelines</h2>
              <p className="text-muted-foreground leading-relaxed">
                CapyCamp is built on respect, creativity, and good faith. Participation in events, Discord, and community activities requires adherence to our Code of Conduct. Harassment, discrimination, and bad-faith behavior will result in removal from community spaces.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                CapyCamp branding, artwork, and story content are owned or licensed by CapyCamp. Scouts may display their Scout NFTs personally but cannot commercially reproduce CapyCamp IP without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. No Financial Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                CapyCamp does not provide financial advice. The decision to mint or purchase Scouts is entirely your own. Do your own research and do not invest more than you can afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify terms at any time. Continued participation constitutes acceptance of updated terms. Significant changes will be announced in Discord.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Last updated: {new Date().toLocaleDateString()}. For full legal terms, please contact us via Discord.
              </p>
            </section>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
