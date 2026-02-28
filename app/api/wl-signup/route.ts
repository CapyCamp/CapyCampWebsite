import { NextResponse } from "next/server"
import { requireServerAuth } from "@/lib/auth-server"
import { appendWlAddress, listWlEntries } from "@/lib/wl-dev-store"

export const runtime = "nodejs"

export async function POST() {
  try {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { ok: false, error: "WL storage is not configured for production yet." },
        { status: 501 },
      )
    }

    const user = await requireServerAuth()
    const address = user.address

    if (!address) {
      return NextResponse.json({ ok: false, error: "Not authenticated." }, { status: 401 })
    }

    const result = await appendWlAddress(address)
    return NextResponse.json({ ok: true, address, ...result })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sign in required."
    return NextResponse.json(
      { ok: false, error: message },
      { status: 401 }
    )
  }
}

export async function GET() {
  try {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ ok: false }, { status: 404 })
    }

    await requireServerAuth()
    const entries = await listWlEntries()
    return NextResponse.json({ ok: true, entries })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sign in required."
    return NextResponse.json({ ok: false, error: message }, { status: 401 })
  }
}
