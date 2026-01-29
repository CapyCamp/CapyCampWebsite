"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAccount, useSignMessage } from "wagmi"
import { createSiweMessage } from "viem/siwe"
import { toast } from "sonner"
import type { AuthResponse, SignInRequest } from "@/types/siwe-auth"
import { ClientSiweConfigurationError } from "@/types/siwe-auth"

async function fetchNonce(): Promise<string> {
  const response = await fetch("/api/auth/nonce")
  const contentType = response.headers.get("content-type")
  if (contentType?.includes("application/json")) {
    const errorData = await response.json()
    if (errorData.isConfigurationError) {
      throw new ClientSiweConfigurationError(errorData.message)
    }
    throw new Error(errorData.message || "Failed to fetch nonce")
  }
  return response.text()
}

async function verifySignature(data: SignInRequest): Promise<AuthResponse> {
  const response = await fetch("/api/auth/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (result.isConfigurationError) {
    throw new ClientSiweConfigurationError(result.message)
  }

  return result
}

export function useSiweSignInMutation() {
  const { address, chainId } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      if (!address || !chainId) {
        throw new Error("Wallet not connected")
      }

      const nonce = await fetchNonce()

      const message = createSiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
        issuedAt: new Date(),
        expirationTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      })

      const signature = await signMessageAsync({ message })

      const result = await verifySignature({
        message,
        signature: signature as `0x${string}`,
      })

      if (!result.ok) {
        throw new Error(result.message || "Sign-in failed")
      }

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["siwe-auth"] })
      toast.success("Successfully signed in!")
    },
    onError: (error: Error) => {
      console.error("Sign-in error:", error)
      toast.error(error.message || "Failed to sign in")
    },
  })
}
