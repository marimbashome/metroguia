import { campecheStations, STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import RutaClient from '@/app/ruta/[slug]/RutaClient'

export const dynamicParams = false
export const revalidate = false

export function generateStaticParams() {
  const hubs = ['campeche-centro-historico', 'campeche-tren-maya', 'campeche-edzna']
  const params = []
  for (const hub of hubs) {
    for (const station of campecheStations) {
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
  const stationSet = new Set(campecheStations)
  return stationSet.has(origen) && stationSet.has(destino) && origen !== destino
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export function generateMetadata({ params }) {
  const { slug } = params

  if (!isValidRouteSlug(slug)) {
    return {
      title: 'Ruta en Campeche — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en transporte público de Campeche. Encuentra tu ruta, transbordos, tiempo estimado y costo.',
      robots: { index: false, follow: true },
    }
  }

  const parts = slug.split('-a-')
  const origen = getStationName(parts[0])
  const destino = getStationName(parts.slice(1).join('-a-'))

  return {
    title: `Cómo llegar de ${origen} a ${destino} en Campeche | MetroGuia.mx`,
    description: `Ruta de ${origen} a ${destino} en Campeche. Transbordos, tiempo estimado, líneas y costo.`,
    robots: { index: false, follow: true },
    openGraph: {
      title: `${origen} → ${destino} en Campeche`,
      description: 'Cómo llegar en transporte público.',
    },
  }
}

export default function RutaCampechePage({ params }) {
  return <RutaClient slug={params.slug} ciudad="campeche" />
}
