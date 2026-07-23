import AdBannerLazy from '@/app/components/AdBannerLazy'
import BreadcrumbSchema from '@/app/components/BreadcrumbSchema'

export const metadata = {
  title: 'Guías de Viaje en México — 70+ guías completas | MetroGuia',
  description: 'Guías prácticas para visitar México: CDMX, Chiapas, gastronomía, cultura, eventos FIFA 2026, seguridad, empaque y más. Todo lo que un turista necesita saber.',
  keywords: 'guías México, guía turismo CDMX, guía Chiapas, mundial 2026 México, qué hacer en México, seguridad México',
  alternates: {
    canonical: 'https://metroguia.mx/guias-mexico/',
  },
  openGraph: {
    title: 'Guías de Viaje en México — 70+ guías completas | MetroGuia',
    description: 'Guías prácticas: CDMX, Chiapas, gastronomía, cultura, FIFA 2026, seguridad y más.',
    url: 'https://metroguia.mx/guias-mexico/',
    siteName: 'MetroGuia',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guías de Viaje en México | MetroGuia',
    description: 'Guías prácticas para visitar México: CDMX, Chiapas, gastronomía, FIFA 2026 y más.',
  },
}

const BASE = '/guias-mexico/'

const categories = [
  {
    title: 'CDMX — Experiencia Completa',
    emoji: '🏙️',
    color: 'var(--primary)',
    guides: [
      { slug: '100-cosas-hacer-cdmx', title: '100 Cosas que Hacer en CDMX', desc: 'La lista definitiva del visitante.' },
      { slug: 'aeropuertos-cdmx', title: 'Aeropuertos de CDMX (AICM + AIFA)', desc: 'Cómo moverte desde y hacia cada terminal.' },
      { slug: 'angel-independencia', title: 'Ángel de la Independencia', desc: 'Historia, acceso y mejor horario.' },
      { slug: 'basilica-guadalupe', title: 'Basílica de Guadalupe', desc: 'Cómo llegar y qué esperar en tu visita.' },
      { slug: 'casa-azul-frida', title: 'Casa Azul de Frida Kahlo', desc: 'Boletos, horarios y ruta al museo.' },
      { slug: 'museo-antropologia', title: 'Museo Nacional de Antropología', desc: 'Qué ver primero y tips del Chapultepec.' },
      { slug: 'museos-cdmx', title: 'Museos de CDMX', desc: 'Los mejores museos de la capital.' },
      { slug: 'plaza-garibaldi', title: 'Plaza Garibaldi — Mariachi', desc: 'Cómo visitar con seguridad.' },
      { slug: 'tlalpan', title: 'Centro de Tlalpan', desc: 'El pueblo histórico dentro de CDMX.' },
      { slug: 'metro-cdmx', title: 'Metro CDMX — Guía de uso', desc: 'Cómo funciona el sistema para extranjeros.' },
    ],
  },
  {
    title: 'Vida Nocturna y Bares',
    emoji: '🍻',
    color: 'var(--accent)',
    guides: [
      { slug: 'antros-vida-nocturna-cdmx', title: 'Antros y Vida Nocturna CDMX', desc: 'Los mejores barrios para salir.' },
      { slug: 'bares-cdmx', title: 'Bares de CDMX', desc: 'Desde cantinas históricas hasta coctelería.' },
      { slug: 'botaneros-tuxtla', title: 'Botaneros de Tuxtla', desc: 'La tradición del botanero chiapaneco.' },
    ],
  },
  {
    title: 'Gastronomía',
    emoji: '🌮',
    color: 'var(--warning)',
    guides: [
      { slug: 'tacos-cdmx', title: 'Tacos de CDMX', desc: 'Pastor, suadero, guisado y más.' },
      { slug: 'restaurantes-cdmx', title: 'Restaurantes de CDMX', desc: 'De fondas a alta cocina.' },
      { slug: 'restaurantes-tuxtla', title: 'Restaurantes de Tuxtla', desc: 'La mejor comida chiapaneca.' },
      { slug: 'ruta-gastronomica-centro-historico', title: 'Ruta Gastronómica — Centro Histórico', desc: 'Comida típica en el corazón de CDMX.' },
      { slug: 'ruta-gastronomica-coyoacan', title: 'Ruta Gastronómica — Coyoacán', desc: 'Antojitos, churros y nieves.' },
      { slug: 'ruta-gastronomica-roma-condesa', title: 'Ruta Gastronómica — Roma y Condesa', desc: 'La gastronomía moderna de CDMX.' },
      { slug: 'ruta-gastronomica-san-cristobal', title: 'Ruta Gastronómica — San Cristóbal', desc: 'Sabores chiapanecos de altura.' },
      { slug: 'ruta-gastronomica-tuxtla', title: 'Ruta Gastronómica — Tuxtla', desc: 'Comida tradicional del sureste.' },
      { slug: 'dulces-tipicos-mexico', title: 'Dulces Típicos de México', desc: 'La tradición azucarada del país.' },
    ],
  },
  {
    title: 'Bebidas Mexicanas',
    emoji: '🍹',
    color: 'var(--terra)',
    guides: [
      { slug: 'bebidas-alcoholicas-mexico', title: 'Bebidas Alcohólicas de México', desc: 'Tequila, mezcal, pulque y más.' },
      { slug: 'bebidas-alcoholicas-chiapas', title: 'Bebidas Alcohólicas de Chiapas', desc: 'Pox, comiteco y tradiciones locales.' },
      { slug: 'bebidas-no-alcoholicas-mexico', title: 'Bebidas No Alcohólicas', desc: 'Aguas frescas, atoles y más.' },
      { slug: 'cafe-chiapas', title: 'Café de Chiapas', desc: 'Uno de los mejores cafés del mundo.' },
      { slug: 'cervezas-mexicanas', title: 'Cervezas Mexicanas', desc: 'Guía completa de cervecerías.' },
    ],
  },
  {
    title: 'Chiapas — Cultura Profunda',
    emoji: '🌿',
    color: 'var(--success)',
    guides: [
      { slug: 'chiapas', title: 'Chiapas — Visión General', desc: 'Todo lo que debes saber del estado.' },
      { slug: 'tuxtla-gutierrez', title: 'Tuxtla Gutiérrez', desc: 'La capital chiapaneca.' },
      { slug: 'chamula', title: 'San Juan Chamola', desc: 'Tradiciones tzotziles únicas.' },
      { slug: 'berriozabal-coita', title: 'Berriozábal y Ocozocoautla', desc: 'Ecoturismo cerca de Tuxtla.' },
      { slug: 'comunidades-indigenas-chiapas', title: 'Comunidades Indígenas de Chiapas', desc: 'Tzotziles, tzeltales, zoques y más.' },
      { slug: 'grupos-etnicos-chiapas', title: 'Grupos Étnicos de Chiapas', desc: 'La diversidad cultural del estado.' },
      { slug: 'historia-chiapas', title: 'Historia de Chiapas', desc: 'Desde los mayas hasta hoy.' },
      { slug: 'artesanias-chiapas-cdmx', title: 'Artesanías de Chiapas en CDMX', desc: 'Dónde encontrarlas en la capital.' },
      { slug: 'pueblos-magicos-chiapas', title: 'Pueblos Mágicos de Chiapas', desc: 'Los más hermosos del estado.' },
      { slug: 'museo-del-ambar', title: 'Museo del Ámbar', desc: 'El tesoro de los Altos de Chiapas.' },
      { slug: 'museos-tuxtla', title: 'Museos de Tuxtla', desc: 'Cultura en la capital chiapaneca.' },
      { slug: 'parque-marimba', title: 'Parque de la Marimba', desc: 'El corazón musical de Tuxtla.' },
      { slug: 'playas-chiapas', title: 'Playas de Chiapas', desc: 'Costa virgen del Pacífico.' },
      { slug: 'rio-la-venta', title: 'Río La Venta', desc: 'Aventura en el cañón.' },
      { slug: 'sima-de-las-cotorras', title: 'Sima de las Cotorras', desc: 'Maravilla natural de Chiapas.' },
      { slug: 'zoomat', title: 'Zoomat — Zoológico Miguel Álvarez', desc: 'Fauna endémica de Chiapas.' },
      { slug: 'carnaval-chiapas', title: 'Carnavales de Chiapas', desc: 'Tradiciones vivas del estado.' },
    ],
  },
  {
    title: 'México — Cultura Nacional',
    emoji: '🇲🇽',
    color: 'var(--primary)',
    guides: [
      { slug: 'historia-mexico', title: 'Historia de México', desc: 'De la prehispánica a hoy.' },
      { slug: 'civilizaciones-prehispanicas', title: 'Civilizaciones Prehispánicas', desc: 'Aztecas, mayas, toltecas y más.' },
      { slug: 'zonas-arqueologicas-mexico', title: 'Zonas Arqueológicas de México', desc: 'Las más importantes del país.' },
      { slug: 'pueblos-magicos-mexico', title: 'Pueblos Mágicos de México', desc: '132 pueblos con encanto.' },
      { slug: 'mejores-playas-mexico', title: 'Mejores Playas de México', desc: 'Del Caribe al Pacífico.' },
      { slug: 'dia-de-muertos', title: 'Día de Muertos', desc: 'La tradición más icónica.' },
      { slug: 'musica-mexicana', title: 'Música Mexicana', desc: 'Géneros y tradiciones sonoras.' },
      { slug: 'mariachi-trios', title: 'Mariachi y Tríos', desc: 'La tradición musical viva.' },
      { slug: 'festivales-musica-mexico', title: 'Festivales de Música', desc: 'Los mejores del año.' },
      { slug: 'cine-mexicano', title: 'Cine Mexicano', desc: 'Guía esencial.' },
      { slug: 'lucha-libre', title: 'Lucha Libre', desc: 'Cómo y dónde verla en vivo.' },
      { slug: 'idiomas-lenguas-mexico', title: 'Idiomas y Lenguas de México', desc: '68 lenguas indígenas + español.' },
    ],
  },
  {
    title: 'Eventos y Deportes',
    emoji: '🏟️',
    color: 'var(--info)',
    guides: [
      { slug: 'mundial-2026', title: 'Mundial FIFA 2026', desc: 'Guía oficial del turista.' },
      { slug: 'f1-mexico', title: 'Fórmula 1 México', desc: 'Gran Premio en el Autódromo.' },
      { slug: 'foro-gnp', title: 'Foro GNP Seguros', desc: 'Conciertos y eventos.' },
      { slug: 'teatro-auditorio-cdmx', title: 'Teatros y Auditorios de CDMX', desc: 'Cartelera cultural.' },
      { slug: 'liga-mx-deportes-cdmx', title: 'Liga MX y Deportes en CDMX', desc: 'América, Pumas, Cruz Azul.' },
    ],
  },
  {
    title: 'Tips Prácticos',
    emoji: '🧭',
    color: 'var(--slate)',
    guides: [
      { slug: 'que-empacar-mexico', title: 'Qué Empacar para México', desc: 'Lista por región y temporada.' },
      { slug: 'salud-emergencias-mexico', title: 'Salud y Emergencias', desc: 'Números y hospitales.' },
      { slug: 'seguridad-mexico', title: 'Seguridad en México', desc: 'Consejos reales.' },
      { slug: 'digital-nomads-mexico', title: 'Nómadas Digitales en México', desc: 'Mejores ciudades, coworking y costos.' },
      { slug: 'economia-negocios-mexico', title: 'Economía y Negocios', desc: 'Contexto para emprendedores.' },
    ],
  },
  {
    title: 'Otros Destinos',
    emoji: '🗺️',
    color: 'var(--terra)',
    guides: [
      { slug: 'tren-maya', title: 'Tren Maya', desc: 'Ruta, estaciones y tips.' },
      { slug: 'valle-de-guadalupe', title: 'Valle de Guadalupe', desc: 'La ruta del vino mexicano.' },
    ],
  },
]

export default function GuiasMexicoHub() {
  const totalGuides = categories.reduce((sum, c) => sum + c.guides.length, 0)
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://metroguia.mx/' },
    { name: 'Guías de México', url: 'https://metroguia.mx/guias-mexico/' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <a href="/" style={{ color: 'inherit' }}>Inicio</a>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <span>Guías de México</span>
        </nav>

        <header style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', margin: 0, lineHeight: 1.15 }}>
            Guías de Viaje en México
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: 760, marginTop: '1rem' }}>
            {totalGuides}+ guías prácticas para visitantes: ciudades, gastronomía, cultura,
            eventos FIFA 2026 y tips de seguridad. Escritas por operadores locales desde 2015.
          </p>
        </header>

        <AdBannerLazy slot="guias-mexico-top" />

        {categories.map((cat) => (
          <section key={cat.title} style={{ marginTop: '2.5rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              margin: '0 0 1rem',
              paddingLeft: '0.75rem',
              borderLeft: `4px solid ${cat.color}`,
            }}>
              <span style={{ marginRight: '0.5rem' }}>{cat.emoji}</span>
              {cat.title}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '0.875rem',
            }}>
              {cat.guides.map((g) => (
                <a
                  key={g.slug}
                  href={`${BASE}${g.slug}/`}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    borderRadius: 10,
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 120ms ease, border-color 120ms ease',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.35rem' }}>
                    {g.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {g.desc}
                  </div>
                  <div style={{
                    marginTop: '0.65rem',
                    fontSize: '0.8rem',
                    color: cat.color,
                    fontWeight: 500,
                  }}>
                    Leer guía →
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <section style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--surface)',
          borderRadius: 12,
          border: '1px solid var(--border)',
        }}>
          <h2 style={{ marginTop: 0 }}>¿Planeas tu viaje?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Combina estas guías con nuestras rutas de transporte público y los
            8 programas turísticos oficiales de México.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="/turismo/" style={btnPrimary}>Turismo en México</a>
            <a href="/mundial-2026/" style={btnSecondary}>Mundial FIFA 2026</a>
            <a href="/cdmx/" style={btnSecondary}>Metro CDMX</a>
          </div>
        </section>
      </div>
    </>
  )
}

const btnPrimary = {
  padding: '0.65rem 1.1rem',
  background: 'var(--primary)',
  color: 'white',
  borderRadius: 8,
  textDecoration: 'none',
  fontWeight: 500,
}

const btnSecondary = {
  padding: '0.65rem 1.1rem',
  background: 'transparent',
  color: 'var(--text)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  textDecoration: 'none',
  fontWeight: 500,
}
