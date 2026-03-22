export function generateMetadata() {
  return {
    title: "Política de Privacidad | MetroGuia.mx",
    description: "Política de privacidad de MetroGuia.mx — uso de cookies, publicidad y datos."
  };
}

export default function PrivacyPolicyPage() {
  const heroStyles = {
    backgroundColor: "var(--metro-dark)",
    color: "white",
    padding: "4rem 1.25rem",
    textAlign: "center",
    marginBottom: "2rem"
  };

  const h1Styles = {
    fontSize: "2.5rem",
    fontWeight: "700",
    margin: "0"
  };

  const containerStyles = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 1.25rem"
  };

  const lastUpdatedStyles = {
    color: "var(--metro-gray)",
    fontSize: "0.875rem",
    marginBottom: "2rem",
    fontStyle: "italic"
  };

  const sectionStyles = {
    marginBottom: "2.5rem"
  };

  const h2Styles = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "var(--metro-dark)",
    marginBottom: "1rem",
    marginTop: "0"
  };

  const paragraphStyles = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "var(--text)",
    margin: "0 0 1rem 0"
  };

  const linkStyles = {
    color: "var(--metro-orange)",
    textDecoration: "none",
    borderRadius: "var(--radius)"
  };

  const linkHoverStyles = {
    ...linkStyles,
    textDecoration: "underline"
  };

  const backLinkStyles = {
    display: "inline-block",
    marginTop: "2rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "var(--metro-orange)",
    color: "white",
    textDecoration: "none",
    borderRadius: "var(--radius)",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "opacity 0.3s ease",
    cursor: "pointer"
  };

  return (
    <main>
      {/* Hero Section */}
      <section style={heroStyles}>
        <h1 style={h1Styles}>Política de Privacidad</h1>
      </section>

      {/* Content Section */}
      <section style={containerStyles}>
        <p style={lastUpdatedStyles}>Última actualización: Marzo 2026</p>

        {/* Section 1 */}
        <article style={sectionStyles}>
          <h2 style={h2Styles}>1. Información que recopilamos</h2>
          <p style={paragraphStyles}>
            MetroGuia.mx es un sitio de consulta gratuito. No recopilamos datos personales de manera directa. Al visitar el sitio, servicios de terceros como Google AdSense pueden recopilar información anónima sobre tu visita mediante cookies.
          </p>
        </article>

        {/* Section 2 */}
        <article style={sectionStyles}>
          <h2 style={h2Styles}>2. Uso de cookies y publicidad</h2>
          <p style={paragraphStyles}>
            Utilizamos Google AdSense para mostrar anuncios relevantes. Google y sus socios pueden usar cookies para personalizar anuncios basándose en tus visitas anteriores a este y otros sitios web. Puedes optar por no recibir publicidad personalizada en{" "}
            <a 
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyles}
            >
              Configuración de anuncios de Google
            </a>
            .
          </p>
        </article>

        {/* Section 3 */}
        <article style={sectionStyles}>
          <h2 style={h2Styles}>3. Cookies de análisis</h2>
          <p style={paragraphStyles}>
            Podemos usar herramientas de análisis web anónimas para entender cómo se usa el sitio y mejorar el contenido. Esta información no incluye datos personales identificables.
          </p>
        </article>

        {/* Section 4 */}
        <article style={sectionStyles}>
          <h2 style={h2Styles}>4. Servicios de terceros</h2>
          <p style={paragraphStyles}>
            Este sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de esos sitios. Te recomendamos leer sus políticas de privacidad.
          </p>
        </article>

        {/* Section 5 */}
        <article style={sectionStyles}>
          <h2 style={h2Styles}>5. Tus derechos</h2>
          <p style={paragraphStyles}>
            Tienes derecho a solicitar información sobre los datos que poseemos sobre ti, y a solicitar su eliminación. Para cualquier consulta sobre privacidad, contáctanos en:{" "}
            <a 
              href="mailto:contacto@metroguia.mx"
              style={linkStyles}
            >
              contacto@metroguia.mx
            </a>
          </p>
        </article>

        {/* Section 6 */}
        <article style={sectionStyles}>
          <h2 style={h2Styles}>6. Cambios a esta política</h2>
          <p style={paragraphStyles}>
            Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página.
          </p>
        </article>

        {/* Back Link */}
        <a 
          href="/"
          style={backLinkStyles}
        >
          ← Volver al inicio
        </a>
      </section>
    </main>
  );
}