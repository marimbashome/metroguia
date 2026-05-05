export const lineasSydney = [
  {
    id: "NorthwestMetro",
    color: "#008EC4",
    colorNombre: "Metro Northwest",
    inicio: "Tallawong",
    fin: "Epping",
    total: 13,
    municipios: ["Rouse Hill", "Kellyville", "Norwest", "Bella Vista", "Castle Hill", "Cherrybrook", "Pennant Hills", "Epping"],
    descripcion: "El Metro Northwest (2019) fue la primera línea del nuevo Sydney Metro y transformó el transporte en el corredor noroeste de Sídney. Funciona completamente sin conductor (Driverless) y conecta los suburbios en crecimiento del Hills District con Epping, donde empalma con el Metro City & Southwest hacia el CBD. La línea recorre 36 km y tiene una frecuencia de cada 4 minutos en horas pico.",
    estaciones_turisticas: ["sydney-rouse-hill", "sydney-tallawong", "sydney-epping", "sydney-macquarie-university"],
    estaciones: ["sydney-tallawong", "sydney-rouse-hill", "sydney-epping", "sydney-macquarie-university"],
    ruta_1_dia: {
      titulo: "El noroeste en metro: Hills District al CBD",
      paradas: [
        { estacion: "sydney-tallawong", actividad: "Punto de partida — interchange de buses (08:00 AM)" },
        { estacion: "sydney-rouse-hill", actividad: "Rouse Hill Town Centre (08:15 AM)" },
        { estacion: "sydney-macquarie-university", actividad: "Campus universitario (08:45 AM)" },
        { estacion: "sydney-epping", actividad: "Cambio al Metro City para continuar al CBD (09:00 AM)" }
      ]
    },
    seo_title: "Metro Northwest — Sydney Metro | MetroGuia",
    meta_description: "Sydney Metro Northwest: 13 stations from Tallawong to Epping. First fully automated metro in Australia. Hills District to CBD.",
    h1: "Metro Northwest — Sydney Metro"
  },
  {
    id: "CityMetro",
    color: "#009B77",
    colorNombre: "Metro City & Southwest",
    inicio: "Tallawong",
    fin: "Sydenham",
    total: 22,
    municipios: ["Rouse Hill", "Epping", "Chatswood", "Crows Nest", "North Sydney", "Barangaroo", "Martin Place", "Central", "Waterloo", "Mascot", "Sydenham"],
    descripcion: "El Metro City & Southwest (2024) es la expansión más ambiciosa del metro de Sídney, creando un nuevo corredor norte-sur bajo el CBD que conecta el Hills District con los suburbios del suroeste. Incluye el túnel Harbor debajo del Puerto de Sídney, los accesos al aeropuerto, y la nueva estación de Barangaroo en el waterfront. Completamente sin conductor y 100% accesible.",
    estaciones_turisticas: ["sydney-barangaroo", "sydney-martin-place", "sydney-central", "sydney-sydney-airport-domestic", "sydney-chatswood"],
    estaciones: ["sydney-chatswood", "sydney-barangaroo", "sydney-martin-place", "sydney-central", "sydney-waterloo", "sydney-sydney-airport-domestic", "sydney-epping"],
    ruta_1_dia: {
      titulo: "Sídney completo: aeropuerto, CBD y waterfront",
      paradas: [
        { estacion: "sydney-sydney-airport-domestic", actividad: "Llegada al aeropuerto (hora de aterrizaje)" },
        { estacion: "sydney-central", actividad: "Check-in hotel + Chinatown lunch (12:00 PM)" },
        { estacion: "sydney-martin-place", actividad: "Hyde Park Barracks y Macquarie Street heritage (02:00 PM)" },
        { estacion: "sydney-barangaroo", actividad: "Sunset walk en Barangaroo Reserve (05:00 PM)" }
      ]
    },
    seo_title: "Metro City & Southwest — Sydney Metro | MetroGuia",
    meta_description: "Sydney Metro City & Southwest: 22 stations from Tallawong through CBD to Sydenham. Airport link, Barangaroo, Martin Place, Central.",
    h1: "Metro City & Southwest — Sydney Metro"
  }
];
