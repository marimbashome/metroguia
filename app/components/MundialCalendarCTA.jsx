'use client';

export default function MundialCalendarCTA({ variant = 'full' }) {
  const showFull = variant === 'full' || variant === 'all';
  const showMex = variant === 'mexico' || variant === 'all' || variant === 'full';
  const showAzteca = variant === 'azteca' || variant === 'all' || variant === 'full';

  return (
    <section
      aria-label="Suscribirse al calendario del Mundial 2026"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        border: '1px solid rgba(0,212,255,0.25)',
        borderRadius: '0.75rem',
        padding: '2rem 1.5rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', margin: '0 0 0.5rem 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        📅 Suscribir calendario
      </p>
      <h3 style={{ color: '#00D4FF', fontSize: '1.4rem', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
        Recibe los partidos en tu calendario
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: '0 0 1.5rem 0' }}>
        Compatible con Google Calendar, Apple Calendar y Outlook. Se actualiza automáticamente con horarios y resultados.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {showFull && (
          <a
            href="webcal://metroguia.mx/calendar/mundial-2026.ics"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.5rem',
              background: '#00D4FF',
              color: '#0A0A0F',
              borderRadius: '0.4rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            📅 Todo el Mundial (104 partidos)
          </a>
        )}
        {showMex && (
          <a
            href="webcal://metroguia.mx/calendar/mexico-2026.ics"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.5rem',
              background: 'rgba(0, 153, 76, 0.15)',
              color: '#10b981',
              border: '1px solid #10b981',
              borderRadius: '0.4rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            🇲🇽 Solo México (3 partidos)
          </a>
        )}
        {showAzteca && (
          <a
            href="webcal://metroguia.mx/calendar/azteca-2026.ics"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.5rem',
              background: 'rgba(233, 30, 140, 0.15)',
              color: '#E91E8C',
              border: '1px solid #E91E8C',
              borderRadius: '0.4rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            🏛️ Solo Azteca (5 partidos)
          </a>
        )}
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
        Si no se abre tu app de calendario, descarga el archivo .ics directamente con click derecho.
      </p>
    </section>
  );
}
