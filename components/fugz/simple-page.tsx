import { PageGrid, PageHero, PageSection } from "@/components/fugz/page-shell"

type SimpleSection = {
  title: string
  lead?: React.ReactNode
  items?: { title: string; description: React.ReactNode }[]
}

type SimplePageProps = {
  kicker?: string
  title: string
  subtitle?: string
  sections: SimpleSection[]
}

export function SimplePage({ kicker, title, subtitle, sections }: SimplePageProps) {
  return (
    <>
      <PageHero kicker={kicker} title={title} subtitle={subtitle} />
      {sections.map((section) => (
        <PageSection key={section.title} title={section.title} lead={section.lead}>
          {section.items ? <PageGrid items={section.items} /> : null}
        </PageSection>
      ))}
    </>
  )
}
