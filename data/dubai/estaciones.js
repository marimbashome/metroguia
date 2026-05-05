export const estacionesDubai = [
  // ===== RED LINE =====
  {
    slug: "dubai-burjuman",
    nombre: "BurJuman",
    linea: ["Red", "Green"],
    sistema: "metro",
    municipio: "Bur Dubai",
    pois: [
      { nombre: "BurJuman Mall", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Bur Dubai Souks", tipo: "comercio", distancia: "500 metros" },
      { nombre: "Al Fahidi Historical Neighbourhood", tipo: "cultura", distancia: "800 metros" }
    ],
    transferencias: ["Red Line", "Green Line"],
    seo_title: "BurJuman — Dubai Metro | MetroGuia",
    meta_description: "BurJuman Dubai Metro: Red and Green Line interchange. BurJuman Mall, Bur Dubai historic district, Al Fahidi Museum.",
    h1: "BurJuman Station — Dubai Metro",
    intro: "Old Dubai meets new: the Red/Green interchange between the heritage district and modern shopping.",
    tips: ["The historic Al Fahidi neighbourhood is a 15-minute walk — best visited in the morning before the heat.", "BurJuman Mall is mid-range with good food court options.", "The area has many Indian and Pakistani restaurants at excellent prices."],
    descripcion_turistica: "BurJuman is the only station serving both the Red and Green Lines, making it a key interchange in the Dubai Metro network. The surrounding Bur Dubai district is one of the most historically rich areas of the city, home to the Al Fahidi Historical Neighbourhood (formerly Bastakiya), the Dubai Museum, and the traditional dhow wharfage on Dubai Creek. The BurJuman mall connects directly to the station.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Gold Class and Silver Class cars available." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Sat-Thu 5am-midnight, Fri 10am-1am. Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Dubai Museum", tipo: "Cultura", distancia: "900 metros", descripcion: "History of Dubai in a 1787 fort. Best museum for heritage." },
      { nombre: "Al Fahidi Neighbourhood", tipo: "Historia", distancia: "800 metros", descripcion: "Restored historic district with wind tower architecture." }
    ]
  },
  {
    slug: "dubai-union",
    nombre: "Union",
    linea: ["Red", "Green"],
    sistema: "metro",
    municipio: "Deira",
    pois: [
      { nombre: "Gold Souk", tipo: "comercio", distancia: "1 km" },
      { nombre: "Spice Souk", tipo: "comercio", distancia: "800 metros" },
      { nombre: "Deira City Centre", tipo: "comercio", distancia: "1.5 km" }
    ],
    transferencias: ["Red Line", "Green Line"],
    seo_title: "Union — Dubai Metro | MetroGuia",
    meta_description: "Union Dubai Metro: Red-Green Line interchange in Deira. Near Gold Souk, Spice Souk, Dubai Creek traditional market.",
    h1: "Union Station — Dubai Metro",
    intro: "Gateway to old Deira: where the glittering gold souk meets the aromatic spice souk.",
    tips: ["Take the abra (wooden water taxi) across Dubai Creek from Bur Dubai or Deira — AED 1 one way.", "The Gold Souk is best in the morning for calmer shopping before tour groups arrive.", "Haggling is expected and effective in both the gold and spice souks."],
    descripcion_turistica: "Union station serves the northern part of the Red and Green lines, giving access to Old Dubai's traditional souks. The Gold Souk is one of the world's largest gold markets with over 300 retailers — the sheer volume of gold jewelry on display is staggering. Across the street, the Spice Souk fills the air with saffron, frankincense, and exotic spices. Dubai Creek, the historic waterway that gave birth to the city, runs through this area and is best crossed by traditional abra.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Sat-Thu 5am-midnight. Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Gold Souk", tipo: "Comercio", distancia: "1 km", descripcion: "World's largest gold jewelry market." },
      { nombre: "Spice Souk", tipo: "Comercio", distancia: "800 metros", descripcion: "Traditional market selling spices, frankincense, herbs." }
    ]
  },
  {
    slug: "dubai-mall-of-the-emirates",
    nombre: "Mall of the Emirates",
    linea: ["Red"],
    sistema: "metro",
    municipio: "Al Barsha",
    pois: [
      { nombre: "Mall of the Emirates", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Ski Dubai", tipo: "entretenimiento", distancia: "0 metros" },
      { nombre: "VOX Cinemas", tipo: "entretenimiento", distancia: "0 metros" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Mall of the Emirates — Dubai Metro | MetroGuia",
    meta_description: "Mall of the Emirates Dubai Metro: direct access to Ski Dubai, luxury shopping, and one of world's largest malls.",
    h1: "Mall of the Emirates Station — Dubai Metro",
    intro: "Ski in the desert: the mall where you can hit the slopes in 35°C outdoor heat.",
    tips: ["Ski Dubai is a full indoor ski resort with black diamond runs — book in advance.", "The mall has over 600 shops including every major luxury brand.", "Dubai-Al Barsha hotels nearby are often better value than Downtown properties."],
    descripcion_turistica: "Mall of the Emirates is one of Dubai's largest and most famous malls, most remarkable for housing Ski Dubai — a full indoor ski resort with real snow, ski runs, and a snow park. The mall itself has over 600 retail stores across multiple floors, a Carrefour hypermarket, 14-screen cinema, and the Harvey Nichols department store. The station connects directly into the mall via covered walkway, making this one of the most convenient stations on the Red Line.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Connected to mall via climate-controlled walkway." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Sat-Thu 5am-midnight, Fri 10am-1am. Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Ski Dubai", tipo: "Entretenimiento", distancia: "0 metros", descripcion: "Indoor ski resort with real snow — 5 runs including black diamond." }
    ]
  },
  {
    slug: "dubai-burj-khalifa-dubai-mall",
    nombre: "Burj Khalifa / Dubai Mall",
    linea: ["Red"],
    sistema: "metro",
    municipio: "Downtown Dubai",
    pois: [
      { nombre: "Burj Khalifa", tipo: "turismo", distancia: "500 metros" },
      { nombre: "The Dubai Mall", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Dubai Fountain", tipo: "turismo", distancia: "300 metros" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Burj Khalifa / Dubai Mall — Dubai Metro | MetroGuia",
    meta_description: "Burj Khalifa Dubai Metro: world's tallest building, Dubai Mall, Dubai Fountain. Downtown Dubai's iconic hub.",
    h1: "Burj Khalifa / Dubai Mall Station — Dubai Metro",
    intro: "The world's tallest building, biggest mall, and most spectacular fountain — all at one station.",
    tips: ["A free air-conditioned shuttle bus runs from the station to The Dubai Mall — saves a 15-min walk in the heat.", "Book At the Top (Burj Khalifa observatory) online well in advance — tickets sell out days ahead.", "The Dubai Fountain show is free and runs every 30 minutes from 6pm. Best viewed from Dubai Mall waterfront."],
    descripcion_turistica: "This station serves Dubai's most iconic cluster of attractions. The Burj Khalifa — at 828 meters the world's tallest structure — dominates the skyline and offers observation decks at levels 124 and 148. The Dubai Mall is the world's largest mall by total area with over 1,200 stores, an indoor ice rink, Dubai Aquarium, and the Virtual Reality Park. The Dubai Fountain on Burj Lake performs elaborate choreographed water and light shows to music. The entire Downtown Dubai area is the most spectacular urban development on Earth.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Free shuttle to mall." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Sat-Thu 5am-midnight. Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Burj Khalifa", tipo: "Turismo", distancia: "500 metros", descripcion: "World's tallest building at 828m. Observatory levels 124 & 148." },
      { nombre: "Dubai Fountain", tipo: "Turismo", distancia: "300 metros", descripcion: "World's largest choreographed fountain — free nightly shows." }
    ]
  },
  {
    slug: "dubai-ibn-battuta",
    nombre: "Ibn Battuta",
    linea: ["Red"],
    sistema: "metro",
    municipio: "Jebel Ali",
    pois: [
      { nombre: "Ibn Battuta Mall", tipo: "comercio", distancia: "0 metros" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Ibn Battuta — Dubai Metro | MetroGuia",
    meta_description: "Ibn Battuta Dubai Metro: themed mega-mall inspired by the great explorer's travels. Six courts: China, India, Persia, Egypt, Tunisia, Andalusia.",
    h1: "Ibn Battuta Station — Dubai Metro",
    intro: "The world's most elaborately themed mall — six countries in one building.",
    tips: ["Each court has a distinct architectural theme — the Persian and Indian courts are particularly impressive.", "The mall is less crowded than Downtown malls and has better parking if driving.", "Nearby Jumeirah Golf Estates area has some of Dubai's best golf courses."],
    descripcion_turistica: "Ibn Battuta Mall is named after the 14th-century Moroccan explorer and is divided into six sections each representing a region he visited: China, India, Persia, Egypt, Tunisia, and Andalusia. Each court has elaborate themed architecture — the China Court has a giant sailing vessel, the Persia Court has a hand-painted tile dome — creating one of the world's most visually spectacular shopping experiences.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Ibn Battuta Mall", tipo: "Comercio", distancia: "0 metros", descripcion: "World's largest themed mall — 6 cultural zones." }
    ]
  },
  {
    slug: "dubai-airport-terminal-3",
    nombre: "Airport Terminal 3",
    linea: ["Red"],
    sistema: "metro",
    municipio: "Garhoud",
    pois: [
      { nombre: "Dubai International Airport T3", tipo: "transporte", distancia: "0 metros" },
      { nombre: "Emirates Airline HQ", tipo: "negocios", distancia: "0 metros" }
    ],
    transferencias: ["Red Line"],
    seo_title: "Airport Terminal 3 — Dubai Metro | MetroGuia",
    meta_description: "Dubai Airport Terminal 3 Metro: direct metro connection to Dubai International Airport. Fastest way to/from downtown Dubai.",
    h1: "Airport Terminal 3 — Dubai Metro",
    intro: "Direct metro connection to the world's busiest international airport.",
    tips: ["Terminal 3 serves Emirates and other airlines. Terminal 1 (separate station) serves most other carriers.", "The metro journey to BurJuman takes ~20 minutes — much faster than a taxi in rush hour.", "Airport Metro stations open until midnight/1am depending on day."],
    descripcion_turistica: "Dubai International Airport is consistently one of the world's busiest airports for international traffic. The Red Line provides a direct metro connection between Terminal 1 and Terminal 3, linking to the entire Dubai Metro network. Terminal 3 is the home of Emirates airline, one of the world's largest carriers, with its ultra-modern facilities including the famous Emirates First Class Lounge.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Direct access to airport departure level." },
    horarios: { apertura: "05:00", cierre: "01:00", notas: "Extended hours for airport service. Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Dubai International Airport", tipo: "Transporte", distancia: "0 metros", descripcion: "World's busiest international airport by passenger numbers." }
    ]
  },
  // ===== GREEN LINE =====
  {
    slug: "dubai-al-fahidi",
    nombre: "Al Fahidi",
    linea: ["Green"],
    sistema: "metro",
    municipio: "Bur Dubai",
    pois: [
      { nombre: "Al Fahidi Historical Neighbourhood", tipo: "cultura", distancia: "300 metros" },
      { nombre: "Dubai Museum", tipo: "cultura", distancia: "200 metros" },
      { nombre: "Textile Souk", tipo: "comercio", distancia: "400 metros" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Al Fahidi — Dubai Metro | MetroGuia",
    meta_description: "Al Fahidi Dubai Metro Green Line: historic Bastakiya neighbourhood, Dubai Museum, textile souk, Dubai Creek.",
    h1: "Al Fahidi Station — Dubai Metro",
    intro: "The best stop for Old Dubai: wind towers, heritage museums, and the historic creek.",
    tips: ["The Al Fahidi Historical Neighbourhood has excellent art galleries housed in restored houses.", "Take the abra (water taxi) from Al Fahidi to Deira — a quintessential Dubai experience for AED 1.", "The XVA Art Hotel inside the historical neighbourhood is beautiful for coffee."],
    descripcion_turistica: "Al Fahidi station gives the best access to historic Dubai. The Al Fahidi Historical Neighbourhood (formerly Bastakiya) is a perfectly preserved area of late 19th-century merchant houses with distinctive wind towers (barjeel) — an ancient form of air conditioning. The area now houses art galleries, boutique hotels, and cultural spaces. The Dubai Museum in the 1787 Al Fahidi Fort tells the story of Dubai's transformation from fishing village to global city.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Al Fahidi Historical Neighbourhood", tipo: "Historia", distancia: "300 metros", descripcion: "Best-preserved historic area with wind tower architecture." }
    ]
  },
  {
    slug: "dubai-deira-city-centre",
    nombre: "Deira City Centre",
    linea: ["Green"],
    sistema: "metro",
    municipio: "Deira",
    pois: [
      { nombre: "Deira City Centre Mall", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Fish Market", tipo: "mercado", distancia: "1 km" },
      { nombre: "Mamzar Beach Park", tipo: "playa", distancia: "2 km" }
    ],
    transferencias: ["Green Line"],
    seo_title: "Deira City Centre — Dubai Metro | MetroGuia",
    meta_description: "Deira City Centre Dubai Metro: major mall in Deira, near traditional fish market and Mamzar beach.",
    h1: "Deira City Centre Station — Dubai Metro",
    intro: "Northern Dubai's original major mall — and gateway to the real traditional Deira.",
    tips: ["The Deira Fish Market is one of the most authentic experiences in Dubai — visit early morning.", "Deira is less touristy and more local than Downtown — excellent for authentic Middle Eastern food.", "Mamzar Beach Park is Dubai's best free beach option (small entry fee)."],
    descripcion_turistica: "Deira City Centre was Dubai's first major mall (1995) and remains a key retail hub in the northern part of the city. The surrounding Deira district is the most traditionally Arab part of modern Dubai, home to the traditional souks, dhow wharfage, and the authentic Deira Fish Market where the day's catch is auctioned in the early morning. The area offers a much more local Dubai experience than the tourist corridors of Downtown.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: AED 2-7.5 (Nol card)" },
    lugares_cercanos: [
      { nombre: "Deira Fish Market", tipo: "Mercado", distancia: "1 km", descripcion: "Traditional fish auction market — best at 6-8am." }
    ]
  }
];
