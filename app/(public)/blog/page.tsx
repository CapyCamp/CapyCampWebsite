import { SimplePage } from "@/components/fugz/simple-page"

export default function BlogPage() {
  return (
    <SimplePage
      kicker="Journal"
      title="Notes from the camp."
      subtitle="Longer form updates when there’s real signal."
      sections={[
        {
          title: "Recent",
          items: [
            { title: "Brand Positioning", description: "Why we lead with design and story." },
            { title: "Drop Philosophy", description: "Limited, slow, intentional." },
          ],
        },
      ]}
    />
  )
}
