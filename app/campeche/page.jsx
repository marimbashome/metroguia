import { lineasCampeche } from '@/data/campeche/lineas-detalle';
import { estacionesCampeche } from '@/data/campeche/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export function generateMetadata() {
  return {
    title: 'Tren Ligero y Tren Maya Campeche — Ciudad Amurallada UNESCO | MetroGuia',
    description: 'Guía completa de transporte en Campeche. Tren Ligero ART (14 estaciones), conexión Tren Maya, centro histórico UNESCO amurallado, Edzná y Calakmul.',
    keywords: 'Campeche, Tren Ligero, Tren Maya, UNESCO, murallas, Edzná, Calakmul, arqueología maya',
    openGraph: {
      title: 'Tren Ligero y Tren Maya Campeche — Ciudad Amurallada UNESCO',
      description: 'Explora Campeche con MetroGuia. Tren Ligero moderno y conexión directa al Tren Maya.',
      url: 'https://metroguia.mx/campeche',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default function CampechePage() {
  const estacionesDestacadas = estacionesCampeche.filter(e =>
    ['estacion-central', 'fuerte-san-miguel', 'centro-historico', 'puerta-de-tierra', 'barrio-antiguo'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(5, 150, 105, 0.08) 100%)',
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

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#059669',
    color: '#ffffff',
    padding: '14px 28px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '10px',
  };

  const infoBoxStyles = {
    backgroundColor: 'rgba(5, 150, 105, 0.08)',
    borderLeft: '4px solid #059669',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
    color: 'var(--text)',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Campeche', item: 'https://metroguia.mx/campeche/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold', color: '#059669' }}>
            Transporte en Campeche
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-muted)' }}>
            Tren Ligero ART + Conexión Tren Maya — Ciudad Amurallada UNESCO
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            2 líneas • 14 estaciones • Patrimonio de la Humanidad
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#059669' }}>2</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Líneas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#059669' }}>14</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Estaciones</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#059669' }}>UNESCO</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Patrimonio</div>
            </div>
          </div>
        </div>
      </section>

      <section style={containerStyles}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
        <h2 style={sectionTitleStyles}>Sobre Campeche</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>San Francisco de Campeche</strong> es una joya colonial amurallada, Patrimonio de la Humanidad UNESCO. La ciudad cuenta con un moderno Tren Ligero ART (inaugurado julio 2025) que conecta el centro histórico con el aeropuerto y la estación del Tren Maya, facilitando el acceso a las zonas arqueológicas más impresionantes del mundo maya.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Centro Histórico UNESCO:</strong> Ciudad amurallada del siglo XVII con baluartes y fuertes</li>
            <li><strong>Tren Ligero ART:</strong> Sistema moderno inaugurado en 2025, 14 estaciones</li>
            <li><strong>Tren Maya:</strong> Conexión directa a Mérida, Cancún y toda la Riviera Maya</li>
            <li><strong>Edzná:</strong> Zona arqueológica maya a 60 km con pirámide de 5 pisos</li>
            <li><strong>Calakmul:</strong> Biósfera y ciudad maya rival de Tikal en la selva</li>
          </ul>
        </div>
      </section>

      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Líneas de Transporte</h2>
        <div style={gridStyles}>
          {lineasCampeche.map((linea) => (
            <Link key={linea.id} href={`/campeche/linea/${linea.id}`} style={{ textDecoration: 'none' }}>
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  {linea.h1}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion.substring(0, 150)}...
                </p>
                <p style={{ fontSize: '13px', color: '#059669', fontWeight: 'bold' }}>
                  {linea.total} estaciones • {linea.municipios.join(', ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, backgroundColor: 'var(--surface)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={sectionTitleStyles}>Estaciones Destacadas</h2>
        <div style={gridStyles}>
          {estacionesDestacadas.map((estacion) => (
            <Link key={estacion.slug} href={`/campeche/estacion/${estacion.slug}`} style={{ textDecoration: 'none' }}>
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                  {estacion.tipo_zona} • {estacion.municipio}
                </p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={containerStyles}>
        <AdBannerLazyInArticle adSlot="1082410395" />
        <h2 style={sectionTitleStyles}>Atracciones Turísticas</h2>
        <div style={gridStyles}>
          {[
            { title: 'Murallas y Baluartes', desc: 'Campeche es la única ciudad amurallada de México. Baluartes del siglo XVII con museos y vistas al mar.' },
            { title: 'Edzná', desc: 'Zona arqueológica con la Pirámide de los Cinco Pisos. Sistema hidráulico maya avanzado a 60 km de la ciudad.' },
            { title: 'Calakmul', desc: 'Ciudad maya rival de Tikal en la Biósfera de Calakmul. Patrimonio Mixto UNESCO, jaguares y tucanes.' },
            { title: 'Malecón de Campeche', desc: 'Paseo costero con esculturas, atardeceres espectaculares y acceso a restaurantes de mariscos.' },
            { title: 'Fuerte de San Miguel', desc: 'Museo de la Cultura Maya con máscaras de jade de Calakmul. Vistas panorámicas de la ciudad.' },
            { title: 'Gastronomía Campechana', desc: 'Pan de cazón, camarones al coco, cochinita pibil y papadzules. Cocina yucateca con influencia caribeña.' },
          ].map((item, idx) => (
            <div key={idx} style={estacionCardStyles}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, backgroundColor: 'rgba(5, 150, 105, 0.06)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={sectionTitleStyles}>Tips para Viajar a Campeche</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Tren Ligero', desc: 'Operativo desde julio 2025. Conecta centro → aeropuerto → Tren Maya. Tarifa $18 MXN.' },
            { title: 'Tren Maya', desc: 'Conexión directa a Mérida (2h), Cancún (5h) y Palenque (4h). Boletos desde $300 MXN.' },
            { title: 'Mejor Época', desc: 'Noviembre a abril. Evita temporada de huracanes (junio-octubre). Calor húmedo todo el año.' },
            { title: 'Centro Histórico', desc: 'Recórelo a pie. Las murallas son caminables. Iluminación nocturna espectacular.' },
            { title: 'Excursiones', desc: 'Edzná: 1 hora. Calakmul: 3.5 horas. Reserva transporte con anticipación.' },
            { title: 'Seguridad', desc: 'Campeche es una de las ciudades más seguras de México. Centro histórico muy tranquilo.' },
          ].map((tip, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>{tip.title}</h3>
              <p style={{ fontSize: '14px', color: '#374151' }}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--text)' }}>Explora Campeche con MetroGuia</h2>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/campeche/linea/1" style={ctaButtonStyles}>Tren Ligero</Link>
          <Link href="/campeche/linea/TM" style={{ ...ctaButtonStyles, backgroundColor: '#0EA5E9' }}>Tren Maya</Link>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explora Otros Destinos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
            <Link href="/tren-maya" style={{ textDecoration: 'none', color: '#0EA5E9', fontWeight: '500', fontSize: '14px' }}>Tren Maya</Link>
            <Link href="/merida" style={{ textDecoration: 'none', color: '#F59E0B', fontWeight: '500', fontSize: '14px' }}>Mérida</Link>
            <Link href="/cdmx" style={{ textDecoration: 'none', color: '#E91E8C', fontWeight: '500', fontSize: '14px' }}>Metro CDMX</Link>
            <Link href="/villahermosa" style={{ textDecoration: 'none', color: '#F59E0B', fontWeight: '500', fontSize: '14px' }}>Villahermosa</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
