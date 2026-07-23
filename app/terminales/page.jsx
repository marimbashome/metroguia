import { terminales } from '@/data/terminales'
import { getKeepUrlSlugs } from '@/lib/keep-urls'

// Slugs derivados de keep-urls-gsc-2026-07-22.txt — solo estas 3 terminales
// tienen página propia en este rebuild (ver REBUILD_SPEC.md). El hub SOLO
// enlaza a páginas que existen.
const KEEP_SLUGS = getKeepUrlSlugs('/terminales/')
const TERMINALES = KEEP_SLUGS.map((slug) => terminales.find((t) => t.slug === slug)).filter(Boolean)

export const metadata = {
  title: 'Terminales de Autobuses de México — Cómo llegar en transporte público',
  description:
    'Cómo llegar a las principales terminales de autobuses de México en metro y transporte público. Conexiones, destinos y líneas de autobús.',
  alternates: { canonical: '/terminales/' },
}

export default function TerminalesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Terminales de Autobuses de México — MetroGuia',
    numberOfItems: TERMINALES.length,
    itemListElement: TERMINALES.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'BusStation', name: t.nombre, url: `https://metroguia.mx/terminales/${t.slug}/` },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="section page-hero">
        <div className="container">
          <span className="badge badge-eyebrow">🚌 {TERMINALES.length} terminales</span>
          <h1>Terminales de Autobuses</h1>
          <p className="page-hero-lede">
            Cómo llegar a las principales terminales de autobuses en metro y transporte público. Destinos, líneas y conexiones.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="card-grid">
            {TERMINALES.map((t) => (
              <a key={t.slug} href={`/terminales/${t.slug}/`} className="card entity-card">
                <div className="entity-card-title">{t.nombreCorto || t.nombre}</div>
                {t.conexionMetro && (
                  <span className="entity-card-tag">🚇 Metro {t.conexionMetro.nombre}</span>
                )}
                <p className="entity-card-desc">
                  {t.destinos.slice(0, 4).join(', ')}{t.destinos.length > 4 ? '…' : ''}
                </p>
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
