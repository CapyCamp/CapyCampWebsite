export const TIER_COLORS = {
  1: "#CD7F32",
  2: "#C0C0C0",
  3: "#FFD700",
  4: "#E5E4E2",
  5: "#B9F2FF",
} as const

export function getTierColor(tier: number): string {
  if (!tier || tier < 1 || tier > 5) {
    return TIER_COLORS[1]
  }

  return TIER_COLORS[tier as keyof typeof TIER_COLORS]
}

export function getTierName(tier: number): string {
  const tierNames = {
    1: "Bronze",
    2: "Silver",
    3: "Gold",
    4: "Platinum",
    5: "Diamond",
  } as const

  if (!tier || tier < 1 || tier > 5) {
    return "Bronze"
  }

  return tierNames[tier as keyof typeof tierNames]
}
