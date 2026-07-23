import { estaciones } from '@/data/estaciones'
import { hospedaje } from '@/data/hospedaje'
import { rutasPopulares } from '@/data/rutas-populares'
import { lineasDetalle } from '@/data/lineas-detalle'
import { grafo } from '@/data/grafo'
import SearchBar from '@/app/components/SearchBar'
import AdBanner, { AdBannerInArticle } from '@/app/components/AdBanner'
import NearbyStations from '@/app/components/NearbyStations'
import BookingWidget from '@/app/components/BookingWidget'
import MarimbasCondesa from '@/app/components/MarimbasCondesa'
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard'
import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { getGuidesForStation } from '@/data/blog-links'

/**
 * EstacionPage — Marimbas-branded station detail (Server Component).
 *
 * IA priorities:
 *   1. Line-coloured hero with crest + alcaldía + planner
 *   2. 2-column layout: POIs/content primary, sticky sidebar with
 *      mini-planner + Marimbas CTA + ad
 *   3. Editorial typography (Playfair for H2, Inter for body)
 *   4. Light mode — linen surfaces, forest text
 */

export function generateStaticParams() {
  return estaciones.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const estacion = estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return { title: 'Estación no encontrada | MetroGuia' }

  const linea = estacion.lineas?.[0] || estacion.linea || '?'
  const title = `Estación ${estacion.nombre} — Línea ${linea} Metro CDMX | MetroGuia`
  const transbordos = estacion.transferencias && estacion.transferencias.length > 0
    ? `Transbordo a Línea${estacion.transferencias.length > 1 ? 's' : ''} ${estacion.transferencias.join(', ')}. `
    : ''
  const pois = estacion.pois && estacion.pois.length > 0
    ? `Cerca: ${estacion.pois.slice(0, 3).map((p) => p.nombre).join(', ')}. `
    : ''
  const alcaldiaText = estacion.alcaldia ? `Ubicada en ${estacion.alcaldia}. ` : ''
  const description = `Estación ${estacion.nombre} de la Línea ${linea} del Metro CDMX. ${transbordos}${pois}${alcaldiaText}Horarios, accesibilidad y cómo llegar.`

  return {
    title,
    description,
    openGraph: {
      title: `Metro ${estacion.nombre} — Línea ${linea} CDMX`,
      description,
      url: `https://metroguia.mx/estacion/${estacion.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
    alternates: {
      canonical: `https://metroguia.mx/estacion/${estacion.slug}/`,
      // hreflang signals to Google that the same content has language variants.
      // The "es" / "es-MX" duo is required when a single page also serves the
      // Spanish-speaking diaspora outside Mexico (FIFA 2026 search audience).
      // x-default points search bots from unsupported locales at the canonical.
      languages: {
        'es-MX': `https://metroguia.mx/estacion/${estacion.slug}/`,
        'es': `https://metroguia.mx/estacion/${estacion.slug}/`,
        'en-US': `https://metroguia.mx/en/cdmx/estacion/${estacion.slug}/`,
        'x-default': `https://metroguia.mx/estacion/${estacion.slug}/`,
      },
    },
  }
}

// Emoji for POI type — kept simple, brand-safe
const POI_ICONS = {
  parque: '🌳', transporte: '🚌', comercio: '🛒', religioso: '⛪',
  cultural: '🎭', museo: '🏛️', restaurante: '🍴', hospedaje: '🏨',
}
const iconFor = (tipo) => POI_ICONS[tipo] || '📍'

const LINEA_VAR = {
  '1': '--linea-1', '2': '--linea-2', '3': '--linea-3', '4': '--linea-4',
  '5': '--linea-5', '6': '--linea-6', '7': '--linea-7', '8': '--linea-8',
  '9': '--linea-9', 'A': '--linea-A', 'B': '--linea-B', '12': '--linea-12',
}

export default function EstacionPage({ params }) {
  const estacion = estaciones.find((e) => e.slug === params.slug)
  if (!estacion) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
        <h1 className="serif" style={{ color: 'var(--text)' }}>Estación no encontrada</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          <a href="/cdmx/" style={{ color: 'var(--chiapas)' }}>Volver a CDMX</a>
        </p>
      </div>
    )
  }

  const linea = estacion.lineas?.[0] || estacion.linea || '?'
  const lineaVar = LINEA_VAR[linea] || '--chiapas'
  const safeTips = Array.isArray(estacion.tips) ? estacion.tips : []

  // Schema.org — multi-typed for broader search-engine coverage:
  //  • SubwayStation is the most specific schema for a metro stop (Google Knowledge Graph).
  //  • TrainStation is the broader peer that some international parsers still expect.
  //  • TransitStation kept as a fallback so we don't lose existing rankings.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SubwayStation', 'TrainStation', 'TransitStation'],
    name: `Estación ${estacion.nombre}`,
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
      name: `Línea ${linea} del Metro CDMX`,
      url: `https://metroguia.mx/linea/${linea}/`,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: estacion.lat || 19.4326,
      longitude: estacion.lng || -99.1332,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '05:00', closes: '00:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '06:00', closes: '00:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '07:00', closes: '00:00' },
    ],
    hasMap: `https://metroguia.mx/linea/${linea}/`,
  }

  // Surface nearby points of interest as TouristAttraction nodes — Google uses these
  // to enrich rich results for "qué hacer cerca de [estación]" queries (a high-volume
  // FIFA 2026 search pattern for foreign visitors using public transit).
  const touristAttractions = (estacion.pois && estacion.pois.length > 0)
    ? estacion.pois.slice(0, 6).map(function (poi) {
        const att = {
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: poi.nombre,
          touristType: ['Public Transit Riders', 'International Visitors'],
          isAccessibleForFree: true,
          publicAccess: true,
          additionalType: poi.tipo ? `https://schema.org/${
            poi.tipo === 'museo' ? 'Museum' :
            poi.tipo === 'parque' ? 'Park' :
            poi.tipo === 'religioso' ? 'PlaceOfWorship' :
            poi.tipo === 'cultural' ? 'PerformingArtsTheater' :
            poi.tipo === 'restaurante' ? 'Restaurant' :
            poi.tipo === 'hospedaje' ? 'LodgingBusiness' :
            poi.tipo === 'comercio' ? 'ShoppingCenter' :
            'Place'
          }` : undefined,
          containedInPlace: {
            '@type': 'Place',
            name: `Estación ${estacion.nombre}`,
            url: `https://metroguia.mx/estacion/${estacion.slug}/`,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: estacion.lat || 19.4326,
            longitude: estacion.lng || -99.1332,
          },
        }
        // Strip undefined keys so the JSON-LD stays compact and validator-clean.
        Object.keys(att).forEach(function (k) { if (att[k] === undefined) delete att[k] })
        return att
      })
    : []

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: `Línea ${linea}`, item: `https://metroguia.mx/linea/${linea}/` },
      { '@type': 'ListItem', position: 4, name: estacion.nombre, item: `https://metroguia.mx/estacion/${estacion.slug}/` },
    ],
  }

  const faqItems = []
  faqItems.push({
    '@type': 'Question',
    name: `¿Cómo llego a la estación ${estacion.nombre}?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `La estación ${estacion.nombre} está ubicada en la Alcaldía ${estacion.alcaldia} y pertenece a la Línea ${linea} del Metro CDMX.${estacion.transferencias && estacion.transferencias.length > 0 ? ` Líneas de transferencia: ${estacion.transferencias.join(', ')}.` : ''}`,
    },
  })
  if (estacion.pois?.length > 0) {
    const poiList = estacion.pois.slice(0, 5).map((p) => `${p.nombre} (${p.tipo}, a ${p.distancia})`).join(', ')
    faqItems.push({
      '@type': 'Question',
      name: `¿Qué hay cerca de la estación ${estacion.nombre}?`,
      acceptedAnswer: { '@type': 'Answer', text: `Cerca encontrarás: ${poiList}.` },
    })
  }
  faqItems.push({
    '@type': 'Question',
    name: `¿Cuál es el horario de la estación ${estacion.nombre}?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `Metro CDMX: L-V 5:00 AM-12:00 AM, sábados 6:00 AM-12:00 AM, domingos y festivos 7:00 AM-12:00 AM.`,
    },
  })
  if (estacion.transferencias?.length > 0) {
    faqItems.push({
      '@type': 'Question',
      name: `¿Qué líneas pasan por la estación ${estacion.nombre}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `La estación ${estacion.nombre} es parada de la Línea ${linea} con transferencias a las Línea${estacion.transferencias.length > 1 ? 's' : ''} ${estacion.transferencias.join(', ')}.`,
      },
    })
  }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems }

  // Hospedaje mapping
  const nearbyStationMap = {
    'chilpancingo': 'chilpancingo',
    'patriotismo': 'chilpancingo',
    'juanacatlan': 'chilpancingo',
    'chapultepec': 'chilpancingo',
    'insurgentes': 'chilpancingo',
    'sevilla': 'chilpancingo',
  }
  const lookupSlug = nearbyStationMap[estacion.slug] || estacion.slug
  const nearbyListings = hospedaje.filter((h) => h.estacion_cercana === lookupSlug && h.es_marimbas)
  const isMarimbasArea = nearbyStationMap[estacion.slug] !== undefined

  const blogGuides = getGuidesForStation(estacion.slug)
  const rutasDesde = rutasPopulares.filter((r) => r.origen === estacion.slug).slice(0, 6)
  const rutasHacia = rutasPopulares.filter((r) => r.destino === estacion.slug).slice(0, 4)

  return (
    <div style={{
      background: '#FFFFFF',
      color: 'var(--text)',
      fontFamily: 'Inter, system-ui, sans-serif',
      minHeight: '100vh',
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {touristAttractions.map(function (attraction, i) {
        return (
          <script
            key={`ta-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(attraction) }}
          />
        )
      })}

      {/* HERO — forest gradient with line-coloured top bar */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)',
        color: '#FFFFFF',
        padding: '2.5rem 1.25rem 3rem',
        borderTop: `6px solid var(${lineaVar})`,
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.78)',
            marginBottom: '1.5rem',
          }}>
            <a href="/" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}>MetroGuia</a>
            <span style={{ margin: '0 0.4rem', opacity: 0.6 }}>/</span>
            <a href="/cdmx/" style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}>CDMX</a>
            <span style={{ margin: '0 0.4rem', opacity: 0.6 }}>/</span>
            <a href={`/linea/${linea}/`} style={{ color: 'var(--amber)', textDecoration: 'none', fontWeight: 600 }}>Línea {linea}</a>
            <span style={{ margin: '0 0.4rem', opacity: 0.6 }}>/</span>
            <span style={{ color: '#FFFFFF' }}>{estacion.nombre}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            {/* Line crest */}
            <div style={{
              width: '4.25rem',
              height: '4.25rem',
              borderRadius: '50%',
              backgroundColor: `var(${lineaVar})`,
              color: String(linea) === '5' ? '#1F3A2E' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.65rem',
              fontWeight: 800,
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
              flexShrink: 0,
            }}>
              {linea}
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <div className="eyebrow" style={{ color: 'var(--amber)', marginBottom: '0.4rem' }}>
                Estación Metro CDMX · Línea {linea}
              </div>
              <h1 className="editorial-h1" style={{
                color: '#FFFFFF',
                margin: 0,
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 1.05,
              }}>
                {estacion.nombre}
              </h1>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.82)',
                margin: '0.6rem 0 0',
              }}>
                📍 Alcaldía {estacion.alcaldia}
                {estacion.tipo_zona && (
                  <span style={{ marginLeft: '0.75rem', opacity: 0.8, textTransform: 'capitalize' }}>
                    · {(estacion.tipo_zona || '').replace(/-/g, ' ')}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Quick-stat strip */}
          <div style={{
            marginTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 'var(--radius-lg, 16px)',
            padding: '1rem 1.25rem',
          }}>
            <HeroStat label="Línea" value={linea} />
            <HeroStat label="Transbordos" value={String(estacion.transferencias?.length || 0)} />
            <HeroStat label="POIs cercanos" value={String(estacion.pois?.length || 0)} />
            <HeroStat label="Horario" value="5 AM – 12 AM" small />
          </div>
        </div>
      </section>

      {/* MAIN: 2-column layout */}
      <section style={{
        background: 'var(--linen-soft)',
        padding: '2.5rem 1.25rem 4rem',
        borderTop: '1px solid rgba(31, 58, 46, 0.08)',
      }}>
        <div style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 320px',
          gap: '2rem',
        }}>
          {/* PRIMARY COLUMN */}
          <div style={{ minWidth: 0 }}>
            {/* Intro */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(31, 58, 46, 0.1)',
              borderRadius: 'var(--radius-lg, 16px)',
              padding: '1.75rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 24px rgba(31, 58, 46, 0.04)',
            }}>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text)',
                margin: 0,
              }}>
                {estacion.intro}
              </p>
            </div>

            {/* POIs */}
            {estacion.pois?.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading icon="📍" title="Lugares cercanos" />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '0.85rem',
                }}>
                  {estacion.pois.map((poi, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid rgba(31, 58, 46, 0.1)',
                        borderRadius: 'var(--radius, 12px)',
                        padding: '1rem 1.1rem',
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{iconFor(poi.tipo)}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                          {poi.nombre}
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: 'var(--chiapas)',
                          fontWeight: 600,
                          textTransform: 'capitalize',
                          marginTop: '0.15rem',
                        }}>
                          {poi.tipo} · {poi.distancia}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Transbordos */}
            {estacion.transferencias?.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading icon="🔄" title="Transbordos disponibles" />
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '0.75rem',
                }}>
                  {estacion.transferencias.map((trans) => (
                    <a
                      key={trans}
                      href={`/linea/${trans}/`}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '1rem',
                        borderRadius: 'var(--radius, 12px)',
                        background: '#FFFFFF',
                        border: '1px solid rgba(31, 58, 46, 0.1)',
                        textDecoration: 'none',
                        color: 'var(--text)',
                      }}
                    >
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '50%',
                        background: `var(${LINEA_VAR[trans] || '--chiapas'})`,
                        color: String(trans) === '5' ? '#1F3A2E' : '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1rem',
                      }}>
                        {trans}
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Línea {trans}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* In-article ad */}
            <div style={{ margin: '2rem 0' }}>
              <AdBannerInArticle slot="1082410395" />
            </div>

            {/* Historia del icono */}
            {estacion.historia_icono && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading icon="📚" title="Historia del ícono" />
                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(31, 58, 46, 0.1)',
                  borderLeft: `4px solid var(${lineaVar})`,
                  borderRadius: 'var(--radius, 12px)',
                  padding: '1.25rem 1.5rem',
                  fontSize: '0.97rem',
                  lineHeight: 1.7,
                  color: 'var(--text)',
                }}>
                  {estacion.historia_icono}
                </div>
              </div>
            )}

            {/* Tips */}
            {safeTips.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading icon="💡" title="Tips para turistas" />
                <div style={{
                  background: 'var(--linen)',
                  border: '1px solid rgba(31, 58, 46, 0.1)',
                  borderRadius: 'var(--radius, 12px)',
                  padding: '1.25rem 1.5rem',
                }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {safeTips.map((tip, idx) => (
                      <li
                        key={idx}
                        style={{
                          paddingLeft: '1.75rem',
                          position: 'relative',
                          marginBottom: idx < safeTips.length - 1 ? '0.75rem' : 0,
                          fontSize: '0.95rem',
                          color: 'var(--text)',
                          lineHeight: 1.55,
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--chiapas)',
                          fontWeight: 800,
                        }}>✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Mejor horario */}
            {estacion.mejor_horario && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading icon="🕐" title="Mejor horario para visitar" />
                <div style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(31, 58, 46, 0.1)',
                  borderLeft: '4px solid var(--chiapas)',
                  borderRadius: 'var(--radius, 12px)',
                  padding: '1.25rem 1.5rem',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text)',
                }}>
                  {estacion.mejor_horario}
                </div>
              </div>
            )}

            {/* Mundial 2026 */}
            {estacion.mundial_relevancia && !String(estacion.mundial_relevancia || '').includes('Sin relevancia') && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading icon="⚽" title="Relevancia para el Mundial 2026" />
                <div style={{
                  background: 'linear-gradient(135deg, rgba(232, 155, 44, 0.12) 0%, rgba(232, 155, 44, 0.04) 100%)',
                  border: '1px solid var(--amber)',
                  borderRadius: 'var(--radius, 12px)',
                  padding: '1.25rem 1.5rem',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text)',
                }}>
                  {estacion.mundial_relevancia}
                </div>
              </div>
            )}

            {/* Blog guides — contextual */}
            {blogGuides.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <BlogGuiasWidget guides={blogGuides} context={estacion.nombre} />
              </div>
            )}

            {/* Rutas populares */}
            {(rutasDesde.length > 0 || rutasHacia.length > 0) && (
              <div style={{ marginBottom: '2rem' }}>
                {rutasDesde.length > 0 && (
                  <>
                    <SectionHeading icon="🚇" title={`Rutas desde ${estacion.nombre}`} />
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '0.65rem',
                      marginBottom: rutasHacia.length > 0 ? '1.5rem' : 0,
                    }}>
                      {rutasDesde.map((r) => (
                        <a
                          key={`d-${r.destino}`}
                          href={`/ruta/${r.origen}-a-${r.destino}/`}
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid rgba(31, 58, 46, 0.12)',
                            borderRadius: 'var(--radius, 10px)',
                            padding: '0.85rem 1rem',
                            textDecoration: 'none',
                            color: 'var(--text)',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span>{r.titulo}</span>
                          <span style={{ color: 'var(--chiapas)', fontWeight: 800 }}>→</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
                {rutasHacia.length > 0 && (
                  <>
                    <SectionHeading icon="↩" title={`Cómo llegar a ${estacion.nombre}`} small />
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '0.65rem',
                    }}>
                      {rutasHacia.map((r) => (
                        <a
                          key={`h-${r.origen}`}
                          href={`/ruta/${r.origen}-a-${r.destino}/`}
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid rgba(31, 58, 46, 0.12)',
                            borderRadius: 'var(--radius, 10px)',
                            padding: '0.85rem 1rem',
                            textDecoration: 'none',
                            color: 'var(--text)',
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span>Desde {r.titulo.split(' a ')[0] || r.origen}</span>
                          <span style={{ color: 'var(--chiapas)', fontWeight: 800 }}>→</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Nearby stations */}
            <div style={{ marginBottom: '2rem' }}>
              <NearbyStations currentSlug={params.slug} lineasDetalle={lineasDetalle} grafo={grafo} />
            </div>

            {/* Affiliate */}
            <div style={{ marginBottom: '2rem' }}>
              <AffiliateTransportCard ciudad="CDMX" estacion={null} fechas={null} />
            </div>

            {/* Marimbas hospedaje carousel — if area applies */}
            {nearbyListings.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <SectionHeading
                  icon="🏠"
                  title={isMarimbasArea
                    ? `Hospedaje en La Condesa cerca de ${estacion.nombre}`
                    : `Hospedaje cerca de ${estacion.nombre}`}
                />
                <div style={{
                  background: 'linear-gradient(135deg, rgba(232, 155, 44, 0.08) 0%, rgba(201, 169, 110, 0.04) 100%)',
                  border: '1px solid rgba(232, 155, 44, 0.35)',
                  borderRadius: 'var(--radius-lg, 16px)',
                  padding: '1.5rem',
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginTop: 0,
                    marginBottom: '1.25rem',
                    lineHeight: 1.55,
                  }}>
                    {isMarimbasArea
                      ? `Departamentos verificados a minutos caminando. Zona segura con restaurantes, parques y vida nocturna.`
                      : `Departamentos verificados cerca de ${estacion.nombre}. Ideales para turistas y visitantes del Mundial 2026.`}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '0.85rem',
                  }}>
                    {nearbyListings.slice(0, 4).map((listing) => (
                      <a
                        key={listing.id}
                        href={listing.url_reserva}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          background: '#FFFFFF',
                          border: '1px solid rgba(31, 58, 46, 0.1)',
                          borderRadius: 'var(--radius, 12px)',
                          padding: '1.1rem',
                          textDecoration: 'none',
                          color: 'var(--text)',
                        }}
                      >
                        <span className="eyebrow" style={{ color: 'var(--amber)', display: 'block', marginBottom: '0.5rem' }}>
                          Marimbas Home · {listing.tipo}
                        </span>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.5rem' }}>
                          {listing.nombre}
                        </div>
                        <div style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          gap: '0.65rem',
                          flexWrap: 'wrap',
                          marginBottom: '0.75rem',
                        }}>
                          <span>👥 {listing.huespedes}</span>
                          <span>🛏 {listing.recamaras}</span>
                          <span>🚿 {listing.banos}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '1.05rem', fontWeight: 800 }}>
                            ${listing.precio_noche.toLocaleString()}
                            <span style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                              {' '}MXN/noche
                            </span>
                          </span>
                          <span style={{ color: 'var(--chiapas)', fontWeight: 800, fontSize: '0.82rem' }}>
                            Reservar →
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                  {nearbyListings.length > 4 && (
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <a href="/hospedaje/" style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--chiapas)',
                        textDecoration: 'none',
                      }}>
                        Ver todos los {nearbyListings.length} hospedajes →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom nav */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.75rem',
              marginTop: '2rem',
            }}>
              <a
                href={`/linea/${linea}/`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '1rem',
                  background: 'var(--forest)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius, 10px)',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                }}
              >
                Ver Línea {linea} completa →
              </a>
              <a
                href="/lineas/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '1rem',
                  background: '#FFFFFF',
                  color: 'var(--forest)',
                  border: '1px solid rgba(31, 58, 46, 0.15)',
                  borderRadius: 'var(--radius, 10px)',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                }}
              >
                Todas las líneas →
              </a>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside style={{
            minWidth: 0,
          }}>
            <div style={{
              position: 'sticky',
              top: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              {/* Mini-planner */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(31, 58, 46, 0.1)',
                borderRadius: 'var(--radius-lg, 16px)',
                padding: '1.25rem',
                boxShadow: '0 8px 24px rgba(31, 58, 46, 0.06)',
              }}>
                <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>
                  Planifica desde aquí
                </div>
                <h3 className="serif" style={{
                  fontSize: '1.05rem',
                  margin: '0 0 0.9rem',
                  color: 'var(--forest)',
                  lineHeight: 1.3,
                }}>
                  ¿A dónde vas desde {estacion.nombre}?
                </h3>
                <SearchBar ciudad="cdmx" origin={estacion.nombre} />
              </div>

              {/* Marimbas CTA (compact) */}
              <MarimbasCondesa compact />

              {/* Sticky ad */}
              <div>
                <AdBanner slot="4434764790" format="auto" />
              </div>

              {/* Booking widget */}
              <BookingWidget />
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

/* ─── Sub-components ─────────────────────────────────────────────────── */

function HeroStat({ label, value, small }) {
  return (
    <div>
      <div style={{
        fontSize: '0.62rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.72)',
      }}>
        {label}
      </div>
      <div
        className="serif"
        style={{
          fontSize: small ? '0.95rem' : '1.3rem',
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

function SectionHeading({ icon, title, small }) {
  return (
    <h2
      className={small ? '' : 'editorial-h2'}
      style={{
        fontFamily: small ? 'Inter, system-ui, sans-serif' : "'Playfair Display', Georgia, serif",
        fontSize: small ? '1rem' : 'clamp(1.2rem, 2.4vw, 1.5rem)',
        fontWeight: small ? 700 : 800,
        color: 'var(--forest)',
        margin: '0 0 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.55rem',
        lineHeight: 1.25,
      }}
    >
      {icon && <span aria-hidden="true" style={{ fontSize: small ? '1rem' : '1.3rem' }}>{icon}</span>}
      <span>{title}</span>
    </h2>
  )
}
