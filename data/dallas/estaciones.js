export const estacionesDallas = [
  // MAJOR TOURIST STATIONS (DETAILED)
  {
    slug: "union-station",
    nombre: "Union Station",
    linea: "TRE",
    sistema: "Trinity Railway Express",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Dallas Union Station (Historic Building)", tipo: "landmark", descripcion: "Restored 1916 Beaux-Arts station, major transit hub" },
      { nombre: "Dallas World Aquarium", tipo: "attraction", descripcion: "World-class aquarium 2 blocks away" },
      { nombre: "The Sixth Floor Museum", tipo: "museum", descripcion: "JFK assassination history museum" }
    ],
    transferencias: ["Red Line (DART)", "Blue Line (DART)", "Dallas Streetcar"],
    seo_title: "Union Station Dallas - Historic TRE & DART Hub",
    meta_description: "Union Station is Dallas' primary transit hub connecting Trinity Railway Express, DART Light Rail, and the Dallas Streetcar. Historic 1916 Beaux-Arts architecture.",
    h1: "Union Station: Dallas' Premier Transit Hub",
    intro: "Union Station is the historic heart of Dallas transit. Opened in 1916, this beautifully restored Beaux-Arts station serves as the primary connection point for TRE to Arlington, DART Light Rail lines, and the Dallas Streetcar. It's the gateway to downtown Dallas.",
    descripcion_turistica: "Union Station is not just a transit hub—it's a Dallas landmark. The building's restored architecture rivals that of major historical stations in New York and Chicago. From here, catch TRE to Arlington and AT&T Stadium for FIFA 2026 World Cup matches, or explore downtown's museums and attractions.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Complete ADA compliance, multiple elevator options"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "30 min peak, 60 min off-peak"
    },
    tips: [
      "Arrive 30 minutes early for TRE to ensure connection to Arlington for matches",
      "The station has restaurants and shops—plan time to explore before departing",
      "Use Union Station as your base for exploring downtown Dallas museums"
    ],
    mundial_relevancia: "FIFA 2026 PRIMARY HUB. TRE connects directly to CentrePort/DFW station, the closest rail connection to AT&T Stadium (18km). Union Station is where international fans will gather for connections to Arlington.",
    coords: { lat: 32.7788, lng: -96.8080 }
  },

  {
    slug: "pearl-arts-district",
    nombre: "Pearl/Arts District",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "arts_culture",
    pois: [
      { nombre: "Dallas Arts District", tipo: "cultural", descripcion: "19-block cultural district with museums, galleries, theaters" },
      { nombre: "Dallas Museum of Art", tipo: "museum", descripcion: "World-class art museum with 24,000+ works" },
      { nombre: "Nasher Sculpture Center", tipo: "museum", descripcion: "Contemporary art and sculpture in a modern building" }
    ],
    transferencias: ["Red Line full length", "Streetcar connections"],
    seo_title: "Pearl Arts District Station Dallas - Arts & Culture Hub",
    meta_description: "Pearl/Arts District DART station in the heart of Dallas' premier cultural district. Museums, galleries, theaters, and restaurants.",
    h1: "Pearl/Arts District: Dallas' Cultural Heart",
    intro: "The Pearl/Arts District station puts you in the center of Dallas' thriving cultural scene. This vibrant neighborhood is home to world-class museums, contemporary galleries, live theaters, and award-winning restaurants.",
    descripcion_turistica: "This is where Dallas' creative energy comes alive. The Dallas Arts District is one of the largest contiguous urban arts districts in the U.S., spanning 19 blocks. Museums like the DMA and Nasher are must-sees, and the neighborhood is packed with galleries, cafes, and street art.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Fully accessible with multiple entry points"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "15 min peak, 30 min off-peak"
    },
    tips: [
      "Plan 3-4 hours minimum for museum visits in the district",
      "First Thursday each month features gallery openings and street events",
      "Park your luggage at nearby hotels if doing a cultural day trip"
    ],
    mundial_relevancia: "Cultural gathering point for FIFA 2026 visitors seeking Dallas' arts scene between match days",
    coords: { lat: 32.7876, lng: -96.8017 }
  },

  {
    slug: "deep-ellum",
    nombre: "Deep Ellum",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "entertainment",
    pois: [
      { nombre: "Deep Ellum Historic District", tipo: "district", descripcion: "Historic neighborhood with street art, live music venues" },
      { nombre: "Live Music Venues (multiple)", tipo: "entertainment", descripcion: "Blues, rock, hip-hop clubs and concert halls" },
      { nombre: "Street Art & Murals", tipo: "art", descripcion: "Ever-changing murals and graffiti art" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Deep Ellum Station Dallas - Live Music & Street Art",
    meta_description: "Deep Ellum DART station: gateway to Dallas' legendary live music scene, street art, and vibrant nightlife in a historic neighborhood.",
    h1: "Deep Ellum: Dallas' Live Music & Street Art Capital",
    intro: "Deep Ellum is where Dallas' creative soul lives. This historically significant neighborhood is legendary for live music, ever-changing street art, eclectic shops, and restaurants that reflect Dallas' cultural diversity.",
    descripcion_turistica: "Deep Ellum has been Dallas' artistic and musical epicenter since the 1800s. Today it's a bohemian enclave with dozens of live music venues, galleries, street murals, vintage shops, and food trucks. It's essential Dallas.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Full accessibility for the station; neighborhood has some historic buildings"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "15 min peak, 30 min off-peak"
    },
    tips: [
      "Visit after dark for the full Deep Ellum experience—live music and street life thrive at night",
      "The street art changes constantly; take a walking tour to get the best stories",
      "Respect the artists and venues; this is a working creative community, not a museum"
    ],
    mundial_relevancia: "FIFA 2026 nightlife hub for international visitors seeking authentic Dallas live music and cultural scene",
    coords: { lat: 32.7821, lng: -96.7639 }
  },

  {
    slug: "victory-station",
    nombre: "Victory Station",
    linea: "TRE",
    sistema: "Trinity Railway Express",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "AT&T Discovery District", tipo: "entertainment", descripcion: "Shopping, dining, and entertainment complex" },
      { nombre: "Victory Park Neighborhoods", tipo: "district", descripcion: "High-end residential and mixed-use development" },
      { nombre: "Restaurants & Bars (multiple)", tipo: "dining", descripcion: "Upscale dining venues and rooftop bars" }
    ],
    transferencias: ["TRE", "potential future DART connection"],
    seo_title: "Victory Station Dallas - TRE to Arlington & DFW",
    meta_description: "Victory Station is a key TRE stop in Dallas with access to AT&T Discovery District shopping and dining, with connections to Arlington transit.",
    h1: "Victory Station: Modern Dallas Transit Hub",
    intro: "Victory Station is a modern transit hub serving Dallas' booming Victory Park mixed-use district. It's a key stop on the Trinity Railway Express with excellent shopping, dining, and entertainment options.",
    descripcion_turistica: "Victory Station serves the upscale Victory Park neighborhood, home to the AT&T Discovery District. This is where modern Dallas meets shopping and fine dining, making it a convenient stop for both transit and urban exploration.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Modern station with complete ADA compliance"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "30 min"
    },
    tips: [
      "Use Victory Station for convenient shopping and dining before heading to Arlington",
      "The station is modern and clean—good place to grab coffee before your TRE ride",
      "AT&T Discovery District has free events and live entertainment"
    ],
    mundial_relevancia: "Secondary TRE hub for FIFA 2026 visitors heading to AT&T Stadium",
    coords: { lat: 32.7759, lng: -96.8131 }
  },

  {
    slug: "west-end",
    nombre: "West End",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "entertainment",
    pois: [
      { nombre: "The West End Historic District", tipo: "historic", descripcion: "Preserved historic buildings with shops, galleries, restaurants" },
      { nombre: "Dallas World Aquarium", tipo: "attraction", descripcion: "Nearby major attraction" },
      { nombre: "Reunion Tower", tipo: "landmark", descripcion: "Iconic Dallas landmark with observation deck" }
    ],
    transferencias: ["Red Line", "Dallas Streetcar"],
    seo_title: "West End Station Dallas - Historic District & Attractions",
    meta_description: "West End DART station in Dallas' charming historic district with preserved 19th-century architecture, shops, galleries, and dining.",
    h1: "West End: Dallas' Historic District",
    intro: "West End is where Dallas' history comes alive. This beautifully preserved historic district features 19th-century brick architecture, upscale dining, galleries, shops, and is adjacent to major attractions like Reunion Tower.",
    descripcion_turistica: "The West End is Dallas' connection to its frontier past. Red-brick warehouses have been converted into trendy restaurants, boutiques, and galleries. It's a perfect blend of history and contemporary urban life.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Station is fully accessible; historic buildings vary in accessibility"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "15 min peak, 30 min off-peak"
    },
    tips: [
      "Combine your West End visit with nearby Reunion Tower observation deck for views",
      "The area is ideal for evening dining and drinks with a view of downtown",
      "Take a walking tour to learn the stories behind the historic architecture"
    ],
    mundial_relevancia: "FIFA 2026 cultural and dining destination for international visitors",
    coords: { lat: 32.7748, lng: -96.8081 }
  },

  {
    slug: "dfw-airport",
    nombre: "DFW Airport",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Irving/Fort Worth",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW International Airport Terminal Stations", tipo: "airport", descripcion: "Direct station connections to all terminals" },
      { nombre: "Hyatt Hotel (on-site)", tipo: "lodging", descripcion: "On-site hotel with direct rail access" },
      { nombre: "Car Rental Centers", tipo: "services", descripcion: "Easy ground transportation access" }
    ],
    transferencias: ["Orange Line DART", "TRE connection via Downtown Plano"],
    seo_title: "DFW Airport Station Dallas - International Gateway",
    meta_description: "DFW Airport DART Orange Line station provides direct access to all terminals. The primary entry point for international visitors to Dallas-Fort Worth.",
    h1: "DFW Airport: Your Dallas Gateway",
    intro: "DFW Airport station is the first impression Dallas makes. This modern, efficient station connects directly to all airport terminals via the Orange Line, making ground transportation seamless for 70+ million annual passengers.",
    descripcion_turistica: "As the second-busiest airport in the U.S., DFW is a gateway to Texas. The modern light rail system connects directly to terminals, making it one of the most convenient airport transit systems in America.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Complete ADA compliance throughout terminal stations"
    },
    horarios: {
      apertura: "03:30",
      cierre: "01:30",
      tren_frecuencia: "5-10 min peak, 15 min off-peak"
    },
    tips: [
      "DFW Airport Orange Line runs 24/5; check schedules for early morning/late night arrivals",
      "Consider the light rail as your primary ground transportation—it's faster and cheaper than taxi/Uber",
      "Download the DART app before arriving for real-time updates and trip planning"
    ],
    mundial_relevancia: "FIFA 2026 PRIMARY INTERNATIONAL ENTRY POINT. Most visitors will arrive here. Orange Line connects to downtown Dallas and beyond for onward travel to Arlington.",
    coords: { lat: 32.8975, lng: -97.0381 }
  },

  {
    slug: "fair-park",
    nombre: "Fair Park",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "cultural",
    pois: [
      { nombre: "Fair Park Museums (6 total)", tipo: "museum", descripcion: "Natural history, science, children's museums and more" },
      { nombre: "Cotton Bowl Stadium", tipo: "sports", descripcion: "Historic football stadium and event venue" },
      { nombre: "Fair Park Grounds", tipo: "park", descripcion: "Historic 1936 Art Deco park with gardens" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Fair Park Station Dallas - Museums & Historic Park",
    meta_description: "Fair Park DART station provides access to Dallas' 1936 Art Deco park featuring 6 museums, historic Cotton Bowl Stadium, and the annual State Fair of Texas.",
    h1: "Fair Park: Dallas' Museum & Cultural Destination",
    intro: "Fair Park is Dallas' cultural powerhouse. This historic 1936 Art Deco park hosts six museums, the iconic Cotton Bowl Stadium, and every fall, the legendary State Fair of Texas. It's a must-visit for culture and history.",
    descripcion_turistica: "Fair Park is where Dallas celebrates its heritage. The park's Art Deco architecture is stunning, and the museums cover everything from natural history to aviation to children's learning. Fall visitors shouldn't miss the State Fair of Texas.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Station accessible; museums vary—call ahead for specific needs"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "15 min peak, 30 min off-peak"
    },
    tips: [
      "Plan a full day for Fair Park—there's easily 6+ hours of activities",
      "Many museums have free or discounted hours; check schedules",
      "Visit in fall (late September-October) for the State Fair of Texas—iconic Dallas experience"
    ],
    mundial_relevancia: "FIFA 2026 cultural experience for international visitors interested in Dallas history and American heritage",
    coords: { lat: 32.7623, lng: -96.7637 }
  },

  {
    slug: "centreport-dfw",
    nombre: "CentrePort/DFW",
    linea: "TRE",
    sistema: "Trinity Railway Express",
    ciudad: "Irving",
    municipio: "Irving",
    tipo_zona: "business",
    pois: [
      { nombre: "CentrePort Master-Planned Community", tipo: "commercial", descripcion: "Office, retail, and hotel complex" },
      { nombre: "DFW Airport Connections", tipo: "airport", descripcion: "Secondary gateway with car rental and hotel shuttles" },
      { nombre: "Las Colinas Area", tipo: "district", descripcion: "Major business and residential district" }
    ],
    transferencias: ["TRE to Dallas and Arlington", "DFW Airport systems"],
    seo_title: "CentrePort/DFW Station Dallas - Business & Airport Gateway",
    meta_description: "CentrePort/DFW TRE station serves the Irving business district and provides connections to DFW Airport, Las Colinas, and Arlington via Trinity Railway Express.",
    h1: "CentrePort/DFW: Dallas Business District Transit",
    intro: "CentrePort/DFW is a key business transit hub serving Irving's corporate community. The station provides connections to the DFW Airport area, Las Colinas business district, and direct TRE service to Dallas and Arlington.",
    descripcion_turistica: "While primarily a business district, CentrePort offers hotel accommodations and dining options. It's a convenient connection point for travelers heading to/from DFW Airport with business in the Irving area.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Modern station with full ADA compliance"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "30 min"
    },
    tips: [
      "CentrePort is ideal for business travelers connecting from DFW Airport",
      "Use CentrePort to access the Las Colinas business district hotels and restaurants",
      "Close to some of DFW Airport's hotels—convenient for early connections"
    ],
    mundial_relevancia: "FIFA 2026 CLOSEST RAIL CONNECTION TO AT&T STADIUM IN ARLINGTON. CentrePort is ~18km from stadium; TRE continues to downtown Arlington for final connections.",
    coords: { lat: 32.8968, lng: -97.2183 }
  },

  {
    slug: "downtown-plano",
    nombre: "Downtown Plano",
    linea: "DART Red Line / TRE",
    sistema: "DART Light Rail & Trinity Railway Express",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Plano Downtown Square", tipo: "historic", descripcion: "Historic downtown with shops, galleries, restaurants" },
      { nombre: "Plano Museum of Art", tipo: "museum", descripcion: "Contemporary art museum in the historic district" },
      { nombre: "Restaurants & Breweries", tipo: "dining", descripcion: "Trendy dining and craft beer scene" }
    ],
    transferencias: ["Red Line DART", "TRE connection point to Dallas/Arlington"],
    seo_title: "Downtown Plano Station - Suburban Dallas Arts & Culture",
    meta_description: "Downtown Plano DART/TRE station serves Plano's revitalized historic downtown with galleries, museums, restaurants, and easy connections to Dallas and Arlington.",
    h1: "Downtown Plano: Suburban Dallas Arts & Dining",
    intro: "Downtown Plano is a charming suburban destination within the Dallas metroplex. The historic downtown has been revitalized with galleries, restaurants, breweries, and cultural venues. DART and TRE service makes it easily accessible from Dallas.",
    descripcion_turistica: "Plano's downtown is a hidden gem—trendy without being overwhelming, with good local restaurants, art galleries, and a genuine community feel. It's a nice complement to bigger Dallas attractions.",
    accesibilidad: {
      ascensores: true,
      rampas: true,
      banos_adaptados: true,
      nivel_acceso: "full",
      detalles: "Station fully accessible; historic buildings have varying accessibility"
    },
    horarios: {
      apertura: "05:00",
      cierre: "00:30",
      tren_frecuencia: "20 min peak, 30 min off-peak"
    },
    tips: [
      "Downtown Plano is less crowded than Dallas—great for a quieter experience",
      "Visit on weekends for farmers markets and outdoor events",
      "Use this as a connection point for TRE service to Arlington/CentrePort"
    ],
    mundial_relevancia: "FIFA 2026 connection hub for TRE service to Arlington and alternative downtown Dallas experience",
    coords: { lat: 33.0198, lng: -96.6989 }
  },

  // COMPACT STATION ENTRIES (REMAINING 70 STATIONS)

  {
    slug: "oak-lawn",
    nombre: "Oak Lawn",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Turtle Creek Park", tipo: "park", descripcion: "Scenic urban park" },
      { nombre: "Oak Lawn Shops", tipo: "shopping", descripcion: "Retail and dining" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Oak Lawn Station Dallas - Red Line",
    meta_description: "Oak Lawn DART Red Line station serves Dallas' upscale Oak Lawn neighborhood.",
    h1: "Oak Lawn Station",
    intro: "Oak Lawn is an upscale residential neighborhood on the DART Red Line.",
    descripcion_turistica: "Oak Lawn offers a more peaceful alternative to downtown Dallas with parks and shopping.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Good stop for escaping downtown crowds", "Turtle Creek Park is worth exploring"],
    mundial_relevancia: "Residential area for FIFA 2026 visitors seeking quieter lodging",
    coords: { lat: 32.8069, lng: -96.8009 }
  },

  {
    slug: "st-paul",
    nombre: "St. Paul",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Established neighborhood" },
      { nombre: "Local Shops", tipo: "commercial", descripcion: "Community retail" }
    ],
    transferencias: ["Red Line"],
    seo_title: "St. Paul Station Dallas - Red Line",
    meta_description: "St. Paul DART Red Line station in central Dallas.",
    h1: "St. Paul Station",
    intro: "St. Paul is a well-established Dallas neighborhood served by the Red Line.",
    descripcion_turistica: "Residential neighborhood with local amenities.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Good residential connection point"],
    mundial_relevancia: "Residential transit stop",
    coords: { lat: 32.8199, lng: -96.7974 }
  },

  {
    slug: "Mockingbird",
    nombre: "Mockingbird",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "SMU Area", tipo: "education", descripcion: "Southern Methodist University proximity" },
      { nombre: "Residential Streets", tipo: "neighborhood", descripcion: "Tree-lined residential streets" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Mockingbird Station Dallas - Red Line",
    meta_description: "Mockingbird DART Red Line station near Southern Methodist University.",
    h1: "Mockingbird Station",
    intro: "Mockingbird serves the SMU area and surrounding residential neighborhoods.",
    descripcion_turistica: "Tree-lined neighborhood with university character.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Close to SMU campus", "Peaceful residential area"],
    mundial_relevancia: "University area residential connection",
    coords: { lat: 32.8358, lng: -96.7859 }
  },

  {
    slug: "southern-Methodist-university",
    nombre: "Southern Methodist University",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "education",
    pois: [
      { nombre: "SMU Campus", tipo: "education", descripcion: "University campus" },
      { nombre: "Student Area Shops", tipo: "commercial", descripcion: "Campus retail" }
    ],
    transferencias: ["Red Line"],
    seo_title: "SMU Station Dallas - Southern Methodist University",
    meta_description: "Southern Methodist University DART Red Line station on SMU campus.",
    h1: "SMU Station",
    intro: "SMU station serves students and visitors to Southern Methodist University.",
    descripcion_turistica: "University campus access via DART Red Line.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Easy campus access for students", "Quiet weekends"],
    mundial_relevancia: "University transit connection",
    coords: { lat: 32.8435, lng: -96.7833 }
  },

  {
    slug: "highland-park",
    nombre: "Highland Park",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Highland Park",
    tipo_zona: "residential",
    pois: [
      { nombre: "Highland Park Village", tipo: "shopping", descripcion: "Upscale shopping district" },
      { nombre: "Residential Neighborhoods", tipo: "neighborhood", descripcion: "Affluent neighborhood" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Highland Park Station Dallas - Upscale Shopping",
    meta_description: "Highland Park DART Red Line station serves upscale Highland Park Village shopping district.",
    h1: "Highland Park Station",
    intro: "Highland Park serves one of Dallas' most upscale neighborhoods.",
    descripcion_turistica: "Highland Park Village is a premier shopping destination in Dallas.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Access to upscale shopping", "Tree-lined neighborhoods"],
    mundial_relevancia: "Shopping and upscale lodging area for FIFA 2026 visitors",
    coords: { lat: 32.8519, lng: -96.7923 }
  },

  {
    slug: "university-park",
    nombre: "University Park",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "University Park",
    tipo_zona: "residential",
    pois: [
      { nombre: "University Park", tipo: "municipality", descripcion: "Residential community" },
      { nombre: "Parks", tipo: "recreation", descripcion: "Green spaces" }
    ],
    transferencias: ["Red Line"],
    seo_title: "University Park Station Dallas",
    meta_description: "University Park DART Red Line station in residential community.",
    h1: "University Park Station",
    intro: "University Park is a quiet residential community north of Dallas.",
    descripcion_turistica: "Peaceful residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Quiet neighborhoods", "Residential feel"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.8603, lng: -96.7954 }
  },

  {
    slug: "bush-turnpike",
    nombre: "Bush Turnpike",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "commercial",
    pois: [
      { nombre: "Commercial Area", tipo: "commercial", descripcion: "Office and retail" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Bush Turnpike Station Dallas",
    meta_description: "Bush Turnpike DART Red Line station in commercial area.",
    h1: "Bush Turnpike Station",
    intro: "Bush Turnpike serves the north Dallas commercial district.",
    descripcion_turistica: "Commercial transit connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Useful for business travel"],
    mundial_relevancia: "Business district transit",
    coords: { lat: 32.8762, lng: -96.7892 }
  },

  {
    slug: "northpark",
    nombre: "Northpark",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "shopping",
    pois: [
      { nombre: "Northpark Center", tipo: "shopping", descripcion: "Major shopping mall" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Northpark Station Dallas - Shopping",
    meta_description: "Northpark DART Red Line station at Northpark Center shopping mall.",
    h1: "Northpark Station",
    intro: "Northpark serves the Northpark Center shopping mall.",
    descripcion_turistica: "Major shopping destination.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Access to major shopping mall"],
    mundial_relevancia: "Shopping destination for FIFA 2026 visitors",
    coords: { lat: 32.8921, lng: -96.7934 }
  },

  {
    slug: "coit",
    nombre: "Coit",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "North Dallas neighborhood" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Coit Station Dallas",
    meta_description: "Coit DART Red Line station in north Dallas.",
    h1: "Coit Station",
    intro: "Coit is a residential station in north Dallas.",
    descripcion_turistica: "Residential transit connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Convenient for north Dallas residents"],
    mundial_relevancia: "North Dallas residential area",
    coords: { lat: 32.9048, lng: -96.8043 }
  },

  {
    slug: "cityplace",
    nombre: "CityPlace",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "commercial",
    pois: [
      { nombre: "CityPlace Complex", tipo: "commercial", descripcion: "Office and retail complex" }
    ],
    transferencias: ["Red Line"],
    seo_title: "CityPlace Station Dallas",
    meta_description: "CityPlace DART Red Line station in north Dallas business district.",
    h1: "CityPlace Station",
    intro: "CityPlace serves north Dallas' business district.",
    descripcion_turistica: "Business and commercial hub.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Business district connection"],
    mundial_relevancia: "Business transit hub",
    coords: { lat: 32.9188, lng: -96.8274 }
  },

  {
    slug: "mccart",
    nombre: "McCart",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "North Dallas area" }
    ],
    transferencias: ["Red Line"],
    seo_title: "McCart Station Dallas",
    meta_description: "McCart DART Red Line station in north Dallas.",
    h1: "McCart Station",
    intro: "McCart is a residential stop on the Red Line north of Dallas.",
    descripcion_turistica: "Residential area connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Residential transit"],
    mundial_relevancia: "North Dallas area",
    coords: { lat: 32.9334, lng: -96.8406 }
  },

  {
    slug: "dfw-airport-north",
    nombre: "DFW Airport North",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Irving",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW Airport", tipo: "airport", descripcion: "Airport terminals" }
    ],
    transferencias: ["Orange Line", "Frequent flyer connections"],
    seo_title: "DFW Airport North Station",
    meta_description: "DFW Airport North DART Orange Line station.",
    h1: "DFW Airport North",
    intro: "DFW Airport North is an airport connection on the Orange Line.",
    descripcion_turistica: "Airport transit access.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "03:30", cierre: "01:30", tren_frecuencia: "10 min" },
    tips: ["Early morning/late night flights"],
    mundial_relevancia: "FIFA 2026 airport access",
    coords: { lat: 32.8897, lng: -97.0423 }
  },

  {
    slug: "terminal-a",
    nombre: "Terminal A",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Irving",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW Terminal A", tipo: "airport", descripcion: "Passenger terminal" }
    ],
    transferencias: ["Orange Line", "Terminal connections"],
    seo_title: "Terminal A Station DFW Airport",
    meta_description: "Terminal A DART Orange Line station at DFW Airport.",
    h1: "Terminal A",
    intro: "Terminal A is an airport terminal station on the Orange Line.",
    descripcion_turistica: "Airport terminal connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "03:30", cierre: "01:30", tren_frecuencia: "10 min" },
    tips: ["Direct terminal access"],
    mundial_relevancia: "FIFA 2026 airport terminal access",
    coords: { lat: 32.8985, lng: -97.0301 }
  },

  {
    slug: "terminal-b",
    nombre: "Terminal B",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Irving",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW Terminal B", tipo: "airport", descripcion: "Passenger terminal" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Terminal B Station DFW Airport",
    meta_description: "Terminal B DART Orange Line station at DFW Airport.",
    h1: "Terminal B",
    intro: "Terminal B serves DFW passengers on the Orange Line.",
    descripcion_turistica: "Terminal connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "03:30", cierre: "01:30", tren_frecuencia: "10 min" },
    tips: ["Terminal access"],
    mundial_relevancia: "Airport access",
    coords: { lat: 32.9085, lng: -97.0286 }
  },

  {
    slug: "terminal-c",
    nombre: "Terminal C",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Fort Worth",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW Terminal C", tipo: "airport", descripcion: "Passenger terminal" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Terminal C Station DFW Airport",
    meta_description: "Terminal C DART Orange Line station at DFW Airport.",
    h1: "Terminal C",
    intro: "Terminal C is a DFW passenger terminal on the Orange Line.",
    descripcion_turistica: "Terminal connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "03:30", cierre: "01:30", tren_frecuencia: "10 min" },
    tips: ["Terminal access"],
    mundial_relevancia: "Airport connection",
    coords: { lat: 32.9175, lng: -97.0244 }
  },

  {
    slug: "terminal-d",
    nombre: "Terminal D",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Fort Worth",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW Terminal D", tipo: "airport", descripcion: "Passenger terminal" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Terminal D Station DFW Airport",
    meta_description: "Terminal D DART Orange Line station at DFW Airport.",
    h1: "Terminal D",
    intro: "Terminal D serves DFW passengers on the Orange Line.",
    descripcion_turistica: "Terminal connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "03:30", cierre: "01:30", tren_frecuencia: "10 min" },
    tips: ["Terminal access"],
    mundial_relevancia: "Airport access",
    coords: { lat: 32.9257, lng: -97.0191 }
  },

  {
    slug: "terminal-e",
    nombre: "Terminal E",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas-Fort Worth",
    municipio: "Fort Worth",
    tipo_zona: "airport",
    pois: [
      { nombre: "DFW Terminal E", tipo: "airport", descripcion: "Passenger terminal" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Terminal E Station DFW Airport",
    meta_description: "Terminal E DART Orange Line station at DFW Airport.",
    h1: "Terminal E",
    intro: "Terminal E is a DFW terminal station on the Orange Line.",
    descripcion_turistica: "Terminal connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "03:30", cierre: "01:30", tren_frecuencia: "10 min" },
    tips: ["Terminal access"],
    mundial_relevancia: "Airport connection",
    coords: { lat: 32.9301, lng: -97.0132 }
  },

  {
    slug: "las-colinas",
    nombre: "Las Colinas",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Irving",
    municipio: "Irving",
    tipo_zona: "commercial",
    pois: [
      { nombre: "Las Colinas Business District", tipo: "commercial", descripcion: "Corporate offices" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Las Colinas Station Dallas",
    meta_description: "Las Colinas DART Orange Line station in Irving business district.",
    h1: "Las Colinas Station",
    intro: "Las Colinas serves Irving's major business district.",
    descripcion_turistica: "Business district connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Business travel hub"],
    mundial_relevancia: "Business district",
    coords: { lat: 32.8989, lng: -97.1794 }
  },

  {
    slug: "irving-convention-center",
    nombre: "Irving Convention Center",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Irving",
    municipio: "Irving",
    tipo_zona: "commercial",
    pois: [
      { nombre: "Irving Convention Center", tipo: "convention", descripcion: "Event venue" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Irving Convention Center Station",
    meta_description: "Irving Convention Center DART Orange Line station.",
    h1: "Irving Convention Center",
    intro: "Irving Convention Center serves events and conventions.",
    descripcion_turistica: "Event venue connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Convention access"],
    mundial_relevancia: "Event venue connection",
    coords: { lat: 32.8143, lng: -97.1985 }
  },

  {
    slug: "irving-downtown",
    nombre: "Irving Downtown",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Irving",
    municipio: "Irving",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Irving Downtown", tipo: "downtown", descripcion: "Downtown district" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Irving Downtown Station",
    meta_description: "Irving Downtown DART Orange Line station.",
    h1: "Irving Downtown",
    intro: "Irving Downtown serves the downtown Irving district.",
    descripcion_turistica: "Downtown connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Downtown Irving access"],
    mundial_relevancia: "Irving downtown area",
    coords: { lat: 32.8170, lng: -97.2067 }
  },

  {
    slug: "cowboys-stadium-arlington",
    nombre: "Cowboys Stadium (Arlington)",
    linea: "TRE",
    sistema: "Trinity Railway Express",
    ciudad: "Arlington",
    municipio: "Arlington",
    tipo_zona: "sports",
    pois: [
      { nombre: "AT&T Stadium", tipo: "sports", descripcion: "Cowboys & sports events" }
    ],
    transferencias: ["TRE"],
    seo_title: "Cowboys Stadium (AT&T Stadium) Station Arlington",
    meta_description: "AT&T Stadium TRE station in Arlington for Dallas Cowboys and sports events.",
    h1: "AT&T Stadium Station",
    intro: "AT&T Stadium station serves the iconic Dallas Cowboys facility.",
    descripcion_turistica: "Sports venue connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "30 min" },
    tips: ["Sports event access", "TRE to Dallas"],
    mundial_relevancia: "FIFA 2026 WORLD CUP MATCHES at AT&T Stadium",
    coords: { lat: 32.7473, lng: -97.0936 }
  },

  {
    slug: "downtown-arlington",
    nombre: "Downtown Arlington",
    linea: "TRE",
    sistema: "Trinity Railway Express",
    ciudad: "Arlington",
    municipio: "Arlington",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Arlington Downtown", tipo: "downtown", descripcion: "Downtown district" }
    ],
    transferencias: ["TRE"],
    seo_title: "Downtown Arlington Station",
    meta_description: "Downtown Arlington TRE station.",
    h1: "Downtown Arlington",
    intro: "Downtown Arlington is served by TRE for downtown connections.",
    descripcion_turistica: "Downtown area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "30 min" },
    tips: ["Arlington downtown access"],
    mundial_relevancia: "FIFA 2026 Arlington area",
    coords: { lat: 32.7353, lng: -97.1050 }
  },

  {
    slug: "medical-city",
    nombre: "Medical City",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "healthcare",
    pois: [
      { nombre: "Medical City Hospital Complex", tipo: "healthcare", descripcion: "Hospital facility" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Medical City Station Dallas",
    meta_description: "Medical City DART Red Line station at Medical City hospital.",
    h1: "Medical City Station",
    intro: "Medical City serves the major medical facility.",
    descripcion_turistica: "Healthcare facility connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min peak" },
    tips: ["Hospital access", "24-hour facility"],
    mundial_relevancia: "Emergency medical access for FIFA 2026 visitors",
    coords: { lat: 32.8046, lng: -96.8538 }
  },

  {
    slug: "white-rock",
    nombre: "White Rock",
    linea: "Blue Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "White Rock Lake", tipo: "park", descripcion: "Large urban lake and park" }
    ],
    transferencias: ["Blue Line"],
    seo_title: "White Rock Station Dallas - Lake & Parks",
    meta_description: "White Rock DART Blue Line station near White Rock Lake park.",
    h1: "White Rock Station",
    intro: "White Rock serves the scenic White Rock Lake area.",
    descripcion_turistica: "Lake and recreational area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Lake recreation", "Scenic area"],
    mundial_relevancia: "Parks and recreation for FIFA 2026 visitors",
    coords: { lat: 32.8328, lng: -96.7204 }
  },

  {
    slug: "east-white-rock",
    nombre: "East White Rock",
    linea: "Blue Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "East White Rock Area", tipo: "neighborhood", descripcion: "Residential area near lake" }
    ],
    transferencias: ["Blue Line"],
    seo_title: "East White Rock Station Dallas",
    meta_description: "East White Rock DART Blue Line station.",
    h1: "East White Rock Station",
    intro: "East White Rock is a residential station on the Blue Line.",
    descripcion_turistica: "Residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential access"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.8422, lng: -96.6963 }
  },

  {
    slug: "lawnview",
    nombre: "Lawnview",
    linea: "Blue Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Blue Line"],
    seo_title: "Lawnview Station Dallas",
    meta_description: "Lawnview DART Blue Line station.",
    h1: "Lawnview Station",
    intro: "Lawnview is a residential station on the Blue Line.",
    descripcion_turistica: "Residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential area"],
    mundial_relevancia: "Residential transit",
    coords: { lat: 32.8508, lng: -96.6693 }
  },

  {
    slug: "lake-june",
    nombre: "Lake June",
    linea: "Blue Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Blue Line"],
    seo_title: "Lake June Station Dallas",
    meta_description: "Lake June DART Blue Line station.",
    h1: "Lake June Station",
    intro: "Lake June is a residential station on the Blue Line.",
    descripcion_turistica: "Residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential access"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.8587, lng: -96.6435 }
  },

  {
    slug: "valleyview",
    nombre: "Valleyview",
    linea: "Blue Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Blue Line"],
    seo_title: "Valleyview Station Dallas",
    meta_description: "Valleyview DART Blue Line station.",
    h1: "Valleyview Station",
    intro: "Valleyview is a residential stop on the Blue Line.",
    descripcion_turistica: "Residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential area"],
    mundial_relevancia: "Residential transit",
    coords: { lat: 32.8667, lng: -96.6165 }
  },

  {
    slug: "pleasant-grove",
    nombre: "Pleasant Grove",
    linea: "Blue Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Blue Line"],
    seo_title: "Pleasant Grove Station Dallas",
    meta_description: "Pleasant Grove DART Blue Line station.",
    h1: "Pleasant Grove Station",
    intro: "Pleasant Grove is a residential station on the Blue Line.",
    descripcion_turistica: "Residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential access"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.8751, lng: -96.5897 }
  },

  {
    slug: "downtowner",
    nombre: "Downtowner",
    linea: "Green Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Downtown Area", tipo: "downtown", descripcion: "Downtown district" }
    ],
    transferencias: ["Green Line", "Downtown connections"],
    seo_title: "Downtowner Station Dallas",
    meta_description: "Downtowner DART Green Line station in downtown Dallas.",
    h1: "Downtowner Station",
    intro: "Downtowner is a downtown station on the Green Line.",
    descripcion_turistica: "Downtown connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Downtown access"],
    mundial_relevancia: "Downtown area",
    coords: { lat: 32.7724, lng: -96.7848 }
  },

  {
    slug: "westmoreland",
    nombre: "Westmoreland",
    linea: "Green Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Westmoreland Station Dallas",
    meta_description: "Westmoreland DART Green Line station.",
    h1: "Westmoreland Station",
    intro: "Westmoreland is a residential station on the Green Line.",
    descripcion_turistica: "Residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential access"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.7589, lng: -96.8078 }
  },

  {
    slug: "nearest",
    nombre: "Nearest",
    linea: "Green Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Nearest Station Dallas",
    meta_description: "Nearest DART Green Line station.",
    h1: "Nearest Station",
    intro: "Nearest is a residential stop on the Green Line.",
    descripcion_turistica: "Residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential area"],
    mundial_relevancia: "Residential transit",
    coords: { lat: 32.7461, lng: -96.8233 }
  },

  {
    slug: "illinois-avenue",
    nombre: "Illinois Avenue",
    linea: "Green Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Illinois Avenue Station Dallas",
    meta_description: "Illinois Avenue DART Green Line station.",
    h1: "Illinois Avenue Station",
    intro: "Illinois Avenue is a residential station on the Green Line.",
    descripcion_turistica: "Residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential access"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.7334, lng: -96.8329 }
  },

  {
    slug: "madison-street",
    nombre: "Madison Street",
    linea: "Green Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Downtown Area", tipo: "downtown", descripcion: "Downtown district" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Madison Street Station Dallas",
    meta_description: "Madison Street DART Green Line station.",
    h1: "Madison Street Station",
    intro: "Madison Street serves downtown Dallas on the Green Line.",
    descripcion_turistica: "Downtown connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Downtown access"],
    mundial_relevancia: "Downtown area",
    coords: { lat: 32.7204, lng: -96.8463 }
  },

  {
    slug: "convention-center",
    nombre: "Convention Center",
    linea: "Green Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "convention",
    pois: [
      { nombre: "Dallas Convention Center", tipo: "convention", descripcion: "Event and convention venue" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Convention Center Station Dallas",
    meta_description: "Convention Center DART Green Line station at Dallas Convention Center.",
    h1: "Convention Center Station",
    intro: "Convention Center serves Dallas' major convention facility.",
    descripcion_turistica: "Convention venue connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Convention access", "Major event venue"],
    mundial_relevancia: "Convention center for FIFA 2026 events",
    coords: { lat: 32.7605, lng: -96.7699 }
  },

  {
    slug: "oak-cliff",
    nombre: "Oak Cliff",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Oak Cliff District", tipo: "neighborhood", descripcion: "Historic residential area" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Oak Cliff Station Dallas",
    meta_description: "Oak Cliff DART Orange Line station in historic Oak Cliff neighborhood.",
    h1: "Oak Cliff Station",
    intro: "Oak Cliff is a historic residential neighborhood on the Orange Line.",
    descripcion_turistica: "Historic neighborhood area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Historic neighborhood", "Local shops and restaurants"],
    mundial_relevancia: "Residential area for FIFA 2026 visitors",
    coords: { lat: 32.7692, lng: -96.8020 }
  },

  {
    slug: "kiest-park",
    nombre: "Kiest Park",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Kiest Park", tipo: "park", descripcion: "Public park" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Kiest Park Station Dallas",
    meta_description: "Kiest Park DART Orange Line station.",
    h1: "Kiest Park Station",
    intro: "Kiest Park is a residential station on the Orange Line.",
    descripcion_turistica: "Park area residential.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Park access", "Residential area"],
    mundial_relevancia: "Parks and recreation",
    coords: { lat: 32.7405, lng: -96.8193 }
  },

  {
    slug: "hatcher-street",
    nombre: "Hatcher Street",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Hatcher Street Station Dallas",
    meta_description: "Hatcher Street DART Orange Line station.",
    h1: "Hatcher Street Station",
    intro: "Hatcher Street is a residential station on the Orange Line.",
    descripcion_turistica: "Residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential access"],
    mundial_relevancia: "Residential area",
    coords: { lat: 32.7221, lng: -96.8290 }
  },

  {
    slug: "penn-street",
    nombre: "Penn Street",
    linea: "Orange Line",
    sistema: "DART Light Rail",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Orange Line"],
    seo_title: "Penn Street Station Dallas",
    meta_description: "Penn Street DART Orange Line station.",
    h1: "Penn Street Station",
    intro: "Penn Street is a residential stop on the Orange Line.",
    descripcion_turistica: "Residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "15 min" },
    tips: ["Residential area"],
    mundial_relevancia: "Residential transit",
    coords: { lat: 32.7048, lng: -96.8412 }
  },

  {
    slug: "dallas-streetcar-victory",
    nombre: "Dallas Streetcar - Victory",
    linea: "Dallas Streetcar",
    sistema: "Dallas Streetcar",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Victory Park", tipo: "entertainment", descripcion: "Mixed-use district" }
    ],
    transferencias: ["Streetcar", "TRE", "Red Line"],
    seo_title: "Dallas Streetcar Victory Stop",
    meta_description: "Dallas Streetcar Victory Park stop with entertainment and dining.",
    h1: "Dallas Streetcar - Victory",
    intro: "Dallas Streetcar Victory stop connects to Victory Park entertainment district.",
    descripcion_turistica: "Streetcar connection to trendy Victory Park.",
    accesibilidad: { ascensores: false, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "06:00", cierre: "23:00", tren_frecuencia: "12 min" },
    tips: ["Streetcar provides scenic downtown route"],
    mundial_relevancia: "Downtown transportation",
    coords: { lat: 32.7765, lng: -96.8125 }
  },

  {
    slug: "dallas-streetcar-main-street",
    nombre: "Dallas Streetcar - Main Street",
    linea: "Dallas Streetcar",
    sistema: "Dallas Streetcar",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "Main Street District", tipo: "district", descripcion: "Historic downtown street" }
    ],
    transferencias: ["Streetcar", "Red Line", "Blue Line"],
    seo_title: "Dallas Streetcar Main Street",
    meta_description: "Dallas Streetcar Main Street stop in downtown Dallas.",
    h1: "Dallas Streetcar - Main Street",
    intro: "Dallas Streetcar Main Street stop serves downtown.",
    descripcion_turistica: "Historic downtown street.",
    accesibilidad: { ascensores: false, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "06:00", cierre: "23:00", tren_frecuencia: "12 min" },
    tips: ["Downtown exploration via streetcar"],
    mundial_relevancia: "Downtown transit",
    coords: { lat: 32.7794, lng: -96.8047 }
  },

  {
    slug: "dallas-streetcar-st-paul",
    nombre: "Dallas Streetcar - St. Paul",
    linea: "Dallas Streetcar",
    sistema: "Dallas Streetcar",
    ciudad: "Dallas",
    municipio: "Dallas",
    tipo_zona: "downtown",
    pois: [
      { nombre: "St. Paul District", tipo: "district", descripcion: "Arts and downtown area" }
    ],
    transferencias: ["Streetcar", "Red Line"],
    seo_title: "Dallas Streetcar St. Paul",
    meta_description: "Dallas Streetcar St. Paul stop.",
    h1: "Dallas Streetcar - St. Paul",
    intro: "Dallas Streetcar St. Paul stop in downtown.",
    descripcion_turistica: "Downtown area.",
    accesibilidad: { ascensores: false, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "06:00", cierre: "23:00", tren_frecuencia: "12 min" },
    tips: ["Streetcar connections"],
    mundial_relevancia: "Downtown transportation",
    coords: { lat: 32.7868, lng: -96.7990 }
  },

  {
    slug: "plano-red-line-parker",
    nombre: "Parker Road",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Plano neighborhood" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Parker Road Station Plano",
    meta_description: "Parker Road DART Red Line station in Plano.",
    h1: "Parker Road Station",
    intro: "Parker Road is a residential station in Plano on the Red Line.",
    descripcion_turistica: "Plano residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "20 min" },
    tips: ["Plano area access"],
    mundial_relevancia: "Suburban Dallas area",
    coords: { lat: 33.0063, lng: -96.7125 }
  },

  {
    slug: "texas-station",
    nombre: "Texas Station",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "commercial",
    pois: [
      { nombre: "Commercial Area", tipo: "commercial", descripcion: "Office and retail" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Texas Station Plano",
    meta_description: "Texas Station DART Red Line in Plano commercial area.",
    h1: "Texas Station",
    intro: "Texas Station serves Plano's commercial district.",
    descripcion_turistica: "Commercial connection.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "20 min" },
    tips: ["Commercial area access"],
    mundial_relevancia: "Plano business area",
    coords: { lat: 33.0268, lng: -96.6874 }
  },

  {
    slug: "spring-creek",
    nombre: "Spring Creek",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "Neighborhood" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Spring Creek Station Plano",
    meta_description: "Spring Creek DART Red Line station in Plano.",
    h1: "Spring Creek Station",
    intro: "Spring Creek is a residential station in Plano.",
    descripcion_turistica: "Residential area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "20 min" },
    tips: ["Plano residential access"],
    mundial_relevancia: "Suburban area",
    coords: { lat: 33.0364, lng: -96.6738 }
  },

  {
    slug: "financial-district",
    nombre: "Financial District",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "commercial",
    pois: [
      { nombre: "Corporate Area", tipo: "commercial", descripcion: "Business headquarters" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Financial District Station Plano",
    meta_description: "Financial District DART Red Line station in Plano business hub.",
    h1: "Financial District Station",
    intro: "Financial District serves Plano's corporate headquarters.",
    descripcion_turistica: "Major business district.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "20 min" },
    tips: ["Corporate office access"],
    mundial_relevancia: "Business district",
    coords: { lat: 33.0462, lng: -96.6533 }
  },

  {
    slug: "legacy-drive",
    nombre: "Legacy Drive",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "commercial",
    pois: [
      { nombre: "Legacy Commercial Area", tipo: "commercial", descripcion: "Office complex" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Legacy Drive Station Plano",
    meta_description: "Legacy Drive DART Red Line station in Plano.",
    h1: "Legacy Drive Station",
    intro: "Legacy Drive serves Plano's commercial development.",
    descripcion_turistica: "Commercial area.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "20 min" },
    tips: ["Business district access"],
    mundial_relevancia: "Plano business area",
    coords: { lat: 33.0547, lng: -96.6295 }
  },

  {
    slug: "east-plano",
    nombre: "East Plano",
    linea: "Red Line",
    sistema: "DART Light Rail",
    ciudad: "Plano",
    municipio: "Plano",
    tipo_zona: "residential",
    pois: [
      { nombre: "Residential Area", tipo: "neighborhood", descripcion: "East Plano neighborhood" }
    ],
    transferencias: ["Red Line"],
    seo_title: "East Plano Station",
    meta_description: "East Plano DART Red Line residential station.",
    h1: "East Plano Station",
    intro: "East Plano is a residential endpoint on the Red Line.",
    descripcion_turistica: "Residential neighborhood.",
    accesibilidad: { ascensores: true, rampas: true, banos_adaptados: true, nivel_acceso: "full" },
    horarios: { apertura: "05:00", cierre: "00:30", tren_frecuencia: "20 min" },
    tips: ["End-of-line Plano station"],
    mundial_relevancia: "Plano residential area",
    coords: { lat: 33.0627, lng: -96.6047 }
  }
];

export const estacionesDAL = estacionesDallas;
