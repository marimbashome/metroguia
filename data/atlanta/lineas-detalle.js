export const lineasAtlanta = [
  {
    id: "Red",
    color: "#E63946",
    colorNombre: "Rojo",
    inicio: "North Springs",
    fin: "Hartsfield-Jackson Airport",
    total: 19,
    municipios: ["Atlanta", "Sandy Springs", "Dunwoody"],
    descripcion: "Línea Roja MARTA. Línea principal norte-sur que conecta el norte de Atlanta (North Springs) con el Aeropuerto Internacional Hartsfield-Jackson. Pasa por Buckhead, Midtown y downtown Atlanta con acceso a zonas comerciales y de entretenimiento. Estaciones clave: North Springs (terminal norte), Buckhead (shopping), Midtown (vida nocturna), Five Points (hub central), y Hartsfield-Jackson Airport (terminal sur).",
    estaciones_turisticas: ["atlanta-buckhead", "atlanta-midtown", "atlanta-arts-center", "atlanta-peachtree-center", "atlanta-five-points", "atlanta-airport"],
    estaciones: [
      "atlanta-north-springs",
      "atlanta-sandy-springs",
      "atlanta-dunwoody",
      "atlanta-medical-center",
      "atlanta-buckhead",
      "atlanta-lindbergh",
      "atlanta-arts-center",
      "atlanta-midtown",
      "atlanta-north-avenue",
      "atlanta-civic-center",
      "atlanta-peachtree-center",
      "atlanta-five-points",
      "atlanta-garnett",
      "atlanta-west-end",
      "atlanta-oakland-city",
      "atlanta-lakewood-fort-mcpherson",
      "atlanta-east-point",
      "atlanta-college-park",
      "atlanta-airport"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Roja: Downtown Shopping y Aeropuerto",
      paradas: [
        {
          estacion: "atlanta-buckhead",
          actividad: "Inicio en Buckhead. Shopping de lujo en Lenox Square. (10:00 AM)"
        },
        {
          estacion: "atlanta-midtown",
          actividad: "Almuerzo en Midtown. Zona vibrante con bares y restaurantes. (1:00 PM)"
        },
        {
          estacion: "atlanta-peachtree-center",
          actividad: "Visita Peachtree Center complex. Compras en centro comercial. (3:00 PM)"
        },
        {
          estacion: "atlanta-five-points",
          actividad: "Hub central. Conexión a otras líneas si deseas explorar. (4:30 PM)"
        },
        {
          estacion: "atlanta-airport",
          actividad: "Terminal del aeropuerto. Cena de despedida. (6:00 PM)"
        }
      ]
    }
  },
  {
    id: "Gold",
    color: "#FFB703",
    colorNombre: "Oro",
    inicio: "Doraville",
    fin: "Hartsfield-Jackson Airport",
    total: 18,
    municipios: ["Atlanta", "Doraville", "Chamblee"],
    descripcion: "Línea Gold MARTA. Línea este-sur que va desde Doraville (terminal este) hasta el Aeropuerto Internacional Hartsfield-Jackson. Pasa por zonas comerciales y conecta con Five Points en el centro de Atlanta. Es complemento importante del sistema MARTA.",
    estaciones_turisticas: ["atlanta-lenox", "atlanta-lindbergh", "atlanta-peachtree-center", "atlanta-five-points", "atlanta-airport"],
    estaciones: [
      "atlanta-doraville",
      "atlanta-chamblee",
      "atlanta-brookhaven-oglethorpe",
      "atlanta-lenox",
      "atlanta-lindbergh",
      "atlanta-arts-center",
      "atlanta-midtown",
      "atlanta-north-avenue",
      "atlanta-civic-center",
      "atlanta-peachtree-center",
      "atlanta-five-points",
      "atlanta-garnett",
      "atlanta-west-end",
      "atlanta-oakland-city",
      "atlanta-lakewood-fort-mcpherson",
      "atlanta-east-point",
      "atlanta-college-park",
      "atlanta-airport"
    ]
  },
  {
    id: "Blue",
    color: "#0077B6",
    colorNombre: "Azul",
    inicio: "Hamilton E. Holmes",
    fin: "Indian Creek",
    total: 15,
    municipios: ["Atlanta", "Decatur"],
    descripcion: "Línea Azul MARTA. Línea este-oeste que conecta la zona oeste (Hamilton E. Holmes) con la zona sureste (Indian Creek). Pasa por downtown Atlanta y Five Points. Acceso a Mercedes-Benz Stadium, State Farm Arena, y zonas residenciales importantes. Estaciones clave: Vine City (Mercedes-Benz Stadium), Dome/GWCC (State Farm Arena), Five Points (hub central).",
    estaciones_turisticas: ["atlanta-vine-city", "atlanta-dome-gwcc-phillips-cnn", "atlanta-five-points", "atlanta-king-memorial", "atlanta-inman-park-reynoldstown"],
    estaciones: [
      "atlanta-hamilton-holmes",
      "atlanta-west-lake",
      "atlanta-ashby",
      "atlanta-vine-city",
      "atlanta-dome-gwcc-phillips-cnn",
      "atlanta-five-points",
      "atlanta-georgia-state",
      "atlanta-king-memorial",
      "atlanta-inman-park-reynoldstown",
      "atlanta-edgewood-candler-park",
      "atlanta-east-lake",
      "atlanta-decatur",
      "atlanta-avondale",
      "atlanta-kensington",
      "atlanta-indian-creek"
    ]
  },
  {
    id: "Green",
    color: "#06A77D",
    colorNombre: "Verde",
    inicio: "Bankhead",
    fin: "Edgewood/Candler Park",
    total: 9,
    municipios: ["Atlanta"],
    descripcion: "Línea Verde MARTA. Línea oeste-este que conecta Bankhead con Edgewood/Candler Park. Línea más corta del sistema que proporciona conexiones importantes en Five Points y permite acceso a zonas oeste de Atlanta. Estaciones clave: Bankhead (terminal oeste), Ashby y Vine City (transferencias), Five Points (hub central).",
    estaciones_turisticas: ["atlanta-vine-city", "atlanta-dome-gwcc-phillips-cnn", "atlanta-five-points", "atlanta-edgewood-candler-park"],
    estaciones: [
      "atlanta-bankhead",
      "atlanta-ashby",
      "atlanta-vine-city",
      "atlanta-dome-gwcc-phillips-cnn",
      "atlanta-five-points",
      "atlanta-georgia-state",
      "atlanta-king-memorial",
      "atlanta-inman-park-reynoldstown",
      "atlanta-edgewood-candler-park"
    ]
  }
];
