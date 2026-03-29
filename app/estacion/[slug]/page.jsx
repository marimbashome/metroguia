import { estaciones } from '@/data/estaciones'
import { hospedaje } from '@/data/hospedaje'
import { rutasPopulares } from '@/data/rutas-populares'
import SearchBar from '@/app/components/SearchBar'
import AdBanner, { AdBannerInArticle } from '@/app/components/AdBanner'

import AffiliateTransportCard from '@/app/components/AffiliateTransportCard'
export function generateStaticParams() {
  return estaciones.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const estacion = estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return { title: 'Estación no encontrada' }

  // Build enhanced metadata for Línea B stations with practical info
  let title = estacion.seo_title
  let description = estacion.meta_description

  // For Línea B specifically: include line color, connecting lines, and tourist tips
  if (estacion.linea === 'B') {
    title = `Estación ${estacion.nombre} - Línea ${estacion.linea} Metro CDMX | Guía completa`

    // Build description with transbordos + POI + tourist tips
    const transbordoText = estacion.transferencias && estacion.transferencias.length > 0
      ? `Transbordos a Línea${estacion.transferencias.length > 1 ? 's' : ''} ${estacion.transferencias.join(', ')}. `
      : 'Sin transferencias directas. '

    const poiText = estacion.pois && estacion.pois.length > 0
      ? `Cerca: ${estacion.pois.slice(0, 3).map(p => p.nombre).join(', ')}. `
      : ''

    const tourTip = estacion.tips && estacion.tips.length > 0
      ? `Consejo: ${estacion.tips[0]} `
      : ''

    description = `${estacion.nombre} en Línea B del Metro CDMX. ${transbordoText}${poiText}${tourTip}Ubicada en ${estacion.alcaldia}.`
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://metroguia.mx/estacion/${estacion.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
  }
}

export default function EstacionPage({ params }) {
  const estacion = estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Estación no encontrada</h1>
    </div>
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: `Metro ${estacion.nombre} CDMX`,
    description: estacion.meta_description,
    url: `https://metroguia.mx/estacion/${estacion.slug}/`,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressRegion: estacion.alcaldia,
      addressCountry: 'MX',
    },
    containedInPlace: {
      '@type': 'CivicStructure',
      name: `Línea ${estacion.linea} del Metro CDMX`,
      url: `https://metroguia.mx/linea/${estacion.linea}/`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'CDMX',
        item: 'https://metroguia.mx/cdmx/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Línea ${estacion.linea}`,
        item: `https://metroguia.mx/linea/${estacion.linea}/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: estacion.nombre,
        item: `https://metroguia.mx/estacion/${estacion.slug}/`
      }
    ]
  }

  // Generate FAQ schema dynamically from station data
  const faqItems = []

  // Q1: How do I get to this station?
  faqItems.push({
    '@type': 'Question',
    name: `¿Cómo llego a la estación ${estacion.nombre}?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `La estación ${estacion.nombre} está ubicada en la Alcaldía ${estacion.alcaldia} y pertenece a la Línea ${estacion.linea} del Metro CDMX. Puedes acceder desde las principales estaciones conectadas a través de sus transferencias.${estacion.transferencias && estacion.transferencias.length > 0 ? ` Las líneas de transferencia disponibles son: Línea${estacion.transferencias.length > 1 ? 's' : ''} ${estacion.transferencias.join(', ')}. ` : ''} Consulta el mapa del metro o usa nuestro planificador de rutas para obtener direcciones específicas.`
    }
  })

  // Q2: What's nearby this station?
  if (estacion.pois && estacion.pois.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map(p => `${p.nombre} (${p.tipo}, a ${p.distancia})`).join(', ')
    faqItems.push({
      '@type': 'Question',
      name: `¿Qué hay cerca de la estación ${estacion.nombre}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Alrededor de la estación ${estacion.nombre} encontrarás varios lugares de interés: ${poiList}. La zona ofrece diversos servicios, entretenimiento y opciones de transporte alternativo. Consulta la sección de "Lugares cercanos" en esta página para una lista completa con descripciones detalladas de cada sitio.`
      }
    })
  }

  // Q3: What are the station hours?
  faqItems.push({
    '@type': 'Question',
    name: `¿Cuál es el horario de la estación ${estacion.nombre}?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `El Metro CDMX opera de lunes a viernes de 5:00 AM a 12:00 AM (medianoche), sábados de 6:00 AM a 12:00 AM, y domingos y festivos de 7:00 AM a 12:00 AM. La estación ${estacion.nombre} (Línea ${estacion.linea}) sigue estos horarios estándar. Para un mejor viaje, consulta nuestra sección "Mejor horario para visitar" que ofrece recomendaciones específicas para evitar horas pico.`
    }
  })

  // Q4: Is the station accessible?
  // Check if station data includes accessibility info or infer from tips
  const hasAccessibilityInfo = estacion.tips && estacion.tips.some(tip => tip.toLowerCase().includes('accesib') || tip.toLowerCase().includes('silla') || tip.toLowerCase().includes('discapacid'))
  if (hasAccessibilityInfo) {
    faqItems.push({
      '@type': 'Question',
      name: `¿La estación ${estacion.nombre} es accesible?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `La estación ${estacion.nombre} cuenta con facilidades de accesibilidad para personas con movilidad reducida. El Metro CDMX ha implementado mejoras en ascensores, rampas y áreas de circulación en muchas estaciones. Consulta nuestra sección de "Tips para turistas" en esta página para información específica sobre las instalaciones de accesibilidad disponibles en esta estación.`
      }
    })
  }

  // Q5: Which line passes through this station?
  if (estacion.transferencias && estacion.transferencias.length > 0) {
    faqItems.push({
      '@type': 'Question',
      name: `¿Qué líneas pasan por la estación ${estacion.nombre}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `La estación ${estacion.nombre} es una parada principal de la Línea ${estacion.linea} del Metro CDMX. Además, esta estación cuenta con transferencias directas a las Línea${estacion.transferencias.length > 1 ? 's' : ''} ${estacion.transferencias.join(', ')}, lo que la convierte en un punto de conexión importante en la red del Metro. Esto permite acceso rápido a múltiples destinos en la ciudad.`
      }
    })
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems
  }

  // Get line color from CSS variable
  const lineaClasses = {
    '1': '--linea-1',
    '2': '--linea-2',
    '3': '--linea-3',
    '4': '--linea-4',
    '5': '--linea-5',
    '6': '--linea-6',
    '7': '--linea-7',
    '8': '--linea-8',
    '9': '--linea-9',
    'A': '--linea-A',
    'B': '--linea-B',
    '12': '--linea-12',
  }

  // Calculate hero gradient
  const heroGradient = `linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)`

  // Nearby stations mapping — stations that should show Condesa listings
  const nearbyStationMap = {
    'chilpancingo': 'chilpancingo',
    'patriotismo': 'chilpancingo',
    'juanacatlan': 'chilpancingo',
    'chapultepec': 'chilpancingo',
  }
  const lookupSlug = nearbyStationMap[estacion.slug] || estacion.slug
  const nearbyListings = hospedaje.filter(h => h.estacion_cercana === lookupSlug && h.es_marimbas)
  const isDirectStation = estacion.slug === lookupSlug

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── BREADCRUMBS ── */}
      <div style={{
        padding: '1rem 1.25rem',
        borderBottom: '1px solid var(--border)',
        fontSize: '0.875rem',
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
          }}>
            <a href="/cdmx/" style={{ color: 'var(--primary)' }}>CDMX</a>
            <span>/</span>
            <a href={`/linea/${estacion.linea}/`} style={{ color: 'var(--primary)' }}>Línea {estacion.linea}</a>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>{estacion.nombre}</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section style={{
        background: heroGradient,
        borderBottom: `2px solid var(${lineaClasses[estacion.linea]})`,
        padding: '3rem 1.25rem 2.5rem',
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}>
            {/* Line badge circle */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '50%',
              backgroundColor: `var(${lineaClasses[estacion.linea]})`,
              color: estacion.linea === '5' ? '#000' : 'white',
              fontWeight: 800,
              fontSize: '1.25rem',
              flexShrink: 0,
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}>
              {estacion.linea}
            </div>

            {/* Station info */}
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
                color: 'var(--text)',
              }}>
                {estacion.nombre}
              </h1>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '0.5rem',
              }}>
                <span className="badge badge-primary">Línea {estacion.linea}</span>
                {estacion.tipo_zona && (
                  <span className="badge" style={{
                    backgroundColor: 'var(--surface-hover)',
                    borderColor: 'var(--border-light)',
                    textTransform: 'capitalize',
                  }}>
                    {estacion.tipo_zona.replace('-', ' ')}
                  </span>
                )}
              </div>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                margin: 0,
              }}>
                📍 Alcaldía: {estacion.alcaldia}
              </p>
            </div>
          </div>

          {/* SearchBar for route planning FROM this station */}
          <div style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            border: '1px solid var(--border)',
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              margin: 0,
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}>
              Planifica tu ruta desde aquí
            </p>
            <SearchBar ciudad="cdmx" origin={estacion.nombre} />
          </div>
        </div>
      </section>

      {/* ── QUICK STATS ROW ── */}
      <section style={{
        padding: '2rem 1.25rem',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: `var(${lineaClasses[estacion.linea]})`,
              }}>
                {estacion.linea}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                Línea
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--info)',
              }}>
                {estacion.transferencias?.length || 0}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                Transbordos
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--success)',
              }}>
                {estacion.pois?.length || 0}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                POIs cercanos
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--warning)',
                textTransform: 'capitalize',
              }}>
                {estacion.tipo_zona?.slice(0, 3)}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}>
                Zona
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Intro section */}
          <div style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginBottom: '3rem',
          }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--text)',
              margin: 0,
            }}>
              {estacion.intro}
            </p>
          </div>

          {/* Ad 1 — After intro */}
          <AdBanner slot="4434764790" format="auto" />

          {/* LUGARES CERCANOS (POIs) */}
          {estacion.pois && estacion.pois.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
                📍 Lugares cercanos
              </h2>
              <div className="grid-2" style={{
                marginBottom: '1.5rem',
              }}>
                {estacion.pois.map((poi, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}>
                      <span style={{
                        fontSize: '1.25rem',
                        flexShrink: 0,
                      }}>
                        {poi.tipo === 'parque' && '🌳'}
                        {poi.tipo === 'transporte' && '🚌'}
                        {poi.tipo === 'comercio' && '🛒'}
                        {poi.tipo === 'religioso' && '⛪'}
                        {poi.tipo === 'cultural' && '🎭'}
                        {poi.tipo === 'museo' && '🏛️'}
                        {poi.tipo === 'restaurante' && '🍴'}
                        {poi.tipo === 'hospedaje' && '🏨'}
                        {!['parque', 'transporte', 'comercio', 'religioso', 'cultural', 'museo', 'restaurante', 'hospedaje'].includes(poi.tipo) && '📍'}
                      </span>
                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          marginBottom: '0.25rem',
                          color: 'var(--text)',
                        }}>
                          {poi.nombre}
                        </h4>
                        <p style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          margin: 0,
                          marginBottom: '0.25rem',
                          textTransform: 'capitalize',
                        }}>
                          {poi.tipo}
                        </p>
                        <p style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-dim)',
                          margin: 0,
                        }}>
                          ⏱ {poi.distancia}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TRANSFERENCIAS */}
          {estacion.transferencias && estacion.transferencias.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
                🔄 Transferencias disponibles
              </h2>
              <div className="card" style={{
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
              }}>
                {estacion.transferencias.map((trans) => {
                  const transClass = `linea-${trans}`
                  return (
                    <a
                      key={trans}
                      href={`/linea/${trans}/`}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem',
                        borderRadius: 'var(--radius)',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--border)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div className={`linea-badge ${transClass}`}>
                        {trans}
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                        textAlign: 'center',
                      }}>
                        Línea {trans}
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* Ad 2 — In-article */}
          <AdBannerInArticle slot="1082410395" />

          {/* HISTORIA DEL ÍCONO */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
              📚 Historia del ícono
            </h2>
            <div className="card" style={{
              padding: '1.5rem',
              backgroundColor: 'var(--surface)',
              borderLeft: `4px solid var(${lineaClasses[estacion.linea]})`,
            }}>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text)',
                margin: 0,
              }}>
                {estacion.historia_icono}
              </p>
            </div>
          </div>

          {/* TIPS PARA TURISTAS */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
              💡 Tips para turistas
            </h2>
            <div className="card" style={{
              padding: '1.5rem',
            }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {estacion.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: idx < estacion.tips.length - 1 ? '1rem' : 0,
                      paddingLeft: '2rem',
                      position: 'relative',
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--success)',
                      fontWeight: 700,
                    }}>
                      ✓
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Affiliate Transport Card */}
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateTransportCard ciudad="CDMX" estacion={null} fechas={null} />
          </div>

          {/* MEJOR HORARIO */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
              🕐 Mejor horario para visitar
            </h2>
            <div className="card" style={{
              padding: '1.5rem',
              backgroundColor: 'var(--surface)',
              borderLeft: `4px solid var(--info)`,
            }}>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text)',
                margin: 0,
                lineHeight: 1.7,
              }}>
                {estacion.mejor_horario}
              </p>
            </div>
          </div>

          {/* MUNDIAL 2026 */}
          {estacion.mundial_relevancia && !estacion.mundial_relevancia.includes('Sin relevancia') && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
                🌍 Relevancia para el Mundial 2026
              </h2>
              <div className="card" style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(245, 166, 35, 0.08)',
                borderLeft: `4px solid var(--primary)`,
                border: `1px solid var(--primary-border)`,
              }}>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  margin: 0,
                  lineHeight: 1.7,
                }}>
                  {estacion.mundial_relevancia}
                </p>
              </div>
            </div>
          )}

          {/* HOSPEDAJE CERCA — STR Listings CTA */}
          {nearbyListings.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
                🏠 {isDirectStation
                  ? `Hospedaje cerca de ${estacion.nombre}`
                  : `Hospedaje en La Condesa — a minutos de ${estacion.nombre}`}
              </h2>
              <div style={{
                backgroundColor: 'rgba(245, 166, 35, 0.06)',
                border: '1px solid var(--primary-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                  marginBottom: '1.25rem',
                  lineHeight: 1.6,
                }}>
                  {isDirectStation
                    ? `Departamentos verificados a ${nearbyListings[0]?.distancia_metro || '5 min'} de la estación ${estacion.nombre}. Ideales para turistas y visitantes del Mundial 2026.`
                    : `Departamentos en La Condesa, a minutos caminando de la estación ${estacion.nombre}. Zona segura con restaurantes, parques y vida nocturna.`}
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1rem',
                }}>
                  {nearbyListings.slice(0, 4).map((listing) => (
                    <a
                      key={listing.id}
                      href={listing.url_reserva}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        padding: '1.25rem',
                        textDecoration: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                      }}>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--primary)',
                          backgroundColor: 'rgba(245, 166, 35, 0.12)',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                        }}>
                          Marimbas Home
                        </span>
                        <span style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-dim)',
                          textTransform: 'capitalize',
                        }}>
                          {listing.tipo}
                        </span>
                      </div>
                      <h4 style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginBottom: '0.5rem',
                        lineHeight: 1.3,
                      }}>
                        {listing.nombre}
                      </h4>
                      <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.75rem',
                        flexWrap: 'wrap',
                      }}>
                        <span>👥 {listing.huespedes} huéspedes</span>
                        <span>🛏 {listing.recamaras} rec</span>
                        <span>🚿 {listing.banos} baño{listing.banos > 1 ? 's' : ''}</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <div style={{
                          fontSize: '1.1rem',
                          fontWeight: 800,
                          color: 'var(--text)',
                        }}>
                          ${listing.precio_noche.toLocaleString()} <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 400,
                            color: 'var(--text-dim)',
                          }}>MXN/noche</span>
                        </div>
                        <span style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--primary)',
                        }}>
                          Reservar →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
                {nearbyListings.length > 4 && (
                  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <a
                      href="/hospedaje/"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                        textDecoration: 'none',
                      }}
                    >
                      Ver los {nearbyListings.length} hospedajes disponibles →
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ad 3 — Before CTAs */}
          <AdBanner slot="4434764790" format="auto" />

          {/* RUTAS POPULARES DESDE ESTA ESTACIÓN */}
          {(() => {
            const rutasDesde = rutasPopulares.filter(r => r.origen === estacion.slug).slice(0, 8)
            const rutasHacia = rutasPopulares.filter(r => r.destino === estacion.slug).slice(0, 4)
            return (rutasDesde.length > 0 || rutasHacia.length > 0) ? (
              <div style={{ marginBottom: '3rem' }}>
                {rutasDesde.length > 0 && (
                  <>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--text)' }}>
                      Rutas desde {estacion.nombre}
                    </h2>
                    <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                      {rutasDesde.map((ruta) => (
                        <a
                          key={ruta.destino}
                          href={`/ruta/${ruta.origen}-a-${ruta.destino}/`}
                          className="card"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            padding: '1rem 1.25rem',
                            textDecoration: 'none',
                          }}
                        >
                          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>
                            {ruta.titulo}
                          </div>
                          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>→</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
                {rutasHacia.length > 0 && (
                  <>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--text-dim)', fontSize: '1rem' }}>
                      Cómo llegar a {estacion.nombre}
                    </h3>
                    <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                      {rutasHacia.map((ruta) => (
                        <a
                          key={ruta.origen}
                          href={`/ruta/${ruta.origen}-a-${ruta.destino}/`}
                          className="card"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            padding: '1rem 1.25rem',
                            textDecoration: 'none',
                          }}
                        >
                          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>
                            Desde {ruta.titulo.split(' a ')[0] || ruta.origen}
                          </div>
                          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>→</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : null
          })()}

          {/* NAVIGATION SECTION */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '1rem',
          }}>
            <a
              href={`/linea/${estacion.linea}/`}
              className="btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem',
                textDecoration: 'none',
              }}
            >
              Ver Línea {estacion.linea} completa →
            </a>
            <a
              href="/lineas/"
              className="btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem',
                textDecoration: 'none',
              }}
            >
              Todas las líneas →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
