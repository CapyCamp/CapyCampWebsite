"use client"

const NFT_IMAGES = [
  "All Gold.png",
  "Astronaut .png",
  "Blueprint.png",
  "Cosmic.png",
  "Elder.png",
  "Error 404.png",
  "Fire.png",
  "Forest Monster .png",
  "Ghost.png",
  "Glitch.png",
  "Hacker.png",
  "Ice.png",
  "Phantom.png",
  "Pixel.png",
  "Sand Castle.png",
  "Shadow.png",
  "Skeleton .png",
  "Sketch.png",
  "Statue.png",
  "Vampire.png",
] as const

export default function NftCarousel() {
  const count = NFT_IMAGES.length
  const indices = Array.from({ length: count }, (_, i) => i)

  return (
    <section className="relative w-full overflow-hidden py-8" aria-label="NFT gallery">
      <div className="flex animate-nft-marquee gap-4">
        {/* Duplicate set for seamless right-to-left loop */}
        {[...indices, ...indices].map((i, position) => {
          const idx = i % count
          const filename = NFT_IMAGES[idx]
          const src = `/nft/${encodeURIComponent(filename)}`
          return (
            <div
              key={`nft-${position}`}
              className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-lg transition hover:scale-105 hover:border-white/30 hover:shadow-xl sm:h-32 sm:w-32"
              aria-hidden
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          )
        })}
      </div>
      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}
