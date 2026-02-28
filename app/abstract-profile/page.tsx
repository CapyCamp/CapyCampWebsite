import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SimplePage } from "@/components/fugz/simple-page"

export default function AbstractProfilePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <SimplePage
          kicker="Profile"
          title="Scout identity, kept clean."
          subtitle="A quiet profile surface for holders and contributors."
          sections={[
            {
              title: "Status",
              items: [
                { title: "Tier", description: "Shows your camp standing without noise." },
                { title: "Badges", description: "Lightweight signals tied to real participation." },
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
