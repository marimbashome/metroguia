import SearchBar from '@/app/components/SearchBar'
import FAQSchema from '@/app/components/FAQSchema'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import LocalBusinessSchema from '@/app/components/LocalBusinessSchema'
import { homeFAQs, transitAgencies } from '@/data/faqs'
import AdBannerLazy from '@/app/components/AdBannerLazy'
import MarimbasCondesa from '@/app/components/MarimbasCondesa'
import EmailCapture from '@/app/components/EmailCapture'

export const metadata = {
  title: 'MetroGuia — Planificador de Metro CDMX, GDL, MTY | FIFA 2026',
  description: 'Planifica rutas en transporte público de México rumbo al Mundial FIFA 2026. Metro CDMX, Mi Tren GDL, Metrorrey MTY. Transbordos, tiempos, costos. Sin apps.',
  alternates: {
    canonical: 'https://metroguia.mx/',
    languages: {
      es: 'https://metroguia.mx/',
      en: 'https://metroguia.mx/en/',
      pt: 'https://metroguia.mx/pt/',
      fr: 'https://metroguia.mx/fr/',
      de: 'https://metroguia.mx/de/',
      ja: 'https://metroguia.mx/ja/',
      ko: 'https://metroguia.mx/ko/',
      'x-default': 'https://metroguia.mx/',
    },
  },
  openGraph: {
    title: 'MetroGuia — Planificador de Metro para FIFA 2026',
    description: 'Rutas en transporte público para CDMX, Guadalajara y Monterrey. Planea tu viaje al Estadio Azteca, Akron y BBVA.',
    url: 'https://metroguia.mx/',
    type: 'website',
    siteName: 'MetroGuia',
    locale: 'es_MX',
    alternateLocale: ['en_US', 'pt_BR', 'fr_FR', 'de_DE'],
    images: [{
      url: 'https://metroguia.mx/og-image.png',
      width: 1200,
      height: 630,
      alt: 'MetroGuia — Planificador de metro para FIFA 2026 en México',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroGuia — Metro para FIFA 2026',
    description: 'Planifica rutas al Estadio Azteca, Akron y BBVA en transporte público.',
    images: ['https://metroguia.mx/og-image.png'],
  },
}

// Ciudades con trip planner activo (Mundial 2026 México)
const ciudadesActivas = [
  {
    id: 'cdmx',
    nombre: 'Ciudad de México',
    ciudad: 'CDMX',
    estadio: 'Estadio Azteca',
    partidos: 5,
    fechas: '11, 17, 24 jun · 30 jun · 5 jul',
    stats: '195 estaciones · 12 líneas',
    href: '/cdmx/',
    color: 'var(--linea-9)',
    flag: '🇲🇽',
  },
  {
    id: 'gdl',
    nombre: 'Guadalajara',
    ciudad: 'GDL',
    estadio: 'Estadio Akron',
    partidos: 4,
    fechas: '11, 18, 23, 26 jun',
    stats: 'Mi Tren L1–L4 · BRT',
    href: '/gdl/',
    color: 'var(--linea-4)',
    flag: '🇲🇽',
  },
  {
    id: 'mty',
    nombre: 'Monterrey',
    ciudad: 'MTY',
    estadio: 'Estadio BBVA',
    partidos: 4,
    fechas: '14, 20, 24, 29 jun',
    stats: 'Metrorrey L1–L3 · Ecovía',
    href: '/mty/',
    color: 'var(--linea-1)',
    flag: '🇲🇽',
  },
]

// Sedes fuera de México — comunidad de interés, capturamos email
const ciudadesProximamente = [
  { nombre: 'New York / NJ', estadio: 'MetLife Stadium', destacado: 'Final 19 jul', flag: '🇺🇸' },
  { nombre: 'Los Angeles', estadio: 'SoFi Stadium', destacado: '8 partidos', flag: '🇺🇸' },
  { nombre: 'Dallas', estadio: 'AT&T Stadium', destacado: '9 partidos', flag: '🇺🇸' },
  { nombre: 'Miami', estadio: 'Hard Rock Stadium', destacado: '7 partidos', flag: '🇺🇸' },
  { nombre: 'Atlanta', estadio: 'Mercedes-Benz', destacado: '8 partidos', flag: '🇺🇸' },
  { nombre: 'Seattle', estadio: 'Lumen Field', destacado: '6 partidos', flag: '🇺🇸' },
  { nombre: 'Boston', estadio: 'Gillette Stadium', destacado: '7 partidos', flag: '🇺🇸' },
  { nombre: 'Philadelphia', estadio: 'Lincoln Financial', destacado: '6 partidos', flag: '🇺🇸' },
  { nombre: 'Houston', estadio: 'NRG Stadium', destacado: '7 partidos', flag: '🇺🇸' },
  { nombre: 'San Francisco', estadio: 'Levi\'s Stadium', destacado: '6 partidos', flag: '🇺🇸' },
  { nombre: 'Kansas City', estadio: 'Arrowhead', destacado: '6 partidos', flag: '🇺🇸' },
  { nombre: 'Toronto', estadio: 'BMO Field', destacado: '6 partidos', flag: '🇨🇦' },
  { nombre: 'Vancouver', estadio: 'BC Place', destacado: '7 partidos', flag: '🇨🇦' },
]

const rutasPopulares = [
  { origen: 'Zócalo', destino: 'Estadio Azteca', slug: 'zocalo-a-tasquena', etiqueta: 'FIFA 2026', tiempo: '45 min' },
  { origen: 'Aeropuerto', destino: 'Bellas Artes', slug: 'aeropuerto-a-bellas-artes', etiqueta: 'Turismo', tiempo: '35 min' },
  { origen: 'Chilpancingo', destino: 'Coyoacán', slug: 'chilpancingo-a-coyoacan', etiqueta: 'Condesa → Sur', tiempo: '30 min' },
  { origen: 'Insurgentes', destino: 'Chapultepec', slug: 'insurgentes-a-chapultepec', etiqueta: 'Clásico', tiempo: '10 min' },
]

export default function LandingPage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MetroGuia',
    url: 'https://metroguia.mx',
    description: 'Planificador de metro para México. Rutas, transbordos, tiempos y costos en CDMX, GDL y MTY.',
    inLanguage: ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://metroguia.mx/ruta/{origin}-a-{destination}/',
      'query-input': 'required name=origin required name=destination',
    },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sedes FIFA 2026 — México',
    numberOfItems: ciudadesActivas.length,
    itemListElement: ciudadesActivas.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.nombre,
      description: `${c.estadio} — ${c.partidos} partidos`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 1. HERO — Trip planner prominente                            */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)',
        padding: 'clamp(3rem, 8vw, 5.5rem) 1rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Sutil textura de fondo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(232,155,44,0.15) 0%, transparent 45%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          position: 'relative',
          textAlign: 'center',
        }}>
          {/* Language pills — sutil, sin dominar */}
          <div style={{
            display: 'inline-flex',
            gap: '0.4rem',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {[
              { l: 'ES', href: '/', active: true },
              { l: 'EN', href: '/en/' },
              { l: 'PT', href: '/pt/' },
              { l: 'FR', href: '/fr/' },
            ].map((lang) => (
              <a
                key={lang.l}
                href={lang.href}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: lang.active ? 'var(--amber)' : 'rgba(255,255,255,0.08)',
                  border: `1px solid ${lang.active ? 'var(--amber)' : 'rgba(255,255,255,0.15)'}`,
                  color: lang.active ? 'var(--forest)' : 'rgba(255,255,255,0.85)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                {lang.l}
              </a>
            ))}
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(232,155,44,0.12)',
            border: '1px solid rgba(232,155,44,0.35)',
            color: 'var(--amber)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            ⚽ FIFA World Cup 2026 · Del 11 jun al 19 jul
          </div>

          <h1 className="editorial-h1" style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.25rem, 6vw, 3.75rem)',
            marginBottom: '1.25rem',
            lineHeight: 1.05,
          }}>
            Planifica tu ruta en metro<br/>
            <span style={{ color: 'var(--amber)' }}>sin apps, sin datos</span>
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            maxWidth: '620px',
            margin: '0 auto 2.25rem',
            lineHeight: 1.55,
          }}>
            Transbordos, tiempos y costos reales en <strong style={{ color: '#FFFFFF' }}>CDMX, Guadalajara y Monterrey</strong>. Instalable como app offline en 2 segundos.
          </p>

          {/* Trip Planner */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.1)',
            textAlign: 'left',
          }}>
            <SearchBar ciudad="cdmx" />
          </div>

          {/* Trust row */}
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            color: 'rgba(255,255,255,0.72)',
            fontSize: '0.85rem',
          }}>
            <span>✓ 100% gratis · sin registro</span>
            <span>✓ Funciona sin internet</span>
            <span>✓ 195 estaciones CDMX</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 2. HOSPEDAJE MARIMBAS — above-fold, contextual              */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 1rem 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <MarimbasCondesa />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 3. ESTADIOS STRIP + RUTAS POPULARES                         */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="eyebrow">Sedes Mundial FIFA 2026</div>
            <h2 className="editorial-h2" style={{ marginBottom: '0.5rem' }}>
              3 ciudades · 13 partidos en México
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
              Elige tu sede y abre el trip planner con rutas a cada estadio, el aeropuerto y las zonas turísticas.
            </p>
          </div>

          {/* Grid de 3 ciudades */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}>
            {ciudadesActivas.map((c) => (
              <a
                key={c.id}
                href={c.href}
                style={{
                  display: 'block',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--linen)',
                  border: '1px solid rgba(31,58,46,0.1)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                  borderTop: `4px solid ${c.color}`,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{c.flag}</span>
                  <div>
                    <div style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: c.color,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>{c.ciudad}</div>
                    <div style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}>{c.nombre}</div>
                  </div>
                </div>

                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--forest)',
                  marginBottom: '0.35rem',
                }}>
                  {c.estadio} · {c.partidos} partidos
                </div>
                <div style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                }}>
                  {c.fechas}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-dim)',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(31,58,46,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span>{c.stats}</span>
                  <span style={{ color: c.color, fontWeight: 700 }}>Abrir →</span>
                </div>
              </a>
            ))}
          </div>

          {/* Rutas populares */}
          <div className="eyebrow" style={{ textAlign: 'center' }}>Rutas más buscadas</div>
          <h3 className="editorial-h2" style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
          }}>
            Empieza con una ruta lista
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '0.75rem',
          }}>
            {rutasPopulares.map((r) => (
              <a
                key={r.slug}
                href={`/ruta/${r.slug}/`}
                style={{
                  padding: '1rem 1.1rem',
                  background: '#FFFFFF',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                  display: 'block',
                }}
              >
                <div style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--chiapas)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.35rem',
                }}>
                  {r.etiqueta} · {r.tiempo}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.3,
                }}>
                  {r.origen} <span style={{ color: 'var(--text-dim)' }}>→</span> {r.destino}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ad break ── */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem 2rem' }}>
        <AdBannerLazy slot="4434764790" format="auto" />
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 4. COMING SOON — 13 sedes USA/CA + Email capture            */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(180deg, var(--linen-soft) 0%, #FFFFFF 100%)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Col 1: Mensaje + email capture */}
            <div>
              <div className="eyebrow">Próximamente</div>
              <h2 className="editorial-h2" style={{ marginBottom: '0.75rem' }}>
                13 sedes más en USA y Canadá
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}>
                Estamos armando los trip planners para MetLife, SoFi, AT&T y el resto del Mundial. Déjanos tu email y te escribimos una sola vez cuando abra tu ciudad.
              </p>
              <EmailCapture
                source="coming-soon-cities"
                title="Avísame cuando abra mi sede"
                subtitle="Sin spam, sin newsletters. Solo el aviso de apertura."
                cta="Avisarme"
              />
            </div>

            {/* Col 2: Lista visual de sedes */}
            <div>
              <div className="eyebrow">Sedes en construcción</div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
                marginTop: '0.5rem',
              }}>
                {ciudadesProximamente.map((c) => (
                  <div
                    key={c.nombre}
                    style={{
                      padding: '0.7rem 0.85rem',
                      background: '#FFFFFF',
                      border: '1px solid rgba(31,58,46,0.08)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ fontSize: '1rem' }}>{c.flag}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        lineHeight: 1.2,
                      }}>{c.nombre}</div>
                      <div style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-dim)',
                        marginTop: '0.1rem',
                      }}>{c.destacado}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 5. CÓMO FUNCIONA — 3 pasos editoriales                       */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '4rem 1rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow">Cómo funciona</div>
            <h2 className="editorial-h2">Tres pasos. Cero fricciones.</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                num: '01',
                title: 'Busca tu ruta',
                desc: 'Escribe origen y destino. Autocompletado con 195 estaciones CDMX y sinónimos comunes.',
              },
              {
                num: '02',
                title: 'Revisa los pasos',
                desc: 'Líneas, transbordos, tiempo y costo real. Alertas importantes marcadas (Tren Ligero, hora pico).',
              },
              {
                num: '03',
                title: 'Viaja offline',
                desc: 'Instala como app (PWA). Tu ruta queda accesible sin datos en el metro.',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  padding: '2rem 1.75rem',
                  background: 'var(--linen)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(31,58,46,0.08)',
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2.75rem',
                  fontWeight: 800,
                  color: 'var(--amber)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>
                  {step.num}
                </div>
                <h3 className="editorial-h2" style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* 6. CTA FOOTER — Mundial + hospedaje                          */}
      {/* ════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ color: 'var(--amber)' }}>
            Vas al Mundial
          </div>
          <h2 className="editorial-h1" style={{
            color: '#FFFFFF',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            marginBottom: '1rem',
          }}>
            Hospédate a 5 min del metro,<br/>
            a 50 min del Estadio Azteca
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1.05rem',
            marginBottom: '2rem',
            lineHeight: 1.55,
          }}>
            Marimbas Home opera departamentos verificados en La Condesa, a pasos de Chilpancingo (L9). WiFi 800 Mbps, cocina completa, reserva directa sin comisiones.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/hospedaje/"
              style={{
                padding: '0.95rem 1.75rem',
                borderRadius: 'var(--radius)',
                background: 'var(--amber)',
                color: 'var(--forest)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Ver departamentos →
            </a>
            <a
              href="https://book.marimbashome.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.95rem 1.75rem',
                borderRadius: 'var(--radius)',
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.3)',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Reservar directo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
