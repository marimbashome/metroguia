export const estacionesDenver = [
  {
    slug: "denver-union-station",
    nombre: "Union Station",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "hub",
    pois: [
      { nombre: "Union Station Transit Center", tipo: "transporte", distancia: "adjacent" },
      { nombre: "Amtrak Station", tipo: "transporte", distancia: "adjacent" },
      { nombre: "Downtown Denver Restaurants", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: ["B", "E", "G", "W"],
    seo_title: "Denver Union Station — RTD Rail Hub | MetroGuia",
    meta_description: "Union Station, main hub of Denver RTD rail. Lines A, B, E, G, W. Access to DIA airport, downtown Denver, and Amtrak.",
    h1: "Union Station — RTD Rail Hub | Denver",
    intro: "Main transit hub of Denver RTD, connecting light rail and commuter rail lines. Gateway to downtown Denver, Denver International Airport, and regional rail.",
    tips: [
      "Central hub connecting all major lines",
      "Amtrak connection to regional destinations",
      "Restaurants and shops inside terminal",
      "Easy access to downtown Denver",
      "Bicycle stations available"
    ],
    mejor_horario: "Any time",
    mundial_relevancia: "Main transit hub for arriving visitors",
    descripcion_turistica: "Union Station is Denver's premier transit hub, serving as the central point for the RTD rail system. Built in 1881 with stunning Romanesque Revival architecture, the station underwent a major renovation completed in 2014. It's a architectural landmark and the busiest transportation facility in Denver.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully ADA accessible with modern elevators and accessible entrances" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-38th-blake",
    nombre: "38th & Blake",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-local",
    pois: [
      { nombre: "RiNo Art District", tipo: "cultural", distancia: "5 min caminando" },
      { nombre: "Denver Breweries", tipo: "comercial", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "38th & Blake Station — RTD A Line Denver | MetroGuia",
    meta_description: "38th & Blake RTD station. Access to Denver's vibrant RiNo arts district and local breweries.",
    h1: "38th & Blake Station — A Line | Denver",
    intro: "Located in Denver's trendy RiNo (River North) arts district, 38th & Blake provides access to galleries, street art, and craft breweries.",
    tips: [
      "Gateway to Denver's arts scene",
      "Nearby craft brewery corridor",
      "Street art and murals throughout RiNo",
      "Popular with younger demographic"
    ],
    mejor_horario: "Afternoon and evening for arts and dining",
    mundial_relevancia: "Cultural exploration point",
    descripcion_turistica: "The RiNo district served by 38th & Blake has transformed into Denver's creative hub. The neighborhood features numerous art galleries, street murals, craft breweries, and trendy restaurants. Perfect for exploring Denver's contemporary art scene.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Modern station with full ADA access" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-40th-colorado",
    nombre: "40th & Colorado",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-local",
    pois: [
      { nombre: "Colorado Convention Center", tipo: "comercial", distancia: "8 min caminando" },
      { nombre: "Local shops and restaurants", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "40th & Colorado Station — RTD A Line Denver | MetroGuia",
    meta_description: "40th & Colorado RTD station. Access to Denver convention area and local commerce.",
    h1: "40th & Colorado Station — A Line | Denver",
    intro: "Serves the area between downtown Denver and the airport with convenient access to commercial developments and local services.",
    tips: [
      "Access to Convention Center area",
      "Growing commercial district",
      "Easy downtown connections via A Line"
    ],
    mejor_horario: "Business hours",
    mundial_relevancia: "Convention and business hub access",
    descripcion_turistica: "This station serves an important commercial corridor between downtown Denver and the airport, providing rapid transit access to business developments and convention facilities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility standards met" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-central-park",
    nombre: "Central Park",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-residencial",
    pois: [
      { nombre: "Central Park Development", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local parks and recreation", tipo: "parques", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Central Park Station — RTD A Line Denver | MetroGuia",
    meta_description: "Central Park RTD station. Access to Denver's residential development and green spaces.",
    h1: "Central Park Station — A Line | Denver",
    intro: "Serves the Central Park residential and mixed-use development with connections between downtown and the airport.",
    tips: [
      "Access to modern residential development",
      "Park facilities nearby",
      "Convenient airport connection"
    ],
    mejor_horario: "Daytime for park access",
    mundial_relevancia: "Residential area access",
    descripcion_turistica: "Central Park Station serves an expanding residential district that combines modern development with green space amenities, offering a convenient transit point for residents.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible station" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-peoria",
    nombre: "Peoria",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Northfield area", tipo: "residencial", distancia: "3 min caminando" },
      { nombre: "Commercial strips", tipo: "comercial", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Peoria Station — RTD A Line Denver | MetroGuia",
    meta_description: "Peoria RTD station. Access to Denver's northeast corridor and residential areas.",
    h1: "Peoria Station — A Line | Denver",
    intro: "Intermediate station connecting Denver's northeast residential areas with downtown and the airport.",
    tips: [
      "Access to northeast residential areas",
      "Quick airport connection",
      "Park and ride facilities available"
    ],
    mejor_horario: "Morning and evening commute times",
    mundial_relevancia: "Commuter hub",
    descripcion_turistica: "Peoria Station serves as an important commuter connection point, linking northeast Denver residential neighborhoods with the broader RTD network.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Modern accessible design" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-gateway-park",
    nombre: "Gateway Park",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Aurora",
    tipo_zona: "comercial-industrial",
    pois: [
      { nombre: "Gateway Park Development", tipo: "comercial", distancia: "adjacent" },
      { nombre: "Commerce City businesses", tipo: "comercial", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Gateway Park Station — RTD A Line Denver | MetroGuia",
    meta_description: "Gateway Park RTD station. Access to Aurora's commercial and industrial corridor.",
    h1: "Gateway Park Station — A Line | Denver",
    intro: "Serves Aurora's growing commercial district with convenient airport and downtown access.",
    tips: [
      "Commercial district hub",
      "Direct airport access",
      "Modern station amenities"
    ],
    mejor_horario: "Business hours",
    mundial_relevancia: "Commercial transit point",
    descripcion_turistica: "Gateway Park Station connects to Aurora's expanding commercial development, providing efficient transit links to Denver International Airport and downtown Denver.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully compliant station" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-61st-pena",
    nombre: "61st & Peña",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Aurora",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Industrial areas", tipo: "industrial", distancia: "adjacent" },
      { nombre: "Airport approaches", tipo: "transporte", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "61st & Peña Station — RTD A Line Denver | MetroGuia",
    meta_description: "61st & Peña RTD station. Access to airport approaches and industrial areas.",
    h1: "61st & Peña Station — A Line | Denver",
    intro: "Intermediate airport access point serving the industrial corridor approaching Denver International Airport.",
    tips: [
      "Direct airport rail access",
      "Industrial district connections",
      "Final stop before airport terminal"
    ],
    mejor_horario: "Any time for airport travel",
    mundial_relevancia: "Airport approach station",
    descripcion_turistica: "This station marks the approach to Denver International Airport, serving the industrial areas and airport service roads that connect the metroplex to one of the world's newest major airports.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility for airport travelers" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-airport",
    nombre: "Denver International Airport",
    linea: "A",
    sistema: "rtd-rail",
    municipio: "Aurora",
    tipo_zona: "hub",
    pois: [
      { nombre: "Airport Terminal", tipo: "transporte", distancia: "adjacent" },
      { nombre: "Baggage Claim", tipo: "transporte", distancia: "adjacent" },
      { nombre: "Ground Transportation Center", tipo: "transporte", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Denver International Airport — RTD A Line | MetroGuia",
    meta_description: "Denver International Airport RTD station. Direct airport terminal access from downtown Denver in 37 minutes.",
    h1: "Denver International Airport — RTD A Line | Denver",
    intro: "Main terminal station at Denver International Airport with direct access to baggage claim and ground transportation. 37-minute journey from downtown Denver Union Station.",
    tips: [
      "Direct airport terminal access",
      "24/7 operation for flights",
      "Luggage assistance available",
      "Ground transportation connections",
      "Airport information booths nearby"
    ],
    mejor_horario: "Any time - airport hours follow flight schedules",
    mundial_relevancia: "International travel gateway",
    descripcion_turistica: "Denver International Airport's RTD A Line station offers seamless connection between the airport and downtown Denver. The modern station is fully integrated into the terminal, making it the fastest way to reach the city center from DIA.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible airport station with full assistance for travelers with luggage" },
    horarios: { inicio: "03:15", fin: "01:45" }
  },
  {
    slug: "denver-westminster-41st-fox",
    nombre: "Westminster 41st & Fox",
    linea: "B",
    sistema: "rtd-rail",
    municipio: "Westminster",
    tipo_zona: "hub-regional",
    pois: [
      { nombre: "Westminster Downtown", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Big Dry Creek Park", tipo: "parques", distancia: "10 min caminando" }
    ],
    transferencias: ["A"],
    seo_title: "Westminster 41st & Fox — RTD B Line Denver | MetroGuia",
    meta_description: "Westminster 41st & Fox RTD station. B Line terminus to downtown Denver and airport.",
    h1: "Westminster 41st & Fox — B Line | Denver",
    intro: "Northern terminus of the B Line commuter rail, serving Westminster and providing downtown Denver and airport access.",
    tips: [
      "B Line terminus station",
      "Downtown Denver connection",
      "Extensive park and ride",
      "Commuter-focused services",
      "Bicycle parking available"
    ],
    mejor_horario: "Morning and evening commute hours",
    mundial_relevancia: "Regional commuter hub",
    descripcion_turistica: "Westminster's major transit station provides commuters from the northern suburbs with fast, reliable connections to downtown Denver and Denver International Airport.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility with park and ride accessible parking" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-18th-california",
    nombre: "18th & California",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-cultural",
    pois: [
      { nombre: "Denver Art Museum", tipo: "cultural", distancia: "5 min caminando" },
      { nombre: "Civic Center Park", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: ["H"],
    seo_title: "18th & California Station — RTD D Line Denver | MetroGuia",
    meta_description: "18th & California RTD station. Access to Denver Art Museum and Civic Center Park.",
    h1: "18th & California Station — D Line | Denver",
    intro: "Gateway to Denver's Cultural district with direct access to world-class museums and parks.",
    tips: [
      "Denver Art Museum access",
      "Civic Center Park connection",
      "Downtown cultural district hub",
      "Museum shuttle connections",
      "Public restrooms available"
    ],
    mejor_horario: "Daytime for museum visits",
    mundial_relevancia: "Arts and culture destination",
    descripcion_turistica: "18th & California is Denver's cultural gateway, providing direct access to the Denver Art Museum and Civic Center Park. The station serves as a starting point for exploring downtown's arts and culture scene.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible with museum connections" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-theatre-district",
    nombre: "Theatre District/Convention Center",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-cultural",
    pois: [
      { nombre: "Denver Convention Center", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Denver Performing Arts Complex", tipo: "cultural", distancia: "5 min caminando" },
      { nombre: "Downtown restaurants", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: ["H", "E"],
    seo_title: "Theatre District Station — RTD D Line Denver | MetroGuia",
    meta_description: "Theatre District RTD station. Denver Convention Center and Performing Arts Complex access.",
    h1: "Theatre District/Convention Center — D Line | Denver",
    intro: "Heart of Denver's downtown entertainment district with direct access to major performing arts venues and convention facilities.",
    tips: [
      "Convention Center access",
      "Broadway Theatre District",
      "World-class performing arts",
      "Downtown dining options",
      "Event parking information"
    ],
    mejor_horario: "Evening for shows and performances",
    mundial_relevancia: "Entertainment and business hub",
    descripcion_turistica: "The Theatre District station serves as the central hub for Denver's cultural and convention activities. The nearby Denver Performing Arts Complex is one of the largest arts centers in the US.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible for all patrons including wheelchair users" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-10th-osage",
    nombre: "10th & Osage",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-local",
    pois: [
      { nombre: "Little Raven District", tipo: "comercial", distancia: "3 min caminando" },
      { nombre: "Local restaurants", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: ["E"],
    seo_title: "10th & Osage Station — RTD D & E Lines Denver | MetroGuia",
    meta_description: "10th & Osage RTD station. Access to Denver's Little Raven restaurant district.",
    h1: "10th & Osage Station — D & E Lines | Denver",
    intro: "Serves Denver's vibrant restaurant and entertainment district with connections to multiple transit lines.",
    tips: [
      "Little Raven dining district",
      "Multiple line connections",
      "Nightlife hub",
      "Walkable to downtown"
    ],
    mejor_horario: "Evening for dining and entertainment",
    mundial_relevancia: "Food and beverage destination",
    descripcion_turistica: "10th & Osage is a hub for Denver's culinary scene, providing direct access to acclaimed restaurants and bars in the trendy Little Raven neighborhood.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-alameda",
    nombre: "Alameda",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-local",
    pois: [
      { nombre: "Alameda District", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Shops and galleries", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Alameda Station — RTD D Line Denver | MetroGuia",
    meta_description: "Alameda RTD station. Access to Denver's trendy Alameda district.",
    h1: "Alameda Station — D Line | Denver",
    intro: "Gateway to Denver's Alameda neighborhood with shops, galleries, and independent restaurants.",
    tips: [
      "Trendy neighborhood access",
      "Independent shops and galleries",
      "Local restaurant scene",
      "Weekend activity hub"
    ],
    mejor_horario: "Daytime and evening",
    mundial_relevancia: "Local shopping and dining",
    descripcion_turistica: "The Alameda neighborhood, served by this station, is known for its independent shops, art galleries, and eclectic dining options, representing authentic Denver culture.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-evans",
    nombre: "Evans",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Residential neighborhood", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local schools", tipo: "educacion", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Evans Station — RTD D Line Denver | MetroGuia",
    meta_description: "Evans RTD station. Access to south Denver residential areas.",
    h1: "Evans Station — D Line | Denver",
    intro: "Serves south Denver residential communities with convenient downtown and airport connections.",
    tips: [
      "Residential area access",
      "Quick downtown connection",
      "Commuter-friendly"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Evans Station connects south Denver residential neighborhoods to the broader RTD network.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible design" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-englewood",
    nombre: "Englewood",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Englewood",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Englewood downtown", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "City parks", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Englewood Station — RTD D Line Denver | MetroGuia",
    meta_description: "Englewood RTD station. Access to Englewood downtown and regional destinations.",
    h1: "Englewood Station — D Line | Denver",
    intro: "Major transit station serving Englewood and communities south of Denver.",
    tips: [
      "Englewood downtown access",
      "Regional commuter hub",
      "Park and ride facilities"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Regional hub",
    descripcion_turistica: "Englewood Station is a key commuter hub providing connections between the Denver metro area and downtown.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-littleton-mineral",
    nombre: "Littleton/Mineral",
    linea: "D",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "hub-regional",
    pois: [
      { nombre: "Littleton downtown", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Cherry Creek", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Littleton/Mineral Station — RTD D Line Denver | MetroGuia",
    meta_description: "Littleton/Mineral RTD station. D Line terminus to south suburbs.",
    h1: "Littleton/Mineral Station — D Line | Denver",
    intro: "Southern terminus of the D Line serving Littleton and surrounding southern suburbs.",
    tips: [
      "D Line terminus",
      "Littleton downtown access",
      "Park and ride hub",
      "Commuter-focused services"
    ],
    mejor_horario: "Morning and evening commute",
    mundial_relevancia: "Southern commuter terminus",
    descripcion_turistica: "Littleton/Mineral Station serves as the southern gateway for RTD rail access, connecting the metro area's southern communities to downtown Denver and the airport.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility with park and ride accessible parking" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-i25-broadway",
    nombre: "I-25 & Broadway",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Commerce areas", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Broadway corridor", tipo: "comercial", distancia: "adjacent" }
    ],
    transferencias: [],
    seo_title: "I-25 & Broadway Station — RTD E Line Denver | MetroGuia",
    meta_description: "I-25 & Broadway RTD station. E Line service to south Denver.",
    h1: "I-25 & Broadway Station — E Line | Denver",
    intro: "South Denver station providing connections along the I-25 corridor.",
    tips: [
      "South Denver access",
      "Commercial district",
      "Regional connections"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Commercial transit point",
    descripcion_turistica: "I-25 & Broadway connects the I-25 corridor communities with downtown Denver and the airport.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-louisiana-pearl",
    nombre: "Louisiana/Pearl",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-educacion",
    pois: [
      { nombre: "University of Denver", tipo: "educacion", distancia: "3 min caminando" },
      { nombre: "Washington Park", tipo: "parques", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Louisiana/Pearl Station — RTD E Line Denver | MetroGuia",
    meta_description: "Louisiana/Pearl RTD station. Access to University of Denver and Washington Park.",
    h1: "Louisiana/Pearl Station — E Line | Denver",
    intro: "Gateway to the University of Denver and the historic Washington Park neighborhood.",
    tips: [
      "University of Denver access",
      "Washington Park nearby",
      "College student friendly",
      "Park and recreation access"
    ],
    mejor_horario: "Daytime for campus visits",
    mundial_relevancia: "Educational institution access",
    descripcion_turistica: "Louisiana/Pearl Station provides direct access to the University of Denver campus and the beautiful Washington Park, one of Denver's most desirable neighborhoods.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility for campus and park access" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-university-of-denver",
    nombre: "University of Denver",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-educacion",
    pois: [
      { nombre: "DU Campus", tipo: "educacion", distancia: "adjacent" },
      { nombre: "Student restaurants", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "University of Denver — RTD E Line Denver | MetroGuia",
    meta_description: "University of Denver RTD station. Direct DU campus access.",
    h1: "University of Denver — E Line | Denver",
    intro: "Main campus station for the University of Denver providing direct access to academic buildings and student facilities.",
    tips: [
      "DU campus access",
      "Student shuttle connections",
      "Campus dining nearby",
      "Library and facilities access"
    ],
    mejor_horario: "Daytime during academic hours",
    mundial_relevancia: "Major university access",
    descripcion_turistica: "University of Denver Station is the primary transit gateway for DU's scenic campus, known for its beautiful Gothic architecture and academic excellence.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible campus access" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-colorado",
    nombre: "Colorado",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "South Denver neighborhoods", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Shopping areas", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Colorado Station — RTD E Line Denver | MetroGuia",
    meta_description: "Colorado RTD station. E Line service through south Denver.",
    h1: "Colorado Station — E Line | Denver",
    intro: "Intermediate station serving south Denver residential and commercial areas.",
    tips: [
      "South Denver access",
      "Shopping options",
      "Residential connections"
    ],
    mejor_horario: "All day",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Colorado Station connects south Denver neighborhoods with the broader RTD network.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible design" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-yale",
    nombre: "Yale",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Residential area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Yale Station — RTD E Line Denver | MetroGuia",
    meta_description: "Yale RTD station. South Denver residential access.",
    h1: "Yale Station — E Line | Denver",
    intro: "Serves south Denver residential neighborhoods.",
    tips: [
      "Residential area access",
      "Quick downtown connection"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Yale Station provides efficient transit service to south Denver residential communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-southmoor",
    nombre: "Southmoor",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Southmoor area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks and recreation", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Southmoor Station — RTD E Line Denver | MetroGuia",
    meta_description: "Southmoor RTD station. South Denver residential communities.",
    h1: "Southmoor Station — E Line | Denver",
    intro: "Serves the Southmoor residential district with access to parks and recreation.",
    tips: [
      "Residential area access",
      "Park connections",
      "Commuter-friendly"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Southmoor Station connects residential neighborhoods south of Denver.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-belleview",
    nombre: "Belleview",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Residential areas", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Belleview Station — RTD E Line Denver | MetroGuia",
    meta_description: "Belleview RTD station. South Denver transit access.",
    h1: "Belleview Station — E Line | Denver",
    intro: "Intermediate station providing transit service through south Denver.",
    tips: [
      "South Denver access",
      "Commuter connections"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Commuter station",
    descripcion_turistica: "Belleview Station serves south Denver commuters.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-orchard",
    nombre: "Orchard",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Littleton area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Orchard Station — RTD E Line Denver | MetroGuia",
    meta_description: "Orchard RTD station. South suburbs transit access.",
    h1: "Orchard Station — E Line | Denver",
    intro: "Serves the south suburbs with connections to Littleton and surrounding areas.",
    tips: [
      "South suburbs access",
      "Park connections"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Suburban commuter station",
    descripcion_turistica: "Orchard Station connects southern metro communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-arapahoe-village",
    nombre: "Arapahoe at Village Center",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Village Center", tipo: "comercial", distancia: "adjacent" },
      { nombre: "Shopping areas", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Arapahoe at Village Center — RTD E Line Denver | MetroGuia",
    meta_description: "Arapahoe at Village Center RTD station. South suburbs shopping and transit.",
    h1: "Arapahoe at Village Center — E Line | Denver",
    intro: "Serves the Village Center shopping and commercial district in south Denver suburbs.",
    tips: [
      "Shopping and dining",
      "Commercial district",
      "South suburbs access"
    ],
    mejor_horario: "Daytime for shopping",
    mundial_relevancia: "Commercial transit point",
    descripcion_turistica: "This station provides access to the Village Center, a major shopping and entertainment destination.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-dry-creek",
    nombre: "Dry Creek",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Dry Creek area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Recreation areas", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Dry Creek Station — RTD E Line Denver | MetroGuia",
    meta_description: "Dry Creek RTD station. South suburbs residential access.",
    h1: "Dry Creek Station — E Line | Denver",
    intro: "Serves the Dry Creek residential area with connections to parks and recreation.",
    tips: [
      "Residential access",
      "Recreation connections",
      "South suburbs"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Dry Creek Station connects south suburbs residents to downtown Denver and airport.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-county-line",
    nombre: "County Line",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "County line area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Commerce areas", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "County Line Station — RTD E Line Denver | MetroGuia",
    meta_description: "County Line RTD station. South suburbs terminal access.",
    h1: "County Line Station — E Line | Denver",
    intro: "Intermediate station serving the county line area.",
    tips: [
      "South suburbs access",
      "Regional connections"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Regional commuter station",
    descripcion_turistica: "County Line Station connects south metro communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-lincoln",
    nombre: "Lincoln",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Lincoln area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks", tipo: "parques", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Lincoln Station — RTD E Line Denver | MetroGuia",
    meta_description: "Lincoln RTD station. South suburbs residential communities.",
    h1: "Lincoln Station — E Line | Denver",
    intro: "Serves the Lincoln area with park and recreation access.",
    tips: [
      "Residential access",
      "Park connections",
      "South suburbs"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Lincoln Station connects south metro residential communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-ridgegate",
    nombre: "RidgeGate Parkway",
    linea: "E",
    sistema: "rtd-rail",
    municipio: "Littleton",
    tipo_zona: "hub-regional",
    pois: [
      { nombre: "RidgeGate development", tipo: "comercial", distancia: "adjacent" },
      { nombre: "Shopping and dining", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "RidgeGate Parkway — RTD E Line Denver | MetroGuia",
    meta_description: "RidgeGate Parkway RTD station. E Line southern terminus.",
    h1: "RidgeGate Parkway — E Line | Denver",
    intro: "Southern terminus of the E Line serving the growing RidgeGate development.",
    tips: [
      "E Line terminus",
      "Shopping and dining",
      "South suburbs hub",
      "Park and ride facilities"
    ],
    mejor_horario: "Any time",
    mundial_relevancia: "South suburbs terminus",
    descripcion_turistica: "RidgeGate Parkway Station serves as the southern terminus for E Line service, connecting the growing south suburbs with downtown Denver and the airport.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility with park and ride accessible parking" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-41st-fox",
    nombre: "41st & Fox",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "North Denver", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: ["B"],
    seo_title: "41st & Fox — RTD G Line Denver | MetroGuia",
    meta_description: "41st & Fox RTD station. G Line northwest corridor.",
    h1: "41st & Fox — G Line | Denver",
    intro: "Serves north Denver with connections through the G Line northwest corridor.",
    tips: [
      "North Denver access",
      "G Line connection",
      "B Line transfer"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Commuter station",
    descripcion_turistica: "41st & Fox connects north Denver communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-pecos-junction",
    nombre: "Pecos Junction",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "North Denver areas", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Commerce areas", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Pecos Junction — RTD G Line Denver | MetroGuia",
    meta_description: "Pecos Junction RTD station. G Line service through northwest Denver.",
    h1: "Pecos Junction — G Line | Denver",
    intro: "Intermediate station on the G Line serving northwest Denver.",
    tips: [
      "Northwest Denver access",
      "Commercial district"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Commuter station",
    descripcion_turistica: "Pecos Junction connects northwest Denver communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-clear-creek-federal",
    nombre: "Clear Creek/Federal",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Industrial areas", tipo: "industrial", distancia: "adjacent" },
      { nombre: "Clear Creek Park", tipo: "parques", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Clear Creek/Federal — RTD G Line Denver | MetroGuia",
    meta_description: "Clear Creek/Federal RTD station. Northwest Denver transit.",
    h1: "Clear Creek/Federal — G Line | Denver",
    intro: "Serves the Clear Creek industrial corridor and surrounding areas.",
    tips: [
      "Industrial district access",
      "Park connections",
      "Northwest Denver"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Industrial commuter station",
    descripcion_turistica: "Clear Creek/Federal Station connects industrial and commercial areas.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-arvada-gold-strike",
    nombre: "Arvada Gold Strike",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Arvada",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Arvada area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Arvada Gold Strike — RTD G Line Denver | MetroGuia",
    meta_description: "Arvada Gold Strike RTD station. G Line Arvada service.",
    h1: "Arvada Gold Strike — G Line | Denver",
    intro: "Serves Arvada with G Line connections to downtown Denver.",
    tips: [
      "Arvada access",
      "Northwest suburbs",
      "Park and ride available"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Suburban commuter station",
    descripcion_turistica: "Arvada Gold Strike connects Arvada residents to downtown Denver.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility with park and ride parking" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-olde-town-arvada",
    nombre: "Olde Town Arvada",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Arvada",
    tipo_zona: "centro-local",
    pois: [
      { nombre: "Olde Town Arvada", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Restaurants and shops", tipo: "comercial", distancia: "1 min caminando" }
    ],
    transferencias: [],
    seo_title: "Olde Town Arvada — RTD G Line Denver | MetroGuia",
    meta_description: "Olde Town Arvada RTD station. Historic Arvada downtown access.",
    h1: "Olde Town Arvada — G Line | Denver",
    intro: "Gateway to historic Olde Town Arvada with shopping, dining, and cultural venues.",
    tips: [
      "Historic town center",
      "Shops and restaurants",
      "Local brewery district",
      "Community events"
    ],
    mejor_horario: "Evening for dining and entertainment",
    mundial_relevancia: "Local cultural destination",
    descripcion_turistica: "Olde Town Arvada is a charming historic district with independent shops, restaurants, and galleries, easily accessed via RTD rail.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility to historic district" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-arvada-ridge",
    nombre: "Arvada Ridge",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Arvada",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Arvada residential", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Arvada Ridge — RTD G Line Denver | MetroGuia",
    meta_description: "Arvada Ridge RTD station. Northwest Arvada access.",
    h1: "Arvada Ridge — G Line | Denver",
    intro: "Serves northwest Arvada residential communities.",
    tips: [
      "Residential area access",
      "Park connections",
      "Northwest Arvada"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Arvada Ridge connects northwest Arvada residents.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-wheat-ridge-ward",
    nombre: "Wheat Ridge/Ward",
    linea: "G",
    sistema: "rtd-rail",
    municipio: "Wheat Ridge",
    tipo_zona: "hub-regional",
    pois: [
      { nombre: "Wheat Ridge downtown", tipo: "comercial", distancia: "3 min caminando" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Wheat Ridge/Ward — RTD G Line Denver | MetroGuia",
    meta_description: "Wheat Ridge/Ward RTD station. G Line western terminus.",
    h1: "Wheat Ridge/Ward — G Line | Denver",
    intro: "Western terminus of the G Line serving Wheat Ridge and surrounding communities.",
    tips: [
      "G Line terminus",
      "Wheat Ridge downtown",
      "Park and ride facilities",
      "Commuter hub"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Western suburbs terminus",
    descripcion_turistica: "Wheat Ridge/Ward Station serves as the western gateway for G Line service to the Denver metro area.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility with park and ride accessible parking" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-auraria-west",
    nombre: "Auraria West",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "centro-educacion",
    pois: [
      { nombre: "Auraria Campus", tipo: "educacion", distancia: "2 min caminando" },
      { nombre: "Student facilities", tipo: "educacion", distancia: "1 min caminando" }
    ],
    transferencias: [],
    seo_title: "Auraria West — RTD W Line Denver | MetroGuia",
    meta_description: "Auraria West RTD station. Access to Auraria Higher Education Center.",
    h1: "Auraria West — W Line | Denver",
    intro: "Western gateway to the Auraria Higher Education Center serving CU Denver, Metro State, and Community College of Denver.",
    tips: [
      "Auraria campus access",
      "Multiple colleges served",
      "Student-friendly facilities",
      "Direct downtown connection"
    ],
    mejor_horario: "Daytime during academic hours",
    mundial_relevancia: "Educational institution access",
    descripcion_turistica: "Auraria West serves the Auraria Higher Education Center, home to three major educational institutions and thousands of students.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible for campus access" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-decatur-federal",
    nombre: "Decatur/Federal",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "West Denver areas", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local commerce", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: ["H"],
    seo_title: "Decatur/Federal — RTD W Line Denver | MetroGuia",
    meta_description: "Decatur/Federal RTD station. W and H line connection.",
    h1: "Decatur/Federal — W Line | Denver",
    intro: "Transfer point between W and H lines serving west Denver.",
    tips: [
      "W and H line connection",
      "West Denver access",
      "Multiple route options"
    ],
    mejor_horario: "All day",
    mundial_relevancia: "Transit transfer hub",
    descripcion_turistica: "Decatur/Federal provides important connections in west Denver's transit network.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible with multiple elevator access" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-knox",
    nombre: "Knox",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "West Denver residential", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Knox Station — RTD W Line Denver | MetroGuia",
    meta_description: "Knox RTD station. W Line service through west Denver.",
    h1: "Knox Station — W Line | Denver",
    intro: "Serves west Denver residential communities on the W Line.",
    tips: [
      "West Denver access",
      "Residential neighborhood",
      "Quick downtown connection"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Knox connects west Denver neighborhoods.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-perry",
    nombre: "Perry",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "West Denver area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Perry Station — RTD W Line Denver | MetroGuia",
    meta_description: "Perry RTD station. W Line west Denver service.",
    h1: "Perry Station — W Line | Denver",
    intro: "Intermediate W Line station serving west Denver.",
    tips: [
      "West Denver access",
      "Park connections",
      "Residential area"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Perry connects west Denver residents.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-lamar",
    nombre: "Lamar",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Denver",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "West Denver", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Lamar Station — RTD W Line Denver | MetroGuia",
    meta_description: "Lamar RTD station. W Line west Denver transit.",
    h1: "Lamar Station — W Line | Denver",
    intro: "W Line service through west Denver.",
    tips: [
      "West Denver access",
      "Residential connections"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Lamar connects west Denver communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-wadsworth-lakewood",
    nombre: "Wadsworth/Lakewood",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Lakewood",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Lakewood area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks and recreation", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Wadsworth/Lakewood — RTD W Line Denver | MetroGuia",
    meta_description: "Wadsworth/Lakewood RTD station. W Line western suburbs.",
    h1: "Wadsworth/Lakewood — W Line | Denver",
    intro: "Serves Lakewood with connections through the W Line.",
    tips: [
      "Lakewood access",
      "Western suburbs",
      "Park connections",
      "Park and ride available"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Suburban commuter station",
    descripcion_turistica: "Wadsworth/Lakewood connects Lakewood residents to downtown Denver.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility with park and ride parking" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-garrison",
    nombre: "Garrison",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Lakewood",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Lakewood area", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Local services", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Garrison Station — RTD W Line Denver | MetroGuia",
    meta_description: "Garrison RTD station. Lakewood residential access.",
    h1: "Garrison Station — W Line | Denver",
    intro: "Intermediate W Line station serving Lakewood.",
    tips: [
      "Lakewood access",
      "Residential area",
      "Commuter-friendly"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Residential commuter station",
    descripcion_turistica: "Garrison connects Lakewood residents.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-oak",
    nombre: "Oak",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Lakewood",
    tipo_zona: "transporte-intermedio",
    pois: [
      { nombre: "Lakewood residential", tipo: "residencial", distancia: "adjacent" },
      { nombre: "Parks", tipo: "parques", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Oak Station — RTD W Line Denver | MetroGuia",
    meta_description: "Oak RTD station. Lakewood park and ride.",
    h1: "Oak Station — W Line | Denver",
    intro: "Serves Lakewood with park and recreation connections.",
    tips: [
      "Lakewood access",
      "Park connections",
      "Park and ride hub"
    ],
    mejor_horario: "Commute hours",
    mundial_relevancia: "Suburban commuter hub",
    descripcion_turistica: "Oak Station connects Lakewood residents.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-federal-center",
    nombre: "Federal Center",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Lakewood",
    tipo_zona: "comercial-industrial",
    pois: [
      { nombre: "Federal Center", tipo: "industrial", distancia: "adjacent" },
      { nombre: "Government offices", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Federal Center — RTD W Line Denver | MetroGuia",
    meta_description: "Federal Center RTD station. Access to federal offices.",
    h1: "Federal Center — W Line | Denver",
    intro: "Serves the Federal Center employment hub with connections to major government offices.",
    tips: [
      "Federal employment hub",
      "Government offices",
      "Commercial district",
      "Business parking"
    ],
    mejor_horario: "Business hours",
    mundial_relevancia: "Government employment center",
    descripcion_turistica: "Federal Center Station provides direct access to major federal offices and employment centers.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible for office workers" },
    horarios: { inicio: "04:30", fin: "01:15" }
  },
  {
    slug: "denver-jefferson-county-golden",
    nombre: "Jefferson County/Golden",
    linea: "W",
    sistema: "rtd-rail",
    municipio: "Golden",
    tipo_zona: "hub-regional",
    pois: [
      { nombre: "Golden downtown", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Rocky Mountain views", tipo: "turismo", distancia: "adjacent" },
      { nombre: "Hiking access", tipo: "parques", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Jefferson County/Golden — RTD W Line Denver | MetroGuia",
    meta_description: "Jefferson County/Golden RTD station. W Line western terminus near Rocky Mountains.",
    h1: "Jefferson County/Golden — W Line | Denver",
    intro: "Western terminus of the W Line in historic Golden, gateway to the Rocky Mountains and outdoor recreation.",
    tips: [
      "W Line terminus",
      "Golden historic downtown",
      "Rocky Mountain gateway",
      "Hiking and outdoor access",
      "Scenic mountain views",
      "Coors Brewery nearby"
    ],
    mejor_horario: "Daytime for outdoor activities",
    mundial_relevancia: "Mountain gateway destination",
    descripcion_turistica: "Golden is a historic mining town now known as a gateway to the Rocky Mountains. The station provides RTD access to Golden's shops, restaurants, breweries, and outdoor recreation opportunities. Buffalo Bill Museum and numerous hiking trails are nearby.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible with accessible outdoor recreation information" },
    horarios: { inicio: "04:30", fin: "01:15" }
  }
];
