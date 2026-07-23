import { grafo } from '@/data/grafo'
import { getRutasLegacySlugs } from '@/data/built-routes'
import { findRoute } from '@/lib/pathfinder'
import { parseUnderscoreRouteSlug } from '@/lib/route-slug'
import { buildRutaMetadata, RUTA_NOT_FOUND_METADATA } from '@/lib/route-metadata'
import RouteDetailView from '@/app/ruta/[slug]/RouteDetailView'

// Patrón legacy "origen_destino" (guión bajo) — REBUILD_SPEC.md §Rutas:
// "mantener esas URLs exactas (pueden renderizar igual que /ruta con
// canonical a sí mismas)". Mismo motor de rutas que /ruta/[slug]/, pero
// canonical/breadcrumb apuntan a /rutas/{ruta}/, no a /ruta/{slug}/ — no son
// contenido duplicado descartable, son URLs que ya rankean en GSC.
export const dynamicParams = false
export const revalidate = false

export function generateStaticParams() {
  return getRutasLegacySlugs().map((ruta) => ({ ruta }))
}

function getStationName(slug) {
  return grafo[slug]?.nombre || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

async function resolveRuta(slug) {
  const parsed = parseUnderscoreRouteSlug(slug, grafo)
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
  const ruta = await resolveRuta(params.ruta)
  if (!ruta) return RUTA_NOT_FOUND_METADATA

  return buildRutaMetadata({
    origenNombre: ruta.origenNombre,
    destinoNombre: ruta.destinoNombre,
    resultado: ruta.resultado,
    canonicalPath: `/rutas/${params.ruta}/`,
  })
}

export default async function RutasLegacyPage({ params }) {
  const ruta = await resolveRuta(params.ruta)

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
      canonicalPath={`/rutas/${params.ruta}/`}
      breadcrumbLabel="Rutas"
      breadcrumbUrl="/rutas/"
    />
  )
}
