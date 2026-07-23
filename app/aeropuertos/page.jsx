import { aeropuertos } from '@/data/aeropuertos'
import { getKeepUrlSlugs } from '@/lib/keep-urls'

// Slugs derivados de keep-urls-gsc-2026-07-22.txt (el guardrail es el juez —
// ver REBUILD_SPEC.md). Solo estos 6 tienen página propia en este rebuild;
// el resto de `data/aeropuertos.js` queda para una fase posterior. El hub
// SOLO enlaza a páginas que existen — cero links muertos.
const KEEP_SLUGS = getKeepUrlSlugs('/aeropuertos/')
const AIRPORTS = KEEP_SLUGS.map((slug) => aeropuertos.find((a) => a.slug === slug)).filter(Boolean)

export const metadata = {
  title: 'Aeropuertos de México — Cómo llegar en transporte público',
  description:
    'Cómo llegar del aeropuerto al centro en metro, autobús, taxi o Uber. Guía de transporte para los principales aeropuertos de México.',
  alternates: { canonical: '/aeropuertos/' },
}

export default function AeropuertosPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Aeropuertos de México — MetroGuia',
    numberOfItems: AIRPORTS.length,
    itemListElement: AIRPORTS.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Airport',
        name: a.nombre,
        iataCode: a.iata,
        url: `https://metroguia.mx/aeropuertos/${a.slug}/`,
      },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="section page-hero">
        <div className="container">
          <span className="badge badge-eyebrow">✈️ {AIRPORTS.length} aeropuertos</span>
          <h1>Aeropuertos de México</h1>
          <p className="page-hero-lede">
            Cómo llegar del aeropuerto al centro de la ciudad: transporte público, taxi autorizado y Uber/DiDi, con precios y tiempos aproximados.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card-grid">
            {AIRPORTS.map((a) => (
              <a key={a.slug} href={`/aeropuertos/${a.slug}/`} className="card entity-card">
                <div className="entity-card-top">
                  <span className="badge">{a.iata}</span>
                  <span className="entity-card-dist">{a.distanciaCentro}</span>
                </div>
                <div className="entity-card-title">{a.ciudad}</div>
                <p className="entity-card-desc">{a.nombre}</p>
                {a.conexiones.length > 0 && (
                  <span className="entity-card-tag">🚇 Conexión {a.conexiones[0].tipo}</span>
                )}
                <span className="entity-card-cta">Ver guía de transporte →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { text-align: center; padding-bottom: var(--space-5); }
        .page-hero-lede { max-width: 620px; margin: 0 auto; color: var(--text-muted); font-size: 1.02rem; }
        .badge-eyebrow {
          background: var(--amber-glow);
          border: 1px solid var(--amber-border);
          color: var(--amber-hover);
          margin-bottom: var(--space-3);
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-4);
        }
        .entity-card {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding: var(--space-4);
          text-decoration: none;
          color: inherit;
          transition: box-shadow 0.15s ease, border-color 0.15s ease;
        }
        .entity-card:hover { box-shadow: var(--shadow-md); border-color: var(--border-strong); }
        .entity-card-top { display: flex; align-items: center; justify-content: space-between; }
        .entity-card-dist { font-size: 0.78rem; color: var(--text-dim); }
        .entity-card-title { font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; color: var(--forest); }
        .entity-card-desc { font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.5; }
        .entity-card-tag {
          align-self: flex-start;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          background: var(--amber-glow);
          border: 1px solid var(--amber-border);
          color: var(--amber-hover);
        }
        .entity-card-cta { margin-top: auto; font-weight: 700; font-size: 0.85rem; color: var(--forest); }
      `}</style>
    </div>
  )
}
