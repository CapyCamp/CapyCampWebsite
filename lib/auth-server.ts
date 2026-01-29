import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { getIronOptions, SiweConfigurationError } from "@/config/auth"
import { chain } from "@/config/chain"
import type { AuthUser } from "@/types/siwe-auth"

export interface ServerAuthResult {
  isAuthenticated: boolean
  user?: AuthUser
  error?: string
}

export async function getServerAuthUser(): Promise<ServerAuthResult> {
  try {
    const session = await getIronSession(await cookies(), getIronOptions())

    if (!session.isAuthenticated || !session.address) {
      return { isAuthenticated: false, error: "No user session found" }
    }

    if (
      session.expirationTime &&
      new Date(session.expirationTime).getTime() < Date.now()
    ) {
      return { isAuthenticated: false, error: "SIWE session expired" }
    }

    if (session.chainId !== chain.id) {
      return { isAuthenticated: false, error: "Invalid chain" }
    }

    return {
      isAuthenticated: true,
      user: {
        isAuthenticated: session.isAuthenticated,
        address: session.address,
        chainId: session.chainId,
        expirationTime: session.expirationTime,
      },
    }
  } catch (error) {
    if (error instanceof SiweConfigurationError) {
      return {
        isAuthenticated: false,
        error: `Configuration error: ${error.message}`,
      }
    }

    return { isAuthenticated: false, error: "Authentication check failed" }
  }
}

export async function requireServerAuth(): Promise<AuthUser> {
  const auth = await getServerAuthUser()

  if (!auth.isAuthenticated || !auth.user) {
    throw new Error(auth.error || "Authentication required")
  }

  return auth.user
}

export async function isServerAuthenticated(): Promise<boolean> {
  const auth = await getServerAuthUser()
  return auth.isAuthenticated
}

export async function getServerAuthAddress(): Promise<`0x${string}` | null> {
  const auth = await getServerAuthUser()
  return auth.user?.address || null
}
