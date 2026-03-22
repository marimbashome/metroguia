import { lineasLeon } from '@/data/leon/lineas-detalle';
import { estacionesLeon } from '@/data/leon/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'Optibus SIT León — Guía de Transporte y Turismo | MetroGuia',
  description: 'Guía completa del Optibus SIT en León. 4 corredores BRT que conectan la capital mundial del calzado artesanal. Zona Piel, Catedral Basílica y Bajío UNESCO.',
  openGraph: {
    title: 'Optibus SIT León — Sistema de Transporte',
    description: 'Descubre León con el Optibus SIT. Zona Piel, Centro Histórico, Catedral Basílica y conexión a Guanajuato UNESCO.',
    url: 'https://metroguia.mx/leon',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LeonPage() {
  const estacionesDestacadas = estacionesLeon.filter(e =>
    ['zona-piel-leon', 'catedral-basilica', 'plaza-de-los-martires', 'industrial-norte-leon', 'aeropuerto-bajio-acceso'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
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

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#10B981',
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
    backgroundColor: '#ECFDF5',
    borderLeft: '4px solid #10B981',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  const highlightBoxStyles = {
    backgroundColor: '#F0FDF4',
    border: '2px solid #10B981',
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
          🥾 Optibus SIT León
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          Sistema Integrado de Transporte de la capital mundial del calzado artesanal
        </p>
        <p style={{ fontSize: '16px', opacity: '0.95' }}>
          4 corredores BRT • 22 estaciones • Centro Histórico, Zona Piel y Bajío UNESCO
        </p>
      </section>

      {/* ABOUT LEÓN */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre León</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>León de los Aldama</strong> es la capital mundial del calzado artesanal, con una tradición de más de 300 años. La ciudad combina patrimonio colonial con modernidad industrial. Desde León, accede fácilmente a la Ruta del Bajío UNESCO: Guanajuato (40 min), San Miguel de Allende, Dolores Hidalgo y Silao.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Zona Piel:</strong> Mayor mercado de calzado artesanal de América Latina con cientos de tiendas</li>
            <li><strong>Catedral Basílica:</strong> Joya arquitectónica barroca y monumento nacional</li>
            <li><strong>Patrimonio Industrial:</strong> Fábricas de calzado artesanal en la zona industrial norte</li>
            <li><strong>Centro Histórico:</strong> Arquitectura colonial del Bajío mexicano</li>
            <li><strong>Puerta al Bajío UNESCO:</strong> 40 minutos a Guanajuato, San Miguel de Allende y Dolores Hidalgo</li>
            <li><strong>Gastronomía:</strong> Comida típica del Bajío, enchiladas leonesas y postres tradicionales</li>
          </ul>
        </div>
      </section>

      {/* EXCURSIÓN A GUANAJUATO */}
      <section style={highlightBoxStyles}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: '#059669' }}>
          🎨 Excursión a Guanajuato UNESCO
        </h2>
        <p style={{ fontSize: '16px', color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
          Desde la <strong>Terminal Central de León</strong>, viaja en 40 minutos a <strong>Guanajuato</strong>, Patrimonio de la Humanidad UNESCO. Explora sus callejones subterráneos, teatros coloniales, minas de plata y gastronomía única del Bajío.
        </p>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          <strong>Tips:</strong> Callejón del Beso (más estrecho de México), Teatro Juárez, Basílica Colegiata, Museo de las Momias, Túneles subterráneos
        </p>
      </section>

      {/* ZONA PIEL ESPECIAL */}
      <section style={{ ...containerStyles, backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>🏪 Zona Piel: Mayor Mercado de Calzado Artesanal de América Latina</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            La <strong>Zona Piel</strong> es el corazón artesanal de León. Cientos de tiendas ofrecen calzado hecho a mano con materiales de excelente calidad. Desde zapatos elegantes hasta chanclas artesanales, toda la variedad de estilos mexicanos.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Horario:</strong> Martes a domingo (verificar festivos)</li>
            <li><strong>Compras:</strong> Negocia precios directamente con vendedores</li>
            <li><strong>Calidad:</strong> Cuero premium, artesanía genuina, diseños únicos</li>
            <li><strong>Precios:</strong> Más económico que centros comerciales, directamente del productor</li>
            <li><strong>Variedad:</strong> Desde lo clásico hasta diseños contemporáneos</li>
            <li><strong>Envíos:</strong> Muchas tiendas ofrecen envío internacional</li>
          </ul>
        </div>
      </section>

      {/* CORREDORES/LINEAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Los 4 Corredores del Optibus SIT</h2>
        <div style={gridStyles}>
          {lineasLeon.map((linea) => (
            <Link
              key={linea.id}
              href={`/leon/linea/${linea.id}`}
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
                <p style={{ fontSize: '13px', color: '#10B981', fontWeight: 'bold' }}>
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
              href={`/leon/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '8px' }}>
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
        <h2 style={sectionTitleStyles}>Qué Hacer en León</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>
              🏪 Zona Piel
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              El mercado de calzado artesanal más grande de América Latina. Cientos de tiendas con zapatos hechos a mano. Martes a domingo.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>
              ⛪ Catedral Basílica
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Joya arquitectónica barroca con interior ornamentado. Monumento nacional con fachada neoclásica impresionante.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>
              🏭 Fábricas de Calzado
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Visita fábricas de calzado artesanal en la zona industrial norte. Ve el proceso tradicional de producción.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>
              📜 Centro Histórico
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Camina por las calles coloniales, visita plazas históricas y descubre la arquitectura del Bajío mexicano.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>
              🎭 Eventos y Entretenimiento
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Plaza de Toros, Polifórum y Expo León ofrecen conciertos, teatro, eventos deportivos y ferias culturales.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>
              🚗 Conexión Aérea
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Acceso rápido al Aeropuerto Internacional del Bajío para vuelos nacionales e internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS Y HORARIOS */}
      <section style={{ ...containerStyles, backgroundColor: '#f3f0ff', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>Tips para Viajar en el Optibus SIT</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>Horarios</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>El Optibus SIT opera de 5:00 AM a 11:00 PM. Frecuencia cada 5-15 minutos según corredor.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>Tarifa</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Tarjeta recargable Optibus. Transbordo gratuito dentro de 30 minutos en corredores diferentes.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>Zona Piel Horario</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Abierta martes a domingo. Compras desde 9 AM, mejor acudir mañana. Cerrado lunes y festivos.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>Mejor Época</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Octubre a mayo. Clima seco ideal. Evita julio-septiembre por lluvias.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>Seguridad</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Estaciones seguras, monitoreo constante. Viaja con pertenencias aseguradas, evita noche tarde.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#10B981', marginBottom: '10px' }}>Regateo</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>En Zona Piel, negocia precios. Los vendedores esperan que lo hagas. Compara tiendas.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Explora León con MetroGuia
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px' }}>
          Descubre la capital mundial del calzado artesanal a través de nuestras guías detalladas del Optibus SIT.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/leon/linea/Verde" style={ctaButtonStyles}>
            Explorar Corredor Verde
          </Link>
          <Link href="/leon/linea/Azul" style={ctaButtonStyles}>
            Explorar Corredor Azul
          </Link>
          <Link href="/leon/linea/Naranja" style={ctaButtonStyles}>
            Explorar Corredor Naranja
          </Link>
          <Link href="/leon/linea/Morado" style={ctaButtonStyles}>
            Explorar Corredor Morado
          </Link>
        </div>
      </section>
    </main>
  );
}
