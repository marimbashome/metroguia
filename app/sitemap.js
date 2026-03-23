import { estaciones } from '@/data/estaciones';
import { lineasDetalle } from '@/data/lineas-detalle';
import { zonas } from '@/data/zonas';
import { rutasPopulares, buildRutaSlug } from '@/data/rutas-populares';

// Import station data for all cities
import { estacionesGDL } from '@/data/gdl/estaciones';
import { estacionesMTY } from '@/data/mty/estaciones';
import { estacionesPuebla } from '@/data/puebla/estaciones';
import { estacionesMerida } from '@/data/merida/estaciones';
import { estacionesLeon } from '@/data/leon/estaciones';
import { estacionesChihuahua } from '@/data/chihuahua/estaciones';
import { estacionesTijuana } from '@/data/tijuana/estaciones';
import { estacionesQueretaro } from '@/data/queretaro/estaciones';
import { estacionesToluca } from '@/data/toluca/estaciones';
import { estacionesTrenMaya } from '@/data/tren-maya/estaciones';

// Import line data for all cities
import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { lineasMTY } from '@/data/mty/lineas-detalle';
import { lineasPuebla } from '@/data/puebla/lineas-detalle';
import { lineasMerida } from '@/data/merida/lineas-detalle';
import { lineasLeon } from '@/data/leon/lineas-detalle';
import { lineasChihuahua } from '@/data/chihuahua/lineas-detalle';
import { lineasTijuana } from '@/data/tijuana/lineas-detalle';
import { lineasQueretaro } from '@/data/queretaro/lineas-detalle';
import { lineasToluca } from '@/data/toluca/lineas-detalle';
import { lineasTrenMaya } from '@/data/tren-maya/lineas-detalle';

export default function sitemap() {
  const baseUrl = 'https://metroguia.mx';
  const lastModified = new Date();

  // City hub pages with priority 0.9
  const cityPages = [
    { url: `${baseUrl}/cdmx/`, priority: 0.9 },
    { url: `${baseUrl}/gdl/`, priority: 0.9 },
    { url: `${baseUrl}/mty/`, priority: 0.9 },
    { url: `${baseUrl}/puebla/`, priority: 0.9 },
    { url: `${baseUrl}/merida/`, priority: 0.9 },
    { url: `${baseUrl}/leon/`, priority: 0.9 },
    { url: `${baseUrl}/chihuahua/`, priority: 0.9 },
    { url: `${baseUrl}/tijuana/`, priority: 0.9 },
    { url: `${baseUrl}/toluca/`, priority: 0.9 },
    { url: `${baseUrl}/queretaro/`, priority: 0.9 },
    { url: `${baseUrl}/tren-maya/`, priority: 0.9 },
  ].map((page) => ({
    ...page,
    lastModified,
    changeFrequency: 'weekly',
  }));

  // Static pages
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
      url: `${baseUrl}/rutas/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospedaje/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/explorar/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
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
      url: `${baseUrl}/mundial-2026/gdl/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mundial-2026/mty/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gdl/mundial-2026/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mty/mundial-2026/`,
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

  // Helper to map lines to sitemap entries
  const mapLineas = (lineas, ciudad) => (lineas || []).map((linea) => ({
    url: ciudad ? `${baseUrl}/${ciudad}/linea/${linea.id}/` : `${baseUrl}/linea/${linea.id}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Páginas de líneas para todas las ciudades
  const lineasPages = [
    // CDMX — lineasDetalle is an object, not array
    ...Object.values(lineasDetalle || {}).map((linea) => ({
      url: `${baseUrl}/linea/${linea.id}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    ...mapLineas(lineasGDL, 'gdl'),
    ...mapLineas(lineasMTY, 'mty'),
    ...mapLineas(lineasPuebla, 'puebla'),
    ...mapLineas(lineasMerida, 'merida'),
    ...mapLineas(lineasLeon, 'leon'),
    ...mapLineas(lineasChihuahua, 'chihuahua'),
    ...mapLineas(lineasTijuana, 'tijuana'),
    ...mapLineas(lineasQueretaro, 'queretaro'),
    ...mapLineas(lineasToluca, 'toluca'),
    ...mapLineas(lineasTrenMaya, 'tren-maya'),
  ];

  // Helper to map stations to sitemap entries
  const mapEstaciones = (estacionesList, ciudad) => (estacionesList || []).map((estacion) => ({
    url: ciudad ? `${baseUrl}/${ciudad}/estacion/${estacion.slug}/` : `${baseUrl}/estacion/${estacion.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Páginas de estaciones para todas las ciudades
  const estacionesPages = [
    ...mapEstaciones(estaciones, null),          // CDMX root
    ...mapEstaciones(estacionesGDL, 'gdl'),
    ...mapEstaciones(estacionesMTY, 'mty'),
    ...mapEstaciones(estacionesPuebla, 'puebla'),
    ...mapEstaciones(estacionesMerida, 'merida'),
    ...mapEstaciones(estacionesLeon, 'leon'),
    ...mapEstaciones(estacionesChihuahua, 'chihuahua'),
    ...mapEstaciones(estacionesTijuana, 'tijuana'),
    ...mapEstaciones(estacionesQueretaro, 'queretaro'),
    ...mapEstaciones(estacionesToluca, 'toluca'),
    ...mapEstaciones(estacionesTrenMaya, 'tren-maya'),
  ];

  // Páginas de zonas
  const zonasPages = (zonas || []).map((zona) => ({
    url: `${baseUrl}/zona/${zona.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Páginas de rutas populares
  const rutasPages = (rutasPopulares || []).map((ruta) => ({
    url: `${baseUrl}/rutas/${buildRutaSlug(ruta.origen, ruta.destino)}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...lineasPages,
    ...estacionesPages,
    ...zonasPages,
    ...rutasPages,
  ];
}
