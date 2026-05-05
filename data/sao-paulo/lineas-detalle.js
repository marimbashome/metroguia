export const lineasSaoPaulo = [
  {
    id: 'L1',
    color: '#0052A5',
    colorNombre: 'Linha 1 Azul',
    inicio: 'Jabaquara',
    fin: 'Tucuruvi',
    total: 23,
    municipios: ['São Paulo'],
    descripcion: 'A Linha 1 Azul é a mais antiga do Metrô de São Paulo, inaugurada em 1974. Liga o extremo norte (Tucuruvi) ao extremo sul (Jabaquara), passando pelo centro histórico. É a espinha dorsal do sistema, com estações em bairros como Liberdade (bairro japonês), República e Sé (coração da cidade). Essencial para turistas.',
    estaciones_turisticas: ['sp-se-l1', 'sp-liberdade-l1', 'sp-jabaquara-l1', 'sp-republica-l1'],
    estaciones: ['sp-jabaquara-l1','sp-conceicao-l1','sp-santo-amaro-l1','sp-socorro-l1','sp-camargo-l1','sp-giovanni-gronchi-l1','sp-santa-cruz-l1','sp-vila-mariana-l1','sp-paraiso-l1','sp-ana-rosa-l1','sp-brigadeiro-l1','sp-trianon-masp-l1','sp-consolacao-l1','sp-paulista-l1','sp-bela-vista-l1','sp-liberdade-l1','sp-se-l1','sp-armacao-l1','sp-bresser-mooca-l1','sp-belem-l1','sp-carrão-l1','sp-penha-l1','sp-tucuruvi-l1'],
    ruta_1_dia: {
      titulo: 'Do centro histórico à Liberdade e Paulista',
      paradas: [
        { estacion: 'sp-se-l1', actividad: 'Praça da Sé e Catedral (09:00)' },
        { estacion: 'sp-liberdade-l1', actividad: 'Bairro japonês e Feira da Liberdade (11:00)' },
        { estacion: 'sp-brigadeiro-l1', actividad: 'Bienal e Parque Ibirapuera (14:00)' },
        { estacion: 'sp-trianon-masp-l1', actividad: 'MASP e Avenida Paulista (16:00)' }
      ]
    },
    seo_title: 'Linha 1 Azul Metrô São Paulo: Jabaquara a Tucuruvi | 23 estações',
    meta_description: 'Guia completo da Linha 1 Azul do Metrô de São Paulo. 23 estações do Jabaquara ao Tucuruvi. Liberdade, Sé, Paulista e o coração da capital paulistana.',
    h1: 'Linha 1 Azul — Metrô de São Paulo'
  },
  {
    id: 'L2',
    color: '#007E5E',
    colorNombre: 'Linha 2 Verde',
    inicio: 'Vila Prudente',
    fin: 'Vila Madalena',
    total: 14,
    municipios: ['São Paulo'],
    descripcion: 'A Linha 2 Verde conecta Vila Madalena (bairro boêmio com bares e galerias) ao extremo leste da cidade. Inaugurada em fases entre 2002 e 2010, passa pela Ana Rosa, Paraíso e cruza a Linha 1 Azul em vários pontos. Vila Madalena é um dos destinos mais badalados de São Paulo.',
    estaciones_turisticas: ['sp-vila-madalena-l2', 'sp-consolacao-l2', 'sp-paraiso-l2', 'sp-ana-rosa-l2'],
    estaciones: ['sp-vila-prudente-l2','sp-tamanduatei-l2','sp-sacoma-l2','sp-alto-do-ipiranga-l2','sp-santos-imigrantes-l2','sp-chacara-klabin-l2','sp-ana-rosa-l2','sp-paraiso-l2','sp-brigadeiro-l2','sp-trianon-masp-l2','sp-consolacao-l2','sp-clinicas-l2','sp-sumare-l2','sp-vila-madalena-l2'],
    ruta_1_dia: {
      titulo: 'Vila Madalena, Paulista e o Ipiranga',
      paradas: [
        { estacion: 'sp-vila-madalena-l2', actividad: 'Beco do Batman e gastronomia (10:00)' },
        { estacion: 'sp-consolacao-l2', actividad: 'Avenida Paulista e MASP (12:00)' },
        { estacion: 'sp-paraiso-l2', actividad: 'Liberdade e culinária japonesa (14:00)' },
        { estacion: 'sp-alto-do-ipiranga-l2', actividad: 'Museu do Ipiranga (16:00)' }
      ]
    },
    seo_title: 'Linha 2 Verde Metrô São Paulo: Vila Prudente a Vila Madalena | 14 estações',
    meta_description: 'Linha 2 Verde do Metrô de São Paulo. 14 estações. Vila Madalena boêmia, Beco do Batman, Av. Paulista e o Museu do Ipiranga.',
    h1: 'Linha 2 Verde — Metrô de São Paulo'
  },
  {
    id: 'L3',
    color: '#EE372F',
    colorNombre: 'Linha 3 Vermelha',
    inicio: 'Palmeiras-Barra Funda',
    fin: 'Itaquera',
    total: 18,
    municipios: ['São Paulo'],
    descripcion: 'A Linha 3 Vermelha é a mais movimentada do sistema, com mais de 1 milhão de passageiros por dia. Liga a Barra Funda (terminal de ônibus e trens) à Corinthians-Itaquera (Arena Corinthians, sede da Copa 2014). Cruza o centro histórico na Sé e República. Indispensável para turistas em São Paulo.',
    estaciones_turisticas: ['sp-se-l3', 'sp-republica-l3', 'sp-palmeiras-barra-funda-l3', 'sp-corinthians-itaquera-l3'],
    estaciones: ['sp-palmeiras-barra-funda-l3','sp-marechal-deodoro-l3','sp-santa-cecilia-l3','sp-republica-l3','sp-anhangabau-l3','sp-se-l3','sp-sao-bento-l3','sp-liberdade-l3','sp-sao-judas-l3','sp-saude-l3','sp-jabaquara-l3','sp-vila-das-belezas-l3','sp-campo-belo-l3','sp-alto-da-boa-vista-l3','sp-borba-gato-l3','sp-brooklin-l3','sp-arthur-alvim-l3','sp-corinthians-itaquera-l3'],
    ruta_1_dia: {
      titulo: 'Centro histórico: Luz, República e Sé',
      paradas: [
        { estacion: 'sp-palmeiras-barra-funda-l3', actividad: 'Terminal Barra Funda e Memorial da América Latina (09:00)' },
        { estacion: 'sp-santa-cecilia-l3', actividad: 'Higienópolis e livrarias (10:30)' },
        { estacion: 'sp-republica-l3', actividad: 'Praça da República e centro histórico (12:00)' },
        { estacion: 'sp-se-l3', actividad: 'Catedral da Sé e Pateo do Colégio (14:00)' },
        { estacion: 'sp-liberdade-l3', actividad: 'Bairro japonês e culinária asiática (16:00)' }
      ]
    },
    seo_title: 'Linha 3 Vermelha Metrô São Paulo: Barra Funda a Itaquera | 18 estações',
    meta_description: 'Linha 3 Vermelha do Metrô de São Paulo, a mais movimentada. 18 estações de Barra Funda a Itaquera. Centro histórico, Sé, República e Liberdade.',
    h1: 'Linha 3 Vermelha — Metrô de São Paulo'
  },
  {
    id: 'L4',
    color: '#F6C30B',
    colorNombre: 'Linha 4 Amarela',
    inicio: 'Morumbi',
    fin: 'Luz',
    total: 11,
    municipios: ['São Paulo'],
    descripcion: 'A Linha 4 Amarela conecta a Luz (coração cultural de SP) ao Morumbi (estádio e shopping). Inaugurada em 2010 e operada pela ViaQuatro em concessão, possui vagões modernos e estações de design arrojado. Passa pela Paulista, Faria Lima (polo financeiro) e Pinheiros. Uma das mais modernas do sistema.',
    estaciones_turisticas: ['sp-luz-l4', 'sp-paulista-l4', 'sp-faria-lima-l4', 'sp-pinheiros-l4'],
    estaciones: ['sp-morumbi-l4','sp-vila-sonia-l4','sp-sao-paulo-morumbi-l4','sp-butanta-l4','sp-pinheiros-l4','sp-faria-lima-l4','sp-fradique-coutinho-l4','sp-oscar-freire-l4','sp-paulista-l4','sp-republica-l4','sp-luz-l4'],
    ruta_1_dia: {
      titulo: 'Da Luz ao Morumbi: arte, finanças e esporte',
      paradas: [
        { estacion: 'sp-luz-l4', actividad: 'Estação da Luz e Pinacoteca (09:00)' },
        { estacion: 'sp-paulista-l4', actividad: 'MASP e Avenida Paulista (11:00)' },
        { estacion: 'sp-faria-lima-l4', actividad: 'Shopping Iguatemi e polo financeiro (14:00)' },
        { estacion: 'sp-morumbi-l4', actividad: 'Estádio do Morumbi e shopping (16:00)' }
      ]
    },
    seo_title: 'Linha 4 Amarela Metrô São Paulo: Morumbi a Luz | 11 estações',
    meta_description: 'Linha 4 Amarela do Metrô de São Paulo. 11 estações do Morumbi à Luz. Av. Paulista, MASP, Faria Lima e o polo financeiro paulistano.',
    h1: 'Linha 4 Amarela — Metrô de São Paulo'
  },
  {
    id: 'L5',
    color: '#9B2990',
    colorNombre: 'Linha 5 Lilás',
    inicio: 'Capão Redondo',
    fin: 'Chácara Klabin',
    total: 17,
    municipios: ['São Paulo'],
    descripcion: 'A Linha 5 Lilás conecta Capão Redondo (extremo sul) ao centro-sul da cidade em Chácara Klabin. Operada pela ViaMobilidade em concessão, é uma das mais novas do sistema com estações modernas. Serve bairros como Brooklin, Campo Belo e Moema, áreas de grande desenvolvimento imobiliário.',
    estaciones_turisticas: ['sp-chacara-klabin-l5', 'sp-moema-l5', 'sp-campo-belo-l5', 'sp-brooklin-l5'],
    estaciones: ['sp-capao-redondo-l5','sp-campo-limpo-l5','sp-vila-das-belezas-l5','sp-giovanni-gronchi-l5','sp-santa-cruz-l5','sp-largo-treze-l5','sp-adolfo-pinheiro-l5','sp-alto-da-boa-vista-l5','sp-borba-gato-l5','sp-brooklin-l5','sp-campo-belo-l5','sp-eucaliptos-l5','sp-moema-l5','sp-aacd-servidor-l5','sp-hospital-sao-paulo-l5','sp-santa-cruz-l5','sp-chacara-klabin-l5'],
    ruta_1_dia: {
      titulo: 'Sul de SP: Moema, Campo Belo e Brooklin',
      paradas: [
        { estacion: 'sp-chacara-klabin-l5', actividad: 'Conexão com outras linhas (09:00)' },
        { estacion: 'sp-moema-l5', actividad: 'Parque Ibirapuera e gastronomia (11:00)' },
        { estacion: 'sp-campo-belo-l5', actividad: 'Shopping e restaurantes (13:00)' },
        { estacion: 'sp-brooklin-l5', actividad: 'Vila Olímpia e vida noturna (16:00)' }
      ]
    },
    seo_title: 'Linha 5 Lilás Metrô São Paulo: Capão Redondo a Chácara Klabin | 17 estações',
    meta_description: 'Linha 5 Lilás do Metrô de São Paulo. 17 estações de Capão Redondo a Chácara Klabin. Moema, Brooklin, Campo Belo e o sul paulistano.',
    h1: 'Linha 5 Lilás — Metrô de São Paulo'
  }
];
