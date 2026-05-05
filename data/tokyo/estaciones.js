export const estacionesTokyo = [
  // ===== GINZA LINE (G) =====
  {
    slug: "tokyo-shibuya",
    nombre: "Shibuya",
    linea: ["G", "H", "F", "Z"],
    sistema: "metro",
    municipio: "Shibuya",
    pois: [
      { nombre: "Shibuya Crossing", tipo: "turismo", distancia: "0 metros" },
      { nombre: "Shibuya 109", tipo: "comercio", distancia: "100 metros" },
      { nombre: "Hachiko Statue", tipo: "turismo", distancia: "50 metros" },
      { nombre: "Bunkamura", tipo: "cultura", distancia: "300 metros" }
    ],
    transferencias: ["Ginza", "Hibiya", "Fukutoshin", "Hanzomon", "JR Yamanote", "Tokyu"],
    seo_title: "Shibuya — Tokyo Metro | MetroGuia",
    meta_description: "Shibuya station guide: Ginza, Hibiya, Fukutoshin, Hanzomon lines. Shibuya Crossing, 109, Harajuku access.",
    h1: "Shibuya Station — Tokyo Metro",
    intro: "The world's busiest pedestrian crossing and Tokyo's youth culture epicenter.",
    tips: ["Exit B is closest to Shibuya Crossing.", "Avoid rush hour 8-9am on Ginza line — trains are extremely crowded.", "The scramble crossing is best photographed from Starbucks on 2nd floor across the street."],
    descripcion_turistica: "Shibuya is one of Tokyo's most exciting neighborhoods, centered on the world-famous Shibuya Scramble Crossing where up to 3,000 people cross simultaneously from all directions. Above ground, Shibuya is a shopping, entertainment, and nightlife hub with Shibuya 109, Tower Records, and countless restaurants. The Hachiko statue at the station's Hachiko Exit is a beloved meeting point. From Shibuya, Harajuku is a short walk north along Takeshita Street.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Full accessibility. Complex station layout — follow blue floor guidance strips." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Trains from ~5 AM to ~12:30 AM. Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Shibuya Crossing", tipo: "Icono", distancia: "0 metros", descripcion: "World's busiest pedestrian crossing." },
      { nombre: "Meiji Shrine", tipo: "Cultura", distancia: "1.5 km", descripcion: "Serene Shinto shrine in forested grounds." },
      { nombre: "Daikanyama", tipo: "Barrio", distancia: "1 km", descripcion: "Tokyo's coolest neighborhood with boutiques and cafes." }
    ]
  },
  {
    slug: "tokyo-omotesando",
    nombre: "Omotesando",
    linea: ["G", "C", "Z"],
    sistema: "metro",
    municipio: "Minato",
    pois: [
      { nombre: "Omotesando Hills", tipo: "comercio", distancia: "200 metros" },
      { nombre: "Nezu Museum", tipo: "cultura", distancia: "500 metros" },
      { nombre: "Prada Building", tipo: "arquitectura", distancia: "300 metros" }
    ],
    transferencias: ["Ginza", "Chiyoda", "Hanzomon"],
    seo_title: "Omotesando — Tokyo Metro | MetroGuia",
    meta_description: "Omotesando station: luxury fashion boulevard in Tokyo. Access Omotesando Hills, Harajuku, and top designer boutiques.",
    h1: "Omotesando Station — Tokyo Metro",
    intro: "Tokyo's Champs-Elysees: tree-lined avenue of luxury boutiques and cutting-edge architecture.",
    tips: ["Exit A2 leads directly to Omotesando Hills.", "Takeshita Street (Harajuku) is a 5-minute walk north.", "Visit on weekday mornings to avoid weekend crowds."],
    descripcion_turistica: "Omotesando is Tokyo's most elegant shopping boulevard, lined with zelkova trees and housing flagship stores from every major luxury brand. The architectural marvel of Omotesando Hills by Tadao Ando anchors the street. Nearby Cat Street offers indie boutiques and cafes. The Nezu Museum houses an extraordinary collection of Asian art with a stunning garden.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "All exits accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Omotesando Hills", tipo: "Comercio", distancia: "200 metros", descripcion: "Spiral mall designed by Tadao Ando." },
      { nombre: "Harajuku", tipo: "Barrio", distancia: "500 metros", descripcion: "Youth fashion and Takeshita Street." }
    ]
  },
  {
    slug: "tokyo-ginza",
    nombre: "Ginza",
    linea: ["G", "H", "M"],
    sistema: "metro",
    municipio: "Chuo",
    pois: [
      { nombre: "Ginza Six", tipo: "comercio", distancia: "100 metros" },
      { nombre: "Kabuki-za Theatre", tipo: "cultura", distancia: "300 metros" },
      { nombre: "Itoya Stationery", tipo: "comercio", distancia: "200 metros" }
    ],
    transferencias: ["Ginza", "Hibiya", "Marunouchi"],
    seo_title: "Ginza — Tokyo Metro | MetroGuia",
    meta_description: "Ginza station: Tokyo's luxury shopping district. Access Ginza Six, galleries, Kabuki-za Theatre.",
    h1: "Ginza Station — Tokyo Metro",
    intro: "Tokyo's most prestigious shopping and dining district, where tradition meets luxury.",
    tips: ["Ginza is pedestrianized on weekend afternoons — perfect for strolling.", "Ginza Six has a rooftop garden with free access.", "Visit the galleries in the backstreets for free contemporary art."],
    descripcion_turistica: "Ginza is Tokyo's equivalent of Fifth Avenue or the Champs-Elysees — a neighborhood of immaculate storefronts, high-end restaurants, and world-class art galleries. The main Chuo-dori street becomes a pedestrian paradise on Sundays. Kabuki-za Theatre nearby offers traditional Japanese kabuki performances daily.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Multiple accessible exits serving different parts of Ginza." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Ginza Six", tipo: "Comercio", distancia: "100 metros", descripcion: "Largest commercial complex in Ginza." },
      { nombre: "Tsukiji Outer Market", tipo: "Gastronomia", distancia: "600 metros", descripcion: "Famous fish market with fresh sushi breakfast." }
    ]
  },
  {
    slug: "tokyo-ueno",
    nombre: "Ueno",
    linea: ["G", "H"],
    sistema: "metro",
    municipio: "Taito",
    pois: [
      { nombre: "Tokyo National Museum", tipo: "cultura", distancia: "300 metros" },
      { nombre: "Ueno Zoo", tipo: "turismo", distancia: "500 metros" },
      { nombre: "Ueno Park", tipo: "parque", distancia: "200 metros" },
      { nombre: "Ameyoko Market", tipo: "comercio", distancia: "100 metros" }
    ],
    transferencias: ["Ginza", "Hibiya", "JR Yamanote", "JR Keihin-Tohoku"],
    seo_title: "Ueno — Tokyo Metro | MetroGuia",
    meta_description: "Ueno station: gateway to Tokyo's museum district. Tokyo National Museum, Ueno Zoo, Ueno Park cherry blossoms.",
    h1: "Ueno Station — Tokyo Metro",
    intro: "Tokyo's cultural heart: world-class museums, the city's most famous park, and vibrant street markets.",
    tips: ["Ueno Park is legendary for cherry blossoms in late March/early April.", "Ameyoko market is great for bargain shopping and street food.", "The Tokyo National Museum requires at least 3 hours — plan accordingly."],
    descripcion_turistica: "Ueno is one of Tokyo's most culturally rich neighborhoods. Ueno Park contains an extraordinary cluster of museums including the Tokyo National Museum (Japan's largest), the National Museum of Nature and Science, the National Museum of Western Art, and the Tokyo Metropolitan Art Museum. The Ueno Zoo houses pandas. Ameyoko, a lively outdoor market street, has been selling everything from fresh fish to discount clothing since the post-war era.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Ueno is a major hub — all areas accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Tokyo National Museum", tipo: "Cultura", distancia: "300 metros", descripcion: "Japan's largest museum with 110,000+ objects." },
      { nombre: "Ueno Park", tipo: "Parque", distancia: "200 metros", descripcion: "Famous for cherry blossoms and museums." }
    ]
  },
  {
    slug: "tokyo-asakusa",
    nombre: "Asakusa",
    linea: ["G"],
    sistema: "metro",
    municipio: "Taito",
    pois: [
      { nombre: "Senso-ji Temple", tipo: "cultura", distancia: "100 metros" },
      { nombre: "Nakamise Shopping Street", tipo: "comercio", distancia: "50 metros" },
      { nombre: "Kaminarimon Gate", tipo: "turismo", distancia: "100 metros" }
    ],
    transferencias: ["Ginza", "Toei Asakusa"],
    seo_title: "Asakusa — Tokyo Metro | MetroGuia",
    meta_description: "Asakusa station: gateway to Senso-ji Temple, Tokyo's oldest and most visited. Nakamise shopping street, rickshaws.",
    h1: "Asakusa Station — Tokyo Metro",
    intro: "Tokyo's most traditional neighborhood — ancient temples, rickshaws, and artisan crafts.",
    tips: ["Senso-ji is free and open 24/7 but gates open at 6am.", "Come early morning to see the temple before crowds arrive.", "Try ningyo-yaki (small cakes) from the Nakamise stalls."],
    descripcion_turistica: "Asakusa is Tokyo's most traditional neighborhood, anchored by Senso-ji — the city's oldest and most visited temple, founded in 628 AD. The iconic Kaminarimon (Thunder Gate) with its massive red lantern marks the entrance to Nakamise-dori, a shopping street selling traditional crafts, snacks, and souvenirs. Rickshaws operate from the temple grounds. The neighborhood preserves the feel of old Edo (pre-modern Tokyo).",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Station is accessible. Temple grounds have uneven stone paths." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Senso-ji Temple", tipo: "Cultura", distancia: "100 metros", descripcion: "Tokyo's oldest and most visited temple, founded 628 AD." },
      { nombre: "Tokyo Skytree", tipo: "Turismo", distancia: "1.5 km", descripcion: "World's tallest broadcast tower at 634m." }
    ]
  },
  // ===== MARUNOUCHI LINE (M) =====
  {
    slug: "tokyo-shinjuku",
    nombre: "Shinjuku",
    linea: ["M"],
    sistema: "metro",
    municipio: "Shinjuku",
    pois: [
      { nombre: "Shinjuku Gyoen", tipo: "parque", distancia: "500 metros" },
      { nombre: "Kabukicho", tipo: "entretenimiento", distancia: "300 metros" },
      { nombre: "Tokyo Metropolitan Government Building", tipo: "arquitectura", distancia: "600 metros" }
    ],
    transferencias: ["Marunouchi", "JR Yamanote", "JR Chuo", "Odakyu", "Keio", "Toei Shinjuku", "Oedo"],
    seo_title: "Shinjuku — Tokyo Metro | MetroGuia",
    meta_description: "Shinjuku station: world's busiest station. Access to Kabukicho, Shinjuku Gyoen, Tokyo Metropolitan Government Observatory.",
    h1: "Shinjuku Station — Tokyo Metro",
    intro: "World's busiest station and Tokyo's ultimate entertainment hub — never sleeps.",
    tips: ["Shinjuku station has over 200 exits — save your destination exit letter in advance.", "The Tokyo Metropolitan Government Building has a free observatory on the 45th floor.", "Omoide Yokocho (Memory Lane) has tiny yakitori restaurants under the tracks."],
    descripcion_turistica: "Shinjuku is Tokyo at its most intense — the city's busiest transit hub handling over 3 million passengers daily, surrounded by skyscrapers, department stores, and the neon-lit Kabukicho entertainment district. East Shinjuku has Golden Gai (tiny jazz bars), Omoide Yokocho (Memory Lane), and endless izakayas. West Shinjuku has the Tokyo Metropolitan Government Building with its free observation decks. Shinjuku Gyoen is a magnificent national garden perfect for cherry blossoms.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Complex station — follow color-coded signs. All exits accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Shinjuku Gyoen", tipo: "Parque", distancia: "500 metros", descripcion: "National garden, best cherry blossoms in Tokyo." },
      { nombre: "Kabukicho", tipo: "Entretenimiento", distancia: "300 metros", descripcion: "Tokyo's most famous entertainment and nightlife district." }
    ]
  },
  {
    slug: "tokyo-tokyo-station",
    nombre: "Tokyo",
    linea: ["M"],
    sistema: "metro",
    municipio: "Chiyoda",
    pois: [
      { nombre: "Imperial Palace East Garden", tipo: "parque", distancia: "500 metros" },
      { nombre: "Marunouchi Business District", tipo: "negocios", distancia: "0 metros" },
      { nombre: "Tokyo Station (JR)", tipo: "transporte", distancia: "0 metros" }
    ],
    transferencias: ["Marunouchi", "JR Shinkansen", "JR Yamanote", "JR Keihin-Tohoku", "Keiyo Line"],
    seo_title: "Tokyo Station — Tokyo Metro | MetroGuia",
    meta_description: "Tokyo Station: Japan's main railway hub. Shinkansen access, Marunouchi district, Imperial Palace nearby.",
    h1: "Tokyo Station — Tokyo Metro",
    intro: "The grand central station of Japan — gateway to the Shinkansen network and historic Marunouchi.",
    tips: ["The station's red brick facade on the Marunouchi side is a historic landmark worth seeing.", "Tokyo Character Street inside the station sells official character merchandise.", "Book Shinkansen tickets in advance at the JR Ticket Office (Midori no Madoguchi)."],
    descripcion_turistica: "Tokyo Station is Japan's most important railway hub, serving over 3,000 trains daily including all Shinkansen lines. The beautifully restored red-brick Marunouchi facade dates to 1914. The station has extensive underground shopping and the famous Tokyo Ramen Street. Outside, the Marunouchi business district stretches toward the Imperial Palace. The station's underground connects directly to the Otemachi and Nijubashimae metro stations.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Very large complex — allow extra time for connections." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Imperial Palace", tipo: "Historia", distancia: "700 metros", descripcion: "Residence of the Emperor of Japan." },
      { nombre: "Marunouchi", tipo: "Negocios", distancia: "0 metros", descripcion: "Tokyo's premier business district with luxury shops." }
    ]
  },
  {
    slug: "tokyo-otemachi",
    nombre: "Otemachi",
    linea: ["M", "T", "C", "Z"],
    sistema: "metro",
    municipio: "Chiyoda",
    pois: [
      { nombre: "Imperial Palace", tipo: "turismo", distancia: "400 metros" },
      { nombre: "Otemachi Financial District", tipo: "negocios", distancia: "0 metros" }
    ],
    transferencias: ["Marunouchi", "Tozai", "Chiyoda", "Hanzomon", "Toei Mita"],
    seo_title: "Otemachi — Tokyo Metro | MetroGuia",
    meta_description: "Otemachi station: Tokyo's financial district. 5 metro lines interchange. Near Imperial Palace and Marunouchi.",
    h1: "Otemachi Station — Tokyo Metro",
    intro: "Tokyo's financial powerhouse: a 5-line mega-interchange at the edge of the Imperial Palace.",
    tips: ["5 metro lines meet here — one of Tokyo's most important interchanges.", "Walk west 10 minutes to see the Imperial Palace East Garden (free).", "The underground concourse connects to Marunouchi and Tokyo stations."],
    descripcion_turistica: "Otemachi is the beating heart of Japan's financial world, home to the headquarters of major banks and corporations. The station serves as one of Tokyo's largest underground interchanges, connecting 5 metro lines. The Imperial Palace and its surrounding gardens are a short walk west. The area's underground concourse forms part of a vast network connecting to Tokyo Station.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible large interchange station." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Imperial Palace East Garden", tipo: "Parque", distancia: "400 metros", descripcion: "Free garden on former Edo Castle grounds." }
    ]
  },
  // ===== HIBIYA LINE (H) =====
  {
    slug: "tokyo-roppongi",
    nombre: "Roppongi",
    linea: ["H"],
    sistema: "metro",
    municipio: "Minato",
    pois: [
      { nombre: "Mori Art Museum", tipo: "cultura", distancia: "0 metros" },
      { nombre: "National Art Center Tokyo", tipo: "cultura", distancia: "500 metros" },
      { nombre: "Roppongi Hills", tipo: "entretenimiento", distancia: "0 metros" }
    ],
    transferencias: ["Hibiya", "Toei Oedo"],
    seo_title: "Roppongi — Tokyo Metro | MetroGuia",
    meta_description: "Roppongi station: Tokyo's international art and nightlife hub. Mori Art Museum, National Art Center, Roppongi Hills.",
    h1: "Roppongi Station — Tokyo Metro",
    intro: "Tokyo's international district: world-class contemporary art meets electric nightlife.",
    tips: ["Mori Art Museum has one of Tokyo's best city views from the 52nd floor.", "The National Art Center is Japan's largest art facility — check current exhibitions.", "Roppongi's nightlife starts after midnight and runs until dawn."],
    descripcion_turistica: "Roppongi is Tokyo's most international neighborhood, home to the city's premier contemporary art scene and its most vibrant nightlife. The Roppongi Hills complex anchors the area with the Mori Art Museum on its 53rd floor — offering stellar exhibitions alongside 360-degree views. Nearby, the National Art Center and Suntory Museum of Art complete the 'Roppongi Art Triangle.' By night, the district transforms into an international party zone.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Roppongi Hills has full accessibility. Hilly streets around station." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Mori Art Museum", tipo: "Cultura", distancia: "0 metros", descripcion: "Contemporary art museum with city panorama." },
      { nombre: "National Art Center Tokyo", tipo: "Cultura", distancia: "500 metros", descripcion: "Japan's largest art exhibition space." }
    ]
  },
  {
    slug: "tokyo-hiroo",
    nombre: "Hiroo",
    linea: ["H"],
    sistema: "metro",
    municipio: "Shibuya",
    pois: [
      { nombre: "Arisugawa-no-miya Memorial Park", tipo: "parque", distancia: "200 metros" },
      { nombre: "Hiroo Hills", tipo: "residencial", distancia: "0 metros" }
    ],
    transferencias: ["Hibiya"],
    seo_title: "Hiroo — Tokyo Metro | MetroGuia",
    meta_description: "Hiroo station: upscale residential neighborhood. International supermarkets, embassies, Arisugawa Park.",
    h1: "Hiroo Station — Tokyo Metro",
    intro: "Tokyo's quietest luxury enclave: embassies, international cuisine, and a hidden park.",
    tips: ["National Azabu supermarket nearby stocks international goods.", "The area has many embassy buildings — a fascinating architectural walk.", "Arisugawa Park is perfect for a quiet picnic."],
    descripcion_turistica: "Hiroo is one of Tokyo's most exclusive residential neighborhoods, home to many foreign embassies and the international community. The area is notably quieter and more spacious than most of Tokyo, with wide streets, boutique restaurants, and international supermarkets. Arisugawa-no-miya Memorial Park offers a peaceful wooded retreat.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Single exit station, fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Arisugawa Park", tipo: "Parque", distancia: "200 metros", descripcion: "Peaceful forested park in the heart of upscale Hiroo." }
    ]
  },
  // ===== CHIYODA LINE (C) =====
  {
    slug: "tokyo-meiji-jingumae",
    nombre: "Meiji-jingumae (Harajuku)",
    linea: ["C", "F"],
    sistema: "metro",
    municipio: "Shibuya",
    pois: [
      { nombre: "Meiji Shrine", tipo: "cultura", distancia: "100 metros" },
      { nombre: "Takeshita Street", tipo: "comercio", distancia: "100 metros" },
      { nombre: "Yoyogi Park", tipo: "parque", distancia: "300 metros" }
    ],
    transferencias: ["Chiyoda", "Fukutoshin", "JR Yamanote (Harajuku)"],
    seo_title: "Meiji-jingumae (Harajuku) — Tokyo Metro | MetroGuia",
    meta_description: "Harajuku station: Meiji Shrine, Takeshita Street youth fashion, Yoyogi Park. Tokyo's fashion and culture hub.",
    h1: "Meiji-jingumae (Harajuku) Station — Tokyo Metro",
    intro: "Where ancient shrine meets teen fashion — Harajuku is Tokyo's most photogenic contradiction.",
    tips: ["Takeshita Street is busiest on weekends — visit on weekdays for a calmer experience.", "Meiji Shrine forest walk takes about 10 minutes from the torii gate to the inner shrine.", "Free Sunday musicians perform in Yoyogi Park — a uniquely Tokyo spectacle."],
    descripcion_turistica: "Harajuku is the heart of Japanese youth fashion and pop culture. Takeshita Street is a narrow pedestrian alley packed with crepe shops, vintage clothing, and cosplay boutiques attracting teens from across Japan. Ura-Harajuku (Cat Street) offers more sophisticated independent fashion. Just minutes away, the vast forested grounds of Meiji Shrine provide a complete contrast — ancient torii gates and a serene atmosphere honoring Emperor Meiji.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Station accessible. Shrine has gravel paths." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Meiji Shrine", tipo: "Cultura", distancia: "100 metros", descripcion: "Shinto shrine dedicated to Emperor Meiji, in forested grounds." },
      { nombre: "Takeshita Street", tipo: "Moda", distancia: "100 metros", descripcion: "Iconic pedestrian street of Japanese youth fashion." }
    ]
  },
  {
    slug: "tokyo-akasaka",
    nombre: "Akasaka",
    linea: ["C"],
    sistema: "metro",
    municipio: "Minato",
    pois: [
      { nombre: "Akasaka Palace (State Guesthouse)", tipo: "arquitectura", distancia: "300 metros" },
      { nombre: "Hie Shrine", tipo: "cultura", distancia: "400 metros" }
    ],
    transferencias: ["Chiyoda"],
    seo_title: "Akasaka — Tokyo Metro | MetroGuia",
    meta_description: "Akasaka station: upscale entertainment district near State Guesthouse. Fine dining, traditional izakayas.",
    h1: "Akasaka Station — Tokyo Metro",
    intro: "Tokyo's power district: government, media, luxury hotels, and Japan's finest izakayas.",
    tips: ["Akasaka Palace gardens open to the public on select dates — check official calendar.", "The area has excellent high-end Japanese restaurants favored by politicians.", "Hie Shrine has beautiful torii tunnel paths similar to Fushimi Inari."],
    descripcion_turistica: "Akasaka is one of Tokyo's most prestigious districts, home to the State Guesthouse (Japan's official guest palace modeled on Versailles), the TBS broadcasting headquarters, luxury hotels, and a dense concentration of fine dining establishments. The area is the traditional entertainment quarter for government and business entertaining.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Akasaka Palace", tipo: "Arquitectura", distancia: "300 metros", descripcion: "Japan's State Guesthouse modeled on Versailles." }
    ]
  },
  // ===== TOZAI LINE (T) =====
  {
    slug: "tokyo-takadanobaba",
    nombre: "Takadanobaba",
    linea: ["T"],
    sistema: "metro",
    municipio: "Shinjuku",
    pois: [
      { nombre: "Waseda University", tipo: "educacion", distancia: "600 metros" },
      { nombre: "Astro Boy mural", tipo: "turismo", distancia: "0 metros" }
    ],
    transferencias: ["Tozai", "JR Yamanote", "Seibu Shinjuku"],
    seo_title: "Takadanobaba — Tokyo Metro | MetroGuia",
    meta_description: "Takadanobaba station: student district near Waseda University. Astro Boy melody plays at the station.",
    h1: "Takadanobaba Station — Tokyo Metro",
    intro: "Student haven and anime landmark: the station that plays the Astro Boy theme.",
    tips: ["The station plays the Astro Boy theme song when trains arrive — Osamu Tezuka's studio was here.", "Budget restaurants and izakayas make this a great affordable dining area.", "Waseda University campus is open to visitors and architecturally interesting."],
    descripcion_turistica: "Takadanobaba is a lively student district anchored by Waseda University, one of Japan's most prestigious private universities. The station is famous for playing the Astro Boy theme song on arrival — manga creator Osamu Tezuka's studio was located here. The surrounding streets are packed with budget restaurants, used bookstores, and student bars.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Waseda University", tipo: "Educacion", distancia: "600 metros", descripcion: "One of Japan's top private universities." }
    ]
  },
  {
    slug: "tokyo-monzen-nakacho",
    nombre: "Monzen-nakacho",
    linea: ["T"],
    sistema: "metro",
    municipio: "Koto",
    pois: [
      { nombre: "Tomioka Hachimangu Shrine", tipo: "cultura", distancia: "100 metros" },
      { nombre: "Fukagawa Fudo-do Temple", tipo: "cultura", distancia: "100 metros" }
    ],
    transferencias: ["Tozai", "Toei Oedo"],
    seo_title: "Monzen-nakacho — Tokyo Metro | MetroGuia",
    meta_description: "Monzen-nakacho: historic shitamachi neighborhood with Tomioka Hachimangu Shrine and excellent izakayas.",
    h1: "Monzen-nakacho Station — Tokyo Metro",
    intro: "Old Tokyo at its finest: ancient shrines, craft beer bars, and the best izakaya scene in the city.",
    tips: ["The izakaya scene here is legendary among Tokyo residents — explore the backstreets at night.", "Tomioka Hachimangu hosts sumo tournaments and the elaborate Fukagawa Matsuri festival.", "Walk along the Tatsumi Canal for a quiet, very local experience."],
    descripcion_turistica: "Monzen-nakacho (Monnaka to locals) is beloved as one of Tokyo's most authentic old-town neighborhoods. The area grew around the Tomioka Hachimangu Shrine and has maintained its shitamachi (old downtown) character with narrow streets, traditional architecture, and a superb concentration of izakayas. The craft beer scene has also thrived here.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Tomioka Hachimangu", tipo: "Cultura", distancia: "100 metros", descripcion: "Major Shinto shrine with ancient sumo connections." }
    ]
  },
  // ===== OEDO LINE (TOEI) =====
  {
    slug: "tokyo-roppongi-oedo",
    nombre: "Roppongi (Oedo)",
    linea: ["Oedo"],
    sistema: "toei",
    municipio: "Minato",
    pois: [
      { nombre: "National Art Center Tokyo", tipo: "cultura", distancia: "500 metros" },
      { nombre: "Roppongi Hills", tipo: "entretenimiento", distancia: "300 metros" }
    ],
    transferencias: ["Toei Oedo", "Hibiya (nearby)"],
    seo_title: "Roppongi (Oedo Line) — Tokyo Toei Subway | MetroGuia",
    meta_description: "Roppongi Oedo Line station: access to National Art Center Tokyo and Roppongi Hills entertainment complex.",
    h1: "Roppongi Station (Oedo Line) — Tokyo Toei Subway",
    intro: "The deeper, newer Roppongi station on the Oedo Line — deepest station in Tokyo.",
    tips: ["This Oedo Line station is one of Tokyo's deepest — allow extra time for escalators.", "Change to the Hibiya Line (5-min walk) for central Tokyo connections.", "Tokyo Midtown complex is just north of the station."],
    descripcion_turistica: "The Oedo Line's Roppongi station provides an alternative entry to this international district, connecting the Oedo circular route to Roppongi's art and nightlife scene. The nearby Tokyo Midtown complex houses the Suntory Museum of Art and luxury retail.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Very deep station — elevators available." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Tokyo Midtown", tipo: "Comercio", distancia: "100 metros", descripcion: "Luxury complex with Suntory Museum of Art." }
    ]
  },
  {
    slug: "tokyo-shinjuku-oedo",
    nombre: "Shinjuku (Oedo)",
    linea: ["Oedo"],
    sistema: "toei",
    municipio: "Shinjuku",
    pois: [
      { nombre: "Tokyo Metropolitan Government Building", tipo: "arquitectura", distancia: "200 metros" },
      { nombre: "Shinjuku Central Park", tipo: "parque", distancia: "300 metros" }
    ],
    transferencias: ["Toei Oedo", "Toei Shinjuku", "Marunouchi", "JR Shinjuku"],
    seo_title: "Shinjuku (Oedo Line) — Tokyo Toei Subway | MetroGuia",
    meta_description: "Shinjuku Oedo Line station: near Tokyo Metropolitan Government Building free observatory. Connects to JR Shinjuku hub.",
    h1: "Shinjuku Station (Oedo Line) — Tokyo Toei Subway",
    intro: "West Shinjuku access: skyscrapers, free observatories, and the park.",
    tips: ["The Tokyo Metropolitan Government Building observatory is free and open until 10:30pm.", "This station is much less crowded than the main JR Shinjuku station.", "Shinjuku Central Park is a quiet green space in the middle of the skyscraper district."],
    descripcion_turistica: "The Oedo Line's Shinjuku station gives direct access to West Shinjuku's impressive skyscraper district, dominated by the Tokyo Metropolitan Government Building designed by Kenzo Tange. The building's twin towers offer free observation decks on the 45th floor with views extending to Mount Fuji on clear days.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Tokyo Metropolitan Government Building", tipo: "Arquitectura", distancia: "200 metros", descripcion: "Free observatory on 45th floor with Mount Fuji views." }
    ]
  },
  {
    slug: "tokyo-kasumigaseki",
    nombre: "Kasumigaseki",
    linea: ["G", "H", "C"],
    sistema: "metro",
    municipio: "Chiyoda",
    pois: [
      { nombre: "National Diet Building", tipo: "politica", distancia: "600 metros" },
      { nombre: "Ministry of Foreign Affairs", tipo: "negocios", distancia: "100 metros" }
    ],
    transferencias: ["Ginza", "Hibiya", "Chiyoda"],
    seo_title: "Kasumigaseki — Tokyo Metro | MetroGuia",
    meta_description: "Kasumigaseki: Tokyo's government district. 3-line interchange near National Diet Building and government ministries.",
    h1: "Kasumigaseki Station — Tokyo Metro",
    intro: "Japan's political heart: government ministries, the Diet Building, and quiet official streets.",
    tips: ["The National Diet Building can be toured when not in session — check the official website.", "This is one of the few major Tokyo areas that empties out on weekends.", "Hibiya Park is a 5-minute walk for a peaceful green break."],
    descripcion_turistica: "Kasumigaseki is Tokyo's government district, lined with ministry buildings and official institutions. The National Diet Building (Japan's parliament) stands nearby. The neighborhood is very different from commercial Tokyo — orderly, quiet, and formal. Hibiya Park to the west provides green space near the Imperial Palace.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 3-line interchange." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Hibiya Park", tipo: "Parque", distancia: "300 metros", descripcion: "Western-style park near the Imperial Palace." }
    ]
  },
  {
    slug: "tokyo-hibiya",
    nombre: "Hibiya",
    linea: ["H", "C"],
    sistema: "metro",
    municipio: "Chiyoda",
    pois: [
      { nombre: "Hibiya Park", tipo: "parque", distancia: "0 metros" },
      { nombre: "Imperial Hotel Tokyo", tipo: "hotel", distancia: "100 metros" },
      { nombre: "Tokyo Takarazuka Theater", tipo: "cultura", distancia: "100 metros" }
    ],
    transferencias: ["Hibiya", "Chiyoda", "Toei Mita"],
    seo_title: "Hibiya — Tokyo Metro | MetroGuia",
    meta_description: "Hibiya station: Hibiya Park, Imperial Hotel, Takarazuka Theater. Gateway to Ginza and Yurakucho.",
    h1: "Hibiya Station — Tokyo Metro",
    intro: "Between the Imperial Palace and Ginza — parks, culture, and Tokyo's most historic hotel.",
    tips: ["Hibiya Park has a beautiful rose garden at its best in May and October.", "The Tokyo Takarazuka Theater stages elaborate all-female musical productions.", "The outdoor Hibiya Okurai Hibiya theater shows movies under the stars in summer."],
    descripcion_turistica: "Hibiya sits at the junction of Tokyo's power districts — adjacent to the Imperial Palace grounds, connected underground to Ginza, and fronting Hibiya Park. The Imperial Hotel is one of Tokyo's most historic luxury properties. The area transforms dramatically from weekday business bustle to weekend leisure.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Hibiya Park", tipo: "Parque", distancia: "0 metros", descripcion: "Tokyo's first Western-style public park, opened 1903." }
    ]
  },
  {
    slug: "tokyo-nihombashi",
    nombre: "Nihombashi",
    linea: ["G", "T"],
    sistema: "metro",
    municipio: "Chuo",
    pois: [
      { nombre: "Nihombashi Bridge", tipo: "historia", distancia: "100 metros" },
      { nombre: "Mitsukoshi Department Store", tipo: "comercio", distancia: "100 metros" },
      { nombre: "BOJ Currency Museum", tipo: "cultura", distancia: "300 metros" }
    ],
    transferencias: ["Ginza", "Tozai", "Toei Asakusa"],
    seo_title: "Nihombashi — Tokyo Metro | MetroGuia",
    meta_description: "Nihombashi: historical center of Edo Tokyo. Mitsukoshi flagship, Nihombashi Bridge, Bank of Japan Museum.",
    h1: "Nihombashi Station — Tokyo Metro",
    intro: "Zero-point of all Japanese national roads: historic Edo-era commercial and financial heart.",
    tips: ["The Nihombashi Bridge is Japan's kilometer zero — all road distances measured from here.", "Mitsukoshi is Japan's oldest department store, founded 1673.", "Coredo Muromachi mall nearby has excellent traditional craft shops."],
    descripcion_turistica: "Nihombashi was the commercial heart of old Edo (pre-modern Tokyo) and retains its role as a prestigious address for traditional Japanese businesses. The historic Nihombashi Bridge dates to 1911 and is Japan's official zero-point for road distances. Mitsukoshi department store has occupied this location since the Edo period. The Bank of Japan and its Currency Museum are nearby.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Nihombashi Bridge", tipo: "Historia", distancia: "100 metros", descripcion: "Japan's kilometer zero — all road distances start here." }
    ]
  },
  {
    slug: "tokyo-akihabara",
    nombre: "Akihabara",
    linea: ["H"],
    sistema: "metro",
    municipio: "Chiyoda",
    pois: [
      { nombre: "Yodobashi Camera", tipo: "electronica", distancia: "100 metros" },
      { nombre: "AKB48 Theater", tipo: "entretenimiento", distancia: "200 metros" },
      { nombre: "Anime Center", tipo: "cultura", distancia: "300 metros" }
    ],
    transferencias: ["Hibiya", "JR Yamanote", "JR Chuo-Sobu", "Tsukuba Express"],
    seo_title: "Akihabara — Tokyo Metro | MetroGuia",
    meta_description: "Akihabara: world's largest electronics and anime district. Manga, gaming, maid cafes, tech gadgets.",
    h1: "Akihabara Station — Tokyo Metro",
    intro: "Electric Town: the global capital of anime, manga, gaming, and electronics culture.",
    tips: ["Multi-floor electronics stores have incredible selection — bargain in the smaller shops.", "Maid cafes are a quintessential Akihabara experience.", "Visit the free Anime Center Tokyo (UDX building) for rotating exhibitions."],
    descripcion_turistica: "Akihabara (Electric Town) is the undisputed world capital of anime, manga, gaming, and electronics culture. Multi-story shops sell everything from the latest components to retro Famicom cartridges. The streets are lined with buildings covered in anime billboards. Maid cafes, idol theaters (including the famous AKB48 Theater), and dozens of figure and collectible shops define the unique atmosphere.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Very busy on weekends." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Yodobashi Camera", tipo: "Electronica", distancia: "100 metros", descripcion: "Massive multi-floor electronics megastore." }
    ]
  },
  {
    slug: "tokyo-naka-meguro",
    nombre: "Naka-meguro",
    linea: ["H"],
    sistema: "metro",
    municipio: "Meguro",
    pois: [
      { nombre: "Meguro River", tipo: "turismo", distancia: "0 metros" },
      { nombre: "Daikanyama", tipo: "barrio", distancia: "700 metros" }
    ],
    transferencias: ["Hibiya", "Tokyu Toyoko"],
    seo_title: "Naka-meguro — Tokyo Metro | MetroGuia",
    meta_description: "Naka-meguro: cherry blossom capital of Tokyo. Meguro River walk, boutiques, coffee shops.",
    h1: "Naka-meguro Station — Tokyo Metro",
    intro: "Tokyo's most romantic neighborhood: cherry blossoms over the Meguro River and Tokyo's best cafe culture.",
    tips: ["In spring (late March/April) the Meguro River is lined with cherry blossoms — one of Tokyo's best spots.", "The street-level shops along the river are excellent for independent fashion and homeware.", "Explore up the hill toward Daikanyama for even more boutiques and bakeries."],
    descripcion_turistica: "Naka-meguro has transformed from a quiet residential area into one of Tokyo's hippest neighborhoods, centered on the Meguro River. The canal-side walk is magical year-round but transcendent during cherry blossom season when the trees arch overhead. The surrounding streets are filled with independent boutiques, specialty coffee shops, and creative restaurants. Nearby Daikanyama has the famous Tsutaya Books (24-hour lifestyle bookstore).",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:00", cierre: "00:30", notas: "Fare: ¥170–¥320 (IC card)" },
    lugares_cercanos: [
      { nombre: "Meguro River", tipo: "Naturaleza", distancia: "0 metros", descripcion: "Canal walk famous for cherry blossoms." },
      { nombre: "Daikanyama T-Site", tipo: "Cultura", distancia: "700 metros", descripcion: "Famous 24-hour lifestyle bookstore and cultural space." }
    ]
  }
];
