export const lineasPhiladelphia = [
  {
    id: "BSL",
    color: "#FF6B35",
    colorNombre: "Naranja",
    inicio: "Fern Rock Transit Center",
    fin: "NRG/AT&T Station",
    total: 18,
    municipios: ["Philadelphia"],
    descripcion: "Broad Street Line (Línea Naranja) SEPTA. Línea principal norte-sur que conecta Fern Rock Transit Center en el norte con NRG/AT&T Station (acceso a estadios deportivos) en el sur. Pasa por el corazón de Filadelfia con paradas en City Hall (centro histórico), Convention Center, museos, universidades y estadios deportivos. Estaciones clave: Fern Rock (terminal norte), Temple University, City Hall (hub central), Convention Center, e Estadios deportivos (terminal sur).",
    estaciones_turisticas: ["philly-cecil-b-moore", "philly-fairmount", "philly-race-vine", "philly-city-hall", "philly-8th-street", "philly-nrg-station"],
    estaciones: [
      "philly-fern-rock",
      "philly-logan",
      "philly-wyoming",
      "philly-hunting-park",
      "philly-allegheny",
      "philly-susquehanna-dauphin",
      "philly-cecil-b-moore",
      "philly-girard",
      "philly-fairmount",
      "philly-spring-garden",
      "philly-race-vine",
      "philly-city-hall",
      "philly-walnut-locust",
      "philly-lombard-south",
      "philly-ellsworth-federal",
      "philly-tasker-morris",
      "philly-snyder",
      "philly-oregon",
      "philly-nrg-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Broad Street Line: Historia y Deportes",
      paradas: [
        {
          estacion: "philly-fairmount",
          actividad: "Inicio en Fairmount. Visita Philadelphia Museum of Art. (10:00 AM)"
        },
        {
          estacion: "philly-city-hall",
          actividad: "City Hall y centro histórico. Almuerzo en downtown. (1:00 PM)"
        },
        {
          estacion: "philly-8th-street",
          actividad: "Independence Hall y Liberty Bell. Historia americana. (3:00 PM)"
        },
        {
          estacion: "philly-race-vine",
          actividad: "Convention Center y eventos. (4:30 PM)"
        },
        {
          estacion: "philly-nrg-station",
          actividad: "Estadios deportivos. Cena y eventos. (6:00 PM)"
        }
      ]
    }
  },
  {
    id: "MFL",
    color: "#0066B2",
    colorNombre: "Azul",
    inicio: "69th Street Transit Center",
    fin: "Frankford Transit Center",
    total: 20,
    municipios: ["Philadelphia"],
    descripcion: "Market-Frankford Line (Línea Azul) SEPTA. Línea principal este-oeste que va desde 69th Street Transit Center (oeste) hasta Frankford Transit Center (este). Pasa por downtown Filadelfia con conexiones a centro histórico, sitios de herencia americana (Independence Hall, Liberty Bell), y transporte intermodal (AMTRAK en 30th Street). Es la línea más larga del sistema SEPTA.",
    estaciones_turisticas: ["philly-30th-street", "philly-15th-street", "philly-8th-street", "philly-spring-garden"],
    estaciones: [
      "philly-69th-transit-center",
      "philly-30th-street",
      "philly-15th-street",
      "philly-8th-street",
      "philly-spring-garden",
      "philly-city-hall",
      "philly-frankford-transit-center"
    ]
  }
];
