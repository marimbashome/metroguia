export const lineasToronto = [
  {
    id: "1",
    color: "#FFCC00",
    colorNombre: "Amarillo",
    inicio: "Finch / Vaughan Metropolitan Centre",
    fin: "Union Station",
    total: 38,
    municipios: ["Toronto", "Vaughan"],
    descripcion: "Línea Yonge-University del TTC Subway. La línea más larga del sistema, operando desde 1954. Recorrido de 38.4 km con 38 estaciones. Forma una U con dos terminales norte (Finch y Vaughan MC) y terminal sur en Union Station. Conecta el norte suburbano con el centro financiero y cultural de Toronto.",
    estaciones_turisticas: ["toronto-union-station", "toronto-bloor-yonge", "toronto-st-george", "toronto-dundas", "toronto-queen", "toronto-king", "toronto-spadina"],
    estaciones: [
      "toronto-finch",
      "toronto-bloor-yonge",
      "toronto-st-george",
      "toronto-dundas",
      "toronto-queen",
      "toronto-king",
      "toronto-union-station",
      "toronto-spadina",
      "toronto-vaughan-mc"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea 1: Centro histórico y cultural de Toronto",
      paradas: [
        {
          estacion: "toronto-union-station",
          actividad: "Inicio en Union Station. Hub de transporte (8:00 AM)"
        },
        {
          estacion: "toronto-king",
          actividad: "King Street Financial District (9:00 AM)"
        },
        {
          estacion: "toronto-queen",
          actividad: "Queen Street West (10:30 AM) - tiendas independientes y cafés"
        },
        {
          estacion: "toronto-dundas",
          actividad: "Eaton Centre Shopping Mall y Yonge-Dundas Square (12:00 PM)"
        },
        {
          estacion: "toronto-st-george",
          actividad: "Campus Universidad de Toronto (1:30 PM)"
        },
        {
          estacion: "toronto-bloor-yonge",
          actividad: "Yorkville Shopping y Royal Ontario Museum (3:00 PM)"
        },
        {
          estacion: "toronto-finch",
          actividad: "Retorno a Finch Terminal (5:00 PM)"
        }
      ]
    }
  },

  {
    id: "2",
    color: "#00AA00",
    colorNombre: "Verde",
    inicio: "Kipling",
    fin: "Kennedy",
    total: 31,
    municipios: ["Toronto"],
    descripcion: "Línea Bloor-Danforth del TTC Subway. Operando desde 1966. Recorrido de 20.7 km con 31 estaciones. Conecta el oeste de Toronto (Kipling) con el este (Kennedy). Pasa por zona de Bloor, parques y barrios residenciales. Estación importante: Bloor-Yonge con transferencia a Línea 1.",
    estaciones_turisticas: ["toronto-bloor-yonge", "toronto-high-park", "toronto-bathurst-l2", "toronto-main-street-l2"],
    estaciones: [
      "toronto-bloor-danforth",
      "toronto-high-park",
      "toronto-bathurst-l2",
      "toronto-main-street-l2",
      "toronto-kennedy"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea 2: Parques y vida residencial de Toronto",
      paradas: [
        {
          estacion: "toronto-high-park",
          actividad: "Inicio en High Park (9:00 AM) - senderismo y parque"
        },
        {
          estacion: "toronto-bathurst-l2",
          actividad: "Bathurst Street (11:00 AM)"
        },
        {
          estacion: "toronto-bloor-yonge",
          actividad: "Transbordo a Línea 1, Yorkville (1:00 PM)"
        },
        {
          estacion: "toronto-main-street-l2",
          actividad: "Main Street comercio local (3:00 PM)"
        },
        {
          estacion: "toronto-kennedy",
          actividad: "Kennedy Station (5:00 PM)"
        }
      ]
    }
  },

  {
    id: "4",
    color: "#CC00CC",
    colorNombre: "Púrpura",
    inicio: "Sheppard-Yonge",
    fin: "Don Mills",
    total: 5,
    municipios: ["Toronto"],
    descripcion: "Línea Sheppard del TTC Subway. Operando desde 2002. Línea más corta del sistema con 5 estaciones. Recorrido de 5.5 km. Conecta zona norte de Toronto. Transferencia importante con Línea 1 en Sheppard-Yonge.",
    estaciones_turisticas: ["toronto-sheppard-yonge"],
    estaciones: [
      "toronto-sheppard-yonge",
      "toronto-don-mills"
    ],
    ruta_1_dia: {
      titulo: "Ruta por la Línea 4: Zona norte comercial",
      paradas: [
        {
          estacion: "toronto-sheppard-yonge",
          actividad: "Inicio en Sheppard-Yonge (10:00 AM) - transbordo Línea 1"
        },
        {
          estacion: "toronto-don-mills",
          actividad: "Don Mills Shopping Centre (11:30 AM)"
        }
      ]
    }
  },

  {
    id: "GO-Lakeshore",
    color: "#FF6600",
    colorNombre: "Naranja",
    inicio: "Union Station",
    fin: "Exhibition Station (BMO Field)",
    total: 2,
    municipios: ["Toronto"],
    descripcion: "GO Transit Lakeshore Line. Sistema de transporte regional que conecta Toronto con su área metropolitana. Union Station es hub multimodal principal (TTC + GO Transit + Via Rail). Exhibition Station acceso a eventos deportivos (Toronto FC en BMO Field) y Exhibition Place.",
    estaciones_turisticas: ["toronto-union-go-transit", "toronto-exhibition-go"],
    estaciones: [
      "toronto-union-go-transit",
      "toronto-exhibition-go"
    ],
    ruta_1_dia: {
      titulo: "Ruta por GO Transit: Hub multimodal y eventos",
      paradas: [
        {
          estacion: "toronto-union-go-transit",
          actividad: "Union Station Hub (8:00 AM) - intercambio TTC/GO/VIA"
        },
        {
          estacion: "toronto-exhibition-go",
          actividad: "Exhibition Station (9:00 AM) - eventos/BMO Field"
        }
      ]
    }
  }
];
