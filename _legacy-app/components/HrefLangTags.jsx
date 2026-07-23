'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const LANGUAGES = ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko']
const BASE_URL = 'https://metroguia.mx'

export default function HrefLangTags() {
  const pathname = usePathname()

  useEffect(() => {
    // Remove any existing hreflang links
    document.querySelectorAll('link[data-hreflang]').forEach(el => el.remove())

    // Determine the base path without language prefix
    const segments = pathname.split('/').filter(Boolean)
    const currentLang = segments[0] && ['en', 'pt', 'fr', 'de', 'ja', 'ko'].includes(segments[0])
      ? segments[0]
      : 'es'
    // Strip language prefix to get the base content path
    let basePath
    if (currentLang !== 'es') {
      basePath = '/' + segments.slice(1).join('/')
    } else if (pathname.startsWith('/es/') || pathname === '/es') {
      basePath = pathname.replace(/^\/es/, '') || '/'
    } else {
      basePath = pathname
    }

    // Add hreflang for each language
    LANGUAGES.forEach(lang => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hrefLang = lang
      link.href = lang === 'es'
        ? `${BASE_URL}${basePath || '/'}`
        : `${BASE_URL}/${lang}${basePath || '/'}`
      link.setAttribute('data-hreflang', 'true')
      document.head.appendChild(link)
    })

    // Add x-default
    const xDefault = document.createElement('link')
    xDefault.rel = 'alternate'
    xDefault.hrefLang = 'x-default'
    xDefault.href = `${BASE_URL}${basePath || '/'}`
    xDefault.setAttribute('data-hreflang', 'true')
    document.head.appendChild(xDefault)
  }, [pathname])

  return null
}
