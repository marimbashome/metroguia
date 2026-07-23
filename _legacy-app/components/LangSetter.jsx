'use client'

import { useEffect } from 'react'

export default function LangSetter({ lang }) {
  useEffect(() => {
    if (lang && document.documentElement.lang !== lang) {
      document.documentElement.lang = lang
    }
  }, [lang])

  return null
}
