import SearchBar from '@/app/components/SearchBar'
import FAQSchema from '@/app/components/FAQSchema'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import LocalBusinessSchema from '@/app/components/LocalBusinessSchema'
import { homeFAQs, transitAgencies } from '@/data/faqs'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'

import AffiliateMundial from '@/app/components/AffiliateMundial'
export const metadata = {
  title: 'MetroGuia — Transit Guide for FIFA World Cup 2026 | 16 Host Cities',
  description: 'Public transit guide for FIFA 2026 in 16 host cities across Mexico, USA, and Canada. 2,500+ stations. Plan your routes by metro, light rail, and bus. Español · English · 7 languages.',
  alternates: {
    canonical: 'https://metroguia.mx/',
    languages: {
      'es': 'https://metroguia.mx/',
      'en': 'https://metroguia.mx/en/',
      'pt': 'https://metroguia.mx/pt/',
      'fr': 'https://metroguia.mx/fr/',
      'de': 'https://metroguia.mx/de/',
      'ja': 'https://metroguia.mx/ja/',
      'ko': 'https://metroguia.mx/ko/',
      'x-default': 'https://metroguia.mx/',
    },
  },
  openGraph: {
    title: 'MetroGuia — Navigate 16 Host Cities for FIFA 2026',
    description: 'Transit guide for Mexico, USA, Canada. 16 stadiums. 2,500+ stations. Public transit routes to every FIFA 2026 venue.',
    url: 'https://metroguia.mx/',
    type: 'website',
    siteName: 'MetroGuia',
    locale: 'es_MX',
    images: [{
      url: 'https://metroguia.mx/og-image.png',
      width: 1200,
      height: 630,
      alt: 'MetroGuia — FIFA 2026 Transit Guide | 16 Host Cities Across Mexico, USA, Canada',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroGuia — FIFA 2026 Transit Guide',
    description: '16 host cities across Mexico, USA & Canada. 2,500+ stations. Get to the stadium by public transit.',
    images: ['https://metroguia.mx/og-image.png'],
  },
}

// FIFA 2026 Host Cities - Grouped by country
const ciudadesMexico = [
  {
    id: 'cdmx',
    pais: 'Mexico',
    nombre: 'Ciudad de México',
    sistema: 'Metro · Tren Ligero · Cablebús · Mexicable · Trolebús · Tren Suburbano · Metrobús',
    stats: { estaciones: 436, lineas: 40, km: 391 },
    color: '#F5A623',
    href: '/cdmx/',
    fifa: { estadio: 'Estadio Azteca', fechas: '11, 17, 24 jun · 30 jun · 5 jul' },
    activa: true,
  },
  {
    id: 'gdl',
    pais: 'Mexico',
    nombre: 'Guadalajara',
    sistema: 'Mi Tren L1-L4 · Mi Macro Calzada · Mi Macro Periférico',
    stats: { estaciones: 125, lineas: 6, km: 126 },
    color: '#06B6D4',
    href: '/gdl/',
    fifa: { estadio: 'Estadio Akron', fechas: '11, 18, 23, 26 jun' },
    activa: true,
  },
  {
    id: 'mty',
    pais: 'Mexico',
    nombre: 'Monterrey',
    sistema: 'Metrorrey L1-L3 · Ecovía',
    stats: { estaciones: 83, lineas: 4, km: 56 },
    color: '#EC4899',
    href: '/mty/',
    fifa: { estadio: 'Estadio BBVA', fechas: '14, 20, 24, 29 jun' },
    activa: true,
  },
]

const ciudadesUSA = [
  {
    id: 'nyc',
    pais: 'USA',
    nombre: 'New York City',
    sistema: 'MTA Subway · LIRR · NJ Transit',
    stats: { estaciones: 472, lineas: 36, km: 380 },
    color: '#EF4444',
    href: '/nyc/',
    fifa: { estadio: 'MetLife Stadium, NY/NJ', fechas: '19 jul' },
    activa: false,
  },
  {
    id: 'los-angeles',
    pais: 'USA',
    nombre: 'Los Angeles',
    sistema: 'Metro Rail · K Line (to SoFi Stadium)',
    stats: { estaciones: 101, lineas: 6, km: 105 },
    color: '#F97316',
    href: '/los-angeles/',
    fifa: { estadio: 'SoFi Stadium', fechas: '16 jul' },
    activa: false,
  },
  {
    id: 'houston',
    pais: 'USA',
    nombre: 'Houston',
    sistema: 'METRO · 3 lines',
    stats: { estaciones: 39, lineas: 3, km: 58 },
    color: '#A855F7',
    href: '/houston/',
    fifa: { estadio: 'NRG Stadium', fechas: '3 jul' },
    activa: false,
  },
  {
    id: 'atlanta',
    pais: 'USA',
    nombre: 'Atlanta',
    sistema: 'MARTA · 4 lines',
    stats: { estaciones: 38, lineas: 4, km: 66 },
    color: '#0891B2',
    href: '/atlanta/',
    fifa: { estadio: 'Mercedes-Benz Stadium', fechas: '4 jul' },
    activa: false,
  },
  {
    id: 'philadelphia',
    pais: 'USA',
    nombre: 'Philadelphia',
    sistema: 'SEPTA · Subway + Trolley',
    stats: { estaciones: 156, lineas: 8, km: 91 },
    color: '#DC2626',
    href: '/philadelphia/',
    fifa: { estadio: 'Lincoln Financial Field', fechas: '14 jun' },
    activa: false,
  },
  {
    id: 'seattle',
    pais: 'USA',
    nombre: 'Seattle',
    sistema: 'Sound Transit · Light Rail',
    stats: { estaciones: 25, lineas: 2, km: 43 },
    color: '#059669',
    href: '/seattle/',
    fifa: { estadio: 'Lumen Field', fechas: '12 jun' },
    activa: false,
  },
  {
    id: 'san-francisco',
    pais: 'USA',
    nombre: 'San Francisco Bay Area',
    sistema: 'BART · Muni · Caltrain',
    stats: { estaciones: 147, lineas: 8, km: 154 },
    color: '#7C3AED',
    href: '/san-francisco/',
    fifa: { estadio: 'Levi Stadium, Santa Clara', fechas: '20, 27 jun' },
    activa: false,
  },
  {
    id: 'boston',
    pais: 'USA',
    nombre: 'Boston',
    sistema: 'MBTA · Subway + Bus',
    stats: { estaciones: 155, lineas: 6, km: 91 },
    color: '#1E40AF',
    href: '/boston/',
    fifa: { estadio: 'Gillette Stadium, Foxborough', fechas: '6 jul' },
    activa: false,
  },
  {
    id: 'miami',
    pais: 'USA',
    nombre: 'Miami',
    sistema: 'Metrorail · Metromover',
    stats: { estaciones: 44, lineas: 5, km: 52 },
    color: '#E11D48',
    href: '/miami/',
    fifa: { estadio: 'Hard Rock Stadium', fechas: '8 jul' },
    activa: false,
  },
  {
    id: 'dallas',
    pais: 'USA',
    nombre: 'Dallas',
    sistema: 'DART · Light Rail',
    stats: { estaciones: 64, lineas: 4, km: 85 },
    color: '#1F2937',
    href: '/dallas/',
    fifa: { estadio: 'AT&T Stadium', fechas: '24 jun, 1 jul' },
    activa: false,
  },
  {
    id: 'kansas-city',
    pais: 'USA',
    nombre: 'Kansas City',
    sistema: 'KC Streetcar',
    stats: { estaciones: 16, lineas: 1, km: 3.5 },
    color: '#92400E',
    href: '/kansas-city/',
    fifa: { estadio: 'Arrowhead Stadium', fechas: '13, 30 jun' },
    activa: false,
  },
]

const ciudadesCanada = [
  {
    id: 'toronto',
    pais: 'Canada',
    nombre: 'Toronto',
    sistema: 'TTC Subway · Streetcar · Bus',
    stats: { estaciones: 75, lineas: 4, km: 78 },
    color: '#DC2626',
    href: '/toronto/',
    fifa: { estadio: 'BMO Field', fechas: '12, 26 jun' },
    activa: false,
  },
  {
    id: 'vancouver',
    pais: 'Canada',
    nombre: 'Vancouver',
    sistema: 'SkyTrain · Canada Line · Bus',
    stats: { estaciones: 53, lineas: 3, km: 80 },
    color: '#2563EB',
    href: '/vancouver/',
    fifa: { estadio: 'BC Place Stadium', fechas: '25 jun' },
    activa: false,
  },
]

const ciudades = [...ciudadesMexico, ...ciudadesUSA, ...ciudadesCanada]

const ciudadesSecundarias = [
  { id: 'puebla', nombre: 'Puebla', sistema: 'RUTA BRT · 3 líneas', stats: { estaciones: 16, lineas: 3 }, color: '#8B5CF6', href: '/puebla/', activa: true },
  { id: 'merida', nombre: 'Mérida', sistema: 'Va y Ven · 4 rutas', stats: { estaciones: 16, lineas: 4 }, color: '#F59E0B', href: '/merida/', activa: true },
  { id: 'leon', nombre: 'León', sistema: 'SIT León · 4 líneas', stats: { estaciones: 20, lineas: 4 }, color: '#10B981', href: '/leon/', activa: true },
  { id: 'tren-maya', nombre: 'Tren Maya', sistema: '7 tramos · Yucatán a Chiapas', stats: { estaciones: 15, lineas: 6 }, color: '#0EA5E9', href: '/tren-maya/', activa: true },
  { id: 'queretaro', nombre: 'Querétaro', sistema: 'QroBús · 3 líneas', stats: { estaciones: 30, lineas: 3 }, color: '#EF4444', href: '/queretaro/', activa: true },
  { id: 'chihuahua', nombre: 'Chihuahua', sistema: 'Chepe Express', stats: { estaciones: 15, lineas: 2 }, color: '#D97706', href: '/chihuahua/', activa: true },
  { id: 'tijuana', nombre: 'Tijuana', sistema: 'SITT · 2 líneas', stats: { estaciones: 15, lineas: 2 }, color: '#6B7280', href: '/tijuana/', activa: true },
  { id: 'toluca', nombre: 'Toluca', sistema: 'Tren Interurbano · Mexibús', stats: { estaciones: 15, lineas: 3 }, color: '#7C3AED', href: '/toluca/', activa: true },
]

const rutasPopularesHome = [
  { origen: 'Zócalo', destino: 'Tasqueña', slug: 'zocalo-a-tasquena', etiqueta: 'FIFA 2026', color: '#F5A623' },
  { origen: 'Aeropuerto', destino: 'Bellas Artes', slug: 'aeropuerto-a-bellas-artes', etiqueta: 'Turismo', color: '#3B82F6' },
  { origen: 'Pantitlán', destino: 'Chapultepec', slug: 'pantitlan-a-chapultepec', etiqueta: 'Conexión', color: '#22C55E' },
  { origen: 'Insurgentes', destino: 'Coyoacán', slug: 'insurgentes-a-coyoacan', etiqueta: 'Cultura', color: '#8B5CF6' },
]

export default function LandingPage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MetroGuia',
    url: 'https://metroguia.mx',
    description: 'Transit guide for FIFA World Cup 2026. 16 host cities across Mexico, USA, and Canada. 2,500+ stations.',
    inLanguage: ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://metroguia.mx/ruta/{origin}-a-{destination}/',
      'query-input': 'required name=origin required name=destination',
    },
  }

  const allCiudades = ciudades
  const transitSystemSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'FIFA 2026 Host Cities — Public Transit Guide',
    description: 'MetroGuia: 16 host cities across Mexico, USA, Canada. 2,500+ stations. 78 transit systems.',
    numberOfItems: allCiudades.length,
    itemListElement: allCiudades.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.nombre,
      description: c.sistema,
      url: `https://metroguia.mx${c.href}`,
    })),
  }

  return (
    <div>
      {/* ── SEO Schemas ── */}
      <FAQSchema faqs={homeFAQs.es} lang="es" />
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }]} />
      {transitAgencies.map((agency) => (
        <LocalBusinessSchema key={agency.name} agency={agency} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitSystemSchema) }} />

      {/* ── Hero + Search ── */}
      <section style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--surface) 100%)',
        padding: '4rem 1rem 3rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-glow)',
            border: '1px solid var(--primary-border)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--primary)',
            marginBottom: '1.5rem',
          }}>
            ⚽ FIFA World Cup 2026 — 16 Host Cities
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>
            MetroGuia — Transit Guide for<br />
            <span style={{ color: 'var(--primary)' }}>FIFA 2026</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6,
          }}>
            Navigate 16 host cities across Mexico, USA, and Canada by public transit. Metro, light rail, and bus guides. Offline access available.
          </p>

          {/* Trip Planner */}
          <SearchBar ciudad="cdmx" />
        </div>
      </section>

      {/* ── Rutas Populares ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h6 style={{
            color: 'var(--text-dim)',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Rutas populares
          </h6>
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            {rutasPopularesHome.map((ruta) => (
                <a
                  key={ruta.slug}
                  href={`/ruta/${ruta.slug}/`}
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    textDecoration: 'none',
                    flex: '1 1 220px',
                    minWidth: '220px',
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: ruta.color,
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}>
                      {ruta.origen} → {ruta.destino}
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {ruta.etiqueta}
                    </div>
                  </div>
                </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ad — After Popular Routes ── */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        <AdBannerLazy slot="4434764790" format="auto" />
      </div>

      {/* ── Ciudades Activas ── */}
      <section id="ciudades" style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>16 Host Cities — FIFA 2026</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Navigate public transit in Mexico, USA & Canada. 16 stadiums. 2,500+ stations.
              </p>
            </div>
          </div>

          {/* Mexico Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🇲🇽 México</h3>
            <div className="grid-3">
              {ciudadesMexico.map((ciudad) => (
              <a
                key={ciudad.id}
                href={ciudad.href}
                className="card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                {/* City header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius)',
                    backgroundColor: `${ciudad.color}15`,
                    border: `1px solid ${ciudad.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: ciudad.color,
                    flexShrink: 0,
                  }}>
                    {ciudad.id.toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}>{ciudad.nombre}</div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: ciudad.color,
                      fontWeight: 600,
                    }}>{ciudad.sistema}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1rem',
                }}>
                  {[
                    { val: ciudad.stats.estaciones, label: 'estaciones' },
                    { val: ciudad.stats.lineas, label: 'líneas' },
                    { val: `${ciudad.stats.km} km`, label: 'red' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}>{s.val}</div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* FIFA badge */}
                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: `${ciudad.color}10`,
                  border: `1px solid ${ciudad.color}25`,
                  marginBottom: '1rem',
                  flex: 1,
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: ciudad.color,
                    marginBottom: '0.125rem',
                  }}>{ciudad.fifa.estadio}</div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}>{ciudad.fifa.fechas} 2026</div>
                </div>

                {/* CTA */}
                <span style={{
                  color: ciudad.color,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}>
                  Explorar →
                </span>
              </a>
            ))}
            </div>
          </div>

          {/* USA Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🇺🇸 United States</h3>
            <div className="grid-3">
              {ciudadesUSA.map((ciudad) => (
              <a
                key={ciudad.id}
                href={ciudad.href}
                className="card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                {/* City header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius)',
                    backgroundColor: `${ciudad.color}15`,
                    border: `1px solid ${ciudad.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: ciudad.color,
                    flexShrink: 0,
                  }}>
                    {ciudad.id.toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}>{ciudad.nombre}</div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: ciudad.color,
                      fontWeight: 600,
                    }}>{ciudad.sistema}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1rem',
                }}>
                  {[
                    { val: ciudad.stats.estaciones, label: 'stations' },
                    { val: ciudad.stats.lineas, label: 'lines' },
                    { val: `${ciudad.stats.km} km`, label: 'network' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}>{s.val}</div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* FIFA badge */}
                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: `${ciudad.color}10`,
                  border: `1px solid ${ciudad.color}25`,
                  marginBottom: '1rem',
                  flex: 1,
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: ciudad.color,
                    marginBottom: '0.125rem',
                  }}>{ciudad.fifa.estadio}</div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}>{ciudad.fifa.fechas}</div>
                </div>

                {/* CTA */}
                <span style={{
                  color: ciudad.color,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}>
                  Coming Soon →
                </span>
              </a>
            ))}
            </div>
          </div>

          {/* Canada Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🇨🇦 Canada</h3>
            <div className="grid-3">
              {ciudadesCanada.map((ciudad) => (
              <a
                key={ciudad.id}
                href={ciudad.href}
                className="card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                {/* City header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius)',
                    backgroundColor: `${ciudad.color}15`,
                    border: `1px solid ${ciudad.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: ciudad.color,
                    flexShrink: 0,
                  }}>
                    {ciudad.id.toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}>{ciudad.nombre}</div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: ciudad.color,
                      fontWeight: 600,
                    }}>{ciudad.sistema}</div>
                  </div>
                </div>

                {/* Stats row */}
                <div style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1rem',
                }}>
                  {[
                    { val: ciudad.stats.estaciones, label: 'stations' },
                    { val: ciudad.stats.lineas, label: 'lines' },
                    { val: `${ciudad.stats.km} km`, label: 'network' },
                  ].map((s) => (
                    <div key={s.label}>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                      }}>{s.val}</div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* FIFA badge */}
                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: `${ciudad.color}10`,
                  border: `1px solid ${ciudad.color}25`,
                  marginBottom: '1rem',
                  flex: 1,
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: ciudad.color,
                    marginBottom: '0.125rem',
                  }}>{ciudad.fifa.estadio}</div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                  }}>{ciudad.fifa.fechas}</div>
                </div>

                {/* CTA */}
                <span style={{
                  color: ciudad.color,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}>
                  Coming Soon →
                </span>
              </a>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Próximamente ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h6 style={{
            color: 'var(--text-dim)',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            Más ciudades — 8 sistemas de transporte
          </h6>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.5rem',
          }}>
            {ciudadesSecundarias.map((c) => (
              <a
                key={c.id}
                href={c.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: c.color,
                  flexShrink: 0,
                }} />
                <span>
                  <strong>{c.nombre}</strong>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.7rem', display: 'block' }}>{c.stats.estaciones} est. · {c.stats.lineas} líneas</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aeropuertos ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>Aeropuertos de México</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Cómo llegar del aeropuerto al centro en transporte público
              </p>
            </div>
            <a href="/aeropuertos/" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
              Ver todos →
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { iata: 'MEX', ciudad: 'CDMX', slug: 'benito-juarez-cdmx', color: '#F5A623' },
              { iata: 'GDL', ciudad: 'Guadalajara', slug: 'miguel-hidalgo-guadalajara', color: '#06B6D4' },
              { iata: 'MTY', ciudad: 'Monterrey', slug: 'mariano-escobedo-monterrey', color: '#EC4899' },
              { iata: 'CUN', ciudad: 'Cancún', slug: 'cancun-cun', color: '#8B5CF6' },
              { iata: 'TIJ', ciudad: 'Tijuana', slug: 'tijuana-tij', color: '#6B7280' },
              { iata: 'PVR', ciudad: 'Puerto Vallarta', slug: 'puerto-vallarta-pvr', color: '#0EA5E9' },
            ].map((a) => (
              <a
                key={a.iata}
                href={`/aeropuertos/${a.slug}/`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.875rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontWeight: 700, color: a.color }}>{a.iata}</span>
                {a.ciudad}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Terminales de Autobuses ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>Terminales de Autobuses</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Cómo llegar a las principales terminales en metro y transporte público
              </p>
            </div>
            <a href="/terminales/" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
              Ver todas →
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { nombre: 'TAPO', slug: 'tapo', metro: 'San Lázaro' },
              { nombre: 'Central del Norte', slug: 'central-del-norte', metro: 'Autobuses del Norte' },
              { nombre: 'Observatorio', slug: 'terminal-poniente', metro: 'Observatorio' },
              { nombre: 'Taxqueña', slug: 'terminal-del-sur', metro: 'Taxqueña' },
            ].map((t) => (
              <a
                key={t.slug}
                href={`/terminales/${t.slug}/`}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  textDecoration: 'none',
                  flex: '1 1 220px',
                  minWidth: '220px',
                }}
              >
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}>🚌</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{t.nombre}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Metro {t.metro}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ferries ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>Ferries</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Conecta entre islas y costas principales
              </p>
            </div>
            <a href="/ferries/" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
              Ver todos →
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { nombre: 'Playa del Carmen ↔ Cozumel', slug: 'playa-cozumel', ruta: '30 min' },
              { nombre: 'Cancún ↔ Isla Mujeres', slug: 'cancun-isla-mujeres', ruta: '20 min' },
              { nombre: 'La Paz ↔ Mazatlán', slug: 'lapaz-mazatlan', ruta: '8h 30min' },
              { nombre: 'Chiquilá ↔ Isla Holbox', slug: 'chiquila-holbox', ruta: '45 min' },
            ].map((f) => (
              <a
                key={f.slug}
                href={`/ferries/${f.slug}/`}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  textDecoration: 'none',
                  flex: '1 1 220px',
                  minWidth: '220px',
                }}
              >
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}>⛴️</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{f.nombre}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{f.ruta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cruces Fronterizos ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '1.5rem',
          }}>
            <div>
              <h2 style={{ marginBottom: '0.25rem', fontSize: '1.5rem' }}>Cruces Fronterizos</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Información de paso a USA, Guatemala y Belice
              </p>
            </div>
            <a href="/frontera/" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>
              Ver todos →
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { nombre: 'Tijuana', slug: 'tijuana', pais: 'USA' },
              { nombre: 'Ciudad Juárez', slug: 'ciudad-juarez', pais: 'USA' },
              { nombre: 'Nogales', slug: 'nogales', pais: 'USA' },
              { nombre: 'Chetumal', slug: 'chetumal', pais: 'Belice' },
            ].map((c) => (
              <a
                key={c.slug}
                href={`/frontera/${c.slug}/`}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  textDecoration: 'none',
                  flex: '1 1 220px',
                  minWidth: '220px',
                }}
              >
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--primary-glow)',
                  border: '1px solid var(--primary-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}>🛂</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{c.nombre}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Paso a {c.pais}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ad — Mid-page ── */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        <AdBannerLazyInArticle slot="1082410395" />
      </div>

      {/* ── Stats Banner ── */}
      <section style={{
        padding: '3rem 1rem',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {[
            { val: '2,500+', label: 'Stations covered' },
            { val: '78', label: 'Transit systems' },
            { val: '16', label: 'Host cities' },
            { val: '78', label: 'FIFA 2026 Matches' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '-0.02em',
              }}>{s.val}</div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginTop: '0.25rem',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ── Affiliate Mundial ── */}
      <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem' }}>
        <AffiliateMundial />
      </div>
      {/* ── Turismo — 8 Programas SECTUR ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Turismo en México</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                8 programas SECTUR — 177 Pueblos Mágicos, zonas arqueológicas, playas y más
              </p>
            </div>
            <a href="/turismo/" style={{
              color: 'var(--primary)',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}>Ver todo →</a>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
          }}>
            {[
              { emoji: '🏘️', title: '177 Pueblos Mágicos', desc: 'Pueblos con encanto colonial y tradiciones vivas en 31 estados.', href: '/turismo/pueblos-magicos/', color: '#E91E8C' },
              { emoji: '🏛️', title: 'Zonas Arqueológicas', desc: 'De Teotihuacán a Chichén Itzá — ciudades prehispánicas.', href: '/turismo/zonas-arqueologicas/', color: '#D97706' },
              { emoji: '🌊', title: 'Playas', desc: 'Cancún, Riviera Maya, Huatulco y los mejores destinos de playa.', href: '/turismo/playas/', color: '#0EA5E9' },
              { emoji: '🏙️', title: 'Barrios Mágicos', desc: 'Coyoacán, Roma, Tlalpan — barrios con identidad y cultura.', href: '/turismo/barrios-magicos/', color: '#8B5CF6' },
              { emoji: '🍽️', title: 'Rutas Gastronómicas', desc: 'Mole, tequila, mezcal y la gastronomía patrimonio de la humanidad.', href: '/turismo/rutas-gastronomicas/', color: '#10B981' },
              { emoji: '🌿', title: 'Naturaleza', desc: 'Sian Ka\'an, Cañón del Sumidero, biósfera y ecoturismo.', href: '/turismo/naturaleza/', color: '#22C55E' },
              { emoji: '🏛️', title: 'Ciudades Patrimonio', desc: 'Oaxaca, San Cristóbal, Guanajuato — patrimonio de la humanidad.', href: '/turismo/ciudades-patrimonio/', color: '#6366F1' },
              { emoji: '⭐', title: 'Destinos Prioritarios', desc: 'Los 20 destinos prioritarios de SECTUR para el turismo internacional.', href: '/turismo/destinos-prioritarios/', color: '#F59E0B' },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                borderTop: `3px solid ${item.color}`,
                borderRadius: '8px',
                padding: '1rem',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.375rem' }}>{item.emoji}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIFA 2026 CTA ── */}
      <section style={{
        padding: '2.5rem 1rem',
        borderTop: '1px solid var(--border)',
        background: 'linear-gradient(135deg, rgba(245,166,35,0.08) 0%, rgba(245,166,35,0.02) 100%)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.75rem',
            }}>⚽ FIFA World Cup 2026</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Get to the Stadium by Public Transit
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '600px', marginBottom: '1.5rem' }}>
              Complete transit guides for all 16 FIFA 2026 host cities. 78 matches across Mexico, USA, and Canada. July 19, 2026: Final at MetLife Stadium, New York/New Jersey.
            </p>

            {/* Mexico venues */}
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>México (13 matches)</h4>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[
                { ciudad: 'CDMX', estadio: 'Estadio Azteca', href: '/cdmx/', color: '#F5A623' },
                { ciudad: 'GDL', estadio: 'Estadio Akron', href: '/gdl/', color: '#06B6D4' },
                { ciudad: 'MTY', estadio: 'Estadio BBVA', href: '/mty/', color: '#EC4899' },
              ].map((s) => (
                <a key={s.ciudad} href={s.href} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius)',
                  backgroundColor: 'var(--surface)',
                  border: `1px solid ${s.color}30`,
                  textDecoration: 'none',
                  minWidth: '100px',
                }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: s.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.ciudad}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text)', fontWeight: 600, marginTop: '0.125rem' }}>{s.estadio}</span>
                </a>
              ))}
            </div>

            {/* USA venues */}
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>United States (48 matches)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              11 cities including NYC (Final), Los Angeles, Houston, Dallas, Atlanta, Philadelphia, Seattle, San Francisco, Boston, Miami, and Kansas City.
            </p>

            {/* Canada venues */}
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Canada (13 matches)</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Toronto and Vancouver — detailed public transit guides and stadium access routes.
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{
        padding: '3rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Cómo funciona</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Planifica tu viaje en 3 pasos, sin apps ni datos móviles
          </p>

          <div className="grid-3">
            {[
              {
                num: '01',
                title: 'Busca tu ruta',
                desc: 'Escribe tu origen y destino. El buscador encuentra la estación más cercana con autocompletado.',
              },
              {
                num: '02',
                title: 'Revisa los pasos',
                desc: 'Ve las líneas, transbordos, tiempo estimado y costo. Incluye alertas de seguridad y tips.',
              },
              {
                num: '03',
                title: 'Viaja como local',
                desc: 'Instala la app (PWA) para acceso offline. Consulta tu ruta sin internet dentro del metro.',
              },
            ].map((step) => (
              <div key={step.num} className="card" style={{ padding: '1.5rem' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  opacity: 0.3,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}>{step.num}</div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>{step.title}</h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
