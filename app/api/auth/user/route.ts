import { NextResponse } from "next/server"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"
import { chain } from "@/config/chain"

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

export async function GET() {
  try {
    let session: Awaited<ReturnType<typeof getIronSession>>
    try {
      session = await getIronSession(await cookies(), getIronOptions())
    } catch (error) {
      if (error instanceof SiweConfigurationError) {
        if (process.env.NODE_ENV !== "production") {
          console.error("[api/auth/user] SIWE configuration error:", error)
        }
        return NextResponse.json(
          { ok: false, isConfigurationError: true, message: error.message },
          { status: 500 },
        )
      }

      // If the session cookie exists but cannot be decrypted (e.g. password changed),
      // clear it and treat the user as signed out instead of 500-looping forever.
      if (process.env.NODE_ENV !== "production") {
        console.error("[api/auth/user] Invalid session cookie; clearing:", error)
      }
      const res = NextResponse.json(
        { ok: false, message: "Invalid session. Please sign in again." },
        { status: 401 },
      )
      clearSiweSessionCookie(res)
      return res
    }

    if (!session.isAuthenticated || !session.address) {
      return NextResponse.json(
        { ok: false, message: "No user session found." },
        { status: 401 },
      )
    }

    if (
      session.expirationTime &&
      new Date(session.expirationTime).getTime() < Date.now()
    ) {
      return NextResponse.json(
        { ok: false, message: "SIWE session expired." },
        { status: 401 },
      )
    }

    if (session.chainId !== chain.id) {
      return NextResponse.json({ ok: false, message: "Invalid chain." }, { status: 401 })
    }

    return NextResponse.json({
      ok: true,
      user: {
        isAuthenticated: session.isAuthenticated,
        address: session.address,
        chainId: session.chainId,
        expirationTime: session.expirationTime,
      },
    })
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[api/auth/user] Unhandled error:", error)
    }

    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
