"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

function HomeContent() {
  const params = useSearchParams()
  return <div>Home page param: {params.get("q")}</div>
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeContent />
    </Suspense>
  )
}
