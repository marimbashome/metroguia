export const lineasStLouis = [
  {
    id: "red-line",
    color: "#DA291C",
    colorNombre: "Rojo",
    inicio: "Lambert Airport",
    fin: "Shiloh/Scott",
    total: 18,
    municipios: ["St. Louis", "Brentwood", "Wellston"],
    sistema: "MetroLink",
    tarifa: "$2.50 USD",
    frecuencia: "10-15 minutos en horas pico",
    horario: "04:00 AM - 11:00 PM",
    descripcion: "Línea Roja del Sistema MetroLink de St. Louis. Conecta el Aeropuerto Internacional Lambert en el norte con Shiloh/Scott en el sur, atravesando 18 estaciones. Pasa por el centro de St. Louis, sirviendo a residentes, turistas, viajeros de negocios y visitantes del aeropuerto. Inaugurada en fases desde 1993, es la línea más antigua y utilizada del sistema MetroLink. Cuenta con conexión con la Línea Azul en el centro. Operativa todos los días con servicio de 24 horas durante eventos especiales.",
    estaciones_turisticas: ["st-louis-gateway-arch", "st-louis-convention-center", "st-louis-forest-park-southeast"],
    estaciones: [
      "st-louis-lambert-airport",
      "st-louis-normandy",
      "st-louis-north-hanley",
      "st-louis-rockford",
      "st-louis-brentwood",
      "st-louis-lake-forest",
      "st-louis-wellston",
      "st-louis-delmar",
      "st-louis-skinker",
      "st-louis-forest-park-southeast",
      "st-louis-central-west-end",
      "st-louis-civic-center",
      "st-louis-convention-center",
      "st-louis-8th-pine",
      "st-louis-5th-5th",
      "st-louis-gateway-arch",
      "st-louis-emerson-park",
      "st-louis-laclede-station",
      "st-louis-shiloh-scott"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea Roja: De aeropuerto a sur",
      paradas: [
        {
          estacion: "st-louis-lambert-airport",
          actividad: "Inicio en Lambert Airport. Terminal, tiendas duty-free. (09:00 AM)"
        },
        {
          estacion: "st-louis-forest-park-southeast",
          actividad: "Forest Park. Museos (Historia, Ciencia, Arte), jardines. (11:00 AM)"
        },
        {
          estacion: "st-louis-civic-center",
          actividad: "Centro cívico. Edificios históricos y oficinas. (1:00 PM)"
        },
        {
          estacion: "st-louis-gateway-arch",
          actividad: "Gateway Arch National Park. Icono de St. Louis. (2:30 PM)"
        },
        {
          estacion: "st-louis-convention-center",
          actividad: "Convention Center y riverfront. Entretenimiento. (4:00 PM)"
        },
        {
          estacion: "st-louis-shiloh-scott",
          actividad: "Terminal sur. Regresar. (5:30 PM)"
        }
      ]
    },
    transferencias_conectadas: ["blue-line"],
    accesibilidad_completa: true,
    notas: "Conexión con Línea Azul en estaciones 8th & Pine y Civic Center. Aceptan tarjeta MetroLink y cash. Servicio nocturno disponible con frecuencia reducida."
  },
  {
    id: "blue-line",
    color: "#003DA5",
    colorNombre: "Azul",
    inicio: "Shrewsbury",
    fin: "Fairview Heights",
    total: 19,
    municipios: ["Shrewsbury", "St. Louis", "Overland", "Fairview Heights"],
    sistema: "MetroLink",
    tarifa: "$2.50 USD",
    frecuencia: "10-15 minutos en horas pico",
    horario: "04:00 AM - 11:00 PM",
    descripcion: "Línea Azul del Sistema MetroLink de St. Louis. Conecta Shrewsbury en el oeste con Fairview Heights en el este, atravesando 19 estaciones. Ofrece conexión con la Línea Roja en el centro de St. Louis y se extiende hacia Illinois. Sirve a comunidades residenciales y comerciales, pasando por áreas de compras y entretenimiento. Inaugurada en 2006, complementa la red de transporte de la región metropolitana. Operativa todos los días.",
    estaciones_turisticas: ["st-louis-barret-station", "st-louis-washington-park"],
    estaciones: [
      "st-louis-shrewsbury",
      "st-louis-sunnybrook-hanley",
      "st-louis-forbes-hanley",
      "st-louis-bluebird",
      "st-louis-parking-garage",
      "st-louis-washington-park",
      "st-louis-barret-station",
      "st-louis-civic-center",
      "st-louis-8th-pine",
      "st-louis-convention-center",
      "st-louis-gateway-arch",
      "st-louis-emerson-park",
      "st-louis-laclede-station",
      "st-louis-parking-garage",
      "st-louis-bluebird",
      "st-louis-forbes-hanley",
      "st-louis-sunnybrook-hanley",
      "st-louis-shrewsbury",
      "st-louis-fairview-heights"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Línea Azul: De oeste a este",
      paradas: [
        {
          estacion: "st-louis-shrewsbury",
          actividad: "Inicio en Shrewsbury Terminal. Park & Ride, tiendas. (09:00 AM)"
        },
        {
          estacion: "st-louis-washington-park",
          actividad: "Washington Park. Espacios verdes, eventos. (10:30 AM)"
        },
        {
          estacion: "st-louis-barret-station",
          actividad: "Barret Station. Arts district, gastronomía. (12:00 PM)"
        },
        {
          estacion: "st-louis-8th-pine",
          actividad: "8th & Pine. Centro de compras, entretenimiento. (1:30 PM)"
        },
        {
          estacion: "st-louis-convention-center",
          actividad: "Convention Center. Eventos y conferencias. (3:00 PM)"
        },
        {
          estacion: "st-louis-fairview-heights",
          actividad: "Terminal este. Illinois side. Regresar. (5:00 PM)"
        }
      ]
    },
    transferencias_conectadas: ["red-line"],
    accesibilidad_completa: true,
    notas: "Conexión principal con Línea Roja en estaciones 8th & Pine y Civic Center. Cruza el río Misisipí hacia Illinois. Aceptan tarjeta MetroLink y cash."
  }
];
