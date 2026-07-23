import { getCityBundle } from '@/app/_city/registry'
import { StationView } from '@/app/_city/views'
import { stationMetadata } from '@/app/_city/meta'

/**
 * Reliquia de la app anterior (pre-español-único): keep-urls-gsc-2026-07-22.txt
 * exige EXACTAMENTE `/puebla/station/san-jose-xilotzingo/` (1 URL, sigue
 * indexada en GSC) aunque el resto del sitio es 100% español y usa
 * /puebla/estacion/. No se reconstruye el árbol /station/ completo — solo
 * esta única URL, con el mismo contenido real que su gemela en español.
 */
const REQUIRED_SLUG = 'san-jose-xilotzingo'
const bundle = getCityBundle('puebla')

export async function generateStaticParams() {
  return [{ slug: REQUIRED_SLUG }]
}

export async function generateMetadata({ params }) {
  const estacion = bundle.estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return { title: 'Estación no encontrada', robots: { index: false, follow: false } }
  const grafoNode = bundle.grafo?.[estacion.slug]
  const lineasLabel = (grafoNode?.lineas || []).join(', ')
  return stationMetadata({
    estacion,
    cityConfig: bundle.config,
    path: `/puebla/station/${estacion.slug}/`,
    lineasLabel,
  })
}

export default function PueblaStationLegacyPage({ params }) {
  const estacion = bundle.estaciones.find((e) => e.slug === params.slug)
  if (!estacion) return null
  return (
    <StationView
      estacion={estacion}
      cityConfig={bundle.config}
      basePath="/puebla/"
      linePath="/puebla/"
      grafo={bundle.grafo}
      pathOverride={`/puebla/station/${estacion.slug}/`}
      crumbs={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Puebla', url: '/puebla/' },
        { name: estacion.nombre, url: `/puebla/station/${estacion.slug}/` },
      ]}
    />
  )
}
