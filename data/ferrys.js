// FERRIES Y TRANSBORDADORES - MÉXICO
// Rutas de pasajeros para turismo y transporte local
// Última actualización: 2026-03-30

export const ferrys = [
  // PENÍNSULA DE YUCATÁN - RUTA CARIBEÑA ESTE
  {
    slug: 'playa-del-carmen-cozumel',
    nombre: 'Playa del Carmen ↔ Cozumel',
    ruta: {
      origen: 'Playa del Carmen',
      destino: 'Cozumel',
      estado: 'Quintana Roo',
      region: 'sureste',
    },
    terminal: {
      origen: {
        nombre: 'Terminal Marítima Playa del Carmen',
        ciudad: 'Playa del Carmen',
        direccion: 'Avenida 5 (Quinta Avenida), zona hotelera',
        lat: 20.61916,
        lng: -87.07273,
      },
      destino: {
        nombre: 'Terminal Marítima Cozumel',
        ciudad: 'Cozumel',
        direccion: 'Zona hotelera norte, frente a playas principales',
        lat: 20.5097,
        lng: -86.9508,
      },
    },
    operadores: [
      {
        nombre: 'Ultramar',
        frecuencia: '15+ salidas diarias en cada dirección',
        horarios: '6:00 AM - 11:00 PM (Playa del Carmen), 7:00 AM - 12:00 AM (Cozumel)',
        duracion: '30-40 minutos',
        precio: {
          adulto: '250 MXN ($12-13 USD)',
          nino: '125 MXN',
          nota: 'Round-trip disponible',
        },
        sitio: 'ultramarferry.com',
      },
      {
        nombre: 'Winjet',
        frecuencia: '8-10 salidas diarias',
        horarios: '7:00 AM - 10:00 PM',
        duracion: '25-35 minutos',
        precio: {
          adulto: '280 MXN',
          nota: 'Botes más rápidos',
        },
        sitio: 'winjet.com.mx',
      },
      {
        nombre: 'Ferry Xcaret',
        frecuencia: '6-8 salidas diarias',
        horarios: '9:00 AM - 8:00 PM',
        duracion: '40 minutos',
        precio: {
          adulto: '290 MXN',
          nota: 'Incluye entrada a Parque Xcaret con ciertos paquetes',
        },
        sitio: 'xcaret.com',
      },
    ],
    capacidad: '500-800 pasajeros por viaje',
    naves: 'Catamaranes modernos, aire acondicionado, asientos reclinables',
    servicios: [
      'Baños a bordo',
      'Snacks y bebidas',
      'WiFi en algunas líneas',
      'Salvavidas y seguro incluido',
    ],
    distancia: '45 km',
    descripcion:
      'La ruta más popular de México. Conecta la costa de Playa del Carmen con la Isla de Cozumel, destino de buceo mundial. Operación constante con múltiples operadores compitiendo.',
    seo_title: 'Ferry Playa del Carmen a Cozumel — Horarios, precios y operadores 2026',
    meta_description:
      'Guía ferry Playa del Carmen-Cozumel: Ultramar, Winjet, Ferry Xcaret. 30 min, 250 MXN. Salidas cada 15-30 min. Buceo y turismo.',
  },

  {
    slug: 'cancun-isla-mujeres',
    nombre: 'Cancún ↔ Isla Mujeres',
    ruta: {
      origen: 'Cancún',
      destino: 'Isla Mujeres',
      estado: 'Quintana Roo',
      region: 'sureste',
    },
    terminal: {
      origen: [
        {
          nombre: 'Puerto Juárez (Principal)',
          ciudad: 'Cancún',
          direccion: 'Boulevard Kukulcán km 25, zona hotelera norte',
          lat: 21.182389,
          lng: -86.808722,
          nota: 'Terminal moderna, estacionamiento disponible',
        },
        {
          nombre: 'Playa Caracol',
          ciudad: 'Cancún',
          direccion: 'Boulevard Kukulcán km 8.5',
          lat: 21.235,
          lng: -86.855,
          nota: 'Terminal alternativa en la zona hotelera',
        },
        {
          nombre: 'Embarcadero',
          ciudad: 'Cancún',
          direccion: 'Boulevard Kukulcán km 5',
          lat: 21.241,
          lng: -86.858,
          nota: 'Paradas múltiples a lo largo de la playa',
        },
      ],
      destino: {
        nombre: 'Muelle Principal Isla Mujeres',
        ciudad: 'Isla Mujeres',
        lat: 21.25516,
        lng: -86.74619,
        nota: 'Centro de la isla, a 5 min a pie de comercios y playas',
      },
    },
    operadores: [
      {
        nombre: 'Ultramar',
        frecuencia: '30+ salidas diarias por dirección',
        horarios: '5:30 AM - 11:00 PM (Puerto Juárez)',
        duracion: '15-20 minutos',
        precio: {
          adulto: '140 MXN ($7 USD) - 200 MXN',
          nino: '70 MXN',
          nota: 'Round-trip: 260 MXN',
        },
      },
      {
        nombre: 'Xcaret Xailing',
        frecuencia: '15+ salidas diarias',
        horarios: '9:00 AM - 6:00 PM',
        duracion: '20-25 minutos',
        precio: {
          adulto: '200 MXN',
          nota: 'Paradas múltiples en zona hotelera',
        },
      },
      {
        nombre: 'Magaña',
        frecuencia: '12+ salidas diarias',
        horarios: '6:00 AM - 10:30 PM',
        duracion: '20-30 minutos',
        precio: {
          adulto: '160 MXN',
        },
      },
    ],
    capacidad: '300-500 pasajeros por viaje',
    naves: 'Catamaranes rápidos, algunos con aire acondicionado, vidrio panorámico',
    servicios: [
      'Baños a bordo',
      'Venta de bebidas y snacks',
      'Resguardo en días nublados',
      'Equipo de seguridad certificado',
    ],
    distancia: '13 km',
    descripcion:
      'Segunda ruta más frecuentada de México. Conecta Cancún con la bohemia Isla Mujeres. Altamente recomendada para playa, snorkel y vida nocturna.',
    seo_title: 'Ferry Cancún a Isla Mujeres — Ultramar, horarios y precios 2026',
    meta_description:
      'Ferry Cancún-Isla Mujeres: 15-20 min, 140 MXN. Puerto Juárez, Playa Caracol. 30+ salidas diarias. Snorkel y playas.',
  },

  {
    slug: 'chetumal-san-pedro-belize',
    nombre: 'Chetumal ↔ San Pedro Sula (Belice)',
    ruta: {
      origen: 'Chetumal',
      destino: 'San Pedro',
      estado: 'Quintana Roo',
      pais_destino: 'Belice',
      region: 'sureste',
    },
    terminal: {
      origen: {
        nombre: 'Terminal Marítima Chetumal',
        ciudad: 'Chetumal',
        direccion: 'Avenida Héroes, muelle principal',
        lat: 18.5,
        lng: -88.3,
        nota: 'Trámites migratorios en terminal. Pasaporte requerido.',
      },
      destino: {
        nombre: 'Muelle de San Pedro Sula',
        ciudad: 'San Pedro',
        pais: 'Belice',
        lat: 17.963,
        lng: -87.596,
      },
    },
    operadores: [
      {
        nombre: 'San Pedro Belize Express',
        frecuencia: 'Dos salidas diarias',
        horarios: '4:00 PM - 6:00 PM (Chetumal), 8:00 AM - 10:00 AM (San Pedro)',
        duracion: '1 hora 15 minutos - 1 hora 30 minutos',
        precio: {
          adulto: '55-90 USD',
          nino: '30-45 USD',
          nota: 'Pagos en USD',
        },
        sitio: 'sanpedrobelifeexpress.com',
      },
      {
        nombre: 'International Islander Ferries',
        frecuencia: 'Dos salidas diarias',
        horarios: '3:00 PM - 5:00 PM (Chetumal), 7:00 AM - 9:00 AM (San Pedro)',
        duracion: '1 hora 15 minutos - 1 hora 45 minutos',
        precio: {
          adulto: '60-85 USD',
          nino: '35-50 USD',
        },
      },
    ],
    capacidad: '100-200 pasajeros',
    naves: 'Botes de fibra de vidrio con aire acondicionado, equipo de seguridad',
    servicios: [
      'Baños a bordo',
      'Bebidas',
      'Seguro marítimo incluido',
      'Asientos con cinturón de seguridad',
    ],
    documentacion: [
      'Pasaporte válido (mínimo 6 meses)',
      'No se requiere visa para ciudadanos mexicanos (turismo hasta 30 días)',
      'Ciudadanos extranjeros: verificar requisitos con embajada',
    ],
    distancia: '80 km',
    descripcion:
      'Conexión internacional hacia Belice. Popular entre turistas de buceo y arqueología. Operación diaria con trámites migratorios en terminal.',
    seo_title: 'Ferry Chetumal a San Pedro (Belice) — Horarios y requisitos 2026',
    meta_description:
      'Ferry internacional Chetumal-San Pedro: 1h 15m, 55-90 USD. San Pedro Belize Express. Pasaporte requerido.',
  },

  // PENÍNSULA DE YUCATÁN - RUTA NORTE
  {
    slug: 'isla-holbox-chiquila',
    nombre: 'Isla Holbox ↔ Chiquilá',
    ruta: {
      origen: 'Chiquilá',
      destino: 'Isla Holbox',
      estado: 'Quintana Roo',
      region: 'sureste',
    },
    terminal: {
      origen: {
        nombre: 'Embarcadero Chiquilá',
        ciudad: 'Chiquilá',
        direccion: 'Pueblo de Chiquilá, acceso a muelle',
        lat: 21.4329948,
        lng: -87.3363234,
        nota: 'Pueblo pequeño, estacionamiento gratuito',
      },
      destino: {
        nombre: 'Muelle Principal Holbox',
        ciudad: 'Isla Holbox',
        lat: 21.452,
        lng: -87.277,
        nota: 'Centro de isla, acceso a calle principal y playas',
      },
    },
    operadores: [
      {
        nombre: 'Ferry Holbox Company',
        frecuencia: 'Salidas cada 30 minutos',
        horarios: '6:00 AM - 8:30 PM (ambas direcciones)',
        duracion: '20-30 minutos',
        precio: {
          adulto: '75 MXN ($4 USD)',
          auto: '300-400 MXN (en ferry de autos)',
          bicicleta: '30 MXN',
        },
      },
      {
        nombre: 'Transportes Marítimos Holbox',
        frecuencia: 'Salidas cada 30-45 minutos',
        horarios: '6:30 AM - 8:00 PM',
        duracion: '20-30 minutos',
        precio: {
          adulto: '75-100 MXN',
          nota: 'Botes para pasajeros y vehículos',
        },
      },
    ],
    capacidad: '150-200 pasajeros por viaje',
    naves: 'Lanchas de fibra de vidrio, algunos ferries con capacidad para autos',
    servicios: [
      'Servicio frecuente (cada 30 minutos)',
      'Ferry para vehículos disponible',
      'Seguro marítimo',
    ],
    distancia: '25 km',
    descripcion:
      'Acceso principal a la bohemia Isla Holbox. Pueblo tranquilo sin autos. Popular entre artistas, naturistas y viajeros de slow travel.',
    seo_title: 'Ferry Chiquilá a Isla Holbox — Horarios y precios 2026',
    meta_description:
      'Ferry Chiquilá-Isla Holbox: 20-30 min, 75 MXN. Cada 30 min, 6am-8:30pm. Autos y bicicletas.',
  },

  // BAJA CALIFORNIA SUR - RUTAS NOCTURNAS TRANSOCEÁNICAS
  {
    slug: 'la-paz-mazatlan',
    nombre: 'La Paz ↔ Mazatlán (Ferry Nocturno)',
    ruta: {
      origen: 'La Paz',
      destino: 'Mazatlán',
      estado_origen: 'Baja California Sur',
      estado_destino: 'Sinaloa',
      region: 'noroeste',
      tipo: 'Ferry transoceánico nocturno',
    },
    terminal: {
      origen: {
        nombre: 'Terminal Marítima Pichilingue',
        ciudad: 'La Paz',
        direccion: 'Puerto de Pichilingue, a 16 km de la ciudad',
        lat: 24.2796,
        lng: -110.3119,
        nota: 'Terminal moderna con hotel integrado, restaurante',
      },
      destino: {
        nombre: 'Terminal Marítima Mazatlán',
        ciudad: 'Mazatlán',
        direccion: 'Puerto de Mazatlán, centro histórico',
        lat: 23.1943,
        lng: -106.4166,
      },
    },
    operadores: [
      {
        nombre: 'Baja Ferries',
        frecuencia: 'Tres salidas semanales',
        horarios: {
          salida_la_paz: 'Martes, Jueves y Domingo a las 5:00 PM',
          salida_mazatlan: 'Lunes, Miércoles y Viernes a las 4:00 PM',
          llegada_aprox: '7:00 AM (La Paz), 8:00 AM (Mazatlán)',
        },
        duracion: '14-18 horas (travesía nocturna)',
        precio: {
          camarote_interior: '1,500-2,000 MXN',
          camarote_exterior: '2,000-2,500 MXN',
          asiento_recliner: '500-800 MXN',
          nota: 'Precios por persona, camarotes dobles',
        },
        sitio: 'bajaferries.com.mx',
      },
      {
        nombre: 'TMC (Transportes Marítimos del Caribe)',
        frecuencia: 'Dos salidas semanales',
        horarios: {
          salida: 'Martes y Viernes a las 5:00 PM',
          llegada: '7:00 AM (día siguiente)',
        },
        duracion: '14 horas',
        precio: {
          camarote: '1,400-2,200 MXN',
          asiento: '450-700 MXN',
        },
      },
    ],
    capacidad: '300-600 pasajeros + 80-100 vehículos',
    naves: 'Ferrys de crucero con camarotes privados, restaurantes, casino, discoteca',
    servicios: [
      'Camarotes con baño privado',
      'Restaurante buffet',
      'Bar y discoteca',
      'Casino a bordo',
      'Tiendas',
      'Cabina de internet',
      'Cubierta para observación',
    ],
    transporte_autos: {
      disponible: 'Sí',
      capacidad: '80-100 autos por viaje',
      precio: '500-1,000 MXN (según tamaño)',
    },
    documentacion: [
      'Pasaporte o credencial con foto',
      'No se requiere visa para Sinaloa',
      'Tarjeta de turista (FMM) usualmente incluida',
    ],
    distancia: '280 km',
    descripcion:
      'Ferry transoceánico de lujo. Única opción comercial para transportar autos entre Baja California y el continente. Experiencia de crucero con camarotes, restaurantes y entretenimiento.',
    seo_title: 'Ferry La Paz a Mazatlán — Camarotes, horarios y precios 2026',
    meta_description:
      'Ferry nocturno La Paz-Mazatlán: 14-18h, camarotes desde 1,500 MXN. Baja Ferries. Autos transportados. Restaurante y casino.',
  },

  {
    slug: 'la-paz-topolobampo',
    nombre: 'La Paz ↔ Topolobampo',
    ruta: {
      origen: 'La Paz',
      destino: 'Topolobampo',
      estado_origen: 'Baja California Sur',
      estado_destino: 'Sinaloa',
      region: 'noroeste',
      tipo: 'Ferry de corta duración',
    },
    terminal: {
      origen: {
        nombre: 'Terminal Marítima Pichilingue',
        ciudad: 'La Paz',
        lat: 24.2796,
        lng: -110.3119,
      },
      destino: {
        nombre: 'Puerto de Topolobampo',
        ciudad: 'Topolobampo',
        estado: 'Sinaloa',
        lat: 25.402,
        lng: -109.108,
        nota: 'Puerto menor, acceso a Ahome',
      },
    },
    operadores: [
      {
        nombre: 'Baja Ferries',
        frecuencia: 'Operación diaria',
        horarios: 'Salida La Paz: 2:30 PM, Salida Topolobampo: 9:30 AM',
        duracion: '8 horas',
        precio: {
          adulto: '74-99 USD ($1,300-1,800 MXN)',
          nino: '37-50 USD',
          auto: '35-45 USD (según tamaño)',
        },
      },
    ],
    capacidad: '200-300 pasajeros + vehículos',
    naves: 'Ferry de pasajeros y autos, aire acondicionado',
    servicios: [
      'Asientos reclinables',
      'Cafetería',
      'Baños',
      'Cubierta abierta',
      'Carga de autos',
    ],
    transporte_autos: {
      disponible: 'Sí',
      precio: '35-45 USD',
    },
    distancia: '200 km',
    descripcion:
      'Ruta corta entre La Paz y el estado de Sinaloa. Menos turística que La Paz-Mazatlán pero más económica. Transporte de vehículos disponible.',
    seo_title: 'Ferry La Paz a Topolobampo — Horarios y precios 2026',
    meta_description:
      'Ferry La Paz-Topolobampo: 8 horas, 74-99 USD. Autos transportados. Baja Ferries.',
  },
]
