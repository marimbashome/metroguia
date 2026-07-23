import { CDMX_SYSTEMS } from '@/lib/cdmx-systems'
import { SystemStationPage } from '@/app/cdmx/_components/SystemViews'

const sistema = CDMX_SYSTEMS['tren-suburbano']

export function generateStaticParams() {
  return sistema.estacionesRicas.map((e) => ({ slug: e.slug }))
}

export function generateMetadata({ params }) {
  const estacion = sistema.estacionesPorSlug.get(params.slug)
  if (!estacion) return { title: 'Estación no encontrada' }
  const linea = sistema.lineas[estacion.lineaId]
  const zona = estacion.alcaldia || estacion.municipio || 'CDMX'
  return {
    title: `Estación ${estacion.nombre} — ${linea?.nombre || sistema.nombre}`,
    description: `Estación ${estacion.nombre} de ${sistema.nombre} en ${zona}. Conexiones, servicios cercanos y cómo llegar.`,
    alternates: { canonical: `/cdmx/tren-suburbano/estacion/${estacion.slug}/` },
  }
}

export default function TrenSuburbanoEstacionPage({ params }) {
  const estacion = sistema.estacionesPorSlug.get(params.slug)
  if (!estacion) {
    return (
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h1>Estación no encontrada</h1>
          <p><a href="/cdmx/tren-suburbano/">Ver {sistema.nombre}</a></p>
        </div>
      </section>
    )
  }
  return <SystemStationPage sistema={sistema} estacion={estacion} />
}
