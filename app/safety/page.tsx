import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SimplePage } from "@/components/fugz/simple-page"

export default function SafetyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <SimplePage
          kicker="Safety"
          title="Protect the camp."
          subtitle="Short, practical safety rules for every Scout."
          sections={[
            {
              title: "Signals",
              items: [
                { title: "Official links", description: "Only trust capycamp.xyz and verified socials." },
                { title: "Wallet hygiene", description: "Never share seed phrases. Ever." },
              ],
            },
            {
              title: "Common Scams",
              items: [
                { title: "Fake drops", description: "If it feels rushed, it’s probably fake." },
                { title: "Impostors", description: "We never DM first." },
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
