export const lineasDetalleDC = [
  {
    id: "red",
    color: "#BF0D3E",
    colorNombre: "Red",
    inicio: "Shady Grove",
    fin: "Glenmont",
    total: 27,
    municipios: ["Rockville", "Bethesda", "Washington DC", "Silver Spring"],
    descripcion: "Red Line runs north-south through Washington DC from Shady Grove, Maryland to Glenmont, Maryland. Serves Montgomery County, passing through Bethesda, Dupont Circle, Metro Center, Union Station, and the National Zoo. Longest WMATA line at 38 km with 27 stations. Operates Mon-Thu 5AM-11:30PM, Fri 5AM-1AM, Sat 7AM-1AM, Sun 7AM-11:30PM. Trains every 6-12 minutes peak, 12-20 off-peak.",
    estaciones_turisticas: ["metro-dupont-circle", "metro-union-station", "metro-woodley-park", "metro-metro-center", "metro-gallery-place"],
    estaciones: [
      "metro-shady-grove", "metro-rockville", "metro-twinbrook", "metro-white-flint",
      "metro-grosvenor", "metro-medical-center", "metro-bethesda", "metro-friendship-heights",
      "metro-tenleytown", "metro-van-ness-udc", "metro-cleveland-park", "metro-woodley-park",
      "metro-dupont-circle", "metro-farragut-north", "metro-metro-center", "metro-gallery-place",
      "metro-judiciary-square", "metro-union-station", "metro-noma", "metro-rhode-island-ave",
      "metro-brookland-cua", "metro-fort-totten", "metro-takoma", "metro-silver-spring",
      "metro-forest-glen", "metro-wheaton", "metro-glenmont"
    ],
    ruta_1_dia: {
      titulo: "One-Day Red Line Tour: Monuments, Museums & Neighborhoods",
      paradas: [
        { estacion: "metro-union-station", actividad: "Start at Union Station. Grand Beaux-Arts architecture, shops, restaurants (9:00 AM)" },
        { estacion: "metro-judiciary-square", actividad: "National Law Enforcement Museum, National Building Museum (10:00 AM)" },
        { estacion: "metro-gallery-place", actividad: "Chinatown, Capital One Arena, National Portrait Gallery (11:00 AM)" },
        { estacion: "metro-metro-center", actividad: "Downtown shopping, transfer hub, National Press Club (12:30 PM)" },
        { estacion: "metro-dupont-circle", actividad: "Embassy Row, Phillips Collection, vibrant cafes and nightlife (2:00 PM)" },
        { estacion: "metro-woodley-park", actividad: "National Zoo (free!), Rock Creek Park, Adams Morgan walk (3:30 PM)" },
        { estacion: "metro-bethesda", actividad: "Bethesda Row dining, Montgomery County arts scene (5:30 PM)" }
      ]
    },
    seo_title: "WMATA Red Line — Shady Grove to Glenmont, 27 Stations | MetroGuia",
    meta_description: "Red Line Washington DC Metro. 27 stations from Shady Grove to Glenmont. Serves Union Station, Dupont Circle, National Zoo. Every 6-12 min.",
    h1: "Red Line — WMATA Metro | Washington D.C."
  },
  {
    id: "blue",
    color: "#009CDE",
    colorNombre: "Blue",
    inicio: "Franconia-Springfield",
    fin: "Largo Town Center",
    total: 27,
    municipios: ["Springfield", "Alexandria", "Arlington", "Washington DC", "Largo"],
    descripcion: "Blue Line runs from Franconia-Springfield in Virginia through Arlington and Washington DC to Largo, Maryland. Serves Reagan National Airport, Pentagon, and Arlington National Cemetery. Major transfer at Metro Center. 46 km with 27 stations.",
    estaciones_turisticas: ["metro-arlington-cemetery", "metro-reagan-airport", "metro-pentagon", "metro-smithsonian", "metro-capitol-south"],
    estaciones: [
      "metro-franconia-springfield", "metro-van-dorn", "metro-king-street",
      "metro-braddock-road", "metro-reagan-airport", "metro-crystal-city",
      "metro-pentagon-city", "metro-pentagon", "metro-arlington-cemetery",
      "metro-rosslyn", "metro-foggy-bottom", "metro-farragut-west",
      "metro-mcpherson-square", "metro-metro-center", "metro-federal-triangle",
      "metro-smithsonian", "metro-lenfant-plaza", "metro-federal-center-sw",
      "metro-capitol-south", "metro-eastern-market", "metro-potomac-ave",
      "metro-stadium-armory", "metro-benning-road", "metro-capitol-heights",
      "metro-addison-road", "metro-morgan-blvd", "metro-largo-town-center"
    ],
    ruta_1_dia: {
      titulo: "One-Day Blue Line Tour: Monuments, Military & Airport Access",
      paradas: [
        { estacion: "metro-arlington-cemetery", actividad: "Arlington National Cemetery. JFK memorial, Tomb of Unknown Soldier (9:00 AM)" },
        { estacion: "metro-pentagon", actividad: "Pentagon Memorial, world's largest office building (11:00 AM)" },
        { estacion: "metro-smithsonian", actividad: "National Mall: Air & Space, Natural History, American History museums (12:00 PM)" },
        { estacion: "metro-capitol-south", actividad: "US Capitol, Library of Congress, Supreme Court (2:30 PM)" },
        { estacion: "metro-eastern-market", actividad: "Capitol Hill neighborhood, Eastern Market food hall (4:00 PM)" }
      ]
    },
    seo_title: "WMATA Blue Line — Franconia-Springfield to Largo, 27 Stations | MetroGuia",
    meta_description: "Blue Line DC Metro. 27 stations, Reagan Airport, Pentagon, Arlington Cemetery, National Mall. Every 6-12 min peak hours.",
    h1: "Blue Line — WMATA Metro | Washington D.C."
  },
  {
    id: "orange",
    color: "#ED8B00",
    colorNombre: "Orange",
    inicio: "Vienna",
    fin: "New Carrollton",
    total: 26,
    municipios: ["Vienna", "Falls Church", "Arlington", "Washington DC", "New Carrollton"],
    descripcion: "Orange Line runs from Vienna, Virginia through Arlington to New Carrollton, Maryland. Serves Rosslyn, Ballston, Foggy Bottom near George Washington University, and Federal Triangle. 45 km with 26 stations.",
    estaciones_turisticas: ["metro-rosslyn", "metro-foggy-bottom", "metro-federal-triangle", "metro-gallery-place"],
    estaciones: [
      "metro-vienna", "metro-dunn-loring", "metro-west-falls-church",
      "metro-east-falls-church", "metro-ballston", "metro-virginia-square",
      "metro-clarendon", "metro-court-house", "metro-rosslyn",
      "metro-foggy-bottom", "metro-farragut-west", "metro-mcpherson-square",
      "metro-metro-center", "metro-federal-triangle", "metro-smithsonian",
      "metro-lenfant-plaza", "metro-federal-center-sw", "metro-capitol-south",
      "metro-eastern-market", "metro-potomac-ave", "metro-stadium-armory",
      "metro-minnesota-ave", "metro-deanwood", "metro-cheverly",
      "metro-landover", "metro-new-carrollton"
    ],
    seo_title: "WMATA Orange Line — Vienna to New Carrollton, 26 Stations | MetroGuia",
    meta_description: "Orange Line DC Metro. 26 stations from Vienna to New Carrollton. Serves Ballston, Rosslyn, Foggy Bottom, Federal Triangle.",
    h1: "Orange Line — WMATA Metro | Washington D.C."
  },
  {
    id: "silver",
    color: "#A2A4A1",
    colorNombre: "Silver",
    inicio: "Ashburn",
    fin: "Largo Town Center",
    total: 28,
    municipios: ["Ashburn", "Reston", "Tysons", "Arlington", "Washington DC", "Largo"],
    descripcion: "Silver Line extends from Ashburn/Dulles in Loudoun County to Largo Town Center, Maryland. Newest WMATA line, providing direct access to Dulles International Airport, Reston Town Center, and Tysons Corner. 48 km with 28 stations.",
    estaciones_turisticas: ["metro-dulles-airport", "metro-reston-town-center", "metro-tysons-corner"],
    estaciones: [
      "metro-ashburn", "metro-loudoun-gateway", "metro-dulles-airport",
      "metro-innovation-center", "metro-herndon", "metro-reston-town-center",
      "metro-wiehle-reston-east", "metro-spring-hill", "metro-greensboro",
      "metro-tysons-corner", "metro-mclean", "metro-east-falls-church",
      "metro-ballston", "metro-virginia-square", "metro-clarendon",
      "metro-court-house", "metro-rosslyn", "metro-foggy-bottom",
      "metro-farragut-west", "metro-mcpherson-square", "metro-metro-center",
      "metro-federal-triangle", "metro-smithsonian", "metro-lenfant-plaza",
      "metro-federal-center-sw", "metro-capitol-south", "metro-eastern-market",
      "metro-largo-town-center"
    ],
    seo_title: "WMATA Silver Line — Ashburn/Dulles to Largo, 28 Stations | MetroGuia",
    meta_description: "Silver Line DC Metro. 28 stations, Dulles Airport access, Reston, Tysons Corner. Newest line. Every 6-12 min peak.",
    h1: "Silver Line — WMATA Metro | Washington D.C."
  },
  {
    id: "green",
    color: "#00B140",
    colorNombre: "Green",
    inicio: "Branch Avenue",
    fin: "Greenbelt",
    total: 21,
    municipios: ["Branch Avenue", "Anacostia", "Washington DC", "College Park", "Greenbelt"],
    descripcion: "Green Line runs from Branch Avenue in Maryland through Southeast DC to Greenbelt. Serves U Street Corridor, Howard University, Columbia Heights, and Fort Totten. 35 km with 21 stations.",
    estaciones_turisticas: ["metro-u-street", "metro-columbia-heights", "metro-navy-yard"],
    estaciones: [
      "metro-branch-avenue", "metro-suitland", "metro-naylor-road",
      "metro-southern-avenue", "metro-congress-heights", "metro-anacostia",
      "metro-navy-yard", "metro-waterfront", "metro-lenfant-plaza",
      "metro-archives", "metro-gallery-place", "metro-mt-vernon-sq",
      "metro-shaw-howard", "metro-u-street", "metro-columbia-heights",
      "metro-georgia-ave-petworth", "metro-fort-totten", "metro-west-hyattsville",
      "metro-prince-georges-plaza", "metro-college-park", "metro-greenbelt"
    ],
    ruta_1_dia: {
      titulo: "One-Day Green Line Tour: Culture, History & Nightlife",
      paradas: [
        { estacion: "metro-navy-yard", actividad: "The Wharf waterfront, Nationals Park, seafood restaurants (10:00 AM)" },
        { estacion: "metro-archives", actividad: "National Archives — see Declaration of Independence, Constitution (11:30 AM)" },
        { estacion: "metro-gallery-place", actividad: "Chinatown, Portrait Gallery, Capital One Arena (1:00 PM)" },
        { estacion: "metro-u-street", actividad: "U Street Corridor, Ben's Chili Bowl, jazz clubs, mural walk (3:00 PM)" },
        { estacion: "metro-columbia-heights", actividad: "Diverse dining, Target, DCUSA shopping, Meridian Hill Park (5:00 PM)" }
      ]
    },
    seo_title: "WMATA Green Line — Branch Avenue to Greenbelt, 21 Stations | MetroGuia",
    meta_description: "Green Line DC Metro. 21 stations. U Street, Howard University, Navy Yard, National Archives. Every 6-12 min peak.",
    h1: "Green Line — WMATA Metro | Washington D.C."
  },
  {
    id: "yellow",
    color: "#FFD100",
    colorNombre: "Yellow",
    inicio: "Huntington",
    fin: "Mt Vernon Sq",
    total: 17,
    municipios: ["Alexandria", "Arlington", "Washington DC"],
    descripcion: "Yellow Line connects Huntington in Alexandria through Reagan National Airport to Gallery Place and Mt Vernon Square. Serves Old Town Alexandria, Pentagon, and crosses the Potomac. 28 km with 17 stations.",
    estaciones_turisticas: ["metro-reagan-airport", "metro-king-street", "metro-gallery-place"],
    estaciones: [
      "metro-huntington", "metro-eisenhower-ave", "metro-king-street",
      "metro-braddock-road", "metro-reagan-airport", "metro-crystal-city",
      "metro-pentagon-city", "metro-pentagon", "metro-lenfant-plaza",
      "metro-archives", "metro-gallery-place", "metro-mt-vernon-sq",
      "metro-shaw-howard", "metro-u-street", "metro-columbia-heights",
      "metro-georgia-ave-petworth", "metro-fort-totten"
    ],
    seo_title: "WMATA Yellow Line — Huntington to Mt Vernon Sq, 17 Stations | MetroGuia",
    meta_description: "Yellow Line DC Metro. 17 stations. Reagan Airport, Pentagon, Old Town Alexandria, Gallery Place. Every 6-12 min peak.",
    h1: "Yellow Line — WMATA Metro | Washington D.C."
  }
];
