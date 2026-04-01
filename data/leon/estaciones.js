export const estacionesLeon = [
  {
    slug: "capu-leon",
    nombre: "CAPÚ León",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Central Camionera de León", tipo: "transporte", distancia: "3 min caminando" },
      { nombre: "Conexión a Guanajuato (40 min)", tipo: "transporte", distancia: "en terminal" },
      { nombre: "Tiendas y cafeterías", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "CAPÚ León — Sistema Optibus SIT | MetroGuia",
    meta_description: "Central Camionera de León. Puerta de entrada a la ciudad del calzado. Conexión a Guanajuato UNESCO en 40 minutos.",
    h1: "CAPÚ León — Hub de Transporte",
    intro: "Principal estación de transporte de León con conexiones a toda la región del Bajío. Punto de partida para explorar la ciudad capital mundial del calzado artesanal.",
    tips: ["Conexión directa a Guanajuato en 40 min", "Servicios bancarios y cajeros", "Tiendas de souvenirs", "Información turística disponible", "Estacionamiento vigilado"],
    mejor_horario: "Mañana temprano para autobuses",
    mundial_relevancia: "Acceso a UNESCO Guanajuato y la Ruta del Bajío Colonial",
    descripcion_turistica: "CAPÚ León es la principal puerta de entrada a la ciudad del calzado, ofreciendo conexiones directas a destinos turísticos como Guanajuato (Patrimonio UNESCO) y otros pueblos mágicos del Bajío. Desde aquí comenzarán tu viaje por la región más colonial y artesanal de México. La terminal cuenta con información turística oficial, tiendas de artesanías locales y conexión directa al sistema de transporte urbano de León.",
    lugares_cercanos: [
      { nombre: "Fábrica de Cerámica Talavera San Ildefonso", tipo: "artesanía", distancia: "2.5 km", descripcion: "Taller tradicional de cerámica de Talavera con técnicas coloniales, tienda y exposición" },
      { nombre: "Parque Metropolitano de León", tipo: "parque", distancia: "3 km", descripcion: "Área verde urbana con lagos, ciclovía, áreas de picnic y zona de juegos infantiles" },
      { nombre: "Zona Piel (tiendas mayoristas)", tipo: "comercio", distancia: "4 km", descripcion: "Mercado de calzado artesanal con cientos de tiendas de zapatos hechos a mano" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Operado por Optibús (SIT). Autobuses de larga distancia según horarios de empresas concesionarias." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Terminal completamente accesible con rampas, elevadores, baños adaptados y asistencia personal disponible" }
  },
  {
    slug: "plaza-mayor",
    nombre: "Plaza Mayor",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Plaza Mayor Shopping", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Restaurantes y cafeterías", tipo: "alimento", distancia: "2 min" },
      { nombre: "Tiendas de moda", tipo: "comercio", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Parada Plaza Mayor — Sistema Optibus SIT León | MetroGuia",
    meta_description: "Plaza Mayor de León. Centro comercial moderno con tiendas, restaurantes y entretenimiento.",
    h1: "Plaza Mayor — Centro Comercial",
    intro: "Estación de acceso a la principal plaza comercial de León con tiendas nacionales e internacionales, restaurantes y entretenimiento.",
    tips: ["Centro comercial moderno", "Restaurantes variados", "Tiendas de marcas conocidas", "Cine y entretenimiento", "Estacionamiento amplio"],
    mejor_horario: "Tarde para compras",
    mundial_relevancia: "Centro urbano moderno de la ciudad",
    descripcion_turistica: "Estación de acceso directo a Plaza Mayor, el centro comercial más importante de León con más de 200 establecimientos. Aquí encontrarás desde marcas internacionales hasta gastronomía diversa, entretenimiento familiar y servicios modernos. Es el corazón del comercio urbano donde locales y turistas convergen para comprar, comer y divertirse en un ambiente completamente seguro.",
    lugares_cercanos: [
      { nombre: "Plaza Mayor Shopping", tipo: "comercio", distancia: "0.2 km", descripcion: "Centro comercial de 2 pisos con tiendas, cines, restaurantes y entretenimiento" },
      { nombre: "Banco Bicentenario", tipo: "servicios", distancia: "0.3 km", descripcion: "Servicios financieros, cajeros y cambio de divisas disponibles" },
      { nombre: "Restaurante La Antigua", tipo: "alimento", distancia: "0.4 km", descripcion: "Gastronomía tradicional leonesa en ambiente colonial" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Servicio continuo todos los días con frecuencias altas durante horas de comercio (10:00-20:00)" },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Estación y plaza comercial completamente accesibles con rampas, elevadores y servicios adaptados" }
  },
  {
    slug: "zona-centro-leon",
    nombre: "Centro Histórico",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "historico-turistico",
    pois: [
      { nombre: "Catedral Basílica de León", tipo: "monumento", distancia: "4 min caminando" },
      { nombre: "Plaza de los Mártires", tipo: "plaza", distancia: "3 min" },
      { nombre: "Calle Real de Comerciantes", tipo: "comercio", distancia: "2 min" },
      { nombre: "Museos coloniales", tipo: "cultura", distancia: "5 min" }
    ],
    transferencias: [],
    seo_title: "Centro Histórico León — Catedral Basílica | MetroGuia",
    meta_description: "Centro Histórico de León. Visita la Catedral Basílica y descubre la arquitectura colonial del Bajío.",
    h1: "Centro Histórico — Catedral Basílica",
    intro: "Corazón histórico de León con acceso a la majestuosa Catedral Basílica y arquitectura colonial del siglo XVIII.",
    tips: ["Catedral Basílica imprescindible", "Plaza de los Mártires para descansar", "Arquitectura colonial bien conservada", "Gastronomía típica del Bajío", "Mejor visitar mañana temprano"],
    mejor_horario: "Mañana para visitar templos",
    mundial_relevancia: "Patrimonio arquitectónico del Bajío Colonial",
    descripcion_turistica: "El Centro Histórico de León es el alma colonial de la ciudad, donde siglos de historia convergen en calles empedradas, plazas majestuosas y arquitectura barroca excepcional. La Catedral Basílica es el corazón espiritual, rodeada de museos, galerías de arte y tiendas artesanales. Perfecto para caminar, fotografiar y sumergirse en la cultura mexicana más auténtica.",
    lugares_cercanos: [
      { nombre: "Catedral Basílica de León", tipo: "monumento", distancia: "0.3 km", descripcion: "Joya barroca del siglo XVIII con arquitectura interior extraordinaria y misas diarias" },
      { nombre: "Museo de los Concilios y la Cultura Leonesa", tipo: "museo", distancia: "0.4 km", descripcion: "Museo en casa histórica colonial con colecciones de arte religioso y etnografía leonesa" },
      { nombre: "Plaza de los Mártires", tipo: "plaza", distancia: "0.2 km", descripcion: "Espacio público histórico con fuente monumental, bancas y ambiente tradicional" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Centro operativo constantemente. Museos y templos: verificar horarios específicos (mayoría cierran 18:00)" },
    accesibilidad: { silla_ruedas: false, elevadores: false, rampas: true, banos_accesibles: false, notas: "Centro histórico con calles empedradas dificulta silla de ruedas. Plaza de los Mártires tiene rampas de acceso pero no todos los edificios son accesibles." }
  },
  {
    slug: "plaza-de-los-martires",
    nombre: "Plaza de los Mártires",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "historico-turistico",
    pois: [
      { nombre: "Plaza de los Mártires", tipo: "plaza", distancia: "1 min caminando" },
      { nombre: "Fuente monumental", tipo: "monumento", distancia: "2 min" },
      { nombre: "Galerías de arte", tipo: "cultura", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Plaza de los Mártires — León | MetroGuia",
    meta_description: "Plaza de los Mártires de León. Espacio público histórico con fuente monumental y arte local.",
    h1: "Plaza de los Mártires — Espacio Público Histórico",
    intro: "Plaza emblemática de León con fuente monumental y vistas al Centro Histórico. Espacio perfecto para descansar y disfrutar del ambiente.",
    tips: ["Fuente monumental icónica", "Área para descansar", "Vendedores de artesanías", "Eventos culturales frecuentes", "Segura y bien mantenida"],
    mejor_horario: "Tarde para fotografía",
    mundial_relevancia: "Símbolo de la identidad leonesa",
    descripcion_turistica: "La Plaza de los Mártires es el corazón cívico de León, un espacio público vibrante rodeado de historia. Su fuente monumental es el símbolo más reconocible de la ciudad, perfecta para descansar, fotografiar o simplemente observar la vida leonesa. Lugar de encuentro para eventos culturales, conciertos y manifestaciones ciudadanas que reflejan la identidad local.",
    lugares_cercanos: [
      { nombre: "Catedral Basílica (vista directa)", tipo: "monumento", distancia: "0.2 km", descripcion: "Vista frontal de la Catedral desde la plaza, ideal para fotografía arquitectónica" },
      { nombre: "Galería de Arte Contemporáneo", tipo: "cultura", distancia: "0.3 km", descripcion: "Exposiciones de artistas locales y proyectos culturales temporales" },
      { nombre: "Tiendas de Artesanía Local", tipo: "comercio", distancia: "0.2 km", descripcion: "Vendedores autorizados con cerámica, textiles y arte local" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Plaza de acceso público 24 horas. Estación de transporte operativa según horario SIT." },
    accesibilidad: { silla_ruedas: true, elevadores: false, rampas: true, banos_accesibles: false, notas: "Plaza accesible con rampas, piso plano, pero sin baños públicos adaptados. Área comercial adyacente tiene servicios." }
  },
  {
    slug: "catedral-basilica",
    nombre: "Catedral Basílica",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "religioso",
    pois: [
      { nombre: "Catedral Basílica de León", tipo: "monumento", distancia: "2 min caminando" },
      { nombre: "Santuario interior", tipo: "religioso", distancia: "2 min" },
      { nombre: "Tiendas religiosas", tipo: "comercio", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Catedral Basílica de León — Monumento Nacional | MetroGuia",
    meta_description: "Catedral Basílica de León. Patrimonio religioso del Bajío con arquitectura barroca impresionante.",
    h1: "Catedral Basílica — Monumento Nacional",
    intro: "La Catedral Basílica de León es una joya arquitectónica barroca de México. Monumento nacional con interior espectacular y fachada neoclásica.",
    tips: ["Arquitectura barroca impresionante", "Interior muy ornamentado", "Misas en horarios regulares", "Acceso gratuito", "Respetar horarios de culto"],
    mejor_horario: "Mañana para buena luz",
    mundial_relevancia: "Patrimonio arquitectónico mexicano",
    descripcion_turistica: "La Catedral Basílica Metropolitana de León es uno de los monumentos más importantes del Bajío mexicano, con una arquitectura barroca interior de gran ornamentación y una fachada neoclásica imponente. Construida durante tres siglos, representa la fe y la identidad religiosa de León. Su interior, con altares dorados, retablos y vitrales, es imprescindible para cualquier visitante interesado en arquitectura religiosa colonial mexicana.",
    lugares_cercanos: [
      { nombre: "Museo Artesanal de la Catedral", tipo: "museo", distancia: "0.1 km", descripcion: "Pequeño museo con arte religioso y artefactos de la catedral" },
      { nombre: "Plaza de los Mártires", tipo: "plaza", distancia: "0.2 km", descripcion: "Espacio público adyacente con vistas panorámicas de la fachada catedralicia" },
      { nombre: "Tienda de Libros Religiosos", tipo: "comercio", distancia: "0.15 km", descripcion: "Venta de libros, iconografía y artículos religiosos" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Catedral abierta 7:00-19:00 aprox. Misas a horarios específicos. Estación SIT operativa según horarios." },
    accesibilidad: { silla_ruedas: true, elevadores: false, rampas: true, banos_accesibles: true, descripcion: "Catedral con acceso por rampa frontal, piso interior de mármol plano, baño adaptado lateral. Algunas escaleras interiores sin rampa." }
  },
  {
    slug: "la-calzada",
    nombre: "La Calzada",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "residencial-comercial",
    pois: [
      { nombre: "Zona residencial La Calzada", tipo: "servicios", distancia: "2 min caminando" },
      { nombre: "Tiendas locales", tipo: "comercio", distancia: "2 min" },
      { nombre: "Restaurantes tradicionales", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "La Calzada — León | MetroGuia",
    meta_description: "La Calzada de León. Zona residencial con comercios y gastronomía tradicional.",
    h1: "La Calzada — Zona Residencial",
    intro: "Barrio residencial tradicional de León con tiendas locales, restaurantes de comida típica y ambiente familiar.",
    tips: ["Gastronomía local auténtica", "Tiendas de barrio", "Ambiente tranquilo", "Comercios variados", "Conexión rápida"],
    mejor_horario: "Tarde y noche",
    mundial_relevancia: "Vida cotidiana leonesa",
    descripcion_turistica: "La Calzada es el barrio tradicional donde viven los leoneses, un área residencial con auténticas tiendas locales, mercados tradicionales y restaurants de comida leonesa casera. Aquí experimentarás la vida cotidiana de la ciudad lejos del turismo, con panaderias tradicionales, tiendas de abarrotes familiares y una atmósfera genuinamente mexicana. Ideal para conocer cómo viven los locales.",
    lugares_cercanos: [
      { nombre: "Mercado Tradicional La Calzada", tipo: "comercio", distancia: "0.5 km", descripcion: "Mercado público con frutas, verduras, carnes y productos regionales" },
      { nombre: "Panadería Don Luis", tipo: "alimento", distancia: "0.3 km", descripcion: "Panadería tradicional con pan de muerto, roscas y especialidades locales" },
      { nombre: "Restaurante La Familia", tipo: "alimento", distancia: "0.4 km", descripcion: "Cocina leonesa casera con carnitas, enchiladas y platillos típicos" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Zona residencial activa todo el día. Tiendas locales abren 8:00-20:00. Estación operativa según horarios SIT." },
    accesibilidad: { silla_ruedas: true, elevadores: false, rampas: true, banos_accesibles: false, notas: "Barrio tradicional con calles niveladas. Rampas en tiendas principales. Infraestructura básica de acceso pero sin baños públicos adaptados." }
  },
  {
    slug: "estadio-leon",
    nombre: "Estadio León",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "deportivo",
    pois: [
      { nombre: "Estadio León (Estación de Bomberos)", tipo: "deporte", distancia: "5 min caminando" },
      { nombre: "Área deportiva", tipo: "deporte", distancia: "3 min" },
      { nombre: "Tiendas deportivas", tipo: "comercio", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Estadio León — Centro Deportivo | MetroGuia",
    meta_description: "Estadio León. Centro deportivo moderno con eventos de fútbol y entretenimiento.",
    h1: "Estadio León — Centro Deportivo",
    intro: "Acceso al Estadio León, hogar de los Pumas de León. Centro deportivo con eventos de fútbol profesional y entretenimiento.",
    tips: ["Estadio de fútbol profesional", "Eventos variados", "Estacionamiento disponible", "Restaurantes cercanos", "Días de partido verificar"],
    mejor_horario: "Días de partido",
    mundial_relevancia: "Deporte profesional mexicano",
    descripcion_turistica: "El Estadio de León es el corazón del deporte profesional de la ciudad, hogar de los legendarios Pumas. Con capacidad para más de 30,000 aficionados, este moderno estadio es escenario de emocionantes partidos de fútbol, conciertos y eventos especiales. Incluso sin partido, el ambiente alrededor es vibrante, lleno de tiendas deportivas, bares y la energía de una ciudad apasionada por el fútbol.",
    lugares_cercanos: [
      { nombre: "Tienda Oficial Pumas de León", tipo: "comercio", distancia: "0.4 km", descripcion: "Tienda oficial con jerseys, souvenirs y mercancía de los Pumas" },
      { nombre: "Restaurante Bar León", tipo: "alimento", distancia: "0.5 km", descripcion: "Bar deportivo con pantallas para ver partidos y comida típica" },
      { nombre: "Clínica del Deporte", tipo: "salud", distancia: "0.6 km", descripcion: "Centro de atención médica especializado en lesiones deportivas" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Estación activa especialmente los días de partido (frecuencias aumentan). Estadio abierto con tours en horarios específicos." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Estadio completamente accesible con rampas, elevadores, áreas dedicadas para silla de ruedas y baños adaptados." }
  },
  {
    slug: "blvd-adolfo-lopez-mateos",
    nombre: "Blvd. A.L.M.",
    linea: "Verde",
    municipio: "León",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Boulevard Adolfo López Mateos", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Tiendas departamentales", tipo: "comercio", distancia: "2 min" },
      { nombre: "Restaurantes", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Blvd. Adolfo López Mateos — Comercio León | MetroGuia",
    meta_description: "Boulevard Adolfo López Mateos. Principal eje comercial de León con tiendas y gastronomía.",
    h1: "Blvd. A.L.M. — Eje Comercial",
    intro: "Principal boulevard comercial de León con tiendas departamentales, restaurantes y servicios variados.",
    tips: ["Tiendas departamentales", "Comercios variados", "Restaurantes múltiples", "Zona bien iluminada", "Zona segura"],
    mejor_horario: "Día",
    mundial_relevancia: "Centro comercial de León",
    descripcion_turistica: "El Boulevard Adolfo López Mateos es la avenida comercial principal de León, un eje dinámico donde convergen tiendas departamentales de prestigio, restaurantes nacionales, cines, y servicios diversos. Es el lugar perfecto para compras, entretenimiento y gastronomía, con una infraestructura moderna bien mantenida. La avenida está siempre activa con intenso movimiento comercial y es segura durante el día y la noche.",
    lugares_cercanos: [
      { nombre: "Tienda Departamental Liverpool", tipo: "comercio", distancia: "0.3 km", descripcion: "Tienda de departamentos con ropa, electrónica y hogar" },
      { nombre: "Cine Cinépolis", tipo: "entretenimiento", distancia: "0.4 km", descripcion: "Complejo de cines con películas actuales y opciones gastronómicas" },
      { nombre: "Restaurante Chain El Rinconote", tipo: "alimento", distancia: "0.2 km", descripcion: "Restaurante con cocina mexicana contemporánea" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Boulevard comercial con horas pico 12:00-14:00 y 18:00-20:00. Tiendas abren 10:00-21:00 aprox." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Boulevard completamente accesible con aceras planas, rampas, tiendas con acceso sin escaleras y servicios adaptados." }
  },
  {
    slug: "terminal-central-leon",
    nombre: "Terminal Central",
    linea: "Azul",
    municipio: "León",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal de Autobuses Central", tipo: "transporte", distancia: "3 min caminando" },
      { nombre: "Conexiones regionales", tipo: "transporte", distancia: "en terminal" },
      { nombre: "Servicios bancarios", tipo: "servicios", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Terminal Central León — Autobuses | MetroGuia",
    meta_description: "Terminal Central de León. Conexiones a destinos regionales del Bajío.",
    h1: "Terminal Central — Hub Regional",
    intro: "Terminal central de autobuses de León con conexiones a Guanajuato, Dolores Hidalgo y otras ciudades del Bajío.",
    tips: ["Conexión a Guanajuato UNESCO", "Servicios completos", "Información turística", "Cafeterías", "Seguridad 24 horas"],
    mejor_horario: "Según horarios de autobuses",
    mundial_relevancia: "Puerta al Bajío Colonial UNESCO",
    descripcion_turistica: "La Terminal Central de León es el hub de transporte terrestre de la región, conectando la ciudad con Guanajuato (Patrimonio UNESCO), Dolores Hidalgo, San Miguel de Allende y otros pueblos mágicos. Es el punto de partida ideal para explorar la ruta colonial del Bajío. La terminal moderna ofrece servicios integrales, información turística y conexiones frecuentes a los destinos más importantes de la región.",
    lugares_cercanos: [
      { nombre: "Información Turística Regional", tipo: "servicios", distancia: "0.2 km", descripcion: "Centro oficial de información con mapas, folletos y recomendaciones" },
      { nombre: "Hotel Terminal Inn", tipo: "hospedaje", distancia: "0.3 km", descripcion: "Hotel de paso para viajeros con tarifas accesibles" },
      { nombre: "Restaurante de la Terminal", tipo: "alimento", distancia: "0.1 km", descripcion: "Comida rápida y regional para pasajeros" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Terminal operativa 24 horas. Estación SIT según horarios. Autobuses de larga distancia según empresas concesionarias." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Terminal completamente accesible con todas las comodidades. Asistencia personal disponible para pasajeros con movilidad reducida." }
  },
  {
    slug: "delta-leon",
    nombre: "Delta León",
    linea: "Azul",
    municipio: "León",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Centro Comercial Delta", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Tiendas especializadas", tipo: "comercio", distancia: "2 min" },
      { nombre: "Gastronomía variada", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Delta León — Centro Comercial | MetroGuia",
    meta_description: "Centro Comercial Delta de León. Tiendas, restaurantes y entretenimiento.",
    h1: "Delta León — Centro Comercial Moderno",
    intro: "Centro comercial moderno con tiendas especializadas, restaurantes internacionales y entretenimiento.",
    tips: ["Centro comercial moderno", "Tiendas variadas", "Cine y entretenimiento", "Estacionamiento", "Zona segura"],
    mejor_horario: "Tarde-noche",
    mundial_relevancia: "Modernidad urbana leonesa",
    descripcion_turistica: "Delta León es uno de los centros comerciales más modernos de la ciudad, con un ambiente climatizado perfecto para comprar, comer y entretenerse sin importar el clima. Ofrece tiendas especializadas, restaurantes internacionales de calidad, cine moderno y zona de juegos para familias. Es el lugar ideal para una tarde de compras o entretenimiento en un ambiente cosmopolita.",
    lugares_cercanos: [
      { nombre: "Cine Cinemex", tipo: "entretenimiento", distancia: "0.2 km", descripcion: "Complejo de cines con películas en cartelera y opciones IMAX" },
      { nombre: "Restaurante Vips", tipo: "alimento", distancia: "0.2 km", descripcion: "Restaurante con desayunos, comidas y cenas en ambiente familiar" },
      { nombre: "Tienda Office Depot", tipo: "comercio", distancia: "0.2 km", descripcion: "Artículos de papelería, tecnología y oficina" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Centro comercial con horarios extendidos 10:00-21:00. Estación SIT operativa con frecuencias mayores en tarde y noche." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Centro completamente accesible con estacionamiento adaptado, elevadores modernos, baños multifamiliares y asistencia disponible." }
  },
  {
    slug: "gran-plaza-leon",
    nombre: "Gran Plaza León",
    linea: "Azul",
    municipio: "León",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Gran Plaza Comercial", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Zona de tiendas", tipo: "comercio", distancia: "2 min" },
      { nombre: "Restaurantes", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Gran Plaza León — Compras | MetroGuia",
    meta_description: "Gran Plaza de León. Centro comercial con múltiples marcas y servicios.",
    h1: "Gran Plaza — Zona de Compras",
    intro: "Amplia plaza comercial con tiendas de múltiples marcas, restaurantes y servicios integrados.",
    tips: ["Variedad de tiendas", "Restaurantes múltiples", "Estacionamiento amplio", "Zona segura", "Abierto todos los días"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Centro de consumo moderno",
    descripcion_turistica: "Gran Plaza León es un extenso centro comercial con una variedad impresionante de tiendas, desde marcas internacionales hasta comercios locales, todo integrado en un espacio moderno y seguro. Con restaurantes de múltiples cocinas, estacionamiento amplio y áreas de entretenimiento, es el destino perfecto para una jornada completa de compras y gastronomía en un ambiente familiar.",
    lugares_cercanos: [
      { nombre: "Tienda Walmart", tipo: "comercio", distancia: "0.2 km", descripcion: "Supermercado con ropa, electrónica, alimentos y más" },
      { nombre: "Restaurante Applebee's", tipo: "alimento", distancia: "0.3 km", descripcion: "Cocina americana casual con ambiente familiar" },
      { nombre: "Perfumería Sephora", tipo: "comercio", distancia: "0.2 km", descripcion: "Cosméticos y perfumería de marcas internacionales" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Plaza abierta 10:00-21:00 aproximadamente. Estación SIT operativa con frecuencias altas en fin de semana." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Plaza comercial completamente accesible con estacionamiento reservado, elevadores de amplio acceso y servicios adaptados en tiendas principales." }
  },
  {
    slug: "plaza-toros-leon",
    nombre: "Plaza de Toros",
    linea: "Azul",
    municipio: "León",
    tipo_zona: "cultural",
    pois: [
      { nombre: "Plaza de Toros León", tipo: "cultura", distancia: "4 min caminando" },
      { nombre: "Eventos culturales", tipo: "cultura", distancia: "3 min" },
      { nombre: "Restaurantes cercanos", tipo: "alimento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Plaza de Toros — Cultura y Eventos León | MetroGuia",
    meta_description: "Plaza de Toros de León. Sitio de eventos culturales y espectáculos.",
    h1: "Plaza de Toros — Centro Cultural",
    intro: "Plaza de Toros histórica de León que alberga eventos culturales, espectáculos y conciertos.",
    tips: ["Eventos variados", "Capacidad para miles", "Estacionamiento disponible", "Gastronomía local", "Verificar calendario de eventos"],
    mejor_horario: "Días con eventos",
    mundial_relevancia: "Patrimonio cultural leonés",
    descripcion_turistica: "La histórica Plaza de Toros de León es mucho más que un sitio tradicional: es un center cultural dinámico que acoge espectáculos variados, conciertos de artistas nacionales e internacionales, eventos deportivos y ferias culturales. Su arquitectura clásica combina con una programación moderna. Es el lugar donde la ciudad se reúne para celebrar, disfrutar y vivir la cultura en su máxima expresión.",
    lugares_cercanos: [
      { nombre: "Restaurante El Toro Bravo", tipo: "alimento", distancia: "0.3 km", descripcion: "Restaurante especializado en carnes y gastronomía tradicional" },
      { nombre: "Tienda de Boletos Ticketmaster", tipo: "servicios", distancia: "0.4 km", descripcion: "Centro autorizado para compra de boletos a eventos" },
      { nombre: "Hotel Plaza Toros", tipo: "hospedaje", distancia: "0.2 km", descripcion: "Hotel cercano para visitantes de eventos especiales" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Estación operativa según calendario de eventos. Incremento de frecuencias en días con espectáculos. Verificar programación." },
    accesibilidad: { silla_ruedas: true, elevadores: false, rampas: true, banos_accesibles: true, notas: "Plaza de Toros accesible en áreas de evento con rampas y servicios adaptados. Algunas secciones antiguas sin acceso elevador." }
  },
  {
    slug: "hospital-imss-bajio",
    nombre: "Hospital IMSS Bajío",
    linea: "Azul",
    municipio: "León",
    tipo_zona: "servicios",
    pois: [
      { nombre: "Hospital IMSS Bajío", tipo: "salud", distancia: "3 min caminando" },
      { nombre: "Farmácias", tipo: "salud", distancia: "2 min" },
      { nombre: "Servicios médicos", tipo: "salud", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Hospital IMSS Bajío — Servicios de Salud | MetroGuia",
    meta_description: "Hospital IMSS Bajío de León. Principales servicios de salud.",
    h1: "Hospital IMSS Bajío — Centro de Salud",
    intro: "Principal hospital de León con servicios de salud completos y especialidades médicas.",
    tips: ["Servicios médicos 24 horas", "Especialidades variadas", "Farmácia en hospital", "Estacionamiento", "Citas por teléfono"],
    mejor_horario: "Según citas",
    mundial_relevancia: "Servicios de salud de León",
    descripcion_turistica: "El Hospital IMSS Bajío es la principal institución de salud de León, especializado en atención médica de calidad con servicios 24/7 y múltiples especialidades. Cuenta con infraestructura moderna, equipo diagnóstico avanzado, farmacia institucional y acceso rápido. Aunque es principalmente para derechohabientes IMSS, atiende urgencias y cuenta con servicios privados complementarios.",
    lugares_cercanos: [
      { nombre: "Farmacia del Ahorro", tipo: "salud", distancia: "0.5 km", descripcion: "Farmacia con medicinas, productos de salud y servicios médicos" },
      { nombre: "Clínica Privada Dr. López", tipo: "salud", distancia: "0.4 km", descripcion: "Clínica privada con consultas y servicios médicos diversos" },
      { nombre: "Laboratorio Clínico", tipo: "salud", distancia: "0.3 km", descripcion: "Análisis clínicos y estudios de laboratorio acreditados" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Hospital operativo 24 horas. Estación SIT con frecuencias regulares, mayores en horario médico (8:00-18:00)." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Hospital completamente accesible con estacionamiento médico reservado, elevadores amplios, áreas de espera adaptadas y servicios para movilidad reducida." }
  },
  {
    slug: "universidad-campus-leon",
    nombre: "Universidad Campus",
    linea: "Azul",
    municipio: "León",
    tipo_zona: "educativo",
    pois: [
      { nombre: "Campus Universitario", tipo: "educación", distancia: "5 min caminando" },
      { nombre: "Biblioteca", tipo: "educación", distancia: "4 min" },
      { nombre: "Cafeterías", tipo: "alimento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Campus Universitario — Educación León | MetroGuia",
    meta_description: "Campus Universitario de León. Principal centro educativo de la ciudad.",
    h1: "Campus Universitario — Centro de Educación",
    intro: "Campus universitario moderno con infraestructura educativa, bibliotecas y espacios deportivos.",
    tips: ["Campus bien equipado", "Biblioteca moderna", "Espacios deportivos", "Cafeterías", "Busses frecuentes"],
    mejor_horario: "Horario escolar",
    mundial_relevancia: "Educación superior en León",
    descripcion_turistica: "El Campus Universitario de León es el corazón de la educación superior de la ciudad, un espacio moderno donde conviven estudiantes, investigadores y docentes. Ofrece instalaciones de clase mundial, bibliotecas digitales, laboratorios especializados, centros deportivos y cafeterías. Es un núcleo de desarrollo intelectual donde se forman profesionales que impulsan el crecimiento de León y la región.",
    lugares_cercanos: [
      { nombre: "Biblioteca Central del Campus", tipo: "educación", distancia: "0.3 km", descripcion: "Biblioteca moderna con acervo digital y espacios de estudio" },
      { nombre: "Cafetería Universitaria", tipo: "alimento", distancia: "0.2 km", descripcion: "Alimentos a precios estudiantiles con variedad culinaria" },
      { nombre: "Centro de Deportes y Recreación", tipo: "deporte", distancia: "0.4 km", descripcion: "Instalaciones deportivas con canchas, gimnasio y piscina" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Campus activo 7:00-20:00 principalmente. Estación SIT con frecuencias máximas en horario escolar (8:00-18:00) y reducidas fines de semana." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Campus completamente accesible con áreas de estacionamiento reservado, elevadores en todos los edificios, rampas generalizadas y servicios adaptados." }
  },
  {
    slug: "expo-leon",
    nombre: "Expo León",
    linea: "Naranja",
    municipio: "León",
    tipo_zona: "comercial-eventos",
    pois: [
      { nombre: "Centro de Exposiciones Expo León", tipo: "eventos", distancia: "3 min caminando" },
      { nombre: "Eventos y ferias", tipo: "eventos", distancia: "2 min" },
      { nombre: "Restaurantes y servicios", tipo: "alimento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Expo León — Centro de Eventos | MetroGuia",
    meta_description: "Expo León. Centro de convenciones y exposiciones de la región.",
    h1: "Expo León — Centro de Convenciones",
    intro: "Centro de exposiciones y convenciones Expo León con eventos comerciales, ferias y espectáculos.",
    tips: ["Eventos variados todo el año", "Estacionamiento amplio", "Restaurantes y cafés", "Infraestructura moderna", "Verificar calendario"],
    mejor_horario: "Días con eventos",
    mundial_relevancia: "Centro de negocios del Bajío",
    descripcion_turistica: "Expo León es el principal centro de convenciones y exposiciones de la región, acogiendo ferias comerciales de calzado y cuero (principal industria leonesa), eventos empresariales, exposiciones culturales y conciertos. Su infraestructura de clase mundial con espacios amplios, estacionamiento generoso y servicios integrales lo posicionan como epicentro de negocios y entretenimiento del Bajío.",
    lugares_cercanos: [
      { nombre: "Hotel Best Western Plus", tipo: "hospedaje", distancia: "0.3 km", descripcion: "Hotel moderno especializado en huéspedes de eventos y convenciones" },
      { nombre: "Restaurante Internacional", tipo: "alimento", distancia: "0.2 km", descripcion: "Cocina internacional dentro del centro de eventos" },
      { nombre: "Salas de Juntas Expo", tipo: "servicios", distancia: "0.1 km", descripcion: "Salas alquilables para reuniones empresariales y conferencias" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Operaciones según calendario de eventos. Frecuencias aumentadas los días de ferias y exposiciones. Verificar programación." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Centro de eventos completamente accesible con estacionamiento reservado amplio, elevadores, servicios adaptados y asistencia para personas con discapacidad." }
  },
  {
    slug: "poliforum-leon",
    nombre: "Polifórum",
    linea: "Naranja",
    municipio: "León",
    tipo_zona: "entretenimiento",
    pois: [
      { nombre: "Polifórum de León", tipo: "entretenimiento", distancia: "2 min caminando" },
      { nombre: "Conciertos y espectáculos", tipo: "entretenimiento", distancia: "2 min" },
      { nombre: "Gastronomía variada", tipo: "alimento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Polifórum León — Entretenimiento | MetroGuia",
    meta_description: "Polifórum de León. Centro de entretenimiento con conciertos, teatros y eventos.",
    h1: "Polifórum — Centro de Entretenimiento",
    intro: "Centro de entretenimiento Polifórum con conciertos, obras de teatro, eventos deportivos y espectáculos variados.",
    tips: ["Conciertos y shows", "Teatros disponibles", "Estacionamiento", "Servicios de comida", "Verificar cartelera"],
    mejor_horario: "Noches con eventos",
    mundial_relevancia: "Entretenimiento cultural leonés",
    descripcion_turistica: "El Polifórum de León es el principal venue de entretenimiento de la ciudad, una instalación de clase mundial que acoge conciertos de artistas internacionales y nacionales, obras de teatro, musicales, festivales culturales y eventos deportivos. Su acoustica profesional, capacidad de 4,000+ personas, y ubicación central lo hacen el destino imprescindible para cualquier amante de la cultura y entretenimiento.",
    lugares_cercanos: [
      { nombre: "Restaurante Fusion", tipo: "alimento", distancia: "0.2 km", descripcion: "Restaurante moderno con cocina contemporánea, ideal pre-espectáculo" },
      { nombre: "Bar Lounge Premium", tipo: "alimento", distancia: "0.3 km", descripcion: "Bar sofisticado para copas y socializar antes/después de eventos" },
      { nombre: "Ticketmaster Oficina", tipo: "servicios", distancia: "0.4 km", descripcion: "Centro oficial de venta de boletos para eventos del Polifórum" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Estación operativa según cartelera de eventos. Frecuencias especialmente altas los días con espectáculos (18:00-23:00)." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Polifórum completamente accesible con áreas reservadas para silla de ruedas, servicios adaptados, elevadores amplios y estacionamiento para personas con discapacidad." }
  },
  {
    slug: "industrial-norte-leon",
    nombre: "Industrial Norte",
    linea: "Naranja",
    municipio: "León",
    tipo_zona: "industrial",
    pois: [
      { nombre: "Zona Industrial", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Fábricas de calzado", tipo: "comercio", distancia: "3 min" },
      { nombre: "Tiendas mayoristas", tipo: "comercio", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Industrial Norte — Fábricas de Calzado | MetroGuia",
    meta_description: "Zona Industrial Norte de León. Fábricas y tiendas de calzado artesanal.",
    h1: "Industrial Norte — Corazón del Calzado",
    intro: "Zona industrial norte de León con acceso directo a fábricas de calzado artesanal. Capital mundial del calzado hecho a mano.",
    tips: ["Fábricas de calzado", "Compras de calzado artesanal", "Precios mayoristas", "Tiendas directas", "Negociar precios"],
    mejor_horario: "Mañana-tarde",
    mundial_relevancia: "Capital mundial del calzado artesanal",
    descripcion_turistica: "La Zona Industrial Norte es el corazón de la industria zapatera de León, donde cientos de fábricas artesanales producen el famoso calzado de cuero hecho a mano. Aquí puedes comprar directamente de los fabricantes con precios mayoristas, visitar talleres familiares con tradición de siglos, y admirar la maestría de artesanos que han colocado a León como capital mundial del calzado artesanal de calidad superior.",
    lugares_cercanos: [
      { nombre: "Fábrica Zapaterías Clásicas", tipo: "comercio", distancia: "0.4 km", descripcion: "Fábrica familiar con tienda y taller visible, especializada en calzado de señora" },
      { nombre: "Tienda Mayorista Zapatos Leoneses", tipo: "comercio", distancia: "0.3 km", descripcion: "Tienda mayorista con stock amplio y precios por cantidad" },
      { nombre: "Comedor Industrial", tipo: "alimento", distancia: "0.5 km", descripcion: "Comedor con comida casera y típica para trabajadores y visitantes" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Zona industrial activa principalmente 8:00-18:00. Estación SIT con frecuencias regulares, enfocadas en trabajadores en horarios laborales." },
    accesibilidad: { silla_ruedas: true, elevadores: false, rampas: true, banos_accesibles: false, notas: "Zona industrial con acceso variable. Talleres y fábricas varían en accesibilidad. Tiendas principales tienen rampas, pero no todos tienen servicios adaptados." }
  },
  {
    slug: "zona-piel-leon",
    nombre: "Zona Piel",
    linea: "Morado",
    municipio: "León",
    tipo_zona: "artesanal",
    pois: [
      { nombre: "Zona Piel León", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Tiendas de piel", tipo: "comercio", distancia: "2 min" },
      { nombre: "Mercado artesanal", tipo: "comercio", distancia: "2 min" },
      { nombre: "Restaurantes especializados", tipo: "alimento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Zona Piel León — Mercado Artesanal | MetroGuia",
    meta_description: "Zona Piel de León. Mayor mercado de calzado artesanal de América Latina.",
    h1: "Zona Piel — Mercado Artesanal de Calzado",
    intro: "Zona Piel es el mayor mercado de calzado artesanal de América Latina. Cientos de tiendas con zapatos únicos hechos a mano.",
    tips: ["Mayor mercado de calzado artesanal", "Precios competitivos", "Variedad inmensa", "Martes a domingo", "Negocia precios"],
    mejor_horario: "Martes-domingo, mañana",
    mundial_relevancia: "Patrimonio artesanal de León",
    descripcion_turistica: "Zona Piel es el mercado artesanal más grande de América Latina, un mercado tradicional donde convergen vendedores, compradores y turistas. Con más de 300 tiendas distribuidas en múltiples pisos, ofrece la variedad más inmensa de zapatos de piel hechos a mano en León. Abierto martes a domingo, es el lugar donde la tradición artesanal zapatera se mantiene viva en un ambiente auténticamente mexicano.",
    lugares_cercanos: [
      { nombre: "Restaurante La Zapatera", tipo: "alimento", distancia: "0.2 km", descripcion: "Comida tradicional leonesa en ambiente mercadil típico" },
      { nombre: "Tienda Artesanal La Calidad", tipo: "comercio", distancia: "0.1 km", descripcion: "Tienda destacada con zapatos de alta calidad y variedad de estilos" },
      { nombre: "Banco Azteca", tipo: "servicios", distancia: "0.3 km", descripcion: "Servicios bancarios y cajeros automáticos en la zona" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Zona Piel abierta martes-domingo 9:00-18:00 aprox. Estación operativa con frecuencias máximas los martes y fines de semana." },
    accesibilidad: { silla_ruedas: true, elevadores: false, rampas: true, banos_accesibles: false, notas: "Mercado tradicional con escaleras entre pisos (sin elevadores). Rampas en acceso principal. Baños básicos sin adaptaciones. Acceso parcial para silla de ruedas." }
  },
  {
    slug: "forum-metropolitano-leon",
    nombre: "Forum Metropolitano",
    linea: "Morado",
    municipio: "León",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Forum Metropolitano", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Tiendas", tipo: "comercio", distancia: "2 min" },
      { nombre: "Restaurantes", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Forum Metropolitano — Centro Comercial León | MetroGuia",
    meta_description: "Forum Metropolitano de León. Centro comercial moderno.",
    h1: "Forum Metropolitano — Centro Comercial",
    intro: "Centro comercial Forum Metropolitano con tiendas modernas, restaurantes y entretenimiento.",
    tips: ["Centro comercial moderno", "Tiendas variadas", "Restaurantes múltiples", "Estacionamiento", "Cine"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Comercio moderno",
    descripcion_turistica: "Forum Metropolitano es un centro comercial moderno y accesible que combina compras, gastronomía y entretenimiento en un ambiente de clase. Con tiendas de moda, electrónica, servicios, cines y restaurantes variados, ofrece una experiencia completa de centro comercial metropolitano. Es el lugar perfecto para un día de compras en familia con todas las comodidades.",
    lugares_cercanos: [
      { nombre: "Cine Cinépolis Premium", tipo: "entretenimiento", distancia: "0.2 km", descripcion: "Salas de cine con opciones gourmet y reclinable" },
      { nombre: "Restaurante Italianni's", tipo: "alimento", distancia: "0.2 km", descripcion: "Cocina italiana contemporánea en ambiente moderno" },
      { nombre: "Tienda Nike", tipo: "comercio", distancia: "0.2 km", descripcion: "Tienda deportiva con ropa, calzado y accesorios" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Centro comercial 10:00-21:00 aprox. Estación SIT con frecuencias altas en tarde y fin de semana." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Centro completamente accesible con estacionamiento reservado, elevadores modernos, servicios adaptados y asistencia disponible." }
  },
  {
    slug: "aeropuerto-bajio-acceso",
    nombre: "Acceso Aeropuerto",
    linea: "Morado",
    municipio: "León",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Aeropuerto Internacional del Bajío", tipo: "transporte", distancia: "8 min caminando" },
      { nombre: "Servicios aeroportuarios", tipo: "transporte", distancia: "8 min" },
      { nombre: "Rental de autos", tipo: "servicios", distancia: "5 min" }
    ],
    transferencias: [],
    seo_title: "Acceso Aeropuerto Bajío — León | MetroGuia",
    meta_description: "Acceso al Aeropuerto Internacional del Bajío. Conexión aérea de León.",
    h1: "Acceso Aeropuerto — Transporte Aéreo",
    intro: "Estación con acceso al Aeropuerto Internacional del Bajío, puerta aérea de León y la región.",
    tips: ["Conexión a aeropuerto", "Vuelos nacionales e internacionales", "Rental de autos", "Servicios de transporte", "Verificar horarios"],
    mejor_horario: "Según vuelos",
    mundial_relevancia: "Conectividad aérea del Bajío",
    descripcion_turistica: "Esta estación de transporte conecta directamente al Aeropuerto Internacional del Bajío, puerta aérea de León y la región con vuelos nacionales e internacionales. Desde aquí comienzan y terminan viajes aéreos hacia el mundo, ofreciendo conexión fácil, segura y económica. Es el punto de partida ideal para aventureros que exploran el Bajío desde las alturas, llegando a León para descubrir su riqueza cultural y artesanal.",
    lugares_cercanos: [
      { nombre: "Aeropuerto Internacional del Bajío", tipo: "transporte", distancia: "0.8 km", descripcion: "Terminal aérea con vuelos domésticos e internacionales, restaurants y tiendas" },
      { nombre: "Hertz Rental de Autos", tipo: "servicios", distancia: "0.5 km", descripcion: "Renta de vehículos con opciones de autos, camionetas y SUV" },
      { nombre: "Hotel Best Western Aeropuerto", tipo: "hospedaje", distancia: "1 km", descripcion: "Hotel de paso para pasajeros con conexiones y esperas" }
    ],
    horarios: { lunes_viernes: "5:30 - 22:30", sabado: "5:30 - 22:30", domingo: "6:00 - 22:00", notas: "Servicio especial según horarios de vuelos. Frecuencias coordinadas con operaciones aeroportuarias. Verificar calendario de vuelos." },
    accesibilidad: { silla_ruedas: true, elevadores: true, rampas: true, banos_accesibles: true, notas: "Estación completamente accesible con todas las facilidades. Aeropuerto con servicios profesionales de accesibilidad para pasajeros con discapacidad." }
  }
];
