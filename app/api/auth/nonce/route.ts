import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { generateSiweNonce } from "viem/siwe"
import { getIronSession } from "iron-session"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"

export interface SessionData {
  nonce?: string
  isAuthenticated?: boolean
  address?: `0x${string}`
  chainId?: number
  expirationTime?: string
}

export async function GET() {
  try {
    const session = await getIronSession(await cookies(), getIronOptions())

    const nonce = generateSiweNonce()
    session.nonce = nonce
    await session.save()

    return new NextResponse(nonce, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
  } catch (error) {
    if (error instanceof SiweConfigurationError) {
      return NextResponse.json(
        {
          ok: false,
          isConfigurationError: true,
          message: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
