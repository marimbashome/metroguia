import { mtyStations, STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import { findRoute } from '@/lib/pathfinder'
import { grafo } from '@/data/grafo'
import RouteSchema from '@/app/components/RouteSchema'
import RutaClient from '@/app/ruta/[slug]/RutaClient'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const dynamicParams = true
export const revalidate = false

// Pre-build top MTY routes at build time (rest via ISR)
// Expanded for L3, Ecovía, and FIFA 2026 relevance
export function generateStaticParams() {
  const hubs = [
    'exposicion',           // Estadio BBVA (FIFA 2026)
    'parque-fundidora',     // Top tourist spot
    'mty-cuauhtemoc',           // L1/L2 transfer hub
    'fundadores',           // Macroplaza
    'regina',               // Barrio Antiguo
    'mty-universidad',          // UANL campus
    'central',              // Central hub
    'hospital-metropolitano', // L3 terminal
    'general-i-zaragoza-l3',  // L2/L3 transfer
    'mitras-ecovia',        // L1/Ecovía transfer
    'regina-ecovia',        // L2/Ecovía transfer
    'lincoln',              // Ecovía west terminal
    'valle-soleado',        // Ecovía east terminal
  ]
  const params = []
  for (const hub of hubs) {
    for (const station of mtyStations) {
      if (station !== hub) {
        params.push({ slug: `${station}-a-${hub}` })
      }
    }
  }
  // Also add key FIFA 2026 routes explicitly
  const fifaRoutes = [
    'sendero-a-exposicion',
    'fundadores-a-exposicion',
    'regina-a-exposicion',
    'parque-fundidora-a-exposicion',
    'hospital-metropolitano-a-exposicion',
    'lincoln-a-exposicion',
    'valle-soleado-a-exposicion',
    'general-i-zaragoza-l3-a-exposicion',
    'alameda-a-parque-fundidora',
    'regina-a-fundadores',
    'mty-cuauhtemoc-a-parque-fundidora',
    'sendero-a-parque-fundidora',
    'talleres-a-exposicion',
    'lincoln-a-parque-fundidora',
    'valle-soleado-a-parque-fundidora',
  ]
  const paramSet = new Set(params.map(p => p.slug))
  for (const slug of fifaRoutes) {
    if (!paramSet.has(slug)) {
      params.push({ slug })
    }
  }
  return params.slice(0, 500)
}

function isValidRouteSlug(slug) {
  if (!slug) return false
  const parts = slug.split('-a-')
  if (parts.length < 2) return false
  const origen = parts[0]
  const destino = parts.slice(1).join('-a-')
  const stationSet = new Set(mtyStations)
  return stationSet.has(origen) && stationSet.has(destino) && origen !== destino
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function generateMetadata({ params }) {
  const { slug } = params

  if (!isValidRouteSlug(slug)) {
    return {
      title: 'Ruta en Metrorrey Monterrey — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en el Metrorrey de Monterrey. Encuentra tu ruta, transbordos, tiempo estimado y costo del transporte público.',
    }
  }

  const parts = slug.split('-a-')
  const origen = getStationName(parts[0])
  const destino = getStationName(parts.slice(1).join('-a-'))

  const title = `Cómo llegar de ${origen} a ${destino} en Metrorrey + Ecovía | MetroGuia.mx`
  const description = `Ruta de ${origen} a ${destino} en Monterrey. Transbordos, tiempo estimado, líneas Metrorrey (L1, L2, L3) + Ecovía BRT, costo y alternativas para el Mundial 2026.`

  return {
    title,
    description,
    openGraph: {
      title: `${origen} → ${destino} en Metrorrey MTY`,
      description: `Cómo llegar en transporte público de Monterrey.`,
    },
    alternates: {
      canonical: `https://metroguia.mx/mty/ruta/${slug}/`,
    },
  }
}

export default function RutaMTYPage({ params }) {
  const { slug } = params
  let rutaSchema = null

  if (isValidRouteSlug(slug)) {
    const parts = slug.split('-a-')
    const origen = parts[0]
    const destino = parts.slice(1).join('-a-')
    const resultado = findRoute(origen, destino)
    if (resultado && resultado.encontrada) {
      rutaSchema = {
        origen: grafo[origen]?.nombre || getStationName(origen),
        destino: grafo[destino]?.nombre || getStationName(destino),
        pasos: resultado.pasos,
        tiempoTotal: Math.round(resultado.pasos.length * 2 + 3),
        costoTotal: '4.50',
        transbordos: resultado.transbordos || 0,
        lineas_usadas: resultado.lineas_usadas || [],
        slug,
        ciudad: 'mty',
      }
    }
  }

  return (
    <>
      {rutaSchema && <RouteSchema {...rutaSchema} />}
      <RutaClient slug={params.slug} />
    </>
  )
}
