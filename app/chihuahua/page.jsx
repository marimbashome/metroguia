import { lineasChihuahua } from '@/data/chihuahua/lineas-detalle';
import { estacionesChihuahua } from '@/data/chihuahua/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'Chepe Express y Chihuahua — Barrancas del Cobre | MetroGuia',
  description: 'Guía completa del Chepe Express (Ferrocarril Chihuahua al Pacífico). 673 km a través de las Barrancas del Cobre, más profundas que el Gran Cañón.',
  openGraph: {
    title: 'Chepe Express — La Ruta de Tren Más Espectacular de México',
    description: 'Viaja 673 km desde Chihuahua a Los Mochis a través de las legendarias Barrancas del Cobre. El tren más espectacular del mundo.',
    url: 'https://metroguia.mx/chihuahua',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChihuahuaPage() {
  const estacionesDestacadas = estacionesChihuahua.filter(e =>
    ['chihuahua-central', 'creel', 'divisadero', 'el-fuerte', 'los-mochis', 'centro-chihuahua'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, #D97706 0%, #92400E 100%)',
    color: '#ffffff',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const sectionTitleStyles = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1f2937',
    textAlign: 'center',
  };

  const lineaCardStyles = {
    backgroundColor: '#f9fafb',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
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
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const infoBoxStyles = {
    backgroundColor: '#FEF3C7',
    borderLeft: '4px solid #D97706',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#D97706',
    color: '#ffffff',
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

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
          🏔️ Chepe Express
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          El Tren Más Espectacular del Mundo
        </p>
        <p style={{ fontSize: '16px', opacity: '0.95' }}>
          673 km • Barrancas del Cobre • 16 horas de aventura pura
        </p>
      </section>

      {/* SECCIÓN ESPECIAL: EL CHEPE COMO VIAJE EXPERIENCIAL */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>El Chepe Express — La Ruta Más Espectacular de México</h2>
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
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyles}>Explora el Chepe</h2>
        <p style={{ fontSize: '16px', color: '#374151', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
          Selecciona una ruta para conocer todas las estaciones, tips y experiencias del viaje más espectacular en tren de México.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/chihuahua/linea/1" style={ctaButtonStyles}>
            Ver Chepe Express
          </Link>
          <Link href="/chihuahua/linea/2" style={ctaButtonStyles}>
            Ver Chihuahua Ciudad
          </Link>
        </div>
      </section>
    </main>
  );
}
