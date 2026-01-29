"use client"

import { useQuery } from "@tanstack/react-query"
import { useAccount } from "wagmi"
import { getUserProfile } from "@/lib/get-user-profile"

export function useAbstractProfile() {
  const { address, isConnecting, isReconnecting } = useAccount()

  const query = useQuery({
    queryKey: ["abstract-profile", address],
    queryFn: async () => {
      if (!address) {
        return null
      }
      return await getUserProfile(address)
    },
    enabled: !!address,
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: false,
  })

  return {
    ...query,
    isLoading: query.isLoading || isConnecting || isReconnecting,
  }
}

export function useAbstractProfileByAddress(address: `0x${string}` | undefined) {
  return useQuery({
    queryKey: ["abstract-profile", address],
    queryFn: async () => {
      if (!address) {
        return null
      }
      return await getUserProfile(address)
    },
    enabled: !!address,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: (failureCount, error: Error & { status?: number }) => {
      if (error?.status && error.status >= 400 && error.status < 500) {
        return false
      }
      return failureCount < 2
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}
