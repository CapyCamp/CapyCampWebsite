import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { PageHero, PageSection } from "@/components/fugz/page-shell"
import { cn } from "@/lib/utils"

const CHAPTERS = [
  {
    id: "ch1",
    number: "CHAPTER 1",
    title: "The Camp Opens",
    subtitle: "The clearing appears",
    body: `A clearing appears where no clearing should exist: half in the internet, half in someone's suspiciously convenient imagination.

One second it's empty. The next? A fully-formed camp sign is hammered into the ground like it's been there forever:

CAPYCAMP
(No refunds. No explanations. No running.)

There are tents - too perfect to trust. There's a path - too inviting to be safe. And there's a lake that reflects the sky incorrectly, like it's rendering the wrong timeline on purpose.

Then the first Scouts arrive.

Not on foot. Not by wagon. Not by anything normal.

They arrive as 3,333 little glitches in reality, each holding a mint like it's a ticket, a key, and a mildly irresponsible decision all at once. The mint doesn't just give them an NFT. It gives them a camp identity - a membership card to a place that technically shouldn't exist... but behaves like it absolutely does.

The welcoming committee is already there.

A line of capybaras stand at the entrance wearing counselor whistles and expressions that say:

"We were told to 'act professional' but nobody here can read."

One capy holds a clipboard upside down. Another one stamps wrists with an ink pad that says "TRUSTED (probably)". A third capy - clearly the operations lead - has a lanyard that just says "ELDER???" with three question marks, like they printed the title before HR approved it.

The Scouts step in. The air smells like pine needles, marshmallows, and absolutely minimal oversight.

A counselor clears their throat and begins the camp orientation:

Cabins? None. Too structured.

Tents? Yes. But the tents are alive in a "don't talk about it" way.

Rules? Also none. But somehow you will still break them.

Safety? A vibe, not a policy.

Someone asks, "So what is CapyCamp exactly?"

The counselors exchange glances like they weren't told that part.

Finally, the Elder with the "ELDER???" badge steps forward and says:

"CapyCamp is a community. A story. A living campfire.
And also a logistical nightmare.
Congratulations. You are early."

The Scouts build the first campfire - no matches, no flint, no reason. It just ignites when enough people believe in it. The fire crackles like a group chat. Someone starts telling a story. Someone else swears they heard the forest laugh.

And as the night settles in, the camp sign flickers once, like it's updating.

CAPYCAMP: PHASE ONE IS LIVE.
GOOD LUCK, SCOUTS.
YOU'LL NEED IT.`,
  },
  {
    id: "ch2",
    number: "CHAPTER 2",
    title: "The Scout Oath",
    subtitle: "The pledge gets weird",
    body: null,
  },
  {
    id: "ch3",
    number: "CHAPTER 3",
    title: "Mystery Forest",
    subtitle: "The forest watches back",
    body: null,
  },
  {
    id: "ch4",
    number: "CHAPTER 4",
    title: "Elders, Counselors & Rival Troops",
    subtitle: "Roles without ranks",
    body: null,
  },
  {
    id: "ch5",
    number: "CHAPTER 5",
    title: "The Great Glampening",
    subtitle: "The camp goes IRL",
    body: null,
  },
] as const

const LORE_ARTIFACTS = [
  { type: "Polaroid", title: "Scout's First Campfire", description: "A moment frozen in time: the first Scout gathering at CapyCamp." },
  { type: "Badge", title: "Camper's Badge", description: "Awarded for completing your first quest and joining a squad." },
  { type: "Document", title: "Scout Oath (Unofficial)", description: "The hilarious, heartfelt oath every Scout swears upon arrival." },
  { type: "Map", title: "Mystery Forest Guide", description: "A map of quests, hidden content, and lore breadcrumbs." },
] as const

function ChapterContent({ body }: { body: string }) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean)
  return (
    <div className="space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed">
      {paragraphs.map((block, i) => {
        const trimmed = block.trim()
        const isAllCapsSign =
          trimmed.length < 200 &&
          /^[A-Z0-9\s\.\:\?\(\)\,\']+$/.test(trimmed) &&
          (trimmed.includes("CAPYCAMP") || trimmed.includes("PHASE") || trimmed.includes("SCOUTS"))
        const isElderQuote =
          trimmed.includes("CapyCamp is a community") || trimmed.startsWith('"')
        if (isAllCapsSign) {
          return (
            <p key={i} className="font-mono text-center py-2 text-foreground/90">
              {trimmed}
            </p>
          )
        }
        if (isElderQuote) {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-primary/50 pl-4 py-1 italic text-foreground/85 whitespace-pre-line"
            >
              {trimmed.replace(/^"|"$/g, "")}
            </blockquote>
          )
        }
        return (
          <p key={i}>
            {trimmed}
          </p>
        )
      })}
    </div>
  )
}

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-20">
        <PageHero
          kicker="Story"
          title="The Story of CapyCamp"
          subtitle="Five chapters of lore, mystery, and community. Read on to discover where the Scout universe is heading."
        />

        {/* Intro */}
        <section className="py-10 sm:py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-2xl space-y-5 text-center">
              <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
                CapyCamp isn&apos;t just an NFT collection. It&apos;s an expanding universe with real
                lore, genuine stakes, and a community that&apos;s shaping its future.
              </p>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                Below is the official story as it unfolds. Each chapter represents a phase of
                CapyCamp&apos;s evolution. As new Scouts join and the community grows, the story
                branches into countless personal narratives.
              </p>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-12 sm:space-y-16 pb-12">
          {CHAPTERS.map((ch) => (
            <article key={ch.id} id={ch.id}>
              <div className="flex flex-col items-center text-center mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
                  {ch.number}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground/95 mt-1">
                  {ch.title}
                </h2>
                <p className="text-sm text-foreground/70 mt-1">{ch.subtitle}</p>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 sm:p-8 shadow-lg text-left">
                {ch.body ? (
                  <ChapterContent body={ch.body} />
                ) : (
                  <p className="text-foreground/60 text-sm italic text-center py-8">
                    Coming soon.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Lore Artifacts */}
        <PageSection
          title="Lore Artifacts"
          lead="Items from the Scout universe."
        >
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {LORE_ARTIFACTS.map((item) => (
              <div
                key={item.title}
                className={cn(
                  "rounded-[2.5rem_2rem_2.5rem_2rem] border border-white/30 bg-white/70 backdrop-blur-xl p-5 sm:p-6 shadow-xl text-left",
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-foreground/95 mt-1">{item.title}</h3>
                <p className="text-sm text-foreground/75 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* What Comes Next */}
        <PageSection
          title="What Comes Next?"
          lead="Chapters 6 and beyond are being written by the Scouts themselves."
        >
          <div className="mx-auto max-w-2xl space-y-5 text-center">
            <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">
              Your participation, creativity, and community will shape what CapyCamp becomes.
              Future possibilities include mini-games, story seasons, collaborative world-building,
              and experiences we haven&apos;t even imagined yet.
            </p>
            <p className="text-foreground/90 text-sm sm:text-base font-medium">
              This is a living story. Join us and help write the next chapter.
            </p>
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  )
}
