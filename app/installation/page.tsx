"use client"

import SiteHeader from "@/components/capycamp-header"
import SiteFooter from "@/components/capycamp-footer"
import { Card } from "@/components/ui/card"

const steps = [
  {
    step: 1,
    title: "Setup your project",
    body: [
      "Create a new project or configure an existing one using the shadcn init command:",
      "npx shadcn@latest init",
    ],
  },
  {
    step: 2,
    title: "Install the AGW Provider",
    body: [
      "Install the required wrapper component, the AGW Provider:",
      'npx shadcn@latest add "https://build.abs.xyz/r/agw-provider.json"',
    ],
  },
  {
    step: 3,
    title: "Wrap your application",
    body: [
      "Wrap your application in the installed component inside app/layout.tsx.",
      `import { NextAbstractWalletProvider } from "@/components/agw-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NextAbstractWalletProvider>
        <body>
          {children}
          <Toaster />
        </body>
      </NextAbstractWalletProvider>
    </html>
  );
}`,
    ],
    isCodeBlock: true,
  },
  {
    step: 4,
    title: "Optional: Install AI Rules",
    body: [
      "Optionally, install AI rule files for your tool of choice to guide LLMs when generating code.",
    ],
  },
]

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Installation
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn what AGW Reusables is and how to install it.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-muted-foreground">
              AGW Reusables is a collection of components and utilities for
              building applications on{" "}
              <a
                href="https://abs.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Abstract
              </a>
              . It allows you to add features, components, and utilities to your
              application using single commands, with only one requirement: your
              app must use{" "}
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Next.js
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 180 180"
                  width="18"
                  height="18"
                  className="inline"
                >
                  <mask
                    height="180"
                    id="nextjs-mask"
                    maskUnits="userSpaceOnUse"
                    width="180"
                    x="0"
                    y="0"
                    style={{ maskType: "alpha" }}
                  >
                    <circle cx="90" cy="90" fill="black" r="90" />
                  </mask>
                  <g mask="url(#nextjs-mask)">
                    <circle cx="90" cy="90" fill="black" r="90" />
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="url(#nextjs-paint0)"
                    />
                    <rect
                      fill="url(#nextjs-paint1)"
                      height="72"
                      width="12"
                      x="115"
                      y="54"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="nextjs-paint0"
                      x1="109"
                      x2="144.5"
                      y1="116.5"
                      y2="160.5"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="nextjs-paint1"
                      x1="121"
                      x2="120.799"
                      y1="54"
                      y2="106.875"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              Built on top of the{" "}
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                shadcn/ui
              </a>{" "}
              library, AGW Reusables uses the{" "}
              <a
                href="https://ui.shadcn.com/docs/cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                shadcn CLI
              </a>{" "}
              to add snippets of code to your project and install any required
              dependencies to use them.
            </p>
            <p className="text-muted-foreground">
              Watch the demo video below for an overview and a guide to getting
              started.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl border border-border bg-card/60">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Yz7zhuhuVRE"
                title="AGW Reusables Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Get Started</h2>
            <p className="text-muted-foreground">
              Follow the steps below to start using AGW Reusables.
            </p>
            <div className="space-y-4">
              {steps.map((item) => (
                <Card key={item.step} className="p-6 border-border">
                  <div className="text-sm font-semibold text-primary mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  {item.body.map((line, idx) => {
                    const isCode = item.isCodeBlock || line.startsWith("npx")
                    return isCode ? (
                      <pre
                        key={`${item.step}-code-${idx}`}
                        className="mt-3 rounded-lg bg-muted/40 p-4 text-sm text-foreground overflow-x-auto"
                      >
                        <code>{line}</code>
                      </pre>
                    ) : (
                      <p key={`${item.step}-text-${idx}`} className="text-muted-foreground">
                        {line}
                      </p>
                    )
                  })}
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
