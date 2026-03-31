export const lineasMerida = [
  {
    id: "D1",
    color: "#F59E0B",
    colorNombre: "Ámbar Dorado",
    inicio: "Terminal CAME",
    fin: "UADY",
    total: 7,
    municipios: ["Mérida"],
    descripcion: "Corredor troncal norte-sur del SIT Mérida. Conecta la terminal de autobuses con el Centro Histórico de Mérida, pasando por el Gran Museo del Mundo Maya, Paseo de Montejo y la Universidad Autónoma de Yucatán.",
    estaciones_turisticas: ["gran-museo-mundo-maya", "paseo-montejo", "centro-historico", "mercado-lucas-galez"],
    estaciones: ["terminal-came", "la-plancha", "gran-museo-mundo-maya", "paseo-montejo", "centro-historico", "mercado-lucas-galez", "uady"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Corredor Dorado: Historia y Cultura Maya",
      paradas: [
        { estacion: "terminal-came", actividad: "Inicio en Terminal CAME (8:00 AM) - Desayuno regional" },
        { estacion: "la-plancha", actividad: "Parque Lineal La Plancha: paseo y ciclopista (9:00 AM)" },
        { estacion: "gran-museo-mundo-maya", actividad: "Gran Museo del Mundo Maya: colección única de arte maya (10:00 AM - 1:00 PM)" },
        { estacion: "paseo-montejo", actividad: "Paseo de Montejo: mansiones porfirianas y museos (2:00 PM)" },
        { estacion: "centro-historico", actividad: "Centro Histórico y Catedral de San Ildefonso (3:30 PM)" },
        { estacion: "mercado-lucas-galez", actividad: "Mercado Lucas de Gálvez: cochinita pibil y comida yucateca (5:00 PM)" }
      ]
    },
    seo_title: "Corredor Dorado (D1) SIT Mérida — Centro Histórico y Museo Maya | MetroGuia",
    meta_description: "Corredor Dorado (D1) del SIT Mérida. De Terminal CAME a UADY pasando por el Gran Museo del Mundo Maya, Paseo de Montejo y Centro Histórico.",
    h1: "Corredor Dorado (D1) — SIT Mérida"
  },
  {
    id: "R2",
    color: "#DC2626",
    colorNombre: "Rojo Este-Oeste",
    inicio: "Terminal Noreste",
    fin: "Parque Centenario",
    total: 6,
    municipios: ["Mérida"],
    descripcion: "Corredor este-oeste que conecta la terminal del noreste con el parque del centenario. Pasa por zonas residenciales, comerciales y de servicios médicos. Acceso a Plaza Las Américas y el Hospital General.",
    estaciones_turisticas: ["plaza-las-americas", "parque-centenario"],
    estaciones: ["terminal-noreste", "plaza-las-americas", "altabrisa", "hospital-general", "itzimna", "parque-centenario"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Zona Residencial y Entretenimiento",
      paradas: [
        { estacion: "terminal-noreste", actividad: "Inicio Terminal Noreste (10:00 AM)" },
        { estacion: "plaza-las-americas", actividad: "Plaza Las Américas: compras y cines (11:00 AM)" },
        { estacion: "altabrisa", actividad: "Zona Altabrisa: gastronomía local (1:00 PM)" },
        { estacion: "itzimna", actividad: "Itzimná: atmósfera tradicional (2:30 PM)" },
        { estacion: "parque-centenario", actividad: "Parque del Centenario: zoológico y monumentos (4:00 PM)" }
      ]
    },
    seo_title: "Corredor Rojo (R2) SIT Mérida — Zona Este-Oeste | MetroGuia",
    meta_description: "Corredor Rojo (R2) del SIT Mérida. De Terminal Noreste a Parque Centenario pasando por Plaza Las Américas e Itzimná.",
    h1: "Corredor Rojo (R2) — SIT Mérida"
  },
  {
    id: "V3",
    color: "#10B981",
    colorNombre: "Verde Sur",
    inicio: "Caucel",
    fin: "Universidad Tecnológica",
    total: 4,
    municipios: ["Mérida"],
    descripcion: "Corredor sur del SIT Mérida que conecta zonas residenciales del sur con la Universidad Tecnológica. Importante para acceso a zonas de desarrollo de la ciudad.",
    estaciones_turisticas: [],
    estaciones: ["caucel", "cholul", "valle-verde", "universidad-tecnologica"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Zona Sur y Educación",
      paradas: [
        { estacion: "caucel", actividad: "Inicio Caucel (9:00 AM)" },
        { estacion: "cholul", actividad: "Cholul: vida cotidiana local (10:30 AM)" },
        { estacion: "valle-verde", actividad: "Valle Verde: zona residencial (11:30 AM)" },
        { estacion: "universidad-tecnologica", actividad: "Universidad Tecnológica (1:00 PM)" }
      ]
    },
    seo_title: "Corredor Verde (V3) SIT Mérida — Zona Sur | MetroGuia",
    meta_description: "Corredor Verde (V3) del SIT Mérida. Conecta zona sur hacia Universidad Tecnológica.",
    h1: "Corredor Verde (V3) — SIT Mérida"
  },
  {
    id: "A4",
    color: "#0EA5E9",
    colorNombre: "Azul Aeropuerto",
    inicio: "Aeropuerto Manuel Crescencio Rejón",
    fin: "Centro Histórico",
    total: 3,
    municipios: ["Mérida"],
    descripcion: "Corredor norte-sur que conecta el Aeropuerto Internacional Manuel Crescencio Rejón con el Centro Histórico de Mérida. Línea turística prioritaria para viajeros que llegan en avión desde EU, Canadá y el Caribe.",
    estaciones_turisticas: ["aeropuerto-manuel-crescencio-rejon", "centro-historico"],
    estaciones: ["aeropuerto-manuel-crescencio-rejon", "ciudad-caucel", "centro-historico"],
    ruta_1_dia: {
      titulo: "Ruta Express: Aeropuerto a Centro Histórico",
      paradas: [
        { estacion: "aeropuerto-manuel-crescencio-rejon", actividad: "Llegada al Aeropuerto (varía según vuelo)" },
        { estacion: "ciudad-caucel", actividad: "Parada residencial (si es necesario)" },
        { estacion: "centro-historico", actividad: "Centro Histórico: Catedral y Plaza Grande (según hora)" }
      ]
    },
    seo_title: "Corredor Azul (A4) SIT Mérida — Aeropuerto a Centro | MetroGuia",
    meta_description: "Corredor Azul (A4) del SIT Mérida. Conexión rápida desde Aeropuerto Internacional al Centro Histórico.",
    h1: "Corredor Azul (A4) — SIT Mérida"
  },
  {
    id: "Ie-Tram",
    color: "#22C55E",
    colorNombre: "Verde Ecológico",
    inicio: "Plaza Grande (Centro Histórico)",
    fin: "Teya - Estación Tren Maya",
    total: 6,
    municipios: ["Mérida"],
    descripcion: "Línea de tranvía eléctrico (Ie-Tram) que conecta el Centro Histórico de Mérida con la estación de Tren Maya en Teya. Sistema ecológico de transporte que integra la ciudad con la red regional de Tren Maya, permitiendo acceso directo a destinos del Caribe mexicano.",
    estaciones_turisticas: ["plaza-grande-ie-tram", "paseo-montejo-ie-tram", "gran-museo-mundo-maya-ie-tram", "teya-tren-maya"],
    estaciones: ["plaza-grande-ie-tram", "paseo-montejo-ie-tram", "gran-museo-mundo-maya-ie-tram", "xcanatun", "teya-tren-maya"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Centro Histórico a Tren Maya",
      paradas: [
        { estacion: "plaza-grande-ie-tram", actividad: "Salida desde Plaza Grande (8:00 AM) - Desayuno en Zócalo" },
        { estacion: "paseo-montejo-ie-tram", actividad: "Paseo de Montejo: mansiones porfirianas (9:30 AM)" },
        { estacion: "gran-museo-mundo-maya-ie-tram", actividad: "Gran Museo del Mundo Maya (10:30 AM - 1:00 PM)" },
        { estacion: "xcanatun", actividad: "Parada residencial y descanso (1:30 PM)" },
        { estacion: "teya-tren-maya", actividad: "Llegada a Tren Maya en Teya (2:30 PM) - Salida hacia Cancún/Playa del Carmen" }
      ]
    },
    seo_title: "Ie-Tram Mérida — Tranvía Eléctrico a Tren Maya | MetroGuia",
    meta_description: "Ie-Tram Mérida. Línea de tranvía eléctrico conectando Centro Histórico con estación Tren Maya en Teya. Transporte ecológico y turístico.",
    h1: "Ie-Tram — Tranvía Eléctrico Mérida a Tren Maya"
  }
];
