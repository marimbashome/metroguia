import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';

export const metadata = {
  title: 'Pueblos Mágicos de México | MetroGuia',
  description: 'Descubre los 50 Pueblos Mágicos más visitados de México. Explora destinos auténticos, cultural patrimonio y experiencias única en cada región.',
  keywords: 'pueblos mágicos, turismo México, destinos auténticos, viajes',
  openGraph: {
    title: 'Pueblos Mágicos de México | MetroGuia',
    description: 'Descubre los 50 Pueblos Mágicos más visitados de México.',
    type: 'website',
    url: 'https://metroguia.mx/turismo/pueblos-magicos',
  },
};

export default function PueblosMagicosPage() {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    header: {
      marginBottom: '60px',
      textAlign: 'center',
    },
    headerTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: 'var(--text)',
    },
    headerSubtitle: {
      fontSize: '18px',
      color: 'var(--text)',
      opacity: 0.8,
      marginBottom: '8px',
    },
    counterBadge: {
      display: 'inline-block',
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '24px',
      fontSize: '14px',
      fontWeight: 'bold',
      marginTop: '12px',
    },
    ctaSection: {
      backgroundColor: 'var(--surface)',
      borderLeft: '4px solid var(--primary)',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '48px',
      textAlign: 'center',
    },
    ctaText: {
      fontSize: '16px',
      marginBottom: '16px',
      lineHeight: 1.6,
    },
    ctaLink: {
      display: 'inline-block',
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '16px',
      transition: 'opacity 0.3s ease',
    },
    ctaLinkHover: {
      opacity: 0.9,
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '48px',
    },
    card: {
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textDecoration: 'none',
      color: 'var(--text)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    },
    cardHeader: {
      padding: '20px',
      borderBottom: '1px solid var(--border)',
    },
    cardBadges: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '12px',
    },
    badge: {
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: 'var(--bg)',
      color: 'var(--primary)',
      fontWeight: 'bold',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '4px',
      color: 'var(--text)',
    },
    cardMeta: {
      fontSize: '14px',
      color: 'var(--text)',
      opacity: 0.7,
    },
    cardContent: {
      padding: '20px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    cardRegion: {
      fontSize: '12px',
      color: 'var(--primary)',
      fontWeight: 'bold',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    cardDescription: {
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--text)',
      opacity: 0.85,
      marginBottom: '12px',
      flex: 1,
    },
    cardFooter: {
      fontSize: '13px',
      color: 'var(--primary)',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Pueblos Mágicos de México',
    description: 'Los 50 Pueblos Mágicos más visitados de México en MetroGuia',
    url: 'https://metroguia.mx/turismo/pueblos-magicos',
    image: 'https://metroguia.mx/og-pueblos-magicos.jpg',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Pueblos Mágicos',
      numberOfItems: pueblosMagicos.length,
      itemListElement: pueblosMagicos.map((pueblo, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://metroguia.mx/turismo/pueblos-magicos/${pueblo.slug}`,
        name: pueblo.nombre,
        description: pueblo.meta_description,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.headerTitle}>Pueblos Mágicos de México</h1>
          <p style={styles.headerSubtitle}>
            Descubre destinos auténticos llenos de cultura, tradición y belleza natural
          </p>
          <div style={styles.counterBadge}>
            {pueblosMagicos.length} de 177 Pueblos Mágicos
          </div>
        </header>

        <section style={styles.ctaSection}>
          <p style={styles.ctaText}>
            Planifica tu viaje al próximo Mundial de Fútbol 2026 y aprovecha para visitar
            los pueblos mágicos más cercanos. Descubre experiencias únicas en cada destino.
          </p>
          <a href="/mundial-2026/planificador" style={styles.ctaLink}>
            Planificar Mi Viaje
          </a>
        </section>

        <section>
          <div style={styles.gridContainer}>
            {pueblosMagicos.map((pueblo) => (
              <a
                key={pueblo.slug}
                href={`/turismo/pueblos-magicos/${pueblo.slug}`}
                style={styles.card}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.cardBadges}>
                    <span style={styles.badge}>{pueblo.año_designacion}</span>
                  </div>
                  <h2 style={styles.cardTitle}>{pueblo.nombre}</h2>
                  <p style={styles.cardMeta}>{pueblo.estado}</p>
                </div>
                <div style={styles.cardContent}>
                  <p style={styles.cardRegion}>{pueblo.region}</p>
                  <p style={styles.cardDescription}>
                    {truncateText(pueblo.descripcion, 150)}
                  </p>
                </div>
                <div style={{ padding: '20px', paddingTop: 0 }}>
                  <div style={styles.cardFooter}>
                    <span>Conocer más →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
