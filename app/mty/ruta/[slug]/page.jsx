import { mtyStations, STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import RutaClient from '@/app/ruta/[slug]/RutaClient'

export const dynamicParams = true
export const revalidate = false

// Pre-build top 100 MTY routes at build time (rest via ISR)
export function generateStaticParams() {
  const hubs = ['exposicion', 'central', 'cuauhtemoc', 'fundadores', 'universidad']
  const params = []
  for (const hub of hubs) {
    for (const station of mtyStations) {
      if (station !== hub) {
        params.push({ slug: `${station}-a-${hub}` })
      }
    }
  }
  return params.slice(0, 150)
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

  const title = `Cómo llegar de ${origen} a ${destino} en Metrorrey | MetroGuia.mx`
  const description = `Ruta de ${origen} a ${destino} en Monterrey. Transbordos, tiempo estimado, líneas Metrorrey, costo y alternativas para el Mundial 2026.`

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
  return <RutaClient slug={params.slug} />
}
