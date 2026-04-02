/**
 * cities-config.js — Central configuration for all MetroGuia cities
 * Maps cities with metadata for routing, language defaults, and FIFA 2026 info
 * Supports: Mexico (MX), United States (US), Canada (CA)
 */

export const CITIES_CONFIG = {
  // ============================================================================
  // MEXICO — 3 FIFA 2026 host cities
  // ============================================================================
  cdmx: {
    slug: 'cdmx',
    name: 'Mexico City',
    nameES: 'Ciudad de México',
    country: 'MX',
    state: 'Mexico City',
    currency: 'MXN',
    defaultLang: 'es',
    systems: ['metro', 'metrobus', 'tren-ligero', 'tren-suburbano', 'mexicable', 'trolebus'],
    fifa2026: true,
    stadium: 'Azteca Stadium',
    stadiumSlug: 'estadio-azteca',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    timezone: 'America/Mexico_City',
  },
  gdl: {
    slug: 'gdl',
    name: 'Guadalajara',
    nameES: 'Guadalajara',
    country: 'MX',
    state: 'Jalisco',
    currency: 'MXN',
    defaultLang: 'es',
    systems: ['tren-ligero', 'mi-macro'],
    fifa2026: true,
    stadium: 'Akron Stadium',
    stadiumSlug: 'estadio-akron',
    coordinates: { lat: 20.6595, lng: -103.3494 },
    timezone: 'America/Mexico_City',
  },
  mty: {
    slug: 'mty',
    name: 'Monterrey',
    nameES: 'Monterrey',
    country: 'MX',
    state: 'Nuevo León',
    currency: 'MXN',
    defaultLang: 'es',
    systems: ['metrorrey', 'ecovia'],
    fifa2026: true,
    stadium: 'BBVA Stadium',
    stadiumSlug: 'estadio-bbva',
    coordinates: { lat: 25.6866, lng: -100.3161 },
    timezone: 'America/Mexico_City',
  },

  // ============================================================================
  // UNITED STATES — Major transit cities
  // ============================================================================
  nyc: {
    slug: 'nyc',
    name: 'New York City',
    nameES: 'Nueva York',
    country: 'US',
    state: 'New York',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['mta-subway', 'nj-transit'],
    fifa2026: false,
    coordinates: { lat: 40.7128, lng: -74.0060 },
    timezone: 'America/New_York',
  },
  'los-angeles': {
    slug: 'los-angeles',
    name: 'Los Angeles',
    nameES: 'Los Ángeles',
    country: 'US',
    state: 'California',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['metro-la', 'metro-bus'],
    fifa2026: false,
    coordinates: { lat: 34.0522, lng: -118.2437 },
    timezone: 'America/Los_Angeles',
  },
  houston: {
    slug: 'houston',
    name: 'Houston',
    nameES: 'Houston',
    country: 'US',
    state: 'Texas',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['metro-houston'],
    fifa2026: false,
    coordinates: { lat: 29.7604, lng: -95.3698 },
    timezone: 'America/Chicago',
  },
  atlanta: {
    slug: 'atlanta',
    name: 'Atlanta',
    nameES: 'Atlanta',
    country: 'US',
    state: 'Georgia',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['marta'],
    fifa2026: false,
    coordinates: { lat: 33.7490, lng: -84.3880 },
    timezone: 'America/New_York',
  },
  philadelphia: {
    slug: 'philadelphia',
    name: 'Philadelphia',
    nameES: 'Filadelfia',
    country: 'US',
    state: 'Pennsylvania',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['septa', 'regional-rail'],
    fifa2026: false,
    coordinates: { lat: 39.9526, lng: -75.1652 },
    timezone: 'America/New_York',
  },
  seattle: {
    slug: 'seattle',
    name: 'Seattle',
    nameES: 'Seattle',
    country: 'US',
    state: 'Washington',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['light-rail', 'king-county-metro'],
    fifa2026: false,
    coordinates: { lat: 47.6062, lng: -122.3321 },
    timezone: 'America/Los_Angeles',
  },
  'san-francisco': {
    slug: 'san-francisco',
    name: 'San Francisco',
    nameES: 'San Francisco',
    country: 'US',
    state: 'California',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['bart', 'muni'],
    fifa2026: false,
    coordinates: { lat: 37.7749, lng: -122.4194 },
    timezone: 'America/Los_Angeles',
  },
  boston: {
    slug: 'boston',
    name: 'Boston',
    nameES: 'Boston',
    country: 'US',
    state: 'Massachusetts',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['mbta', 'red-line', 'blue-line'],
    fifa2026: false,
    coordinates: { lat: 42.3601, lng: -71.0589 },
    timezone: 'America/New_York',
  },
  miami: {
    slug: 'miami',
    name: 'Miami',
    nameES: 'Miami',
    country: 'US',
    state: 'Florida',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['metromover', 'tri-rail'],
    fifa2026: false,
    coordinates: { lat: 25.7617, lng: -80.1918 },
    timezone: 'America/New_York',
  },
  dallas: {
    slug: 'dallas',
    name: 'Dallas',
    nameES: 'Dallas',
    country: 'US',
    state: 'Texas',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['dart-rail'],
    fifa2026: false,
    coordinates: { lat: 32.7767, lng: -96.7970 },
    timezone: 'America/Chicago',
  },
  'kansas-city': {
    slug: 'kansas-city',
    name: 'Kansas City',
    nameES: 'Kansas City',
    country: 'US',
    state: 'Missouri',
    currency: 'USD',
    defaultLang: 'en',
    systems: ['metro-kc'],
    fifa2026: false,
    coordinates: { lat: 39.0997, lng: -94.5786 },
    timezone: 'America/Chicago',
  },

  // ============================================================================
  // CANADA — Major transit cities
  // ============================================================================
  toronto: {
    slug: 'toronto',
    name: 'Toronto',
    nameES: 'Toronto',
    country: 'CA',
    state: 'Ontario',
    currency: 'CAD',
    defaultLang: 'en',
    systems: ['ttc-subway', 'go-transit'],
    fifa2026: false,
    coordinates: { lat: 43.6532, lng: -79.3832 },
    timezone: 'America/Toronto',
  },
  vancouver: {
    slug: 'vancouver',
    name: 'Vancouver',
    nameES: 'Vancouver',
    country: 'CA',
    state: 'British Columbia',
    currency: 'CAD',
    defaultLang: 'en',
    systems: ['skytrain', 'canada-line'],
    fifa2026: false,
    coordinates: { lat: 49.2827, lng: -123.1207 },
    timezone: 'America/Vancouver',
  },
};

/**
 * Get a city config by slug
 * @param {string} slug - City slug (e.g., 'cdmx', 'nyc', 'toronto')
 * @returns {Object|null} City config or null if not found
 */
export function getCityConfig(slug) {
  return CITIES_CONFIG[slug] || null;
}

/**
 * Get all cities for a specific country
 * @param {string} country - Country code: 'MX' | 'US' | 'CA'
 * @returns {Object[]} Array of city configs
 */
export function getCitiesByCountry(country) {
  return Object.values(CITIES_CONFIG).filter(city => city.country === country);
}

/**
 * Get all FIFA 2026 host cities
 * @returns {Object[]} Array of FIFA 2026 city configs
 */
export function getFIFA2026Cities() {
  return Object.values(CITIES_CONFIG).filter(city => city.fifa2026);
}

/**
 * Get all cities sorted by country
 * @returns {Object} { MX: [...], US: [...], CA: [...] }
 */
export function getCitiesByCountryGrouped() {
  const grouped = { MX: [], US: [], CA: [] };
  Object.values(CITIES_CONFIG).forEach(city => {
    if (grouped[city.country]) {
      grouped[city.country].push(city);
    }
  });
  return grouped;
}
