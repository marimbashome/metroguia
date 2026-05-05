'use client'

import { useState, useEffect, useMemo } from 'react'
import { findRoute, findAlternativeRoute } from '@/lib/pathfinder'
import { grafo } from '@/data/grafo'
import { getRelatedRoutes } from '@/data/rutas-populares'
import { STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import { formatLineLabel, formatLineasUsadas, getLineColor } from '@/lib/lineLabels'
import SearchBar from '@/app/components/SearchBar'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import MarimbasCondesa from '@/app/components/MarimbasCondesa'

/**
 * RutaClient — Trip planner result view (Marimbas brand redesign).
 *
 * Structure:
 *   1. Breadcrumb (tight, muted)
 *   2. Forest-gradient hero with editorial title + summary stats
 *   3. Critical alert (Tren Ligero tarjeta, etc.) — elevated before steps
 *   4. Ruta A / Ruta B tabs
 *   5. Vertical step list using real metro line colours
 *   6. Contextual Marimbas CTA when destination is near Estadio Azteca
 *   7. "Try another route" search + related routes grid
 *   8. Long-form SEO block (Playfair H2)
 */

function parseSlug(slug) {
  if (!slug) return { origen: '', destino: '' }
  const toIdx = slug.indexOf('-to-')
  if (toIdx > 0) {
    return { origen: slug.substring(0, toIdx), destino: slug.substring(toIdx + 4) }
  }
  const parts = slug.split('-a-')
  if (parts.length < 2) return { origen: slug, destino: '' }
  return { origen: parts[0], destino: parts.slice(1).join('-a-') }
}

// Per-city config for labels, costs, and official links
const CIUDAD_CONFIG = {
  cdmx: {
    label: 'Metro CDMX · Ruta paso a paso',
    tarjeta: 'Tarjeta de Movilidad Integrada — $6 MXN por viaje en Metro CDMX.',
    sitio: 'https://www.metro.cdmx.gob.mx',
    sitioLabel: 'metro.cdmx.gob.mx',
    hub: '/cdmx/',
  },
  gdl: {
    label: 'SITEUR GDL · Ruta paso a paso',
    tarjeta: 'Tarjeta GDL — $9.50 MXN por viaje en Tren Ligero SITEUR.',
    sitio: 'https://www.siteur.gob.mx',
    sitioLabel: 'siteur.gob.mx',
    hub: '/gdl/',
  },
  mty: {
    label: 'Metrorrey MTY · Ruta paso a paso',
    tarjeta: 'Tarjeta Feria — $4.50 MXN por viaje en Metrorrey.',
    sitio: 'https://www.nl.gob.mx/servicios/metrorrey',
    sitioLabel: 'nl.gob.mx',
    hub: '/mty/',
  },
}

function matchStation(text, ciudad = 'cdmx') {
  if (!text) return null
  // For GDL/MTY, slugs from generateStaticParams are already canonical
  if (ciudad !== 'cdmx') return text
  // CDMX: fuzzy match against grafo
  const normalized = text.toLowerCase().replace(/-/g, ' ').trim()
  if (grafo[text]) return text
  const dashSlug = text.toLowerCase().replace(/\s+/g, '-')
  if (grafo[dashSlug]) return dashSlug
  for (const [slug, data] of Object.entries(grafo)) {
    const name = (data.nombre || '').toLowerCase()
    if (name === normalized) return slug
    if (slug === normalized.replace(/\s+/g, '-')) return slug
  }
  for (const [slug, data] of Object.entries(grafo)) {
    const name = (data.nombre || '').toLowerCase()
    if (name && (name.includes(normalized) || normalized.includes(name))) return slug
  }
  return null
}

// Destinations whose arrival corridor should pitch Marimbas Condesa.
// Chilpancingo (L9) is ~5 min from the apartments — close enough that any
// route ending near Condesa/Coyoacán/Tasqueña/Azteca benefits from the CTA.
const MARIMBAS_TARGETS = new Set([
  'chilpancingo', 'tasquena', 'coyoacan', 'general-anaya',
  'insurgentes', 'sevilla', 'chapultepec', 'estadio-azteca',
])

function isMarimbasRoute(origenSlug, destinoSlug) {
  return MARIMBAS_TARGETS.has(origenSlug) || MARIMBAS_TARGETS.has(destinoSlug)
}

export default function RutaClient({ slug, ciudad = 'cdmx' }) {
  const [ruta, setRuta] = useState(null)
  const [rutaAlt, setRutaAlt] = useState(null)
  const [activeTab, setActiveTab] = useState('A')
  const [origenNombre, setOrigenNombre] = useState('')
  const [destinoNombre, setDestinoNombre] = useState('')
  const [origenSlug, setOrigenSlug] = useState(null)
  const [destinoSlug, setDestinoSlug] = useState(null)
  const [error, setError] = useState(null)
  const [schemaJson, setSchemaJson] = useState(null)

  // Resolve display name for any city's station slug
  const getStationName = (s) => {
    if (!s) return s
    if (ciudad === 'cdmx') return grafo[s]?.nombre || STATION_DISPLAY_NAMES[s] || s
    return STATION_DISPLAY_NAMES[s] || s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  }
  const ciudadCfg = CIUDAD_CONFIG[ciudad] || CIUDAD_CONFIG.cdmx

  useEffect(() => {
    let cancelled = false

    async function computeRoute() {
      const { origen, destino } = parseSlug(slug)
      const origenSlugMatch = matchStation(origen, ciudad)
      const destinoSlugMatch = matchStation(destino, ciudad)

      if (cancelled) return
      setOrigenSlug(origenSlugMatch)
      setDestinoSlug(destinoSlugMatch)

      if (origenSlugMatch) {
        setOrigenNombre(getStationName(origenSlugMatch))
      }
      if (destinoSlugMatch) {
        setDestinoNombre(getStationName(destinoSlugMatch))
      }

      if (!origenSlugMatch || !destinoSlugMatch) {
        setError('No encontramos las estaciones. Intenta buscar otra ruta.')
        return
      }

      const resultado = await findRoute(origenSlugMatch, destinoSlugMatch, ciudad)
      if (cancelled) return
      setRuta(resultado)

      const alt = await findAlternativeRoute(origenSlugMatch, destinoSlugMatch, ciudad)
      if (cancelled) return
      if (alt && alt.encontrada) setRutaAlt(alt)

      if (resultado && resultado.encontrada) {
        const estimatedMinutes =
          resultado.tiempo_total || Math.round(resultado.pasos.length * 2 + 3)

        const tripSchema = {
          '@context': 'https://schema.org',
          '@type': 'Trip',
          name: `Ruta de ${getStationName(origenSlugMatch)} a ${getStationName(destinoSlugMatch)}`,
          description: `Cómo llegar de ${getStationName(origenSlugMatch)} a ${getStationName(destinoSlugMatch)} en transporte público`,
          itinerary: {
            '@type': 'ItemList',
            itemListElement: resultado.pasos.map((paso, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: { '@type': 'TransitStation', name: paso.nombre },
            })),
          },
          provider: {
            '@type': 'Organization',
            name: 'MetroGuia.mx',
            url: 'https://metroguia.mx',
          },
        }

        const breadcrumbSchema = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx' },
            { '@type': 'ListItem', position: 2, name: 'Ruta', item: 'https://metroguia.mx/ruta' },
            {
              '@type': 'ListItem',
              position: 3,
              name: `${getStationName(origenSlugMatch)} a ${getStationName(destinoSlugMatch)}`,
              item: `https://metroguia.mx/${ciudad !== 'cdmx' ? ciudad + '/' : ''}ruta/${slug}`,
            },
          ],
        }

        const howtoSchema = {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: `Cómo llegar de ${getStationName(origenSlugMatch)} a ${getStationName(destinoSlugMatch)} en transporte público`,
          description: `Guía paso a paso para viajar de ${getStationName(origenSlugMatch)} a ${getStationName(destinoSlugMatch)} en transporte público.`,
          totalTime: `PT${estimatedMinutes}M`,
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'MXN',
            value: String(resultado.costo || '6'),
          },
          step: resultado.pasos.map((paso, idx) => {
            const lineaLabel = formatLineLabel(paso.linea)
            const suffix = lineaLabel ? ` (${lineaLabel})` : ''
            return {
              '@type': 'HowToStep',
              position: idx + 1,
              name: `${idx === 0 ? 'Aborda' : 'Dirígete'} en estación ${paso.nombre}`,
              text: `${idx === 0 ? 'Dirígete a la estación' : 'Continúa a la estación'} ${paso.nombre}${suffix}`,
              url: `https://metroguia.mx/ruta/${slug}#paso-${idx + 1}`,
            }
          }),
          tool: [{ '@type': 'HowToTool', name: 'Tarjeta de Movilidad Integrada' }],
        }

        setSchemaJson({
          trip: JSON.stringify(tripSchema),
          breadcrumb: JSON.stringify(breadcrumbSchema),
          howto: JSON.stringify(howtoSchema),
        })
      }
    }

    computeRoute()
    return () => { cancelled = true }
  }, [slug])

  const activeRuta = activeTab === 'B' && rutaAlt?.encontrada ? rutaAlt : ruta

  const marimbasRelevant = useMemo(
    () => isMarimbasRoute(origenSlug, destinoSlug),
    [origenSlug, destinoSlug]
  )

  return (
    <div style={{
      maxWidth: '920px',
      margin: '0 auto',
      padding: '1.5rem 1rem 4rem',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      {/* Schema.org */}
      {schemaJson && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson.trip }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson.breadcrumb }} />
          {schemaJson.howto && (
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson.howto }} />
          )}
        </>
      )}

      {/* Breadcrumb */}
      <nav style={{
        fontSize: '0.78rem',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
      }}>
        <a href="/" style={{ color: 'var(--chiapas)', textDecoration: 'none', fontWeight: 600 }}>Inicio</a>
        <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>/</span>
        <a href={ciudadCfg.hub} style={{ color: 'var(--chiapas)', textDecoration: 'none', fontWeight: 600 }}>{ciudad.toUpperCase()}</a>
        {origenNombre && destinoNombre && (
          <>
            <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--text)' }}>
              {origenNombre} → {destinoNombre}
            </span>
          </>
        )}
      </nav>

      {/* HERO — forest gradient */}
      {origenNombre && destinoNombre && (
        <section
          className="forest-hero"
          style={{
            borderRadius: 'var(--radius-xl, 24px)',
            padding: '2rem 2rem 1.5rem',
            color: '#FFFFFF',
            marginBottom: '1.5rem',
            boxShadow: '0 20px 60px rgba(31, 58, 46, 0.18)',
          }}
        >
          <div style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--amber)',
            marginBottom: '0.75rem',
          }}>
            {ciudadCfg.label}
          </div>

          <h1
            className="editorial-h1"
            style={{
              color: '#FFFFFF',
              margin: 0,
              fontSize: 'clamp(1.65rem, 4.5vw, 2.75rem)',
              lineHeight: 1.1,
            }}
          >
            {origenNombre}
            <span style={{ color: 'var(--amber)', margin: '0 0.4rem', fontWeight: 700 }}>→</span>
            {destinoNombre}
          </h1>

          {/* Summary stat strip */}
          {activeRuta && activeRuta.encontrada && (
            <div style={{
              marginTop: '1.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-lg, 16px)',
              padding: '1rem 1.25rem',
            }}>
              <Stat label="Tiempo" value={`${activeRuta.tiempo_total || Math.round(activeRuta.pasos.length * 2 + 3)} min`} />
              <Stat label="Costo" value={`$${activeRuta.costo || 6} MXN`} />
              <Stat label="Transbordos" value={String(activeRuta.transbordos ?? 0)} />
              <Stat label="Estaciones" value={String(activeRuta.pasos?.length || 0)} />
            </div>
          )}

          {/* Line badges */}
          {activeRuta?.lineas_usadas?.length > 0 && (
            <div style={{
              display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem',
            }}>
              {activeRuta.lineas_usadas
                .filter((l) => formatLineLabel(l) !== '')
                .map((linea, idx) => {
                  const bg = getLineColor(linea)
                  const isYellow = String(linea) === '5'
                  return (
                    <span
                      key={idx}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '999px',
                        backgroundColor: bg,
                        color: isYellow ? '#1F3A2E' : '#FFFFFF',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.03em',
                      }}
                    >
                      {formatLineLabel(linea)}
                    </span>
                  )
                })}
            </div>
          )}
        </section>
      )}

      {/* CRITICAL ALERTS — Tren Ligero tarjeta, etc. */}
      {activeRuta?.alertas?.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(199, 90, 59, 0.12) 0%, rgba(199, 90, 59, 0.04) 100%)',
          border: '1px solid var(--terracotta)',
          borderRadius: 'var(--radius-lg, 16px)',
          padding: '1.1rem 1.25rem',
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '0.9rem',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '2.25rem', height: '2.25rem',
            borderRadius: '50%',
            background: 'var(--terracotta)',
            color: '#FFFFFF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', fontWeight: 800,
            flexShrink: 0,
          }}>!</div>
          <div>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--terracotta)',
              marginBottom: '0.25rem',
            }}>
              Alerta importante
            </div>
            {activeRuta.alertas.map((alerta, idx) => (
              <div key={idx} style={{
                fontSize: '0.92rem',
                color: 'var(--text)',
                lineHeight: 1.5,
                marginTop: idx === 0 ? 0 : '0.4rem',
              }}>
                {alerta}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{
          background: 'rgba(199, 90, 59, 0.08)',
          border: '1px solid var(--terracotta)',
          borderRadius: 'var(--radius-lg, 16px)',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          color: 'var(--text)',
          fontSize: '0.95rem',
        }}>
          {error}
        </div>
      )}

      {/* RUTA A / RUTA B tabs */}
      {ruta?.encontrada && rutaAlt?.encontrada && (
        <div style={{
          display: 'inline-flex',
          gap: '0.25rem',
          background: 'var(--linen)',
          border: '1px solid rgba(31, 58, 46, 0.1)',
          borderRadius: '999px',
          padding: '0.3rem',
          marginBottom: '1.25rem',
        }}>
          <TabButton
            active={activeTab === 'A'}
            onClick={() => setActiveTab('A')}
            label="Ruta A"
            sub={ruta.tiempo_total ? `${ruta.tiempo_total} min` : ''}
          />
          <TabButton
            active={activeTab === 'B'}
            onClick={() => setActiveTab('B')}
            label="Ruta B"
            sub={rutaAlt.tiempo_total ? `${rutaAlt.tiempo_total} min` : 'Alternativa'}
          />
        </div>
      )}

      {/* STEP LIST */}
      {activeRuta?.encontrada && activeRuta.pasos?.length > 0 && (
        <section style={{
          background: '#FFFFFF',
          border: '1px solid rgba(31, 58, 46, 0.1)',
          borderRadius: 'var(--radius-lg, 16px)',
          padding: '1.5rem 1.5rem 0.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 8px 24px rgba(31, 58, 46, 0.06)',
        }}>
          <h2
            className="editorial-h2"
            style={{
              fontSize: '1.35rem',
              margin: '0 0 1.25rem',
              color: 'var(--text)',
            }}
          >
            Paso a paso
          </h2>

          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {activeRuta.pasos.map((paso, idx) => {
              const lineaLabel = formatLineLabel(paso.linea)
              const lineColor = getLineColor(paso.linea)
              const isLast = idx === activeRuta.pasos.length - 1
              return (
                <li
                  key={idx}
                  id={`paso-${idx + 1}`}
                  style={{
                    position: 'relative',
                    paddingLeft: '3rem',
                    paddingBottom: isLast ? '0.75rem' : '1.25rem',
                  }}
                >
                  {/* Vertical line connector */}
                  {!isLast && (
                    <div style={{
                      position: 'absolute',
                      left: '1.05rem',
                      top: '2.1rem',
                      width: '2px',
                      bottom: 0,
                      background: `linear-gradient(180deg, ${lineColor} 0%, rgba(31, 58, 46, 0.12) 100%)`,
                    }} />
                  )}

                  {/* Station dot */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.1rem',
                    width: '2.2rem',
                    height: '2.2rem',
                    borderRadius: '50%',
                    background: idx === 0 || isLast ? 'var(--forest)' : '#FFFFFF',
                    border: `3px solid ${idx === 0 || isLast ? 'var(--amber)' : lineColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: idx === 0 || isLast ? '#FFFFFF' : 'var(--text)',
                    boxShadow: '0 2px 8px rgba(31, 58, 46, 0.08)',
                  }}>
                    {idx === 0 ? '●' : isLast ? '◉' : idx + 1}
                  </div>

                  {/* Line label (when line changes — transbordo) */}
                  {lineaLabel && idx > 0 && activeRuta.pasos[idx - 1]?.linea !== paso.linea && (
                    <div style={{
                      display: 'inline-block',
                      marginBottom: '0.35rem',
                      padding: '0.18rem 0.6rem',
                      borderRadius: '999px',
                      background: lineColor,
                      color: String(paso.linea) === '5' ? '#1F3A2E' : '#FFFFFF',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                    }}>
                      ↻ Transbordo a {lineaLabel}
                    </div>
                  )}

                  {/* Station name */}
                  <div style={{
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.3,
                  }}>
                    {paso.nombre}
                  </div>

                  {/* Meta */}
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.2rem',
                  }}>
                    {idx === 0 && 'Punto de partida · '}
                    {isLast && 'Llegada · '}
                    {lineaLabel && `Línea ${lineaLabel}`}
                  </div>
                </li>
              )
            })}
          </ol>
        </section>
      )}

      {/* MARIMBAS CONTEXTUAL CTA */}
      {marimbasRelevant && activeRuta?.encontrada && (
        <MarimbasCondesa />
      )}

      {/* Ad after steps */}
      {activeRuta?.encontrada && (
        <div style={{ margin: '1.5rem 0' }}>
          <AdBannerLazyInArticle slot="1082410395" />
        </div>
      )}

      {/* Station detail links */}
      {origenSlug && destinoSlug && (
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          <StationLink slug={origenSlug} label="Origen" name={getStationName(origenSlug)} />
          <StationLink slug={destinoSlug} label="Destino" name={getStationName(destinoSlug)} />
        </div>
      )}

      {/* Not found */}
      {ruta && !ruta.encontrada && !error && (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          marginBottom: '2rem',
          background: 'var(--linen)',
          border: '1px solid rgba(31, 58, 46, 0.1)',
          borderRadius: 'var(--radius-lg, 16px)',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚇</div>
          <h3 className="serif" style={{
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
            color: 'var(--text)',
          }}>
            No encontramos esa ruta
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
            Intenta con otras estaciones abajo.
          </p>
        </div>
      )}

      {/* SEARCH ANOTHER ROUTE */}
      <section style={{
        padding: '1.5rem',
        borderRadius: 'var(--radius-lg, 16px)',
        border: '1px solid rgba(31, 58, 46, 0.1)',
        background: 'var(--linen-soft)',
        marginBottom: '1.75rem',
      }}>
        <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
          Planificar otra ruta
        </div>
        <SearchBar ciudad={ciudad} />
      </section>

      {/* RELATED ROUTES */}
      {/* Related routes — only available for CDMX where rutas-populares data exists */}
      {origenNombre && ciudad === 'cdmx' && (
        <section style={{ marginBottom: '2rem' }}>
          <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
            Rutas populares desde {origenNombre}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.65rem',
          }}>
            {getRelatedRoutes(slug.split('-a-')[0], slug.split('-a-')[1], 6).map((r, idx) => (
              <a
                key={idx}
                href={`/ruta/${r.origen}-a-${r.destino}`}
                style={{
                  padding: '0.9rem 1rem',
                  borderRadius: 'var(--radius, 10px)',
                  border: '1px solid rgba(31, 58, 46, 0.12)',
                  background: '#FFFFFF',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  display: 'block',
                  transition: 'transform 0.15s, border-color 0.15s',
                }}
              >
                {r.titulo}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* LONG-FORM SEO */}
      {activeRuta?.encontrada && (
        <section style={{
          padding: '2rem',
          borderRadius: 'var(--radius-lg, 16px)',
          border: '1px solid rgba(31, 58, 46, 0.1)',
          background: '#FFFFFF',
          lineHeight: 1.65,
          boxShadow: '0 8px 24px rgba(31, 58, 46, 0.04)',
        }}>
          <h2
            className="editorial-h2"
            style={{
              fontSize: '1.5rem',
              marginTop: 0,
              marginBottom: '1rem',
              color: 'var(--text)',
            }}
          >
            Cómo llegar de {origenNombre} a {destinoNombre}
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 1.25rem' }}>
            Esta ruta en transporte público te lleva de{' '}
            <strong>{origenNombre}</strong> a <strong>{destinoNombre}</strong> en aproximadamente{' '}
            {activeRuta.tiempo_total || Math.round(activeRuta.pasos.length * 2 + 3)} minutos.
            Utiliza {formatLineasUsadas(activeRuta.lineas_usadas)} para completar tu viaje por{' '}
            <strong>${activeRuta.costo || 6} MXN</strong>.
          </p>

          <h3 className="serif" style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            color: 'var(--forest)',
          }}>
            Consejos para tu viaje
          </h3>

          <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.95rem', color: 'var(--text)' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              {ciudadCfg.tarjeta}
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Evita horas pico (8–10 AM y 5–7 PM) para viajes más cómodos.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Descarga el mapa offline — señal limitada dentro de varias estaciones.
            </li>
            <li>
              Verifica alertas oficiales antes de salir en{' '}
              <a href={ciudadCfg.sitio} style={{ color: 'var(--chiapas)' }}>{ciudadCfg.sitioLabel}</a>.
            </li>
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <AdBannerLazy slot="4434764790" />
          </div>
        </section>
      )}
    </div>
  )
}

/* ─── Sub-components ─────────────────────────────────────────────────── */

function Stat({ label, value }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 0.72)',
      }}>
        {label}
      </div>
      <div
        className="serif"
        style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#FFFFFF',
          marginTop: '0.15rem',
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
    </div>
  )
}

function TabButton({ active, onClick, label, sub }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: 'none',
        background: active ? 'var(--forest)' : 'transparent',
        color: active ? '#FFFFFF' : 'var(--text)',
        padding: '0.5rem 1.1rem',
        borderRadius: '999px',
        fontSize: '0.85rem',
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.15s',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}
    >
      {label}
      {sub && (
        <span style={{
          fontSize: '0.72rem',
          fontWeight: 500,
          opacity: active ? 0.85 : 0.6,
        }}>
          · {sub}
        </span>
      )}
    </button>
  )
}

function StationLink({ slug, label, name }) {
  return (
    <a
      href={`/estacion/${slug}/`}
      style={{
        flex: 1,
        minWidth: '200px',
        padding: '0.9rem 1.1rem',
        background: '#FFFFFF',
        border: '1px solid rgba(31, 58, 46, 0.12)',
        borderRadius: 'var(--radius, 10px)',
        color: 'var(--text)',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.15rem',
      }}
    >
      <span style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--chiapas)',
      }}>
        📍 {label}
      </span>
      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>
        {name}
      </span>
    </a>
  )
}
