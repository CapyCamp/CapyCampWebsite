"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLoginWithAbstract } from "@abstract-foundation/agw-react"
import { toast } from "sonner"
import { ClientSiweConfigurationError } from "@/types/siwe-auth"

interface LogoutResponse {
  ok: boolean
  message?: string
  isConfigurationError?: boolean
}

async function logoutUser(): Promise<LogoutResponse> {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })

  const result = await response.json()

  if (result.isConfigurationError) {
    throw new ClientSiweConfigurationError(result.message)
  }

  if (!response.ok) {
    throw new Error(result.message || "Logout failed")
  }

  return result
}

export function useSiweLogoutMutation(options?: {
  onSuccess?: () => void
  onError?: (error: Error) => void
}) {
  const queryClient = useQueryClient()
  const { logout: walletLogout } = useLoginWithAbstract()

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(["siwe-auth"], {
        ok: false,
        message: "Logged out",
      })
      queryClient.invalidateQueries({ queryKey: ["siwe-auth"] })
      walletLogout()
      toast.success("Successfully signed out")
      options?.onSuccess?.()
    },
    onError: (error: Error) => {
      if (error instanceof ClientSiweConfigurationError) {
        throw error
      }
      toast.error(error.message || "Sign out failed")
      options?.onError?.(error)
    },
  })

  return mutation
}
