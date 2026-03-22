import { lineasMerida } from '@/data/merida/lineas-detalle';
import { estacionesMerida } from '@/data/merida/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'SIT Mérida — Guía turística completa de La Ciudad Blanca | MetroGuia',
  description: 'Guía completa del SIT Mérida. 4 corredores de transporte público. Centro histórico, Paseo de Montejo, Gran Museo del Mundo Maya, Mercado Lucas de Gálvez.',
  openGraph: {
    title: 'SIT Mérida — Guía turística completa',
    description: 'Descubre Mérida con MetroGuia. Centro Histórico, Gran Museo Maya, Paseo de Montejo y más. La Ciudad Blanca de Yucatán.',
    url: 'https://metroguia.mx/merida',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MeridaPage() {
  const estacionesDestacadas = estacionesMerida.filter(e =>
    ['gran-museo-mundo-maya', 'paseo-montejo', 'centro-historico', 'mercado-lucas-galez', 'aeropuerto-manuel-crescencio-rejon'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
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
    backgroundColor: '#F59E0B',
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
    backgroundColor: '#fffbeb',
    borderLeft: '4px solid #F59E0B',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
          🏛️ SIT Mérida
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          Sistema Integrado de Transporte conectando "La Ciudad Blanca" y la Península de Yucatán
        </p>
        <p style={{ fontSize: '16px', opacity: '0.95' }}>
          4 corredores • 16 estaciones • Acceso a Gran Museo Maya, Paseo de Montejo y cenotes
        </p>
      </section>

      {/* ABOUT MÉRIDA */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre Mérida</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>Mérida</strong> es la capital de Yucatán y una de las ciudades más seguras de México. Conocida como "La Ciudad Blanca" por su arquitectura colonial, Mérida es puerta de entrada a las maravillas del mundo maya: Chichén Itzá, Uxmal, cenotes y la Riviera Maya.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Gran Museo del Mundo Maya:</strong> Colección más importante de arte prehispánico maya en el mundo</li>
            <li><strong>Paseo de Montejo:</strong> Boulevard histórico con mansiones de la época de auge henequenero (s. XIX)</li>
            <li><strong>Centro Histórico:</strong> Catedral de San Ildefonso, Palacio de Gobierno con murales de Fernando Castro Pacheco</li>
            <li><strong>Gastronomía Yucateca:</strong> Cochinita pibil, panuchos, sopa de lima, huevos rellenos — recetas prehispánicas</li>
            <li><strong>Cercano a Chichén Itzá:</strong> Una de las 7 maravillas del mundo a solo 1.5 horas</li>
            <li><strong>Destino de Retiro:</strong> Segunda ciudad más segura de México, popular entre jubilados canadienses y estadounidenses</li>
            <li><strong>Cenotes Accesibles:</strong> Piscinas naturales subterráneas a pocos kilómetros de la ciudad</li>
          </ul>
        </div>
      </section>

      {/* CORREDORES/LINEAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Los 4 Corredores del SIT Mérida</h2>
        <div style={gridStyles}>
          {lineasMerida.map((linea) => (
            <Link
              key={linea.id}
              href={`/merida/linea/${linea.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  Corredor {linea.colorNombre}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 'bold' }}>
                  {linea.total} estaciones • {linea.municipios.join(', ')}
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
              href={`/merida/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '8px' }}>
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
        <h2 style={sectionTitleStyles}>Qué Hacer en Mérida y Alrededores</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>
              Gran Museo del Mundo Maya
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Colección más completa de arte prehispánico maya. Arquitectura moderna de clase mundial. Imprescindible para entender la civilización maya.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>
              Chichén Itzá (1.5h)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Una de las 7 maravillas del mundo. Pirámide de Kukulkán, Templo de Guerreros y Juego de Pelota prehispánico. Tour fácil desde Mérida.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>
              Paseo de Montejo
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Boulevard histórico con mansiones porfirianas, museos, tiendas de diseño y restaurantes. Paseo vespertino imprescindible.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>
              Cenotes
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Piscinas naturales subterráneas únicas de Yucatán. Nada en agua cristalina rodeado de selva. Experiencia maya auténtica.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>
              Cocina Yucateca
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Cochinita pibil, panuchos, sopa de lima con recetas prehispánicas. Mercado Lucas de Gálvez para auténtica comida callejera.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>
              Uxmal y Rutas Mayas
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Segunda zona arqueológica más importante. Ruta Puuc con ciudades prehispánicas. Tours desde Mérida disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS Y HORARIOS */}
      <section style={{ ...containerStyles, backgroundColor: '#fffbeb', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>Tips para Viajar en Mérida</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>Mejor Época</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Diciembre a marzo: clima perfecto (25-30°C), temporada seca. Evita mayo-octubre (calor y lluvia).</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>Clima Tropical</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Lleva ropa ligera, protector solar 50+, sombrero y botellas de agua. Amanece y anochece rápido.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>Seguridad</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Segunda ciudad más segura de México. Barrios turísticos muy seguros. Evita zonas residenciales nocturnas.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>Serenatas Dominicales</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Domingos en Parque Santa Lucía: música tradicional yucateca en vivo. Tradición desde el s. XVII.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>Distancias</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Chichén Itzá: 1.5h • Uxmal: 1h • Costa Maya: 2.5h • Cenotes: 20-40min en auto.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>Español</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Español es principal. Muchas personas hablan inglés en zonas turísticas. Descarga app de traducción.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Explora Mérida con MetroGuia
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px' }}>
          Descubre cada rincón de la Ciudad Blanca a través de nuestras guías detalladas de estaciones y corredores del SIT Mérida.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/merida/linea/D1" style={ctaButtonStyles}>
            Explorar Corredor Dorado
          </Link>
          <Link href="/merida/linea/R2" style={ctaButtonStyles}>
            Explorar Corredor Rojo
          </Link>
          <Link href="/merida/linea/V3" style={ctaButtonStyles}>
            Explorar Corredor Verde
          </Link>
          <Link href="/merida/linea/A4" style={ctaButtonStyles}>
            Explorar Corredor Azul
          </Link>
        </div>
      </section>
    </main>
  );
}
