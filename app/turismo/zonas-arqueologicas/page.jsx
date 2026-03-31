import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';

export const metadata = {
  title: 'Zonas Arqueológicas de México | MetroGuía',
  description: 'Explora 40 de las 193 zonas arqueológicas más importantes de México. Descubre historia, culturas prehispánicas y sitios patrimonio UNESCO.',
  keywords: 'zonas arqueológicas, arqueología, México, Teotihuacán, Chichén Itzá, Tulum',
  openGraph: {
    title: 'Zonas Arqueológicas de México',
    description: 'Explora las principales zonas arqueológicas de México',
    type: 'website',
  },
};

export default function ZonasArqueologicasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Zonas Arqueológicas de México',
    description: 'Colección de 40 zonas arqueológicas principales de México',
    url: 'https://metroguia.mx/turismo/zonas-arqueologicas',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: zonasArqueologicas.map((zona, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://metroguia.mx/turismo/zonas-arqueologicas/${zona.slug}`,
        name: zona.nombre,
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
          backgroundImage: 'linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(184, 134, 11, 0.9))',
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
            Zonas Arqueológicas de México
          </h1>
          <p style={{
            fontSize: '1.3rem',
            margin: '0',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
          }}>
            Descubre 40 de las 193 zonas arqueológicas más importantes del país. Explora civilizaciones ancestrales, culturas prehispánicas y tesoros patrimonio UNESCO.
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
              40 de 193 zonas arqueológicas
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              margin: '0',
            }}>
              Selección de los sitios arqueológicos más visitados e importantes de México
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '50px',
          }}>
            {zonasArqueologicas.map((zona) => (
              <a
                key={zona.slug}
                href={`/turismo/zonas-arqueologicas/${zona.slug}`}
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
                  hover: {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    borderColor: 'var(--primary)',
                  },
                }}>
                  {/* Header */}
                  <div style={{ marginBottom: '16px' }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      color: 'var(--text)',
                      lineHeight: '1.4',
                    }}>
                      {zona.nombre}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    margin: '0 0 16px 0',
                    lineHeight: '1.6',
                    flex: 1,
                  }}>
                    {zona.descripcion.split('.')[0] + '.'}
                  </p>

                  {/* Estado */}
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{ fontWeight: '600' }}>Estado:</span> {zona.estado}
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
