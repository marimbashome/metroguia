import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

export const metadata = {
  title: 'Contacto',
  description:
    'Contacta a MetroGuia.mx para reportar un dato incorrecto, sugerir una ciudad o hacer una pregunta sobre transporte público en México.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <div>
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Contacto', url: '/contact/' }]} />

      <section className="section page-hero">
        <div className="container-narrow">
          <h1>Contacto</h1>
          <p className="page-hero-lede">Preguntas, correcciones y sugerencias.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow legal-body">
          <h2>Escríbenos</h2>
          <p>
            Para preguntas sobre el sitio, reportar información desactualizada o sugerir contenido nuevo:
          </p>
          <p className="contact-email">
            <a href="mailto:enrique@marimbashome.com">enrique@marimbashome.com</a>
          </p>

          <h2>Motivos de contacto</h2>
          <ul>
            <li>
              <strong>Información incorrecta:</strong> datos desactualizados sobre estaciones, líneas,
              transbordos o tarifas.
            </li>
            <li>
              <strong>Ciudad o sistema faltante:</strong> transporte público que no está cubierto todavía.
            </li>
            <li>
              <strong>Colaboraciones:</strong> medios, blogs de viaje u organizaciones de transporte.
            </li>
          </ul>

          <h2>Tiempo de respuesta</h2>
          <p>Respondemos la mayoría de los correos en 24 a 48 horas hábiles.</p>

          <h2>Sobre MetroGuia.mx</h2>
          <p>
            MetroGuia.mx es un proyecto de{' '}
            <a href="https://marimbashome.com" target="_blank" rel="noopener noreferrer">Marimbas Home</a>.
            Más contexto en <a href="/about/">Acerca de</a>.
          </p>
        </div>
      </section>

      <style>{pageStyles}</style>
    </div>
  )
}

const pageStyles = `
  .page-hero { text-align: center; }
  .page-hero-lede { color: var(--text-muted); font-size: 1.02rem; }
  .legal-body h2 { margin-top: var(--space-6); }
  .legal-body h2:first-child { margin-top: 0; }
  .legal-body p, .legal-body li { color: var(--text-muted); }
  .legal-body ul { margin: 0 0 var(--space-4); padding-left: 1.25rem; list-style: disc; }
  .legal-body li { margin-bottom: var(--space-2); }
  .legal-body a { color: var(--forest); font-weight: 600; }
  .contact-email { font-size: 1.15rem; }
  .contact-email a { color: var(--amber-hover); }
`
