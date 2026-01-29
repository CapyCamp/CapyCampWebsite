"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

const STORAGE_KEY = "capycamp-hide-tips"

export default function TipsGuide() {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    setIsHidden(stored === "true")
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "true")
    setIsHidden(true)
  }

  if (isHidden) return null

  return (
    <div className="fixed bottom-0 left-8 z-20 hidden lg:flex items-end gap-4">
      <img
        src="/notscared.png"
        alt=""
        aria-hidden="true"
        className="w-44 md:w-56 select-none pointer-events-none"
      />
      <div className="relative mb-6 w-60 rounded-2xl border border-white/20 bg-black/45 p-4 text-sm text-white shadow-lg backdrop-blur-md animate-pulse-glow border-glow glow-yellow-strong">
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-2 rounded-full p-1 text-white/80 transition hover:text-white"
          aria-label="Dismiss tips and tricks"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-2 pr-6 text-xs font-semibold uppercase tracking-wide text-white/70">
          Tips and Tricks
        </div>
        <ul className="space-y-1 text-white/90">
          <li>Use the header to jump between chapters.</li>
          <li>Explore the roadmap for upcoming phases.</li>
          <li>Join Discord for live updates.</li>
        </ul>
      </div>
    </div>
  )
}
