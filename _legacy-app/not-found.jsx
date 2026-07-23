export const metadata = {
  title: 'Página no encontrada | MetroGuia',
  description: 'Esta estación no existe en nuestro mapa, pero podemos ayudarte a encontrar tu ruta.',
}

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
    }}>
      {/* Animated 404 */}
      <div style={{
        fontSize: '8rem',
        fontWeight: 900,
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--cdmx) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: '1rem',
        letterSpacing: '-0.02em',
        animation: 'bounce 2s infinite',
      }}>
        404
      </div>

      {/* Main message */}
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: '0.75rem',
        maxWidth: '600px',
      }}>
        Esta estación no existe en nuestro mapa
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: '1rem',
        color: 'var(--text-muted)',
        textAlign: 'center',
        maxWidth: '500px',
        marginBottom: '2.5rem',
        lineHeight: 1.6,
      }}>
        Pero podemos ayudarte a encontrar tu ruta. Explora nuestras líneas o regresa al inicio.
      </p>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '3rem',
      }}>
        <a href="/" style={{
          padding: '0.875rem 1.75rem',
          backgroundColor: 'var(--primary)',
          color: '#000',
          fontWeight: 600,
          textDecoration: 'none',
          borderRadius: 'var(--radius)',
          fontSize: '0.95rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}>
          ← Ir al inicio
        </a>
        <a href="/lineas/" style={{
          padding: '0.875rem 1.75rem',
          backgroundColor: 'var(--surface-hover)',
          color: 'var(--primary)',
          fontWeight: 600,
          textDecoration: 'none',
          borderRadius: 'var(--radius)',
          fontSize: '0.95rem',
          border: '1px solid var(--primary-border)',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}>
          Ver líneas CDMX →
        </a>
      </div>

      {/* Quick links grid */}
      <div style={{
        maxWidth: '500px',
        width: '100%',
      }}>
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--text-dim)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
          Explora rápido
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
        }}>
          <a href="/" style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            border: '1px solid var(--border)',
            textAlign: 'center',
            transition: 'all 0.2s',
          }}>
            🏠 Inicio
          </a>
          <a href="/lineas/" style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            border: '1px solid var(--border)',
            textAlign: 'center',
            transition: 'all 0.2s',
          }}>
            🚇 Líneas
          </a>
          <a href="/mundial-2026/" style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            border: '1px solid var(--border)',
            textAlign: 'center',
            transition: 'all 0.2s',
          }}>
            ⚽ Mundial 2026
          </a>
          <a href="/cdmx/" style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            border: '1px solid var(--border)',
            textAlign: 'center',
            transition: 'all 0.2s',
          }}>
            🗺 CDMX
          </a>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
