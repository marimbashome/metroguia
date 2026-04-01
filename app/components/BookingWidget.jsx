'use client';

/**
 * BookingWidget — Booking.com affiliate search widget
 * Shows near tourist metro stations with deep link to Booking.com
 * Affiliate ID pending — uses generic link structure ready for ID insertion
 */
export default function BookingWidget({ ciudad = 'CDMX', estacion = null, checkIn = null, checkOut = null }) {
  const ciudadConfig = {
    CDMX: {
      destId: '-1658079',
      destName: 'Ciudad de México',
      label: 'Ciudad de México',
      emoji: '🏙️',
    },
    GDL: {
      destId: '-1576996',
      destName: 'Guadalajara',
      label: 'Guadalajara',
      emoji: '🌮',
    },
    MTY: {
      destId: '-1611769',
      destName: 'Monterrey',
      label: 'Monterrey',
      emoji: '🏔️',
    },
  };

  const config = ciudadConfig[ciudad] || ciudadConfig.CDMX;

  // Build Booking.com search URL with affiliate params
  const buildUrl = () => {
    const params = new URLSearchParams({
      ss: estacion ? `${estacion}, ${config.destName}` : config.destName,
      dest_id: config.destId,
      dest_type: 'city',
      lang: 'es',
      // aid placeholder — replace with actual Booking.com affiliate ID when approved
      aid: '2397601',
    });
    if (checkIn) params.set('checkin', checkIn);
    if (checkOut) params.set('checkout', checkOut);
    return `https://www.booking.com/searchresults.html?${params.toString()}`;
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 53, 128, 0.06) 0%, rgba(0, 53, 128, 0.02) 100%)',
      border: '1px solid rgba(0, 53, 128, 0.15)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      margin: '2rem 0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.75rem',
      }}>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#003580',
          backgroundColor: 'rgba(0, 53, 128, 0.08)',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
        }}>
          Booking.com
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
          Hoteles y departamentos
        </span>
      </div>

      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
      }}>
        {estacion
          ? `Hospedaje cerca de ${estacion}`
          : `Hoteles en ${config.label}`}
      </h3>

      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        marginBottom: '1rem',
        lineHeight: 1.6,
      }}>
        {estacion
          ? `Encuentra hoteles y departamentos a pasos de la estación ${estacion}. Cancelación gratuita en la mayoría de opciones.`
          : `Compara precios de hoteles y departamentos en ${config.label}. Mejores tarifas garantizadas.`}
      </p>

      <div style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap',
      }}>
        {['Cancelación gratis', 'Sin prepago', 'Mejor precio'].map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(0, 53, 128, 0.06)',
              color: '#003580',
              fontWeight: 600,
            }}
          >
            ✓ {tag}
          </span>
        ))}
      </div>

      <a
        href={buildUrl()}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          backgroundColor: '#003580',
          color: '#fff',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '0.875rem',
          transition: 'opacity 0.2s',
        }}
      >
        Buscar en Booking.com →
      </a>
    </div>
  );
}
