import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import NftCarousel from "@/components/nft-carousel"
import { PageGrid, PageHero, PageSection } from "@/components/fugz/page-shell"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <PageHero
          kicker="CapyCampOfficial"
          title="3,333 Scouts. Zero Supervision."
          titleImage="/2374.png"
          subtitle={
            <>
              <span className="block">Onchain membership. IRL energy.</span>
              <span className="block">Leadership we’re still evaluating.</span>
            </>
          }
          ctaLabel="Sneak Into the Camp →"
          ctaHref="/wl-signup"
          ctaHoverText="This is where it starts."
          secondaryCtaLabel="Read the Scout Code"
          secondaryCtaHref="/story"
        />

        <NftCarousel />

        <PageSection
          title="THE CAMP"
          lead={
            <>
              <span className="block text-foreground/70 text-xs uppercase tracking-[0.35em]">
                (No adults. We checked.)
              </span>
              <span className="block mt-3">We’re building something real.</span>
              <span className="block">We just refuse to look serious while doing it.</span>
            </>
          }
        >
          <PageGrid
            items={[
              { title: "SCOUT CULTURE", image: "/poses/1.png", description: (
                  <>
                    <span className="block">A small group of internet adults</span>
                    <span className="block">with access to tools</span>
                    <span className="block">and absolutely no supervision.</span>
                    <span className="block">We thought this was fine.</span>
                  </>
                ) },
              { title: "LORE-FIRST", image: "/poses/2.png", description: (
                  <>
                    <span className="block">There’s lore.</span>
                    <span className="block">We will not be hosting a webinar about it.</span>
                  </>
                ) },
              { title: "NO NOISE", image: "/poses/3.png", description: (
                  <>
                    <span className="block">No “gm” farming.</span>
                    <span className="block">No fake countdown timers.</span>
                    <span className="block">Just signal.</span>
                  </>
                ) },
              { title: "PHYSICAL + DIGITAL", image: "/poses/4.png", description: (
                  <>
                    <span className="block">IRL energy.</span>
                    <span className="block">Onchain proof.</span>
                    <span className="block">Campfire debates that escalate fast.</span>
                    <span className="block">Someone always brings charts.</span>
                  </>
                ) },
            ]}
          />
        </PageSection>

        <PageSection
          title="NO.CAP"
          lead={
            <>
              <span className="block text-foreground/70 text-xs uppercase tracking-[0.35em]">
                (Yes, we’re serious. Unfortunately.)
              </span>
              <span className="block mt-3">The part of CapyCamp your parents wouldn’t understand.</span>
            </>
          }
        >
          <PageGrid
            items={[
              { title: "STREETWEAR", image: "/poses/5.png", description: (
                  <>
                    <span className="block">Streetwear.</span>
                    <span className="block">Artifacts.</span>
                    <span className="block">Bad timing.</span>
                  </>
                ) },
              { title: "ARTIFACTS", image: "/poses/6.png", description: (
                  <>
                    <span className="block">Objects with lore.</span>
                    <span className="block">And emotional attachment issues.</span>
                  </>
                ) },
              { title: "UNIFORM", image: "/poses/1.png", description: (
                  <>
                    <span className="block">Built for real life.</span>
                    <span className="block">Quiet signal.</span>
                    <span className="block">Loud personality.</span>
                  </>
                ) },
              { title: "DROPS", image: "/poses/2.png", description: (
                  <>
                    <span className="block">Limited.</span>
                    <span className="block">Mostly because we forgot to make more.</span>
                  </>
                ) },
            ]}
          />
        </PageSection>

        <PageSection
          title="SCOUT SYSTEM"
          lead={
            <span className="block text-foreground/70 text-xs uppercase tracking-[0.35em]">
              Reputation &gt; “like &amp; retweet”
            </span>
          }
        >
          <PageGrid
            items={[
              { title: "ENTRY", image: "/poses/3.png", description: (
                  <>
                    <span className="block">Whitelist isn’t a raffle.</span>
                    <span className="block">It’s a vibe check.</span>
                    <span className="block">We can’t explain it.</span>
                    <span className="block">We just know.</span>
                  </>
                ) },
              { title: "ROLES", image: "/poses/4.png", description: (
                  <>
                    <span className="block">Badges reflect real participation.</span>
                    <span className="block">Not copy-pasted enthusiasm.</span>
                  </>
                ) },
              { title: "IRL", image: "/poses/5.png", description: (
                  <>
                    <span className="block">Pop-ups.</span>
                    <span className="block">Retreats.</span>
                    <span className="block">At least one poorly planned group photo.</span>
                  </>
                ) },
              { title: "LONG GAME", image: "/poses/6.png", description: (
                  <>
                    <span className="block">We ship slowly.</span>
                    <span className="block">Because we argue first.</span>
                    <span className="block">Then we build it anyway.</span>
                  </>
                ) },
            ]}
          />
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  )
}
