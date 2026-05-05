export const lineasBerlin = [
  {
    id: "U2",
    color: "#DF2020",
    colorNombre: "Rojo (U2)",
    inicio: "Pankow",
    fin: "Ruhleben",
    total: 29,
    municipios: ["Berlin-Pankow", "Berlin-Mitte", "Berlin-Schöneberg", "Berlin-Charlottenburg"],
    descripcion: "La U2 (roja) es una de las líneas más históricas del U-Bahn de Berlín, conectando el este (Pankow, Prenzlauer Berg) con el oeste (Charlottenburg, Ruhleben). Atraviesa el corazón de la ciudad pasando por Alexanderplatz, Potsdamer Platz, Nollendorfplatz y el Zoológico. Es la línea que mejor refleja la historia de la división de Berlín.",
    estaciones_turisticas: ["alexanderplatz", "potsdamer-platz", "zoologischer-garten", "prenzlauer-berg-eberswalder", "nollendorfplatz"],
    estaciones: ["alexanderplatz", "potsdamer-platz", "zoologischer-garten", "prenzlauer-berg-eberswalder", "nollendorfplatz"],
    ruta_1_dia: {
      titulo: "De la Torre de TV al Zoo: el eje histórico de Berlín",
      paradas: [
        { estacion: "alexanderplatz", actividad: "Torre de Televisión y Reloj Mundial (09:00 h)" },
        { estacion: "potsdamer-platz", actividad: "Sony Center y Gemäldegalerie (11:00 h)" },
        { estacion: "nollendorfplatz", actividad: "Almuerzo en Schöneberg (13:30 h)" },
        { estacion: "zoologischer-garten", actividad: "Jardín Zoológico de Berlín y KaDeWe (15:00 h)" }
      ]
    },
    seo_title: "U2 — U-Bahn Berlín | MetroGuia",
    meta_description: "U2 roja del U-Bahn de Berlín: 29 estaciones de Pankow a Ruhleben. Alexanderplatz, Potsdamer Platz, Zoológico.",
    h1: "U2 — U-Bahn Berlín (Roja)"
  },
  {
    id: "U5",
    color: "#7E4E9D",
    colorNombre: "Morado (U5)",
    inicio: "Hönow",
    fin: "Hauptbahnhof",
    total: 34,
    municipios: ["Hellersdorf", "Lichtenberg", "Friedrichshain", "Mitte"],
    descripcion: "La U5 (morada) es la línea más larga del U-Bahn de Berlín y la más nueva en su tramo central, inaugurado en 2020. Conecta el este de la ciudad (Hönow) con la Estación Central, pasando por Frankfurter Allee, Alexanderplatz, Museumsinsel, Unter den Linden, la Puerta de Brandeburgo y el Reichstag. Es la línea del centro histórico reunificado.",
    estaciones_turisticas: ["alexanderplatz", "museum-island", "unter-den-linden", "brandenburger-tor", "berlin-hbf"],
    estaciones: ["alexanderplatz", "museum-island", "unter-den-linden", "brandenburger-tor", "berlin-hbf"],
    ruta_1_dia: {
      titulo: "El Corazón Histórico: de la Puerta de Brandeburgo a Alexanderplatz",
      paradas: [
        { estacion: "berlin-hbf", actividad: "Llegada, Reichstag — reservar cúpula en bundestag.de (09:00 h)" },
        { estacion: "brandenburger-tor", actividad: "Puerta de Brandeburgo y Memorial del Holocausto (10:30 h)" },
        { estacion: "unter-den-linden", actividad: "Foro Humboldt e Isla de los Museos (13:00 h)" },
        { estacion: "alexanderplatz", actividad: "Torre de Televisión y Reloj Mundial (16:30 h)" }
      ]
    },
    seo_title: "U5 — U-Bahn Berlín | MetroGuia",
    meta_description: "U5 morada del U-Bahn de Berlín: 34 estaciones de Hönow a Hauptbahnhof. Alexanderplatz, Puerta de Brandeburgo, Isla de los Museos.",
    h1: "U5 — U-Bahn Berlín (Morada)"
  },
  {
    id: "U1",
    color: "#7DAD4C",
    colorNombre: "Verde (U1)",
    inicio: "Uhlandstraße",
    fin: "Warschauer Straße",
    total: 16,
    municipios: ["Berlin-Charlottenburg", "Berlin-Schöneberg", "Berlin-Kreuzberg", "Berlin-Friedrichshain"],
    descripcion: "La U1 (verde) es una de las líneas más históricas y espectaculares del U-Bahn berlinés: circula en gran parte sobre un viaducto elevado de hierro de 1902, con vistas sobre los tejados de Kreuzberg. Conecta Charlottenburg con Friedrichshain, pasando por Nollendorfplatz, Gleisdreieck, Hallesches Tor y Kottbusser Tor. Es la línea de la contracultura berlinesa.",
    estaciones_turisticas: ["kreuzberg-kottbusser-tor", "nollendorfplatz", "warschauer-strasse"],
    estaciones: ["kreuzberg-kottbusser-tor", "nollendorfplatz", "warschauer-strasse"],
    ruta_1_dia: {
      titulo: "Kreuzberg Auténtico: de Schöneberg a Friedrichshain",
      paradas: [
        { estacion: "nollendorfplatz", actividad: "Barrio de Schöneberg y barrio gay histórico (10:00 h)" },
        { estacion: "kreuzberg-kottbusser-tor", actividad: "El Kotti — döner, Kreuzberg multicultural (13:00 h)" },
        { estacion: "warschauer-strasse", actividad: "East Side Gallery y RAW Gelände (15:00 h)" }
      ]
    },
    seo_title: "U1 — U-Bahn Berlín | MetroGuia",
    meta_description: "U1 verde del U-Bahn de Berlín: Kottbusser Tor, Gleisdreieck, East Side Gallery. La línea aérea de Kreuzberg.",
    h1: "U1 — U-Bahn Berlín (Verde)"
  },
  {
    id: "U6",
    color: "#8C6DBF",
    colorNombre: "Violeta (U6)",
    inicio: "Alt-Tegel",
    fin: "Alt-Mariendorf",
    total: 29,
    municipios: ["Berlin-Reinickendorf", "Berlin-Wedding", "Berlin-Mitte", "Berlin-Tempelhof"],
    descripcion: "La U6 (violeta) es la única línea de diámetro norte-sur puro de Berlín, conectando Alt-Tegel al norte con Alt-Mariendorf al sur, atravesando Wedding, Mitte y Tempelhof. Pasa por Friedrichstraße, Stadtmitte y Checkpoint Charlie, y es fundamental para llegar al Gendarmenmarkt y las áreas del centro histórico.",
    estaciones_turisticas: ["friedrichstrasse"],
    estaciones: ["friedrichstrasse"],
    ruta_1_dia: {
      titulo: "Norte a Sur: Wedding, Mitte y Kreuzberg",
      paradas: [
        { estacion: "friedrichstrasse", actividad: "Checkpoint Charlie y Gendarmenmarkt (10:00 h)" }
      ]
    },
    seo_title: "U6 — U-Bahn Berlín | MetroGuia",
    meta_description: "U6 violeta del U-Bahn de Berlín: 29 estaciones de Alt-Tegel a Alt-Mariendorf. Friedrichstraße, Checkpoint Charlie, Gendarmenmarkt.",
    h1: "U6 — U-Bahn Berlín (Violeta)"
  },
  {
    id: "U8",
    color: "#224F9F",
    colorNombre: "Azul Oscuro (U8)",
    inicio: "Wittenau",
    fin: "Hermannstraße",
    total: 24,
    municipios: ["Berlin-Reinickendorf", "Berlin-Wedding", "Berlin-Mitte", "Berlin-Neukölln"],
    descripcion: "La U8 (azul oscuro) conecta el norte de Reinickendorf con Neukölln al sur, atravesando Wedding, Rosenthaler Platz y Hackescher Markt antes de llegar a Alexanderplatz y seguir hacia el sur por Kreuzberg. Es la línea de los barrios más multiculturales y auténticos de Berlín.",
    estaciones_turisticas: ["alexanderplatz", "hackescher-markt", "mitte-rosenthaler-platz"],
    estaciones: ["alexanderplatz", "hackescher-markt", "mitte-rosenthaler-platz"],
    ruta_1_dia: {
      titulo: "Del Mitte Auténtico a Kreuzberg",
      paradas: [
        { estacion: "mitte-rosenthaler-platz", actividad: "Galería Bode y bares de Torstraße (10:00 h)" },
        { estacion: "hackescher-markt", actividad: "Hackesche Höfe y patios art nouveau (12:00 h)" },
        { estacion: "alexanderplatz", actividad: "Torre de Televisión y Karl-Marx-Allee (15:00 h)" }
      ]
    },
    seo_title: "U8 — U-Bahn Berlín | MetroGuia",
    meta_description: "U8 azul oscuro del U-Bahn de Berlín: 24 estaciones de Wittenau a Hermannstraße. Alexanderplatz, Hackescher Markt, Kreuzberg.",
    h1: "U8 — U-Bahn Berlín (Azul Oscuro)"
  },
  {
    id: "S-Bahn",
    color: "#008D4F",
    colorNombre: "Verde S-Bahn",
    inicio: "Red completa",
    fin: "Red completa",
    total: 166,
    municipios: ["Berlín", "Brandeburgo"],
    descripcion: "El S-Bahn de Berlín es la red de trenes de cercanías que complementa el U-Bahn, con 166 estaciones que cubren toda la región metropolitana. Destaca el S-Ring (líneas S41/S42), el anillo circular que rodea el centro de Berlín. El S-Bahn conecta los aeropuertos BER y el antiguo Tegel, y llega al Flughafen BER en 30 minutos desde el Hauptbahnhof con el Airport Express (FEX).",
    estaciones_turisticas: ["berlin-hbf", "berlin-sudkreuz", "flughafen-ber"],
    estaciones: ["berlin-hbf", "berlin-sudkreuz", "flughafen-ber"],
    ruta_1_dia: {
      titulo: "Del Aeropuerto al Centro: Llegada Perfecta a Berlín",
      paradas: [
        { estacion: "flughafen-ber", actividad: "Llegada — tomar el Airport Express FEX (varies)" },
        { estacion: "berlin-hbf", actividad: "Berlin Hauptbahnhof — check-in y primer paseo (varies)" },
        { estacion: "berlin-sudkreuz", actividad: "Parque de Tempelhof — vuelta a la pista del aeropuerto (tarde)" }
      ]
    },
    seo_title: "S-Bahn Berlín — Aeropuerto BER al Centro | MetroGuia",
    meta_description: "S-Bahn de Berlín: 166 estaciones, el anillo circular S-Ring y conexión directa al aeropuerto BER en 30 minutos. Hauptbahnhof, Ostbahnhof, Südkreuz.",
    h1: "S-Bahn Berlín — La Red de Cercanías"
  }
];
