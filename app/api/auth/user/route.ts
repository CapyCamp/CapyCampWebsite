import { NextResponse } from "next/server"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"
import { chain } from "@/config/chain"

export async function GET() {
  try {
    const session = await getIronSession(await cookies(), getIronOptions())

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
    if (error instanceof SiweConfigurationError) {
      return NextResponse.json(
        { ok: false, isConfigurationError: true, message: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
