import { lineasVillahermosa } from '@/data/villahermosa/lineas-detalle';
import { estacionesVillahermosa } from '@/data/villahermosa/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export function generateMetadata() {
  return {
    title: 'Transporte Villahermosa — Capital de Tabasco y Tren Maya | MetroGuia',
    description: 'Guía de transporte en Villahermosa, Tabasco. Conexión Tren Maya a Palenque, Museo La Venta con cabezas olmecas, Yumká y gastronomía tabasqueña.',
    keywords: 'Villahermosa, Tabasco, Tren Maya, Palenque, La Venta, olmecas, Yumká',
    openGraph: {
      title: 'Transporte Villahermosa — Tabasco y Tren Maya',
      description: 'Explora Villahermosa con MetroGuia. Cabezas olmecas, selva tropical y conexión Tren Maya.',
      url: 'https://metroguia.mx/villahermosa',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default function VillahermosaPage() {
  const estacionesDestacadas = estacionesVillahermosa.filter(e =>
    ['terminal-primera-clase', 'centro-historico', 'agua-blanca', 'yumka', 'paseo-tabasco'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(245, 158, 11, 0.08) 100%)',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text)',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const containerStyles = { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', color: 'var(--text)' };
  const sectionTitleStyles = { fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: 'var(--text)', textAlign: 'center', paddingBottom: '15px', borderBottom: '2px solid var(--border)' };
  const lineaCardStyles = { backgroundColor: 'var(--surface)', border: '2px solid var(--border)', borderRadius: '8px', padding: '20px', marginBottom: '20px', cursor: 'pointer', color: 'var(--text)' };
  const colorDotStyles = { display: 'inline-block', width: '20px', height: '20px', borderRadius: '50%', marginRight: '10px', verticalAlign: 'middle' };
  const estacionCardStyles = { backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '15px', marginBottom: '15px', color: 'var(--text)' };
  const gridStyles = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' };
  const ctaButtonStyles = { display: 'inline-block', backgroundColor: '#F59E0B', color: '#000000', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', marginRight: '10px', marginBottom: '10px' };
  const infoBoxStyles = { backgroundColor: 'rgba(245, 158, 11, 0.08)', borderLeft: '4px solid #F59E0B', padding: '20px', marginBottom: '20px', borderRadius: '4px', color: 'var(--text)' };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Villahermosa', item: 'https://metroguia.mx/villahermosa/' }
    ]
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold', color: '#F59E0B' }}>
            Transporte en Villahermosa
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-muted)' }}>
            Capital de Tabasco — Olmecas, Selva Tropical y Tren Maya
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            2 líneas • 10 paradas • Conexión Tren Maya a Palenque
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#F59E0B' }}>2</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Líneas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#F59E0B' }}>10</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Paradas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#F59E0B' }}>Tren Maya</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Conexión</div>
            </div>
          </div>
        </div>
      </section>

      <section style={containerStyles}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
        <h2 style={sectionTitleStyles}>Sobre Villahermosa</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>Villahermosa</strong>, capital de Tabasco, es la puerta de entrada a la civilización olmeca y la selva tropical del sureste mexicano. Hogar del legendario Parque-Museo La Venta con cabezas colosales olmecas, y punto de conexión al Tren Maya hacia Palenque y la Riviera Maya.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Parque-Museo La Venta:</strong> 33 piezas olmecas incluyendo cabezas colosales de 20+ toneladas</li>
            <li><strong>Tren Maya:</strong> Conexión directa a Palenque (UNESCO) y toda la Riviera Maya</li>
            <li><strong>Yumká:</strong> Centro de interpretación con fauna tropical en 101 hectáreas</li>
            <li><strong>Zona Luz:</strong> Área peatonal con arquitectura colonial y vida nocturna</li>
            <li><strong>Gastronomía:</strong> Pejelagarto, plátano frito, chirmol, chocolate tabasqueño</li>
          </ul>
        </div>
      </section>

      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Líneas de Transporte</h2>
        <div style={gridStyles}>
          {lineasVillahermosa.map((linea) => (
            <Link key={linea.id} href={`/villahermosa/linea/${linea.id}`} style={{ textDecoration: 'none' }}>
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  {linea.h1}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>{linea.inicio} — {linea.fin}</p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>{linea.descripcion.substring(0, 150)}...</p>
                <p style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 'bold' }}>{linea.total} estaciones • {linea.municipios.join(', ')}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, backgroundColor: 'var(--surface)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={sectionTitleStyles}>Estaciones Destacadas</h2>
        <div style={gridStyles}>
          {estacionesDestacadas.map((estacion) => (
            <Link key={estacion.slug} href={`/villahermosa/estacion/${estacion.slug}`} style={{ textDecoration: 'none' }}>
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '8px' }}>{estacion.nombre}</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>{estacion.tipo_zona} • {estacion.municipio}</p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>{estacion.intro}</p>
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
            { title: 'Parque-Museo La Venta', desc: '33 piezas olmecas al aire libre, incluyendo cabezas colosales de basalto. Museo arqueológico único en el mundo.' },
            { title: 'Yumká', desc: 'Centro de interpretación de la naturaleza. 101 hectáreas de selva, sabana y laguna con fauna tropical.' },
            { title: 'Zona Luz', desc: 'Área peatonal del centro histórico. Arquitectura colonial, galerías, cafés y vida nocturna.' },
            { title: 'Palenque (Tren Maya)', desc: 'Zona arqueológica UNESCO accesible vía Tren Maya. Templo de las Inscripciones y Palacio en la selva.' },
            { title: 'Río Grijalva', desc: 'Malecón a orillas del río más caudaloso de México. Paseos en lancha y atardeceres espectaculares.' },
            { title: 'Gastronomía Tabasqueña', desc: 'Pejelagarto asado, plátano macho frito, chirmol y el famoso chocolate de Tabasco.' },
          ].map((item, idx) => (
            <div key={idx} style={estacionCardStyles}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, backgroundColor: 'rgba(245, 158, 11, 0.06)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={sectionTitleStyles}>Tips para Viajar a Villahermosa</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Clima', desc: 'Tropical húmedo todo el año. Lleva ropa ligera, repelente y protector solar. Temporada de lluvias: junio-octubre.' },
            { title: 'Tren Maya', desc: 'Conexión a Palenque vía autobús (2h) y luego Tren Maya a Riviera Maya. Boletos desde $300 MXN.' },
            { title: 'Transporte Local', desc: 'Taxis y Uber disponibles. Autobuses urbanos cubren las principales rutas.' },
            { title: 'Mejor Época', desc: 'Noviembre a mayo. Menos lluvia y temperatura más agradable (25-32°C).' },
            { title: 'Seguridad', desc: 'Centro y zonas turísticas son seguros. Evita zonas periféricas de noche.' },
            { title: 'Comida', desc: 'No te pierdas el pejelagarto y el chocolate tabasqueño. Mercados locales para comida auténtica.' },
          ].map((tip, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '10px' }}>{tip.title}</h3>
              <p style={{ fontSize: '14px', color: '#374151' }}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--text)' }}>Explora Villahermosa con MetroGuia</h2>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/villahermosa/linea/1" style={ctaButtonStyles}>Circuito Urbano</Link>
          <Link href="/villahermosa/linea/TM" style={{ ...ctaButtonStyles, backgroundColor: '#06B6D4', color: '#ffffff' }}>Tren Maya</Link>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginTop: '40px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explora Otros Destinos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
            <Link href="/tren-maya" style={{ textDecoration: 'none', color: '#0EA5E9', fontWeight: '500', fontSize: '14px' }}>Tren Maya</Link>
            <Link href="/campeche" style={{ textDecoration: 'none', color: '#059669', fontWeight: '500', fontSize: '14px' }}>Campeche</Link>
            <Link href="/oaxaca" style={{ textDecoration: 'none', color: '#DC2626', fontWeight: '500', fontSize: '14px' }}>Oaxaca</Link>
            <Link href="/cdmx" style={{ textDecoration: 'none', color: '#E91E8C', fontWeight: '500', fontSize: '14px' }}>Metro CDMX</Link>
          </div>
          <div style={{ backgroundColor: 'var(--primary)', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ color: '#ffffff', marginTop: 0, marginBottom: '10px' }}>🏨 Hospedaje</h3>
            <p style={{ color: '#ffffff', margin: '8px 0', fontSize: '14px' }}>
              <strong>Zona Luz:</strong> $400–1,200 MXN/noche, centro peatonal con La Venta y río Grijalva. <strong>Tabasco 2000:</strong> $800–2,000 MXN, zona moderna con malls y hoteles de cadena. Colectivos conectan ambas zonas en 15 min. Desde aeropuerto, taxi $200 MXN.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
