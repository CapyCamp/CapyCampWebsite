import { SimplePage } from "@/components/fugz/simple-page"

export default function NotesPage() {
  return (
    <SimplePage
      kicker="Notes"
      title="Short dispatches from the camp."
      subtitle="Quiet updates and working ideas, released when ready."
      sections={[
        {
          title: "Latest",
          items: [
            { title: "Field Log", description: "Design decisions and drop rationale." },
            { title: "Studio Notes", description: "Material tests, prototypes, and QA." },
          ],
        },
      ]}
    />
  )
}
