'use client'

import { useEffect, useState } from 'react'

export function MswProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./index').then(({ initMsw }) => {
        initMsw().then(() => setMswReady(true))
      })
    } else {
      setMswReady(true)
    }
  }, [])

  if (!mswReady) {
    return null
  }

  return <>{children}</>
}
