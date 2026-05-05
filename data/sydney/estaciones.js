export const estacionesSydney = [
  // ===== METRO CITY & SOUTHWEST =====
  {
    slug: "sydney-central",
    nombre: "Central",
    linea: ["CityMetro"],
    sistema: "metro",
    municipio: "Sydney CBD",
    pois: [
      { nombre: "Central Station (heritage)", tipo: "arquitectura", distancia: "0 metros" },
      { nombre: "Powerhouse Museum (Ultimo)", tipo: "cultura", distancia: "700 metros" },
      { nombre: "Chinatown", tipo: "gastronomia", distancia: "300 metros" }
    ],
    transferencias: ["Metro City & Southwest", "Sydney Trains (all lines)", "Light Rail"],
    seo_title: "Central — Sydney Metro | MetroGuia",
    meta_description: "Central Station Sydney Metro: CBD hub connecting Metro, all train lines, light rail. Near Chinatown, Powerhouse Museum.",
    h1: "Central Station — Sydney Metro",
    intro: "Sydney's grand central: the heritage sandstone station that connects all of the city's rail networks.",
    tips: ["Central Station's heritage sandstone exterior (1906) is worth photographing.", "The new Sydney Metro tunnels sit below the existing heritage station.", "Chinatown and Haymarket are 5 minutes walk — excellent for budget dining."],
    descripcion_turistica: "Central Station is Sydney's primary railway hub, serving the Metro City & Southwest line alongside all Sydney Trains suburban and intercity services. The imposing sandstone building dates to 1906 and is one of Sydney's finest heritage structures. The station sits at the southern edge of the CBD, with convenient access to Chinatown, the entertainment precinct, Paddy's Markets, and the University of Sydney. The new Metro tunnels were built beneath the existing heritage platforms.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Heritage station has been retrofitted with modern accessibility features." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Trains 5am to midnight. Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Chinatown", tipo: "Gastronomia", distancia: "300 metros", descripcion: "Sydney's vibrant Chinatown centered on Dixon Street." },
      { nombre: "Powerhouse Museum", tipo: "Cultura", distancia: "700 metros", descripcion: "Science and design museum in a historic tram depot." }
    ]
  },
  {
    slug: "sydney-martin-place",
    nombre: "Martin Place",
    linea: ["CityMetro"],
    sistema: "metro",
    municipio: "Sydney CBD",
    pois: [
      { nombre: "Martin Place Amphitheatre", tipo: "turismo", distancia: "0 metros" },
      { nombre: "State Library of NSW", tipo: "cultura", distancia: "400 metros" },
      { nombre: "Hyde Park", tipo: "parque", distancia: "200 metros" }
    ],
    transferencias: ["Metro City & Southwest", "Sydney Trains"],
    seo_title: "Martin Place — Sydney Metro | MetroGuia",
    meta_description: "Martin Place Sydney Metro: CBD heart, free concerts amphitheatre, State Library, Hyde Park, Macquarie Street heritage.",
    h1: "Martin Place Station — Sydney Metro",
    intro: "The heart of Sydney CBD: the pedestrianized plaza that hosts everything from free concerts to the Cenotaph.",
    tips: ["Free lunchtime concerts happen in the Martin Place amphitheatre most weekdays.", "The State Library of NSW has beautiful reading rooms and is free to enter.", "Macquarie Street to the east has Sydney's finest collection of colonial-era buildings."],
    descripcion_turistica: "Martin Place is Sydney's civic heart — a pedestrianized plaza running between Pitt and Macquarie Streets, lined with grand banking institutions and government buildings. The Cenotaph war memorial is the focal point for Anzac Day commemorations. The plaza has a sunken amphitheatre that hosts free lunchtime performances. Macquarie Street to the east forms Australia's finest heritage streetscape with the State Library, NSW Parliament, Sydney Hospital, and Hyde Park Barracks (UNESCO World Heritage Site).",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Brand new Metro station, fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Hyde Park Barracks", tipo: "Historia", distancia: "400 metros", descripcion: "UNESCO World Heritage Site — former convict barracks, now museum." },
      { nombre: "State Library of NSW", tipo: "Cultura", distancia: "400 metros", descripcion: "Free stunning reading rooms and historic exhibitions." }
    ]
  },
  {
    slug: "sydney-barangaroo",
    nombre: "Barangaroo",
    linea: ["CityMetro"],
    sistema: "metro",
    municipio: "Barangaroo",
    pois: [
      { nombre: "Barangaroo Reserve", tipo: "parque", distancia: "0 metros" },
      { nombre: "Sydney Harbour views", tipo: "turismo", distancia: "0 metros" },
      { nombre: "Crown Sydney", tipo: "hotel", distancia: "200 metros" }
    ],
    transferencias: ["Metro City & Southwest", "Ferry"],
    seo_title: "Barangaroo — Sydney Metro | MetroGuia",
    meta_description: "Barangaroo Sydney Metro: harbourfront regeneration precinct. Barangaroo Reserve, Crown Sydney, harbour walks.",
    h1: "Barangaroo Station — Sydney Metro",
    intro: "Sydney's newest waterfront: restored headland, harbourfront dining, and dazzling harbour views.",
    tips: ["Barangaroo Reserve has free parkland with views of the harbour bridge and opera house — excellent picnic spot.", "The walk from Barangaroo to Walsh Bay takes 20 minutes along the waterfront.", "Ferry connections at Barangaroo wharf go to Manly, Parramatta, and Darling Harbour."],
    descripcion_turistica: "Barangaroo is Sydney's most significant urban renewal project — a 22-hectare former container terminal transformed into a world-class mixed precinct. The Barangaroo Reserve at the northern tip recreates the area's pre-colonial headland with native vegetation and sandstone terraces, offering some of Sydney's best free views across the Harbour Bridge. The central precinct houses restaurants, bars, and the Crown Sydney integrated resort in the distinctive tower.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "New station, fully accessible. Accessible waterfront paths." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Barangaroo Reserve", tipo: "Parque", distancia: "0 metros", descripcion: "Restored indigenous headland with harbour views." },
      { nombre: "Darling Harbour", tipo: "Turismo", distancia: "600 metros", descripcion: "Entertainment and museum precinct on the waterfront." }
    ]
  },
  {
    slug: "sydney-waterloo",
    nombre: "Waterloo",
    linea: ["CityMetro"],
    sistema: "metro",
    municipio: "Waterloo",
    pois: [
      { nombre: "Bourke Street art precinct", tipo: "cultura", distancia: "400 metros" },
      { nombre: "Green Square", tipo: "arquitectura", distancia: "800 metros" }
    ],
    transferencias: ["Metro City & Southwest"],
    seo_title: "Waterloo — Sydney Metro | MetroGuia",
    meta_description: "Waterloo Sydney Metro: emerging inner-city suburb with cafes, art spaces, and proximity to Sydney Park.",
    h1: "Waterloo Station — Sydney Metro",
    intro: "Sydney's rising inner-south: art studios, specialty coffee, and urban renewal in action.",
    tips: ["The area around Botany Road has good vintage and thrift stores.", "Sydney Park (500m) is one of Sydney's best urban parks with wetlands and cycling trails.", "Great coffee culture in the surrounding streets — part of Sydney's third-wave cafe scene."],
    descripcion_turistica: "Waterloo station serves an inner-south suburb undergoing significant urban renewal. The area has strong creative industry roots and a growing food and coffee scene. Nearby Redfern has become one of Sydney's most dynamic neighborhoods with acclaimed restaurants, bars, and community spaces. The broader green Square precinct to the south is one of Australia's largest urban renewal zones.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "New station, fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Sydney Park", tipo: "Parque", distancia: "600 metros", descripcion: "Wetlands and cycling trails in restored former brickworks." }
    ]
  },
  // ===== METRO NORTHWEST =====
  {
    slug: "sydney-chatswood",
    nombre: "Chatswood",
    linea: ["CityMetro"],
    sistema: "metro",
    municipio: "Chatswood",
    pois: [
      { nombre: "Chatswood Chase Mall", tipo: "comercio", distancia: "100 metros" },
      { nombre: "Westfield Chatswood", tipo: "comercio", distancia: "0 metros" }
    ],
    transferencias: ["Metro City & Southwest", "Sydney Trains North Shore Line"],
    seo_title: "Chatswood — Sydney Metro | MetroGuia",
    meta_description: "Chatswood Sydney Metro: major shopping hub on North Shore. Chatswood Chase, Westfield. Metro and train interchange.",
    h1: "Chatswood Station — Sydney Metro",
    intro: "The North Shore's commercial hub: major malls, Asian cuisine, and metro-train interchange.",
    tips: ["Chatswood has an excellent concentration of Asian restaurants particularly on Victoria Avenue.", "Chatswood Chase mall is directly adjacent to the station — good for electronics and fashion.", "The Metro here connects seamlessly to Sydney Trains for broader network access."],
    descripcion_turistica: "Chatswood is the North Shore's major commercial center and an important interchange between the Metro City & Southwest line and Sydney Trains' North Shore Line. The area has a vibrant East Asian community and excellent diversity of dining options. Two major shopping centers — Chatswood Chase and Westfield Chatswood — serve the area.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Level interchange with Sydney Trains." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Victoria Avenue", tipo: "Gastronomia", distancia: "200 metros", descripcion: "Restaurant strip with excellent Asian cuisine." }
    ]
  },
  {
    slug: "sydney-epping",
    nombre: "Epping",
    linea: ["NorthwestMetro", "CityMetro"],
    sistema: "metro",
    municipio: "Epping",
    pois: [
      { nombre: "Epping Town Centre", tipo: "comercio", distancia: "100 metros" }
    ],
    transferencias: ["Metro Northwest", "Metro City & Southwest", "Sydney Trains"],
    seo_title: "Epping — Sydney Metro | MetroGuia",
    meta_description: "Epping Sydney Metro: major interchange between Metro Northwest and Metro City & Southwest lines. Gateway to Hills District.",
    h1: "Epping Station — Sydney Metro",
    intro: "The critical metro junction: where Northwest meets City, connecting Sydney's newest suburbs to the CBD.",
    tips: ["This is where the two Metro lines join — for trips from Rouse Hill to the city, change here.", "Epping has good Korean dining options in the town centre.", "Sydney Trains also serve this station for additional network access."],
    descripcion_turistica: "Epping is the key interchange station where the Metro Northwest line (serving Rouse Hill and the Hills District) connects to the Metro City & Southwest line (serving the CBD, Barangaroo, and southwestern suburbs). This makes it one of the most strategically important stations in the Sydney Metro network. The surrounding suburb is a growing residential area with a diverse community.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 3-way interchange." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Epping Town Centre", tipo: "Comercio", distancia: "100 metros", descripcion: "Local shopping centre with cafes and restaurants." }
    ]
  },
  {
    slug: "sydney-rouse-hill",
    nombre: "Rouse Hill",
    linea: ["NorthwestMetro"],
    sistema: "metro",
    municipio: "Rouse Hill",
    pois: [
      { nombre: "Rouse Hill Town Centre", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Rouse Hill Regional Park", tipo: "parque", distancia: "1 km" }
    ],
    transferencias: ["Metro Northwest"],
    seo_title: "Rouse Hill — Sydney Metro | MetroGuia",
    meta_description: "Rouse Hill Sydney Metro Northwest: town centre terminus in Sydney's northwest growth corridor. Direct to CBD in 35 minutes.",
    h1: "Rouse Hill Station — Sydney Metro",
    intro: "The northwest growth hub: a planned town centre connected to the CBD by metro in 35 minutes.",
    tips: ["The Rouse Hill Town Centre is built as a traditional main street — uncovered and walkable.", "The metro has dramatically cut commute times for the Hills District.", "Rouse Hill Regional Park has extensive walking tracks through bushland."],
    descripcion_turistica: "Rouse Hill is one of the key stations in Sydney's northwest growth corridor — an area that has grown rapidly from rural land to established suburbs over the past two decades. The Metro has been transformative for the Hills District, connecting residents directly to the CBD without the need for car travel. Rouse Hill Town Centre is a planned retail and community hub built around the station.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "New station, fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Rouse Hill Regional Park", tipo: "Parque", distancia: "1 km", descripcion: "Bushland park with walking trails." }
    ]
  },
  {
    slug: "sydney-tallawong",
    nombre: "Tallawong",
    linea: ["NorthwestMetro"],
    sistema: "metro",
    municipio: "Rouse Hill",
    pois: [
      { nombre: "Tallawong Bus Interchange", tipo: "transporte", distancia: "0 metros" }
    ],
    transferencias: ["Metro Northwest", "Bus interchange"],
    seo_title: "Tallawong — Sydney Metro | MetroGuia",
    meta_description: "Tallawong Sydney Metro Northwest: northern terminus with major bus interchange serving Sydney's outer northwest suburbs.",
    h1: "Tallawong Station — Sydney Metro",
    intro: "The northern terminus: where Metro meets the bus network for Sydney's outermost northwest.",
    tips: ["Major bus interchange here connects to suburbs without direct Metro access.", "The surrounding area is rapidly developing — new residential estates nearby.", "Direct metro to Martin Place in the CBD takes approximately 40 minutes."],
    descripcion_turistica: "Tallawong is the current northern terminus of the Metro Northwest line, functioning primarily as a major bus-rail interchange serving the outer northwest suburbs of Sydney. The station is at the centre of significant new residential development in one of Sydney's fastest-growing corridors. Future Metro extensions may extend beyond Tallawong as the city continues to grow westward.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible with bus interchange." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Tallawong Bus Interchange", tipo: "Transporte", distancia: "0 metros", descripcion: "Major bus hub serving outer northwest suburbs." }
    ]
  },
  {
    slug: "sydney-macquarie-university",
    nombre: "Macquarie University",
    linea: ["NorthwestMetro"],
    sistema: "metro",
    municipio: "Macquarie Park",
    pois: [
      { nombre: "Macquarie University", tipo: "educacion", distancia: "0 metros" },
      { nombre: "Macquarie University Hospital", tipo: "salud", distancia: "200 metros" }
    ],
    transferencias: ["Metro Northwest"],
    seo_title: "Macquarie University — Sydney Metro | MetroGuia",
    meta_description: "Macquarie University Sydney Metro: campus station serving one of Australia's top universities.",
    h1: "Macquarie University Station — Sydney Metro",
    intro: "Campus living on the Metro: direct access to one of Australia's leading research universities.",
    tips: ["The campus is open to visitors — it has excellent walking paths through native bushland.", "The Macquarie Shopping Centre (nearby Macquarie Park station) has extensive retail.", "The university's Stables Bar is a good landmark for meeting people on campus."],
    descripcion_turistica: "Macquarie University station provides direct Metro access to Macquarie University — one of Australia's leading research universities with over 40,000 students. The campus is extensively landscaped with native vegetation. The station serves both the university community and the broader Ryde-Macquarie Park precinct which has developed into a significant business and technology hub.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible campus station." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: A$2.24–A$4.50 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Macquarie University", tipo: "Educacion", distancia: "0 metros", descripcion: "Top-20 Australian university with 40,000+ students." }
    ]
  },
  {
    slug: "sydney-sydney-airport-domestic",
    nombre: "Sydney Airport (Domestic T2/T3)",
    linea: ["CityMetro"],
    sistema: "metro",
    municipio: "Mascot",
    pois: [
      { nombre: "Sydney Airport Terminal 2", tipo: "transporte", distancia: "0 metros" },
      { nombre: "Sydney Airport Terminal 3", tipo: "transporte", distancia: "200 metros" }
    ],
    transferencias: ["Metro City & Southwest"],
    seo_title: "Sydney Airport Domestic — Sydney Metro | MetroGuia",
    meta_description: "Sydney Airport Domestic T2/T3 Metro: direct metro to/from Sydney CBD in 12 minutes. Best airport connection in Australia.",
    h1: "Sydney Airport (Domestic) Station — Sydney Metro",
    intro: "Sydney's airport in 12 minutes from Martin Place — Australia's fastest airport rail link.",
    tips: ["The Metro from Martin Place to the airport takes just 12 minutes — far better than a taxi in traffic.", "Separate stations serve Domestic (T2/T3) and International (T1) terminals.", "The airport station has an Airport Passenger Movement Charge — higher fare than regular Metro."],
    descripcion_turistica: "Sydney Airport is Australia's busiest airport and the Metro City & Southwest line provides the fastest and most reliable connection to the CBD, reaching Martin Place in the city centre in approximately 12 minutes. The station serves the domestic terminals T2 (Virgin Australia) and T3 (Qantas), with a separate station for the international terminal T1 at a 3-minute metro ride.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible airport station." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Airport surcharge applies. Total fare ~A$19.97 (Opal card)" },
    lugares_cercanos: [
      { nombre: "Sydney Airport", tipo: "Transporte", distancia: "0 metros", descripcion: "Australia's busiest airport — metro to CBD in 12 minutes." }
    ]
  }
];
