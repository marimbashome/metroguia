export const transitCards = {
  // US Cities
  'nyc': {
    cards: [
      {
        icon: '💳',
        titulo: 'OMNY (One Metro New York)',
        descripcion: 'Modern contactless payment system - tap your phone, watch, or card on readers at subway/bus stations. No need to buy separate passes.',
        precio: '$2.90 USD per ride',
        enlace: 'https://new.mta.info/fares-and-passes/omny',
        donde: 'Automatic at any turnstile or bus card reader',
        tip: 'Load the MTA app to track spending and set auto-pay limits. Much faster than MetroCard lines!',
      },
      {
        icon: '🎫',
        titulo: 'MetroCard (7-Day Unlimited)',
        descripcion: 'Classic rechargeable card - unlimited subway and local bus rides for 7 days.',
        precio: '$33.00 USD',
        enlace: 'https://new.mta.info/fares-and-passes/unlimited-ride',
        donde: 'Station booths, vending machines, select retailers',
        tip: 'Ask for 5% bonus value when buying with cash at booths. MetroCard booths sometimes have long lines during rush hours.',
      },
      {
        icon: '🚇',
        titulo: 'Pay-Per-Ride MetroCard',
        descripcion: 'Add value and use for individual trips. Get 5% bonus when you add $5.50 or more in one transaction.',
        precio: 'From $5.50 USD',
        enlace: 'https://new.mta.info/fares-and-passes/pay-per-ride',
        donde: 'Vending machines, station booths, retailers',
        tip: 'Load $20-$50 for the 5-7% bonus - great deal for short visits.',
      },
    ]
  },

  'chicago': {
    cards: [
      {
        icon: '💳',
        titulo: 'Ventra Card',
        descripcion: 'CTA and Metra physical card - load passes or pay-per-ride. Works on buses, L-train, and commuter rail.',
        precio: '$5.00 card + fare value',
        enlace: 'https://www.ventrachicago.com',
        donde: 'Walmart, Walgreens, O\'Hare/Midway, CTA stations, online',
        tip: 'One-time $5 card fee, but much cheaper than daily purchases. Can register for auto-reload.',
      },
      {
        icon: '📱',
        titulo: 'Ventra Mobile Wallet',
        descripcion: 'Digital Ventra - add your passes to Apple Pay, Google Pay, or Samsung Pay. Same pricing, no physical card needed.',
        precio: 'Same as Ventra Card fares',
        enlace: 'https://www.ventrachicago.com/mobile-wallet',
        donde: 'Download the Ventra app and set up in Apple/Google Pay',
        tip: 'Fastest way to pay - just tap your phone. Works instantly, no registration delay.',
      },
      {
        icon: '🚌',
        titulo: 'CTA 1-Day Pass',
        descripcion: 'Unlimited CTA buses and L-train for 24 hours (calendar days). Great for power-touring.',
        precio: '$12.00 USD',
        enlace: 'https://www.ventrachicago.com/passes',
        donde: 'O\'Hare/Midway, CTA stations, Ventra app',
        tip: 'Starts when first used, lasts until midnight. Perfect for a day of sightseeing.',
      },
    ]
  },

  'washington-dc': {
    cards: [
      {
        icon: '💳',
        titulo: 'SmarTrip Card',
        descripcion: 'WMATA rechargeable card for Metro (subway/bus) and some regional transit. Tap-and-go payment.',
        precio: '$10.00 card + value',
        enlace: 'https://www.wmata.com/service/smartrip',
        donde: 'Metro stations, Walgreens, CVS, online',
        tip: 'Available at most station kiosks. Register online for fraud protection and auto-reload.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Pay (Apple/Google)',
        descripcion: 'Use your phone or smartwatch as a SmarTrip card. Add through WMATA app or Apple/Google Pay.',
        precio: 'Same as SmarTrip fares',
        enlace: 'https://www.wmata.com/service/mobile-pay',
        donde: 'WMATA app, Apple Pay, Google Pay',
        tip: 'Fastest checkout - just tap your phone at readers. No card needed.',
      },
      {
        icon: '🚇',
        titulo: '7-Day Pass',
        descripcion: 'Unlimited Metro (rail + local bus) for 7 calendar days. Great value for tourists.',
        precio: '$65.00 USD',
        enlace: 'https://www.wmata.com/service/passes',
        donde: 'Station kiosks, SmarTrip app, online',
        tip: 'Activates on first use. No peak-hour restrictions - unlimited any time.',
      },
    ]
  },

  'los-angeles': {
    cards: [
      {
        icon: '💳',
        titulo: 'TAP Card',
        descripcion: 'LA Metro rechargeable contactless card for buses, Metro Rail, and connected transit systems across LA County.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.taptogo.net',
        donde: 'Metro stations, TAP vending machines, retail partners',
        tip: 'One-time $2 fee. Works on most LA transit. Load $20+ for discounts.',
      },
      {
        icon: '📱',
        titulo: 'TAP Mobile',
        descripcion: 'Use your smartphone (Apple Pay, Google Pay, Samsung Pay) as a TAP card. Instant setup, no physical card.',
        precio: 'Same fares as physical TAP',
        enlace: 'https://www.taptogo.net/how-to-use-tap/mobile-pay',
        donde: 'Apple Pay, Google Pay, Samsung Pay via TAP app',
        tip: 'Fastest option - just tap your phone. Free, instant activation.',
      },
      {
        icon: '🚌',
        titulo: 'Metro 7-Day Visitor Pass',
        descripcion: 'Unlimited Metro buses and rail (Red/Purple/Gold/Blue/Green/Silver lines) for 7 days.',
        precio: '$32.50 USD',
        enlace: 'https://www.metro.net/riding/fares',
        donde: 'Metro Customer Service offices, TAP vending machines, online',
        tip: 'Not valid on express or limited-stop buses. Great for main tourist routes.',
      },
    ]
  },

  'san-francisco': {
    cards: [
      {
        icon: '💳',
        titulo: 'Clipper Card',
        descripcion: 'Bay Area rechargeable card for BART, Muni, Caltrain, and ferries. Single card for all regional transit.',
        precio: '$3.00 card + fare value',
        enlace: 'https://www.clippercard.com',
        donde: 'BART stations, Walgreens, CVS, retail kiosks',
        tip: 'One-time $3 fee. Works across entire Bay Area - essential for getting around.',
      },
      {
        icon: '🎫',
        titulo: 'Visitor Clipper',
        descripcion: 'Pre-loaded Clipper for tourists - comes with $20, $50, or $100 in transit value already loaded.',
        precio: '$20 / $50 / $100 USD',
        enlace: 'https://www.clippercard.com/clip/en/visitor-clipper',
        donde: 'Fisherman\'s Wharf visitor centers, airport, online',
        tip: 'Skip registration - just tap and go. Convenient for short visits.',
      },
      {
        icon: '📱',
        titulo: 'MuniMobile App',
        descripcion: 'Muni-specific app with mobile tickets and pass sales. Works for Muni buses and cable cars.',
        precio: 'Pay-per-ride or day pass within app',
        enlace: 'https://www.muniMobile.com',
        donde: 'Download MuniMobile app, Apple/Google Pay',
        tip: 'Great for quick one-off trips. Save receipt codes - no internet needed to ride.',
      },
    ]
  },

  'boston': {
    cards: [
      {
        icon: '💳',
        titulo: 'CharlieCard',
        descripcion: 'MBTA reloadable card for subway (Red/Orange/Blue), buses, and commuter rail across Boston metro.',
        precio: '$2.50 card + fare value',
        enlace: 'https://www.mbta.com/fares',
        donde: 'MBTA stations, Walgreens, CVS, retail partners',
        tip: 'Offers discounted fares vs. single rides. One-time $2.50 fee.',
      },
      {
        icon: '📱',
        titulo: 'Mobile CharlieCard',
        descripcion: 'Digital CharlieCard via Apple Pay or Samsung Pay. Instant setup, tap-and-go on readers.',
        precio: 'Same fares as physical card',
        enlace: 'https://www.mbta.com/fares/charliecard',
        donde: 'Apple Pay, Samsung Pay, MBTA app',
        tip: 'Fastest and easiest option - works just like plastic card.',
      },
      {
        icon: '🚇',
        titulo: '7-Day LinkPass',
        descripcion: 'Unlimited subway, local bus, and some commuter rail for 7 calendar days.',
        precio: '$84.50 USD',
        enlace: 'https://www.mbta.com/fares/passes',
        donde: 'MBTA stations, Transit app, online',
        tip: 'Excellent value for tourists. Unlimited 24/7 - no time restrictions.',
      },
    ]
  },

  'miami': {
    cards: [
      {
        icon: '💳',
        titulo: 'EASY Card',
        descripcion: 'Miami-Dade County reloadable card for Metrorail, Metromover, and bus systems.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.miamidade.gov/transit/easy-card',
        donde: 'Metrorail/Metromover stations, Walgreens, retail',
        tip: 'One-time $2 activation fee. Load $20+ for ~7% discount.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Pay',
        descripcion: 'Use Google Pay or Apple Pay as your transit card at Metrorail/Metromover/bus readers.',
        precio: 'Same fares',
        enlace: 'https://www.miamidade.gov/transit/mobile-pay',
        donde: 'Apple Pay, Google Pay, MDT app',
        tip: 'Tap your phone - no card needed. Instant, works right away.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited rides on Metrorail, Metromover, and bus system for 24 hours.',
        precio: '$6.50 USD',
        enlace: 'https://www.miamidade.gov/transit/fares',
        donde: 'Vending machines, retail, EASY Card reload',
        tip: 'Super affordable - basically pays for itself in 3 rides.',
      },
    ]
  },

  'seattle': {
    cards: [
      {
        icon: '💳',
        titulo: 'ORCA Card',
        descripcion: 'Regional card for King County Metro, Sound Transit light rail/bus, and ferries.',
        precio: '$5.00 card + value',
        enlace: 'https://www.myorca.com',
        donde: 'Transit centers, retail (Fred Meyer, Safeway), online',
        tip: 'One-time $5 fee. Register online for fraud protection.',
      },
      {
        icon: '📱',
        titulo: 'ORCA Mobile',
        descripcion: 'Digital ORCA on Apple Pay, Google Pay, Samsung Pay. Tap to pay at readers.',
        precio: 'Same fares as physical ORCA',
        enlace: 'https://www.myorca.com/orca-mobile',
        donde: 'Apple/Google/Samsung Pay, ORCA app',
        tip: 'Fastest checkout. Free setup, works instantly.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Metro buses and Sound Transit light rail within Seattle for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.myorca.com/fares-and-passes',
        donde: 'ORCA vending machines, transit centers, online',
        tip: 'One of the cheapest day passes in the US - cover it in 2-3 trips.',
      },
    ]
  },

  'philadelphia': {
    cards: [
      {
        icon: '💳',
        titulo: 'SEPTA Key Card',
        descripcion: 'Rechargeable contactless card for SEPTA transit (subway, trolley, bus) and regional rail.',
        precio: '$2.50 card + fare value',
        enlace: 'https://www.septakey.org',
        donde: 'SEPTA stations, retailers, online',
        tip: 'One-time $2.50 fee. Load and tap - works instantly.',
      },
      {
        icon: '📱',
        titulo: 'SEPTA Mobile (Apple/Google Pay)',
        descripcion: 'Contactless payment via smartphone. Same as physical SEPTA Key.',
        precio: 'Same fares',
        enlace: 'https://www.septakey.org/mobile-pay',
        donde: 'Apple Pay, Google Pay, SEPTA app',
        tip: 'Fastest option - tap your phone at readers.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited SEPTA buses, subway, trolley, and some regional rail for 24 hours.',
        precio: '$13.50 USD',
        enlace: 'https://www.septakey.org/passes',
        donde: 'SEPTA Key vending machines, stations, online',
        tip: 'Good value - covers it in 3-4 trips. 24-hour period from first use.',
      },
    ]
  },

  'atlanta': {
    cards: [
      {
        icon: '💳',
        titulo: 'Breeze Card',
        descripcion: 'MARTA (Atlanta transit) reloadable contactless card for subway and buses.',
        precio: '$2.50 card + fare value',
        enlace: 'https://www.breezecard.com',
        donde: 'MARTA stations, retail partners, online',
        tip: 'One-time $2.50 fee. Register for auto-reload and fraud protection.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Breeze',
        descripcion: 'Digital Breeze via Apple Pay or Google Pay. Tap your phone at readers.',
        precio: 'Same fares as Breeze Card',
        enlace: 'https://www.breezecard.com',
        donde: 'Apple Pay, Google Pay, Breeze app',
        tip: 'No extra card needed - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited MARTA rides (subway and bus) for 24 hours from first use.',
        precio: '$10.00 USD',
        enlace: 'https://www.breezecard.com/passes',
        donde: 'MARTA station vending machines, online, retailers',
        tip: 'Pays for itself in 2-3 trips. Good for intense sightseeing day.',
      },
    ]
  },

  'houston': {
    cards: [
      {
        icon: '💳',
        titulo: 'METRO Q Fare Card',
        descripcion: 'Houston METRO reloadable card for buses and light rail (METRORail, METRORapid).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.ridemetro.org/fares',
        donde: 'METRO stations, retailers, online',
        tip: 'One-time $2 fee. Load $20+ for discounts.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Apple Pay or Google Pay as your transit card at METRO readers.',
        precio: 'Same fares',
        enlace: 'https://www.ridemetro.org',
        donde: 'Apple Pay, Google Pay',
        tip: 'Instant payment - tap your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited METRO buses and light rail for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.ridemetro.org/fares',
        donde: 'METRO vending machines, stations, retailers',
        tip: 'Very affordable - cheapest major US city day pass.',
      },
    ]
  },

  'dallas': {
    cards: [
      {
        icon: '💳',
        titulo: 'GoPass',
        descripcion: 'DART (Dallas Area Rapid Transit) rechargeable card for buses, light rail, and commuter rail.',
        precio: '$2.50 card + fare value',
        enlace: 'https://www.gopass.org',
        donde: 'DART stations, retailers, online',
        tip: 'One-time $2.50 fee. Can register for auto-reload.',
      },
      {
        icon: '📱',
        titulo: 'Mobile GoPass',
        descripcion: 'Digital GoPass via Apple Pay or Google Pay. Tap to pay.',
        precio: 'Same fares',
        enlace: 'https://www.gopass.org/mobile',
        donde: 'Apple Pay, Google Pay, DART app',
        tip: 'Fast and easy - no physical card needed.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited DART buses and light rail (Red/Blue/Green/Orange/Silver lines) for 24 hours.',
        precio: '$10.00 USD',
        enlace: 'https://www.gopass.org/passes',
        donde: 'DART vending machines, stations, online',
        tip: 'Covers you in 3-4 trips. Valid for 24 hours from first use.',
      },
    ]
  },

  'portland': {
    cards: [
      {
        icon: '💳',
        titulo: 'Hop Fastpass Card',
        descripcion: 'TriMet reloadable card for buses, MAX light rail, and Portland Streetcar.',
        precio: '$5.00 card + value',
        enlace: 'https://www.myhopcard.com',
        donde: 'TriMet stations, retailers (Fred Meyer, Safeway), online',
        tip: 'One-time $5 fee. Register online for fraud protection.',
      },
      {
        icon: '📱',
        titulo: 'Virtual Hop',
        descripcion: 'Digital Hop card via Apple Pay or Google Pay - instant setup.',
        precio: 'Same fares as physical card',
        enlace: 'https://www.myhopcard.com/virtual-hop',
        donde: 'Apple Pay, Google Pay, Hop app',
        tip: 'No physical card needed - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited TriMet buses, MAX, and streetcar for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.myhopcard.com/passes',
        donde: 'TriMet vending machines, stations, retailers, online',
        tip: 'Excellent value - pay for itself in 2-3 trips.',
      },
    ]
  },

  'denver': {
    cards: [
      {
        icon: '💳',
        titulo: 'MyRide Card',
        descripcion: 'RTD (Denver) reloadable card for buses, light rail (A-W lines), and commuter rail.',
        precio: '$5.00 card + fare value',
        enlace: 'https://www.rtd-denver.com/fares-passes/myride',
        donde: 'RTD stations, light rail stops, retail partners, online',
        tip: 'One-time $5 fee. Load and tap - works instantly.',
      },
      {
        icon: '📱',
        titulo: 'MyRide Mobile',
        descripcion: 'Digital MyRide via Apple Pay or Google Pay.',
        precio: 'Same fares',
        enlace: 'https://www.rtd-denver.com/fares-passes/myride-mobile',
        donde: 'Apple Pay, Google Pay, RTD app',
        tip: 'Fastest checkout - tap your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited RTD buses and light rail for 24 hours (all zones).',
        precio: '$13.00 USD',
        enlace: 'https://www.rtd-denver.com/fares-passes',
        donde: 'RTD vending machines, stations, online',
        tip: 'Covers most tourist routes. Valid from first use.',
      },
    ]
  },

  'san-diego': {
    cards: [
      {
        icon: '💳',
        titulo: 'PRONTO Card',
        descripcion: 'MTS/NCTD reloadable contactless card for San Diego buses, trolley, and commuter rail.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.ridepronto.com',
        donde: 'MTS stations, retail (CVS, Walgreens, Albertsons), online',
        tip: 'One-time $2 fee. Fastest way to pay on transit.',
      },
      {
        icon: '📱',
        titulo: 'PRONTO Mobile',
        descripcion: 'Use your smartphone (Apple Pay, Google Pay) as PRONTO card.',
        precio: 'Same fares',
        enlace: 'https://www.ridepronto.com/mobile',
        donde: 'Apple Pay, Google Pay, PRONTO app',
        tip: 'Instant setup - no card needed.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited MTS buses and trolley for 24 hours (local service).',
        precio: '$9.00 USD',
        enlace: 'https://www.ridepronto.com/passes',
        donde: 'PRONTO vending machines, stations, retailers, online',
        tip: 'Good value for a day tour. Works right away.',
      },
    ]
  },

  'minneapolis': {
    cards: [
      {
        icon: '💳',
        titulo: 'Go-To Card',
        descripcion: 'Metro Transit reloadable card for buses and light rail (Blue/Red/Green lines).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.metrotransit.org/fares-and-passes',
        donde: 'Transit stations, retailers, online',
        tip: 'One-time $2 fee. Register for auto-reload.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Apple Pay or Google Pay at transit readers.',
        precio: 'Same fares',
        enlace: 'https://www.metrotransit.org/mobile-pay',
        donde: 'Apple Pay, Google Pay, Transit app',
        tip: 'No card needed - tap your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Metro Transit buses and light rail for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.metrotransit.org/fares-and-passes',
        donde: 'Metro Transit vending machines, stations, online',
        tip: 'Excellent value - cheapest major city day pass.',
      },
    ]
  },

  'salt-lake-city': {
    cards: [
      {
        icon: '💳',
        titulo: 'UTA Farepay Card',
        descripcion: 'Utah Transit Authority reloadable card for buses, light rail, and commuter rail.',
        precio: '$1.00 card + fare value',
        enlace: 'https://www.rideuta.com/farepay',
        donde: 'UTA stations, retail partners, online',
        tip: 'Only $1 to activate! Cheapest card fee around.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay work at UTA readers.',
        precio: 'Same fares',
        enlace: 'https://www.rideuta.com/mobile-payment',
        donde: 'Apple Pay, Google Pay, UTA app',
        tip: 'Tap your phone - instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited UTA buses and TRAX light rail for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.rideuta.com/passes',
        donde: 'UTA vending machines, stations, online',
        tip: 'Fantastic value for exploring the city.',
      },
    ]
  },

  'detroit': {
    cards: [
      {
        icon: '💳',
        titulo: 'DART Card (The Ride/COTA)',
        descripcion: 'Detroit Area Regional Transit reloadable card for buses and commuter rail.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.theride.org',
        donde: 'Transit centers, retailers, online',
        tip: 'One-time $2 fee. Register for fraud protection.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited DART buses for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.theride.org/fares',
        donde: 'Transit vending machines, stations, retailers',
        tip: 'Good value for downtown exploration.',
      },
      {
        icon: '🚆',
        titulo: 'M-1 Rail Pass',
        descripcion: 'Unlimited rides on Detroit\'s downtown M-1 Rail (automated light rail) for 24 hours.',
        precio: '$3.00 USD',
        enlace: 'https://www.m-1rail.com',
        donde: 'M-1 Rail ticket machines, online',
        tip: 'Best for connecting downtown attractions along Woodward Ave.',
      },
    ]
  },

  'pittsburgh': {
    cards: [
      {
        icon: '💳',
        titulo: 'ConnectCard',
        descripcion: 'Port Authority reloadable card for buses, light rail, and inclines.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.connectcard.org',
        donde: 'Transit stations, retailers (GetGo, drugstores), online',
        tip: 'One-time $2 fee. Easy registration online.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at transit readers.',
        precio: 'Same fares',
        enlace: 'https://www.connectcard.org',
        donde: 'Apple Pay, Google Pay',
        tip: 'Tap your phone - works instantly.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Port Authority buses, light rail, and inclines for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.connectcard.org',
        donde: 'Transit station vending machines, online',
        tip: 'Great for exploring the Strip District and downtown.',
      },
    ]
  },

  'charlotte': {
    cards: [
      {
        icon: '💳',
        titulo: 'CATS Pass Card',
        descripcion: 'Charlotte Area Transit System reloadable card for buses and light rail (Gold/Silver/Blue/Red lines).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.ridetransit.org',
        donde: 'Transit stations, retailers, online',
        tip: 'One-time $2 fee. Load and tap.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Apple Pay or Google Pay at CATS readers.',
        precio: 'Same fares',
        enlace: 'https://www.ridetransit.org',
        donde: 'Apple Pay, Google Pay, CATS app',
        tip: 'No card needed - just your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Visitor Pass (2-Hour)',
        descripcion: 'Valid for 2 hours of unlimited transit (great for point-to-point trips).',
        precio: '$2.50 USD',
        enlace: 'https://www.ridetransit.org/fares',
        donde: 'Vending machines, retailers, online',
        tip: 'Perfect for shorter visits or specific destinations.',
      },
    ]
  },

  'baltimore': {
    cards: [
      {
        icon: '💳',
        titulo: 'CharmCard',
        descripcion: 'MTA Maryland reloadable card for buses, light rail, and metro subway.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.mta.maryland.gov/charmcard',
        donde: 'MTA stations, retailers, online',
        tip: 'One-time $2 fee. Register for fraud protection.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay work at MTA readers.',
        precio: 'Same fares',
        enlace: 'https://www.mta.maryland.gov',
        donde: 'Apple Pay, Google Pay, MTA app',
        tip: 'Tap your phone for instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited MTA buses, light rail, and metro for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.mta.maryland.gov/fares-passes',
        donde: 'MTA vending machines, stations, online',
        tip: 'Good value for Inner Harbor and downtown exploration.',
      },
    ]
  },

  'sacramento': {
    cards: [
      {
        icon: '💳',
        titulo: 'Connect Card',
        descripcion: 'Sacramento Regional Transit reloadable card for buses and light rail (Gold/Green/Blue/Silver lines).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.sacrt.com',
        donde: 'RT stations, retailers (Safeway, CVS), online',
        tip: 'One-time $2 fee. Easy online registration.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Google Pay or Apple Pay at transit readers.',
        precio: 'Same fares',
        enlace: 'https://www.sacrt.com/mobile-ticketing',
        donde: 'Apple Pay, Google Pay, RT app',
        tip: 'No card needed - tap your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited RT buses and light rail for 24 hours.',
        precio: '$6.00 USD',
        enlace: 'https://www.sacrt.com/passes',
        donde: 'RT vending machines, stations, retailers, online',
        tip: 'Affordable way to see downtown and the waterfront.',
      },
    ]
  },

  'phoenix': {
    cards: [
      {
        icon: '💳',
        titulo: 'Platinum Pass Card',
        descripcion: 'Valley Metro reloadable card for buses and light rail (M-Line).',
        precio: '$2.50 card + fare value',
        enlace: 'https://www.valleymetro.org/fares-passes',
        donde: 'Transit centers, retailers, online',
        tip: 'One-time $2.50 fee. Tap and go.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay work at Valley Metro readers.',
        precio: 'Same fares',
        enlace: 'https://www.valleymetro.org/mobile-ticketing',
        donde: 'Apple Pay, Google Pay, Valley Metro app',
        tip: 'Fastest payment method - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'All-Day Pass',
        descripcion: 'Unlimited Valley Metro buses and light rail for 24 hours (all zones).',
        precio: '$4.00 USD',
        enlace: 'https://www.valleymetro.org/fares-passes',
        donde: 'Transit center ticket machines, online',
        tip: 'One of the cheapest day passes - essential in hot Phoenix.',
      },
    ]
  },

  'st-louis': {
    cards: [
      {
        icon: '💳',
        titulo: 'Gateway Card',
        descripcion: 'Metro St. Louis reloadable card for buses and MetroLink light rail.',
        precio: '$3.00 card + fare value',
        enlace: 'https://www.metrostlouis.org',
        donde: 'Metro stations, retailers, online',
        tip: 'One-time $3 fee. Register online for benefits.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Apple Pay or Google Pay at Metro readers.',
        precio: 'Same fares',
        enlace: 'https://www.metrostlouis.org',
        donde: 'Apple Pay, Google Pay, Metro app',
        tip: 'Tap your phone - instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Metro buses and MetroLink for 24 hours (all zones).',
        precio: '$5.00 USD',
        enlace: 'https://www.metrostlouis.org/passes',
        donde: 'Metro vending machines, stations, online',
        tip: 'Excellent value for the Gateway Arch and downtown.',
      },
    ]
  },

  'las-vegas': {
    cards: [
      {
        icon: '💳',
        titulo: 'rideRTC Card',
        descripcion: 'Regional Transportation Commission reloadable card for buses on the Strip and downtown.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.rtcsnv.com',
        donde: 'RTC stations, casino gift shops, retailers, online',
        tip: 'One-time $2 fee. Walking the Strip? Get the card.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at RTC readers.',
        precio: 'Same fares',
        enlace: 'https://www.rtcsnv.com',
        donde: 'Apple Pay, Google Pay, RTC app',
        tip: 'Use your phone - no card needed.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited RTC buses (includes Deuce on the Strip) for 24 hours.',
        precio: '$20.00 USD',
        enlace: 'https://www.rtcsnv.com/passes',
        donde: 'RTC stations, Deuce on the Strip, online',
        tip: 'Great for visiting multiple casinos without taxis/Ubers.',
      },
    ]
  },

  'cleveland': {
    cards: [
      {
        icon: '💳',
        titulo: 'EZfare Card',
        descripcion: 'Greater Cleveland RTA reloadable card for buses, light rail (Red/Blue/Green lines).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.riderta.com',
        donde: 'RTA stations, retailers, online',
        tip: 'One-time $2 fee. Tap at readers.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited RTA buses and light rail for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.riderta.com/fares',
        donde: 'RTA vending machines, stations, retailers, online',
        tip: 'Good for visiting the Rock & Roll Hall of Fame and downtown.',
      },
      {
        icon: '🚆',
        titulo: 'Visitor Pass',
        descripcion: 'Multi-day visitor passes available for 2, 3, and 7 days.',
        precio: 'From $4.00 USD (2-day)',
        enlace: 'https://www.riderta.com/passes',
        donde: 'RTA stations, visitor centers, online',
        tip: 'Great discounts for longer stays.',
      },
    ]
  },

  'san-jose': {
    cards: [
      {
        icon: '💳',
        titulo: 'Clipper Card (VTA)',
        descripcion: 'Santa Clara Valley Transit Authority card - same Clipper system as San Francisco but for San Jose.',
        precio: '$3.00 card + value',
        enlace: 'https://www.vta.org/clipper',
        donde: 'VTA stations, retailers, online',
        tip: 'One-time $3 fee. Interoperable with SF Clipper.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Google Pay or Apple Pay at VTA readers.',
        precio: 'Same fares',
        enlace: 'https://www.vta.org/mobile-ticketing',
        donde: 'Apple Pay, Google Pay, VTA app',
        tip: 'Tap your phone for easy payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited VTA buses and light rail for 24 hours.',
        precio: '$6.50 USD',
        enlace: 'https://www.vta.org/passes',
        donde: 'VTA vending machines, stations, online',
        tip: 'Covers most of Silicon Valley and downtown San Jose.',
      },
    ]
  },

  'new-orleans': {
    cards: [
      {
        icon: '🎫',
        titulo: 'Jazzy Pass',
        descripcion: 'New Orleans RTA reloadable card for buses, streetcars, and ferries.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.norta.com/fares-passes',
        donde: 'RTA stations, retailers, online',
        tip: 'One-time $2 fee. Works on all city transit.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at RTA readers.',
        precio: 'Same fares',
        enlace: 'https://www.norta.com/mobile-tickets',
        donde: 'Apple Pay, Google Pay, RTA app',
        tip: 'No card needed - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Visitor Pass (3-Day)',
        descripcion: 'Unlimited all RTA buses, streetcars, and ferries for 3 days.',
        precio: '$33.00 USD',
        enlace: 'https://www.norta.com/fares-passes',
        donde: 'RTA stations, visitor centers, online',
        tip: 'Perfect for exploring the French Quarter and neighborhoods.',
      },
    ]
  },

  'buffalo': {
    cards: [
      {
        icon: '💳',
        titulo: 'Metro Pass Card',
        descripcion: 'Niagara Frontier Transportation Authority (NFTA) reloadable card for buses and Metro Rail light rail.',
        precio: '$3.00 card + fare value',
        enlace: 'https://www.nfta.com',
        donde: 'Transit stations, retailers, online',
        tip: 'One-time $3 fee. Tap and go.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited NFTA buses and Metro Rail for 24 hours.',
        precio: '$4.50 USD',
        enlace: 'https://www.nfta.com/fares',
        donde: 'NFTA vending machines, stations, retailers',
        tip: 'Affordable for exploring downtown and Niagara Falls.',
      },
      {
        icon: '🎫',
        titulo: 'Weekly Pass',
        descripcion: 'Unlimited transit for 7 calendar days.',
        precio: '$20.00 USD',
        enlace: 'https://www.nfta.com/fares',
        donde: 'Transit stations, online',
        tip: 'Great value for a longer stay.',
      },
    ]
  },

  'honolulu': {
    cards: [
      {
        icon: '💳',
        titulo: 'HOLO Card',
        descripcion: 'Honolulu Transit Authority reloadable card for TheBus (buses) and Holo ferry service.',
        precio: '$3.00 card + fare value',
        enlace: 'https://www.holocard.net',
        donde: 'Holo stores, ABC stores, retailers, online',
        tip: 'One-time $3 fee. Works on buses and ferries.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited TheBus for 24 hours (all routes, all zones).',
        precio: '$6.00 USD',
        enlace: 'https://www.holocard.net/passes',
        donde: 'HOLO stores, ABC stores, retailers, online',
        tip: 'Essential for island touring without rental car.',
      },
      {
        icon: '🚢',
        titulo: 'Holo Ferry Pass',
        descripcion: 'Day pass for Holo inter-island ferry service.',
        precio: '$30.00 USD',
        enlace: 'https://www.holocard.net',
        donde: 'HOLO kiosks, online',
        tip: 'Connects Honolulu to Hilo and other islands.',
      },
    ]
  },

  'newark': {
    cards: [
      {
        icon: '💳',
        titulo: 'NJ TRANSIT Bus Card',
        descripcion: 'NJ TRANSIT reloadable card for buses and rail service.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.njtransit.com',
        donde: 'Transit centers, retailers, online',
        tip: 'One-time $2 fee. Works on buses and commuter rail.',
      },
      {
        icon: '💳',
        titulo: 'PATH SmartLink',
        descripcion: 'Separate card for PATH (Port Authority Trans-Hudson) light rail connecting NJ to NYC.',
        precio: '$5.00 card + fare value',
        enlace: 'https://www.panynj.gov/path/en/index.html',
        donde: 'PATH stations, online',
        tip: 'One-time $5 fee. Essential for crossing to Manhattan.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use NJ TRANSIT or PATH apps for mobile ticketing.',
        precio: 'Same fares',
        enlace: 'https://www.njtransit.com/mobile-ticketing',
        donde: 'NJ TRANSIT & PATH apps',
        tip: 'Download the apps for easy payment and scheduling.',
      },
    ]
  },

  'jacksonville': {
    cards: [
      {
        icon: '💳',
        titulo: 'MyJTA Card',
        descripcion: 'Jacksonville Transportation Authority reloadable card for buses and Skyway automated people mover.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.jtafla.com/fares-passes',
        donde: 'JTA stations, retailers, online',
        tip: 'One-time $2 fee. Works on all JTA transit.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited JTA buses and Skyway for 24 hours.',
        precio: '$5.50 USD',
        enlace: 'https://www.jtafla.com/fares-passes',
        donde: 'JTA vending machines, stations, online',
        tip: 'Good value for exploring downtown and riverfront.',
      },
      {
        icon: '🚊',
        titulo: 'Skyway Only Pass',
        descripcion: 'Unlimited Skyway automated shuttle for 24 hours (downtown only).',
        precio: '$3.00 USD',
        enlace: 'https://www.jtafla.com/skyway',
        donde: 'Skyway stations, online',
        tip: 'Free fare downtown on this futuristic people mover.',
      },
    ]
  },

  'austin': {
    cards: [
      {
        icon: '💳',
        titulo: 'CapMetro CARD Card',
        descripcion: 'Capital Metro reloadable card for buses and MetroRapid bus rapid transit.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.capmetro.org/fares',
        donde: 'MetroRapid stations, retailers, online',
        tip: 'One-time $2 fee. Fast, easy payment.',
      },
      {
        icon: '📱',
        titulo: 'Mobile App',
        descripcion: 'CapMetro app for mobile tickets and real-time tracking.',
        precio: 'Pay-per-ride or passes in app',
        enlace: 'https://www.capmetro.org/mobile-ticketing',
        donde: 'CapMetro app (iOS/Android)',
        tip: 'See live bus locations and plan routes.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited CapMetro buses and MetroRapid for 24 hours.',
        precio: '$4.50 USD',
        enlace: 'https://www.capmetro.org/fares',
        donde: 'MetroRapid ticket machines, retailers, online',
        tip: 'Great value for exploring Austin\'s neighborhoods.',
      },
    ]
  },

  'orlando': {
    cards: [
      {
        icon: '💳',
        titulo: 'LYNX Card',
        descripcion: 'Lynx bus system reloadable card for all Orlando buses.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.golynx.com',
        donde: 'Lynx stations, retailers, online',
        tip: 'One-time $2 fee. Works on all Lynx routes.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Google Pay or Apple Pay at Lynx readers.',
        precio: 'Same fares',
        enlace: 'https://www.golynx.com/mobile-pay',
        donde: 'Apple Pay, Google Pay, LYNX app',
        tip: 'Tap your phone - instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited LYNX buses for 24 hours (all routes).',
        precio: '$5.00 USD',
        enlace: 'https://www.golynx.com/fares-passes',
        donde: 'LYNX vending machines, stations, retailers, online',
        tip: 'Good for visiting theme parks and downtown.',
      },
    ]
  },

  'san-juan': {
    cards: [
      {
        icon: '💳',
        titulo: 'ATI Card (Autoridad de Transporte Integrado)',
        descripcion: 'Puerto Rico integrated transit card for buses and modern BRT system.',
        precio: '$2.00 card + fare value (Puerto Rico)',
        enlace: 'https://www.dtop.pr.gov',
        donde: 'Bus terminals, retailers, online',
        tip: 'Essential for getting around Puerto Rico without a car.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited ATI buses for 24 hours.',
        precio: '$10.00 USD',
        enlace: 'https://www.dtop.pr.gov',
        donde: 'Bus terminals, retailers, online',
        tip: 'Good for exploring Old San Juan and beyond.',
      },
      {
        icon: '🚊',
        titulo: 'Tren Urbano Pass',
        descripcion: 'Unlimited San Juan light rail (Tren Urbano) for 24 hours.',
        precio: '$8.00 USD',
        enlace: 'https://www.trenurbano.pr',
        donde: 'Tren Urbano stations, online',
        tip: 'Best way to cross the city quickly.',
      },
    ]
  },

  'tampa': {
    cards: [
      {
        icon: '💳',
        titulo: 'HART Card',
        descripcion: 'Hillsborough Area Regional Transit reloadable card for buses across Tampa.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.gohart.org/fares',
        donde: 'HART stations, retailers, online',
        tip: 'One-time $2 fee. Works on all HART buses.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at HART readers.',
        precio: 'Same fares',
        enlace: 'https://www.gohart.org',
        donde: 'Apple Pay, Google Pay, HART app',
        tip: 'No card needed - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited HART buses for 24 hours.',
        precio: '$4.50 USD',
        enlace: 'https://www.gohart.org/fares-passes',
        donde: 'HART vending machines, stations, retailers, online',
        tip: 'Affordable for exploring Ybor City and downtown.',
      },
    ]
  },

  'tucson': {
    cards: [
      {
        icon: '💳',
        titulo: 'SunGO Card',
        descripcion: 'Tucson SunTran reloadable card for buses and streetcar (M Line).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.suntran.com',
        donde: 'SunTran stations, retailers, online',
        tip: 'One-time $2 fee. Tap and go.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Google Pay or Apple Pay at SunTran readers.',
        precio: 'Same fares',
        enlace: 'https://www.suntran.com/mobile-pay',
        donde: 'Apple Pay, Google Pay, SunTran app',
        tip: 'Tap your phone for quick payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited SunTran buses and M Line streetcar for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.suntran.com/fares-passes',
        donde: 'SunTran vending machines, stations, online',
        tip: 'Great value for exploring downtown and neighborhoods.',
      },
    ]
  },

  'milwaukee': {
    cards: [
      {
        icon: '💳',
        titulo: 'M•CARD',
        descripcion: 'Milwaukee County Transit System reloadable card for buses and streetcar (M Line).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.ridemcts.com',
        donde: 'MCTS stations, retailers, online',
        tip: 'One-time $2 fee. Works on buses and streetcar.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Google Pay or Apple Pay at MCTS readers.',
        precio: 'Same fares',
        enlace: 'https://www.ridemcts.com/mobile-ticketing',
        donde: 'Apple Pay, Google Pay, MCTS app',
        tip: 'No card needed - tap your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited MCTS buses for 24 hours.',
        precio: '$4.50 USD',
        enlace: 'https://www.ridemcts.com/fares-passes',
        donde: 'MCTS vending machines, stations, retailers, online',
        tip: 'Good for exploring the Third Ward and downtown.',
      },
    ]
  },

  'cincinnati': {
    cards: [
      {
        icon: '💳',
        titulo: 'EZfare Card',
        descripcion: 'SORTA (Southwest Ohio Regional Transit Authority) reloadable card for buses and streetcar (Red/Orange Line).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.go-metro.com',
        donde: 'Metro stations, retailers, online',
        tip: 'One-time $2 fee. Tap at readers.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at Metro readers.',
        precio: 'Same fares',
        enlace: 'https://www.go-metro.com/mobile-pay',
        donde: 'Apple Pay, Google Pay, Metro app',
        tip: 'Use your phone - instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Metro buses and Red/Orange streetcar for 24 hours.',
        precio: '$4.50 USD',
        enlace: 'https://www.go-metro.com/passes',
        donde: 'Metro vending machines, stations, retailers, online',
        tip: 'Affordable way to see OTR and downtown.',
      },
    ]
  },

  'nashville': {
    cards: [
      {
        icon: '💳',
        titulo: 'WeGo Card',
        descripcion: 'Nashville Public Transit reloadable card for buses and planned light rail.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.wegotransit.com',
        donde: 'WeGo Central Station, retailers, online',
        tip: 'One-time $2 fee. Works on all WeGo buses.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Google Pay or Apple Pay at WeGo readers.',
        precio: 'Same fares',
        enlace: 'https://www.wegotransit.com/mobile-tickets',
        donde: 'Apple Pay, Google Pay, WeGo app',
        tip: 'Tap your phone for easy payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited WeGo buses for 24 hours.',
        precio: '$4.50 USD',
        enlace: 'https://www.wegotransit.com/fares-passes',
        donde: 'WeGo Central Station, retailers, online',
        tip: 'Good for Music Row, Broadway, and beyond.',
      },
    ]
  },

  'oklahoma-city': {
    cards: [
      {
        icon: '💳',
        titulo: 'EMBARK Card',
        descripcion: 'Oklahoma City public transit reloadable card for buses.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.embarkok.com',
        donde: 'EMBARK stations, retailers, online',
        tip: 'One-time $2 fee. Tap and ride.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at EMBARK readers.',
        precio: 'Same fares',
        enlace: 'https://www.embarkok.com/mobile-pay',
        donde: 'Apple Pay, Google Pay, EMBARK app',
        tip: 'No card needed - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited EMBARK buses for 24 hours.',
        precio: '$4.00 USD',
        enlace: 'https://www.embarkok.com/passes',
        donde: 'EMBARK vending machines, stations, retailers, online',
        tip: 'Affordable for exploring the city.',
      },
    ]
  },

  'el-paso': {
    cards: [
      {
        icon: '💳',
        titulo: 'Sun Metro Card',
        descripcion: 'El Paso Sun Metro reloadable card for buses and street car (trolley).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.sunmetro.net',
        donde: 'Sun Metro stations, retailers, online',
        tip: 'One-time $2 fee. Works on buses and trolley.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Use Apple Pay or Google Pay at Sun Metro readers.',
        precio: 'Same fares',
        enlace: 'https://www.sunmetro.net/mobile-pay',
        donde: 'Apple Pay, Google Pay, Sun Metro app',
        tip: 'Tap your phone - instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Sun Metro buses for 24 hours.',
        precio: '$3.50 USD',
        enlace: 'https://www.sunmetro.net/fares-passes',
        donde: 'Sun Metro vending machines, stations, retailers, online',
        tip: 'Affordable for border city exploring.',
      },
    ]
  },

  'norfolk': {
    cards: [
      {
        icon: '💳',
        titulo: 'HRT Card (Hampton Roads Transit)',
        descripcion: 'Norfolk public transit reloadable card for buses and light rail (Tide Line).',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.gohrt.com',
        donde: 'HRT stations, retailers, online',
        tip: 'One-time $2 fee. Works on buses and light rail.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Google Pay or Apple Pay at HRT readers.',
        precio: 'Same fares',
        enlace: 'https://www.gohrt.com/mobile-pay',
        donde: 'Apple Pay, Google Pay, HRT app',
        tip: 'No card needed - use your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited HRT buses and Tide light rail for 24 hours.',
        precio: '$5.00 USD',
        enlace: 'https://www.gohrt.com/fares-passes',
        donde: 'HRT vending machines, stations, retailers, online',
        tip: 'Great for waterfront and downtown Norfolk.',
      },
    ]
  },

  'kansas-city': {
    cards: [
      {
        icon: '💳',
        titulo: 'RideKC Card',
        descripcion: 'Kansas City Area Transportation Authority reloadable card for buses.',
        precio: '$2.00 card + fare value',
        enlace: 'https://www.ridekc.org',
        donde: 'Transit centers, retailers, online',
        tip: 'One-time $2 fee. Works on all RideKC buses.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Payment',
        descripcion: 'Apple Pay or Google Pay at RideKC readers.',
        precio: 'Same fares',
        enlace: 'https://www.ridekc.org/mobile-ticketing',
        donde: 'Apple Pay, Google Pay, RideKC app',
        tip: 'Tap your phone for instant payment.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass + Note',
        descripcion: 'Note: KCATA buses are FREE! Just board without a card or ticket.',
        precio: 'FREE',
        enlace: 'https://www.ridekc.org/fares',
        donde: 'Just board any KCATA bus',
        tip: 'One of the only fare-free major transit systems in the US!',
      },
    ]
  },

  // Canadian Cities
  'toronto': {
    cards: [
      {
        icon: '💳',
        titulo: 'PRESTO Card',
        descripcion: 'Greater Toronto Area unified contactless card for TTC (buses, subway, streetcar), GO Transit, and more.',
        precio: '$0 card (free) + fare value',
        enlace: 'https://www.prestocard.ca',
        donde: 'TTC stations, convenience stores, online',
        tip: 'Free to get. Discounted fares vs. single tickets. Register online for fraud protection.',
      },
      {
        icon: '📱',
        titulo: 'Mobile PRESTO',
        descripcion: 'Digital PRESTO via Apple Pay, Google Pay, or Samsung Pay. Works same as physical card.',
        precio: 'Same fares',
        enlace: 'https://www.prestocard.ca/en/about/presto-mobile',
        donde: 'Apple Pay, Google Pay, Samsung Pay, TTC app',
        tip: 'Fastest way to tap and go. Free to set up.',
      },
      {
        icon: '🚇',
        titulo: 'Day Pass (Priced Like 2 Trips)',
        descripcion: 'Unlimited TTC subway, streetcar, and bus for 24 hours. Costs same as 2 single adult fares.',
        precio: '$11.50 CAD',
        enlace: 'https://www.ttc.ca/Fares-and-passes/Passes/PRESTO',
        donde: 'TTC stations, convenience stores, online',
        tip: 'Amazing value - you break even in 2 trips.',
      },
    ]
  },

  'vancouver': {
    cards: [
      {
        icon: '💳',
        titulo: 'Compass Card',
        descripcion: 'Metro Vancouver reloadable card for TransLink buses, SkyTrain, SeaBus, and West Coast Express.',
        precio: '$6.00 CAD card + fare value',
        enlace: 'https://www.compasscard.ca',
        donde: 'SkyTrain stations, convenience stores (7-Eleven), online',
        tip: 'One-time $6 fee. Register for fraud protection.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Compass',
        descripcion: 'Digital Compass on Apple Pay or Google Pay.',
        precio: 'Same fares as physical card',
        enlace: 'https://www.compasscard.ca/faq/mobile-compass',
        donde: 'Apple Pay, Google Pay, TransLink app',
        tip: 'Free, instant setup. No card needed.',
      },
      {
        icon: '🚇',
        titulo: 'Day Pass (1-Zone / All-Zone)',
        descripcion: 'Unlimited buses, SkyTrain, SeaBus for 24 hours. Single-zone or all-zone options.',
        precio: '$11.75 CAD (1-zone) / $18.00 CAD (all-zone)',
        enlace: 'https://www.translink.ca/fares-and-passes',
        donde: 'SkyTrain stations, convenience stores, online, ticket machines',
        tip: 'All-zone covers the entire region - great for Whistler day trips.',
      },
    ]
  },

  'montreal': {
    cards: [
      {
        icon: '💳',
        titulo: 'OPUS Card',
        descripcion: 'STM/AMT reloadable smart card for Metro, buses, and commuter trains across Montreal region.',
        precio: '$6.00 CAD card + fare value',
        enlace: 'https://www.stm.info/en/info-schedules/fares-and-passes/opus-card',
        donde: 'Metro stations, ticket vendors, online',
        tip: 'One-time $6 fee. Works on STM and some regional transit.',
      },
      {
        icon: '📱',
        titulo: 'STM Mobile App',
        descripcion: 'Pay directly with your debit/credit card via STM app - no card needed.',
        precio: 'Same fares',
        enlace: 'https://www.stm.info/en/info-schedules/fares-and-passes/mobile-ticketing',
        donde: 'Download STM app (iOS/Android)',
        tip: 'Instant payment - tap and go.',
      },
      {
        icon: '🎫',
        titulo: 'Carnet 10 Tours (Tourist Bundle)',
        descripcion: '"L\'occasionnelle" - 10 fare units for tourists, sold in convenient books. No card required.',
        precio: '$34.00 CAD (10-trip booklet)',
        enlace: 'https://www.stm.info/en/info-schedules/fares-and-passes',
        donde: 'Metro stations, tourist centers, ticket vendors',
        tip: 'Perfect for short visits - each trip uses 1-2 units depending on route.',
      },
    ]
  },

  'calgary': {
    cards: [
      {
        icon: '💳',
        titulo: 'My Fare Card',
        descripcion: 'Calgary Transit reloadable card for buses and CTrain light rail.',
        precio: '$10.00 CAD card + fare value',
        enlace: 'https://www.calgarytransit.com/fares-and-passes/fare-products',
        donde: 'CTrain stations, ticket machines, retailers, online',
        tip: 'One-time $10 fee. Tap-and-go payment system.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Pay',
        descripcion: 'Use Apple Pay or Google Pay with My Fare via mobile wallet.',
        precio: 'Same fares',
        enlace: 'https://www.calgarytransit.com/fares-and-passes/mobile-payment',
        donde: 'Apple Pay, Google Pay, Transit app',
        tip: 'No card needed - tap your phone.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Calgary Transit buses and CTrain for 24 hours.',
        precio: '$10.75 CAD',
        enlace: 'https://www.calgarytransit.com/fares-and-passes/day-pass',
        donde: 'CTrain stations, ticket machines, retailers, online',
        tip: 'Great for exploring downtown and the bow river.',
      },
    ]
  },

  'edmonton': {
    cards: [
      {
        icon: '💳',
        titulo: 'Arc Card',
        descripcion: 'Edmonton Transit reloadable contactless card for buses and LRT (light rail).',
        precio: '$5.00 CAD card + fare value',
        enlace: 'https://www.edmonton.ca/transit/fares-and-payment/arc-card',
        donde: 'LRT stations, ticket offices, retailers, online',
        tip: 'One-time $5 fee. Register for benefits.',
      },
      {
        icon: '📱',
        titulo: 'Mobile Arc',
        descripcion: 'Digital Arc via Apple Pay or Google Pay.',
        precio: 'Same fares',
        enlace: 'https://www.edmonton.ca/transit/fares-and-payment/mobile-payment',
        donde: 'Apple Pay, Google Pay, Edmonton Transit app',
        tip: 'Instant setup, no physical card needed.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited Edmonton Transit buses and LRT for 24 hours.',
        precio: '$10.25 CAD',
        enlace: 'https://www.edmonton.ca/transit/fares-and-payment/passes',
        donde: 'LRT stations, ticket offices, retailers, online',
        tip: 'Great for exploring the river valley and downtown.',
      },
    ]
  },

  'ottawa': {
    cards: [
      {
        icon: '💳',
        titulo: 'PRESTO Card (OC Transpo)',
        descripcion: 'OC Transpo and Gatineau STO reloadable card for buses and Confederation Line light rail.',
        precio: '$0 card (free) + fare value',
        enlace: 'https://www.octranspo.com/en/fares-and-passes/presto',
        donde: 'Transit stations, convenience stores, online',
        tip: 'Free card. Same unified PRESTO system as Toronto.',
      },
      {
        icon: '📱',
        titulo: 'Mobile PRESTO',
        descripcion: 'Digital PRESTO via Apple Pay, Google Pay, or Samsung Pay.',
        precio: 'Same fares',
        enlace: 'https://www.octranspo.com/en/fares-and-passes/presto',
        donde: 'Apple Pay, Google Pay, Samsung Pay, Transit app',
        tip: 'Free, instant activation. Works same as physical card.',
      },
      {
        icon: '🚌',
        titulo: 'Day Pass',
        descripcion: 'Unlimited OC Transpo buses and Confederation Line for 24 hours.',
        precio: '$13.00 CAD',
        enlace: 'https://www.octranspo.com/en/fares-and-passes/passes',
        donde: 'Transit stations, convenience stores, online',
        tip: 'Covers most of Ottawa. Good for Byward Market and Parliament Hill.',
      },
    ]
  },

  // Mexico (existing data, maintained)
  'cdmx': {
    cards: [
      {
        icon: '💳',
        titulo: 'Tarjeta de Movilidad Integrada (TMI)',
        descripcion: 'Tarjeta recargable del Sistema de Transporte Colectivo Metro CDMX para Metro, Metrobús, Tren Ligero y RTP.',
        precio: '$0 tarjeta (gratis) + saldo',
        enlace: 'https://www.metro.cdmx.gob.mx',
        donde: 'Estaciones de Metro, recargas en farmacias y tiendas.',
        tip: 'Tarjeta gratuita. Descuentos importantes si viajas múltiples líneas.',
      },
      {
        icon: '📱',
        titulo: 'Billete Digital',
        descripcion: 'Compra viajes individuales via app del Metro CDMX.',
        precio: '$0.50 - $0.75 MXN por viaje',
        enlace: 'https://www.metro.cdmx.gob.mx',
        donde: 'App Metro CDMX (iOS/Android)',
        tip: 'Rapido y sin tarjeta. Perfecto para turistas.',
      },
      {
        icon: '🚇',
        titulo: 'Pase Turístico (1 a 7 días)',
        descripcion: 'Viajes ilimitados en Metro, Metrobús y Tren Ligero por 1, 3 o 7 días consecutivos.',
        precio: '$160 MXN (1 día) / $420 MXN (3 días) / $880 MXN (7 días)',
        enlace: 'https://www.metro.cdmx.gob.mx',
        donde: 'Estaciones principales del Metro, en línea.',
        tip: 'El pase de 3 días es excelente relación precio/valor para turistas.',
      },
    ]
  },

  'gdl': {
    cards: [
      {
        icon: '💳',
        titulo: 'Tarjeta Mi Pasaje',
        descripcion: 'Tarjeta recargable del Sistema de Transporte Jalisco para autobuses y tren ligero.',
        precio: '$20 MXN tarjeta + saldo',
        enlace: 'https://www.transitmx.com.mx',
        donde: 'Estaciones, puntos de venta autorizados.',
        tip: 'Una tarjeta para todos los transportes de Guadalajara.',
      },
      {
        icon: '🚌',
        titulo: 'Pase Diario',
        descripcion: 'Viajes ilimitados en autobús y tren ligero por 24 horas.',
        precio: '$60 MXN',
        enlace: 'https://www.transitmx.com.mx',
        donde: 'Taquillas, máquinas de venta.',
        tip: 'Perfecto para explorar Guadalajara un día completo.',
      },
      {
        icon: '🎫',
        titulo: 'Boletos Individuales',
        descripcion: 'Compra viajes sencillos sin tarjeta.',
        precio: '$9 MXN por viaje',
        enlace: 'https://www.transitmx.com.mx',
        donde: 'Validadores de autobús, taquillas.',
        tip: 'Si solo necesitas unos pocos viajes.',
      },
    ]
  },

  'mty': {
    cards: [
      {
        icon: '💳',
        titulo: 'Tarjeta Feria',
        descripcion: 'Tarjeta recargable del Sistema de Transporte de Monterrey (STC) para Metro, autobús y teleférico.',
        precio: '$0 tarjeta (gratis) + saldo',
        enlace: 'https://www.stcmetro.org',
        donde: 'Estaciones del Metro, recargas en comercios.',
        tip: 'Tarjeta gratuita. Descuentos si combinas múltiples líneas.',
      },
      {
        icon: '🚇',
        titulo: 'Pase Turístico',
        descripcion: 'Viajes ilimitados en Metro, autobús y teleférico por 1 o 3 días.',
        precio: '$80 MXN (1 día) / $200 MXN (3 días)',
        enlace: 'https://www.stcmetro.org',
        donde: 'Taquillas principales, línea.',
        tip: 'El pase de 3 días es muy buena opción para turistas.',
      },
      {
        icon: '🎫',
        titulo: 'Boletos Sencillos',
        descripcion: 'Compra viajes individuales sin tarjeta.',
        precio: '$10 MXN por viaje',
        enlace: 'https://www.stcmetro.org',
        donde: 'Máquinas y taquillas de estaciones.',
        tip: 'Opción simple si tienes pocos viajes planeados.',
      },
    ]
  },
};

// Helper function: Get transit cards for a specific city
export const getTransitCards = (citySlug) => {
  const city = transitCards[citySlug];
  return city ? city.cards : null;
};

// Helper function: Get all city slugs that have transit card data
export const getAllCitiesWithCards = () => {
  return Object.keys(transitCards);
};
