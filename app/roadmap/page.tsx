import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { PageHero, PageSection } from "@/components/fugz/page-shell"
import { cn } from "@/lib/utils"

const PHASES = [
  {
    phase: "Phase 0",
    phaseLabel: "PHASE 0",
    title: "FOUNDATIONS",
    status: "In Progress",
    statusClass: "bg-emerald-500/25 text-emerald-800 dark:text-emerald-200",
    description: "Building the core: smart contract, community setup, brand launch.",
    objectives: [
      "Deploy verified smart contract on Abstract",
      "Establish Discord and community channels",
      "Complete brand guidelines and assets",
    ],
    deliverables: "Contract transparency dashboard, Community hub, Brand kit",
    scoutBenefit: "Early access and whitelisting opportunities",
    overlaySide: "right" as const,
  },
  {
    phase: "Phase 1",
    phaseLabel: "PHASE 1",
    title: "RECRUIT SCOUTS",
    status: "Planned",
    statusClass: "bg-foreground/15 text-foreground/80",
    description: "Mint opening and Scout onboarding.",
    objectives: [
      "Launch public mint with whitelist phases",
      "Onboard 3,333 Scout holders",
      "Deploy holder portal beta",
    ],
    deliverables: "Live mint page, Onboarding flow, Portal v1",
    scoutBenefit: "Initial Scout identity and portal access",
    overlaySide: "left" as const,
  },
  {
    phase: "Phase 2",
    phaseLabel: "PHASE 2",
    title: "CAMP SYSTEMS",
    status: "Planned",
    statusClass: "bg-foreground/15 text-foreground/80",
    description: "Quests, roles, and gamification launch.",
    objectives: [
      "Deploy quest system with badges",
      "Activate Scout squad roles",
      "Launch community voting",
    ],
    deliverables: "Quest system, Badge NFTs, Voting interface",
    scoutBenefit: "Earn rewards through participation",
    overlaySide: "right" as const,
  },
  {
    phase: "Phase 3",
    phaseLabel: "PHASE 3",
    title: "IRL CAMPGROUNDS",
    status: "Planned",
    statusClass: "bg-foreground/15 text-foreground/80",
    description: "First glamping events and real-world activation.",
    objectives: [
      "Host first CapyCamp glamping weekend",
      "Launch city pop-up events",
      "Activate merchandise drops",
    ],
    deliverables: "Event platform, RSVP system, Merch store",
    scoutBenefit: "Exclusive event access and IRL experiences",
    overlaySide: "left" as const,
  },
  {
    phase: "Phase 4",
    phaseLabel: "PHASE 4",
    title: "EXPANSION",
    status: "Planned",
    statusClass: "bg-foreground/15 text-foreground/80",
    description: "Collaborations, partnerships, and media.",
    objectives: [
      "Launch strategic collaborations",
      "Expand merchandise and collectibles",
      "Launch CapyCamp media and content",
    ],
    deliverables: "Collab NFTs, Media library, Expanded merch",
    scoutBenefit: "Exclusive partnership benefits",
    overlaySide: "right" as const,
  },
  {
    phase: "Phase 5",
    phaseLabel: "PHASE 5",
    title: "LONG-TERM IP",
    status: "Planned",
    statusClass: "bg-foreground/15 text-foreground/80",
    description: "Story seasons, games, and licensing.",
    objectives: [
      "Deploy mini-games and experiences",
      "Launch Season 1 of CapyCamp story",
      "Explore creative licensing",
    ],
    deliverables: "Games, Story content, Licensing framework",
    scoutBenefit: "Deep engagement and creative ownership",
    overlaySide: "left" as const,
  },
] as const

const BEYOND_ITEMS = [
  "Multi-season storytelling with branching narratives",
  "CapyCamp mini-games and interactive experiences",
  "Licensed merchandise and collaborations",
  "Community-owned governance and treasuries",
  "Integration with other Web3 projects and brands",
  "Global expansion of IRL events and activations",
]

const DEFAULT_ROADMAP_BG = "/capyforest.png"

function PhaseBlock({
  phaseLabel,
  title,
  status,
  statusClass,
  description,
  objectives,
  deliverables,
  scoutBenefit,
  overlaySide,
  backgroundImage,
}: {
  phaseLabel: string
  title: string
  status: string
  statusClass: string
  description: string
  objectives: readonly string[]
  deliverables: string
  scoutBenefit: string
  overlaySide: "left" | "right"
  backgroundImage: string
}) {
  const panel = (
    <div className="relative rounded-2xl border border-white/20 bg-white/75 backdrop-blur-md shadow-xl p-6 sm:p-8 max-w-lg">
      {/* Timeline line and node - inside panel on the left edge */}
      <div className="absolute left-0 top-8 bottom-8 w-px bg-primary/60 rounded-full hidden sm:block" />
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-primary bg-white shadow-sm -translate-x-1/2 hidden sm:block" />

      <div className="pl-4 sm:pl-6">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            {phaseLabel}
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0",
              statusClass,
            )}
          >
            {status}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground/95 mb-3">
          {title}
        </h2>
        <p className="text-sm text-foreground/80 mb-5">{description}</p>

        <div className="space-y-4 text-sm">
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
              Objectives
            </h3>
            <ul className="space-y-1.5 text-foreground/80">
              {objectives.map((obj) => (
                <li key={obj} className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>
                    ▸
                  </span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
              Deliverables
            </h3>
            <p className="text-foreground/80">{deliverables}</p>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
              Scout Benefit
            </h3>
            <p className="text-foreground/80">{scoutBenefit}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] flex items-center overflow-hidden rounded-2xl">
      {/* Full-bleed background illustration */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      {/* Darken slightly so overlay text reads well */}
      <div className="absolute inset-0 bg-black/25" aria-hidden />
      {/* Content */}
      <div
        className={cn(
          "relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 flex",
          overlaySide === "right" ? "justify-end" : "justify-start",
        )}
      >
        {panel}
      </div>
    </section>
  )
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <PageHero
          kicker="Roadmap"
          title="Foundations to long-term IP."
          subtitle="Our roadmap from foundations to long-term IP expansion. Each phase builds on the last, unlocking new utilities and experiences."
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-6 sm:space-y-8 pb-8">
          {PHASES.map((p) => (
            <PhaseBlock
              key={p.phase}
              phaseLabel={p.phaseLabel}
              title={p.title}
              status={p.status}
              statusClass={p.statusClass}
              description={p.description}
              objectives={p.objectives}
              deliverables={p.deliverables}
              scoutBenefit={p.scoutBenefit}
              overlaySide={p.overlaySide}
              backgroundImage={DEFAULT_ROADMAP_BG}
            />
          ))}
        </div>

        <PageSection title="Beyond Phase 5" lead="Our vision extends far beyond the initial roadmap.">
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-3 text-sm text-foreground/80">
              {BEYOND_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary font-bold shrink-0" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-foreground/70 max-w-xl mx-auto">
              The story of CapyCamp is just beginning. Join us as we write the next chapter
              together.
            </p>
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  )
}
