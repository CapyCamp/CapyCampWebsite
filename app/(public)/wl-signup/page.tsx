import type { Metadata } from "next"
import WlSignupForm from "@/components/wl-signup-form"

export const metadata: Metadata = {
  title: "WL Signup",
  robots: {
    index: false,
    follow: false,
  },
}

export default function WlSignupPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-xl">
        <WlSignupForm />
      </div>
    </main>
  )
}
