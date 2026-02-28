import { SimplePage } from "@/components/fugz/simple-page"

export default function IntroductionPage() {
  return (
    <SimplePage
      kicker="Introduction"
      title="Start here."
      subtitle="CapyCamp is a culture brand with onchain receipts."
      sections={[
        {
          title: "Essentials",
          items: [
            { title: "Brand", description: "A premium identity rooted in Scout lore." },
            { title: "Community", description: "Small by design. Taste by default." },
          ],
        },
      ]}
    />
  )
}
