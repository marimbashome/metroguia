import { lineasPuebla } from '@/data/puebla/lineas-detalle';
import { estacionesPuebla } from '@/data/puebla/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'RUTA BRT Puebla — Guía turística completa | MetroGuia',
  description: 'Guía completa del RUTA BRT de Puebla. 3 corredores, 60 paradas. Centro Histórico UNESCO, Catedral, Cholula y Angelópolis.',
  openGraph: {
    title: 'RUTA BRT Puebla — Guía turística completa',
    description: 'Descubre el RUTA BRT de Puebla con MetroGuia. Centro Histórico, Barrio Artista, Cholula y más.',
    url: 'https://metroguia.mx/puebla',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PueblaPage() {
  const estacionesDestacadas = estacionesPuebla.filter(e =>
    ['zocalo-centro', 'barrio-artista', 'cholula', 'buap', 'analco'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
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

  const lineaCardHoverStyles = {
    ...lineaCardStyles,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderColor: '#8B5CF6',
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

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#8B5CF6',
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

  const infoBoxStyles = {
    backgroundColor: '#f3f0ff',
    borderLeft: '4px solid #8B5CF6',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
          RUTA BRT Puebla
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          Transporte articulado que conecta el Centro Histórico UNESCO con toda la ciudad
        </p>
        <p style={{ fontSize: '16px', opacity: '0.95' }}>
          3 corredores • 60 paradas • Acceso a monumentos prehispánicos y coloniales
        </p>
      </section>

      {/* ABOUT PUEBLA */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre Puebla</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>Puebla de Zaragoza</strong> es una joya cultural de México. La ciudad alberga el Centro Histórico más completo de Mesoamérica, declarado Patrimonio de la Humanidad por la UNESCO. Su arquitectura colonial, monumentos prehispánicos y tradiciones gastronómicas la hacen imprescindible.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Centro Histórico UNESCO:</strong> Arquitectura colonial intacta de los siglos XVI-XIX</li>
            <li><strong>Catedral Metropolitana:</strong> Catedral más grande de México con fachada de talavera</li>
            <li><strong>Pirámide de Cholula:</strong> Estructura prehispánica más voluminosa de Mesoamérica</li>
            <li><strong>Mole Poblano:</strong> Platillo tradicional con más de 20 ingredientes</li>
            <li><strong>Talavera Poblana:</strong> Cerámica artesanal de fama mundial</li>
            <li><strong>Barrio Artista:</strong> Zona bohemia con murales y galerías de arte</li>
          </ul>
        </div>
      </section>

      {/* CORREDORES/LINEAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Los 3 Corredores del RUTA</h2>
        <div style={gridStyles}>
          {lineasPuebla.map((linea) => (
            <Link
              key={linea.id}
              href={`/puebla/linea/${linea.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  Corredor {linea.id}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: '#8B5CF6', fontWeight: 'bold' }}>
                  {linea.total} paradas • {linea.municipios.join(', ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ESTACIONES DESTACADAS */}
      <section style={{ ...containerStyles, backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Estaciones Turísticas Imprescindibles</h2>
        <div style={gridStyles}>
          {estacionesDestacadas.map((estacion) => (
            <Link
              key={estacion.slug}
              href={`/puebla/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '8px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                  Corredor {estacion.linea} • {estacion.municipio}
                </p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN TURÍSTICA ADICIONAL */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Qué Hacer en Puebla</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>
              Centro Histórico
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Camina por las calles del Zócalo, visita la Catedral Metropolitana con su famosa fachada de talavera y explora iglesias coloniales. Patrimonio UNESCO.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>
              Pirámide de Cholula
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              La estructura prehispánica más grande de México. Sube a la cima donde está la Iglesia de los Remedios para vistas panorámicas increíbles.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>
              Barrio Artista
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Zona bohemia con murales coloridos, galerías de arte independiente y cafés artísticos. Perfecto para fotógrafos y amantes de la cultura.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>
              Gastronomía Poblana
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Prueba el mole poblano, chile poblano relleno, tamales y la variedad de ingredientes únicos. Los mercados locales ofrecen auténtica comida mexicana.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>
              Talavera y Artesanías
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Compra cerámica de Talavera auténtica, vidrio soplado y artesanías locales. El Mercado de Artesanías es el mejor lugar para souvenirs.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>
              Periférico Ecológico
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Ciclopista, parques y espacios verdes para correr o caminar. Ideal para disfrutar de la naturaleza dentro de la ciudad.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS Y HORARIOS */}
      <section style={{ ...containerStyles, backgroundColor: '#f3f0ff', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>Tips para Viajar en el RUTA</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>Horarios</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>El RUTA opera de 5:00 AM a 11:00 PM. Frecuencia cada 5-10 minutos en horario pico.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>Pago</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Tarjeta recargable RUTA. Transbordo gratuito dentro de 30 minutos en corredores diferentes.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>Seguridad</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Estaciones monitoreadas con cámaras. Evita horas pico nocturnas. Viaja siempre con pertenencias aseguradas.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>Mejor Época</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Octubre a mayo. Evita temporada de lluvias (junio-septiembre) para explorar la ciudad.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>Acceso</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Estaciones con acceso para personas de movilidad reducida. Asientos prioritarios disponibles.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>Español</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>El español es el idioma principal. Aprende frases básicas o descarga una app de traducción.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Explora Puebla con MetroGuia
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px' }}>
          Descubre cada rincón de la ciudad a través de nuestras guías detalladas de estaciones y corredores.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/puebla/linea/1" style={ctaButtonStyles}>
            Explorar Corredor 1
          </Link>
          <Link href="/puebla/linea/2" style={ctaButtonStyles}>
            Explorar Corredor 2
          </Link>
          <Link href="/puebla/linea/3" style={ctaButtonStyles}>
            Explorar Corredor 3
          </Link>
        </div>
      </section>
    </main>
  );
}
