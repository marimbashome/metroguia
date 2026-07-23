import { getCityBundle } from '@/app/_city/registry'
import { LineView } from '@/app/_city/views'
import { lineMetadata } from '@/app/_city/meta'
import { estacionesDeLinea } from '@/app/_city/lib'

/**
 * Reliquia de la app anterior: keep-urls-gsc-2026-07-22.txt exige
 * EXACTAMENTE `/villahermosa/line/1/` (sigue indexada en GSC) aunque el
 * resto del sitio usa /villahermosa/linea/. Ver nota en
 * app/puebla/station/[slug]/page.jsx — mismo patrón, misma justificación.
 */
const REQUIRED_ID = '1'
const bundle = getCityBundle('villahermosa')

export async function generateStaticParams() {
  return [{ id: REQUIRED_ID }]
}

export async function generateMetadata({ params }) {
  const linea = bundle.lineas.find((l) => String(l.id) === params.id)
  if (!linea) return { title: 'Línea no encontrada', robots: { index: false, follow: false } }
  const total = estacionesDeLinea(bundle.estaciones, bundle.grafo, linea.id, linea.estaciones).length
  return lineMetadata({ linea, cityConfig: bundle.config, path: `/villahermosa/line/${linea.id}/`, totalEstaciones: total })
}

export default function VillahermosaLineLegacyPage({ params }) {
  const linea = bundle.lineas.find((l) => String(l.id) === params.id)
  if (!linea) return null
  return (
    <LineView
      linea={linea}
      estaciones={bundle.estaciones}
      grafo={bundle.grafo}
      cityConfig={bundle.config}
      basePath="/villahermosa/"
      crumbs={[
        { name: 'MetroGuia', url: '/' },
        { name: 'Villahermosa', url: '/villahermosa/' },
        { name: linea.colorNombre || `Línea ${linea.id}`, url: `/villahermosa/line/${linea.id}/` },
      ]}
    />
  )
}
