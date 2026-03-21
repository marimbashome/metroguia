export const lineasDetalle = {
  "1": {
    id: "1",
    color: "#E91E8C",
    colorNombre: "Rosa",
    inicio: "Observatorio",
    fin: "Pantitlán",
    total: 20,
    zonas: ["Álvaro Obregón", "Miguel Hidalgo", "Cuauhtémoc", "Iztacalco"],
    descripcion: "La Línea 1 es la más antigua del metro CDMX (1969) y conecta el poniente con el oriente de la ciudad. Pasa por zonas turísticas como Chapultepec, la Zona Rosa e Insurgentes.",
    estaciones_turisticas: ["chapultepec", "sevilla", "insurgentes"],
    estaciones: [
      { slug: "observatorio", nombre: "Observatorio" },
      { slug: "tacubaya", nombre: "Tacubaya" },
      { slug: "juanacatlan", nombre: "Juanacatlán" },
      { slug: "chapultepec", nombre: "Chapultepec" },
      { slug: "sevilla", nombre: "Sevilla" },
      { slug: "insurgentes", nombre: "Insurgentes" },
      { slug: "cuauhtemoc", nombre: "Cuauhtémoc" },
      { slug: "balderas", nombre: "Balderas" },
      { slug: "salto-del-agua", nombre: "Salto del Agua" },
      { slug: "pino-suarez", nombre: "Pino Suárez" },
      { slug: "merced", nombre: "Merced" },
      { slug: "candelaria", nombre: "Candelaria" },
      { slug: "san-lazaro", nombre: "San Lázaro" },
      { slug: "morelos", nombre: "Morelos" },
      { slug: "santa-anita", nombre: "Santa Anita" },
      { slug: "peñon-viejo", nombre: "Peñón Viejo" },
      { slug: "zaragoza", nombre: "Zaragoza" },
      { slug: "pantitlan", nombre: "Pantitlán" }
    ],
    ruta_1_dia: {
      titulo: "Un día en la Línea 1: del Bosque al Centro",
      paradas: [
        { estacion: "Chapultepec", actividad: "Visitar el Bosque y el Castillo de Chapultepec", duracion: "3 horas" },
        { estacion: "Insurgentes", actividad: "Zona Rosa y Mercado Insurgentes", duracion: "2 horas" },
        { estacion: "Balderas", actividad: "Mercado Artesanal y Alameda", duracion: "1 hora" }
      ]
    },
    seo_title: "Línea 1 Metro CDMX — Ruta Rosa, Estaciones y Guía | MetroGuia",
    meta_description: "Guía completa de la Línea 1 (Rosa) del Metro CDMX: 20 estaciones desde Observatorio hasta Pantitlán. Lugares turísticos, tips y rutas.",
    h1: "Línea 1 Metro CDMX — Guía completa"
  },
  "2": {
    id: "2", color: "#0057A8", colorNombre: "Azul",
    inicio: "Cuatro Caminos", fin: "Tasqueña", total: 24,
    zonas: ["Gustavo A. Madero", "Cuauhtémoc", "Iztacalco"],
    descripcion: "La Línea 2 conecta el norte con el sur. Pasa por el Centro Histórico, Coyoacán y la UNAM. Ruta principal para llegar al Estadio Azteca (transferencia en Tasqueña al Tren Ligero).",
    estaciones_turisticas: ["zocalo", "coyoacan", "unam"],
    estaciones: [
      { slug: "cuatro-caminos", nombre: "Cuatro Caminos" },
      { slug: "tezozomoc", nombre: "Tezozomoc" },
      { slug: "el-rosario", nombre: "El Rosario" },
      { slug: "azcapotzalco", nombre: "Azcapotzalco" },
      { slug: "ferreria-arena-ciudad-de-mexico", nombre: "Ferrería/Arena Cd. de México" },
      { slug: "norte-45", nombre: "Norte 45" },
      { slug: "vallejo", nombre: "Vallejo" },
      { slug: "instituto-del-petroleo", nombre: "Instituto del Petróleo" },
      { slug: "autobuses-del-norte", nombre: "Autobuses del Norte" },
      { slug: "la-raza", nombre: "La Raza" },
      { slug: "revolucion", nombre: "Revolución" },
      { slug: "hidalgo", nombre: "Hidalgo" },
      { slug: "bellas-artes", nombre: "Bellas Artes" },
      { slug: "allende", nombre: "Allende" },
      { slug: "zocalo", nombre: "Zócalo" },
      { slug: "pino-suarez", nombre: "Pino Suárez" },
      { slug: "san-antonio-abad", nombre: "San Antonio Abad" },
      { slug: "chabacano", nombre: "Chabacano" },
      { slug: "viga", nombre: "Viga" },
      { slug: "xola", nombre: "Xola" },
      { slug: "villa-de-cortes", nombre: "Villa de Cortés" },
      { slug: "nativitas", nombre: "Nativitas" },
      { slug: "portales", nombre: "Portales" },
      { slug: "taxquena", nombre: "Tasqueña" }
    ],
    ruta_1_dia: {
      titulo: "Centro Histórico y sur en un día",
      paradas: [
        { estacion: "Zócalo", actividad: "Centro Histórico, Catedral y Palacio Nacional", duracion: "2 horas" },
        { estacion: "Coyoacán", actividad: "Casa de Frida Kahlo y Jardín Centenario", duracion: "2.5 horas" },
        { estacion: "UNAM", actividad: "Campus UNAM y Biblioteca Central", duracion: "1 hora" }
      ]
    },
    seo_title: "Línea 2 Metro CDMX — Azul, 24 Estaciones | MetroGuia",
    meta_description: "Línea 2 Azul del Metro CDMX: 24 estaciones de Cuatro Caminos a Tasqueña. Centro Histórico, Coyoacán y acceso al Estadio Azteca.",
    h1: "Línea 2 Metro CDMX — Guía completa"
  },
  "3": {
    id: "3", color: "#6B7A2A", colorNombre: "Verde",
    inicio: "Indios Verdes", fin: "Universidad", total: 27,
    zonas: ["Gustavo A. Madero", "Cuauhtémoc", "Benito Juárez", "Coyoacán"],
    descripcion: "La Línea 3 es la segunda más larga. Une el norte con el sur pasando por Garibaldi, el Centro Histórico y el sur universitario.",
    estaciones_turisticas: ["indios-verdes", "garibaldi", "bellas-artes"],
    estaciones: [
      { slug: "indios-verdes", nombre: "Indios Verdes" },
      { slug: "deportivo-18-de-marzo", nombre: "Deportivo 18 de Marzo" },
      { slug: "potrero", nombre: "Potrero" },
      { slug: "la-raza", nombre: "La Raza" },
      { slug: "tlatelolco", nombre: "Tlatelolco" },
      { slug: "guerrero", nombre: "Guerrero" },
      { slug: "hidalgo", nombre: "Hidalgo" },
      { slug: "juarez", nombre: "Juárez" },
      { slug: "balderas", nombre: "Balderas" },
      { slug: "niños-heroes", nombre: "Niños Héroes" },
      { slug: "hospital-general", nombre: "Hospital General" },
      { slug: "centro-medico", nombre: "Centro Médico" },
      { slug: "etiopia-plaza-de-la-transparencia", nombre: "Etiopía/Plaza de la Transparencia" },
      { slug: "eugenia", nombre: "Eugenia" },
      { slug: "division-del-norte", nombre: "División del Norte" },
      { slug: "zapata", nombre: "Zapata" },
      { slug: "coyoacan", nombre: "Coyoacán" },
      { slug: "viveros-derechos-humanos", nombre: "Viveros/Derechos Humanos" },
      { slug: "miguel-angel-de-quevedo", nombre: "Miguel Ángel de Quevedo" },
      { slug: "copilco", nombre: "Copilco" },
      { slug: "universidad", nombre: "Universidad" }
    ],
    ruta_1_dia: {
      titulo: "Cultura y tradición en la Línea 3",
      paradas: [
        { estacion: "Garibaldi", actividad: "Plaza Garibaldi y música de mariachi", duracion: "1.5 horas" },
        { estacion: "Balderas", actividad: "Centro y Mercado Artesanal", duracion: "2 horas" },
        { estacion: "Coyoacán", actividad: "Casa Frida Kahlo y plazas", duracion: "2 horas" }
      ]
    },
    seo_title: "Línea 3 Metro CDMX — Verde, 21 Estaciones | MetroGuia",
    meta_description: "Línea 3 Verde del Metro CDMX: 21 estaciones desde Indios Verdes hasta Universidad.",
    h1: "Línea 3 Metro CDMX — Guía completa"
  },
  "4": { id: "4", color: "#00B5C8", colorNombre: "Celeste", inicio: "Martín Carrera", fin: "Santa Anita", total: 12, zonas: ["Gustavo A. Madero", "Iztacalco"], descripcion: "Línea corta de conexión norte-este.", estaciones_turisticas: [], estaciones: [{ slug: "martin-carrera", nombre: "Martín Carrera" }, { slug: "talismán", nombre: "Talismán" }, { slug: "bondojito", nombre: "Bondojito" }, { slug: "consulado", nombre: "Consulado" }, { slug: "canal-del-norte", nombre: "Canal del Norte" }, { slug: "candelaria", nombre: "Candelaria" }, { slug: "fray-servando", nombre: "Fray Servando" }, { slug: "jamaica", nombre: "Jamaica" }, { slug: "santa-anita", nombre: "Santa Anita" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 4 Metro CDMX — Celeste | MetroGuia", meta_description: "Línea 4 Celeste del Metro CDMX.", h1: "Línea 4 Metro CDMX" },
  "5": { id: "5", color: "#FFCD00", colorNombre: "Amarillo", inicio: "Pantitlán", fin: "La Raza", total: 12, zonas: ["Iztacalco", "Cuauhtémoc"], descripcion: "Línea oriente-norte.", estaciones_turisticas: [], estaciones: [{ slug: "pantitlan", nombre: "Pantitlán" }, { slug: "hangares", nombre: "Hangares" }, { slug: "terminal-aerea", nombre: "Terminal Aérea" }, { slug: "oceania", nombre: "Oceanía" }, { slug: "aragón", nombre: "Aragón" }, { slug: "eduardo-molina", nombre: "Eduardo Molina" }, { slug: "consulado", nombre: "Consulado" }, { slug: "canal-del-norte", nombre: "Canal del Norte" }, { slug: "misterios", nombre: "Misterios" }, { slug: "valle-gómez", nombre: "Valle Gómez" }, { slug: "martin-carrera", nombre: "Martín Carrera" }, { slug: "la-raza", nombre: "La Raza" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 5 Metro CDMX — Amarillo | MetroGuia", meta_description: "Línea 5 Amarillo del Metro CDMX.", h1: "Línea 5 Metro CDMX" },
  "6": { id: "6", color: "#DA291C", colorNombre: "Rojo", inicio: "El Rosario", fin: "Martín Carrera", total: 13, zonas: ["Azcapotzalco", "Gustavo A. Madero"], descripcion: "Línea norte transversal.", estaciones_turisticas: [], estaciones: [{ slug: "el-rosario", nombre: "El Rosario" }, { slug: "tezozomoc", nombre: "Tezozomoc" }, { slug: "azcapotzalco", nombre: "Azcapotzalco" }, { slug: "ferreria", nombre: "Ferrería" }, { slug: "norte-45", nombre: "Norte 45" }, { slug: "vallejo", nombre: "Vallejo" }, { slug: "instituto-del-petroleo", nombre: "Instituto del Petróleo" }, { slug: "lindavista", nombre: "Lindavista" }, { slug: "deportivo-18-de-marzo", nombre: "Deportivo 18 de Marzo" }, { slug: "potrero", nombre: "Potrero" }, { slug: "la-villa-basilica", nombre: "La Villa-Basílica" }, { slug: "martin-carrera", nombre: "Martín Carrera" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 6 Metro CDMX — Rojo | MetroGuia", meta_description: "Línea 6 Rojo del Metro CDMX.", h1: "Línea 6 Metro CDMX" },
  "7": { id: "7", color: "#F97316", colorNombre: "Naranja", inicio: "El Rosario", fin: "Barranca del Muerto", total: 15, zonas: ["Azcapotzalco", "Miguel Hidalgo", "Benito Juárez"], descripcion: "Línea norte-sur poniente.", estaciones_turisticas: [], estaciones: [{ slug: "el-rosario", nombre: "El Rosario" }, { slug: "aquiles-serdan", nombre: "Aquiles Serdán" }, { slug: "camarones", nombre: "Camarones" }, { slug: "refineria", nombre: "Refinería" }, { slug: "tacuba", nombre: "Tacuba" }, { slug: "san-joaquin", nombre: "San Joaquín" }, { slug: "polanco", nombre: "Polanco" }, { slug: "auditorio", nombre: "Auditorio" }, { slug: "constituyentes", nombre: "Constituyentes" }, { slug: "tacubaya", nombre: "Tacubaya" }, { slug: "san-pedro-de-los-pinos", nombre: "San Pedro de los Pinos" }, { slug: "san-antonio", nombre: "San Antonio" }, { slug: "mixcoac", nombre: "Mixcoac" }, { slug: "barranca-del-muerto", nombre: "Barranca del Muerto" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 7 Metro CDMX — Naranja | MetroGuia", meta_description: "Línea 7 Naranja del Metro CDMX.", h1: "Línea 7 Metro CDMX" },
  "8": { id: "8", color: "#00A650", colorNombre: "Verde oscuro", inicio: "Garibaldi", fin: "Constitución de 1917", total: 19, zonas: ["Cuauhtémoc", "Iztacalco", "Iztapalapa"], descripcion: "Línea centro-oriente.", estaciones_turisticas: [], estaciones: [{ slug: "garibaldi", nombre: "Garibaldi" }, { slug: "bellas-artes", nombre: "Bellas Artes" }, { slug: "san-juan-de-letran", nombre: "San Juan de Letrán" }, { slug: "salto-del-agua", nombre: "Salto del Agua" }, { slug: "doctores", nombre: "Doctores" }, { slug: "obrera", nombre: "Obrera" }, { slug: "chabacano", nombre: "Chabacano" }, { slug: "la-viga", nombre: "La Viga" }, { slug: "santa-anita", nombre: "Santa Anita" }, { slug: "coyuya", nombre: "Coyuya" }, { slug: "iztacalco", nombre: "Iztacalco" }, { slug: "apatlaco", nombre: "Apatlaco" }, { slug: "aculco", nombre: "Aculco" }, { slug: "escuadron-201", nombre: "Escuadrón 201" }, { slug: "atlalilco", nombre: "Atlalilco" }, { slug: "iztapalapa", nombre: "Iztapalapa" }, { slug: "cerro-de-la-estrella", nombre: "Cerro de la Estrella" }, { slug: "u-a-m-i", nombre: "U.A.M.-I" }, { slug: "constitucion-de-1917", nombre: "Constitución de 1917" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 8 Metro CDMX — Verde | MetroGuia", meta_description: "Línea 8 Verde del Metro CDMX.", h1: "Línea 8 Metro CDMX" },
  "9": { id: "9", color: "#6B3A2A", colorNombre: "Café", inicio: "Pantitlán", fin: "Tacubaya", total: 12, zonas: ["Iztacalco", "Benito Juárez", "Miguel Hidalgo"], descripcion: "Línea transversal oriente-poniente.", estaciones_turisticas: [], estaciones: [{ slug: "pantitlan", nombre: "Pantitlán" }, { slug: "puebla", nombre: "Puebla" }, { slug: "ciudad-deportiva", nombre: "Ciudad Deportiva" }, { slug: "velodromo", nombre: "Velódromo" }, { slug: "cd-deportiva", nombre: "Cd. Deportiva" }, { slug: "Jamaica", nombre: "Jamaica" }, { slug: "mixiuhca", nombre: "Mixiuhca" }, { slug: "jamaica-2", nombre: "Jamaica" }, { slug: "lazaro-cardenas", nombre: "Lázaro Cárdenas" }, { slug: "centro-medico", nombre: "Centro Médico" }, { slug: "patriotismo", nombre: "Patriotismo" }, { slug: "chilpancingo", nombre: "Chilpancingo" }, { slug: "tacubaya", nombre: "Tacubaya" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 9 Metro CDMX — Café | MetroGuia", meta_description: "Línea 9 Café del Metro CDMX.", h1: "Línea 9 Metro CDMX" },
  "A": { id: "A", color: "#7C3AED", colorNombre: "Morado", inicio: "Pantitlán", fin: "La Paz", total: 10, zonas: ["Iztacalco", "Iztapalapa"], descripcion: "Tren eléctrico que une Pantitlán con La Paz.", estaciones_turisticas: [], estaciones: [{ slug: "pantitlan", nombre: "Pantitlán" }, { slug: "agricola-oriental", nombre: "Agrícola Oriental" }, { slug: "canal-de-san-juan", nombre: "Canal de San Juan" }, { slug: "tepalcates", nombre: "Tepalcates" }, { slug: "guelatao", nombre: "Guelatao" }, { slug: "peñon-viejo", nombre: "Peñón Viejo" }, { slug: "acatitla", nombre: "Acatitla" }, { slug: "santa-marta", nombre: "Santa Marta" }, { slug: "los-reyes", nombre: "Los Reyes" }, { slug: "la-paz", nombre: "La Paz" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea A Metro CDMX — Morado | MetroGuia", meta_description: "Línea A Morado del Metro CDMX.", h1: "Línea A Metro CDMX" },
  "B": { id: "B", color: "#9E9E9E", colorNombre: "Gris", inicio: "Buenavista", fin: "Ciudad Azteca", total: 16, zonas: ["Cuauhtémoc", "Gustavo A. Madero"], descripcion: "Línea que conecta el centro norte con el nororiente.", estaciones_turisticas: [], estaciones: [{ slug: "buenavista", nombre: "Buenavista" }, { slug: "guerrero", nombre: "Guerrero" }, { slug: "garibaldi-lagunilla", nombre: "Garibaldi/Lagunilla" }, { slug: "lagunilla", nombre: "Lagunilla" }, { slug: "tepito", nombre: "Tepito" }, { slug: "morelos", nombre: "Morelos" }, { slug: "san-lazaro", nombre: "San Lázaro" }, { slug: "romero-rubio", nombre: "Romero Rubio" }, { slug: "oceania", nombre: "Oceanía" }, { slug: "deportivo-oceanía", nombre: "Deportivo Oceanía" }, { slug: "bosque-de-aragón", nombre: "Bosque de Aragón" }, { slug: "villa-de-aragón", nombre: "Villa de Aragón" }, { slug: "nezahualcoyotl", nombre: "Nezahualcóyotl" }, { slug: "impulsora", nombre: "Impulsora" }, { slug: "río-de-los-remedios", nombre: "Río de los Remedios" }, { slug: "muzquiz", nombre: "Muzquiz" }, { slug: "ciudad-azteca", nombre: "Ciudad Azteca" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea B Metro CDMX — Gris | MetroGuia", meta_description: "Línea B Gris del Metro CDMX.", h1: "Línea B Metro CDMX" },
  "12": { id: "12", color: "#C9A84C", colorNombre: "Oro", inicio: "Mixcoac", fin: "Tláhuac", total: 20, zonas: ["Benito Juárez", "Iztacalco", "Iztapalapa", "Tláhuac"], descripcion: "La línea más nueva del metro (2012), conecta el suroeste con el oriente.", estaciones_turisticas: [], estaciones: [{ slug: "mixcoac", nombre: "Mixcoac" }, { slug: "insurgentes-sur", nombre: "Insurgentes Sur" }, { slug: "20-de-noviembre", nombre: "20 de Noviembre" }, { slug: "zapotitlan", nombre: "Zapotitlán" }, { slug: "nopalera", nombre: "Nopalera" }, { slug: "olivos", nombre: "Olivos" }, { slug: "tezonco", nombre: "Tezonco" }, { slug: "periferico-oriente", nombre: "Periférico Oriente" }, { slug: "calle-11", nombre: "Calle 11" }, { slug: "lomas-estrella", nombre: "Lomas Estrella" }, { slug: "san-andres-tomatlan", nombre: "San Andrés Tomatlán" }, { slug: "culhuacan", nombre: "Culhuacán" }, { slug: "mexicaltzingo", nombre: "Mexicaltzingo" }, { slug: "ermita", nombre: "Ermita" }, { slug: "general-anaya", nombre: "General Anaya" }, { slug: "mexicaltzingo-2", nombre: "Mexicaltzingo" }, { slug: "atlalilco", nombre: "Atlalilco" }, { slug: "barranca-del-muerto", nombre: "Barranca del Muerto" }, { slug: "tlahuac", nombre: "Tláhuac" }], ruta_1_dia: { titulo: "Tbd", paradas: [] }, seo_title: "Línea 12 Metro CDMX — Oro | MetroGuia", meta_description: "Línea 12 Oro del Metro CDMX.", h1: "Línea 12 Metro CDMX" }
}
