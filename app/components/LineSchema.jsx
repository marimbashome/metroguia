export default function LineSchema({ linea, ciudad = 'cdmx', sistema = 'Metro' }) {
  const cityNames = {
    cdmx: 'Ciudad de México',
    gdl: 'Guadalajara',
    mty: 'Monterrey',
  };

  const cityProviders = {
    cdmx: { name: 'Sistema de Transporte Colectivo', url: 'https://www.metro.cdmx.gob.mx' },
    gdl: { name: 'SITEUR', url: 'https://www.siteur.gob.mx' },
    mty: { name: 'Metrorrey', url: 'https://www.nl.gob.mx/metrorrey' },
  };

  const provider = cityProviders[ciudad] || cityProviders.cdmx;
  const cityName = cityNames[ciudad] || ciudad;
  const cityPrefix = ciudad === 'cdmx' ? '' : `/${ciudad}`;

  const lineSchema = {
    '@context': 'https://schema.org',
    '@type': 'Route',
    name: `Línea ${linea.id} — ${linea.colorNombre || ''}`,
    alternateName: linea.h1 || `Línea ${linea.id} ${sistema} ${cityName}`,
    description: linea.descripcion || linea.meta_description,
    url: `https://metroguia.mx${cityPrefix}/linea/${linea.id}/`,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url,
    },
    ...(linea.inicio && linea.fin ? {
      startPoint: { '@type': 'TransitStation', name: linea.inicio },
      endPoint: { '@type': 'TransitStation', name: linea.fin },
    } : {}),
    ...(linea.estaciones ? {
      stop: (Array.isArray(linea.estaciones) ? linea.estaciones : []).map((est, idx) => ({
        '@type': 'TransitStation',
        name: typeof est === 'string' ? est : est.nombre,
        position: idx + 1,
        url: `https://metroguia.mx${cityPrefix}/estacion/${typeof est === 'string' ? est : est.slug}/`,
      })),
    } : {}),
    numberOfStops: linea.total || (linea.estaciones ? linea.estaciones.length : 0),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx/' },
      { '@type': 'ListItem', position: 2, name: ciudad === 'cdmx' ? 'CDMX' : ciudad.toUpperCase(), item: ciudad === 'cdmx' ? 'https://metroguia.mx/cdmx/' : `https://metroguia.mx/${ciudad}/` },
      { '@type': 'ListItem', position: 3, name: `Línea ${linea.id}`, item: `https://metroguia.mx${cityPrefix}/linea/${linea.id}/` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `¿Cuántas estaciones tiene la Línea ${linea.id}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `La Línea ${linea.id} del ${sistema} de ${cityName} tiene ${linea.total || (linea.estaciones ? linea.estaciones.length : 'varias')} estaciones, desde ${linea.inicio || 'la terminal inicial'} hasta ${linea.fin || 'la terminal final'}.${linea.zonas ? ` Recorre las zonas: ${Array.isArray(linea.zonas) ? linea.zonas.join(', ') : linea.zonas}.` : ''}`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Cuál es el horario de la Línea ${linea.id}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: ciudad === 'cdmx'
            ? `El Metro CDMX opera de lunes a viernes de 5:00 AM a 12:00 AM, sábados de 6:00 AM a 12:00 AM, y domingos y festivos de 7:00 AM a 12:00 AM. El costo por viaje es de $5.00 MXN.`
            : ciudad === 'gdl'
            ? `El sistema SITEUR de Guadalajara opera de lunes a domingo de 5:00 AM a 11:00 PM. El costo por viaje es de $9.50 MXN con tarjeta Mi Movilidad.`
            : `El Metrorrey de Monterrey opera de lunes a domingo de 5:00 AM a 12:00 AM. El costo por viaje es de $4.50 MXN con tarjeta Mi Pasaje.`,
        },
      },
      {
        '@type': 'Question',
        name: `¿Cómo llego a la Línea ${linea.id} del ${sistema}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Puedes acceder a la Línea ${linea.id} desde cualquiera de sus ${linea.total || ''} estaciones. Las terminales son ${linea.inicio || ''} y ${linea.fin || ''}. Usa el planificador de rutas de MetroGuia.mx para encontrar la mejor ruta desde tu ubicación.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lineSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
