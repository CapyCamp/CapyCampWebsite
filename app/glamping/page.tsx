import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"

export default function GlampingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            IRL Glamping
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-foreground">
            Coming Soon
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The IRL glamping experience is getting ready. Check back soon for
            dates, locations, and Scout access details.
          </p>
        </div>
      </main>
      <img
        src="/comingsoon.png"
        alt=""
        aria-hidden="true"
        className="fixed bottom-0 left-1/2 z-10 w-56 -translate-x-1/2 pointer-events-none select-none md:w-72"
      />
      <SiteFooter />
    </div>
  )
}
