/**
 * San Francisco Bay Area Transit Lines Detail
 * MetroGuia.mx platform — 4 systems, 17 lines, 117 stations
 * Systems: BART (6 lines), Muni Metro (7 lines), Caltrain (1 line), Cable Car (3 lines)
 * Last updated: 2026-04-02
 */

export const lineasSF = [
  // ====================
  // BART LINES (6)
  // ====================
  {
    id: "Red",
    color: "#CC0000",
    colorNombre: "Red",
    sistema: "bart",
    inicio: "Richmond",
    fin: "Millbrae",
    total: 24,
    municipios: ["Richmond", "El Cerrito", "Berkeley", "Oakland", "San Francisco", "Daly City", "Colma", "South San Francisco", "San Bruno", "Millbrae"],
    descripcion: "BART Red Line: Richmond through Berkeley, Oakland, downtown SF, and south to SFO Airport and Millbrae. Key tourist stops include Embarcadero (Ferry Building), Powell (Cable Cars/Union Square), and direct SFO Airport access. Fare: $2.15–$13.70 USD with Clipper Card.",
    estaciones_turisticas: ["bart-embarcadero", "bart-powell", "bart-civic-center", "bart-sfo-airport", "bart-downtown-berkeley"],
    estaciones: [
      "bart-richmond", "bart-el-cerrito-del-norte", "bart-el-cerrito-plaza",
      "bart-north-berkeley", "bart-downtown-berkeley", "bart-ashby",
      "bart-macarthur", "bart-19th-st-oakland", "bart-12th-st-oakland",
      "bart-west-oakland", "bart-embarcadero", "bart-montgomery", "bart-powell",
      "bart-civic-center", "bart-16th-st-mission", "bart-24th-st-mission",
      "bart-glen-park", "bart-balboa-park", "bart-daly-city",
      "bart-colma", "bart-south-sf", "bart-san-bruno",
      "bart-sfo-airport", "bart-millbrae"
    ],
    ruta_1_dia: {
      titulo: "Classic San Francisco by BART Red Line",
      paradas: [
        { estacion: "bart-embarcadero", actividad: "Ferry Building & waterfront breakfast (9:00 AM)" },
        { estacion: "bart-powell", actividad: "Cable Cars & Union Square shopping (10:30 AM)" },
        { estacion: "bart-civic-center", actividad: "City Hall & Asian Art Museum (12:00 PM)" },
        { estacion: "bart-16th-st-mission", actividad: "Mission District lunch — best tacos in SF (1:30 PM)" },
        { estacion: "bart-24th-st-mission", actividad: "Balmy Alley murals & Mision culture (3:00 PM)" },
        { estacion: "bart-downtown-berkeley", actividad: "UC Berkeley campus & Telegraph Ave (5:00 PM)" }
      ],
      notas: "Red Line covers SF's best tourist spots plus Berkeley. Use Clipper Card for all rides."
    }
  },
  {
    id: "Orange",
    color: "#FF8C00",
    colorNombre: "Orange",
    sistema: "bart",
    inicio: "Richmond",
    fin: "Berryessa / North San José",
    total: 21,
    municipios: ["Richmond", "El Cerrito", "Berkeley", "Oakland", "Hayward", "Fremont", "Milpitas", "San José"],
    descripcion: "BART Orange Line: Richmond through East Bay to Berryessa/North San José in Silicon Valley. Passes through Oakland's cultural hubs and East Bay communities.",
    estaciones_turisticas: ["bart-lake-merritt", "bart-fruitvale", "bart-downtown-berkeley", "bart-berryessa"],
    estaciones: [
      "bart-richmond", "bart-el-cerrito-del-norte", "bart-el-cerrito-plaza",
      "bart-north-berkeley", "bart-downtown-berkeley", "bart-ashby",
      "bart-macarthur", "bart-19th-st-oakland", "bart-12th-st-oakland",
      "bart-lake-merritt", "bart-fruitvale", "bart-coliseum",
      "bart-san-leandro", "bart-bay-fair", "bart-hayward", "bart-south-hayward",
      "bart-union-city", "bart-fremont", "bart-warm-springs",
      "bart-milpitas", "bart-berryessa"
    ],
    ruta_1_dia: {
      titulo: "Oakland & East Bay by BART Orange Line",
      paradas: [
        { estacion: "bart-downtown-berkeley", actividad: "UC Berkeley campus walk (9:00 AM)" },
        { estacion: "bart-19th-st-oakland", actividad: "Uptown Oakland arts & coffee (11:00 AM)" },
        { estacion: "bart-lake-merritt", actividad: "Oakland Museum & Lake Merritt walk (12:30 PM)" },
        { estacion: "bart-fruitvale", actividad: "Fruitvale Village lunch — Mexican food (2:00 PM)" }
      ],
      notas: "Orange Line is the best way to explore Oakland and East Bay culture."
    }
  },
  {
    id: "Yellow",
    color: "#FFD700",
    colorNombre: "Yellow",
    sistema: "bart",
    inicio: "Antioch",
    fin: "SFO Airport / Millbrae",
    total: 28,
    municipios: ["Antioch", "Pittsburg", "Concord", "Walnut Creek", "Lafayette", "Orinda", "Oakland", "San Francisco", "Daly City", "Millbrae"],
    descripcion: "BART Yellow Line: Antioch (eBART) through Contra Costa County hills to downtown SF and SFO. Longest BART line passing through charming East Bay hill towns.",
    estaciones_turisticas: ["bart-rockridge", "bart-walnut-creek", "bart-embarcadero", "bart-powell"],
    estaciones: [
      "bart-antioch", "bart-pittsburg-center", "bart-pittsburg-bay-point",
      "bart-north-concord-martinez", "bart-concord", "bart-pleasant-hill",
      "bart-walnut-creek", "bart-lafayette", "bart-orinda", "bart-rockridge",
      "bart-macarthur", "bart-19th-st-oakland", "bart-12th-st-oakland",
      "bart-west-oakland", "bart-embarcadero", "bart-montgomery", "bart-powell",
      "bart-civic-center", "bart-16th-st-mission", "bart-24th-st-mission",
      "bart-glen-park", "bart-balboa-park", "bart-daly-city",
      "bart-colma", "bart-south-sf", "bart-san-bruno",
      "bart-sfo-airport", "bart-millbrae"
    ],
    ruta_1_dia: {
      titulo: "Contra Costa Hill Towns by Yellow Line",
      paradas: [
        { estacion: "bart-rockridge", actividad: "College Avenue brunch & boutiques (9:30 AM)" },
        { estacion: "bart-walnut-creek", actividad: "Broadway Plaza shopping (11:30 AM)" },
        { estacion: "bart-lafayette", actividad: "Lafayette village lunch (1:00 PM)" }
      ],
      notas: "Yellow Line offers access to charming East Bay suburban villages. Best on weekends."
    }
  },
  {
    id: "Green",
    color: "#00AA44",
    colorNombre: "Green",
    sistema: "bart",
    inicio: "Berryessa / North San José",
    fin: "Daly City",
    total: 22,
    municipios: ["San José", "Milpitas", "Fremont", "Hayward", "Oakland", "San Francisco", "Daly City"],
    descripcion: "BART Green Line: Berryessa through East Bay and downtown SF to Daly City. Connects Silicon Valley to San Francisco via East Bay corridor.",
    estaciones_turisticas: ["bart-embarcadero", "bart-powell", "bart-lake-merritt"],
    estaciones: [
      "bart-berryessa", "bart-milpitas", "bart-warm-springs",
      "bart-fremont", "bart-union-city", "bart-south-hayward", "bart-hayward",
      "bart-bay-fair", "bart-san-leandro", "bart-coliseum", "bart-fruitvale",
      "bart-lake-merritt", "bart-west-oakland",
      "bart-embarcadero", "bart-montgomery", "bart-powell",
      "bart-civic-center", "bart-16th-st-mission", "bart-24th-st-mission",
      "bart-glen-park", "bart-balboa-park", "bart-daly-city"
    ],
    ruta_1_dia: {
      titulo: "Silicon Valley to SF by Green Line",
      paradas: [
        { estacion: "bart-berryessa", actividad: "Start in North San José (8:00 AM)" },
        { estacion: "bart-lake-merritt", actividad: "Oakland Museum + lake walk (10:00 AM)" },
        { estacion: "bart-embarcadero", actividad: "Ferry Building lunch (12:00 PM)" }
      ],
      notas: "Green Line connects Silicon Valley directly to downtown SF."
    }
  },
  {
    id: "Blue",
    color: "#0066CC",
    colorNombre: "Blue",
    sistema: "bart",
    inicio: "Dublin / Pleasanton",
    fin: "Daly City",
    total: 18,
    municipios: ["Dublin", "Castro Valley", "San Leandro", "Oakland", "San Francisco", "Daly City"],
    descripcion: "BART Blue Line: Dublin/Pleasanton through Castro Valley and East Bay to downtown SF and Daly City. Serves Tri-Valley communities.",
    estaciones_turisticas: ["bart-embarcadero", "bart-powell", "bart-lake-merritt"],
    estaciones: [
      "bart-dublin-pleasanton", "bart-west-dublin-pleasanton", "bart-castro-valley",
      "bart-bay-fair", "bart-san-leandro", "bart-coliseum", "bart-fruitvale",
      "bart-lake-merritt", "bart-west-oakland",
      "bart-embarcadero", "bart-montgomery", "bart-powell",
      "bart-civic-center", "bart-16th-st-mission", "bart-24th-st-mission",
      "bart-glen-park", "bart-balboa-park", "bart-daly-city"
    ],
    ruta_1_dia: {
      titulo: "Tri-Valley to SF by Blue Line",
      paradas: [
        { estacion: "bart-dublin-pleasanton", actividad: "Start in Dublin (8:00 AM)" },
        { estacion: "bart-embarcadero", actividad: "Ferry Building & waterfront (9:30 AM)" },
        { estacion: "bart-powell", actividad: "Union Square & Cable Cars (11:00 AM)" }
      ],
      notas: "Blue Line connects suburban Tri-Valley to downtown SF in under an hour."
    }
  },
  {
    id: "Beige",
    color: "#C4A882",
    colorNombre: "Beige",
    sistema: "bart",
    inicio: "Coliseum",
    fin: "Oakland Intl Airport (OAK)",
    total: 2,
    municipios: ["Oakland"],
    descripcion: "Oakland Airport Connector: Automated people mover connecting Coliseum BART to Oakland International Airport (OAK). 8 minutes, $6 surcharge.",
    estaciones_turisticas: [],
    estaciones: ["bart-coliseum", "bart-oakland-airport"],
    ruta_1_dia: {
      titulo: "Oakland Airport Access",
      paradas: [
        { estacion: "bart-coliseum", actividad: "Transfer from BART Orange/Green/Blue (any time)" },
        { estacion: "bart-oakland-airport", actividad: "OAK Airport terminals (8 min ride)" }
      ],
      notas: "Automated connector. $6 surcharge added to BART fare. Runs every 5 min."
    }
  },

  // ====================
  // MUNI METRO LINES (7)
  // ====================
  {
    id: "J",
    color: "#DAA520",
    colorNombre: "Gold",
    sistema: "muni",
    inicio: "Embarcadero",
    fin: "Balboa Park",
    total: 10,
    municipios: ["San Francisco"],
    descripcion: "Muni J-Church: Downtown subway through Castro and Noe Valley to Balboa Park. Scenic surface run along Church Street with views of the city. Fare: $2.50 USD.",
    estaciones_turisticas: ["sf-muni-church-18th", "sf-muni-church-30th"],
    estaciones: [
      "sf-muni-embarcadero", "sf-muni-montgomery", "sf-muni-powell",
      "sf-muni-civic-center", "sf-muni-van-ness", "sf-muni-church",
      "sf-muni-duboce-church", "sf-muni-church-18th", "sf-muni-church-24th",
      "sf-muni-church-30th", "sf-muni-balboa-park"
    ],
    ruta_1_dia: {
      titulo: "Noe Valley & Dolores Park by J-Church",
      paradas: [
        { estacion: "sf-muni-church-18th", actividad: "Dolores Park picnic & city views (10:00 AM)" },
        { estacion: "sf-muni-church-24th", actividad: "Noe Valley shops on 24th Street (12:00 PM)" }
      ],
      notas: "J-Church runs on the surface along Church Street — enjoy the views!"
    }
  },
  {
    id: "K",
    color: "#6495ED",
    colorNombre: "Cornflower Blue",
    sistema: "muni",
    inicio: "Embarcadero",
    fin: "Balboa Park",
    total: 13,
    municipios: ["San Francisco"],
    descripcion: "Muni K-Ingleside: Downtown subway through Twin Peaks Tunnel to West Portal, then surface along Ocean Avenue to Balboa Park. Fare: $2.50 USD.",
    estaciones_turisticas: ["sf-muni-castro", "sf-muni-west-portal"],
    estaciones: [
      "sf-muni-embarcadero", "sf-muni-montgomery", "sf-muni-powell",
      "sf-muni-civic-center", "sf-muni-van-ness", "sf-muni-church",
      "sf-muni-castro", "sf-muni-forest-hill", "sf-muni-west-portal",
      "sf-muni-st-francis", "sf-muni-city-college", "sf-muni-balboa-park"
    ],
    ruta_1_dia: {
      titulo: "Castro & West Portal by K-Ingleside",
      paradas: [
        { estacion: "sf-muni-castro", actividad: "Castro District — Rainbow crosswalks & theatre (10:00 AM)" },
        { estacion: "sf-muni-west-portal", actividad: "West Portal village shops & coffee (11:30 AM)" }
      ],
      notas: "K-Ingleside is the best way to visit the Castro District on Muni."
    }
  },
  {
    id: "L",
    color: "#9370DB",
    colorNombre: "Purple",
    sistema: "muni",
    inicio: "Embarcadero",
    fin: "SF Zoo (Taraval & 46th)",
    total: 11,
    municipios: ["San Francisco"],
    descripcion: "Muni L-Taraval: Downtown subway through Twin Peaks Tunnel to West Portal, then surface along Taraval Street to San Francisco Zoo. Fare: $2.50 USD.",
    estaciones_turisticas: ["sf-muni-taraval-46th", "sf-muni-castro"],
    estaciones: [
      "sf-muni-embarcadero", "sf-muni-montgomery", "sf-muni-powell",
      "sf-muni-civic-center", "sf-muni-van-ness", "sf-muni-church",
      "sf-muni-castro", "sf-muni-forest-hill", "sf-muni-west-portal",
      "sf-muni-taraval-46th"
    ],
    ruta_1_dia: {
      titulo: "Castro District to SF Zoo by L-Taraval",
      paradas: [
        { estacion: "sf-muni-castro", actividad: "Castro Theatre & Harvey Milk Plaza (10:00 AM)" },
        { estacion: "sf-muni-taraval-46th", actividad: "San Francisco Zoo visit (12:00 PM)" }
      ],
      notas: "L-Taraval is the direct Muni line to the SF Zoo."
    }
  },
  {
    id: "M",
    color: "#2E8B57",
    colorNombre: "Sea Green",
    sistema: "muni",
    inicio: "Embarcadero",
    fin: "Balboa Park",
    total: 12,
    municipios: ["San Francisco"],
    descripcion: "Muni M-Ocean View: Downtown subway through Twin Peaks Tunnel, then south via 19th Avenue to Balboa Park. Serves residential neighborhoods. Fare: $2.50 USD.",
    estaciones_turisticas: ["sf-muni-castro"],
    estaciones: [
      "sf-muni-embarcadero", "sf-muni-montgomery", "sf-muni-powell",
      "sf-muni-civic-center", "sf-muni-van-ness", "sf-muni-church",
      "sf-muni-castro", "sf-muni-forest-hill", "sf-muni-west-portal",
      "sf-muni-st-francis", "sf-muni-balboa-park"
    ],
    ruta_1_dia: {
      titulo: "M-Ocean View Residential Tour",
      paradas: [
        { estacion: "sf-muni-castro", actividad: "Castro District exploration (10:00 AM)" },
        { estacion: "sf-muni-west-portal", actividad: "West Portal neighborhood shops (11:30 AM)" }
      ],
      notas: "M-Ocean View serves mainly residential areas — good for local experiences."
    }
  },
  {
    id: "N",
    color: "#1E90FF",
    colorNombre: "Dodger Blue",
    sistema: "muni",
    inicio: "Caltrain (4th & King)",
    fin: "Ocean Beach (La Playa)",
    total: 14,
    municipios: ["San Francisco"],
    descripcion: "Muni N-Judah: From Caltrain depot through downtown subway, then surface along Judah Street past Golden Gate Park to Ocean Beach. SF's most popular Muni line for tourists. Fare: $2.50 USD.",
    estaciones_turisticas: ["sf-muni-4th-king", "sf-muni-judah-9th", "sf-muni-ocean-beach"],
    estaciones: [
      "sf-muni-4th-king", "sf-muni-embarcadero", "sf-muni-montgomery",
      "sf-muni-powell", "sf-muni-civic-center", "sf-muni-van-ness",
      "sf-muni-church", "sf-muni-duboce-church", "sf-muni-carl-cole",
      "sf-muni-ucsf-parnassus", "sf-muni-judah-9th", "sf-muni-judah-19th",
      "sf-muni-ocean-beach"
    ],
    ruta_1_dia: {
      titulo: "Caltrain to Ocean Beach by N-Judah",
      paradas: [
        { estacion: "sf-muni-4th-king", actividad: "Start at Caltrain station (9:00 AM)" },
        { estacion: "sf-muni-judah-9th", actividad: "Golden Gate Park — Academy of Sciences & de Young (10:30 AM)" },
        { estacion: "sf-muni-ocean-beach", actividad: "Ocean Beach sunset walk (4:00 PM)" }
      ],
      notas: "N-Judah is the best Muni line for tourists — Caltrain to Golden Gate Park to Ocean Beach. The whole ride takes ~40 min."
    }
  },
  {
    id: "T",
    color: "#FF4500",
    colorNombre: "Orange Red",
    sistema: "muni",
    inicio: "Chinatown-Rose Pak",
    fin: "Bayshore / Sunnydale",
    total: 12,
    municipios: ["San Francisco"],
    descripcion: "Muni T-Third Street: Central Subway from Chinatown through SoMa, then surface along Third Street to Bayshore. Newest line (Central Subway opened 2023). Access to Chase Center (Warriors), UCSF, Dogpatch. Fare: $2.50 USD.",
    estaciones_turisticas: ["sf-muni-chinatown", "sf-muni-union-square", "sf-muni-yerba-buena", "sf-muni-ucsf-mission-bay"],
    estaciones: [
      "sf-muni-chinatown", "sf-muni-union-square", "sf-muni-yerba-buena",
      "sf-muni-4th-brannan", "sf-muni-4th-king",
      "sf-muni-ucsf-mission-bay", "sf-muni-3rd-mariposa", "sf-muni-3rd-20th",
      "sf-muni-bayshore-sunnydale"
    ],
    ruta_1_dia: {
      titulo: "Chinatown to Dogpatch by T-Third",
      paradas: [
        { estacion: "sf-muni-chinatown", actividad: "Dim sum breakfast in Chinatown (9:00 AM)" },
        { estacion: "sf-muni-union-square", actividad: "Union Square shopping (11:00 AM)" },
        { estacion: "sf-muni-yerba-buena", actividad: "SFMOMA & Yerba Buena Gardens (1:00 PM)" },
        { estacion: "sf-muni-3rd-20th", actividad: "Dogpatch craft breweries (3:00 PM)" }
      ],
      notas: "T-Third is the newest Muni line with Central Subway (2023). Best for Chinatown, museums, and Dogpatch."
    }
  },
  {
    id: "S",
    color: "#808080",
    colorNombre: "Gray",
    sistema: "muni",
    inicio: "West Portal",
    fin: "Embarcadero",
    total: 9,
    municipios: ["San Francisco"],
    descripcion: "Muni S-Shuttle: Limited/event service through Twin Peaks Tunnel and Market Street subway. Runs for Chase Center (Warriors) events and special occasions. Fare: $2.50 USD.",
    estaciones_turisticas: [],
    estaciones: [
      "sf-muni-west-portal", "sf-muni-forest-hill", "sf-muni-castro",
      "sf-muni-church", "sf-muni-van-ness", "sf-muni-civic-center",
      "sf-muni-powell", "sf-muni-montgomery", "sf-muni-embarcadero"
    ],
    ruta_1_dia: {
      titulo: "S-Shuttle (Event Service)",
      paradas: [
        { estacion: "sf-muni-embarcadero", actividad: "Special event service only" }
      ],
      notas: "S-Shuttle runs for Warriors games at Chase Center and special events. Check SFMTA for schedules."
    }
  },

  // ====================
  // CALTRAIN (1 line)
  // ====================
  {
    id: "Caltrain",
    color: "#E31837",
    colorNombre: "Caltrain Red",
    sistema: "caltrain",
    inicio: "San Francisco (4th & King)",
    fin: "Gilroy",
    total: 30,
    municipios: ["San Francisco", "South San Francisco", "San Bruno", "Millbrae", "Burlingame", "San Mateo", "Belmont", "San Carlos", "Redwood City", "Menlo Park", "Palo Alto", "Mountain View", "Sunnyvale", "Santa Clara", "San José", "Morgan Hill", "Gilroy"],
    descripcion: "Caltrain commuter rail: San Francisco to Gilroy via the Peninsula and Silicon Valley. 30 stations. Express service to Palo Alto/Mountain View in ~35 min. Direct access to Stanford University, Google, Meta, and Levi's Stadium (FIFA 2026). Fare: $3.75–$15.65 USD with Clipper Card.",
    estaciones_turisticas: ["caltrain-sf", "caltrain-palo-alto", "caltrain-mountain-view", "caltrain-san-jose-diridon", "caltrain-santa-clara"],
    estaciones: [
      "caltrain-sf", "caltrain-22nd-st", "caltrain-bayshore",
      "caltrain-south-sf", "caltrain-san-bruno", "caltrain-millbrae",
      "caltrain-broadway", "caltrain-burlingame", "caltrain-san-mateo",
      "caltrain-hayward-park", "caltrain-hillsdale", "caltrain-belmont",
      "caltrain-san-carlos", "caltrain-redwood-city", "caltrain-menlo-park",
      "caltrain-palo-alto", "caltrain-california-ave", "caltrain-san-antonio",
      "caltrain-mountain-view", "caltrain-sunnyvale", "caltrain-lawrence",
      "caltrain-santa-clara", "caltrain-college-park", "caltrain-san-jose-diridon",
      "caltrain-tamien", "caltrain-capitol", "caltrain-blossom-hill",
      "caltrain-morgan-hill", "caltrain-san-martin", "caltrain-gilroy"
    ],
    ruta_1_dia: {
      titulo: "SF to Silicon Valley by Caltrain",
      paradas: [
        { estacion: "caltrain-sf", actividad: "Board at San Francisco 4th & King (9:00 AM)" },
        { estacion: "caltrain-palo-alto", actividad: "Stanford University campus walk & University Ave lunch (10:00 AM)" },
        { estacion: "caltrain-mountain-view", actividad: "Googleplex area & Castro Street dining (1:00 PM)" },
        { estacion: "caltrain-san-jose-diridon", actividad: "Downtown San José & SAP Center (3:00 PM)" }
      ],
      notas: "Express Caltrain from SF to Palo Alto is just 35 min. Take Clipper Card — no cash on board. FIFA 2026: Santa Clara station for Levi's Stadium."
    }
  },

  // ====================
  // CABLE CAR LINES (3)
  // ====================
  {
    id: "Powell-Hyde",
    color: "#8B0000",
    colorNombre: "Dark Red",
    sistema: "cable-car",
    inicio: "Powell & Market",
    fin: "Hyde & Beach (Fisherman's Wharf)",
    total: 3,
    municipios: ["San Francisco"],
    descripcion: "Powell-Hyde Cable Car: The most scenic cable car line. From Powell & Market through Nob Hill and Russian Hill with stunning Alcatraz and Bay views, ending at Ghirardelli Square near Fisherman's Wharf. Fare: $8 USD (cash only, Clipper not accepted). The steepest cable car line.",
    estaciones_turisticas: ["cable-powell-market", "cable-nob-hill", "cable-hyde-beach"],
    estaciones: ["cable-powell-market", "cable-nob-hill", "cable-hyde-beach"],
    ruta_1_dia: {
      titulo: "Classic SF Cable Car Experience",
      paradas: [
        { estacion: "cable-powell-market", actividad: "Board at Powell turnaround — watch operators spin the car! (9:00 AM)" },
        { estacion: "cable-nob-hill", actividad: "Free Cable Car Museum & Grace Cathedral (9:20 AM)" },
        { estacion: "cable-hyde-beach", actividad: "Ghirardelli Square chocolate & Alcatraz views (9:40 AM)" }
      ],
      notas: "Powell-Hyde has the BEST views. Arrive before 9 AM to avoid 1+ hour lines. Stand on the running board for the full experience."
    }
  },
  {
    id: "Powell-Mason",
    color: "#8B4513",
    colorNombre: "Saddle Brown",
    sistema: "cable-car",
    inicio: "Powell & Market",
    fin: "Bay & Taylor (Fisherman's Wharf)",
    total: 3,
    municipios: ["San Francisco"],
    descripcion: "Powell-Mason Cable Car: Through Nob Hill and North Beach/Little Italy to Fisherman's Wharf. Shorter lines than Powell-Hyde. Access to Cable Car Museum and Italian restaurants. Fare: $8 USD (cash only).",
    estaciones_turisticas: ["cable-powell-market", "cable-nob-hill", "cable-bay-taylor"],
    estaciones: ["cable-powell-market", "cable-nob-hill", "cable-bay-taylor"],
    ruta_1_dia: {
      titulo: "Cable Car to Fisherman's Wharf via North Beach",
      paradas: [
        { estacion: "cable-powell-market", actividad: "Board at Powell turnaround (10:00 AM)" },
        { estacion: "cable-nob-hill", actividad: "Cable Car Museum (free!) & Nob Hill views (10:20 AM)" },
        { estacion: "cable-bay-taylor", actividad: "Fisherman's Wharf & Pier 39 sea lions (10:40 AM)" }
      ],
      notas: "Powell-Mason has shorter lines than Powell-Hyde. Walk through North Beach for Italian food on the way down."
    }
  },
  {
    id: "California",
    color: "#556B2F",
    colorNombre: "Olive",
    sistema: "cable-car",
    inicio: "California & Market",
    fin: "California & Van Ness",
    total: 2,
    municipios: ["San Francisco"],
    descripcion: "California Street Cable Car: The locals' cable car. Runs east-west along California Street through the Financial District to Nob Hill. Much shorter lines than Powell lines. Two-way operation. Fare: $8 USD (cash only).",
    estaciones_turisticas: ["cable-california-market", "cable-california-van-ness"],
    estaciones: ["cable-california-market", "cable-california-van-ness"],
    ruta_1_dia: {
      titulo: "California Street — The Locals' Cable Car",
      paradas: [
        { estacion: "cable-california-market", actividad: "Board at California & Market (any time)" },
        { estacion: "cable-california-van-ness", actividad: "Grace Cathedral & Nob Hill (16 min ride)" }
      ],
      notas: "California line is the least crowded cable car — no lines! Runs both directions. Great for photos of the Financial District hill."
    }
  }
];

export const lineasSFO = lineasSF;
