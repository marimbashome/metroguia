import { estaciones } from '@/data/estaciones';
import { lineasDetalle } from '@/data/lineas-detalle';
import { zonas } from '@/data/zonas';
import { rutasPopulares, buildRutaSlug } from '@/data/rutas-populares';

export default function sitemap() {
  const baseUrl = 'https://metroguia.mx';
  const lastModified = new Date();

  // Páginas estáticas
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/lineas/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mundial-2026/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mundial-2026/estadio-azteca/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Páginas de líneas
  const lineasPages = Object.values(lineasDetalle).map((linea) => ({
    url: `${baseUrl}/linea/${linea.id}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Páginas de estaciones
  const estacionesPages = estaciones.map((estacion) => ({
    url: `${baseUrl}/estacion/${estacion.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Páginas de zonas
  const zonasPages = zonas.map((zona) => ({
    url: `${baseUrl}/zona/${zona.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Páginas de rutas populares
  const rutasPages = rutasPopulares.map((ruta) => ({
    url: `${baseUrl}/rutas/${buildRutaSlug(ruta.origen, ruta.destino)}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...lineasPages, ...estacionesPages, ...zonasPages, ...rutasPages];
}
