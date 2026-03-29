import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import AffiliateHospedaje from '@/app/components/affiliate/AffiliateHospedaje'

export const metadata = {
  title: 'Mundial FIFA 2026 en CDMX — Cómo llegar en Metro | MetroGuia',
  description: 'Guía completa para llegar al Estadio Azteca durante el Mundial 2026. Fechas de partidos, rutas en metro, precios y tips para turistas.',
  keywords: 'mundial 2026, estadio azteca, metro cdmx, como llegar, fifa',
}

function Countdown() {
  const today = new Date('2026-03-23');
  const inaugural = new Date('2026-06-11');
  const daysLeft = Math.floor((inaugural - today) / (1000 * 60 * 60 * 24));
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--cdmx) 100%)',
      padding: '3rem 2rem',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      marginBottom: '3rem'
    }}>
      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 0.5rem 0' }}>El Mundial comienza en</p>
      <h2 style={{ color: '#fff', margin: '0.5rem 0', fontSize: '3rem', fontWeight: '800' }}>{daysLeft} días</h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0.5rem 0', fontSize: '0.95rem' }}>Jueves, 11 de junio de 2026 — Inauguración en el Estadio Azteca</p>
    </div>
  );
}

export default function MundialPage() {
  // JSON-LD structured data for World Cup events in CDMX
  const eventos = [
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'FIFA World Cup 2026 — Partido de Grupo, Estadio Azteca CDMX',
      description: 'Partido de la Fase de Grupos del Mundial FIFA 2026 en el Estadio Azteca',
      startDate: '2026-06-11',
      endDate: '2026-06-11',
      location: {
        '@type': 'Place',
        name: 'Estadio Azteca',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calzada de Tlalpan 3665',
          addressLocality: 'Ciudad de México',
          addressRegion: 'Ciudad de México',
          postalCode: '14020',
          addressCountry: 'MX'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 19.302500,
          longitude: -99.145833
        }
      },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: {
        '@type': 'Organization',
        name: 'FIFA'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.fifa.com',
        price: 'Vary',
        priceCurrency: 'MXN',
        availability: 'https://schema.org/PreOrder'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'FIFA World Cup 2026 — Partido de Grupo, Estadio Azteca CDMX (17 junio)',
      description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
      startDate: '2026-06-17',
      endDate: '2026-06-17',
      location: {
        '@type': 'Place',
        name: 'Estadio Azteca',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ciudad de México',
          addressCountry: 'MX'
        }
      },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'Organization', name: 'FIFA' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'FIFA World Cup 2026 — Partido de Grupo, Estadio Azteca CDMX (24 junio)',
      description: 'Partido de la Fase de Grupos del Mundial FIFA 2026',
      startDate: '2026-06-24',
      endDate: '2026-06-24',
      location: { '@type': 'Place', name: 'Estadio Azteca', address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' } },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'Organization', name: 'FIFA' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'FIFA World Cup 2026 — Octavos de Final, Estadio Azteca CDMX (30 junio)',
      description: 'Partido de Octavos de Final del Mundial FIFA 2026',
      startDate: '2026-06-30',
      endDate: '2026-06-30',
      location: { '@type': 'Place', name: 'Estadio Azteca', address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' } },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'Organization', name: 'FIFA' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SportsEvent',
      name: 'FIFA World Cup 2026 — Cuartos de Final, Estadio Azteca CDMX (5 julio)',
      description: 'Partido de Cuartos de Final del Mundial FIFA 2026',
      startDate: '2026-07-05',
      endDate: '2026-07-05',
      location: { '@type': 'Place', name: 'Estadio Azteca', address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressCountry: 'MX' } },
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@type': 'Organization', name: 'FIFA' }
    }
  ]

  return (
    <div>
      {eventos.map((evento, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(evento) }}
        />
      ))}
      <section className="hero" style={{ backgroundColor: '#1a472a' }}>
        <div className="container">
          <h1>⚽ Mundial FIFA 2026 en México</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Guía completa de transporte para las 3 ciudades sedes</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <Countdown />
          <AdBannerLazy slotId="4434764790" format="auto" />

          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Las 3 Ciudades Sedes del Mundial 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <a href="/mundial-2026/estadio-azteca/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ backgroundColor: 'rgba(233, 30, 140, 0.1)', border: '2px solid var(--cdmx)', padding: '2rem', borderRadius: 'var(--radius-lg)', transition: 'all 0.3s', cursor: 'pointer' }} className="hover-lift">
                <h3 style={{ color: 'var(--cdmx)', marginBottom: '0.75rem', fontSize: '1.5rem' }}>🏛️ Ciudad de México</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Estadio Azteca</p>
                <p style={{ color: 'var(--text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>5 partidos: Grupos, Octavos y Cuartos</p>
                <span style={{ color: 'var(--cdmx)', fontWeight: '600', fontSize: '0.9rem' }}>Ver guía →</span>
              </div>
            </a>
            <a href="/gdl/mundial-2026/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', border: '2px solid var(--gdl)', padding: '2rem', borderRadius: 'var(--radius-lg)', transition: 'all 0.3s', cursor: 'pointer' }} className="hover-lift">
                <h3 style={{ color: 'var(--gdl)', marginBottom: '0.75rem', fontSize: '1.5rem' }}>🍹 Guadalajara</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Estadio Akron</p>
                <p style={{ color: 'var(--text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>4 partidos: Todos de Grupos</p>
                <span style={{ color: 'var(--gdl)', fontWeight: '600', fontSize: '0.9rem' }}>Ver guía →</span>
              </div>
            </a>
            <a href="/mty/mundial-2026/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)', border: '2px solid var(--mty)', padding: '2rem', borderRadius: 'var(--radius-lg)', transition: 'all 0.3s', cursor: 'pointer' }} className="hover-lift">
                <h3 style={{ color: 'var(--mty)', marginBottom: '0.75rem', fontSize: '1.5rem' }}>🏔️ Monterrey</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Estadio BBVA</p>
                <p style={{ color: 'var(--text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>4 partidos: Grupos y Octavos</p>
                <span style={{ color: 'var(--mty)', fontWeight: '600', fontSize: '0.9rem' }}>Ver guía →</span>
              </div>
            </a>
          </div>

          {/* Affiliate Hospedaje */}
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateHospedaje ciudad="CDMX" estacion={null} fechas={null} />
          </div>
          <h2 style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Consejos Prácticos para Turistas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { emoji: '🛡️', titulo: 'Seguridad', desc: 'Viaja en grupos, evita mostrar dinero, mantén mochilas cerradas. El metro es seguro durante el día y en noches de partido.' },
              { emoji: '☀️', titulo: 'Clima (Junio)', desc: 'Temperatura: 20-28°C. Lleva bloqueador solar, gorra, botella de agua. En días de partido puede haber más calor por la multitud.' },
              { emoji: '📱', titulo: 'Teléfono e Internet', desc: 'Compra un chip eSIM de Movistar o Telcel. $10-50 MXN por datos. WiFi disponible en estaciones y museos.' },
              { emoji: '💳', titulo: 'Dinero: Efectivo vs Tarjeta', desc: 'Lleva MXN en efectivo (~$500-1000) para taxis, comida callejera y vendedores. Tarjetas aceptadas en comercios principales.' },
              { emoji: '💰', titulo: 'Propinas', desc: 'Restaurantes: 10-15%. Taxistas: redondea. Vendedores callejeros: no obligatorio. Un "gracias" es suficiente.' },
              { emoji: '🗣️', titulo: 'Español Básico', desc: 'Aprende: "¿Cuánto cuesta?" "¿A qué hora?" "Gracias" "Disculpa". Los mexicanos aprecian el esfuerzo de hablar español.' },
            ].map((tip, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border-light)', padding: '1.5rem', borderRadius: 'var(--radius)', borderTop: '3px solid var(--primary)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.emoji}</h3>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: '600' }}>{tip.titulo}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0' }}>{tip.desc}</p>
              </div>
            ))}
          </div>

          <AdBannerLazyInArticle slotId="1082410395" />

          <h2 style={{ marginBottom: '2.5rem', textAlign: 'center' }}>Fan Zones y FIFA Fan Festival</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { ciudad: '🏛️ Ciudad de México', ubicacion: 'Zócalo Histórico', detalles: 'El epicentro del Mundial. Pantallas gigantes, conciertos, ferias de mercancía. Acceso por Línea 2 (estación Zócalo).' },
              { ciudad: '🍹 Guadalajara', ubicacion: 'Plaza Liberación (Centro)', detalles: 'Corazón del centro histórico. Conexión directa con Línea 3 y servicios de comida tradicional tapatía.' },
              { ciudad: '🏔️ Monterrey', ubicacion: 'Macroplaza', detalles: 'La plaza más grande de México. Rodeada de museos, hoteles y restaurantes. Acceso por Línea 1 (estaciones: Fundadores, Cuauhtémoc).' },
            ].map((zone, i) => (
              <div key={i} style={{ backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)', padding: '1.75rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{zone.ciudad}</h3>
                <p style={{ color: 'var(--text)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{zone.ubicacion}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0' }}>{zone.detalles}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Cómo llegar al Estadio Azteca (CDMX)</h2>
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
            <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem', color: 'var(--text)' }}>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Toma la Línea 2 (Azul) hasta Tasqueña</strong>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>La Línea 2 pasa por el Centro Histórico</p>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong>Transborda al Tren Ligero en Tasqueña</strong>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>El Tren Ligero conecta directo al Estadio Azteca</p>
              </li>
              <li style={{ marginBottom: '0' }}>
                <strong>Desciende en la estación Estadio Azteca</strong>
              </li>
            </ol>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', border: '2px solid var(--warning)', borderRadius: 'var(--radius)', padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--warning)', marginBottom: '1rem' }}>⚠️ Alerta Importante</h3>
            <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--text)' }}>La tarjeta Metro NO funciona en el Tren Ligero</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Compra un boleto adicional en Tasqueña (~$10 MXN). Costo total viaje: ~$15 MXN.</p>
          </div>

          <h2 style={{ marginBottom: '1.5rem' }}>Detalles del viaje (Estadio Azteca)</h2>
          <div className="table-responsive" style={{ marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {[
                  ['Tiempo total', '~45 min desde el Centro Histórico'],
                  ['Costo Metro (L2)', '$5 MXN'],
                  ['Costo Tren Ligero', '~$10 MXN'],
                  ['Costo total', '~$15 MXN'],
                  ['Horario metro', '5:00 AM - 12:00 AM'],
                  ['Recomendación', 'Llega 2-3 horas antes del partido'],
                ].map(([k, v], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, whiteSpace: 'nowrap', color: 'var(--primary)' }}>{k}</td>
                    <td style={{ padding: '0.875rem 1rem', color: 'var(--text)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AdBannerLazy slotId="4434764790" format="auto" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <a href="/mundial-2026/estadio-azteca/" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--primary)', color: 'var(--bg)', border: 'none', borderRadius: 'var(--radius)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>
                📍 Guía Estadio Azteca
              </button>
            </a>
            <a href="/gdl/mundial-2026/" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--gdl)', color: '#000', border: 'none', borderRadius: 'var(--radius)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>
                🍹 Guía Guadalajara
              </button>
            </a>
            <a href="/mty/mundial-2026/" style={{ textDecoration: 'none' }}>
              <button style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--mty)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>
                🏔️ Guía Monterrey
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
