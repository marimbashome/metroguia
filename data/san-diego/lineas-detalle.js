export const lineasDetalleSanDiego = [
  {
    id: "Blue",
    color: "#0064B4",
    colorNombre: "Azul",
    inicio: "UC San Diego",
    fin: "12th & Imperial",
    total: 7,
    municipios: ["San Diego"],
    descripcion: "The Blue Line is San Diego's busiest rapid transit line, connecting the UC San Diego campus in the north with downtown and extending south to the civic center. It serves major tourist destinations including the Convention Center, Gaslamp Quarter, and downtown shopping districts, making it essential for both visitors and commuters.",
    estaciones_turisticas: ["sd-convention-center", "sd-gaslamp-quarter", "sd-5th-ave", "sd-ucsd"],
    estaciones: ["sd-ucsd", "sd-washington", "sd-middle-town", "sd-5th-ave", "sd-gaslamp-quarter", "sd-convention-center", "sd-12th-imperial"],
    seo_title: "Blue Line MTS San Diego — UC San Diego to 12th & Imperial | MetroGuia",
    meta_description: "Explore San Diego's Blue Line from UC San Diego to downtown. Visit Convention Center, Gaslamp Quarter, and downtown attractions. 7 stations serving north-south San Diego.",
    ruta_1_dia: {
      titulo: "One-Day Blue Line Journey: Campus to Downtown",
      paradas: [
        { estacion: "sd-ucsd", actividad: "Start at UC San Diego station, explore the campus and nearby La Jolla beaches" },
        { estacion: "sd-gaslamp-quarter", actividad: "Visit the historic Gaslamp Quarter with Victorian architecture, restaurants, and bars" },
        { estacion: "sd-convention-center", actividad: "Explore the Convention Center waterfront, Seaport Village shops, and USS Midway Museum" },
        { estacion: "sd-12th-imperial", actividad: "Visit downtown civic center and Imperial Avenue District" }
      ],
      notas: "Best for cultural exploration and dining. Gaslamp Quarter is ideal for evening entertainment."
    },
    tarifa: "$2.50 USD",
    frecuencia: "5-7 min peak, 8-10 min off-peak",
    sistema: "MTS Trolley",
    ciudad: "san-diego",
    horario: "5:30 AM - 12:30 AM"
  },
  {
    id: "Orange",
    color: "#F7931D",
    colorNombre: "Naranja",
    inicio: "El Cajon Transit Center",
    fin: "Courthouse",
    total: 9,
    municipios: ["San Diego", "El Cajon"],
    descripcion: "The Orange Line extends from downtown San Diego eastward through the Arts District, historic neighborhoods, and mid-city communities to El Cajon Transit Center. It connects major commercial areas and residential communities, serving both local commuters and those accessing east county transit connections.",
    estaciones_turisticas: ["sd-kettner-blvd", "sd-oak-park", "sd-courthouse"],
    estaciones: ["sd-courthouse", "sd-king-merritt", "sd-kettner-blvd", "sd-oak-park", "sd-nemo", "sd-normal", "sd-el-cajon-transit"],
    seo_title: "Orange Line MTS San Diego — Courthouse to El Cajon | MetroGuia",
    meta_description: "Navigate San Diego's Orange Line from downtown to El Cajon. Visit Arts District, historic neighborhoods, and transit hub. 9 stations serving central and east San Diego.",
    ruta_1_dia: {
      titulo: "One-Day Orange Line Adventure: Arts to East County",
      paradas: [
        { estacion: "sd-courthouse", actividad: "Begin at downtown Courthouse, explore civic center and downtown neighborhoods" },
        { estacion: "sd-kettner-blvd", actividad: "Visit the thriving Arts District with galleries, studios, and creative venues" },
        { estacion: "sd-oak-park", actividad: "Explore historic Oak Park with Victorian homes and community parks" },
        { estacion: "sd-el-cajon-transit", actividad: "Reach the east county transit hub with regional connections" }
      ],
      notas: "Great for art enthusiasts and historic neighborhood exploration. Arts District is most vibrant during evening hours."
    },
    tarifa: "$2.50 USD",
    frecuencia: "5-7 min peak, 8-10 min off-peak",
    sistema: "MTS Trolley",
    ciudad: "san-diego",
    horario: "5:30 AM - 12:30 AM"
  },
  {
    id: "Green",
    color: "#00A94F",
    colorNombre: "Verde",
    inicio: "Santee Town Center",
    fin: "12th & Imperial",
    total: 7,
    municipios: ["San Diego", "Santee"],
    descripcion: "The Green Line serves southern and eastern San Diego, connecting the downtown core with South Bay communities and the Santee Town Center. It provides crucial connections to residential neighborhoods and regional transit hubs, serving both daily commuters and travelers heading to east county destinations.",
    estaciones_turisticas: ["sd-south-bay", "sd-palm-ave", "sd-santee-town-center"],
    estaciones: ["sd-12th-imperial-green", "sd-park-de-la-cruz", "sd-south-bay", "sd-palm-ave", "sd-iris-ave", "sd-santee-town-center"],
    seo_title: "Green Line MTS San Diego — Santee Town Center to 12th & Imperial | MetroGuia",
    meta_description: "Take San Diego's Green Line from Santee to downtown. Visit South Bay communities, beaches, and transit hub. 7 stations serving south and east San Diego.",
    ruta_1_dia: {
      titulo: "One-Day Green Line Journey: South County to Downtown",
      paradas: [
        { estacion: "sd-santee-town-center", actividad: "Start at Santee Town Center, explore east county shopping and regional connections" },
        { estacion: "sd-south-bay", actividad: "Visit South Bay Peninsula with access to beaches and Coronado Island ferry" },
        { estacion: "sd-palm-ave", actividad: "Explore diverse South San Diego neighborhoods with local shopping and dining" },
        { estacion: "sd-12th-imperial-green", actividad: "Reach downtown civic center with connections to other transit lines" }
      ],
      notas: "Perfect for beach access and exploring South San Diego communities. South Bay station offers the easiest beach access."
    },
    tarifa: "$2.50 USD",
    frecuencia: "5-7 min peak, 8-10 min off-peak",
    sistema: "MTS Trolley",
    ciudad: "san-diego",
    horario: "5:30 AM - 12:30 AM"
  }
];
