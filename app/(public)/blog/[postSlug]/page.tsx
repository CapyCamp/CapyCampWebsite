import { PageHero, PageSection } from "@/components/fugz/page-shell"

type PageProps = {
  params: { postSlug: string }
}

export default function BlogPostPage({ params }: PageProps) {
  return (
    <>
      <PageHero
        kicker="Journal"
        title={params.postSlug.replace(/-/g, " ")}
        subtitle="This entry is being edited. Check back soon."
      />
      <PageSection
        title="Draft"
        lead="We publish when the writing is clean."
      />
    </>
  )
}
