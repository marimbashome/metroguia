export const estacionesMinneapolis = [
  // BLUE LINE
  {
    slug: "mpls-target-field",
    nombre: "Target Field",
    linea: ["Blue", "Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9815,
    lng: -93.2779,
    descripcion: "Downtown Minneapolis regional transit hub. Home to Minnesota Twins baseball and major entertainment district.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Major transit hub with downtown access." },
    conexiones: ["Green Line", "Regional bus hub"],
    lugares_cercanos: [
      { nombre: "Target Field", tipo: "deportes", distancia: "1 min caminando" },
      { nombre: "Downtown Minneapolis", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Mill District", tipo: "comercial", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-nicollet-mall",
    nombre: "Nicollet Mall",
    linea: ["Blue", "Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9732,
    lng: -93.2712,
    descripcion: "Downtown shopping district with major retailers and restaurants.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Downtown shopping center access." },
    conexiones: ["Green Line"],
    lugares_cercanos: [
      { nombre: "Nicollet Mall Shopping", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "IDS Center", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Downtown skyway system", tipo: "comercial", distancia: "1 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-government-plaza",
    nombre: "Government Plaza",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9695,
    lng: -93.2600,
    descripcion: "Downtown civic center near Minneapolis City Hall and Hennepin County Government Center.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Civic center access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Minneapolis City Hall", tipo: "administrativo", distancia: "2 min caminando" },
      { nombre: "Hennepin County Government Center", tipo: "administrativo", distancia: "3 min caminando" },
      { nombre: "Central Library", tipo: "cultural", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-lake-street",
    nombre: "Lake Street",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9537,
    lng: -93.2483,
    descripcion: "Station serving diverse South Minneapolis neighborhoods and shopping corridors.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "South Minneapolis access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Lake Street District", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Shopping and dining", tipo: "comercial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-hiawatha-ave",
    nombre: "Hiawatha Ave",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9403,
    lng: -93.2362,
    descripcion: "Station serving South Minneapolis residential communities with park access.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "South community access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Parks and trails", tipo: "parques", distancia: "5 min caminando" },
      { nombre: "Residential neighborhoods", tipo: "residencial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-ft-snelling",
    nombre: "Ft. Snelling",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8913,
    lng: -93.2130,
    descripcion: "Station serving airport connection and Fort Snelling State Park.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Park and regional access." },
    conexiones: ["Airport connection"],
    lugares_cercanos: [
      { nombre: "Fort Snelling State Park", tipo: "parques", distancia: "8 min transito" },
      { nombre: "Minnesota River Valley", tipo: "parques", distancia: "10 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-mall-of-america",
    nombre: "Mall of America",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8551,
    lng: -93.2401,
    descripcion: "Direct access to America's largest shopping mall in Bloomington with entertainment and dining.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Shopping mall direct access." },
    conexiones: ["Regional transit"],
    lugares_cercanos: [
      { nombre: "Mall of America", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Entertainment venues", tipo: "entretenimiento", distancia: "2 min caminando" },
      { nombre: "Bloomington hotels", tipo: "hospedaje", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },

  // GREEN LINE
  {
    slug: "mpls-union-depot",
    nombre: "Union Depot",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9508,
    lng: -93.0922,
    descripcion: "Major transit hub in St. Paul connecting light rail with Amtrak and regional buses.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Regional transit center." },
    conexiones: ["Amtrak", "Regional buses", "Northstar Commuter Rail"],
    lugares_cercanos: [
      { nombre: "Union Depot historic building", tipo: "cultural", distancia: "1 min caminando" },
      { nombre: "St. Paul downtown", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Science Museum Minnesota", tipo: "cultural", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-central-station",
    nombre: "Central Station",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9442,
    lng: -93.0989,
    descripcion: "St. Paul downtown station serving civic and commercial district.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "St. Paul civic center." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "St. Paul downtown", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Capitol building", tipo: "administrativo", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-capitol",
    nombre: "Capitol",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9375,
    lng: -93.0929,
    descripcion: "Station near Minnesota State Capitol building and cultural institutions.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "State capitol access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Minnesota State Capitol", tipo: "administrativo", distancia: "3 min caminando" },
      { nombre: "Minnesota History Center", tipo: "cultural", distancia: "2 min caminando" },
      { nombre: "St. Paul parks", tipo: "parques", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-lexington-hamline",
    nombre: "Lexington-Hamline",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9299,
    lng: -93.1178,
    descripcion: "Station serving St. Paul residential neighborhoods and Hamline University area.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "University access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Hamline University", tipo: "educacion", distancia: "5 min caminando" },
      { nombre: "St. Paul neighborhoods", tipo: "residencial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-dale-university",
    nombre: "Dale-University",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9215,
    lng: -93.1413,
    descripcion: "University transit hub serving St. Paul academic and residential communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "University district access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "St. Paul neighborhoods", tipo: "residencial", distancia: "3 min caminando" },
      { nombre: "Local shops and restaurants", tipo: "comercial", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-fairview",
    nombre: "Fairview",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9127,
    lng: -93.1667,
    descripcion: "Station serving University of Minnesota campus and East St. Paul neighborhoods.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "University campus access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "University of Minnesota", tipo: "educacion", distancia: "5 min transito" },
      { nombre: "Dinkytown", tipo: "comercial", distancia: "10 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-st-paul-college",
    nombre: "St. Paul College",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9047,
    lng: -93.1913,
    descripcion: "Station serving St. Paul College and East Twin Cities communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "College campus access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "St. Paul College", tipo: "educacion", distancia: "5 min caminando" },
      { nombre: "East neighborhood communities", tipo: "residencial", distancia: "5 min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
  {
    slug: "mpls-rosedale",
    nombre: "Rosedale",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8956,
    lng: -93.2289,
    descripcion: "Eastern terminus of Green Line serving Rosedale shopping center and east metro communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Shopping and regional hub." },
    conexiones: ["Regional bus connections"],
    lugares_cercanos: [
      { nombre: "Rosedale Center", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "East metro communities", tipo: "residencial", distancia: "10+ min transito" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" }
  },
];
