import { grafo } from '@/data/grafo'
import { getCdmxRouteSlugs } from '@/data/built-routes'
import { findRoute } from '@/lib/pathfinder'
import { parseCdmxRouteSlug } from '@/lib/route-slug'
import { buildRutaMetadata, RUTA_NOT_FOUND_METADATA } from '@/lib/route-metadata'
import RouteDetailView from './RouteDetailView'

// output:'export' + dynamicParams:false → cualquier slug NO devuelto por
// generateStaticParams() es un 404 duro (no hay servidor en runtime).
// getCdmxRouteSlugs() es la única fuente de verdad (data/built-routes.js) —
// unión de la lista curada + las ~588 URLs /ruta/* de keep-urls-gsc.
export const dynamicParams = false
export const revalidate = false

export function generateStaticParams() {
  return getCdmxRouteSlugs().map((slug) => ({ slug }))
}

function getStationName(slug) {
  return grafo[slug]?.nombre || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

async function resolveRuta(slug) {
  const parsed = parseCdmxRouteSlug(slug, grafo)
  if (!parsed) return null
  const resultado = await findRoute(parsed.origen, parsed.destino, 'cdmx')
  if (!resultado.encontrada) return null
  return {
    ...parsed,
    resultado,
    origenNombre: getStationName(parsed.origen),
    destinoNombre: getStationName(parsed.destino),
  }
}

export async function generateMetadata({ params }) {
  const ruta = await resolveRuta(params.slug)
  if (!ruta) return RUTA_NOT_FOUND_METADATA

  return buildRutaMetadata({
    origenNombre: ruta.origenNombre,
    destinoNombre: ruta.destinoNombre,
    resultado: ruta.resultado,
    canonicalPath: `/ruta/${params.slug}/`,
  })
}

export default async function RutaPage({ params }) {
  const ruta = await resolveRuta(params.slug)

  if (!ruta) {
    return (
      <div className="container-narrow route-detail-notfound">
        <h1>Ruta no encontrada</h1>
        <p>No pudimos calcular esta ruta. Usa el planificador para buscar otra.</p>
        <a href="/rutas/" className="btn btn-primary">Ir al planificador</a>
        <style>{`.route-detail-notfound { padding: var(--space-8) 0; text-align: center; }`}</style>
      </div>
    )
  }

  return (
    <RouteDetailView
      origen={ruta.origen}
      destino={ruta.destino}
      origenNombre={ruta.origenNombre}
      destinoNombre={ruta.destinoNombre}
      resultado={ruta.resultado}
      canonicalPath={`/ruta/${params.slug}/`}
      breadcrumbLabel="Rutas"
      breadcrumbUrl="/rutas/"
    />
  )
}
