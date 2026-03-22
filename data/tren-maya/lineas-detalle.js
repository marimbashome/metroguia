export const lineasTrenMaya = [
  {
    id: "T1",
    color: "#0EA5E9",
    colorNombre: "Azul Caribe",
    inicio: "Cancún",
    fin: "Tulum",
    total: 4,
    municipios: ["Benito Juárez", "Solidaridad", "Tulum"],
    descripcion: "Tramo más importante y turístico del Tren Maya. Conecta Cancún con Tulum pasando por Playa del Carmen y Xcaret. La ruta principal de la Riviera Maya con acceso a playas, parques temáticos y zonas arqueológicas.",
    estaciones_turisticas: ["cancun", "playa-del-carmen", "xcaret", "tulum"],
    estaciones: ["cancun", "playa-del-carmen", "xcaret", "tulum"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Riviera Maya en Tren Maya",
      paradas: [
        { estacion: "cancun", actividad: "Inicio en Cancún (8:00 AM) - Desayuno en zona hotelera" },
        { estacion: "playa-del-carmen", actividad: "Playa del Carmen: Quinta Avenida y playas (10:00 AM)" },
        { estacion: "xcaret", actividad: "Parque Xcaret: cenotes y actividades acuáticas (12:00 PM - 4:00 PM)" },
        { estacion: "tulum", actividad: "Tulum: ruinas mayas frente al mar y atardecer (5:00 PM)" }
      ]
    },
    seo_title: "Tramo 1 Tren Maya — Cancún a Tulum Riviera Maya | MetroGuia",
    meta_description: "Tramo 1 del Tren Maya: Cancún a Tulum. Riviera Maya con Playa del Carmen, parques, cenotes y ruinas mayas.",
    h1: "Tramo 1 Tren Maya — Cancún a Tulum"
  },
  {
    id: "T3",
    color: "#10B981",
    colorNombre: "Verde Caribeño",
    inicio: "Tulum",
    fin: "Chetumal",
    total: 2,
    municipios: ["Tulum", "Bacalar", "Chetumal"],
    descripcion: "Tramo sur del Tren Maya hacia la Laguna de los 7 Colores y Belice. Conecta Tulum con Bacalar y Chetumal. Ruta más tranquila con naturaleza y sitios menos visitados.",
    estaciones_turisticas: ["bacalar"],
    estaciones: ["bacalar", "chetumal"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Laguna de los 7 Colores",
      paradas: [
        { estacion: "bacalar", actividad: "Bacalar: Laguna de los 7 Colores y Cenote Azul (9:00 AM)" },
        { estacion: "chetumal", actividad: "Chetumal: Museo y paseo ribereño (3:00 PM)" }
      ]
    },
    seo_title: "Tramo 3 Tren Maya — Tulum a Chetumal Laguna | MetroGuia",
    meta_description: "Tramo 3 del Tren Maya: Tulum a Chetumal. Laguna de los 7 Colores, cenotes y Belice.",
    h1: "Tramo 3 Tren Maya — Tulum a Chetumal"
  },
  {
    id: "T4",
    color: "#EF4444",
    colorNombre: "Rojo Arqueológico",
    inicio: "Chetumal",
    fin: "Escárcega",
    total: 2,
    municipios: ["Chetumal", "Escárcega"],
    descripcion: "Tramo hacia la selva de Campeche. Conecta Chetumal con la zona arqueológica de Calakmul-Balamkú en la selva tropical. Ruta para aventureros y arqueólogos.",
    estaciones_turisticas: ["calakmul-balamku"],
    estaciones: ["escarcega", "calakmul-balamku"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Arqueología en la Selva",
      paradas: [
        { estacion: "escarcega", actividad: "Escárcega: Hub de transportación (parada técnica)" },
        { estacion: "calakmul-balamku", actividad: "Calakmul: Zona arqueológica en la selva (9:00 AM - 4:00 PM)" }
      ]
    },
    seo_title: "Tramo 4 Tren Maya — Chetumal a Escárcega Arqueología | MetroGuia",
    meta_description: "Tramo 4 del Tren Maya: Chetumal a Escárcega. Zona arqueológica de Calakmul y Biósfera en la selva.",
    h1: "Tramo 4 Tren Maya — Chetumal a Escárcega"
  },
  {
    id: "T5",
    color: "#F59E0B",
    colorNombre: "Ámbar Selva",
    inicio: "Escárcega",
    fin: "Palenque",
    total: 2,
    municipios: ["Escárcega", "Palenque", "Ocosingo"],
    descripcion: "Tramo hacia Chiapas y la joya arqueológica de Palenque. Conecta la selva de Campeche con Palenque y las cascadas de Agua Azul. Ruta de naturaleza y arqueología excepcionales.",
    estaciones_turisticas: ["palenque", "agua-azul"],
    estaciones: ["palenque", "agua-azul"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Palenque y Cascadas",
      paradas: [
        { estacion: "palenque", actividad: "Palenque: Zona arqueológica UNESCO en la selva (7:00 AM - 12:00 PM)" },
        { estacion: "agua-azul", actividad: "Agua Azul: Cascadas turquesas (1:00 PM - 4:00 PM)" }
      ]
    },
    seo_title: "Tramo 5 Tren Maya — Escárcega a Palenque | MetroGuia",
    meta_description: "Tramo 5 del Tren Maya: Escárcega a Palenque. Patrimonio UNESCO, cascadas y selva tropical de Chiapas.",
    h1: "Tramo 5 Tren Maya — Escárcega a Palenque"
  },
  {
    id: "T6",
    color: "#8B5CF6",
    colorNombre: "Violeta Maya",
    inicio: "Palenque",
    fin: "Mérida",
    total: 3,
    municipios: ["Palenque", "Izamal", "Uxmal", "Mérida"],
    descripcion: "Tramo que conecta Palenque de vuelta a Yucatán. Pasa por Izamal (Ciudad Amarilla) y Uxmal antes de llegar a Mérida. Ruta de arqueología, cultura colonial y gastronomía yucateca.",
    estaciones_turisticas: ["izamal", "uxmal", "merida-oriente"],
    estaciones: ["izamal", "uxmal", "merida-oriente"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Ciudad Amarilla y Arqueología Maya",
      paradas: [
        { estacion: "izamal", actividad: "Izamal: 'La Ciudad Amarilla' y convento (9:00 AM)" },
        { estacion: "uxmal", actividad: "Uxmal: Zona arqueológica importante (11:00 AM - 3:00 PM)" },
        { estacion: "merida-oriente", actividad: "Mérida: Centro Histórico y Paseo de Montejo (5:00 PM)" }
      ]
    },
    seo_title: "Tramo 6 Tren Maya — Palenque a Mérida Ciudad Amarilla | MetroGuia",
    meta_description: "Tramo 6 del Tren Maya: Palenque a Mérida. Izamal amarilla, Uxmal y conexión con SIT Mérida.",
    h1: "Tramo 6 Tren Maya — Palenque a Mérida"
  },
  {
    id: "T7",
    color: "#EC4899",
    colorNombre: "Rosa Monumental",
    inicio: "Mérida",
    fin: "Cancún",
    total: 2,
    municipios: ["Mérida", "Chichén Itzá", "Valladolid", "Cancún"],
    descripcion: "Tramo final que cierra el circuito del Tren Maya. Conecta Mérida con Chichén Itzá (una de las 7 Maravillas del Mundo), Valladolid y de vuelta a Cancún. Ruta arqueológica monumental.",
    estaciones_turisticas: ["chichen-itza", "valladolid"],
    estaciones: ["chichen-itza", "valladolid"],
    ruta_1_dia: {
      titulo: "Itinerario de 1 día: Maravilla del Mundo a Valladolid",
      paradas: [
        { estacion: "chichen-itza", actividad: "Chichén Itzá: Una de las 7 Maravillas del Mundo (7:00 AM - 12:00 PM)" },
        { estacion: "valladolid", actividad: "Valladolid: Centro colonial y cenotes (2:00 PM - 4:00 PM)" }
      ]
    },
    seo_title: "Tramo 7 Tren Maya — Mérida a Cancún Maravilla del Mundo | MetroGuia",
    meta_description: "Tramo 7 del Tren Maya: Mérida a Cancún. Chichén Itzá maravilla del mundo y Valladolid colonial.",
    h1: "Tramo 7 Tren Maya — Mérida a Cancún"
  }
];
