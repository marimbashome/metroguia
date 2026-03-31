export const lineasChihuahua = [
  {
    id: "1",
    color: "#D97706",
    colorNombre: "Ámbar oscuro",
    inicio: "Chihuahua Central",
    fin: "Los Mochis",
    total: 8,
    municipios: ["Chihuahua", "Cuauhtémoc", "Creel", "Divisadero", "Bahuichivo", "El Fuerte", "Los Mochis"],
    descripcion: "El legendario Chepe Express: 673 km de viaje épico a través de las Barrancas del Cobre. Desde Chihuahua hasta Los Mochis, Sinaloa. La ruta de tren más espectacular del mundo, atravesando 6 barrancas más profundas que el Gran Cañón de Arizona.",
    estaciones_turisticas: ["chihuahua-central", "creel", "divisadero", "posada-barrancas", "el-fuerte", "los-mochis"],
    estaciones: ["chihuahua-central", "cuauhtemoc", "creel", "divisadero", "posada-barrancas", "bahuichivo", "el-fuerte", "los-mochis"],
    ruta_1_dia: {
      titulo: "Ruta Completa del Chepe: El Viaje de 16 Horas",
      paradas: [
        { estacion: "chihuahua-central", actividad: "6:00 AM - Salida de Chihuahua. Desayuno a bordo" },
        { estacion: "cuauhtemoc", actividad: "8:30 AM - Comunidades Menonitas" },
        { estacion: "creel", actividad: "2:00 PM - Parada en Creel (1.5 horas para explorar)" },
        { estacion: "divisadero", actividad: "4:30 PM - Divisadero: mirador espectacular (30 min)" },
        { estacion: "posada-barrancas", actividad: "6:00 PM - Posada Barrancas (opcional)" },
        { estacion: "bahuichivo", actividad: "7:30 PM - Bahuichivo (breve parada)" },
        { estacion: "el-fuerte", actividad: "9:30 PM - El Fuerte (cena y descanso)" },
        { estacion: "los-mochis", actividad: "10:00 AM (siguiente día) - Llegada a Los Mochis" }
      ]
    },
    seo_title: "Chepe Express Chihuahua — La Ruta de Tren Más Espectacular de México | MetroGuia",
    meta_description: "Chepe Express: 673 km de viaje épico a través de las Barrancas del Cobre. De Chihuahua a Los Mochis en 16 horas. Patrimonio de la humanidad en vías de tren.",
    h1: "Chepe Express — La Ruta del Tren Más Espectacular"
  },
  {
    id: "2",
    color: "#92400E",
    colorNombre: "Marrón oscuro",
    inicio: "Centro Histórico",
    fin: "Museo de la Revolución",
    total: 6,
    municipios: ["Chihuahua"],
    descripcion: "Línea urbana de Chihuahua que conecta los principales puntos turísticos: Centro Histórico, Palacio de Gobierno, Catedral, Zona Dorada, Universidad Autónoma, Quinta Gameros y Hacienda de Pancho Villa. Patrimonio colonial y revolucionario mexicano.",
    estaciones_turisticas: ["centro-chihuahua", "palacio-gobierno", "catedral-chihuahua", "museo-quinta-gameros", "pancho-villa-museo"],
    estaciones: ["centro-chihuahua", "palacio-gobierno", "catedral-chihuahua", "zona-dorada-chi", "uach", "museo-quinta-gameros", "pancho-villa-museo"],
    ruta_1_dia: {
      titulo: "Ruta de 1 Día: Chihuahua Histórico y Revolucionario",
      paradas: [
        { estacion: "centro-chihuahua", actividad: "9:00 AM - Centro Histórico y Zócalo" },
        { estacion: "palacio-gobierno", actividad: "10:00 AM - Murales de Aarón Piña (Palacio de Gobierno)" },
        { estacion: "catedral-chihuahua", actividad: "11:00 AM - Catedral Metropolitana" },
        { estacion: "zona-dorada-chi", actividad: "12:30 PM - Almuerzo en Zona Dorada" },
        { estacion: "museo-quinta-gameros", actividad: "2:30 PM - Quinta Gameros (Art Nouveau)" },
        { estacion: "pancho-villa-museo", actividad: "4:30 PM - Hacienda de Pancho Villa" }
      ]
    },
    seo_title: "Línea Urbana Chihuahua — Centro Histórico y Revolución | MetroGuia",
    meta_description: "Línea urbana de Chihuahua. Centro Histórico, Palacio de Gobierno, Catedral y museos revolucionarios.",
    h1: "Línea Urbana Chihuahua — Patrimonio Histórico"
  },
  {
    id: "3",
    color: "#2563EB",
    colorNombre: "Azul BRT",
    inicio: "Terminal Norte",
    fin: "Terminal Sur",
    total: 14,
    municipios: ["Chihuahua"],
    descripcion: "Línea 3 BRT Bowí: sistema moderno de transporte rápido de 22 km que conecta Terminal Norte hasta Terminal Sur. Pasa por zonas educativas (universidades), comerciales (Américas), residenciales (Altavista, Campestre) y zona industrial. Transporte de clase mundial para viajeros FIFA 2026.",
    estaciones_turisticas: ["terminal-norte-bowi", "centro-bowi", "americas-chi", "terminal-sur-bowi"],
    estaciones: ["terminal-norte-bowi", "periferico-norte", "universidad-chihuahua", "tecnologico-chihuahua", "sacramento", "ninos-heroes-chi", "centro-bowi", "independencia-chi", "americas-chi", "altavista-chi", "cantera-chi", "campestre-chi", "vialidad-sacramento", "terminal-sur-bowi"],
    ruta_1_dia: {
      titulo: "Ruta de 1 Día: BRT Bowí Norte a Sur",
      paradas: [
        { estacion: "terminal-norte-bowi", actividad: "8:00 AM - Salida de Terminal Norte" },
        { estacion: "periferico-norte", actividad: "8:15 AM - Compras en centro comercial" },
        { estacion: "universidad-chihuahua", actividad: "8:45 AM - Visita Campus universitario" },
        { estacion: "tecnologico-chihuahua", actividad: "9:30 AM - Tour institución técnica" },
        { estacion: "centro-bowi", actividad: "11:00 AM - Transferencia y descanso en centro" },
        { estacion: "independencia-chi", actividad: "12:00 PM - Almuerzo en Avenida Independencia" },
        { estacion: "americas-chi", actividad: "1:30 PM - Compras Centro Comercial Américas" },
        { estacion: "altavista-chi", actividad: "3:30 PM - Paseo zona residencial" },
        { estacion: "terminal-sur-bowi", actividad: "5:00 PM - Llegada Terminal Sur" }
      ]
    },
    seo_title: "Línea 3 BRT Bowí — Sistema Rápido Chihuahua | MetroGuia",
    meta_description: "BRT Bowí Línea 3: transporte rápido de 22 km en Chihuahua. Terminal Norte a Terminal Sur con 14 estaciones.",
    h1: "Línea 3 BRT Bowí — Transporte Rápido Moderno"
  }
];
