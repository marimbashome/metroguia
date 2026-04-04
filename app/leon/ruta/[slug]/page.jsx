import { leonStations, STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import RutaClient from '@/app/ruta/[slug]/RutaClient'

export const dynamicParams = false
export const revalidate = false

export function generateStaticParams() {
  const hubs = ['catedral-basilica', 'capu-leon', 'estadio-leon', 'aeropuerto-bajio-acceso']
  const params = []
  for (const hub of hubs) {
    for (const station of leonStations) {
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
  const stationSet = new Set(leonStations)
  return stationSet.has(origen) && stationSet.has(destino) && origen !== destino
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function generateMetadata({ params }) {
  const { slug } = params

  if (!isValidRouteSlug(slug)) {
    return {
      title: 'Ruta en León — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en SIT León. Encuentra tu ruta, transbordos, tiempo estimado y costo.',
    }
  }

  const parts = slug.split('-a-')
  const origen = getStationName(parts[0])
  const destino = getStationName(parts.slice(1).join('-a-'))

  return {
    title: `Cómo llegar de ${origen} a ${destino} en León | MetroGuia.mx`,
    description: `Ruta de ${origen} a ${destino} en León. Transbordos, tiempo estimado, líneas y costo.`,
    openGraph: {
      title: `${origen} → ${destino} en León`,
      description: 'Cómo llegar en transporte público.',
    },
  }
}

export default function RutaLeonPage({ params }) {
  return <RutaClient params={params} />
}
