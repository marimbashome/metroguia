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
    color: "#DC2626",
    colorNombre: "Rojo SITT",
    inicio: "Garita San Ysidro",
    fin: "Terminal Sur",
    total: 12,
    municipios: ["Tijuana"],
    descripcion: "Línea 2 SITT BRT: sistema moderno de transporte rápido que conecta Garita San Ysidro hasta Terminal Sur. Recorre 12 estaciones por zonas fronterizas, comerciales, residenciales y centros de transporte. Transporte de clase mundial para viajeros FIFA 2026 con frecuencia alta y velocidad consistente.",
    estaciones_turisticas: ["garita-san-ysidro-sitt", "rio-tijuana-brt", "plaza-monarca-sitt", "terminal-sur-sitt"],
    estaciones: ["garita-san-ysidro-sitt", "puerta-mexico-sitt", "revolucion-brt", "cinco-y-diez-sitt", "rio-tijuana-brt", "otay-brt", "presa-rodriguez-sitt", "via-rapida-oriente-sitt", "plaza-monarca-sitt", "la-mesa-tj-sitt", "mariano-matamoros-sitt", "terminal-sur-sitt"],
    ruta_1_dia: {
      titulo: "Ruta de 1 Día: BRT SITT Frontera a Terminal Sur",
      paradas: [
        { estacion: "garita-san-ysidro-sitt", actividad: "7:00 AM - Salida de Garita San Ysidro (transferencia desde Línea 1)" },
        { estacion: "puerta-mexico-sitt", actividad: "7:20 AM - Compras en centro comercial local" },
        { estacion: "revolucion-brt", actividad: "8:00 AM - Avenida Revolución histórica con BRT moderno" },
        { estacion: "rio-tijuana-brt", actividad: "9:30 AM - Zona Río: desayuno gourmet y compras" },
        { estacion: "plaza-monarca-sitt", actividad: "11:00 AM - Plaza Monarca: comercio y cafés" },
        { estacion: "la-mesa-tj-sitt", actividad: "12:30 PM - Almuerzo en zona residencial tranquila" },
        { estacion: "mariano-matamoros-sitt", actividad: "2:00 PM - Restaurantes de barrio auténtico" },
        { estacion: "terminal-sur-sitt", actividad: "4:00 PM - Llegada Terminal Sur" }
      ]
    },
    seo_title: "Línea 2 SITT BRT Tijuana — Transporte Rápido Moderno | MetroGuia",
    meta_description: "Línea 2 SITT BRT de Tijuana: 12 estaciones de transporte rápido. Garita San Ysidro a Terminal Sur con clase mundial.",
    h1: "Línea 2 SITT BRT — Transporte Rápido de Clase Mundial"
  },
  {
    id: "3",
    color: "#4B5563",
    colorNombre: "Gris oscuro",
    inicio: "Plaza Santa Cecilia",
    fin: "Valle de Guadalupe",
    total: 6,
    municipios: ["Tijuana", "Ensenada"],
    descripcion: "Línea 3: Conexión cultural y gastronómica desde plaza de mariachis hasta la región vitivinícola de Valle de Guadalupe. Cubre servicios de salud, centro cultural con mariachis, zona residencial y acceso al 'Napa Valley de México'. Ideal para experiencia cultural y gastronómica.",
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
    seo_title: "Línea 3 Tijuana — Mariachis a Valle de Guadalupe | MetroGuia",
    meta_description: "Línea 3 de Tijuana. De mariachis a viñedos: cultura, servicios y gastronomía.",
    h1: "Línea 3 Tijuana — Cultura y Vino"
  }
];