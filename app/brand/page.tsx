import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

const rules = [
  {
    icon: "🧭",
    title: "Tell the Truth",
    body: "No fake hype. If it's not ready, say it's not ready. The camp can handle it.",
  },
  {
    icon: "🧢",
    title: "No Cap, Literally",
    body: "If it feels forced, it's out. If it feels clean, it stays. Simple.",
  },
  {
    icon: "🔥",
    title: "Ship, Then Speak",
    body: "Announcements are earned. We prefer results over noise.",
  },
  {
    icon: "🏕️",
    title: "Lore > Marketing",
    body: "The story is the product. The capybaras are watching.",
  },
]

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Hero */}
          <section className="text-center space-y-4">
            <div className="mx-auto max-w-3xl space-y-4">
              <div className="flex justify-center">
                <img
                  src="/branding/BWLOGO.png"
                  alt="NO.CAP"
                  className="h-24 w-auto sm:h-28"
                />
              </div>
              <p className="text-lg text-muted-foreground">
                A CapyCamp Brand. A Lifestyle Choice. A Warning Label.
              </p>
              <p className="text-sm text-muted-foreground">
                If it feels too clean, it's probably not ours.
              </p>
            </div>
          </section>

          {/* What is NO.CAP */}
          <section className="space-y-6">
            <Card className="p-8 border-border bg-card/60">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Is NO.CAP?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NO.CAP is the honest side of CapyCamp. It is the part that refuses
                  to pretend, over-promise, or pitch at people.
                </p>
                <p>
                  It is a streetwear-first culture brand backed by lore, built by
                  the camp, and worn by people who do not need a tagline to feel
                  real.
                </p>
                <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-foreground">
                  “If the capybaras say it is fine, it is probably fine.”
                </div>
              </div>
            </Card>
          </section>

          {/* Streetwear Reveal */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">
                Yes. It’s Streetwear. No, It’s Not Cringe.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Apparel", body: "Real cuts. Real quality. No fake drops." },
                { title: "Hats", body: "Caps that mean something. No gimmicks." },
                { title: "Collectibles", body: "Physical items with real weight." },
                { title: "Physical + Digital", body: "Onchain identity, offchain presence." },
              ].map((item) => (
                <Card key={item.title} className="p-6 border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.body}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Streetwear */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Why Streetwear?</h2>
              <p className="text-muted-foreground">
                Culture lives offline. If the brand is only digital, it never
                becomes real.
              </p>
              <p className="text-muted-foreground">
                NO.CAP is the uniform for builders and creatives who prefer quiet
                confidence over loud credentials.
              </p>
            </div>
            <Card className="p-10 border-border text-center">
              <p className="text-3xl font-bold text-foreground">
                Web3 without shouting “crypto”.
              </p>
            </Card>
          </section>

          {/* NO.CAP Rules */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">NO.CAP Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rules.map((rule) => (
                <Card key={rule.title} className="p-6 border-border">
                  <div className="text-2xl mb-3">{rule.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground">{rule.body}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* What’s Coming */}
          <section className="space-y-4">
            <Card className="p-8 border-border bg-card/60">
              <h2 className="text-2xl font-bold text-foreground mb-3">What’s Coming</h2>
              <p className="text-muted-foreground">
                We are building this carefully. The pieces will show up when they are
                ready, not when they are loud.
              </p>
              <p className="text-sm text-muted-foreground">Calm down.</p>
            </Card>
          </section>

          {/* What NO.CAP Is NOT */}
          <section className="space-y-6">
            <Card className="p-8 border-border bg-muted/30">
              <h2 className="text-2xl font-bold text-foreground mb-4">What NO.CAP Is NOT</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>❌ A mint page.</li>
                <li>❌ A hype machine.</li>
                <li>❌ A merch grab.</li>
                <li>❌ A roadmap in disguise.</li>
              </ul>
            </Card>
          </section>

          {/* Oath */}
          <section className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">NO.CAP Oath</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I will not fake it. I will not oversell it. I will build it with the camp,
              wear it with intent, and speak only when it matters.
            </p>
          </section>

          {/* Footer Note */}
          <section className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              NO.CAP isn’t just something you say. It’s something you wear.
            </p>
            <p className="text-xs text-muted-foreground">
              The capybaras are watching.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
