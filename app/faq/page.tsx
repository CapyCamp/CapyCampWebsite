import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { SimplePage } from "@/components/fugz/simple-page"

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <SimplePage
          kicker="FAQ"
          title="Short answers, clean signal."
          subtitle="Everything you need to know, without the noise."
          sections={[
            {
              title: "The Basics",
              items: [
                { title: "What is CapyCamp?", description: "A culture-first brand built around the Scout universe." },
                { title: "Why 3,333?", description: "A deliberate size: premium, but still alive." },
              ],
            },
            {
              title: "Access",
              items: [
                { title: "Whitelist", description: "WL access routes through the camp — sign up and stay close." },
                { title: "Drops", description: "Limited and intentional. No filler releases." },
              ],
            },
          ]}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
