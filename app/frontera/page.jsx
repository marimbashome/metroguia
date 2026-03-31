import { crucesFronterizos } from '@/data/cruces-fronterizos';

export const metadata = {
  title: 'Cruces Fronterizos de México — Horarios, esperas y documentación | MetroGuia',
  description: 'Guía completa de cruces fronterizos de México. Horarios, tiempos de espera, documentación requerida y servicios en cada paso fronterizo.',
  canonical: '/frontera/',
  openGraph: {
    title: 'Cruces Fronterizos de México',
    description: 'Horarios, esperas y documentación en cruces fronterizos',
    type: 'website',
    url: 'https://metroguia.mx/frontera/',
  },
};

const labelsByCountry = {
  'Estados Unidos': 'Frontera México-USA',
  'Guatemala': 'Frontera México-Guatemala',
  'Belice': 'Frontera México-Belice',
};

const colorsByCountry = {
  'Estados Unidos': '#EC4899',
  'Guatemala': '#10B981',
  'Belice': '#0EA5E9',
};

function parseNumber(str) {
  if (!str) return 0;
  return parseInt(String(str).replace(/\D/g, ''), 10) || 0;
}

function formatNumber(num) {
  return new Intl.NumberFormat('es-MX').format(num);
}

export default function FronteraPage() {
  // Group by country
  const grouped = {};
  crucesFronterizos.forEach((cruce) => {
    if (!grouped[cruce.pais_destino]) {
      grouped[cruce.pais_destino] = [];
    }
    grouped[cruce.pais_destino].push(cruce);
  });

  // Calculate stats
  const totalVolumen = crucesFronterizos.reduce(
    (sum, cruce) => sum + parseNumber(cruce.volumen_diario),
    0
  );

  // JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cruces Fronterizos de México',
    description: 'Guía completa de cruces fronterizos de México con horarios, esperas y documentación',
    url: 'https://metroguia.mx/frontera/',
    itemListElement: crucesFronterizos.map((cruce, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: cruce.nombre,
      url: `https://metroguia.mx/frontera/${cruce.slug}/`,
      item: {
        '@type': 'TouristAttraction',
        name: cruce.nombre,
        description: `Cruce fronterizo en ${cruce.estado}, México hacia ${cruce.pais_destino}`,
        areaServed: cruce.estado,
        image: null,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={styles.main}>
        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.heroIcon}>🛂</div>
            <h1 style={styles.h1}>
              Cruces Fronterizos de México
            </h1>
            <p style={styles.subtitle}>
              Horarios, tiempos de espera, documentación y servicios en {crucesFronterizos.length} pasos fronterizos
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>{crucesFronterizos.length}</div>
              <div style={styles.statLabel}>Cruces Fronterizos</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>3</div>
              <div style={styles.statLabel}>Países Vecinos</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>
                {formatNumber(totalVolumen)}
              </div>
              <div style={styles.statLabel}>Cruces Diarios</div>
            </div>
          </div>
        </section>

        {/* Grouped by Country */}
        {Object.entries(grouped).map(([country, cruces]) => (
          <section key={country} style={styles.countrySection}>
            <div style={{ ...styles.countryHeader, borderLeftColor: colorsByCountry[country] }}>
              <h2 style={styles.h2}>{labelsByCountry[country]}</h2>
              <span style={styles.countryBadge}>
                {cruces.length} {cruces.length === 1 ? 'cruce' : 'cruces'}
              </span>
            </div>

            <div className="grid-3" style={styles.grid}>
              {cruces.map((cruce) => (
                <a
                  key={cruce.slug}
                  href={`/frontera/${cruce.slug}/`}
                  style={{ textDecoration: 'none' }}
                >
                  <article className="card" style={styles.card}>
                    {/* Country Tag */}
                    <div
                      style={{
                        ...styles.countryTag,
                        backgroundColor: colorsByCountry[country],
                      }}
                    >
                      {country}
                    </div>

                    {/* Title */}
                    <h3 style={styles.cardTitle}>{cruce.nombre}</h3>

                    {/* Classification */}
                    {cruce.clasificacion && (
                      <p style={styles.classification}>{cruce.clasificacion}</p>
                    )}

                    {/* Location */}
                    <p style={styles.location}>
                      {cruce.ciudad_mexico} ↔ {cruce.pais_destino === 'Estados Unidos' && cruce.ciudad_usa}
                      {cruce.pais_destino === 'Guatemala' && cruce.ciudad_guatemala}
                      {cruce.pais_destino === 'Belice' && cruce.ciudad_belice}
                    </p>

                    {/* Stats Row */}
                    <div style={styles.statsRow}>
                      <div style={styles.stat}>
                        <span style={styles.statLabel}>Volumen diario</span>
                        <span style={styles.statValue}>
                          {formatNumber(parseNumber(cruce.volumen_diario))}
                        </span>
                      </div>
                      <div style={styles.stat}>
                        <span style={styles.statLabel}>Espera (peatonal)</span>
                        <span style={styles.statValue}>
                          {cruce.esperas_tipicas?.peatonal_normal || '—'}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <p style={styles.cta}>Ver detalles →</p>
                  </article>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

const styles = {
  main: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 'var(--spacing-lg)',
  },

  hero: {
    marginBottom: 'var(--spacing-2xl)',
    paddingBottom: 'var(--spacing-xl)',
    borderBottom: '1px solid var(--border)',
  },

  heroContent: {
    textAlign: 'center',
  },

  heroIcon: {
    fontSize: '3rem',
    marginBottom: 'var(--spacing-md)',
  },

  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: 'var(--spacing-sm)',
    lineHeight: 1.2,
  },

  subtitle: {
    fontSize: '1.125rem',
    color: 'var(--text-muted)',
    marginBottom: 0,
    lineHeight: 1.6,
  },

  statsSection: {
    marginBottom: 'var(--spacing-3xl)',
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--spacing-md)',
  },

  statCard: {
    padding: 'var(--spacing-lg)',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    textAlign: 'center',
  },

  statNumber: {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--primary)',
    marginBottom: 'var(--spacing-sm)',
  },

  statLabel: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
  },

  countrySection: {
    marginBottom: 'var(--spacing-3xl)',
  },

  countryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 'var(--spacing-md)',
    paddingBottom: 'var(--spacing-md)',
    marginBottom: 'var(--spacing-lg)',
    borderLeft: '4px solid var(--primary)',
  },

  h2: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--text)',
    margin: 0,
  },

  countryBadge: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
    padding: '0.25rem 0.75rem',
    backgroundColor: 'var(--surface)',
    borderRadius: 'var(--radius-full)',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 'var(--spacing-md)',
  },

  card: {
    position: 'relative',
    padding: 'var(--spacing-lg)',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
  },

  countryTag: {
    display: 'inline-block',
    padding: '0.375rem 0.75rem',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 600,
    borderRadius: 'var(--radius-sm)',
    marginBottom: 'var(--spacing-sm)',
    width: 'fit-content',
  },

  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--text)',
    margin: '0 0 var(--spacing-sm) 0',
    lineHeight: 1.3,
  },

  classification: {
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
    fontStyle: 'italic',
    margin: '0 0 var(--spacing-sm) 0',
  },

  location: {
    fontSize: '0.875rem',
    color: 'var(--text-dim)',
    margin: '0 0 var(--spacing-md) 0',
  },

  statsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--spacing-md)',
    padding: 'var(--spacing-md)',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 'var(--radius-sm)',
    marginTop: 'auto',
    marginBottom: 'var(--spacing-md)',
  },

  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },

  statValue: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--text)',
  },

  cta: {
    fontSize: '0.875rem',
    color: 'var(--primary)',
    fontWeight: 500,
    margin: 0,
  },
};
