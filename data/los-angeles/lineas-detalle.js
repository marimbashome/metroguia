export const lineasLA = [
  {
    id: "A",
    color: "#0066CC",
    colorNombre: "Azul",
    inicio: "Long Beach",
    fin: "Downtown LA",
    total: 16,
    municipios: ["Long Beach", "Los Angeles"],
    descripcion: "Línea troncal norte-sur del Metro de Los Angeles. Conecta Long Beach con Downtown LA a través del Corredor de Vermont. Operativa desde 1990, es la primera línea del sistema. Recorrido de 35 km con 16 estaciones principales.",
    estaciones_turisticas: ["la-union-station", "la-7th-st-metro-center", "la-civic-center"],
    estaciones: [
      "la-union-station",
      "la-7th-st-metro-center",
      "la-civic-center",
      "downtown-long-beach"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea A: Centro Histórico a Playa",
      paradas: [
        {
          estacion: "la-union-station",
          actividad: "Inicio en Union Station. Histórico downtown (8:00 AM)"
        },
        {
          estacion: "la-7th-st-metro-center",
          actividad: "Shopping en Downtown LA (9:30 AM)"
        },
        {
          estacion: "la-civic-center",
          actividad: "Civic Center y Grand Central Market (11:00 AM)"
        },
        {
          estacion: "downtown-long-beach",
          actividad: "Long Beach, Aquarium, Pike outlet (1:00 PM)"
        }
      ]
    },
    seo_title: "Línea A (Azul) Metro Los Angeles — Long Beach a Downtown, 16 estaciones | MetroGuia",
    meta_description: "Línea A (Azul) del Metro Los Angeles. Primera línea desde 1990, conecta Long Beach con Downtown LA, 16 estaciones, 35 km.",
    h1: "Línea A — Azul | Metro Los Angeles"
  },
  {
    id: "B",
    color: "#D2003B",
    colorNombre: "Rojo",
    inicio: "North Hollywood",
    fin: "Union Station",
    total: 16,
    municipios: ["Los Angeles"],
    descripcion: "Línea rápida subterránea norte-sur del Metro de Los Angeles. Conecta North Hollywood con Union Station en Downtown LA, completamente subterránea. Operativa desde 2000 (primeros tramos). Recorrido de 21 km con 16 estaciones. Incluye la famosa parada Hollywood/Highland.",
    estaciones_turisticas: ["la-hollywood-highland", "la-universal-city", "la-union-station"],
    estaciones: [
      "la-north-hollywood",
      "la-universal-city",
      "la-hollywood-highland",
      "la-hollywood-bowel",
      "la-vermont-sunset",
      "la-union-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea B: Hollywood y Universal",
      paradas: [
        {
          estacion: "la-north-hollywood",
          actividad: "Inicio en North Hollywood. Zona comercial (8:00 AM)"
        },
        {
          estacion: "la-universal-city",
          actividad: "Universal Studios Hollywood. Parque temático (9:00 AM)"
        },
        {
          estacion: "la-hollywood-highland",
          actividad: "Hollywood. Walk of Fame, tiendas, restaurantes (1:00 PM)"
        },
        {
          estacion: "la-union-station",
          actividad: "Downtown. Civic Center, comida y retorno (4:00 PM)"
        }
      ]
    },
    seo_title: "Línea B (Rojo) Metro Los Angeles — North Hollywood a Union Station, Hollywood | MetroGuia",
    meta_description: "Línea B (Rojo) del Metro Los Angeles. Línea subterránea Hollywood-Downtown, Universal Studios, 16 estaciones, 21 km.",
    h1: "Línea B — Rojo | Metro Los Angeles"
  },
  {
    id: "C",
    color: "#00A651",
    colorNombre: "Verde",
    inicio: "Norwalk",
    fin: "LAX/Metro Transit Center",
    total: 14,
    municipios: ["Los Angeles", "Compton"],
    descripcion: "Línea de conexión este-oeste del Metro de Los Angeles. Conecta Norwalk con LAX/Metro Transit Center. Corre en mediana de I-105. Operativa desde 1995. Recorrido de 28.6 km con 14 estaciones grade-separated.",
    estaciones_turisticas: ["la-willowbrook", "la-lax-metro-transit-center"],
    estaciones: [
      "la-norwalk",
      "la-willowbrook",
      "la-lax-metro-transit-center"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea C: Este de LA a Aeropuerto",
      paradas: [
        {
          estacion: "la-norwalk",
          actividad: "Inicio en Norwalk, zona este (8:00 AM)"
        },
        {
          estacion: "la-willowbrook",
          actividad: "Willowbrook/Rosa Parks Transit Center (10:00 AM)"
        },
        {
          estacion: "la-lax-metro-transit-center",
          actividad: "LAX. Acceso a aeropuerto (12:00 PM)"
        }
      ]
    },
    seo_title: "Línea C (Verde) Metro Los Angeles — Norwalk a LAX, 14 estaciones | MetroGuia",
    meta_description: "Línea C (Verde) del Metro Los Angeles. Línea I-105, Norwalk a LAX, 14 estaciones, 28.6 km, acceso directo aeropuerto.",
    h1: "Línea C — Verde | Metro Los Angeles"
  },
  {
    id: "D",
    color: "#9B3DB5",
    colorNombre: "Púrpura",
    inicio: "Wilshire/Western",
    fin: "Union Station",
    total: 16,
    municipios: ["Los Angeles"],
    descripcion: "Línea subterránea este-oeste del Metro de Los Angeles. Conecta Wilshire/Western con Union Station a través de Downtown LA. Completamente subterránea. Operativa desde 1999 (primeros segmentos), expansión en curso. Recorrido de 24 km con 16 estaciones.",
    estaciones_turisticas: ["la-civic-center", "la-union-station"],
    estaciones: [
      "la-wilshire-western",
      "la-wilshire-normandie",
      "la-wilshire-vermont",
      "la-civic-center",
      "la-union-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea D: Koreatown a Downtown",
      paradas: [
        {
          estacion: "la-wilshire-western",
          actividad: "Inicio en Koreatown. Gastronomía y compras (8:00 AM)"
        },
        {
          estacion: "la-wilshire-vermont",
          actividad: "Vermont Avenue. Zona comercial (10:00 AM)"
        },
        {
          estacion: "la-civic-center",
          actividad: "Civic Center. Administración y cultura (11:30 AM)"
        },
        {
          estacion: "la-union-station",
          actividad: "Union Station. Retorno y cena (2:00 PM)"
        }
      ]
    },
    seo_title: "Línea D (Púrpura) Metro Los Angeles — Koreatown a Downtown, 16 estaciones | MetroGuia",
    meta_description: "Línea D (Púrpura) del Metro Los Angeles. Línea subterránea Koreatown-Downtown, Wilshire Corridor, 16 estaciones, 24 km.",
    h1: "Línea D — Púrpura | Metro Los Angeles"
  },
  {
    id: "E",
    color: "#FF0000",
    colorNombre: "Rojo-Expo",
    inicio: "Santa Monica",
    fin: "Downtown LA",
    total: 15,
    municipios: ["Santa Monica", "Los Angeles"],
    descripcion: "Línea de exposición este-oeste del Metro de Los Angeles. Conecta Santa Monica con Downtown LA. Operativa desde 2016 (segunda fase). Recorrido de 22.4 km con 15 estaciones. Incluye conexión con Línea A en Downtown.",
    estaciones_turisticas: ["la-santa-monica", "la-expo-crenshaw"],
    estaciones: [
      "la-santa-monica",
      "la-expo-crenshaw",
      "la-expo-west-la",
      "la-union-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea E: Playa a Downtown",
      paradas: [
        {
          estacion: "la-santa-monica",
          actividad: "Inicio en Santa Monica. Playa y Pier (8:00 AM)"
        },
        {
          estacion: "la-expo-crenshaw",
          actividad: "Crenshaw District. Shopping y cultura (11:00 AM)"
        },
        {
          estacion: "la-expo-west-la",
          actividad: "West LA. Zona comercial (1:00 PM)"
        },
        {
          estacion: "la-union-station",
          actividad: "Union Station. Downtown y retorno (3:00 PM)"
        }
      ]
    },
    seo_title: "Línea E (Expo) Metro Los Angeles — Santa Monica a Downtown, 15 estaciones | MetroGuia",
    meta_description: "Línea E (Expo) del Metro Los Angeles. Línea este-oeste Santa Monica-Downtown, 15 estaciones, 22.4 km, acceso a playa.",
    h1: "Línea E — Expo | Metro Los Angeles"
  },
  {
    id: "K",
    color: "#FFB612",
    colorNombre: "Dorado",
    inicio: "LAX/Metro Transit Center",
    fin: "Downtown LA",
    total: 12,
    municipios: ["Los Angeles", "Inglewood"],
    descripcion: "Nueva línea de transporte rápido del Metro de Los Angeles. Conecta LAX/Metro Transit Center con Downtown LA, pasando por Inglewood y SoFi Stadium. Inaugurada en junio 2025. Recorrido de 16 km con 12 estaciones. Línea moderna con tecnología de último nivel.",
    estaciones_turisticas: ["la-lax-metro-transit-center", "la-inglewood-transit-center"],
    estaciones: [
      "la-lax-metro-transit-center",
      "la-inglewood-transit-center",
      "la-expo-crenshaw",
      "la-union-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea K: LAX a SoFi a Downtown",
      paradas: [
        {
          estacion: "la-lax-metro-transit-center",
          actividad: "Inicio en LAX. Aeropuerto (8:00 AM)"
        },
        {
          estacion: "la-inglewood-transit-center",
          actividad: "Inglewood. SoFi Stadium (9:30 AM)"
        },
        {
          estacion: "la-expo-crenshaw",
          actividad: "Crenshaw. Compras y comida (11:00 AM)"
        },
        {
          estacion: "la-union-station",
          actividad: "Union Station. Downtown (1:00 PM)"
        }
      ]
    },
    seo_title: "Línea K (Crenshaw) Metro Los Angeles — LAX a Downtown, SoFi Stadium, 12 estaciones | MetroGuia",
    meta_description: "Línea K (Crenshaw) del Metro Los Angeles. Nueva línea 2025, LAX-Downtown, SoFi Stadium, 12 estaciones, 16 km, transporte rápido.",
    h1: "Línea K — Dorado (Crenshaw) | Metro Los Angeles"
  }
]
