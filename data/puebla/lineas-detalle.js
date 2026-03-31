export const lineasPuebla = [
  {
    id: "1",
    color: "#8B5CF6",
    colorNombre: "Violeta",
    inicio: "CAPU",
    fin: "Angelópolis",
    total: 20,
    municipios: ["Puebla", "San Andrés Cholula"],
    descripcion: "Corredor troncal norte-sur del RUTA. Conecta la Terminal CAPU con la zona comercial de Angelópolis atravesando el Centro Histórico UNESCO, el Barrio Artista, y culmina en Cholula con la Pirámide prehispánica.",
    estaciones_turisticas: ["capu", "zocalo-centro", "barrio-artista", "analco", "cholula", "mercado-artesanias"],
    estaciones: ["capu", "20-de-noviembre", "zocalo-centro", "barrio-artista", "analco", "cholula", "angelopolis", "mercado-artesanias"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por el Corredor 1: Centro Histórico y Cholula",
      paradas: [
        { estacion: "capu", actividad: "Inicio en CAPU (8:00 AM) - Desayuno en cafetería" },
        { estacion: "zocalo-centro", actividad: "Zócalo de Puebla y Catedral Metropolitana (9:30 AM)" },
        { estacion: "barrio-artista", actividad: "Barrio Artista Xanenetla: murales y galerías (11:00 AM)" },
        { estacion: "analco", actividad: "Iglesia de Santo Domingo y Capilla del Rosario (1:00 PM)" },
        { estacion: "cholula", actividad: "Pirámide de Cholula e Iglesia de los Remedios (3:00 PM)" },
        { estacion: "mercado-artesanias", actividad: "Mercado de Artesanías para souvenirs (5:00 PM)" }
      ]
    },
    seo_title: "Corredor 1 RUTA BRT Puebla — Centro Histórico a Angelópolis | MetroGuia",
    meta_description: "Corredor 1 del RUTA BRT de Puebla. De CAPU a Angelópolis pasando por Centro Histórico UNESCO, Barrio Artista y Cholula.",
    h1: "Corredor 1 — RUTA BRT Puebla"
  },
  {
    id: "2",
    color: "#A78BFA",
    colorNombre: "Púrpura claro",
    inicio: "UDLA",
    fin: "BUAP",
    total: 18,
    municipios: ["Puebla"],
    descripcion: "Corredor este-oeste que conecta dos de las principales universidades de Puebla. Pasa por zonas residenciales, hospitalarias y educativas del norte de la ciudad.",
    estaciones_turisticas: ["udla", "buap"],
    estaciones: ["udla", "hospital-general", "san-manuel", "la-paz", "buap"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Universidades y Vida Universitaria",
      paradas: [
        { estacion: "udla", actividad: "UDLA y campus (8:30 AM)" },
        { estacion: "hospital-general", actividad: "Servicios de salud (10:00 AM)" },
        { estacion: "san-manuel", actividad: "Zona residencial y tiendas locales (11:00 AM)" },
        { estacion: "la-paz", actividad: "Mercado local y comida típica (12:30 PM)" },
        { estacion: "buap", actividad: "BUAP y biblioteca universitaria (2:00 PM)" }
      ]
    },
    seo_title: "Corredor 2 RUTA BRT Puebla — Universidades y Educación | MetroGuia",
    meta_description: "Corredor 2 del RUTA BRT de Puebla. Conecta UDLA y BUAP, principales universidades de Puebla.",
    h1: "Corredor 2 — RUTA BRT Puebla"
  },
  {
    id: "3",
    color: "#7C3AED",
    colorNombre: "Violeta oscuro",
    inicio: "Valsequillo",
    fin: "Periférico Ecológico",
    total: 15,
    municipios: ["Puebla"],
    descripcion: "Corredor sur que conecta zonas residenciales del sur y suroeste de Puebla. Termina en el Periférico Ecológico, ideal para recreación y ejercicio en espacios verdes.",
    estaciones_turisticas: ["periferico-ecologico"],
    estaciones: ["valsequillo", "los-fuertes", "loreto", "periferico-ecologico"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Naturaleza y Recreación",
      paradas: [
        { estacion: "valsequillo", actividad: "Inicio en zona residencial (9:00 AM)" },
        { estacion: "los-fuertes", actividad: "Centro comercial local y almuerzo (11:00 AM)" },
        { estacion: "loreto", actividad: "Zona tradicional y iglesia local (12:30 PM)" },
        { estacion: "periferico-ecologico", actividad: "Periférico Ecológico, ciclopista y naturaleza (2:00 PM)" }
      ]
    },
    seo_title: "Corredor 3 RUTA BRT Puebla — Naturaleza y Periférico Ecológico | MetroGuia",
    meta_description: "Corredor 3 del RUTA BRT de Puebla. Conecta zonas residenciales con el Periférico Ecológico.",
    h1: "Corredor 3 — RUTA BRT Puebla"
  },
  {
    id: "4",
    color: "#7C3AED",
    colorNombre: "Violeta oscuro",
    inicio: "FINSA",
    fin: "Valsequillo",
    total: 16,
    municipios: ["Puebla"],
    descripcion: "Corredor oriente que conecta el sector comercial e industrial de FINSA con la zona residencial de Valsequillo. Recorre el Periférico norte atravesando áreas de desarrollo empresarial y zonas residenciales en expansión.",
    estaciones_turisticas: ["finsa-puebla", "plaza-crystal", "atlixcayotl"],
    estaciones: ["finsa-puebla", "periferico-norte-pue", "san-jose-xilotzingo", "bosques-puebla", "plaza-crystal", "periferico-ecologico-line4", "lomas-angelopolis", "atlixcayotl", "via-atlixcayotl", "valsequillo-pue"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Desarrollo Empresarial y Zonas Modernas",
      paradas: [
        { estacion: "finsa-puebla", actividad: "FINSA y zona comercial (8:00 AM)" },
        { estacion: "periferico-norte-pue", actividad: "Periférico norte y servicios (9:30 AM)" },
        { estacion: "san-jose-xilotzingo", actividad: "San José Xilotzingo, área residencial (10:30 AM)" },
        { estacion: "bosques-puebla", actividad: "Bosques de Puebla, zonas verdes (11:30 AM)" },
        { estacion: "plaza-crystal", actividad: "Plaza Crystal, comercios y compras (1:00 PM)" },
        { estacion: "atlixcayotl", actividad: "Atlixcayotl, centro de negocios (2:30 PM)" },
        { estacion: "valsequillo-pue", actividad: "Valsequillo, fin de línea (4:00 PM)" }
      ]
    },
    seo_title: "Corredor 4 RUTA BRT Puebla — FINSA a Valsequillo | MetroGuia",
    meta_description: "Corredor 4 del RUTA BRT de Puebla. Conecta FINSA con Valsequillo via Periférico norte, pasando por zonas comerciales y residenciales modernas.",
    h1: "Corredor 4 — RUTA BRT Puebla"
  }
];
