/**
 * blog-links.js — Mapeo contextual de estaciones/zonas MetroGuia → guías del blog marimbashome.com
 * Solo estaciones con alto tráfico potencial. Máximo 3 guías por estación.
 */

export const blogLinks = {
  // Mapeo estación slug → array de guías relevantes
  estaciones: {
    'chilpancingo': [
      { slug: 'condesa', titulo: 'Guía Completa de La Condesa', categoria: 'Barrio' },
      { slug: 'restaurantes-cdmx', titulo: 'Mejores Restaurantes CDMX', categoria: 'Gastronomía' },
      { slug: 'antros-vida-nocturna-cdmx', titulo: 'Vida Nocturna CDMX', categoria: 'Entretenimiento' },
    ],
    'patriotismo': [
      { slug: 'condesa', titulo: 'Guía Completa de La Condesa', categoria: 'Barrio' },
      { slug: 'roma-norte', titulo: 'Guía de Roma Norte', categoria: 'Barrio' },
    ],
    'juanacatlan': [
      { slug: 'condesa', titulo: 'Guía Completa de La Condesa', categoria: 'Barrio' },
    ],
    'chapultepec': [
      { slug: 'polanco', titulo: 'Guía de Polanco', categoria: 'Barrio' },
      { slug: 'museo-antropologia', titulo: 'Museo de Antropología', categoria: 'Museo' },
      { slug: 'museos-cdmx', titulo: 'Mejores Museos CDMX', categoria: 'Cultura' },
    ],
    'auditorio': [
      { slug: 'polanco', titulo: 'Guía de Polanco', categoria: 'Barrio' },
      { slug: 'teatro-auditorio-cdmx', titulo: 'Teatro y Auditorio CDMX', categoria: 'Entretenimiento' },
    ],
    'polanco': [
      { slug: 'polanco', titulo: 'Guía de Polanco', categoria: 'Barrio' },
      { slug: 'restaurantes-cdmx', titulo: 'Mejores Restaurantes CDMX', categoria: 'Gastronomía' },
    ],
    'insurgentes': [
      { slug: 'roma-norte', titulo: 'Guía de Roma Norte', categoria: 'Barrio' },
      { slug: 'condesa', titulo: 'Guía Completa de La Condesa', categoria: 'Barrio' },
    ],
    'sevilla': [
      { slug: 'roma-norte', titulo: 'Guía de Roma Norte', categoria: 'Barrio' },
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
    'zocalo': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
      { slug: '100-cosas-hacer-cdmx', titulo: '100 Cosas que Hacer en CDMX', categoria: 'Actividades' },
      { slug: 'historia-mexico', titulo: 'Historia de México', categoria: 'Cultura' },
    ],
    'bellas-artes': [
      { slug: 'museos-cdmx', titulo: 'Mejores Museos CDMX', categoria: 'Cultura' },
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
    'hidalgo': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
      { slug: 'plaza-garibaldi', titulo: 'Plaza Garibaldi y Mariachi', categoria: 'Entretenimiento' },
    ],
    'coyoacan': [
      { slug: 'coyoacan', titulo: 'Guía de Coyoacán', categoria: 'Barrio' },
      { slug: 'casa-azul-frida', titulo: 'Casa Azul de Frida Kahlo', categoria: 'Museo' },
    ],
    'viveros': [
      { slug: 'coyoacan', titulo: 'Guía de Coyoacán', categoria: 'Barrio' },
    ],
    'tasquena': [
      { slug: 'mundial-2026', titulo: 'Mundial FIFA 2026 en México', categoria: 'Evento' },
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
    'pino-suarez': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
      { slug: '100-cosas-hacer-cdmx', titulo: '100 Cosas que Hacer en CDMX', categoria: 'Actividades' },
    ],
    'garibaldi': [
      { slug: 'plaza-garibaldi', titulo: 'Plaza Garibaldi y Mariachi', categoria: 'Entretenimiento' },
      { slug: 'mariachi-trios', titulo: 'Mariachi y Tríos', categoria: 'Cultura' },
    ],
    'xochimilco': [
      { slug: 'xochimilco', titulo: 'Guía de Xochimilco', categoria: 'Atracción' },
    ],
    'la-villa-basilica': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
    ],
    'san-lazaro': [
      { slug: 'aeropuertos-cdmx', titulo: 'Aeropuertos CDMX', categoria: 'Práctico' },
    ],
    'terminal-aerea': [
      { slug: 'aeropuertos-cdmx', titulo: 'Aeropuertos CDMX', categoria: 'Práctico' },
    ],
    'balderas': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
      { slug: 'lucha-libre', titulo: 'Lucha Libre en México', categoria: 'Entretenimiento' },
    ],
    'ninos-heroes': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
    'centro-medico': [
      { slug: 'salud-emergencias-mexico', titulo: 'Salud y Emergencias', categoria: 'Práctico' },
    ],
    'mixcoac': [
      { slug: 'tlalpan', titulo: 'Guía de Tlalpan', categoria: 'Barrio' },
    ],
    'universidad': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
      { slug: 'coyoacan', titulo: 'Guía de Coyoacán', categoria: 'Barrio' },
    ],
    'tacuba': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
    'tlatelolco': [
      { slug: 'historia-mexico', titulo: 'Historia de México', categoria: 'Cultura' },
    ],
    'observatorio': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
    'pantitlan': [
      { slug: 'aeropuertos-cdmx', titulo: 'Aeropuertos CDMX', categoria: 'Práctico' },
    ],
    // --- Expansión Abr 2026: cross-links a nuevas guías internas /guias-mexico/ ---
    'allende': [
      { slug: 'ruta-gastronomica-centro-historico', titulo: 'Ruta Gastronómica Centro Histórico', categoria: 'Gastronomía' },
      { slug: 'plaza-garibaldi', titulo: 'Plaza Garibaldi y Mariachi', categoria: 'Entretenimiento' },
      { slug: '100-cosas-hacer-cdmx', titulo: '100 Cosas que Hacer', categoria: 'Actividades' },
    ],
    'salto-del-agua': [
      { slug: 'ruta-gastronomica-centro-historico', titulo: 'Ruta Gastronómica Centro Histórico', categoria: 'Gastronomía' },
    ],
    'isabel-la-catolica': [
      { slug: 'ruta-gastronomica-centro-historico', titulo: 'Ruta Gastronómica Centro Histórico', categoria: 'Gastronomía' },
    ],
    'san-juan-de-letran': [
      { slug: 'ruta-gastronomica-centro-historico', titulo: 'Ruta Gastronómica Centro Histórico', categoria: 'Gastronomía' },
      { slug: 'plaza-garibaldi', titulo: 'Plaza Garibaldi', categoria: 'Entretenimiento' },
    ],
    'juarez': [
      { slug: 'angel-independencia', titulo: 'Ángel de la Independencia', categoria: 'Atracción' },
      { slug: 'ruta-gastronomica-centro-historico', titulo: 'Ruta Gastronómica Centro', categoria: 'Gastronomía' },
    ],
    'cuauhtemoc': [
      { slug: 'lucha-libre', titulo: 'Lucha Libre CDMX', categoria: 'Entretenimiento' },
      { slug: '100-cosas-hacer-cdmx', titulo: '100 Cosas que Hacer', categoria: 'Actividades' },
    ],
    'revolucion': [
      { slug: 'lucha-libre', titulo: 'Lucha Libre CDMX', categoria: 'Entretenimiento' },
      { slug: 'historia-mexico', titulo: 'Historia de México', categoria: 'Cultura' },
      { slug: 'museos-cdmx', titulo: 'Museos CDMX', categoria: 'Cultura' },
    ],
    'lagunilla': [
      { slug: 'plaza-garibaldi', titulo: 'Plaza Garibaldi y Mariachi', categoria: 'Entretenimiento' },
      { slug: '100-cosas-hacer-cdmx', titulo: '100 Cosas que Hacer', categoria: 'Actividades' },
    ],
    'chilpancingo': [
      { slug: 'ruta-gastronomica-roma-condesa', titulo: 'Ruta Roma-Condesa', categoria: 'Gastronomía' },
      { slug: 'bares-cdmx', titulo: 'Mejores Bares CDMX', categoria: 'Entretenimiento' },
      { slug: 'antros-vida-nocturna-cdmx', titulo: 'Vida Nocturna CDMX', categoria: 'Entretenimiento' },
    ],
    'patriotismo': [
      { slug: 'ruta-gastronomica-roma-condesa', titulo: 'Ruta Roma-Condesa', categoria: 'Gastronomía' },
    ],
    'miguel-angel-de-quevedo': [
      { slug: 'casa-azul-frida', titulo: 'Casa Azul de Frida', categoria: 'Museo' },
      { slug: 'ruta-gastronomica-coyoacan', titulo: 'Ruta Gastronómica Coyoacán', categoria: 'Gastronomía' },
    ],
    'general-anaya': [
      { slug: 'casa-azul-frida', titulo: 'Casa Azul de Frida', categoria: 'Museo' },
      { slug: 'ruta-gastronomica-coyoacan', titulo: 'Ruta Coyoacán', categoria: 'Gastronomía' },
    ],
    'tasquena-coyoacan': [
      { slug: 'casa-azul-frida', titulo: 'Casa Azul de Frida', categoria: 'Museo' },
    ],
    'la-villa': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
      { slug: 'historia-mexico', titulo: 'Historia de México', categoria: 'Cultura' },
    ],
    'deportivo-18-marzo': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
    ],
    'basilica': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
    ],
    'indios-verdes': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
    ],
    'misterios': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
    ],
    'martin-carrera': [
      { slug: 'basilica-guadalupe', titulo: 'Basílica de Guadalupe', categoria: 'Atracción' },
    ],
    'ciudad-deportiva': [
      { slug: 'liga-mx-deportes-cdmx', titulo: 'Liga MX y Deportes', categoria: 'Deportes' },
      { slug: 'f1-gran-premio-mexico', titulo: 'F1 Gran Premio de México', categoria: 'Deportes' },
      { slug: 'mundial-2026', titulo: 'Mundial FIFA 2026', categoria: 'Evento' },
    ],
    'velodromo': [
      { slug: 'liga-mx-deportes-cdmx', titulo: 'Liga MX y Deportes', categoria: 'Deportes' },
      { slug: 'foro-gnp', titulo: 'Foro Sol / GNP', categoria: 'Entretenimiento' },
    ],
    'mixiuhca': [
      { slug: 'liga-mx-deportes-cdmx', titulo: 'Liga MX y Deportes', categoria: 'Deportes' },
      { slug: 'f1-gran-premio-mexico', titulo: 'F1 Gran Premio de México', categoria: 'Deportes' },
      { slug: 'foro-gnp', titulo: 'Foro Sol / GNP', categoria: 'Entretenimiento' },
    ],
    'copilco': [
      { slug: 'tlalpan', titulo: 'Guía de Tlalpan', categoria: 'Barrio' },
    ],
    'tacubaya': [
      { slug: 'museo-antropologia', titulo: 'Museo de Antropología', categoria: 'Museo' },
      { slug: 'angel-independencia', titulo: 'Ángel de la Independencia', categoria: 'Atracción' },
    ],
    'tacubaya-cdmx': [
      { slug: 'museo-antropologia', titulo: 'Museo de Antropología', categoria: 'Museo' },
    ],
  },

  // Mapeo zona slug → guías
  zonas: {
    'condesa': [
      { slug: 'condesa', titulo: 'Guía Completa de La Condesa', categoria: 'Barrio' },
      { slug: 'restaurantes-cdmx', titulo: 'Mejores Restaurantes CDMX', categoria: 'Gastronomía' },
      { slug: 'bares-cdmx', titulo: 'Mejores Bares CDMX', categoria: 'Entretenimiento' },
    ],
    'roma-norte': [
      { slug: 'roma-norte', titulo: 'Guía de Roma Norte', categoria: 'Barrio' },
      { slug: 'restaurantes-cdmx', titulo: 'Mejores Restaurantes CDMX', categoria: 'Gastronomía' },
      { slug: 'tacos-cdmx', titulo: 'Mejores Tacos CDMX', categoria: 'Gastronomía' },
    ],
    'centro-historico': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
      { slug: '100-cosas-hacer-cdmx', titulo: '100 Cosas que Hacer', categoria: 'Actividades' },
      { slug: 'historia-mexico', titulo: 'Historia de México', categoria: 'Cultura' },
    ],
    'polanco': [
      { slug: 'polanco', titulo: 'Guía de Polanco', categoria: 'Barrio' },
      { slug: 'museo-antropologia', titulo: 'Museo de Antropología', categoria: 'Museo' },
    ],
    'coyoacan': [
      { slug: 'coyoacan', titulo: 'Guía de Coyoacán', categoria: 'Barrio' },
      { slug: 'casa-azul-frida', titulo: 'Casa Azul de Frida', categoria: 'Museo' },
    ],
    'xochimilco': [
      { slug: 'xochimilco', titulo: 'Guía de Xochimilco', categoria: 'Atracción' },
    ],
    'estadio-azteca': [
      { slug: 'mundial-2026', titulo: 'Mundial FIFA 2026', categoria: 'Evento' },
      { slug: 'liga-mx-deportes-cdmx', titulo: 'Liga MX y Deportes', categoria: 'Deportes' },
    ],
    'tepito-lagunilla': [
      { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    ],
  },

  // Páginas del Mundial → guías
  mundial: [
    { slug: 'mundial-2026', titulo: 'Mundial FIFA 2026 en México', categoria: 'Evento' },
    { slug: 'cdmx', titulo: 'Guía Completa CDMX', categoria: 'Ciudad' },
    { slug: 'guadalajara-jalisco', titulo: 'Guía de Guadalajara', categoria: 'Ciudad' },
    { slug: 'monterrey', titulo: 'Guía de Monterrey', categoria: 'Ciudad' },
    { slug: 'seguridad-en-mexico', titulo: 'Seguridad en México', categoria: 'Práctico' },
    { slug: 'que-empacar-mexico', titulo: 'Qué Empacar para México', categoria: 'Práctico' },
  ],
}

// Slugs que tienen página interna en /guias-mexico/[slug]/ (generadas desde guides-content.json)
// Si el slug está en esta lista, getBlogUrl devuelve URL interna de MetroGuia.
const INTERNAL_GUIDE_SLUGS = new Set([
  '100-cosas-hacer-cdmx','aeropuertos-cdmx','angel-independencia','antros-vida-nocturna-cdmx',
  'artesanias-chiapas-cdmx','bares-cdmx','basilica-guadalupe','bebidas-alcoholicas-chiapas',
  'bebidas-alcoholicas-mexico','bebidas-no-alcoholicas-mexico','berriozabal-coita','botaneros-tuxtla',
  'cafe-chiapas','carnaval-chiapas','casa-azul-frida','cervezas-mexicanas','chamula','chiapas',
  'cine-mexicano','civilizaciones-prehispanicas','comunidades-indigenas-chiapas','dia-de-muertos-mexico',
  'digital-nomads-mexico','dulces-tipicos-mexico','economia-negocios-mexico','f1-gran-premio-mexico',
  'festivales-musica-mexico','foro-gnp','grupos-etnicos-chiapas','historia-chiapas','historia-mexico',
  'idiomas-lenguas-mexico','liga-mx-deportes-cdmx','lucha-libre','mariachi-trios','mejores-playas-mexico',
  'metro-cdmx','mundial-2026','museo-antropologia','museo-del-ambar','museos-cdmx','museos-tuxtla',
  'musica-mexicana','parque-marimba','playas-chiapas','plaza-garibaldi','pueblos-magicos-chiapas',
  'pueblos-magicos-mexico','que-empacar-mexico','restaurantes-cdmx','restaurantes-tuxtla','rio-la-venta',
  'ruta-gastronomica-centro-historico','ruta-gastronomica-coyoacan','ruta-gastronomica-roma-condesa',
  'ruta-gastronomica-san-cristobal','ruta-gastronomica-tuxtla','salud-emergencias-mexico',
  'seguridad-en-mexico','sima-de-las-cotorras','tacos-cdmx','teatro-auditorio-cdmx','tlalpan',
  'tren-maya','tuxtla-gutierrez','valle-de-guadalupe','zonas-arqueologicas-mexico','zoomat',
])

// Helper: construir URL (interna si existe, externa si no)
export function getBlogUrl(slug) {
  if (INTERNAL_GUIDE_SLUGS.has(slug)) return `/guias-mexico/${slug}/`
  return `https://book.marimbashome.com/es/guides/${slug}`
}

export function isInternalGuide(slug) {
  return INTERNAL_GUIDE_SLUGS.has(slug)
}

// Helper: obtener guías para una estación
export function getGuidesForStation(stationSlug) {
  return blogLinks.estaciones[stationSlug] || []
}

// Helper: obtener guías para una zona
export function getGuidesForZone(zoneSlug) {
  return blogLinks.zonas[zoneSlug] || []
}