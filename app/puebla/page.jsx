import { lineasPuebla } from '@/data/puebla/lineas-detalle';
import { estacionesPuebla } from '@/data/puebla/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export function generateMetadata() {
  return {
    title: 'RUTA BRT Puebla — Guía turística completa | MetroGuia',
    description: 'Guía completa del RUTA BRT de Puebla. 4 corredores, 76 paradas. Centro Histórico UNESCO, Catedral Metropolitana, Pirámide de Cholula, Barrio Artista y más.',
    keywords: 'RUTA BRT Puebla, transporte, turismo, Centro Histórico UNESCO, Cholula, Catedral',
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
}

export default function PueblaPage() {
  const estacionesDestacadas = estacionesPuebla.filter(e =>
    ['zocalo-centro', 'barrio-artista', 'cholula', 'buap', 'analco'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(139, 92, 246, 0.08) 100%)',
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

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#8B5CF6',
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

  const infoBoxStyles = {
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    borderLeft: '4px solid #8B5CF6',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
    color: 'var(--text)',
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
        name: 'Puebla',
        item: 'https://metroguia.mx/puebla/'
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
          <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold', color: '#8B5CF6' }}>
            RUTA BRT Puebla
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-muted)' }}>
            Transporte articulado que conecta el Centro Histórico UNESCO con toda la ciudad
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            4 corredores • 76 paradas • Acceso a monumentos prehispánicos y coloniales
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#8B5CF6' }}>4</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Corredores</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#8B5CF6' }}>76</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Paradas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#8B5CF6' }}>UNESCO</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Patrimonio</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PUEBLA */}
      <section style={containerStyles}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
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
        <h2 style={sectionTitleStyles}>Los 4 Corredores del RUTA</h2>
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
      <section style={{ ...containerStyles, backgroundColor: 'var(--surface)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)' }}>
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
        <AdBannerLazyInArticle adSlot="1082410395" />
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
      <section style={{ ...containerStyles, backgroundColor: 'rgba(139, 92, 246, 0.06)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)', borderRadius: '0' }}>
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
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#8B5CF6', marginBottom: '10px' }}>🏨 Hospedaje</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Centro Histórico ($500–1,500 MXN/noche): zócalo, catedral, talavera a pie. Cholula ($400–1,200 MXN): pirámide y volcanes. RUTA línea 1 conecta centro con Angelópolis en 25 min. Desde CAPU, taxi $120 MXN al centro.</p></p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--text)' }}>
          Explora Puebla con MetroGuia
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
          Descubre cada rincón de la ciudad a través de nuestras guías detalladas de estaciones y corredores.
        </p>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/puebla/linea/1" style={ctaButtonStyles}>
            Explorar Corredor 1
          </Link>
          <Link href="/puebla/linea/2" style={ctaButtonStyles}>
            Explorar Corredor 2
          </Link>
          <Link href="/puebla/linea/3" style={ctaButtonStyles}>
            Explorar Corredor 3
          </Link>
          <Link href="/puebla/linea/4" style={ctaButtonStyles}>
            Explorar Corredor 4
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
            <Link href="/merida" style={{ textDecoration: 'none', color: '#F59E0B', fontWeight: '500', fontSize: '14px' }}>SIT Mérida</Link>
            <Link href="/leon" style={{ textDecoration: 'none', color: '#10B981', fontWeight: '500', fontSize: '14px' }}>Optibus León</Link>
            <Link href="/queretaro" style={{ textDecoration: 'none', color: '#EF4444', fontWeight: '500', fontSize: '14px' }}>Q-BUS Querétaro</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
