export default function StationSchema({ station, city, sistema, slug, lines, accessibility, address, country }) {
  const stationName = station || 'Station';
  // Determine station type based on sistema
  const stationType = sistema && (sistema.includes('metro') || sistema.includes('Metro'))
    ? 'TrainStation'
    : 'BusStation'

  const stationSlug = slug || stationName.toLowerCase().replace(/\s+/g, '-');
  const schema = {
    '@context': 'https://schema.org',
    '@type': stationType,
    name: stationName,
    identifier: stationSlug,
    description: `Estación ${stationName} de ${sistema || 'transporte público'} en ${city || 'México'}`,
    url: `https://metroguia.mx/estacion/${stationSlug}/`,
  }

  // Add geographic coordinates if available
  if (address) {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: city === 'CDMX' ? 'Ciudad de México' : city,
      addressCountry: country || 'MX'
    }

    if (typeof address === 'string' && address.length > 0) {
      schema.address.streetAddress = address
    }
  }

  // Add geo coordinates only if actual data is provided
  // (placeholder 0,0 tells Google every station is at Null Island)

  // Add transit lines information
  if (lines && Array.isArray(lines) && lines.length > 0) {
    schema.servesTransitLine = lines.map(line => ({
      '@type': 'TransitLine',
      name: `Línea ${line}`,
      identifier: line,
      url: `https://metroguia.mx/linea/${line}/`
    }))
  }

  // Add accessibility information if provided
  if (accessibility) {
    schema.isAccessibleForFree = accessibility.wheelchair || false
    if (accessibility.escalators) {
      schema.amenityFeature = {
        '@type': 'LocationFeatureSpecification',
        name: 'Escaleras mecánicas',
        value: true
      }
    }
    if (accessibility.elevators) {
      if (!schema.amenityFeature) {
        schema.amenityFeature = []
      } else if (!Array.isArray(schema.amenityFeature)) {
        schema.amenityFeature = [schema.amenityFeature]
      }
      schema.amenityFeature.push({
        '@type': 'LocationFeatureSpecification',
        name: 'Ascensores',
        value: true
      })
    }
  }

  // Add BreadcrumbList for navigation context
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://metroguia.mx/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: city,
        item: `https://metroguia.mx/${(city || 'mexico').toLowerCase().replace(/\s+/g, '-')}/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Estaciones',
        item: `https://metroguia.mx/${(city || 'mexico').toLowerCase().replace(/\s+/g, '-')}/estaciones/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: stationName,
        item: `https://metroguia.mx/estacion/${stationSlug}/`
      }
    ]
  }

  // Add LocalBusiness schema for practical station information
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://metroguia.mx/estacion/${stationSlug}/`,
    name: `Estación ${stationName}`,
    description: `Estación de transporte público ${stationName} ubicada en ${city || 'México'}`,
    url: `https://metroguia.mx/estacion/${stationSlug}/`,
    areaServed: city,
    knowsAbout: 'Transporte público, Metro, Sistema de Transporte Colectivo',
    potentialAction: {
      '@type': 'PlanAction',
      name: 'Planificar ruta',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://metroguia.mx/ruta/calc'
      }
    }
  }

  if (address && typeof address === 'string') {
    localBusinessSchema.address = {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      addressCountry: country || 'MX'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
