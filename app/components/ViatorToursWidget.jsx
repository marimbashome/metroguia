'use client';

/**
 * ViatorToursWidget — Tours & activities affiliate widget
 * Links to Viator/GetYourGuide for city tours, food tours, cultural experiences
 * Affiliate IDs pending — uses generic link structure ready for ID insertion
 */
export default function ViatorToursWidget({ ciudad = 'CDMX', zona = null }) {
  const ciudadConfig = {
    CDMX: {
      viatorUrl: 'https://www.viator.com/es-MX/Mexico-City/d628-ttd',
      gygUrl: 'https://www.getyourguide.es/ciudad-de-mexico-l194/',
      label: 'Ciudad de México',
      tours: [
        { nombre: 'Tour gastronómico en Condesa', tipo: 'Comida', precio: 'Desde $850 MXN', icono: '🍽️' },
        { nombre: 'Paseo en bici por Roma-Condesa', tipo: 'Aventura', precio: 'Desde $600 MXN', icono: '🚲' },
        { nombre: 'Coyoacán + Xochimilco', tipo: 'Cultural', precio: 'Desde $750 MXN', icono: '🏛️' },
        { nombre: 'Teotihuacán en transporte público', tipo: 'Arqueología', precio: 'Desde $400 MXN', icono: '🏜️' },
      ],
    },
    GDL: {
      viatorUrl: 'https://www.viator.com/es-MX/Guadalajara/d5082-ttd',
      gygUrl: 'https://www.getyourguide.es/guadalajara-l957/',
      label: 'Guadalajara',
      tours: [
        { nombre: 'Tour de tequila en Tequila', tipo: 'Gastronomía', precio: 'Desde $1,200 MXN', icono: '🥃' },
        { nombre: 'Centro Histórico a pie', tipo: 'Cultural', precio: 'Desde $500 MXN', icono: '🏛️' },
        { nombre: 'Tlaquepaque artesanal', tipo: 'Compras', precio: 'Desde $350 MXN', icono: '🎨' },
      ],
    },
    MTY: {
      viatorUrl: 'https://www.viator.com/es-MX/Monterrey/d22478-ttd',
      gygUrl: 'https://www.getyourguide.es/monterrey-l1637/',
      label: 'Monterrey',
      tours: [
        { nombre: 'Cola de Caballo + Grutas', tipo: 'Naturaleza', precio: 'Desde $900 MXN', icono: '🏞️' },
        { nombre: 'Paseo Santa Lucía', tipo: 'Cultural', precio: 'Desde $250 MXN', icono: '🚤' },
        { nombre: 'Tour de cerdo y carne asada', tipo: 'Gastronomía', precio: 'Desde $700 MXN', icono: '🥩' },
      ],
    },
  };

  const config = ciudadConfig[ciudad] || ciudadConfig.CDMX;
  const displayTours = config.tours.slice(0, 3);

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(43, 172, 118, 0.06) 0%, rgba(43, 172, 118, 0.02) 100%)',
      border: '1px solid rgba(43, 172, 118, 0.15)',
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
          color: '#2BAC76',
          backgroundColor: 'rgba(43, 172, 118, 0.1)',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
        }}>
          Tours y actividades
        </span>
        {zona && (
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            Cerca de {zona}
          </span>
        )}
      </div>

      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '1rem',
        lineHeight: 1.3,
      }}>
        Experiencias en {config.label}
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: '1.25rem',
      }}>
        {displayTours.map((tour) => (
          <div
            key={tour.nombre}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
            }}
          >
            <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{tour.icono}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--text)',
                lineHeight: 1.3,
              }}>
                {tour.nombre}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                marginTop: '0.15rem',
              }}>
                {tour.tipo}
              </div>
            </div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#2BAC76',
              whiteSpace: 'nowrap',
            }}>
              {tour.precio}
            </span>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
      }}>
        <a
          href={config.viatorUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: '#2BAC76',
            color: '#fff',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
          }}
        >
          Ver en Viator →
        </a>
        <a
          href={config.gygUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--surface)',
            color: '#2BAC76',
            border: '1px solid rgba(43, 172, 118, 0.2)',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
          }}
        >
          Ver en GetYourGuide →
        </a>
      </div>
    </div>
  );
}
