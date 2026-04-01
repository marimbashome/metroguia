export const estacionesVeracruz = [
  {
    id: 1,
    nombre: "Puerto Bello",
    ubicacion: "Zona portuaria",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a zona portuaria histórica de Veracruz, principal puerto mexicano del Golfo. Centro de confluencia entre historia colonial, modernidad comercial y belleza del Golfo de México.",
    lugares_cercanos: [
      {
        nombre: "Puerto de Veracruz",
        tipo: "Instalación Portuaria",
        distancia: "0.3 km",
        descripcion: "Puerto comercial internacional con movimiento de barcos histórico"
      },
      {
        nombre: "Acuario de Veracruz",
        tipo: "Museo",
        distancia: "0.5 km",
        descripcion: "Acuario moderno con exhibiciones de fauna marina del Golfo"
      },
      {
        nombre: "Malecón Portuario",
        tipo: "Paseo",
        distancia: "0.2 km",
        descripcion: "Paseo frente al puerto con vista de barcos y mar"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Puerto operativo 24 horas, paseos públicos disponibles"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Instalaciones modernas con accesibilidad completa"
    }
  },
  {
    id: 2,
    nombre: "Centro Histórico",
    ubicacion: "Casco colonial veracruzano",
    linea: "BRT Veracruz",
    descripcion_turistica: "Corazón colonial de Veracruz con cuatro siglos de historia portuaria. Zona de patrimonio con zócalo, fortificaciones españolas y arquitectura que mezcla influencias del Caribe, España y México.",
    lugares_cercanos: [
      {
        nombre: "Zócalo de Veracruz",
        tipo: "Plaza Principal",
        distancia: "0.2 km",
        descripcion: "Plaza central con portales históricos y vida social veracruzana"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Templo",
        distancia: "0.15 km",
        descripcion: "Iglesia colonial del siglo XVI, símbolo religioso de Veracruz"
      },
      {
        nombre: "Orquesta Sinfónica",
        tipo: "Cultura",
        distancia: "0.3 km",
        descripcion: "Presentaciones musicales en salones históricos"
      },
      {
        nombre: "Galerías de Arte",
        tipo: "Arte",
        distancia: "0.25 km",
        descripcion: "Espacios dedicados al arte contemporáneo veracruzano"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Centro comercial y cultural con actividad constante"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Calles coloniales con adoquines, rampas en sitios principales"
    }
  },
  {
    id: 3,
    nombre: "Baluarte San Carlos",
    ubicacion: "Fortificación histórica",
    linea: "BRT Veracruz",
    descripcion_turistica: "Fortaleza colonial del siglo XVII, baluarte defensivo histórico de Veracruz. Museo y estructura conservada que representa la importancia estratégica portuaria durante conquista y colonización.",
    lugares_cercanos: [
      {
        nombre: "Baluarte de San Carlos",
        tipo: "Fortaleza",
        distancia: "0.2 km",
        descripcion: "Fuerte colonial con estructura defensiva preservada"
      },
      {
        nombre: "Museo de Fortificaciones",
        tipo: "Museo",
        distancia: "0.15 km",
        descripcion: "Exhibiciones sobre historia militar y fortificaciones coloniales"
      },
      {
        nombre: "Paseo de las Murallas",
        tipo: "Ruta Histórica",
        distancia: "0.3 km",
        descripcion: "Recorrido por sistema defensivo colonial restaurado"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Museo abierto 10:00-18:00, fortaleza accesible durante horas luz"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampas de acceso a áreas principales del baluarte"
    }
  },
  {
    id: 4,
    nombre: "Playa Hornos",
    ubicacion: "Zona de playa",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a playas urbanas de Veracruz, costas históricas con arena y mar del Golfo. Centro de recreación acuática y descanso en ambiente portuario con vista a barcos.",
    lugares_cercanos: [
      {
        nombre: "Playa Hornos",
        tipo: "Playa",
        distancia: "0.2 km",
        descripcion: "Playa en el centro de Veracruz con servicios"
      },
      {
        nombre: "Restaurantes de Mariscos",
        tipo: "Gastronomía",
        distancia: "0.3 km",
        descripcion: "Especialidades de mariscos frescos y cocina veracruzana"
      },
      {
        nombre: "Bares y Cantinas Históricas",
        tipo: "Entretenimiento",
        distancia: "0.25 km",
        descripcion: "Establecimientos tradicionales con música y ambiente local"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Playas accesibles durante horas diurnas y nocturnas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso a playa, baños públicos accesibles"
    }
  },
  {
    id: 5,
    nombre: "Acuario",
    ubicacion: "Centro turístico",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso al Acuario de Veracruz, atracción turística principal de la ciudad. Centro de educación marina con exhibiciones de fauna del Golfo de México y del Caribe en tanques interactivos.",
    lugares_cercanos: [
      {
        nombre: "Acuario de Veracruz",
        tipo: "Museo",
        distancia: "0.1 km",
        descripcion: "Acuario con exhibiciones de tiburones, mantas y fauna marina"
      },
      {
        nombre: "Tienda de Recuerdos",
        tipo: "Comercio",
        distancia: "0.15 km",
        descripcion: "Tienda de souvenirs y artículos del acuario"
      },
      {
        nombre: "Restaurante Acuario",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Restaurante con vistas al océano dentro del acuario"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Acuario abierto 9:00-18:00 diariamente"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Instalación moderna con accesibilidad total"
    }
  },
  {
    id: 6,
    nombre: "Playa Mocambo",
    ubicacion: "Zona costera sur",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a playa de Mocambo, balneario histórico veracruzano con extensas arenas. Zona residencial y de playa con hoteles, restaurantes y servicios completos de playa.",
    lugares_cercanos: [
      {
        nombre: "Playa Mocambo",
        tipo: "Playa",
        distancia: "0.3 km",
        descripcion: "Playa extensa con arena fina y servicios de playa"
      },
      {
        nombre: "Hotel Mocambo",
        tipo: "Hospedaje",
        distancia: "0.2 km",
        descripcion: "Hotel histórico con arquitectura vintage veracruzana"
      },
      {
        nombre: "Restaurantes de Playa",
        tipo: "Gastronomía",
        distancia: "0.25 km",
        descripcion: "Comedores con mariscos frescos frente a la playa"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Playas y servicios operativos durante el día"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso a playa, servicios sanitarios disponibles"
    }
  },
  {
    id: 7,
    nombre: "Boca del Río",
    ubicacion: "Desembocadura del río",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a zona de Boca del Río, desarrollo turístico moderno en desembocadura del Río Papaloapan. Centro de gastronomía de mariscos, paseos acuáticos y desarrollo residencial frente al mar.",
    lugares_cercanos: [
      {
        nombre: "Paseo Boca del Río",
        tipo: "Paseo Turístico",
        distancia: "0.3 km",
        descripcion: "Avenida costera con tiendas, bares y restaurantes"
      },
      {
        nombre: "Restaurantes de Mariscos",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Restaurantes especializados en cocina marina veracruzana"
      },
      {
        nombre: "Marina Turística",
        tipo: "Servicios",
        distancia: "0.25 km",
        descripcion: "Paseos en barco y agua taxís por el río y bahía"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios disponibles hasta 22:00 en promedio"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Desarrollo moderno con estándares completos de accesibilidad"
    }
  },
  {
    id: 8,
    nombre: "Mandinga",
    ubicacion: "Pueblo costero",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a Mandinga, pueblo costero tradicional cerca de Veracruz. Comunidad de pescadores con ambiente auténtico, restaurantes de mariscos y playa con carácter local.",
    lugares_cercanos: [
      {
        nombre: "Playa de Mandinga",
        tipo: "Playa",
        distancia: "0.2 km",
        descripcion: "Playa de pescadores con arena y vista del Golfo"
      },
      {
        nombre: "Restaurantes de Pescado Fresco",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Comedores con pescado capturado localmente"
      },
      {
        nombre: "Mercado de Pescado",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Venta de mariscos y pescados frescos de la zona"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Mercado activo desde 6:00, restaurantes hasta 20:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Pueblo con calles no totalmente accesibles, baños disponibles"
    }
  },
  {
    id: 9,
    nombre: "Loma de Lara",
    ubicacion: "Zona residencial elevada",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a zona residencial de Loma de Lara, área elevada con vistas de Veracruz y puerto. Zona de desarrollo urbano contemporáneo con comercios y servicios modernos.",
    lugares_cercanos: [
      {
        nombre: "Mirador Loma de Lara",
        tipo: "Mirador",
        distancia: "0.4 km",
        descripcion: "Punto elevado con vistas de puerto y ciudad"
      },
      {
        nombre: "Centro Comercial",
        tipo: "Comercio",
        distancia: "0.3 km",
        descripcion: "Tiendas y servicios de zona residencial"
      },
      {
        nombre: "Parque Recreativo",
        tipo: "Parque",
        distancia: "0.2 km",
        descripcion: "Área verde con juegos y áreas de descanso"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Comercios operativos hasta 21:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Zona moderna con infraestructura accesible"
    }
  },
  {
    id: 10,
    nombre: "Museo de Antropología",
    ubicacion: "Centro cultural",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso al Museo de Antropología de Xalapa, uno de los museos más importantes de México. Colecciones de arte prehispánico, especialmente cabezas colosales olmecas y cultura veracruzana antigua.",
    lugares_cercanos: [
      {
        nombre: "Museo de Antropología de Xalapa",
        tipo: "Museo",
        distancia: "0.5 km",
        descripcion: "Museo con colecciones de arte olmeca y mesoamericano"
      },
      {
        nombre: "Parque Museo",
        tipo: "Parque",
        distancia: "0.3 km",
        descripcion: "Jardines con esculturas y espacios abiertos del museo"
      },
      {
        nombre: "Tienda del Museo",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Tienda de libros y reproducciones de arte prehispánico"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Museo abierto 9:00-17:00 cerrado lunes"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Museo con accesibilidad completa y ascensores"
    }
  },
  {
    id: 11,
    nombre: "La Caleta",
    ubicacion: "Caleta histórica",
    linea: "BRT Veracruz",
    descripcion_turistica: "Acceso a La Caleta, caleta de pescadores histórica de Veracruz. Sitio tradicional de marinería con restaurantes de mariscos, venta de pescado fresco y ambiente de puerto de trabajo.",
    lugares_cercanos: [
      {
        nombre: "Caleta de Pescadores",
        tipo: "Puerto Tradicional",
        distancia: "0.1 km",
        descripcion: "Embarcadero de pesca con barcas de trabajo tradicional"
      },
      {
        nombre: "Restaurantes de Pescado",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Comedores frente a la caleta con pescado fresco"
      },
      {
        nombre: "Venta de Captura del Día",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Venta directa de pescado recién capturado"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Caleta activa desde madrugada, restaurantes hasta 20:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso mediante rampas, pero área con tráfico de trabajo"
    }
  },
  {
    id: 12,
    nombre: "Terminal de Autobuses",
    ubicacion: "Central de transporte",
    linea: "BRT Veracruz",
    descripcion_turistica: "Terminal foránea de Veracruz, punto de llegada y salida de transporte a ciudades vecinas y regiones del país. Nodo importante de conectividad del sistema de transporte veracruzano.",
    lugares_cercanos: [
      {
        nombre: "Terminal de Autobuses",
        tipo: "Transporte",
        distancia: "0.1 km",
        descripcion: "Central con autobuses a destinos nacionales"
      },
      {
        nombre: "Servicios de Terminal",
        tipo: "Comercio",
        distancia: "0.15 km",
        descripcion: "Tiendas, restaurantes y servicios en terminal"
      },
      {
        nombre: "Hotel Terminal",
        tipo: "Hospedaje",
        distancia: "0.2 km",
        descripcion: "Alojamiento para viajeros en tránsito"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios disponibles 24 horas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal moderna con accesibilidad completa"
    }
  }
];
