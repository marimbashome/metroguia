export const grafoBerlin = {
  'berlin-hbf': {
    ciudad: 'berlin',
    nombre: 'Berlín Hauptbahnhof',
    lineas: ['U5', 'S3', 'S5', 'S7', 'S9', 'ICE'],
    adyacentes: [
      { slug: 'brandenburger-tor', tiempo: 3, linea: 'U5', tipo: 'normal' },
      { slug: 'zoologischer-garten', tiempo: 6, linea: 'S5', tipo: 'normal' },
      { slug: 'flughafen-ber', tiempo: 30, linea: 'FEX', tipo: 'normal' }
    ]
  },
  'potsdamer-platz': {
    ciudad: 'berlin',
    nombre: 'Potsdamer Platz',
    lineas: ['U2', 'S1', 'S2', 'S25'],
    adyacentes: [
      { slug: 'brandenburger-tor', tiempo: 4, linea: 'S1', tipo: 'normal' },
      { slug: 'zoologischer-garten', tiempo: 5, linea: 'S1', tipo: 'normal' },
      { slug: 'nollendorfplatz', tiempo: 5, linea: 'U2', tipo: 'normal' }
    ]
  },
  'brandenburger-tor': {
    ciudad: 'berlin',
    nombre: 'Puerta de Brandeburgo',
    lineas: ['U5', 'S1', 'S2', 'S25'],
    adyacentes: [
      { slug: 'berlin-hbf', tiempo: 3, linea: 'U5', tipo: 'normal' },
      { slug: 'unter-den-linden', tiempo: 2, linea: 'U5', tipo: 'normal' },
      { slug: 'potsdamer-platz', tiempo: 4, linea: 'S1', tipo: 'normal' }
    ]
  },
  'unter-den-linden': {
    ciudad: 'berlin',
    nombre: 'Unter den Linden',
    lineas: ['U5'],
    adyacentes: [
      { slug: 'brandenburger-tor', tiempo: 2, linea: 'U5', tipo: 'normal' },
      { slug: 'museum-island', tiempo: 2, linea: 'U5', tipo: 'normal' },
      { slug: 'friedrichstrasse', tiempo: 3, linea: 'U6', tipo: 'transbordo' }
    ]
  },
  'alexanderplatz': {
    ciudad: 'berlin',
    nombre: 'Alexanderplatz',
    lineas: ['U2', 'U5', 'U8', 'S3', 'S5', 'S7', 'S9'],
    adyacentes: [
      { slug: 'museum-island', tiempo: 2, linea: 'U5', tipo: 'normal' },
      { slug: 'friedrichstrasse', tiempo: 3, linea: 'U6', tipo: 'transbordo' },
      { slug: 'hackescher-markt', tiempo: 2, linea: 'S5', tipo: 'normal' },
      { slug: 'warschauer-strasse', tiempo: 5, linea: 'U1', tipo: 'transbordo' },
      { slug: 'potsdamer-platz', tiempo: 6, linea: 'U2', tipo: 'normal' }
    ]
  },
  'friedrichstrasse': {
    ciudad: 'berlin',
    nombre: 'Friedrichstraße',
    lineas: ['U6', 'S1', 'S2', 'S25'],
    adyacentes: [
      { slug: 'unter-den-linden', tiempo: 3, linea: 'U6', tipo: 'normal' },
      { slug: 'alexanderplatz', tiempo: 3, linea: 'U6', tipo: 'normal' },
      { slug: 'hackescher-markt', tiempo: 3, linea: 'S1', tipo: 'normal' }
    ]
  },
  'museum-island': {
    ciudad: 'berlin',
    nombre: 'Museumsinsel',
    lineas: ['U5'],
    adyacentes: [
      { slug: 'unter-den-linden', tiempo: 2, linea: 'U5', tipo: 'normal' },
      { slug: 'alexanderplatz', tiempo: 2, linea: 'U5', tipo: 'normal' }
    ]
  },
  'kurfurstendamm': {
    ciudad: 'berlin',
    nombre: 'Kurfürstendamm',
    lineas: ['U9'],
    adyacentes: [
      { slug: 'zoologischer-garten', tiempo: 3, linea: 'U9', tipo: 'normal' },
      { slug: 'nollendorfplatz', tiempo: 4, linea: 'U9', tipo: 'normal' }
    ]
  },
  'zoologischer-garten': {
    ciudad: 'berlin',
    nombre: 'Zoologischer Garten',
    lineas: ['U2', 'U9', 'S3', 'S5', 'S7', 'S9'],
    adyacentes: [
      { slug: 'kurfurstendamm', tiempo: 3, linea: 'U9', tipo: 'normal' },
      { slug: 'charlottenburg', tiempo: 4, linea: 'S5', tipo: 'normal' },
      { slug: 'potsdamer-platz', tiempo: 5, linea: 'S1', tipo: 'normal' },
      { slug: 'berlin-hbf', tiempo: 6, linea: 'S5', tipo: 'normal' },
      { slug: 'nollendorfplatz', tiempo: 6, linea: 'U2', tipo: 'normal' }
    ]
  },
  'charlottenburg': {
    ciudad: 'berlin',
    nombre: 'Charlottenburg',
    lineas: ['S5', 'S7', 'S75'],
    adyacentes: [
      { slug: 'zoologischer-garten', tiempo: 4, linea: 'S5', tipo: 'normal' }
    ]
  },
  'nollendorfplatz': {
    ciudad: 'berlin',
    nombre: 'Nollendorfplatz',
    lineas: ['U1', 'U2', 'U3', 'U4'],
    adyacentes: [
      { slug: 'zoologischer-garten', tiempo: 6, linea: 'U2', tipo: 'normal' },
      { slug: 'potsdamer-platz', tiempo: 5, linea: 'U2', tipo: 'normal' },
      { slug: 'kreuzberg-kottbusser-tor', tiempo: 4, linea: 'U1', tipo: 'normal' },
      { slug: 'schoneberg-rathaus', tiempo: 3, linea: 'U4', tipo: 'normal' }
    ]
  },
  'schoneberg-rathaus': {
    ciudad: 'berlin',
    nombre: 'Rathaus Schöneberg',
    lineas: ['U4'],
    adyacentes: [
      { slug: 'nollendorfplatz', tiempo: 3, linea: 'U4', tipo: 'normal' }
    ]
  },
  'kreuzberg-kottbusser-tor': {
    ciudad: 'berlin',
    nombre: 'Kottbusser Tor',
    lineas: ['U1', 'U8'],
    adyacentes: [
      { slug: 'nollendorfplatz', tiempo: 4, linea: 'U1', tipo: 'normal' },
      { slug: 'warschauer-strasse', tiempo: 6, linea: 'U1', tipo: 'normal' },
      { slug: 'alexanderplatz', tiempo: 7, linea: 'U8', tipo: 'normal' }
    ]
  },
  'berlin-ostbahnhof': {
    ciudad: 'berlin',
    nombre: 'Ostbahnhof',
    lineas: ['S3', 'S5', 'S7', 'S9'],
    adyacentes: [
      { slug: 'alexanderplatz', tiempo: 4, linea: 'S5', tipo: 'normal' },
      { slug: 'warschauer-strasse', tiempo: 3, linea: 'S3', tipo: 'normal' }
    ]
  },
  'warschauer-strasse': {
    ciudad: 'berlin',
    nombre: 'Warschauer Straße',
    lineas: ['U1', 'S3', 'S5', 'S7', 'S9'],
    adyacentes: [
      { slug: 'kreuzberg-kottbusser-tor', tiempo: 6, linea: 'U1', tipo: 'normal' },
      { slug: 'berlin-ostbahnhof', tiempo: 3, linea: 'S3', tipo: 'normal' },
      { slug: 'prenzlauer-berg-eberswalder', tiempo: 10, linea: 'S8', tipo: 'normal' }
    ]
  },
  'prenzlauer-berg-eberswalder': {
    ciudad: 'berlin',
    nombre: 'Eberswalder Straße',
    lineas: ['U2'],
    adyacentes: [
      { slug: 'alexanderplatz', tiempo: 7, linea: 'U2', tipo: 'normal' },
      { slug: 'hackescher-markt', tiempo: 5, linea: 'S8', tipo: 'transbordo' }
    ]
  },
  'hackescher-markt': {
    ciudad: 'berlin',
    nombre: 'Hackescher Markt',
    lineas: ['S3', 'S5', 'S7', 'S9'],
    adyacentes: [
      { slug: 'alexanderplatz', tiempo: 2, linea: 'S5', tipo: 'normal' },
      { slug: 'friedrichstrasse', tiempo: 3, linea: 'S1', tipo: 'normal' },
      { slug: 'mitte-rosenthaler-platz', tiempo: 5, linea: 'U8', tipo: 'transbordo' }
    ]
  },
  'mitte-rosenthaler-platz': {
    ciudad: 'berlin',
    nombre: 'Rosenthaler Platz',
    lineas: ['U8'],
    adyacentes: [
      { slug: 'hackescher-markt', tiempo: 5, linea: 'U8', tipo: 'normal' },
      { slug: 'alexanderplatz', tiempo: 4, linea: 'U8', tipo: 'normal' }
    ]
  },
  'berlin-sudkreuz': {
    ciudad: 'berlin',
    nombre: 'Südkreuz',
    lineas: ['S1', 'S2', 'S25', 'S41', 'S42', 'S45', 'S46'],
    adyacentes: [
      { slug: 'potsdamer-platz', tiempo: 6, linea: 'S1', tipo: 'normal' },
      { slug: 'flughafen-ber', tiempo: 25, linea: 'S45', tipo: 'normal' }
    ]
  },
  'flughafen-ber': {
    ciudad: 'berlin',
    nombre: 'Flughafen BER',
    lineas: ['S9', 'S45', 'FEX'],
    adyacentes: [
      { slug: 'berlin-hbf', tiempo: 30, linea: 'FEX', tipo: 'normal' },
      { slug: 'berlin-sudkreuz', tiempo: 25, linea: 'S45', tipo: 'normal' }
    ]
  }
};
