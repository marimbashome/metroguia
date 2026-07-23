export const metadata = {
  title: 'Política de Privacidad — MetroGuia.mx',
  description: 'Política de privacidad de MetroGuia.mx. Información sobre el uso de cookies, publicidad y datos de navegación.',
  alternates: { canonical: '/privacy-policy/' },
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <section className="hero" style={{ backgroundColor: 'var(--metro-dark)', padding: '3rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Política de Privacidad</h1>
          <p style={{ opacity: 0.7, fontSize: '0.875rem' }}>Última actualización: 22 de marzo de 2026</p>
        </div>
      </section>

      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px', lineHeight: 1.8 }}>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>1. Información general</h2>
          <p>
            MetroGuia.mx es un sitio web de información turística sobre los sistemas de transporte
            público de México (Metro CDMX, SITEUR Guadalajara y Metrorrey Monterrey). Este sitio
            es operado por Marimbas Home y está disponible en <strong>metroguia.mx</strong>.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>2. Datos que recopilamos</h2>
          <p>
            MetroGuia.mx no recopila datos personales identificables de forma directa. Sin embargo,
            utilizamos servicios de terceros que pueden recopilar información de manera automática:
          </p>
          <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Google AdSense:</strong> Mostramos anuncios de Google AdSense. Google puede
              utilizar cookies para mostrar anuncios relevantes basados en tus visitas anteriores
              a este u otros sitios web.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Google Analytics:</strong> Podemos utilizar Google Analytics para analizar
              el tráfico del sitio. Esta herramienta recopila datos anónimos de navegación como
              páginas visitadas, tiempo de permanencia y país de origen.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Datos técnicos:</strong> Los servidores registran automáticamente información
              estándar como dirección IP, tipo de navegador, páginas visitadas y fecha/hora de acceso.
            </li>
          </ul>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>3. Uso de cookies</h2>
          <p>
            Este sitio utiliza cookies propias y de terceros para mejorar la experiencia de usuario
            y mostrar publicidad personalizada. Las cookies de Google AdSense permiten a Google
            y a sus socios mostrar anuncios basados en visitas previas a este sitio y otros sitios
            en internet.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Puedes desactivar el uso de cookies personalizadas visitando la{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--metro-orange)' }}>
              página de configuración de anuncios de Google
            </a>.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>4. Publicidad (Google AdSense)</h2>
          <p>
            MetroGuia.mx participa en el programa Google AdSense (Publisher ID: ca-pub-5779958677522085).
            Google puede utilizar información sobre tus visitas a este y otros sitios web para ofrecer
            anuncios sobre bienes y servicios de tu interés.
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>5. Contenido informativo</h2>
          <p>
            Toda la información sobre rutas, estaciones, horarios y tarifas es de carácter informativo.
            Para información oficial consulta: Metro CDMX (metro.cdmx.gob.mx), SITEUR GDL (siteur.gob.mx),
            Metrorrey (nl.gob.mx/metrorrey).
          </p>

          <h2 style={{ marginBottom: '1rem', marginTop: '2rem' }}>6. Contacto</h2>
          <p>
            Para cualquier pregunta sobre privacidad:{' '}
            <a href="mailto:enrique@marimbashome.com" style={{ color: 'var(--metro-orange)' }}>
              enrique@marimbashome.com
            </a>
          </p>

        </div>
      </section>
    </div>
  )
}
