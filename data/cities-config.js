/**
 * cities-config.js — Configuración central de las 16 ciudades mexicanas de MetroGuia
 * (rebuild v2 — "solo transporte", sin FIFA, sin i18n multi-idioma, MX-only)
 *
 * `tiemposReales` — regla de honestidad de tiempos (REBUILD_SPEC.md):
 *   true  → el grafo tiene tiempos por tramo verificados/con variación real.
 *           Las páginas de ruta PUEDEN mostrar un total en minutos ("~14 min").
 *   false → el grafo usa tiempos placeholder uniformes (GDL ~80% placeholder,
 *           MTY ~92%). Las páginas de ruta NUNCA deben mostrar un total en
 *           minutos derivado del grafo — solo # estaciones, # transbordos y
 *           el aviso "tiempo estimado no disponible".
 *
 * `fechaVerificacion` — fecha (ISO, YYYY-MM-DD) del último commit que tocó los
 *   datos de transporte de la ciudad (`data/<ciudad>/grafo.js` o equivalente),
 *   derivada de `git log`. Se usa para el sello "Datos verificados" del Footer.
 *   No es una fecha de auditoría manual — es la fecha real del dato en git.
 */

export const CITIES_CONFIG = {
  // ============================================================================
  // Sedes FIFA 2026 (solo como dato de contexto de infraestructura — el sitio
  // NO cubre contenido del Mundial; ver REBUILD_SPEC.md §Objetivo)
  // ============================================================================
  cdmx: {
    slug: 'cdmx',
    name: 'Ciudad de México',
    nameCorta: 'CDMX',
    country: 'MX',
    state: 'Ciudad de México',
    currency: 'MXN',
    systems: ['metro', 'metrobus', 'tren-ligero', 'tren-suburbano', 'mexicable', 'trolebus'],
    coordinates: { lat: 19.4326, lng: -99.1332 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-05-31',
  },
  gdl: {
    slug: 'gdl',
    name: 'Guadalajara',
    nameCorta: 'GDL',
    country: 'MX',
    state: 'Jalisco',
    currency: 'MXN',
    systems: ['tren-ligero', 'mi-macro'],
    coordinates: { lat: 20.6595, lng: -103.3494 },
    timezone: 'America/Mexico_City',
    tiemposReales: false,
    fechaVerificacion: '2026-03-31',
  },
  mty: {
    slug: 'mty',
    name: 'Monterrey',
    nameCorta: 'MTY',
    country: 'MX',
    state: 'Nuevo León',
    currency: 'MXN',
    systems: ['metrorrey', 'ecovia'],
    coordinates: { lat: 25.6866, lng: -100.3161 },
    timezone: 'America/Mexico_City',
    tiemposReales: false,
    fechaVerificacion: '2026-03-31',
  },

  // ============================================================================
  // 13 ciudades chicas — tiempos con variación real (ver nota arriba)
  // ============================================================================
  campeche: {
    slug: 'campeche',
    name: 'Campeche',
    nameCorta: 'Campeche',
    country: 'MX',
    state: 'Campeche',
    currency: 'MXN',
    systems: ['tren-ligero', 'tren-maya'],
    coordinates: { lat: 19.8301, lng: -90.5349 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  chihuahua: {
    slug: 'chihuahua',
    name: 'Chihuahua',
    nameCorta: 'Chihuahua',
    country: 'MX',
    state: 'Chihuahua',
    currency: 'MXN',
    systems: ['chepe-express'],
    coordinates: { lat: 28.6353, lng: -106.0889 },
    timezone: 'America/Chihuahua',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  leon: {
    slug: 'leon',
    name: 'León',
    nameCorta: 'León',
    country: 'MX',
    state: 'Guanajuato',
    currency: 'MXN',
    systems: ['optibus'],
    coordinates: { lat: 21.1250, lng: -101.6860 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  merida: {
    slug: 'merida',
    name: 'Mérida',
    nameCorta: 'Mérida',
    country: 'MX',
    state: 'Yucatán',
    currency: 'MXN',
    systems: ['sit-merida'],
    coordinates: { lat: 20.9674, lng: -89.5926 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  morelia: {
    slug: 'morelia',
    name: 'Morelia',
    nameCorta: 'Morelia',
    country: 'MX',
    state: 'Michoacán',
    currency: 'MXN',
    systems: ['teleferico'],
    coordinates: { lat: 19.7008, lng: -101.1844 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  oaxaca: {
    slug: 'oaxaca',
    name: 'Oaxaca de Juárez',
    nameCorta: 'Oaxaca',
    country: 'MX',
    state: 'Oaxaca',
    currency: 'MXN',
    systems: ['circuito-turistico'],
    coordinates: { lat: 17.0732, lng: -96.7266 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  puebla: {
    slug: 'puebla',
    name: 'Puebla',
    nameCorta: 'Puebla',
    country: 'MX',
    state: 'Puebla',
    currency: 'MXN',
    systems: ['ruta'],
    coordinates: { lat: 19.0414, lng: -98.2063 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  queretaro: {
    slug: 'queretaro',
    name: 'Querétaro',
    nameCorta: 'Querétaro',
    country: 'MX',
    state: 'Querétaro',
    currency: 'MXN',
    systems: ['qbus'],
    coordinates: { lat: 20.5888, lng: -100.3899 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  tijuana: {
    slug: 'tijuana',
    name: 'Tijuana',
    nameCorta: 'Tijuana',
    country: 'MX',
    state: 'Baja California',
    currency: 'MXN',
    systems: ['sitt'],
    coordinates: { lat: 32.5149, lng: -117.0382 },
    timezone: 'America/Tijuana',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  toluca: {
    slug: 'toluca',
    name: 'Toluca',
    nameCorta: 'Toluca',
    country: 'MX',
    state: 'Estado de México',
    currency: 'MXN',
    systems: ['tren-interurbano'],
    coordinates: { lat: 19.2926, lng: -99.6568 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  'tren-maya': {
    slug: 'tren-maya',
    name: 'Tren Maya',
    nameCorta: 'Tren Maya',
    country: 'MX',
    // Corredor ferroviario multi-estado (Chiapas, Tabasco, Campeche, Yucatán,
    // Quintana Roo) — no es una sola ciudad, por eso no tiene "state" ni
    // coordinates de un único punto (evitar dato inventado/engañoso).
    state: 'Sureste de México (multi-estado)',
    currency: 'MXN',
    systems: ['tren-maya'],
    coordinates: null,
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  veracruz: {
    slug: 'veracruz',
    name: 'Veracruz',
    nameCorta: 'Veracruz',
    country: 'MX',
    state: 'Veracruz',
    currency: 'MXN',
    systems: ['autobus-turistico'],
    coordinates: { lat: 19.1738, lng: -96.1342 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
  villahermosa: {
    slug: 'villahermosa',
    name: 'Villahermosa',
    nameCorta: 'Villahermosa',
    country: 'MX',
    state: 'Tabasco',
    currency: 'MXN',
    systems: ['autobus-urbano'],
    coordinates: { lat: 17.9895, lng: -92.9475 },
    timezone: 'America/Mexico_City',
    tiemposReales: true,
    fechaVerificacion: '2026-04-03',
  },
};

/**
 * Get a city config by slug
 * @param {string} slug - City slug (e.g., 'cdmx', 'gdl', 'campeche')
 * @returns {Object|null} City config or null if not found
 */
export function getCityConfig(slug) {
  return CITIES_CONFIG[slug] || null;
}

/**
 * All 16 city configs, in the order declared above.
 * @returns {Object[]}
 */
export function getAllCities() {
  return Object.values(CITIES_CONFIG);
}

/**
 * Slugs of the 16 MX cities (derivado de CITIES_CONFIG — no hardcodear en otro lado).
 * @returns {string[]}
 */
export function getAllCitySlugs() {
  return Object.keys(CITIES_CONFIG);
}
