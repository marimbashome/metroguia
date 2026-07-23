'use client';

export default function AffiliateMundial({ ciudad = 'CDMX', fechas = null }) {
  const estadios = {
    CDMX: { nombre: 'Estadio Azteca', fechas: '11, 17, 24 jun · 30 jun · 5 jul 2026' },
    GDL: { nombre: 'Estadio Akron', fechas: '11, 18, 23, 26 jun 2026' },
    MTY: { nombre: 'Estadio BBVA', fechas: '14, 20, 24, 29 jun 2026' },
  };
  
  const info = estadios[ciudad] || estadios.CDMX;
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
      border: '1px solid var(--primary-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      margin: '2rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        fontSize: '5rem',
        opacity: 0.06,
        lineHeight: 1,
      }}>
        ⚽
      </div>
      
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0.75rem',
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'rgba(245, 166, 35, 0.12)',
        border: '1px solid var(--primary-border)',
        fontSize: '0.7rem',
        fontWeight: 700,
        color: 'var(--primary)',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        FIFA World Cup 2026
      </div>
      
      <h3 style={{
        fontSize: '1.15rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
      }}>
        ¿Vienes al Mundial en {ciudad}?
      </h3>
      
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem',
        lineHeight: 1.6,
      }}>
        {info.nombre} — Partidos: {fechas || info.fechas}
      </p>
      
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
        lineHeight: 1.6,
      }}>
        Hospédate cerca del metro para llegar al estadio sin complicaciones. 
        Departamentos completos con check-in flexible y guía de transporte incluida.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
      }}>
        <a
          href="/hospedaje/"
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
          }}
        >
          Ver hospedajes →
        </a>
        <a
          href="/mundial-2026/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--primary)',
            border: '1px solid var(--primary-border)',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
          }}
        >
          Guía del Mundial →
        </a>
      </div>
    </div>
  );
}
