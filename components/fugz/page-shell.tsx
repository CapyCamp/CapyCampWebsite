import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

type HeroProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  kicker?: string
  ctaLabel?: string
  ctaHref?: string
  children?: React.ReactNode
  /** Optional background image path (e.g. /capyforest.png) for hero; gradient overlay is always applied on top */
  backgroundImage?: string
  /** Optional image to show instead of title text (e.g. /nft/Statue.png). Title is used as alt. */
  titleImage?: string
}

export function PageHero({
  title,
  subtitle,
  kicker,
  preTitle,
  titleClassName,
  subtitleClassName,
  ctaLabel,
  ctaHref,
  ctaHoverText,
  secondaryCtaLabel,
  secondaryCtaHref,
  backgroundImage,
  titleImage,
  children,
}: HeroProps & {
  preTitle?: React.ReactNode
  titleClassName?: string
  subtitleClassName?: string
  ctaHoverText?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}) {
  const titleContent = titleImage ? (
    <Image
      src={titleImage}
      alt={typeof title === "string" ? title : "CapyCamp"}
      width={480}
      height={480}
      className="mx-auto h-auto w-full max-w-[280px] object-contain rounded-2xl border-2 border-white/40 shadow-lg filter-[drop-shadow(0_6px_30px_rgba(0,0,0,0.5))_drop-shadow(0_10px_40px_rgba(0,0,0,0.6))] sm:max-w-[340px] md:max-w-[400px] md:rounded-3xl md:border-[3px]"
      priority
    />
  ) : (
    title
  )

  return (
    <section className="pt-48 md:pt-56 pb-12 sm:pb-14 relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        {kicker ? (
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-white/90">
            {kicker}
          </div>
        ) : null}
        <div className="mt-6 flex flex-col items-center gap-5 sm:gap-6 text-center">
          {preTitle}
          <h1
            className={cn(
              !titleImage && "text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white",
              !titleImage && "[-webkit-text-stroke:0]",
              !titleImage && "[text-shadow:0_0_2px_rgba(0,0,0,1),0_0_2px_rgba(0,0,0,1),0_2px_2px_rgba(0,0,0,1),0_-2px_2px_rgba(0,0,0,1),2px_0_2px_rgba(0,0,0,1),-2px_0_2px_rgba(0,0,0,1),2px_2px_2px_rgba(0,0,0,1),-2px_-2px_2px_rgba(0,0,0,1),2px_-2px_2px_rgba(0,0,0,1),-2px_2px_2px_rgba(0,0,0,1),0_6px_30px_rgba(0,0,0,0.6),0_10px_40px_rgba(0,0,0,0.7)]",
              titleImage && "flex justify-center",
              titleClassName,
            )}
          >
            {titleContent}
          </h1>
          {subtitle ? (
            <p
              className={cn(
                "max-w-xl text-white/90 text-lg md:text-xl leading-relaxed mt-6",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          ) : null}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            {ctaLabel && ctaHref ? (
              <Link
                href={ctaHref}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-[11px] uppercase tracking-[0.35em] text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02]"
                title={ctaHoverText}
              >
                {ctaLabel}
              </Link>
            ) : null}
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/40 bg-transparent px-7 text-[11px] uppercase tracking-[0.35em] text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}

type SectionProps = {
  title: React.ReactNode
  lead?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function PageSection({ title, lead, children, className }: SectionProps) {
  return (
    <section className={cn("py-14 sm:py-16", className)}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-foreground/70">
            {title}
          </div>
          {lead ? <p className="max-w-2xl text-sm text-foreground/70">{lead}</p> : null}
        </div>
        {children ? <div className="mt-5 sm:mt-6">{children}</div> : null}
      </div>
    </section>
  )
}

type GridProps = {
  items: { title: string; description: React.ReactNode; image?: string }[]
}

export function PageGrid({ items }: GridProps) {
  return (
    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 items-stretch">
      {items.map((item) => (
        <div
          key={item.title}
          className={cn(
            "rounded-[2.5rem_2rem_2.5rem_2rem] border border-white/30 bg-white/70 backdrop-blur-xl p-5 sm:p-6 shadow-xl flex h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl",
            item.image ? "flex-row items-center gap-4 sm:gap-5 text-left" : "flex-col items-center justify-center text-center gap-2",
          )}
        >
          {item.image ? (
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 relative rounded-xl overflow-hidden border border-white/30 bg-white/50">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          ) : null}
          <div className={cn("min-w-0 flex-1", item.image ? "flex flex-col gap-1" : "flex flex-col items-center gap-2")}>
            <div className="text-lg font-bold uppercase tracking-wide text-foreground/95">
              {item.title}
            </div>
            <div className={cn("text-sm text-foreground/75 leading-relaxed", item.image ? "max-w-none" : "max-w-xs")}>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
