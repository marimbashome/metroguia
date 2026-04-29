'use client';

/**
 * 4 cards de afiliados específicas para visitantes del Mundial 2026.
 * Hospedaje · Airbnb · Boletos · Vuelos.
 *
 * Variant 'azteca' deep-links a búsqueda por Estadio Azteca CDMX.
 * Variant 'mundial' (default) usa CDMX como destino genérico.
 */
export default function MundialAffiliateCards({ variant = 'mundial' }) {
  const isAzteca = variant === 'azteca';

  const bookingUrl = isAzteca
    ? 'https://www.booking.com/searchresults.html?ss=Estadio+Azteca+CDMX&utm_source=metroguia&utm_medium=mundial&utm_campaign=2026'
    : 'https://www.booking.com/searchresults.html?ss=Ciudad+de+M%C3%A9xico&utm_source=metroguia&utm_medium=mundial&utm_campaign=2026';

  const airbnbUrl = 'https://www.airbnb.mx/s/Ciudad-de-M%C3%A9xico/homes?utm_source=metroguia&utm_medium=mundial&utm_campaign=2026';
  const ticketsUrl = 'https://www.ticketmaster.com.mx/buscar?q=mundial+2026&utm_source=metroguia&utm_medium=mundial&utm_campaign=2026';
  const flightsUrl = 'https://www.skyscanner.mx/transport/flights-to/mexd/?utm_source=metroguia&utm_medium=mundial&utm_campaign=2026';

  const cards = [
    {
      href: bookingUrl,
      emoji: '🏨',
      title: isAzteca ? 'Hotel cerca del Azteca' : 'Hoteles para el Mundial',
      desc: isAzteca ? 'Coyoacán y Coapa, a 30 min en metro del estadio' : 'Hoteles en CDMX para el Mundial 2026',
      gradient: 'linear-gradient(135deg, #003580 0%, #009fe3 100%)',
      cta: 'Buscar en Booking →',
      label: 'Booking.com',
    },
    {
      href: airbnbUrl,
      emoji: '🏠',
      title: 'Airbnb en CDMX',
      desc: 'Departamentos y casas para el Mundial — Roma, Condesa, Coyoacán',
      gradient: 'linear-gradient(135deg, #FF385C 0%, #E61E4D 100%)',
      cta: 'Buscar en Airbnb →',
      label: 'Airbnb',
    },
    {
      href: ticketsUrl,
      emoji: '🎟️',
      title: 'Boletos disponibles',
      desc: 'Búsqueda de entradas oficiales y reventa Mundial 2026',
      gradient: 'linear-gradient(135deg, #1B47B0 0%, #0066CC 100%)',
      cta: 'Buscar en Ticketmaster →',
      label: 'Ticketmaster',
    },
    {
      href: flightsUrl,
      emoji: '✈️',
      title: 'Vuelos a sedes del Mundial',
      desc: 'Compara aerolíneas a CDMX, GDL, MTY y sedes USA/CA',
      gradient: 'linear-gradient(135deg, #00B488 0%, #00897B 100%)',
      cta: 'Buscar en Skyscanner →',
      label: 'Skyscanner',
    },
  ];

  return (
    <section
      aria-labelledby="mundial-affiliates-heading"
      style={{
        padding: '3rem 0 1.5rem',
        marginTop: '2rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0, fontWeight: 600 }}>
          Planifica tu viaje
        </p>
        <h2 id="mundial-affiliates-heading" style={{ color: '#00D4FF', fontSize: '1.5rem', marginTop: '0.35rem', marginBottom: '1.5rem' }}>
          {isAzteca ? 'Tu día de partido en el Azteca' : 'Hospedaje, vuelos y boletos del Mundial'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {cards.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="sponsored noopener"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '0.65rem',
                overflow: 'hidden',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              className="hover-lift"
            >
              <div style={{ background: c.gradient, padding: '1.5rem', minHeight: 110, color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '2rem', margin: 0, lineHeight: 1 }}>{c.emoji}</p>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>{c.title}</h3>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', opacity: 0.9, fontWeight: 400 }}>{c.desc}</p>
                </div>
              </div>
              <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                  {c.label}
                </span>
                <span style={{ color: '#00D4FF', fontWeight: 600, fontSize: '0.9rem' }}>{c.cta}</span>
              </div>
            </a>
          ))}
        </div>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', marginTop: '1rem', textAlign: 'center' }}>
          Algunos enlaces son afiliados — si reservas, MetroGuia recibe una comisión sin costo extra para ti.
        </p>
      </div>
    </section>
  );
}
