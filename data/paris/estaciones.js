export const estacionesParis = [
  {
    slug: "chatelet-les-halles",
    nombre: "Châtelet – Les Halles",
    linea: "1",
    municipio: "Paris 1er",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Centre Pompidou", tipo: "museo", distancia: "8 min caminando" },
      { nombre: "Sainte-Chapelle", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Tour Saint-Jacques", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Forum des Halles", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["chatelet-les-halles"],
    seo_title: "Châtelet – Les Halles — Metro París | MetroGuia",
    meta_description: "Châtelet–Les Halles, el mayor nudo de transporte de Europa. 5 líneas de metro, RER y acceso al Centre Pompidou y Sainte-Chapelle.",
    h1: "Châtelet – Les Halles — Métro de París",
    intro: "Châtelet–Les Halles es la mayor estación de metro del mundo y el corazón geográfico de París. Con 5 líneas de metro y 5 líneas de RER, más de 500,000 viajeros la usan cada día.",
    tips: [
      "El Centre Pompidou tiene entrada gratuita los primeros domingos de cada mes.",
      "Sainte-Chapelle es el vitral gótico más bello del mundo — reserva para evitar colas.",
      "El Forum des Halles tiene una piscina olímpica en el subsuelo accesible al público.",
      "Desde aquí puedes ir caminando a la Île de la Cité en 10 minutos."
    ],
    mejor_horario: "Evita las 08-09h y 18-19h entre semana. Mañanas de fin de semana son perfectas.",
    mundial_relevancia: "La mayor estación subterránea del mundo por número de andenes y conexiones.",
    descripcion_turistica: "Châtelet ocupa el lugar donde estuvo el castillo que defendía el Grand Pont sobre el Sena en el París medieval. Hoy es el enorme ombligo de la red de transporte parisina, rodeado de los barrios más históricos: Le Marais, Île de la Cité y Les Halles.",
    lugares_cercanos: [
      { nombre: "Centre Pompidou", tipo: "museo", distancia: "0.6 km", descripcion: "El museo de arte moderno más visitado de Europa con arquitectura 'inside-out' de Piano y Rogers." },
      { nombre: "Sainte-Chapelle", tipo: "turismo", distancia: "0.7 km", descripcion: "La capilla gótica con los vitrales más extraordinarios del mundo medieval, en la Île de la Cité." },
      { nombre: "Tour Saint-Jacques", tipo: "turismo", distancia: "0.2 km", descripcion: "Torre gótica aislada del siglo XVI, único vestigio de la iglesia de Saint-Jacques-la-Boucherie." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Noctiliens (autobuses nocturnos) cubren la noche. Último metro varía por línea."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso parcial. Elevadores en algunas conexiones pero no en todas las líneas."
    }
  },
  {
    slug: "gare-du-nord",
    nombre: "Gare du Nord",
    linea: "4",
    municipio: "Paris 10e",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Eurostar Terminal (Londres)", tipo: "transporte", distancia: "0 min caminando" },
      { nombre: "Thalys (Bruselas/Ámsterdam)", tipo: "transporte", distancia: "0 min caminando" },
      { nombre: "Sacré-Cœur (Montmartre)", tipo: "turismo", distancia: "20 min caminando" },
      { nombre: "Canal Saint-Martin", tipo: "parque", distancia: "15 min caminando" }
    ],
    transferencias: ["gare-du-nord"],
    seo_title: "Gare du Nord — Metro París | MetroGuia",
    meta_description: "Gare du Nord, la estación más concurrida de Europa. Hub del Eurostar a Londres, Thalys a Bruselas y Amsterdam, y acceso a Montmartre.",
    h1: "Gare du Nord — Métro de París",
    intro: "Gare du Nord es la estación más concurrida de Europa con 700,000 viajeros diarios. Hub del Eurostar a Londres, Thalys a Bruselas, Amsterdam y Colonia, y trenes regionales del norte de Francia.",
    tips: [
      "El Eurostar necesita pasaporte y control de aduana — llega con 45 min de antelación mínimo.",
      "El Canal Saint-Martin, a 15 minutos caminando, es el barrio más de moda de París.",
      "Gare du Nord tiene las mejores brasseries de estación de París para una última comida.",
      "El barrio de La Chapelle al norte tiene la mejor cocina africana de Europa."
    ],
    mejor_horario: "Entre semana, evitar 07-09h y 17-20h. Fines de semana mucho más tranquilo.",
    mundial_relevancia: "La estación ferroviaria más concurrida del mundo fuera de Asia.",
    descripcion_turistica: "Gare du Nord, construida en 1846 y renovada por Jacques Hittorff en 1864, es una de las obras maestras del eclecticismo parisino. Su fachada con 23 estatuas alegóricas representa las ciudades de Europa conectadas a París por tren.",
    lugares_cercanos: [
      { nombre: "Canal Saint-Martin", tipo: "parque", distancia: "1.2 km", descripcion: "El canal más fotografiado de París con puentes basculantes de hierro y cafés bohemios." },
      { nombre: "Sacré-Cœur", tipo: "turismo", distancia: "1.5 km", descripcion: "La basílica blanca de Montmartre con las mejores vistas panorámicas de París." },
      { nombre: "Marché d'Aligre", tipo: "alimento", distancia: "3.0 km", descripcion: "El mercado más auténtico de París, favorito de los parisinos." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "RER B hacia CDG aeropuerto desde este punto. Verificar andén correcto."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso total en las líneas principales. Verificar accesibilidad por línea específica."
    }
  },
  {
    slug: "gare-de-lyon",
    nombre: "Gare de Lyon",
    linea: "1",
    municipio: "Paris 12e",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Le Train Bleu (restaurante 1901)", tipo: "alimento", distancia: "1 min caminando" },
      { nombre: "Promenade Plantée (vía verde)", tipo: "parque", distancia: "8 min caminando" },
      { nombre: "Viaduc des Arts", tipo: "comercio", distancia: "8 min caminando" },
      { nombre: "Bois de Vincennes", tipo: "parque", distancia: "20 min caminando" }
    ],
    transferencias: ["gare-de-lyon"],
    seo_title: "Gare de Lyon — Metro París | MetroGuia",
    meta_description: "Gare de Lyon, hub del TGV hacia el sur de Francia y España. Le Train Bleu (restaurante histórico) y acceso a la Promenade Plantée, el parque elevado original.",
    h1: "Gare de Lyon — Métro de París",
    intro: "Gare de Lyon es el punto de partida del TGV hacia Lyon, Marsella, Barcelona y toda la Côte d'Azur. Dentro de la estación, Le Train Bleu es uno de los restaurantes históricos más bellos de Europa.",
    tips: [
      "Le Train Bleu (1901) tiene plafones belle époque únicos — aunque sea para tomar un café.",
      "La Promenade Plantée es la primera vía verde elevada del mundo — anterior a la High Line de Nueva York.",
      "El Viaduc des Arts tiene talleres de artesanos en los arcos del viaducto del siglo XIX.",
      "El tren al aeropuerto Orly sale desde aquí vía el Orlyval."
    ],
    mejor_horario: "Mañanas de fin de semana para la Promenade Plantée sin gente.",
    mundial_relevancia: "Gare de Lyon inspiró la High Line de Nueva York — la Promenade Plantée fue la primera vía verde elevada del mundo.",
    descripcion_turistica: "Gare de Lyon tiene la Torre del Reloj (La Tour de l'Horloge) más bella de París y es la puerta a todo el sur de Francia. El barrio de Bercy, junto a la estación, ha revitalizado los antiguos almacenes de vino en restaurantes, bares y jardines.",
    lugares_cercanos: [
      { nombre: "Le Train Bleu", tipo: "alimento", distancia: "0.1 km", descripcion: "Restaurante belle époque de 1901 en la estación, declarado Monumento Histórico." },
      { nombre: "Promenade Plantée", tipo: "parque", distancia: "0.6 km", descripcion: "La primera vía verde elevada del mundo (1993), 4.7 km sobre el viaducto." },
      { nombre: "Bercy Village", tipo: "comercio", distancia: "1.0 km", descripcion: "Antiguas bodegas de vino del siglo XIX convertidas en tiendas, restaurantes y cines." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "RER A y D desde esta estación. Conexión Orlyval para aeropuerto Orly."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso completo en la estación ferroviaria. Verificar accesibilidad por línea de metro."
    }
  },
  {
    slug: "opera-garnier",
    nombre: "Opéra",
    linea: "3",
    municipio: "Paris 9e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Palais Garnier (Ópera)", tipo: "cultura", distancia: "1 min caminando" },
      { nombre: "Galeries Lafayette", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Printemps Haussmann", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Café de la Paix", tipo: "alimento", distancia: "2 min caminando" }
    ],
    transferencias: ["opera-garnier"],
    seo_title: "Opéra — Metro París | MetroGuia",
    meta_description: "Opéra, frente al Palais Garnier. Galeries Lafayette, Printemps y el Café de la Paix en el boulevard más elegante del mundo.",
    h1: "Opéra — Métro de París",
    intro: "Opéra es el epicentro del lujo parisino, frente al monumental Palais Garnier que inspiró El Fantasma de la Ópera. Las Galeries Lafayette y Printemps son dos de los grandes almacenes más bellos del mundo.",
    tips: [
      "El techo de la cúpula de las Galeries Lafayette es de acceso gratuito — las mejores vistas de París.",
      "El Palais Garnier tiene visitas de 10-17h incluso los días de ópera — la Gran Escalera es impresionante.",
      "El Café de la Paix (1862) ha sido frecuentado por Guy de Maupassant, Oscar Wilde y Hemingway.",
      "El bulevar Haussmann tiene los árboles más decorados de París en Navidad."
    ],
    mejor_horario: "Mañanas de martes a jueves para tiendas sin multitudes.",
    mundial_relevancia: "El Palais Garnier (1875) es el símbolo del Segundo Imperio francés y la ópera más espectacular del mundo.",
    descripcion_turistica: "El barrio de la Ópera es la París haussmanniana por excelencia: boulevares anchos, edificios de pierre de taille, mansiones y grandes almacenes. La ópera de Charles Garnier es un ejemplo de opulencia barroca que definió el ideal de lujo europeo en el siglo XIX.",
    lugares_cercanos: [
      { nombre: "Palais Garnier", tipo: "cultura", distancia: "0.1 km", descripcion: "La ópera más espectacular del mundo, escenario del Fantasma de la Ópera de Gaston Leroux." },
      { nombre: "Galeries Lafayette", tipo: "comercio", distancia: "0.2 km", descripcion: "Gran almacén con la cúpula art nouveau más bella de París — acceso gratuito a la azotea." },
      { nombre: "Printemps Haussmann", tipo: "comercio", distancia: "0.3 km", descripcion: "Gran almacén con la segunda cúpula más bella de París y excelente restaurante en la azotea." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "3 líneas en esta estación — verificar línea correcta."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso limitado. El metro de París tiene baja accesibilidad en general."
    }
  },
  {
    slug: "saint-michel-notre-dame",
    nombre: "Saint-Michel – Notre-Dame",
    linea: "4",
    municipio: "Paris 5e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Cathédrale Notre-Dame de Paris", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Sainte-Chapelle", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "Quartier Latin", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Shakespeare and Company", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: ["saint-michel-notre-dame"],
    seo_title: "Saint-Michel – Notre-Dame — Metro París | MetroGuia",
    meta_description: "Saint-Michel–Notre-Dame con acceso a la catedral de París, Sainte-Chapelle y el Quartier Latin. La Île de la Cité, corazón histórico de Francia.",
    h1: "Saint-Michel – Notre-Dame — Métro de París",
    intro: "Saint-Michel–Notre-Dame es la estación más histórica de París, en la isla que vio nacer a Lutecia (ciudad romana) y a la Francia medieval. Notre-Dame, restaurada tras el incendio de 2019, reabrió en diciembre de 2024.",
    tips: [
      "Notre-Dame reabrió en diciembre 2024 — reserva entrada online con antelación.",
      "Shakespeare and Company es la librería más famosa del mundo para literatura anglosajona.",
      "El Quartier Latin tiene las mejores librerías de viejo de Europa en el bouqinistes del Sena.",
      "El puente Saint-Louis, a 5 min, conecta con la Île Saint-Louis — helado Berthillon imprescindible."
    ],
    mejor_horario: "Amanecer para ver Notre-Dame sin turistas. Tarde para el Quartier Latin.",
    mundial_relevancia: "Notre-Dame de París es la catedral más visitada del mundo: 13 millones de visitantes anuales.",
    descripcion_turistica: "La Île de la Cité es el corazón de París — aquí habitaron los parisii galos, los romanos de Lutecia y los reyes francos. Notre-Dame (1163-1345) es la obra maestra del gótico francés y el símbolo espiritual de Francia.",
    lugares_cercanos: [
      { nombre: "Notre-Dame de Paris", tipo: "turismo", distancia: "0.4 km", descripcion: "La catedral gótica más famosa del mundo, reabierta en diciembre 2024 tras restauración." },
      { nombre: "Sainte-Chapelle", tipo: "turismo", distancia: "0.6 km", descripcion: "La capilla real con los vitrales góticos más extraordinarios del mundo." },
      { nombre: "Shakespeare and Company", tipo: "comercio", distancia: "0.2 km", descripcion: "La librería literaria más famosa del mundo, refugio de Hemingway y otros expatriados." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "RER C parada Notre-Dame en esta misma estación."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: false,
      banos_accesibles: false,
      notas: "Sin accesibilidad en esta estación. Usar alternativas accesibles."
    }
  },
  {
    slug: "musee-du-louvre",
    nombre: "Musée du Louvre",
    linea: "1",
    municipio: "Paris 1er",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Musée du Louvre", tipo: "museo", distancia: "2 min caminando" },
      { nombre: "Jardín de las Tullerías", tipo: "parque", distancia: "5 min caminando" },
      { nombre: "Palais Royal", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Pont des Arts (puente)", tipo: "turismo", distancia: "10 min caminando" }
    ],
    transferencias: ["musee-du-louvre"],
    seo_title: "Palais Royal – Musée du Louvre — Metro París | MetroGuia",
    meta_description: "Estación del Louvre — el museo más grande del mundo. Acceso directo al Louvre, Jardín de las Tullerías y Palais Royal.",
    h1: "Palais Royal – Musée du Louvre — Métro de París",
    intro: "La estación Palais Royal–Musée du Louvre da acceso directo al museo más visitado del mundo. La pirámide de cristal de I.M. Pei (1989) es la entrada más reconocible de cualquier museo.",
    tips: [
      "Reserva entrada online al Louvre — evitas la cola y ahorras tiempo.",
      "Los miércoles y viernes el Louvre está abierto hasta las 21:45h — menos gente al atardecer.",
      "La Venus de Milo, la Victoria de Samotracia y la Gioconda merecen el viaje por sí solas.",
      "El jardín de las Tullerías tiene la mejor estatuaria al aire libre de París — entrada gratuita."
    ],
    mejor_horario: "Miércoles o viernes en la noche (19-21h) para el Louvre más tranquilo.",
    mundial_relevancia: "El Louvre es el museo más visitado del mundo con 9 millones de visitas anuales.",
    descripcion_turistica: "El Louvre fue palacio real desde Francisco I hasta Luis XIV antes de convertirse en museo en 1793. Sus 72,735 m² de galerías albergan 380,000 obras — para verlas todas en un minuto cada una necesitarías 266 días.",
    lugares_cercanos: [
      { nombre: "Musée du Louvre", tipo: "museo", distancia: "0.2 km", descripcion: "El museo más grande del mundo con la Gioconda, Venus de Milo y miles de obras maestras." },
      { nombre: "Jardín de las Tullerías", tipo: "parque", distancia: "0.4 km", descripcion: "El jardín formal más antiguo de París, entre el Louvre y la Place de la Concorde." },
      { nombre: "Palais Royal", tipo: "turismo", distancia: "0.3 km", descripcion: "Palacio con jardín secreto y las famosas columnas de Buren en el patio." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Líneas 1 y 7 en esta estación. El Louvre cierra los martes."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa en la línea 1 (totalmente renovada). El Louvre también es totalmente accesible."
    }
  },
  {
    slug: "champs-elysees-clemenceau",
    nombre: "Champs-Élysées – Clemenceau",
    linea: "1",
    municipio: "Paris 8e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Avenue des Champs-Élysées", tipo: "comercio", distancia: "1 min caminando" },
      { nombre: "Grand Palais", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Petit Palais", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Pont Alexandre III", tipo: "turismo", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Champs-Élysées – Clemenceau — Metro París | MetroGuia",
    meta_description: "Champs-Élysées–Clemenceau con acceso al Grand Palais, Petit Palais y el boulevard más famoso del mundo. El París del Segundo Imperio.",
    h1: "Champs-Élysées – Clemenceau — Métro de París",
    intro: "Champs-Élysées–Clemenceau da acceso al tramo más lujoso de la avenida más famosa del mundo, con el Grand Palais recién renovado y el Pont Alexandre III, el puente más ornamentado de Europa.",
    tips: [
      "El Grand Palais renovado (reabrió 2024) acoge las principales exposiciones internacionales de París.",
      "El Petit Palais (gratuito) tiene una colección permanente de arte sorprendentemente buena.",
      "El Pont Alexandre III al atardecer es la postal de París más romántica — mejor que el Sena.",
      "El 14 de julio (Bastille Day) el desfile militar baja por los Champs-Élysées — llega muy temprano."
    ],
    mejor_horario: "Amanecer para los Champs sin turistas. Atardecer para el Pont Alexandre III.",
    mundial_relevancia: "Los Champs-Élysées son el escenario del Tour de Francia, el 14 de julio y los eventos más celebrados de la república francesa.",
    descripcion_turistica: "La avenida de los Champs-Élysées, de 1.9 km entre el Louvre y el Arco de Triunfo, es el eje histórico de París trazado por Le Nôtre en el siglo XVII. El Grand Palais y el Petit Palais fueron construidos para la Exposición Universal de 1900.",
    lugares_cercanos: [
      { nombre: "Grand Palais", tipo: "museo", distancia: "0.2 km", descripcion: "El palacio de exposiciones belle époque renovado, uno de los espacios más impresionantes de Europa." },
      { nombre: "Petit Palais", tipo: "museo", distancia: "0.3 km", descripcion: "Museo de Bellas Artes de la ciudad de París, gratuito y con jardín interior." },
      { nombre: "Pont Alexandre III", tipo: "turismo", distancia: "0.4 km", descripcion: "El puente más ornamentado y fotogénico de París, con candiles dorados y cariátides." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Estación en superficie — entorno peatonal y turístico."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Línea 1 completamente accesible."
    }
  },
  {
    slug: "charles-de-gaulle-etoile",
    nombre: "Charles de Gaulle – Étoile",
    linea: "1",
    municipio: "Paris 8e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Arc de Triomphe", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Avenue des Champs-Élysées (inicio)", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Musée Marmottan Monet (cercano)", tipo: "museo", distancia: "20 min en metro" }
    ],
    transferencias: ["charles-de-gaulle-etoile"],
    seo_title: "Charles de Gaulle – Étoile — Metro París | MetroGuia",
    meta_description: "Charles de Gaulle–Étoile con el Arco de Triunfo y el inicio de los Champs-Élysées. El símbolo de la Victoria de Francia y la mejor vista de la ciudad.",
    h1: "Charles de Gaulle – Étoile — Métro de París",
    intro: "Charles de Gaulle–Étoile es la estación bajo el Arco de Triunfo, el monumento más representativo de Francia. Desde la terraza del Arco a 50 metros de altura, la vista de los 12 bulevares en estrella es única.",
    tips: [
      "Sube al Arco de Triunfo al atardecer — la vista de los Champs-Élysées iluminados es mágica.",
      "Nunca cruces la rotonda de l'Étoile a pie — usa el túnel subterráneo.",
      "La tumba del Soldado Desconocido (1920) está en la base del Arco — la llama se aviva cada tarde a las 18:30h.",
      "Hay 12 avenidas en estrella desde aquí — impresionante desde el aire."
    ],
    mejor_horario: "Atardecer para la terraza del Arco. Mañana temprano para los Champs sin multitudes.",
    mundial_relevancia: "El Arco de Triunfo es el símbolo de los ejércitos de Napoleón y la República Francesa, visto desde todo el mundo el 14 de julio.",
    descripcion_turistica: "El Arco de Triunfo (1806-1836) fue ordenado por Napoleón para conmemorar sus victorias. Bajo sus bóvedas están grabados los nombres de 660 generales y 128 batallas del Imperio. La tumba del Soldado Desconocido (1920) honra a los caídos de la Primera Guerra Mundial.",
    lugares_cercanos: [
      { nombre: "Arc de Triomphe", tipo: "turismo", distancia: "0.1 km", descripcion: "El Arco de Triunfo de Napoleón con terraza a 50m y vista de los 12 bulevares en estrella." },
      { nombre: "Champs-Élysées (inicio)", tipo: "comercio", distancia: "0.3 km", descripcion: "El inicio del boulevard más famoso del mundo, hacia el Louvre y la Concorde." },
      { nombre: "Avenue Montaigne", tipo: "comercio", distancia: "0.5 km", descripcion: "La calle de la haute couture: Dior, Chanel, Louis Vuitton y todas las grandes maisons." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "3 líneas de metro y RER A en esta estación — verificar línea correcta."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Línea 1 accesible. Verificar otras líneas."
    }
  },
  {
    slug: "trocadero",
    nombre: "Trocadéro",
    linea: "6",
    municipio: "Paris 16e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Palais de Chaillot", tipo: "museo", distancia: "2 min caminando" },
      { nombre: "Vista de la Torre Eiffel", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Musée de l'Homme", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Cité de l'Architecture", tipo: "museo", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Trocadéro — Metro París | MetroGuia",
    meta_description: "Trocadéro, con la mejor vista de la Torre Eiffel desde el Palais de Chaillot. El mirador gratuito más fotogénico de París.",
    h1: "Trocadéro — Métro de París",
    intro: "Trocadéro ofrece la vista más espectacular de la Torre Eiffel, desde el esplanade del Palais de Chaillot a nivel del primer piso de la Torre. La postal más icónica de París está aquí.",
    tips: [
      "La mejor foto de la Torre Eiffel está en la escalinata del Palais de Chaillot al atardecer.",
      "El Musée de l'Homme tiene acceso gratuito los primeros domingos de mes.",
      "La Cité de l'Architecture tiene una réplica a escala de las grandes catedrales francesas.",
      "El jardín del Trocadéro tiene fuentes que se iluminan de noche — espectacular."
    ],
    mejor_horario: "Atardecer para la foto de la Torre Eiffel desde el Trocadéro.",
    mundial_relevancia: "La vista del Trocadéro es la imagen de postal más reproducida del mundo.",
    descripcion_turistica: "El Trocadéro fue creado para la Exposición Universal de 1937, que también dio origen al Palais de Chaillot. Desde aquí la vista de la Torre Eiffel al otro lado del Sena es perfecta para comprender la escala colosal de la estructura de Gustave Eiffel.",
    lugares_cercanos: [
      { nombre: "Esplanade du Trocadéro", tipo: "turismo", distancia: "0.1 km", descripcion: "El mirador más fotogénico de París con la Torre Eiffel al fondo." },
      { nombre: "Musée de l'Homme", tipo: "museo", distancia: "0.2 km", descripcion: "Museo de antropología con colecciones únicas de culturas del mundo." },
      { nombre: "Cité de l'Architecture", tipo: "museo", distancia: "0.2 km", descripcion: "El mayor museo de arquitectura del mundo con réplicas de catedrales góticas." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Línea 6 en viaducto — trayecto exterior con vistas sobre París."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso limitado en línea 6."
    }
  },
  {
    slug: "bir-hakeim",
    nombre: "Bir-Hakeim",
    linea: "6",
    municipio: "Paris 15e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Torre Eiffel (acceso pie)", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Pont de Bir-Hakeim (viaducto)", tipo: "turismo", distancia: "0 min caminando" },
      { nombre: "Mémorial de la France Combattante", tipo: "turismo", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Bir-Hakeim — Metro París | MetroGuia",
    meta_description: "Bir-Hakeim, la estación del metro en el viaducto sobre el Sena. El puente fotogénico de Inception y la vista más cinematográfica de la Torre Eiffel.",
    h1: "Bir-Hakeim — Métro de París",
    intro: "Bir-Hakeim es la estación más cinematográfica de París: el metro circula sobre un viaducto de hierro en el Pont de Bir-Hakeim sobre el Sena, con la Torre Eiffel al fondo. Apareció en Inception y El Último Tango en París.",
    tips: [
      "El tránsito en viaducto de la línea 6 entre Passy y Bir-Hakeim ofrece las mejores vistas al Sena.",
      "El Pont de Bir-Hakeim con la Torre Eiffel al fondo es la imagen de películas de Woody Allen, Inception y más.",
      "Desde aquí puedes caminar hasta la Torre Eiffel en 10 minutos por el Champ de Mars.",
      "El Champ de Mars a las 23h tiene el espectáculo de luces de la Torre (cada hora en punto)."
    ],
    mejor_horario: "Noche para el espectáculo de luces de la Torre. Amanecer para las fotos en el puente.",
    mundial_relevancia: "El Pont de Bir-Hakeim y la Torre Eiffel forman la imagen más cinematográfica de París, escenario de decenas de películas.",
    descripcion_turistica: "Bir-Hakeim rinde homenaje a la batalla de Bir Hakeim (1942) donde la Francia Libre resistió a las tropas del Eje en el desierto de Libia. El puente de doble nivel (metro arriba, tráfico y peatones abajo) es una obra de ingeniería de la Belle Époque.",
    lugares_cercanos: [
      { nombre: "Torre Eiffel", tipo: "turismo", distancia: "0.8 km", descripcion: "La estructura de hierro más visitada del mundo, construida por Gustave Eiffel en 1889." },
      { nombre: "Champ de Mars", tipo: "parque", distancia: "0.5 km", descripcion: "El parque bajo la Torre Eiffel, perfecto para picnics con la mejor vista de París." },
      { nombre: "Pont de Bir-Hakeim", tipo: "turismo", distancia: "0.1 km", descripcion: "El puente de hierro de doble nivel donde el metro cruza sobre el Sena." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Tramo de línea 6 en exterior sobre el Sena — espectacular pero ruidoso."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin acceso en silla de ruedas en esta estación."
    }
  },
  {
    slug: "montparnasse-bienvenue",
    nombre: "Montparnasse – Bienvenüe",
    linea: "4",
    municipio: "Paris 14e",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Tour Montparnasse (mirador)", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Cimetière du Montparnasse", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "Gare Montparnasse (TGV)", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "Fondation Cartier", tipo: "museo", distancia: "10 min caminando" }
    ],
    transferencias: ["montparnasse-bienvenue"],
    seo_title: "Montparnasse – Bienvenüe — Metro París | MetroGuia",
    meta_description: "Montparnasse–Bienvenüe con la Tour Montparnasse, el cementerio de Montparnasse (Sartre, Beauvoir, Beckett) y la Gare Montparnasse para TGV.",
    h1: "Montparnasse – Bienvenüe — Métro de París",
    intro: "Montparnasse es el hub del sur de París y uno de los barrios más creativos del siglo XX. La Tour Montparnasse tiene el mejor mirador de París (sin la Torre en el paisaje) y el cementerio guarda a Sartre, de Beauvoir, Baudelaire y Beckett.",
    tips: [
      "La Tour Montparnasse tiene el mejor mirador de París porque la Torre Eiffel está en el paisaje.",
      "El Cimetière du Montparnasse tiene los mapas de tumbas célebres en la entrada — busca a Sartre.",
      "La Fondation Cartier tiene las exposiciones de arte contemporáneo más sorprendentes de París.",
      "Gare Montparnasse: TGV directo a Burdeos en 2h y a Toulouse en 4h30."
    ],
    mejor_horario: "Atardecer para el mirador de la Tour Montparnasse. Mañana para el cementerio.",
    mundial_relevancia: "Montparnasse fue la cuna del movimiento artístico de vanguardia parisino: Picasso, Dalí, Hemingway y Josephine Baker vivían aquí en los años 20.",
    descripcion_turistica: "Montparnasse fue en los años 20 el epicentro artístico mundial, cuando los cafés Dôme, Coupole y Select reunían a Picasso, Matisse, Modigliani y la generación perdida de expatriados americanos (Hemingway, Fitzgerald, Gertrude Stein).",
    lugares_cercanos: [
      { nombre: "Tour Montparnasse", tipo: "turismo", distancia: "0.2 km", descripcion: "El mirador más alto de París a 210m con la Torre Eiffel en el horizonte." },
      { nombre: "Cimetière du Montparnasse", tipo: "turismo", distancia: "0.6 km", descripcion: "Cementerio donde descansan Sartre, Beauvoir, Baudelaire, Beckett y Man Ray." },
      { nombre: "Fondation Cartier", tipo: "museo", distancia: "0.7 km", descripcion: "Museo de arte contemporáneo en edificio de Jean Nouvel con jardín de Lothar Baumgarten." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "4 líneas de metro en esta estación — la más compleja de intercambio en París."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso limitado por complejidad de la estación."
    }
  },
  {
    slug: "bastille",
    nombre: "Bastille",
    linea: "1",
    municipio: "Paris 11e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Place de la Bastille", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Opéra Bastille", tipo: "cultura", distancia: "2 min caminando" },
      { nombre: "Marché d'Aligre", tipo: "alimento", distancia: "8 min caminando" },
      { nombre: "Port de Plaisance de l'Arsenal", tipo: "turismo", distancia: "5 min caminando" }
    ],
    transferencias: ["bastille"],
    seo_title: "Bastille — Metro París | MetroGuia",
    meta_description: "Bastille, símbolo de la Revolución Francesa. Ópera Bastille, Marché d'Aligre y el barrio más animado de París los fines de semana.",
    h1: "Bastille — Métro de París",
    intro: "Bastille es el símbolo vivo de la Revolución Francesa. La plaza donde estaba la prisión derrocada el 14 de julio de 1789 es hoy el centro del barrio más animado de París, con la moderna Ópera Bastille y el canal Saint-Martin.",
    tips: [
      "El Marché d'Aligre (jueves-domingo) es el mercado más auténtico de París — llega antes de las 12h.",
      "La Ópera Bastille tiene entradas de última hora desde 40€ — consulta la web el mismo día.",
      "El Puerto del Arsenal tiene barcos y veleros amarrados — uno de los secretos mejor guardados de París.",
      "El barrio de Oberkampf, a 10 minutos, tiene la mejor vida nocturna de París."
    ],
    mejor_horario: "Fin de semana por la noche para la vida del barrio. Domingo mañana para el mercado.",
    mundial_relevancia: "La Bastille fue la prisión cuya caída el 14 de julio de 1789 marcó el inicio de la Revolución Francesa.",
    descripcion_turistica: "La prisión de la Bastille, símbolo del despotismo del Ancien Régime, fue asaltada el 14 de julio de 1789 — fecha que France celebra como fiesta nacional. Hoy la plaza alberga la Columna de Julio (en honor a otra revolución, la de 1830) y la Ópera Bastille inaugurada en el bicentenario de 1989.",
    lugares_cercanos: [
      { nombre: "Opéra Bastille", tipo: "cultura", distancia: "0.2 km", descripcion: "La ópera más grande del mundo inaugurada en 1989, diseñada por Carlos Ott." },
      { nombre: "Marché d'Aligre", tipo: "alimento", distancia: "0.6 km", descripcion: "El mercado de comida y de pulgas más auténtico y popular entre los parisinos." },
      { nombre: "Canal Saint-Martin", tipo: "parque", distancia: "1.0 km", descripcion: "El canal de hierro y piedra más fotogénico de París con sus puentes basculantes." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "3 líneas en esta estación — muy concurrida los fines de semana por la noche."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Línea 1 completamente accesible."
    }
  },
  {
    slug: "republique",
    nombre: "République",
    linea: "3",
    municipio: "Paris 11e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Place de la République", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Canal Saint-Martin", tipo: "parque", distancia: "8 min caminando" },
      { nombre: "Marché du Temple", tipo: "comercio", distancia: "10 min caminando" }
    ],
    transferencias: ["republique"],
    seo_title: "République — Metro París | MetroGuia",
    meta_description: "République, la plaza de los ciudadanos parisinos. Canal Saint-Martin, el barrio bohemio del 10e y 11e, y el punto de encuentro de la vida joven de París.",
    h1: "République — Métro de París",
    intro: "République es la plaza cívica por excelencia de París: aquí se reunieron millones para manifestarse tras los atentados de Charlie Hebdo y el Bataclan. Es el centro del París joven y alternativo.",
    tips: [
      "La estatua de la République (Marianne) en el centro de la plaza es el símbolo de la República Francesa.",
      "El Canal Saint-Martin a 8 minutos es el barrio de moda con terrazas de cafés junto al agua.",
      "Los alrededores tienen los mejores bares y restaurantes del 10e y 11e, muy populares entre los parisinos.",
      "El mercado del Temple (martes-viernes) tiene los mejores tejidos de París para costureros."
    ],
    mejor_horario: "Tardes y noches de jueves a sábado para la vida de barrio.",
    mundial_relevancia: "Place de la République es el espacio cívico de París donde se concentran las manifestaciones más importantes de la democracia francesa.",
    descripcion_turistica: "République es el corazón del París popular y progresista. Los barrios del 10e (Canal Saint-Martin) y el 11e (Oberkampf) que la rodean son los más dinámicos culturalmente de la ciudad, con galerías emergentes, bares independientes y restaurantes de cocina del mundo.",
    lugares_cercanos: [
      { nombre: "Place de la République", tipo: "turismo", distancia: "0.1 km", descripcion: "La plaza cívica más grande de París con la estatua de Marianne, símbolo de la República." },
      { nombre: "Canal Saint-Martin", tipo: "parque", distancia: "0.6 km", descripcion: "Canal de 4.5 km con puentes de hierro, cafés a la orilla y ambiente bohemio." },
      { nombre: "Hôtel du Nord", tipo: "alimento", distancia: "0.8 km", descripcion: "El café histórico de la película de Marcel Carné (1938), ahora restaurante." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "5 líneas en esta estación — una de las más grandes de París."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin accesibilidad completa en esta estación."
    }
  },
  {
    slug: "pigalle",
    nombre: "Pigalle",
    linea: "2",
    municipio: "Paris 9e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Moulin Rouge", tipo: "cultura", distancia: "3 min caminando" },
      { nombre: "Sex-shops y cabarés (boulevard)", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Musée de l'Érotisme (histórico)", tipo: "museo", distancia: "5 min caminando" },
      { nombre: "Sacré-Cœur (subida)", tipo: "turismo", distancia: "15 min caminando" }
    ],
    transferencias: ["pigalle"],
    seo_title: "Pigalle — Metro París | MetroGuia",
    meta_description: "Pigalle, el barrio rojo de París transformado. El Moulin Rouge, el SoPi (South Pigalle) más trendy y la subida a Montmartre y Sacré-Cœur.",
    h1: "Pigalle — Métro de París",
    intro: "Pigalle es el barrio más transformado de París. Lo que era el barrio rojo más famoso del mundo (Moulin Rouge, cabarés y sex-shops) se ha convertido en el área más de moda de la ciudad: South Pigalle o SoPi.",
    tips: [
      "El Moulin Rouge (1889) tiene entradas desde €87 — reserva online con meses de antelación.",
      "El SoPi (South Pigalle) tiene los mejores bares, restaurantes y tiendas vintage del nuevo París.",
      "La subida a Sacré-Cœur desde Pigalle a pie (15 min) es más bonita que el funicular.",
      "La tienda de instrumentos de segunda mano en la rue Victor Massé es legendaria entre músicos."
    ],
    mejor_horario: "Noche para el Moulin Rouge. Mediodía para el SoPi de moda.",
    mundial_relevancia: "El Moulin Rouge (1889) inventó el cancán y definió el imaginario de París en la Belle Époque.",
    descripcion_turistica: "Pigalle fue el barrio de los pintores de Montmartre (Toulouse-Lautrec pintaba en el Moulin Rouge), de los músicos de jazz americanos y de la vida nocturna más exuberante de Europa. Hoy el SoPi mezcla esta herencia bohemia con el genio creativo del nuevo París.",
    lugares_cercanos: [
      { nombre: "Moulin Rouge", tipo: "cultura", distancia: "0.2 km", descripcion: "El cabaré más famoso del mundo, escenario del cancán desde 1889." },
      { nombre: "SoPi (South Pigalle)", tipo: "comercio", distancia: "0.3 km", descripcion: "El barrio más trendy de París con restaurantes, galerías y bares independientes." },
      { nombre: "Sacré-Cœur", tipo: "turismo", distancia: "1.2 km", descripcion: "La basílica blanca de Montmartre con vistas panorámicas de París." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Muy concurrida los fines de semana por la noche."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin acceso en silla de ruedas."
    }
  },
  {
    slug: "abbesses",
    nombre: "Abbesses",
    linea: "12",
    municipio: "Paris 18e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Sacré-Cœur Basilique", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Place des Abbesses", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Le Mur des Je t'aime (muro)", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Musée de Montmartre", tipo: "museo", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Abbesses — Metro París | MetroGuia",
    meta_description: "Abbesses, la estación más profunda de París en el corazón de Montmartre. Acceso a Sacré-Cœur, el Muro de los Te Quiero y el barrio más romántico del mundo.",
    h1: "Abbesses — Métro de París",
    intro: "Abbesses es la estación más profunda de París (36 metros) y la puerta al Montmartre más auténtico y romántico. El techo art nouveau de Hector Guimard es una joya del diseño.",
    tips: [
      "El ascensor de Abbesses es legendariamente lento — las escaleras de caracol son un ejercicio interesante.",
      "El Mur des Je t'aime tiene 'te quiero' escrito en 250 idiomas — busca el español.",
      "Sacré-Cœur tiene entrada gratuita — la vista desde la explanada vale la subida.",
      "El Musée de Montmartre tiene el jardín donde pintaba Renoir — uno de los secretos más bellos de París."
    ],
    mejor_horario: "Mañana temprana para Montmartre antes de los grupos turísticos.",
    mundial_relevancia: "Montmartre fue el barrio de Picasso, Modigliani, Utrillo y Toulouse-Lautrec — la cuna del arte moderno.",
    descripcion_turistica: "Abbesses está en el corazón de la butte Montmartre, la colina más alta de París. El barrio artístico que albergó a los grandes pintores del inicio del siglo XX mantiene hoy su carácter bohemio, con cafés, cabarés, artistas callejeros y el Sacré-Cœur dominando el skyline.",
    lugares_cercanos: [
      { nombre: "Sacré-Cœur", tipo: "turismo", distancia: "0.8 km", descripcion: "La basílica romano-bizantina en lo alto de Montmartre con vista de 360° sobre París." },
      { nombre: "Mur des Je t'aime", tipo: "turismo", distancia: "0.2 km", descripcion: "El muro con 'te quiero' en 250 idiomas en la Place des Abbesses." },
      { nombre: "Musée de Montmartre", tipo: "museo", distancia: "0.7 km", descripcion: "El museo en el edificio donde vivió Renoir, con jardín y vistas a los viñedos." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Estación más profunda de París — elevador disponible pero con esperas."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: true,
      rampas: false,
      banos_accesibles: false,
      notas: "El ascensor existe pero la estación tiene accesibilidad muy limitada."
    }
  },
  {
    slug: "sacre-coeur-anvers",
    nombre: "Anvers",
    linea: "2",
    municipio: "Paris 18e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Sacré-Cœur (escalinata)", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "Funicular de Montmartre", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "Boulevard de Rochechouart", tipo: "comercio", distancia: "1 min caminando" }
    ],
    transferencias: [],
    seo_title: "Anvers — Metro París | MetroGuia",
    meta_description: "Anvers, la estación de acceso a Sacré-Cœur desde el sur. Funicular de Montmartre y el boulevard de Rochechouart con tiendas y animación.",
    h1: "Anvers — Métro de París",
    intro: "Anvers es la estación más directa para acceder al funicular de Montmartre y la escalinata que lleva a Sacré-Cœur. El boulevard de Rochechouart debajo tiene una mezcla de tiendas populares y bares.",
    tips: [
      "El funicular de Montmartre (cubierto por el pase Navigo/tarjeta metro) sube hasta Sacré-Cœur.",
      "La escalinata de Sacré-Cœur es larga pero tiene los mejores músicos callejeros de París.",
      "El boulevard de Rochechouart tiene tiendas de segunda mano y artículos de fiesta únicos.",
      "Desde la explanada de Sacré-Cœur puedes ver el skyline completo de París al atardecer."
    ],
    mejor_horario: "Tarde para Sacré-Cœur con el sol de frente. Noche para el boulevard animado.",
    mundial_relevancia: "Sacré-Cœur domina el horizonte de París y es el tercer lugar más visitado de Francia.",
    descripcion_turistica: "Anvers es la puerta sur de Montmartre, el barrio que más resiste la homogeneización del turismo. La escalinata de Sacré-Cœur, con sus músicos, malabaristas y artistas de todo el mundo, es una de las experiencias más vivas de la ciudad.",
    lugares_cercanos: [
      { nombre: "Funicular de Montmartre", tipo: "transporte", distancia: "0.4 km", descripcion: "El teleférico que sube desde la base de Montmartre hasta Sacré-Cœur en 90 segundos." },
      { nombre: "Sacré-Cœur", tipo: "turismo", distancia: "0.9 km", descripcion: "La basílica blanca de Montmartre, visible desde toda París." },
      { nombre: "Marché Barbès", tipo: "alimento", distancia: "0.5 km", descripcion: "El mercado del miércoles y sábado más multicultural de París, en el barrio magrebí." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Línea 2 — intercambio con línea 4 en Barbès-Rochechouart (1 parada)."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin acceso completo en esta estación."
    }
  },
  {
    slug: "palais-royal-musee-du-louvre",
    nombre: "Palais Royal – Musée du Louvre",
    linea: "1",
    municipio: "Paris 1er",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Palais Royal y jardín", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "Colonnes de Buren (patio)", tipo: "turismo", distancia: "3 min caminando" },
      { nombre: "Comédie-Française", tipo: "cultura", distancia: "3 min caminando" },
      { nombre: "Musée du Louvre", tipo: "museo", distancia: "5 min caminando" }
    ],
    transferencias: ["palais-royal-musee-du-louvre"],
    seo_title: "Palais Royal – Musée du Louvre — Metro París | MetroGuia",
    meta_description: "Palais Royal–Musée du Louvre: jardín secreto del Palais Royal, las Colonnes de Buren y el acceso al Louvre. Entre el arte contemporáneo y el barroco.",
    h1: "Palais Royal – Musée du Louvre — Métro de París",
    intro: "Palais Royal–Musée du Louvre combina lo histórico y lo contemporáneo: el jardín secreto del Palais Royal (antiguo palacio del cardenal Richelieu) con las polémicas Colonnes de Buren (1986) en su patio y el Louvre a pasos.",
    tips: [
      "El jardín del Palais Royal es el jardín secreto más elegante de París — casi sin turistas.",
      "Las Colonnes de Buren, las columnatas de mármol del patio, generaron escándalo en 1986 — hoy son icónicas.",
      "Los bajos del Palais Royal tienen las tiendas de antigüedades y moda más exclusivas de París.",
      "La Comédie-Française es el teatro más antiguo del mundo en funcionamiento continuo (desde 1680)."
    ],
    mejor_horario: "Mañana temprana para el jardín antes de los paseantes del mediodía.",
    mundial_relevancia: "El Palais Royal fue el jardín donde se gestó la Revolución Francesa — aquí lanzó su proclama Camille Desmoulins el 12 de julio de 1789.",
    descripcion_turistica: "El Palais Royal fue construido para el cardenal Richelieu en 1633 y pasó a ser residencia de la familia Orleans. Su jardín, rodeado de arcadas con boutiques y cafés, es uno de los espacios más refinados de París, fuera de las rutas turísticas masivas.",
    lugares_cercanos: [
      { nombre: "Palais Royal (jardín)", tipo: "turismo", distancia: "0.2 km", descripcion: "El jardín más elegante de París entre arcadas con boutiques de lujo y cafés." },
      { nombre: "Colonnes de Buren", tipo: "turismo", distancia: "0.3 km", descripcion: "La instalación de arte contemporáneo de Daniel Buren (1986) en el patio del Palais Royal." },
      { nombre: "Comédie-Française", tipo: "cultura", distancia: "0.3 km", descripcion: "El teatro nacional más antiguo del mundo, fundado por Molière en 1680." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Líneas 1 y 7 — nombre largo pero estación muy manejable."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso completo en la línea 1."
    }
  },
  {
    slug: "invalides",
    nombre: "Invalides",
    linea: "13",
    municipio: "Paris 7e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Hôtel des Invalides / Tombeau de Napoléon", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Musée de l'Armée", tipo: "museo", distancia: "3 min caminando" },
      { nombre: "Pont Alexandre III", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Musée Rodin", tipo: "museo", distancia: "8 min caminando" }
    ],
    transferencias: ["invalides"],
    seo_title: "Invalides — Metro París | MetroGuia",
    meta_description: "Invalides con el Tombeau de Napoléon, el Musée de l'Armée, el Musée Rodin y el Pont Alexandre III. El barrio de los ministerios y embajadas de París.",
    h1: "Invalides — Métro de París",
    intro: "Invalides es el barrio más monumental del París institucional. El Hôtel des Invalides, construido por Luis XIV para hospedar a sus soldados heridos, alberga hoy el sarcófago de Napoleón Bonaparte bajo su cúpula dorada.",
    tips: [
      "La cúpula dorada de los Invalides es visible desde toda la orilla izquierda — orientadora.",
      "El Musée Rodin, a 10 minutos, tiene el jardín de esculturas más bello de París — El Pensador al aire libre.",
      "El Pont Alexandre III es el puente más ornamentado y fotogénico de París.",
      "El barrio tiene las mejores panaderías de la orilla izquierda — Poilâne está a 10 minutos."
    ],
    mejor_horario: "Mañanas de martes a sábado para los museos. Evitar lunes (cierre).",
    mundial_relevancia: "El Hôtel des Invalides alberga el sarcófago de Napoleón Bonaparte, el líder militar más influyente de la historia occidental.",
    descripcion_turistica: "El 7ème arrondissement es el barrio de los ministerios, embajadas y organismos internacionales. Junto a los Invalides y el Musée d'Orsay, preserva la arquitectura del Grand Siècle (siglo XVII) más imponente de París.",
    lugares_cercanos: [
      { nombre: "Tombeau de Napoléon", tipo: "museo", distancia: "0.2 km", descripcion: "El sarcófago de pórfido rojo de Napoleón Bonaparte bajo la cúpula dorada más hermosa de París." },
      { nombre: "Musée Rodin", tipo: "museo", distancia: "0.6 km", descripcion: "Museo del escultor más importante del siglo XIX con El Pensador y El Beso en jardín." },
      { nombre: "Pont Alexandre III", tipo: "turismo", distancia: "0.4 km", descripcion: "El puente más ornamentado de París, regalado por el Zar Alejandro III de Rusia." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "RER C también para en Invalides."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin accesibilidad completa."
    }
  },
  {
    slug: "versailles-rive-gauche",
    nombre: "Versailles – Château – Rive Gauche",
    linea: "RER C",
    municipio: "Versailles",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Palais de Versailles", tipo: "turismo", distancia: "10 min caminando" },
      { nombre: "Jardines de Le Nôtre", tipo: "parque", distancia: "15 min caminando" },
      { nombre: "Grand Trianon y Petit Trianon", tipo: "turismo", distancia: "30 min caminando" }
    ],
    transferencias: [],
    seo_title: "Versailles – Château — Metro París | MetroGuia",
    meta_description: "Versailles–Château, la estación para el Palacio de Versailles. A 35 minutos de París en RER C, el château más grandioso del mundo.",
    h1: "Versailles – Château — RER C desde París",
    intro: "Versailles es la excursión obligatoria desde París. El Palacio de Versailles, residencia de Luis XIV, Luis XV y Luis XVI, es el château más grandioso del mundo con 2,300 habitaciones y jardines de 800 hectáreas.",
    tips: [
      "Compra las entradas online — hay colas de 2 horas en taquilla en temporada alta.",
      "El Pasaporte (palace + jardines + Trianons) vale la pena si vas un día completo.",
      "Las Grandes Eaux Musicales (jardines con fuentes y música): sábados y domingos de abril a octubre.",
      "El Petit Trianon de María Antonieta tiene el jardín más íntimo y romántico del lugar."
    ],
    mejor_horario: "Martes o miércoles — el palacio está menos saturado que los fines de semana.",
    mundial_relevancia: "El Palacio de Versailles es el símbolo del absolutismo monárquico y la obra artística más ambiciosa de la historia de Francia.",
    descripcion_turistica: "Versailles fue construido por Luis XIV a partir de 1661 como símbolo de su poder absoluto y para albergar a toda la corte lejos de París. La Galería de los Espejos, con sus 357 espejos y 20,000 velas, es una de las salas más impresionantes del mundo.",
    lugares_cercanos: [
      { nombre: "Palais de Versailles", tipo: "turismo", distancia: "0.8 km", descripcion: "El palacio más grande del mundo con 700 habitaciones, la Galería de los Espejos y jardines de 800 ha." },
      { nombre: "Jardines de Le Nôtre", tipo: "parque", distancia: "1.2 km", descripcion: "Los jardines formales del Grand Siècle diseñados por André Le Nôtre para Luis XIV." },
      { nombre: "Petit Trianon", tipo: "turismo", distancia: "2.0 km", descripcion: "El palacete de María Antonieta con su jardín inglés y el Hameau de la Reine." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 23:30",
      sabado: "06:00 – 23:30",
      domingo: "07:00 – 23:00",
      notas: "RER C desde Musée d'Orsay o Invalides. Trayecto aprox. 35 min."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación accesible. El palacio tiene acceso para sillas de ruedas en la mayoría de zonas."
    }
  },
  {
    slug: "orly-aeroport",
    nombre: "Orly Aéroport",
    linea: "14",
    municipio: "Orly",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal Orly Sud y Quest", tipo: "transporte", distancia: "0 min caminando" },
      { nombre: "Shopping duty-free", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Orly Aéroport — Metro París | MetroGuia",
    meta_description: "Orly Aéroport, el segundo aeropuerto de París. Conexión directa al centro por la línea 14 (automática) en 25 minutos desde 2024.",
    h1: "Orly Aéroport — Métro de París (Línea 14)",
    intro: "Orly es el segundo aeropuerto de París, base de Air France para vuelos domésticos y destinos europeos. Desde 2024, la línea 14 automática conecta Orly con el centro de París en 25 minutos sin transbordo.",
    tips: [
      "La línea 14 desde Orly es la conexión más rápida al centro (25 min hasta Châtelet).",
      "El Orlyval del aeropuerto ya no es necesario — la línea 14 llega directamente a Orly Aéroport.",
      "Orly tiene los mejores restaurantes del duty-free de los aeropuertos franceses.",
      "Air France tiene vuelos domésticos frecuentes desde Orly a Niza, Burdeos, Toulouse."
    ],
    mejor_horario: "05:30-07:00h para los vuelos más tempranos. La línea 14 funciona desde las 5:30h.",
    mundial_relevancia: "Orly fue el principal aeropuerto de París antes de la apertura de Charles de Gaulle en 1974.",
    descripcion_turistica: "El aeropuerto de Orly, abierto en 1932 y ampliado en los 60, tiene una arquitectura brutalista característica de la aviación de la Gaulle. La nueva conexión de la línea 14 (2024) lo ha integrado por primera vez directamente al metro parisino.",
    lugares_cercanos: [
      { nombre: "Terminal Orly 1-2-3-4", tipo: "transporte", distancia: "0.3 km", descripcion: "Las terminales de Orly con destinos europeos y vuelos domésticos de Air France." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Línea 14 automática. Frecuencia cada 3-5 minutos en horas punta."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Línea 14 totalmente accesible. El aeropuerto también tiene accesibilidad completa."
    }
  },
  {
    slug: "cdg-aeroport",
    nombre: "CDG Aéroport – Terminal 2",
    linea: "RER B",
    municipio: "Roissy",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal 2 CDG (Air France)", tipo: "transporte", distancia: "0 min caminando" },
      { nombre: "Terminal 1 CDG (inter-terminal navette)", tipo: "transporte", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "CDG Aéroport – Terminal 2 — Metro París | MetroGuia",
    meta_description: "Charles de Gaulle Aéroport, el mayor hub aéreo de Europa. RER B al centro de París en 35 minutos desde el aeropuerto más importante de Francia.",
    h1: "CDG Aéroport – Terminal 2 — RER B desde París",
    intro: "Charles de Gaulle (CDG) es el segundo aeropuerto más concurrido de Europa y el hub de Air France. El RER B conecta el aeropuerto con el centro de París (Gare du Nord) en 35 minutos por €12.10.",
    tips: [
      "El RER B es la conexión más económica al centro — mucho más barato que los taxis o Uber.",
      "Coge el RER B solo en las paradas CDG 1 o CDG 2 — no en Mitry (va en dirección contraria).",
      "Air France bus también llega a Montparnasse y Opéra — útil si no necesitas el metro.",
      "Hay una cápsula hotel (Yotel) dentro de la Terminal 2E para escalas largas."
    ],
    mejor_horario: "05:30-23:00h — el RER B tiene servicio frecuente durante todo el día.",
    mundial_relevancia: "CDG es el hub intercontinental más importante de Europa después de Heathrow.",
    descripcion_turistica: "Charles de Gaulle, inaugurado en 1974, tiene la Terminal 1 más revolucionaria de la aviación: un cilindro de hormigón diseñado por Paul Andreu con pasarelas tubulares de plástico. La Terminal 2E colapsó parcialmente en 2004 y fue reconstruida.",
    lugares_cercanos: [
      { nombre: "Terminal 2 (Air France, SkyTeam)", tipo: "transporte", distancia: "0.1 km", descripcion: "La terminal principal de CDG con los vuelos de Air France, KLM y Delta." },
      { nombre: "Terminal 1 (otros)", tipo: "transporte", distancia: "1.0 km", descripcion: "Terminal cilíndrica histórica de Paul Andreu para aerolíneas internacionales." }
    ],
    horarios: {
      lunes_viernes: "05:00 – 00:00",
      sabado: "05:00 – 00:00",
      domingo: "06:00 – 23:30",
      notas: "RER B cada 10-15 min. Trayecto hasta Gare du Nord: 35 min. Hasta Châtelet: 45 min."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal y conexión RER completamente accesibles."
    }
  },
  {
    slug: "marais-saint-paul",
    nombre: "Saint-Paul – Le Marais",
    linea: "1",
    municipio: "Paris 4e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Place des Vosges", tipo: "turismo", distancia: "8 min caminando" },
      { nombre: "Musée Picasso", tipo: "museo", distancia: "10 min caminando" },
      { nombre: "Musée Carnavalet (gratuito)", tipo: "museo", distancia: "8 min caminando" },
      { nombre: "Village Saint-Paul (antiguedades)", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Saint-Paul – Le Marais — Metro París | MetroGuia",
    meta_description: "Saint-Paul–Le Marais, la estación del barrio más histórico y de moda de París. Place des Vosges, Musée Picasso y el Marais judío.",
    h1: "Saint-Paul – Le Marais — Métro de París",
    intro: "Saint-Paul da acceso al Marais, el barrio más completo de París: historia medieval (Place des Vosges, el más antiguo y elegante de sus plazas), comunidad judía con delis y librerías, museos gratuitos y galerías de arte contemporáneo.",
    tips: [
      "La Place des Vosges (1612) es la plaza más bella de París — perfecta para un picnic.",
      "El Musée Carnavalet (historia de París) es completamente gratuito y extraordinario.",
      "La rue des Rosiers tiene los mejores falafel de Europa (L'As du Fallafel — come los martes).",
      "Las galerías del Marais tienen las mejores exposiciones de arte contemporáneo gratuitas de París."
    ],
    mejor_horario: "Tarde de jueves a domingo para el barrio más vivo. Mañana para los museos.",
    mundial_relevancia: "El Marais es el barrio mejor conservado del París medieval y renacentista, y hoy el centro de la comunidad LGBTQ+ de Francia.",
    descripcion_turistica: "El Marais fue el barrio aristocrático de París en el siglo XVII (Place des Vosges era la residencia de Víctor Hugo). Tras la Revolución se degradó y luego fue rehabilitado como barrio histórico en los años 60. Hoy combina la mayor densidad de museos de París con la comunidad judía más antigua de Francia.",
    lugares_cercanos: [
      { nombre: "Place des Vosges", tipo: "turismo", distancia: "0.6 km", descripcion: "La plaza más antigua y elegante de París (1612), rodeada de mansiones rojas con pórticos." },
      { nombre: "Musée Carnavalet", tipo: "museo", distancia: "0.6 km", descripcion: "Museo gratuito de la historia de París desde la Prehistoria hasta la actualidad." },
      { nombre: "Musée Picasso", tipo: "museo", distancia: "0.8 km", descripcion: "La mayor colección pública de Picasso del mundo en el Hôtel Salé del siglo XVII." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Línea 1 — completamente renovada con accesibilidad total."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad completa en la línea 1."
    }
  },
  {
    slug: "belleville",
    nombre: "Belleville",
    linea: "2",
    municipio: "Paris 20e",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Parc de Belleville (vistas)", tipo: "parque", distancia: "8 min caminando" },
      { nombre: "Rue de Belleville (vida barrio)", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Galerías de arte emergente", tipo: "museo", distancia: "5 min caminando" }
    ],
    transferencias: ["belleville"],
    seo_title: "Belleville — Metro París | MetroGuia",
    meta_description: "Belleville, el barrio más multicultural de París. Mezcla de comunidades chinas, africanas y árabes con galerías de arte emergente y las mejores vistas de la ciudad.",
    h1: "Belleville — Métro de París",
    intro: "Belleville es el París más auténtico y multicultural: barrio de inmigrantes chinos, magrebíes y africanos, con galerías de arte emergente, bares de moda y el Parc de Belleville con las mejores vistas panorámicas de París.",
    tips: [
      "El Parc de Belleville tiene las mejores vistas de París sin cobrar entrada — mejor que muchos miradores.",
      "La rue de Belleville tiene restaurantes chinos, marroquíes y africanos más auténticos de París.",
      "El barrio tiene la mayor concentración de galerías de arte emergente de la ciudad.",
      "Edith Piaf nació en Belleville — hay una placa en el número 72 de la rue de Belleville."
    ],
    mejor_horario: "Tarde para el barrio multicultural. Mañana de fin de semana para el mercado.",
    mundial_relevancia: "Edith Piaf, La Môme, la cantante más importante de Francia, nació en Belleville.",
    descripcion_turistica: "Belleville es el símbolo del París popular y cosmopolita. Lo que fue un barrio obrero y de inmigrantes en el siglo XIX es hoy el laboratorio cultural más interesante de la ciudad, donde conviven el arte más experimental con la auténtica vida de barrio parisino.",
    lugares_cercanos: [
      { nombre: "Parc de Belleville", tipo: "parque", distancia: "0.6 km", descripcion: "El parque más alto del este de París con vistas panorámicas del skyline completo." },
      { nombre: "Maison de l'Air", tipo: "museo", distancia: "0.8 km", descripcion: "Pequeño museo gratuito sobre la calidad del aire y la meteorología en el parque." },
      { nombre: "Galerías rue Dénoyez", tipo: "museo", distancia: "0.3 km", descripcion: "La calle de graffiti y arte urbano más colorida e icónica de París." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Líneas 2 y 11 en esta estación."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Sin accesibilidad completa."
    }
  },
  {
    slug: "nation",
    nombre: "Nation",
    linea: "1",
    municipio: "Paris 11e",
    tipo_zona: "turistica",
    pois: [
      { nombre: "Place de la Nation", tipo: "turismo", distancia: "1 min caminando" },
      { nombre: "Bois de Vincennes (entrada)", tipo: "parque", distancia: "15 min caminando" },
      { nombre: "Château de Vincennes", tipo: "turismo", distancia: "20 min en metro" }
    ],
    transferencias: ["nation"],
    seo_title: "Nation — Metro París | MetroGuia",
    meta_description: "Nation, la gran plaza del este de París. Acceso al Bois de Vincennes y punto final de la línea 1 hacia el Château de Vincennes.",
    h1: "Nation — Métro de París",
    intro: "Nation es la gran plaza del París popular del este, con el monumento Le Triomphe de la République y la puerta al Bois de Vincennes, el 'pulmón' del este de París con lago, zoo y el Château medieval.",
    tips: [
      "El Bois de Vincennes tiene el zoo más grande de Francia — más interesante que el de Vincennes.",
      "El Château de Vincennes es un castillo medieval intacto del siglo XIV — impresionante y poco visitado.",
      "El Marché d'Aligre, a 15 minutos, es el mercado más auténtico de París.",
      "La plaza de Nation es el punto de partida de muchas manifestaciones parisinas — muy animada."
    ],
    mejor_horario: "Fin de semana para el Bois de Vincennes. Cualquier día para la plaza.",
    mundial_relevancia: "Place de la Nation fue el lugar de la guillotina durante el Terror (1794) — 1,300 ejecutados en pocos meses.",
    descripcion_turistica: "Nation marca el límite del París intramuros del este. Bajo los bulevardes exteriores que rodean la ciudad (construidos sobre las antiguas murallas de Thiers) se esconde la Petite Ceinture, la antigua vía ferroviaria circular parcialmente convertida en parque.",
    lugares_cercanos: [
      { nombre: "Bois de Vincennes", tipo: "parque", distancia: "1.2 km", descripcion: "El bosque más grande de París (995 ha) con lago, zoo, hipódromo y el Château medieval." },
      { nombre: "Château de Vincennes", tipo: "turismo", distancia: "3.0 km", descripcion: "El castillo medieval más grande de Francia (siglo XIV), residencia de los reyes Capetos." },
      { nombre: "Coulée Verte René-Dumont", tipo: "parque", distancia: "0.5 km", descripcion: "La Promenade Plantée, la primera vía verde elevada del mundo, llega hasta Nation." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "5 líneas de metro en esta estación — hub del este de París."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Línea 1 completamente accesible."
    }
  },
  {
    slug: "la-defense",
    nombre: "La Défense – Grande Arche",
    linea: "1",
    municipio: "Puteaux / Courbevoie",
    tipo_zona: "financiero",
    pois: [
      { nombre: "Grande Arche de La Défense", tipo: "turismo", distancia: "2 min caminando" },
      { nombre: "CNIT (Centro de Negocios)", tipo: "comercio", distancia: "3 min caminando" },
      { nombre: "Tour Total / Tour First (skyline)", tipo: "turismo", distancia: "5 min caminando" },
      { nombre: "Les Quatre Temps (shopping)", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: ["la-defense"],
    seo_title: "La Défense – Grande Arche — Metro París | MetroGuia",
    meta_description: "La Défense con la Grande Arche y el mayor distrito de negocios de Europa. El skyline futurista de París a 10 km del Louvre.",
    h1: "La Défense – Grande Arche — Métro de París",
    intro: "La Défense es el mayor distrito de negocios de Europa, con el skyline más moderno de Francia. La Grande Arche, un cubo hueco de 110 metros, alinea perfectamente con el Arco de Triunfo y el Louvre en el eje histórico de París.",
    tips: [
      "El eje histórico de París (Louvre → Concorde → Étoile → Grande Arche) es el más largo del mundo.",
      "Les Quatre Temps es el mayor centro comercial de París — perfecto para lluvia o calor extremo.",
      "La Grand Arche tuvo un mirador en su techo — actualmente cerrado para renovación.",
      "La explanada tiene 70 obras de arte en exterior: esculturas, fontanas y jardines de artistas famosos."
    ],
    mejor_horario: "Entre semana al mediodía para ver el barrio en plena actividad financiera.",
    mundial_relevancia: "La Défense es el mayor y más antiguo distrito de negocios de Europa, creado en 1958.",
    descripcion_turistica: "La Défense fue la respuesta de Francia a Manhattan: un distrito de rascacielos que preservaba el centro histórico de París. La Grande Arche (1989), diseñada por Otto von Spreckelsen, fue inaugurada el mismo año de la caída del Muro de Berlín y el bicentenario de la Revolución Francesa.",
    lugares_cercanos: [
      { nombre: "Grande Arche", tipo: "turismo", distancia: "0.1 km", descripcion: "El cubo de mármol blanco de 110m que cierra el eje histórico de París." },
      { nombre: "CNIT", tipo: "comercio", distancia: "0.2 km", descripcion: "El primer edificio de La Défense (1958) con la cúpula de hormigón más grande del mundo." },
      { nombre: "Esplanade de La Défense", tipo: "turismo", distancia: "0.3 km", descripcion: "70 obras de arte escultórico al aire libre por artistas internacionales." }
    ],
    horarios: {
      lunes_viernes: "05:30 – 01:15",
      sabado: "05:30 – 02:15",
      domingo: "07:00 – 01:15",
      notas: "Terminal de la línea 1 y RER A. Muy concurrida entre semana en hora punta."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Accesibilidad total. Estación terminal diseñada con acceso completo."
    }
  }
];
