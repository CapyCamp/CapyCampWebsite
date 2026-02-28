import { SimplePage } from "@/components/fugz/simple-page"

export default function ProjectsPage() {
  return (
    <SimplePage
      kicker="Projects"
      title="Small drops. Sharp execution."
      subtitle="Selected work and experiments from the camp."
      sections={[
        {
          title: "Collection",
          items: [
            { title: "Field Kits", description: "Limited utility objects, finished like product." },
            { title: "Scout Wear", description: "Apparel capsules with clean brand signal." },
          ],
        },
      ]}
    />
  )
}
