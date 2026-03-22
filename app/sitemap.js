import { estaciones } from '@/data/estaciones'
import { lineasDetalle } from '@/data/lineas-detalle'

const BASE_URL = 'https://metroguia.mx'

export default function sitemap() {
  const lineaUrls = Object.keys(lineasDetalle).map((id) => ({
    url: `${BASE_URL}/linea/${id}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const estacionUrls = estaciones.map((e) => ({
    url: `${BASE_URL}/estacion/${e.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/lineas/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mundial-2026/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/mundial-2026/estadio-azteca/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...lineaUrls,
    ...estacionUrls,
  ]
}
