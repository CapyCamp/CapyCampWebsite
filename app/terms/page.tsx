import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SimplePage } from "@/components/fugz/simple-page"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <SimplePage
          kicker="Terms"
          title="Clear rules. Quiet tone."
          subtitle="We keep terms short and readable. No surprise clauses."
          sections={[
            {
              title: "Use",
              items: [
                { title: "Respect", description: "No spam, fraud, or misuse of the camp." },
                { title: "Ownership", description: "You own your wallet, we own the brand assets." },
              ],
            },
            {
              title: "Updates",
              items: [
                { title: "Change log", description: "We update terms responsibly and notify when needed." },
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
