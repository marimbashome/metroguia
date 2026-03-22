// =============================================================
// MetroGuia.mx — data/zonas.js
// Zonas turísticas de CDMX con estaciones de metro cercanas
// Generado: 2026-03-22 | Proyecto: MetroGuia.mx
// =============================================================

export const zonas = [
  {
    slug: "centro-historico",
    nombre: "Centro Histórico",
    descripcion: "El corazón prehispánico y colonial de la Ciudad de México. Aquí palpitan los orígenes de Tenochtitlán con la icónica Plaza del Zócalo, rodeada de templos, palacios y museos de clase mundial. Imprescindible para entender la historia de México.",
    estaciones: ["zocalo", "bellas-artes", "allende", "isabel-la-catolica", "pino-suarez"],
    estacion_principal: "zocalo",
    lineas: ["2", "3"],
    tipo: "historico",
    pois: [
      { nombre: "Zócalo (Plaza de la Constitución)", tipo: "plaza", distancia: "Acceso directo" },
      { nombre: "Palacio Nacional", tipo: "museo", distancia: "2 min caminando" },
      { nombre: "Catedral Metropolitana", tipo: "iglesia", distancia: "3 min caminando" },
      { nombre: "Templo Mayor", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Mercado de Artesanías y Souvenir", tipo: "mercado", distancia: "4 min caminando" }
    ],
    tips_turistas: [
      "El metro Zócalo es una estación enorme; sigue las señales para 'Salida Zócalo' que te deja en la plaza",
      "Evita los domingos: hay marchas frecuentes y cierre de calles. Martes-viernes es ideal",
      "La mejor iluminación para fotos: antes de las 9 AM cuando hay pocos turistas",
      "Los restaurantes en la azotea del Palacio Nacional ofrecen vistas increíbles del Zócalo"
    ],
    mundial_relevancia: "ALTA — zona de fanzone oficial FIFA 2026, concentración de turistas internacional",
    seo_title: "Metro al Centro Histórico CDMX — Estaciones cercanas | MetroGuia",
    meta_description: "Cómo llegar al Centro Histórico de CDMX en metro. Estaciones Zócalo, Bellas Artes y Allende a pasos del Zócalo, Templo Mayor y Catedral. Guía para turistas del Mundial 2026.",
    h1: "Metro al Centro Histórico de CDMX"
  },
  {
    slug: "condesa",
    nombre: "Condesa",
    descripcion: "Barrio cosmopolita y artístico con avenidas arboladas, cafeterías vintage, galerías de arte y una vida nocturna vibrante. La Avenida Ámsterdam es el corazón del barrio, rodeada de tiendas, restaurantes y bares bohemios. Punto de encuentro de artistas, intelectuales y viajeros.",
    estaciones: ["chapultepec", "patriotismo"],
    estacion_principal: "chapultepec",
    lineas: ["1", "9"],
    tipo: "barrio",
    pois: [
      { nombre: "Parque España", tipo: "parque", distancia: "2 min caminando" },
      { nombre: "Avenida Ámsterdam", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Galería de Arte Contemporáneo Condesa", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Mercado de la Medalla Milagrosa", tipo: "mercado", distancia: "4 min caminando" },
      { nombre: "Varios cafés tradicionales y librerías independientes", tipo: "comercio", distancia: "2 min caminando" }
    ],
    tips_turistas: [
      "Chapultepec te deja más cerca del parque España; Patriotismo es mejor para la Avenida Ámsterdam",
      "Visita en fin de semana: hay más vida cultural, ferias de artesanía y mercados",
      "Los mejores cafés abren de 8 AM a 10 PM; recomendación: desayuna como local",
      "La zona es segura pero mejor evita después de medianoche en calles oscuras"
    ],
    mundial_relevancia: "MEDIA — zona hogar para turistas creativos, muy de moda entre viajeros internacionales",
    seo_title: "Metro a La Condesa CDMX — Guía de barrio bohemio | MetroGuia",
    meta_description: "Cómo llegar a la Condesa en metro CDMX. Estaciones Chapultepec y Patriotismo. Parque España, Avenida Ámsterdam, cafés y galerías. Guía turística completa.",
    h1: "Metro a La Condesa: barrio bohemio de CDMX"
  },
  {
    slug: "roma-norte",
    nombre: "Roma Norte",
    descripcion: "Hermano cosmopolita de la Condesa, con arquitectura porfiriana, tiendas vintage, restaurantes sofisticados y galerías. La Avenida Álvaro Obregón marca el límite entre Roma Norte y Roma Sur. Zona de lujo, sofisticación y gastronomía de nivel mundial.",
    estaciones: ["insurgentes", "durango"],
    estacion_principal: "insurgentes",
    lineas: ["1"],
    tipo: "barrio",
    pois: [
      { nombre: "Avenida Álvaro Obregón", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Parque Masónico", tipo: "parque", distancia: "3 min caminando" },
      { nombre: "Colecciones Museo Jumex", tipo: "museo", distancia: "8 min caminando" },
      { nombre: "Tiendas vintage y boutiques", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Restaurantes de gastronomía mundial", tipo: "comercio", distancia: "2 min caminando" }
    ],
    tips_turistas: [
      "Insurgentes está mejor ubicada para explorar Roma Norte; Durango accede más a Roma Sur",
      "Jueves a domingos es cuando ves la vida completa del barrio con terrazas llenas",
      "Presupuesto: restaurantes aquí son premium; come en mercados para ahorrar",
      "Arquitectura porfiriana increíble: toma fotos de los edificios históricos al atardecer"
    ],
    mundial_relevancia: "MEDIA — zona para turistas de alto presupuesto buscando gastronomía y lujo",
    seo_title: "Metro a Roma Norte CDMX — Barrio sofisticado | MetroGuia",
    meta_description: "Estaciones Insurgentes y Durango en metro: acceso a Roma Norte. Avenida Álvaro Obregón, arquitectura porfiriana, restaurantes de clase mundial.",
    h1: "Metro a Roma Norte: sofisticación y gastronomía en CDMX"
  },
  {
    slug: "polanco",
    nombre: "Polanco",
    descripcion: "Zona de lujo por excelencia de la Ciudad de México. Avenida Paseo de la Reforma cruza la zona trayendo tiendas de marcas internacionales, hoteles de cinco estrellas y restaurantes gourmet. Polanco es sinónimo de riqueza, exclusividad y modernidad en la capital.",
    estaciones: ["polanco", "auditorio"],
    estacion_principal: "polanco",
    lineas: ["7"],
    tipo: "comercio_lujo",
    pois: [
      { nombre: "Centro Comercial Polanco y Tiendas de Lujo", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Museo Tamayo Arte Contemporáneo", tipo: "museo", distancia: "4 min caminando" },
      { nombre: "Paseo de la Reforma", tipo: "avenida", distancia: "2 min caminando" },
      { nombre: "Hoteles de 5 estrellas (Fairmont, St. Regis)", tipo: "hospedaje", distancia: "3 min caminando" },
      { nombre: "Restaurantes Michelin (Quintonil, Pujol cercano)", tipo: "comercio", distancia: "8 min caminando" }
    ],
    tips_turistas: [
      "Polanco es zona segura las 24h pero muy cara; ideal si tienes presupuesto alto",
      "La Línea 7 conecta con Chapultepec y Auditorio; desde aquí puedes explorar todo el occidente",
      "Tiendas abren de 10 AM a 8 PM en días laborales; domingos hasta 6 PM",
      "Visita el Museo Tamayo por su colección de arte contemporáneo internacional"
    ],
    mundial_relevancia: "MEDIA — zona para autoridades FIFA, delegaciones VIP y turistas premium del Mundial 2026",
    seo_title: "Metro a Polanco CDMX — Zona de lujo | MetroGuia",
    meta_description: "Estaciones Polanco y Auditorio en Línea 7. Centro comercial de lujo, Paseo de la Reforma, restaurantes gourmet. Guía para turistas premium.",
    h1: "Metro a Polanco: zona de lujo y sofisticación"
  },
  {
    slug: "coyoacan",
    nombre: "Coyoacán",
    descripcion: "Pueblo mágico dentro de la ciudad con plaza arbolada, arquitectura colonial, museos literarios y ambiente bohemio tranquilo. Centro cultural de México donde vivieron Frida Kahlo, León Trotski y otros personajes célebres. Imprescindible para entender la contracultura mexicana del siglo XX.",
    estaciones: ["coyoacan", "viveros"],
    estacion_principal: "coyoacan",
    lineas: ["3"],
    tipo: "cultural",
    pois: [
      { nombre: "Casa Azul de Frida Kahlo", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Plaza Principal de Coyoacán", tipo: "plaza", distancia: "3 min caminando" },
      { nombre: "Parque Viveros de Coyoacán", tipo: "parque", distancia: "6 min caminando" },
      { nombre: "Casa de León Trotski", tipo: "museo", distancia: "10 min caminando" },
      { nombre: "Iglesia de San Juan Bautista", tipo: "iglesia", distancia: "2 min caminando" }
    ],
    tips_turistas: [
      "La Casa Azul requiere reserva online; cómpra con anticipación para no quedarte sin entrada",
      "Coyoacán es ideal para pasar todo el día: come en restaurantes locales alrededor de la plaza",
      "Viernes y sábados hay eventos culturales: música en vivo, teatros, ferias de libro",
      "El ambiente es relajado y seguro; perfecto para viajeros que buscan autenticidad lejos del turismo masivo"
    ],
    mundial_relevancia: "BAJA — zona cultural para turistas que buscan historia y arte lejos del foco del Mundial",
    seo_title: "Metro a Coyoacán CDMX — Casa Azul de Frida Kahlo | MetroGuia",
    meta_description: "Estaciones Coyoacán y Viveros en Línea 3. Casa Azul, Casa de Trotski, plaza colonial. Pueblo mágico con historia cultural mexicana.",
    h1: "Metro a Coyoacán: pueblo mágico de Ciudad de México"
  },
  {
    slug: "tepito-lagunilla",
    nombre: "Tepito y Lagunilla",
    descripcion: "Barrios populares históricos del centro norte de la ciudad. Tepito es famoso por sus mercados de ropa al mayor y tiendas de electrónica. Lagunilla destaca por su mercado de antigüedades y tiendas vintage. Zona auténtica de comercio popular capitalino.",
    estaciones: ["tepito", "garibaldi"],
    estacion_principal: "tepito",
    lineas: ["8", "B"],
    tipo: "comercio_popular",
    pois: [
      { nombre: "Mercado de Tepito (ropa, electrónica, souvenirs)", tipo: "mercado", distancia: "Acceso directo" },
      { nombre: "Tianguis de Lagunilla (antigüedades, vintage)", tipo: "mercado", distancia: "8 min caminando" },
      { nombre: "Plaza de Garibaldi (música en vivo)", tipo: "plaza", distancia: "3 min caminando" },
      { nombre: "Templo de Santa María Redonda", tipo: "iglesia", distancia: "2 min caminando" },
      { nombre: "Museos de arte popular", tipo: "museo", distancia: "5 min caminando" }
    ],
    tips_turistas: [
      "Tepito es zona de comercio agresivo; sé precavido con billetera, cámaras y teléfono",
      "Mejor horario: 10 AM a 3 PM entre semana cuando hay menos aglomeración",
      "Garibaldi de noche: music mariachi en vivo, ambiente festivo pero ruidoso",
      "Busca souvenirs auténticos en tiendas pequeñas de Lagunilla; evita las imitaciones"
    ],
    mundial_relevancia: "BAJA — zona auténtica para turistas aventureros buscando comercio popular y vida real",
    seo_title: "Metro a Tepito y Lagunilla CDMX — Mercados populares | MetroGuia",
    meta_description: "Estaciones Tepito y Garibaldi. Mercado de Tepito, tianguis de Lagunilla, Plaza de Garibaldi. Comercio popular y vida auténtica capitalina.",
    h1: "Metro a Tepito y Lagunilla: comercio popular y autenticidad"
  },
  {
    slug: "xochimilco",
    nombre: "Xochimilco",
    descripcion: "Patrimonio de la Humanidad con los icónicos canales flotantes, trajineras coloridas y jardines flotantes (chinampas). Experiencia única de turismo acuático dentro de la ciudad. Ideal para disfrutar de la naturaleza, comida auténtica y tradición mexica.",
    estaciones: ["tasquena"],
    estacion_principal: "tasquena",
    lineas: ["2"],
    tipo: "natural",
    pois: [
      { nombre: "Trajineras en los canales de Xochimilco", tipo: "experiencia", distancia: "15 min desde Tren Ligero" },
      { nombre: "Mercado de Flores de Xochimilco", tipo: "mercado", distancia: "20 min" },
      { nombre: "Chinampa con cultivos tradicionales", tipo: "experiencia", distancia: "En trajinera" },
      { nombre: "Restaurantes orilleros con comida auténtica", tipo: "comercio", distancia: "5 min caminando" },
      { nombre: "Música en vivo (xilofonistas, jarabe tapatío)", tipo: "experiencia", distancia: "En trajinera" }
    ],
    tips_turistas: [
      "Metro L2 → Tasqueña → Tren Ligero es la ruta: la tarjeta Metro NO funciona en el Tren Ligero ($15 MXN)",
      "Llega temprano (antes de las 10 AM) para evitar trajineras saturadas con turistas",
      "Negocia el precio de la trajinera: $300-500 pesos por embarcación (hasta 6 personas)",
      "Come DESPUÉS de la trajinera, no durante: es incómodo comer en el agua. Restaurantes orilleros son mejores"
    ],
    mundial_relevancia: "MEDIA — atractivo turístico tradicional muy popular entre visitantes FIFA 2026",
    seo_title: "Metro a Xochimilco CDMX — Trajineras y Canales | MetroGuia",
    meta_description: "Cómo llegar a Xochimilco en metro CDMX. Línea 2 Tasqueña → Tren Ligero. Trajineras, canales flotantes, Patrimonio de la Humanidad.",
    h1: "Metro a Xochimilco: los canales flotantes de CDMX"
  },
  {
    slug: "estadio-azteca",
    nombre: "Estadio Azteca",
    descripcion: "Casa del Tricolor mexicano y sede de partidos del Mundial FIFA 2026. Ícono deportivo de México que ha albergado Copas del Mundo (1970, 1986) y legendarios encuentros entre México y sus rivales. Para turistas del Mundial: es el destino final obligatorio.",
    estaciones: ["tasquena"],
    estacion_principal: "tasquena",
    lineas: ["2"],
    tipo: "deportivo",
    pois: [
      { nombre: "Estadio Azteca (70,000 capacidad)", tipo: "estadio", distancia: "15 min desde Tren Ligero" },
      { nombre: "Museo del Estadio Azteca", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Tienda oficial del Estadio Azteca", tipo: "comercio", distancia: "Acceso directo" },
      { nombre: "Zonas de convivencia y fanzone", tipo: "experiencia", distancia: "Alrededor del estadio" },
      { nombre: "Comida y bebidas en alrededores", tipo: "comercio", distancia: "2 min caminando" }
    ],
    tips_turistas: [
      "Partidos del Mundial FIFA 2026 en Azteca: 11, 17, 24 jun · 30 jun · 5 jul 2026",
      "NO hay metro directo al Estadio: Metro L2 → Tasqueña → Tren Ligero → Baja de Tren Ligero y camina 15 min",
      "Compra tus boletos con anticipación en Ticketmaster; evita mercado negro",
      "Llega con 2 horas de anticipación el día del partido; usa ropa con colores de tu equipo"
    ],
    mundial_relevancia: "CRÍTICA — el destino más importante para turistas del Mundial FIFA 2026",
    seo_title: "Estadio Azteca FIFA 2026 — Cómo llegar en metro CDMX | MetroGuia",
    meta_description: "Cómo llegar al Estadio Azteca en metro. Línea 2 Tasqueña → Tren Ligero. Partidos FIFA 2026. Guía completa para turistas del Mundial.",
    h1: "Estadio Azteca: cómo llegar en metro para partidos del Mundial 2026"
  }
]
