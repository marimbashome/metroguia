export const lineasPortland = [
  {
    id: "blue",
    color: "#0054A4",
    colorNombre: "Azul",
    inicio: "Hillsboro Central",
    fin: "Gresham City Hall",
    total: 30,
    municipios: ["Hillsboro", "Beaverton", "Portland", "Gresham"],
    descripcion: "Línea principal de TriMet MAX Light Rail. La Línea Azul es la más larga del sistema, conectando el oeste suburbano de Hillsboro hasta el este de Gresham. Atraviesa Washington Park (la estación más profunda de Norteamérica), el centro de Portland con Pioneer Courthouse Square, Providence Park (home del Portland Timbers), Rose Quarter (Moda Center), Lloyd Center y Gateway Transit Center. Inaugurada en varios tramos entre 1998 y 2009, ofrece conexión completa entre la región metropolitana. Operativa diariamente 4:30 AM a 1:00 AM con trenes cada 6-15 minutos en horas pico. Sirve a residentes de west Portland, commuters suburbanos y turistas accediendo a parques, museos y entretenimiento.",
    estaciones_turisticas: ["portland-washington-park", "portland-pioneer-courthouse", "portland-providence-park", "portland-rose-quarter-transit-center", "portland-lloyd-center"],
    estaciones: [
      "portland-hillsboro-central",
      "portland-hawthorn-farm",
      "portland-fair-complex-hillsboro-airport",
      "portland-washington-park",
      "portland-sunset-transit-center",
      "portland-beaverton-transit-center",
      "portland-elmonica",
      "portland-merlo-road",
      "portland-willow-creek-transit-center",
      "portland-goose-hollow",
      "portland-kings-hill",
      "portland-providence-park",
      "portland-library",
      "portland-pioneer-courthouse",
      "portland-old-town-chinatown",
      "portland-rose-quarter-transit-center",
      "portland-convention-center",
      "portland-lloyd-center",
      "portland-hollywood",
      "portland-gateway-transit-center",
      "portland-rockwood",
      "portland-188th-ave",
      "portland-gresham-city-hall",
      "portland-cleveland-ave"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Azul: Desde los Parques de Washington al Centro de Portland",
      paradas: [
        {
          estacion: "portland-washington-park",
          actividad: "Inicio en Washington Park, la estación más profunda de Norteamérica (9:00 AM)"
        },
        {
          estacion: "portland-providence-park",
          actividad: "Providence Park - Estadio del Portland Timbers (10:30 AM)"
        },
        {
          estacion: "portland-library",
          actividad: "Biblioteca Central de Portland y Museo de Arte (11:45 AM)"
        },
        {
          estacion: "portland-pioneer-courthouse",
          actividad: "Pioneer Courthouse Square - Centro de Portland (12:30 PM)"
        },
        {
          estacion: "portland-old-town-chinatown",
          actividad: "Barrio histórico Chinatown, jardín chino clásico (1:30 PM)"
        },
        {
          estacion: "portland-rose-quarter-transit-center",
          actividad: "Rose Quarter - Moda Center Trail Blazers (3:00 PM)"
        },
        {
          estacion: "portland-lloyd-center",
          actividad: "Lloyd Center - Centro comercial y entretenimiento (4:30 PM)"
        }
      ]
    },
    seo_title: "Línea Azul TriMet MAX — Hillsboro a Gresham, 30 estaciones | MetroGuia",
    meta_description: "Línea Azul de TriMet MAX Light Rail, la más larga del sistema. Conecta Hillsboro, Washington Park, Providence Park, Pioneer Courthouse, Rose Quarter y Gresham.",
    meta_keywords: "Línea Azul MAX, Portland transit, Washington Park, Pioneer Courthouse, Providence Park, MAX Light Rail"
  },

  {
    id: "red",
    color: "#D81526",
    colorNombre: "Rojo",
    inicio: "Portland International Airport (PDX)",
    fin: "Beaverton Transit Center",
    total: 20,
    municipios: ["Portland", "Beaverton"],
    descripcion: "Línea de enlace regional de TriMet MAX. La Línea Roja conecta directamente el Aeropuerto Internacional de Portland (PDX) en el norte, atravesando el centro de Portland y los suburbios de Parkrose, hasta Beaverton en el oeste. Proporciona acceso sin transferencias al aeropuerto desde downtown, importante para viajeros y turistas. Inaugurada en 2001 con expansión a Beaverton en 2015, ofrece un crucial enlace aeroportuario. Operativa 4:30 AM a 1:00 AM con frecuencia de 6-15 minutos en horas pico. Sirve a pasajeros de aeropuerto, commuters suburbanos y acceso al Lloyd Center.",
    estaciones_turisticas: ["portland-pdx-airport", "portland-pioneer-courthouse", "portland-lloyd-center"],
    estaciones: [
      "portland-pdx-airport",
      "portland-mt-hood-ave",
      "portland-cascades",
      "portland-parkrose-sumner-transit-center",
      "portland-convention-center",
      "portland-lloyd-center",
      "portland-pioneer-courthouse",
      "portland-old-town-chinatown",
      "portland-rose-quarter-transit-center",
      "portland-sunset-transit-center",
      "portland-beaverton-transit-center"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Roja: Del Aeropuerto al Centro",
      paradas: [
        {
          estacion: "portland-pdx-airport",
          actividad: "Inicio en PDX Airport (9:00 AM)"
        },
        {
          estacion: "portland-lloyd-center",
          actividad: "Lloyd Center - Centro comercial (10:30 AM)"
        },
        {
          estacion: "portland-pioneer-courthouse",
          actividad: "Pioneer Courthouse Square (11:30 AM)"
        },
        {
          estacion: "portland-old-town-chinatown",
          actividad: "Chinatown - Almuerzo en restaurantes locales (1:00 PM)"
        }
      ]
    },
    seo_title: "Línea Roja TriMet MAX — Aeropuerto PDX a Beaverton, 20 estaciones | MetroGuia",
    meta_description: "Línea Roja de TriMet MAX Light Rail. Acceso directo al Aeropuerto Internacional de Portland (PDX). Conecta el aeropuerto con downtown y Beaverton.",
    meta_keywords: "Línea Roja MAX, Aeropuerto Portland, MAX to PDX, Portland airport rail"
  },

  {
    id: "orange",
    color: "#D37520",
    colorNombre: "Naranja",
    inicio: "Milwaukie/Main Street",
    fin: "South Waterfront/Moody Avenue",
    total: 15,
    municipios: ["Milwaukie", "Portland"],
    descripcion: "Línea de conexión sur de TriMet MAX. La Línea Naranja conecta la comunidad suburbana de Milwaukie en el sur hasta la zona de South Waterfront en Portland downtown. Proporciona acceso a OMSI (Museo de Ciencia), South Waterfront Park, y Portland State University. Inaugurada en 2015, esta línea completó un círculo de transporte en el área metropolitana. Operativa 4:30 AM a 1:00 AM con trenes cada 10-15 minutos. Sirve a residentes de Milwaukie, commuters a downtown, y acceso a museos y parques acuáticos.",
    estaciones_turisticas: ["portland-omsi-se-water", "portland-south-waterfront-moody"],
    estaciones: [
      "portland-milwaukie-main-st",
      "portland-se-tacoma",
      "portland-bybee-blvd",
      "portland-se-park-ave",
      "portland-se-holgate-blvd",
      "portland-se-17th-ave-rhine",
      "portland-clinton-st-se-12th",
      "portland-omsi-se-water",
      "portland-south-waterfront-moody"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Naranja: Milwaukie a South Waterfront",
      paradas: [
        {
          estacion: "portland-milwaukie-main-st",
          actividad: "Inicio en downtown Milwaukie (9:00 AM)"
        },
        {
          estacion: "portland-clinton-st-se-12th",
          actividad: "Barrio Woodstock - Cafés locales (10:30 AM)"
        },
        {
          estacion: "portland-omsi-se-water",
          actividad: "OMSI - Museo de Ciencias (12:00 PM)"
        },
        {
          estacion: "portland-south-waterfront-moody",
          actividad: "South Waterfront Park - Almuerzo con vista (1:30 PM)"
        }
      ]
    },
    seo_title: "Línea Naranja TriMet MAX — Milwaukie a South Waterfront, 15 estaciones | MetroGuia",
    meta_description: "Línea Naranja de TriMet MAX Light Rail. Conecta Milwaukie con South Waterfront, OMSI y Portland State University.",
    meta_keywords: "Línea Naranja MAX, Milwaukie MAX, OMSI Museum, South Waterfront Portland"
  },

  {
    id: "yellow",
    color: "#FFC72C",
    colorNombre: "Amarillo",
    inicio: "Expo Center",
    fin: "Downtown Portland",
    total: 12,
    municipios: ["Portland"],
    descripcion: "Línea de transporte urbano norte de TriMet MAX. La Línea Amarilla conecta el Expo Center en el norte, atravesando parques regionales (Delta Park/Vanport), barrios culturales (Kenton District, Mississippi Avenue) hasta el centro de Portland (Interstate/Rose Quarter). Proporciona conexión a eventos mayores en el Expo Center y acceso a barrios artísticos del norte de Portland. Inaugurada en 2012, completó la red norte. Operativa 4:30 AM a 1:00 AM con trenes cada 10-15 minutos. Sirve a asistentes de eventos, residentes de north Portland y shoppers buscando cultura local.",
    estaciones_turisticas: ["portland-expo-center", "portland-delta-park-vanport", "portland-kenton-n-denver"],
    estaciones: [
      "portland-expo-center",
      "portland-delta-park-vanport",
      "portland-kenton-n-denver",
      "portland-n-lombard",
      "portland-n-killingsworth",
      "portland-rosa-parks",
      "portland-n-prescott",
      "portland-albina-mississippi",
      "portland-interstate-rose-quarter"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Amarilla: Norte de Portland Artístico",
      paradas: [
        {
          estacion: "portland-expo-center",
          actividad: "Inicio en Expo Center (9:00 AM) - si hay eventos"
        },
        {
          estacion: "portland-kenton-n-denver",
          actividad: "Barrio Kenton - Arte público y cafés (10:30 AM)"
        },
        {
          estacion: "portland-albina-mississippi",
          actividad: "Mississippi Avenue - Tiendas y restaurantes locales (12:00 PM)"
        }
      ]
    },
    seo_title: "Línea Amarilla TriMet MAX — Expo Center a Downtown, 12 estaciones | MetroGuia",
    meta_description: "Línea Amarilla de TriMet MAX Light Rail. Conecta Expo Center, Delta Park, Kenton District y Mississippi Avenue con el centro.",
    meta_keywords: "Línea Amarilla MAX, Expo Center Portland, Kenton District, Mississippi Avenue"
  },

  {
    id: "green",
    color: "#00843D",
    colorNombre: "Verde",
    inicio: "Clackamas Town Center",
    fin: "Downtown Portland",
    total: 13,
    municipios: ["Clackamas", "Portland"],
    descripcion: "Línea de enlace sur de TriMet MAX. La Línea Verde conecta la comunidad de Clackamas en el sur con el centro de Portland via Gateway Transit Center. Proporciona acceso a Clackamas Town Center (centro comercial regional) y barrios residenciales de south Portland. Inaugurada en 2009, complementa la red sur. Operativa 4:30 AM a 1:00 AM con trenes cada 10-15 minutos. Sirve a shoppers dirigidos a centros comerciales y commuters del sur.",
    estaciones_turisticas: ["portland-clackamas-town-center"],
    estaciones: [
      "portland-clackamas-town-center",
      "portland-se-fuller-rd",
      "portland-lents-se-foster",
      "portland-gateway-transit-center",
      "portland-convention-center",
      "portland-lloyd-center",
      "portland-pioneer-courthouse"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Verde: Clackamas al Centro",
      paradas: [
        {
          estacion: "portland-clackamas-town-center",
          actividad: "Inicio en Clackamas Town Center - Shopping (9:00 AM)"
        },
        {
          estacion: "portland-gateway-transit-center",
          actividad: "Gateway Transit Center - Hub de transporte (10:30 AM)"
        },
        {
          estacion: "portland-pioneer-courthouse",
          actividad: "Pioneer Courthouse Square (11:30 AM)"
        }
      ]
    },
    seo_title: "Línea Verde TriMet MAX — Clackamas a Downtown, 13 estaciones | MetroGuia",
    meta_description: "Línea Verde de TriMet MAX Light Rail. Conecta Clackamas Town Center con el centro de Portland via Gateway Transit Center.",
    meta_keywords: "Línea Verde MAX, Clackamas MAX, South Portland transit"
  },

  {
    id: "a-loop",
    color: "#84BD00",
    colorNombre: "Verde Claro",
    inicio: "NW 23rd Avenue",
    fin: "South Waterfront",
    total: 15,
    municipios: ["Portland"],
    descripcion: "Portland Streetcar línea A-Loop. Sistema de tranvía urbano circule que conecta el trendy NW 23rd Avenue (compras y cafés), Pearl District (galerías de arte), Central Library (museos), Pioneer Courthouse Square (centro cultural), Old Town, y South Waterfront (parques). Ofrece experiencia atmosférica de viaje urbano de corta distancia. Operativa 6:00 AM a 11:00 PM con intervalos de 12-15 minutos. Sirve a shoppers, turistas y residentes buscando experiencia de tranvía tradicional.",
    estaciones_turisticas: ["portland-streetcar-nw-23rd-ave", "portland-streetcar-pearl-district", "portland-streetcar-central-library", "portland-streetcar-pioneer-courthouse-loop"],
    estaciones: [
      "portland-streetcar-nw-23rd-ave",
      "portland-streetcar-pearl-district",
      "portland-streetcar-nw-lovejoy",
      "portland-streetcar-central-library",
      "portland-streetcar-pioneer-courthouse-loop",
      "portland-streetcar-psu"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Streetcar A-Loop: Tiendas, Arte y Cultura",
      paradas: [
        {
          estacion: "portland-streetcar-nw-23rd-ave",
          actividad: "Inicio en NW 23rd Avenue - Tiendas y cafés (10:00 AM)"
        },
        {
          estacion: "portland-streetcar-pearl-district",
          actividad: "Pearl District - Galerías de arte (11:30 AM)"
        },
        {
          estacion: "portland-streetcar-central-library",
          actividad: "Central Library - Arquitectura icónica (1:00 PM)"
        },
        {
          estacion: "portland-streetcar-pioneer-courthouse-loop",
          actividad: "Pioneer Courthouse - Centro de Portland (2:00 PM)"
        }
      ]
    },
    seo_title: "Streetcar A-Loop — NW 23rd a South Waterfront, 15 paradas | MetroGuia",
    meta_description: "Portland Streetcar A-Loop. Tranvía histórico conectando NW 23rd, Pearl District, Central Library y Pioneer Courthouse.",
    meta_keywords: "Portland Streetcar, A-Loop, NW 23rd Avenue, Pearl District"
  },

  {
    id: "b-loop",
    color: "#84BD00",
    colorNombre: "Verde Claro",
    inicio: "NW Pearl District",
    fin: "Downtown",
    total: 12,
    municipios: ["Portland"],
    descripcion: "Portland Streetcar línea B-Loop. Sistema de tranvía urbano que circule conectando NW Irving District (tiendas quirky), NW Glisan, Pearl District, y areas de downtown. Ofrece transporte de corta distancia en atmosfera tradicional de tranvía. Operativa 6:00 AM a 11:00 PM con intervalos de 12-15 minutos. Sirve a residentes y shoppers locales.",
    estaciones_turisticas: ["portland-streetcar-b-loop-nw-irving"],
    estaciones: [
      "portland-streetcar-b-loop-nw-couch",
      "portland-streetcar-b-loop-nw-glisan",
      "portland-streetcar-b-loop-nw-irving"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Streetcar B-Loop: Compras Locales",
      paradas: [
        {
          estacion: "portland-streetcar-b-loop-nw-irving",
          actividad: "Inicio en NW Irving District - Compras locales (10:00 AM)"
        }
      ]
    },
    seo_title: "Streetcar B-Loop — Pearl District a Downtown, 12 paradas | MetroGuia",
    meta_description: "Portland Streetcar B-Loop. Tranvía histórico en NW Portland con Irving District.",
    meta_keywords: "Portland Streetcar, B-Loop, NW Irving, Pearl District"
  },

  {
    id: "ns-line",
    color: "#84BD00",
    colorNombre: "Verde Claro",
    inicio: "North Waterfront",
    fin: "South Waterfront",
    total: 8,
    municipios: ["Portland"],
    descripcion: "Portland Streetcar línea NS-Line. Sistema norte-sur que conecta North Waterfront (Tom McCall Park), OMSI (museo de ciencias), y South Waterfront (parques modernos). Proporciona acceso a atraccciones waterfront a lo largo del río Willamette. Operativa 6:00 AM a 11:00 PM con intervalos de 12-15 minutos. Sirve a turistas y residentes accediendo a recreación acuática y museos.",
    estaciones_turisticas: ["portland-streetcar-ns-omsi"],
    estaciones: [
      "portland-streetcar-ns-north-waterfront",
      "portland-streetcar-ns-omsi"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Streetcar NS-Line: Waterfront Recreation",
      paradas: [
        {
          estacion: "portland-streetcar-ns-north-waterfront",
          actividad: "Inicio en North Waterfront Park (10:00 AM)"
        },
        {
          estacion: "portland-streetcar-ns-omsi",
          actividad: "OMSI - Museo de Ciencias (11:30 AM)"
        }
      ]
    },
    seo_title: "Streetcar NS-Line — North a South Waterfront, 8 paradas | MetroGuia",
    meta_description: "Portland Streetcar NS-Line. Tranvía histórico conectando North Waterfront, OMSI y South Waterfront.",
    meta_keywords: "Portland Streetcar, NS-Line, Waterfront, OMSI"
  }
];
