"use client"

import { useState } from "react"
import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StoryPage() {
  const chapters = [
    {
      num: 1,
      title: "The Camp Opens",
      subtitle: "The clearing appears",
      content: `A clearing appears where no clearing should exist: half in the internet, half in someone's suspiciously convenient imagination.

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
      num: 2,
      title: "The Scout Oath",
      subtitle: "The pledge gets weird",
      content: `By sunrise, it becomes clear that CapyCamp has a tradition:

Nobody leaves until they take the oath.

Not because it's mandatory.
Because the capybaras keep blocking the exit with the calm confidence of animals that have never faced consequences.

The Scouts gather at the Oath Log - a massive piece of wood engraved with something ancient and sacred:

"OATHS HERE. DRAMA ELSEWHERE."

A counselor in a tiny sash steps forward, raises a paw, and begins:

"Repeat after me. And please pronounce everything correctly.
Last group said 'CapyClamp' and we're still dealing with it."

The oath isn't heroic. It isn't noble. It isn't even grammatically consistent.
It's CapyCamp - a pledge written by capybaras who treat governance like improv.

So the Scouts swear:

"I solemnly vow to be slightly ridiculous,
deeply curious, and persistently kind.

I will seek badges not for power...
but for the psychological satisfaction of collecting shiny things.

I will support my squad, respect the Elders,
and absolutely ignore any capybaras offering 'shortcut quests.'

I will not panic when the forest whispers my wallet address.
I will not ask why the camp map keeps changing.

I will help build the story, grow the universe,
and show up when the camp needs me.

I will be a Scout."

At the end, the counselors nod with fake seriousness.

Then comes the weird part.

A capybaras walks down the line holding a tray of badges. Not metaphorical badges. Actual badges.

They're not earned yet. They're... pre-watching you, like the camp itself is betting on your future behavior.

The first ones appear:

Camper's Badge - for showing up and not immediately starting discourse.

Story Scout Badge - for contributing lore without making it cringe (rare).

Elder's Badge - not handed out, just sits there menacingly like a legendary item you're not high enough level to equip.

Someone asks, "What happens if we break the oath?"

A counselor smiles warmly.

"Nothing.
But the camp remembers."

And the fire crackles again, like it agrees.`,
    },
    {
      num: 3,
      title: "Mystery Forest",
      subtitle: "The forest watches back",
      content: `Every camp has a boundary.

CapyCamp has a line of trees that looks normal until you stare at it for more than three seconds. Then you realize the forest isn't just dark - it's watching.

There's a wooden sign near the edge:

MYSTERY FOREST
(Quests ahead. Return policy unclear.)

The counselors warn everyone.

Not in an intense way. More like they're trying not to laugh:

"Do not go in there alone.
Do not follow voices.
And if you see a capybaras wearing a cape,
that's not one of ours.
Probably."

But Scouts go anyway - because that's the whole point.

Inside, the air changes.
The trees lean closer. The path subtly rearranges itself behind you like the forest is doing light admin work.

And then the quests start appearing.

Not on a board. Not in a UI.

They appear in the dumbest possible ways:

A carved message on a rock: "TELL YOUR SCOUT STORY. MAKE IT GOOD."

A squirrel delivering a note: "BRING FIVE FRIENDS. YES, THIS IS A REFERRAL."

A puddle reflecting a riddle: "WHAT HAS NO CAP BUT STILL LIES?"
(The answer is "everyone," apparently.)

Some quests are simple. Others are... concerning.

One Scout swears they saw a lantern hanging from nothing, glowing purple, whispering:

"Badges aren't rewards.
They're permissions."

Another Scout claims they found a hidden artifact: a torn map, a Polaroid, and an acorn that felt heavier than physics would allow.

The deeper you go, the more the forest reveals.

Not secrets like "the camp has a roadmap."

Bigger secrets.

Like: CapyCamp isn't just being built by the founders.
It's being built by the Scouts.
And the forest is tracking the ones who participate.

The Mystery Forest doesn't punish you for leaving.

It just updates your file.

And when you return to camp, you'll notice something:

A badge slot you didn't have yesterday.

Empty.

Waiting.`,
    },
    {
      num: 4,
      title: "Elders, Counselors & Rival Troops",
      subtitle: "Roles without ranks",
      content: `CapyCamp runs on roles. Not ranks - roles.

Because ranks imply structure, and structure implies liability.

The Counselors are the frontline. They moderate, organize, and keep the camp from sliding completely into chaos. They speak in official announcements but their eyes say "we're improvising."

They host events like:

Campfire Nights (storytelling + mild psychological warfare)

Badge Runs (quests designed to be fun and oddly stressful)

The Weekly Oath Audit (a fake audit that still somehow feels real)

Then there are the Elders.

Nobody knows how the first Elders were chosen.
Some say they earned it through legendary contribution.
Others say they simply stayed awake long enough during a lore drop and the camp promoted them out of respect.

Elders don't rule. They advise.

They make decisions with the tone of someone who's seen things in the forest and is trying to protect you without explaining too much.

And then... the Rival Troops arrive.

Not enemies. Not villains.

Just other communities wandering in like:

"Nice camp. Would be a shame if someone...
out-earned your badges."

Rival Troops challenge CapyCamp in crossover quests, meme tournaments, story battles, scavenger hunts, and occasional diplomatic negotiations that always end with:

a handshake,

a punchline,

and someone accidentally summoning a new piece of lore.

The funniest part?

The Rival Troops think it's a competition.

CapyCamp treats it like camp entertainment.

Because the counselors know the truth:

"Every Troop that enters the ecosystem
eventually becomes part of the story."

CapyCamp doesn't conquer.

It recruits.

Even by accident.`,
    },
    {
      num: 5,
      title: "The Great Glampening",
      subtitle: "The camp goes IRL",
      content: `It starts as a rumor, like all dangerous ideas do.

Someone says:

"What if CapyCamp... was real?"

The counselors laugh. The Elders go quiet.
The Mystery Forest shifts slightly, like it's listening.

Then Phase 3 hits.

And the rumor becomes an announcement:

THE GREAT GLAMPENING IS COMING.
IRL.
YES, REALLY.

The Scouts think it'll be normal. A meetup. A glamping weekend. A few tents and some photos.

They are wrong.

The first Glamp Retreat becomes legend immediately.

Not because it's luxurious - though it is.

But because CapyCamp brings the same energy into real life:

A check-in desk where a counselor stamps your wrist and says "don't start a side quest without hydration."

Workshops that are half useful, half suspicious ("Brand Building" followed by "Forest Ethics" followed by "How To Not Trust A Capybaras With A Clipboard").

A campfire singalong that turns into a lore reveal mid-chorus.

Merch that comes with an NFT claim and an emotional warning label.

And then the IRL achievements begin.

Scouts unlock physical quests:

Find the hidden Polaroid wall.

Trade badges with someone you've only known as a username.

Survive the Elder Council's "Fun Little Game" (it's never little).

By the end, CapyCamp isn't just online anymore.

It's real.

It's a tribe.

It's a brand with a heartbeat.

And when you go home, you'll notice something strange:

Your NFT didn't change.

You did.

Because CapyCamp doesn't just mint Scouts.

It turns people into lore.

And the campfire?

It's still burning.`,
    },
  ]

  const artifacts = [
    {
      type: "Polaroid",
      title: "Scout's First Campfire",
      description: "A moment frozen in time: the first Scout gathering at CapyCamp.",
    },
    {
      type: "Badge",
      title: "Camper's Badge",
      description: "Awarded for completing your first quest and joining a squad.",
    },
    {
      type: "Document",
      title: "Scout Oath (Unofficial)",
      description: "The hilarious, heartfelt oath every Scout swears upon arrival.",
    },
    {
      type: "Map",
      title: "Mystery Forest Guide",
      description: "A map of quests, hidden content, and lore breadcrumbs.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The CapyCamp Chronicle</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The Story of CapyCamp
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five chapters of lore, mystery, and community. Read on to discover where the Scout universe is heading.
            </p>
          </div>

          {/* Intro */}
          <Card className="p-8 mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              CapyCamp isn't just an NFT collection. It's an expanding universe with real lore, genuine stakes, and a community that's shaping its future.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Below is the official story as it unfolds. Each chapter represents a phase of CapyCamp's evolution. As new Scouts join and the community grows, the story branches into countless personal narratives.
            </p>
          </Card>

          {/* Chapters */}
          <Accordion type="single" collapsible defaultValue="chapter-1" className="mb-12">
            {chapters.map((chapter) => (
              <AccordionItem key={chapter.num} value={`chapter-${chapter.num}`} className="border-border">
                <AccordionTrigger className="hover:text-primary py-6 px-6 text-lg font-semibold">
                  <div className="text-left">
                    <div className="text-sm text-primary font-medium mb-1">CHAPTER {chapter.num}</div>
                    <div className="text-foreground">{chapter.title}</div>
                    <div className="text-sm text-muted-foreground font-normal">{chapter.subtitle}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground whitespace-pre-line">
                  <Card className="p-4 sm:p-6 bg-white/5 border-white/10 backdrop-blur-md">
                    {chapter.content}
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Lore Artifacts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Lore Artifacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {artifacts.map((artifact, idx) => (
                <Card key={idx} className="p-6 border-border hover-lift">
                  <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                    {artifact.type}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{artifact.title}</h3>
                  <p className="text-sm text-muted-foreground">{artifact.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* What's Next */}
          <Card className="p-8 border-border bg-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">What Comes Next?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chapters 6 and beyond are being written by the Scouts themselves. Your participation, creativity, and community will shape what CapyCamp becomes.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Future possibilities include mini-games, story seasons, collaborative world-building, and experiences we haven't even imagined yet.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This is a living story. Join us and help write the next chapter.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/mint">
                  Become a Scout
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/roadmap">
                  View Roadmap
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
