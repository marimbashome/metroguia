import { grafo } from '@/data/grafo'
import { getPlannerProps } from '@/lib/planner-data'
import { getBuiltRoutesForStation } from '@/lib/related-routes'
import Planner from '@/app/components/Planner'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

export const metadata = {
  title: 'Rutas en Metro CDMX — Planificador y directorio',
  description: 'Planifica tu ruta en el Metro de la Ciudad de México y explora rutas populares desde las estaciones más concurridas: Zócalo, Tasqueña, Pantitlán, Chapultepec y más.',
  alternates: { canonical: '/rutas/' },
}

// Estaciones-hub reales del grafo CDMX — cada una respalda un bloque del
// directorio con rutas que SÍ están pre-construidas (getBuiltRoutesForStation
// solo devuelve slugs dentro de generateStaticParams, nunca 404s).
const HUBS = [
  { slug: 'zocalo', label: 'Zócalo' },
  { slug: 'tasquena', label: 'Tasqueña (Estadio Azteca vía Tren Ligero)' },
  { slug: 'pantitlan', label: 'Pantitlán' },
  { slug: 'chapultepec', label: 'Chapultepec' },
  { slug: 'buenavista', label: 'Buenavista' },
  { slug: 'cuatro-caminos', label: 'Cuatro Caminos' },
]

export default function RutasHubPage() {
  const { lineasSlim, estacionesSlim, chips } = getPlannerProps()
  const hubs = HUBS.map((h) => ({
    ...h,
    rutas: getBuiltRoutesForStation(h.slug, grafo, 6),
  })).filter((h) => h.rutas.length > 0)

  return (
    <div className="rutas-hub">
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Rutas', url: '/rutas/' }]} />

      <section className="rutas-hub-hero">
        <div className="container rutas-hub-hero-inner">
          <h1>Rutas en Metro CDMX</h1>
          <p>Calcula transbordos, estaciones y costo entre dos estaciones del Metro de la Ciudad de México.</p>
          <Planner lineasSlim={lineasSlim} estacionesSlim={estacionesSlim} chips={chips} />
        </div>
      </section>

      {hubs.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Rutas populares por estación</h2>
            <p className="rutas-hub-lede">Explora rutas frecuentes desde las estaciones más concurridas del sistema.</p>
            <div className="rutas-hub-grid">
              {hubs.map((h) => (
                <div key={h.slug} className="rutas-hub-block">
                  <h3>{h.label}</h3>
                  <ul>
                    {h.rutas.map((r) => (
                      <li key={r.slug}>
                        <a href={`/ruta/${r.slug}/`}>{r.titulo}</a>
                      </li>
                    ))}
                  </ul>
                  <a href={`/estacion/${h.slug}/`} className="rutas-hub-block-more">Ver estación →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .rutas-hub-hero { background: var(--forest); padding: var(--space-8) 0; color: var(--text-on-dark); }
        .rutas-hub-hero-inner { text-align: center; }
        .rutas-hub-hero-inner h1 { color: var(--text-on-dark); }
        .rutas-hub-hero-inner p { opacity: 0.8; margin-bottom: var(--space-6); }
        .rutas-hub-lede { color: var(--text-muted); margin-bottom: var(--space-5); }
        .rutas-hub-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-4); }
        .rutas-hub-block { padding: var(--space-4); border: 1px solid var(--border); border-radius: var(--radius); background: var(--bg); }
        .rutas-hub-block h3 { font-size: 1rem; margin-bottom: var(--space-3); }
        .rutas-hub-block ul { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: var(--space-3); }
        .rutas-hub-block li a { font-size: 0.85rem; color: var(--chiapas); text-decoration: none; font-weight: 600; }
        .rutas-hub-block li a:hover { text-decoration: underline; }
        .rutas-hub-block-more { font-size: 0.78rem; font-weight: 700; color: var(--forest); text-decoration: none; }
        .rutas-hub-block-more:hover { text-decoration: underline; }
      `}</style>
    </div>
  )
}
