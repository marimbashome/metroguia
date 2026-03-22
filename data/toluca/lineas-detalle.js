export const lineasToluca = [
  {
    id: "TI",
    color: "#7C3AED",
    colorNombre: "Morado",
    inicio: "Observatorio CDMX",
    fin: "Zinacantepec Terminal",
    total: 5,
    municipios: ["CDMX", "Lerma", "San Mateo Atenco", "Metepec", "Zinacantepec"],
    descripcion: "Tren Interurbano México-Toluca. Inaugurado en diciembre 2023, es el tren más nuevo de México. Recorre 57.7 km en ~65 minutos. Conecta el Metro CDMX Línea 1 en Observatorio con la Terminal de Toluca en Zinacantepec. Ideal para hospedarse en Toluca (más económico) y viajar a CDMX para el FIFA 2026.",
    estaciones_turisticas: ["observatorio-cdmx", "metepec", "zinacantepec-terminal"],
    estaciones: ["observatorio-cdmx", "lerma", "san-mateo-atenco", "metepec", "zinacantepec-terminal"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: CDMX a Toluca por el Tren Interurbano",
      paradas: [
        { estacion: "observatorio-cdmx", actividad: "Inicio en Observatorio (8:00 AM) - Taquillas y acceso Metro" },
        { estacion: "lerma", actividad: "Parada Lerma (8:15 AM)" },
        { estacion: "san-mateo-atenco", actividad: "Parada San Mateo (8:30 AM)" },
        { estacion: "metepec", actividad: "Metepec - Artesanías (8:45 AM)" },
        { estacion: "zinacantepec-terminal", actividad: "Terminal Zinacantepec (9:05 AM) - Conexión a Mexibús" }
      ]
    },
    seo_title: "Tren Interurbano México-Toluca — TI | MetroGuia",
    meta_description: "Tren Interurbano México-Toluca. 57.7 km en 65 minutos. Observatorio CDMX a Zinacantepec. Ideal para FIFA 2026.",
    h1: "Tren Interurbano México-Toluca"
  },
  {
    id: "M1",
    color: "#06B6D4",
    colorNombre: "Cian",
    inicio: "Zinacantepec",
    fin: "San Salvador Metepec",
    total: 5,
    municipios: ["Toluca", "Metepec", "Zinacantepec"],
    descripcion: "Línea 1 de Mexibús (BRT del Estado de México). Conecta Zinacantepec con Toluca Centro y Metepec. Acceso al Cosmovitral, Portales de Toluca, Centro Histórico y artesanías de Metepec.",
    estaciones_turisticas: ["toluca-centro-bus", "cosmovitral", "metepec-artesanal"],
    estaciones: ["zinacantepec-terminal", "toluca-centro-bus", "portales-toluca", "cosmovitral", "metepec-artesanal", "san-salvador-metepec"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Toluca Centro y Metepec Artesanal",
      paradas: [
        { estacion: "zinacantepec-terminal", actividad: "Inicio en Terminal (9:00 AM)" },
        { estacion: "toluca-centro-bus", actividad: "Toluca Centro - Portales y gastronomía (9:15 AM)" },
        { estacion: "portales-toluca", actividad: "Portales - Arquitectura única (10:00 AM)" },
        { estacion: "cosmovitral", actividad: "Cosmovitral - Vitral mundial (11:30 AM)" },
        { estacion: "metepec-artesanal", actividad: "Metepec - Barro negro artesanal (1:00 PM)" }
      ]
    },
    seo_title: "Mexibús Línea 1 Toluca — Línea Cian | MetroGuia",
    meta_description: "Mexibús Línea 1. Zinacantepec a San Salvador Metepec. Toluca Centro, Cosmovitral y artesanías.",
    h1: "Mexibús Línea 1 — Cosmovitral y Centro Histórico"
  },
  {
    id: "M2",
    color: "#8B5CF6",
    colorNombre: "Violeta",
    inicio: "Lerma Centro",
    fin: "Aeropuerto Toluca",
    total: 4,
    municipios: ["Lerma", "Toluca"],
    descripcion: "Línea 2 de Mexibús. Conecta Lerma Centro con Parque Lerma, Universidad Toluca y Aeropuerto Toluca. Acceso a educación, naturaleza y transportación aérea.",
    estaciones_turisticas: ["parque-lerma", "universidad-toluca", "aeropuerto-toluca"],
    estaciones: ["lerma-centro", "parque-lerma", "universidad-toluca", "aeropuerto-toluca"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Naturaleza, Educación y Conectividad Aérea",
      paradas: [
        { estacion: "lerma-centro", actividad: "Inicio Lerma Centro (9:00 AM)" },
        { estacion: "parque-lerma", actividad: "Parque Lerma - Naturaleza (10:00 AM)" },
        { estacion: "universidad-toluca", actividad: "Campus Universitario (11:30 AM)" },
        { estacion: "aeropuerto-toluca", actividad: "Aeropuerto Toluca - Vuelos (1:00 PM)" }
      ]
    },
    seo_title: "Mexibús Línea 2 Toluca — Línea Violeta | MetroGuia",
    meta_description: "Mexibús Línea 2. Lerma Centro a Aeropuerto Toluca. Parques y educación.",
    h1: "Mexibús Línea 2 — Naturaleza y Aeropuerto"
  }
];
