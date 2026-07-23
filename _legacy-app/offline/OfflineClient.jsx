'use client'

import { useState, useEffect } from 'react'

export default function OfflineClient() {
  const [cachedPages, setCachedPages] = useState([])

  useEffect(() => {
    // Read cached pages from service worker
    async function loadCachedPages() {
      try {
        const cache = await caches.open('mg-pages-v6')
        const keys = await cache.keys()
        const pages = keys
          .map(req => new URL(req.url).pathname)
          .filter(p => p !== '/offline/' && p !== '/' && !p.includes('.'))
          .slice(0, 12)
        setCachedPages(pages)
      } catch {
        // Cache API not available
      }
    }
    loadCachedPages()
  }, [])

  const cityNames = {
    '/cdmx/': 'CDMX',
    '/gdl/': 'Guadalajara',
    '/mty/': 'Monterrey',
    '/lineas/': 'Líneas',
    '/mundial-2026/': 'Mundial 2026',
    '/hospedaje/': 'Hospedaje',
    '/puebla/': 'Puebla',
    '/merida/': 'Mérida',
    '/leon/': 'León',
    '/tren-maya/': 'Tren Maya',
    '/queretaro/': 'Querétaro',
    '/chihuahua/': 'Chihuahua',
    '/tijuana/': 'Tijuana',
    '/toluca/': 'Toluca',
  }

  const getPageLabel = (path) => {
    if (cityNames[path]) return cityNames[path]
    if (path.includes('/estacion/')) {
      const slug = path.split('/estacion/')[1]?.replace(/\/$/, '')
      return `Est. ${slug?.replace(/-/g, ' ') || path}`
    }
    if (path.includes('/ruta/')) {
      const slug = path.split('/ruta/')[1]?.replace(/\/$/, '')
      return `Ruta: ${slug?.replace(/-a-/g, ' → ').replace(/-/g, ' ') || path}`
    }
    if (path.includes('/linea/')) {
      const id = path.split('/linea/')[1]?.replace(/\/$/, '')
      return `Línea ${id || path}`
    }
    return path.replace(/\/$/, '') || path
  }

  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '540px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📡</div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            color: 'var(--text)',
          }}>
            Sin conexión
          </h1>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            margin: 0,
          }}>
            MetroGuia sigue funcionando offline con las páginas que ya visitaste.
          </p>
        </div>

        {/* Trip Planner offline notice */}
        <div style={{
          backgroundColor: 'rgba(245, 166, 35, 0.08)',
          border: '1px solid rgba(245, 166, 35, 0.25)',
          borderRadius: 'var(--radius)',
          padding: '1.25rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--primary)',
            marginBottom: '0.5rem',
          }}>
            Trip Planner funciona offline
          </div>
          <p style={{
            margin: 0,
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: 1.5,
          }}>
            Si visitaste la página principal antes, el calculador de rutas funciona sin internet. Los datos del grafo están en caché.
          </p>
        </div>

        {/* Cached pages */}
        {cachedPages.length > 0 && (
          <div style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.75rem',
            }}>
              Páginas guardadas ({cachedPages.length})
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}>
              {cachedPages.map((page) => (
                <a
                  key={page}
                  href={page}
                  style={{
                    display: 'inline-block',
                    padding: '0.375rem 0.75rem',
                    backgroundColor: 'var(--surface-hover)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  {getPageLabel(page)}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--bg)',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius)',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reintentar conexión
          </button>
          <a
            href="/"
            style={{
              backgroundColor: 'var(--surface)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius)',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Ir a inicio
          </a>
        </div>

        <p style={{
          fontSize: '0.75rem',
          color: 'var(--text-dim)',
          marginTop: '2rem',
          textAlign: 'center',
          marginBottom: 0,
        }}>
          MetroGuia v6 — PWA offline-first
        </p>
      </div>
    </div>
  )
}