export const estacionesSingapore = [
  // ===== NORTH-SOUTH LINE (NSL) =====
  {
    slug: "singapore-orchard",
    nombre: "Orchard",
    linea: ["NSL"],
    sistema: "mrt",
    municipio: "Orchard",
    pois: [
      { nombre: "ION Orchard", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Ngee Ann City", tipo: "comercio", distancia: "200 metros" },
      { nombre: "Orchard Road", tipo: "turismo", distancia: "0 metros" }
    ],
    transferencias: ["North-South Line", "Thomson-East Coast Line"],
    seo_title: "Orchard — Singapore MRT | MetroGuia",
    meta_description: "Orchard MRT: Singapore's premier shopping belt. ION Orchard, Ngee Ann City, Paragon. Best shopping in Southeast Asia.",
    h1: "Orchard Station — Singapore MRT",
    intro: "Singapore's legendary shopping boulevard: a 2.2km strip of world-class malls.",
    tips: ["Orchard Road has over 22 malls connected by underground walkways — perfect for rainy days.", "ION Orchard has a free observation deck on the 56th floor (ION Sky) on weekends.", "Food courts in basement levels offer excellent hawker-style food at fraction of restaurant prices."],
    descripcion_turistica: "Orchard Road is Singapore's most famous address — a 2.2km shopping boulevard lined with every luxury brand and major mall in a continuous line. ION Orchard, Paragon, Ngee Ann City, 313@somerset, and Mandarin Gallery are among the dozens of connected shopping centers. The area transforms beautifully during Christmas when the entire street is lit with elaborate light displays. Underground passages connect many malls making it pleasantly air-conditioned even in Singapore's tropical heat.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. All Singapore MRT stations have lifts." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Trains 5:30 AM to midnight. Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "ION Orchard", tipo: "Comercio", distancia: "0 metros", descripcion: "Flagship mall with 8 basement levels and 56-floor tower." },
      { nombre: "Emerald Hill", tipo: "Arquitectura", distancia: "300 metros", descripcion: "Heritage shophouse street with bars and restaurants." }
    ]
  },
  {
    slug: "singapore-raffles-place",
    nombre: "Raffles Place",
    linea: ["NSL", "EWL"],
    sistema: "mrt",
    municipio: "Downtown Core",
    pois: [
      { nombre: "Raffles Place", tipo: "negocios", distancia: "0 metros" },
      { nombre: "The Fullerton Hotel", tipo: "hotel", distancia: "300 metros" },
      { nombre: "Boat Quay", tipo: "entretenimiento", distancia: "200 metros" }
    ],
    transferencias: ["North-South Line", "East-West Line"],
    seo_title: "Raffles Place — Singapore MRT | MetroGuia",
    meta_description: "Raffles Place MRT: Singapore's CBD. Fullerton Hotel, Boat Quay riverside dining, Singapore River promenade.",
    h1: "Raffles Place Station — Singapore MRT",
    intro: "Singapore's financial heart: skyscrapers, colonial grandeur, and riverside dining.",
    tips: ["Walk along the Singapore River to Clarke Quay or Boat Quay for excellent dining options.", "The Fullerton Hotel (former General Post Office) is a beautiful colonial building worth seeing.", "The area is quiet on weekends — shops may be closed but riverside is peaceful."],
    descripcion_turistica: "Raffles Place is Singapore's central business district, dominated by towering bank headquarters and surrounded by colonial-era civic buildings. The Singapore River waterfront at Boat Quay has been transformed from a working port into a strip of riverside restaurants and bars housed in restored shophouses. The Fullerton Hotel (1928), formerly Singapore's General Post Office, is an architectural landmark. A short walk leads to the historic Raffles Hotel and the famous Long Bar where the Singapore Sling was invented.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Boat Quay", tipo: "Gastronomia", distancia: "200 metros", descripcion: "Riverside dining strip in restored shophouses." },
      { nombre: "Fullerton Hotel", tipo: "Arquitectura", distancia: "300 metros", descripcion: "Former General Post Office, now luxury colonial hotel." }
    ]
  },
  {
    slug: "singapore-marina-bay",
    nombre: "Marina Bay",
    linea: ["NSL", "CCL", "DTL"],
    sistema: "mrt",
    municipio: "Marina Bay",
    pois: [
      { nombre: "Marina Bay Sands", tipo: "hotel", distancia: "300 metros" },
      { nombre: "Gardens by the Bay", tipo: "turismo", distancia: "400 metros" },
      { nombre: "ArtScience Museum", tipo: "cultura", distancia: "300 metros" }
    ],
    transferencias: ["North-South Line", "Circle Line", "Downtown Line"],
    seo_title: "Marina Bay — Singapore MRT | MetroGuia",
    meta_description: "Marina Bay MRT: Marina Bay Sands, Gardens by the Bay, ArtScience Museum. Singapore's iconic skyline district.",
    h1: "Marina Bay Station — Singapore MRT",
    intro: "Singapore's showpiece: the iconic skyline, supertrees, and the world's most photographed hotel.",
    tips: ["The Spectra light show at Marina Bay Sands is free and happens 9pm and 10pm daily (9pm/10pm/11pm Fri-Sat).", "Gardens by the Bay's Supertree Grove light show (Garden Rhapsody) is free at 7:45pm and 8:45pm.", "SkyPark Observation Deck at MBS is worth it for sunset views — book online to avoid queues."],
    descripcion_turistica: "Marina Bay is Singapore's signature district and one of Asia's most spectacular urban spaces. The Marina Bay Sands integrated resort features the iconic infinity pool atop three towers, the ArtScience Museum, luxury hotel, casino, and high-end mall. Gardens by the Bay stretches alongside with its remarkable Supertree Grove — 18 tree-like structures up to 50m tall covered in vertical gardens that put on a nightly light and music show. The Marina Barrage and waterfront promenade complete the picture.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 3-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Gardens by the Bay", tipo: "Turismo", distancia: "400 metros", descripcion: "Supertrees, Cloud Forest, and Flower Dome gardens." },
      { nombre: "Marina Bay Sands", tipo: "Hotel", distancia: "300 metros", descripcion: "Iconic resort with rooftop infinity pool and SkyPark." }
    ]
  },
  {
    slug: "singapore-city-hall",
    nombre: "City Hall",
    linea: ["NSL", "EWL"],
    sistema: "mrt",
    municipio: "Civic District",
    pois: [
      { nombre: "St. Andrew's Cathedral", tipo: "cultura", distancia: "200 metros" },
      { nombre: "The Padang", tipo: "historia", distancia: "100 metros" },
      { nombre: "National Gallery Singapore", tipo: "cultura", distancia: "300 metros" }
    ],
    transferencias: ["North-South Line", "East-West Line"],
    seo_title: "City Hall — Singapore MRT | MetroGuia",
    meta_description: "City Hall MRT: Singapore's Civic District. National Gallery, Padang, St. Andrew's Cathedral, Raffles Hotel.",
    h1: "City Hall Station — Singapore MRT",
    intro: "Singapore's colonial heart: grand civic buildings, the Padang cricket ground, and the original Raffles Hotel.",
    tips: ["The National Gallery Singapore is in the former Supreme Court and City Hall buildings — architecturally stunning.", "Raffles Hotel is open to non-guests for lobby viewing and the famous Long Bar.", "The Padang is Singapore's main open space for national events — watch for free outdoor concerts."],
    descripcion_turistica: "City Hall station sits at the center of Singapore's Civic District, Singapore's historic colonial core. The National Gallery Singapore occupies the former Supreme Court and City Hall buildings, housing Southeast Asia's largest public collection of modern art. The Padang cricket ground is one of Singapore's oldest open spaces, hosting national events since colonial times. Raffles Hotel (1887), just north, is a national monument and the birthplace of the Singapore Sling.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Raffles Hotel", tipo: "Historia", distancia: "300 metros", descripcion: "1887 colonial hotel, national monument. Birthplace of Singapore Sling." },
      { nombre: "National Gallery Singapore", tipo: "Cultura", distancia: "300 metros", descripcion: "SEA's largest art museum in colonial civic buildings." }
    ]
  },
  // ===== NORTH-EAST LINE (NEL) =====
  {
    slug: "singapore-chinatown",
    nombre: "Chinatown",
    linea: ["NEL", "DTL"],
    sistema: "mrt",
    municipio: "Chinatown",
    pois: [
      { nombre: "Buddha Tooth Relic Temple", tipo: "cultura", distancia: "100 metros" },
      { nombre: "Sri Mariamman Temple", tipo: "cultura", distancia: "200 metros" },
      { nombre: "Chinatown Heritage Centre", tipo: "cultura", distancia: "100 metros" }
    ],
    transferencias: ["North-East Line", "Downtown Line"],
    seo_title: "Chinatown — Singapore MRT | MetroGuia",
    meta_description: "Chinatown MRT: Buddha Tooth Relic Temple, hawker center, traditional shops. Singapore's most vibrant heritage district.",
    h1: "Chinatown Station — Singapore MRT",
    intro: "Vibrant and fragrant: Singapore's best hawker food, Buddhist temples, and heritage shophouses.",
    tips: ["The Maxwell Food Centre nearby is one of Singapore's most famous hawker centers — try Tian Tian Hainanese Chicken Rice.", "The Buddha Tooth Relic Temple has a free museum on the upper floors.", "Evening is best for Chinatown when the hawker centers are busiest."],
    descripcion_turistica: "Singapore's Chinatown is one of the city's most vibrant neighborhoods, paradoxically more Chinese in character than the rest of modern Singapore. Pagoda Street and Smith Street are lined with heritage shophouses selling everything from traditional medicines to Paper Street goods. The district has three major temples: the Buddhist Buddha Tooth Relic Temple, the Taoist Thian Hock Keng Temple, and the Hindu Sri Mariamman Temple — reflecting the area's multicultural reality. The Maxwell Food Centre is legendary for hawker cuisine.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Maxwell Food Centre", tipo: "Gastronomia", distancia: "300 metros", descripcion: "Famous hawker center with legendary Chicken Rice." },
      { nombre: "Buddha Tooth Relic Temple", tipo: "Cultura", distancia: "100 metros", descripcion: "Tang dynasty-style Buddhist temple with museum." }
    ]
  },
  {
    slug: "singapore-little-india",
    nombre: "Little India",
    linea: ["NEL", "DTL"],
    sistema: "mrt",
    municipio: "Little India",
    pois: [
      { nombre: "Sri Veeramakaliamman Temple", tipo: "cultura", distancia: "100 metros" },
      { nombre: "Mustafa Centre", tipo: "comercio", distancia: "500 metros" },
      { nombre: "Little India Arcade", tipo: "comercio", distancia: "200 metros" }
    ],
    transferencias: ["North-East Line", "Downtown Line"],
    seo_title: "Little India — Singapore MRT | MetroGuia",
    meta_description: "Little India MRT: vibrant Tamil neighborhood. Sri Veeramakaliamman Temple, Mustafa 24-hour mall, spice shops.",
    h1: "Little India Station — Singapore MRT",
    intro: "The subcontinent in Singapore: sensory overload of flowers, spices, textiles, and temples.",
    tips: ["Mustafa Centre is a 24-hour department store — great for bargains on electronics and groceries.", "Visit during Deepavali (October/November) for spectacular street decorations.", "The wet markets on Serangoon Road in the morning are a memorable experience."],
    descripcion_turistica: "Little India is one of Singapore's most vibrant ethnic neighborhoods, centered on Serangoon Road. The streets are bright with marigold garlands, the air heavy with incense and spices, and the colorful shophouses sell everything from Bollywood DVDs to fresh jasmine strings. The Sri Veeramakaliamman Temple is the most photographed, dedicated to the goddess Kali with its elaborate gopuram tower. The 24-hour Mustafa Centre is the ultimate bargain shopping destination.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Sri Veeramakaliamman Temple", tipo: "Cultura", distancia: "100 metros", descripcion: "Oldest Hindu temple in Singapore with colorful gopuram." },
      { nombre: "Mustafa Centre", tipo: "Comercio", distancia: "500 metros", descripcion: "Legendary 24-hour bargain shopping center." }
    ]
  },
  {
    slug: "singapore-harbourfront",
    nombre: "HarbourFront",
    linea: ["NEL", "CCL"],
    sistema: "mrt",
    municipio: "HarbourFront",
    pois: [
      { nombre: "VivoCity Mall", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Sentosa Island", tipo: "turismo", distancia: "500 metros" },
      { nombre: "Cable Car to Sentosa", tipo: "transporte", distancia: "200 metros" }
    ],
    transferencias: ["North-East Line", "Circle Line", "Sentosa Express"],
    seo_title: "HarbourFront — Singapore MRT | MetroGuia",
    meta_description: "HarbourFront MRT: gateway to Sentosa Island. VivoCity mall, cable car, Sentosa Express. Universal Studios Singapore access.",
    h1: "HarbourFront Station — Singapore MRT",
    intro: "Gateway to Sentosa: Singapore's leisure island with Universal Studios, beaches, and cable cars.",
    tips: ["The Sentosa Express (monorail) is the easiest way to Sentosa — board from VivoCity Level 3.", "Cable car offers spectacular harbour views — worth it for the experience.", "VivoCity's rooftop has a splash pool and great views over Sentosa and the harbour."],
    descripcion_turistica: "HarbourFront is Singapore's gateway to leisure, connecting the southern waterfront to Sentosa Island. VivoCity — Singapore's largest mall — anchors the station with its rooftop splash pad overlooking the harbour. From here, the Sentosa Express monorail and cable cars take visitors to Sentosa Island home to Universal Studios Singapore, S.E.A. Aquarium, Resorts World, and three beaches. The station also serves the Singapore Cruise Centre for cruise ship terminals.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. VivoCity is step-free throughout." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Sentosa Island", tipo: "Turismo", distancia: "500 metros", descripcion: "Universal Studios, beaches, casino, cable car." },
      { nombre: "VivoCity", tipo: "Comercio", distancia: "0 metros", descripcion: "Singapore's largest mall with rooftop pool." }
    ]
  },
  // ===== EAST-WEST LINE (EWL) =====
  {
    slug: "singapore-bugis",
    nombre: "Bugis",
    linea: ["EWL", "DTL"],
    sistema: "mrt",
    municipio: "Bugis",
    pois: [
      { nombre: "Bugis Street Market", tipo: "comercio", distancia: "100 metros" },
      { nombre: "Haji Lane", tipo: "moda", distancia: "200 metros" },
      { nombre: "Sultan Mosque", tipo: "cultura", distancia: "400 metros" }
    ],
    transferencias: ["East-West Line", "Downtown Line"],
    seo_title: "Bugis — Singapore MRT | MetroGuia",
    meta_description: "Bugis MRT: street shopping, Haji Lane boutiques, Sultan Mosque and Kampong Glam. Arab Street charm.",
    h1: "Bugis Station — Singapore MRT",
    intro: "From vintage market to Arab Street: Singapore's most eclectic neighborhood.",
    tips: ["Bugis Street is touristy but good for souvenirs and cheap fashion.", "Haji Lane is the cooler alternative with indie boutiques and murals.", "Sultan Mosque is free to enter outside prayer times — dress modestly."],
    descripcion_turistica: "Bugis straddles two very different worlds: the touristy Bugis Street Market (cheap clothing and souvenirs) and the genuine cultural treasure of Kampong Glam, Singapore's Malay Heritage Quarter. Haji Lane is a narrow colorful alley packed with boutiques, cafes, and street art. The golden-domed Sultan Mosque is Singapore's largest mosque and an impressive landmark. The surrounding Arab Street area has fabric shops, Persian carpets, and excellent Middle Eastern restaurants.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Haji Lane", tipo: "Moda", distancia: "200 metros", descripcion: "Colorful alley of indie boutiques and street art." },
      { nombre: "Sultan Mosque", tipo: "Cultura", distancia: "400 metros", descripcion: "Singapore's largest mosque with golden dome." }
    ]
  },
  {
    slug: "singapore-changi-airport",
    nombre: "Changi Airport",
    linea: ["EWL"],
    sistema: "mrt",
    municipio: "Changi",
    pois: [
      { nombre: "Jewel Changi Airport", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Rain Vortex (waterfall)", tipo: "turismo", distancia: "0 metros" },
      { nombre: "Terminals 1-4", tipo: "transporte", distancia: "0 metros" }
    ],
    transferencias: ["East-West Line", "MRT Airport connector"],
    seo_title: "Changi Airport — Singapore MRT | MetroGuia",
    meta_description: "Changi Airport MRT: world's best airport with Jewel, Rain Vortex waterfall, Canopy Park. Direct MRT link.",
    h1: "Changi Airport Station — Singapore MRT",
    intro: "The world's best airport is also a tourist attraction in its own right.",
    tips: ["Jewel Changi is worth visiting even if you're not flying — Rain Vortex and Canopy Park are spectacular.", "The MRT from City Hall takes about 30 minutes to the airport.", "Many airport shops and restaurants are open to non-travelers in public areas."],
    descripcion_turistica: "Changi Airport has repeatedly been voted the world's best airport and the opening of Jewel Changi Airport in 2019 elevated it to a genuine tourist attraction. The glass-and-steel dome houses the world's tallest indoor waterfall (Rain Vortex at 40m), a forest valley, and premium shopping and dining. The airport serves as the aviation hub for Southeast Asia and has excellent connections across Asia and to all global destinations.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Airport is fully wheelchair accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Jewel Changi", tipo: "Turismo", distancia: "0 metros", descripcion: "Glass dome with 40m indoor waterfall and forest." }
    ]
  },
  // ===== CIRCLE LINE (CCL) =====
  {
    slug: "singapore-esplanade",
    nombre: "Esplanade",
    linea: ["CCL"],
    sistema: "mrt",
    municipio: "Marina Centre",
    pois: [
      { nombre: "Esplanade Theatre", tipo: "cultura", distancia: "0 metros" },
      { nombre: "Merlion Park", tipo: "turismo", distancia: "300 metros" },
      { nombre: "Marina Bay Waterfront", tipo: "turismo", distancia: "100 metros" }
    ],
    transferencias: ["Circle Line"],
    seo_title: "Esplanade — Singapore MRT | MetroGuia",
    meta_description: "Esplanade MRT: Esplanade Theatre, Merlion Park, Marina Bay waterfront. Best waterfront walking in Singapore.",
    h1: "Esplanade Station — Singapore MRT",
    intro: "Singapore's arts waterfront: the famous 'durian' theatres and the Merlion icon.",
    tips: ["The Esplanade Theatres offer free outdoor performances regularly — check the schedule.", "Merlion Park is best visited at night when the skyline is lit.", "Walk the promenade from Merlion to Marina Bay Sands for Singapore's most famous views."],
    descripcion_turistica: "Esplanade station serves Singapore's waterfront arts district. The Esplanade — Theatres on the Bay, nicknamed the 'durian' for its distinctive spiked domes, is Singapore's premier performing arts venue hosting international and local productions. The adjacent waterfront promenade leads to Merlion Park — where the iconic half-lion, half-fish statue spouts water against a backdrop of Marina Bay Sands — creating Singapore's most photographed scene.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "Merlion Park", tipo: "Turismo", distancia: "300 metros", descripcion: "Singapore's most famous icon — free and open 24/7." },
      { nombre: "Esplanade Theatres", tipo: "Cultura", distancia: "0 metros", descripcion: "Singapore's premier performing arts venue." }
    ]
  },
  // ===== DOWNTOWN LINE (DTL) =====
  {
    slug: "singapore-bayfront",
    nombre: "Bayfront",
    linea: ["DTL", "CCL"],
    sistema: "mrt",
    municipio: "Marina Bay",
    pois: [
      { nombre: "Marina Bay Sands", tipo: "hotel", distancia: "0 metros" },
      { nombre: "Gardens by the Bay", tipo: "turismo", distancia: "200 metros" },
      { nombre: "The Shoppes at Marina Bay Sands", tipo: "comercio", distancia: "0 metros" }
    ],
    transferencias: ["Downtown Line", "Circle Line"],
    seo_title: "Bayfront — Singapore MRT | MetroGuia",
    meta_description: "Bayfront MRT: direct access to Marina Bay Sands hotel, casino, The Shoppes mall, and Gardens by the Bay.",
    h1: "Bayfront Station — Singapore MRT",
    intro: "Step out directly into Singapore's most iconic resort complex.",
    tips: ["The station exits directly into The Shoppes mall at Marina Bay Sands — completely climate-controlled.", "The rooftop infinity pool is for hotel guests only — but the SkyPark Observation Deck is open to all.", "Gardens by the Bay Supertree light show (Garden Rhapsody) at 7:45pm and 8:45pm is free."],
    descripcion_turistica: "Bayfront station is the most direct entry point to the Marina Bay Sands (MBS) complex, one of the world's most expensive standalone casino properties. The Shoppes at MBS is an ultra-luxury mall with a canal inside where gondolas operate. The ArtScience Museum's lotus-inspired building hosts major international exhibitions. Direct covered walkways connect to Gardens by the Bay without exposure to the tropical heat.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Complete climate-controlled connectivity to MBS." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: S$1.19–S$2.17 (EZ-Link card)" },
    lugares_cercanos: [
      { nombre: "ArtScience Museum", tipo: "Cultura", distancia: "100 metros", descripcion: "Lotus-shaped museum with major international exhibitions." }
    ]
  }
];
