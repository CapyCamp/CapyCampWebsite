"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = isMuted
    if (!isMuted) {
      audio.play().catch(() => {
        // Autoplay can be blocked; user interaction will be required.
      })
    }
  }, [isMuted])

  const toggleSound = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
      } catch {
        // Autoplay may be blocked; user interaction should allow playback.
      }
    }

    setIsMuted((prev) => !prev)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="/forestambience.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <button
        type="button"
        onClick={toggleSound}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-black/50"
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Enable ambience sound" : "Mute ambience sound"}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        {isMuted ? "Sound Off" : "Sound On"}
      </button>
    </div>
  )
}
