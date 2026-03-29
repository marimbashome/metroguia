'use client'

import { useEffect } from 'react'

const SUPPORTED_LANGS = ['en', 'pt', 'fr', 'de', 'ja', 'ko']
const COOKIE_NAME = 'mg_lang_redirected'

export default function AutoLangRedirect() {
  useEffect(() => {
    // Only run on the Spanish (root) homepage
    if (window.location.pathname !== '/') return

    // Don't redirect if user already was redirected once (they chose to stay on ES)
    if (document.cookie.includes(COOKIE_NAME)) return

    // Detect browser language: navigator.language = "en-US", "ja", "pt-BR", etc.
    const browserLang = (navigator.language || '').split('-')[0].toLowerCase()

    // Only redirect if browser language matches a supported non-Spanish language
    if (SUPPORTED_LANGS.includes(browserLang)) {
      // Set cookie so we don't redirect again (30 days)
      document.cookie = `${COOKIE_NAME}=1;path=/;max-age=${60 * 60 * 24 * 30};SameSite=Lax`
      window.location.replace(`/${browserLang}/`)
    }
  }, [])

  return null
}
