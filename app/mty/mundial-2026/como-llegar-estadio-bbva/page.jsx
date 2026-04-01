'use client';

import { mundial2026 } from '@/data/mundial';

export const metadata = {
  title: 'Cómo llegar al Estadio BBVA en Metrorrey | Mundial 2026 Monterrey',
  description: 'Ruta de transporte público desde el centro de Monterrey al Estadio BBVA. Metrorrey Línea 1, 35 min, $8 MXN. Guía completa del Mundial 2026.',
  keywords: 'como llegar estadio bbva, ruta transporte publico estadio bbva monterrey, metrorrey estadio bbva, mundial 2026 monterrey',
  openGraph: {
    title: 'Cómo llegar al Estadio BBVA en Metrorrey',
    description: 'Ruta de transporte público desde el centro de Monterrey al Estadio BBVA para los partidos del Mundial 2026.',
    type: 'article',
  },
};

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date
    .toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .replace(/^\w/, c => c.toUpperCase());
}

export default function ComoLlegarEstadioBBVA() {
  const sede = mundial2026.sedes.mty;

  const styles = {
    container: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1f2937',
      backgroundColor: '#ffffff',
      lineHeight: '1.6',
    },
    hero: {
      background: 'linear-gradient(135deg, #EC4899 0%, #db2777 100%)',
      color: '#ffffff',
      padding: '4rem 2rem',
      textAlign: 'center',
      borderBottom: '4px solid #EC4899',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0 0 1rem 0',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      margin: '0.5rem 0 0 0',
      opacity: 0.95,
    },
    section: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '3rem 2rem',
      borderBottom: '1px solid #e5e7eb',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 2rem 0',
      paddingBottom: '1rem',
      borderBottom: '3px solid #EC4899',
    },
    routeCard: {
      background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(219, 39, 119, 0.05) 100%)',
      border: '2px solid #EC4899',
      borderRadius: '12px',
      padding: '2rem',
      marginBottom: '2rem',
    },
    routeCardRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    routeCardStat: {
      flex: '1',
      minWidth: '150px',
    },
    routeCardLabel: {
      color: '#6b7280',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.5rem',
    },
    routeCardValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#EC4899',
    },
    timeline: {
      position: 'relative',
      paddingLeft: '2rem',
    },
    timelineItem: {
      paddingBottom: '2rem',
      borderLeft: '3px solid #e5e7eb',
      position: 'relative',
      marginLeft: '0',
    },
    timelineItemLast: {
      borderLeftColor: 'transparent',
    },
    timelineDot: {
      position: 'absolute',
      left: '-13px',
      top: '0',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: '#EC4899',
      border: '3px solid #ffffff',
      boxShadow: '0 0 0 2px #EC4899',
    },
    timelineContent: {
      marginTop: '0.5rem',
    },
    timelineInstruction: {
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.5rem',
      fontSize: '1rem',
    },
    timelineMeta: {
      display: 'flex',
      gap: '1rem',
      fontSize: '0.85rem',
      color: '#6b7280',
    },
    warningBox: {
      backgroundColor: '#fef3c7',
      border: '2px solid #f59e0b',
      borderRadius: '8px',
      padding: '1.5rem',
      marginTop: '2rem',
      marginBottom: '2rem',
    },
    warningTitle: {
      color: '#d97706',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    warningText: {
      color: '#92400e',
      margin: '0',
    },
    poiGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '1.5rem',
    },
    poiCard: {
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
    },
    poiIcon: {
      fontSize: '1.8rem',
      marginBottom: '0.5rem',
    },
    poiName: {
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.25rem',
    },
    poiType: {
      fontSize: '0.85rem',
      color: '#6b7280',
      marginBottom: '0.5rem',
    },
    poiDetail: {
      fontSize: '0.85rem',
      color: '#4b5563',
    },
    mapAscii: {
      backgroundColor: '#f3f4f6',
      border: '2px solid #d1d5db',
      borderRadius: '8px',
      padding: '2rem',
      marginTop: '2rem',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
      overflowX: 'auto',
      color: '#1f2937',
      lineHeight: '1.4',
    },
    tipsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      marginTop: '1.5rem',
    },
    tipCard: {
      backgroundColor: 'rgba(236, 72, 153, 0.08)',
      border: '1px solid rgba(236, 72, 153, 0.3)',
      borderRadius: '8px',
      padding: '1.5rem',
      borderLeft: '4px solid #EC4899',
    },
    tipIcon: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
    },
    tipText: {
      color: '#1f2937',
      margin: '0',
      fontSize: '0.95rem',
    },
    matchesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      marginTop: '1.5rem',
    },
    matchCard: {
      backgroundColor: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(219, 39, 119, 0.08) 100%)',
      border: '2px solid #EC4899',
      borderRadius: '8px',
      padding: '1.5rem',
      textAlign: 'center',
    },
    matchDate: {
      fontWeight: 'bold',
      color: '#EC4899',
      marginBottom: '0.5rem',
    },
    matchPhase: {
      fontSize: '0.85rem',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.5rem',
    },
    matchEquipos: {
      fontSize: '0.95rem',
      color: '#1f2937',
      marginBottom: '1rem',
      fontStyle: 'italic',
    },
    matchDesc: {
      fontSize: '0.9rem',
      color: '#4b5563',
      fontStyle: 'italic',
    },
    ctaSection: {
      backgroundColor: 'linear-gradient(135deg, #EC4899 0%, #db2777 100%)',
      color: '#ffffff',
      padding: '3rem 2rem',
      textAlign: 'center',
      marginTop: '2rem',
    },
    ctaTitle: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    buttonPrimary: {
      backgroundColor: '#ffffff',
      color: '#EC4899',
    },
    buttonSecondary: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      color: '#ffffff',
      border: '2px solid #ffffff',
    },
    alternatives: {
      backgroundColor: '#f0f9ff',
      border: '1px solid #7dd3fc',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1rem',
    },
    alternativeName: {
      fontWeight: 'bold',
      color: '#0369a1',
      marginBottom: '0.5rem',
    },
    alternativeDesc: {
      color: '#164e63',
      marginBottom: '0.5rem',
    },
    alternativeMeta: {
      display: 'flex',
      gap: '1rem',
      fontSize: '0.85rem',
      color: '#0c4a6e',
    },
  };

  // JSON-LD Schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Monterrey', item: 'https://metroguia.mx/mty' },
      { '@type': 'ListItem', position: 3, name: 'Mundial 2026', item: 'https://metroguia.mx/mty/mundial-2026' },
      { '@type': 'ListItem', position: 4, name: 'Cómo llegar al Estadio BBVA', item: 'https://metroguia.mx/mty/mundial-2026/como-llegar-estadio-bbva' },
    ],
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Estadio BBVA',
    address: {
      '@type': 'PostalAddress',
      streetAddress: sede.direccion.split(',')[0],
      addressLocality: 'Guadalupe',
      addressRegion: 'Nuevo León',
      postalCode: '67140',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: sede.coordenadas.lat,
      longitude: sede.coordenadas.lng,
    },
    capacity: sede.capacidad,
    image: 'https://metroguia.mx/estadio-bbva.jpg',
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo llegar al Estadio BBVA desde el centro de Monterrey',
    description: sede.ruta_desde_centro.descripcion,
    totalTime: `PT${sede.ruta_desde_centro.tiempo}M`,
    estimatedCost: {
      '@type': 'PriceSpecification',
      priceCurrency: 'MXN',
      price: sede.ruta_desde_centro.costo,
    },
    step: sede.ruta_desde_centro.pasos.map((paso, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: paso.instruccion,
      text: paso.instruccion,
      image: 'https://metroguia.mx/icono-paso.jpg',
    })),
  };

  const getTypeIcon = (tipo) => {
    const iconMap = {
      metro: '🚇',
      transbordo: '🔄',
      caminata: '🚶',
      compra: '🎟️',
      'tren-ligero': '🚊',
      llegada: '📍',
    };
    return iconMap[tipo] || '•';
  };

  const getPoiIcon = (tipo) => {
    const iconMap = {
      restaurante: '🍽️',
      'Mercado': '🏬',
      'Street Food': '🍴',
      Variado: '🍽️',
      ATM: '💳',
      Farmacia: '💊',
      'Tienda de conveniencia': '🏪',
      Hotel: '🏨',
      Airbnb: '🏠',
      Parking: '🅿️',
      Taxi: '🚖',
      Rideshare: '🚗',
    };
    return iconMap[tipo] || '📍';
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div style={styles.container}>
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Cómo llegar al Estadio BBVA</h1>
          <p style={styles.heroSubtitle}>
            Tu guía completa de transporte público para el Mundial 2026 en Monterrey
          </p>
        </section>

        {/* ROUTE SUMMARY */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Ruta Recomendada</h2>
          <div style={styles.routeCard}>
            <div style={styles.routeCardRow}>
              <div style={styles.routeCardStat}>
                <div style={styles.routeCardLabel}>Tiempo total</div>
                <div style={styles.routeCardValue}>{sede.ruta_desde_centro.tiempo} min</div>
              </div>
              <div style={styles.routeCardStat}>
                <div style={styles.routeCardLabel}>Costo</div>
                <div style={styles.routeCardValue}>${sede.ruta_desde_centro.costo} MXN</div>
              </div>
              <div style={styles.routeCardStat}>
                <div style={styles.routeCardLabel}>Transporte</div>
                <div style={styles.routeCardValue}>Metrorrey L1</div>
              </div>
              <div style={styles.routeCardStat}>
                <div style={styles.routeCardLabel}>Distancia caminata</div>
                <div style={styles.routeCardValue}>22 min</div>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>
            {sede.ruta_desde_centro.descripcion}
          </h3>

          <div style={styles.timeline}>
            {sede.ruta_desde_centro.pasos.map((paso, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.timelineItem,
                  ...(idx === sede.ruta_desde_centro.pasos.length - 1 && styles.timelineItemLast),
                }}
              >
                <div style={styles.timelineDot} />
                <div style={styles.timelineContent}>
                  <div style={styles.timelineInstruction}>
                    {getTypeIcon(paso.tipo)} {paso.instruccion}
                  </div>
                  <div style={styles.timelineMeta}>
                    {paso.linea && <span>Línea {paso.linea}</span>}
                    <span>{paso.tiempo} min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WARNING */}
        <section style={styles.section}>
          <div style={styles.warningBox}>
            <div style={styles.warningTitle}>⚠️ Advertencia de calor extremo</div>
            <p style={styles.warningText}>
              Los 22 minutos de caminata desde Estación Exposición al estadio BBVA se realizan bajo el sol intenso de
              Monterrey. En junio, las temperaturas pueden superar los 40°C. Lleva agua abundante, gorra y protector
              solar. Considera partir más temprano para caminar en horarios menos calurosos.
            </p>
          </div>
        </section>

        {/* ASCII MAP */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Mapa de Ruta</h2>
          <div style={styles.mapAscii}>
            {`MONTERREY - RUTA METRORREY L1 → ESTADIO BBVA

MACROPLAZA / CENTRO
      ↓
METRORREY LÍNEA 1 (AZUL)
→ Cuauhtémoc
→ Escobedo
→ Barrio Antiguo
→ Alameda
→ San Bernabé
→ Exposición (TERMINAL)
      ↓ (22 min caminando)
Av. Pablo Livas
→ Sigue las señales FIFA
      ↓
ESTADIO BBVA
🏟️ Capacity: 53,500

⏱️  TIEMPO TOTAL: 35 minutos
💵 COSTO: $8 MXN
🚇 Sistema: Metrorrey L1`}
          </div>
        </section>

        {/* ALTERNATIVE ROUTES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Rutas Alternativas</h2>
          {sede.rutas_alternativas.map((ruta, idx) => (
            <div key={idx} style={styles.alternatives}>
              <div style={styles.alternativeName}>{ruta.nombre}</div>
              <div style={styles.alternativeDesc}>{ruta.descripcion}</div>
              <div style={styles.alternativeMeta}>
                <span>⏱️ {ruta.tiempo} min</span>
                <span>💵 ${ruta.costo} MXN</span>
              </div>
            </div>
          ))}
        </section>

        {/* POIS - RESTAURANTS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Dónde comer</h2>
          <div style={styles.poiGrid}>
            {sede.pois.restaurantes.map((poi, idx) => (
              <div key={idx} style={styles.poiCard}>
                <div style={styles.poiIcon}>{getPoiIcon(poi.tipo)}</div>
                <div style={styles.poiName}>{poi.nombre}</div>
                <div style={styles.poiType}>{poi.tipo}</div>
                <div style={styles.poiDetail}>
                  📍 {poi.distancia} {poi.precio && `• ${poi.precio}`}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POIS - SERVICES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Servicios cercanos</h2>
          <div style={styles.poiGrid}>
            {sede.pois.servicios.map((poi, idx) => (
              <div key={idx} style={styles.poiCard}>
                <div style={styles.poiIcon}>{getPoiIcon(poi.tipo)}</div>
                <div style={styles.poiName}>{poi.nombre}</div>
                <div style={styles.poiType}>{poi.tipo}</div>
                <div style={styles.poiDetail}>📍 {poi.distancia}</div>
              </div>
            ))}
          </div>
        </section>

        {/* POIS - LODGING */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Dónde hospedarse</h2>
          <div style={styles.poiGrid}>
            {sede.pois.hospedaje.map((poi, idx) => (
              <div key={idx} style={styles.poiCard}>
                <div style={styles.poiIcon}>{getPoiIcon(poi.tipo)}</div>
                <div style={styles.poiName}>{poi.nombre}</div>
                <div style={styles.poiType}>{poi.tipo}</div>
                <div style={styles.poiDetail}>💰 {poi.rango_precio}</div>
              </div>
            ))}
          </div>
        </section>

        {/* POIS - TRANSPORT */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Transporte adicional</h2>
          <div style={styles.poiGrid}>
            {sede.pois.transporte.map((poi, idx) => (
              <div key={idx} style={styles.poiCard}>
                <div style={styles.poiIcon}>{getPoiIcon(poi.tipo)}</div>
                <div style={styles.poiName}>{poi.nombre}</div>
                <div style={styles.poiType}>{poi.tipo}</div>
                <div style={styles.poiDetail}>
                  {poi.costo ? `💰 ${poi.costo}` : poi.nota}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIPS */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Consejos útiles</h2>
          <div style={styles.tipsGrid}>
            {sede.tips.map((tip, idx) => (
              <div key={idx} style={styles.tipCard}>
                <div style={styles.tipIcon}>
                  {idx % 4 === 0 && '💡'}
                  {idx % 4 === 1 && '⏰'}
                  {idx % 4 === 2 && '💧'}
                  {idx % 4 === 3 && '🎟️'}
                </div>
                <p style={styles.tipText}>{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MATCHES */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Partidos en el Estadio BBVA</h2>
          <div style={styles.matchesGrid}>
            {sede.partidos.map((partido, idx) => (
              <div key={idx} style={styles.matchCard}>
                <div style={styles.matchDate}>{formatDate(partido.fecha)}</div>
                <div style={styles.matchPhase}>{partido.fase}</div>
                <div style={styles.matchEquipos}>{partido.equipos}</div>
                <div style={styles.matchDesc}>{partido.descripcion}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Prepárate para el Mundial</h2>
          <div style={styles.buttonGroup}>
            <a
              href="/mundial-2026/partidos/"
              style={{ ...styles.button, ...styles.buttonPrimary }}
            >
              Ver calendario de partidos
            </a>
            <a
              href="/mty/mundial-2026/"
              style={{ ...styles.button, ...styles.buttonSecondary }}
            >
              Volver a Monterrey
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
