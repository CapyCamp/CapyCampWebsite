import { NextResponse } from "next/server"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"

export async function POST() {
  try {
    const session = await getIronSession(await cookies(), getIronOptions())

    session.isAuthenticated = false
    session.address = undefined
    session.chainId = undefined
    session.expirationTime = undefined
    session.nonce = undefined
    session.destroy()

    return NextResponse.json({ ok: true, message: "Successfully logged out" })
  } catch (error) {
    if (error instanceof SiweConfigurationError) {
      throw error
    }

    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
