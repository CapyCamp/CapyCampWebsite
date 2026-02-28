"use client"

import dynamic from "next/dynamic"

const SiteHeader = dynamic(() => import("./capycamp-header"), { ssr: false })

export default function SiteHeaderNoSsr() {
  return <SiteHeader />
}

