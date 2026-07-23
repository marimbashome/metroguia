import { CDMX_SYSTEMS } from '@/lib/cdmx-systems'
import { SystemLinePage } from '@/app/cdmx/_components/SystemViews'

const sistema = CDMX_SYSTEMS['metrobus']

export function generateStaticParams() {
  return Object.keys(sistema.lineas).map((id) => ({ id }))
}

export function generateMetadata({ params }) {
  const linea = sistema.lineas[params.id]
  if (!linea) return { title: 'Línea no encontrada' }
  const nombre = linea.nombre || `Línea ${linea.id}`
  return {
    title: `${nombre} — ${sistema.nombre} CDMX`,
    description: `${nombre} de ${sistema.nombre}: ${linea.total} estaciones de ${linea.inicio} a ${linea.fin}.`,
    alternates: { canonical: `/cdmx/metrobus/linea/${linea.id}/` },
  }
}

export default function MetrobusLineaPage({ params }) {
  const linea = sistema.lineas[params.id]
  if (!linea) {
    return (
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1>Línea no encontrada</h1>
          <p><a href="/cdmx/metrobus/">Ver todas las líneas de {sistema.nombre}</a></p>
        </div>
      </section>
    )
  }
  return <SystemLinePage sistema={sistema} linea={linea} />
}
