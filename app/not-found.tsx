import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.45em] text-foreground/70">
            404
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-foreground">
            You wandered off the trail.
          </h1>
          <p className="mt-4 text-foreground/70">
            The campfire is that way. Try heading back before it gets dark.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="px-6 py-3 bg-[#121212] text-white rounded-full text-xs uppercase tracking-[0.35em] hover:bg-[#2a2a2a] transition-colors"
          >
            Back to Camp
          </Link>
          <Link
            href="/story"
            className="px-6 py-3 border border-border rounded-full text-xs uppercase tracking-[0.35em] text-foreground/70 hover:text-foreground transition-colors"
          >
            Read the Scout Code
          </Link>
        </div>
      </div>
    </div>
  )
}
