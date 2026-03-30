const CITY_PROVIDERS = {
  cdmx: { name: 'Sistema de Transporte Colectivo - Metro CDMX', url: 'https://www.metro.cdmx.gob.mx', label: 'Metro de Ciudad de México' },
  gdl: { name: 'SITEUR - Mi Tren Guadalajara', url: 'https://www.siteur.gob.mx', label: 'transporte público de Guadalajara' },
  mty: { name: 'Metrorrey - Monterrey', url: 'https://www.nl.gob.mx/metrorrey', label: 'Metrorrey de Monterrey' },
  puebla: { name: 'RUTA BRT Puebla', url: 'https://www.rutapuebla.com', label: 'RUTA BRT de Puebla' },
  merida: { name: 'Va y Ven Mérida', url: 'https://www.merida.gob.mx', label: 'transporte público de Mérida' },
  leon: { name: 'SIT León', url: 'https://www.leon.gob.mx', label: 'SIT de León' },
  chihuahua: { name: 'Chepe Express', url: 'https://chepe.mx', label: 'Chepe Express de Chihuahua' },
  tijuana: { name: 'SITT Tijuana', url: 'https://www.tijuana.gob.mx', label: 'transporte público de Tijuana' },
  queretaro: { name: 'QroBús Querétaro', url: 'https://www.queretaro.gob.mx', label: 'QroBús de Querétaro' },
  toluca: { name: 'Tren Interurbano México-Toluca', url: 'https://www.gob.mx', label: 'Tren Interurbano de Toluca' },
  'tren-maya': { name: 'Tren Maya', url: 'https://www.trenmaya.gob.mx', label: 'Tren Maya' },
}

export default function RouteSchema({ origen, destino, pasos, tiempoTotal, costoTotal, transbordos, lineas_usadas, slug, ciudad = 'cdmx' }) {
  const provider = CITY_PROVIDERS[ciudad] || CITY_PROVIDERS.cdmx
  const cityPrefix = ciudad === 'cdmx' ? '' : `/${ciudad}`
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
    description: `Cómo llegar de ${origen} a ${destino} en ${provider.label}`,
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
      name: provider.name,
      url: provider.url,
    },
    url: `https://metroguia.mx${cityPrefix}/ruta/${slug}/`
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
        item: `https://metroguia.mx${cityPrefix}/ruta/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${origen} a ${destino}`,
        item: `https://metroguia.mx${cityPrefix}/ruta/${slug}/`
      }
    ]
  }

  // Build stops array for Route schema (alternative representation)
  const stops = pasos.map((paso, idx) => ({
    '@type': 'BusStop',
    name: paso.nombre,
    identifier: paso.slug || paso.nombre.toLowerCase().replace(/\s+/g, '-'),
    url: ciudad === 'cdmx'
      ? `https://metroguia.mx/estacion/${paso.slug || paso.nombre.toLowerCase().replace(/\s+/g, '-')}/`
      : `https://metroguia.mx/${ciudad}/estacion/${paso.slug || paso.nombre.toLowerCase().replace(/\s+/g, '-')}/`,
  }))

  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Route',
    name: `${origen} a ${destino}`,
    description: `Ruta de transporte público en ${provider.label} desde ${origen} hasta ${destino}`,
    startPoint: {
      '@type': 'BusStation',
      name: origen,
    },
    endPoint: {
      '@type': 'BusStation',
      name: destino,
    },
    stop: stops,
    url: `https://metroguia.mx${cityPrefix}/ruta/${slug}/`,
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
