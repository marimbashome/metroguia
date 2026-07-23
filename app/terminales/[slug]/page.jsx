import { terminales } from '@/data/terminales'
import { getKeepUrlSlugs } from '@/lib/keep-urls'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

const KEEP_SLUGS = getKeepUrlSlugs('/terminales/')
const KEEP_ESTACIONES = new Set(getKeepUrlSlugs('/estacion/'))

export function generateStaticParams() {
  return KEEP_SLUGS.map((slug) => ({ slug }))
}

function findTerminal(slug) {
  if (!KEEP_SLUGS.includes(slug)) return null
  return terminales.find((t) => t.slug === slug) || null
}

export function generateMetadata({ params }) {
  const terminal = findTerminal(params.slug)
  if (!terminal) return { title: 'Terminal no encontrada' }
  return {
    title: terminal.seo_title,
    description: terminal.meta_description,
    alternates: { canonical: `/terminales/${terminal.slug}/` },
    openGraph: {
      title: terminal.seo_title,
      description: terminal.meta_description,
      url: `https://metroguia.mx/terminales/${terminal.slug}/`,
      siteName: 'MetroGuia.mx',
      locale: 'es_MX',
      type: 'website',
    },
  }
}

export default function TerminalPage({ params }) {
  const terminal = findTerminal(params.slug)
  if (!terminal) {
    return (
      <div className="section container-narrow" style={{ textAlign: 'center' }}>
        <h1>Terminal no encontrada</h1>
        <p><a href="/terminales/">Volver a Terminales</a></p>
      </div>
    )
  }

  const otras = KEEP_SLUGS
    .filter((s) => s !== terminal.slug)
    .map((s) => terminales.find((t) => t.slug === s))
    .filter(Boolean)

  // Solo enlazamos la estación de Metro si está en el set de /estacion/
  // que este rebuild sí construye (keep-urls) — evita links muertos.
  const metroLinkable = terminal.conexionMetro && KEEP_ESTACIONES.has(terminal.conexionMetro.slug)

  const terminalSchema = {
    '@context': 'https://schema.org',
    '@type': 'BusStation',
    name: terminal.nombre,
    url: `https://metroguia.mx/terminales/${terminal.slug}/`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: terminal.ciudad,
      addressRegion: terminal.estado,
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: terminal.lat, longitude: terminal.lng },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(terminalSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Terminales', url: '/terminales/' },
          { name: terminal.nombreCorto || terminal.nombre, url: `/terminales/${terminal.slug}/` },
        ]}
      />

      <div className="container breadcrumb-nav">
        <a href="/">Inicio</a> → <a href="/terminales/">Terminales</a> → <span>{terminal.nombreCorto || terminal.nombre}</span>
      </div>

      <section className="section entity-hero">
        <div className="container">
          <div className="entity-hero-meta">
            <span className="badge">🚌 Terminal</span>
            <span className="entity-hero-place">{terminal.ciudad}, {terminal.estado}</span>
          </div>
          <h1>{terminal.nombre}</h1>
          <p className="entity-hero-desc">{terminal.descripcion}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <h2>Cómo llegar</h2>

          {terminal.conexionMetro && (
            metroLinkable ? (
              <a href={`/estacion/${terminal.conexionMetro.slug}/`} className="card metro-callout">
                <span className="metro-callout-icon">🚇</span>
                <div>
                  <div className="metro-callout-title">Metro {terminal.conexionMetro.nombre}</div>
                  <div className="metro-callout-sub">Línea {terminal.conexionMetro.linea} — conexión directa</div>
                </div>
              </a>
            ) : (
              <div className="card metro-callout metro-callout-static">
                <span className="metro-callout-icon">🚇</span>
                <div>
                  <div className="metro-callout-title">Metro {terminal.conexionMetro.nombre}</div>
                  <div className="metro-callout-sub">Línea {terminal.conexionMetro.linea} — conexión directa</div>
                </div>
              </div>
            )
          )}

          <div className="stack">
            {terminal.comoLlegar.transporte.map((t, i) => (
              <div key={i} className="card transport-card">
                <div className="transport-card-head">
                  <span className="transport-card-tipo">{t.tipo}</span>
                  {t.tiempo && <span className="transport-card-tiempo">{t.tiempo}</span>}
                </div>
                <p>{t.detalle}</p>
                {t.costo && <span className="badge badge-amber">{t.costo}</span>}
              </div>
            ))}
          </div>

          <div className="two-col">
            <div className="card">
              <div className="mini-label">🚕 Taxi</div>
              <div className="mini-value">{terminal.comoLlegar.taxi.estimado}</div>
              <p className="mini-note">{terminal.comoLlegar.taxi.nota}</p>
            </div>
            <div className="card">
              <div className="mini-label">📱 Uber / DiDi</div>
              <div className="mini-value">{terminal.comoLlegar.uber.estimado}</div>
              {terminal.comoLlegar.uber.nota && <p className="mini-note">{terminal.comoLlegar.uber.nota}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <h2>Destinos principales</h2>
          <div className="chip-row">
            {terminal.destinos.map((d) => (
              <span key={d} className="chip">{d}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <h2>Líneas de autobús</h2>
          <div className="chip-row">
            {terminal.lineasBus.map((l) => (
              <span key={l} className="chip chip-amber">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {otras.length > 0 && (
        <section className="section">
          <div className="container-narrow">
            <h2>Otras terminales</h2>
            <div className="chip-row">
              {otras.map((t) => (
                <a key={t.slug} href={`/terminales/${t.slug}/`} className="chip chip-link">
                  {t.nombreCorto || t.nombre}
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

const entityStyles = `
  .breadcrumb-nav { padding: var(--space-3) var(--space-4) 0; font-size: 0.8rem; color: var(--text-dim); }
  .breadcrumb-nav a { color: var(--text-dim); text-decoration: none; }
  .breadcrumb-nav a:hover { color: var(--forest); }
  .breadcrumb-nav span { color: var(--text); font-weight: 600; }
  .entity-hero-meta { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-3); }
  .entity-hero-place { font-size: 0.85rem; color: var(--text-muted); }
  .entity-hero-desc { max-width: 65ch; color: var(--text-muted); }
  .metro-callout {
    display: flex; align-items: center; gap: var(--space-3); padding: var(--space-4);
    text-decoration: none; color: inherit; margin-bottom: var(--space-4);
    background: var(--amber-glow); border: 1px solid var(--amber-border);
  }
  .metro-callout-static { cursor: default; }
  .metro-callout-icon {
    width: 2.75rem; height: 2.75rem; border-radius: var(--radius); background: var(--bg);
    border: 1px solid var(--amber-border); display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; flex-shrink: 0;
  }
  .metro-callout-title { font-weight: 700; color: var(--amber-hover); }
  .metro-callout-sub { font-size: 0.85rem; color: var(--text-muted); }
  .stack { display: flex; flex-direction: column; gap: var(--space-3); margin-bottom: var(--space-4); }
  .transport-card { padding: var(--space-4); }
  .transport-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2); }
  .transport-card-tipo { font-weight: 700; }
  .transport-card-tiempo { font-size: 0.85rem; color: var(--forest); font-weight: 600; }
  .transport-card p { margin: 0 0 var(--space-2); font-size: 0.9rem; color: var(--text-muted); }
  .badge-amber { background: var(--amber-glow); border: 1px solid var(--amber-border); color: var(--amber-hover); }
  .two-col { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-3); }
  .two-col .card { padding: var(--space-4); }
  .mini-label { font-weight: 700; font-size: 0.9rem; margin-bottom: var(--space-2); }
  .mini-value { font-size: 1.05rem; font-weight: 700; color: var(--forest); margin-bottom: 0.25rem; }
  .mini-note { font-size: 0.82rem; color: var(--text-muted); margin: 0; }
  .chip-row { display: flex; gap: var(--space-2); flex-wrap: wrap; }
  .chip { display: inline-flex; align-items: center; padding: 0.5rem 0.85rem; border-radius: var(--radius-full); background: var(--surface); border: 1px solid var(--border); font-size: 0.82rem; color: var(--text-muted); }
  .chip-amber { background: var(--amber-glow); border-color: var(--amber-border); color: var(--amber-hover); font-weight: 600; }
  .chip-link { text-decoration: none; }
  .chip-link:hover { border-color: var(--border-strong); color: var(--forest); }
`
