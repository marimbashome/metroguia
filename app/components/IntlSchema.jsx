/**
 * IntlSchema — Schema.org JSON-LD helpers for international city pages.
 *
 * The MX/CDMX pages have their own (richer) schema components. World-cities
 * and US/CA cities use these generic emitters so we don't ship pages without
 * any structured data.
 *
 * Two named exports:
 *   - IntlStationSchema  → TransitStation + BreadcrumbList + FAQPage
 *   - IntlLineSchema     → Route + BreadcrumbList + FAQPage
 *
 * Both accept a `pathPrefix` in the form `/<city>/station` or
 * `/<city>/line` so the URLs in the schema match the actual page URL
 * (Atlanta uses /atlanta/station/, Paris uses /paris/station/, etc.).
 *
 * Usage on station page:
 *   <IntlStationSchema
 *     station={estacion}
 *     city="London"
 *     citySlug="london"
 *     stationPathPrefix="/london/station"
 *     linePathPrefix="/london/line"
 *     country="GB"
 *     systemName="London Underground"
 *     locale="es"
 *   />
 *
 * Usage on line page:
 *   <IntlLineSchema
 *     line={linea}
 *     stations={resolvedStationObjects}
 *     city="London"
 *     citySlug="london"
 *     linePathPrefix="/london/line"
 *     stationPathPrefix="/london/station"
 *     country="GB"
 *     systemName="London Underground"
 *   />
 */

const BASE = 'https://metroguia.mx';

function emit(obj) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  );
}

function abs(path) {
  if (!path) return BASE;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

export function IntlStationSchema({
  station,
  city,
  citySlug,
  stationPathPrefix,
  linePathPrefix,
  country = 'MX',
  systemName = 'public transit',
  locale = 'es',
}) {
  if (!station || !station.slug) return null;

  const stationUrl = abs(`${stationPathPrefix}/${station.slug}/`);
  const cityUrl = abs(`/${citySlug}/`);
  const lineas = Array.isArray(station.linea)
    ? station.linea
    : station.linea
    ? [station.linea]
    : [];

  const transitStationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitStation',
    name: station.nombre || station.slug,
    description:
      station.meta_description ||
      station.intro ||
      (locale === 'en'
        ? `${station.nombre} station — ${systemName} in ${city}.`
        : `Estación ${station.nombre} de ${systemName} en ${city}.`),
    url: stationUrl,
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: station.borough || station.municipio || station.alcaldia || city,
      addressRegion: station.region || station.borough || city,
      addressCountry: country,
    },
    ...(station.lat && station.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: station.lat,
            longitude: station.lng,
          },
        }
      : {}),
    ...(lineas.length > 0
      ? {
          servesTransitLine: lineas.map((id) => ({
            '@type': 'TransitLine',
            name: locale === 'en' ? `Line ${id}` : `Línea ${id}`,
            identifier: String(id),
            url: abs(`${linePathPrefix}/${id}/`),
          })),
        }
      : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: city, item: cityUrl },
      ...(lineas[0]
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: locale === 'en' ? `Line ${lineas[0]}` : `Línea ${lineas[0]}`,
              item: abs(`${linePathPrefix}/${lineas[0]}/`),
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: station.nombre,
              item: stationUrl,
            },
          ]
        : [
            {
              '@type': 'ListItem',
              position: 3,
              name: station.nombre,
              item: stationUrl,
            },
          ]),
    ],
  };

  const faqMain = [];
  if (locale === 'en') {
    faqMain.push({
      '@type': 'Question',
      name: `How do I get to ${station.nombre} station in ${city}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${station.nombre} station is part of the ${systemName} network in ${city}.${
          lineas.length ? ` Lines serving this station: ${lineas.join(', ')}.` : ''
        } Use the MetroGuia trip planner to get directions.`,
      },
    });
    if (station.pois && station.pois.length > 0) {
      const poiList = station.pois
        .slice(0, 5)
        .map((p) => (typeof p === 'string' ? p : `${p.nombre}${p.distancia ? ` (${p.distancia})` : ''}`))
        .join(', ');
      faqMain.push({
        '@type': 'Question',
        name: `What's near ${station.nombre} station?`,
        acceptedAnswer: { '@type': 'Answer', text: `Nearby points of interest: ${poiList}.` },
      });
    }
  } else {
    faqMain.push({
      '@type': 'Question',
      name: `¿Cómo llego a la estación ${station.nombre} en ${city}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `La estación ${station.nombre} forma parte de ${systemName} en ${city}.${
          lineas.length ? ` Líneas que pasan por la estación: ${lineas.join(', ')}.` : ''
        } Usa el planificador de MetroGuia.mx para obtener indicaciones.`,
      },
    });
    if (station.pois && station.pois.length > 0) {
      const poiList = station.pois
        .slice(0, 5)
        .map((p) => (typeof p === 'string' ? p : `${p.nombre}${p.distancia ? ` (${p.distancia})` : ''}`))
        .join(', ');
      faqMain.push({
        '@type': 'Question',
        name: `¿Qué hay cerca de la estación ${station.nombre}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Cerca encontrarás: ${poiList}.` },
      });
    }
  }

  const faqSchema = faqMain.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqMain }
    : null;

  return (
    <>
      {emit(transitStationSchema)}
      {emit(breadcrumbSchema)}
      {faqSchema ? emit(faqSchema) : null}
    </>
  );
}

export function IntlLineSchema({
  line,
  stations = [],
  city,
  citySlug,
  linePathPrefix,
  stationPathPrefix,
  country = 'MX',
  systemName = 'public transit',
  locale = 'es',
}) {
  if (!line || !line.id) return null;

  const lineUrl = abs(`${linePathPrefix}/${line.id}/`);
  const cityUrl = abs(`/${citySlug}/`);

  // stations may be an array of strings (slugs) or objects.
  const stops = (Array.isArray(stations) ? stations : [])
    .map((s, idx) => {
      const slug = typeof s === 'string' ? s : s?.slug;
      const name = typeof s === 'string' ? s : s?.nombre || s?.slug;
      if (!slug) return null;
      return {
        '@type': 'TransitStation',
        name,
        position: idx + 1,
        url: abs(`${stationPathPrefix}/${slug}/`),
      };
    })
    .filter(Boolean);

  const lineSchema = {
    '@context': 'https://schema.org',
    '@type': 'Route',
    name: locale === 'en' ? `Line ${line.id}${line.colorNombre ? ` — ${line.colorNombre}` : ''}` : `Línea ${line.id}${line.colorNombre ? ` — ${line.colorNombre}` : ''}`,
    alternateName: line.h1 || `${line.id} ${systemName} ${city}`,
    description: line.descripcion || line.meta_description || '',
    url: lineUrl,
    provider: {
      '@type': 'Organization',
      name: systemName,
      url: cityUrl,
    },
    ...(line.inicio && line.fin
      ? {
          startPoint: { '@type': 'TransitStation', name: line.inicio },
          endPoint: { '@type': 'TransitStation', name: line.fin },
        }
      : {}),
    ...(stops.length > 0 ? { stop: stops } : {}),
    numberOfStops: line.total || stops.length || 0,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: city, item: cityUrl },
      {
        '@type': 'ListItem',
        position: 3,
        name: locale === 'en' ? `Line ${line.id}` : `Línea ${line.id}`,
        item: lineUrl,
      },
    ],
  };

  const faqMain = [];
  if (locale === 'en') {
    faqMain.push({
      '@type': 'Question',
      name: `How many stations are on Line ${line.id}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Line ${line.id} of ${systemName} in ${city} has ${line.total || stops.length || '—'} stations${
          line.inicio && line.fin ? `, from ${line.inicio} to ${line.fin}` : ''
        }.`,
      },
    });
    faqMain.push({
      '@type': 'Question',
      name: `How do I plan a trip on Line ${line.id}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Use the MetroGuia.mx route planner to find the best path on Line ${line.id} in ${city}.`,
      },
    });
  } else {
    faqMain.push({
      '@type': 'Question',
      name: `¿Cuántas estaciones tiene la Línea ${line.id}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `La Línea ${line.id} de ${systemName} en ${city} tiene ${line.total || stops.length || '—'} estaciones${
          line.inicio && line.fin ? `, desde ${line.inicio} hasta ${line.fin}` : ''
        }.`,
      },
    });
    faqMain.push({
      '@type': 'Question',
      name: `¿Cómo planeo un viaje en la Línea ${line.id}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Usa el planificador de rutas de MetroGuia.mx para encontrar la mejor ruta en la Línea ${line.id} de ${city}.`,
      },
    });
  }

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqMain };

  return (
    <>
      {emit(lineSchema)}
      {emit(breadcrumbSchema)}
      {emit(faqSchema)}
    </>
  );
}

export default IntlStationSchema;
