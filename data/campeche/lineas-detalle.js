export const lineasCampeche = [
  {
    id: "1",
    color: "#059669",
    colorNombre: "Verde",
    inicio: "Estación Central",
    fin: "Lerma",
    total: 8,
    municipios: ["Campeche"],
    descripcion: "Línea local del Tren Ligero de Campeche. Recorre el corazón de la ciudad desde la Estación Central, pasando por el centro histórico UNESCO, el barrio antiguo colonial, y extendiéndose hacia el suroeste hasta Lerma. Conecta sitios culturales, arqueológicos y residenciales del municipio.",
    estaciones_turisticas: ["estacion-central", "fuerte-san-miguel", "centro-historico", "puerta-de-tierra", "barrio-antiguo"],
    estaciones: ["estacion-central", "fuerte-san-miguel", "centro-historico", "puerta-de-tierra", "barrio-antiguo", "barrio-san-francisco", "playita-bonita", "lerma"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea 1: Centro Histórico y Patrimonio Colonial",
      paradas: [
        { estacion: "estacion-central", actividad: "Inicio en Estación Central (8:00 AM) - Desayuno regional" },
        { estacion: "fuerte-san-miguel", actividad: "Fuerte de San Miguel y Museo de la Cultura Maya (9:30 AM)" },
        { estacion: "centro-historico", actividad: "Centro Histórico UNESCO: iglesias y plazas coloniales (11:00 AM)" },
        { estacion: "puerta-de-tierra", actividad: "Puerta de Tierra y murallas prehispánicas (1:00 PM)" },
        { estacion: "barrio-antiguo", actividad: "Barrio Antiguo: casas coloniales y galerías (2:30 PM)" },
        { estacion: "playita-bonita", actividad: "Playita Bonita: playas locales y comida de mar (4:00 PM)" },
        { estacion: "lerma", actividad: "Lerma: zona residencial y mercado local (5:30 PM)" }
      ]
    },
    seo_title: "Línea 1 Tren Ligero Campeche — Centro Histórico UNESCO | MetroGuia",
    meta_description: "Línea 1 del Tren Ligero de Campeche. Recorre el centro histórico colonial, museos y patrimonio UNESCO desde la Estación Central hasta Lerma.",
    h1: "Línea 1 — Tren Ligero Campeche"
  },
  {
    id: "TM",
    color: "#0EA5E9",
    colorNombre: "Azul",
    inicio: "Estación Central",
    fin: "Becán",
    total: 6,
    municipios: ["Campeche", "Calakmul"],
    descripcion: "Conexión del Tren Maya con Campeche. Esta línea intermodal conecta la Estación Central de Campeche con la red del Tren Maya, permitiendo acceso directo a los principales sitios arqueológicos mayas de la región: Edzná, Xpujil, Calakmul, Chicannà y Becán. Ideal para turistas que buscan explorar la Riviera Maya desde Campeche.",
    estaciones_turisticas: ["estacion-central", "tren-maya-xpujil", "calakmul", "chicanna", "becan"],
    estaciones: ["estacion-central", "tren-maya-xpujil", "calakmul", "chicanna", "becan"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Arqueología Maya desde Campeche a Becán",
      paradas: [
        { estacion: "estacion-central", actividad: "Inicio en Estación Central Campeche (7:00 AM) - Conexión Tren Maya" },
        { estacion: "tren-maya-xpujil", actividad: "Xpujil: sitio arqueológico y zona de transbordo (9:00 AM)" },
        { estacion: "calakmul", actividad: "Calakmul: pirámides mayas en la selva (11:00 AM)" },
        { estacion: "chicanna", actividad: "Chicannà: templos y estructuras ceremoniales (1:30 PM)" },
        { estacion: "becan", actividad: "Becán: sitio arqueológico y foso defensivo prehispánico (3:00 PM)" }
      ]
    },
    seo_title: "Línea Tren Maya Campeche — Arqueología Maya Riviera Maya | MetroGuia",
    meta_description: "Línea Tren Maya de Campeche. Conecta Estación Central con sitios arqueológicos mayas: Xpujil, Calakmul, Chicannà y Becán.",
    h1: "Línea Tren Maya — Campeche"
  }
];
