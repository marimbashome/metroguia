export const estacionesMinneapolis = [
  // ═══════════════════════════════════════════
  // BLUE LINE (19 stations: Target Field → Mall of America)
  // Shared downtown segment with Green (stations 1-5)
  // ═══════════════════════════════════════════
  {
    slug: "mpls-target-field",
    nombre: "Target Field",
    linea: ["Blue", "Green", "Northstar"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9816,
    lng: -93.2779,
    descripcion: "Downtown Minneapolis regional transit hub serving Target Field baseball stadium, the North Loop neighborhood, and connections to all Metro Transit rail lines.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Major ADA-compliant hub with elevator and ramp access to all platforms." },
    conexiones: ["Green Line", "Northstar Commuter Rail", "Regional bus hub"],
    lugares_cercanos: [
      { nombre: "Target Field (Minnesota Twins)", tipo: "deportes", distancia: "1 min caminando" },
      { nombre: "North Loop Neighborhood", tipo: "comercial", distancia: "3 min caminando" },
      { nombre: "Stone Arch Bridge", tipo: "turismo", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Target Field Station Minneapolis — Blue, Green & Northstar Lines | MetroGuia",
    meta_description: "Target Field Metro Transit station in downtown Minneapolis. Access Twins baseball, North Loop dining, and connections to all rail lines."
  },
  {
    slug: "mpls-warehouse-district",
    nombre: "Warehouse District/Hennepin Ave",
    linea: ["Blue", "Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9810,
    lng: -93.2740,
    descripcion: "Station serving the historic Warehouse District with theaters, restaurants, and nightlife along Hennepin Avenue.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["Green Line"],
    lugares_cercanos: [
      { nombre: "Hennepin Theatre District", tipo: "entretenimiento", distancia: "2 min caminando" },
      { nombre: "First Avenue (music venue)", tipo: "entretenimiento", distancia: "3 min caminando" },
      { nombre: "Warehouse District restaurants", tipo: "comercial", distancia: "1 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Warehouse District/Hennepin Ave Station Minneapolis | MetroGuia",
    meta_description: "Warehouse District/Hennepin Ave station. Access theaters, First Avenue, nightlife, and dining in historic downtown Minneapolis."
  },
  {
    slug: "mpls-nicollet-mall",
    nombre: "Nicollet Mall",
    linea: ["Blue", "Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9785,
    lng: -93.2712,
    descripcion: "Downtown Minneapolis shopping and dining district along the pedestrian-friendly Nicollet Mall.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["Green Line"],
    lugares_cercanos: [
      { nombre: "Nicollet Mall Shopping", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "IDS Center / Crystal Court", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Minneapolis Skyway System", tipo: "comercial", distancia: "1 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Nicollet Mall Station Minneapolis — Blue & Green Lines | MetroGuia",
    meta_description: "Nicollet Mall light rail station. Shopping, IDS Center, skyway system access in the heart of downtown Minneapolis."
  },
  {
    slug: "mpls-government-plaza",
    nombre: "Government Plaza",
    linea: ["Blue", "Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9770,
    lng: -93.2650,
    descripcion: "Downtown civic center station near Minneapolis City Hall and Hennepin County Government Center.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["Green Line"],
    lugares_cercanos: [
      { nombre: "Minneapolis City Hall", tipo: "administrativo", distancia: "2 min caminando" },
      { nombre: "Hennepin County Government Center", tipo: "administrativo", distancia: "1 min caminando" },
      { nombre: "Minneapolis Central Library", tipo: "cultural", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Government Plaza Station Minneapolis — Blue & Green Lines | MetroGuia",
    meta_description: "Government Plaza station near City Hall and county government. Central downtown Minneapolis civic district access."
  },
  {
    slug: "mpls-downtown-east",
    nombre: "Downtown East/Metrodome",
    linea: ["Blue", "Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9747,
    lng: -93.2535,
    descripcion: "Station serving US Bank Stadium (Minnesota Vikings) and the Downtown East neighborhood.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["Green Line"],
    lugares_cercanos: [
      { nombre: "U.S. Bank Stadium (Vikings)", tipo: "deportes", distancia: "2 min caminando" },
      { nombre: "Mill City Museum", tipo: "cultural", distancia: "5 min caminando" },
      { nombre: "Guthrie Theater", tipo: "entretenimiento", distancia: "7 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Downtown East/Metrodome Station Minneapolis | MetroGuia",
    meta_description: "Downtown East station at U.S. Bank Stadium. Access Vikings games, Mill City Museum, and Guthrie Theater."
  },
  // Blue Line diverges south from here
  {
    slug: "mpls-cedar-riverside",
    nombre: "Cedar-Riverside",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9680,
    lng: -93.2475,
    descripcion: "Station serving the Cedar-Riverside neighborhood, known for its diverse Somali community and cultural venues.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Cedar Cultural Center", tipo: "cultural", distancia: "3 min caminando" },
      { nombre: "Augsburg University", tipo: "educacion", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Cedar-Riverside Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "Cedar-Riverside Blue Line station. Access Cedar Cultural Center, diverse dining, and Augsburg University."
  },
  {
    slug: "mpls-franklin-ave",
    nombre: "Franklin Avenue",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9625,
    lng: -93.2465,
    descripcion: "Station near the Minneapolis Institute of Art and the Seward neighborhood.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Minneapolis Institute of Art (Mia)", tipo: "cultural", distancia: "10 min caminando" },
      { nombre: "Children's Theatre Company", tipo: "entretenimiento", distancia: "12 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Franklin Avenue Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "Franklin Avenue Blue Line station. Near Minneapolis Institute of Art and Seward neighborhood dining."
  },
  {
    slug: "mpls-lake-street-midtown",
    nombre: "Lake Street/Midtown",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9485,
    lng: -93.2382,
    descripcion: "Major station serving the diverse Lake Street corridor and Midtown Global Market.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["Bus Route 21 (Lake Street)"],
    lugares_cercanos: [
      { nombre: "Midtown Global Market", tipo: "comercial", distancia: "3 min caminando" },
      { nombre: "Lake Street restaurants", tipo: "comercial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Lake Street/Midtown Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "Lake Street/Midtown station. Access Midtown Global Market and diverse Lake Street corridor dining and shopping."
  },
  {
    slug: "mpls-38th-st",
    nombre: "38th Street",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9340,
    lng: -93.2290,
    descripcion: "Residential station serving South Minneapolis neighborhoods.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "South Minneapolis neighborhoods", tipo: "residencial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "38th Street Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "38th Street Blue Line station in South Minneapolis. Residential neighborhood access."
  },
  {
    slug: "mpls-46th-st",
    nombre: "46th Street",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9210,
    lng: -93.2225,
    descripcion: "Station serving the 46th Street corridor and surrounding residential areas.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "46th Street corridor", tipo: "comercial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "46th Street Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "46th Street Blue Line station. South Minneapolis residential area with local shops and restaurants."
  },
  {
    slug: "mpls-50th-st-minnehaha",
    nombre: "50th Street/Minnehaha Park",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9120,
    lng: -93.2180,
    descripcion: "Station providing access to Minnehaha Falls and Minnehaha Regional Park.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Minnehaha Falls", tipo: "parques", distancia: "10 min caminando" },
      { nombre: "Minnehaha Regional Park", tipo: "parques", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "50th Street/Minnehaha Park Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "50th Street station near Minnehaha Falls, one of Minneapolis' top natural attractions. Blue Line access."
  },
  {
    slug: "mpls-va-medical-center",
    nombre: "VA Medical Center",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9030,
    lng: -93.2100,
    descripcion: "Station serving the Minneapolis VA Medical Center campus.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant. Direct VA campus access." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Minneapolis VA Medical Center", tipo: "salud", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "VA Medical Center Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "VA Medical Center Blue Line station. Direct access to Minneapolis Veterans Affairs campus."
  },
  {
    slug: "mpls-fort-snelling",
    nombre: "Fort Snelling",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8913,
    lng: -93.2000,
    descripcion: "Station near historic Fort Snelling and Fort Snelling State Park at the confluence of the Mississippi and Minnesota rivers.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Historic Fort Snelling", tipo: "cultural", distancia: "10 min caminando" },
      { nombre: "Fort Snelling State Park", tipo: "parques", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Fort Snelling Station Minneapolis — Blue Line | MetroGuia",
    meta_description: "Fort Snelling Blue Line station. Access historic fort, state park, and river confluence area."
  },
  {
    slug: "mpls-terminal-1-lindbergh",
    nombre: "Terminal 1–Lindbergh",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8810,
    lng: -93.2070,
    descripcion: "Direct rail access to MSP Airport Terminal 1 (Lindbergh), serving most major airlines.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Direct terminal access. ADA compliant." },
    conexiones: ["MSP Airport Terminal 1"],
    lugares_cercanos: [
      { nombre: "MSP Airport Terminal 1", tipo: "aeropuerto", distancia: "1 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Terminal 1–Lindbergh Station (MSP Airport) — Blue Line | MetroGuia",
    meta_description: "MSP Airport Terminal 1 Lindbergh Blue Line station. Direct rail access to Minneapolis-Saint Paul International Airport."
  },
  {
    slug: "mpls-terminal-2-humphrey",
    nombre: "Terminal 2–Humphrey",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8740,
    lng: -93.2210,
    descripcion: "Rail access to MSP Airport Terminal 2 (Humphrey), serving Sun Country and charter airlines.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Direct terminal access. ADA compliant." },
    conexiones: ["MSP Airport Terminal 2"],
    lugares_cercanos: [
      { nombre: "MSP Airport Terminal 2", tipo: "aeropuerto", distancia: "1 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Terminal 2–Humphrey Station (MSP Airport) — Blue Line | MetroGuia",
    meta_description: "MSP Airport Terminal 2 Humphrey Blue Line station. Access Sun Country and charter flights."
  },
  {
    slug: "mpls-american-blvd",
    nombre: "American Boulevard",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8600,
    lng: -93.2350,
    descripcion: "Bloomington station near hotels and the American Boulevard commercial corridor.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Bloomington hotels", tipo: "hospedaje", distancia: "5 min caminando" },
      { nombre: "American Blvd shopping", tipo: "comercial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "American Boulevard Station Bloomington — Blue Line | MetroGuia",
    meta_description: "American Boulevard station in Bloomington. Hotels and shopping near Mall of America area."
  },
  {
    slug: "mpls-bloomington-central",
    nombre: "Bloomington Central",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8580,
    lng: -93.2400,
    descripcion: "Central Bloomington station serving the commercial district.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Bloomington commercial area", tipo: "comercial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Bloomington Central Station — Blue Line | MetroGuia",
    meta_description: "Bloomington Central Blue Line station. Shopping and commercial district access."
  },
  {
    slug: "mpls-28th-ave",
    nombre: "28th Avenue",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8560,
    lng: -93.2380,
    descripcion: "Bloomington residential station near the Mall of America transit hub.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Bloomington neighborhoods", tipo: "residencial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "28th Avenue Station Bloomington — Blue Line | MetroGuia",
    meta_description: "28th Avenue Blue Line station in Bloomington. Residential area near Mall of America."
  },
  {
    slug: "mpls-mall-of-america",
    nombre: "Mall of America",
    linea: ["Blue"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.8551,
    lng: -93.2401,
    descripcion: "Southern terminus of the Blue Line at Mall of America, the largest shopping mall in the United States.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Direct mall access. ADA compliant." },
    conexiones: ["Regional transit hub"],
    lugares_cercanos: [
      { nombre: "Mall of America", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Nickelodeon Universe", tipo: "entretenimiento", distancia: "2 min caminando" },
      { nombre: "SEA LIFE Aquarium", tipo: "entretenimiento", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "7-10 min", frecuencia_off_peak: "10-15 min" },
    seo_title: "Mall of America Station Bloomington — Blue Line Terminus | MetroGuia",
    meta_description: "Mall of America Blue Line terminus. Direct access to America's largest mall with 500+ stores, Nickelodeon Universe, and SEA LIFE."
  },

  // ═══════════════════════════════════════════
  // GREEN LINE unique stations (19 stations east of Downtown East)
  // Stations 1-5 (Target Field → Downtown East) shared with Blue above
  // ═══════════════════════════════════════════
  {
    slug: "mpls-west-bank",
    nombre: "West Bank",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9720,
    lng: -93.2460,
    descripcion: "Station serving the University of Minnesota West Bank campus and Cedar-Riverside neighborhood.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "University of Minnesota West Bank", tipo: "educacion", distancia: "2 min caminando" },
      { nombre: "Weisman Art Museum", tipo: "cultural", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "West Bank Station Minneapolis — Green Line | MetroGuia",
    meta_description: "West Bank Green Line station at University of Minnesota. Campus access and Cedar-Riverside neighborhood."
  },
  {
    slug: "mpls-east-bank",
    nombre: "East Bank",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9745,
    lng: -93.2320,
    descripcion: "University of Minnesota East Bank campus station near Coffman Union and major academic buildings.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Coffman Memorial Union", tipo: "educacion", distancia: "3 min caminando" },
      { nombre: "UMN campus core", tipo: "educacion", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "East Bank Station Minneapolis — Green Line | MetroGuia",
    meta_description: "East Bank Green Line station at University of Minnesota main campus. Coffman Union and academic buildings."
  },
  {
    slug: "mpls-stadium-village",
    nombre: "Stadium Village",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9740,
    lng: -93.2236,
    descripcion: "Station near Huntington Bank Stadium (Gophers football) and the Stadium Village commercial area.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Huntington Bank Stadium (Gophers)", tipo: "deportes", distancia: "3 min caminando" },
      { nombre: "Stadium Village shops", tipo: "comercial", distancia: "1 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Stadium Village Station Minneapolis — Green Line | MetroGuia",
    meta_description: "Stadium Village Green Line station. Access Gophers football at Huntington Bank Stadium and campus dining."
  },
  {
    slug: "mpls-prospect-park",
    nombre: "Prospect Park",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9691,
    lng: -93.2108,
    descripcion: "Station serving the Prospect Park neighborhood, home to Surly Brewing and the iconic Witch's Hat Water Tower.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Surly Brewing Company", tipo: "entretenimiento", distancia: "5 min caminando" },
      { nombre: "Witch's Hat Water Tower", tipo: "turismo", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Prospect Park Station Minneapolis — Green Line | MetroGuia",
    meta_description: "Prospect Park Green Line station. Near Surly Brewing and the Witch's Hat Water Tower landmark."
  },
  {
    slug: "mpls-westgate",
    nombre: "Westgate",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9670,
    lng: -93.2001,
    descripcion: "Station at the Minneapolis-St. Paul border serving residential communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Residential neighborhoods", tipo: "residencial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Westgate Station Minneapolis — Green Line | MetroGuia",
    meta_description: "Westgate Green Line station at the Minneapolis-St. Paul border. Residential neighborhood access."
  },
  {
    slug: "mpls-raymond-ave",
    nombre: "Raymond Avenue",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9630,
    lng: -93.1905,
    descripcion: "Station in the Creative Enterprise Zone, a hub for artists, makers, and small businesses.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Creative Enterprise Zone", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Local studios and galleries", tipo: "cultural", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Raymond Avenue Station St. Paul — Green Line | MetroGuia",
    meta_description: "Raymond Avenue Green Line station in the Creative Enterprise Zone. Artist studios, galleries, and local businesses."
  },
  {
    slug: "mpls-fairview-ave",
    nombre: "Fairview Avenue",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9568,
    lng: -93.1779,
    descripcion: "Station serving the Union Park neighborhood in St. Paul.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Union Park neighborhood", tipo: "residencial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Fairview Avenue Station St. Paul — Green Line | MetroGuia",
    meta_description: "Fairview Avenue Green Line station in St. Paul's Union Park neighborhood."
  },
  {
    slug: "mpls-snelling-ave",
    nombre: "Snelling Avenue",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9553,
    lng: -93.1667,
    descripcion: "Station near Hamline University and the Hamline-Midway neighborhood.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["A Line BRT (Snelling Ave)"],
    lugares_cercanos: [
      { nombre: "Hamline University", tipo: "educacion", distancia: "5 min caminando" },
      { nombre: "Snelling Avenue shops", tipo: "comercial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Snelling Avenue Station St. Paul — Green Line | MetroGuia",
    meta_description: "Snelling Avenue Green Line station. Hamline University and A Line BRT connection in Hamline-Midway."
  },
  {
    slug: "mpls-hamline-ave",
    nombre: "Hamline Avenue",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9553,
    lng: -93.1560,
    descripcion: "Station in the Hamline-Midway neighborhood of St. Paul.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Hamline-Midway neighborhood", tipo: "residencial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Hamline Avenue Station St. Paul — Green Line | MetroGuia",
    meta_description: "Hamline Avenue Green Line station in St. Paul's Hamline-Midway neighborhood."
  },
  {
    slug: "mpls-lexington-pkwy",
    nombre: "Lexington Parkway",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9553,
    lng: -93.1460,
    descripcion: "Station near Concordia University and the Lexington-Hamline neighborhood.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Concordia University", tipo: "educacion", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Lexington Parkway Station St. Paul — Green Line | MetroGuia",
    meta_description: "Lexington Parkway Green Line station near Concordia University in St. Paul."
  },
  {
    slug: "mpls-victoria-st",
    nombre: "Victoria Street",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9553,
    lng: -93.1353,
    descripcion: "Station serving the Frogtown/Thomas-Dale neighborhood of St. Paul.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Frogtown neighborhood", tipo: "residencial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Victoria Street Station St. Paul — Green Line | MetroGuia",
    meta_description: "Victoria Street Green Line station in St. Paul's Frogtown neighborhood."
  },
  {
    slug: "mpls-dale-st",
    nombre: "Dale Street",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9553,
    lng: -93.1260,
    descripcion: "Station serving the Rondo neighborhood, a historically significant African American community.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Rondo neighborhood", tipo: "residencial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Dale Street Station St. Paul — Green Line | MetroGuia",
    meta_description: "Dale Street Green Line station in St. Paul's historic Rondo neighborhood."
  },
  {
    slug: "mpls-western-ave",
    nombre: "Western Avenue",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9553,
    lng: -93.1170,
    descripcion: "Station near downtown St. Paul's western edge.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "St. Paul residential", tipo: "residencial", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Western Avenue Station St. Paul — Green Line | MetroGuia",
    meta_description: "Western Avenue Green Line station near downtown St. Paul."
  },
  {
    slug: "mpls-capitol-rice",
    nombre: "Capitol/Rice Street",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9565,
    lng: -93.1053,
    descripcion: "Station near the Minnesota State Capitol and Rice Street corridor.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Minnesota State Capitol", tipo: "administrativo", distancia: "5 min caminando" },
      { nombre: "Minnesota History Center", tipo: "cultural", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Capitol/Rice Street Station St. Paul — Green Line | MetroGuia",
    meta_description: "Capitol/Rice Street Green Line station. Walk to Minnesota State Capitol and History Center."
  },
  {
    slug: "mpls-robert-st",
    nombre: "Robert Street",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9520,
    lng: -93.0995,
    descripcion: "Downtown St. Paul station on Robert Street serving the business district.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Downtown St. Paul", tipo: "comercial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Robert Street Station St. Paul — Green Line | MetroGuia",
    meta_description: "Robert Street Green Line station in downtown St. Paul business district."
  },
  {
    slug: "mpls-10th-st",
    nombre: "10th Street",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9500,
    lng: -93.0960,
    descripcion: "Downtown St. Paul station near civic buildings and Xcel Energy Center.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: [],
    lugares_cercanos: [
      { nombre: "Xcel Energy Center (Wild)", tipo: "deportes", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "10th Street Station St. Paul — Green Line | MetroGuia",
    meta_description: "10th Street Green Line station near Xcel Energy Center (Minnesota Wild) in downtown St. Paul."
  },
  {
    slug: "mpls-central-station",
    nombre: "Central Station",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9470,
    lng: -93.0930,
    descripcion: "Major St. Paul transit hub near Xcel Energy Center and the downtown core.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant." },
    conexiones: ["Metro Transit bus hub"],
    lugares_cercanos: [
      { nombre: "Xcel Energy Center", tipo: "deportes", distancia: "3 min caminando" },
      { nombre: "Downtown St. Paul", tipo: "comercial", distancia: "2 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Central Station St. Paul — Green Line | MetroGuia",
    meta_description: "Central Station Green Line hub in downtown St. Paul near Xcel Energy Center."
  },
  {
    slug: "mpls-union-depot",
    nombre: "Union Depot",
    linea: ["Green"],
    sistema: "metro-transit",
    ciudad: "minneapolis",
    lat: 44.9508,
    lng: -93.0860,
    descripcion: "Eastern terminus of the Green Line at historic Union Depot, connecting to Amtrak and regional bus services.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "Major ADA-compliant hub." },
    conexiones: ["Amtrak", "Jefferson Lines", "Regional buses"],
    lugares_cercanos: [
      { nombre: "Union Depot (historic)", tipo: "cultural", distancia: "1 min caminando" },
      { nombre: "Science Museum of Minnesota", tipo: "cultural", distancia: "5 min caminando" },
      { nombre: "Lowertown arts district", tipo: "cultural", distancia: "3 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "12:30 AM", frecuencia_peak: "5-7 min", frecuencia_off_peak: "8-10 min" },
    seo_title: "Union Depot Station St. Paul — Green Line Terminus | MetroGuia",
    meta_description: "Union Depot Green Line terminus in St. Paul. Amtrak, Science Museum, and Lowertown arts district access."
  },

  // ═══════════════════════════════════════════
  // NORTHSTAR COMMUTER RAIL (5 unique + Target Field shared)
  // ═══════════════════════════════════════════
  {
    slug: "mpls-fridley",
    nombre: "Fridley",
    linea: ["Northstar"],
    sistema: "northstar-commuter-rail",
    ciudad: "minneapolis",
    lat: 45.0590,
    lng: -93.2750,
    descripcion: "First suburban stop on the Northstar line in the city of Fridley.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant. Park & Ride available." },
    conexiones: ["Park & Ride"],
    lugares_cercanos: [
      { nombre: "Fridley commercial district", tipo: "comercial", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "10:30 PM", frecuencia_peak: "30 min", frecuencia_off_peak: "Limited service" },
    seo_title: "Fridley Station — Northstar Commuter Rail | MetroGuia",
    meta_description: "Fridley Northstar Commuter Rail station. Park & Ride access to downtown Minneapolis."
  },
  {
    slug: "mpls-coon-rapids",
    nombre: "Coon Rapids–Riverdale",
    linea: ["Northstar"],
    sistema: "northstar-commuter-rail",
    ciudad: "minneapolis",
    lat: 45.1200,
    lng: -93.3100,
    descripcion: "Major suburban Park & Ride station serving Coon Rapids and surrounding communities.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant. Large Park & Ride." },
    conexiones: ["Park & Ride", "Metro Transit bus"],
    lugares_cercanos: [
      { nombre: "Coon Rapids Riverdale area", tipo: "comercial", distancia: "5 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "10:30 PM", frecuencia_peak: "30 min", frecuencia_off_peak: "Limited service" },
    seo_title: "Coon Rapids–Riverdale Station — Northstar Commuter Rail | MetroGuia",
    meta_description: "Coon Rapids–Riverdale Northstar station. Major Park & Ride hub for northern metro commuters."
  },
  {
    slug: "mpls-anoka",
    nombre: "Anoka",
    linea: ["Northstar"],
    sistema: "northstar-commuter-rail",
    ciudad: "minneapolis",
    lat: 45.2040,
    lng: -93.3880,
    descripcion: "Station in historic Anoka, known as the 'Halloween Capital of the World.'",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant. Park & Ride available." },
    conexiones: ["Park & Ride"],
    lugares_cercanos: [
      { nombre: "Historic downtown Anoka", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Rum River trails", tipo: "parques", distancia: "8 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "10:30 PM", frecuencia_peak: "30 min", frecuencia_off_peak: "Limited service" },
    seo_title: "Anoka Station — Northstar Commuter Rail | MetroGuia",
    meta_description: "Anoka Northstar station in the Halloween Capital of the World. Historic downtown and river trails."
  },
  {
    slug: "mpls-elk-river",
    nombre: "Elk River",
    linea: ["Northstar"],
    sistema: "northstar-commuter-rail",
    ciudad: "minneapolis",
    lat: 45.3050,
    lng: -93.5670,
    descripcion: "Station serving the Elk River community with access to outdoor recreation areas.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant. Park & Ride available." },
    conexiones: ["Park & Ride"],
    lugares_cercanos: [
      { nombre: "Elk River parks", tipo: "parques", distancia: "10 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "10:30 PM", frecuencia_peak: "30 min", frecuencia_off_peak: "Limited service" },
    seo_title: "Elk River Station — Northstar Commuter Rail | MetroGuia",
    meta_description: "Elk River Northstar station. Outdoor recreation and northern metro commuter access."
  },
  {
    slug: "mpls-big-lake",
    nombre: "Big Lake",
    linea: ["Northstar"],
    sistema: "northstar-commuter-rail",
    ciudad: "minneapolis",
    lat: 45.3320,
    lng: -93.7440,
    descripcion: "Northern terminus of the Northstar Commuter Rail in the city of Big Lake.",
    accesibilidad: { elevador: true, rampa: true, piso_tactil: true, notas: "ADA compliant. Park & Ride available." },
    conexiones: ["Park & Ride"],
    lugares_cercanos: [
      { nombre: "Big Lake community", tipo: "residencial", distancia: "5 min caminando" },
      { nombre: "Big Lake (lake)", tipo: "parques", distancia: "15 min caminando" }
    ],
    horarios: { apertura: "5:30 AM", cierre: "10:30 PM", frecuencia_peak: "30 min", frecuencia_off_peak: "Limited service" },
    seo_title: "Big Lake Station — Northstar Commuter Rail Terminus | MetroGuia",
    meta_description: "Big Lake Northstar terminus station. End of line for northern metro commuter rail service."
  },
];
