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
      title: 'Ruta — MetroGuia.mx',
      description: 'Planifica tu ruta en metro, tren ligero y BRT en México.',
    }
  }
  const origen = parts[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const destino = parts.slice(1).join('-a-').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  return {
    title: `${origen} a ${destino} — Ruta en Metro | MetroGuia.mx`,
    description: `Cómo llegar de ${origen} a ${destino} en metro CDMX. Ruta más rápida, transbordos, tiempo estimado y costo. Trip planner MetroGuia.mx.`,
    openGraph: {
      title: `${origen} → ${destino} — MetroGuia.mx`,
      description: `Ruta de ${origen} a ${destino} en transporte público de CDMX.`,
    },
  }
}

export default function RutaPage({ params }) {
  return <RutaClient slug={params.slug} />
}
