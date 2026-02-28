import { SimplePage } from "@/components/fugz/simple-page"

export default function WorkbenchPage() {
  return (
    <SimplePage
      kicker="Workbench"
      title="Experiments stay tight."
      subtitle="Prototypes and tests before they graduate to products."
      sections={[
        {
          title: "In Progress",
          items: [
            { title: "Material Studies", description: "Fabric tests and dye trials." },
            { title: "Lore Modules", description: "Narrative experiments and visual cues." },
          ],
        },
      ]}
    />
  )
}
