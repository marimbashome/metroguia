export const estacionesSeoul = [
  // ===== LINE 2 (GREEN) — most important =====
  {
    slug: "seoul-gangnam",
    nombre: "Gangnam",
    linea: ["L2"],
    sistema: "metro",
    municipio: "Gangnam-gu",
    pois: [
      { nombre: "Gangnam Style street", tipo: "turismo", distancia: "0 metros" },
      { nombre: "COEX Mall", tipo: "comercio", distancia: "800 metros" },
      { nombre: "Bongeunsa Temple", tipo: "cultura", distancia: "1 km" }
    ],
    transferencias: ["Line 2", "Sinbundang Line"],
    seo_title: "Gangnam — Seoul Metro | MetroGuia",
    meta_description: "Gangnam station: Seoul's upscale district made famous worldwide. Shopping, nightlife, luxury brands.",
    h1: "Gangnam Station — Seoul Metro",
    intro: "The neighborhood that went global: Seoul's most stylish and prosperous district.",
    tips: ["The underground Gangnam Underground Shopping Center has hundreds of fashion boutiques.", "COEX Mall and Aquarium are a 10-minute walk east.", "Avoid Friday and Saturday nights if you dislike large crowds."],
    descripcion_turistica: "Gangnam-gu became globally famous after Psy's 2012 hit, but the district has been Seoul's symbol of prosperity and modernity for decades. The area south of the Han River is home to luxury apartments, international brands, K-pop entertainment companies (SM, YG, JYP are all here), and some of Seoul's best restaurants. COEX Convention and Exhibition Center houses a massive underground mall and the famous library-cafe. Bongeunsa Temple offers a surprising spiritual counterpoint to the surrounding skyscrapers.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Very busy station." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Trains 5:30 AM to midnight. Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "COEX Mall", tipo: "Comercio", distancia: "800 metros", descripcion: "Huge underground mall with aquarium and library-cafe." },
      { nombre: "Bongeunsa Temple", tipo: "Cultura", distancia: "1 km", descripcion: "Buddhist temple amidst skyscrapers, founded 794 AD." }
    ]
  },
  {
    slug: "seoul-hongik-university",
    nombre: "Hongik University",
    linea: ["L2"],
    sistema: "metro",
    municipio: "Mapo-gu",
    pois: [
      { nombre: "Hongdae Street", tipo: "entretenimiento", distancia: "100 metros" },
      { nombre: "Hongik University", tipo: "educacion", distancia: "300 metros" },
      { nombre: "Gyeongui-Jungang Line Park", tipo: "parque", distancia: "200 metros" }
    ],
    transferencias: ["Line 2", "Airport Railroad", "Gyeongui-Jungang Line"],
    seo_title: "Hongik University (Hongdae) — Seoul Metro | MetroGuia",
    meta_description: "Hongdae station: Seoul's arts and indie culture hub. Street performances, clubs, K-indie music scene.",
    h1: "Hongik University Station — Seoul Metro",
    intro: "Seoul's creative heartbeat: indie music, street art, clubs, and the best cafe culture.",
    tips: ["Weekend afternoons see free street performances near Exit 9.", "The Gyeongui Line Forest Park is a beautiful linear park perfect for walking.", "Sinchon station (next stop) and Ewha are walkable for a combined tour."],
    descripcion_turistica: "The area around Hongik University (universally called Hongdae) is Seoul's most vibrant arts and youth culture district. The neighborhood grew up around the fine arts university and maintains a strong independent creative culture with galleries, indie music venues, street art, and fashion boutiques. By night, Hongdae transforms into one of Asia's most energetic club districts. The Gyeongui Line Forest Park, built on a former railway bed, runs through the area as a green urban corridor.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible. Multiple exits." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Hongdae Street", tipo: "Cultura", distancia: "100 metros", descripcion: "The area's main entertainment street." },
      { nombre: "Gyeongui Line Forest Park", tipo: "Parque", distancia: "200 metros", descripcion: "Linear park built on former railway." }
    ]
  },
  {
    slug: "seoul-sinchon",
    nombre: "Sinchon",
    linea: ["L2"],
    sistema: "metro",
    municipio: "Seodaemun-gu",
    pois: [
      { nombre: "Sinchon Culture Street", tipo: "entretenimiento", distancia: "0 metros" },
      { nombre: "Yonsei University", tipo: "educacion", distancia: "500 metros" }
    ],
    transferencias: ["Line 2"],
    seo_title: "Sinchon — Seoul Metro | MetroGuia",
    meta_description: "Sinchon: student district near Yonsei and Ewha universities. Budget food, cafes, K-pop shops.",
    h1: "Sinchon Station — Seoul Metro",
    intro: "The ultimate student neighborhood: universities, cheap eats, and K-pop everywhere.",
    tips: ["Tons of affordable restaurants and cafes — great for budget travelers.", "Yonsei University campus is beautiful and open to visitors.", "The Culture Street has fun seasonal events and street festivals."],
    descripcion_turistica: "Sinchon is the heart of Seoul's university district, surrounded by Yonsei, Ewha Womans, Sogang, and Hongik universities. The area is packed with budget-friendly restaurants, PC cafes, norebang (karaoke rooms), and K-pop merchandise shops. The pedestrianized Culture Street hosts regular events and is particularly lively on weekends.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Yonsei University", tipo: "Educacion", distancia: "500 metros", descripcion: "One of Korea's top universities with beautiful campus." }
    ]
  },
  // ===== LINE 1 =====
  {
    slug: "seoul-seoul-station",
    nombre: "Seoul Station",
    linea: ["L1", "L4"],
    sistema: "metro",
    municipio: "Jung-gu",
    pois: [
      { nombre: "Seoul Station (Historic Building)", tipo: "arquitectura", distancia: "0 metros" },
      { nombre: "Namdaemun Market", tipo: "comercio", distancia: "800 metros" },
      { nombre: "Seoullo 7017 Skygarden", tipo: "turismo", distancia: "100 metros" }
    ],
    transferencias: ["Line 1", "Line 4", "Airport Railroad (AREX)", "KTX"],
    seo_title: "Seoul Station — Seoul Metro | MetroGuia",
    meta_description: "Seoul Station: Korea's main transport hub. KTX high-speed rail, Airport Express, Seoullo 7017 sky garden.",
    h1: "Seoul Station — Seoul Metro",
    intro: "Korea's central hub: KTX, Airport Express, and the stunning Seoullo sky garden.",
    tips: ["The Seoullo 7017 elevated garden park (above the overpass) is free and has great views.", "The historic 1925 station building is now a cultural center — worth seeing.", "AREX trains to Incheon Airport depart from here — allow 50 minutes to the airport."],
    descripcion_turistica: "Seoul Station is Korea's most important transportation hub, handling KTX high-speed trains to Busan (2h20m), the Airport Railroad Express (AREX) to Incheon, and 4 subway lines. The historic 1925 station building (Renaissance-style) now functions as a cultural venue. The Seoullo 7017 project transformed a former elevated highway into an elevated garden park, creating a remarkable urban green corridor.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible major hub." },
    horarios: { apertura: "05:00", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card). AREX to airport: ₩9,500 direct." },
    lugares_cercanos: [
      { nombre: "Seoullo 7017", tipo: "Turismo", distancia: "100 metros", descripcion: "Elevated garden park on former overpass." },
      { nombre: "Namdaemun Market", tipo: "Comercio", distancia: "800 metros", descripcion: "Korea's largest traditional market, open 24/7." }
    ]
  },
  {
    slug: "seoul-city-hall",
    nombre: "City Hall",
    linea: ["L1", "L2"],
    sistema: "metro",
    municipio: "Jung-gu",
    pois: [
      { nombre: "Deoksugung Palace", tipo: "cultura", distancia: "100 metros" },
      { nombre: "Seoul Plaza", tipo: "turismo", distancia: "50 metros" },
      { nombre: "Seoul Museum of Art", tipo: "cultura", distancia: "200 metros" }
    ],
    transferencias: ["Line 1", "Line 2"],
    seo_title: "City Hall — Seoul Metro | MetroGuia",
    meta_description: "City Hall station: Deoksugung Palace, Seoul Plaza, Seoul Museum of Art. Gateway to Gyeongbokgung.",
    h1: "City Hall Station — Seoul Metro",
    intro: "Seoul's civic center: royal palaces, modern art, and the famous City Hall building.",
    tips: ["Deoksugung Palace is the only royal palace open until 9pm — great for an evening visit.", "The Royal Guard Changing Ceremony at Deoksugung happens 3 times daily.", "Seoul Plaza converts to a skating rink in winter and a fountain in summer."],
    descripcion_turistica: "City Hall station sits at Seoul's historic and civic center. Deoksugung Palace, a royal palace from the Joseon dynasty, is steps from the station and uniquely open until 9pm. The Seoul Metropolitan Government building by architect Yoo Kerl-sang is a striking modern glass structure. Nearby Cheonggyecheon Stream — an urban stream restoration project — runs east through the city center.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Deoksugung Palace", tipo: "Cultura", distancia: "100 metros", descripcion: "Royal palace open until 9pm — unique among Seoul palaces." }
    ]
  },
  // ===== LINE 3 =====
  {
    slug: "seoul-gyeongbokgung",
    nombre: "Gyeongbokgung",
    linea: ["L3"],
    sistema: "metro",
    municipio: "Jongno-gu",
    pois: [
      { nombre: "Gyeongbokgung Palace", tipo: "cultura", distancia: "0 metros" },
      { nombre: "National Folk Museum of Korea", tipo: "cultura", distancia: "200 metros" },
      { nombre: "Bukchon Hanok Village", tipo: "turismo", distancia: "1 km" }
    ],
    transferencias: ["Line 3"],
    seo_title: "Gyeongbokgung — Seoul Metro | MetroGuia",
    meta_description: "Gyeongbokgung station: Korea's most famous royal palace. Hanbok rental, Bukchon Hanok Village nearby.",
    h1: "Gyeongbokgung Station — Seoul Metro",
    intro: "The heart of Korea's royal history: majestic palace gates and traditional hanok villages.",
    tips: ["Rent a hanbok (traditional dress) nearby to enter the palace for free.", "The Changing of the Guard at the main gate (Gwanghwamun) happens at 10am and 2pm.", "Bukchon Hanok Village is a 15-minute walk and best visited early morning."],
    descripcion_turistica: "Gyeongbokgung Palace is the largest and most impressive of Seoul's five grand Joseon dynasty palaces, built in 1395. The palace complex includes the National Folk Museum, beautiful throne halls, and the famous Gyeonghoeru Pavilion reflected in its lotus pond. The surrounding area of Bukchon has the best-preserved hanok (traditional Korean house) neighborhood in Seoul. The area is particularly beautiful in autumn with maple colors.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card). Palace entry: ₩3,000." },
    lugares_cercanos: [
      { nombre: "Gyeongbokgung Palace", tipo: "Cultura", distancia: "0 metros", descripcion: "Korea's largest royal palace, built 1395." },
      { nombre: "Bukchon Hanok Village", tipo: "Turismo", distancia: "1 km", descripcion: "Traditional hanok neighborhood with 600+ historic houses." }
    ]
  },
  // ===== LINE 4 =====
  {
    slug: "seoul-myeongdong",
    nombre: "Myeongdong",
    linea: ["L4"],
    sistema: "metro",
    municipio: "Jung-gu",
    pois: [
      { nombre: "Myeongdong Shopping Street", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Myeongdong Cathedral", tipo: "cultura", distancia: "200 metros" },
      { nombre: "N Seoul Tower", tipo: "turismo", distancia: "1.5 km" }
    ],
    transferencias: ["Line 4"],
    seo_title: "Myeongdong — Seoul Metro | MetroGuia",
    meta_description: "Myeongdong: Seoul's top shopping district. K-beauty products, street food, N Seoul Tower cable car access.",
    h1: "Myeongdong Station — Seoul Metro",
    intro: "K-beauty central: Seoul's busiest shopping street with cosmetics, fashion, and legendary street food.",
    tips: ["K-beauty shops (Innisfree, Etude House, The Face Shop) have the widest selection and best prices here.", "Street food vendors serve tteokbokki, hotteok, and corn dogs — try everything.", "Take the cable car from Myeongdong to N Seoul Tower for city panoramas."],
    descripcion_turistica: "Myeongdong is Seoul's ultimate shopping destination, particularly famous for K-beauty cosmetics. The pedestrianized main street is lined with flagship stores of Korean skincare and makeup brands alongside international fashion retailers. The street food scene is extraordinary — vendors line the sides with Korean snacks from tteokbokki to giant strawberries dipped in chocolate. The neo-Gothic Myeongdong Cathedral (1898) is a peaceful retreat within the commercial bustle.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Myeongdong Cathedral", tipo: "Cultura", distancia: "200 metros", descripcion: "Neo-Gothic Catholic cathedral, Korea's most significant." },
      { nombre: "N Seoul Tower", tipo: "Turismo", distancia: "1.5 km", descripcion: "Iconic tower with 360° city panoramas — cable car access." }
    ]
  },
  {
    slug: "seoul-dongdaemun",
    nombre: "Dongdaemun",
    linea: ["L1", "L4"],
    sistema: "metro",
    municipio: "Jongno-gu",
    pois: [
      { nombre: "Dongdaemun Gate (Heunginjimun)", tipo: "historia", distancia: "100 metros" },
      { nombre: "Dongdaemun Fashion Town", tipo: "comercio", distancia: "200 metros" }
    ],
    transferencias: ["Line 1", "Line 4"],
    seo_title: "Dongdaemun — Seoul Metro | MetroGuia",
    meta_description: "Dongdaemun: historic city gate and 24-hour fashion wholesale district. DDP design plaza nearby.",
    h1: "Dongdaemun Station — Seoul Metro",
    intro: "24-hour fashion capital: ancient gates meet futuristic design in Seoul's textile heartland.",
    tips: ["The wholesale fashion market is busiest after midnight — many stores open from 9pm to 6am.", "Dongdaemun Design Plaza (DDP) by Zaha Hadid is a must-see architecture landmark.", "The Heunginjimun Gate (East Great Gate) is one of the best-preserved of Seoul's four main gates."],
    descripcion_turistica: "Dongdaemun is Seoul's fabric and fashion wholesale district, uniquely operating largely at night — wholesale buyers come from across Asia to shop the massive market complexes. During the day, the Dongdaemun Design Plaza (DDP), designed by Zaha Hadid, hosts major design and fashion events in its stunning flowing metal structure. The historic Heunginjimun Gate (East Great Gate) from the Joseon dynasty stands adjacent to the modern market.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 2-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Dongdaemun Design Plaza", tipo: "Arquitectura", distancia: "400 metros", descripcion: "Zaha Hadid's iconic futuristic convention center." }
    ]
  },
  // ===== LINE 5 =====
  {
    slug: "seoul-gwanghwamun",
    nombre: "Gwanghwamun",
    linea: ["L5"],
    sistema: "metro",
    municipio: "Jongno-gu",
    pois: [
      { nombre: "Gwanghwamun Square", tipo: "turismo", distancia: "0 metros" },
      { nombre: "Sejong the Great statue", tipo: "historia", distancia: "100 metros" },
      { nombre: "Gyeongbokgung Palace", tipo: "cultura", distancia: "500 metros" }
    ],
    transferencias: ["Line 5"],
    seo_title: "Gwanghwamun — Seoul Metro | MetroGuia",
    meta_description: "Gwanghwamun station: Seoul's central plaza. King Sejong statue, Admiral Yi Sun-sin, Gyeongbokgung Palace access.",
    h1: "Gwanghwamun Station — Seoul Metro",
    intro: "Seoul's symbolic center: the great gate, the plaza of kings, and Korea's history told in stone.",
    tips: ["The newly revamped Gwanghwamun Square (2022) is much larger and more pedestrian-friendly.", "The statue of King Sejong (creator of Hangul alphabet) has a fascinating underground museum.", "Early morning is best to photograph the gate with Gyeongbokgung beyond it."],
    descripcion_turistica: "Gwanghwamun is both the great gate of Gyeongbokgung Palace and the name of Seoul's most symbolic public plaza. The broad avenue leads from the palace gate south through the square, past statues of King Sejong the Great (who created the Hangul writing system) and Admiral Yi Sun-sin (who defeated Japanese invasions). The surrounding area houses major government buildings, newspapers, and cultural institutions.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Gwanghwamun Square", tipo: "Historia", distancia: "0 metros", descripcion: "Seoul's main public square with historic statues." }
    ]
  },
  // ===== LINE 9 =====
  {
    slug: "seoul-express-bus-terminal",
    nombre: "Express Bus Terminal",
    linea: ["L3", "L7", "L9"],
    sistema: "metro",
    municipio: "Seocho-gu",
    pois: [
      { nombre: "Express Bus Terminal", tipo: "transporte", distancia: "0 metros" },
      { nombre: "Goto Mall (underground)", tipo: "comercio", distancia: "0 metros" },
      { nombre: "Yangjae Citizen's Forest", tipo: "parque", distancia: "2 km" }
    ],
    transferencias: ["Line 3", "Line 7", "Line 9"],
    seo_title: "Express Bus Terminal — Seoul Metro | MetroGuia",
    meta_description: "Express Bus Terminal: 3-line Seoul Metro interchange. Buses to all major Korean cities. Goto underground mall.",
    h1: "Express Bus Terminal Station — Seoul Metro",
    intro: "Seoul's intercity bus hub — 3 metro lines and the vast Goto underground shopping mall.",
    tips: ["Buses to Busan, Gyeongju, and all major Korean cities depart from here.", "The Goto Mall underground shopping complex has excellent flower and plant shops.", "Line 9 express service here is one of Seoul Metro's fastest connections to Gimpo Airport."],
    descripcion_turistica: "Express Bus Terminal is one of Seoul's most important transit hubs, serving both intercity bus connections across South Korea and as a 3-way metro interchange. The Goto Mall beneath the station is known for its extensive flower market and is a popular wedding and event supply destination. The station is a gateway for travel to Korea's southern cities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible 3-line interchange." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Goto Mall", tipo: "Comercio", distancia: "0 metros", descripcion: "Underground mall famous for fresh flowers and plants." }
    ]
  },
  {
    slug: "seoul-olympic-park",
    nombre: "Sports Complex",
    linea: ["L2"],
    sistema: "metro",
    municipio: "Songpa-gu",
    pois: [
      { nombre: "KSPO Dome", tipo: "deportes", distancia: "500 metros" },
      { nombre: "Jamsil Sports Complex", tipo: "deportes", distancia: "300 metros" },
      { nombre: "Lotte World", tipo: "entretenimiento", distancia: "800 metros" }
    ],
    transferencias: ["Line 2"],
    seo_title: "Sports Complex — Seoul Metro | MetroGuia",
    meta_description: "Sports Complex station: Jamsil Olympic Park, Lotte World amusement park, Han River Park access.",
    h1: "Sports Complex Station — Seoul Metro",
    intro: "Seoul's entertainment and sports mega-hub: Olympics legacy, theme parks, and the Han River.",
    tips: ["Lotte World is Asia's largest indoor theme park — buy tickets in advance online.", "The Han River Parks are accessible from nearby Jamsil station for cycling and picnics.", "K-pop concerts frequently held at KSPO Dome — check schedule before visiting."],
    descripcion_turistica: "The area around Sports Complex station encompasses Seoul's 1988 Olympic legacy facilities including the main Olympic Stadium, KSPO Dome, and the Jamsil Sports Complex. Nearby Lotte World is Asia's largest indoor amusement park with an outdoor section on a lake. The Han River Parks in this area are excellent for cycling and weekend recreation.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible." },
    horarios: { apertura: "05:30", cierre: "00:00", notas: "Fare: ₩1,400 (T-money card)" },
    lugares_cercanos: [
      { nombre: "Lotte World", tipo: "Entretenimiento", distancia: "800 metros", descripcion: "Asia's largest indoor amusement park." }
    ]
  }
];
