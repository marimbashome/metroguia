import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';

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
    title: pueblo.seo_title,
    description: pueblo.meta_description,
    keywords: `${pueblo.nombre}, ${pueblo.estado}, pueblos mágicos, turismo`,
    openGraph: {
      title: pueblo.seo_title,
      description: pueblo.meta_description,
      type: 'website',
      url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}`,
    },
  };
}

export default function PuebloDetailPage({ params }) {
  const pueblo = pueblosMagicos.find((p) => p.slug === params.slug);

  if (!pueblo) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Pueblo no encontrado</h1>
        <p>El pueblo mágico que buscas no existe.</p>
        <a href="/turismo/pueblos-magicos" style={{ color: 'var(--primary)' }}>
          Volver a Pueblos Mágicos
        </a>
      </div>
    );
  }

  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    hero: {
      backgroundColor: 'var(--surface)',
      padding: '40px 20px',
      borderBottom: '1px solid var(--border)',
    },
    heroContent: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    breadcrumb: {
      fontSize: '13px',
      color: 'var(--text)',
      opacity: 0.7,
      marginBottom: '16px',
    },
    breadcrumbLink: {
      color: 'var(--primary)',
      textDecoration: 'none',
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: 'var(--text)',
    },
    heroMeta: {
      fontSize: '16px',
      color: 'var(--text)',
      opacity: 0.8,
      marginBottom: '20px',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '4px',
      fontSize: '13px',
      fontWeight: 'bold',
    },
    content: {
      padding: '40px 20px',
    },
    contentInner: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    section: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: 'var(--text)',
      paddingBottom: '12px',
      borderBottom: '2px solid var(--primary)',
    },
    description: {
      fontSize: '16px',
      lineHeight: 1.8,
      color: 'var(--text)',
      marginBottom: '24px',
    },
    highlightsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    highlightItem: {
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderLeft: '4px solid var(--primary)',
      borderRadius: '6px',
    },
    highlightTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'var(--text)',
      marginBottom: '8px',
    },
    highlightText: {
      fontSize: '14px',
      color: 'var(--text)',
      opacity: 0.8,
    },
    tipsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    tipItem: {
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      paddingLeft: '40px',
      position: 'relative',
    },
    tipIcon: {
      position: 'absolute',
      left: '12px',
      top: '16px',
      fontSize: '18px',
    },
    tipText: {
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--text)',
    },
    comoLlegarBox: {
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      padding: '24px',
      borderRadius: '8px',
      lineHeight: 1.8,
    },
    comoLlegarText: {
      fontSize: '15px',
      color: 'var(--text)',
      whiteSpace: 'pre-wrap',
    },
    ctaSection: {
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '32px 20px',
      textAlign: 'center',
      borderRadius: '8px',
      marginTop: '40px',
    },
    ctaText: {
      fontSize: '18px',
      marginBottom: '20px',
      lineHeight: 1.6,
    },
    ctaLink: {
      display: 'inline-block',
      backgroundColor: 'white',
      color: 'var(--primary)',
      padding: '12px 32px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    coordsBox: {
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      padding: '16px',
      borderRadius: '6px',
      fontSize: '13px',
      color: 'var(--text)',
      opacity: 0.8,
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: pueblo.nombre,
    description: pueblo.descripcion,
    url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: pueblo.estado,
      addressCountry: 'Mexico',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: pueblo.coords.lat,
      longitude: pueblo.coords.lng,
    },
    potentialAction: {
      '@type': 'PlanAction',
      target: `https://metroguia.mx/mundial-2026/planificador`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={styles.container}>
        <div style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.breadcrumb}>
              <a href="/turismo/pueblos-magicos" style={styles.breadcrumbLink}>
                Pueblos Mágicos
              </a>
              {' / '}
              <span>{pueblo.nombre}</span>
            </div>
            <h1 style={styles.title}>{pueblo.h1}</h1>
            <div style={styles.heroMeta}>
              <span>
                <strong>Estado:</strong> {pueblo.estado}
              </span>
              <span>
                <strong>Región:</strong> {pueblo.region}
              </span>
              <span style={styles.badge}>Designado en {pueblo.año_designacion}</span>
            </div>
          </div>
        </div>

        <div style={styles.content}>
          <div style={styles.contentInner}>
            <section style={styles.section}>
              <p style={styles.description}>{pueblo.descripcion}</p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Puntos de Interés</h2>
              <ul style={styles.highlightsList}>
                {pueblo.highlights.map((highlight, index) => (
                  <li key={index} style={styles.highlightItem}>
                    <h3 style={styles.highlightTitle}>{highlight.titulo}</h3>
                    <p style={styles.highlightText}>{highlight.descripcion}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Consejos para tu Visita</h2>
              <ul style={styles.tipsList}>
                {pueblo.tips.map((tip, index) => (
                  <li key={index} style={styles.tipItem}>
                    <span style={styles.tipIcon}>💡</span>
                    <p style={styles.tipText}>{tip}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Cómo Llegar</h2>
              <div style={styles.comoLlegarBox}>
                <p style={styles.comoLlegarText}>{pueblo.como_llegar}</p>
              </div>
              <div style={styles.coordsBox}>
                Coordenadas: {pueblo.coords.lat.toFixed(4)}, {pueblo.coords.lng.toFixed(4)}
              </div>
            </section>

            {pueblo.ciudad_metroguia && (
              <section style={styles.ctaSection}>
                <p style={styles.ctaText}>
                  {pueblo.nombre} está cerca de {pueblo.ciudad_metroguia}. Planifica tu viaje al
                  Mundial 2026 aprovechando esta oportunidad.
                </p>
                <a href="/mundial-2026/planificador" style={styles.ctaLink}>
                  Planificar Mi Viaje
                </a>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
