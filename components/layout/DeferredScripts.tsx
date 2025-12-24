'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export function DeferredScripts() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const loadScripts = () => {
      if (!shouldLoad) {
        setShouldLoad(true)
      }
    }

    timeout = setTimeout(loadScripts, 4000)

    const handlePointerDown = () => {
      loadScripts()
      window.removeEventListener('pointerdown', handlePointerDown)
    }

    window.addEventListener('pointerdown', handlePointerDown, { once: true })

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [shouldLoad])

  if (!shouldLoad) {
    return null
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4}`} strategy="lazyOnload" />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_GA4});
          `,
        }}
      />
    </>
  )
}
