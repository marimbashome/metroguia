import { gdlStations, STATION_DISPLAY_NAMES } from '@/data/rutas-engine'
import { findRoute } from '@/lib/pathfinder'
import { grafo } from '@/data/grafo'
import RouteSchema from '@/app/components/RouteSchema'
import RutaClient from '@/app/ruta/[slug]/RutaClient'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const dynamicParams = true
export const revalidate = false

// Pre-build top 100 GDL routes at build time (rest via ISR)
export function generateStaticParams() {
  const hubs = ['guadalajara-centro', 'estadio-chivas', 'central-de-autobuses', 'gdl-auditorio', 'san-juan-de-dios']
  const params = []
  for (const hub of hubs) {
    for (const station of gdlStations) {
      if (station !== hub) {
        params.push({ slug: `${station}-a-${hub}` })
      }
    }
  }
  return params.slice(0, 200)
}

function isValidRouteSlug(slug) {
  if (!slug) return false
  const parts = slug.split('-a-')
  if (parts.length < 2) return false
  const origen = parts[0]
  const destino = parts.slice(1).join('-a-')
  const stationSet = new Set(gdlStations)
  return stationSet.has(origen) && stationSet.has(destino) && origen !== destino
}

function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export async function generateMetadata({ params }) {
  const { slug } = params

  if (!isValidRouteSlug(slug)) {
    return {
      title: 'Ruta en SITEUR Guadalajara — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en el Tren Ligero y Mi Macro de Guadalajara. Encuentra tu ruta, transbordos, tiempo estimado y costo.',
    }
  }

  const parts = slug.split('-a-')
  const origen = getStationName(parts[0])
  const destino = getStationName(parts.slice(1).join('-a-'))

  const title = `Cómo llegar de ${origen} a ${destino} en tren ligero GDL | MetroGuia.mx`
  const description = `Ruta de ${origen} a ${destino} en Guadalajara. Transbordos, tiempo estimado, líneas SITEUR, costo y alternativas para el Mundial 2026.`

  return {
    title,
    description,
    openGraph: {
      title: `${origen} → ${destino} en Tren Ligero GDL`,
      description: `Cómo llegar en transporte público de Guadalajara.`,
    },
    alternates: {
      canonical: `https://metroguia.mx/gdl/ruta/${slug}/`,
    },
  }
}

export default async function RutaGDLPage({ params }) {
  const { slug } = params
  let rutaSchema = null

  if (isValidRouteSlug(slug)) {
    const parts = slug.split('-a-')
    const origen = parts[0]
    const destino = parts.slice(1).join('-a-')
    const resultado = await findRoute(origen, destino)
    if (resultado && resultado.encontrada) {
      rutaSchema = {
        origen: grafo[origen]?.nombre || getStationName(origen),
        destino: grafo[destino]?.nombre || getStationName(destino),
        pasos: resultado.pasos,
        tiempoTotal: Math.round(resultado.pasos.length * 2 + 3),
        costoTotal: '9.50',
        transbordos: resultado.transbordos || 0,
        lineas_usadas: resultado.lineas_usadas || [],
        slug,
        ciudad: 'gdl',
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
