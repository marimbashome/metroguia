import { lineasOaxaca } from '@/data/oaxaca/lineas-detalle';
import { estacionesOaxaca } from '@/data/oaxaca/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export function generateMetadata() {
  return {
    title: 'Circuito Turístico Oaxaca — Capital Cultural de México | MetroGuia',
    description: 'Guía completa de transporte y turismo en Oaxaca. Centro Histórico UNESCO, Monte Albán, Mitla, Hierve el Agua, mercados y gastronomía oaxaqueña.',
    keywords: 'Oaxaca, turismo, transporte, Centro Histórico, Monte Albán, mezcal, gastronomía',
    openGraph: {
      title: 'Circuito Turístico Oaxaca — Capital Cultural de México',
      description: 'Descubre Oaxaca con MetroGuia. Patrimonio UNESCO, arqueología zapoteca y naturaleza prehispánica.',
      url: 'https://metroguia.mx/oaxaca',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function OaxacaPage() {
  const estacionesDestacadas = estacionesOaxaca.filter(e =>
    ['centro-historico-oax', 'santo-domingo-oax', 'monte-alban', 'hierve-el-agua', 'mercado-benito-juarez'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, var(--surface) 0%, rgba(220, 38, 38, 0.08) 100%)',
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
    backgroundColor: '#DC2626',
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
    backgroundColor: 'rgba(220, 38, 38, 0.08)',
    borderLeft: '4px solid #DC2626',
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
        name: 'Oaxaca',
        item: 'https://metroguia.mx/oaxaca/'
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
          <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold', color: '#DC2626' }}>
            Circuito Turístico Oaxaca
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-muted)' }}>
            Capital Cultural de México — Patrimonio, Arqueología y Gastronomía
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
            12 paradas • Centro Histórico UNESCO • Sitios arqueológicos zapotecas
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#DC2626' }}>1</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Circuito Turístico</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#DC2626' }}>12</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Paradas</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '5px', color: '#DC2626' }}>UNESCO</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Patrimonio</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT OAXACA */}
      <section style={containerStyles}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
        <h2 style={sectionTitleStyles}>Sobre Oaxaca</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>Oaxaca de Juárez</strong> es la capital cultural de México. La ciudad es un destino excepcional para viajeros que buscan arte, arqueología, gastronomía auténtica y naturaleza prehispánica. Centro Histórico Patrimonio UNESCO con mercados tradicionales y una de las gastronomías más ricas de México.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Centro Histórico UNESCO:</strong> Arquitectura colonial alrededor del Zócalo</li>
            <li><strong>Templo de Santo Domingo:</strong> Considerada la iglesia más hermosa de México</li>
            <li><strong>Monte Albán:</strong> Capital zapoteca de 2,500 años, Patrimonio UNESCO</li>
            <li><strong>Mitla:</strong> Arquitectura zapoteca única con mosaicos geométricos prehispánicos</li>
            <li><strong>Hierve el Agua:</strong> Cascadas petrificadas naturales con piscinas minerales</li>
            <li><strong>Mezcal Oaxaqueño:</strong> Bebida espirituosa artesanal de Santiago Matatlán</li>
            <li><strong>Gastronomía:</strong> Mole, tlayudas, chapulines, chocolate de metate</li>
          </ul>
        </div>
      </section>

      {/* CIRCUITO */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>El Circuito Turístico</h2>
        <div style={gridStyles}>
          {lineasOaxaca.map((linea) => (
            <Link
              key={linea.id}
              href={`/oaxaca/linea/${linea.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  Circuito Principal
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: '#DC2626', fontWeight: 'bold' }}>
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
              href={`/oaxaca/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>
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

      {/* ATRACCIONES TURÍSTICAS */}
      <section style={containerStyles}>
        <AdBannerLazyInArticle adSlot="1082410395" />
        <h2 style={sectionTitleStyles}>Atracciones Turísticas Principales</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>
              Centro Histórico UNESCO
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Zócalo, Catedral Metropolitana y Palacio de Gobierno. Arquitectura colonial intacta de los siglos XVI-XIX. Centro pulsante de la vida oaxaqueña.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>
              Monte Albán
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Espectacular sitio arqueológico con 2,500 años de historia. Capital zapoteca con pirámides, plazas y vistas panorámicas de los valles.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>
              Mitla
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Sitio arqueológico con arquitectura zapoteca única. Mosaicos geométricos prehispánicos refinados, considerados los más bellos del México antiguo.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>
              Hierve el Agua
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Cascadas petrificadas naturales únicas en el mundo. Piscinas minerales con agua termal rodeadas de vistas panorámicas espectaculares.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>
              Ruta del Mezcal
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Santiago Matatlán es la capital mundial del mezcal. Destilerías artesanales, museos y tiendas especializadas en este aguardiente tradicional.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>
              Gastronomía Oaxaqueña
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Mole, tlayudas, chapulines, chile poblano. Mercados tradicionales donde probar auténtica comida oaxaqueña. Una de las gastronomías más ricas de México.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS Y RECOMENDACIONES */}
      <section style={{ ...containerStyles, backgroundColor: 'rgba(220, 38, 38, 0.06)', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid var(--border)', borderRadius: '0' }}>
        <h2 style={sectionTitleStyles}>Tips para Viajar a Oaxaca</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>Transporte</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Colectivos a aeropuerto (45 min). Taxis y Uber disponibles en el centro. Tours y excursiones a sitios arqueológicos.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>Mejor Época</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Octubre a mayo. Clima ideal. Evita temporada de lluvias (junio-septiembre). Semana Santa es muy concurrida.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>Hospedaje</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Opciones en Centro Histórico cercanas a todas las atracciones. Desde budget hostels hasta hoteles boutique.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>Moneda y Bancos</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Pesos mexicanos. ATMs en el centro. Cambio de divisas en hoteles. Muchos lugares aceptan tarjetas.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>Idioma</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Español es el idioma principal. Inglés limitado fuera del centro turístico. Aprende frases básicas.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#DC2626', marginBottom: '10px' }}>Seguridad</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Centro histórico es seguro. Evita zonas aisladas de noche. Viaja con pertenencias aseguradas.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: 'var(--text)' }}>
          Explora Oaxaca con MetroGuia
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '30px' }}>
          Descubre cada parada del circuito turístico y planifica tu viaje a la capital cultural de México.
        </p>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/oaxaca/linea/1" style={ctaButtonStyles}>
            Explorar Circuito Completo
          </Link>
        </div>

        {/* FOOTER: Links to other cities */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginTop: '40px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>
            Explora Otros Destinos
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px' }}>
            <Link href="/cdmx" style={{ textDecoration: 'none', color: '#E91E8C', fontWeight: '500', fontSize: '14px' }}>Metro CDMX</Link>
            <Link href="/puebla" style={{ textDecoration: 'none', color: '#8B5CF6', fontWeight: '500', fontSize: '14px' }}>RUTA Puebla</Link>
            <Link href="/gdl" style={{ textDecoration: 'none', color: '#FF6B2C', fontWeight: '500', fontSize: '14px' }}>RIT Guadalajara</Link>
            <Link href="/mty" style={{ textDecoration: 'none', color: '#00A884', fontWeight: '500', fontSize: '14px' }}>Línea 1 Monterrey</Link>
            <Link href="/merida" style={{ textDecoration: 'none', color: '#F59E0B', fontWeight: '500', fontSize: '14px' }}>SIT Mérida</Link>
            <Link href="/leon" style={{ textDecoration: 'none', color: '#10B981', fontWeight: '500', fontSize: '14px' }}>Optibus León</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
