'use client'

import { useState, useEffect } from 'react'
import { findRoute, findAlternativeRoute } from '@/lib/pathfinder'
import { grafo } from '@/data/grafo'
import { rutasPopulares, getRelatedRoutes } from '@/data/rutas-populares'
import SearchBar from '@/app/components/SearchBar'
import RouteResult from '@/app/components/RouteResult'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'

// Line color map
const lineColors = {
  '1': '#E91E8C', '2': '#0057A8', '3': '#6B7A2A', '4': '#00B5C8',
  '5': '#FFCD00', '6': '#DA291C', '7': '#F97316', '8': '#00A650',
  '9': '#6B3A2A', 'A': '#7C3AED', 'B': '#9E9E9E', '12': '#C9A84C',
  'TL': '#06B6D4',
}

// Parse slug like "zocalo-a-estadio-azteca" into {origen, destino}
function parseSlug(slug) {
  if (!slug) return { origen: '', destino: '' }
  const parts = slug.split('-a-')
  if (parts.length < 2) return { origen: slug, destino: '' }
  return {
    origen: parts[0],
    destino: parts.slice(1).join('-a-'),
  }
}

// Find closest station slug from grafo by matching
function matchStation(text) {
  if (!text) return null
  const normalized = text.toLowerCase().replace(/-/g, ' ').trim()
  // Exact slug match
  if (grafo[text]) return text
  // Slug with dashes
  const dashSlug = text.toLowerCase().replace(/\s+/g, '-')
  if (grafo[dashSlug]) return dashSlug
  // Search by name
  for (const [slug, data] of Object.entries(grafo)) {
    const name = data.nombre.toLowerCase()
    if (name === normalized) return slug
    if (slug === normalized.replace(/\s+/g, '-')) return slug
  }
  // Partial match
  for (const [slug, data] of Object.entries(grafo)) {
    const name = data.nombre.toLowerCase()
    if (name.includes(normalized) || normalized.includes(name)) return slug
  }
  return null
}

export default function RutaClient({ slug }) {
  const [ruta, setRuta] = useState(null)
  const [rutaAlt, setRutaAlt] = useState(null)
  const [origenNombre, setOrigenNombre] = useState('')
  const [destinoNombre, setDestinoNombre] = useState('')
  const [error, setError] = useState(null)
  const [schemaJson, setSchemaJson] = useState(null)

  useEffect(() => {
    const { origen, destino } = parseSlug(slug)
    const origenSlug = matchStation(origen)
    const destinoSlug = matchStation(destino)

    if (origenSlug && grafo[origenSlug]) {
      setOrigenNombre(grafo[origenSlug].nombre)
    }
    if (destinoSlug && grafo[destinoSlug]) {
      setDestinoNombre(grafo[destinoSlug].nombre)
    }

    if (!origenSlug || !destinoSlug) {
      setError('No se encontraron las estaciones. Intenta buscar de nuevo.')
      return
    }

    const resultado = findRoute(origenSlug, destinoSlug)
    setRuta(resultado)

    const alt = findAlternativeRoute(origenSlug, destinoSlug)
    if (alt && alt.encontrada) {
      setRutaAlt(alt)
    }

    // Generate Schema.org JSON-LD
    if (origenSlug && destinoSlug && resultado && resultado.encontrada) {
      const itineraryItems = resultado.pasos.map((paso, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'item': {
          '@type': 'TransitStation',
          'name': paso.nombre,
        }
      }))

      const tripSchema = {
        '@context': 'https://schema.org',
        '@type': 'Trip',
        'name': `Ruta de ${grafo[origenSlug].nombre} a ${grafo[destinoSlug].nombre}`,
        'description': `Cómo llegar de ${grafo[origenSlug].nombre} a ${grafo[destinoSlug].nombre} en metro`,
        'itinerary': {
          '@type': 'ItemList',
          'itemListElement': itineraryItems
        },
        'provider': {
          '@type': 'Organization',
          'name': 'MetroGuia.mx',
          'url': 'https://metroguia.mx'
        }
      }

      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Inicio',
            'item': 'https://metroguia.mx'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Ruta',
            'item': 'https://metroguia.mx/ruta'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': `${grafo[origenSlug].nombre} a ${grafo[destinoSlug].nombre}`,
            'item': `https://metroguia.mx/ruta/${slug}`
          }
        ]
      }

      // HowTo schema for rich results
      const estimatedMinutes = Math.round(resultado.pasos.length * 2 + 3)
      const howtoSteps = resultado.pasos.map((paso, idx) => ({
        '@type': 'HowToStep',
        'position': idx + 1,
        'name': `${idx === 0 ? 'Aborda' : 'Dirígete'} en estación ${paso.nombre}`,
        'text': `${idx === 0 ? 'Dirígete a la estación' : 'Continúa a la estación'} ${paso.nombre} de Línea ${paso.linea}`,
        'url': `https://metroguia.mx/ruta/${slug}#paso-${idx + 1}`
      }))

      const howtoSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': `Cómo llegar de ${grafo[origenSlug].nombre} a ${grafo[destinoSlug].nombre} en Metro CDMX`,
        'description': `Guía paso a paso para viajar de ${grafo[origenSlug].nombre} a ${grafo[destinoSlug].nombre} usando el Metro de Ciudad de México.`,
        'totalTime': `PT${estimatedMinutes}M`,
        'estimatedCost': {
          '@type': 'MonetaryAmount',
          'currency': 'MXN',
          'value': '6'
        },
        'step': howtoSteps,
        'tool': [
          {
            '@type': 'HowToTool',
            'name': 'Tarjeta de Movilidad Integrada'
          }
        ]
      }

      setSchemaJson({
        trip: JSON.stringify(tripSchema),
        breadcrumb: JSON.stringify(breadcrumbSchema),
        howto: JSON.stringify(howtoSchema)
      })
    }
  }, [slug])

  const handleNewResult = (resultado) => {
    setRuta(resultado)
    setRutaAlt(null)
    setError(null)
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Schema.org structured data for SEO */}
      {schemaJson && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaJson.trip }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaJson.breadcrumb }}
          />
          {schemaJson.howto && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: schemaJson.howto }}
            />
          )}
        </>
      )}

      {/* Breadcrumb */}
      <nav style={{
        fontSize: '0.8rem',
        color: 'var(--text-dim)',
        marginBottom: '1.5rem',
      }}>
        <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Inicio</a>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: 'var(--text-muted)' }}>Ruta</span>
        {origenNombre && destinoNombre && (
          <>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: 'var(--text)' }}>{origenNombre} → {destinoNombre}</span>
          </>
        )}
      </nav>

      {/* Title */}
      {origenNombre && destinoNombre && (
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}>
          {origenNombre}
          <span style={{ color: 'var(--primary)', margin: '0 0.5rem' }}>→</span>
          {destinoNombre}
        </h1>
      )}

      {/* Line badges */}
      {ruta && ruta.encontrada && ruta.lineas_usadas && (
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          {ruta.lineas_usadas.map((linea, idx) => (
            <span
              key={idx}
              style={{
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: lineColors[linea] || '#5A5A6A',
                color: linea === '5' ? '#000' : '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              Línea {linea}
            </span>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="alert alert-warning" style={{ marginBottom: '2rem' }}>
          <div className="alert-content">
            <div className="alert-message">{error}</div>
          </div>
        </div>
      )}

      {/* Route result */}
      {ruta && ruta.encontrada && (
        <div style={{ marginBottom: '1.5rem' }}>
          <RouteResult ruta={ruta} />
        </div>
      )}

      {/* Ad banner after route */}
      {ruta && ruta.encontrada && (
        <AdBannerLazy slot="4434764790" />
      )}

      {/* Alternative route */}
      {rutaAlt && rutaAlt.encontrada && (
        <div style={{ marginBottom: '2rem' }}>
          <h6 style={{
            color: 'var(--text-dim)',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.75rem',
          }}>
            Ruta alternativa
          </h6>
          <RouteResult ruta={rutaAlt} isAlternative={true} />
        </div>
      )}

      {/* Not found state */}
      {ruta && !ruta.encontrada && !error && (
        <div className="card" style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          marginBottom: '2rem',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.5 }}>🚇</div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Ruta no encontrada</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
            No se encontró una conexión directa. Intenta con otras estaciones.
          </p>
        </div>
      )}

      {/* Search again section with related routes */}
      <div style={{
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
        marginBottom: '2rem',
      }}>
        <h6 style={{
          color: 'var(--text-dim)',
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1rem',
        }}>
          Buscar otra ruta
        </h6>
        <SearchBar ciudad="cdmx" onResult={handleNewResult} />
      </div>

      {/* Related routes section */}
      {origenNombre && (
        <div style={{
          marginBottom: '2rem',
        }}>
          <h6 style={{
            color: 'var(--text-dim)',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Rutas populares desde {origenNombre}
          </h6>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
          }}>
            {getRelatedRoutes(
              slug.split('-a-')[0],
              slug.split('-a-')[1],
              6
            ).map((ruta, idx) => (
              <a
                key={idx}
                href={`/ruta/${ruta.origen}-a-${ruta.destino}`}
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  display: 'block',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--surface)'
                  e.currentTarget.style.color = 'var(--primary)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                {ruta.titulo}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* SEO content section */}
      {ruta && ruta.encontrada && (
        <div style={{
          padding: '1.5rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
          lineHeight: 1.6,
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '1rem',
            marginTop: 0,
          }}>
            Cómo llegar de {origenNombre} a {destinoNombre}
          </h3>

          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text)',
            margin: '0 0 1rem 0',
          }}>
            Esta ruta en el Metro de la Ciudad de México te lleva de {origenNombre} a {destinoNombre} en aproximadamente {Math.round(ruta.pasos.length * 2 + 3)} minutos. Utiliza las líneas {ruta.lineas_usadas.join(', ')} para completar tu viaje de forma rápida y económica.
          </p>

          <h4 style={{
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            marginTop: '1.5rem',
          }}>
            Consejos para tu viaje
          </h4>

          <ul style={{
            margin: 0,
            paddingLeft: '1.5rem',
            fontSize: '0.95rem',
            color: 'var(--text)',
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Utiliza la Tarjeta de Movilidad Integrada para acceder al Metro con tan solo $6 MXN.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Evita viajar en horas pico (8-10 AM y 5-7 PM) para una experiencia más cómoda.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Verifica el estado de las líneas antes de viajar consultando el sitio oficial del Metro.
            </li>
            <li>
              Asegúrate de tener conexión de datos para descargar planos del Metro como referencia.
            </li>
          </ul>

          <AdBannerLazyInArticle slot="4434764790" />
        </div>
      )}

      {/* Alerts (Tren Ligero, etc.) */}
      {ruta && ruta.alertas && ruta.alertas.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          {ruta.alertas.map((alerta, idx) => (
            <div key={idx} className="alert alert-danger">
              <div className="alert-content">
                <div className="alert-message">{alerta}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
