export const lineasTrenMaya = [
  {
    id: "T1",
    color: "#0EA5E9",
    colorNombre: "Azul Caribe",
    inicio: "Palenque",
    fin: "Escárcega",
    total: 9,
    municipios: ["Palenque", "Ocosingo", "Boca del Cerro", "Tenosique", "Escárcega"],
    descripcion: "Primer tramo que comienza en Palenque, UNESCO Patrimonio de la Humanidad. Conecta la joya arqueológica de Chiapas con el hub de Escárcega, pasando por Agua Azul, Misol-Há y entrando a Tabasco.",
    estaciones_turisticas: ["palenque", "agua-azul"],
    estaciones: ["palenque", "agua-azul", "ocosingo", "boca-del-cerro", "tenosique", "escarcega"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Palenque UNESCO y Cascadas de Chiapas",
      paradas: [
        { estacion: "palenque", actividad: "Palenque: Zona arqueológica UNESCO (7:00 AM - 12:00 PM)" },
        { estacion: "agua-azul", actividad: "Agua Azul: Cascadas turquesas (1:00 PM - 3:00 PM)" },
        { estacion: "escarcega", actividad: "Escárcega: Hub de transportación (conexión T2)" }
      ]
    },
    seo_title: "Tramo 1 Tren Maya — Palenque a Escárcega UNESCO | MetroGuia",
    meta_description: "Tramo 1 del Tren Maya: Palenque UNESCO a Escárcega. Arqueología, cascadas y conexión a toda la red.",
    h1: "Tramo 1 Tren Maya — Palenque a Escárcega"
  },
  {
    id: "T2",
    color: "#F59E0B",
    colorNombre: "Ámbar Campeche",
    inicio: "Escárcega",
    fin: "Calkiní",
    total: 6,
    municipios: ["Escárcega", "Calakmul", "Campeche", "Hecelchakán", "Calkiní"],
    descripcion: "Tramo a través de la selva de Campeche. Conecta el hub de Escárcega con Calkiní, pasando por la zona arqueológica de Calakmul-Balamkú, Campeche capital, y Edzná. Ruta de arqueología maya excepcional y biodiversidad.",
    estaciones_turisticas: ["calakmul-balamku", "campeche-central", "edzna"],
    estaciones: ["escarcega", "calakmul-balamku", "campeche-central", "edzna", "hecelchakan", "calkini"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Arqueología en la Selva de Campeche",
      paradas: [
        { estacion: "calakmul-balamku", actividad: "Calakmul: Zona arqueológica en la selva (8:00 AM - 12:00 PM)" },
        { estacion: "campeche-central", actividad: "Campeche: Fortificación colonial y muros (1:00 PM - 3:00 PM)" },
        { estacion: "edzna", actividad: "Edzná: Pirámide de los Cinco Pisos (parada opcional)" }
      ]
    },
    seo_title: "Tramo 2 Tren Maya — Escárcega a Calkiní Selva Maya | MetroGuia",
    meta_description: "Tramo 2 del Tren Maya: Escárcega a Calkiní. Calakmul arqueológico, Campeche colonial y Edzná.",
    h1: "Tramo 2 Tren Maya — Escárcega a Calkiní"
  },
  {
    id: "T3",
    color: "#10B981",
    colorNombre: "Verde Yucatán",
    inicio: "Calkiní",
    fin: "Izamal",
    total: 8,
    municipios: ["Calkiní", "Maxcanú", "Mérida", "Tixkokob", "Izamal"],
    descripcion: "Tramo a través del corazón de Yucatán. Conecta Calkiní con Izamal pasando por Mérida-Teya, Tixkokob y llegando a la Ciudad Amarilla. Ruta de cultura maya, cenotes y arquitectura colonial.",
    estaciones_turisticas: ["merida-teya", "izamal"],
    estaciones: ["calkini", "maxcanu", "merida-teya", "tixkokob", "izamal"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Yucatán Colonial y la Ciudad Amarilla",
      paradas: [
        { estacion: "merida-teya", actividad: "Mérida-Teya: Centro Histórico (9:00 AM - 12:00 PM)" },
        { estacion: "tixkokob", actividad: "Tixkokob: Pueblo artesanal con cenotes (parada cultural)" },
        { estacion: "izamal", actividad: "Izamal: La Ciudad Amarilla y Convento (2:00 PM - 4:00 PM)" }
      ]
    },
    seo_title: "Tramo 3 Tren Maya — Calkiní a Izamal Ciudad Amarilla | MetroGuia",
    meta_description: "Tramo 3 del Tren Maya: Calkiní a Izamal. Mérida colonial, Tixkokob y la mística Ciudad Amarilla.",
    h1: "Tramo 3 Tren Maya — Calkiní a Izamal"
  },
  {
    id: "T4",
    color: "#EF4444",
    colorNombre: "Rojo Arqueológico",
    inicio: "Izamal",
    fin: "Cancún",
    total: 7,
    municipios: ["Izamal", "Chichén Itzá", "Valladolid", "Nuevo Xcán", "Cancún"],
    descripcion: "Tramo hacia la maravilla del mundo. Conecta Izamal con Chichén Itzá (una de las 7 Maravillas del Mundo), Valladolid, Nuevo Xcán y Cancún. Ruta monumental de arqueología excepcional.",
    estaciones_turisticas: ["chichen-itza", "valladolid", "cancun"],
    estaciones: ["izamal", "chichen-itza", "valladolid", "nuevo-xcan", "cancun"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Maravilla del Mundo a Cancún",
      paradas: [
        { estacion: "chichen-itza", actividad: "Chichén Itzá: Una de las 7 Maravillas del Mundo (7:00 AM - 12:00 PM)" },
        { estacion: "valladolid", actividad: "Valladolid: Centro colonial y cenotes (1:00 PM - 3:00 PM)" },
        { estacion: "cancun", actividad: "Cancún: Playas y zona hotelera (5:00 PM)" }
      ]
    },
    seo_title: "Tramo 4 Tren Maya — Izamal a Cancún Maravilla del Mundo | MetroGuia",
    meta_description: "Tramo 4 del Tren Maya: Izamal a Cancún. Chichén Itzá maravilla, Valladolid colonial y playas de Cancún.",
    h1: "Tramo 4 Tren Maya — Izamal a Cancún"
  },
  {
    id: "T5N",
    color: "#06B6D4",
    colorNombre: "Cian Riviera",
    inicio: "Cancún",
    fin: "Playa del Carmen",
    total: 3,
    municipios: ["Benito Juárez", "Puerto Morelos", "Solidaridad"],
    descripcion: "Tramo norte de la Riviera Maya. Conecta Cancún con Puerto Morelos y Playa del Carmen. Primera sección del eje turístico más importante del Tren Maya con playas vírgenes y parques.",
    estaciones_turisticas: ["cancun-aeropuerto", "puerto-morelos", "playa-del-carmen"],
    estaciones: ["cancun", "cancun-aeropuerto", "puerto-morelos", "playa-del-carmen"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Riviera Maya Norte",
      paradas: [
        { estacion: "cancun", actividad: "Cancún: Zona hotelera y playas (8:00 AM)" },
        { estacion: "puerto-morelos", actividad: "Puerto Morelos: Pueblo mágico y cenotes (10:00 AM)" },
        { estacion: "playa-del-carmen", actividad: "Playa del Carmen: Quinta Avenida y vida nocturna (12:00 PM)" }
      ]
    },
    seo_title: "Tramo 5N Tren Maya — Cancún a Playa del Carmen Riviera | MetroGuia",
    meta_description: "Tramo 5N del Tren Maya: Cancún a Playa del Carmen. Puerto Morelos, playas y parques de la Riviera Maya norte.",
    h1: "Tramo 5N Tren Maya — Cancún a Playa del Carmen"
  },
  {
    id: "T5S",
    color: "#0891B2",
    colorNombre: "Azul Profundo",
    inicio: "Playa del Carmen",
    fin: "Tulum",
    total: 4,
    municipios: ["Solidaridad", "Tulum"],
    descripcion: "Tramo sur de la Riviera Maya. Conecta Playa del Carmen con Xcaret, Xcacel y Tulum. Segundo tramo del eje turístico con parques temáticos, cenotes subterráneos y ruinas mayas en la playa.",
    estaciones_turisticas: ["xcaret", "xcacel", "tulum"],
    estaciones: ["playa-del-carmen", "xcaret", "xcacel", "tulum"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Parques y Ruinas de la Riviera Sur",
      paradas: [
        { estacion: "xcaret", actividad: "Xcaret: Parque de cenotes y playas (9:00 AM - 4:00 PM)" },
        { estacion: "xcacel", actividad: "Xcacel: Playa virgen (parada opcional)" },
        { estacion: "tulum", actividad: "Tulum: Ruinas mayas frente al mar y atardecer (5:00 PM)" }
      ]
    },
    seo_title: "Tramo 5S Tren Maya — Playa del Carmen a Tulum Parques | MetroGuia",
    meta_description: "Tramo 5S del Tren Maya: Playa del Carmen a Tulum. Xcaret, Xcacel y ruinas frente al mar.",
    h1: "Tramo 5S Tren Maya — Playa del Carmen a Tulum"
  },
  {
    id: "T6",
    color: "#8B5CF6",
    colorNombre: "Violeta Maya",
    inicio: "Tulum",
    fin: "Chetumal",
    total: 6,
    municipios: ["Tulum", "Felipe Carrillo Puerto", "Bacalar", "Limones", "Chetumal"],
    descripcion: "Tramo sur hacia Belice. Conecta Tulum con Felipe Carrillo Puerto, Bacalar (Laguna de los 7 Colores), Limones y Chetumal. Ruta tranquila con naturaleza, laguna y frontera internacional.",
    estaciones_turisticas: ["felipe-carrillo-puerto", "bacalar", "chetumal"],
    estaciones: ["tulum", "tulum-aeropuerto", "felipe-carrillo-puerto", "limones", "bacalar", "chetumal"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Laguna de los 7 Colores",
      paradas: [
        { estacion: "felipe-carrillo-puerto", actividad: "Felipe Carrillo Puerto: Sitio arqueológico maya (parada cultural)" },
        { estacion: "bacalar", actividad: "Bacalar: Laguna de los 7 Colores y Cenote Azul (11:00 AM - 3:00 PM)" },
        { estacion: "chetumal", actividad: "Chetumal: Museo y paseo ribereño (4:00 PM)" }
      ]
    },
    seo_title: "Tramo 6 Tren Maya — Tulum a Chetumal Laguna 7 Colores | MetroGuia",
    meta_description: "Tramo 6 del Tren Maya: Tulum a Chetumal. Laguna de los 7 Colores, cenotes y frontera con Belice.",
    h1: "Tramo 6 Tren Maya — Tulum a Chetumal"
  },
  {
    id: "T7",
    color: "#EC4899",
    colorNombre: "Rosa Monumental",
    inicio: "Chetumal",
    fin: "Escárcega",
    total: 3,
    municipios: ["Chetumal", "Nicolás Bravo", "Escárcega"],
    descripcion: "Tramo final de cierre del circuito completo. Conecta Chetumal de vuelta a Escárcega cerrando el loop del Tren Maya de 1,554 km. Ruta a través de la selva de Quintana Roo y Campeche.",
    estaciones_turisticas: ["escarcega"],
    estaciones: ["chetumal", "nicolas-bravo", "escarcega"],
    ruta_1_dia: {
      titulo: "Itinerario: Cierre del Circuito del Tren Maya",
      paradas: [
        { estacion: "chetumal", actividad: "Chetumal: Última parada en Quintana Roo" },
        { estacion: "nicolas-bravo", actividad: "Nicolás Bravo: Paso por Campeche (parada técnica)" },
        { estacion: "escarcega", actividad: "Escárcega: Cierre del circuito de 1,554 km" }
      ]
    },
    seo_title: "Tramo 7 Tren Maya — Chetumal a Escárcega Loop Completo | MetroGuia",
    meta_description: "Tramo 7 del Tren Maya: Chetumal a Escárcega. Cierre del circuito completo de 1,554 km a través de 5 estados.",
    h1: "Tramo 7 Tren Maya — Chetumal a Escárcega Loop Completo"
  }
];
