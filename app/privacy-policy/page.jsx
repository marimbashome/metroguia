import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de MetroGuia.mx: qué datos se recopilan, qué herramientas de medición usamos y cómo contactarnos.',
  alternates: { canonical: '/privacy-policy/' },
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      <BreadcrumbSchema items={[{ name: 'Inicio', url: '/' }, { name: 'Privacidad', url: '/privacy-policy/' }]} />

      <section className="section page-hero">
        <div className="container-narrow">
          <h1>Política de Privacidad</h1>
          <p className="page-hero-lede">Última actualización: 22 de julio de 2026</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-narrow legal-body">
          <h2>1. Información general</h2>
          <p>
            MetroGuia.mx es un sitio informativo sobre transporte público en México, operado por Marimbas
            Home y disponible en <strong>metroguia.mx</strong>. Este sitio no muestra publicidad ni vende
            datos de navegación a terceros.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>
            MetroGuia.mx no pide ni almacena datos personales identificables (no hay registro de cuenta ni
            formularios que guarden información). Usamos tres herramientas de medición y monitoreo:
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4:</strong> mide páginas visitadas, duración de la visita y país de
              origen de forma agregada, para entender qué contenido es útil.
            </li>
            <li>
              <strong>Vercel Analytics:</strong> métricas de rendimiento del sitio (velocidad de carga),
              sin cookies de seguimiento entre sitios.
            </li>
            <li>
              <strong>Sentry:</strong> monitoreo de errores técnicos (por ejemplo, si una página falla al
              cargar), para poder corregirlos. Puede registrar la URL donde ocurrió el error y datos técnicos
              del navegador, no información personal.
            </li>
          </ul>
          <p>
            Como en cualquier sitio web, nuestro proveedor de hosting registra automáticamente datos técnicos
            estándar (dirección IP, tipo de navegador, fecha y hora de acceso) por motivos de seguridad y
            diagnóstico.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Este sitio no usa cookies de publicidad ni de rastreo entre sitios. Google Analytics 4 puede usar
            cookies propias para distinguir sesiones de visita de forma agregada y anónima.
          </p>

          <h2>4. Enlaces a terceros</h2>
          <p>
            Enlazamos a sitios oficiales de sistemas de transporte (Metro CDMX, SITEUR, Metrorrey, entre
            otros) para que consultes información en tiempo real. No somos responsables de las prácticas de
            privacidad de esos sitios externos.
          </p>

          <h2>5. Contenido informativo</h2>
          <p>
            Toda la información sobre rutas, estaciones, horarios y tarifas es de carácter informativo y
            puede cambiar sin previo aviso. Para información oficial y vigente, consulta la fuente de cada
            ciudad en <a href="/fuentes/">Fuentes de datos</a>.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Para preguntas sobre esta política: <a href="mailto:enrique@marimbashome.com">enrique@marimbashome.com</a>
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
`
