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

// CDMX auxiliary transit systems
import { trolebusData } from '@/data/cdmx/trolebus';
import { mexicableEstaciones, mexicableLineas, mexicableSistema } from '@/data/cdmx/mexicable';
import { metrobusEstaciones, metrobusLineas, metrobusSistema } from '@/data/cdmx/metrobus';
import { cablebusEstaciones, cablebusLineas, cablebusSistema } from '@/data/cdmx/cablebus';
import { trenLigeroData } from '@/data/cdmx/tren-ligero';
import { trenSuburbanoData } from '@/data/cdmx/tren-suburbano';
import { aeropuertos } from '@/data/aeropuertos';
import { terminales } from '@/data/terminales';

// MTY Ecovía
import { estacionesEcovia } from '@/data/mty/ecovia';

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
      url: `${baseUrl}/guides/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/airport-to-metro/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/visitor-guide/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
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

  // ALL route pages — CDMX + GDL + MTY
  // ISR: generated on-demand, all listed in sitemap for Google discovery
  // CDMX Transit System Pages
  const cdmxTransitPages = [
    // Trolebús hub + lines + stations
    { url: `${baseUrl}/cdmx/trolebus/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...Object.keys(trolebusData.lineas).map(id => ({
      url: `${baseUrl}/cdmx/trolebus/linea/${id}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    ...(trolebusData.estaciones || []).map(e => ({
      url: `${baseUrl}/cdmx/trolebus/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Mexicable hub + lines + stations
    { url: `${baseUrl}/cdmx/mexicable/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...Object.keys(mexicableLineas).map(id => ({
      url: `${baseUrl}/cdmx/mexicable/linea/${id}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    ...mexicableEstaciones.map(e => ({
      url: `${baseUrl}/cdmx/mexicable/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Metrobús hub + lines + stations
    { url: `${baseUrl}/cdmx/metrobus/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...Object.keys(metrobusLineas).map(id => ({
      url: `${baseUrl}/cdmx/metrobus/linea/${id}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    ...metrobusEstaciones.map(e => ({
      url: `${baseUrl}/cdmx/metrobus/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Cablebús hub + lines + stations
    { url: `${baseUrl}/cdmx/cablebus/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...Object.keys(cablebusLineas).map(id => ({
      url: `${baseUrl}/cdmx/cablebus/linea/${id}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    ...cablebusEstaciones.map(e => ({
      url: `${baseUrl}/cdmx/cablebus/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Tren Ligero hub + stations
    { url: `${baseUrl}/cdmx/tren-ligero/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...(trenLigeroData.estaciones || []).map(e => ({
      url: `${baseUrl}/cdmx/tren-ligero/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Tren Suburbano hub + lines + stations
    { url: `${baseUrl}/cdmx/tren-suburbano/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...Object.keys(trenSuburbanoData.lineas).map(id => ({
      url: `${baseUrl}/cdmx/tren-suburbano/linea/${id}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    ...(trenSuburbanoData.estaciones || []).map(e => ({
      url: `${baseUrl}/cdmx/tren-suburbano/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Aeropuertos
    { url: `${baseUrl}/aeropuertos/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...(aeropuertos || []).map(a => ({
      url: `${baseUrl}/aeropuertos/${a.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
    // Terminales de autobús
    { url: `${baseUrl}/terminales/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    ...(terminales || []).map(t => ({
      url: `${baseUrl}/terminales/${t.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
  ];

  // GDL Macrobús (Mi Macro) Transit Pages — MC + MP lines
  const gdlMacrobusStations = (estacionesGDL || []).filter(e => e.sistema === 'macrobus');
  const gdlMacrobusPages = [
    { url: `${baseUrl}/gdl/macrobus/`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/gdl/macrobus/linea/MC/`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/gdl/macrobus/linea/MP/`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    ...gdlMacrobusStations.map(e => ({
      url: `${baseUrl}/gdl/macrobus/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
  ];

  // MTY Ecovía Transit Pages
  const mtyEcoviaPages = [
    { url: `${baseUrl}/mty/ecovia/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...(estacionesEcovia || []).map(e => ({
      url: `${baseUrl}/mty/ecovia/estacion/${e.slug}/`,
      lastModified, changeFrequency: 'monthly', priority: 0.7,
    })),
  ];

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
  const pueblaRoutes = generateCityRoutes('puebla').map(slug => ({
    url: `${baseUrl}/puebla/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const meridaRoutes = generateCityRoutes('merida').map(slug => ({
    url: `${baseUrl}/merida/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const leonRoutes = generateCityRoutes('leon').map(slug => ({
    url: `${baseUrl}/leon/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const chihuahuaRoutes = generateCityRoutes('chihuahua').map(slug => ({
    url: `${baseUrl}/chihuahua/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.55,
  }));
  const tijuanaRoutes = generateCityRoutes('tijuana').map(slug => ({
    url: `${baseUrl}/tijuana/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.55,
  }));
  const queretaroRoutes = generateCityRoutes('queretaro').map(slug => ({
    url: `${baseUrl}/queretaro/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const tolucaRoutes = generateCityRoutes('toluca').map(slug => ({
    url: `${baseUrl}/toluca/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.55,
  }));
  const trenmayaRoutes = generateCityRoutes('tren-maya').map(slug => ({
    url: `${baseUrl}/tren-maya/ruta/${slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  const rutasPages = [
    ...cdmxRoutes, ...gdlRoutes, ...mtyRoutes,
    ...pueblaRoutes, ...meridaRoutes, ...leonRoutes,
    ...chihuahuaRoutes, ...tijuanaRoutes, ...queretaroRoutes,
    ...tolucaRoutes, ...trenmayaRoutes,
  ];

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

  // NOTE: GDL/MTY station pages and non-CDMX city hub pages in other languages
  // were removed — no /[lang]/gdl/, /[lang]/mty/, etc. routes exist in the app router.
  // Only /[lang]/cdmx/ has actual pages. Re-add when those routes are created.

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
    ...cdmxTransitPages,
    ...gdlMacrobusPages,
    ...mtyEcoviaPages,
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
