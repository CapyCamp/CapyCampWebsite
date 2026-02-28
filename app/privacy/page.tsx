import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SimplePage } from "@/components/fugz/simple-page"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <SimplePage
          kicker="Privacy"
          title="Clean data. Minimal collection."
          subtitle="We only collect what we need to run the camp."
          sections={[
            {
              title: "What We Store",
              items: [
                { title: "Email", description: "If you opt in. Nothing else." },
                { title: "Wallet", description: "Only when you connect or sign up." },
              ],
            },
            {
              title: "What We Don’t",
              items: [
                { title: "No selling", description: "We do not sell your data. Period." },
                { title: "No noise", description: "We keep data handling as light as our design." },
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
