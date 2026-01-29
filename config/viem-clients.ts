import { createPublicClient, createWalletClient, http } from "viem"
import { eip712WalletActions, publicActionsL2 } from "viem/zksync"
import { chain } from "./chain"

export const publicClient = createPublicClient({
  chain,
  transport: http(),
}).extend(publicActionsL2())

export const walletClient = createWalletClient({
  chain,
  transport: http(),
}).extend(eip712WalletActions())
