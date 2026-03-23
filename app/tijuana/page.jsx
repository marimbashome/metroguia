import { lineasTijuana } from '@/data/tijuana/lineas-detalle';
import { estacionesTijuana } from '@/data/tijuana/estaciones';
import Link from 'next/link';

export function generateMetadata() {
  return {
    title: 'Tijuana — Guía Turística Completa FIFA 2026 | MetroGuia',
    description: 'Guía completa de Tijuana. Frontera, gastronomía, playas y conexión a San Diego, sede FIFA 2026. 80 millones de cruces fronterizos al año.',
    keywords: 'Tijuana, frontera, gastronomía mexicana, San Diego FIFA 2026, tacos adobada, Valle de Guadalupe, Zona Río',
    openGraph: {
      title: 'Tijuana — Tu Base para el Mundial 2026 en San Diego',
      description: 'Alójate en Tijuana (35% más barato) y cruza a San Diego para los partidos. A 5 minutos a pie del cruce fronterizo.',
      url: 'https://metroguia.mx/tijuana',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TijuanaPage() {
  const estacionesDestacadas = estacionesTijuana.filter(e =>
    ['san-ysidro-frontera', 'plaza-rio', 'zona-centro', 'mercado-hidalgo', 'playas-tj', 'plaza-santa-cecilia'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(107, 114, 128, 0.08) 100%)',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text)',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    color: 'var(--text)',
  };

  const sectionTitleStyles = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: 'var(--text)',
    textAlign: 'center',
    paddingBottom: '15px',
    borderBottom: '2px solid var(--border)',
  };

  const lineaCardStyles = {
    backgroundColor: 'var(--surface)',
    border: '2px solid var(--border)',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: 'var(--text)',
  };

  const colorDotStyles = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    marginRight: '10px',
    verticalAlign: 'middle',
  };

  const estacionCardStyles = {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    color: 'var(--text)',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const fifaBoxStyles = {
    backgroundColor: 'rgba(220, 38, 38, 0.08)',
    borderLeft: '4px solid #DC2626',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
    color: 'var(--text)',
  };

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#6B7280',
    color: 'var(--text)',
    padding: '14px 28px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tijuana',
        item: 'https://metroguia.mx/tijuana/'
      }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold', color: '#6B7280' }}>
            Tijuana
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-muted)' }}>
            La Ciudad Más Visitada del Mundo
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            80 millones de cruces fronterizos • Gastronomía legendaria • Playas del Pacífico
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#6B7280' }}>80M</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Cruces al Año</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#6B7280' }}>35%</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Ahorro vs San Diego</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#6B7280' }}>5min</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>A San Diego</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ESPECIAL: FIFA 2026 / SAN DIEGO */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>🏆 FIFA 2026 — Alójate en Tijuana, Juega en San Diego</h2>
        <div style={fifaBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#7F1D1D', marginBottom: '15px' }}>
            <strong>San Diego es sede del FIFA World Cup 2026</strong> con 6 partidos importantes (incluyendo cuartos de final). Pero hotel en San Diego cuesta 35% más que en Tijuana.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#7F1D1D', paddingLeft: '20px' }}>
            <li><strong>San Diego sede:</strong> SoFi Stadium (Inglewood) y otros estadios de la región</li>
            <li><strong>Cruce a pie:</strong> San Ysidro a San Diego en solo 5 minutos, sin auto necesario</li>
            <li><strong>Ahorro:</strong> Hotel en Tijuana 35-50% más barato que San Diego</li>
            <li><strong>Conexión Trolley:</strong> Desde San Ysidro al SoFi Stadium: 45 minutos en transporte público</li>
            <li><strong>Comidas:</strong> Gastronomía 50% más barata que California</li>
            <li><strong>Partidos en San Diego:</strong> 6 encuentros, incluyendo cuartos de final</li>
            <li><strong>Cruce sin auto:</strong> Entra a EEUU a pie, regresa a Tijuana igual</li>
          </ul>
        </div>
      </section>

      {/* SOBRE TIJUANA */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre Tijuana</h2>
        <div style={{ backgroundColor: '#F3F4F6', borderLeft: '4px solid #6B7280', padding: '20px', marginBottom: '20px', borderRadius: '4px' }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>Tijuana</strong> es la ciudad más visitada del mundo. Más de 80 millones de personas cruzan la frontera anualmente. Hogar de la gastronomía mexicana de clase mundial, playas del Pacífico y punto de conexión cultural entre México y EEUU.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Cruce Fronterizo San Ysidro:</strong> El más transitado del mundo</li>
            <li><strong>Tacos de Adobada:</strong> Cuna del taco adobada, platillo legendario</li>
            <li><strong>La Margarita:</strong> Inventada en Tijuana (Hotel Cesar's)</li>
            <li><strong>Valle de Guadalupe:</strong> Región vitivinícola ('Napa Valley de México') a 45 min</li>
            <li><strong>Zona Río:</strong> Centro gastronómico de clase mundial</li>
            <li><strong>Playas del Pacífico:</strong> Restaurantes de mariscos frescos</li>
            <li><strong>Mariachis:</strong> Música mexicana en vivo tradicional</li>
            <li><strong>Gastronomía:</strong> Mejor comida callejera de México</li>
          </ul>
        </div>
      </section>

      {/* LÍNEAS/RUTAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Rutas de Transporte Disponibles</h2>
        <div style={gridStyles}>
          {lineasTijuana.map((linea) => (
            <Link
              key={linea.id}
              href={`/tijuana/linea/${linea.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  Línea {linea.id}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: '#6B7280', fontWeight: 'bold' }}>
                  {linea.total} paradas • {linea.municipios.join(', ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ESTACIONES DESTACADAS */}
      <section style={{ ...containerStyles, backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Estaciones Imprescindibles</h2>
        <div style={gridStyles}>
          {estacionesDestacadas.map((estacion) => (
            <Link
              key={estacion.slug}
              href={`/tijuana/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '8px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                  Línea {estacion.linea} • {estacion.municipio}
                </p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GASTRONOMÍA Y EXPERIENCIAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Qué Hacer en Tijuana</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '10px' }}>
              Tacos de Adobada
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Tijuana es la cuna del taco adobada. Carne marinada y asada al carbón. Mercado Hidalgo es el lugar legendario para probar los mejores.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '10px' }}>
              Zona Río (Gastronomía Gourmet)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Centro gastronómico de clase mundial. Restaurantes que compiten con San Diego. Chef Javier Plascencia es legendario aquí.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '10px' }}>
              Playas de Tijuana
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Restaurantes de mariscos frescos frente al Océano Pacífico. Ceviche, camarones al ajillo, tostadas. Atardecer espectacular.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '10px' }}>
              Valle de Guadalupe
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              El Napa Valley de México. Viñedos, bodegas y restaurantes gastronómicos. A 45 minutos de Tijuana. Experiencia de lujo.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '10px' }}>
              Avenida Revolución (Centro)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Centro histórico de Tijuana. Tiendas de artesanías, bares y cantinas. Ambiente festivo tradicional mexicano.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#6B7280', marginBottom: '10px' }}>
              Mariachis (Plaza Santa Cecilia)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Música mexicana en vivo. Mariachis disponibles para contratar. Restaurantes con mariachis actuando en vivo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--text)' }}>
          Explora Tijuana
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
          Selecciona una ruta para conocer todas las estaciones, tips y experiencias gastronómicas de Tijuana. Tu puerta a San Diego y el Mundial 2026.
        </p>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/tijuana/linea/1" style={ctaButtonStyles}>
            Ver Línea 1 (Frontera)
          </Link>
          <Link href="/tijuana/linea/2" style={ctaButtonStyles}>
            Ver Línea 2 (Cultura)
          </Link>
        </div>

        {/* FOOTER: Links to other cities */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginTop: '40px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>
            Explora Otros Destinos
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
            <Link href="/cdmx" style={{ textDecoration: 'none', color: '#E91E8C', fontWeight: '500', fontSize: '14px' }}>Metro CDMX</Link>
            <Link href="/gdl" style={{ textDecoration: 'none', color: '#FF6B2C', fontWeight: '500', fontSize: '14px' }}>RIT Guadalajara</Link>
            <Link href="/mty" style={{ textDecoration: 'none', color: '#00A884', fontWeight: '500', fontSize: '14px' }}>Línea 1 Monterrey</Link>
            <Link href="/puebla" style={{ textDecoration: 'none', color: '#8B5CF6', fontWeight: '500', fontSize: '14px' }}>RUTA Puebla</Link>
            <Link href="/merida" style={{ textDecoration: 'none', color: '#F59E0B', fontWeight: '500', fontSize: '14px' }}>SIT Mérida</Link>
            <Link href="/queretaro" style={{ textDecoration: 'none', color: '#EF4444', fontWeight: '500', fontSize: '14px' }}>Q-BUS Querétaro</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
