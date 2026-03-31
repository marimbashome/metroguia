import { lineasChihuahua } from '@/data/chihuahua/lineas-detalle';
import { estacionesChihuahua } from '@/data/chihuahua/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export function generateMetadata() {
  return {
    title: 'Chepe Express y BRT Bowí — Chihuahua Transporte y Barrancas | MetroGuia',
    description: 'Guía completa de Chihuahua: Chepe Express (673 km por Barrancas del Cobre) y BRT Bowí (transporte rápido moderno). 3 líneas de transporte disponibles.',
    keywords: 'Chepe Express, Chihuahua, Barrancas del Cobre, BRT Bowí, tren, transporte, viaje turístico, Creel, Divisadero, Rarámuri',
    openGraph: {
      title: 'Chihuahua — Chepe Express y BRT Bowí',
      description: 'Explora Chihuahua con el Chepe Express (673 km tren) y BRT Bowí (22 km transporte rápido). Barrancas del Cobre y conectividad moderna.',
      url: 'https://metroguia.mx/chihuahua',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ChihuahuaPage() {
  const estacionesDestacadas = estacionesChihuahua.filter(e =>
    ['chihuahua-central', 'creel', 'divisadero', 'el-fuerte', 'los-mochis', 'centro-chihuahua'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(217, 119, 6, 0.08) 100%)',
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

  const infoBoxStyles = {
    backgroundColor: 'rgba(217, 119, 6, 0.08)',
    borderLeft: '4px solid #D97706',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
    color: 'var(--text)',
  };

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#D97706',
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
        name: 'Chihuahua',
        item: 'https://metroguia.mx/chihuahua/'
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
          <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold', color: '#D97706' }}>
            Chepe Express
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-muted)' }}>
            El Tren Más Espectacular del Mundo
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            673 km • Barrancas del Cobre • 16 horas de aventura pura
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#D97706' }}>673</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Kilómetros</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#D97706' }}>16</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Horas de Viaje</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#D97706' }}>6</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Cañones Profundos</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ESPECIAL: EL CHEPE COMO VIAJE EXPERIENCIAL */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>El Chepe Express — La Ruta Más Espectacular de México</h2>
        <AdBannerLazy slot="4434764790" format="auto" />
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>El Ferrocarril Chihuahua al Pacífico (Chepe Express)</strong> es uno de los viajes en tren más espectaculares del mundo. Durante 16 horas, recorres 673 kilómetros atravesando las legendarias <strong>Barrancas del Cobre</strong> — seis barrancas que son más profundas y abruptas que el Gran Cañón de Arizona.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Recorrido épico:</strong> Chihuahua → Los Mochis, Sinaloa en 16 horas</li>
            <li><strong>Barrancas del Cobre:</strong> 6 cañones profundos, patrimonio natural mexicano</li>
            <li><strong>Paradas icónicas:</strong> Creel (Pueblo Mágico), Divisadero (mirador legendario), El Fuerte (pueblo colonial)</li>
            <li><strong>Altitud máxima:</strong> Creel a 2,338 msnm — aclimatación necesaria</li>
            <li><strong>Comunidades Rarámuri:</strong> Los Tarahumaras viven en las profundidades de las barrancas</li>
            <li><strong>Costo:</strong> Aproximadamente $1,500-$2,500 MXN (Chepe Express turístico)</li>
            <li><strong>Reserva:</strong> Imprescindible con anticipación, especialmente en temporada alta</li>
          </ul>
        </div>
      </section>

      {/* BARRANCAS DEL COBRE */}
      <section style={{ ...containerStyles, backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Las Barrancas del Cobre (Copper Canyon)</h2>
        <AdBannerLazyInArticle slot="1082410395" />
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Profundidad Impresionante
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Más profundas que el Gran Cañón. La barranca más profunda tiene 1,500 metros de desnivel vertical, creando paisajes de belleza incomparable.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Comunidades Rarámuri
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Los Tarahumaras (Rarámuri) han vivido en estas barrancas por siglos. Mantienen su cultura, idioma y tradiciones auténticas.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Divisadero: El Mirador Legendario
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Punto icónico donde el Chepe se detiene. Vistas de 1,500 metros verticales. El momento más fotogénico del viaje.
            </p>
          </div>
        </div>
      </section>

      {/* LÍNEAS/RUTAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Rutas Disponibles</h2>
        <div style={gridStyles}>
          {lineasChihuahua.map((linea) => (
            <Link
              key={linea.id}
              href={`/chihuahua/linea/${linea.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  {linea.id === '1' ? 'Chepe Express' : 'Línea Urbana'}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: '#D97706', fontWeight: 'bold' }}>
                  {linea.total} paradas • {linea.municipios.slice(0, 3).join(', ')}{linea.municipios.length > 3 ? '...' : ''}
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
              href={`/chihuahua/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '8px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                  {estacion.linea === '1' ? 'Chepe Express' : 'Línea Urbana'} • {estacion.municipio}
                </p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TIPS PARA EL CHEPE */}
      <section style={{ ...containerStyles, backgroundColor: '#FEF3C7', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>Tips Esenciales para Viajar en el Chepe</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>Reservas</h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Reservá con 2-3 meses de anticipación. Los boletos se agotan rápido, especialmente en temporada alta (diciembre-abril).
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>Ropa y Abrigo</h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Creel está a 2,338 msnm. En invierno baja a -5°C. Lleva abrigo, suéter y capas. Los autobuses tienen aire acondicionado.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>Comida a Bordo</h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              El Chepe ofrece desayuno, comida y cena. La comida es regional chihuahuense. Trae snacks adicionales si eres delicado.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>Pasaporte</h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              El viaje termina en Sinaloa. Lleva pasaporte válido aunque sea mexicano, por protocolo aduanal.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>Aclimatación</h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Descansa la noche anterior. Bebe mucha agua. El cambio de altitud es drástico (de 1,400 a 2,338 msnm).
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>Cámara Imprescindible</h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Lleva cámara o celular con batería cargada. Las vistas son inolvidables. Divisadero es el punto más fotogénico.
            </p>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN ADICIONAL */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre Chihuahua</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Historia Revolucionaria
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Chihuahua fue cuna de la Revolución Mexicana. Pancho Villa, Emilio Zapata y Benito Juárez dejaron su huella en la ciudad. Murales revolucionarios en el Palacio de Gobierno.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Centro Histórico
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Catedral Metropolitana neoclásica del siglo XVIII. Zócalo histórico. Murales de Aarón Piña Mora en el Palacio de Gobierno. Arquitectura colonial intacta.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Quinta Gameros
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Único ejemplo de Art Nouveau en México. Mansión del año 1910 convertida en museo. Arquitectura y decoración impresionantes.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Gastronomía
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Carne asada chihuahuense, quesos frescos, dried beef (machaca). Los mercados locales ofrecen auténtica cocina regional.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Clima
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Chihuahua ciudad: 1,400 msnm, clima árido-templado. Inviernos fríos (-5°C), veranos calurosos (30°C). Las barrancas son más cálidas.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#D97706', marginBottom: '10px' }}>
              Comunidades Rarámuri
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Los Tarahumaras viven en las Barrancas del Cobre. Cultura milenaria, idioma propio, tradiciones artesanales. Respeta su privacidad y cultura.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--text)' }}>
          Explora Chihuahua
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
          Selecciona una ruta para conocer todas las estaciones, tips y experiencias. Desde el legendario Chepe hasta el moderno BRT Bowí.
        </p>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/chihuahua/linea/1" style={ctaButtonStyles}>
            Ver Chepe Express
          </Link>
          <Link href="/chihuahua/linea/2" style={ctaButtonStyles}>
            Ver Chihuahua Ciudad
          </Link>
          <Link href="/chihuahua/linea/3" style={{ ...ctaButtonStyles, backgroundColor: '#2563EB' }}>
            Ver BRT Bowí
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
