import 'tailwindcss/tailwind.css'
import 'src/global.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as gtag from 'src/gtag'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    function handleRouteChange(url: string) {
      gtag.pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  })

  return <Component {...pageProps} />
}
