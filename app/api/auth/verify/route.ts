import { NextRequest, NextResponse } from "next/server"
import { parseSiweMessage } from "viem/siwe"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { createPublicClient, http } from "viem"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"
import { chain } from "@/config/chain"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, signature } = body

    if (!message || !signature) {
      return NextResponse.json(
        { ok: false, message: "Message and signature are required." },
        { status: 400 },
      )
    }

    if (typeof message !== "string") {
      return NextResponse.json(
        { ok: false, message: "Message must be a string." },
        { status: 400 },
      )
    }

    if (
      typeof signature !== "string" ||
      !/^0x[a-fA-F0-9]+$/.test(signature) ||
      signature.length < 4
    ) {
      return NextResponse.json(
        { ok: false, message: "Invalid signature format." },
        { status: 400 },
      )
    }

    const session = await getIronSession(await cookies(), getIronOptions())

    const publicClient = createPublicClient({
      chain,
      transport: http(),
    })

    try {
      if (!session.nonce) {
        return NextResponse.json(
          { ok: false, message: "No nonce found. Please request a new nonce first." },
          { status: 422 },
        )
      }

      const siweMessage = parseSiweMessage(message)

      if (siweMessage.chainId !== chain.id) {
        return NextResponse.json(
          { ok: false, message: "Invalid chain ID." },
          { status: 422 },
        )
      }

      const requestHost = request.headers.get("host")
      if (siweMessage.domain !== requestHost) {
        return NextResponse.json(
          { ok: false, message: "Invalid domain." },
          { status: 422 },
        )
      }

      if (siweMessage.expirationTime && siweMessage.expirationTime.getTime() <= Date.now()) {
        return NextResponse.json(
          { ok: false, message: "Message has expired." },
          { status: 422 },
        )
      }

      const valid = await publicClient.verifySiweMessage({
        message,
        signature: signature as `0x${string}`,
        nonce: session.nonce,
        blockTag: "latest",
      })

      session.nonce = undefined

      if (valid) {
        session.isAuthenticated = true
        session.address = siweMessage.address as `0x${string}`
        session.chainId = siweMessage.chainId
        session.expirationTime = siweMessage.expirationTime?.toISOString()
        await session.save()
      } else {
        await session.save()
      }

      if (!valid) {
        return NextResponse.json(
          { ok: false, message: "Invalid signature." },
          { status: 422 },
        )
      }
    } catch {
      return NextResponse.json(
        { ok: false, message: "Verification failed" },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
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
