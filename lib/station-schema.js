/**
 * Shared Schema.org JSON-LD builders for estación pages.
 *
 * Used across CDMX + every regional/international city page so we don't
 * drift into 28 slightly-different shapes. Keep functions pure (no React,
 * no Next.js imports) so server components can call them at render time
 * and the bundler tree-shakes correctly.
 *
 * Coverage:
 *   - SubwayStation / TrainStation / TransitStation multi-type for the
 *     station node itself (broadest search-engine compatibility).
 *   - TouristAttraction nodes for nearby POIs — primary FIFA 2026 SEO play.
 *   - Helper to map our internal POI tipo → Schema.org additionalType.
 */

const POI_ADDITIONAL_TYPE = {
  museo: 'Museum',
  parque: 'Park',
  religioso: 'PlaceOfWorship',
  cultural: 'PerformingArtsTheater',
  restaurante: 'Restaurant',
  hospedaje: 'LodgingBusiness',
  comercio: 'ShoppingCenter',
  transporte: 'CivicStructure',
  estadio: 'StadiumOrArena',
  monumento: 'LandmarksOrHistoricalBuildings',
};

/**
 * @param {Object} estacion - station data (must have nombre + slug)
 * @param {Object} [opts]
 * @param {string} [opts.urlBase='https://metroguia.mx'] - canonical origin
 * @param {string} [opts.cityPath=''] - URL segment between origin and /estacion/, e.g. 'gdl/'
 * @param {string} [opts.linePath=''] - URL segment for /linea/, e.g. 'gdl/'
 * @param {string} [opts.cityName='Ciudad de México'] - human-readable city
 * @param {string} [opts.region] - addressRegion (alcaldía/colonia/state)
 * @param {string} [opts.country='MX'] - ISO 3166 country code
 * @param {string} [opts.transportMode='Subway'] - hint for Schema parsers
 * @param {string|number} [opts.linea] - line ID (string or number) for containedInPlace
 * @param {string} [opts.lineLabel] - human-readable line label, e.g. 'Línea 1 del Metro'
 * @param {Array<{dayOfWeek: string|string[], opens: string, closes: string}>} [opts.hours] - opening hours
 */
export function buildStationSchema(estacion, opts = {}) {
  const {
    urlBase = 'https://metroguia.mx',
    cityPath = '',
    linePath = '',
    cityName = 'Ciudad de México',
    region,
    country = 'MX',
    linea,
    lineLabel,
    hours,
  } = opts;

  const slug = estacion.slug;
  const cityPrefix = cityPath ? cityPath.replace(/^\/+|\/+$/g, '') + '/' : '';
  const linePrefix = linePath ? linePath.replace(/^\/+|\/+$/g, '') + '/' : cityPrefix;

  const url = `${urlBase}/${cityPrefix}estacion/${slug}/`;
  const lineUrl = linea != null ? `${urlBase}/${linePrefix}linea/${linea}/` : undefined;

  const node = {
    '@context': 'https://schema.org',
    '@type': ['SubwayStation', 'TrainStation', 'TransitStation'],
    name: estacion.nombre ? `Estación ${estacion.nombre}` : `Estación ${slug}`,
    description: estacion.meta_description || estacion.descripcion_turistica || undefined,
    url,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: region || estacion.alcaldia || estacion.colonia || estacion.zona || undefined,
      addressCountry: country,
    },
  };

  if (lineLabel || lineUrl) {
    node.containedInPlace = {
      '@type': 'CivicStructure',
      name: lineLabel || `Línea ${linea}`,
      url: lineUrl,
    };
  }

  if (estacion.lat != null && estacion.lng != null) {
    node.geo = {
      '@type': 'GeoCoordinates',
      latitude: estacion.lat,
      longitude: estacion.lng,
    };
  }

  if (hours && hours.length > 0) {
    node.openingHoursSpecification = hours.map(function (h) {
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.dayOfWeek,
        opens: h.opens,
        closes: h.closes,
      };
    });
  }

  if (lineUrl) node.hasMap = lineUrl;

  // Strip undefineds so the JSON-LD validator stays clean.
  Object.keys(node).forEach(function (k) {
    if (node[k] === undefined) delete node[k];
  });
  if (node.address) {
    Object.keys(node.address).forEach(function (k) {
      if (node.address[k] === undefined) delete node.address[k];
    });
  }
  return node;
}

/**
 * Build TouristAttraction nodes for an estación's POIs (max 6 by default).
 * Each node references its parent station so Google can connect them.
 *
 * @param {Object} estacion
 * @param {Object} [opts] - same as buildStationSchema
 * @param {number} [opts.limit=6]
 * @returns {Array<Object>} JSON-LD nodes — emit each as its own <script>.
 */
export function buildTouristAttractions(estacion, opts = {}) {
  const { urlBase = 'https://metroguia.mx', cityPath = '', limit = 6 } = opts;
  const pois = Array.isArray(estacion.pois) ? estacion.pois : [];
  if (pois.length === 0) return [];

  const cityPrefix = cityPath ? cityPath.replace(/^\/+|\/+$/g, '') + '/' : '';
  const stationUrl = `${urlBase}/${cityPrefix}estacion/${estacion.slug}/`;

  return pois.slice(0, limit).map(function (poi) {
    const additionalType = POI_ADDITIONAL_TYPE[poi.tipo];
    const node = {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: poi.nombre,
      touristType: ['Public Transit Riders', 'International Visitors'],
      isAccessibleForFree: poi.tipo !== 'museo' && poi.tipo !== 'cultural' ? true : undefined,
      publicAccess: true,
      additionalType: additionalType ? `https://schema.org/${additionalType}` : undefined,
      containedInPlace: {
        '@type': 'Place',
        name: estacion.nombre ? `Estación ${estacion.nombre}` : `Estación ${estacion.slug}`,
        url: stationUrl,
      },
      geo: estacion.lat != null && estacion.lng != null
        ? { '@type': 'GeoCoordinates', latitude: estacion.lat, longitude: estacion.lng }
        : undefined,
    };
    Object.keys(node).forEach(function (k) {
      if (node[k] === undefined) delete node[k];
    });
    return node;
  });
}

/**
 * Convenience: ready-to-emit array of `<script type="application/ld+json">…</script>`
 * payloads. Each entry is just the JSON string — render with
 *   {payloads.map((p, i) => <script key={i} type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: p }} />)}
 *
 * Skips empty arrays so the JSX stays clean.
 */
export function buildAllStationLdPayloads(estacion, opts = {}) {
  const station = buildStationSchema(estacion, opts);
  const attractions = buildTouristAttractions(estacion, opts);
  const result = [JSON.stringify(station)];
  for (const a of attractions) result.push(JSON.stringify(a));
  return result;
}
