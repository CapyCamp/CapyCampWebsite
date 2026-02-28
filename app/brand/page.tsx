import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { PageGrid, PageHero, PageSection } from "@/components/fugz/page-shell"

const STREETWEAR_ITEMS = [
  { title: "Apparel", description: "Real cuts. Real quality. No fake drops." },
  { title: "Hats", description: "Caps that mean something. No gimmicks." },
  { title: "Collectibles", description: "Physical items with real weight." },
  { title: "Physical + Digital", description: "Onchain identity, offchain presence." },
]

const RULES = [
  { emoji: "🧭", title: "Tell the Truth", description: "No fake hype. If it's not ready, say it's not ready. The camp can handle it." },
  { emoji: "🧢", title: "No Cap, Literally", description: "If it feels forced, it's out. If it feels clean, it stays. Simple." },
  { emoji: "🔥", title: "Ship, Then Speak", description: "Announcements are earned. We prefer results over noise." },
  { emoji: "🏕️", title: "Lore > Marketing", description: "The story is the product. The capybaras are watching." },
]

const NOT_LIST = [
  "A mint page.",
  "A hype machine.",
  "A merch grab.",
  "A roadmap in disguise.",
]

export default function BrandPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <PageHero
          kicker="NO.CAP"
          preTitle={
            <div className="flex items-center justify-center">
              <img src="/branding/BWLOGO.png" alt="NO.CAP" className="h-14 w-auto sm:h-16" />
            </div>
          }
          title="A CapyCamp Brand. A Lifestyle Choice. A Warning Label."
          titleClassName="text-3xl sm:text-4xl md:text-5xl"
          subtitle="If it feels too clean, it's probably not ours."
        />

        {/* What Is NO.CAP? */}
        <PageSection title="What Is NO.CAP?" lead={null}>
          <div className="mx-auto max-w-2xl space-y-5 text-center">
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              NO.CAP is the honest side of CapyCamp. It is the part that refuses to pretend,
              over-promise, or pitch at people.
            </p>
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              It is a streetwear-first culture brand backed by lore, built by the camp, and worn
              by people who do not need a tagline to feel real.
            </p>
            <blockquote className="border-l-4 border-primary/50 pl-4 py-2 italic text-foreground/85 text-left my-6">
              &ldquo;If the capybaras say it is fine, it is probably fine.&rdquo;
            </blockquote>
          </div>
        </PageSection>

        {/* Yes. It's Streetwear. No, It's Not Cringe. */}
        <PageSection
          title="Yes. It's Streetwear. No, It's Not Cringe."
          lead={null}
        >
          <PageGrid items={STREETWEAR_ITEMS} />
        </PageSection>

        {/* Why Streetwear? */}
        <PageSection title="Why Streetwear?" lead={null}>
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              Culture lives offline. If the brand is only digital, it never becomes real.
            </p>
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              NO.CAP is the uniform for builders and creatives who prefer quiet confidence over
              loud credentials.
            </p>
            <p className="text-foreground/80 text-sm font-medium">
              Web3 without shouting &ldquo;crypto&rdquo;.
            </p>
          </div>
        </PageSection>

        {/* NO.CAP Rules */}
        <PageSection title="NO.CAP Rules" lead={null}>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {RULES.map((r) => (
              <div
                key={r.title}
                className="rounded-[2.5rem_2rem_2.5rem_2rem] border border-white/30 bg-white/70 backdrop-blur-xl p-5 sm:p-6 shadow-xl text-left"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl" aria-hidden>
                    {r.emoji}
                  </span>
                  <h3 className="text-lg font-bold text-foreground/95">{r.title}</h3>
                </div>
                <p className="text-sm text-foreground/75 pl-11">{r.description}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* What's Coming */}
        <PageSection title="What's Coming" lead={null}>
          <div className="mx-auto max-w-xl text-center space-y-3">
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              We are building this carefully. The pieces will show up when they are ready, not
              when they are loud.
            </p>
            <p className="text-foreground/90 font-semibold">Calm down.</p>
          </div>
        </PageSection>

        {/* What NO.CAP Is NOT */}
        <PageSection title="What NO.CAP Is NOT" lead={null}>
          <ul className="mx-auto max-w-md space-y-2 text-sm text-foreground/85">
            {NOT_LIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-foreground/70 shrink-0" aria-hidden>
                  ❌
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* NO.CAP Oath */}
        <PageSection title="NO.CAP Oath" lead={null}>
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <p className="text-foreground/90 text-sm sm:text-base leading-relaxed font-medium">
              I will not fake it. I will not oversell it. I will build it with the camp, wear it
              with intent, and speak only when it matters.
            </p>
            <p className="text-foreground/85 text-sm sm:text-base">
              NO.CAP isn&apos;t just something you say. It&apos;s something you wear.
            </p>
            <p className="text-foreground/80 text-sm italic">The capybaras are watching.</p>
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  )
}
