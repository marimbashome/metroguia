export const lineasTijuana = [
  {
    id: "1",
    color: "#6B7280",
    colorNombre: "Gris azulado",
    inicio: "San Ysidro",
    fin: "Playas de Tijuana",
    total: 7,
    municipios: ["Tijuana"],
    descripcion: "Corredor principal de Tijuana que conecta San Ysidro (frontera con San Diego) hasta Playas de Tijuana en el Océano Pacífico. Cubre zonas turísticas, comerciales y gastronómicas. Perfecto para turistas del Mundial 2026 hospedados en Tijuana.",
    estaciones_turisticas: ["san-ysidro-frontera", "plaza-rio", "zona-centro", "mercado-hidalgo", "playas-tj"],
    estaciones: ["san-ysidro-frontera", "chaparral", "plaza-rio", "zona-centro", "catedral-tijuana", "mercado-hidalgo", "playas-tj"],
    ruta_1_dia: {
      titulo: "Ruta de 1 Día: Frontera a Océano",
      paradas: [
        { estacion: "san-ysidro-frontera", actividad: "8:00 AM - Cruce fronterizo a pie" },
        { estacion: "chaparral", actividad: "9:00 AM - Regreso a Tijuana" },
        { estacion: "plaza-rio", actividad: "10:00 AM - Desayuno gourmet en Zona Río" },
        { estacion: "zona-centro", actividad: "12:00 PM - Avenida Revolución y tiendas" },
        { estacion: "mercado-hidalgo", actividad: "2:00 PM - Tacos de adobada legendarios" },
        { estacion: "catedral-tijuana", actividad: "4:00 PM - Catedral Metropolitana" },
        { estacion: "playas-tj", actividad: "6:00 PM - Atardecer y cena de mariscos" }
      ]
    },
    seo_title: "Línea 1 Tijuana — San Ysidro a Playas | MetroGuia",
    meta_description: "Línea 1 de Tijuana. De San Ysidro a Playas: turismo, gastronomía y frontera.",
    h1: "Línea 1 Tijuana — Del Océano a la Frontera"
  },
  {
    id: "2",
    color: "#4B5563",
    colorNombre: "Gris oscuro",
    inicio: "Plaza Santa Cecilia",
    fin: "Valle de Guadalupe",
    total: 6,
    municipios: ["Tijuana", "Ensenada"],
    descripcion: "Línea que conecta plaza de mariachis hasta la región vitivinícola de Valle de Guadalupe. Cubre servicios de salud, centro cultural con mariachis, zona residencial y acceso al 'Napa Valley de México'. Ideal para experiencia cultural y gastronómica.",
    estaciones_turisticas: ["plaza-santa-cecilia", "playas-tj", "valle-guadalupe-acceso"],
    estaciones: ["plaza-santa-cecilia", "hospital-general-tj", "aeropuerto-tj", "puente-cross-border", "buena-vista", "la-mesa-tj", "valle-guadalupe-acceso"],
    ruta_1_dia: {
      titulo: "Ruta de 1 Día: Cultura y Vino",
      paradas: [
        { estacion: "plaza-santa-cecilia", actividad: "7:00 PM - Mariachis en vivo" },
        { estacion: "hospital-general-tj", actividad: "9:00 PM - Centro médico referencia" },
        { estacion: "aeropuerto-tj", actividad: "10:00 AM (día siguiente) - Llegada o partida" },
        { estacion: "buena-vista", actividad: "11:00 AM - Almuerzo en restaurante local" },
        { estacion: "la-mesa-tj", actividad: "1:00 PM - Zona residencial tranquila" },
        { estacion: "valle-guadalupe-acceso", actividad: "3:00 PM - Valle de Guadalupe: viñedos" }
      ]
    },
    seo_title: "Línea 2 Tijuana — Mariachis a Valle de Guadalupe | MetroGuia",
    meta_description: "Línea 2 de Tijuana. De mariachis a viñedos: cultura, servicios y gastronomía.",
    h1: "Línea 2 Tijuana — Cultura y Vino"
  }
];
