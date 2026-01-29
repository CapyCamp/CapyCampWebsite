import { abstractTestnet } from "viem/chains"

export const chain =
  process.env.NODE_ENV === "development"
    ? abstractTestnet
    : abstractTestnet
