import { isAddress } from "viem"

export function trimAddress(address: string, startChars: number = 6, endChars: number = 4): string {
  if (!address) return ""
  if (address.length <= startChars + endChars) return address

  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
}

export function getDisplayName(nameOrAddress: string, fallbackAddress?: string): string {
  if (!nameOrAddress) return fallbackAddress ? trimAddress(fallbackAddress) : "anon"

  if (isAddress(nameOrAddress)) {
    return trimAddress(nameOrAddress)
  }

  return nameOrAddress
}
