'use client';

export default function AffiliateTransportCard({ ciudad, icon, titulo, descripcion, precio, enlace, donde, tip }) {
  // Mode 1: Dynamic props (US/CA pages pass these directly)
  if (titulo) {
    return (
      <a
        href={enlace || '#'}
        target={enlace && enlace.startsWith('http') ? '_blank' : undefined}
        rel={enlace && enlace.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          margin: '0.75rem 0',
          borderLeft: '4px solid var(--info)',
          transition: 'border-color 0.2s, transform 0.2s',
          cursor: enlace ? 'pointer' : 'default',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: descripcion ? '0.75rem' : 0,
          }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              flexShrink: 0,
            }}>
              {icon || '💳'}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text)',
                margin: 0,
              }}>
                {titulo}
              </h3>
              {precio && (
                <span style={{
                  fontSize: '0.8rem',
                  color: 'var(--primary)',
                  fontWeight: 600,
                }}>
                  {precio}
                </span>
              )}
            </div>
            {enlace && enlace.startsWith('http') && (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>↗</span>
            )}
          </div>
          
          {descripcion && (
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              margin: 0,
              lineHeight: 1.5,
            }}>
              {descripcion}
            </p>
          )}
          
          {donde && (
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--text-dim)',
              margin: '0.5rem 0 0',
              lineHeight: 1.4,
            }}>
              📍 {donde}
            </p>
          )}
          
          {tip && (
            <div style={{
              marginTop: '0.75rem',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius)',
              backgroundColor: 'rgba(245, 166, 35, 0.06)',
              border: '1px solid var(--primary-border)',
              fontSize: '0.8rem',
              color: 'var(--warning)',
              lineHeight: 1.4,
            }}>
              💡 {tip}
            </div>
          )}
        </div>
      </a>
    );
  }
  
  // Mode 2: Ciudad lookup (MX cities — legacy)
  const cards = {
    CDMX: {
      nombre: 'Tarjeta de Movilidad Integrada',
      costo: '$21 MXN',
      recarga: 'Desde $5 MXN',
      donde: 'Taquillas del metro y puntos de recarga',
      tip: 'La tarjeta NO funciona en el Tren Ligero. Compra boleto separado en Tasqueña.',
      sistemas: 'Metro, Metrobús, RTP, Trolebús, Cablebús',
    },
    GDL: {
      nombre: 'Tarjeta Mi Pasaje',
      costo: '$20 MXN',
      recarga: 'Desde $10 MXN',
      donde: 'Estaciones del Tren Ligero y Mi Macro',
      tip: 'Un solo pago cubre transbordos dentro del sistema SITEUR.',
      sistemas: 'Tren Ligero, Mi Macro Periférico, Mi Macro Calzada',
    },
    MTY: {
      nombre: 'Tarjeta Feria',
      costo: '$30 MXN',
      recarga: 'Desde $10 MXN',
      donde: 'Taquillas de Metrorrey y tiendas de conveniencia',
      tip: 'Carga suficiente saldo — no todas las estaciones tienen taquilla abierta.',
      sistemas: 'Metrorrey L1, Metrorrey L2, Ecovía, Transmetro',
    },
  };
  
  const card = cards[ciudad] || cards.CDMX;
  
  return (
    <div style={{
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      margin: '2rem 0',
      borderLeft: '4px solid var(--info)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1rem',
      }}>
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: 'var(--radius)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          flexShrink: 0,
        }}>
          💳
        </div>
        <div>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text)',
            margin: 0,
          }}>
            {card.nombre}
          </h3>
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
          }}>
            Tarjeta de transporte — {ciudad}
          </span>
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '0.75rem',
        marginBottom: '1rem',
      }}>
        <div style={{
          padding: '0.75rem',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            Costo tarjeta
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
            {card.costo}
          </div>
        </div>
        <div style={{
          padding: '0.75rem',
          borderRadius: 'var(--radius)',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            Recarga mínima
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
            {card.recarga}
          </div>
        </div>
      </div>
      
      <p style={{
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem',
        lineHeight: 1.5,
      }}>
        <strong style={{ color: 'var(--text)' }}>Sistemas:</strong> {card.sistemas}
      </p>
      <p style={{
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginBottom: '0.75rem',
        lineHeight: 1.5,
      }}>
        <strong style={{ color: 'var(--text)' }}>Dónde comprar:</strong> {card.donde}
      </p>
      
      <div style={{
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius)',
        backgroundColor: 'rgba(245, 166, 35, 0.06)',
        border: '1px solid var(--primary-border)',
        fontSize: '0.85rem',
        color: 'var(--warning)',
        lineHeight: 1.5,
      }}>
        💡 <strong>Tip:</strong> {card.tip}
      </div>
    </div>
  );
}
