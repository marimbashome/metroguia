export const lineasSingapore = [
  {
    id: "NSL",
    color: "#D42E12",
    colorNombre: "North-South Line",
    inicio: "Jurong East",
    fin: "Marina South Pier",
    total: 27,
    municipios: ["Jurong East", "Bukit Batok", "Woodlands", "Yishun", "Ang Mo Kio", "Bishan", "Toa Payoh", "Novena", "Orchard", "City Hall", "Marina Bay"],
    descripcion: "La North-South Line (NSL) roja es la columna vertebral del MRT de Singapur, cruzando la isla de norte a sur desde Jurong East hasta Marina South Pier. Conecta los barrios residenciales del norte (Woodlands, Yishun) con el centro comercial de Orchard Road y el CBD en Raffles Place y City Hall. Inaugurada en 1987, fue la primera línea del sistema.",
    estaciones_turisticas: ["singapore-orchard", "singapore-city-hall", "singapore-raffles-place", "singapore-marina-bay"],
    estaciones: ["singapore-orchard", "singapore-city-hall", "singapore-raffles-place", "singapore-marina-bay"],
    ruta_1_dia: {
      titulo: "Clásicos de Singapur: Orchard a Marina Bay",
      paradas: [
        { estacion: "singapore-orchard", actividad: "Orchard Road shopping (10:00 AM)" },
        { estacion: "singapore-city-hall", actividad: "Civic District y Raffles Hotel (12:00 PM)" },
        { estacion: "singapore-raffles-place", actividad: "Singapore River y Boat Quay (02:00 PM)" },
        { estacion: "singapore-marina-bay", actividad: "Gardens by the Bay y MBS skyline (05:00 PM)" }
      ]
    },
    seo_title: "North-South Line (NSL) — Singapore MRT | MetroGuia",
    meta_description: "North-South Line (NSL) Singapore MRT: 27 stations from Jurong East to Marina Bay. Orchard Road, City Hall, Raffles Place.",
    h1: "North-South Line — Singapore MRT"
  },
  {
    id: "EWL",
    color: "#009645",
    colorNombre: "East-West Line",
    inicio: "Tuas Link",
    fin: "Pasir Ris / Changi Airport",
    total: 35,
    municipios: ["Tuas", "Jurong", "Queenstown", "Outram", "City Hall", "Kallang", "Tampines", "Changi"],
    descripcion: "La East-West Line (EWL) verde cruza Singapur de oeste a este en la ruta más larga del MRT, conectando el área industrial de Tuas con el aeropuerto de Changi. Sirve Bugis (Kampong Glam), Outram Park (barrio médico), Queenstown (zona residencial histórica) y Expo en el extremo oriental. El ramal del aeropuerto conecta a Changi directamente.",
    estaciones_turisticas: ["singapore-bugis", "singapore-city-hall", "singapore-raffles-place", "singapore-changi-airport"],
    estaciones: ["singapore-bugis", "singapore-city-hall", "singapore-raffles-place", "singapore-changi-airport"],
    ruta_1_dia: {
      titulo: "Barrios culturales: de Bugis al aeropuerto",
      paradas: [
        { estacion: "singapore-bugis", actividad: "Haji Lane, Arab Street y Sultan Mosque (10:00 AM)" },
        { estacion: "singapore-city-hall", actividad: "Civic District y National Gallery (12:30 PM)" },
        { estacion: "singapore-changi-airport", actividad: "Jewel Changi Airport (05:00 PM)" }
      ]
    },
    seo_title: "East-West Line (EWL) — Singapore MRT | MetroGuia",
    meta_description: "East-West Line (EWL) Singapore MRT: 35 stations from Tuas Link to Changi Airport. Bugis, City Hall, Outram Park.",
    h1: "East-West Line — Singapore MRT"
  },
  {
    id: "NEL",
    color: "#9900AA",
    colorNombre: "North-East Line",
    inicio: "HarbourFront",
    fin: "Punggol",
    total: 16,
    municipios: ["HarbourFront", "Chinatown", "Clarke Quay", "Little India", "Serangoon", "Sengkang", "Punggol"],
    descripcion: "La North-East Line (NEL) morada fue la primera línea completamente automática y sin conductor del MRT de Singapur (2003). Conecta HarbourFront (gateway a Sentosa) con Punggol en el extremo noreste pasando por Chinatown, Clarke Quay, Little India y Serangoon. Crucial para los barrios étnicos del centro.",
    estaciones_turisticas: ["singapore-harbourfront", "singapore-chinatown", "singapore-little-india"],
    estaciones: ["singapore-harbourfront", "singapore-chinatown", "singapore-little-india"],
    ruta_1_dia: {
      titulo: "Multiculturalidad: Chinatown, Little India, Arab Street",
      paradas: [
        { estacion: "singapore-chinatown", actividad: "Maxwell Food Centre y Buddha Tooth Temple (10:00 AM)" },
        { estacion: "singapore-little-india", actividad: "Serangoon Road y Sri Veeramakaliamman Temple (01:00 PM)" },
        { estacion: "singapore-harbourfront", actividad: "VivoCity y cable car a Sentosa (04:00 PM)" }
      ]
    },
    seo_title: "North-East Line (NEL) — Singapore MRT | MetroGuia",
    meta_description: "North-East Line (NEL) Singapore MRT: 16 stations from HarbourFront to Punggol. Chinatown, Little India, Sentosa access.",
    h1: "North-East Line — Singapore MRT"
  },
  {
    id: "CCL",
    color: "#FA9E0D",
    colorNombre: "Circle Line",
    inicio: "HarbourFront (loop)",
    fin: "HarbourFront (loop)",
    total: 30,
    municipios: ["Marina Bay", "Paya Lebar", "Serangoon", "Bishan", "Caldecott", "Botanic Gardens", "Holland Village", "Buona Vista", "HarbourFront"],
    descripcion: "La Circle Line (CCL) naranja (2009-2011) forma un semicírculo alrededor del CBD conectando el resto de líneas del MRT. Es fundamental para el intercambio entre líneas sin necesidad de pasar por el centro. Sirve barrios clave como Holland Village (café culture), Botanic Gardens (UNESCO World Heritage) y el Marina Bay waterfront.",
    estaciones_turisticas: ["singapore-esplanade", "singapore-marina-bay", "singapore-harbourfront", "singapore-bayfront"],
    estaciones: ["singapore-esplanade", "singapore-marina-bay", "singapore-harbourfront", "singapore-bayfront"],
    ruta_1_dia: {
      titulo: "El arco de Singapur: arte, naturaleza y bahía",
      paradas: [
        { estacion: "singapore-esplanade", actividad: "Esplanade Theatres y Merlion Park (10:00 AM)" },
        { estacion: "singapore-bayfront", actividad: "Gardens by the Bay (12:00 PM)" },
        { estacion: "singapore-harbourfront", actividad: "VivoCity y puesta de sol (05:00 PM)" }
      ]
    },
    seo_title: "Circle Line (CCL) — Singapore MRT | MetroGuia",
    meta_description: "Circle Line (CCL) Singapore MRT: 30 stations linking all MRT lines. Esplanade, Marina Bay, Botanic Gardens, Holland Village.",
    h1: "Circle Line — Singapore MRT"
  },
  {
    id: "DTL",
    color: "#005EC4",
    colorNombre: "Downtown Line",
    inicio: "Bukit Panjang",
    fin: "Expo / Changi Airport",
    total: 35,
    municipios: ["Bukit Panjang", "Bukit Timah", "Newton", "Little India", "Bugis", "Marina Bay", "Paya Lebar", "Tampines", "Changi"],
    descripcion: "La Downtown Line (DTL) azul oscuro (2013-2017) es la línea más nueva del MRT de Singapur y sirve los barrios del oeste y norte que antes estaban sin cobertura de metro: Beauty World, Sixth Avenue, Buona Vista. También conecta el Botanic Gardens de la UNESCO con el barrio de Bukit Timah y el corredor de Balestier.",
    estaciones_turisticas: ["singapore-chinatown", "singapore-little-india", "singapore-bugis", "singapore-bayfront", "singapore-changi-airport"],
    estaciones: ["singapore-chinatown", "singapore-little-india", "singapore-bugis", "singapore-bayfront", "singapore-changi-airport"],
    ruta_1_dia: {
      titulo: "De Bukit Timah a Changi: naturaleza y modernidad",
      paradas: [
        { estacion: "singapore-bugis", actividad: "Kampong Glam y Haji Lane (10:00 AM)" },
        { estacion: "singapore-chinatown", actividad: "Buddha Tooth Temple y hawker food (12:00 PM)" },
        { estacion: "singapore-bayfront", actividad: "Marina Bay Sands y Supertrees (04:00 PM)" }
      ]
    },
    seo_title: "Downtown Line (DTL) — Singapore MRT | MetroGuia",
    meta_description: "Downtown Line (DTL) Singapore MRT: 35 stations from Bukit Panjang to Expo. Chinatown, Bugis, Marina Bay, Changi Airport.",
    h1: "Downtown Line — Singapore MRT"
  }
];
