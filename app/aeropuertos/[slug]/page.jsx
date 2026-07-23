import { aeropuertos } from '@/data/aeropuertos'
import { getKeepUrlSlugs } from '@/lib/keep-urls'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

const KEEP_SLUGS = getKeepUrlSlugs('/aeropuertos/')

export function generateStaticParams() {
  return KEEP_SLUGS.map((slug) => ({ slug }))
}

function findAirport(slug) {
  if (!KEEP_SLUGS.includes(slug)) return null
  return aeropuertos.find((a) => a.slug === slug) || null
}

export function generateMetadata({ params }) {
  const airport = findAirport(params.slug)
  if (!airport) return { title: 'Aeropuerto no encontrado' }
  return {
    title: airport.seo_title,
    description: airport.meta_description,
    alternates: { canonical: `/aeropuertos/${airport.slug}/` },
    openGraph: {
      title: airport.seo_title,
      description: airport.meta_description,
      url: `https://metroguia.mx/aeropuertos/${airport.slug}/`,
      siteName: 'MetroGuia.mx',
      locale: 'es_MX',
      type: 'website',
    },
  }
}

export default function AeropuertoPage({ params }) {
  const airport = findAirport(params.slug)
  if (!airport) {
    return (
      <div className="section container-narrow" style={{ textAlign: 'center' }}>
        <h1>Aeropuerto no encontrado</h1>
        <p><a href="/aeropuertos/">Volver a Aeropuertos</a></p>
      </div>
    )
  }

  const otros = KEEP_SLUGS
    .filter((s) => s !== airport.slug)
    .map((s) => aeropuertos.find((a) => a.slug === s))
    .filter(Boolean)

  const airportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Airport',
    name: airport.nombre,
    iataCode: airport.iata,
    url: `https://metroguia.mx/aeropuertos/${airport.slug}/`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: airport.ciudad,
      addressRegion: airport.estado,
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: airport.lat, longitude: airport.lng },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airportSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Aeropuertos', url: '/aeropuertos/' },
          { name: airport.iata, url: `/aeropuertos/${airport.slug}/` },
        ]}
      />

      <div className="container breadcrumb-nav">
        <a href="/">Inicio</a> → <a href="/aeropuertos/">Aeropuertos</a> → <span>{airport.iata}</span>
      </div>

      <section className="section entity-hero">
        <div className="container">
          <div className="entity-hero-meta">
            <span className="badge">✈️ {airport.iata}</span>
            <span className="entity-hero-place">{airport.ciudad}, {airport.estado}</span>
          </div>
          <h1>{airport.nombre}</h1>
          <p className="entity-hero-desc">{airport.descripcion}</p>
          <div className="entity-hero-facts">
            <Fact label="Distancia al centro" value={airport.distanciaCentro} />
            <Fact label="Código IATA" value={airport.iata} />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <h2>Cómo llegar al centro de {airport.ciudad}</h2>

          {airport.comoLlegar.transporte.length > 0 && (
            <div className="stack">
              {airport.comoLlegar.transporte.map((t, i) => (
                <div key={i} className="card transport-card">
                  <div className="transport-card-head">
                    <span className="transport-card-tipo">{t.tipo}</span>
                    {t.tiempo && <span className="transport-card-tiempo">{t.tiempo}</span>}
                  </div>
                  <p>{t.detalle}</p>
                  <div className="transport-card-foot">
                    {t.precio && <span className="badge badge-amber">{t.precio}</span>}
                    {t.link && <a href={t.link} className="transport-card-link">Ver estación →</a>}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="two-col">
            <div className="card">
              <div className="mini-label">🚕 Taxi</div>
              <div className="mini-value">{airport.comoLlegar.taxi.estimado}</div>
              <p className="mini-note">{airport.comoLlegar.taxi.nota}</p>
            </div>
            <div className="card">
              <div className="mini-label">📱 Uber / DiDi</div>
              <div className="mini-value">{airport.comoLlegar.uber.estimado}</div>
              <p className="mini-note">{airport.comoLlegar.uber.nota}</p>
            </div>
          </div>

          {airport.comoLlegar.tips?.length > 0 && (
            <div className="tips-box">
              <div className="tips-box-title">Tips</div>
              {airport.comoLlegar.tips.map((tip, i) => (
                <p key={i}>• {tip}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {airport.conexiones.length > 0 && (
        <section className="section">
          <div className="container-narrow">
            <h2>Conexiones de transporte</h2>
            <div className="chip-row">
              {airport.conexiones.map((c, i) => (
                <span key={i} className="chip">
                  <strong>{c.nombre}</strong> — {c.tipo}, línea {c.linea}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {otros.length > 0 && (
        <section className="section section-alt">
          <div className="container-narrow">
            <h2>Otros aeropuertos</h2>
            <div className="chip-row">
              {otros.map((a) => (
                <a key={a.slug} href={`/aeropuertos/${a.slug}/`} className="chip chip-link">
                  <strong>{a.iata}</strong> {a.ciudad}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{entityStyles}</style>
    </div>
  )
}

function Fact({ label, value }) {
  return (
    <div className="fact">
      <div className="fact-label">{label}</div>
      <div className="fact-value">{value}</div>
    </div>
  )
}

const entityStyles = `
  .breadcrumb-nav { padding: var(--space-3) var(--space-4) 0; font-size: 0.8rem; color: var(--text-dim); }
  .breadcrumb-nav a { color: var(--text-dim); text-decoration: none; }
  .breadcrumb-nav a:hover { color: var(--forest); }
  .breadcrumb-nav span { color: var(--text); font-weight: 600; }
  .entity-hero-meta { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3); }
  .entity-hero-place { font-size: 0.85rem; color: var(--text-muted); }
  .entity-hero-desc { max-width: 65ch; color: var(--text-muted); }
  .entity-hero-facts { display: flex; gap: var(--space-6); flex-wrap: wrap; margin-top: var(--space-4); }
  .fact-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-dim); }
  .fact-value { font-size: 1.1rem; font-weight: 700; color: var(--forest); }
  .stack { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-4); }
  .transport-card { padding: var(--space-4); }
  .transport-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2); }
  .transport-card-tipo { font-weight: 700; }
  .transport-card-tiempo { font-size: 0.85rem; color: var(--forest); font-weight: 600; }
  .transport-card p { margin: 0; font-size: 0.9rem; color: var(--text-muted); }
  .transport-card-foot { display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-2); }
  .transport-card-link { font-size: 0.82rem; font-weight: 600; color: var(--forest); }
  .badge-amber { background: var(--amber-glow); border: 1px solid var(--amber-border); color: var(--amber-hover); }
  .two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-3); margin-bottom: var(--space-4); }
  .two-col .card { padding: var(--space-4); }
  .mini-label { font-weight: 700; font-size: 0.9rem; margin-bottom: var(--space-2); }
  .mini-value { font-size: 1.05rem; font-weight: 700; color: var(--forest); margin-bottom: 0.25rem; }
  .mini-note { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
  .tips-box { padding: var(--space-4); border-radius: var(--radius); background: var(--amber-glow); border: 1px solid var(--amber-border); }
  .tips-box-title { font-weight: 700; font-size: 0.85rem; color: var(--amber-hover); margin-bottom: var(--space-2); }
  .tips-box p { font-size: 0.85rem; color: var(--text-muted); margin: 0 0 0.4rem; }
  .tips-box p:last-child { margin-bottom: 0; }
  .chip-row { display: flex; gap: var(--space-2); flex-wrap: wrap; }
  .chip { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.85rem; border-radius: var(--radius-full); background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted); }
  .chip-link { text-decoration: none; }
  .chip-link:hover { border-color: var(--border-strong); color: var(--forest); }
`
