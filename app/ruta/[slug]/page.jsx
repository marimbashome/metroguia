import { rutasPopulares } from '@/data/rutas-populares'
import { STATION_DISPLAY_NAMES, cdmxStations } from '@/data/rutas-engine'
import { findRoute } from '@/lib/pathfinder'
import { grafo } from '@/data/grafo'
import RouteSchema from '@/app/components/RouteSchema'
import RutaClient from './RutaClient'

// ISR: allow any station-to-station slug, not just pre-built ones
export const dynamicParams = true

// Cache pages forever (they don't change — metro map is static)
export const revalidate = false

// Pre-build only the top ~200 high-value routes at build time (FIFA + airport + hubs).
// The remaining ~4,680 curated routes + all other combos are generated on first request (ISR).
// This keeps the Vercel Hobby build under the 45-minute limit.
const MAX_STATIC_ROUTES = 200

export function generateStaticParams() {
  return rutasPopulares.slice(0, MAX_STATIC_ROUTES).map(r => ({
    slug: `${r.origen}-a-${r.destino}`,
  }))
}

// Validate that a slug contains real CDMX stations
function isValidRouteSlug(slug) {
  if (!slug) return false
  const parts = slug.split('-a-')
  if (parts.length < 2) return false
  const origen = parts[0]
  const destino = parts.slice(1).join('-a-')
  const stationSet = new Set(cdmxStations)
  return stationSet.has(origen) && stationSet.has(destino) && origen !== destino
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

// SEO metadata per route — works for ALL 24,180 combinations
export function generateMetadata({ params }) {
  const { slug } = params

  if (!isValidRouteSlug(slug)) {
    return {
      title: 'Ruta en Metro CDMX — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en el Metro de Ciudad de México. Encuentra tu ruta, transbordos, tiempo estimado y costo del transporte público.',
    }
  }

  const parts = slug.split('-a-')
  const origen = getStationName(parts[0])
  const destino = getStationName(parts.slice(1).join('-a-'))

  const title = `Cómo llegar de ${origen} a ${destino} en metro | MetroGuia.mx`
  const description = `Ruta en metro de ${origen} a ${destino} en CDMX. Transbordos, tiempo estimado, líneas de metro, costo y alternativas. Planificador de transporte en tiempo real.`

  return {
    title,
    description,
    openGraph: {
      title: `${origen} → ${destino} en Metro`,
      description: `Cómo llegar en transporte público de CDMX.`,
    },
    alternates: {
      canonical: `https://metroguia.mx/ruta/${slug}/`,
    },
  }
}

export default function RutaPage({ params }) {
  const { slug } = params

  // Parse slug and validate
  const parts = slug.split('-a-')
  const origen = parts[0]
  const destino = parts.slice(1).join('-a-')

  // Calculate route server-side for schema generation
  let rutaSchema = null
  if (isValidRouteSlug(slug)) {
    const resultado = findRoute(origen, destino)
    if (resultado && resultado.encontrada) {
      const origenNombre = grafo[origen]?.nombre || getStationName(origen)
      const destinoNombre = grafo[destino]?.nombre || getStationName(destino)
      const tiempoEstimado = Math.round(resultado.pasos.length * 2 + 3)

      rutaSchema = {
        origen: origenNombre,
        destino: destinoNombre,
        pasos: resultado.pasos,
        tiempoTotal: tiempoEstimado,
        costoTotal: '6',
        transbordos: resultado.transbordos || 0,
        lineas_usadas: resultado.lineas_usadas || [],
        slug
      }
    }
  }

  return (
    <>
      {rutaSchema && (
        <RouteSchema {...rutaSchema} />
      )}
      <RutaClient slug={params.slug} />
    </>
  )
}
