export const lineasDubai = [
  {
    id: "Red",
    color: "#EF3D33",
    colorNombre: "Red Line",
    inicio: "UAE Exchange",
    fin: "Rashidiya",
    total: 29,
    municipios: ["Jebel Ali", "Discovery Gardens", "Al Barsha", "Sheikh Zayed Road", "Downtown Dubai", "Deira", "Garhoud"],
    descripcion: "La Red Line (Línea Roja) del Metro de Dubái es la más larga y más utilizada del sistema, recorriendo 52 km de suroeste a noreste a lo largo del Sheikh Zayed Road — la arteria principal de Dubái. Conecta los destinos turísticos clave: Mall of the Emirates, Downtown Dubai (Burj Khalifa), Deira y el aeropuerto internacional. Inaugurada en 2009.",
    estaciones_turisticas: ["dubai-ibn-battuta", "dubai-mall-of-the-emirates", "dubai-burj-khalifa-dubai-mall", "dubai-union", "dubai-burjuman", "dubai-airport-terminal-3"],
    estaciones: ["dubai-ibn-battuta", "dubai-mall-of-the-emirates", "dubai-burj-khalifa-dubai-mall", "dubai-union", "dubai-burjuman", "dubai-airport-terminal-3"],
    ruta_1_dia: {
      titulo: "Lo mejor de Dubái: de la vieja Deira al Burj Khalifa",
      paradas: [
        { estacion: "dubai-union", actividad: "Gold Souk y Spice Souk en old Deira (09:00 AM)" },
        { estacion: "dubai-burjuman", actividad: "Al Fahidi Historic Neighbourhood (11:00 AM)" },
        { estacion: "dubai-mall-of-the-emirates", actividad: "Ski Dubai (01:30 PM)" },
        { estacion: "dubai-burj-khalifa-dubai-mall", actividad: "At the Top Burj Khalifa (05:00 PM) + Dubai Fountain (06:30 PM)" }
      ]
    },
    seo_title: "Red Line — Dubai Metro | MetroGuia",
    meta_description: "Dubai Metro Red Line: 29 stations from UAE Exchange to Rashidiya. Burj Khalifa, Mall of the Emirates, Gold Souk, Airport.",
    h1: "Red Line — Dubai Metro"
  },
  {
    id: "Green",
    color: "#00A651",
    colorNombre: "Green Line",
    inicio: "Creek",
    fin: "Etisalat",
    total: 18,
    municipios: ["Al Fahidi", "BurJuman", "Karama", "Oud Metha", "Healthcare City", "Deira"],
    descripcion: "La Green Line (Línea Verde) del Metro de Dubái forma un bucle en forma de U en la parte más antigua de la ciudad, sirviendo el Bur Dubai histórico, el área médica de Healthcare City y el antiguo Deira. Es más corta que la Red Line pero esencial para acceder al patrimonio cultural de Dubái: Al Fahidi, los souks tradicionales y los barrios locales de Karama.",
    estaciones_turisticas: ["dubai-al-fahidi", "dubai-burjuman", "dubai-union", "dubai-deira-city-centre"],
    estaciones: ["dubai-al-fahidi", "dubai-burjuman", "dubai-union", "dubai-deira-city-centre"],
    ruta_1_dia: {
      titulo: "Old Dubai: patrimonio e historia",
      paradas: [
        { estacion: "dubai-al-fahidi", actividad: "Al Fahidi Historical Neighbourhood y Dubai Museum (09:00 AM)" },
        { estacion: "dubai-burjuman", actividad: "Textile Souk y abra crossing (11:00 AM)" },
        { estacion: "dubai-union", actividad: "Gold Souk y Spice Souk (01:00 PM)" },
        { estacion: "dubai-deira-city-centre", actividad: "Shopping y fish market (03:30 PM)" }
      ]
    },
    seo_title: "Green Line — Dubai Metro | MetroGuia",
    meta_description: "Dubai Metro Green Line: 18 stations from Creek to Etisalat. Historic Bur Dubai, Al Fahidi, traditional souks.",
    h1: "Green Line — Dubai Metro"
  }
];
