import BlogGuiasWidget from '@/app/components/BlogGuiasWidget';
import { blogLinks } from '@/data/blog-links';

export const metadata = {
  title: 'Levi\'s Stadium Santa Clara — Cómo llegar BART + Caltrain | FIFA 2026 | MetroGuia',
  description: 'Levi\'s Stadium en Santa Clara (40 km sur de San Francisco): capacidad 68,500. BART + Caltrain desde SF. No está en San Francisco. Guía completa de transporte público y direcciones.',
  keywords: 'Levi\'s Stadium, Santa Clara, San Francisco, FIFA 2026, BART, Caltrain, cómo llegar',
  openGraph: {
    title: 'Levi\'s Stadium — FIFA 2026',
    description: 'IMPORTANTE: Levi\'s Stadium NO está en San Francisco — está en Santa Clara, 40 km al sur.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.metroguia.mx/mundial-2026/levis-stadium/',
  },
};

export default function LevisStadiumPage() {
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
    name: 'Levi\'s Stadium',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Clara',
      addressRegion: 'CA',
      postalCode: '95054',
      addressCountry: 'US',
    },
    capacity: 68500,
    sportsTeam: [
      { '@type': 'SportsTeam', name: 'San Francisco 49ers' },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.metroguia.mx/' },
      { '@type': 'ListItem', position: 2, name: 'Mundial 2026', item: 'https://www.metroguia.mx/mundial-2026/' },
      { '@type': 'ListItem', position: 3, name: 'Levi\'s Stadium', item: 'https://www.metroguia.mx/mundial-2026/levis-stadium/' },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(placeSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div style={heroStyle}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={heroTitleStyle}>🏟️ Levi's Stadium</h1>
          <p style={heroSubStyle}>Santa Clara, California — 68,500 personas</p>
          <p style={{ fontSize: '18px', opacity: 0.85 }}>NO está en San Francisco — 40 km al sur en Santa Clara</p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={warningBoxStyle}>
          <div style={warningTitleStyle}>⚠️ IMPORTANTE</div>
          <p style={{ fontSize: '16px', color: '#ff6f00', margin: 0, lineHeight: '1.6' }}>
            Levi's Stadium NO está en San Francisco. Está ubicado en <strong>Santa Clara</strong>, a 40 km (25 millas) 
            al sur de SF. El viaje desde Downtown San Francisco toma 50-60 minutos. Muchos turistas se confunden — 
            planifica extra tiempo para el transporte.
          </p>
        </div>

        <h2 style={sectionTitleStyle}>🚂 Cómo Llegar en Transporte Público</h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
          Desde San Francisco tienes dos opciones principales: BART (tren rápido) o Caltrain (tren lento pero económico). 
          Ambas opciones requieren un transbordo o autobús adicional de 15 minutos, pero son mucho más económicas que Uber.
        </p>

        <div style={stepsContainerStyle}>
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Opción 1: BART</div>
            <div style={stepDescStyle}>
              BART es el más rápido. Toma BART desde cualquier estación SF (Civic Center, Powell St) 
              hacia San Jose (25 min). En San Jose, transborda a Caltrain hacia Santa Clara (10 min). 
              Tiempo total: 50 minutos + shuttle 15 min = 65 minutos.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Opción 2: Caltrain</div>
            <div style={stepDescStyle}>
              Caltrain es más económico pero lento. Sale desde Diridon Station (San Jose). Toma Caltrain 
              directamente a Santa Clara Station (35 min desde Diridon). Desde Santa Clara: shuttle o Uber 15 min.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 3</div>
            <div style={stepDescStyle}>
              En Santa Clara Station, espera el shuttle buses o camina 15 minutos hacia Levi's Stadium. 
              Los días de partido hay servicios especiales de shuttle — consulta con el operador.
            </div>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Paso 4</div>
            <div style={stepDescStyle}>
              Alternativa: desde San Jose o Santa Clara, toma Uber/Lyft directamente al estadio (15 min, 
              $15-20 USD). A veces es más rápido y menos confuso que esperar shuttles.
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '6px', marginBottom: '40px' }}>
          <p style={{ fontSize: '16px', color: '#1a472a', margin: 0 }}>
            <strong>💡 Consejo:</strong> BART + Caltrain es la opción MÁS ECONÓMICA y ECO. Pero el viaje es largo (60 min). 
            Si no quieres complicaciones, Uber desde SF cuesta ~$45 USD pero te deja directo en el estadio.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>ℹ️ Alrededor del Estadio</h2>
        <div style={gridContainerStyle}>
          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🍔 Comida & Bebida</div>
            <div style={infoContentStyle}>
              Santa Clara es parte de Silicon Valley — opciones modernas pero cara. Patriot Place (mall 
              adjunto) tiene tiendas y food courts. Recomendación: come en SF o en el estadio.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>💰 ATMs & Dinero</div>
            <div style={infoContentStyle}>
              ATMs disponibles en Patriot Place y dentro del estadio. California es muy digital — 
              muchas opciones de pago sin efectivo.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🔒 Seguridad & Acceso</div>
            <div style={infoContentStyle}>
              El área alrededor de Levi's es segura. Patriot Place (mall) está justo al lado — 
              puedes pasar tiempo allí antes del partido.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>⏰ Horarios & Duración</div>
            <div style={infoContentStyle}>
              BART corre hasta medianoche. Caltrain termina más temprano (~11 PM). Los días de partido 
              hay servicios extendidos. Presupuesta 60 min desde SF + 15 min local.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🎒 Qué Llevar</div>
            <div style={infoContentStyle}>
              Silicon Valley en junio: 25-30°C (77-86°F), muy caluroso. Protector solar OBLIGATORIO. 
              No llueve en junio. Lleva agua y abrigo ligero para la noche.
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={infoTitleStyle}>🍺 Después del Partido</div>
            <div style={infoContentStyle}>
              Santa Clara tiene opciones limitadas. La verdadera vida nocturna está en San Jose (10 min 
              en Caltrain) o SF (45 min). Vuelve a donde estés alojado — el viaje es largo.
            </div>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🗺️ Mapa de Ruta</h2>
        <pre style={preStyle}>{`
    SAN FRANCISCO
           ↓
     Civic Center Station
           ↓
        BART
     (25 minutos)
           ↓
   SAN JOSE DIRIDON
           ↓
      Caltrain
     (10 minutos)
           ↓
  SANTA CLARA STATION
           ↓
   Shuttle / Uber
    (15 minutos)
           ↓
   🏟️ LEVI'S STADIUM
     68,500 capacity
     
Total desde SF: 60 minutos + shuttle.
NO está en San Francisco — es Silicon Valley!
Alternativa: Uber directo desde SF ($45, 45 min).
`}</pre>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>🎯 Partidos en Levi's Stadium</h2>
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
              <td style={tableCellStyle}>21 junio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>29 junio 2026</td>
              <td style={tableCellStyle}>Fase de Grupos</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>6 julio 2026</td>
              <td style={tableCellStyle}>Cuartos de Final</td>
              <td style={tableCellStyle}>Por confirmar</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: '#f9f9f9', marginTop: '40px' }}>
        <BlogGuiasWidget guides={blogLinks.mundial} context="Levi's Stadium, Santa Clara" />
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
