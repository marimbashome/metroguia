'use client';

import { mundial2026 } from '@/data/mundial';

const sede = mundial2026.sedes.gdl;

export const metadata = {
  title: 'Cómo llegar al Estadio Akron en transporte público — Mundial 2026',
  description: 'Ruta completa desde el centro de Guadalajara al Estadio Akron usando Línea 3 SITEUR. 40 minutos, $10 MXN. Horarios, alternativas y tips.',
  keywords: ['como llegar estadio akron', 'ruta transporte publico estadio akron mundial 2026', 'linea 3 siteur akron', 'mi tren guadalajara estadio'],
  canonical: 'https://metroguia.mx/gdl/mundial-2026/como-llegar-estadio-akron/',
  openGraph: {
    title: 'Cómo llegar al Estadio Akron — Mundial 2026 Guadalajara',
    description: 'Línea 3 SITEUR desde el centro: 40 min, $10 MXN + 20 min caminando',
    url: 'https://metroguia.mx/gdl/mundial-2026/como-llegar-estadio-akron/',
    images: [{ url: 'https://metroguia.mx/og-akron-2026.jpg', width: 1200, height: 630 }],
  },
};

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(/^\w/, c => c.toUpperCase());
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.03) 0%, rgba(6, 182, 212, 0.01) 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1f2937',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
  },

  // Hero
  hero: {
    background: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)',
    color: 'white',
    padding: '60px 20px',
    marginBottom: '40px',
    borderRadius: '12px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '900',
    marginBottom: '12px',
    letterSpacing: '-1px',
  },
  heroSubtitle: {
    fontSize: '18px',
    opacity: 0.95,
    marginBottom: '24px',
    lineHeight: '1.6',
  },
  heroMeta: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  },
  heroCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    padding: '15px 20px',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  heroCardLabel: {
    fontSize: '12px',
    opacity: 0.85,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '6px',
  },
  heroCardValue: {
    fontSize: '24px',
    fontWeight: '700',
  },

  // Section
  section: {
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '900',
    marginBottom: '24px',
    color: '#0f172a',
    paddingBottom: '12px',
    borderBottom: '3px solid #06B6D4',
  },

  // Timeline
  timeline: {
    position: 'relative',
    paddingLeft: '40px',
  },
  timelineItem: {
    marginBottom: '32px',
    paddingBottom: '32px',
    borderLeft: '3px solid rgba(6, 182, 212, 0.3)',
    paddingLeft: '24px',
    position: 'relative',
  },
  timelineItemLast: {
    borderLeft: 'none',
  },
  timelineDot: {
    position: 'absolute',
    left: '-41px',
    top: '2px',
    width: '32px',
    height: '32px',
    background: '#06B6D4',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: '14px',
  },
  timelineIcon: {
    fontSize: '18px',
    marginRight: '8px',
  },
  timelineText: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '8px',
    color: '#374151',
  },
  timelineTime: {
    fontSize: '13px',
    color: '#06B6D4',
    fontWeight: '600',
  },

  // Summary Card
  summaryCard: {
    background: 'white',
    border: '2px solid #06B6D4',
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginBottom: '24px',
  },
  summaryItem: {
    textAlign: 'center',
  },
  summaryLabel: {
    fontSize: '12px',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  summaryValue: {
    fontSize: '28px',
    fontWeight: '900',
    color: '#06B6D4',
  },
  summaryAlert: {
    background: '#fef3c7',
    border: '1px solid #fcd34d',
    borderRadius: '8px',
    padding: '16px',
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
  },
  summaryAlertText: {
    fontSize: '14px',
    color: '#78350f',
    lineHeight: '1.5',
  },

  // Route Map (ASCII)
  routeMap: {
    background: '#f3f4f6',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    fontFamily: 'monospace',
    fontSize: '13px',
    overflow: 'auto',
    marginBottom: '32px',
  },
  routeMapCode: {
    color: '#374151',
    lineHeight: '1.8',
  },

  // Grid cards (alternatives, POIs, tips)
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  card: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 20px rgba(6, 182, 212, 0.15)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#0f172a',
  },
  cardText: {
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: '1.6',
  },

  // POI sections
  poiCategory: {
    marginBottom: '32px',
  },
  poiCategoryTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#0f172a',
    paddingBottom: '8px',
    borderBottom: '2px solid rgba(6, 182, 212, 0.2)',
  },
  poiList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  poiItem: {
    background: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    borderLeft: '4px solid #06B6D4',
  },
  poiItemName: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '6px',
  },
  poiItemType: {
    fontSize: '12px',
    color: '#06B6D4',
    fontWeight: '600',
    marginBottom: '6px',
  },
  poiItemDetail: {
    fontSize: '13px',
    color: '#6b7280',
  },

  // Match schedule
  matchGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  matchCard: {
    background: 'white',
    border: '2px solid #06B6D4',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(6, 182, 212, 0.1)',
  },
  matchDate: {
    fontSize: '12px',
    color: '#06B6D4',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  matchFase: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '8px',
  },
  matchTeams: {
    fontSize: '14px',
    color: '#4b5563',
    fontStyle: 'italic',
    marginBottom: '12px',
  },
  matchDesc: {
    fontSize: '13px',
    color: '#6b7280',
    lineHeight: '1.5',
  },

  // CTA Section
  ctaSection: {
    background: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)',
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center',
    color: 'white',
    marginTop: '60px',
  },
  ctaTitle: {
    fontSize: '28px',
    fontWeight: '900',
    marginBottom: '16px',
  },
  ctaText: {
    fontSize: '16px',
    marginBottom: '32px',
    opacity: 0.95,
    lineHeight: '1.6',
  },
  ctaButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '14px 32px',
    background: 'white',
    color: '#06B6D4',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '15px',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  ctaButtonAlt: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid white',
  },

  // Tips grid
  tipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  tipCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    borderRadius: '8px',
    padding: '16px',
  },
  tipIcon: {
    fontSize: '24px',
    marginBottom: '8px',
  },
  tipText: {
    fontSize: '14px',
    color: '#0f172a',
    lineHeight: '1.5',
    fontWeight: '500',
  },

  // Breadcrumb
  breadcrumb: {
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  breadcrumbLink: {
    color: '#06B6D4',
    textDecoration: 'none',
    fontWeight: '600',
  },
  breadcrumbSeparator: {
    color: '#d1d5db',
  },
};

export default function ComoLlegarEstadioDelta() {
  const routeMap = `
    RUTA LÍNEA 3 SITEUR — Estadio Akron

    Centro (Juárez)
            ↓
     ╔══════════════╗
     ║  Línea 3     ║  Mi Tren
     ║  15 minutos  ║  (cyan/turquesa)
     ╚══════════════╝
            ↓
    Estación Chivas
    (Periférico Norte)
            ↓
     📍 Esquina Av. de las Rosas
            ↓
     ═══════════════════════════
     →→→ 20 MINUTOS CAMINANDO ←←←
     ═══════════════════════════
            ↓
        ⚽ ESTADIO AKRON ⚽
      Av. de las Rosas 3800
       Chapalita, Zapopan

    Tiempo total: 40 minutos
    Costo: $10 MXN (boleto SITEUR)
  `;

  return (
    <div style={styles.page}>
      <style>{`
        a:hover { text-decoration: underline; }
        * { box-sizing: border-box; }
      `}</style>

      <div style={styles.container}>

        {/* Breadcrumb */}
        <div style={styles.breadcrumb}>
          <a href="/" style={styles.breadcrumbLink}>Inicio</a>
          <span style={styles.breadcrumbSeparator}>›</span>
          <a href="/gdl" style={styles.breadcrumbLink}>Guadalajara</a>
          <span style={styles.breadcrumbSeparator}>›</span>
          <a href="/gdl/mundial-2026" style={styles.breadcrumbLink}>Mundial 2026</a>
          <span style={styles.breadcrumbSeparator}>›</span>
          <span>Cómo llegar al Estadio Akron</span>
        </div>

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://metroguia.mx/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Guadalajara",
              "item": "https://metroguia.mx/gdl"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Mundial 2026",
              "item": "https://metroguia.mx/gdl/mundial-2026"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Cómo llegar al Estadio Akron",
              "item": "https://metroguia.mx/gdl/mundial-2026/como-llegar-estadio-akron/"
            }
          ]
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Cómo llegar al Estadio Akron desde el centro de Guadalajara",
          "description": "Guía paso a paso para llegar al Estadio Akron usando transporte público",
          "totalTime": "PT40M",
          "cost": {
            "@type": "PriceSpecification",
            "priceCurrency": "MXN",
            "price": "10"
          },
          "step": sede.ruta_desde_centro.pasos.map((paso, idx) => ({
            "@type": "HowToStep",
            "position": idx + 1,
            "name": paso.instruccion,
            "duration": `PT${paso.tiempo}M`
          }))
        }) }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": sede.estadio,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": sede.direccion
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": sede.coordenadas.lat,
            "longitude": sede.coordenadas.lng
          },
          "capacity": sede.capacidad,
          "eventType": "Sports Event",
          "event": {
            "@type": "SportsEvent",
            "name": "FIFA World Cup 2026",
            "startDate": "2026-06-11",
            "endDate": "2026-07-12",
            "location": {
              "@type": "Place",
              "name": sede.estadio
            }
          }
        }) }} />

        {/* Hero Section */}
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Cómo llegar al Estadio Akron</h1>
          <p style={styles.heroSubtitle}>
            Transporte público desde el centro de Guadalajara hacia la casa del Rebaño Sagrado en la Copa del Mundo 2026
          </p>

          <div style={styles.heroMeta}>
            <div style={styles.heroCard}>
              <div style={styles.heroCardLabel}>Tiempo total</div>
              <div style={styles.heroCardValue}>{sede.ruta_desde_centro.tiempo} min</div>
            </div>
            <div style={styles.heroCard}>
              <div style={styles.heroCardLabel}>Costo boleto</div>
              <div style={styles.heroCardValue}>${sede.ruta_desde_centro.costo} MXN</div>
            </div>
            <div style={styles.heroCard}>
              <div style={styles.heroCardLabel}>Línea</div>
              <div style={styles.heroCardValue}>L3 SITEUR</div>
            </div>
            <div style={styles.heroCard}>
              <div style={styles.heroCardLabel}>Estación</div>
              <div style={styles.heroCardValue}>Chivas</div>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div style={styles.summaryCard}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', color: '#0f172a' }}>
            Resumen de la ruta
          </h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
            Desde el centro de Guadalajara (Estación Juárez) toma la <strong>Línea 3 del SITEUR (Mi Tren)</strong> con dirección a Arcos de Zapopan. Baja en la estación Chivas/Periférico Norte y camina 20 minutos siguiendo las señalizaciones hacia el Estadio Akron en Avenida de las Rosas.
          </p>

          <div style={styles.summaryAlert}>
            <span style={{ fontSize: '20px' }}>⚠️</span>
            <div>
              <strong style={{ color: '#92400e', display: 'block', marginBottom: '4px' }}>Caminata importante desde la estación</strong>
              <div style={styles.summaryAlertText}>
                Son 20 minutos caminando desde Estación Chivas hasta el estadio. En días de partido hay servicio de autobús lanzadera disponible.
              </div>
            </div>
          </div>
        </div>

        {/* Route Map */}
        <div style={{ ...styles.section, marginBottom: '50px' }}>
          <h2 style={styles.sectionTitle}>Mapa de la ruta</h2>
          <div style={styles.routeMap}>
            <pre style={styles.routeMapCode}>{routeMap}</pre>
          </div>
        </div>

        {/* Step-by-step Timeline */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Instrucciones paso a paso</h2>
          <div style={styles.timeline}>
            {sede.ruta_desde_centro.pasos.map((paso, idx) => {
              const iconMap = {
                'metro': '🚇',
                'tren-ligero': '🚆',
                'caminata': '🚶',
                'llegada': '🎯',
                'transbordo': '↗️',
                'compra': '🎫',
              };

              return (
                <div
                  key={idx}
                  style={{
                    ...styles.timelineItem,
                    ...(idx === sede.ruta_desde_centro.pasos.length - 1 ? styles.timelineItemLast : {})
                  }}
                >
                  <div style={styles.timelineDot}>
                    {String(idx + 1)}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                    <span style={styles.timelineIcon}>{iconMap[paso.tipo] || '✓'}</span>
                    <div style={styles.timelineText}>{paso.instruccion}</div>
                  </div>
                  {paso.tiempo > 0 && (
                    <div style={styles.timelineTime}>
                      ⏱️ {paso.tiempo} minuto{paso.tiempo > 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Alertas */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>⚠️ Alertas importantes</h2>
          <div style={styles.grid}>
            {sede.ruta_desde_centro.alertas.map((alerta, idx) => (
              <div key={idx} style={styles.card}>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>🚨</div>
                <p style={styles.cardText}>{alerta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rutas alternativas */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Rutas alternativas</h2>
          <div style={styles.grid}>
            {sede.rutas_alternativas.map((ruta, idx) => (
              <div key={idx} style={styles.card}>
                <h3 style={styles.cardTitle}>{ruta.nombre}</h3>
                <p style={{ ...styles.cardText, marginBottom: '12px' }}>{ruta.descripcion}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#06B6D4', fontWeight: '600' }}>
                  <span>⏱️ {ruta.tiempo} min</span>
                  <span>💵 ${ruta.costo} MXN</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POIs */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🏢 Lugares de interés cerca del estadio</h2>

          <div style={styles.poiCategory}>
            <h3 style={styles.poiCategoryTitle}>🍽️ Restaurantes y comida</h3>
            <div style={styles.poiList}>
              {sede.pois.restaurantes.map((poi, idx) => (
                <div key={idx} style={styles.poiItem}>
                  <div style={styles.poiItemName}>{poi.nombre}</div>
                  <div style={styles.poiItemType}>{poi.tipo}</div>
                  <div style={styles.poiItemDetail}>
                    📍 {poi.distancia} {poi.precio && `• ${poi.precio}`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.poiCategory}>
            <h3 style={styles.poiCategoryTitle}>🏪 Servicios (ATMs, farmacias, tiendas)</h3>
            <div style={styles.poiList}>
              {sede.pois.servicios.map((poi, idx) => (
                <div key={idx} style={styles.poiItem}>
                  <div style={styles.poiItemName}>{poi.nombre}</div>
                  <div style={styles.poiItemType}>{poi.tipo}</div>
                  <div style={styles.poiItemDetail}>📍 {poi.distancia}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.poiCategory}>
            <h3 style={styles.poiCategoryTitle}>🏨 Hospedaje</h3>
            <div style={styles.poiList}>
              {sede.pois.hospedaje.map((poi, idx) => (
                <div key={idx} style={styles.poiItem}>
                  <div style={styles.poiItemName}>{poi.nombre}</div>
                  <div style={styles.poiItemType}>{poi.tipo}</div>
                  <div style={styles.poiItemDetail}>💰 {poi.rango_precio}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.poiCategory}>
            <h3 style={styles.poiCategoryTitle}>🚗 Transporte (estacionamiento, taxis, rideshare)</h3>
            <div style={styles.poiList}>
              {sede.pois.transporte.map((poi, idx) => (
                <div key={idx} style={styles.poiItem}>
                  <div style={styles.poiItemName}>{poi.nombre}</div>
                  <div style={styles.poiItemType}>{poi.tipo}</div>
                  <div style={styles.poiItemDetail}>
                    {poi.costo ? `💰 ${poi.costo}` : poi.nota}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>💡 Tips y recomendaciones</h2>
          <div style={styles.tipsGrid}>
            {sede.tips.map((tip, idx) => (
              <div key={idx} style={styles.tipCard}>
                <div style={styles.tipIcon}>
                  {idx === 0 ? '🕐' : idx === 1 ? '🌡️' : idx === 2 ? '🚌' : idx === 3 ? '💵' : idx === 4 ? '👕' : '🚗'}
                </div>
                <div style={styles.tipText}>{tip}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Match Schedule */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>⚽ Partidos en el Estadio Akron</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', marginBottom: '24px' }}>
            Estos son los partidos confirmados que se jugarán en el Estadio Akron durante la Copa del Mundo 2026.
          </p>
          <div style={styles.matchGrid}>
            {sede.partidos.map((partido, idx) => (
              <div key={idx} style={styles.matchCard}>
                <div style={styles.matchDate}>{formatDate(partido.fecha)}</div>
                <div style={styles.matchFase}>{partido.fase}</div>
                <div style={styles.matchTeams}>{partido.equipos}</div>
                <div style={styles.matchDesc}>{partido.descripcion}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Asegura tus entradas al Mundial 2026</h2>
          <p style={styles.ctaText}>
            Acceso a todos los partidos confirmados en Guadalajara. El Estadio Akron será escenario de la pasión futbolística.
          </p>
          <div style={styles.ctaButtons}>
            <a
              href="/gdl/mundial-2026/partidos/"
              style={styles.ctaButton}
              onMouseEnter={e => e.target.style.opacity = '0.9'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              Ver todos los partidos
            </a>
            <a
              href="/gdl/mundial-2026/"
              style={{ ...styles.ctaButton, ...styles.ctaButtonAlt }}
              onMouseEnter={e => e.target.style.opacity = '0.9'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              Volver a Mundial 2026
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}