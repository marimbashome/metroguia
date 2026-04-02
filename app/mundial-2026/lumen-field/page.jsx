'use client';

import BlogGuiasWidget from '@/app/components/BlogGuiasWidget';
import { blogLinks } from '@/data/blog-links';

export const metadata = {
  title: 'Lumen Field Seattle — Cómo llegar en Sound Transit | FIFA 2026 | MetroGuia',
  description: 'Lumen Field en Seattle: capacidad 69,000. Direct Sound Transit Central Link desde Downtown. Guía completa de transporte público, direcciones paso a paso, y qué hacer alrededor del estadio.',
  keywords: 'Lumen Field, Seattle, FIFA 2026, Sound Transit, Central Link, cómo llegar',
  openGraph: {
    title: 'Lumen Field — FIFA 2026',
    description: 'Mejor conexión de transporte público en EE.UU. — Direct Light Rail al estadio.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.metroguia.mx/mundial-2026/lumen-field/',
  },
};

export default function LumenFieldPage() {
  const heroStyle = {
    backgroundColor: '#1a472a',
    color: '#fff',
    padding: '60px 20px',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const heroTitleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const heroSubStyle = {
    fontSize: '20px',
    opacity: 0.9,
  };

  const sectionStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const sectionTitleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#222',
  };

  const stepsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const stepCardStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderLeft: '5px solid #1a472a',
    borderRadius: '4px',
  };

  const stepNumberStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1a472a',
    marginBottom: '10px',
  };

  const stepDescStyle = {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const infoCardStyle = {
    padding: '25px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  };

  const infoTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1a472a',
    marginBottom: '12px',
  };

  const infoContentStyle = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tableHeaderStyle = {
    backgroundColor: '#1a472a',
    color: '#fff',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
  };

  const tableCellStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
  };

  const preStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '6px',
    fontSize: '13px',
    fontFamily: 'monospace',
    overflowX: 'auto',
    marginBottom: '40px',
    color: '#333',
  };

  const navButtonContainerStyle = {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '40px',
    paddingTop: '40px',
    borderTop: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '4px',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#1a472a',
    color: '#fff',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ddd',
    color: '#333',
  };

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Lumen Field',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      postalCode: '98134',
      addressCountry: 'US',
    },
    capacity: 69000,
    sportsTeam: [
      { '@type': 'SportsTeam', name: 'Seattle Seahawks' },
      { '@type': 'SportsTeam', name: 'Seattle Sounders' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.metroguia.mx/' },
      { '@type': 'ListItem', position: 2, name: 'Mundial 2026', item: 'https://www.metroguia.mx/mundial-2026/' },
      { '@type': 'ListItem', position: 3, name: 'Lumen Field', item: 'https://www.metroguia.mx/mundial-2026/lumen-field/' },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(placeSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div style={heroStyle}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={heroTitleStyle}>🏟️ Lumen Field</h1>
          <p style={heroSubStyle}>Seattle, Washington — 69,000 personas</p>
          <p style={{ fontSize: '18px', opacity: 0.85 }}>Mejor conexión de transporte público en EE.UU. — Sound Transit Direct!</p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🚂 Cómo Llegar en Transporte Público</h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
          Lumen Field tiene la <strong>mejor conexión de transporte público en toda la Copa Mundial 2026</strong>. 
          Desde el Downtown de Seattle puedes tomar el Sound Transit Central Link — un tren directo, sin transbordos, 
          que te deja a solo 2 minutos caminando del estadio.
        </p>

        <div style={stepsContainerStyle}>
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 1</div>
            <div style={stepDescStyle}>
              Dirígete a cualquier estación Sound Transit Central Link en Downtown Seattle (Westlake, University Street, o Pioneer Square).
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 2</div>
            <div style={stepDescStyle}>
              Toma la línea Green o Red line hacia el sur (dirección SoDo). El viaje dura solo <strong>12 minutos</strong>.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 3</div>
            <div style={stepDescStyle}>
              Desciende en <strong>Stadium Station</strong> (parada SoDo). Es la estación de fútbol — no puedes fallar.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 4</div>
            <div style={stepDescStyle}>
              Camina 2 minutos hacia el norte desde la estación. Verás el estadio directamente — es imposible perderse.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '6px', marginBottom: '40px' }}>
          <p style={{ fontSize: '16px', color: '#1a472a', margin: 0 }}>
            <strong>✅ Ventaja clave:</strong> Sound Transit Link es DIRECTO desde Downtown — sin transbordos, sin complications. 
            Una de las mejores opciones en toda la Copa Mundial.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>ℹ️ Alrededor del Estadio</h2>
        <div style={gridContainerStyle}>
          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🍔 Comida & Bebida</div>
            <div style={infoContentStyle}>
              SoDo tiene excelentes opciones. Pike Place Market está a 10 minutos en metro — visita ANTES del partido. 
              Dentro del estadio hay concesiones estándar de fútbol.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>💰 ATMs & Dinero</div>
            <div style={infoContentStyle}>
              Múltiples ATMs en SoDo y dentro del estadio. Seattle es muy digital — muchas lugares aceptan Venmo y Apple Pay.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🔒 Seguridad & Acceso</div>
            <div style={infoContentStyle}>
              SoDo es un barrio industrial pero completamente seguro. Los días de partido hay presencia de seguridad. 
              Llega 1-2 horas antes para evitar multitudes.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>⏰ Horarios & Duración</div>
            <div style={infoContentStyle}>
              Sound Transit corre cada 10-15 minutos. Presupuesta 45 minutos total (transporte + llegada). 
              Regresa hasta medianoche después de partidos nocturnos.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🎒 Qué Llevar</div>
            <div style={infoContentStyle}>
              Seattle en junio: 18-23°C (64-73°F), muy agradable. Trae abrigo ligero por la noche. 
              El cielo puede estar nublado pero rara vez llueve en junio.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🍺 Después del Partido</div>
            <div style={infoContentStyle}>
              SoDo tiene bares deportivos. Capital Hill (5 min en metro) es la zona de vida nocturna. 
              Sound Transit opera hasta pasada la medianoche los días de partido.
            </div>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🗺️ Mapa de Ruta</h2>
        <pre style={preStyle}>{`
        DOWNTOWN SEATTLE
              ↓
      Westlake Station
              ↓
    Sound Transit Link
    (Green/Red Line)
            ↓
         12 min
            ↓
    STADIUM STATION
        (SoDo area)
            ↓
       Walk 2 min
            ↓
      🏟️ LUMEN FIELD
        69,000 capacity
        
La ruta es DIRECTA — sin transbordos.
El viaje total: 12 minutos en tren + 2 minutos caminando.
`}</pre>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🎯 Partidos en Lumen Field</h2>
        <table style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: '#1a472a', color: '#fff' }}>
              <th style={tableHeaderStyle}>Fecha</th>
              <th style={tableHeaderStyle}>Fase</th>
              <th style={tableHeaderStyle}>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>20 junio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>28 junio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>2 julio 2026</td>
              <td style={tableCellStyle}>Round of 16</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: '#f9f9f9', marginTop: '40px' }}>
        <BlogGuiasWidget guides={blogLinks.mundial} context="Lumen Field, Seattle" />
      </div>

      <div style={sectionStyle}>
        <div style={navButtonContainerStyle}>
          <a href="/mundial-2026/" style={secondaryButtonStyle}>← Volver a Mundial 2026</a>
          <a href="/mundial-2026/#estadios" style={primaryButtonStyle}>Ver Todos los Estadios →</a>
        </div>
      </div>
    </>
  );
}
