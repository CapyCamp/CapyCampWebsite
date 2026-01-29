import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { roadmapPhases } from "@/lib/capycamp-data"
import { CheckCircle2, Circle, ArrowRight } from "lucide-react"

export default function RoadmapPage() {
  const getStatusIcon = (status: string) => {
    if (status === "Shipped") return <CheckCircle2 className="w-6 h-6 text-primary" />
    if (status === "In Progress") return <CheckCircle2 className="w-6 h-6 text-accent" />
    return <Circle className="w-6 h-6 text-muted-foreground" />
  }

  const getStatusColor = (status: string) => {
    if (status === "Shipped") return "bg-primary/10 text-primary border-primary/20"
    if (status === "In Progress") return "bg-accent/10 text-accent border-accent/20"
    return "bg-muted/50 text-muted-foreground border-muted"
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Camp Phases
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our roadmap from foundations to long-term IP expansion. Each phase builds on the last, unlocking new utilities and experiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-accent" />

            {/* Phases */}
            <div className="space-y-12">
              {roadmapPhases.map((phase, idx) => (
                <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-14 h-14 rounded-full border-4 border-background flex items-center justify-center -translate-x-7 md:-translate-x-1/2 bg-background">
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 ml-20 md:ml-0">
                    <Card className={`p-8 border-2 ${getStatusColor(phase.status)} hover-lift transition-all`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                            {phase.phase}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-xs font-semibold border whitespace-nowrap ${getStatusColor(phase.status)}`}>
                          {phase.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Objectives */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                          Objectives
                        </h4>
                        <ul className="space-y-2">
                          {phase.objectives.map((obj, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="text-primary flex-shrink-0 mt-0.5">▸</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-6 pb-6 border-b border-border">
                        <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                          Deliverables
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.deliverables}</p>
                      </div>

                      {/* Holder Benefit */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">
                          Scout Benefit
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.holderBenefit}</p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Long-term Vision */}
          <div className="mt-16 pt-16 border-t border-border">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">Beyond Phase 5</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our vision extends far beyond the initial roadmap. Future possibilities include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Multi-season storytelling with branching narratives",
                  "CapyCamp mini-games and interactive experiences",
                  "Licensed merchandise and collaborations",
                  "Community-owned governance and treasuries",
                  "Integration with other Web3 projects and brands",
                  "Global expansion of IRL events and activations",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </ul>
              <p className="text-muted-foreground italic">
                The story of CapyCamp is just beginning. Join us as we write the next chapter together.
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Join the Journey?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/mint">
                  Mint a Scout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/story">
                  Read the Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
