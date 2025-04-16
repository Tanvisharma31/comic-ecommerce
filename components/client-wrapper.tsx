"use client"

import { useEffect, useState } from "react"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window !== "undefined") {
      setMounted(true)
    }
  }, [])

  // Don't render anything until after hydration
  if (!mounted) {
    return null
  }

  return <>{children}</>
} 