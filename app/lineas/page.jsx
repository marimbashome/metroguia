import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { getLineColor } from '@/lib/lineLabels'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import PageHero from '@/app/cdmx/_components/PageHero'

export function generateMetadata() {
  const total = Object.keys(lineasDetalle).length
  return {
    title: 'Líneas del Metro CDMX',
    description: `Las ${total} líneas del Metro de la Ciudad de México: estaciones, colores, correspondencias e itinerario de cada línea.`,
    alternates: { canonical: '/lineas/' },
  }
}

export default function LineasPage() {
  const lineas = Object.values(lineasDetalle)
  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
    { label: 'Líneas', href: '/lineas/' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow="Metro CDMX"
        title={`Las ${lineas.length} líneas del Metro`}
        subtitle={`${estaciones.length} estaciones. Elige una línea para ver su recorrido completo, correspondencias y estaciones.`}
        stats={[
          { label: 'Líneas', value: String(lineas.length) },
          { label: 'Estaciones únicas', value: String(estaciones.length) },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="mg-lineas-grid">
            {lineas.map((l) => (
              <a key={l.id} href={`/linea/${l.id}/`} className="mg-linea-card" style={{ borderTopColor: getLineColor(l.id) }}>
                <span className="mg-linea-crest" style={{ background: getLineColor(l.id) }}>
                  {l.id}
                </span>
                <div>
                  <h3>Línea {l.id}</h3>
                  <p className="mg-linea-color" style={{ color: getLineColor(l.id) }}>{l.colorNombre}</p>
                  <p className="mg-linea-route">
                    {l.inicio} ↔ {l.fin}
                  </p>
                  <p className="mg-linea-total">{l.total} estaciones</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .mg-lineas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); }
        .mg-linea-card {
          display: flex; gap: var(--space-3); align-items: flex-start;
          padding: var(--space-4); border: 1px solid var(--border); border-top: 4px solid var(--border-strong);
          border-radius: var(--radius); background: var(--bg); text-decoration: none; color: var(--text);
        }
        .mg-linea-card:hover { box-shadow: var(--shadow-md); }
        .mg-linea-crest {
          width: 3rem; height: 3rem; border-radius: 50%; color: #fff; font-family: var(--font-display);
          font-weight: 700; font-size: 1.15rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .mg-linea-card h3 { margin: 0 0 0.15rem; font-size: 1.05rem; }
        .mg-linea-color { margin: 0 0 0.35rem; font-weight: 700; font-size: 0.8rem; }
        .mg-linea-route { margin: 0; font-size: 0.85rem; color: var(--text-muted); }
        .mg-linea-total { margin: 0.2rem 0 0; font-size: 0.78rem; color: var(--text-dim); }
      `}</style>
    </>
  )
}
