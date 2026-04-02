import { rutasPopulares } from '@/data/rutas-populares'
import { STATION_DISPLAY_NAMES, cdmxStations } from '@/data/rutas-engine'
import { findRoute, getGrafo, detectCiudad, getCurrency } from '@/lib/pathfinder'
import { getCityConfig } from '@/data/cities-config'
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
  return rutasPopulares.slice(0, MAX_STATIC_ROUTES).map(r => {
    const connector = r.connector || 'a'
    return { slug: `${r.origen}-${connector}-${r.destino}` }
  })
}

function parseRouteSlug(slug) {
  if (!slug) return null
  const toIdx = slug.indexOf('-to-')
  if (toIdx > 0) {
    return { origen: slug.substring(0, toIdx), destino: slug.substring(toIdx + 4), connector: 'to' }
  }
  const parts = slug.split('-a-')
  if (parts.length >= 2) {
    return { origen: parts[0], destino: parts.slice(1).join('-a-'), connector: 'a' }
  }
  return null
}

function isValidRouteSlug(slug) {
  const parsed = parseRouteSlug(slug)
  if (!parsed) return false
  const { origen, destino } = parsed
  if (origen === destino) return false
  const stationSet = new Set(cdmxStations)
  if (stationSet.has(origen) && stationSet.has(destino)) return true
  const grafo_all = getGrafo()
  return !!(grafo_all[origen] && grafo_all[destino])
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function generateMetadata({ params }) {
  const { slug } = params
  const parsed = parseRouteSlug(slug)
  if (!parsed || !isValidRouteSlug(slug)) {
    return {
      title: 'Plan Your Transit Route — Transfers & Schedules | MetroGuia',
      description: 'Transit route planner for cities across Mexico, the US, and Canada. Find the best route, transfers, travel time, and fare.',
    }
  }
  const { origen, destino } = parsed
  const origenName = getStationName(origen)
  const destinoName = getStationName(destino)
  const ciudad = detectCiudad(origen)
  const cityConfig = ciudad ? getCityConfig(ciudad) : null
  const cityName = cityConfig?.name || 'Metro'
  const isEnglish = cityConfig?.country === 'US' || cityConfig?.country === 'CA'
  const title = isEnglish
    ? `${origenName} to ${destinoName} — ${cityName} Transit Route | MetroGuia`
    : `${origenName} a ${destinoName} en Metro ${cityName} — Ruta, Transbordos y Tiempo | MetroGuia`
  const description = isEnglish
    ? `How to get from ${origenName} to ${destinoName} on ${cityName} transit. Lines, transfers, estimated time, and fare. Plan your trip now.`
    : `Cómo llegar de ${origenName} a ${destinoName} en el Metro de ${cityName}. Líneas, transbordos, tiempo estimado y costo. Planifica tu viaje ahora.`
  return {
    title,
    description,
    openGraph: {
      title: `${origenName} → ${destinoName} — ${cityName}`,
      description: isEnglish
        ? `Step-by-step route from ${origenName} to ${destinoName}. Transfers, time, and fare.`
        : `Ruta paso a paso de ${origenName} a ${destinoName} en metro. Transbordos, tiempo y costo.`,
      url: `https://metroguia.mx/ruta/${slug}/`,
      siteName: 'MetroGuia',
      locale: isEnglish ? 'en_US' : 'es_MX',
      type: 'website',
    },
    alternates: { canonical: `https://metroguia.mx/ruta/${slug}/` },
  }
}

export default function RutaPage({ params }) {
  const { slug } = params
  const parsed = parseRouteSlug(slug)
  const origen = parsed?.origen || ''
  const destino = parsed?.destino || ''
  let rutaSchema = null
  if (isValidRouteSlug(slug)) {
    const ciudad = detectCiudad(origen)
    const resultado = findRoute(origen, destino, ciudad)
    if (resultado && resultado.encontrada) {
      const grafoActivo = getGrafo(ciudad)
      const origenNombre = grafoActivo[origen]?.nombre || getStationName(origen)
      const destinoNombre = grafoActivo[destino]?.nombre || getStationName(destino)
      const tiempoEstimado = resultado.tiempo_total || Math.round(resultado.pasos.length * 2 + 3)
      const cityConfig = ciudad ? getCityConfig(ciudad) : null
      rutaSchema = {
        origen: origenNombre,
        destino: destinoNombre,
        pasos: resultado.pasos,
        tiempoTotal: tiempoEstimado,
        costoTotal: String(resultado.costo || '6'),
        transbordos: resultado.transbordos || 0,
        lineas_usadas: resultado.lineas_usadas || [],
        slug,
        city: cityConfig?.name || 'CDMX',
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
