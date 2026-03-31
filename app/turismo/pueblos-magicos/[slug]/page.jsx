import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';

const regionColors = {
  Norte: '#D97706',
  Noroeste: '#06B6D4',
  Noreste: '#EC4899',
  Bajío: '#8B5CF6',
  Occidente: '#16A34A',
  Centro: '#E91E8C',
  Golfo: '#2563EB',
  'Pacífico Sur': '#F59E0B',
  Sureste: '#0EA5E9',
};

export async function generateStaticParams() {
  return pueblosMagicos.map((pueblo) => ({
    slug: pueblo.slug,
  }));
}

export async function generateMetadata({ params }) {
  const pueblo = pueblosMagicos.find((p) => p.slug === params.slug);

  if (!pueblo) {
    return {
      title: 'Pueblo no encontrado | MetroGuia',
      description: 'El pueblo mágico que buscas no existe.',
    };
  }

  return {
    title: `${pueblo.nombre}, ${pueblo.estado} — Pueblo Mágico | MetroGuia`,
    description: pueblo.descripcion,
    keywords: `${pueblo.nombre}, ${pueblo.estado}, pueblos mágicos, turismo, ${pueblo.region}`,
    openGraph: {
      title: `${pueblo.nombre}, ${pueblo.estado} | MetroGuia`,
      description: pueblo.descripcion,
      type: 'website',
      url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}/`,
    },
  };
}

export default function PuebloDetailPage({ params }) {
  const pueblo = pueblosMagicos.find((p) => p.slug === params.slug);

  if (!pueblo) {
    return (
      <div style={{ padding: '40px 20px', textAlign: 'center', maxWidth: 'var(--maxWidth)', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>Pueblo no encontrado</h1>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif' }}>
          El pueblo mágico que buscas no existe.
        </p>
        <a
          href="/turismo/pueblos-magicos/"
          style={{ color: 'var(--primary)', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}
        >
          Volver a Pueblos Mágicos
        </a>
      </div>
    );
  }

  const styles = {
    container: {
      maxWidth: 'var(--maxWidth)',
      margin: '0 auto',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      fontFamily: 'Inter, sans-serif',
    },
    hero: {
      backgroundColor: 'var(--surface)',
      padding: '3rem 2rem',
      borderBottom: `1px solid var(--border)`,
    },
    heroContent: {
      maxWidth: 'var(--maxWidth)',
      margin: '0 auto',
    },
    breadcrumb: {
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      marginBottom: '1rem',
    },
    breadcrumbLink: {
      color: 'var(--primary)',
      textDecoration: 'none',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: 'var(--text)',
    },
    heroMeta: {
      fontSize: '1rem',
      color: 'var(--text)',
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: regionColors[pueblo.region],
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      fontSize: '0.875rem',
      fontWeight: 'bold',
    },
    content: {
      padding: '3rem 2rem',
    },
    contentInner: {
      maxWidth: 'var(--maxWidth)',
      margin: '0 auto',
    },
    section: {
      marginBottom: '3rem',
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: 'var(--text)',
      paddingBottom: '0.75rem',
      borderBottom: `2px solid var(--primary)`,
    },
    description: {
      fontSize: '1.0625rem',
      lineHeight: 1.8,
      color: 'var(--text)',
      marginBottom: '1.5rem',
    },
    atractivos: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    attractivoItem: {
      padding: '1rem',
      marginBottom: '0.75rem',
      backgroundColor: 'var(--surface)',
      border: `1px solid var(--border)`,
      borderLeftWidth: '4px',
      borderLeftColor: regionColors[pueblo.region],
      borderRadius: '6px',
    },
    attractivoText: {
      fontSize: '1rem',
      color: 'var(--text-muted)',
      margin: 0,
    },
    comoLlegarBox: {
      backgroundColor: 'var(--surface)',
      border: `1px solid var(--border)`,
      padding: '2rem',
      borderRadius: '8px',
      lineHeight: 1.8,
    },
    comoLlegarItem: {
      marginBottom: '1.5rem',
    },
    comoLlegarLabel: {
      fontSize: '0.9375rem',
      fontWeight: 'bold',
      color: 'var(--text)',
      marginBottom: '0.25rem',
    },
    comoLlegarText: {
      fontSize: '1rem',
      color: 'var(--text-muted)',
      margin: 0,
    },
    ctaSection: {
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
      borderRadius: '8px',
      marginTop: '3rem',
    },
    ctaText: {
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
      lineHeight: 1.6,
    },
    ctaLink: {
      display: 'inline-block',
      backgroundColor: 'white',
      color: 'var(--primary)',
      padding: '0.75rem 2rem',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: pueblo.nombre,
    description: pueblo.descripcion,
    url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}/`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: pueblo.estado,
      addressCountry: 'Mexico',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.breadcrumb}>
              <a href="/turismo/" style={styles.breadcrumbLink}>
                Turismo
              </a>
              {' → '}
              <a href="/turismo/pueblos-magicos/" style={styles.breadcrumbLink}>
                Pueblos Mágicos
              </a>
              {' → '}
              <span>{pueblo.nombre}</span>
            </div>
            <h1 style={styles.title}>{pueblo.nombre}</h1>
            <div style={styles.heroMeta}>
              <span>
                <strong>Estado:</strong> {pueblo.estado}
              </span>
              <span style={styles.badge}>{pueblo.region}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <div style={styles.contentInner}>
            {/* Description */}
            <section style={styles.section}>
              <p style={styles.description}>{pueblo.descripcion}</p>
            </section>

            {/* Atractivos */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Atractivos Principales</h2>
              <ul style={styles.atractivos}>
                {pueblo.atractivos.map((atractivo, idx) => (
                  <li key={idx} style={styles.attractivoItem}>
                    <p style={styles.attractivoText}>{atractivo}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cómo Llegar */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Cómo Llegar</h2>
              <div style={styles.comoLlegarBox}>
                {pueblo.comoLlegar.aeropuertoCercano && (
                  <div style={styles.comoLlegarItem}>
                    <p style={styles.comoLlegarLabel}>Aeropuerto Cercano</p>
                    <p style={styles.comoLlegarText}>{pueblo.comoLlegar.aeropuertoCercano}</p>
                  </div>
                )}
                {pueblo.comoLlegar.terminalBus && (
                  <div style={styles.comoLlegarItem}>
                    <p style={styles.comoLlegarLabel}>Terminal de Autobús</p>
                    <p style={styles.comoLlegarText}>{pueblo.comoLlegar.terminalBus}</p>
                  </div>
                )}
                {pueblo.comoLlegar.transportePublico && (
                  <div style={styles.comoLlegarItem}>
                    <p style={styles.comoLlegarLabel}>Transporte Público</p>
                    <p style={styles.comoLlegarText}>{pueblo.comoLlegar.transportePublico}</p>
                  </div>
                )}
              </div>
            </section>

            {/* CTA */}
            <section style={styles.ctaSection}>
              <p style={styles.ctaText}>Vuelve a explorar más pueblos mágicos de México</p>
              <a href="/turismo/pueblos-magicos/" style={styles.ctaLink}>
                Regresar a la lista completa
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
