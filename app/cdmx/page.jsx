import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import { CDMX_SYSTEMS, CDMX_SYSTEM_SLUGS } from '@/lib/cdmx-systems'
import { getLineColor } from '@/lib/lineLabels'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import PageHero from '@/app/cdmx/_components/PageHero'

const metroLineasCount = Object.keys(lineasDetalle).length
const subsistemas = CDMX_SYSTEM_SLUGS.map((s) => CDMX_SYSTEMS[s])
const totalLineas = metroLineasCount + subsistemas.reduce((a, s) => a + s.totalLineasReal, 0)
const totalParadas = estaciones.length + subsistemas.reduce((a, s) => a + s.totalEstacionesReal, 0)
const totalSistemas = 1 + subsistemas.length

export function generateMetadata() {
  return {
    title: 'Transporte público en la Ciudad de México',
    description: `Guía de los ${totalSistemas} sistemas de transporte público de CDMX: Metro, Metrobús, Cablebús, Mexicable, Trolebús, Tren Ligero y Tren Suburbano. ${totalLineas} líneas, ${totalParadas} paradas.`,
    alternates: { canonical: '/cdmx/' },
  }
}

const SISTEMA_LINKS = [
  { slug: null, href: '/lineas/', nombre: 'Metro', icono: '🚇', desc: `${metroLineasCount} líneas, ${estaciones.length} estaciones` },
  ...CDMX_SYSTEM_SLUGS.map((slug) => {
    const s = CDMX_SYSTEMS[slug]
    return { slug, href: `/cdmx/${slug}/`, nombre: s.nombre, icono: s.icono, desc: `${s.totalLineasReal} línea${s.totalLineasReal === 1 ? '' : 's'}, ${s.totalEstacionesReal} estaciones`, color: s.colorSistema }
  }),
]

export default function CDMXHubPage() {
  const breadcrumb = [
    { label: 'MetroGuia', href: '/' },
    { label: 'CDMX', href: '/cdmx/' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumb.map((b) => ({ name: b.label, url: b.href }))} />

      <PageHero
        breadcrumb={breadcrumb}
        eyebrow="Ciudad de México"
        title="Transporte público en CDMX"
        subtitle={`${totalSistemas} sistemas integrados: Metro, Metrobús, Cablebús, Mexicable, Trolebús, Tren Ligero y Tren Suburbano.`}
        stats={[
          { label: 'Sistemas', value: String(totalSistemas) },
          { label: 'Líneas', value: String(totalLineas) },
          { label: 'Paradas en la red', value: String(totalParadas) },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="mg-sistemas-grid">
            {SISTEMA_LINKS.map((s) => (
              <a key={s.href} href={s.href} className="mg-sistema-card" style={{ borderTopColor: s.color || getLineColor('1') }}>
                <span className="mg-sistema-icono" aria-hidden="true">{s.icono}</span>
                <h2>{s.nombre}</h2>
                <p>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow">
          <h2>Cómo se conecta la red</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Los 7 sistemas de CDMX comparten estaciones de transferencia — por ejemplo, Indios Verdes conecta Metro
            Línea 3, Metrobús y Cablebús en un mismo punto. Cada página de estación de este sitio muestra las
            conexiones reales hacia otros sistemas cuando existen.
          </p>
          <div className="mg-cdmx-links">
            <a href="/lineas/" className="btn btn-ghost">Ver líneas del Metro</a>
            <a href="/aeropuertos/" className="btn btn-ghost">Aeropuertos</a>
            <a href="/" className="btn btn-primary">Planificar una ruta</a>
          </div>
        </div>
      </section>

      <style>{`
        .mg-sistemas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: var(--space-4); }
        .mg-sistema-card {
          display: flex; flex-direction: column; gap: 0.3rem;
          padding: var(--space-5); border: 1px solid var(--border); border-top: 4px solid var(--border-strong);
          border-radius: var(--radius-lg); background: var(--bg); text-decoration: none; color: var(--text);
        }
        .mg-sistema-card:hover { box-shadow: var(--shadow-md); }
        .mg-sistema-icono { font-size: 1.8rem; }
        .mg-sistema-card h2 { margin: 0.2rem 0 0; font-size: 1.05rem; }
        .mg-sistema-card p { margin: 0; font-size: 0.82rem; color: var(--text-dim); }
        .mg-cdmx-links { display: flex; gap: var(--space-3); flex-wrap: wrap; margin-top: var(--space-5); }
      `}</style>
    </>
  )
}
