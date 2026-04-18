import { lineasDetalle } from '@/data/lineas-detalle'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import LineSchema from '@/app/components/LineSchema'
import MarimbasCondesa from '@/app/components/MarimbasCondesa'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import SearchBar from '@/app/components/SearchBar'
import EmailCapture from '@/app/components/EmailCapture'

// Rutas estáticas — todas las líneas CDMX
export function generateStaticParams() {
  return Object.keys(lineasDetalle).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const linea = lineasDetalle[params.id]
  if (!linea) return { title: 'Línea no encontrada | MetroGuia' }

  const colorLabel = linea.colorNombre ? ` (${linea.colorNombre})` : ''
  const title = `Línea ${linea.id}${colorLabel} del Metro CDMX — Estaciones, Mapa y Horarios | MetroGuia`

  const turisticas = linea.estaciones_turisticas && linea.estaciones_turisticas.length > 0
    ? linea.estaciones_turisticas.map(slug => {
        const st = linea.estaciones.find(e => e.slug === slug)
        return st ? st.nombre : slug
      }).join(', ')
    : ''

  const destinosText = turisticas ? ` Paradas clave: ${turisticas}.` : ''
  const description = `Línea ${linea.id}${colorLabel} del Metro CDMX: ${linea.total} estaciones de ${linea.inicio} a ${linea.fin}.${destinosText} Planifica tu ruta, consulta transbordos y horarios.`

  return {
    title,
    description,
    openGraph: {
      title: `Línea ${linea.id} del Metro CDMX — ${linea.inicio} a ${linea.fin}`,
      description,
      url: `https://metroguia.mx/linea/${linea.id}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
    alternates: {
      canonical: `https://metroguia.mx/linea/${linea.id}/`,
    },
  }
}

// Mapeo id -> variable CSS del color de línea
const LINEA_VAR = {
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

// Líneas del corredor Condesa / Azteca — muestran CTA Marimbas destacado
const MARIMBAS_LINES = new Set(['9', '1', '2', '7'])

// Contexto de la línea respecto al hospedaje Marimbas
const MARIMBAS_CONTEXT = {
  '9': {
    headline: 'La línea del hospedaje Marimbas',
    body:
      'La L9 pasa por Chilpancingo, a 5 minutos de los departamentos Marimbas Home en La Condesa. Es tu conexión directa al poniente, al sur y al corredor del Estadio Azteca.',
  },
  '1': {
    headline: 'La Línea Rosa cruza cerca de La Condesa',
    body:
      'Insurgentes y Sevilla están a 10–12 minutos caminando de los departamentos Marimbas Home en Chilpancingo (L9). Ideal si quieres moverte por Zona Rosa y Chapultepec.',
  },
  '2': {
    headline: 'La ruta al Estadio Azteca para el Mundial 2026',
    body:
      'La L2 te lleva de La Condesa (transbordo desde Chilpancingo L9 → Chabacano L2) hasta Tasqueña, donde tomas el Tren Ligero al Estadio Azteca.',
  },
  '7': {
    headline: 'La Línea Naranja toca Chapultepec',
    body:
      'L7 conecta el Bosque de Chapultepec, a 15 min a pie de Marimbas Home Condesa. Útil para moverte entre Polanco, Tacubaya y Mixcoac.',
  },
}

export default function LineaPage({ params }) {
  const linea = lineasDetalle[params.id]

  if (!linea) {
    return (
      <div
        style={{
          padding: '5rem 2rem',
          textAlign: 'center',
          background: 'var(--linen)',
          minHeight: '60vh',
        }}
      >
        <h1 className="editorial-h1" style={{ color: 'var(--forest)' }}>
          Línea no encontrada
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
          Revisa el número de línea o regresa al{' '}
          <a href="/lineas/" style={{ color: 'var(--amber)' }}>
            índice de líneas
          </a>
          .
        </p>
      </div>
    )
  }

  const lineaVar = LINEA_VAR[linea.id] || '--linea-1'
  const lineColor = `var(${lineaVar})`
  const isMarimbasLine = MARIMBAS_LINES.has(linea.id)
  const marimbasCtx = MARIMBAS_CONTEXT[linea.id]

  // Estaciones turísticas resueltas (slug → objeto)
  const turisticasResolved = (linea.estaciones_turisticas || [])
    .map((slug) => linea.estaciones.find((e) => e.slug === slug))
    .filter(Boolean)

  // Breadcrumb
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://metroguia.mx/' },
    { name: 'CDMX', url: 'https://metroguia.mx/cdmx/' },
    { name: 'Líneas', url: 'https://metroguia.mx/lineas/' },
    { name: `Línea ${linea.id}`, url: `https://metroguia.mx/linea/${linea.id}/` },
  ]

  // Fuente única de texto para "Mundial 2026" CTA — L2 y L9 son corredor al Azteca
  const showMundialCallout = ['2', '9'].includes(linea.id)

  return (
    <div style={{ background: 'var(--surface)', color: 'var(--text)' }}>
      <LineSchema linea={linea} ciudad="cdmx" sistema="Metro" />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* ─── HERO EDITORIAL ─── */}
      <section
        style={{
          position: 'relative',
          borderTop: `6px solid ${lineColor}`,
          background:
            'linear-gradient(135deg, var(--forest) 0%, var(--forest-soft) 100%)',
          color: '#FFFFFF',
          padding: '3rem 1.25rem 2.5rem',
          overflow: 'hidden',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.72)',
              marginBottom: '1.25rem',
            }}
          >
            <a href="/" style={{ color: 'var(--amber)', textDecoration: 'none' }}>
              Inicio
            </a>
            <span style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.35)' }}>
              ›
            </span>
            <a
              href="/cdmx/"
              style={{ color: 'var(--amber)', textDecoration: 'none' }}
            >
              CDMX
            </a>
            <span style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.35)' }}>
              ›
            </span>
            <a
              href="/lineas/"
              style={{ color: 'var(--amber)', textDecoration: 'none' }}
            >
              Líneas
            </a>
            <span style={{ margin: '0 0.5rem', color: 'rgba(255,255,255,0.35)' }}>
              ›
            </span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>
              Línea {linea.id}
            </span>
          </nav>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Crest circular con número de línea */}
            <div
              style={{
                width: '4.5rem',
                height: '4.5rem',
                borderRadius: '50%',
                backgroundColor: lineColor,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.9rem',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                border: '3px solid rgba(255,255,255,0.12)',
              }}
              aria-label={`Línea ${linea.id}`}
            >
              {linea.id}
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <div
                className="eyebrow"
                style={{
                  color: 'var(--amber)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '0.4rem',
                }}
              >
                Metro CDMX · Línea {linea.id}
                {linea.colorNombre ? ` · ${linea.colorNombre}` : ''}
              </div>
              <h1
                className="editorial-h1"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2rem, 4.4vw, 2.9rem)',
                  lineHeight: 1.1,
                  margin: 0,
                  color: '#FFFFFF',
                  fontWeight: 700,
                }}
              >
                {linea.h1 || `Línea ${linea.id} del Metro CDMX`}
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.86)',
                  marginTop: '0.6rem',
                  maxWidth: '640px',
                  lineHeight: 1.55,
                }}
              >
                De <strong style={{ color: 'var(--amber)' }}>{linea.inicio}</strong>{' '}
                a <strong style={{ color: 'var(--amber)' }}>{linea.fin}</strong>. {linea.total}{' '}
                estaciones que cruzan {linea.zonas.slice(0, 3).join(', ')}.
              </p>
            </div>
          </div>

          {/* Stat strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '0.65rem',
              marginTop: '1.75rem',
            }}
          >
            <HeroStat label="Estaciones" value={linea.total} />
            <HeroStat label="Inicio" value={linea.inicio} small />
            <HeroStat label="Final" value={linea.fin} small />
            <HeroStat
              label="Alcaldías"
              value={linea.zonas.length}
              suffix={linea.zonas.length === 1 ? 'alcaldía' : 'alcaldías'}
            />
          </div>
        </div>
      </section>

      {/* ─── LAYOUT PRINCIPAL 2 COLUMNAS ─── */}
      <main
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '2.5rem 1.25rem 3.5rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 320px',
            gap: '2.25rem',
            alignItems: 'start',
          }}
          className="linea-grid"
        >
          {/* Columna principal */}
          <div style={{ minWidth: 0 }}>
            {/* INTRO */}
            <article
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem 1.9rem',
                marginBottom: '2rem',
                borderLeft: `4px solid ${lineColor}`,
              }}
            >
              <SectionHeading
                icon="📍"
                title="Sobre esta línea"
                lineColor={lineColor}
              />
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--text)',
                  margin: '0.65rem 0 0',
                }}
              >
                {linea.descripcion}
              </p>
            </article>

            {/* ESTACIONES TURÍSTICAS — Editorial callout */}
            {turisticasResolved.length > 0 && (
              <section style={{ marginBottom: '2rem' }}>
                <SectionHeading
                  icon="✨"
                  title="Paradas imperdibles"
                  subtitle="Las estaciones con mayor valor turístico de la línea"
                  lineColor={lineColor}
                />
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '0.9rem',
                    marginTop: '1rem',
                  }}
                >
                  {turisticasResolved.map((est) => (
                    <a
                      key={est.slug}
                      href={`/estacion/${est.slug}/`}
                      style={{
                        display: 'block',
                        background: 'var(--linen)',
                        border: `1px solid var(--border)`,
                        borderLeft: `4px solid ${lineColor}`,
                        borderRadius: 'var(--radius)',
                        padding: '1rem 1.15rem',
                        textDecoration: 'none',
                        color: 'var(--text)',
                        transition: 'transform 0.15s, border-color 0.15s',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.68rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: 700,
                        }}
                      >
                        Parada clave
                      </div>
                      <div
                        style={{
                          fontFamily:
                            "'Playfair Display', Georgia, serif",
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: 'var(--forest)',
                          marginTop: '0.25rem',
                          lineHeight: 1.2,
                        }}
                      >
                        {est.nombre}
                      </div>
                      <div
                        style={{
                          fontSize: '0.82rem',
                          color: lineColor,
                          marginTop: '0.45rem',
                          fontWeight: 600,
                        }}
                      >
                        Ver estación →
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* TODAS LAS ESTACIONES */}
            <section style={{ marginBottom: '2rem' }}>
              <SectionHeading
                icon="🚇"
                title={`Las ${linea.total} estaciones`}
                subtitle={`De ${linea.inicio} a ${linea.fin}, en orden`}
                lineColor={lineColor}
              />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: '0.55rem',
                  marginTop: '1rem',
                }}
              >
                {linea.estaciones.map((est, idx) => (
                  <a
                    key={est.slug}
                    href={`/estacion/${est.slug}/`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 0.75rem',
                      background: '#FFFFFF',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      fontSize: '0.87rem',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '1.5rem',
                        height: '1.5rem',
                        borderRadius: '50%',
                        backgroundColor: lineColor,
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {est.nombre}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* AD IN-ARTICLE */}
            <div style={{ margin: '2.25rem 0' }}>
              <AdBannerLazyInArticle slot="1082410395" />
            </div>

            {/* MARIMBAS CONTEXT CALLOUT */}
            {marimbasCtx && (
              <section
                style={{
                  background:
                    'linear-gradient(135deg, var(--linen) 0%, var(--linen-soft) 100%)',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--amber)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem 1.75rem',
                  marginBottom: '2rem',
                }}
              >
                <div
                  className="eyebrow"
                  style={{
                    color: 'var(--amber)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    marginBottom: '0.4rem',
                  }}
                >
                  Contexto Marimbas Home
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.35rem',
                    color: 'var(--forest)',
                    margin: 0,
                    fontWeight: 700,
                    lineHeight: 1.25,
                  }}
                >
                  {marimbasCtx.headline}
                </h3>
                <p
                  style={{
                    fontSize: '0.97rem',
                    lineHeight: 1.65,
                    color: 'var(--text)',
                    margin: '0.65rem 0 0',
                  }}
                >
                  {marimbasCtx.body}
                </p>
              </section>
            )}

            {/* RUTA DE 1 DÍA — Editorial con pasos */}
            {linea.ruta_1_dia && linea.ruta_1_dia.paradas?.length > 0 && (
              <section style={{ marginBottom: '2.25rem' }}>
                <SectionHeading
                  icon="🗓"
                  title={linea.ruta_1_dia.titulo}
                  subtitle="Itinerario sugerido para turistas — puede hacerse en un día"
                  lineColor={lineColor}
                />
                <ol
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '1rem 0 0',
                    position: 'relative',
                  }}
                >
                  {linea.ruta_1_dia.paradas.map((parada, idx) => {
                    const isLast =
                      idx === linea.ruta_1_dia.paradas.length - 1
                    return (
                      <li
                        key={idx}
                        style={{
                          position: 'relative',
                          paddingLeft: '3rem',
                          paddingBottom: isLast ? 0 : '1.75rem',
                        }}
                      >
                        {/* Dot */}
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            backgroundColor:
                              idx === 0 ? 'var(--amber)' : lineColor,
                            color: idx === 0 ? 'var(--forest)' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.88rem',
                            border: '3px solid var(--surface)',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                            zIndex: 1,
                          }}
                        >
                          {idx + 1}
                        </div>
                        {/* Connector */}
                        {!isLast && (
                          <div
                            style={{
                              position: 'absolute',
                              left: '0.97rem',
                              top: '2rem',
                              bottom: 0,
                              width: '2px',
                              background: `linear-gradient(to bottom, ${lineColor}, ${lineColor}22)`,
                            }}
                          />
                        )}
                        <div
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius)',
                            padding: '1rem 1.15rem',
                          }}
                        >
                          <div
                            style={{
                              fontFamily:
                                "'Playfair Display', Georgia, serif",
                              fontSize: '1.2rem',
                              fontWeight: 700,
                              color: 'var(--forest)',
                              lineHeight: 1.25,
                            }}
                          >
                            {parada.estacion}
                          </div>
                          <p
                            style={{
                              margin: '0.4rem 0 0',
                              fontSize: '0.95rem',
                              color: 'var(--text)',
                              lineHeight: 1.6,
                            }}
                          >
                            {parada.actividad}
                          </p>
                          {parada.duracion && (
                            <div
                              style={{
                                marginTop: '0.55rem',
                                fontSize: '0.78rem',
                                color: 'var(--text-muted)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.3rem',
                                background: 'var(--linen)',
                                padding: '0.2rem 0.55rem',
                                borderRadius: '999px',
                                fontWeight: 600,
                              }}
                            >
                              ⏱ {parada.duracion}
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </section>
            )}

            {/* MUNDIAL 2026 CALLOUT — solo líneas relevantes */}
            {showMundialCallout && (
              <section
                style={{
                  background:
                    'linear-gradient(135deg, var(--amber) 0%, #F0B555 100%)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 1.9rem',
                  marginBottom: '2rem',
                  color: 'var(--forest)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '7rem',
                    opacity: 0.12,
                    lineHeight: 1,
                  }}
                >
                  ⚽
                </div>
                <div
                  className="eyebrow"
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    marginBottom: '0.35rem',
                    color: 'var(--forest)',
                    opacity: 0.75,
                  }}
                >
                  Mundial FIFA 2026 · Estadio Azteca
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--forest)',
                    lineHeight: 1.2,
                    maxWidth: '620px',
                  }}
                >
                  {linea.id === '2'
                    ? 'La L2 es tu ruta al Estadio Azteca'
                    : 'La L9 conecta con el corredor del Azteca'}
                </h3>
                <p
                  style={{
                    margin: '0.65rem 0 1.15rem',
                    fontSize: '0.97rem',
                    lineHeight: 1.6,
                    maxWidth: '620px',
                    color: 'var(--forest)',
                    opacity: 0.92,
                  }}
                >
                  {linea.id === '2'
                    ? 'De Cuatro Caminos a Tasqueña en L2, transbordo al Tren Ligero y llegas al Azteca. Importante: la tarjeta del Metro NO funciona en el Tren Ligero — necesitas una tarjeta aparte de $15 MXN.'
                    : 'Chilpancingo (L9) → Chabacano → transbordo L2 → Tasqueña → Tren Ligero → Estadio Azteca. ~45 min desde La Condesa.'}
                </p>
                <a
                  href="/mundial-2026/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'var(--forest)',
                    color: '#FFFFFF',
                    padding: '0.7rem 1.2rem',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}
                >
                  Ver guía del Mundial 2026 →
                </a>
              </section>
            )}

            {/* MARIMBAS HOSPEDAJE — mención completa para líneas relevantes */}
            {isMarimbasLine && <MarimbasCondesa compact={false} />}

            {/* AD FINAL + EMAIL */}
            <div style={{ margin: '2rem 0' }}>
              <AdBannerLazy slot="4434764790" format="auto" />
            </div>

            <EmailCapture
              source={`linea-${linea.id}-newsletter`}
              title="¿Te sirve esta guía de la Línea?"
              subtitle="Recibe nuevas guías de CDMX y tips del Mundial 2026 en tu correo. Una sola vez al mes."
              cta="Recibir guías"
              context={{ linea: linea.id, colorNombre: linea.colorNombre }}
            />

            {/* NAV AL FINAL */}
            <nav
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              <a
                href="/lineas/"
                style={{
                  padding: '0.6rem 1rem',
                  background: 'var(--linen)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--forest)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                ← Todas las líneas
              </a>
              <a
                href="/cdmx/"
                style={{
                  padding: '0.6rem 1rem',
                  background: 'var(--linen)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--forest)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                Metro CDMX
              </a>
              <a
                href="/mundial-2026/"
                style={{
                  padding: '0.6rem 1rem',
                  background: 'var(--forest)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                Guía Mundial 2026 →
              </a>
            </nav>
          </div>

          {/* ─── SIDEBAR STICKY ─── */}
          <aside
            style={{
              position: 'sticky',
              top: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="linea-sidebar"
          >
            {/* Mini trip planner */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.35rem',
              }}
            >
              <div
                className="eyebrow"
                style={{
                  color: 'var(--amber)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '0.3rem',
                }}
              >
                Trip planner
              </div>
              <h4
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.1rem',
                  color: 'var(--forest)',
                  margin: '0 0 0.65rem',
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                Planifica tu ruta
              </h4>
              <SearchBar ciudad="cdmx" compact />
            </div>

            {/* Marimbas compact */}
            <MarimbasCondesa compact={true} />

            {/* Ad sidebar */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.75rem',
              }}
            >
              <AdBannerLazy slot="4434764790" format="auto" />
            </div>
          </aside>
        </div>
      </main>

      {/* Responsive: colapsar sidebar en mobile */}
      <style>{`
        @media (max-width: 900px) {
          .linea-grid {
            grid-template-columns: 1fr !important;
          }
          .linea-sidebar {
            position: static !important;
          }
        }
      `}</style>
    </div>
  )
}

/* ───────── Sub-componentes ───────── */

function HeroStat({ label, value, small = false, suffix = null }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.09)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 'var(--radius)',
        padding: '0.65rem 0.85rem',
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontSize: '0.62rem',
          color: 'rgba(255,255,255,0.68)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 700,
          marginBottom: '0.2rem',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: small ? '0.95rem' : '1.3rem',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.15,
          whiteSpace: small ? 'normal' : 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {value}
      </div>
      {suffix && (
        <div
          style={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.55)',
            marginTop: '0.1rem',
          }}
        >
          {suffix}
        </div>
      )}
    </div>
  )
}

function SectionHeading({ icon, title, subtitle, lineColor }) {
  return (
    <div style={{ marginBottom: '0.25rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        {icon && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'var(--linen)',
              border: `1px solid ${lineColor || 'var(--border)'}`,
              fontSize: '1rem',
              flexShrink: 0,
            }}
          >
            {icon}
          </span>
        )}
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.55rem',
            fontWeight: 700,
            color: 'var(--forest)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            margin: '0.35rem 0 0',
            paddingLeft: icon ? '2.6rem' : 0,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
