'use client';

import BlogGuiasWidget from '@/app/components/BlogGuiasWidget';
import { blogLinks } from '@/data/blog-links';

export const metadata = {
  title: 'Gillette Stadium Foxborough — Cómo llegar MBTA + Uber | FIFA 2026 | MetroGuia',
  description: 'Gillette Stadium en Foxborough, MA (40 km sur de Boston): capacidad 65,878. MBTA + evento shuttle o Uber desde Boston. NO está en Boston. Guía completa de transporte público.',
  keywords: 'Gillette Stadium, Foxborough, Boston, FIFA 2026, MBTA, Patriots, cómo llegar',
  openGraph: {
    title: 'Gillette Stadium — FIFA 2026',
    description: 'IMPORTANTE: Gillette Stadium NO está en Boston — está en Foxborough, 40 km al sur.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.metroguia.mx/mundial-2026/gillette-stadium/',
  },
};

export default function GilletteStadiumPage() {
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
    opacity: 0.9',
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

  const warningBoxStyle = {
    backgroundColor: '#fff3cd',
    border: '2px solid #ff9800',
    padding: '20px',
    borderRadius: '6px',
    marginBottom: '30px',
  };

  const warningTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#ff6f00',
    marginBottom: '10px',
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
    name: 'Gillette Stadium',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Foxborough',
      addressRegion: 'MA',
      postalCode: '02035',
      addressCountry: 'US',
    },
    capacity: 65878,
    sportsTeam: [
      { '@type': 'SportsTeam', name: 'New England Patriots' },
      { '@type': 'SportsTeam', name: 'New England Revolution' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.metroguia.mx/' },
      { '@type': 'ListItem', position: 2, name: 'Mundial 2026', item: 'https://www.metroguia.mx/mundial-2026/' },
      { '@type': 'ListItem', position: 3, name: 'Gillette Stadium', item: 'https://www.metroguia.mx/mundial-2026/gillette-stadium/' },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(placeSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div style={heroStyle}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={heroTitleStyle}>🏟️ Gillette Stadium</h1>
          <p style={heroSubStyle}>Foxborough, Massachusetts — 65,878 personas</p>
          <p style={{ fontSize: '18px', opacity: 0.85 }}>NO está en Boston — 40 km al sur en Foxborough</p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={warningBoxStyle}>
          <div style={warningTitleStyle}>⚠️ IMPORTANTE</div>
          <p style={{ fontSize: '16px', color: '#ff6f00', margin: 0, lineHeight: '1.6' }}>
            Gillette Stadium NO está en Boston. Está ubicado en <strong>Foxborough</strong>, a 40 km (25 millas) 
            al sur de Boston. El viaje desde Downtown Boston toma 60+ minutos en MBTA + shuttle. Muchos turistas 
            lo ignoran y se pierden — planifica extra tiempo. La opción más simple: Uber directamente (45 min, $50-60).
          </p>
        </div>

        <h2 style={sectionTitleStyle}>🚂 Cómo Llegar en Transporte Público</h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
          El MBTA (transporte público de Boston) tiene servicio limitado a Gillette. Tu mejor opción es combinar 
          MBTA + shuttle bus especial de evento, o simplemente Uber desde Boston. Recomendamos Uber por conveniencia.
        </p>

        <div style={stepsContainerStyle}>
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Opción 1: MBTA + Shuttle</div>
            <div style={stepDescStyle}>
              Toma MBTA Red Line u Orange Line desde Downtown Boston (30 min) hacia estaciones en el sur. 
              En días de evento, hay shuttle buses especiales hacia Gillette. Tiempo total: 50-60 min.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Opción 2: Uber (Recomendado)</div>
            <div style={stepDescStyle}>
              Desde cualquier punto en Boston, llama Uber/Lyft directamente a Gillette Stadium. 
              Viaje: 45 minutos, costo: $50-60 USD. Directo, sin complicaciones. La mayoría de turistas elige esto.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 3</div>
            <div style={stepDescStyle}>
              Si usas MBTA + shuttle: obtén información de paradas en la estación MBTA más cercana. 
              Los shuttles salen 1-2 horas antes del partido desde ubicaciones fijas.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 4</div>
            <div style={stepDescStyle}>
              En Gillette: Patriot Place (mall) está justo adjunto. Llega 1-2 horas antes para pasear, 
              comer, y evitar caos de estacionamiento.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '6px', marginBottom: '40px' }}>
          <p style={{ fontSize: '16px', color: '#1a472a', margin: 0 }}>
            <strong>💡 Consejo:</strong> MBTA tiene servicio limitado. Si puedes pagar, Uber/Lyft es la mejor opción 
            ($50-60, 45 min, directamente al estadio). Si quieres economizar, MBTA + shuttle cuesta ~$10 pero toma 60 min 
            y requiere investigación previa sobre horarios de shuttle.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>ℹ️ Alrededor del Estadio</h2>
        <div style={gridContainerStyle}>
          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🍔 Comida & Bebida</div>
            <div style={infoContentStyle}>
              Patriot Place (mall adjunto) tiene restaurantes modernos. El área es principalmente residencial — 
              opciones limitadas fuera del stadium. Recomendación: come en Boston antes de viajar al estadio.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>💰 ATMs & Dinero</div>
            <div style={infoContentStyle}>
              ATMs en Patriot Place y dentro del estadio. Nueva Inglaterra es zona establecida — 
              tarjetas de crédito ampliamente aceptadas.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🔒 Seguridad & Acceso</div>
            <div style={infoContentStyle}>
              Foxborough es una zona segura y ordenada. Patriot Place es moderno y bien patrullado. 
              Los días de partido hay seguridad reforzada.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>⏰ Horarios & Duración</div>
            <div style={infoContentStyle}>
              MBTA corre hasta medianoche. Uber disponible 24/7 pero puede haber surge pricing después 
              de partidos nocturnos. Presupuesta 60-90 min desde Boston al estadio.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🎒 Qué Llevar</div>
            <div style={infoContentStyle}>
              Nueva Inglaterra en junio: 18-24°C (64-75°F), agradable. Puede estar nublado — lleva 
              abrigo ligero. La región es más fría que el resto de EE.UU. — no hay garantía de calor.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🍺 Después del Partido</div>
            <div style={infoContentStyle}>
              Foxborough no tiene vida nocturna. Vuelve a Boston (45 min) para bares y restaurantes. 
              Downtown Boston tiene opciones excelentes de entretenimiento nocturno.
            </div>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🗺️ Mapa de Ruta</h2>
        <pre style={preStyle}>{`
    DOWNTOWN BOSTON
           ↓
   MBTA Red/Orange Line
        (30 min)
           ↓
    Shuttle Station
           ↓
   Stadium Shuttle
      (15-30 min)
           ↓
   🏟️ GILLETTE STADIUM
      65,878 capacity
      
Total desde Boston: 50-60 minutos en MBTA + shuttle.

ALTERNATIVA (Recomendada):
    Downtown Boston
           ↓
       Uber/Lyft
       (45 min, $50-60)
           ↓
   🏟️ GILLETTE STADIUM

NO está en Boston — es 40 km al sur en Foxborough!
`}</pre>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🎯 Partidos en Gillette Stadium</h2>
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
              <td style={tableCellStyle}>23 junio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>1 julio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>9 julio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: '#f9f9f9', marginTop: '40px' }}>
        <BlogGuiasWidget guides={blogLinks.mundial} context="Gillette Stadium, Foxborough" />
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
