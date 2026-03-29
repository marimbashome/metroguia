import { estaciones } from '@/data/estaciones';
import { lineasDetalle } from '@/data/lineas-detalle';
import { zonas } from '@/data/zonas';
import { rutasPopulares, buildRutaSlug } from '@/data/rutas-populares';
import { generateCityRoutes } from '@/data/rutas-engine';
import { mundial2026 } from '@/data/mundial';

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
      url: `${baseUrl}/mundial-2026/como-llegar-estadio-azteca/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mundial-2026/transporte-publico-cdmx/`,
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
      url: `${baseUrl}/mundial-2026/partidos/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // FIFA match pages (individual partido pages)
  const fifaMatchPages = [];
  Object.entries(mundial2026.sedes).forEach(([cityKey, sede]) => {
    sede.partidos.forEach((partido) => {
      fifaMatchPages.push({
        url: `${baseUrl}/mundial-2026/partidos/${cityKey}-${partido.fecha}/`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  });

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

  // ALL 26,894 route pages — CDMX (24,180) + GDL (1,722) + MTY (992)
  // ISR: generated on-demand, all listed in sitemap for Google discovery
  const cdmxRoutes = generateCityRoutes('cdmx').map(slug => ({
    url: `${baseUrl}/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: slug.endsWith('-a-tasquena') || slug.endsWith('-a-tren-ligero-estadio-azteca') ? 0.85 : 0.7,
  }));
  const gdlRoutes = generateCityRoutes('gdl').map(slug => ({
    url: `${baseUrl}/gdl/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: slug.endsWith('-a-estadio-chivas') ? 0.85 : 0.65,
  }));
  const mtyRoutes = generateCityRoutes('mty').map(slug => ({
    url: `${baseUrl}/mty/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: slug.endsWith('-a-exposicion') ? 0.85 : 0.65,
  }));
  const rutasPages = [...cdmxRoutes, ...gdlRoutes, ...mtyRoutes];

  // Language versions (en, pt, fr, de, ja, ko) for key pages
  const languages = ['en', 'pt', 'fr', 'de', 'ja', 'ko'];
  const languagePages = [];

  // Home pages in other languages
  languages.forEach(lang => {
    languagePages.push({
      url: `${baseUrl}/${lang}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  });

  // CDMX hub in other languages
  languages.forEach(lang => {
    languagePages.push({
      url: `${baseUrl}/${lang}/cdmx/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // FIFA 2026 hub in other languages
  languages.forEach(lang => {
    languagePages.push({
      url: `${baseUrl}/${lang}/mundial-2026/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // ALL CDMX station pages in other languages (195 × 6 = 1,170)
  languages.forEach(lang => {
    (estaciones || []).forEach(estacion => {
      languagePages.push({
        url: `${baseUrl}/${lang}/cdmx/estacion/${estacion.slug}/`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // GDL + MTY station pages in other languages
  const cityStationSets = [
    { data: estacionesGDL, city: 'gdl' },
    { data: estacionesMTY, city: 'mty' },
  ];
  languages.forEach(lang => {
    cityStationSets.forEach(({ data, city }) => {
      (data || []).forEach(estacion => {
        languagePages.push({
          url: `${baseUrl}/${lang}/${city}/estacion/${estacion.slug}/`,
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.65,
        });
      });
    });
  });

  // All city hub pages in other languages (11 cities × 6 langs = 66)
  const allCities = ['cdmx', 'gdl', 'mty', 'puebla', 'merida', 'leon', 'chihuahua', 'tijuana', 'toluca', 'queretaro', 'tren-maya'];
  languages.forEach(lang => {
    allCities.forEach(city => {
      if (city !== 'cdmx') { // cdmx already added above
        languagePages.push({
          url: `${baseUrl}/${lang}/${city}/`,
          lastModified,
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      }
    });
  });

  // CDMX line pages in other languages (12 × 6 = 72)
  const cdmxLineIds = Object.keys(lineasDetalle).slice(0, 12);
  languages.forEach(lang => {
    cdmxLineIds.forEach(lineId => {
      languagePages.push({
        url: `${baseUrl}/${lang}/cdmx/linea/${lineId}/`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // Top 500 route pages in other languages (500 × 6 = 3,000)
  languages.forEach(lang => {
    rutasPopulares.slice(0, 500).forEach(ruta => {
      languagePages.push({
        url: `${baseUrl}/${lang}/ruta/${ruta.origen}-a-${ruta.destino}/`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.65,
      });
    });
  });

  return [
    ...staticPages,
    ...fifaMatchPages,
    ...cityPages,
    ...lineasPages,
    ...estacionesPages,
    ...zonasPages,
    ...rutasPages,
    ...languagePages,
  ];
}
