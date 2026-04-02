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

// Helper: construir URL del blog
export function getBlogUrl(slug) {
  return `https://marimbashome.com/blog/${slug}`
}

// Helper: obtener guías para una estación
export function getGuidesForStation(stationSlug) {
  return blogLinks.estaciones[stationSlug] || []
}

// Helper: obtener guías para una zona
export function getGuidesForZone(zoneSlug) {
  return blogLinks.zonas[zoneSlug] || []
}