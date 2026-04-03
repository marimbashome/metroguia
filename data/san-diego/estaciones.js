export const estacionesSanDiego = [
  // BLUE LINE
  {
    slug: "sd-12th-imperial",
    nombre: "12th & Imperial",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.6198,
    lng: -117.0644,
    descripcion: "Southern terminal of the Blue Line. Gateway to downtown San Diego and the urban core.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Fully accessible station with parking." },
    conexiones: ["Orange", "Orange Line connection via downtown"],
    lugares_cercanos: [
      { nombre: "Imperial Avenue District", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Civic Center", tipo: "administrativo", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-convention-center",
    nombre: "Convention Center",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.6067,
    lng: -117.1662,
    descripcion: "Access to the San Diego Convention Center, waterfront district, and Seaport Village shopping.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Modern station with waterfront views." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "San Diego Convention Center", tipo: "eventos", distancia: "2 min caminando" },
      { nombre: "Seaport Village", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "USS Midway Museum", tipo: "cultural", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-gaslamp-quarter",
    nombre: "Gaslamp Quarter",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7054,
    lng: -117.1607,
    descripcion: "Heart of San Diego's historic Gaslamp Quarter. Restaurants, bars, and Victorian architecture.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Central station in historic district." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Gaslamp Quarter", tipo: "cultural", distancia: "1 min caminando" },
      { nombre: "Horton Plaza Park", tipo: "parques", distancia: "3 min caminando" },
      { nombre: "San Diego Museum of Us", tipo: "cultural", distancia: "15 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-5th-ave",
    nombre: "5th Ave",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7102,
    lng: -117.1571,
    descripcion: "Downtown San Diego station serving the commercial core and shopping districts.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Central downtown station." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Downtown San Diego", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Westfield UTC", tipo: "comercial", distancia: "20 min transito" },
      { nombre: "San Diego Central Library", tipo: "cultural", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-middle-town",
    nombre: "Middletown",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7233,
    lng: -117.1544,
    descripcion: "Transition zone between downtown and midtown San Diego with mixed residential and commercial.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Station with residential access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Middletown District", tipo: "comercial", distancia: "3 min caminando" },
      { nombre: "Marston House Museum", tipo: "cultural", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-washington",
    nombre: "Washington",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7305,
    lng: -117.1531,
    descripcion: "Station serving the Washington DC Avenue commercial area north of downtown.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Urban neighborhood access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Washington Park", tipo: "parques", distancia: "5 min caminando" },
      { nombre: "Local restaurants and shops", tipo: "comercial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-ucsd",
    nombre: "UC San Diego",
    linea: ["Blue"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.8828,
    lng: -117.2447,
    descripcion: "Northern terminal of the Blue Line. Gateway to UC San Diego campus and La Jolla.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Campus access with parking." },
    conexiones: ["Coaster commuter rail nearby"],
    lugares_cercanos: [
      { nombre: "UC San Diego Campus", tipo: "educacion", distancia: "5 min transito" },
      { nombre: "San Diego Natural History Museum", tipo: "cultural", distancia: "15 min transito" },
      { nombre: "La Jolla Cove", tipo: "playas", distancia: "20 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },

  // ORANGE LINE
  {
    slug: "sd-courthouse",
    nombre: "Courthouse",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7269,
    lng: -117.0978,
    descripcion: "Station near historic San Diego Courthouse. Downtown commercial and civic center.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Downtown civic center access." },
    conexiones: ["Blue Line via downtown"],
    lugares_cercanos: [
      { nombre: "San Diego Courthouse", tipo: "administrativo", distancia: "3 min caminando" },
      { nombre: "Civic Center", tipo: "administrativo", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-king-merritt",
    nombre: "King Merritt",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7409,
    lng: -117.1036,
    descripcion: "Station in central San Diego serving business and residential areas.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Commercial district access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "King Merritt Park", tipo: "parques", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-kettner-blvd",
    nombre: "Kettner Blvd",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7487,
    lng: -117.1072,
    descripcion: "Growing arts and creative district along Kettner Boulevard.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Arts district access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Arts District", tipo: "cultural", distancia: "2 min caminando" },
      { nombre: "Galleries and studios", tipo: "cultural", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-oak-park",
    nombre: "Oak Park",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7598,
    lng: -117.1121,
    descripcion: "Station serving the historic Oak Park neighborhood with Victorian homes.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Historic neighborhood access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Oak Park", tipo: "parques", distancia: "5 min caminando" },
      { nombre: "Historic Victorian homes", tipo: "cultural", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-nemo",
    nombre: "Nemo",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7735,
    lng: -117.1185,
    descripcion: "Commercial district serving mid-city San Diego neighborhoods.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Mid-city commercial access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Mid-City District", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Local shops and restaurants", tipo: "comercial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-normal",
    nombre: "Normal",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7897,
    lng: -117.1248,
    descripcion: "Station serving the Normal Heights neighborhood with schools and parks.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Residential neighborhood access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Normal Heights Park", tipo: "parques", distancia: "5 min caminando" },
      { nombre: "Community schools", tipo: "educacion", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-el-cajon-transit",
    nombre: "El Cajon Transit Center",
    linea: ["Orange"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.8056,
    lng: -117.1367,
    descripcion: "Eastern terminal of the Orange Line. Major transit hub for east county connections.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Transit center with regional bus connections." },
    conexiones: ["Sprinter commuter rail", "Regional bus hub"],
    lugares_cercanos: [
      { nombre: "El Cajon downtown", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "East County communities", tipo: "comercial", distancia: "10+ min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },

  // GREEN LINE
  {
    slug: "sd-12th-imperial-green",
    nombre: "12th & Imperial",
    linea: ["Green"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.6198,
    lng: -117.0644,
    descripcion: "Southern terminus of Green Line. Connection to downtown via 12th Avenue.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Transfer hub with parking." },
    conexiones: ["Blue Line"],
    lugares_cercanos: [
      { nombre: "Imperial Avenue District", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Civic Center", tipo: "administrativo", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-park-de-la-cruz",
    nombre: "Park de la Cruz",
    linea: ["Green"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.6285,
    lng: -117.0723,
    descripcion: "Station serving South San Diego residential neighborhoods and shopping.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "South community access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Park de la Cruz", tipo: "parques", distancia: "2 min caminando" },
      { nombre: "South Bay communities", tipo: "residencial", distancia: "5 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-south-bay",
    nombre: "South Bay",
    linea: ["Green"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.6459,
    lng: -117.0986,
    descripcion: "Gateway to South Bay Peninsula neighborhoods and coastal communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "South Bay access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "South Bay beaches", tipo: "playas", distancia: "10 min transito" },
      { nombre: "Coronado Island", tipo: "turismo", distancia: "15 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-palm-ave",
    nombre: "Palm Ave",
    linea: ["Green"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.6694,
    lng: -117.1189,
    descripcion: "Station in diverse South San Diego neighborhoods with community services.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Community center access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Shopping areas", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Community parks", tipo: "parques", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-iris-ave",
    nombre: "Iris Ave",
    linea: ["Green"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.7008,
    lng: -117.1387,
    descripcion: "Station serving diverse residential neighborhoods in Central San Diego.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Central community access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Schools and parks", tipo: "educacion", distancia: "5 min caminando" },
      { nombre: "Neighborhood shops", tipo: "comercial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "sd-santee-town-center",
    nombre: "Santee Town Center",
    linea: ["Green"],
    sistema: "mts",
    ciudad: "san-diego",
    lat: 32.8434,
    lng: -117.0294,
    descripcion: "Eastern terminus of the Green Line. Gateway to East County communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Transit hub with regional connections." },
    conexiones: ["Coaster commuter rail"],
    lugares_cercanos: [
      { nombre: "Santee Town Center", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "East County neighborhoods", tipo: "residencial", distancia: "10+ min transito" },
      { nombre: "Mission Trails Regional Park", tipo: "parques", distancia: "15 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
];
