import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  heroSection,
  trustRow,
  whatIsCapyCamp,
  scoutPerks,
  roadmapPhases,
  irlGlamping,
  siteConfig,
} from "@/lib/capycamp-data"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/30 via-black/20 to-black/30">
          <div className="max-w-5xl w-full text-center space-y-6 sm:space-y-8 py-16 sm:py-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/20 bg-primary/5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Abstract Chain • 3,333 Scouts
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-outline-strong">
              {heroSection.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-outline-strong">
              {heroSection.subtitle}
            </p>

            {/* Trust Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-6 sm:py-8 px-4 rounded-xl bg-muted/30 border border-muted max-w-sm sm:max-w-none mx-auto">
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Chain</div>
                <div className="text-base sm:text-lg font-semibold text-foreground">{trustRow.chain}</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Supply</div>
                <div className="text-base sm:text-lg font-semibold text-foreground">{trustRow.supply}</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Status</div>
                <div className="text-base sm:text-lg font-semibold text-accent">{trustRow.status}</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={heroSection.ctaLink1}>
                  {heroSection.cta1}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={heroSection.ctaLink2}>
                  {heroSection.cta2}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is CapyCamp */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What is CapyCamp?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Five pillars of the Scout universe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {whatIsCapyCamp.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-white/5 border-white/10 backdrop-blur-md hover:shadow-lg hover:border-primary/20 transition-all hover-lift"
                >
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Scout Perks Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Scout Perks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What you get as a Scout holder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scoutPerks.map((perk, idx) => (
                <Card
                  key={idx}
                  className="p-8 bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/30 transition-colors hover-lift"
                >
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{perk.title}</h3>
                  <p className="text-muted-foreground">{perk.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/mint">
                  Mint a Scout Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Camp Phases</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our roadmap from foundation to long-term IP evolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmapPhases.slice(0, 4).map((phase, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-white/5 border-white/10 backdrop-blur-md hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.phase}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        phase.status === "In Progress"
                          ? "bg-accent/20 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/roadmap">
                  View Full Roadmap
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* IRL Glamping Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/20 to-black/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{irlGlamping.title}</h2>
              <p className="text-lg text-muted-foreground">{irlGlamping.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {irlGlamping.formats.map((format, idx) => (
                <Card
                  key={idx}
                  className="p-8 bg-white/5 border-white/10 backdrop-blur-md hover-lift"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{format.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{format.description}</p>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div>📍 {format.location}</div>
                    <div>👥 {format.capacity}</div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/glamping">
                  Explore IRL Experiences
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Community CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Join the Troop</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the Scout universe. Connect with our community, stay updated on mint, and explore what CapyCamp is building.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-muted text-muted-foreground border border-muted cursor-not-allowed opacity-60 pointer-events-none"
              >
                <a
                  href={siteConfig.links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled="true"
                  tabIndex={-1}
                >
                  Join Discord
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer">
                  Follow Twitter
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
