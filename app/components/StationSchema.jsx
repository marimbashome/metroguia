export default function StationSchema({ station, city, sistema, slug, lines, accessibility, address }) {
  // Determine station type based on sistema
  const stationType = sistema && (sistema.includes('metro') || sistema.includes('Metro')) 
    ? 'TrainStation'
    : 'BusStation'

  const schema = {
    '@context': 'https://schema.org',
    '@type': stationType,
    name: station,
    identifier: slug || station.toLowerCase().replace(/\s+/g, '-'),
    description: `Estación ${station} de ${sistema || 'transporte público'} en ${city}`,
    url: `https://metroguia.mx/estacion/${slug || station.toLowerCase().replace(/\s+/g, '-')}/`,
  }

  // Add geographic coordinates if available
  if (address) {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: city === 'CDMX' ? 'Ciudad de México' : city,
      addressCountry: 'MX'
    }

    if (typeof address === 'string' && address.length > 0) {
      schema.address.streetAddress = address
    }
  }

  // Add geo coordinates if available (to be added dynamically)
  if (typeof window === 'undefined') {
    // Server-side only - add geo data if provided
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: 0, // Will be populated with actual data
      longitude: 0
    }
  }

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
        item: `https://metroguia.mx/${city.toLowerCase().replace(/\s+/g, '-')}/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Estaciones',
        item: `https://metroguia.mx/${city.toLowerCase().replace(/\s+/g, '-')}/estaciones/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: station,
        item: `https://metroguia.mx/estacion/${slug || station.toLowerCase().replace(/\s+/g, '-')}/`
      }
    ]
  }

  // Add LocalBusiness schema for practical station information
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://metroguia.mx/estacion/${slug || station.toLowerCase().replace(/\s+/g, '-')}/`,
    name: `Estación ${station}`,
    description: `Estación de transporte público ${station} ubicada en ${city}`,
    url: `https://metroguia.mx/estacion/${slug || station.toLowerCase().replace(/\s+/g, '-')}/`,
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
      addressCountry: 'MX'
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
