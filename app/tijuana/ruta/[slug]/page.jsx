import { tijuanaStations, STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import RutaClient from '@/app/ruta/[slug]/RutaClient'

export const dynamicParams = true
export const revalidate = false

export function generateStaticParams() {
  const hubs = ['san-ysidro-frontera', 'zona-centro', 'aeropuerto-tj', 'playas-tj']
  const params = []
  for (const hub of hubs) {
    for (const station of tijuanaStations) {
      if (station !== hub) {
        params.push({ slug: `${station}-a-${hub}` })
      }
    }
  }
  return params.slice(0, 100)
}

function isValidRouteSlug(slug) {
  if (!slug) return false
  const parts = slug.split('-a-')
  if (parts.length < 2) return false
  const origen = parts[0]
  const destino = parts.slice(1).join('-a-')
  const stationSet = new Set(tijuanaStations)
  return stationSet.has(origen) && stationSet.has(destino) && origen !== destino
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function generateMetadata({ params }) {
  const { slug } = params

  if (!isValidRouteSlug(slug)) {
    return {
      title: 'Ruta en Tijuana — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en SITT de Tijuana. Encuentra tu ruta, transbordos, tiempo estimado y costo.',
    }
  }

  const parts = slug.split('-a-')
  const origen = getStationName(parts[0])
  const destino = getStationName(parts.slice(1).join('-a-'))

  return {
    title: `Cómo llegar de ${origen} a ${destino} en Tijuana | MetroGuia.mx`,
    description: `Ruta de ${origen} a ${destino} en Tijuana. Transbordos, tiempo estimado, líneas y costo.`,
    openGraph: {
      title: `${origen} → ${destino} en Tijuana`,
      description: 'Cómo llegar en transporte público.',
    },
  }
}

export default function RutaTijuanaPage({ params }) {
  return <RutaClient params={params} />
}
