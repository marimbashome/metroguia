import { estaciones } from '@/data/estaciones';
import { lineasDetalle } from '@/data/lineas-detalle';
import { zonas } from '@/data/zonas';
import { rutasPopulares } from '@/data/rutas-populares';
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
import { estacionesOaxaca } from '@/data/oaxaca/estaciones';
import { estacionesMorelia } from '@/data/morelia/estaciones';
import { estacionesVeracruz } from '@/data/veracruz/estaciones';
import { estacionesCampeche } from '@/data/campeche/estaciones';
import { estacionesVillahermosa } from '@/data/villahermosa/estaciones';

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
import { lineasOaxaca } from '@/data/oaxaca/lineas-detalle';
import { lineasMorelia } from '@/data/morelia/lineas-detalle';
import { lineasVeracruz } from '@/data/veracruz/lineas-detalle';
import { lineasCampeche } from '@/data/campeche/lineas-detalle';
import { lineasVillahermosa } from '@/data/villahermosa/lineas-detalle';

// CDMX auxiliary transit systems
import { trolebusData } from '@/data/cdmx/trolebus';
import { mexicableEstaciones, mexicableLineas } from '@/data/cdmx/mexicable';
import { metrobusEstaciones, metrobusLineas } from '@/data/cdmx/metrobus';
import { cablebusEstaciones, cablebusLineas } from '@/data/cdmx/cablebus';
import { trenLigeroData } from '@/data/cdmx/tren-ligero';
import { trenSuburbanoData } from '@/data/cdmx/tren-suburbano';
import { aeropuertos } from '@/data/aeropuertos';
import { terminales } from '@/data/terminales';
import { ferrys } from '@/data/ferrys';
import { crucesFronterizos } from '@/data/cruces-fronterizos';

// MTY Ecovía
import { estacionesEcovia } from '@/data/mty/ecovia';

// Turismo data
import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';
import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';
import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';
import { playas } from '@/data/turismo/playas';
import { barriosMagicos } from '@/data/turismo/barrios-magicos';
import { rutasGastronomicas } from '@/data/turismo/rutas-gastronomicas';
import { destinosPrioritarios } from '@/data/turismo/destinos-prioritarios';
import { naturaleza } from '@/data/turismo/naturaleza';

// ============================================================================
// Sitemap Index — splits 54K+ URLs into child sitemaps under 50K each
// ============================================================================
// ID 0: core        — home, guides, hubs, zonas, privacy (~40 URLs)
// ID 1: cities      — stations + lines for all 16 cities (~670 URLs)
// ID 2: turismo     — 8 SECTUR programs + detail pages (~541 URLs)
// ID 3: transport   — CDMX aux transit, aeropuertos, terminales, ecovía, macrobús (~374 URLs)
// ID 4: mundial     — FIFA 2026 hub + matches + city pages (~20 URLs)
// ID 5: i18n        — 6 languages × key pages (~4,020 URLs)
// ID 6: routes-cdmx — CDMX route pages (~24,180 URLs)
// ID 7: routes-gdl  — GDL route pages (~15,500 URLs)
// ID 8: routes-other— MTY + 13 other cities route pages (~9,300 URLs)
// ============================================================================

const BASE_URL = 'https://metroguia.mx';

export async function generateSitemaps() {
  return [
    { id: 0 },  // core
    { id: 1 },  // cities
    { id: 2 },  // turismo
    { id: 3 },  // transport
    { id: 4 },  // mundial
    { id: 5 },  // i18n
    { id: 6 },  // routes-cdmx
    { id: 7 },  // routes-gdl
    { id: 8 },  // routes-other
  ];
}

// --- Helpers ---

function entry(path, changeFrequency, priority) {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

// Entry with hreflang alternates for i18n pages
function i18nEntry(basePath, changeFrequency, priority, lang) {
  const languages = ['es', 'en', 'pt', 'fr', 'de', 'ja', 'ko'];
  const url = lang === 'es'
    ? `${BASE_URL}${basePath}`
    : `${BASE_URL}/${lang}${basePath}`;

  return {
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        languages.map(l => [l, l === 'es' ? `${BASE_URL}${basePath}` : `${BASE_URL}/${l}${basePath}`])
      ),
    },
  };
}

function mapEstaciones(list, ciudad) {
  return (list || []).map((e) =>
    entry(
      ciudad ? `/${ciudad}/estacion/${e.slug}/` : `/estacion/${e.slug}/`,
      'monthly',
      0.8
    )
  );
}

function mapLineas(list, ciudad) {
  return (list || []).map((l) =>
    entry(
      ciudad ? `/${ciudad}/linea/${l.id}/` : `/linea/${l.id}/`,
      'monthly',
      0.9
    )
  );
}

// --- Child sitemap generators ---

function getCoreUrls() {
  return [
    entry('/', 'weekly', 1.0),
    entry('/lineas/', 'monthly', 0.9),
    entry('/rutas/', 'monthly', 0.8),
    entry('/guides/', 'monthly', 0.9),
    entry('/guides/airport-to-metro/', 'monthly', 0.9),
    entry('/guides/visitor-guide/', 'monthly', 0.9),
    entry('/hospedaje/', 'monthly', 0.8),
    entry('/explorar/', 'weekly', 0.8),
    entry('/zona/', 'monthly', 0.8),
    entry('/ruta/calc/', 'weekly', 0.8),
    entry('/privacy-policy/', 'yearly', 0.3),
    // City hub pages
    ...['cdmx','gdl','mty','puebla','merida','leon','chihuahua','tijuana',
        'toluca','queretaro','tren-maya','oaxaca','morelia','veracruz',
        'campeche','villahermosa'].map(c => entry(`/${c}/`, 'weekly', 0.9)),
    // Zonas
    ...(zonas || []).map((z) => entry(`/zona/${z.slug}/`, 'monthly', 0.8)),
  ];
}

function getCitiesUrls() {
  return [
    // CDMX stations + lines
    ...mapEstaciones(estaciones, null),
    ...Object.values(lineasDetalle || {}).map((l) => entry(`/linea/${l.id}/`, 'monthly', 0.9)),
    // GDL
    ...mapEstaciones(estacionesGDL, 'gdl'),
    ...mapLineas(lineasGDL, 'gdl'),
    // MTY
    ...mapEstaciones(estacionesMTY, 'mty'),
    ...mapLineas(lineasMTY, 'mty'),
    // Puebla
    ...mapEstaciones(estacionesPuebla, 'puebla'),
    ...mapLineas(lineasPuebla, 'puebla'),
    // Mérida
    ...mapEstaciones(estacionesMerida, 'merida'),
    ...mapLineas(lineasMerida, 'merida'),
    // León
    ...mapEstaciones(estacionesLeon, 'leon'),
    ...mapLineas(lineasLeon, 'leon'),
    // Chihuahua
    ...mapEstaciones(estacionesChihuahua, 'chihuahua'),
    ...mapLineas(lineasChihuahua, 'chihuahua'),
    // Tijuana
    ...mapEstaciones(estacionesTijuana, 'tijuana'),
    ...mapLineas(lineasTijuana, 'tijuana'),
    // Querétaro
    ...mapEstaciones(estacionesQueretaro, 'queretaro'),
    ...mapLineas(lineasQueretaro, 'queretaro'),
    // Toluca
    ...mapEstaciones(estacionesToluca, 'toluca'),
    ...mapLineas(lineasToluca, 'toluca'),
    // Tren Maya
    ...mapEstaciones(estacionesTrenMaya, 'tren-maya'),
    ...mapLineas(lineasTrenMaya, 'tren-maya'),
    // Oaxaca
    ...mapEstaciones(estacionesOaxaca, 'oaxaca'),
    ...mapLineas(lineasOaxaca, 'oaxaca'),
    // Morelia
    ...mapEstaciones(estacionesMorelia, 'morelia'),
    ...mapLineas(lineasMorelia, 'morelia'),
    // Veracruz
    ...mapEstaciones(estacionesVeracruz, 'veracruz'),
    ...mapLineas(lineasVeracruz, 'veracruz'),
    // Campeche
    ...mapEstaciones(estacionesCampeche, 'campeche'),
    ...mapLineas(lineasCampeche, 'campeche'),
    // Villahermosa
    ...mapEstaciones(estacionesVillahermosa, 'villahermosa'),
    ...mapLineas(lineasVillahermosa, 'villahermosa'),
  ];
}

function getTurismoUrls() {
  const sections = [
    { data: pueblosMagicos, slug: 'pueblos-magicos' },
    { data: zonasArqueologicas, slug: 'zonas-arqueologicas' },
    { data: ciudadesPatrimonio, slug: 'ciudades-patrimonio' },
    { data: playas, slug: 'playas' },
    { data: barriosMagicos, slug: 'barrios-magicos' },
    { data: rutasGastronomicas, slug: 'rutas-gastronomicas' },
    { data: destinosPrioritarios, slug: 'destinos-prioritarios' },
    { data: naturaleza, slug: 'naturaleza' },
  ];

  const urls = [entry('/turismo/', 'weekly', 0.9)];
  for (const section of sections) {
    urls.push(entry(`/turismo/${section.slug}/`, 'weekly', 0.85));
    for (const item of (section.data || [])) {
      urls.push(entry(`/turismo/${section.slug}/${item.slug}/`, 'monthly', 0.7));
    }
  }
  return urls;
}

function getTransportUrls() {
  return [
    // Trolebús
    entry('/cdmx/trolebus/', 'weekly', 0.8),
    ...Object.keys(trolebusData.lineas).map(id => entry(`/cdmx/trolebus/linea/${id}/`, 'monthly', 0.7)),
    ...(trolebusData.estaciones || []).map(e => entry(`/cdmx/trolebus/estacion/${e.slug}/`, 'monthly', 0.7)),
    // Mexicable
    entry('/cdmx/mexicable/', 'weekly', 0.8),
    ...Object.keys(mexicableLineas).map(id => entry(`/cdmx/mexicable/linea/${id}/`, 'monthly', 0.7)),
    ...mexicableEstaciones.map(e => entry(`/cdmx/mexicable/estacion/${e.slug}/`, 'monthly', 0.7)),
    // Metrobús
    entry('/cdmx/metrobus/', 'weekly', 0.8),
    ...Object.keys(metrobusLineas).map(id => entry(`/cdmx/metrobus/linea/${id}/`, 'monthly', 0.7)),
    ...metrobusEstaciones.map(e => entry(`/cdmx/metrobus/estacion/${e.slug}/`, 'monthly', 0.7)),
    // Cablebús
    entry('/cdmx/cablebus/', 'weekly', 0.8),
    ...Object.keys(cablebusLineas).map(id => entry(`/cdmx/cablebus/linea/${id}/`, 'monthly', 0.7)),
    ...cablebusEstaciones.map(e => entry(`/cdmx/cablebus/estacion/${e.slug}/`, 'monthly', 0.7)),
    // Tren Ligero
    entry('/cdmx/tren-ligero/', 'weekly', 0.8),
    ...(trenLigeroData.estaciones || []).map(e => entry(`/cdmx/tren-ligero/estacion/${e.slug}/`, 'monthly', 0.7)),
    // Tren Suburbano
    entry('/cdmx/tren-suburbano/', 'weekly', 0.8),
    ...Object.keys(trenSuburbanoData.lineas).map(id => entry(`/cdmx/tren-suburbano/linea/${id}/`, 'monthly', 0.7)),
    ...(trenSuburbanoData.estaciones || []).map(e => entry(`/cdmx/tren-suburbano/estacion/${e.slug}/`, 'monthly', 0.7)),
    // Aeropuertos
    entry('/aeropuertos/', 'monthly', 0.8),
    ...(aeropuertos || []).map(a => entry(`/aeropuertos/${a.slug}/`, 'monthly', 0.7)),
    // Terminales
    entry('/terminales/', 'monthly', 0.8),
    ...(terminales || []).map(t => entry(`/terminales/${t.slug}/`, 'monthly', 0.7)),
    // Ferries
    entry('/ferries/', 'monthly', 0.7),
    ...(ferrys || []).map(f => entry(`/ferries/${f.slug}/`, 'monthly', 0.6)),
    // Cruces fronterizos
    entry('/frontera/', 'monthly', 0.7),
    ...(crucesFronterizos || []).map(c => entry(`/frontera/${c.slug}/`, 'monthly', 0.6)),
    // GDL Macrobús
    entry('/gdl/macrobus/', 'weekly', 0.85),
    entry('/gdl/macrobus/linea/MC/', 'monthly', 0.75),
    entry('/gdl/macrobus/linea/MP/', 'monthly', 0.75),
    ...(estacionesGDL || []).filter(e => e.sistema === 'macrobus').map(e =>
      entry(`/gdl/macrobus/estacion/${e.slug}/`, 'monthly', 0.7)
    ),
    // MTY Ecovía
    entry('/mty/ecovia/', 'weekly', 0.8),
    ...(estacionesEcovia || []).map(e => entry(`/mty/ecovia/estacion/${e.slug}/`, 'monthly', 0.7)),
  ];
}

function getMundialUrls() {
  const urls = [
    entry('/mundial-2026/', 'weekly', 1.0),
    entry('/mundial-2026/estadio-azteca/', 'monthly', 0.9),
    entry('/mundial-2026/como-llegar-estadio-azteca/', 'monthly', 0.9),
    entry('/mundial-2026/transporte-publico-cdmx/', 'monthly', 0.9),
    entry('/gdl/mundial-2026/', 'monthly', 0.9),
    entry('/mty/mundial-2026/', 'monthly', 0.9),
    entry('/mundial-2026/partidos/', 'weekly', 0.9),
  ];
  // Individual match pages
  Object.entries(mundial2026.sedes).forEach(([cityKey, sede]) => {
    sede.partidos.forEach((partido) => {
      urls.push(entry(`/mundial-2026/partidos/${cityKey}-${partido.fecha}/`, 'weekly', 0.9));
    });
  });
  return urls;
}

function getI18nUrls() {
  const languages = ['en', 'pt', 'fr', 'de', 'ja', 'ko'];
  const allLangs = ['es', ...languages];
  const urls = [];

  // Key pages with full hreflang alternates
  const keyPages = [
    { path: '/', freq: 'weekly', priority: 0.95 },
    { path: '/cdmx/', freq: 'weekly', priority: 0.9 },
    { path: '/gdl/', freq: 'weekly', priority: 0.9 },
    { path: '/mty/', freq: 'weekly', priority: 0.9 },
    { path: '/mundial-2026/', freq: 'monthly', priority: 0.85 },
  ];

  keyPages.forEach(({ path, freq, priority }) => {
    allLangs.forEach(lang => {
      urls.push(i18nEntry(path, freq, priority, lang));
    });
  });

  // CDMX stations in all languages (155 × 6 = 930)
  languages.forEach(lang => {
    (estaciones || []).forEach(estacion => {
      urls.push(entry(`/${lang}/cdmx/estacion/${estacion.slug}/`, 'monthly', 0.7));
    });
  });

  // CDMX lines in all languages (12 × 6 = 72)
  const cdmxLineIds = Object.keys(lineasDetalle).slice(0, 12);
  languages.forEach(lang => {
    cdmxLineIds.forEach(lineId => {
      urls.push(entry(`/${lang}/cdmx/linea/${lineId}/`, 'monthly', 0.7));
    });
  });

  // Top 500 routes in all languages (500 × 6 = 3,000)
  languages.forEach(lang => {
    rutasPopulares.slice(0, 500).forEach(ruta => {
      urls.push(entry(`/${lang}/ruta/${ruta.origen}-a-${ruta.destino}/`, 'monthly', 0.65));
    });
  });

  return urls;
}

function getRoutesCdmxUrls() {
  return generateCityRoutes('cdmx').map(slug =>
    entry(
      `/ruta/${slug}/`,
      'monthly',
      slug.endsWith('-a-tasquena') || slug.endsWith('-a-tren-ligero-estadio-azteca') ? 0.85 : 0.7
    )
  );
}

function getRoutesGdlUrls() {
  return generateCityRoutes('gdl').map(slug =>
    entry(
      `/gdl/ruta/${slug}/`,
      'monthly',
      slug.endsWith('-a-estadio-chivas') ? 0.85 : 0.65
    )
  );
}

function getRoutesOtherUrls() {
  const cityConfigs = [
    { city: 'mty', prefix: '/mty/ruta/', priority: 0.65, boostSuffix: '-a-exposicion', boostPriority: 0.85 },
    { city: 'puebla', prefix: '/puebla/ruta/', priority: 0.6 },
    { city: 'merida', prefix: '/merida/ruta/', priority: 0.6 },
    { city: 'leon', prefix: '/leon/ruta/', priority: 0.6 },
    { city: 'chihuahua', prefix: '/chihuahua/ruta/', priority: 0.55 },
    { city: 'tijuana', prefix: '/tijuana/ruta/', priority: 0.55 },
    { city: 'queretaro', prefix: '/queretaro/ruta/', priority: 0.6 },
    { city: 'toluca', prefix: '/toluca/ruta/', priority: 0.55 },
    { city: 'tren-maya', prefix: '/tren-maya/ruta/', priority: 0.6 },
    { city: 'oaxaca', prefix: '/oaxaca/ruta/', priority: 0.6 },
    { city: 'morelia', prefix: '/morelia/ruta/', priority: 0.6 },
    { city: 'veracruz', prefix: '/veracruz/ruta/', priority: 0.6 },
    { city: 'campeche', prefix: '/campeche/ruta/', priority: 0.6 },
    { city: 'villahermosa', prefix: '/villahermosa/ruta/', priority: 0.6 },
  ];

  const urls = [];
  for (const cfg of cityConfigs) {
    const routes = generateCityRoutes(cfg.city);
    for (const slug of routes) {
      const p = (cfg.boostSuffix && slug.endsWith(cfg.boostSuffix)) ? cfg.boostPriority : cfg.priority;
      urls.push(entry(`${cfg.prefix}${slug}/`, 'monthly', p));
    }
  }
  return urls;
}

// --- Main export ---

export default async function sitemap({ id }) {
  switch (id) {
    case 0: return getCoreUrls();
    case 1: return getCitiesUrls();
    case 2: return getTurismoUrls();
    case 3: return getTransportUrls();
    case 4: return getMundialUrls();
    case 5: return getI18nUrls();
    case 6: return getRoutesCdmxUrls();
    case 7: return getRoutesGdlUrls();
    case 8: return getRoutesOtherUrls();
    default: return [];
  }
}
