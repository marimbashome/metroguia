'use client'

import { getBlogUrl } from '@/data/blog-links'

const categoriaIconos = {
  'Barrio': '🏘️',
  'Ciudad': '🌆',
  'Gastronomía': '🍽️',
  'Cultura': '🎭',
  'Museo': '🏛️',
  'Entretenimiento': '🎉',
  'Evento': '⚽',
  'Atracción': '📸',
  'Práctico': '💡',
  'Actividades': '🎯',
  'Deportes': '🏟️',
}

export default function BlogGuiasWidget({ guides = [], context = '' }) {
  if (!guides || guides.length === 0) return null

  const displayGuides = guides.slice(0, 3)

  return (
    <div style={{
      margin: '2rem 0',
      padding: '1.5rem',
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.04) 0%, rgba(0, 212, 255, 0.01) 100%)',
      border: '1px solid rgba(0, 212, 255, 0.15)',
      borderRadius: 'var(--radius-lg, 12px)',
    }}>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text, #E8E8E8)',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{ fontSize: '1.1rem' }}>📖</span>
        Guías de viaje — {context}
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '0.75rem',
      }}>
        {displayGuides.map((guide) => (
          <a
            key={guide.slug}
            href={getBlogUrl(guide.slug)}
            target="_blank"
            rel="noopener"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1rem',
              backgroundColor: 'var(--surface, #111118)',
              border: '1px solid var(--border, #2A2A35)',
              borderRadius: 'var(--radius, 8px)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)'
              e.currentTarget.style.backgroundColor = 'var(--surface-hover, #1A1A24)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border, #2A2A35)'
              e.currentTarget.style.backgroundColor = 'var(--surface, #111118)'
            }}
          >
            <span style={{
              fontSize: '1.25rem',
              flexShrink: 0,
              width: '2rem',
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 212, 255, 0.08)',
              borderRadius: '6px',
            }}>
              {categoriaIconos[guide.categoria] || '📖'}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text, #E8E8E8)',
                lineHeight: 1.3,
                marginBottom: '0.15rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {guide.titulo}
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: 'var(--primary, #00D4FF)',
                fontWeight: 600,
              }}>
                Leer guía →
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}