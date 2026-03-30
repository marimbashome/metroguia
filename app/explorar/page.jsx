import { zonas } from '@/data/zonas'
import { estaciones } from '@/data/estaciones'
import { rutasPopulares } from '@/data/rutas-populares'
import { lineasDetalle } from '@/data/lineas-detalle'
import ExplorarContent from './ExplorarContent'

export const metadata = {
  title: 'Explorar México — 11 ciudades, 786 estaciones, 77 líneas | MetroGuia',
  description: 'Hub interactivo para explorar el transporte público en México. CDMX, Guadalajara, Monterrey, Puebla, Mérida, León, Querétaro, Chihuahua, Tijuana, Toluca y Tren Maya. Rutas, estaciones y guías turísticas.',
  keywords: 'explorar México, transporte público México, metro CDMX, tren Guadalajara, Metrorrey, BRT Puebla, FIFA 2026 transporte',
  openGraph: {
    title: 'Explorar México — 11 ciudades de transporte público | MetroGuia',
    description: 'Hub interactivo para descubrir el transporte público en 11 ciudades de México.',
    url: 'https://metroguia.mx/explorar/',
    type: 'website',
  }
}

const ciudadesExplorar = [
  {
    id: 'cdmx', nombre: 'Ciudad de México', sistema: 'Metro · Tren Ligero · Cablebús · Metrobús',
    stats: { estaciones: 436, lineas: 40 }, color: '#F5A623', href: '/cdmx/',
    destacado: 'Estadio Azteca FIFA 2026',
  },
  {
    id: 'gdl', nombre: 'Guadalajara', sistema: 'Mi Tren L1-L4 · Mi Macro',
    stats: { estaciones: 125, lineas: 6 }, color: '#06B6D4', href: '/gdl/',
    destacado: 'Estadio Akron FIFA 2026',
  },
  {
    id: 'mty', nombre: 'Monterrey', sistema: 'Metrorrey L1-L3 · Ecovía',
    stats: { estaciones: 83, lineas: 4 }, color: '#EC4899', href: '/mty/',
    destacado: 'Estadio BBVA FIFA 2026',
  },
  {
    id: 'puebla', nombre: 'Puebla', sistema: 'RUTA BRT · 3 corredores',
    stats: { estaciones: 16, lineas: 3 }, color: '#8B5CF6', href: '/puebla/',
    destacado: 'Centro Histórico UNESCO',
  },
  {
    id: 'merida', nombre: 'Mérida', sistema: 'Va y Ven · 4 rutas',
    stats: { estaciones: 16, lineas: 4 }, color: '#F59E0B', href: '/merida/',
    destacado: 'Chichén Itzá acceso',
  },
  {
    id: 'leon', nombre: 'León', sistema: 'SIT León · 4 líneas BRT',
    stats: { estaciones: 20, lineas: 4 }, color: '#10B981', href: '/leon/',
    destacado: 'Industria del cuero',
  },
  {
    id: 'tren-maya', nombre: 'Tren Maya', sistema: '7 tramos · Yucatán a Chiapas',
    stats: { estaciones: 15, lineas: 6 }, color: '#0EA5E9', href: '/tren-maya/',
    destacado: 'Cancún–Palenque',
  },
  {
    id: 'queretaro', nombre: 'Querétaro', sistema: 'QroBús · 3 líneas',
    stats: { estaciones: 30, lineas: 3 }, color: '#EF4444', href: '/queretaro/',
    destacado: 'Centro Histórico Colonial',
  },
  {
    id: 'chihuahua', nombre: 'Chihuahua', sistema: 'Chepe Express',
    stats: { estaciones: 15, lineas: 2 }, color: '#D97706', href: '/chihuahua/',
    destacado: 'Barrancas del Cobre',
  },
  {
    id: 'tijuana', nombre: 'Tijuana', sistema: 'SITT · 2 líneas',
    stats: { estaciones: 15, lineas: 2 }, color: '#6B7280', href: '/tijuana/',
    destacado: 'Cross-Border Express',
  },
  {
    id: 'toluca', nombre: 'Toluca', sistema: 'Tren Interurbano · Mexibús',
    stats: { estaciones: 15, lineas: 3 }, color: '#7C3AED', href: '/toluca/',
    destacado: 'Tren Interurbano CDMX',
  },
]

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
      { '@type': 'ListItem', 'position': 2, 'name': 'Explorar', 'item': 'https://metroguia.mx/explorar/' }
    ]
  }

  const explorarSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Explorar transporte público en México',
    description: '11 ciudades, 786 estaciones, 77 líneas de metro, tren y BRT',
    url: 'https://metroguia.mx/explorar/',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: ciudadesExplorar.length,
      itemListElement: ciudadesExplorar.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${c.nombre} — ${c.sistema}`,
        url: `https://metroguia.mx${c.href}`,
      })),
    },
  }

  return (
    <ExplorarContent
      ciudades={ciudadesExplorar}
      zonasDestacadas={zonasDestacadas}
      estacionesTuristicas={estacionesTuristicas}
      rutasDestacadas={rutasDestacadas}
      lineasArray={lineasArray}
      breadcrumbSchema={breadcrumbSchema}
      explorarSchema={explorarSchema}
    />
  )
}
