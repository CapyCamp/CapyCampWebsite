import { NextRequest, NextResponse } from "next/server"

const ABSTRACT_PORTAL_API_URL = "https://backend.portal.abs.xyz/api"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ address: string }> },
) {
  try {
    const { address } = await params

    if (!address) {
      return NextResponse.json(
        { error: "Address parameter is required" },
        { status: 400 },
      )
    }

    const response = await fetch(
      `${ABSTRACT_PORTAL_API_URL}/user/address/${address}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "agw-reusables/1.0",
        },
        next: { revalidate: 300 },
      },
    )

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "User profile not found" },
          { status: 404 },
        )
      }

      return NextResponse.json(
        { error: "Failed to fetch user profile" },
        { status: response.status },
      )
    }

    const profileData = await response.json()

    return NextResponse.json(profileData, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    })
  } catch (error) {
    console.error("Error fetching user profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
