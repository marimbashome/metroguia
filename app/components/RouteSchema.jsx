export default function RouteSchema({ origen, destino, pasos, tiempoTotal, costoTotal, transbordos, lineas_usadas, slug }) {
  // Build Trip schema with full itinerary
  const itineraryItems = pasos.map((paso, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'TransitStation',
      name: paso.nombre,
      identifier: paso.slug || paso.nombre.toLowerCase().replace(/\s+/g, '-'),
    }
  }))

  const tripSchema = {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: `Ruta de ${origen} a ${destino}`,
    description: `Cómo llegar de ${origen} a ${destino} en el Metro de Ciudad de México`,
    duration: `PT${tiempoTotal}M`,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: itineraryItems
    },
    cost: {
      '@type': 'MonetaryAmount',
      currency: 'MXN',
      value: costoTotal || '6'
    },
    numberOfStops: pasos.length,
    numberOfTransfers: transbordos || 0,
    provider: {
      '@type': 'Organization',
      name: 'Sistema de Transporte Colectivo - Metro CDMX',
      url: 'https://www.metro.cdmx.gob.mx'
    },
    url: `https://metroguia.mx/ruta/${slug}/`
  }

  // Build BreadcrumbList schema
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
        name: 'Rutas',
        item: 'https://metroguia.mx/ruta/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${origen} a ${destino}`,
        item: `https://metroguia.mx/ruta/${slug}/`
      }
    ]
  }

  // Build stops array for Route schema (alternative representation)
  const stops = pasos.map((paso, idx) => ({
    '@type': 'BusStop',
    name: paso.nombre,
    identifier: paso.slug || paso.nombre.toLowerCase().replace(/\s+/g, '-'),
    url: `https://metroguia.mx/estacion/${paso.slug || paso.nombre.toLowerCase().replace(/\s+/g, '-')}/`,
  }))

  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Route',
    name: `${origen} a ${destino}`,
    description: `Ruta de transporte público en Metro CDMX desde ${origen} hasta ${destino}`,
    startPoint: {
      '@type': 'BusStation',
      name: origen,
    },
    endPoint: {
      '@type': 'BusStation',
      name: destino,
    },
    stop: stops,
    url: `https://metroguia.mx/ruta/${slug}/`,
    potentialAction: {
      '@type': 'PlanAction',
      name: 'Planificar ruta',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://metroguia.mx/ruta/calc'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />
    </>
  )
}
