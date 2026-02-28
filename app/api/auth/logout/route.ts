import { NextResponse } from "next/server"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"

function clearSiweSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: "siwe-session",
    value: "",
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  })
}

export async function POST() {
  try {
    let session: Awaited<ReturnType<typeof getIronSession>>
    try {
      session = await getIronSession(await cookies(), getIronOptions())
    } catch (error) {
      if (error instanceof SiweConfigurationError) {
        throw error
      }
      // If cookie is invalid/unreadable, just clear it and treat as logged out.
      const res = NextResponse.json({ ok: true, message: "Successfully logged out" })
      clearSiweSessionCookie(res)
      return res
    }

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
