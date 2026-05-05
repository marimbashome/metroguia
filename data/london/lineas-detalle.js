export const lineasLondon = [
  {
    id: "Piccadilly",
    color: "#003688",
    colorNombre: "Piccadilly (Azul Marino)",
    inicio: "Heathrow Terminals 2 & 3",
    fin: "Cockfosters",
    total: 53,
    municipios: ["Hillingdon", "Hounslow", "Hammersmith", "Westminster", "Camden", "Haringey"],
    descripcion: "La Piccadilly Line conecta el aeropuerto de Heathrow directamente con el centro de Londres sin necesidad de transbordo. Pasa por South Kensington, Knightsbridge, Hyde Park Corner, Green Park, Piccadilly Circus, Leicester Square, Covent Garden, Holborn, Russell Square y King's Cross.",
    estaciones_turisticas: ["heathrow-terminal-2-3", "green-park", "piccadilly-circus", "leicester-square", "covent-garden", "king-s-cross-st-pancras"],
    estaciones: ["heathrow-terminal-2-3", "earls-court", "green-park", "piccadilly-circus", "leicester-square", "covent-garden", "king-s-cross-st-pancras"],
    ruta_1_dia: {
      titulo: "De Heathrow al West End: La Llegada Perfecta",
      paradas: [
        { estacion: "heathrow-terminal-2-3", actividad: "Llegada al aeropuerto (mañana)" },
        { estacion: "green-park", actividad: "Buckingham Palace y Mayfair (11:00h)" },
        { estacion: "piccadilly-circus", actividad: "West End y Soho (14:00h)" },
        { estacion: "covent-garden", actividad: "Mercado y artistas callejeros (17:00h)" }
      ]
    },
    seo_title: "Piccadilly Line — Underground Londres | MetroGuia",
    meta_description: "Piccadilly Line (azul marino): directa desde Heathrow a Piccadilly Circus, South Kensington y King's Cross. 53 estaciones.",
    h1: "Piccadilly Line — London Underground (Azul Marino)"
  },
  {
    id: "Victoria",
    color: "#0098D4",
    colorNombre: "Victoria (Azul Claro)",
    inicio: "Brixton",
    fin: "Walthamstow Central",
    total: 16,
    municipios: ["Lambeth", "Westminster", "Camden", "Islington", "Haringey", "Waltham Forest"],
    descripcion: "La Victoria Line es una de las más rápidas y directas de Londres, uniendo Brixton al sur con Walthamstow al norte. Pasa por Stockwell, Vauxhall, Pimlico, Victoria, Green Park, Oxford Circus, Warren Street, Euston, King's Cross, Highbury & Islington. Completamente automatizada y altamente fiable.",
    estaciones_turisticas: ["victoria", "green-park", "oxford-circus", "king-s-cross-st-pancras"],
    estaciones: ["victoria", "green-park", "oxford-circus", "king-s-cross-st-pancras"],
    ruta_1_dia: {
      titulo: "Victoria Line: De Palacio a las Tiendas",
      paradas: [
        { estacion: "victoria", actividad: "Palacio de Buckingham y Tate Britain (10:00h)" },
        { estacion: "green-park", actividad: "St. James's Park y The Ritz (12:00h)" },
        { estacion: "oxford-circus", actividad: "Oxford Street y Regent Street (14:00h)" },
        { estacion: "king-s-cross-st-pancras", actividad: "British Library y Platform 9¾ (17:00h)" }
      ]
    },
    seo_title: "Victoria Line — Underground Londres | MetroGuia",
    meta_description: "Victoria Line (azul claro): 16 estaciones de Brixton a Walthamstow. Victoria, Green Park, Oxford Circus, King's Cross.",
    h1: "Victoria Line — London Underground (Azul Claro)"
  },
  {
    id: "Jubilee",
    color: "#A0A5A9",
    colorNombre: "Jubilee (Plateado)",
    inicio: "Stanmore",
    fin: "Stratford",
    total: 27,
    municipios: ["Harrow", "Brent", "Camden", "Westminster", "Lambeth", "Southwark", "Tower Hamlets", "Newham"],
    descripcion: "La Jubilee Line es la línea plateada de Londres, moderna, espaciosa y con estaciones de arquitectura celebrada. Une Stanmore con Stratford pasando por Baker Street, Bond Street, Green Park, Westminster, London Bridge, Canary Wharf. Sus estaciones, diseñadas por diferentes arquitectos en los 90, son obras de arte.",
    estaciones_turisticas: ["baker-street", "bond-street", "green-park", "westminster", "london-bridge", "canary-wharf", "waterloo", "stratford"],
    estaciones: ["baker-street", "bond-street", "green-park", "westminster", "waterloo", "london-bridge", "canary-wharf", "stratford"],
    ruta_1_dia: {
      titulo: "Jubilee: Del Parlamento a Canary Wharf",
      paradas: [
        { estacion: "baker-street", actividad: "Sherlock Holmes Museum (10:00h)" },
        { estacion: "westminster", actividad: "Parlamento y Westminster Abbey (12:00h)" },
        { estacion: "london-bridge", actividad: "Borough Market y The Shard (14:00h)" },
        { estacion: "canary-wharf", actividad: "Skyline Docklands y Museum (17:00h)" }
      ]
    },
    seo_title: "Jubilee Line — Underground Londres | MetroGuia",
    meta_description: "Jubilee Line (plateado): 27 estaciones. Westminster, London Bridge, Canary Wharf — la línea de arquitectura más celebrada de Londres.",
    h1: "Jubilee Line — London Underground (Plateado)"
  },
  {
    id: "Central",
    color: "#E32017",
    colorNombre: "Central (Rojo)",
    inicio: "Ealing Broadway / West Ruislip",
    fin: "Epping / Woodford",
    total: 49,
    municipios: ["Ealing", "Hammersmith", "Westminster", "City of London", "Tower Hamlets", "Newham", "Redbridge", "Epping Forest"],
    descripcion: "La Central Line (roja) es la más transitada y la que cruza el corazón de Londres de este a oeste. Pasa por Shepherd's Bush, Notting Hill Gate, Oxford Circus, Tottenham Court Road, Bank y Liverpool Street. Es la ruta más rápida para cruzar el centro de Londres.",
    estaciones_turisticas: ["notting-hill-gate", "oxford-circus", "bond-street", "bank-monument", "stratford"],
    estaciones: ["notting-hill-gate", "oxford-circus", "bond-street", "bank-monument", "stratford"],
    ruta_1_dia: {
      titulo: "Central Line: De Notting Hill al East End",
      paradas: [
        { estacion: "notting-hill-gate", actividad: "Portobello Road Market (sábado 09:00h)" },
        { estacion: "oxford-circus", actividad: "Oxford Street shopping (11:00h)" },
        { estacion: "bank-monument", actividad: "City de Londres, St. Paul's (14:00h)" },
        { estacion: "stratford", actividad: "Parque Olímpico y Westfield (17:00h)" }
      ]
    },
    seo_title: "Central Line — Underground Londres | MetroGuia",
    meta_description: "Central Line (rojo): 49 estaciones de este a oeste de Londres. Oxford Circus, Bank, Notting Hill Gate, Stratford.",
    h1: "Central Line — London Underground (Rojo)"
  },
  {
    id: "District",
    color: "#00782A",
    colorNombre: "District (Verde)",
    inicio: "Richmond / Ealing Broadway / Wimbledon",
    fin: "Upminster",
    total: 60,
    municipios: ["Richmond", "Hammersmith", "Westminster", "City of London", "Tower Hamlets", "Newham"],
    descripcion: "La District Line (verde) es la más larga de Londres en kilómetros, con múltiples ramales al oeste. Pasa por Wimbledon, Earl's Court, South Kensington, Sloane Square, Victoria, Westminster, Embankment, Temple, Monument y Tower Hill. Ideal para visitar los museos de South Kensington.",
    estaciones_turisticas: ["earls-court", "tower-hill", "westminster", "victoria"],
    estaciones: ["earls-court", "tower-hill", "westminster", "victoria"],
    ruta_1_dia: {
      titulo: "District Line: De la Torre a Kensington",
      paradas: [
        { estacion: "tower-hill", actividad: "Torre de Londres (10:00h)" },
        { estacion: "westminster", actividad: "Casas del Parlamento (12:00h)" },
        { estacion: "earls-court", actividad: "Barrio y pubs (15:00h)" }
      ]
    },
    seo_title: "District Line — Underground Londres | MetroGuia",
    meta_description: "District Line (verde): Tower Hill, Westminster, South Kensington, Victoria. 60 estaciones por el oeste y este de Londres.",
    h1: "District Line — London Underground (Verde)"
  },
  {
    id: "Northern",
    color: "#000000",
    colorNombre: "Northern (Negro)",
    inicio: "Morden / Edgware / High Barnet",
    fin: "High Barnet / Edgware",
    total: 50,
    municipios: ["Merton", "Lambeth", "Southwark", "City of London", "Islington", "Barnet"],
    descripcion: "La Northern Line (negra) es la más larga y compleja de Londres, con dos ramales al norte y dos al sur. Pasa por Morden, Balham, Clapham, Stockwell, Waterloo, London Bridge, Bank, Moorgate, Angel, King's Cross, Euston, Warren Street, Tottenham Court Road, Leicester Square y Charing Cross.",
    estaciones_turisticas: ["waterloo", "london-bridge", "king-s-cross-st-pancras", "leicester-square", "camden-town"],
    estaciones: ["waterloo", "london-bridge", "leicester-square", "camden-town", "king-s-cross-st-pancras"],
    ruta_1_dia: {
      titulo: "Northern Line: Del South Bank al Norte Alternativo",
      paradas: [
        { estacion: "waterloo", actividad: "South Bank y Tate Modern (10:00h)" },
        { estacion: "london-bridge", actividad: "Borough Market (12:00h)" },
        { estacion: "leicester-square", actividad: "National Gallery (14:00h)" },
        { estacion: "camden-town", actividad: "Camden Market (17:00h)" }
      ]
    },
    seo_title: "Northern Line — Underground Londres | MetroGuia",
    meta_description: "Northern Line (negro): 50 estaciones. King's Cross, Waterloo, London Bridge, Camden Town — la línea más larga del metro de Londres.",
    h1: "Northern Line — London Underground (Negro)"
  },
  {
    id: "DLR",
    color: "#00AFAD",
    colorNombre: "DLR (Turquesa)",
    inicio: "Bank / Tower Gateway",
    fin: "Woolwich / Lewisham / Beckton",
    total: 45,
    municipios: ["City of London", "Tower Hamlets", "Newham", "Greenwich", "Lewisham"],
    descripcion: "El Docklands Light Railway (DLR) es el tren automático sin conductor que conecta la City con los Docklands, Canary Wharf y Greenwich. Tiene vistas panorámicas únicas desde sus viaductos sobre el Támesis y los antiguos muelles. La línea a Greenwich pasa por Cutty Sark.",
    estaciones_turisticas: ["canary-wharf", "greenwich"],
    estaciones: ["canary-wharf", "greenwich"],
    ruta_1_dia: {
      titulo: "DLR: De Canary Wharf a Greenwich",
      paradas: [
        { estacion: "canary-wharf", actividad: "Skyline financiero y Museum Docklands (10:00h)" },
        { estacion: "greenwich", actividad: "Observatorio, Meridiano y Cutty Sark (12:00h)" }
      ]
    },
    seo_title: "DLR — Docklands Light Railway Londres | MetroGuia",
    meta_description: "DLR (turquesa): tren automático de Canary Wharf a Greenwich. Vistas panorámicas sobre los Docklands y acceso al Observatorio Real.",
    h1: "DLR — Docklands Light Railway Londres (Turquesa)"
  }
];
