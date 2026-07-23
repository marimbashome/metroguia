'use client';

export default function AffiliateHospedaje({ ciudad = 'CDMX', estacion = null }) {
  const ctaUrl = estacion 
    ? `/hospedaje/?cerca=${estacion}`
    : '/hospedaje/';
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.08) 0%, rgba(245, 166, 35, 0.02) 100%)',
      border: '1px solid var(--primary-border)',
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
          color: 'var(--primary)',
          backgroundColor: 'rgba(245, 166, 35, 0.12)',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
        }}>
          Marimbas Home
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
          Hospedaje verificado
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
          ? `Departamentos cerca de ${estacion}`
          : `Hospedaje para turistas en ${ciudad}`}
      </h3>
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        marginBottom: '1rem',
        lineHeight: 1.6,
      }}>
        Departamentos completos en zonas seguras, a minutos del metro. 
        Check-in flexible, WiFi de alta velocidad y soporte 24/7. Ideal para el Mundial 2026.
      </p>
      <a
        href={ctaUrl}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'var(--primary)',
          color: '#000',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '0.875rem',
          transition: 'opacity 0.2s',
        }}
      >
        Ver hospedajes disponibles →
      </a>
    </div>
  );
}
