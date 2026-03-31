import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';

export const metadata = {
  title: 'Ciudades Patrimonio UNESCO de México | MetroGuía',
  description: 'Explora 15 ciudades Patrimonio UNESCO de México. Descubre arquitectura colonial, historia e importancia cultural de cada sitio.',
  keywords: 'ciudades patrimonio, UNESCO, México, CDMX, Oaxaca, Puebla',
  openGraph: {
    title: 'Ciudades Patrimonio UNESCO de México',
    description: 'Explora las ciudades Patrimonio UNESCO más importantes de México',
    type: 'website',
  },
};

export default function CiudadesPatrimonioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ciudades Patrimonio UNESCO de México',
    description: 'Colección de 15 ciudades Patrimonio UNESCO de México',
    url: 'https://metroguia.mx/turismo/ciudades-patrimonio',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ciudadesPatrimonio.map((ciudad, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://metroguia.mx/turismo/ciudades-patrimonio/${ciudad.slug}`,
        name: ciudad.nombre,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', paddingBottom: '60px' }}>
        {/* Hero Section */}
        <div style={{
          backgroundImage: 'linear-gradient(135deg, rgba(184, 134, 11, 0.9), rgba(218, 165, 32, 0.9))',
          padding: '80px 20px',
          textAlign: 'center',
          color: 'white',
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}>
            Ciudades Patrimonio UNESCO
          </h1>
          <p style={{
            fontSize: '1.3rem',
            margin: '0',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
          }}>
            Descubre las 15 ciudades mexicanas reconocidas por la UNESCO como Patrimonio de la Humanidad. Explora arquitectura colonial, historia y cultura en sitios de importancia mundial.
          </p>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
          {/* Header with Count */}
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: 'var(--text)',
              margin: '0 0 10px 0',
              fontWeight: '600',
            }}>
              15 ciudades patrimonio
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              margin: '0',
            }}>
              Las ciudades mexicanas más importantes reconocidas por su valor universal excepcional
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '50px',
          }}>
            {ciudadesPatrimonio.map((ciudad) => (
              <a
                key={ciudad.slug}
                href={`/turismo/ciudades-patrimonio/${ciudad.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                }}>
                  {/* Header with Badges */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginBottom: '12px',
                    }}>
                      <span style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(184, 134, 11, 0.15)',
                        color: 'rgb(184, 134, 11)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                      }}>
                        UNESCO {ciudad.año_declaracion}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      color: 'var(--text)',
                      lineHeight: '1.4',
                    }}>
                      {ciudad.nombre}
                    </h3>
                  </div>

                  {/* Meta Info */}
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <div>
                      <span style={{ fontWeight: '600', color: 'var(--text)' }}>Estado: </span>
                      {ciudad.estado}
                    </div>
                    <div style={{ marginTop: '8px' }}>
                      <span style={{ fontWeight: '600', color: 'var(--text)' }}>Declaración: </span>
                      {ciudad.año_declaracion}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 16px 0',
                    lineHeight: '1.6',
                    flex: 1,
                  }}>
                    {ciudad.descripcion.split('.')[0] + '.'}
                  </p>

                  {/* Declaratoria Badge */}
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border)',
                    fontStyle: 'italic',
                  }}>
                    {ciudad.declaratoria}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
