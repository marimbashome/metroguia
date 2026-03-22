'use client'

export default function OfflineClient() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '500px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          📡
        </div>

        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 800,
          marginBottom: '1rem',
          color: 'var(--text)',
        }}>
          Sin conexión a internet
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}>
          Parece que no hay conexión disponible. MetroGuia funciona mejor con internet para actualizar datos en tiempo real.
        </p>

        <div style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'left',
        }}>
          <h3 style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
            color: 'var(--text)',
          }}>
            Qué puedo hacer
          </h3>
          <ul style={{
            margin: 0,
            paddingLeft: '1.5rem',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
          }}>
            <li>Ver rutas que consultaste anteriormente (en caché)</li>
            <li>Revisar estaciones guiadas de ciudades descargadas</li>
            <li>Leer información de líneas de transporte guardadas</li>
            <li>Consultar tu historial de búsquedas</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'rgba(245, 166, 35, 0.1)',
          border: '1px solid rgba(245, 166, 35, 0.3)',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'left',
        }}>
          <h3 style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
            color: '#F5A623',
          }}>
            💡 Consejo
          </h3>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
          }}>
            Instala MetroGuia como app (PWA) para mejor experiencia offline. Los datos se actualizan automáticamente cuando recuperas conexión.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="/"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#0A0A0F',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Ir a inicio
          </a>
          <button
            onClick={() => window.history.back()}
            style={{
              backgroundColor: 'var(--surface)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Atrás
          </button>
        </div>

        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-dim)',
          marginTop: '2rem',
          marginBottom: 0,
        }}>
          Verifica tu conexión de datos o WiFi e intenta nuevamente
        </p>
      </div>
    </div>
  )
}
