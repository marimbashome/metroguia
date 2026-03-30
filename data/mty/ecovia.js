export const estacionesEcovia = [
  {
    id: 1,
    nombre: "Barrio Antiguo",
    slug: "barrio-antiguo",
    numero: 1,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Barrio Antiguo, Monterrey",
    coordenadas: { lat: 25.3710, lng: -100.3915 },
    seo_title: "Estación Barrio Antiguo - Ecovía TransMetro Monterrey",
    meta_description: "Acceso rápido al corazón histórico de Monterrey. Estación Barrio Antiguo de la Ecovía TransMetro con información de transferencias, horarios y servicios.",
    h1: "Estación Barrio Antiguo - Ecovía TransMetro",
    intro: "Terminal occidental de la Ecovía que conecta el histórico Barrio Antiguo con toda la línea BRT. Centro de la vida cultural y comercial de Monterrey.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Macroplaza", distancia: "0.3 km", tipo: "Atracción turística" },
      { nombre: "Barrio Antiguo Shop", distancia: "0.1 km", tipo: "Comercio" },
      { nombre: "Restaurante La Cocina de Mamá", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Macroplaza", descripcion: "La plaza más grande del mundo, centro histórico y cultural de Monterrey con fuentes, galerías y restaurantes." },
      { nombre: "Paseo Santa Lucía", descripcion: "Paseo artificial en el corazón de la ciudad, camino entre jardines desde la estación hacia la Macroplaza." },
      { nombre: "Fundidora Park", descripcion: "Parque urbano de 87 hectáreas con lagos, museos, ciclovía y zonas verdes a 1.5 km de la estación." }
    ],
    practico_tips: [
      "Llegue 15 minutos antes en horas pico para evitar congestión",
      "Use las escaleras mecánicas en la rampa para mayor velocidad de entrada/salida"
    ],
    mundial_relevancia: "Punto de conexión con toda la línea Ecovía hacia Guadalupe. Centro histórico de Monterrey con acceso a Macroplaza y Barrio Antiguo."
  },
  {
    id: 2,
    nombre: "Fundidora",
    slug: "fundidora",
    numero: 2,
    municipio: "Monterrey",
    zona: "recreación",
    direccion: "Av. Fundidora esquina Pino Suárez, Monterrey",
    coordenadas: { lat: 25.3735, lng: -100.3780 },
    seo_title: "Estación Fundidora - Ecovía TransMetro Monterrey",
    meta_description: "Acceso al Parque Fundidora de Monterrey. Estación Fundidora de la Ecovía con información de horarios, transferencias y servicios disponibles.",
    h1: "Estación Fundidora - Ecovía TransMetro",
    intro: "Acceso directo al Parque Fundidora, el pulmón verde de Monterrey con lagos, museos y áreas recreativas.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Parque Fundidora", distancia: "0.2 km", tipo: "Parque" },
      { nombre: "Museo de Arte Contemporáneo", distancia: "0.5 km", tipo: "Museo" },
      { nombre: "Café Fundidora", distancia: "0.3 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Parque Fundidora", descripcion: "Extenso parque urbano de 87 hectáreas con lagos, isla, ciclovía, juegos infantiles y espacios para eventos." },
      { nombre: "Museo de Arte Contemporáneo", descripcion: "Museo dedicado a arte contemporáneo con exposiciones permanentes y temporales de artistas nacionales e internacionales." },
      { nombre: "Barrio Antiguo", descripcion: "A 1 km hacia el occidente, corazón histórico con arquitectura colonial y vida cultural intensa." }
    ],
    practico_tips: [
      "El parque es mejor visitado de martes a viernes en horario matutino para evitar aglomeraciones",
      "Lleve protector solar; hay pocas zonas de sombra natural en las áreas centrales"
    ],
    mundial_relevancia: "Estación clave para acceso a recreación en Monterrey. Conexión hacia el este hacia Regina y el sur de la ciudad."
  },
  {
    id: 3,
    nombre: "Mitras",
    slug: "mitras",
    numero: 3,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Universidad esquina Mitras, Monterrey",
    coordenadas: { lat: 25.3690, lng: -100.3620 },
    seo_title: "Estación Mitras - Ecovía TransMetro Monterrey - Transferencia Línea 1",
    meta_description: "Estación Mitras con transferencia a Línea 1 del Metro. Centro comercial y acceso a Universidad, servicios completos en la Ecovía.",
    h1: "Estación Mitras - Ecovía TransMetro con Transferencia Metro L1",
    intro: "Nodo importante de transporte con transferencia directa a Línea 1 del Metro. Centro comercial dinámico con acceso a Universidad.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [
      {
        linea: "Línea 1",
        estacion: "Mitras",
        tipo: "Metro",
        tiempo_medio: "5 minutos",
        conexion: "Pasillo techado directo"
      }
    ],
    pois: [
      { nombre: "Centro Comercial Mitras", distancia: "0.1 km", tipo: "Comercio" },
      { nombre: "Universidad de Monterrey", distancia: "0.4 km", tipo: "Educación" },
      { nombre: "Hospital Metropolitano", distancia: "0.6 km", tipo: "Salud" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Mitras", descripcion: "Centro comercial con tiendas departamentales, cines, restaurantes y servicios financieros." },
      { nombre: "Universidad de Monterrey", descripcion: "Campus principal de la UDEM con arquitectura moderna, biblioteca y servicios universitarios." },
      { nombre: "Barrio Antiguo", descripcion: "A 1.5 km hacia el occidente, zona histórica con gastronomía y vida cultural." }
    ],
    practico_tips: [
      "Utilice la transferencia Metro en pasillos techados; no hay necesidad de salir a la intemperie",
      "En horas pico (7-9 AM y 5-7 PM), use el ascensor si viaja con equipaje"
    ],
    mundial_relevancia: "Transferencia crítica Ecovía-Metro L1. Centro comercial y educativo. Conecta con Metro hacia Centro, Barrio Antiguo y Estación de Autobuses."
  },
  {
    id: 4,
    nombre: "Obispado",
    slug: "obispado",
    numero: 4,
    municipio: "Monterrey",
    zona: "residencial-comercial",
    direccion: "Av. Obispado, Monterrey",
    coordenadas: { lat: 25.3610, lng: -100.3480 },
    seo_title: "Estación Obispado - Ecovía TransMetro Monterrey",
    meta_description: "Acceso a la zona de Obispado con gastronomía y entretenimiento. Estación Obispado de la Ecovía con servicios y conectividad.",
    h1: "Estación Obispado - Ecovía TransMetro",
    intro: "Entrada a la vibrante zona de Obispado conocida por su vida nocturna, restaurantes y entretenimiento.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Barrio Obispado", distancia: "0.3 km", tipo: "Entretenimiento" },
      { nombre: "Restaurantes zona Obispado", distancia: "0.2 km", tipo: "Gastronomía" },
      { nombre: "Centro Comercial Obispado", distancia: "0.4 km", tipo: "Comercio" }
    ],
    lugares_cercanos: [
      { nombre: "Barrio Obispado", descripcion: "Zona gastronómica y de entretenimiento con restaurantes, bares, cafés y vida nocturna activa." },
      { nombre: "Macroplaza", descripcion: "A 2 km hacia el occidente, centro histórico y cultural de la ciudad." },
      { nombre: "Paseo Santa Lucía", descripcion: "Camino peatonal con áreas verdes conectando varios puntos turísticos de Monterrey." }
    ],
    practico_tips: [
      "Esta zona es especialmente concurrida los viernes y sábados por la noche",
      "Hay abundancia de restaurantes en un radio de 5 cuadras hacia el norte"
    ],
    mundial_relevancia: "Acceso a zona de entretenimiento y gastronomía premium de Monterrey. Conexión hacia Regina y Ruiz Cortines."
  },
  {
    id: 5,
    nombre: "Barrio Viejo",
    slug: "barrio-viejo",
    numero: 5,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Barrio Viejo, Monterrey",
    coordenadas: { lat: 25.3520, lng: -100.3340 },
    seo_title: "Estación Barrio Viejo - Ecovía TransMetro Monterrey",
    meta_description: "Acceso a zona residencial de Barrio Viejo. Estación con servicios y conectividad hacia Guadalupe y área comercial de Regina.",
    h1: "Estación Barrio Viejo - Ecovía TransMetro",
    intro: "Estación en zona residencial consolidada con acceso a vivienda, servicios locales y conexión hacia el sur de Monterrey.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda de Abarrotes Local", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Clínica Barrio Viejo", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Escuela Primaria Benito Juárez", distancia: "0.4 km", tipo: "Educación" }
    ],
    lugares_cercanos: [
      { nombre: "Plaza Barrio Viejo", descripcion: "Pequeña plaza con tiendas locales, cafetería y servicios para la comunidad residente." },
      { nombre: "Parque Fundidora", descripcion: "A 1.5 km hacia el occidente, extenso parque con lagos y áreas recreativas." },
      { nombre: "Regina", descripcion: "A 1 km hacia el oriente, área comercial importante de Monterrey." }
    ],
    practico_tips: [
      "Esta zona es residencial tranquila, mejor para viajes durante horas normales de trabajo",
      "Los comercios locales cierran alrededor de las 20:00, planifique compras antes"
    ],
    mundial_relevancia: "Estación en zona residencial. Conexión directa hacia Regina y Guadalupe en la Ecovía."
  },
  {
    id: 6,
    nombre: "Regina",
    slug: "regina",
    numero: 6,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Regina esquina Revolucionarios, Monterrey",
    coordenadas: { lat: 25.3440, lng: -100.3180 },
    seo_title: "Estación Regina - Ecovía TransMetro Monterrey - Transferencia Línea 2",
    meta_description: "Estación Regina con transferencia a Línea 2 del Metro. Centro comercial importante con acceso a zona de negocios de Monterrey.",
    h1: "Estación Regina - Ecovía TransMetro con Transferencia Metro L2",
    intro: "Nodo estratégico de transporte con transferencia a Línea 2 del Metro. Centro comercial y de negocios dinámico de Monterrey.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [
      {
        linea: "Línea 2",
        estacion: "Regina",
        tipo: "Metro",
        tiempo_medio: "5 minutos",
        conexion: "Pasillo techado con escaleras mecánicas"
      }
    ],
    pois: [
      { nombre: "Centro Comercial Regina", distancia: "0.1 km", tipo: "Comercio" },
      { nombre: "Oficinas Zona Regina", distancia: "0.2 km", tipo: "Negocios" },
      { nombre: "Restaurante Gourmet Regina", distancia: "0.3 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Regina", descripcion: "Centro comercial con tiendas premium, restaurantes, cines y servicios profesionales." },
      { nombre: "Zona Monterrey Business", descripcion: "Área concentrada de oficinas corporativas y servicios financieros." },
      { nombre: "Barrio Obispado", descripcion: "A 1.5 km hacia el occidente, zona de entretenimiento y gastronomía." }
    ],
    practico_tips: [
      "Use la transferencia Metro en pasillos con aire acondicionado permanente",
      "En días laborales matutinos (7-9 AM) hay alta afluencia de oficinistas"
    ],
    mundial_relevancia: "Transferencia crítica Ecovía-Metro L2. Centro comercial y de negocios de Monterrey. Conecta con Metro hacia Estación de Autobuses y Colón."
  },
  {
    id: 7,
    nombre: "Gómez Morín",
    slug: "gomez-morin",
    numero: 7,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Gómez Morín, Monterrey",
    coordenadas: { lat: 25.3360, lng: -100.3050 },
    seo_title: "Estación Gómez Morín - Ecovía TransMetro Monterrey",
    meta_description: "Estación Gómez Morín en zona comercial. Acceso a servicios y comercios con conexión directa hacia Ruiz Cortines y Guadalupe.",
    h1: "Estación Gómez Morín - Ecovía TransMetro",
    intro: "Estación en zona comercial dinámica con acceso a servicios y tiendas especializadas.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plaza Gómez Morín", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Banco Santander", distancia: "0.3 km", tipo: "Servicios Financieros" },
      { nombre: "Farmacia del Dr. Simi", distancia: "0.1 km", tipo: "Salud" }
    ],
    lugares_cercanos: [
      { nombre: "Plaza Gómez Morín", descripcion: "Centro comercial con tiendas departamentales, farmacias y servicios de salud." },
      { nombre: "Regina", descripcion: "A 1 km hacia el occidente, importante centro comercial y de negocios." },
      { nombre: "Ruiz Cortines", descripcion: "A 1.5 km hacia el oriente, zona con servicios diversificados." }
    ],
    practico_tips: [
      "Muchas farmacias y servicios de salud en esta zona están abiertos 24 horas",
      "Acceso rápido a servicios bancarios y comerciales en menos de 5 minutos a pie"
    ],
    mundial_relevancia: "Zona comercial consolidada. Conexión entre Regina y Ruiz Cortines en la Ecovía."
  },
  {
    id: 8,
    nombre: "Ruiz Cortines",
    slug: "ruiz-cortines",
    numero: 8,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Ruiz Cortines esquina Constitución, Monterrey",
    coordenadas: { lat: 25.3290, lng: -100.2920 },
    seo_title: "Estación Ruiz Cortines - Ecovía TransMetro Monterrey - Transferencia Línea 3",
    meta_description: "Estación Ruiz Cortines con transferencia a Línea 3 del Metro. Centro comercial y servicios con acceso a zona industrial sur.",
    h1: "Estación Ruiz Cortines - Ecovía TransMetro con Transferencia Metro L3",
    intro: "Nodo de transporte con transferencia a Línea 3 del Metro. Acceso a zona comercial y puerta hacia el sur industrial de Monterrey.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [
      {
        linea: "Línea 3",
        estacion: "Ruiz Cortines",
        tipo: "Metro",
        tiempo_medio: "5 minutos",
        conexion: "Pasillo techado con ascensor"
      }
    ],
    pois: [
      { nombre: "Centro Comercial Ruiz Cortines", distancia: "0.1 km", tipo: "Comercio" },
      { nombre: "Hospital Ruiz Cortines", distancia: "0.5 km", tipo: "Salud" },
      { nombre: "Mercado Local Ruiz", distancia: "0.3 km", tipo: "Comercio" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Ruiz Cortines", descripcion: "Centro comercial con tiendas locales, servicios y pequeños restaurantes." },
      { nombre: "Hospital Ruiz Cortines", descripcion: "Importante institución de salud con servicios de emergencia y consulta especializada." },
      { nombre: "Zona Industrial Sur", descripcion: "A 2 km hacia el sur, área industrial con manufacturas y servicios especializados." }
    ],
    practico_tips: [
      "La transferencia a Metro L3 es rápida; use pasillos techados con ascensor",
      "Horario pico de llegada de trabajadores es 6-8 AM, plan de viaje flexible"
    ],
    mundial_relevancia: "Transferencia crítica Ecovía-Metro L3. Punto de entrada a zona industrial sur de Monterrey. Conexión hacia Guadalupe."
  },
  {
    id: 9,
    nombre: "Adolfo López Mateos",
    slug: "adolfo-lopez-mateos",
    numero: 9,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Adolfo López Mateos, Monterrey",
    coordenadas: { lat: 25.3210, lng: -100.2780 },
    seo_title: "Estación Adolfo López Mateos - Ecovía TransMetro Monterrey",
    meta_description: "Estación Adolfo López Mateos en zona residencial sur. Acceso a vivienda y servicios locales con conexión hacia Guadalupe.",
    h1: "Estación Adolfo López Mateos - Ecovía TransMetro",
    intro: "Estación en zona residencial consolidada del sur de Monterrey con acceso a vivienda y servicios comunitarios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda OXXO", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Clínica Integral de Salud", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Paletería Local", distancia: "0.1 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Mercado Adolfo López Mateos", descripcion: "Mercado tradicional con productos frescos, frutas y verduras de la región." },
      { nombre: "Ruiz Cortines", descripcion: "A 1.5 km hacia el occidente, zona comercial importante." },
      { nombre: "Guadalupe Centro", descripcion: "A 2 km hacia el oriente, municipio vecino con servicios y comercio." }
    ],
    practico_tips: [
      "El mercado tradicional tiene mejor oferta en horarios matutinos (6-11 AM)",
      "Zona tranquila por las tardes, ideal para viajes sin prisa"
    ],
    mundial_relevancia: "Estación residencial sur de Monterrey. Punto de transición hacia Guadalupe en la Ecovía."
  },
  {
    id: 10,
    nombre: "Las Torres",
    slug: "las-torres",
    numero: 10,
    municipio: "Monterrey",
    zona: "residencial-comercial",
    direccion: "Av. Las Torres, Monterrey",
    coordenadas: { lat: 25.3130, lng: -100.2640 },
    seo_title: "Estación Las Torres - Ecovía TransMetro Monterrey",
    meta_description: "Estación Las Torres en zona residencial-comercial. Servicios, vivienda y comercio con conexión directa hacia Guadalupe.",
    h1: "Estación Las Torres - Ecovía TransMetro",
    intro: "Estación en zona residencial con componente comercial, acceso a vivienda de mid-rise y servicios locales.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro Comercial Las Torres", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Gym Fitness Plus", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Café Las Torres", distancia: "0.1 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Las Torres", descripcion: "Centro comercial pequeño con tiendas de barrio, servicios y ropa." },
      { nombre: "Parque Las Torres", descripcion: "Parque comunitario con áreas verdes, canchas deportivas y juegos infantiles." },
      { nombre: "Adolfo López Mateos", descripcion: "A 1.5 km hacia el occidente, zona residencial tradicional." }
    ],
    practico_tips: [
      "Buena conexión con rutas de autobús local desde esta estación",
      "Zona segura y bien mantenida para viajes en horarios nocturnos"
    ],
    mundial_relevancia: "Zona residencial-comercial consolidada. Transición hacia Guadalupe en la Ecovía."
  },
  {
    id: 11,
    nombre: "Mariano Escobedo",
    slug: "mariano-escobedo",
    numero: 11,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Mariano Escobedo, Monterrey",
    coordenadas: { lat: 25.3050, lng: -100.2500 },
    seo_title: "Estación Mariano Escobedo - Ecovía TransMetro Monterrey",
    meta_description: "Estación Mariano Escobedo en zona residencial. Acceso a vivienda y servicios con conexión hacia Guadalupe y oriente.",
    h1: "Estación Mariano Escobedo - Ecovía TransMetro",
    intro: "Estación en zona residencial consolidada con acceso a vivienda estable y servicios comunitarios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda de Ropa Local", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Escuela Secundaria Técnica", distancia: "0.4 km", tipo: "Educación" },
      { nombre: "Restaurante Comida Casera", distancia: "0.3 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Barrio Residencial Escobedo", descripcion: "Barrio tradicional con casas unifamiliares, pequeños comercios y vida comunitaria activa." },
      { nombre: "Las Torres", descripcion: "A 1.5 km hacia el occidente, zona residencial-comercial." },
      { nombre: "Guadalupe Centro", descripcion: "A 2 km hacia el oriente, centro municipal de Guadalupe." }
    ],
    practico_tips: [
      "Muchas tiendas familiares cierran entre 13:00-15:00 para comida",
      "Buena circulación de microómnibus hacia colonias cercanas"
    ],
    mundial_relevancia: "Zona residencial estable. Puente entre Monterrey centro y Guadalupe norte."
  },
  {
    id: 12,
    nombre: "Solidaridad",
    slug: "solidaridad",
    numero: 12,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Solidaridad, Monterrey",
    coordenadas: { lat: 25.2970, lng: -100.2360 },
    seo_title: "Estación Solidaridad - Ecovía TransMetro Monterrey",
    meta_description: "Estación Solidaridad en zona residencial noreste. Acceso a vivienda y servicios con conexión directa a Guadalupe.",
    h1: "Estación Solidaridad - Ecovía TransMetro",
    intro: "Estación en zona residencial noreste de Monterrey con acceso a vivienda consolidada y servicios locales.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Mercado Solidaridad", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Clínica Dental", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Pizzería Popular", distancia: "0.1 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Mercado Solidaridad", descripcion: "Mercado tradicional con oferta de frutas, verduras y productos para la canasta básica." },
      { nombre: "Colonia Solidaridad", descripcion: "Zona residencial bien establecida con servicios comunitarios básicos." },
      { nombre: "Mariano Escobedo", descripcion: "A 1.5 km hacia el occidente, zona residencial consolidada." }
    ],
    practico_tips: [
      "El mercado tiene mejor abastecimiento en martes, viernes y domingo",
      "Zona tranquila y segura para viajes en cualquier horario"
    ],
    mundial_relevancia: "Zona residencial noreste. Conexión importante hacia Guadalupe en la Ecovía."
  },
  {
    id: 13,
    nombre: "Sendero",
    slug: "sendero",
    numero: 13,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Sendero, Monterrey",
    coordenadas: { lat: 25.2890, lng: -100.2220 },
    seo_title: "Estación Sendero - Ecovía TransMetro Monterrey",
    meta_description: "Estación Sendero en zona residencial de Monterrey. Acceso a vivienda y servicios comunitarios hacia Guadalupe.",
    h1: "Estación Sendero - Ecovía TransMetro",
    intro: "Estación en zona residencial de Monterrey noreste con acceso a vivienda familiar y servicios de barrio.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda Sendero", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Parque Infantil Sendero", distancia: "0.3 km", tipo: "Recreación" },
      { nombre: "Comedor Comunitario", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Parque Infantil Sendero", descripcion: "Pequeño parque comunitario con áreas verdes, juegos para niños y canchas deportivas." },
      { nombre: "Solidaridad", descripcion: "A 1.5 km hacia el occidente, zona residencial con mercado tradicional." },
      { nombre: "Centro de Salud Sendero", descripcion: "Centro comunitario de atención básica a 300 metros de la estación." }
    ],
    practico_tips: [
      "El parque es mejor visitado en horarios matutinos para evitar caos vial",
      "Conexión rápida con rutas de autobús hacia colonias residenciales"
    ],
    mundial_relevancia: "Zona residencial familiar. Conexión norte hacia Guadalupe en la Ecovía."
  },
  {
    id: 14,
    nombre: "Santa Catarina",
    slug: "santa-catarina",
    numero: 14,
    municipio: "Monterrey",
    zona: "industrial-transporte",
    direccion: "Av. Santa Catarina, Monterrey",
    coordenadas: { lat: 25.2810, lng: -100.2080 },
    seo_title: "Estación Santa Catarina - Ecovía TransMetro Monterrey",
    meta_description: "Estación Santa Catarina en zona industrial-transporte. Acceso a servicios logísticos y comercio mayorista hacia Guadalupe.",
    h1: "Estación Santa Catarina - Ecovía TransMetro",
    intro: "Estación en zona industrial-transporte con acceso a servicios logísticos y comercio mayorista.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro de Distribución Santa Catarina", distancia: "0.5 km", tipo: "Logística" },
      { nombre: "Comercio Mayorista", distancia: "0.3 km", tipo: "Comercio" },
      { nombre: "Cafetería Transportista", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro de Distribución Santa Catarina", descripcion: "Centro logístico importante con almacenes, depósitos y servicios de transporte." },
      { nombre: "Zona de Comercio Mayorista", descripcion: "Área dedicada a comercio mayorista y servicios de acopio." },
      { nombre: "Sendero", descripcion: "A 1.5 km hacia el occidente, zona residencial de Monterrey." }
    ],
    practico_tips: [
      "Estación útil para trabajadores del sector transporte y logística",
      "Mejor conectividad en horarios laborales 6-18 horas"
    ],
    mundial_relevancia: "Zona industrial-transporte. Acceso a servicios logísticos del área metropolitana. Puente hacia Guadalupe."
  },
  {
    id: 15,
    nombre: "Apodaca",
    slug: "apodaca",
    numero: 15,
    municipio: "Monterrey",
    zona: "industrial",
    direccion: "Av. Apodaca, Monterrey",
    coordenadas: { lat: 25.2730, lng: -100.1940 },
    seo_title: "Estación Apodaca - Ecovía TransMetro Monterrey",
    meta_description: "Estación Apodaca en zona industrial noreste. Acceso a parques industriales y servicios especializados hacia Guadalupe.",
    h1: "Estación Apodaca - Ecovía TransMetro",
    intro: "Estación en zona industrial noreste de Monterrey con acceso a parques industriales y servicios de manufactura.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Parque Industrial Apodaca", distancia: "0.5 km", tipo: "Industrial" },
      { nombre: "Servicios Técnicos", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Comedor Industrial", distancia: "0.3 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Parque Industrial Apodaca", descripcion: "Zona industrial con plantas de manufactura, servicios técnicos y oficinas administrativas." },
      { nombre: "Santa Catarina", descripcion: "A 1.5 km hacia el occidente, zona de logística y comercio mayorista." },
      { nombre: "Guadalupe Noreste", descripcion: "A 2 km hacia el oriente, continuación industrial hacia Guadalupe." }
    ],
    practico_tips: [
      "Muy concurrida en horarios de entrada (6-8 AM) y salida (16-18 horas) de trabajadores",
      "Servicios técnicos y tiendas cierran después de las 18:00"
    ],
    mundial_relevancia: "Zona industrial importante. Acceso a parques industriales noreste. Conexión hacia Guadalupe."
  },
  {
    id: 16,
    nombre: "San Nicolás",
    slug: "san-nicolas",
    numero: 16,
    municipio: "Monterrey",
    zona: "industrial",
    direccion: "Av. San Nicolás, Monterrey",
    coordenadas: { lat: 25.2650, lng: -100.1800 },
    seo_title: "Estación San Nicolás - Ecovía TransMetro Monterrey",
    meta_description: "Estación San Nicolás en zona industrial. Acceso a plantas de manufactura y servicios logísticos con conexión a Guadalupe.",
    h1: "Estación San Nicolás - Ecovía TransMetro",
    intro: "Estación en zona industrial consolidada con acceso a plantas de manufactura y servicios logísticos.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas de Manufactura", distancia: "0.4 km", tipo: "Industrial" },
      { nombre: "Centro de Servicios Técnicos", distancia: "0.3 km", tipo: "Servicios" },
      { nombre: "Restaurante Industrial", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial San Nicolás", descripcion: "Área con plantas manufactureras, almacenes y servicios técnicos especializados." },
      { nombre: "Apodaca", descripcion: "A 1.5 km hacia el occidente, zona industrial con parques empresariales." },
      { nombre: "Guadalupe Puente Largo", descripcion: "A 1.5 km hacia el oriente, continuación industrial en Guadalupe." }
    ],
    practico_tips: [
      "Flujo de trabajadores importante en horarios 6-8 AM y 16-18 horas",
      "Estacionamiento disponible para vehículos de trabajadores cercano"
    ],
    mundial_relevancia: "Zona industrial importante del área metropolitana. Conexión entre Monterrey e industrial de Guadalupe."
  },
  {
    id: 17,
    nombre: "Puente Largo",
    slug: "puente-largo",
    numero: 17,
    municipio: "Monterrey",
    zona: "industrial",
    direccion: "Av. Puente Largo, Monterrey",
    coordenadas: { lat: 25.2570, lng: -100.1660 },
    seo_title: "Estación Puente Largo - Ecovía TransMetro Monterrey",
    meta_description: "Estación Puente Largo en zona industrial. Acceso a servicios logísticos y manufactura con transición hacia Guadalupe.",
    h1: "Estación Puente Largo - Ecovía TransMetro",
    intro: "Estación ubicada en zona industrial con acceso a servicios logísticos y manufactura de la región.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro Logístico Regional", distancia: "0.4 km", tipo: "Logística" },
      { nombre: "Talleres Especializados", distancia: "0.3 km", tipo: "Servicios" },
      { nombre: "Cafetería Transportista", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Logístico Regional", descripcion: "Centro de distribución importante con almacenes, depósitos y servicios de transporte." },
      { nombre: "San Nicolás", descripcion: "A 1.5 km hacia el occidente, zona industrial con plantas de manufactura." },
      { nombre: "Guadalupe Centro Industrial", descripcion: "A 1 km hacia el oriente, continuación del corredor industrial en Guadalupe." }
    ],
    practico_tips: [
      "Acceso importante para trabajadores de sector logístico y transportistas",
      "Servicios disponibles principalmente en horarios laborales"
    ],
    mundial_relevancia: "Zona industrial. Puerta de transición de Monterrey a Guadalupe en la Ecovía."
  },
  {
    id: 18,
    nombre: "Constitución",
    slug: "constitucion",
    numero: 18,
    municipio: "Monterrey",
    zona: "industrial",
    direccion: "Av. Constitución, Monterrey",
    coordenadas: { lat: 25.2490, lng: -100.1520 },
    seo_title: "Estación Constitución - Ecovía TransMetro Monterrey",
    meta_description: "Estación Constitución en zona industrial. Acceso a manufactura y servicios con proximidad a Guadalupe.",
    h1: "Estación Constitución - Ecovía TransMetro",
    intro: "Estación en zona industrial de Monterrey noreste con acceso a plantas de manufactura y servicios especializados.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas Manufactureras", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Servicios Técnicos Especializados", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Tienda Conveniencia 24h", distancia: "0.2 km", tipo: "Comercio" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial Constitución", descripcion: "Área concentrada de manufactura, metalúrgica y servicios técnicos de precisión." },
      { nombre: "Puente Largo", descripcion: "A 1.5 km hacia el occidente, zona logística y de transporte." },
      { nombre: "Guadalupe Constitución", descripcion: "A 500 metros hacia el oriente, continuación del corredor industrial." }
    ],
    practico_tips: [
      "Tienda 24 horas disponible para necesidades urgentes de trabajadores",
      "Zona segura pero con poca circulación peatonal fuera de horarios laborales"
    ],
    mundial_relevancia: "Zona industrial consolidada. Punto de transición entre Monterrey e industrial de Guadalupe."
  },
  {
    id: 19,
    nombre: "Primero de Mayo",
    slug: "primero-de-mayo",
    numero: 19,
    municipio: "Monterrey",
    zona: "industrial",
    direccion: "Av. Primero de Mayo, Monterrey",
    coordenadas: { lat: 25.2410, lng: -100.1380 },
    seo_title: "Estación Primero de Mayo - Ecovía TransMetro Monterrey",
    meta_description: "Estación Primero de Mayo en zona industrial final de Monterrey. Conexión directa a Guadalupe en la Ecovía.",
    h1: "Estación Primero de Mayo - Ecovía TransMetro",
    intro: "Estación en zona industrial de Monterrey noreste, límite con Guadalupe, con acceso a manufactura.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas de Manufactura", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Centro de Servicios", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Comida Rápida Local", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial Primero de Mayo", descripcion: "Área industrial con plantas de manufactura y servicios de apoyo." },
      { nombre: "Constitución", descripcion: "A 1.5 km hacia el occidente, zona industrial de Monterrey." },
      { nombre: "Guadalupe Puente Nuevo", descripcion: "A 1 km hacia el oriente, inicio del corredor industrial de Guadalupe." }
    ],
    practico_tips: [
      "Última estación en Monterrey antes de transitar a Guadalupe",
      "Buena conectividad con rutas de autobús local"
    ],
    mundial_relevancia: "Zona industrial límite Monterrey-Guadalupe. Punto de transición final en la Ecovía dentro de Monterrey."
  },
  {
    id: 20,
    nombre: "Exposición",
    slug: "exposicion",
    numero: 20,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Exposición, Monterrey",
    coordenadas: { lat: 25.2330, lng: -100.1240 },
    seo_title: "Estación Exposición - Ecovía TransMetro Monterrey",
    meta_description: "Estación Exposición en Monterrey noreste. Acceso a zona comercial y de servicios cercanos a Guadalupe.",
    h1: "Estación Exposición - Ecovía TransMetro",
    intro: "Estación en zona comercial de Monterrey noreste próxima a Guadalupe con acceso a servicios y comercio.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro Comercial Exposición", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Servicios Bancarios", distancia: "0.3 km", tipo: "Servicios Financieros" },
      { nombre: "Restaurante Variado", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Exposición", descripcion: "Centro con tiendas, servicios financieros y comercio variado." },
      { nombre: "Primero de Mayo", descripcion: "A 1.5 km hacia el occidente, zona industrial de Monterrey." },
      { nombre: "Guadalupe Centro Comercial", descripcion: "A 500 metros hacia el oriente, zona comercial de Guadalupe." }
    ],
    practico_tips: [
      "Servicios bancarios disponibles hasta las 16:00 entre semana",
      "Zona comercial activa con buenos horarios para compras"
    ],
    mundial_relevancia: "Zona comercial límite Monterrey-Guadalupe. Transición hacia servicios de Guadalupe."
  },
  {
    id: 21,
    nombre: "Puente Nuevo",
    slug: "puente-nuevo",
    numero: 21,
    municipio: "Monterrey",
    zona: "comercial",
    direccion: "Av. Puente Nuevo, Monterrey",
    coordenadas: { lat: 25.2250, lng: -100.1100 },
    seo_title: "Estación Puente Nuevo - Ecovía TransMetro Monterrey",
    meta_description: "Estación Puente Nuevo, límite Monterrey-Guadalupe. Zona comercial con servicios y conexión a ambos municipios.",
    h1: "Estación Puente Nuevo - Ecovía TransMetro",
    intro: "Estación en límite de Monterrey y Guadalupe en zona comercial con acceso a servicios de ambos municipios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tiendas Puente Nuevo", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Farmacia 24h", distancia: "0.1 km", tipo: "Salud" },
      { nombre: "Restaurante Frontera", distancia: "0.3 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Comercial Puente Nuevo", descripcion: "Comercio variado con tiendas, farmacias y servicios de salud." },
      { nombre: "Exposición", descripcion: "A 1.5 km hacia el occidente, zona comercial de Monterrey." },
      { nombre: "Guadalupe Centro Puente Nuevo", descripcion: "A 500 metros hacia el oriente, zona comercial de Guadalupe." }
    ],
    practico_tips: [
      "Farmacia 24 horas disponible en cualquier horario de emergencia",
      "Puente fronterizo natural entre servicios de Monterrey y Guadalupe"
    ],
    mundial_relevancia: "Estación fronteriza Monterrey-Guadalupe. Última estación técnica de Monterrey en la Ecovía."
  },
  {
    id: 22,
    nombre: "Santa Cruz",
    slug: "santa-cruz",
    numero: 22,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Santa Cruz, Monterrey",
    coordenadas: { lat: 25.2170, lng: -100.0960 },
    seo_title: "Estación Santa Cruz - Ecovía TransMetro Monterrey",
    meta_description: "Estación Santa Cruz entre Monterrey y Guadalupe. Zona residencial con servicios comunitarios en la Ecovía.",
    h1: "Estación Santa Cruz - Ecovía TransMetro",
    intro: "Estación en zona residencial entre Monterrey y Guadalupe con acceso a vivienda y servicios locales.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda Local Santa Cruz", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Centro de Salud Comunitario", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Paletería Regional", distancia: "0.1 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Barrio Residencial Santa Cruz", descripcion: "Zona residencial consolidada con casas familiares y pequeños comercios locales." },
      { nombre: "Puente Nuevo", descripcion: "A 1.5 km hacia el occidente, zona comercial fronteriza Monterrey-Guadalupe." },
      { nombre: "Guadalupe Centro", descripcion: "A 1.5 km hacia el oriente, centro municipal de Guadalupe." }
    ],
    practico_tips: [
      "Zona tranquila y residencial, buena para viajes sin prisa",
      "Comercios locales cierra alrededor de las 20:00"
    ],
    mundial_relevancia: "Zona residencial intermunicipal. Transición Monterrey-Guadalupe en la Ecovía."
  },
  {
    id: 23,
    nombre: "Libertad",
    slug: "libertad",
    numero: 23,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Libertad, Monterrey",
    coordenadas: { lat: 25.2090, lng: -100.0820 },
    seo_title: "Estación Libertad - Ecovía TransMetro Monterrey",
    meta_description: "Estación Libertad en zona residencial entre municipios. Acceso a vivienda con conexión hacia Guadalupe.",
    h1: "Estación Libertad - Ecovía TransMetro",
    intro: "Estación en zona residencial fronteriza con acceso a vivienda familiar y servicios comunitarios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Mercadito Local", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Clínica Integral Libertad", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Fonda Casera", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Colonia Libertad", descripcion: "Zona residencial con viviendas unifamiliares y pequeño comercio tradicional." },
      { nombre: "Santa Cruz", descripcion: "A 1.5 km hacia el occidente, zona residencial fronteriza." },
      { nombre: "Guadalupe Centro Libertad", descripcion: "A 1 km hacia el oriente, continuación residencial en Guadalupe." }
    ],
    practico_tips: [
      "Mercadito tiene buena oferta en horarios matutinos 7-11 AM",
      "Zona segura y tranquila para viajes en cualquier horario"
    ],
    mundial_relevancia: "Zona residencial fronteriza. Conexión residencial Monterrey-Guadalupe."
  },
  {
    id: 24,
    nombre: "San Bernabé",
    slug: "san-bernabe",
    numero: 24,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. San Bernabé, Monterrey",
    coordenadas: { lat: 25.2010, lng: -100.0680 },
    seo_title: "Estación San Bernabé - Ecovía TransMetro Monterrey",
    meta_description: "Estación San Bernabé en zona residencial de Monterrey. Acceso a vivienda con proximidad a Guadalupe.",
    h1: "Estación San Bernabé - Ecovía TransMetro",
    intro: "Estación en zona residencial de Monterrey oriente con acceso a vivienda consolidada y servicios locales.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda San Bernabé", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Escuela Primaria Local", distancia: "0.3 km", tipo: "Educación" },
      { nombre: "Taquería Popular", distancia: "0.1 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Colonia San Bernabé", descripcion: "Zona residencial consolidada con viviendas familiares y servicios básicos de barrio." },
      { nombre: "Libertad", descripcion: "A 1.5 km hacia el occidente, zona residencial fronteriza." },
      { nombre: "Guadalupe Noreste", descripcion: "A 1 km hacia el oriente, zona residencial de Guadalupe." }
    ],
    practico_tips: [
      "Taquería popular tiene buen abastecimiento en desayuno y comida",
      "Escuela primaria cercana implica mayor movimiento en horarios escolares"
    ],
    mundial_relevancia: "Zona residencial oriente de Monterrey. Transición hacia Guadalupe en la Ecovía."
  },
  {
    id: 25,
    nombre: "Reforma",
    slug: "reforma",
    numero: 25,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Reforma, Monterrey",
    coordenadas: { lat: 25.1930, lng: -100.0540 },
    seo_title: "Estación Reforma - Ecovía TransMetro Monterrey",
    meta_description: "Estación Reforma en zona residencial oriente de Monterrey. Acceso a vivienda con conexión a Guadalupe.",
    h1: "Estación Reforma - Ecovía TransMetro",
    intro: "Estación en zona residencial de Monterrey oriente con acceso a vivienda y servicios comunitarios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plaza Reforma", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Centro de Salud Reforma", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Cafetería Reforma", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Plaza Reforma", descripcion: "Pequeña plaza comercial con tiendas locales, servicios y café comunitario." },
      { nombre: "San Bernabé", descripcion: "A 1.5 km hacia el occidente, zona residencial de Monterrey." },
      { nombre: "Guadalupe Oriental", descripcion: "A 1 km hacia el oriente, zona residencial de Guadalupe." }
    ],
    practico_tips: [
      "Centro de Salud con horarios extendidos, abierto hasta las 20:00",
      "Cafetería es punto de encuentro comunitario por las tardes"
    ],
    mundial_relevancia: "Zona residencial oriente de Monterrey. Conexión hacia Guadalupe oriental en la Ecovía."
  },
  {
    id: 26,
    nombre: "Iturbide",
    slug: "iturbide",
    numero: 26,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Iturbide, Monterrey",
    coordenadas: { lat: 25.1850, lng: -100.0400 },
    seo_title: "Estación Iturbide - Ecovía TransMetro Monterrey",
    meta_description: "Estación Iturbide en Monterrey oriente. Zona residencial con servicios comunitarios y conexión a Guadalupe.",
    h1: "Estación Iturbide - Ecovía TransMetro",
    intro: "Estación en zona residencial de Monterrey extremo oriente con acceso a vivienda y servicios locales.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda Iturbide", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Parque Comunitario Iturbide", distancia: "0.3 km", tipo: "Recreación" },
      { nombre: "Comida Rápida Local", distancia: "0.1 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Parque Comunitario Iturbide", descripcion: "Pequeño parque con áreas verdes, juegos infantiles y canchas deportivas para la comunidad." },
      { nombre: "Reforma", descripcion: "A 1.5 km hacia el occidente, zona residencial de Monterrey." },
      { nombre: "Guadalupe Iturbide", descripcion: "A 500 metros hacia el oriente, continuación residencial en Guadalupe." }
    ],
    practico_tips: [
      "Parque es mejor visitado en horarios matutinos antes del calor",
      "Zona tranquila, ideal para familias"
    ],
    mundial_relevancia: "Zona residencial extremo oriente de Monterrey. Punto de transición hacia Guadalupe."
  },
  {
    id: 27,
    nombre: "Madero",
    slug: "madero",
    numero: 27,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Madero, Monterrey",
    coordenadas: { lat: 25.1770, lng: -100.0260 },
    seo_title: "Estación Madero - Ecovía TransMetro Monterrey",
    meta_description: "Estación Madero, extremo oriente de Monterrey. Zona residencial con servicios antes de transitar a Guadalupe.",
    h1: "Estación Madero - Ecovía TransMetro",
    intro: "Estación en extremo oriente de Monterrey en zona residencial con acceso a vivienda y servicios de barrio.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Mercado Madero", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Clínica Dental", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Fonda Madero", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Mercado Madero", descripcion: "Mercado tradicional con productos frescos, frutas, verduras y carnes de calidad." },
      { nombre: "Iturbide", descripcion: "A 1.5 km hacia el occidente, zona residencial de Monterrey." },
      { nombre: "Guadalupe Centro Madero", descripcion: "A 500 metros hacia el oriente, municipio de Guadalupe." }
    ],
    practico_tips: [
      "Mercado tiene mayor abastecimiento en martes, viernes y domingo",
      "Última estación claramente dentro de Monterrey antes de Guadalupe"
    ],
    mundial_relevancia: "Extremo oriente de Monterrey. Punto de transición final antes de Guadalupe en la Ecovía."
  },
  {
    id: 28,
    nombre: "Hermosillo",
    slug: "hermosillo",
    numero: 28,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Hermosillo, Monterrey",
    coordenadas: { lat: 25.1690, lng: -100.0120 },
    seo_title: "Estación Hermosillo - Ecovía TransMetro Monterrey",
    meta_description: "Estación Hermosillo, límite Monterrey-Guadalupe. Zona residencial con transición final entre municipios.",
    h1: "Estación Hermosillo - Ecovía TransMetro",
    intro: "Estación en límite extremo de Monterrey en zona residencial con acceso a vivienda y servicios locales.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Tienda Hermosillo", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Centro de Salud Hermosillo", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Comedor Comunitario", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Barrio Hermosillo", descripcion: "Zona residencial tradicional con viviendas familiares y pequeños comercios de barrio." },
      { nombre: "Madero", descripcion: "A 1.5 km hacia el occidente, zona residencial de Monterrey." },
      { nombre: "Guadalupe Hermosillo", descripcion: "A 300 metros hacia el oriente, municipio de Guadalupe." }
    ],
    practico_tips: [
      "Centro de Salud comunitario abierto hasta las 18:00 entre semana",
      "Punto muy cercano al límite de Guadalupe"
    ],
    mundial_relevancia: "Límite extremo Monterrey-Guadalupe. Última estación de Monterrey antes de municipio vecino."
  },
  {
    id: 29,
    nombre: "Rayos del Sol",
    slug: "rayos-del-sol",
    numero: 29,
    municipio: "Monterrey",
    zona: "residencial",
    direccion: "Av. Rayos del Sol, Monterrey",
    coordenadas: { lat: 25.1610, lng: 99.9980 },
    seo_title: "Estación Rayos del Sol - Ecovía TransMetro Monterrey Terminal",
    meta_description: "Estación Rayos del Sol, terminal oriente de Monterrey en la Ecovía. Última estación de Monterrey, entrada a Guadalupe.",
    h1: "Estación Rayos del Sol - Ecovía TransMetro Terminal Monterrey",
    intro: "Terminal oriente de Monterrey en zona residencial. Última estación de Monterrey antes de Guadalupe en la Ecovía.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plaza Terminal Rayos del Sol", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Centro de Salud Terminal", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Restaurante Terminal", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Plaza Terminal Rayos del Sol", descripcion: "Pequeña terminal con servicios, cafetería y punto de conexión hacia Guadalupe." },
      { nombre: "Hermosillo", descripcion: "A 1.5 km hacia el occidente, zona residencial de Monterrey." },
      { nombre: "Guadalupe Terminal", descripcion: "A 300 metros hacia el oriente, inicio de servicios de Guadalupe en la Ecovía." }
    ],
    practico_tips: [
      "Terminal con servicios básicos para transferencia de pasajeros",
      "Punto final de Monterrey en la Ecovía, inicio de Guadalupe"
    ],
    mundial_relevancia: "Terminal oriental de Monterrey. Punto final de Monterrey e inicio de Guadalupe en la línea Ecovía TransMetro."
  },
  {
    id: 30,
    nombre: "Guadalupe Terminal",
    slug: "guadalupe-terminal",
    numero: 30,
    municipio: "Guadalupe",
    zona: "comercial",
    direccion: "Av. Terminal, Guadalupe",
    coordenadas: { lat: 25.1530, lng: 99.9840 },
    seo_title: "Estación Guadalupe Terminal - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Guadalupe Terminal, inicio de servicios en Guadalupe. Acceso a zona comercial y residencial de Guadalupe.",
    h1: "Estación Guadalupe Terminal - Ecovía TransMetro",
    intro: "Terminal occidental de Guadalupe, punto de entrada al municipio con acceso a comercio y residencia.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro Comercial Guadalupe Terminal", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Servicios Bancarios", distancia: "0.3 km", tipo: "Servicios Financieros" },
      { nombre: "Restaurante Terminal Guadalupe", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Guadalupe Terminal", descripcion: "Centro comercial de entrada a Guadalupe con tiendas, servicios y cafeterías." },
      { nombre: "Monterrey Terminal", descripcion: "A 300 metros hacia el occidente, municipio de Monterrey." },
      { nombre: "Centro de Guadalupe", descripcion: "A 2 km hacia el oriente, centro municipal importante." }
    ],
    practico_tips: [
      "Servicios bancarios disponibles hasta las 16:00 entre semana",
      "Punto de transferencia importante entre ambos municipios"
    ],
    mundial_relevancia: "Terminal occidental de Guadalupe. Puerta de entrada a servicios de Guadalupe en la Ecovía."
  },
  {
    id: 31,
    nombre: "San Roberto",
    slug: "san-roberto",
    numero: 31,
    municipio: "Guadalupe",
    zona: "residencial",
    direccion: "Av. San Roberto, Guadalupe",
    coordenadas: { lat: 25.1450, lng: 99.9700 },
    seo_title: "Estación San Roberto - Ecovía TransMetro Guadalupe",
    meta_description: "Estación San Roberto en zona residencial de Guadalupe. Acceso a vivienda y servicios locales.",
    h1: "Estación San Roberto - Ecovía TransMetro",
    intro: "Estación en zona residencial occidental de Guadalupe con acceso a vivienda consolidada y servicios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Mercado San Roberto", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Centro de Salud", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Comedor Tradicional", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Mercado San Roberto", descripcion: "Mercado tradicional con productos frescos y servicios de barrio." },
      { nombre: "Guadalupe Terminal", descripcion: "A 1.5 km hacia el occidente, terminal occidental de Guadalupe." },
      { nombre: "Centro de Guadalupe", descripcion: "A 1.5 km hacia el oriente, centro municipal de Guadalupe." }
    ],
    practico_tips: [
      "Mercado tiene mejor oferta en mañanas de entre semana",
      "Zona residencial tranquila y segura"
    ],
    mundial_relevancia: "Zona residencial occidental de Guadalupe. Conexión desde Monterrey hacia centro de Guadalupe."
  },
  {
    id: 32,
    nombre: "Estrellas",
    slug: "estrellas",
    numero: 32,
    municipio: "Guadalupe",
    zona: "residencial-comercial",
    direccion: "Av. Estrellas, Guadalupe",
    coordenadas: { lat: 25.1370, lng: 99.9560 },
    seo_title: "Estación Estrellas - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Estrellas en zona residencial-comercial de Guadalupe. Servicios y vivienda en Guadalupe.",
    h1: "Estación Estrellas - Ecovía TransMetro",
    intro: "Estación en zona residencial-comercial de Guadalupe con acceso a vivienda y comercio variado.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plaza Estrellas", distancia: "0.2 km", tipo: "Comercio" },
      { nombre: "Clínica Integral", distancia: "0.3 km", tipo: "Salud" },
      { nombre: "Café Estrellas", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Plaza Estrellas", descripcion: "Centro comercial con tiendas, servicios y cafetería comunitaria." },
      { nombre: "San Roberto", descripcion: "A 1.5 km hacia el occidente, zona residencial de Guadalupe." },
      { nombre: "Centro de Guadalupe", descripcion: "A 1.2 km hacia el oriente, centro comercial de Guadalupe." }
    ],
    practico_tips: [
      "Plaza Estrellas es punto de encuentro comunitario por las tardes",
      "Buena circulación de autobús local desde esta estación"
    ],
    mundial_relevancia: "Zona residencial-comercial de Guadalupe. Conexión hacia centro de Guadalupe."
  },
  {
    id: 33,
    nombre: "Revolución",
    slug: "revolucion",
    numero: 33,
    municipio: "Guadalupe",
    zona: "comercial",
    direccion: "Av. Revolución, Guadalupe",
    coordenadas: { lat: 25.1290, lng: 99.9420 },
    seo_title: "Estación Revolución - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Revolución en zona comercial de Guadalupe. Centro comercial importante con servicios.",
    h1: "Estación Revolución - Ecovía TransMetro",
    intro: "Estación en zona comercial importante de Guadalupe con acceso a tiendas, servicios y comercio diversificado.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro Comercial Revolución", distancia: "0.1 km", tipo: "Comercio" },
      { nombre: "Servicios Bancarios", distancia: "0.2 km", tipo: "Servicios Financieros" },
      { nombre: "Restaurante Comercial", distancia: "0.3 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Comercial Revolución", descripcion: "Centro comercial con tiendas departamentales, servicios bancarios y restaurantes." },
      { nombre: "Estrellas", descripcion: "A 1.5 km hacia el occidente, zona residencial-comercial de Guadalupe." },
      { nombre: "Centro de Guadalupe", descripcion: "A 1 km hacia el oriente, centro municipal de Guadalupe." }
    ],
    practico_tips: [
      "Centro comercial tiene horarios extendidos, abierto hasta las 21:00",
      "Servicios bancarios cierra a las 16:00 entre semana"
    ],
    mundial_relevancia: "Zona comercial importante de Guadalupe. Acceso a servicios diversificados de Guadalupe."
  },
  {
    id: 34,
    nombre: "Centro Guadalupe",
    slug: "centro-guadalupe",
    numero: 34,
    municipio: "Guadalupe",
    zona: "comercial",
    direccion: "Av. Centro esquina Revolución, Guadalupe",
    coordenadas: { lat: 25.1210, lng: 99.9280 },
    seo_title: "Estación Centro Guadalupe - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Centro Guadalupe, corazón comercial de Guadalupe. Servicios, comercio y punto central de la Ecovía.",
    h1: "Estación Centro Guadalupe - Ecovía TransMetro",
    intro: "Estación central de Guadalupe con acceso al corazón comercial del municipio, servicios diversificados y punto de referencia importante.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Zona Comercial Centro", distancia: "0.1 km", tipo: "Comercio" },
      { nombre: "Ayuntamiento de Guadalupe", distancia: "0.3 km", tipo: "Servicios Públicos" },
      { nombre: "Restaurantes Premium", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Comercial Centro Guadalupe", descripcion: "Corazón comercial de Guadalupe con tiendas principales, servicios y establecimientos premium." },
      { nombre: "Revolución", descripcion: "A 1 km hacia el occidente, zona comercial de Guadalupe." },
      { nombre: "Centro Industrial", descripcion: "A 1.5 km hacia el oriente, zona industrial de Guadalupe." }
    ],
    practico_tips: [
      "Centro comercial abierto hasta las 21:00 con servicios completos",
      "Mejor visitado de martes a viernes en horarios de mañana"
    ],
    mundial_relevancia: "Centro comercial y administrativo de Guadalupe. Punto central importante de la Ecovía."
  },
  {
    id: 35,
    nombre: "Parque Industrial",
    slug: "parque-industrial",
    numero: 35,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. Parque Industrial, Guadalupe",
    coordenadas: { lat: 25.1130, lng: 99.9140 },
    seo_title: "Estación Parque Industrial - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Parque Industrial de Guadalupe. Acceso a parques industriales y zona de manufactura de Guadalupe.",
    h1: "Estación Parque Industrial - Ecovía TransMetro",
    intro: "Estación de acceso a parques industriales de Guadalupe con servicios para trabajadores y empresas.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Parque Industrial Guadalupe", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Servicios para Empresas", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Comedor Industrial", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Parque Industrial Guadalupe", descripcion: "Parque industrial con plantas de manufactura, servicios técnicos y oficinas empresariales." },
      { nombre: "Centro Guadalupe", descripcion: "A 1.5 km hacia el occidente, centro comercial de Guadalupe." },
      { nombre: "Industrial Este", descripcion: "A 1.5 km hacia el oriente, continuación industrial de Guadalupe." }
    ],
    practico_tips: [
      "Muy concurrida en horarios de entrada (6-8 AM) y salida (16-18 horas)",
      "Comedor industrial ofrece desayunos y comidas económicas"
    ],
    mundial_relevancia: "Zona industrial importante de Guadalupe. Acceso a manufactura y servicios industriales."
  },
  {
    id: 36,
    nombre: "Industrial Este",
    slug: "industrial-este",
    numero: 36,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. Industrial Este, Guadalupe",
    coordenadas: { lat: 25.1050, lng: 99.9000 },
    seo_title: "Estación Industrial Este - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Industrial Este de Guadalupe. Acceso a zona industrial este de Guadalupe y servicios de manufactura.",
    h1: "Estación Industrial Este - Ecovía TransMetro",
    intro: "Estación en zona industrial este de Guadalupe con acceso a plantas de manufactura y servicios especializados.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas Manufactureras", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Servicios Técnicos Especializados", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Cafetería Industrial", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial Este", descripcion: "Área concentrada de plantas manufactureras y servicios técnicos de precisión." },
      { nombre: "Parque Industrial", descripcion: "A 1.5 km hacia el occidente, parque industrial principal de Guadalupe." },
      { nombre: "Industrial Sur", descripcion: "A 1.5 km hacia el oriente, continuación industrial sur." }
    ],
    practico_tips: [
      "Estación clave para trabajadores del sector manufacturero",
      "Horarios pico: 6-8 AM entrada, 16-18 horas salida"
    ],
    mundial_relevancia: "Zona industrial este de Guadalupe. Conexión industrial importante en la Ecovía."
  },
  {
    id: 37,
    nombre: "Industrial Sur",
    slug: "industrial-sur",
    numero: 37,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. Industrial Sur, Guadalupe",
    coordenadas: { lat: 25.0970, lng: 99.8860 },
    seo_title: "Estación Industrial Sur - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Industrial Sur de Guadalupe. Acceso a zona industrial sur y servicios especializados de manufactura.",
    h1: "Estación Industrial Sur - Ecovía TransMetro",
    intro: "Estación en zona industrial sur de Guadalupe con acceso a manufactura y servicios de transporte.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas Industriales", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Centro Logístico", distancia: "0.4 km", tipo: "Logística" },
      { nombre: "Comedor Transportista", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial Sur", descripcion: "Área industrial con plantas de manufactura y centros logísticos." },
      { nombre: "Industrial Este", descripcion: "A 1.5 km hacia el occidente, zona industrial este de Guadalupe." },
      { nombre: "Puerta Oriental", descripcion: "A 1.5 km hacia el oriente, zona logística terminal." }
    ],
    practico_tips: [
      "Centro logístico importante para trabajadores de transporte",
      "Comedor transportista es punto de encuentro laboral"
    ],
    mundial_relevancia: "Zona industrial sur de Guadalupe. Conexión logística importante."
  },
  {
    id: 38,
    nombre: "Puerta Oriental",
    slug: "puerta-oriental",
    numero: 38,
    municipio: "Guadalupe",
    zona: "industrial-transporte",
    direccion: "Av. Puerta Oriental, Guadalupe",
    coordenadas: { lat: 25.0890, lng: 99.8720 },
    seo_title: "Estación Puerta Oriental - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Puerta Oriental de Guadalupe. Acceso a servicios logísticos y transporte terminal de la Ecovía.",
    h1: "Estación Puerta Oriental - Ecovía TransMetro",
    intro: "Estación en zona industrial-transporte oriental de Guadalupe con servicios logísticos y de transporte.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Centro Logístico Puerta Oriental", distancia: "0.3 km", tipo: "Logística" },
      { nombre: "Servicios de Transporte", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Comedor Logístico", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Centro Logístico Puerta Oriental", descripcion: "Centro logístico terminal con almacenes, depósitos y servicios de distribución." },
      { nombre: "Industrial Sur", descripcion: "A 1.5 km hacia el occidente, zona industrial sur de Guadalupe." },
      { nombre: "Terminal Oriente", descripcion: "A 1.5 km hacia el oriente, terminal oriental final de la Ecovía." }
    ],
    practico_tips: [
      "Estación logística importante, mejor visitada en horarios laborales",
      "Servicios de transporte disponibles durante el día"
    ],
    mundial_relevancia: "Zona logística-transporte oriental de Guadalupe. Conexión hacia terminal oriente."
  },
  {
    id: 39,
    nombre: "San Isidro",
    slug: "san-isidro",
    numero: 39,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. San Isidro, Guadalupe",
    coordenadas: { lat: 25.0810, lng: 99.8580 },
    seo_title: "Estación San Isidro - Ecovía TransMetro Guadalupe",
    meta_description: "Estación San Isidro de Guadalupe. Acceso a zona industrial y servicios especializados.",
    h1: "Estación San Isidro - Ecovía TransMetro",
    intro: "Estación en zona industrial oriental de Guadalupe con acceso a manufactura y servicios especializados.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas Manufactureras", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Servicios Técnicos", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Comedor Industrial", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial San Isidro", descripcion: "Área industrial con plantas de manufactura diversificada." },
      { nombre: "Puerta Oriental", descripcion: "A 1.5 km hacia el occidente, zona logística de Guadalupe." },
      { nombre: "Terminal Oriente", descripcion: "A 1 km hacia el oriente, terminal oriental de la Ecovía." }
    ],
    practico_tips: [
      "Zona industrial activa en horarios laborales",
      "Servicios técnicos disponibles en horarios extendidos"
    ],
    mundial_relevancia: "Zona industrial oriental de Guadalupe. Conexión hacia terminal oriente de la Ecovía."
  },
  {
    id: 40,
    nombre: "Santa Ana",
    slug: "santa-ana",
    numero: 40,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. Santa Ana, Guadalupe",
    coordenadas: { lat: 25.0730, lng: 99.8440 },
    seo_title: "Estación Santa Ana - Ecovía TransMetro Guadalupe",
    meta_description: "Estación Santa Ana de Guadalupe. Acceso a zona industrial final de Guadalupe en la Ecovía.",
    h1: "Estación Santa Ana - Ecovía TransMetro",
    intro: "Estación en zona industrial final oriental de Guadalupe con acceso a manufactura y servicios.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas Industriales", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Servicios de Soporte", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Cafetería Industrial", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial Santa Ana", descripcion: "Área industrial con plantas de manufactura y servicios especializados." },
      { nombre: "San Isidro", descripcion: "A 1.5 km hacia el occidente, zona industrial de Guadalupe." },
      { nombre: "Terminal Oriente", descripcion: "A 1.5 km hacia el oriente, terminal oriental final de la Ecovía." }
    ],
    practico_tips: [
      "Última zona industrial antes de terminal, activa en horarios laborales",
      "Servicios disponibles principalmente 6-18 horas"
    ],
    mundial_relevancia: "Zona industrial final oriental de Guadalupe. Conexión hacia terminal oriente."
  },
  {
    id: 41,
    nombre: "Oriente",
    slug: "oriente",
    numero: 41,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. Oriente, Guadalupe",
    coordenadas: { lat: 25.0650, lng: 99.8300 },
    seo_title: "Estación Oriente - Ecovía TransMetro Guadalupe Terminal",
    meta_description: "Estación Oriente de Guadalupe. Penúltima estación de la Ecovía TransMetro en zona industrial.",
    h1: "Estación Oriente - Ecovía TransMetro",
    intro: "Estación penúltima de la Ecovía en zona industrial oriental de Guadalupe con acceso a manufactura.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: false,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Plantas de Manufactura", distancia: "0.3 km", tipo: "Industrial" },
      { nombre: "Centro de Servicios", distancia: "0.4 km", tipo: "Servicios" },
      { nombre: "Comedor Laboral", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Zona Industrial Oriente", descripcion: "Área industrial con plantas manufactureras de diversos sectores." },
      { nombre: "Santa Ana", descripcion: "A 1.5 km hacia el occidente, zona industrial de Guadalupe." },
      { nombre: "Terminal Oriente", descripcion: "A 1 km hacia el oriente, terminal oriental final de la Ecovía." }
    ],
    practico_tips: [
      "Penúltima estación antes de terminal, acceso industrial importante",
      "Servicios disponibles en horarios laborales estándar"
    ],
    mundial_relevancia: "Zona industrial oriental de Guadalupe. Conexión final hacia terminal oriente."
  },
  {
    id: 42,
    nombre: "Terminal Oriente",
    slug: "terminal-oriente",
    numero: 42,
    municipio: "Guadalupe",
    zona: "industrial",
    direccion: "Av. Terminal Oriente, Guadalupe",
    coordenadas: { lat: 25.0570, lng: 99.8160 },
    seo_title: "Estación Terminal Oriente - Ecovía TransMetro Terminal Final",
    meta_description: "Estación Terminal Oriente, terminal oriental final de la Ecovía TransMetro. Última estación de la línea BRT.",
    h1: "Estación Terminal Oriente - Ecovía TransMetro Terminal Final",
    intro: "Terminal oriental final de la Ecovía TransMetro. Estación 42 con acceso a servicios finales y punto de conexión con transporte local.",
    horario: {
      lunes_viernes: "04:00-00:00",
      sabado: "05:00-23:30",
      domingo: "05:30-23:00"
    },
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      estacionamiento: true
    },
    transferencias: [],
    pois: [
      { nombre: "Terminal Oriente", distancia: "0.1 km", tipo: "Transporte" },
      { nombre: "Servicios Terminales", distancia: "0.2 km", tipo: "Servicios" },
      { nombre: "Cafetería Terminal", distancia: "0.2 km", tipo: "Gastronomía" }
    ],
    lugares_cercanos: [
      { nombre: "Terminal Oriente", descripcion: "Terminal final con servicios de transporte, conexión con rutas de autobús y distribución de pasajeros." },
      { nombre: "Oriente", descripcion: "A 1 km hacia el occidente, última zona industrial de la Ecovía." },
      { nombre: "Área Industrial Este", descripcion: "A 1 km hacia el sur, continuación de zona industrial de Guadalupe." }
    ],
    practico_tips: [
      "Terminal con servicios completos: cafetería, sanitarios y información",
      "Punto final de la Ecovía; conexión con autobuses locales y regionales"
    ],
    mundial_relevancia: "Terminal oriental final de la Ecovía TransMetro. Estación 42, punto terminal este de la línea BRT Monterrey-Guadalupe. Conexión con transporte regional."
  }
];
