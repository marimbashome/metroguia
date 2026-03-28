import { zonas } from '@/data/zonas'
import { estaciones } from '@/data/estaciones'
import { rutasPopulares } from '@/data/rutas-populares'
import { lineasDetalle } from '@/data/lineas-detalle'
import ExplorarContent from './ExplorarContent'

export const metadata = {
  title: 'Explorar CDMX — Descubre zonas, estaciones y rutas | MetroGuia',
  description: 'Hub interactivo para descubrir qué hacer en CDMX usando metro. Explora zonas turísticas, estaciones de interés, rutas populares y líneas de metro. Ideal para turistas del Mundial 2026.',
  keywords: 'explorar CDMX, zonas turísticas, estaciones metro, rutas metro, qué hacer en CDMX, turismo',
  openGraph: {
    title: 'Explorar CDMX — Descubre zonas, estaciones y rutas | MetroGuia',
    description: 'Hub interactivo para descubrir qué hacer en CDMX usando metro.',
  }
}

export default function ExplorarPage() {
  const zonasDestacadas = zonas.slice(0, 6)
  const estacionesTuristicas = estaciones
    .filter(e => ['bellas-artes', 'zocalo', 'chapultepec', 'insurgentes', 'coyoacan', 'xochimilco', 'polanco', 'condesa'].includes(e.slug))
    .slice(0, 6)
  const rutasDestacadas = rutasPopulares.slice(0, 12)
  const lineasArray = Object.values(lineasDetalle).filter(l => l.numero && l.numero <= 12)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'MetroGuia', 'item': 'https://metroguia.mx' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Explorar', 'item': 'https://metroguia.mx/explorar' }
    ]
  }

  return (
    <ExplorarContent
      zonasDestacadas={zonasDestacadas}
      estacionesTuristicas={estacionesTuristicas}
      rutasDestacadas={rutasDestacadas}
      lineasArray={lineasArray}
      breadcrumbSchema={breadcrumbSchema}
    />
  )
}
