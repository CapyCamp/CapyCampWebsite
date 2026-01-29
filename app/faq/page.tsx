'use client';

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/lib/capycamp-data"
import { Search } from "lucide-react"

export default function FAQPage() {
  // Group FAQ into categories
  const categories = {
    General: [0, 1, 2, 3, 4],
    Mint: [5, 6, 7, 8, 9],
    Utility: [10, 11, 12, 13],
    Community: [14, 15, 16, 17, 18],
    "Security & Technical": [19],
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              FAQ
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Explore the most common questions about CapyCamp.
            </p>
          </div>

          {/* Search */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search FAQ..."
                className="pl-12 h-12 border-border"
              />
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {Object.entries(categories).map(([category, indices]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {indices.map((idx) => {
                    const item = faqItems[idx]
                    if (!item) return null
                    return (
                      <AccordionItem
                        key={idx}
                        value={`faq-${idx}`}
                        className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
                      >
                        <AccordionTrigger className="hover:text-primary py-4 text-lg font-semibold">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 pt-2">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <Card className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Join our Discord community! Our team and fellow Scouts are happy to help answer any questions.
            </p>
            <a
              href="#"
              onClick={() => alert("Join Discord: discord.gg/capycamp")}
              className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              Join Discord
            </a>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
