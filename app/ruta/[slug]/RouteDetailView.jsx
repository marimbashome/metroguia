import { grafo } from '@/data/grafo'
import { getRelatedBuiltRoutes } from '@/lib/related-routes'
import { getPlannerProps } from '@/lib/planner-data'
import RouteSteps from '@/app/components/RouteSteps'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'
import Planner from '@/app/components/Planner'

/**
 * RouteDetailView — plantilla compartida entre /ruta/[slug]/ (patrón
 * "origen-a-destino", ~748 páginas) y /rutas/[ruta]/ (patrón legacy
 * "origen_destino", 13 URLs de keep-urls que deben seguir existiendo
 * exactas). Mismo contenido, distinta URL — cada caller pasa su propio
 * `canonicalPath` y `breadcrumbLabel` para que el BreadcrumbSchema y el
 * HowTo schema apunten a la página real, no a la otra.
 *
 * No es un componente de app/components/ (esos los crea solo Foundation) —
 * vive junto al page.jsx que "posee" el patrón principal, como hacía
 * _legacy-app/ruta/[slug]/RutaClient.jsx.
 */
export default function RouteDetailView({
  origen,
  destino,
  origenNombre,
  destinoNombre,
  resultado,
  canonicalPath,
  breadcrumbLabel = 'Rutas',
  breadcrumbUrl = '/rutas/',
}) {
  const relacionadas = getRelatedBuiltRoutes(origen, destino, grafo, 6)
  const { lineasSlim, estacionesSlim, chips } = getPlannerProps()

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Cómo llegar de ${origenNombre} a ${destinoNombre} en Metro CDMX`,
    description: `Guía paso a paso para viajar de ${origenNombre} a ${destinoNombre} en el Metro de la Ciudad de México.`,
    totalTime: `PT${Math.round(resultado.tiempo_total)}M`,
    step: resultado.pasos.map((paso, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: `${idx === 0 ? 'Aborda en' : idx === resultado.pasos.length - 1 ? 'Llega a' : 'Continúa a'} ${paso.nombre}`,
      url: `https://metroguia.mx${canonicalPath}#paso-${idx + 1}`,
    })),
  }
  if (resultado.costo !== null) {
    howToSchema.estimatedCost = { '@type': 'MonetaryAmount', currency: 'MXN', value: String(resultado.costo) }
  }

  return (
    <div className="container-narrow route-detail">
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: breadcrumbLabel, url: breadcrumbUrl },
          { name: `${origenNombre} a ${destinoNombre}`, url: canonicalPath },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <nav className="route-detail-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Inicio</a>
        <span aria-hidden="true">/</span>
        <a href={breadcrumbUrl}>{breadcrumbLabel}</a>
        <span aria-hidden="true">/</span>
        <span>{origenNombre} → {destinoNombre}</span>
      </nav>

      <h1 className="route-detail-title">
        {origenNombre} <span className="route-detail-arrow">→</span> {destinoNombre}
      </h1>
      <p className="route-detail-sub">Ruta en Metro CDMX: transbordos, estaciones y costo reales.</p>

      <RouteSteps
        pasos={resultado.pasos}
        tiempoTotal={resultado.tiempo_total}
        transbordos={resultado.transbordos}
        costo={resultado.costo}
        alertas={resultado.alertas}
        tiemposReales
        aproxLabel={false}
      />

      <div className="route-detail-station-links">
        <a href={`/estacion/${origen}/`} className="route-detail-station-link">
          <span className="route-detail-station-label">Origen</span>
          <span className="route-detail-station-name">{origenNombre}</span>
        </a>
        <a href={`/estacion/${destino}/`} className="route-detail-station-link">
          <span className="route-detail-station-label">Destino</span>
          <span className="route-detail-station-name">{destinoNombre}</span>
        </a>
      </div>

      <section className="route-detail-tips">
        <h2>Consejos para tu viaje</h2>
        <ul>
          <li>Usa la Tarjeta de Movilidad Integrada — $5 MXN por viaje en Metro CDMX.</li>
          <li>Evita horas pico (7–9 AM y 6–8 PM) para un viaje más cómodo.</li>
          <li>Verifica el estado de las líneas antes de salir en <a href="https://www.metro.cdmx.gob.mx" rel="noopener">metro.cdmx.gob.mx</a>.</li>
        </ul>
      </section>

      {relacionadas.length > 0 && (
        <section className="route-detail-related">
          <h2>Rutas populares desde {origenNombre}</h2>
          <div className="route-detail-related-grid">
            {relacionadas.map((r) => (
              <a key={r.slug} href={`/ruta/${r.slug}/`} className="route-detail-related-item">
                {r.titulo}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="route-detail-planner">
        <h2>Buscar otra ruta</h2>
        <Planner lineasSlim={lineasSlim} estacionesSlim={estacionesSlim} chips={chips} />
      </section>

      <style>{`
        .route-detail { padding: var(--space-6) 0 var(--space-8); }
        .route-detail-breadcrumb { font-size: 0.82rem; color: var(--text-dim); margin-bottom: var(--space-4); }
        .route-detail-breadcrumb a { color: var(--chiapas); text-decoration: none; font-weight: 600; }
        .route-detail-breadcrumb span[aria-hidden] { margin: 0 0.4rem; opacity: 0.6; }
        .route-detail-title { margin-bottom: var(--space-2); }
        .route-detail-arrow { color: var(--amber); }
        .route-detail-sub { color: var(--text-muted); margin-bottom: var(--space-5); }
        .route-detail-station-links { display: flex; gap: var(--space-3); flex-wrap: wrap; margin: var(--space-5) 0; }
        .route-detail-station-link {
          flex: 1; min-width: 180px; display: flex; flex-direction: column; gap: 0.15rem;
          padding: var(--space-3) var(--space-4); border: 1px solid var(--border); border-radius: var(--radius);
          text-decoration: none; background: var(--bg);
        }
        .route-detail-station-link:hover { border-color: var(--border-strong); box-shadow: var(--shadow-sm); }
        .route-detail-station-label { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--chiapas); }
        .route-detail-station-name { font-weight: 700; color: var(--text); }
        .route-detail-tips { margin: var(--space-6) 0; padding: var(--space-5); background: var(--surface); border-radius: var(--radius-lg); }
        .route-detail-tips h2 { font-size: 1.15rem; margin-bottom: var(--space-3); }
        .route-detail-tips ul { display: flex; flex-direction: column; gap: var(--space-2); }
        .route-detail-tips li { font-size: 0.9rem; color: var(--text-muted); padding-left: 1.1rem; position: relative; }
        .route-detail-tips li::before { content: '·'; position: absolute; left: 0.2rem; color: var(--amber); font-weight: 800; }
        .route-detail-tips a { color: var(--chiapas); }
        .route-detail-related { margin: var(--space-6) 0; }
        .route-detail-related h2 { font-size: 1.15rem; margin-bottom: var(--space-3); }
        .route-detail-related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-2); }
        .route-detail-related-item {
          padding: 0.85rem 1rem; border: 1px solid var(--border); border-radius: var(--radius-sm);
          text-decoration: none; color: var(--text); font-size: 0.85rem; font-weight: 600; background: var(--bg);
        }
        .route-detail-related-item:hover { border-color: var(--border-strong); background: var(--surface-hover); }
        .route-detail-planner { margin-top: var(--space-7); }
        .route-detail-planner h2 { font-size: 1.15rem; margin-bottom: var(--space-4); text-align: center; }
      `}</style>
    </div>
  )
}
