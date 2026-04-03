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

// Import station data for US/CA cities
import { estacionesNYC } from '@/data/nyc/estaciones';
import { estacionesLA } from '@/data/los-angeles/estaciones';
import { estacionesHOU } from '@/data/houston/estaciones';
import { estacionesAtlanta } from '@/data/atlanta/estaciones';
import { estacionesPhiladelphia } from '@/data/philadelphia/estaciones';
import { estacionesSeattle } from '@/data/seattle/estaciones';
import { estacionesSF } from '@/data/san-francisco/estaciones';
import { estacionesBoston } from '@/data/boston/estaciones';
import { estacionesMiami } from '@/data/miami/estaciones';
import { estacionesDallas } from '@/data/dallas/estaciones';
import { estacionesKansasCity } from '@/data/kansas-city/estaciones';
import { estacionesToronto } from '@/data/toronto/estaciones';
import { estacionesVancouver } from '@/data/vancouver/estaciones';
import { estacionesPortland } from '@/data/portland/estaciones';
import { estacionesSacramento } from '@/data/sacramento/estaciones';
import { estacionesDenver } from '@/data/denver/estaciones';
import { estacionesSaltLakeCity } from '@/data/salt-lake-city/estaciones';
import { estacionesDC } from '@/data/washington-dc/estaciones';
import { estacionesChicago } from '@/data/chicago/estaciones';
import { estacionesSanDiego } from '@/data/san-diego/estaciones';
import { estacionesMinneapolis } from '@/data/minneapolis/estaciones';
import { estacionesPittsburgh } from '@/data/pittsburgh/estaciones';
import { estacionesBaltimore } from '@/data/baltimore/estaciones';
import { estacionesCharlotte } from '@/data/charlotte/estaciones';
import { estacionesPhoenix } from '@/data/phoenix/estaciones';
import { estacionesStLouis } from '@/data/st-louis/estaciones';
import { estacionesMontreal } from '@/data/montreal/estaciones';
import { estacionesCalgary } from '@/data/calgary/estaciones';
import { estacionesEdmonton } from '@/data/edmonton/estaciones';
import { estacionesOttawa } from '@/data/ottawa/estaciones';
import { estacionesDetroit } from '@/data/detroit/estaciones';
import { estacionesCleveland } from '@/data/cleveland/estaciones';
import { estacionesLasVegas } from '@/data/las-vegas/estaciones';
import { estacionesSanJose } from '@/data/san-jose/estaciones';
import { estacionesNewOrleans } from '@/data/new-orleans/estaciones';
import { estacionesBuffalo } from '@/data/buffalo/estaciones';
import { estacionesHonolulu } from '@/data/honolulu/estaciones';
import { estacionesNorfolk } from '@/data/norfolk/estaciones';
import { estacionesJacksonville } from '@/data/jacksonville/estaciones';
import { estacionesAustin } from '@/data/austin/estaciones';
import { estacionesCincinnati } from '@/data/cincinnati/estaciones';
import { estacionesElPaso } from '@/data/el-paso/estaciones';
import { estacionesOrlando } from '@/data/orlando/estaciones';
import { estacionesSanJuan } from '@/data/san-juan/estaciones';
import { estacionesTampa } from '@/data/tampa/estaciones';
import { estacionesTucson } from '@/data/tucson/estaciones';
import { estacionesOklahomaCity } from '@/data/oklahoma-city/estaciones';
import { estacionesNashville } from '@/data/nashville/estaciones';
import { estacionesMilwaukee } from '@/data/milwaukee/estaciones';
import { estacionesNewark } from '@/data/newark/estaciones';
import { estacionesKitchenerWaterloo } from '@/data/kitchener-waterloo/estaciones';
import { estacionesMississauga } from '@/data/mississauga/estaciones';

// Import line data for US/CA cities
import { lineasNYC } from '@/data/nyc/lineas-detalle';
import { lineasLA } from '@/data/los-angeles/lineas-detalle';
import { lineasHOU } from '@/data/houston/lineas-detalle';
import { lineasAtlanta } from '@/data/atlanta/lineas-detalle';
import { lineasPhiladelphia } from '@/data/philadelphia/lineas-detalle';
import { lineasSeattle } from '@/data/seattle/lineas-detalle';
import { lineasSF } from '@/data/san-francisco/lineas-detalle';
import { lineasBoston } from '@/data/boston/lineas-detalle';
import { lineasMiami } from '@/data/miami/lineas-detalle';
import { lineasDallas } from '@/data/dallas/lineas-detalle';
import { lineasKansasCity } from '@/data/kansas-city/lineas-detalle';
import { lineasToronto } from '@/data/toronto/lineas-detalle';
import { lineasVancouver } from '@/data/vancouver/lineas-detalle';
import { lineasPortland } from '@/data/portland/lineas-detalle';
import { lineasSacramento } from '@/data/sacramento/lineas-detalle';
import { lineasDenver } from '@/data/denver/lineas-detalle';
import { lineasSaltLakeCity } from '@/data/salt-lake-city/lineas-detalle';
import { lineasDetalleDC } from '@/data/washington-dc/lineas-detalle';
import { lineasDetalleChicago } from '@/data/chicago/lineas-detalle';
import { lineasDetalleSanDiego } from '@/data/san-diego/lineas-detalle';
import { lineasDetalleMinneapolis } from '@/data/minneapolis/lineas-detalle';
import { lineasDetallePittsburgh } from '@/data/pittsburgh/lineas-detalle';
import { lineasDetalleBaltimore } from '@/data/baltimore/lineas-detalle';
import { lineasDetalleCharlotte } from '@/data/charlotte/lineas-detalle';
import { lineasPhoenix } from '@/data/phoenix/lineas-detalle';
import { lineasStLouis } from '@/data/st-louis/lineas-detalle';
import { lineasMontreal } from '@/data/montreal/lineas-detalle';
import { lineasCalgary } from '@/data/calgary/lineas-detalle';
import { lineasEdmonton } from '@/data/edmonton/lineas-detalle';
import { lineasOttawa } from '@/data/ottawa/lineas-detalle';
import { lineasDetroit } from '@/data/detroit/lineas-detalle';
import { lineasCleveland } from '@/data/cleveland/lineas-detalle';
import { lineasLasVegas } from '@/data/las-vegas/lineas-detalle';
import { lineasSanJose } from '@/data/san-jose/lineas-detalle';
import { lineasNewOrleans } from '@/data/new-orleans/lineas-detalle';
import { lineasBuffalo } from '@/data/buffalo/lineas-detalle';
import { lineasHonolulu } from '@/data/honolulu/lineas-detalle';
import { lineasNorfolk } from '@/data/norfolk/lineas-detalle';
import { lineasJacksonville } from '@/data/jacksonville/lineas-detalle';
import { lineasAustin } from '@/data/austin/lineas-detalle';
import { lineasCincinnati } from '@/data/cincinnati/lineas-detalle';
import { lineasElPaso } from '@/data/el-paso/lineas-detalle';
import { lineasOrlando } from '@/data/orlando/lineas-detalle';
import { lineasSanJuan } from '@/data/san-juan/lineas-detalle';
import { lineasTampa } from '@/data/tampa/lineas-detalle';
import { lineasTucson } from '@/data/tucson/lineas-detalle';
import { lineasOklahomaCity } from '@/data/oklahoma-city/lineas-detalle';
import { lineasNashville } from '@/data/nashville/lineas-detalle';
import { lineasMilwaukee } from '@/data/milwaukee/lineas-detalle';
import { lineasNewark } from '@/data/newark/lineas-detalle';
import { lineasKitchenerWaterloo } from '@/data/kitchener-waterloo/lineas-detalle';
import { lineasMississauga } from '@/data/mississauga/lineas-detalle';

// US/CA zone (neighborhood) data
import { zonasUSCA } from '@/data/zonas-us-ca';

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
// Sitemap Index — splits 80K+ URLs into child sitemaps under 50K each
// ============================================================================
// ID 0: core        — home, guides, hubs, zonas, privacy (~55 URLs)
// ID 1: cities      — stations + lines for all 29 cities (~1,200 URLs)
// ID 2: turismo     — 8 SECTUR programs + detail pages (~541 URLs)
// ID 3: transport   — CDMX aux transit, aeropuertos, terminales, ecovía, macrobús (~374 URLs)
// ID 4: mundial     — FIFA 2026 hub + matches + city pages (~20 URLs)
// ID 5: i18n        — 6 languages × key pages (~4,020 URLs)
// ID 6: routes-cdmx — CDMX route pages (~24,180 URLs)
// ID 7: routes-gdl  — GDL route pages (~15,500 URLs)
// ID 8: routes-mx   — MTY + 14 MX cities route pages (~9,300 URLs)
// ID 9: routes-usca — 13 US/CA cities route pages (~8,500 URLs)
// ============================================================================

const BASE_URL = 'https://metroguia.mx';

const LASTMOD = {
  core: new Date('2026-04-02'),
  cities: new Date('2026-04-02'),
  turismo: new Date('2026-03-30'),
  transport: new Date('2026-04-01'),
  mundial: new Date('2026-04-01'),
  i18n: new Date('2026-04-02'),
  'routes-cdmx': new Date('2026-03-30'),
  'routes-gdl': new Date('2026-03-30'),
  'routes-mx': new Date('2026-03-30'),
  'routes-usca': new Date('2026-04-02'),
};

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
    { id: 8 },  // routes-mx
    { id: 9 },  // routes-usca
  ];
}

// --- Helpers ---

function entry(path, changeFrequency, priority, category) {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: category ? LASTMOD[category] : new Date(),
    changeFrequency,
    priority,
  };
}

// Entry without hreflang alternates in sitemap (use HTML metadata instead)
// NOTE: hreflang in sitemap can cause duplicate detection. Instead, use:
// - HTML metadata (Next.js alternates.languages in buildMetadata)
// - HrefLangTags.jsx for client-side injection
function i18nEntry(basePath, changeFrequency, priority, category, lang) {
  const url = lang === 'es'
    ? `${BASE_URL}${basePath}`
    : `${BASE_URL}/${lang}${basePath}`;

  return {
    url,
    lastModified: category ? LASTMOD[category] : new Date(),
    changeFrequency,
    priority,
    // NO alternates in sitemap — use HTML metadata instead
  };
}

function mapEstaciones(list, ciudad, category) {
  return (list || []).map((e) =>
    entry(
      ciudad ? `/${ciudad}/estacion/${e.slug}/` : `/estacion/${e.slug}/`,
      'monthly',
      0.8,
      category
    )
  );
}

function mapLineas(list, ciudad, category) {
  return (list || []).map((l) =>
    entry(
      ciudad ? `/${ciudad}/linea/${l.id}/` : `/linea/${l.id}/`,
      'monthly',
      0.9,
      category
    )
  );
}

// US/CA helper: use "station" and "line" instead of "estacion"/"linea"
function mapEstacionesUSCA(list, ciudad, category) {
  return (list || []).map((e) =>
    entry(
      `/${ciudad}/station/${e.slug}/`,
      'monthly',
      0.8,
      category
    )
  );
}

function mapLineasUSCA(list, ciudad, category) {
  return (list || []).map((l) =>
    entry(
      `/${ciudad}/line/${l.id}/`,
      'monthly',
      0.9,
      category
    )
  );
}

// --- Child sitemap generators ---

function getCoreUrls() {
  return [
    entry('/', 'weekly', 1.0, 'core'),
    entry('/lineas/', 'monthly', 0.9, 'core'),
    entry('/rutas/', 'monthly', 0.8, 'core'),
    entry('/guides/', 'monthly', 0.9, 'core'),
    entry('/guides/airport-to-metro/', 'monthly', 0.9, 'core'),
    entry('/guides/visitor-guide/', 'monthly', 0.9, 'core'),
    entry('/hospedaje/', 'monthly', 0.8, 'core'),
    entry('/explorar/', 'weekly', 0.8, 'core'),
    entry('/zona/', 'monthly', 0.8, 'core'),
    entry('/ruta/calc/', 'weekly', 0.8, 'core'),
    entry('/privacy-policy/', 'yearly', 0.3, 'core'),
    // Mexico city hub pages
    ...['cdmx','gdl','mty','puebla','merida','leon','chihuahua','tijuana',
        'toluca','queretaro','tren-maya','oaxaca','morelia','veracruz',
        'campeche','villahermosa'].map(c => entry(`/${c}/`, 'weekly', 0.9, 'core')),
    // US/CA city hub pages
    ...['nyc','los-angeles','houston','atlanta','philadelphia','seattle',
        'san-francisco','boston','miami','dallas','kansas-city','denver','salt-lake-city',
        'washington-dc','chicago','san-diego','minneapolis','pittsburgh','baltimore',
        'charlotte','phoenix','st-louis','toronto','vancouver','portland','sacramento',
        'montreal','calgary','edmonton','ottawa',
        'detroit','cleveland','las-vegas','san-jose','new-orleans','buffalo','honolulu','norfolk',
        'jacksonville','austin','cincinnati','el-paso','orlando','san-juan','tampa','tucson',
        'oklahoma-city','nashville','milwaukee','newark','kitchener-waterloo','mississauga'].map(c =>
        entry(`/${c}/`, 'weekly', 0.85, 'core')),
    // Zonas (MX neighborhoods)
    ...(zonas || []).map((z) => entry(`/zona/${z.slug}/`, 'monthly', 0.8, 'core')),
    // Zone (US/CA neighborhoods)
    entry('/zone/', 'weekly', 0.85, 'core'),
    ...(zonasUSCA || []).map((z) => entry(`/zone/${z.slug}/`, 'monthly', 0.8, 'core')),
  ];
}

function getCitiesUrls() {
  const urls = [
    // CDMX stations + lines
    ...mapEstaciones(estaciones, null, 'cities'),
    ...Object.values(lineasDetalle || {}).map((l) => entry(`/linea/${l.id}/`, 'monthly', 0.9, 'cities')),
    // GDL
    ...mapEstaciones(estacionesGDL, 'gdl', 'cities'),
    ...mapLineas(lineasGDL, 'gdl', 'cities'),
    // MTY
    ...mapEstaciones(estacionesMTY, 'mty', 'cities'),
    ...mapLineas(lineasMTY, 'mty', 'cities'),
    // Puebla
    ...mapEstaciones(estacionesPuebla, 'puebla', 'cities'),
    ...mapLineas(lineasPuebla, 'puebla', 'cities'),
    // Mérida
    ...mapEstaciones(estacionesMerida, 'merida', 'cities'),
    ...mapLineas(lineasMerida, 'merida', 'cities'),
    // León
    ...mapEstaciones(estacionesLeon, 'leon', 'cities'),
    ...mapLineas(lineasLeon, 'leon', 'cities'),
    // Chihuahua
    ...mapEstaciones(estacionesChihuahua, 'chihuahua', 'cities'),
    ...mapLineas(lineasChihuahua, 'chihuahua', 'cities'),
    // Tijuana
    ...mapEstaciones(estacionesTijuana, 'tijuana', 'cities'),
    ...mapLineas(lineasTijuana, 'tijuana', 'cities'),
    // Querétaro
    ...mapEstaciones(estacionesQueretaro, 'queretaro', 'cities'),
    ...mapLineas(lineasQueretaro, 'queretaro', 'cities'),
    // Toluca
    ...mapEstaciones(estacionesToluca, 'toluca', 'cities'),
    ...mapLineas(lineasToluca, 'toluca', 'cities'),
    // Tren Maya
    ...mapEstaciones(estacionesTrenMaya, 'tren-maya', 'cities'),
    ...mapLineas(lineasTrenMaya, 'tren-maya', 'cities'),
    // Oaxaca
    ...mapEstaciones(estacionesOaxaca, 'oaxaca', 'cities'),
    ...mapLineas(lineasOaxaca, 'oaxaca', 'cities'),
    // Morelia
    ...mapEstaciones(estacionesMorelia, 'morelia', 'cities'),
    ...mapLineas(lineasMorelia, 'morelia', 'cities'),
    // Veracruz
    ...mapEstaciones(estacionesVeracruz, 'veracruz', 'cities'),
    ...mapLineas(lineasVeracruz, 'veracruz', 'cities'),
    // Campeche
    ...mapEstaciones(estacionesCampeche, 'campeche', 'cities'),
    ...mapLineas(lineasCampeche, 'campeche', 'cities'),
    // Villahermosa
    ...mapEstaciones(estacionesVillahermosa, 'villahermosa', 'cities'),
    ...mapLineas(lineasVillahermosa, 'villahermosa', 'cities'),
    // NYC
    ...mapEstacionesUSCA(estacionesNYC, 'nyc', 'cities'),
    ...mapLineasUSCA(lineasNYC, 'nyc', 'cities'),
    // Los Angeles
    ...mapEstacionesUSCA(estacionesLA, 'los-angeles', 'cities'),
    ...mapLineasUSCA(lineasLA, 'los-angeles', 'cities'),
    // Houston
    ...mapEstacionesUSCA(estacionesHOU, 'houston', 'cities'),
    ...mapLineasUSCA(lineasHOU, 'houston', 'cities'),
    // Atlanta
    ...mapEstacionesUSCA(estacionesAtlanta, 'atlanta', 'cities'),
    ...mapLineasUSCA(lineasAtlanta, 'atlanta', 'cities'),
    // Philadelphia
    ...mapEstacionesUSCA(estacionesPhiladelphia, 'philadelphia', 'cities'),
    ...mapLineasUSCA(lineasPhiladelphia, 'philadelphia', 'cities'),
    // Seattle
    ...mapEstacionesUSCA(estacionesSeattle, 'seattle', 'cities'),
    ...mapLineasUSCA(lineasSeattle, 'seattle', 'cities'),
    // San Francisco
    ...mapEstacionesUSCA(estacionesSF, 'san-francisco', 'cities'),
    ...mapLineasUSCA(lineasSF, 'san-francisco', 'cities'),
    // Boston
    ...mapEstacionesUSCA(estacionesBoston, 'boston', 'cities'),
    ...mapLineasUSCA(lineasBoston, 'boston', 'cities'),
    // Miami
    ...mapEstacionesUSCA(estacionesMiami, 'miami', 'cities'),
    ...mapLineasUSCA(lineasMiami, 'miami', 'cities'),
    // Dallas
    ...mapEstacionesUSCA(estacionesDallas, 'dallas', 'cities'),
    ...mapLineasUSCA(lineasDallas, 'dallas', 'cities'),
    // Kansas City
    ...mapEstacionesUSCA(estacionesKansasCity, 'kansas-city', 'cities'),
    ...mapLineasUSCA(lineasKansasCity, 'kansas-city', 'cities'),
    // Toronto
    ...mapEstacionesUSCA(estacionesToronto, 'toronto', 'cities'),
    ...mapLineasUSCA(lineasToronto, 'toronto', 'cities'),
    // Vancouver
    ...mapEstacionesUSCA(estacionesVancouver, 'vancouver', 'cities'),
    ...mapLineasUSCA(lineasVancouver, 'vancouver', 'cities'),
    // Portland
    ...mapEstacionesUSCA(estacionesPortland, 'portland', 'cities'),
    ...mapLineasUSCA(lineasPortland, 'portland', 'cities'),
    // Sacramento
    ...mapEstacionesUSCA(estacionesSacramento, 'sacramento', 'cities'),
    ...mapLineasUSCA(lineasSacramento, 'sacramento', 'cities'),
    // Denver
    ...mapEstacionesUSCA(estacionesDenver, 'denver', 'cities'),
    ...mapLineasUSCA(lineasDenver, 'denver', 'cities'),
    // Salt Lake City
    ...mapEstacionesUSCA(estacionesSaltLakeCity, 'salt-lake-city', 'cities'),
    ...mapLineasUSCA(lineasSaltLakeCity, 'salt-lake-city', 'cities'),
    // Washington DC
    ...mapEstacionesUSCA(estacionesDC, 'washington-dc', 'cities'),
    ...mapLineasUSCA(lineasDetalleDC, 'washington-dc', 'cities'),
    // Chicago
    ...mapEstacionesUSCA(estacionesChicago, 'chicago', 'cities'),
    ...mapLineasUSCA(lineasDetalleChicago, 'chicago', 'cities'),
    // San Diego
    ...mapEstacionesUSCA(estacionesSanDiego, 'san-diego', 'cities'),
    ...mapLineasUSCA(lineasDetalleSanDiego, 'san-diego', 'cities'),
    // Minneapolis
    ...mapEstacionesUSCA(estacionesMinneapolis, 'minneapolis', 'cities'),
    ...mapLineasUSCA(lineasDetalleMinneapolis, 'minneapolis', 'cities'),
    // Pittsburgh
    ...mapEstacionesUSCA(estacionesPittsburgh, 'pittsburgh', 'cities'),
    ...mapLineasUSCA(lineasDetallePittsburgh, 'pittsburgh', 'cities'),
    // Baltimore
    ...mapEstacionesUSCA(estacionesBaltimore, 'baltimore', 'cities'),
    ...mapLineasUSCA(lineasDetalleBaltimore, 'baltimore', 'cities'),
    // Charlotte
    ...mapEstacionesUSCA(estacionesCharlotte, 'charlotte', 'cities'),
    ...mapLineasUSCA(lineasDetalleCharlotte, 'charlotte', 'cities'),
    // Phoenix
    ...mapEstacionesUSCA(estacionesPhoenix, 'phoenix', 'cities'),
    ...mapLineasUSCA(lineasPhoenix, 'phoenix', 'cities'),
    // St. Louis
    ...mapEstacionesUSCA(estacionesStLouis, 'st-louis', 'cities'),
    ...mapLineasUSCA(lineasStLouis, 'st-louis', 'cities'),
    // Montreal
    ...mapEstacionesUSCA(estacionesMontreal, 'montreal', 'cities'),
    ...mapLineasUSCA(lineasMontreal, 'montreal', 'cities'),
    // Calgary
    ...mapEstacionesUSCA(estacionesCalgary, 'calgary', 'cities'),
    ...mapLineasUSCA(lineasCalgary, 'calgary', 'cities'),
    // Edmonton
    ...mapEstacionesUSCA(estacionesEdmonton, 'edmonton', 'cities'),
    ...mapLineasUSCA(lineasEdmonton, 'edmonton', 'cities'),
    // Ottawa
    ...mapEstacionesUSCA(estacionesOttawa, 'ottawa', 'cities'),
    ...mapLineasUSCA(lineasOttawa, 'ottawa', 'cities'),
    // Detroit
    ...mapEstacionesUSCA(estacionesDetroit, 'detroit', 'cities'),
    ...mapLineasUSCA(lineasDetroit, 'detroit', 'cities'),
    // Cleveland
    ...mapEstacionesUSCA(estacionesCleveland, 'cleveland', 'cities'),
    ...mapLineasUSCA(lineasCleveland, 'cleveland', 'cities'),
    // Las Vegas
    ...mapEstacionesUSCA(estacionesLasVegas, 'las-vegas', 'cities'),
    ...mapLineasUSCA(lineasLasVegas, 'las-vegas', 'cities'),
    // San Jose
    ...mapEstacionesUSCA(estacionesSanJose, 'san-jose', 'cities'),
    ...mapLineasUSCA(lineasSanJose, 'san-jose', 'cities'),
    // New Orleans
    ...mapEstacionesUSCA(estacionesNewOrleans, 'new-orleans', 'cities'),
    ...mapLineasUSCA(lineasNewOrleans, 'new-orleans', 'cities'),
    // Buffalo
    ...mapEstacionesUSCA(estacionesBuffalo, 'buffalo', 'cities'),
    ...mapLineasUSCA(lineasBuffalo, 'buffalo', 'cities'),
    // Honolulu
    ...mapEstacionesUSCA(estacionesHonolulu, 'honolulu', 'cities'),
    ...mapLineasUSCA(lineasHonolulu, 'honolulu', 'cities'),
    // Norfolk
    ...mapEstacionesUSCA(estacionesNorfolk, 'norfolk', 'cities'),
    ...mapLineasUSCA(lineasNorfolk, 'norfolk', 'cities'),
    // Jacksonville
    ...mapEstacionesUSCA(estacionesJacksonville, 'jacksonville', 'cities'),
    ...mapLineasUSCA(lineasJacksonville, 'jacksonville', 'cities'),
    // Austin
    ...mapEstacionesUSCA(estacionesAustin, 'austin', 'cities'),
    ...mapLineasUSCA(lineasAustin, 'austin', 'cities'),
    // Cincinnati
    ...mapEstacionesUSCA(estacionesCincinnati, 'cincinnati', 'cities'),
    ...mapLineasUSCA(lineasCincinnati, 'cincinnati', 'cities'),
    // El Paso
    ...mapEstacionesUSCA(estacionesElPaso, 'el-paso', 'cities'),
    ...mapLineasUSCA(lineasElPaso, 'el-paso', 'cities'),
    // Orlando
    ...mapEstacionesUSCA(estacionesOrlando, 'orlando', 'cities'),
    ...mapLineasUSCA(lineasOrlando, 'orlando', 'cities'),
    // San Juan
    ...mapEstacionesUSCA(estacionesSanJuan, 'san-juan', 'cities'),
    ...mapLineasUSCA(lineasSanJuan, 'san-juan', 'cities'),
    // Tampa
    ...mapEstacionesUSCA(estacionesTampa, 'tampa', 'cities'),
    ...mapLineasUSCA(lineasTampa, 'tampa', 'cities'),
    // Tucson
    ...mapEstacionesUSCA(estacionesTucson, 'tucson', 'cities'),
    ...mapLineasUSCA(lineasTucson, 'tucson', 'cities'),
    // Oklahoma City
    ...mapEstacionesUSCA(estacionesOklahomaCity, 'oklahoma-city', 'cities'),
    ...mapLineasUSCA(lineasOklahomaCity, 'oklahoma-city', 'cities'),
    // Nashville
    ...mapEstacionesUSCA(estacionesNashville, 'nashville', 'cities'),
    ...mapLineasUSCA(lineasNashville, 'nashville', 'cities'),
    // Milwaukee
    ...mapEstacionesUSCA(estacionesMilwaukee, 'milwaukee', 'cities'),
    ...mapLineasUSCA(lineasMilwaukee, 'milwaukee', 'cities'),
    // Newark
    ...mapEstacionesUSCA(estacionesNewark, 'newark', 'cities'),
    ...mapLineasUSCA(lineasNewark, 'newark', 'cities'),
    // Kitchener-Waterloo
    ...mapEstacionesUSCA(estacionesKitchenerWaterloo, 'kitchener-waterloo', 'cities'),
    ...mapLineasUSCA(lineasKitchenerWaterloo, 'kitchener-waterloo', 'cities'),
    // Mississauga
    ...mapEstacionesUSCA(estacionesMississauga, 'mississauga', 'cities'),
    ...mapLineasUSCA(lineasMississauga, 'mississauga', 'cities'),
  ];
  return urls;
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

  const urls = [entry('/turismo/', 'weekly', 0.9, 'turismo')];
  for (const section of sections) {
    urls.push(entry(`/turismo/${section.slug}/`, 'weekly', 0.85, 'turismo'));
    for (const item of (section.data || [])) {
      urls.push(entry(`/turismo/${section.slug}/${item.slug}/`, 'monthly', 0.7, 'turismo'));
    }
  }
  return urls;
}

function getTransportUrls() {
  return [
    // Trolebús
    entry('/cdmx/trolebus/', 'weekly', 0.8, 'transport'),
    ...Object.keys(trolebusData.lineas).map(id => entry(`/cdmx/trolebus/linea/${id}/`, 'monthly', 0.7, 'transport')),
    ...(trolebusData.estaciones || []).map(e => entry(`/cdmx/trolebus/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
    // Mexicable
    entry('/cdmx/mexicable/', 'weekly', 0.8, 'transport'),
    ...Object.keys(mexicableLineas).map(id => entry(`/cdmx/mexicable/linea/${id}/`, 'monthly', 0.7, 'transport')),
    ...mexicableEstaciones.map(e => entry(`/cdmx/mexicable/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
    // Metrobús
    entry('/cdmx/metrobus/', 'weekly', 0.8, 'transport'),
    ...Object.keys(metrobusLineas).map(id => entry(`/cdmx/metrobus/linea/${id}/`, 'monthly', 0.7, 'transport')),
    ...metrobusEstaciones.map(e => entry(`/cdmx/metrobus/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
    // Cablebús
    entry('/cdmx/cablebus/', 'weekly', 0.8, 'transport'),
    ...Object.keys(cablebusLineas).map(id => entry(`/cdmx/cablebus/linea/${id}/`, 'monthly', 0.7, 'transport')),
    ...cablebusEstaciones.map(e => entry(`/cdmx/cablebus/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
    // Tren Ligero
    entry('/cdmx/tren-ligero/', 'weekly', 0.8, 'transport'),
    ...(trenLigeroData.estaciones || []).map(e => entry(`/cdmx/tren-ligero/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
    // Tren Suburbano
    entry('/cdmx/tren-suburbano/', 'weekly', 0.8, 'transport'),
    ...Object.keys(trenSuburbanoData.lineas).map(id => entry(`/cdmx/tren-suburbano/linea/${id}/`, 'monthly', 0.7, 'transport')),
    ...(trenSuburbanoData.estaciones || []).map(e => entry(`/cdmx/tren-suburbano/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
    // Aeropuertos
    entry('/aeropuertos/', 'monthly', 0.8, 'transport'),
    ...(aeropuertos || []).map(a => entry(`/aeropuertos/${a.slug}/`, 'monthly', 0.7, 'transport')),
    // Terminales
    entry('/terminales/', 'monthly', 0.8, 'transport'),
    ...(terminales || []).map(t => entry(`/terminales/${t.slug}/`, 'monthly', 0.7, 'transport')),
    // Ferries
    entry('/ferries/', 'monthly', 0.7, 'transport'),
    ...(ferrys || []).map(f => entry(`/ferries/${f.slug}/`, 'monthly', 0.6, 'transport')),
    // Cruces fronterizos
    entry('/frontera/', 'monthly', 0.7, 'transport'),
    ...(crucesFronterizos || []).map(c => entry(`/frontera/${c.slug}/`, 'monthly', 0.6, 'transport')),
    // GDL Macrobús
    entry('/gdl/macrobus/', 'weekly', 0.85, 'transport'),
    entry('/gdl/macrobus/linea/MC/', 'monthly', 0.75, 'transport'),
    entry('/gdl/macrobus/linea/MP/', 'monthly', 0.75, 'transport'),
    ...(estacionesGDL || []).filter(e => e.sistema === 'macrobus').map(e =>
      entry(`/gdl/macrobus/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')
    ),
    // MTY Ecovía
    entry('/mty/ecovia/', 'weekly', 0.8, 'transport'),
    ...(estacionesEcovia || []).map(e => entry(`/mty/ecovia/estacion/${e.slug}/`, 'monthly', 0.7, 'transport')),
  ];
}

function getMundialUrls() {
  const urls = [
    entry('/mundial-2026/', 'weekly', 1.0, 'mundial'),
    entry('/mundial-2026/estadio-azteca/', 'monthly', 0.9, 'mundial'),
    entry('/mundial-2026/como-llegar-estadio-azteca/', 'monthly', 0.9, 'mundial'),
    entry('/mundial-2026/transporte-publico-cdmx/', 'monthly', 0.9, 'mundial'),
    entry('/gdl/mundial-2026/', 'monthly', 0.9, 'mundial'),
    entry('/mty/mundial-2026/', 'monthly', 0.9, 'mundial'),
    entry('/mundial-2026/partidos/', 'weekly', 0.9, 'mundial'),
    // USA/Canada city mundial-2026 pages
    ...['nyc','los-angeles','houston','atlanta','philadelphia','seattle',
        'san-francisco','boston','miami','dallas','kansas-city','toronto','vancouver'].map(c =>
        entry(`/${c}/mundial-2026/`, 'monthly', 0.9, 'mundial')),
  ];
  // Individual match pages
  Object.entries(mundial2026.sedes).forEach(([cityKey, sede]) => {
    sede.partidos.forEach((partido) => {
      urls.push(entry(`/mundial-2026/partidos/${cityKey}-${partido.fecha}/`, 'weekly', 0.9, 'mundial'));
    });
  });
  return urls;
}

function getI18nUrls() {
  const languages = ['en', 'pt', 'fr', 'de', 'ja', 'ko'];
  const allLangs = ['es', ...languages];
  const urls = [];

  // Key pages with full hreflang alternates (Spanish + other languages)
  // NOTE: These have alternates in sitemap which enables Google to see all variants
  const keyPages = [
    { path: '/', freq: 'weekly', priority: 0.95 },
    { path: '/cdmx/', freq: 'weekly', priority: 0.9 },
    { path: '/gdl/', freq: 'weekly', priority: 0.9 },
    { path: '/mty/', freq: 'weekly', priority: 0.9 },
    { path: '/mundial-2026/', freq: 'monthly', priority: 0.85 },
  ];

  keyPages.forEach(({ path, freq, priority }) => {
    allLangs.forEach(lang => {
      urls.push(i18nEntry(path, freq, priority, 'i18n', lang));
    });
  });

  // CDMX stations in all languages — all 155 now pre-built via generateStaticParams
  languages.forEach(lang => {
    (estaciones || []).forEach(estacion => {
      urls.push(entry(`/${lang}/cdmx/estacion/${estacion.slug}/`, 'monthly', 0.7, 'i18n'));
    });
  });

  // CDMX lines in all languages — all lines now pre-built via generateStaticParams
  languages.forEach(lang => {
    Object.keys(lineasDetalle).forEach(id => {
      urls.push(entry(`/${lang}/cdmx/linea/${id}/`, 'monthly', 0.7, 'i18n'));
    });
  });

  // US/CA cities: Spanish alternates for hub pages
  // e.g., /es/nyc/, /es/los-angeles/, etc.
  const usCanadaCities = ['nyc','los-angeles','houston','atlanta','philadelphia','seattle',
                          'san-francisco','boston','miami','dallas','kansas-city','toronto','vancouver'];
  usCanadaCities.forEach(city => {
    urls.push(entry(`/es/${city}/`, 'weekly', 0.8, 'i18n'));
  });

  // US/CA 8 new cities: Spanish i18n for stations and lines
  // Add Spanish alternates for station and line detail pages
  const newUSCACities = ['houston','atlanta','philadelphia','seattle','san-francisco','boston','miami','dallas','kansas-city'];
  const estStations = {
    houston: estacionesHOU,
    atlanta: estacionesAtlanta,
    philadelphia: estacionesPhiladelphia,
    seattle: estacionesSeattle,
    'san-francisco': estacionesSF,
    boston: estacionesBoston,
    miami: estacionesMiami,
    dallas: estacionesDallas,
    'kansas-city': estacionesKansasCity,
  };
  const estLines = {
    houston: lineasHOU,
    atlanta: lineasAtlanta,
    philadelphia: lineasPhiladelphia,
    seattle: lineasSeattle,
    'san-francisco': lineasSF,
    boston: lineasBoston,
    miami: lineasMiami,
    dallas: lineasDallas,
    'kansas-city': lineasKansasCity,
  };

  newUSCACities.forEach(city => {
    // Spanish station pages
    (estStations[city] || []).forEach(estacion => {
      urls.push(entry(`/es/${city}/station/${estacion.slug}/`, 'monthly', 0.7, 'i18n'));
    });
    // Spanish line pages
    (estLines[city] || []).forEach(linea => {
      urls.push(entry(`/es/${city}/line/${linea.id}/`, 'monthly', 0.7, 'i18n'));
    });
  });

  // US/CA zone pages: Spanish alternates
  // e.g., /es/zone/, /es/zone/midtown-manhattan/
  urls.push(entry('/es/zone/', 'weekly', 0.8, 'i18n'));
  (zonasUSCA || []).forEach(z => {
    urls.push(entry(`/es/zone/${z.slug}/`, 'monthly', 0.7, 'i18n'));
  });

  // Routes are dynamicParams: true (on-demand ISR), do NOT include in sitemap
  // This prevents duplicate detection since these are served on-demand, not canonical URLs
  // Spanish routes are in routes-cdmx/gdl/other sitemaps with canonical URLs

  return urls;
}

function getRoutesCdmxUrls() {
  return generateCityRoutes('cdmx').map(slug =>
    entry(
      `/ruta/${slug}/`,
      'monthly',
      slug.endsWith('-a-tasquena') || slug.endsWith('-a-tren-ligero-estadio-azteca') ? 0.85 : 0.7,
      'routes-cdmx'
    )
  );
}

function getRoutesGdlUrls() {
  return generateCityRoutes('gdl').map(slug =>
    entry(
      `/gdl/ruta/${slug}/`,
      'monthly',
      slug.endsWith('-a-estadio-chivas') ? 0.85 : 0.65,
      'routes-gdl'
    )
  );
}

function getRoutesMxUrls() {
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
      urls.push(entry(`${cfg.prefix}${slug}/`, 'monthly', p, 'routes-mx'));
    }
  }
  return urls;
}

function getRoutesUSCAUrls() {
  const cityConfigs = [
    { city: 'nyc', prefix: '/nyc/route/', priority: 0.65 },
    { city: 'los-angeles', prefix: '/los-angeles/route/', priority: 0.6 },
    { city: 'houston', prefix: '/houston/route/', priority: 0.6 },
    { city: 'atlanta', prefix: '/atlanta/route/', priority: 0.6 },
    { city: 'philadelphia', prefix: '/philadelphia/route/', priority: 0.6 },
    { city: 'seattle', prefix: '/seattle/route/', priority: 0.6 },
    { city: 'san-francisco', prefix: '/san-francisco/route/', priority: 0.6 },
    { city: 'boston', prefix: '/boston/route/', priority: 0.6 },
    { city: 'miami', prefix: '/miami/route/', priority: 0.6 },
    { city: 'dallas', prefix: '/dallas/route/', priority: 0.55 },
    { city: 'kansas-city', prefix: '/kansas-city/route/', priority: 0.55 },
    { city: 'toronto', prefix: '/toronto/route/', priority: 0.6 },
    { city: 'vancouver', prefix: '/vancouver/route/', priority: 0.6 },
    { city: 'montreal', prefix: '/montreal/route/', priority: 0.6 },
    { city: 'calgary', prefix: '/calgary/route/', priority: 0.55 },
    { city: 'edmonton', prefix: '/edmonton/route/', priority: 0.55 },
    { city: 'ottawa', prefix: '/ottawa/route/', priority: 0.55 },
    { city: 'detroit', prefix: '/detroit/route/', priority: 0.55 },
    { city: 'cleveland', prefix: '/cleveland/route/', priority: 0.55 },
    { city: 'las-vegas', prefix: '/las-vegas/route/', priority: 0.55 },
    { city: 'san-jose', prefix: '/san-jose/route/', priority: 0.55 },
    { city: 'new-orleans', prefix: '/new-orleans/route/', priority: 0.55 },
    { city: 'buffalo', prefix: '/buffalo/route/', priority: 0.5 },
    { city: 'honolulu', prefix: '/honolulu/route/', priority: 0.55 },
    { city: 'norfolk', prefix: '/norfolk/route/', priority: 0.5 },
  ];

  const urls = [];
  for (const cfg of cityConfigs) {
    // Use try-catch defensively: if generateCityRoutes doesn't support US/CA cities yet,
    // gracefully skip them
    try {
      const routes = generateCityRoutes(cfg.city);
      for (const slug of routes) {
        urls.push(entry(`${cfg.prefix}${slug}/`, 'monthly', cfg.priority, 'routes-usca'));
      }
    } catch (err) {
      // City routes not yet available, skip gracefully
      console.warn(`Routes not available for ${cfg.city}`);
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
    case 8: return getRoutesMxUrls();
    case 9: return getRoutesUSCAUrls();
    default: return [];
  }
}