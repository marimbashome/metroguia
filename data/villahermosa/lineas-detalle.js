export const lineasVillahermosa = [
  {
    id: "1",
    color: "#F59E0B",
    colorNombre: "Ámbar",
    inicio: "Terminal Primera Clase",
    fin: "Yumká",
    total: 7,
    municipios: ["Centro", "Macuspana"],
    descripcion: "Línea principal de autobuses de Villahermosa. Recorre desde la Terminal Primera Clase conectando el centro histórico con Parque Agua Blanca, zona comercial, mercados tradicionales y el Parque-Museo Yumká. Ofrece acceso a los principales sitios turísticos de la ciudad.",
    estaciones_turisticas: ["terminal-primera-clase", "centro-historico", "agua-blanca", "yumka"],
    estaciones: ["terminal-primera-clase", "centro-historico", "agua-blanca", "villahermosa-2000", "yumka", "puxcatan", "paseo-tabasco"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Villahermosa: Cultura y Naturaleza",
      paradas: [
        { estacion: "terminal-primera-clase", actividad: "Inicio en Terminal Primera Clase (8:00 AM) - Desayuno" },
        { estacion: "centro-historico", actividad: "Centro Histórico: Catedral y Museo de Antropología (9:30 AM)" },
        { estacion: "agua-blanca", actividad: "Parque Agua Blanca: lagunas y senderos (11:00 AM)" },
        { estacion: "villahermosa-2000", actividad: "Centro Comercial: compras y almuerzo (1:00 PM)" },
        { estacion: "puxcatan", actividad: "Puxcatán: mercado local y comida tabasqueña (3:00 PM)" },
        { estacion: "paseo-tabasco", actividad: "Paseo Tabasco: gastronomía y cena (6:00 PM)" },
        { estacion: "yumka", actividad: "Parque Yumká: fauna tabasqueña (opcional, segundo día)" }
      ]
    },
    seo_title: "Línea 1 Autobús Villahermosa — Centro Histórico a Yumká | MetroGuia",
    meta_description: "Línea 1 de Autobús Villahermosa. Recorre centro histórico, parques naturales y zonas comerciales de la capital tabasqueña.",
    h1: "Línea 1 — Autobús Villahermosa"
  },
  {
    id: "TM",
    color: "#06B6D4",
    colorNombre: "Cian",
    inicio: "Terminal Primera Clase",
    fin: "Riviera Maya",
    total: 3,
    municipios: ["Centro", "Palenque"],
    descripcion: "Conexión del Tren Maya desde Villahermosa. Esta línea intermodal conecta la Terminal Primera Clase con el Tren Maya directo a Palenque, y desde allí a toda la Riviera Maya: Cancún, Playa del Carmen y Tulum. Acceso directo a la zona arqueológica UNESCO de Palenque y playas del Caribe.",
    estaciones_turisticas: ["terminal-primera-clase", "museo-antropologia", "tren-maya-palenque"],
    estaciones: ["terminal-primera-clase", "museo-antropologia", "tren-maya-palenque", "tren-maya-conexion-cancun"],
    ruta_1_dia: {
      titulo: "Ruta Tren Maya: Villahermosa a Palenque y Riviera Maya",
      paradas: [
        { estacion: "terminal-primera-clase", actividad: "Inicio en Terminal Primera Clase (7:00 AM) - Conexión Tren Maya" },
        { estacion: "museo-antropologia", actividad: "Museo Regional: cultura maya tabasqueña (8:00 AM)" },
        { estacion: "tren-maya-palenque", actividad: "Palenque: zona arqueológica UNESCO (10:00 AM - 4:00 PM)" },
        { estacion: "tren-maya-conexion-cancun", actividad: "Conexión Tren Maya a Riviera: Cancún, Playa, Tulum (opcional)" }
      ]
    },
    seo_title: "Tren Maya Villahermosa — Palenque y Riviera Maya | MetroGuia",
    meta_description: "Tren Maya desde Villahermosa. Acceso directo a Palenque (UNESCO) y Riviera Maya: Cancún, Playa del Carmen, Tulum.",
    h1: "Tren Maya — Villahermosa"
  }
];
