export const lineasDenver = [
  {
    id: "A",
    color: "#FFD100",
    colorNombre: "Gold",
    inicio: "Union Station",
    fin: "Denver International Airport",
    total: 8,
    municipios: ["Denver", "Commerce City", "Aurora"],
    descripcion: "The University of Colorado A Line is Denver's flagship commuter rail connection. Opened in 2016, this 36.8 km line with 8 stations provides the fastest link between downtown Denver and Denver International Airport (DIA). Direct airport connection in just 37 minutes from downtown. The line operates 24/7 with service from 3:15 AM to 1:45 AM, providing trains every 15 minutes during peak hours and every 30 minutes off-peak. Features modern stations with full accessibility, WiFi, and real-time arrival information.",
    estaciones_turisticas: ["denver-union-station", "denver-central-park", "denver-airport"],
    estaciones: ["denver-union-station", "denver-38th-blake", "denver-40th-colorado", "denver-central-park", "denver-peoria", "denver-gateway-park", "denver-61st-pena", "denver-airport"],
    ruta_1_dia: {
      titulo: "One-Day A Line Journey: Downtown to DIA",
      paradas: [
        { estacion: "denver-union-station", actividad: "Start at historic Union Station, explore the transit center and grab breakfast at one of the historic eateries inside" },
        { estacion: "denver-38th-blake", actividad: "Visit the vibrant RiNo Arts District with galleries, murals, and craft breweries" },
        { estacion: "denver-central-park", actividad: "Explore the Central Park development with modern retail and residential areas" },
        { estacion: "denver-airport", actividad: "Arrive at Denver International Airport with its distinctive peaked roof architecture. Tour the terminal or catch a flight" }
      ],
      notas: "Perfect for first-time visitors using public transit from the airport. The 37-minute journey is efficient and allows viewing Denver's growth pattern from downtown to the airport corridor."
    },
    seo_title: "A Line — Denver RTD Rail | Union Station to DIA Airport | MetroGuia",
    meta_description: "Denver's A Line commuter rail connects Union Station downtown to Denver International Airport in 37 minutes. 8 stations, 24/7 service, fastest airport access.",
    h1: "A Line — Denver RTD | Union Station to Airport"
  },

  {
    id: "B",
    color: "#8B6914",
    colorNombre: "Bronze",
    inicio: "Union Station",
    fin: "Westminster",
    total: 2,
    municipios: ["Denver", "Westminster"],
    descripcion: "The B Line is Denver's B Line commuter rail connecting downtown Denver's Union Station to Westminster. This growing line serves the northern suburbs and is a critical commuter connection. Features modern stations with park-and-ride facilities and direct downtown access.",
    estaciones_turisticas: ["denver-union-station", "denver-westminster-41st-fox"],
    estaciones: ["denver-union-station", "denver-westminster-41st-fox"],
    seo_title: "B Line — Denver RTD Rail | Union Station to Westminster | MetroGuia",
    meta_description: "B Line connects downtown Denver to Westminster. Commuter rail with park-and-ride facilities.",
    h1: "B Line — Denver RTD | Union Station to Westminster"
  },

  {
    id: "D",
    color: "#00843D",
    colorNombre: "Green",
    inicio: "18th & California",
    fin: "Littleton/Mineral",
    total: 8,
    municipios: ["Denver", "Englewood", "Littleton"],
    descripcion: "The D Line is a major light rail corridor serving Denver's cultural district and extending south to Littleton. Starting at the heart of Denver's arts scene near the Denver Art Museum and Civic Center, the line connects downtown entertainment with southern suburban communities. Service operates 4:30 AM to 1:15 AM with 15-minute peak frequency.",
    estaciones_turisticas: ["denver-18th-california", "denver-theatre-district", "denver-alameda"],
    estaciones: ["denver-18th-california", "denver-theatre-district", "denver-10th-osage", "denver-alameda", "denver-evans", "denver-englewood", "denver-littleton-mineral"],
    ruta_1_dia: {
      titulo: "One-Day D Line: Arts & Culture to Suburbs",
      paradas: [
        { estacion: "denver-18th-california", actividad: "Start at 18th & California, visit the Denver Art Museum and explore Civic Center Park" },
        { estacion: "denver-theatre-district", actividad: "Explore the Theatre District with the Denver Performing Arts Complex and Convention Center" },
        { estacion: "denver-10th-osage", actividad: "Discover Little Raven District restaurants and Denver's dining scene" },
        { estacion: "denver-alameda", actividad: "Browse Alameda's independent shops and galleries" },
        { estacion: "denver-littleton-mineral", actividad: "Explore Littleton's downtown and historic charm in the southern suburbs" }
      ],
      notas: "Best for cultural exploration and shopping. Allows viewing of Denver from downtown arts scene through suburban growth."
    },
    seo_title: "D Line — Denver RTD Light Rail | Downtown Arts to Littleton | MetroGuia",
    meta_description: "D Line light rail connects Denver's arts district to Littleton. 8 stations, downtown cultural attractions, southern suburbs.",
    h1: "D Line — Denver RTD | Downtown Arts to Littleton"
  },

  {
    id: "E",
    color: "#552586",
    colorNombre: "Purple",
    inicio: "Union Station",
    fin: "RidgeGate Parkway",
    total: 16,
    municipios: ["Denver", "Littleton"],
    descripcion: "The E Line is Denver's most extensive light rail corridor, running from downtown Union Station south to RidgeGate Parkway. This 19.9 km line with 16 stations connects the University of Denver, Washington Park, and the entire south metro area. Features modern service with 15-minute peak frequency, full accessibility, and park-and-ride facilities at southern terminals.",
    estaciones_turisticas: ["denver-union-station", "denver-louisiana-pearl", "denver-university-of-denver", "denver-arapahoe-village"],
    estaciones: ["denver-union-station", "denver-10th-osage", "denver-i25-broadway", "denver-louisiana-pearl", "denver-university-of-denver", "denver-colorado", "denver-yale", "denver-southmoor", "denver-belleview", "denver-orchard", "denver-arapahoe-village", "denver-dry-creek", "denver-county-line", "denver-lincoln", "denver-ridgegate"],
    ruta_1_dia: {
      titulo: "One-Day E Line Journey: Downtown to South Metro",
      paradas: [
        { estacion: "denver-union-station", actividad: "Begin at Union Station in downtown Denver" },
        { estacion: "denver-louisiana-pearl", actividad: "Visit the University of Denver campus and the beautiful Washington Park neighborhood" },
        { estacion: "denver-university-of-denver", actividad: "Explore the DU campus or enjoy Washington Park's restaurants and shopping" },
        { estacion: "denver-arapahoe-village", actividad: "Shop at Village Center mall and explore south suburbs" },
        { estacion: "denver-ridgegate", actividade: "Arrive at the growing RidgeGate development, southern terminus" }
      ],
      notas: "Ideal for exploring Denver's educated south side. The Washington Park area around DU is upscale and worth spending time in."
    },
    seo_title: "E Line — Denver RTD Light Rail | Downtown to RidgeGate | MetroGuia",
    meta_description: "E Line light rail serves University of Denver, Washington Park, and south metro. 16 stations, southern terminus.",
    h1: "E Line — Denver RTD | Downtown to South Metro"
  },

  {
    id: "G",
    color: "#BFD730",
    colorNombre: "Yellow-Green",
    inicio: "Union Station",
    fin: "Wheat Ridge/Ward",
    total: 8,
    municipios: ["Denver", "Arvada", "Wheat Ridge"],
    descripcion: "The G Line is Denver's western commuter rail corridor, connecting Union Station through north Denver to the growing communities of Arvada and Wheat Ridge. This important line serves northwest Denver neighborhoods and extends to the foothills. Service operates 4:30 AM to 1:15 AM with frequent peak service.",
    estaciones_turisticas: ["denver-union-station", "denver-olde-town-arvada", "denver-wheat-ridge-ward"],
    estaciones: ["denver-union-station", "denver-41st-fox", "denver-pecos-junction", "denver-clear-creek-federal", "denver-arvada-gold-strike", "denver-olde-town-arvada", "denver-arvada-ridge", "denver-wheat-ridge-ward"],
    ruta_1_dia: {
      titulo: "One-Day G Line: Downtown to Foothills",
      paradas: [
        { estacion: "denver-union-station", actividad: "Start at Union Station in downtown Denver" },
        { estacion: "denver-clear-creek-federal", actividad: "Explore Denver's industrial heritage and Clear Creek Park" },
        { estacion: "denver-olde-town-arvada", actividad: "Visit historic Olde Town Arvada with shops, restaurants, and breweries in a charming 19th-century setting" },
        { estacion: "denver-wheat-ridge-ward", actividad: "Arrive in Wheat Ridge, the western gateway to the Rocky Mountains with hiking and outdoor recreation" }
      ],
      notas: "Great for exploring Denver's growth toward the mountains and experiencing authentic western communities."
    },
    seo_title: "G Line — Denver RTD Rail | Downtown to Wheat Ridge | MetroGuia",
    meta_description: "G Line commuter rail connects downtown Denver to Wheat Ridge and Arvada. 8 stations, western suburbs.",
    h1: "G Line — Denver RTD | Downtown to Wheat Ridge"
  },

  {
    id: "W",
    color: "#0078C8",
    colorNombre: "Blue",
    inicio: "Union Station",
    fin: "Jefferson County/Golden",
    total: 16,
    municipios: ["Denver", "Lakewood", "Golden"],
    descripcion: "The W Line is Denver's western light rail corridor extending from downtown Union Station through west Denver, Lakewood, and into historic Golden. This scenic 21 km line provides direct connections to the Rocky Mountains gateway and serves important employment centers like the Federal Center. Features modern service with 15-minute peak frequency.",
    estaciones_turisticas: ["denver-union-station", "denver-auraria-west", "denver-federal-center", "denver-jefferson-county-golden"],
    estaciones: ["denver-union-station", "denver-auraria-west", "denver-decatur-federal", "denver-knox", "denver-perry", "denver-lamar", "denver-wadsworth-lakewood", "denver-garrison", "denver-oak", "denver-federal-center", "denver-jefferson-county-golden"],
    ruta_1_dia: {
      titulo: "One-Day W Line: Downtown to Golden",
      paradas: [
        { estacion: "denver-union-station", actividad: "Start at historic Union Station in downtown Denver" },
        { estacion: "denver-auraria-west", actividad: "Visit the Auraria Higher Education Center with three colleges" },
        { estacion: "denver-federal-center", actividad: "Tour the Federal Center employment hub and government offices" },
        { estacion: "denver-jefferson-county-golden", actividad: "Arrive in Golden, visit historic downtown, breweries, Buffalo Bill Museum, and enjoy Rocky Mountain views and hiking" }
      ],
      notas: "Excellent for outdoor enthusiasts. Golden offers mountain gateway charm and countless recreation opportunities just 20 minutes west of downtown."
    },
    seo_title: "W Line — Denver RTD Light Rail | Downtown to Golden | MetroGuia",
    meta_description: "W Line light rail connects downtown Denver to historic Golden at the foothills. 11 stations, Rocky Mountain gateway.",
    h1: "W Line — Denver RTD | Downtown to Golden"
  }
];
