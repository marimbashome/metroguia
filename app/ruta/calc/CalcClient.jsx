'use client'

import { useState, useEffect } from 'react'
import RutaClient from '../[slug]/RutaClient'

export default function CalcClient() {
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    // Extract slug from URL: /ruta/X-a-Y/ → X-a-Y
    const path = window.location.pathname
    const match = path.match(/^\/ruta\/([^/]+)\/?$/)
    if (match && match[1] && match[1] !== 'calc') {
      setSlug(match[1])
    }
  }, [])

  if (!slug) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
        }}>
          Calculadora de Ruta
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Usa el buscador para calcular tu ruta en metro.
        </p>
        <a href="/" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--primary)',
          color: '#000',
          fontWeight: 600,
          textDecoration: 'none',
          borderRadius: 'var(--radius)',
          fontSize: '0.9rem',
        }}>
          ← Ir al Trip Planner
        </a>
      </div>
    )
  }

  return <RutaClient slug={slug} />
}
