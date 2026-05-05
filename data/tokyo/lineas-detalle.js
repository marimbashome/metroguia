export const lineasTokyo = [
  {
    id: "G",
    color: "#F9A11B",
    colorNombre: "Ginza Line",
    inicio: "Shibuya",
    fin: "Asakusa",
    total: 19,
    municipios: ["Shibuya", "Minato", "Chuo", "Taito"],
    descripcion: "La línea Ginza (G) es la línea de metro más antigua de Asia, inaugurada en 1927. Conecta Shibuya con Asakusa pasando por los barrios más elegantes de Tokio: Omotesando (moda de lujo), Ginza (el Champs-Elysées de Tokio) y Ueno (museos y parques). Es la línea esencial para el turismo clásico de Tokio.",
    estaciones_turisticas: ["tokyo-shibuya", "tokyo-omotesando", "tokyo-ginza", "tokyo-ueno", "tokyo-asakusa"],
    estaciones: ["tokyo-shibuya", "tokyo-omotesando", "tokyo-ginza", "tokyo-ueno", "tokyo-asakusa"],
    ruta_1_dia: {
      titulo: "Tokio Clásico: Omotesando a Asakusa",
      paradas: [
        { estacion: "tokyo-omotesando", actividad: "Moda de lujo y Omotesando Hills (10:00 AM)" },
        { estacion: "tokyo-ginza", actividad: "Shopping en Ginza y galerías de arte (12:00 PM)" },
        { estacion: "tokyo-ueno", actividad: "Parque Ueno y museos (02:00 PM)" },
        { estacion: "tokyo-asakusa", actividad: "Templo Sensoji y Nakamise (04:00 PM)" }
      ]
    },
    seo_title: "Ginza Line — Tokyo Metro | MetroGuia",
    meta_description: "Ginza Line (G) Tokyo Metro: 19 stations from Shibuya to Asakusa. Oldest metro in Asia. Omotesando, Ginza, Ueno, Asakusa.",
    h1: "Ginza Line — Tokyo Metro"
  },
  {
    id: "H",
    color: "#B5B5AC",
    colorNombre: "Hibiya Line",
    inicio: "Naka-meguro",
    fin: "Kita-senju",
    total: 21,
    municipios: ["Meguro", "Shibuya", "Minato", "Chiyoda", "Chuo", "Taito", "Arakawa"],
    descripcion: "La línea Hibiya (H) corre de norte a sur conectando Naka-meguro (trendy, cerezos) con Kita-senju, pasando por Roppongi (arte contemporáneo), Ginza, Akihabara y Ueno. Es ideal para combinar turismo cultural con vida nocturna.",
    estaciones_turisticas: ["tokyo-naka-meguro", "tokyo-hiroo", "tokyo-roppongi", "tokyo-ginza", "tokyo-ueno"],
    estaciones: ["tokyo-naka-meguro", "tokyo-hiroo", "tokyo-roppongi", "tokyo-hibiya", "tokyo-ginza", "tokyo-ueno", "tokyo-akihabara"],
    ruta_1_dia: {
      titulo: "Arte y Cultura: Roppongi a Ueno",
      paradas: [
        { estacion: "tokyo-naka-meguro", actividad: "Paseo por el río Meguro y cafés (09:00 AM)" },
        { estacion: "tokyo-roppongi", actividad: "Mori Art Museum y Roppongi Hills (11:00 AM)" },
        { estacion: "tokyo-ginza", actividad: "Ginza y Kabuki-za Theatre (02:00 PM)" },
        { estacion: "tokyo-ueno", actividad: "Tokyo National Museum (04:00 PM)" }
      ]
    },
    seo_title: "Hibiya Line — Tokyo Metro | MetroGuia",
    meta_description: "Hibiya Line (H) Tokyo Metro: 21 stations from Naka-meguro to Kita-senju. Roppongi, Ginza, Akihabara, Ueno.",
    h1: "Hibiya Line — Tokyo Metro"
  },
  {
    id: "M",
    color: "#F62E36",
    colorNombre: "Marunouchi Line",
    inicio: "Ogikubo",
    fin: "Honancho",
    total: 28,
    municipios: ["Suginami", "Nakano", "Shinjuku", "Chiyoda", "Chuo", "Bunkyo"],
    descripcion: "La línea Marunouchi (M) es la columna vertebral de Tokio, conectando Shinjuku con el centro financiero de Otemachi y Tokio. La línea es reconocible por sus coches de color rojo brillante con franja gris. Pasa por Ginza, la estación de Tokio y los barrios universitarios de Bunkyo.",
    estaciones_turisticas: ["tokyo-shinjuku", "tokyo-ginza", "tokyo-tokyo-station", "tokyo-otemachi"],
    estaciones: ["tokyo-shinjuku", "tokyo-ginza", "tokyo-tokyo-station", "tokyo-otemachi"],
    ruta_1_dia: {
      titulo: "Centro de Tokio: Shinjuku al Palacio Imperial",
      paradas: [
        { estacion: "tokyo-shinjuku", actividad: "Observatorio del Gobierno Metropolitano (09:00 AM)" },
        { estacion: "tokyo-ginza", actividad: "Compras y almuerzo en Ginza (12:00 PM)" },
        { estacion: "tokyo-tokyo-station", actividad: "Estación de Tokio histórica (02:30 PM)" },
        { estacion: "tokyo-otemachi", actividad: "Jardín del Palacio Imperial (04:00 PM)" }
      ]
    },
    seo_title: "Marunouchi Line — Tokyo Metro | MetroGuia",
    meta_description: "Marunouchi Line (M) Tokyo Metro: 28 stations from Ogikubo to Honancho. Shinjuku, Ginza, Tokyo Station, Otemachi.",
    h1: "Marunouchi Line — Tokyo Metro"
  },
  {
    id: "C",
    color: "#00BB85",
    colorNombre: "Chiyoda Line",
    inicio: "Yoyogi-uehara",
    fin: "Ayase / Kita-ayase",
    total: 20,
    municipios: ["Shibuya", "Minato", "Chiyoda", "Bunkyo", "Arakawa", "Adachi"],
    descripcion: "La línea Chiyoda (C) conecta los barrios del sur (Harajuku, Omotesando, Akasaka) con el centro político (Kasumigaseki, Hibiya) y los barrios universitarios del norte. Ideal para acceder a Harajuku desde el norte sin pasar por Shibuya.",
    estaciones_turisticas: ["tokyo-meiji-jingumae", "tokyo-omotesando", "tokyo-akasaka", "tokyo-kasumigaseki", "tokyo-otemachi"],
    estaciones: ["tokyo-meiji-jingumae", "tokyo-omotesando", "tokyo-akasaka", "tokyo-kasumigaseki", "tokyo-hibiya", "tokyo-otemachi"],
    ruta_1_dia: {
      titulo: "De Harajuku al Palacio Imperial",
      paradas: [
        { estacion: "tokyo-meiji-jingumae", actividad: "Santuario Meiji y Harajuku (09:00 AM)" },
        { estacion: "tokyo-omotesando", actividad: "Omotesando Hills y moda de lujo (11:00 AM)" },
        { estacion: "tokyo-akasaka", actividad: "Almuerzo y Palacio de Akasaka (01:00 PM)" },
        { estacion: "tokyo-otemachi", actividad: "Jardín del Palacio Imperial (03:30 PM)" }
      ]
    },
    seo_title: "Chiyoda Line — Tokyo Metro | MetroGuia",
    meta_description: "Chiyoda Line (C) Tokyo Metro: 20 stations from Yoyogi-uehara to Ayase. Harajuku, Omotesando, Akasaka, Kasumigaseki.",
    h1: "Chiyoda Line — Tokyo Metro"
  },
  {
    id: "T",
    color: "#009AC7",
    colorNombre: "Tozai Line",
    inicio: "Nakano",
    fin: "Shin-kiba",
    total: 23,
    municipios: ["Nakano", "Shinjuku", "Bunkyo", "Chiyoda", "Chuo", "Koto"],
    descripcion: "La línea Tozai (T) cruza Tokio de este a oeste (Tozai = este-oeste en japonés). Conecta los barrios residenciales del oeste con el centro financiero de Otemachi/Nihombashi y los barrios del este del río Sumida. Es una de las líneas más congestionadas del mundo.",
    estaciones_turisticas: ["tokyo-takadanobaba", "tokyo-otemachi", "tokyo-nihombashi", "tokyo-monzen-nakacho"],
    estaciones: ["tokyo-takadanobaba", "tokyo-otemachi", "tokyo-nihombashi", "tokyo-monzen-nakacho"],
    ruta_1_dia: {
      titulo: "Cruce de Tokio: del campus al río",
      paradas: [
        { estacion: "tokyo-takadanobaba", actividad: "Campus de Waseda y barrio estudiantil (10:00 AM)" },
        { estacion: "tokyo-otemachi", actividad: "Jardines del Palacio Imperial (12:00 PM)" },
        { estacion: "tokyo-nihombashi", actividad: "Puente histórico y Mitsukoshi (02:00 PM)" },
        { estacion: "tokyo-monzen-nakacho", actividad: "Santuario Tomioka e izakayas (04:30 PM)" }
      ]
    },
    seo_title: "Tozai Line — Tokyo Metro | MetroGuia",
    meta_description: "Tozai Line (T) Tokyo Metro: 23 stations from Nakano to Shin-kiba. Waseda, Otemachi, Nihombashi, Monzen-nakacho.",
    h1: "Tozai Line — Tokyo Metro"
  },
  {
    id: "Oedo",
    color: "#B6007A",
    colorNombre: "Oedo Line (Toei)",
    inicio: "Hikarigaoka",
    fin: "Tochomae (loop)",
    total: 38,
    municipios: ["Nerima", "Toshima", "Nakano", "Shinjuku", "Shibuya", "Minato", "Chiyoda", "Chuo", "Sumida", "Koto"],
    descripcion: "La línea Oedo (Toei) es la más reciente gran línea de metro de Tokio (2000), formando un bucle que atraviesa barrios del centro y oeste. Conecta Roppongi, Shinjuku y el distrito de entretenimiento de Akabanebashi con el este histórico (Ryogoku, Kiyosumi).",
    estaciones_turisticas: ["tokyo-roppongi-oedo", "tokyo-shinjuku-oedo"],
    estaciones: ["tokyo-roppongi-oedo", "tokyo-shinjuku-oedo"],
    ruta_1_dia: {
      titulo: "Bucle Oedo: arte, historia y barrios",
      paradas: [
        { estacion: "tokyo-shinjuku-oedo", actividad: "Observatorio gratis del Gobierno Metropolitano (09:00 AM)" },
        { estacion: "tokyo-roppongi-oedo", actividad: "National Art Center y Tokyo Midtown (11:00 AM)" }
      ]
    },
    seo_title: "Oedo Line (Toei) — Tokyo | MetroGuia",
    meta_description: "Toei Oedo Line: 38 stations forming a loop through central Tokyo. Roppongi, Shinjuku, Ryogoku, Kiyosumi.",
    h1: "Oedo Line (Toei) — Tokyo"
  }
];
