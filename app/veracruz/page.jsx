import { estacionesVeracruz } from '@/data/veracruz/estaciones';
import { lineasVeracruz } from '@/data/veracruz/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'Veracruz - Sistema de Transporte RUTA | MetroGuia',
  description: 'Explora el sistema de transporte de Veracruz. Terminal de Autobuses a Mandinga, playas, castillos coloniales y la cultura caribeña del puerto.',
  keywords: 'transporte Veracruz, RUTA BRT, playas, Castillo de San Juan de Ulúa, Malecón',
  openGraph: {
    title: 'Veracruz - Sistema de Transporte RUTA | MetroGuia',
    description: 'Explora el sistema de transporte de Veracruz. Terminal de Autobuses a Mandinga, playas, castillos coloniales y la cultura caribeña del puerto.',
    url: 'https://metroguia.mx/veracruz',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VeracruzPage() {
  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const heroStyles = {
    background: 'linear-gradient(135deg, #E8473B 0%, #E8473Bdd 100%)',
    color: '#ffffff',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginTop: '30px',
  };

  const statCardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
  };

  const sectionStyles = {
    padding: '40px 0',
    borderBottom: '1px solid #e5e7eb',
  };

  const sectionTitleStyles = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1f2937',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  };

  const cardStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
  };

  const infoCardStyles = {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  };

  const tipsCardStyles = {
    backgroundColor: '#FEF3C7',
    borderLeft: '4px solid #E8473B',
    padding: '20px',
    borderRadius: '4px',
    marginBottom: '20px',
  };

  const buttonStyles = {
    display: 'inline-block',
    backgroundColor: '#E8473B',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'opacity 0.3s ease',
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
        name: 'Veracruz',
        item: 'https://metroguia.mx/veracruz/'
      }
    ]
  };

  const featuredStations = estacionesVeracruz.slice(0, 6);

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            Veracruz
          </h1>
          <p style={{ fontSize: '18px', opacity: '0.95', marginBottom: '15px', maxWidth: '700px', margin: '0 auto' }}>
            Explora el sistema de transporte de la Perla del Golfo. De la Terminal de Autobuses a las playas de Mandinga, descubre el Castillo de San Juan de Ulúa, el Malecón histórico y la vibrante cultura caribeña del puerto.
          </p>
          <div style={statsGridStyles}>
            <div style={statCardStyles}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{estacionesVeracruz.length}</div>
              <div style={{ fontSize: '14px', opacity: '0.9' }}>Estaciones</div>
            </div>
            <div style={statCardStyles}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{lineasVeracruz.length}</div>
              <div style={{ fontSize: '14px', opacity: '0.9' }}>Líneas</div>
            </div>
            <div style={statCardStyles}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>6</div>
              <div style={{ fontSize: '14px', opacity: '0.9' }}>Playas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px' }}>
        <AdBannerLazy adSlot="4434764790" format="auto" />

        {/* CORREDORES */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Corredores de Transporte</h2>
          <div style={gridStyles}>
            {lineasVeracruz.map((linea) => (
              <Link
                key={linea.id}
                href={`/veracruz/linea/${linea.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  ...cardStyles,
                  borderLeft: `4px solid ${linea.color}`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      marginRight: '10px'
                    }}>
                      {linea.id}
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                      {linea.colorNombre}
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p style={{ fontSize: '13px', color: '#9ca3af' }}>
                    {linea.total} paradas
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ESTACIONES DESTACADAS */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Estaciones Destacadas</h2>
          <div style={gridStyles}>
            {featuredStations.map((estacion) => (
              <Link
                key={estacion.slug}
                href={`/veracruz/estacion/${estacion.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  ...cardStyles,
                  borderTop: `3px solid #E8473B`,
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#E8473B', marginBottom: '8px' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                    {estacion.municipio} • {estacion.tipo_zona}
                  </p>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* INFORMACIÓN ÚTIL */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Información Turística</h2>
          <div style={gridStyles}>
            <div style={infoCardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8473B', marginBottom: '10px' }}>
                Castillo de San Juan de Ulúa
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                Fortaleza colonial y museo histórico. Accesible desde la estación Centro Histórico.
              </p>
            </div>
            <div style={infoCardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8473B', marginBottom: '10px' }}>
                El Malecón
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                Paseo frente al mar con restaurantes, cafés y vistas panorámicas del Golfo.
              </p>
            </div>
            <div style={infoCardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8473B', marginBottom: '10px' }}>
                Acuario Veracruzano
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                Uno de los acuarios más grandes de América Latina con especies del Golfo y el Caribe.
              </p>
            </div>
            <div style={infoCardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8473B', marginBottom: '10px' }}>
                Playas de Arena Blanca
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                Playas Hornos, Mocambo y Mandinga con resorts, buceo y deportes acuáticos.
              </p>
            </div>
            <div style={infoCardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8473B', marginBottom: '10px' }}>
                Museo Antropológico
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                Artefactos prehispánicos y cultura local veracruzana en el centro histórico.
              </p>
            </div>
            <div style={infoCardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8473B', marginBottom: '10px' }}>
                Gastronomía Caribeña
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>
                Huachinango a la veracruzana, camarones, ceviches y bebidas tropicales.
              </p>
            </div>
          </div>
        </div>

        {/* TIPS */}
        <div style={sectionStyles}>
          <h2 style={sectionTitleStyles}>Tips para Visitantes</h2>
          <div style={tipsCardStyles}>
            <ul style={{ fontSize: '14px', color: '#374151', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
              <li>El mejor tiempo para visitar es noviembre a marzo cuando el clima es más fresco.</li>
              <li>Los autobuses del RUTA funcionan de 5:00 AM a 11:00 PM con frecuencia cada 10-15 minutos.</li>
              <li>Compra una tarjeta recargable RUTA para ahorrar en múltiples viajes. Transbordo gratuito dentro de 30 minutos.</li>
              <li>Las playas son ideales para buceo, especialmente Boca del Río con sus arrecifes de coral.</li>
              <li>Visita el Malecón al atardecer para la mejor experiencia del Puerto de Veracruz.</li>
              <li>La gastronomía local es excepcional. Prueba las especialidades en los restaurantes frente al mar.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NAVEGACIÓN */}
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyles}>Continúa Explorando</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={buttonStyles}>
            Volver a Inicio
          </Link>
          <Link href="/veracruz/linea/1" style={buttonStyles}>
            Ver Corredor 1
          </Link>
        </div>
      </section>
    </main>
  );
}
