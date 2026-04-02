export const lineasBoston = [
  {
    id: "Red",
    color: "#DA291C",
    colorNombre: "Rojo",
    inicio: "Alewife",
    fin: "Braintree/Ashmont",
    total: 22,
    municipios: ["Cambridge", "Boston", "Quincy", "Braintree"],
    descripcion: "The Red Line is Boston's longest subway line, connecting Cambridge's academic institutions (Harvard, MIT) with downtown Boston and extending south to the suburbs. The line features notable branches at JFK/UMass serving both Ashmont and Braintree destinations, making it a crucial artery for commuters and tourists alike.",
    estaciones_turisticas: ["boston-park-street", "boston-harvard", "boston-kendall-mit", "boston-south-station", "boston-jfk-umass"],
    estaciones: ["boston-alewife", "boston-davis", "boston-porter", "boston-harvard", "boston-central", "boston-kendall-mit", "boston-charles-mgh", "boston-park-street", "boston-downtown-crossing", "boston-south-station", "boston-broadway", "boston-andrew", "boston-jfk-umass", "boston-savin-hill", "boston-fields-corner", "boston-shawmut", "boston-ashmont", "boston-north-quincy", "boston-wollaston", "boston-quincy-center", "boston-quincy-adams", "boston-braintree"],
    seo_title: "Red Line MBTA Boston — Harvard to Braintree | MetroGuia",
    meta_description: "Explore Boston's Red Line from Alewife to Braintree/Ashmont. Visit Harvard, MIT, Park Street, South Station, and downtown attractions. 22 stations spanning Cambridge, Boston, and Quincy.",
    ruta_1_dia: {
      titulo: "One-Day Red Line Journey: Cambridge to Downtown",
      paradas: [
        { estacion: "boston-harvard", actividad: "Start at Harvard Station, explore Harvard Square and the historic campus" },
        { estacion: "boston-kendall-mit", actividad: "Visit MIT campus and the Harvard Bridge with river views" },
        { estacion: "boston-charles-mgh", actividad: "Ascend to Charles Station, walk through Beacon Hill historic neighborhood" },
        { estacion: "boston-park-street", actividad: "Explore Boston Common, Public Garden, and Park Street Church" },
        { estacion: "boston-south-station", actividad: "Visit the historic Faneuil Hall/Quincy Market, end at waterfront" }
      ],
      notas: "Best for cultural exploration and historic Boston. Allow extra time at Park Street for the gardens and Common."
    }
  },

  {
    id: "Orange",
    color: "#ED8B00",
    colorNombre: "Naranja",
    inicio: "Oak Grove",
    fin: "Forest Hills",
    total: 20,
    municipios: ["Malden", "Medford", "Somerville", "Boston"],
    descripcion: "The Orange Line connects northern suburbs through downtown Boston to the southwest. Renovated in recent years with modern stations, it serves key neighborhoods and includes downtown transfer points, making it essential for cross-town travel and accessing Back Bay shopping districts.",
    estaciones_turisticas: ["boston-north-station", "boston-back-bay", "boston-state"],
    estaciones: ["boston-oak-grove", "boston-malden-center", "boston-wellington", "boston-assembly", "boston-sullivan-square", "boston-community-college", "boston-north-station", "boston-haymarket", "boston-state", "boston-downtown-crossing", "boston-chinatown", "boston-tufts-medical-center", "boston-back-bay", "boston-massachusetts-avenue", "boston-ruggles", "boston-roxbury-crossing", "boston-jackson-square", "boston-stony-brook", "boston-green-street", "boston-forest-hills"],
    seo_title: "Orange Line MBTA Boston — Oak Grove to Forest Hills | MetroGuia",
    meta_description: "Navigate Boston's Orange Line from Oak Grove to Forest Hills. Visit North Station, Back Bay, and downtown with 20 stations across Malden, Medford, Somerville, and Boston.",
    ruta_1_dia: {
      titulo: "One-Day Orange Line Adventure: North to South",
      paradas: [
        { estacion: "boston-north-station", actividad: "Begin at North Station, explore downtown waterfront and historic neighborhoods" },
        { estacion: "boston-state", actividad: "Visit the New England Aquarium and State Street historic sites" },
        { estacion: "boston-chinatown", actividad: "Lunch and explore Boston's vibrant Chinatown district" },
        { estacion: "boston-back-bay", actividad: "Shop along Newbury Street and visit Trinity Church" },
        { estacion: "boston-ruggles", actividad: "End near the Museum of Fine Arts complex" }
      ],
      notas: "Great for shopping and dining. Back Bay is ideal for afternoon exploration and cultural attractions."
    }
  },

  {
    id: "Blue",
    color: "#003DA5",
    colorNombre: "Azul",
    inicio: "Wonderland",
    fin: "Bowdoin",
    total: 12,
    municipios: ["Revere", "Boston"],
    descripcion: "The Blue Line is Boston's shortest rapid transit line, connecting northern Revere beaches with downtown Boston via the airport and waterfront. A critical link for travelers and beachgoers, featuring the iconic tunnel under the harbor and serving Logan Airport with direct transit access.",
    estaciones_turisticas: ["boston-aquarium", "boston-airport", "boston-wonderland", "boston-government-center"],
    estaciones: ["boston-wonderland", "boston-revere-beach", "boston-beachmont", "boston-suffolk-downs", "boston-orient-heights", "boston-wood-island", "boston-airport", "boston-maverick", "boston-aquarium", "boston-state", "boston-government-center", "boston-bowdoin"],
    seo_title: "Blue Line MBTA Boston — Wonderland to Bowdoin | MetroGuia",
    meta_description: "Take Boston's Blue Line from Wonderland to Bowdoin. Direct airport access, New England Aquarium, and harbor views. 12 stations connecting Revere and Boston.",
    ruta_1_dia: {
      titulo: "One-Day Blue Line: Beaches to Downtown",
      paradas: [
        { estacion: "boston-wonderland", actividad: "Start at Wonderland Park and adjacent Revere Beach State Reservation" },
        { estacion: "boston-airport", actividad: "Experience the airport journey and modern transit connection" },
        { estacion: "boston-aquarium", actividad: "Visit the New England Aquarium and harbor waterfront" },
        { estacion: "boston-government-center", actividad: "Explore City Hall and the Government Center complex" },
        { estacion: "boston-bowdoin", actividad: "Visit Bowdoin Square and nearby historic neighborhoods" }
      ],
      notas: "Excellent for first-time visitors using public transit from the airport. Harbor views are spectacular at sunset."
    }
  },

  {
    id: "Green",
    color: "#00843D",
    colorNombre: "Verde",
    inicio: "Medford/Tufts",
    fin: "Kenmore",
    total: 17,
    municipios: ["Medford", "Somerville", "Cambridge", "Boston"],
    descripcion: "The Green Line's trunk section connects the northern suburbs through Cambridge and downtown Boston to Kenmore. With historic streetcar heritage, the Green Line is the oldest light rail rapid transit line in the US. The trunk serves major cultural institutions and connects to four branches.",
    estaciones_turisticas: ["boston-park-street", "boston-government-center", "boston-copley", "boston-kenmore", "boston-hynes-convention-center"],
    estaciones: ["boston-medford-tufts", "boston-ball-square", "boston-magoun-square", "boston-gilman-square", "boston-east-somerville", "boston-union-square", "boston-lechmere", "boston-science-park", "boston-north-station", "boston-haymarket", "boston-government-center", "boston-park-street", "boston-boylston", "boston-arlington", "boston-copley", "boston-hynes-convention-center", "boston-kenmore"],
    seo_title: "Green Line MBTA Boston — Medford/Tufts to Kenmore | MetroGuia",
    meta_description: "Ride Boston's historic Green Line trunk from Medford/Tufts to Kenmore. Visit Park Street, Copley, and cultural institutions. 17 stations through Medford, Somerville, Cambridge, and Boston.",
    ruta_1_dia: {
      titulo: "One-Day Green Line: Historic Transit Experience",
      paradas: [
        { estacion: "boston-science-park", actividad: "Start at the Museum of Science and Charles River paths" },
        { estacion: "boston-park-street", actividad: "Explore Boston Common and Public Garden" },
        { estacion: "boston-copley", actividad: "Visit Copley Square, Trinity Church, and the public library" },
        { estacion: "boston-hynes-convention-center", actividad: "Shop Newbury Street and Back Bay cultural district" },
        { estacion: "boston-kenmore", actividad: "End near Fenway Park and Kenmore Square nightlife" }
      ],
      notas: "Best for art and culture lovers. The Green Line is Boston's most historic transit line with vintage charm."
    }
  },

  {
    id: "Green-B",
    color: "#00843D",
    colorNombre: "Verde B",
    inicio: "Kenmore",
    fin: "Boston College",
    total: 18,
    municipios: ["Boston", "Brookline"],
    descripcion: "The Green Line B branch extends from Kenmore westward through the Back Bay neighborhood and into Brookline, serving Brookline's historic residential areas and Boston College. The branch features iconic light rail heritage with streetcar-style vehicles on city streets.",
    estaciones_turisticas: ["boston-boston-college"],
    estaciones: ["boston-blandford-street", "boston-bu-east", "boston-bu-central", "boston-bu-west", "boston-st-paul-street-b", "boston-pleasant-street", "boston-babcock-street", "boston-packards-corner", "boston-harvard-avenue", "boston-griggs-street", "boston-allston-street", "boston-warren-street", "boston-washington-street-b", "boston-sutherland-road", "boston-chiswick-road", "boston-chestnut-hill-avenue", "boston-south-street", "boston-boston-college"],
    seo_title: "Green Line B Branch — Kenmore to Boston College | MetroGuia",
    meta_description: "Explore Green Line B from Kenmore to Boston College. Pass through BU campus and historic Brookline residential neighborhoods. 18 light rail stations.",
    ruta_1_dia: {
      titulo: "One-Day Green Line B: University to College",
      paradas: [
        { estacion: "boston-bu-central", actividad: "Start at Boston University campus and explore Commonwealth Avenue" },
        { estacion: "boston-babcock-street", actividad: "Browse local cafes and shops in the student neighborhood" },
        { estacion: "boston-packards-corner", actividad: "Visit the historic Packard's Corner intersection" },
        { estacion: "boston-coolidge-corner", actividad: "Explore Brookline's charming village shops and restaurants" },
        { estacion: "boston-boston-college", actividad: "Visit Boston College campus and Chestnut Hill area" }
      ],
      notas: "Perfect for students and academics. The B branch offers the most authentic light rail experience in Boston."
    }
  },

  {
    id: "Green-C",
    color: "#00843D",
    colorNombre: "Verde C",
    inicio: "Kenmore",
    fin: "Cleveland Circle",
    total: 13,
    municipios: ["Boston", "Brookline"],
    descripcion: "The Green Line C branch curves south from Kenmore through Brookline's residential streets to Cleveland Circle. A historic streetcar route featuring tree-lined neighborhoods, vintage light rail infrastructure, and charming Brookline commercial districts.",
    estaciones_turisticas: ["boston-coolidge-corner"],
    estaciones: ["boston-st-marys-street", "boston-hawes-street", "boston-kent-street", "boston-st-paul-street-c", "boston-coolidge-corner", "boston-summit-avenue", "boston-brandon-hall", "boston-fairbanks-street", "boston-washington-square", "boston-tappan-street", "boston-dean-road", "boston-englewood-avenue", "boston-cleveland-circle"],
    seo_title: "Green Line C Branch — Kenmore to Cleveland Circle | MetroGuia",
    meta_description: "Discover Green Line C from Kenmore to Cleveland Circle. Tree-lined Brookline neighborhoods, shops at Coolidge Corner. 13 light rail stations.",
    ruta_1_dia: {
      titulo: "One-Day Green Line C: Neighborhood Discovery",
      paradas: [
        { estacion: "boston-coolidge-corner", actividad: "Start at Coolidge Corner, the heart of Brookline village" },
        { estacion: "boston-brandon-hall", actividad: "Walk historic residential streets and neighborhood parks" },
        { estacion: "boston-washington-square", actividad: "Explore Brookline Village's independent shops" },
        { estacion: "boston-tappan-street", actividad: "Discover local cafes and historic architecture" },
        { estacion: "boston-cleveland-circle", actividad: "End at Cleveland Circle roundabout with local shops" }
      ],
      notas: "Ideal for experiencing authentic Boston neighborhoods away from downtown. Tree-lined streets are beautiful year-round."
    }
  },

  {
    id: "Green-D",
    color: "#00843D",
    colorNombre: "Verde D",
    inicio: "Kenmore",
    fin: "Riverside",
    total: 13,
    municipios: ["Boston", "Brookline", "Newton"],
    descripcion: "The Green Line D branch curves south and west from Kenmore, serving the Longwood Medical Area and extending through Brookline into Newton residential suburbs. A key connection for medical professionals and a scenic route through tree-covered neighborhoods.",
    estaciones_turisticas: ["boston-fenway", "boston-longwood"],
    estaciones: ["boston-fenway", "boston-longwood", "boston-brookline-village", "boston-brookline-hills", "boston-beaconsfield", "boston-reservoir", "boston-chestnut-hill", "boston-newton-centre", "boston-newton-highlands", "boston-eliot", "boston-waban", "boston-woodland", "boston-riverside"],
    seo_title: "Green Line D Branch — Kenmore to Riverside | MetroGuia",
    meta_description: "Ride Green Line D from Kenmore to Riverside through Fenway, Longwood Medical Area, and Newton. 13 stations with suburban scenery.",
    ruta_1_dia: {
      titulo: "One-Day Green Line D: Medical District to Suburbs",
      paradas: [
        { estacion: "boston-fenway", actividad: "Start near Fenway Park and explore the historic ballpark area" },
        { estacion: "boston-longwood", actividad: "Visit the Longwood Medical Area and Harvard Medical institutions" },
        { estacion: "boston-brookline-village", actividad: "Browse historic Brookline Village shops and restaurants" },
        { estacion: "boston-chestnut-hill", actividad: "Explore the upscale Chestnut Hill shopping district" },
        { estacion: "boston-riverside", actividad: "End at the tree-lined Riverside area with local charm" }
      ],
      notas: "Great for peaceful suburban exploration. The Longwood area is perfect for medical professionals and students."
    }
  },

  {
    id: "Green-E",
    color: "#00843D",
    colorNombre: "Verde E",
    inicio: "Copley",
    fin: "Heath Street",
    total: 11,
    municipios: ["Boston"],
    descripcion: "The Green Line E branch branches from Copley southward through the Longwood Medical Area with a dedicated tunnel section, serving major healthcare institutions, cultural museums, and the Mission Hill neighborhood. A vital connector for medical staff and museum visitors.",
    estaciones_turisticas: ["boston-prudential", "boston-symphony", "boston-museum-of-fine-arts"],
    estaciones: ["boston-prudential", "boston-symphony", "boston-northeastern", "boston-museum-of-fine-arts", "boston-longwood-medical-area", "boston-brigham-circle", "boston-fenwood-road", "boston-mission-park", "boston-riverway", "boston-back-of-the-hill", "boston-heath-street"],
    seo_title: "Green Line E Branch — Copley to Heath Street | MetroGuia",
    meta_description: "Explore Green Line E from Copley through Longwood Medical Area to Heath Street. Museums, medical institutions, and cultural attractions. 11 stations.",
    ruta_1_dia: {
      titulo: "One-Day Green Line E: Culture and Medicine",
      paradas: [
        { estacion: "boston-prudential", actividad: "Start at Prudential Center for shopping and skyline views" },
        { estacion: "boston-symphony", actividad: "Visit Symphony Hall and cultural performance venues" },
        { estacion: "boston-museum-of-fine-arts", actividad: "Explore the renowned Museum of Fine Arts Boston" },
        { estacion: "boston-longwood-medical-area", actividad: "Tour the Longwood Medical Area and research institutions" },
        { estacion: "boston-heath-street", actividad: "End in the historic Mission Hill neighborhood" }
      ],
      notas: "Perfect for art and culture enthusiasts. The Museum of Fine Arts is one of Boston's premier attractions."
    }
  },

  {
    id: "Silver",
    color: "#7C878E",
    colorNombre: "Plateado",
    inicio: "South Station",
    fin: "Airport/Chelsea/Nubian",
    total: 10,
    municipios: ["Boston", "Chelsea"],
    descripcion: "The Silver Line is Boston's newest rapid transit service, connecting South Station to Logan Airport with bus rapid transit to other corridors. Featuring grade-separated sections in the downtown tunnel and modern articulated vehicles, it provides dedicated transit for airport travelers and downtown connectivity.",
    estaciones_turisticas: ["boston-world-trade-center", "boston-courthouse"],
    estaciones: ["boston-south-station", "boston-courthouse", "boston-world-trade-center", "boston-silver-line-way", "boston-silver-airport", "boston-chelsea", "boston-eastern-avenue", "boston-box-district", "boston-bellingham-square", "boston-nubian"],
    seo_title: "Silver Line MBTA Boston — South Station to Airport | MetroGuia",
    meta_description: "Take the Silver Line from South Station directly to Logan Airport. Modern bus rapid transit through downtown Boston, Chelsea, and beyond. 10 stations.",
    ruta_1_dia: {
      titulo: "One-Day Silver Line: Downtown to Airport Connection",
      paradas: [
        { estacion: "boston-south-station", actividad: "Begin at South Station and explore downtown waterfront" },
        { estacion: "boston-courthouse", actividad: "Visit the iconic Harborwalk and historic courthouse area" },
        { estacion: "boston-world-trade-center", actividad: "Explore the Boston Convention and Exhibition Center" },
        { estacion: "boston-silver-airport", actividad: "Experience the modern airport transit terminal" },
        { estacion: "boston-nubian", actividad: "Discover the diverse Nubian Square cultural district" }
      ],
      notas: "Essential for airport access via public transit. The modern facilities and dedicated lanes ensure reliable service."
    }
  },

  {
    id: "Mattapan",
    color: "#DA291C",
    colorNombre: "Rojo (Heritage)",
    inicio: "Ashmont",
    fin: "Mattapan",
    total: 8,
    municipios: ["Boston", "Milton"],
    descripcion: "The Mattapan Trolley is a historic light rail branch extending from the Red Line's Ashmont Station through the Milton/Mattapan neighborhood. Operating with vintage 1944 PCC streetcars, it's the oldest continuously operated light rail line in the United States, providing charming local transit with nostalgic heritage appeal.",
    estaciones_turisticas: [],
    estaciones: ["boston-ashmont", "boston-cedar-grove", "boston-butler", "boston-milton", "boston-central-avenue", "boston-valley-road", "boston-capen-street", "boston-mattapan"],
    seo_title: "Mattapan Trolley — Boston's Historic Light Rail Line | MetroGuia",
    meta_description: "Ride the historic Mattapan Trolley with vintage 1944 streetcars from Ashmont to Mattapan. Oldest continuously operated light rail in the US. 8 stations.",
    ruta_1_dia: {
      titulo: "One-Day Mattapan Trolley: Historic Transit Experience",
      paradas: [
        { estacion: "boston-ashmont", actividad: "Start at Ashmont Station and explore the neighborhood" },
        { estacion: "boston-cedar-grove", actividad: "Experience the historic Cedar Grove Station" },
        { estacion: "boston-butler", actividad: "Visit Butler Station and surrounding residential areas" },
        { estacion: "boston-valley-road", actividad: "Walk through the tree-covered Valley Road area" },
        { estacion: "boston-mattapan", actividad: "End at Mattapan Station and explore local community" }
      ],
      notas: "A living museum of transit history. The vintage streetcars are unique to Boston and beloved by transit enthusiasts."
    }
  },

  {
    id: "Commuter-Rail",
    color: "#80276C",
    colorNombre: "Morado",
    inicio: "North/South Stations",
    fin: "Regional Network",
    total: 25,
    municipios: ["Boston", "Cambridge", "Worcester", "Providence", "Lowell", "Newburyport", "Foxboro", "Plymouth", "Greenbush", "Framingham", "Natick", "Wellesley"],
    descripcion: "The MBTA Commuter Rail network extends Boston's transit reach across New England with 14 lines radiating from North and South Stations. Serving suburban communities, regional destinations, and connecting to Providence Airport, the Commuter Rail is vital for long-distance regional travel with frequent peak-hour service.",
    estaciones_turisticas: ["boston-foxboro", "boston-salem", "boston-providence", "boston-worcester"],
    estaciones: ["boston-north-station", "boston-south-station", "boston-cr-back-bay", "boston-cr-porter", "boston-worcester", "boston-framingham", "boston-natick", "boston-wellesley", "boston-providence", "boston-tf-green-airport", "boston-foxboro", "boston-salem", "boston-gloucester", "boston-rockport", "boston-lowell", "boston-haverhill", "boston-newburyport", "boston-brockton", "boston-plymouth", "boston-kingston", "boston-needham-heights", "boston-forge-park", "boston-wachusett", "boston-middleborough", "boston-greenbush"],
    seo_title: "MBTA Commuter Rail Boston — Regional Network | MetroGuia",
    meta_description: "Explore Boston's Commuter Rail network — 14 lines from North/South Stations to Worcester, Providence, Lowell, and beyond. 25 major stations across New England.",
    ruta_1_dia: {
      titulo: "One-Day Commuter Rail: Salem Witch Trials Day Trip",
      paradas: [
        { estacion: "boston-north-station", actividad: "Depart from North Station in downtown Boston" },
        { estacion: "boston-salem", actividad: "Explore Salem's historic Witch Trial sites and museums" },
        { estacion: "boston-rockport", actividad: "Visit the scenic coastal village of Rockport" },
        { estacion: "boston-gloucester", actividad: "Explore Gloucester's maritime heritage and fishing docks" },
        { estacion: "boston-north-station", actividad: "Return to North Station after regional exploration" }
      ],
      notas: "Perfect for exploring New England history and coastal towns. Weekend schedules vary; check before traveling."
    }
  }
];
