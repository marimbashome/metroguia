export const estacionesTORONTO = [
  {
    slug: "finch",
    nombre: "Finch",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Centro Comercial Finch", tipo: "shopping" },
      { nombre: "Parque North York Central", tipo: "parque" }
    ],
    transferencias: ["north-york-centre"],
    seo_title: "Estación Finch - Línea 1 TTC",
    meta_description: "Estación Finch de la Línea 1 del metro TTC. Acceso a tiendas y parques en North York.",
    h1: "Estación Finch",
    intro: "Estación terminal norte de la Línea 1, ubicada en North York.",
    tips: "Buen acceso a centros comerciales y parques. Conexión con autobuses locales.",
    descripcion_turistica: "Punto de partida de la Línea 1. Área residencial con servicios.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "north-york-centre",
    nombre: "North York Centre",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro Comercial",
    pois: [
      { nombre: "Centro Comercial North York Centre", tipo: "shopping" },
      { nombre: "Ayuntamiento de North York", tipo: "gobierno" }
    ],
    transferencias: ["finch", "wellesley"],
    seo_title: "Estación North York Centre - Línea 1 TTC",
    meta_description: "Estación North York Centre. Acceso a grandes centros comerciales y gobierno.",
    h1: "Estación North York Centre",
    intro: "Centro comercial importante de North York con acceso a múltiples tiendas.",
    tips: "Excelente para compras. Conexión con autobuses de transporte urbano.",
    descripcion_turistica: "Centro comercial vibrante con opciones de compra y entretenimiento.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "sheppard-west",
    nombre: "Sheppard West",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Parque York", tipo: "parque" },
      { nombre: "Clínica de Salud Sheppard", tipo: "salud" }
    ],
    transferencias: ["wellesley", "lawrence"],
    seo_title: "Estación Sheppard West - Línea 1 TTC",
    meta_description: "Estación Sheppard West. Acceso a parques y servicios de salud.",
    h1: "Estación Sheppard West",
    intro: "Estación residencial con acceso a parques y servicios comunitarios.",
    tips: "Zona tranquila con buen acceso a espacios verdes.",
    descripcion_turistica: "Barrio residencial con parques cercanos.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "lawrence",
    nombre: "Lawrence",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Centro Comunitario Lawrence", tipo: "comunidad" },
      { nombre: "Biblioteca Lawrence", tipo: "cultura" }
    ],
    transferencias: ["sheppard-west", "dundas-west"],
    seo_title: "Estación Lawrence - Línea 1 TTC",
    meta_description: "Estación Lawrence. Acceso a bibliotecas y centros comunitarios.",
    h1: "Estación Lawrence",
    intro: "Estación con acceso a servicios comunitarios y culturales.",
    tips: "Centro comunitario cercano con diversos servicios.",
    descripcion_turistica: "Barrio con facilidades comunitarias.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "dundas-west",
    nombre: "Dundas West",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Centros comerciales locales", tipo: "shopping" },
      { nombre: "Restaurantes de la zona", tipo: "gastronomía" }
    ],
    transferencias: ["lawrence", "bloor-west"],
    seo_title: "Estación Dundas West - Línea 1 TTC",
    meta_description: "Estación Dundas West. Acceso a tiendas y restaurantes.",
    h1: "Estación Dundas West",
    intro: "Estación con acceso a comercios y opciones gastronómicas.",
    tips: "Buena zona comercial con variedad de restaurants.",
    descripcion_turistica: "Zona comercial y gastronómica del oeste.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bloor-west",
    nombre: "Bloor West",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Centro Comercial Bloor West", tipo: "shopping" },
      { nombre: "Parque Dundas", tipo: "parque" }
    ],
    transferencias: ["dundas-west", "bathurst"],
    seo_title: "Estación Bloor West - Línea 1 TTC",
    meta_description: "Estación Bloor West. Centro comercial principal.",
    h1: "Estación Bloor West",
    intro: "Importante centro comercial y de entretenimiento.",
    tips: "Acceso a grandes tiendas y servicios. Zona muy concurrida.",
    descripcion_turistica: "Centro comercial de importancia media.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bathurst",
    nombre: "Bathurst",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Centro Cultural Bathurst", tipo: "cultura" },
      { nombre: "Galerías de arte", tipo: "arte" }
    ],
    transferencias: ["bloor-west", "spadina"],
    seo_title: "Estación Bathurst - Línea 1 TTC",
    meta_description: "Estación Bathurst. Centro cultural y artístico.",
    h1: "Estación Bathurst",
    intro: "Estación con acceso a galerías de arte y centros culturales.",
    tips: "Zona artística con galerías y cafés creativos.",
    descripcion_turistica: "Centro artístico y cultural importante.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "spadina",
    nombre: "Spadina",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Barrio Chino de Toronto", tipo: "cultural" },
      { nombre: "Tiendas y restaurantes asiáticos", tipo: "gastronomía" }
    ],
    transferencias: ["bathurst", "college"],
    seo_title: "Estación Spadina - Línea 1 TTC",
    meta_description: "Estación Spadina. Acceso al famoso Barrio Chino.",
    h1: "Estación Spadina",
    intro: "Acceso principal al Barrio Chino de Toronto.",
    tips: "Centro gastronómico asiático. Tiendas tradicionales y modernas.",
    descripcion_turistica: "Entrada al vibrante Barrio Chino de Toronto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "college",
    nombre: "College",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Ryerson University", tipo: "educación" },
      { nombre: "Centro comercial de Spadina", tipo: "shopping" }
    ],
    transferencias: ["spadina", "dundas"],
    seo_title: "Estación College - Línea 1 TTC",
    meta_description: "Estación College. Acceso a Ryerson University.",
    h1: "Estación College",
    intro: "Estación principal de acceso a Ryerson University.",
    tips: "Zona universitaria vibrante con cafés y tiendas estudiantiles.",
    descripcion_turistica: "Entrada a campus universitario importante.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "dundas",
    nombre: "Dundas",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Eaton Centre", tipo: "shopping" },
      { nombre: "Dundas Square", tipo: "plaza" }
    ],
    transferencias: ["college", "queen"],
    seo_title: "Estación Dundas - Línea 1 TTC",
    meta_description: "Estación Dundas. Acceso a Eaton Centre y Dundas Square.",
    h1: "Estación Dundas",
    intro: "Centro comercial importante con Dundas Square.",
    tips: "Uno de los centros comerciales más grandes. Plaza con eventos culturales.",
    descripcion_turistica: "Centro comercial principal de Toronto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "queen",
    nombre: "Queen",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Queen Street West", tipo: "comercio" },
      { nombre: "Toronto City Hall", tipo: "gobierno" }
    ],
    transferencias: ["dundas", "osgoode"],
    seo_title: "Estación Queen - Línea 1 TTC",
    meta_description: "Estación Queen. Acceso a Queen Street West y City Hall.",
    h1: "Estación Queen",
    intro: "Estación central con acceso a Queen Street West histórica.",
    tips: "Tiendas y restaurantes icónicos. City Hall cercano.",
    descripcion_turistica: "Centro histórico y comercial de Toronto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "osgoode",
    nombre: "Osgoode",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Osgoode Hall", tipo: "legal" },
      { nombre: "Parque jurídico", tipo: "plaza" }
    ],
    transferencias: ["queen", "st-andrew"],
    seo_title: "Estación Osgoode - Línea 1 TTC",
    meta_description: "Estación Osgoode. Acceso a Osgoode Hall y distrito legal.",
    h1: "Estación Osgoode",
    intro: "Estación del distrito legal de Toronto.",
    tips: "Arquitectura histórica. Zona profesional.",
    descripcion_turistica: "Acceso al distrito legal histórico.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "st-andrew",
    nombre: "St. Andrew",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "St. Andrew Church", tipo: "religión" },
      { nombre: "Mercado local", tipo: "shopping" }
    ],
    transferencias: ["osgoode", "st-patrick"],
    seo_title: "Estación St. Andrew - Línea 1 TTC",
    meta_description: "Estación St. Andrew. Zona céntrica de Toronto.",
    h1: "Estación St. Andrew",
    intro: "Estación en el corazón del centro de Toronto.",
    tips: "Buena conexión con servicios varios.",
    descripcion_turistica: "Centro céntrico accesible.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "st-patrick",
    nombre: "St. Patrick",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Chinatown West", tipo: "cultural" },
      { nombre: "Galerías locales", tipo: "arte" }
    ],
    transferencias: ["st-andrew", "bloor-yonge"],
    seo_title: "Estación St. Patrick - Línea 1 TTC",
    meta_description: "Estación St. Patrick. Acceso a Chinatown y galerías.",
    h1: "Estación St. Patrick",
    intro: "Acceso al barrio artístico y Chinatown de Toronto.",
    tips: "Zona creativa con galerías y cafés.",
    descripcion_turistica: "Barrio artístico y cultural céntrico.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bloor-yonge",
    nombre: "Bloor-Yonge",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Bloor Street Promenade", tipo: "shopping" },
      { nombre: "Yorkville", tipo: "distrito" }
    ],
    transferencias: ["st-patrick", "wellesley", "2-bloor"],
    seo_title: "Estación Bloor-Yonge - Línea 1 TTC",
    meta_description: "Estación Bloor-Yonge. Acceso a Yorkville y shopping.",
    h1: "Estación Bloor-Yonge",
    intro: "Importante estación con acceso a Yorkville y Bloor Street.",
    tips: "Tiendas de lujo. Conexión con Línea 2. Acceso a Yorkville.",
    descripcion_turistica: "Centro comercial y cultural de lujo.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "wellesley",
    nombre: "Wellesley",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Toronto Public Library", tipo: "cultura" },
      { nombre: "Parque Wellesley", tipo: "parque" }
    ],
    transferencias: ["bloor-yonge", "college"],
    seo_title: "Estación Wellesley - Línea 1 TTC",
    meta_description: "Estación Wellesley. Acceso a biblioteca y parques.",
    h1: "Estación Wellesley",
    intro: "Estación céntrica con acceso a bibliotecas y parques.",
    tips: "Biblioteca importante. Zona tranquila cerca del centro.",
    descripcion_turistica: "Centro cultural y de esparcimiento.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "king",
    nombre: "King",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "St. Lawrence Market", tipo: "mercado" },
      { nombre: "Distillery District cercano", tipo: "distrito" }
    ],
    transferencias: ["st-andrew", "union"],
    seo_title: "Estación King - Línea 1 TTC",
    meta_description: "Estación King. Acceso a St. Lawrence Market.",
    h1: "Estación King",
    intro: "Acceso al histórico St. Lawrence Market.",
    tips: "Mercado tradicional. Zona histórica. Restaurantes auténticos.",
    descripcion_turistica: "Acceso a mercado histórico y zona gastronómica.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "union",
    nombre: "Union",
    linea: "1",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Union Station", tipo: "transporte" },
      { nombre: "Lakeshore", tipo: "naturaleza" },
      { nombre: "Distillery District", tipo: "turismo" },
      { nombre: "St. Lawrence Hall", tipo: "historia" }
    ],
    transferencias: ["king", "2-queen", "streetcar-king", "go-transit"],
    seo_title: "Estación Union - Centro de Toronto",
    meta_description: "Estación Union. Centro de transporte principal con acceso al lago y Distillery District.",
    h1: "Estación Union - Centro de Toronto",
    intro: "Estación principal con acceso a Union Station, tren GO Transit y lake shore.",
    tips: "Centro de transporte integral. Salida directa a lakeshore. Distillery District a corta distancia.",
    descripcion_turistica: "Estación icónica. Punto de partida para explorar waterfront y Distillery District.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:30" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "kipling",
    nombre: "Kipling",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Parque Dundas", tipo: "parque" },
      { nombre: "Centro comercial local", tipo: "shopping" }
    ],
    transferencias: ["dundas-west"],
    seo_title: "Estación Kipling - Línea 2 TTC",
    meta_description: "Estación Kipling. Acceso a parques y comercios.",
    h1: "Estación Kipling",
    intro: "Estación residencial con buena conectividad local.",
    tips: "Zona tranquila con parques. Buena conexión con autobuses.",
    descripcion_turistica: "Barrio residencial accesible.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "dundas-west-2",
    nombre: "Dundas West",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Trinity Bellwoods Park", tipo: "parque" },
      { nombre: "Tiendas independientes", tipo: "shopping" }
    ],
    transferencias: ["bloor-west"],
    seo_title: "Estación Dundas West - Línea 2 TTC",
    meta_description: "Estación Dundas West Línea 2. Acceso a Trinity Bellwoods Park.",
    h1: "Estación Dundas West",
    intro: "Acceso al parque Trinity Bellwoods.",
    tips: "Parque importante para recreación. Tiendas bohemias.",
    descripcion_turistica: "Acceso a parque céntrico importante.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "spadina-2",
    nombre: "Spadina",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Kensington Market", tipo: "mercado" },
      { nombre: "Tiendas vintage", tipo: "shopping" }
    ],
    transferencias: ["bathurst"],
    seo_title: "Estación Spadina - Línea 2 TTC",
    meta_description: "Estación Spadina Línea 2. Acceso a Kensington Market.",
    h1: "Estación Spadina",
    intro: "Acceso principal a Kensington Market.",
    tips: "Mercado bohemio auténtico. Tiendas vintage. Restaurantes variados.",
    descripcion_turistica: "Acceso a mercado bohemio auténtico de Toronto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "college-2",
    nombre: "College",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Chinatown", tipo: "cultural" },
      { nombre: "Art Gallery of Ontario", tipo: "arte" }
    ],
    transferencias: ["spadina", "mccaul"],
    seo_title: "Estación College - Línea 2 TTC",
    meta_description: "Estación College Línea 2. Acceso a AGO y Chinatown.",
    h1: "Estación College",
    intro: "Acceso a Art Gallery of Ontario y Chinatown.",
    tips: "Museo importante. Zona cultural. Restaurantes asiáticos.",
    descripcion_turistica: "Centro artístico y cultural importante.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "mccaul",
    nombre: "McCaul",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro Cultural",
    pois: [
      { nombre: "Art Gallery of Ontario", tipo: "arte" },
      { nombre: "TIFF Bell Lightbox", tipo: "cine" },
      { nombre: "Museos", tipo: "cultura" }
    ],
    transferencias: ["college-2"],
    seo_title: "Estación McCaul - Centro Cultural de Toronto",
    meta_description: "Estación McCaul. Centro de museos y artes de Toronto.",
    h1: "Estación McCaul",
    intro: "Centro cultural con múltiples museos y galerías.",
    tips: "Acceso a AGO y TIFF. Zona de alto valor cultural.",
    descripcion_turistica: "Centro cultural y artístico principal.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "saint-george",
    nombre: "Saint George",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "University of Toronto", tipo: "educación" },
      { nombre: "Parque de la Universidad", tipo: "parque" }
    ],
    transferencias: ["college-2"],
    seo_title: "Estación Saint George - Línea 2 TTC",
    meta_description: "Estación Saint George. Acceso a Universidad de Toronto.",
    h1: "Estación Saint George",
    intro: "Acceso al campus de Universidad de Toronto.",
    tips: "Campus universitario importante. Zona estudiantil.",
    descripcion_turistica: "Acceso al campus universitario principal.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "museum",
    nombre: "Museum",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro Cultural",
    pois: [
      { nombre: "Royal Ontario Museum", tipo: "museo" },
      { nombre: "Parque Queen's", tipo: "parque" }
    ],
    transferencias: ["saint-george"],
    seo_title: "Estación Museum - Toronto",
    meta_description: "Estación Museum. Acceso a Royal Ontario Museum.",
    h1: "Estación Museum",
    intro: "Acceso principal al Royal Ontario Museum.",
    tips: "Museo importante con colecciones mundiales. Parque cercano.",
    descripcion_turistica: "Acceso a museo de clase mundial.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "avenue-road",
    nombre: "Avenue Road",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Zona residencial de lujo", tipo: "residencia" },
      { nombre: "Tiendas de Avenue Road", tipo: "shopping" }
    ],
    transferencias: ["museum"],
    seo_title: "Estación Avenue Road - Línea 2 TTC",
    meta_description: "Estación Avenue Road. Acceso a zona residencial de lujo.",
    h1: "Estación Avenue Road",
    intro: "Estación en zona residencial de alta clase.",
    tips: "Zona de lujo con tiendas exclusivas.",
    descripcion_turistica: "Zona residencial de lujo de Toronto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bloor-2",
    nombre: "Bloor",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Yorkville", tipo: "distrito" },
      { nombre: "Tiendas de Bloor Street", tipo: "shopping" }
    ],
    transferencias: ["avenue-road", "1-bloor"],
    seo_title: "Estación Bloor - Línea 2 TTC",
    meta_description: "Estación Bloor Línea 2. Acceso a Yorkville y shopping.",
    h1: "Estación Bloor",
    intro: "Centro comercial importante de Yorkville.",
    tips: "Tiendas de lujo. Conexión con Línea 1. Yorkville cercano.",
    descripcion_turistica: "Centro comercial de lujo.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "wellesley-2",
    nombre: "Wellesley",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Zona de bares y restaurantes", tipo: "gastronomía" },
      { nombre: "Parques céntricos", tipo: "parque" }
    ],
    transferencias: ["bloor-2", "1-wellesley"],
    seo_title: "Estación Wellesley - Línea 2 TTC",
    meta_description: "Estación Wellesley Línea 2. Zona gastronómica céntrica.",
    h1: "Estación Wellesley",
    intro: "Zona gastronómica y de entretenimiento céntrica.",
    tips: "Restaurantes y bares variados. Conexión con Línea 1.",
    descripcion_turistica: "Centro gastronómico de Toronto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "queen-2",
    nombre: "Queen",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Queen Street East", tipo: "comercio" },
      { nombre: "St. Lawrence Market cercano", tipo: "mercado" }
    ],
    transferencias: ["wellesley-2", "1-queen"],
    seo_title: "Estación Queen - Línea 2 TTC",
    meta_description: "Estación Queen Línea 2. Acceso a Queen Street East.",
    h1: "Estación Queen",
    intro: "Acceso a Queen Street East y zona comercial.",
    tips: "Tiendas y restaurantes variados. Market cercano.",
    descripcion_turistica: "Centro comercial y cultural.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "king-2",
    nombre: "King",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "King Street East", tipo: "comercio" },
      { nombre: "Zona financiera", tipo: "negocio" }
    ],
    transferencias: ["queen-2", "1-king"],
    seo_title: "Estación King - Línea 2 TTC",
    meta_description: "Estación King Línea 2. Acceso a King Street y zona financiera.",
    h1: "Estación King",
    intro: "Estación en zona comercial y financiera.",
    tips: "King Street East. Zona de negocios. Restaurantes.",
    descripcion_turistica: "Centro comercial y financiero.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "duncan",
    nombre: "Duncan",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Zona residencial", tipo: "residencia" },
      { nombre: "Comercios locales", tipo: "shopping" }
    ],
    transferencias: ["king-2"],
    seo_title: "Estación Duncan - Línea 2 TTC",
    meta_description: "Estación Duncan. Zona céntrica residencial.",
    h1: "Estación Duncan",
    intro: "Estación céntrica con zona residencial.",
    tips: "Zona tranquila en el corazón de la ciudad.",
    descripcion_turistica: "Centro accesible.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bay-2",
    nombre: "Bay",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Zona de negocios", tipo: "negocio" },
      { nombre: "Oficinas centrales", tipo: "comercio" }
    ],
    transferencias: ["duncan"],
    seo_title: "Estación Bay - Línea 2 TTC",
    meta_description: "Estación Bay. Zona de negocios centrales.",
    h1: "Estación Bay",
    intro: "Estación en distrito de negocios.",
    tips: "Centro financiero. Acceso a oficinas principales.",
    descripcion_turistica: "Centro de negocios.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "yonge-bloor-2",
    nombre: "Yonge-Bloor",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Bloor Street", tipo: "comercio" },
      { nombre: "Yorkville", tipo: "distrito" }
    ],
    transferencias: ["bay-2", "1-bloor-yonge"],
    seo_title: "Estación Yonge-Bloor - Línea 2 TTC",
    meta_description: "Estación Yonge-Bloor. Conexión de líneas en zona de lujo.",
    h1: "Estación Yonge-Bloor",
    intro: "Importante conexión entre líneas en zona comercial de lujo.",
    tips: "Yorkville. Tiendas premium. Conexión con Línea 1.",
    descripcion_turistica: "Centro de conexión y comercio de lujo.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "castle-frank",
    nombre: "Castle Frank",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Parque Ravine", tipo: "parque" },
      { nombre: "Zona residencial tranquila", tipo: "residencia" }
    ],
    transferencias: ["yonge-bloor-2"],
    seo_title: "Estación Castle Frank - Línea 2 TTC",
    meta_description: "Estación Castle Frank. Acceso a parques naturales.",
    h1: "Estación Castle Frank",
    intro: "Estación con acceso a parques naturales.",
    tips: "Zona natural y tranquila. Buenos parques para caminar.",
    descripcion_turistica: "Acceso a naturaleza.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "wellesley-3",
    nombre: "Wellesley",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencia" },
      { nombre: "Parques locales", tipo: "parque" }
    ],
    transferencias: ["castle-frank"],
    seo_title: "Estación Wellesley - Línea 2 Este",
    meta_description: "Estación Wellesley Este. Zona residencial.",
    h1: "Estación Wellesley",
    intro: "Estación en zona residencial del este.",
    tips: "Zona tranquila. Buenos transportes locales.",
    descripcion_turistica: "Barrio residencial accesible.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "chester",
    nombre: "Chester",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Centro comercial Chester", tipo: "shopping" },
      { nombre: "Parques", tipo: "parque" }
    ],
    transferencias: ["wellesley-3"],
    seo_title: "Estación Chester - Línea 2 TTC",
    meta_description: "Estación Chester. Acceso a comercios locales.",
    h1: "Estación Chester",
    intro: "Estación residencial con comercios locales.",
    tips: "Buenos comercios locales. Zona familiar.",
    descripcion_turistica: "Barrio residencial con servicios.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "broadview",
    nombre: "Broadview",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Zona artística", tipo: "arte" },
      { nombre: "Restaurantes independientes", tipo: "gastronomía" }
    ],
    transferencias: ["chester"],
    seo_title: "Estación Broadview - Línea 2 TTC",
    meta_description: "Estación Broadview. Zona artística con restaurants.",
    h1: "Estación Broadview",
    intro: "Zona artística y gastronómica en expansión.",
    tips: "Restaurantes auténticos. Galerías de arte. Zona creativa.",
    descripcion_turistica: "Centro artístico emergente.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "chester-2",
    nombre: "Chester",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Parque local", tipo: "parque" },
      { nombre: "Comercios", tipo: "shopping" }
    ],
    transferencias: ["broadview"],
    seo_title: "Estación Chester Este - Línea 2 TTC",
    meta_description: "Estación Chester Este. Zona residencial.",
    h1: "Estación Chester",
    intro: "Zona residencial tranquila.",
    tips: "Parques. Zona familiar.",
    descripcion_turistica: "Barrio tranquilo.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "pape",
    nombre: "Pape",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Pape Village", tipo: "comercio" },
      { nombre: "Restaurantes y cafés", tipo: "gastronomía" }
    ],
    transferencias: ["chester-2"],
    seo_title: "Estación Pape - Línea 2 TTC",
    meta_description: "Estación Pape. Acceso a Pape Village.",
    h1: "Estación Pape",
    intro: "Acceso a vibrante Pape Village.",
    tips: "Restaurantes auténticos. Cafés locales. Zona bohemia.",
    descripcion_turistica: "Centro bohemio y gastronómico.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "donlands",
    nombre: "Donlands",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Parque Donlands", tipo: "parque" },
      { nombre: "Zona residencial", tipo: "residencia" }
    ],
    transferencias: ["pape"],
    seo_title: "Estación Donlands - Línea 2 TTC",
    meta_description: "Estación Donlands. Acceso a parque Donlands.",
    h1: "Estación Donlands",
    intro: "Acceso a parque Donlands y zona residencial.",
    tips: "Parque natural importante. Zona tranquila.",
    descripcion_turistica: "Acceso a naturaleza.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "coxwell",
    nombre: "Coxwell",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencia" },
      { nombre: "Comercios locales", tipo: "shopping" }
    ],
    transferencias: ["donlands"],
    seo_title: "Estación Coxwell - Línea 2 TTC",
    meta_description: "Estación Coxwell. Zona residencial del este.",
    h1: "Estación Coxwell",
    intro: "Estación en zona residencial del este de Toronto.",
    tips: "Zona tranquila. Comercios locales.",
    descripcion_turistica: "Barrio residencial accesible.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "woodbine",
    nombre: "Woodbine",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Parque Woodbine", tipo: "parque" },
      { nombre: "Zona residencial", tipo: "residencia" }
    ],
    transferencias: ["coxwell"],
    seo_title: "Estación Woodbine - Línea 2 TTC",
    meta_description: "Estación Woodbine. Acceso a parque Woodbine.",
    h1: "Estación Woodbine",
    intro: "Acceso a parque Woodbine y zona residencial.",
    tips: "Parque importante. Zona familiar.",
    descripcion_turistica: "Acceso a parque.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "main-street",
    nombre: "Main Street",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro Comercial",
    pois: [
      { nombre: "Main Street Centro Comercial", tipo: "shopping" },
      { nombre: "Zona de negocios", tipo: "negocio" }
    ],
    transferencias: ["woodbine"],
    seo_title: "Estación Main Street - Línea 2 TTC",
    meta_description: "Estación Main Street. Centro comercial importante.",
    h1: "Estación Main Street",
    intro: "Centro comercial importante.",
    tips: "Centro comercial de importancia. Acceso fácil.",
    descripcion_turistica: "Centro comercial regional.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "gerrard",
    nombre: "Gerrard",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Gerrard Square", tipo: "plaza" },
      { nombre: "Comercios locales", tipo: "shopping" }
    ],
    transferencias: ["main-street"],
    seo_title: "Estación Gerrard - Línea 2 TTC",
    meta_description: "Estación Gerrard. Zona residencial con plaza.",
    h1: "Estación Gerrard",
    intro: "Estación con plaza pública.",
    tips: "Plaza local. Comercios comunitarios.",
    descripcion_turistica: "Centro comunitario.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "queen-east",
    nombre: "Queen East",
    linea: "2",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Queen Street East", tipo: "comercio" },
      { nombre: "Restaurantes", tipo: "gastronomía" }
    ],
    transferencias: ["gerrard"],
    seo_title: "Estación Queen East - Línea 2 TTC",
    meta_description: "Estación Queen East. Acceso a Queen Street East.",
    h1: "Estación Queen East",
    intro: "Acceso a Queen Street East.",
    tips: "Queen Street East con restaurants y tiendas.",
    descripcion_turistica: "Centro comercial.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "kipling-4",
    nombre: "Kipling",
    linea: "4",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Residencial",
    pois: [
      { nombre: "Centro comercial Kipling", tipo: "shopping" },
      { nombre: "Parques locales", tipo: "parque" }
    ],
    transferencias: ["dundas-west"],
    seo_title: "Estación Kipling - Línea 4 TTC",
    meta_description: "Estación Kipling Línea 4. Zona residencial.",
    h1: "Estación Kipling",
    intro: "Estación terminal de Línea 4.",
    tips: "Centro comercial. Parques locales.",
    descripcion_turistica: "Inicio de línea 4.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "dundas-west-4",
    nombre: "Dundas West",
    linea: "4",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Trinity Bellwoods Park", tipo: "parque" },
      { nombre: "Comercios independientes", tipo: "shopping" }
    ],
    transferencias: ["bloor-west"],
    seo_title: "Estación Dundas West - Línea 4 TTC",
    meta_description: "Estación Dundas West Línea 4. Acceso a parque.",
    h1: "Estación Dundas West",
    intro: "Acceso a Trinity Bellwoods Park.",
    tips: "Parque bohemio. Tiendas independientes.",
    descripcion_turistica: "Parque importante.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "university",
    nombre: "University",
    linea: "4",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "University Avenue", tipo: "calle" },
      { nombre: "Zona financiera", tipo: "negocio" }
    ],
    transferencias: ["st-andrew"],
    seo_title: "Estación University - Línea 4 TTC",
    meta_description: "Estación University. Zona financiera.",
    h1: "Estación University",
    intro: "Estación en zona financiera.",
    tips: "University Avenue. Centro de negocios.",
    descripcion_turistica: "Centro financiero.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "spadina-4",
    nombre: "Spadina",
    linea: "4",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Barrio Chino", tipo: "cultural" },
      { nombre: "Tiendas asiáticas", tipo: "shopping" }
    ],
    transferencias: ["bathurst"],
    seo_title: "Estación Spadina - Línea 4 TTC",
    meta_description: "Estación Spadina Línea 4. Acceso a Barrio Chino.",
    h1: "Estación Spadina",
    intro: "Acceso a Barrio Chino.",
    tips: "Tiendas y restaurantes asiáticos.",
    descripcion_turistica: "Barrio Chino.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bathurst-4",
    nombre: "Bathurst",
    linea: "4",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Comercial",
    pois: [
      { nombre: "Centro Cultural Bathurst", tipo: "cultura" },
      { nombre: "Galerías de arte", tipo: "arte" }
    ],
    transferencias: ["bloor-west"],
    seo_title: "Estación Bathurst - Línea 4 TTC",
    meta_description: "Estación Bathurst Línea 4. Centro cultural.",
    h1: "Estación Bathurst",
    intro: "Centro cultural y artístico.",
    tips: "Galerías de arte. Cafés creativos.",
    descripcion_turistica: "Centro artístico.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "st-george-4",
    nombre: "St. George",
    linea: "4",
    sistema: "ttc-subway",
    ciudad: "Toronto",
    tipo_zona: "Educación",
    pois: [
      { nombre: "University of Toronto", tipo: "educación" },
      { nombre: "Parque Universidad", tipo: "parque" }
    ],
    transferencias: ["bloor-west"],
    seo_title: "Estación St. George - Línea 4 TTC",
    meta_description: "Estación St. George Línea 4. Campus universitario.",
    h1: "Estación St. George",
    intro: "Acceso al campus universitario.",
    tips: "Universidad importante. Campus grande.",
    descripcion_turistica: "Universidad principal.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "06:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:30" },
      sunday: { abre: "06:30", cierra: "23:30" }
    },
    tarifa: { moneda: "CAD", monto: 3.35 }
  },
  {
    slug: "bloor-1-up",
    nombre: "Bloor",
    linea: "UP",
    sistema: "up-express",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Bloor Street", tipo: "comercio" },
      { nombre: "Yorkville", tipo: "distrito" }
    ],
    transferencias: ["1-bloor-yonge"],
    seo_title: "Estación Bloor - UP Express",
    meta_description: "Estación Bloor UP Express. Conexión rápida al aeropuerto.",
    h1: "Estación Bloor - UP Express",
    intro: "Estación UP Express en Bloor.",
    tips: "Acceso rápido al aeropuerto. Conexión con Línea 1.",
    descripcion_turistica: "Estación de tren rápido.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:00" },
      sunday: { abre: "06:00", cierra: "23:00" }
    },
    tarifa: { moneda: "CAD", monto: 12.35 }
  },
  {
    slug: "spadina-1-up",
    nombre: "Spadina",
    linea: "UP",
    sistema: "up-express",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Barrio Chino", tipo: "cultural" },
      { nombre: "Kensington Market", tipo: "mercado" }
    ],
    transferencias: ["bathurst", "spadina-1"],
    seo_title: "Estación Spadina - UP Express",
    meta_description: "Estación Spadina UP Express. Conexión al aeropuerto.",
    h1: "Estación Spadina - UP Express",
    intro: "Estación UP Express en Spadina.",
    tips: "Acceso al aeropuerto. Conexión con metro.",
    descripcion_turistica: "Tren rápido al aeropuerto.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:00" },
      sunday: { abre: "06:00", cierra: "23:00" }
    },
    tarifa: { moneda: "CAD", monto: 12.35 }
  },
  {
    slug: "union-up",
    nombre: "Union",
    linea: "UP",
    sistema: "up-express",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Union Station", tipo: "transporte" },
      { nombre: "Waterfront", tipo: "naturaleza" }
    ],
    transferencias: ["union", "1-union", "go-transit"],
    seo_title: "Estación Union - UP Express",
    meta_description: "Estación Union UP Express. Conexión central a aeropuerto.",
    h1: "Estación Union - UP Express",
    intro: "Terminal principal de UP Express.",
    tips: "Conexión a GO Transit y metro. Waterfront cercano.",
    descripcion_turistica: "Centro de transporte principal.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "01:00" },
      saturday: { abre: "06:00", cierra: "01:00" },
      sunday: { abre: "06:00", cierra: "23:00" }
    },
    tarifa: { moneda: "CAD", monto: 12.35 }
  },
  {
    slug: "union-go-lakeshore",
    nombre: "Union",
    linea: "GO-Lakeshore",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Union Station", tipo: "transporte" },
      { nombre: "Waterfront", tipo: "naturaleza" }
    ],
    transferencias: ["union", "1-union", "up-express"],
    seo_title: "Estación Union - GO Lakeshore",
    meta_description: "Estación Union GO Lakeshore. Transporte regional.",
    h1: "Estación Union - GO Lakeshore",
    intro: "Terminal de GO Transit línea Lakeshore.",
    tips: "Transporte regional a Hamilton. Conexión con metro y UP.",
    descripcion_turistica: "Centro regional de transporte.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "02:00" },
      saturday: { abre: "06:00", cierra: "02:00" },
      sunday: { abre: "06:00", cierra: "00:00" }
    },
    tarifa: { moneda: "CAD", monto: 7.20 }
  },
  {
    slug: "bloor-go-lakeshore",
    nombre: "Bloor",
    linea: "GO-Lakeshore",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Bloor Street", tipo: "comercio" },
      { nombre: "Yorkville", tipo: "distrito" }
    ],
    transferencias: ["1-bloor-yonge"],
    seo_title: "Estación Bloor - GO Lakeshore",
    meta_description: "Estación Bloor GO Lakeshore. Transporte regional.",
    h1: "Estación Bloor - GO Lakeshore",
    intro: "Estación GO en Bloor.",
    tips: "Conexión regional. Acceso a Yorkville.",
    descripcion_turistica: "Estación regional.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "02:00" },
      saturday: { abre: "06:00", cierra: "02:00" },
      sunday: { abre: "06:00", cierra: "00:00" }
    },
    tarifa: { moneda: "CAD", monto: 5.60 }
  },
  {
    slug: "union-go-kitchener",
    nombre: "Union",
    linea: "GO-Kitchener",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Union Station", tipo: "transporte" },
      { nombre: "Waterfront", tipo: "naturaleza" }
    ],
    transferencias: ["union", "1-union", "up-express", "go-lakeshore"],
    seo_title: "Estación Union - GO Kitchener",
    meta_description: "Estación Union GO Kitchener. Transporte regional.",
    h1: "Estación Union - GO Kitchener",
    intro: "Terminal GO hacia Kitchener.",
    tips: "Transporte regional. Centro de conexiones.",
    descripcion_turistica: "Centro de transporte regional.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "02:00" },
      saturday: { abre: "06:00", cierra: "02:00" },
      sunday: { abre: "06:00", cierra: "00:00" }
    },
    tarifa: { moneda: "CAD", monto: 8.50 }
  },
  {
    slug: "dundas-go-kitchener",
    nombre: "Dundas",
    linea: "GO-Kitchener",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Dundas Square", tipo: "plaza" },
      { nombre: "Eaton Centre", tipo: "shopping" }
    ],
    transferencias: ["dundas-1"],
    seo_title: "Estación Dundas - GO Kitchener",
    meta_description: "Estación Dundas GO Kitchener. Centro comercial.",
    h1: "Estación Dundas - GO Kitchener",
    intro: "Estación GO en Dundas.",
    tips: "Centro comercial. Conexión regional.",
    descripcion_turistica: "Centro de transporte.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "02:00" },
      saturday: { abre: "06:00", cierra: "02:00" },
      sunday: { abre: "06:00", cierra: "00:00" }
    },
    tarifa: { moneda: "CAD", monto: 7.80 }
  },
  {
    slug: "union-go-barrie",
    nombre: "Union",
    linea: "GO-Barrie",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Union Station", tipo: "transporte" },
      { nombre: "Waterfront", tipo: "naturaleza" }
    ],
    transferencias: ["union", "1-union", "up-express", "go-lakeshore", "go-kitchener"],
    seo_title: "Estación Union - GO Barrie",
    meta_description: "Estación Union GO Barrie. Transporte regional.",
    h1: "Estación Union - GO Barrie",
    intro: "Terminal GO hacia Barrie.",
    tips: "Transporte regional directo.",
    descripcion_turistica: "Centro de transporte regional.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:30", cierra: "02:00" },
      saturday: { abre: "06:30", cierra: "02:00" },
      sunday: { abre: "07:00", cierra: "23:00" }
    },
    tarifa: { moneda: "CAD", monto: 10.70 }
  },
  {
    slug: "bloor-go-barrie",
    nombre: "Bloor",
    linea: "GO-Barrie",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Bloor Street", tipo: "comercio" },
      { nombre: "Yorkville", tipo: "distrito" }
    ],
    transferencias: ["1-bloor-yonge"],
    seo_title: "Estación Bloor - GO Barrie",
    meta_description: "Estación Bloor GO Barrie. Transporte regional.",
    h1: "Estación Bloor - GO Barrie",
    intro: "Estación GO en Bloor hacia Barrie.",
    tips: "Conexión regional. Centro comercial.",
    descripcion_turistica: "Estación regional.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:30", cierra: "02:00" },
      saturday: { abre: "06:30", cierra: "02:00" },
      sunday: { abre: "07:00", cierra: "23:00" }
    },
    tarifa: { moneda: "CAD", monto: 8.90 }
  },
  {
    slug: "union-go-milton",
    nombre: "Union",
    linea: "GO-Milton",
    sistema: "go-transit",
    ciudad: "Toronto",
    tipo_zona: "Centro",
    pois: [
      { nombre: "Union Station", tipo: "transporte" },
      { nombre: "Waterfront", tipo: "naturaleza" }
    ],
    transferencias: ["union", "1-union", "up-express", "go-lakeshore", "go-kitchener", "go-barrie"],
    seo_title: "Estación Union - GO Milton",
    meta_description: "Estación Union GO Milton. Transporte regional.",
    h1: "Estación Union - GO Milton",
    intro: "Terminal GO hacia Milton.",
    tips: "Transporte regional directo.",
    descripcion_turistica: "Centro de transporte regional.",
    accesibilidad: { elevator: true, rampa: true, piso_tactil: true },
    horarios: {
      weekday: { abre: "05:00", cierra: "02:00" },
      saturday: { abre: "06:30", cierra: "02:00" },
      sunday: { abre: "07:00", cierra: "23:00" }
    },
    tarifa: { moneda: "CAD", monto: 9.40 }
  }
];

export { estacionesTORONTO as estacionesToronto };
