"use client"

import dynamic from "next/dynamic"

const SiteFooter = dynamic(() => import("./capycamp-footer"), { ssr: false })

export default function SiteFooterNoSsr() {
  return <SiteFooter />
}

