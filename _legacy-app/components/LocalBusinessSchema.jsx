export default function LocalBusinessSchema({ agency }) {
  const geoData = agency.geo ? {
    '@type': 'GeoCoordinates',
    latitude: agency.geo.lat,
    longitude: agency.geo.lng,
  } : undefined;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: agency.name,
    description: agency.description,
    url: agency.url,
    address: agency.address,
  };

  if (geoData) {
    schema.geo = geoData;
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
