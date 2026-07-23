import { CDMX_SYSTEMS } from '@/lib/cdmx-systems'
import { SystemHubPage } from '@/app/cdmx/_components/SystemViews'

const sistema = CDMX_SYSTEMS['cablebus']

export function generateMetadata() {
  return {
    title: `${sistema.nombre} CDMX — Líneas y estaciones`,
    description: `${sistema.nombre} en la Ciudad de México: ${sistema.totalLineasReal} líneas, ${sistema.totalEstacionesReal} estaciones${sistema.tarifa ? `, tarifa ${sistema.tarifa}` : ''}. Consulta líneas, estaciones y correspondencias.`,
    alternates: { canonical: '/cdmx/cablebus/' },
  }
}

export default function CablebusPage() {
  return <SystemHubPage sistema={sistema} />
}
