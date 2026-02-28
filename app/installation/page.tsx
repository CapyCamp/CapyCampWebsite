import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SimplePage } from "@/components/fugz/simple-page"

export default function InstallationPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <SimplePage
          kicker="Setup"
          title="Keep the stack minimal."
          subtitle="We prefer clean installs, light dependencies, and simple config."
          sections={[
            {
              title: "Requirements",
              items: [
                { title: "Next.js", description: "App Router, no extra layers." },
                { title: "Tailwind", description: "Utility-first, lean output." },
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
