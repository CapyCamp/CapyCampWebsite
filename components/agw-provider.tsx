"use client"

import type { ReactNode } from "react"
import { AbstractWalletProvider } from "@abstract-foundation/agw-react"
import { QueryClient } from "@tanstack/react-query"
import { chain } from "@/config/chain"

// Shared query client for AGW + app queries
const queryClient = new QueryClient()

export function NextAbstractWalletProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AbstractWalletProvider chain={chain} queryClient={queryClient}>
      {children}
    </AbstractWalletProvider>
  )
}
