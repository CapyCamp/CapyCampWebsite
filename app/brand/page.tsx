'use client';

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              CapyCamp Brand Kit
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resources and guidelines for using the CapyCamp brand. Help us maintain consistency while celebrating the Scout universe.
            </p>
          </div>

          {/* Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Brand Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Primary Teal", hex: "#2E8B9E", rgb: "46, 139, 158" },
                { name: "Accent Coral", hex: "#E07A5F", rgb: "224, 122, 95" },
                { name: "Secondary Tan", hex: "#D4A574", rgb: "212, 165, 116" },
                { name: "Cream", hex: "#FAF8F3", rgb: "250, 248, 243" },
              ].map((color) => (
                <Card key={color.hex} className="p-6 text-center border-border">
                  <div
                    className="w-full h-24 rounded-lg mb-4 border border-border"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h4 className="font-semibold text-foreground text-sm mb-2">{color.name}</h4>
                  <code className="text-xs text-muted-foreground block mb-1">{color.hex}</code>
                  <code className="text-xs text-muted-foreground">RGB: {color.rgb}</code>
                </Card>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Typography</h2>
            <div className="space-y-6">
              <Card className="p-8 border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Headings
                </h4>
                <h1 className="text-5xl font-bold text-foreground mb-4">Space Grotesk Bold</h1>
                <p className="text-muted-foreground">
                  Used for all headlines, titles, and prominent text. Creates a strong, modern presence.
                </p>
              </Card>

              <Card className="p-8 border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Body
                </h4>
                <p className="text-lg text-foreground font-sans mb-4">Geist Regular</p>
                <p className="text-muted-foreground">
                  Used for all body copy and standard text. Clean, readable, and accessible.
                </p>
              </Card>

              <Card className="p-8 border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Code / Technical
                </h4>
                <code className="text-lg text-foreground font-mono block mb-4">Geist Mono Regular</code>
                <p className="text-muted-foreground">
                  Used for contract addresses, wallet IDs, and technical information.
                </p>
              </Card>
            </div>
          </section>

          {/* Logo Usage */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Logo & Wordmark</h2>
            <Card className="p-8 border-border space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-8 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4">
                    CC
                  </div>
                  <p className="text-sm text-muted-foreground">Logo Mark</p>
                </div>
                <div className="text-center p-8 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-space-grotesk font-bold mb-4">CapyCamp</div>
                  <p className="text-sm text-muted-foreground">Wordmark</p>
                </div>
                <div className="text-center p-8 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-2 justify-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                      CC
                    </div>
                    <span className="font-space-grotesk font-bold">CapyCamp</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Horizontal Lock-up</p>
                </div>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-3">Logo Guidelines</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Minimum size: 32px</li>
                  <li>• Always maintain clear space around the logo</li>
                  <li>• Don't rotate, skew, or distort the logo</li>
                  <li>• Use approved color versions only</li>
                  <li>• Never remove or alter components</li>
                </ul>
              </div>
            </Card>
          </section>

          {/* Voice & Tone */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Voice & Tone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 border-border">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">✓</span> Do
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Be playful and humorous</li>
                  <li>• Sound confident and trustworthy</li>
                  <li>• Use clear, simple language</li>
                  <li>• Show personality and warmth</li>
                  <li>• Celebrate the community</li>
                </ul>
              </Card>

              <Card className="p-8 border-border">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">✗</span> Don't
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Be overly corporate or stiff</li>
                  <li>• Make unrealistic promises</li>
                  <li>• Use jargon without explanation</li>
                  <li>• Sound condescending or dismissive</li>
                  <li>• Be negative about the community</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Usage Rights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Usage Rights</h2>
            <Card className="p-8 border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The CapyCamp brand, logo, and creative assets are owned or licensed by CapyCamp. You may use the brand for personal, non-commercial purposes including:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Displaying your Scout NFT on social media</li>
                <li>• Creating fan art and community content</li>
                <li>• Sharing links and information about CapyCamp</li>
                <li>• Creating community content with attribution</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                For commercial use or licensing inquiries, please contact us via Discord. Unauthorized commercial use of CapyCamp IP is not permitted.
              </p>
            </Card>
          </section>

          {/* Download Assets */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Download Assets</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Brand assets including logos, color swatches, and guidelines are available for approved community creators.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => alert("Brand assets available in Discord #brand-kit channel")}
            >
              View Assets in Discord
            </Button>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
