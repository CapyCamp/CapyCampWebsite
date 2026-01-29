"use client"

import { useQuery } from "@tanstack/react-query"
import { useAccount } from "wagmi"
import type { AuthResponse } from "@/types/siwe-auth"
import { ClientSiweConfigurationError } from "@/types/siwe-auth"

async function fetchAuthUser(): Promise<AuthResponse> {
  const response = await fetch("/api/auth/user")
  const result = await response.json()

  if (result.isConfigurationError) {
    throw new ClientSiweConfigurationError(result.message)
  }

  return result
}

export function useSiweAuthQuery() {
  const { address, isConnected } = useAccount()

  const query = useQuery({
    queryKey: ["siwe-auth", address],
    queryFn: fetchAuthUser,
    enabled: isConnected && !!address,
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: (failureCount, error: Error & { status?: number }) => {
      if (error?.status === 401) return false
      if (error instanceof ClientSiweConfigurationError) return false
      return failureCount < 2
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })

  return query
}
