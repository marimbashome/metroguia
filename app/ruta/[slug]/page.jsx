import { rutasPopulares } from '@/data/rutas-populares'
import RutaClient from './RutaClient'

// Pre-generate popular route pages for static export
export function generateStaticParams() {
  return rutasPopulares.map(r => ({
    slug: `${r.origen}-a-${r.destino}`,
  }))
}

// SEO metadata per route
export function generateMetadata({ params }) {
  const { slug } = params
  const parts = slug.split('-a-')
  if (parts.length < 2) {
    return {
      title: 'Ruta en Metro CDMX — Cómo llegar | MetroGuia.mx',
      description: 'Planificador de rutas en el Metro de Ciudad de México. Encuentra tu ruta, transbordos, tiempo estimado y costo del transporte público.',
    }
  }

  const origen = parts[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const destino = parts.slice(1).join('-a-').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  // Optimized title with CTR keywords: "cómo llegar", "ruta en metro", station names
  const title = `Cómo llegar de ${origen} a ${destino} en metro | MetroGuia.mx`

  // Enhanced description with travel time indication, practical details
  const description = `Ruta en metro de ${origen} a ${destino} en CDMX. Transbordos, tiempo estimado, líneas de metro, costo y alternativas. Planificador de transporte en tiempo real.`

  return {
    title,
    description,
    openGraph: {
      title: `${origen} → ${destino} en Metro`,
      description: `Cómo llegar en transporte público de CDMX.`,
    },
  }
}

export default function RutaPage({ params }) {
  return <RutaClient slug={params.slug} />
}
