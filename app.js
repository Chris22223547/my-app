const prices = {
  systemType: {
    single: 3200,
    "single-left-sidelite": 2650,
    "single-right-sidelite": 2650,
    "single-two-sidelite": 3325,
    double: 3400,
    "double-left-sidelite": 4025,
    "double-right-sidelite": 4025,
    "double-two-sidelite": 4700,
  },
  frameWidth: { 30: 0, 32: 80, 34: 140, 36: 210, 42: 520 },
  frameHeight: { 81.875: 0, 83.875: 160, 97.875: 620 },
  jambDepth: { 4.625: 0, 6.625: 130, 7.25: 210 },
  frameOption: { "smooth-composite": 0, "woodgrain-composite": 125 },
  panelStyle: {
    "richersons-6-panel-sg68": 0,
    "richersons-flush-sg00": 0,
    "richersons-4-panel-flush-top-sg46": 0,
    "richersons-4-panel-3-quarter-lite-sg49": 0,
    "richersons-2-panel-3-quarter-lite-sg25": 0,
    "richersons-6-panel-1-quarter-lite-sg66": 0,
    "richersons-2-panel-1-half-lite-sg20": 0,
    "trimlite-two-panel-shaker": 0,
    "trimlite-one-panel-shaker": 0,
    "trimlite-3-panel-shaker": 0,
    flush: 0,
    "richersons-2-panel": 180,
    "richersons-4-panel": 240,
    "richersons-6-panel": 260,
    craftsman: 280,
    shaker: 340,
    "steel-flush": 0,
    "steel-6-panel": 0,
    "steel-4-panel": 0,
    "steel-3-panel-scroll": 0,
    "steel-orleans": 0,
    "steel-london": 0,
    "steel-2-panel-camber-top": 0,
    "steel-2-panel-camber-top-planked": 0,
    "steel-sydney": 0,
    "steel-victoria": 0,
    "steel-soho": 0,
    "steel-linea": 0,
    "steel-vog": 0,
    "steel-oso": 0,
    "steel-tao": 0,
    "steel-era": 0,
  },
  grainFilter: { smooth: 0, steel: 0, woodgrain: 140 },
  doorLite: { fusion: 0, "trim-lite": 0, custom: 0, none: 0 },
  finish: {},
  exteriorFinishType: { unfinished: 0, paint: 120, stain: 220 },
  exteriorFrameFinish: {},
  exteriorFrameFinishType: { unfinished: 0, paint: 120, stain: 220 },
  interiorFinish: {},
  interiorFinishType: { unfinished: 0, paint: 120, stain: 220 },
  interiorFrameFinish: {},
  interiorFrameFinishType: { unfinished: 0, paint: 120, stain: 220 },
  sill: { standard: 0, adjustable: 180, black: 260 },
  hardware: { black: 0, "satin-nickel": 0, "black-self-closing": 0, "satin-nickel-self-closing": 0 },
  handleSet: { "deadbolt-passage": 210, "grip-set": 390, multipoint: 520 },
  deadboltPassageStyle: {
    "square-lever-deadbolt-square-rosette": 0,
    "tube-lever-deadbolt-square-rosette": 35,
    "contemporary-knob-deadbolt-square-rosette": 45,
  },
  gripSetStyle: {
    "la-jolla": 0,
    "santa-cruz": 45,
    seattle: 45,
  },
  gripSetTrim: {
    "square-lever": 0,
    "tube-lever": 35,
    "contemporary-knob": 45,
  },
  multipointSize: { "1-5x11": 0, "2x10": 0, "2-5x17": 0 },
  multipointLever: { athena: 0, helios: 0, hercules: 0 },
  transom: 740,
  brickmould: 195,
};

const labels = {
  systemType: {
    single: "Single Door",
    "single-left-sidelite": "Single Door with Left Sidelite",
    "single-right-sidelite": "Single Door with Right Sidelite",
  "single-two-sidelite": "Single Door with Two Sidelites",
    double: "Double Door",
    "double-left-sidelite": "Double Door with Left Sidelite",
    "double-right-sidelite": "Double Door with Right Sidelite",
    "double-two-sidelite": "Double Door with Two Sidelites",
  },
  frameWidth: {
    30: '31 1/2"',
    32: '33 1/2"',
    34: '35 1/2"',
    36: '37 1/2"',
    42: '43 1/2"',
  },
  frameHeight: {
    81.875: '81 7/8"',
    83.875: '83 7/8"',
    97.875: '97 7/8"',
  },
  jambDepth: {
    4.625: '4 5/8"',
    6.625: '6 5/8"',
    7.25: '7 1/4"',
  },
};

const panelArt = {
  "richersons-6-panel-sg68": "assets/smooth-panels/6-panel-sg68.png",
  "richersons-flush-sg00": "assets/smooth-panels/flush-sg00.png",
  "richersons-4-panel-flush-top-sg46": "assets/smooth-panels/4-panel-flush-top-sg46.png",
  "richersons-4-panel-3-quarter-lite-sg49": "assets/smooth-panels/4-panel-3-quarter-lite-sg49.png",
  "richersons-2-panel-3-quarter-lite-sg25": "assets/smooth-panels/2-panel-3-quarter-lite-sg25.png",
  "richersons-6-panel-1-quarter-lite-sg66": "assets/smooth-panels/6-panel-1-quarter-lite-sg66.png",
  "richersons-2-panel-1-half-lite-sg20": "assets/smooth-panels/2-panel-1-half-lite-sg20.png",
  "trimlite-two-panel-shaker": "assets/smooth-panels/trimlite-two-panel-shaker.png",
  "trimlite-one-panel-shaker": "assets/smooth-panels/trimlite-one-panel-shaker.png",
  "trimlite-3-panel-shaker": "assets/smooth-panels/trimlite-3-panel-shaker.png",
  flush: "https://cdn.indikor.com/e8591c13-64bc-4c43-a8fb-af4618f73ebc",
  "richersons-2-panel": "https://cdn.indikor.com/1efcc59f-e0a0-4cb2-a346-fb65921d8c09",
  "richersons-4-panel": "https://cdn.indikor.com/9f4079b9-6d35-434e-b5d0-47cee4f5d6af",
  "richersons-6-panel": "https://cdn.indikor.com/90558de8-8c07-49fb-8e0d-c10035b61da6",
  craftsman: "https://cdn.indikor.com/5366c8fd-c62f-4af0-bbc4-d95c1a5bd75e",
  shaker: "https://cdn.indikor.com/e758af9a-b7b3-4395-bab6-4ec91d87d2f1",
  "steel-flush": "assets/steel-panels/flush.png",
  "steel-6-panel": "assets/steel-panels/6-panel.png",
  "steel-4-panel": "assets/steel-panels/4-panel.png",
  "steel-3-panel-scroll": "assets/steel-panels/3-panel-scroll.png",
  "steel-orleans": "assets/steel-panels/orleans.png",
  "steel-london": "assets/steel-panels/london.png",
  "steel-2-panel-camber-top": "assets/steel-panels/2-panel-camber-top.png",
  "steel-2-panel-camber-top-planked": "assets/steel-panels/2-panel-camber-top-planked.png",
  "steel-sydney": "assets/steel-panels/sydney.png",
  "steel-victoria": "assets/steel-panels/victoria.png",
  "steel-soho": "assets/steel-panels/soho.png",
  "steel-linea": "assets/steel-panels/linea.png",
  "steel-vog": "assets/steel-panels/vog.png",
  "steel-oso": "assets/steel-panels/oso.png",
  "steel-tao": "assets/steel-panels/tao.png",
  "steel-era": "assets/steel-panels/era.png",
};

const finishStyles = {
  "black-525": { color: "#000209", frame: "#000209", opacity: "0.8" },
  "pebble-559": { color: "#b8b0a4", frame: "#9f978c", opacity: "0.46" },
  "chestnut-brown-554": { color: "#5a3828", frame: "#43291e", opacity: "0.68" },
  "commercial-brown-562": { color: "#3a2d25", frame: "#2d231d", opacity: "0.72" },
  "cream-white": { color: "#f3ead7", frame: "#dfd4bd", opacity: "0.24" },
  "chantilly-lace": { color: "#f7f5ed", frame: "#dedbd0", opacity: "0.22" },
  "antique-brown-265": { color: "#6a4a35", frame: "#4c3527", opacity: "0.66" },
  "sable-547": { color: "#4b4640", frame: "#35322e", opacity: "0.7" },
  "slate-523": { color: "#5c6770", frame: "#444d54", opacity: "0.62" },
  "wedgewood-blue-535": { color: "#607f96", frame: "#435d70", opacity: "0.58" },
  "nutmeg-568": { color: "#8b5a35", frame: "#654025", opacity: "0.64" },
  "ivory-502": { color: "#eee3cb", frame: "#d8ccb4", opacity: "0.28" },
  "iron-ore-5p6": { color: "#303235", frame: "#222426", opacity: "0.74" },
  "windswept-smoke-506": { color: "#9c9b93", frame: "#7f7e77", opacity: "0.48" },
  "polytex-white-141": { color: "#f4f2ec", frame: "#d8d8d4", opacity: "0.24" },
  "bright-red-322": { color: "#b21f25", frame: "#82161b", opacity: "0.62" },
  "old-world-blue-542": { color: "#244b6d", frame: "#19354e", opacity: "0.68" },
  "graphite-5p5": { color: "#383b3d", frame: "#272a2c", opacity: "0.72" },
  "ns-espresso": { color: "#2b1d16", frame: "#1f1510", opacity: "0.76" },
  "blue-ash": { color: "#6f7f86", frame: "#515f65", opacity: "0.6" },
  "caramel-oak": { color: "#a96d35", frame: "#7b4c25", opacity: "0.58" },
  "crimson-ash": { color: "#7f2b2f", frame: "#5c1f22", opacity: "0.62" },
  "dark-chocolate": { color: "#2f2119", frame: "#201610", opacity: "0.76" },
  ebony: { color: "#111111", frame: "#080808", opacity: "0.82" },
  espresso: { color: "#2c1c14", frame: "#1d120d", opacity: "0.78" },
  hickory: { color: "#8a5d36", frame: "#624126", opacity: "0.6" },
  "light-cherry": { color: "#b26b45", frame: "#814b30", opacity: "0.54" },
  "silver-ash": { color: "#aaa89f", frame: "#85837b", opacity: "0.48" },
  smoke: { color: "#74716b", frame: "#55534f", opacity: "0.58" },
  teak: { color: "#8e5b2f", frame: "#674121", opacity: "0.62" },
  toffee: { color: "#9b6333", frame: "#714724", opacity: "0.58" },
  walnut: { color: "#5a3924", frame: "#3c2618", opacity: "0.7" },
  "early-american": { color: "#7a4b2a", frame: "#57351d", opacity: "0.62" },
};

const paintColors = [
  ["antique-brown-265", "Antique Brown 265", 525],
  ["black-525", "Black 525", 525],
  ["bright-red-322", "Bright Red 322", 525],
  ["chestnut-brown-554", "Chestnut Brown 554", 525],
  ["commercial-brown-562", "Commercial Brown 562", 525],
  ["cream-white", "Cream White", 525],
  ["chantilly-lace", "Chantilly Lace", 525],
  ["graphite-5p5", "Graphite 5P5", 525],
  ["iron-ore-5p6", "Iron Ore 5P6", 525],
  ["ivory-502", "Ivory 502", 525],
  ["ns-espresso", "NS Espresso", 525],
  ["nutmeg-568", "Nutmeg 568", 525],
  ["old-world-blue-542", "Old World Blue 542", 525],
  ["pebble-559", "Pebble 559", 525],
  ["polytex-white-141", "Polytex White 141", 525],
  ["sable-547", "Sable 547", 525],
  ["slate-523", "Slate 523", 525],
  ["wedgewood-blue-535", "Wedgewood Blue 535", 525],
  ["windswept-smoke-506", "Windswept Smoke 506", 525],
];

const steelFinishValue = "polytex-white-standard";
const steelFinishColor = "polytex-white-141";
const allCustomLiteSizes = [
  ["22x64", "22 x 64"],
  ["7x64", "7 x 64"],
  ["22x15", "22 x 15"],
  ["22x10", "22 x 10"],
  ["22x17", "22 x 17"],
  ["22x36", "22 x 36"],
  ["22x48", "22 x 48"],
  ["22x3", "22 x 3"],
  ["8x48", "8 x 48"],
];
const customGlassPrices = {
  "22x64": 605,
  "7x64": 340,
  "22x15": 330,
  "22x14-7-16": 330,
  "22x10": 330,
  "22x17": 330,
  "22x36": 400,
  "22x48": 500,
  "22x3": 320,
  "8x48": 340,
};
const fusionListPrices = {
  "amsterdam-2-zinc": {
    "22x36": 451,
    "8x36": 277,
    "22x48": 573,
    "8x48": 323,
    "22x64": 672,
    "7x64": 358,
    "22x17": 320,
    "22x14-7-16": 307,
    "22x15": 324,
    "25x15": 324,
  },
  "glacier-patina": {
    "22x36": 500,
    "8x36": 280,
    "22x48": 612,
    "8x48": 329,
    "22x64": 732,
    "7x64": 384,
    "22x17": 344,
    "22x14-7-16": 327,
    "22x15": 345,
    "25x15": 345,
  },
  "concord-patina": {
    "22x36": 391,
    "8x36": 253,
    "22x48": 479,
    "8x48": 293,
    "22x64": 645,
    "7x64": 337,
    "22x17": 279,
    "22x14-7-16": 265,
    "22x15": 282,
    "25x15": 282,
  },
  "sunningdale-zinc": {
    "22x36": 428,
    "8x36": 282,
    "22x48": 508,
    "8x48": 314,
    "22x64": 606,
    "7x64": 342,
    "22x17": 277,
    "22x14-7-16": 263,
    "22x15": 277,
    "25x15": 277,
  },
  "oak-hill-patina": {
    "22x36": 370,
    "8x36": 233,
    "22x48": 456,
    "8x48": 275,
    "22x64": 532,
    "7x64": 301,
    "22x17": 258,
    "22x14-7-16": 246,
    "22x15": 260,
    "25x15": 260,
  },
  "kingston-patina": {
    "22x36": 559,
    "8x36": 296,
    "22x48": 672,
    "8x48": 370,
    "22x64": 819,
    "7x64": 444,
    "22x17": 336,
    "22x14-7-16": 322,
    "22x15": 339,
    "25x15": 339,
  },
  "pine-valley-patina": {
    "22x36": 379,
    "8x36": 243,
    "22x48": 454,
    "8x48": 272,
    "22x64": 563,
    "7x64": 317,
    "22x17": 270,
    "22x14-7-16": 258,
    "22x15": 273,
    "25x15": 273,
  },
  "lisbon-patina": {
    "22x36": 570,
    "8x36": 299,
    "22x48": 680,
    "8x48": 347,
    "22x64": 918,
    "7x64": 411,
    "22x17": 337,
    "22x14-7-16": 317,
    "22x15": 343,
    "25x15": 343,
  },
  "kiara-stainless": {
    "22x48": 1115,
    "8x48": 672,
    "22x64": 1386,
    "7x64": 801,
  },
  "delano-stainless": {
    "22x48": 1269,
    "8x48": 798,
    "22x64": 1460,
    "7x64": 937,
  },
  "montreux": {
    "22x48": 769,
    "8x48": 457,
    "22x64": 889,
    "7x64": 543,
  },
};
const fusionSizePriceAliases = {
  "22x15": "25x15",
};
const fusionStylesBySize = {
  "22x64": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-22x64/amsterdam-2-zinc.png"],
    ["antonella", "Antonella", "assets/fusion-22x64/antonella.png"],
    ["brela", "Brela", "assets/fusion-22x64/brela.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-22x64/concord-patina.png"],
    ["corsica", "Corsica", "assets/fusion-22x64/corsica.png"],
    ["delano-stainless", "Delano Stainless", "assets/fusion-22x64/delano-stainless.png"],
    ["eva", "Eva", "assets/fusion-22x64/eva.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-22x64/glacier-patina.png"],
    ["kiara-stainless", "Kiara Stainless", "assets/fusion-22x64/kiara-stainless.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-22x64/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-22x64/lisbon-patina.png"],
    ["lynda", "Lynda", "assets/fusion-22x64/lynda.png"],
    ["montreux", "Montreux", "assets/fusion-22x64/montreux.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-22x64/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-22x64/pine-valley-patina.png"],
    ["prague", "Prague", "assets/fusion-22x64/prague.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-22x64/sunningdale-zinc.png"],
  ],
  "7x64": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-7x64/amsterdam-2-zinc.png"],
    ["antonella", "Antonella", "assets/fusion-7x64/antonella.png"],
    ["brela", "Brela", "assets/fusion-7x64/brela.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-7x64/concord-patina.png"],
    ["corsica", "Corsica", "assets/fusion-7x64/corsica.png"],
    ["delano-stainless", "Delano Stainless", "assets/fusion-7x64/delano-stainless.png"],
    ["eva", "Eva", "assets/fusion-7x64/eva.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-7x64/glacier-patina.png"],
    ["kiara-stainless", "Kiara Stainless", "assets/fusion-7x64/kiara-stainless.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-7x64/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-7x64/lisbon-patina.png"],
    ["lynda", "Lynda", "assets/fusion-7x64/lynda.png"],
    ["montreux", "Montreux", "assets/fusion-7x64/montreux.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-7x64/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-7x64/pine-valley-patina.png"],
    ["prague", "Prague", "assets/fusion-7x64/prague.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-7x64/sunningdale-zinc.png"],
  ],
  "8x48": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-8x48/amsterdam-2-zinc.png"],
    ["antonella", "Antonella", "assets/fusion-8x48/antonella.png"],
    ["brela", "Brela", "assets/fusion-8x48/brela.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-8x48/concord-patina.png"],
    ["corsica", "Corsica", "assets/fusion-8x48/corsica.png"],
    ["delano-stainless", "Delano Stainless", "assets/fusion-8x48/delano-stainless.png"],
    ["eva", "Eva", "assets/fusion-8x48/eva.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-8x48/glacier-patina.png"],
    ["kiara-stainless", "Kiara Stainless", "assets/fusion-8x48/kiara-stainless.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-8x48/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-8x48/lisbon-patina.png"],
    ["lynda", "Lynda", "assets/fusion-8x48/lynda.png"],
    ["montreux", "Montreux", "assets/fusion-8x48/montreux.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-8x48/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-8x48/pine-valley-patina.png"],
    ["prague", "Prague", "assets/fusion-8x48/prague.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-8x48/sunningdale-zinc.png"],
  ],
  "22x17": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-22x17/amsterdam-2-zinc.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-22x17/concord-patina.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-22x17/glacier-patina.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-22x17/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-22x17/lisbon-patina.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-22x17/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-22x17/pine-valley-patina.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-22x17/sunningdale-zinc.png"],
  ],
  "22x15": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-22x17/amsterdam-2-zinc.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-22x17/concord-patina.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-22x17/glacier-patina.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-22x17/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-22x17/lisbon-patina.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-22x17/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-22x17/pine-valley-patina.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-22x17/sunningdale-zinc.png"],
  ],
  "22x14-7-16": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-22x17/amsterdam-2-zinc.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-22x17/concord-patina.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-22x17/glacier-patina.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-22x17/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-22x17/lisbon-patina.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-22x17/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-22x17/pine-valley-patina.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-22x17/sunningdale-zinc.png"],
  ],
  "22x36": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-22x36/amsterdam-2-zinc.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-22x36/concord-patina.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-22x36/glacier-patina.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-22x36/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-22x36/lisbon-patina.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-22x36/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-22x36/pine-valley-patina.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-22x36/sunningdale-zinc.png"],
  ],
  "22x48": [
    ["amsterdam-2-zinc", "Amsterdam 2 Zinc", "assets/fusion-22x48/amsterdam-2-zinc.png"],
    ["antonella", "Antonella", "assets/fusion-22x48/antonella.png"],
    ["brela", "Brela", "assets/fusion-22x48/brela.png"],
    ["concord-patina", "Concord Patina", "assets/fusion-22x48/concord-patina.png"],
    ["corsica", "Corsica", "assets/fusion-22x48/corsica.png"],
    ["delano-stainless", "Delano Stainless", "assets/fusion-22x48/delano-stainless.png"],
    ["eva", "Eva", "assets/fusion-22x48/eva.png"],
    ["glacier-patina", "Glacier Patina", "assets/fusion-22x48/glacier-patina.png"],
    ["kiara-stainless", "Kiara Stainless", "assets/fusion-22x48/kiara-stainless.png"],
    ["kingston-patina", "Kingston Patina", "assets/fusion-22x48/kingston-patina.png"],
    ["lisbon-patina", "Lisbon Patina", "assets/fusion-22x48/lisbon-patina.png"],
    ["lynda", "Lynda", "assets/fusion-22x48/lynda.png"],
    ["montreux", "Montreux", "assets/fusion-22x48/montreux.png"],
    ["oak-hill-patina", "Oak Hill Patina", "assets/fusion-22x48/oak-hill-patina.png"],
    ["pine-valley-patina", "Pine Valley Patina", "assets/fusion-22x48/pine-valley-patina.png"],
    ["prague", "Prague", "assets/fusion-22x48/prague.png"],
    ["sunningdale-zinc", "Sunningdale Zinc", "assets/fusion-22x48/sunningdale-zinc.png"],
  ],
};
const panelLiteSizeOptions = {
  "richersons-flush-sg00": allCustomLiteSizes,
  "richersons-4-panel-flush-top-sg46": [
    ["22x36", "22 x 36"],
    ["22x10", "22 x 10"],
  ],
  "richersons-6-panel-sg68": [
    ["22x36", "22 x 36"],
    ["22x10", "22 x 10"],
  ],
  "richersons-6-panel-1-quarter-lite-sg66": allCustomLiteSizes,
  "richersons-2-panel-1-half-lite-sg20": [
    ["22x36", "22 x 36"],
  ],
  "trimlite-3-panel-shaker": [
    ["22x15", "22 x 15"],
  ],
  "trimlite-two-panel-shaker": [
    ["22x36", "22 x 36"],
  ],
  "trimlite-one-panel-shaker": [],
  "steel-flush": [
    ["22x64", "22 x 64"],
    ["7x64", "7 x 64"],
    ["22x15", "22 x 15"],
    ["22x10", "22 x 10"],
    ["22x17", "22 x 17"],
    ["22x36", "22 x 36"],
    ["22x48", "22 x 48"],
    ["22x3", "22 x 3"],
    ["8x48", "8 x 48"],
  ],
  "steel-6-panel": [
    ["22x36", "22 x 36"],
    ["22x10", "22 x 10"],
  ],
  "steel-4-panel": [
    ["22x36", "22 x 36"],
    ["22x10", "22 x 10"],
  ],
  "steel-3-panel-scroll": [
    ["22x48", "22 x 48"],
  ],
  "steel-orleans": [
    ["22x48", "22 x 48"],
  ],
  "steel-london": [
    ["22x36", "22 x 36"],
  ],
  "steel-sydney": [
    ["22x17", "22 x 17"],
  ],
  "steel-victoria": [
    ["22x14-7-16", "22 x 14 7/16"],
  ],
  "steel-soho": [
    ["22x12", "22 x 12"],
    ["22x48", "22 x 48"],
  ],
  "richersons-2-panel-3-quarter-lite-sg25": [
    ["22x48", "22 x 48"],
  ],
  "richersons-4-panel-3-quarter-lite-sg49": [
    ["22x48", "22 x 48"],
  ],
};

const stainColors = [
  ["blue-ash", "Blue Ash", 525],
  ["caramel-oak", "Caramel Oak", 525],
  ["crimson-ash", "Crimson Ash", 525],
  ["dark-chocolate", "Dark Chocolate", 525],
  ["early-american", "Early American", 525],
  ["ebony", "Ebony", 525],
  ["espresso", "Espresso", 525],
  ["hickory", "Hickory", 525],
  ["light-cherry", "Light Cherry", 525],
  ["silver-ash", "Silver Ash", 525],
  ["smoke", "Smoke", 525],
  ["teak", "Teak", 525],
  ["toffee", "Toffee", 525],
  ["walnut", "Walnut", 525],
].sort((a, b) => a[1].localeCompare(b[1]));

["finish", "exteriorFrameFinish", "interiorFinish", "interiorFrameFinish"].forEach((id) => {
  prices[id] = Object.fromEntries([...paintColors, ...stainColors].map(([value, , price]) => [value, price]));
});

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const savedQuotesKey = "westBuiltDoorBuilderQuotes";
const savedRedSheetsKey = "westBuiltDoorBuilderRedSheets";
const customerFields = ["customerName", "customerPhone", "customerAddress", "customerEmail", "customerCity"];
const detailCustomerFields = {
  customerName: "detailCustomerNameInput",
  customerPhone: "detailCustomerPhoneInput",
  customerAddress: "detailCustomerAddressInput",
  customerEmail: "detailCustomerEmailInput",
  customerCity: "detailCustomerCityInput",
};
const validUsers = {
  chris: { password: "chris123", name: "Chris", email: "chris@westwindows.on.ca" },
  bruce: { password: "bruce123", name: "Bruce", email: "bruce@westwindows.on.ca" },
  jeff: { password: "jeff123", name: "Jeff", email: "jeff@westwindows.on.ca" },
  ralph: { password: "ralph123", name: "Ralph", email: "ralph@westwindows.on.ca" },
};

let customFrameHeight = "";
let activeQuoteCustomer = null;
let activeQuoteId = null;
let itemCategoryReturnView = "quoteDetail";
let selectedPatioDoorType = "";
let selectedTwoPanelSize = "";
let selectedPatioGlassOption = "";
let selectedPatioLowEOption = "";
let selectedPatioPaintOption = "";
let selectedPatioExteriorColor = "";
let selectedPatioInteriorColor = "";
let selectedPatioHandleOption = "";
let currentUsername = sessionStorage.getItem("westBuiltDoorBuilderUser") || "";
let savedQuotesCache = [];
let savedRedSheetsCache = [];
let detailCustomerSaveTimer = null;
let detailCustomerSaveVersion = 0;
let redSheetReturnQuoteId = null;
let redSheetReturnCustomerKey = "";
let activeRedSheetId = null;
let redSheetSaveTimer = null;
let redSheetSaveVersion = 0;

function localQuotes() {
  try {
    return JSON.parse(localStorage.getItem(savedQuotesKey) || "[]");
  } catch {
    return [];
  }
}

function localRedSheets() {
  try {
    return JSON.parse(localStorage.getItem(savedRedSheetsKey) || "[]");
  } catch {
    return [];
  }
}

function sharedStorageConfig() {
  const config = window.WEST_BUILT_SUPABASE || {};
  return {
    url: String(config.url || "").replace(/\/$/, ""),
    anonKey: String(config.anonKey || ""),
  };
}

function sharedStorageEnabled() {
  const config = sharedStorageConfig();
  return Boolean(config.url && config.anonKey);
}

function quoteToDatabaseRow(quote) {
  return {
    id: quote.id,
    quote_number: quote.quoteNumber,
    customer_key: quote.customerKey || "",
    title: quote.title || "",
    total: quote.total || 0,
    created_at: quote.date,
    updated_at: quote.updatedAt || new Date().toISOString(),
    created_by: quote.createdBy || "",
    created_by_username: quote.createdByUsername || "",
    quote_data: quote,
  };
}

async function sharedStorageRequest(path, options = {}) {
  const config = sharedStorageConfig();
  const response = await fetch(`${config.url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`Shared storage request failed: ${response.status}`);
  if (response.status === 204) return null;
  const responseText = await response.text();
  return responseText ? JSON.parse(responseText) : null;
}

async function loadSavedQuotes() {
  savedQuotesCache = localQuotes();
  if (!sharedStorageEnabled()) return savedQuotesCache;

  try {
    const rows = await sharedStorageRequest("quotes?select=quote_data&order=updated_at.desc");
    savedQuotesCache = rows.map((row) => row.quote_data).filter(Boolean);
    localStorage.setItem(savedQuotesKey, JSON.stringify(savedQuotesCache));
  } catch (error) {
    console.warn("Using local quotes because shared storage could not be loaded.", error);
  }
  return savedQuotesCache;
}

async function loadSavedRedSheets() {
  savedRedSheetsCache = localRedSheets();
  if (!sharedStorageEnabled()) return savedRedSheetsCache;

  try {
    const rows = await sharedStorageRequest("red_sheets?select=red_sheet_data&order=updated_at.desc");
    savedRedSheetsCache = rows.map((row) => row.red_sheet_data).filter(Boolean);
    localStorage.setItem(savedRedSheetsKey, JSON.stringify(savedRedSheetsCache));
  } catch (error) {
    console.warn("Using local Red Sheets because shared storage could not be loaded.", error);
  }
  return savedRedSheetsCache;
}

async function syncQuoteToSharedStorage(quote) {
  if (!sharedStorageEnabled()) return;
  try {
    await sharedStorageRequest("quotes?on_conflict=id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify(quoteToDatabaseRow(quote)),
    });
  } catch (error) {
    console.warn("Quote was saved locally, but shared storage sync failed.", error);
  }
}

async function deleteQuoteFromSharedStorage(quoteId) {
  if (!sharedStorageEnabled()) return;
  try {
    await sharedStorageRequest(`quotes?id=eq.${encodeURIComponent(quoteId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
  } catch (error) {
    console.warn("Quote was deleted locally, but shared storage delete failed.", error);
  }
}

function redSheetToDatabaseRow(redSheet) {
  return {
    id: redSheet.id,
    red_sheet_number: redSheet.redSheetNumber,
    customer_key: redSheet.customerKey || "",
    customer: redSheet.customer || {},
    created_at: redSheet.createdAt,
    updated_at: redSheet.updatedAt || new Date().toISOString(),
    created_by: redSheet.createdBy || "",
    created_by_username: redSheet.createdByUsername || "",
    red_sheet_data: redSheet,
  };
}

async function syncRedSheetToSharedStorage(redSheet) {
  if (!sharedStorageEnabled()) return;
  try {
    await sharedStorageRequest("red_sheets?on_conflict=id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify(redSheetToDatabaseRow(redSheet)),
    });
  } catch (error) {
    console.warn("Red Sheet was saved locally, but shared storage sync failed.", error);
  }
}

async function deleteRedSheetFromSharedStorage(redSheetId) {
  if (!sharedStorageEnabled()) return;
  try {
    await sharedStorageRequest(`red_sheets?id=eq.${encodeURIComponent(redSheetId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
  } catch (error) {
    console.warn("Red Sheet was deleted locally, but shared storage delete failed.", error);
  }
}

function populatePaintColors() {
  ["finish", "exteriorFrameFinish", "interiorFinish", "interiorFrameFinish"].forEach((id) => {
    const select = document.getElementById(id);
    populateFinishOptions(select, "paint");
  });
}

function populateFinishOptions(select, finishType) {
  const colors =
    finishType === "stain"
      ? stainColors
      : [
          paintColors.find(([value]) => value === "cream-white"),
          paintColors.find(([value]) => value === "chantilly-lace"),
          ...paintColors
            .filter(([value]) => !["cream-white", "chantilly-lace"].includes(value))
            .sort((a, b) => a[1].localeCompare(b[1])),
        ];

  select.innerHTML =
    '<option value="">Select color...</option>' +
    colors.map(([value, label]) => `<option value="${value}">${label}</option>`).join("") +
    '<option value="custom">Custom</option>';
  select.dataset.finishType = finishType;
}

const controls = [
  "systemType",
  "frameOption",
  "frameWidth",
  "frameHeight",
  "jambDepth",
  "swingType",
  "transom",
  "transomHeight",
  "sill",
  "brickmould",
  "panelStyle",
  "grainFilter",
  "doorLite",
  "liteSize",
  "liteFrame",
  "liteOption",
  "liteGlassStyle",
  "glassDividers",
  "stlSize",
  "dividerHorizontal",
  "dividerVertical",
  "finish",
  "finishCustom",
  "exteriorFinishType",
  "exteriorFrameFinish",
  "exteriorFrameFinishCustom",
  "exteriorFrameFinishType",
  "interiorFinish",
  "interiorFinishCustom",
  "interiorFinishType",
  "interiorFrameFinish",
  "interiorFrameFinishCustom",
  "interiorFrameFinishType",
  "hardware",
  "hardwareFinish",
  "hardwareSplitFinish",
  "handleSet",
  "deadboltPassageStyle",
  "deadboltPassageOther",
  "deadboltLeverStyle",
  "gripSetStyle",
  "gripSetStyleOther",
  "gripSetTrim",
  "gripSetTrimOther",
  "multipointSize",
  "multipointSizeOther",
  "multipointLever",
  "multipointLeverOther",
  "handing",
];

function valueOf(id) {
  const element = document.getElementById(id);
  return element.type === "checkbox" ? element.checked : element.value;
}

function setControlValue(id, value) {
  const element = document.getElementById(id);
  if (!element) return;
  if (element.type === "checkbox") {
    element.checked = Boolean(value);
  } else {
    element.value = value ?? "";
  }
}

function normalizedPanelType() {
  const panelType = valueOf("grainFilter");
  return ["fir", "mahogany", "oak"].includes(panelType) ? "woodgrain" : panelType;
}

function selectedPrice(id) {
  const value = valueOf(id);
  if (!value) return 0;
  if (typeof value === "boolean") return value ? prices[id] || 0 : 0;
  return prices[id]?.[value] || 0;
}

function frameHeightLabel() {
  const height = valueOf("frameHeight");
  const baseHeight = customFrameHeight || labels.frameHeight[height];
  return valueOf("transom") ? formatInches(parseDimension(baseHeight) + parseDimension(valueOf("transomHeight"))) : baseHeight;
}

function parseDimension(value) {
  const text = String(value || "").trim();
  const feetMatch = text.match(/^(\d+)'\s*(?:(\d+(?:\s+\d+\/\d+)?|\d+\/\d+)")?$/);
  if (feetMatch) {
    return Number(feetMatch[1]) * 12 + parseMixedNumber(feetMatch[2] || "0");
  }
  return parseMixedNumber(text.replace(/"/g, ""));
}

function parseMixedNumber(value) {
  const text = String(value || "0").trim();
  const parts = text.split(/\s+/);
  return parts.reduce((sum, part) => {
    if (part.includes("/")) {
      const [numerator, denominator] = part.split("/").map(Number);
      return sum + numerator / denominator;
    }
    return sum + Number(part || 0);
  }, 0);
}

function formatInches(value) {
  const whole = Math.floor(value);
  const fraction = Math.round((value - whole) * 8);
  if (!fraction) return `${whole}"`;
  const divisor = fraction % 4 === 0 ? 2 : fraction % 2 === 0 ? 4 : 8;
  return `${whole} ${fraction / (8 / divisor)}/${divisor}"`;
}

function totalPrice() {
  const base = 3200;
  const panelPrice = ["smooth", "woodgrain"].includes(normalizedPanelType()) ? 200 : 0;
  const finishPrice = paintFinishPrice();
  const hardwarePrice = handleSetPrice();
  const transomPrice = valueOf("transom") ? 500 : 0;
  const litePrice = selectedDoorLitePrice();
  const dividerPrice = glassDividerPrice();
  const options = panelPrice + finishPrice + hardwarePrice + transomPrice + litePrice + dividerPrice;

  return { base, options, total: base + options };
}

function selectedDoorLitePrice() {
  const liteType = valueOf("doorLite");
  if (liteType === "custom") {
    const basePrice = customGlassPrices[valueOf("liteSize")] || 0;
    return basePrice + (valueOf("liteOption") === "frosted" ? 100 : 0);
  }
  if (!["fusion", "trim-lite"].includes(liteType)) return 0;

  const style = valueOf("liteGlassStyle");
  const size = valueOf("liteSize");
  const priceTable = fusionListPrices[style];
  const listedPrice = priceTable?.[size] ?? priceTable?.[fusionSizePriceAliases[size]];
  if (listedPrice == null) return 0;
  return listedPrice * 0.5 + 360;
}

function glassDividerPrice() {
  const isCustomGlass = valueOf("doorLite") === "custom";
  const hasSdl = valueOf("glassDividers") === "sdl";
  if (!isCustomGlass || !hasSdl) return 0;
  const horizontal = Number(valueOf("dividerHorizontal") || 1);
  const vertical = Number(valueOf("dividerVertical") || 1);
  const squares = (horizontal + 1) * (vertical + 1);
  return squares * 35;
}

function handleSetPrice() {
  const handleSet = valueOf("handleSet");
  const baldwinNoZWavePrice =
    handleSet === "deadbolt-passage" && valueOf("deadboltPassageStyle") === "baldwin-keypad-key-no-z-wave-lever"
      ? 390
      : 0;
  const baldwinWithZWavePrice =
    handleSet === "deadbolt-passage" && valueOf("deadboltPassageStyle") === "baldwin-keypad-key-with-z-wave-lever"
      ? 590
      : 0;
  const gripSetBaldwinNoZWavePrice =
    handleSet === "grip-set" && valueOf("gripSetStyle") === "baldwin-keypad-key-no-z-wave-lajolla-bottom" ? 420 : 0;
  const gripSetBaldwinWithZWavePrice =
    handleSet === "grip-set" && valueOf("gripSetStyle") === "baldwin-keypad-key-with-z-wave-lajolla-bottom" ? 620 : 0;
  if (handleSet === "grip-set") return 200 + gripSetBaldwinNoZWavePrice + gripSetBaldwinWithZWavePrice;
  if (handleSet === "multipoint") return 600;
  return baldwinNoZWavePrice + baldwinWithZWavePrice;
}

function paintFinishPrice() {
  const exteriorPainted = valueOf("exteriorFinishType") === "paint";
  const interiorPainted = valueOf("interiorFinishType") === "paint";
  const exteriorStained = valueOf("exteriorFinishType") === "stain";
  const interiorStained = valueOf("interiorFinishType") === "stain";
  const exteriorColor = valueOf("finish");
  const interiorColor = valueOf("interiorFinish");
  const exteriorFrameStained = valueOf("exteriorFrameFinishType") === "stain";
  const interiorFrameStained = valueOf("interiorFrameFinishType") === "stain";
  const exteriorFrameColor = valueOf("exteriorFrameFinish");
  const interiorFrameColor = valueOf("interiorFrameFinish");
  const customColorCount = new Set(
    ["finish", "exteriorFrameFinish", "interiorFinish", "interiorFrameFinish"]
      .filter((id) => valueOf(id) === "custom")
      .map((id) => customFinishText(id).trim().toLowerCase())
      .filter(Boolean),
  ).size;
  const exteriorColorKey = valueOf("finish") === "custom" ? `custom:${customFinishText("finish").toLowerCase()}` : exteriorColor;
  const interiorColorKey =
    valueOf("interiorFinish") === "custom" ? `custom:${customFinishText("interiorFinish").toLowerCase()}` : interiorColor;
  const exteriorFrameColorKey =
    valueOf("exteriorFrameFinish") === "custom"
      ? `custom:${customFinishText("exteriorFrameFinish").toLowerCase()}`
      : exteriorFrameColor;
  const interiorFrameColorKey =
    valueOf("interiorFrameFinish") === "custom"
      ? `custom:${customFinishText("interiorFrameFinish").toLowerCase()}`
      : interiorFrameColor;

  let total = 0;

  // Paint pricing (all panel types, including steel): panel and frame are priced separately
  const panelPaintColors = new Set();
  if (exteriorPainted && exteriorColorKey) panelPaintColors.add(exteriorColorKey);
  if (interiorPainted && interiorColorKey) panelPaintColors.add(interiorColorKey);
  if (panelPaintColors.size === 1) total += 224;
  if (panelPaintColors.size >= 2) total += 449;
  const hasDoorLite = Boolean(valueOf("doorLite")) && valueOf("doorLite") !== "none";
  if (hasDoorLite && (exteriorPainted || interiorPainted)) total += 40;

  const framePaintColors = new Set();
  const exteriorFramePainted = valueOf("exteriorFrameFinishType") === "paint";
  const interiorFramePainted = valueOf("interiorFrameFinishType") === "paint";
  if (exteriorFramePainted && exteriorFrameColorKey) framePaintColors.add(exteriorFrameColorKey);
  if (interiorFramePainted && interiorFrameColorKey) framePaintColors.add(interiorFrameColorKey);
  if (framePaintColors.size === 1) total += 139;
  if (framePaintColors.size >= 2) total += 231;

  // Panel stain pricing
  if (exteriorStained && interiorStained && exteriorColor && interiorColor) {
    total += exteriorColorKey === interiorColorKey ? 394 : 676;
  } else if ((exteriorStained && interiorPainted) || (interiorStained && exteriorPainted)) {
    total += 619;
  }

  // Frame stain pricing
  if (exteriorFrameStained && interiorFrameStained && exteriorFrameColor && interiorFrameColor) {
    total += exteriorFrameColorKey === interiorFrameColorKey ? 203 : 383;
  }

  total += customColorCount * 200;

  return total;
}

function updateDrawing() {
  const system = valueOf("systemType");
  const finish = finishColorValue("exteriorFinishType", "finish");
  const frameFinish = finishColorValue("exteriorFrameFinishType", "exteriorFrameFinish");
  const lite = valueOf("doorLite");
  const panel = valueOf("panelStyle");
  const handing = valueOf("handing");
  const swingType = valueOf("swingType");
  const hasTransom = valueOf("transom");

  const doorSystem = document.getElementById("doorSystem");
  const doorFace = document.getElementById("doorFace");
  const glass = document.getElementById("glass");
  const glassArt = document.getElementById("glassArt");
  const panelLines = document.getElementById("panelLines");
  const doorPanelArt = document.getElementById("doorPanelArt");
  const handle = document.getElementById("handle");
  const swing = document.getElementById("swing");

  doorSystem.className = "door-system";
  if (system.includes("sidelite")) doorSystem.classList.add("with-sidelite");
  if (system.startsWith("double")) doorSystem.classList.add("double");
  if (hasTransom) doorSystem.classList.add("has-transom");

  doorFace.className = `door-face finish-${finish}`;
  const activeFinish = finishStyles[finish] || finishStyles["cream-white"];
  const activeFrameFinish = finishStyles[frameFinish] || activeFinish;
  doorSystem.style.setProperty("--door-color", activeFinish.color);
  doorSystem.style.setProperty("--frame-color", activeFrameFinish.color);
  doorSystem.style.setProperty("--glass-frame-color", activeFinish.color);
  doorSystem.style.setProperty("--finish-overlay-opacity", activeFinish.opacity);
  doorPanelArt.src = panelArt[panel] || panelArt.flush;
  const hasDoorLite = lite && lite !== "none";
  glass.className = hasDoorLite ? `glass ${lite} lite-size-${valueOf("liteSize")} panel-${panel}` : "glass none";
  const showDividers = hasDoorLite && lite === "custom" && valueOf("glassDividers") !== "none";
  const dividerHorizontal = Number(valueOf("dividerHorizontal") || 1);
  const dividerVertical = Number(valueOf("dividerVertical") || 1);
  renderGlassDividers(glass, showDividers ? dividerHorizontal : 0, showDividers ? dividerVertical : 0);
  const liteGlassStyle = valueOf("liteGlassStyle") || "";
  const liteSize = valueOf("liteSize");
  const fusionStyles = fusionStylesBySize[liteSize] || [];
  const selectedFusionStyle = fusionStyles.find(([style]) => style === liteGlassStyle);
  if (["fusion", "trim-lite"].includes(lite) && selectedFusionStyle) {
    glass.style.backgroundImage = `url('${selectedFusionStyle[2]}')`;
    glass.style.backgroundColor = "#d5d9de";
    glassArt.src = selectedFusionStyle[2];
    glassArt.hidden = false;
  } else {
    glass.style.backgroundImage = "";
    glass.style.backgroundColor = "";
    glassArt.removeAttribute("src");
    glassArt.hidden = true;
  }

  panelLines.classList.toggle("show", false);
  handle.classList.toggle("left", handing === "right");
  swing.className = `swing ${handing} ${swingType}`;

  document.getElementById("widthLabel").textContent = labels.frameWidth[valueOf("frameWidth")];
  document.getElementById("heightLabel").textContent = frameHeightLabel();
  document.getElementById("depthLabel").textContent = labels.jambDepth[valueOf("jambDepth")];
  document.getElementById("frameWidthDisplay").value = labels.frameWidth[valueOf("frameWidth")];
  document.getElementById("frameHeightDisplay").value = frameHeightLabel();
  const heightLine = document.querySelector(".height-line");
  const systemHeight = Math.round(doorSystem.getBoundingClientRect().height);
  heightLine.style.height = `${systemHeight || 260}px`;
  document.getElementById("widthLabel").style.width =
    system.startsWith("double") ? "190px" : system.includes("sidelite") ? "150px" : "110px";
  document.getElementById("systemHeading").textContent = `Door System (${labels.systemType[system]})`;
}

function renderGlassDividers(glass, horizontalCount, verticalCount) {
  glass.querySelectorAll(".glass-divider-line").forEach((line) => line.remove());
  if (!horizontalCount && !verticalCount) return;

  for (let i = 1; i <= verticalCount; i += 1) {
    const line = document.createElement("span");
    line.className = "glass-divider-line vertical";
    line.style.left = `${(i * 100) / (verticalCount + 1)}%`;
    glass.appendChild(line);
  }

  for (let i = 1; i <= horizontalCount; i += 1) {
    const line = document.createElement("span");
    line.className = "glass-divider-line horizontal";
    line.style.top = `${(i * 100) / (horizontalCount + 1)}%`;
    glass.appendChild(line);
  }
}

function updatePrice() {
  if (hasIncompleteRequiredSelections()) {
    document.getElementById("priceButton").textContent = "Estimated total is not calculated";
    document.getElementById("basePrice").textContent = "Not calculated";
    document.getElementById("optionPrice").textContent = "Not calculated";
    document.getElementById("breakdownTotal").textContent = "Not calculated";
    return;
  }
  const totals = totalPrice();
  document.getElementById("priceButton").textContent = currency.format(totals.total);
  document.getElementById("basePrice").textContent = currency.format(totals.base);
  document.getElementById("optionPrice").textContent = currency.format(totals.options);
  document.getElementById("breakdownTotal").textContent = currency.format(totals.total);
}

function hasIncompleteRequiredSelections() {
  return Boolean(document.querySelector(".required-field.needs-selection, .finish-color-field.needs-selection"));
}

function selectedText(id) {
  const element = document.getElementById(id);
  if (!element || !element.selectedOptions) return "";
  return element.selectedOptions[0]?.textContent.trim() || "";
}

function cardName(selector) {
  return document.querySelector(selector)?.dataset.name || "";
}

function customFinishInputId(colorId) {
  return {
    finish: "finishCustom",
    exteriorFrameFinish: "exteriorFrameFinishCustom",
    interiorFinish: "interiorFinishCustom",
    interiorFrameFinish: "interiorFrameFinishCustom",
  }[colorId];
}

function customFinishText(colorId) {
  const inputId = customFinishInputId(colorId);
  return inputId ? valueOf(inputId).trim() : "";
}

function finishColorText(colorId) {
  return valueOf(colorId) === "custom" ? customFinishText(colorId) || "Custom" : selectedText(colorId);
}

function finishDescription(typeId, colorId) {
  const type = selectedText(typeId);
  const color = finishColorText(colorId);
  if (valueOf(typeId) === steelFinishValue) return "Polytex White";
  return valueOf(typeId) === "unfinished" || !color ? type : `${type} ${color}`;
}

function finishPrintDescription(typeId, colorId) {
  if (valueOf(typeId) === steelFinishValue) return "Polytex White";
  return valueOf(typeId) === "unfinished" ? "Unfinished" : finishColorText(colorId);
}

function finishColorValue(typeId, colorId) {
  return valueOf(typeId) === steelFinishValue ? steelFinishColor : valueOf(colorId);
}

function optionOrOther(selectId, inputId) {
  return valueOf(selectId) === "other" ? valueOf(inputId).trim() : selectedText(selectId);
}

function isOther(selectId) {
  return valueOf(selectId) === "other";
}

function hardwareQuoteLines() {
  const lines = [];
  lines.push(`Hinges ${valueOf("hardware") ? selectedText("hardware") : "not selected"}`);
  if (valueOf("hardwareFinish") === "split-finish") {
    lines.push(`Hardware Finish ${valueOf("hardwareSplitFinish").trim() || "Split Finish"}`);
  } else {
    lines.push(`Hardware Finish ${valueOf("hardwareFinish") ? selectedText("hardwareFinish") : "not selected"}`);
  }

  if (valueOf("handleSet") && valueOf("handleSet") !== "grip-set") {
    lines.push(selectedText("handleSet"));
  }

  if (valueOf("handleSet") === "deadbolt-passage" && valueOf("deadboltPassageStyle")) {
    lines.push(optionOrOther("deadboltPassageStyle", "deadboltPassageOther"));
    if (
      ["baldwin-keypad-key-no-z-wave-lever", "baldwin-keypad-key-with-z-wave-lever"].includes(
        valueOf("deadboltPassageStyle"),
      ) &&
      valueOf("deadboltLeverStyle")
    ) {
      lines.push(`Lever Style ${selectedText("deadboltLeverStyle")}`);
    }
  }

  if (valueOf("handleSet") === "grip-set") {
    const style = optionOrOther("gripSetStyle", "gripSetStyleOther");
    const lever = optionOrOther("gripSetTrim", "gripSetTrimOther").toLowerCase();
    const splitFinish = valueOf("hardwareFinish") === "split-finish" ? valueOf("hardwareSplitFinish").trim() : "";
    if (isOther("gripSetStyle") && style) {
      lines.push(style);
    } else if (isOther("gripSetTrim") && lever) {
      lines.push(lever);
    } else if (style && lever) {
      lines.push(`${style} grip set${splitFinish ? `, ${splitFinish}` : ""} with ${lever}`);
    } else if (style) {
      lines.push(`${style} grip set${splitFinish ? `, ${splitFinish}` : ""}`);
    } else if (lever) {
      lines.push(`Grip set${splitFinish ? `, ${splitFinish}` : ""} with ${lever}`);
    }
  }

  if (valueOf("handleSet") === "multipoint") {
    if (isOther("multipointSize") && valueOf("multipointSizeOther").trim()) {
      lines.push(valueOf("multipointSizeOther").trim());
    } else if (valueOf("multipointSize")) {
      lines.push(`Multipoint Size ${selectedText("multipointSize")}`);
    }

    if (isOther("multipointLever") && valueOf("multipointLeverOther").trim()) {
      lines.push(valueOf("multipointLeverOther").trim());
    } else if (valueOf("multipointLever")) {
      lines.push(`Lever ${selectedText("multipointLever")}`);
    }
  }

  return lines;
}

function setQuoteLines(element, lines) {
  element.replaceChildren();
  lines.forEach((line, index) => {
    if (index) element.appendChild(document.createElement("br"));
    element.appendChild(document.createTextNode(line));
  });
}

function readSavedQuotes() {
  return savedQuotesCache;
}

function writeSavedQuotes(quotes) {
  savedQuotesCache = quotes;
  localStorage.setItem(savedQuotesKey, JSON.stringify(quotes));
}

function readSavedRedSheets() {
  return savedRedSheetsCache;
}

function writeSavedRedSheets(redSheets) {
  savedRedSheetsCache = redSheets;
  localStorage.setItem(savedRedSheetsKey, JSON.stringify(redSheets));
}

function customerDetails() {
  return Object.fromEntries(customerFields.map((id) => [id, document.getElementById(id).value.trim()]));
}

function formatPhoneNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  const hasCountryCode = digits.startsWith("1");
  const localDigits = (hasCountryCode ? digits.slice(1) : digits).slice(0, 10);
  const groups = [localDigits.slice(0, 3), localDigits.slice(3, 6), localDigits.slice(6, 10)].filter(Boolean);
  const formatted = groups.join("-");
  return hasCountryCode && formatted ? `1-${formatted}` : formatted;
}

function formatPhoneField(element) {
  const isInput = element.tagName === "INPUT" || element.tagName === "TEXTAREA";
  const currentValue = isInput ? element.value : element.textContent;
  const formatted = formatPhoneNumber(currentValue);
  if (isInput) {
    element.value = formatted;
    element.setSelectionRange(formatted.length, formatted.length);
    return;
  }
  element.textContent = formatted;
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function setCustomerDetails(customer = {}) {
  customerFields.forEach((id) => {
    const element = document.getElementById(id);
    element.value = id === "customerPhone" ? formatPhoneNumber(customer[id]) : customer[id] || "";
  });
}

function decodeQuotedPrintable(value) {
  const source = String(value || "").replace(/=\r?\n/g, "");
  const bytes = [];
  for (let index = 0; index < source.length; index += 1) {
    const hex = source.slice(index + 1, index + 3);
    if (source[index] === "=" && /^[0-9a-f]{2}$/i.test(hex)) {
      bytes.push(Number.parseInt(hex, 16));
      index += 2;
    } else {
      const encoded = new TextEncoder().encode(source[index]);
      bytes.push(...encoded);
    }
  }
  return new TextDecoder().decode(Uint8Array.from(bytes));
}

function marketSharpMessageText(source) {
  const decoded = decodeQuotedPrintable(source);
  const htmlPart = decoded.match(
    /Content-Type:\s*text\/html[^\r\n]*(?:\r?\n[^\r\n]*)*\r?\n\r?\n([\s\S]*?)(?=\r?\n--[^\r\n]+)/i,
  );
  const content = htmlPart?.[1] || decoded;
  const containsHtml = /<(?:html|body|br|p|div)\b/i.test(content);
  let messageText = content;
  if (containsHtml) {
    const withLineBreaks = content
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p\s*>/gi, "\n")
      .replace(/<\/div\s*>/gi, "\n");
    messageText = new DOMParser().parseFromString(withLineBreaks, "text/html").body.textContent || "";
  }
  return messageText
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseMarketSharpEmail(source) {
  const text = marketSharpMessageText(source);
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const contactStart = lines.findIndex((line) => /^Contact:\s*$/i.test(line));
  const contactLines = contactStart < 0
    ? []
    : lines.slice(contactStart + 1).filter((line, index, remaining) => {
        const endIndex = remaining.findIndex((candidate) =>
          /^(?:Sales Appointment|Appt Type:|Salesperson:)/i.test(candidate),
        );
        return endIndex < 0 || index < endIndex;
      });
  const subjectName = lines
    .find((line) => /^Subject:\s*Sales Appointment with\s+/i.test(line))
    ?.replace(/^Subject:\s*Sales Appointment with\s+/i, "")
    .trim() || "";
  const location = lines
    .find((line) => /^Location:\s*/i.test(line))
    ?.replace(/^Location:\s*/i, "")
    .trim() || "";
  const candidateLines = contactLines.length ? contactLines : lines;
  const compactText = candidateLines.join(" ").replace(/\s+/g, " ").trim();
  const email = candidateLines
    .map((line) => line.match(/[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,}/i)?.[0] || "")
    .find(Boolean) || "";
  const phone = candidateLines.find((line) => {
    const digits = line.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 11;
  }) || compactText.match(/(?:\b1[\s.-]*)?\(?\d{3}\)?[\s.-]*\d{3}[\s.-]*\d{4}\b/)?.[0] || "";
  const cityLine = candidateLines.find((line) => /,\s*(?:ON|Ontario)\b/i.test(line)) || "";
  const compactLocation = compactText.match(
    /\b(\d+\s+[A-Za-z0-9 .'-]*?\b(?:Street|St|Crescent|Cres|Road|Rd|Avenue|Ave|Drive|Dr|Court|Ct|Lane|Boulevard|Blvd|Way|Trail))\s+([A-Za-z][A-Za-z .'-]*),\s*(?:ON|Ontario)\b(?:\s+[A-Z]\d[A-Z]\s*\d[A-Z]\d)?/i,
  );
  const compactAddress = compactLocation?.[1]?.trim() || "";
  const compactCity = compactLocation?.[2]?.trim() || "";
  const address = candidateLines.find(
    (line) => /\d/.test(line) && line !== phone && !/,\s*(?:ON|Ontario)\b/i.test(line),
  ) || location.split(",")[0]?.trim() || "";
  const city = candidateLines.length === 1
    ? compactCity || location.split(",")[1]?.trim() || ""
    : cityLine.split(",")[0]?.trim() || location.split(",")[1]?.trim() || compactCity;
  const compactName = compactLocation?.index > 0 ? compactText.slice(0, compactLocation.index).trim() : "";
  const resolvedAddress = address || compactAddress;
  const customerName = contactLines[0] && contactLines[0] !== resolvedAddress
    ? contactLines[0]
    : subjectName || compactName || candidateLines.find((line) => !/\d|@|:/.test(line)) || "";
  return {
    customerName,
    customerPhone: formatPhoneNumber(phone),
    customerAddress: resolvedAddress,
    customerEmail: email,
    customerCity: city,
  };
}

function showMarketSharpImportStatus(message, success = false) {
  const status = document.getElementById("marketSharpImportStatus");
  status.textContent = message;
  status.classList.toggle("success", success);
  status.hidden = false;
}

function importMarketSharpEmail(source) {
  const customer = parseMarketSharpEmail(source);
  const importedFields = Object.values(customer).filter(Boolean).length;
  if (!customer.customerName || importedFields < 3) {
    showMarketSharpImportStatus("Customer information could not be found in that email.");
    return false;
  }
  setCustomerDetails(customer);
  activeQuoteCustomer = customer;
  showMarketSharpImportStatus(
    `Imported ${importedFields} customer fields for ${customer.customerName}. Review the information below.`,
    true,
  );
  return true;
}

function resetMarketSharpImport() {
  document.getElementById("marketSharpImportPanel").hidden = true;
  document.getElementById("marketSharpEmailFile").value = "";
  document.getElementById("marketSharpEmailText").value = "";
  const status = document.getElementById("marketSharpImportStatus");
  status.hidden = true;
  status.classList.remove("success");
}

function customerKey(customer = {}) {
  const email = (customer.customerEmail || "").trim().toLowerCase();
  const phone = (customer.customerPhone || "").replace(/\D/g, "");
  const name = (customer.customerName || "").trim().toLowerCase();
  const city = (customer.customerCity || "").trim().toLowerCase();
  return email || phone || `${name}|${city}`;
}

function generateQuoteNumber() {
  const existing = new Set(readSavedQuotes().map((quote) => quote.quoteNumber));
  let quoteNumber = "";
  do {
    quoteNumber = `Q-${Math.floor(100000 + Math.random() * 900000)}`;
  } while (existing.has(quoteNumber));
  return quoteNumber;
}

function captureQuoteState(existingQuote = null) {
  const totals = totalPrice();
  const values = Object.fromEntries(controls.map((id) => [id, valueOf(id)]));
  const panelName = cardName(`.panel-card[data-panel="${valueOf("panelStyle")}"]`) || "Door";
  const customer = customerDetails();
  return {
    id: existingQuote?.id || Date.now().toString(),
    quoteNumber: existingQuote?.quoteNumber || generateQuoteNumber(),
    date: existingQuote?.date || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: existingQuote?.createdBy || currentUserDisplayName(),
    createdByUsername: existingQuote?.createdByUsername || currentUsername,
    title: customer.customerName || panelName,
    total: totals.total,
    customer,
    customerKey: customerKey(customer),
    values,
    location: document.getElementById("location").value.trim(),
    notes: document.getElementById("notes").value,
    customFrameHeight,
  };
}

function currentUserDisplayName() {
  return validUsers[currentUsername]?.name || "Unknown";
}

function currentUserEmail() {
  return validUsers[currentUsername]?.email || "";
}

async function saveCurrentQuote() {
  const quotes = readSavedQuotes();
  const existingQuote = activeQuoteId ? quotes.find((item) => item.id === activeQuoteId) : null;
  const quote = captureQuoteState(existingQuote);
  const updatedQuotes = existingQuote
    ? quotes.map((item) => (item.id === existingQuote.id ? quote : item))
    : [quote, ...quotes];
  writeSavedQuotes(updatedQuotes);
  await syncQuoteToSharedStorage(quote);
  activeQuoteId = quote.id;
  document.getElementById("quoteNumber").textContent = quote.quoteNumber;
  renderSavedQuotes();
  openQuoteDetail(quote.id);
}

function startNewQuote() {
  activeQuoteCustomer = null;
  activeQuoteId = null;
  setCustomerDetails();
  document.getElementById("notes").value = "";
  document.getElementById("location").value = "";
  resetMarketSharpImport();
  setActiveView("customer");
}

function applyNewItemDefaults() {
  customFrameHeight = "";
  const defaultValues = {
    systemType: "single",
    frameOption: "smooth-composite",
    frameWidth: "36",
    frameHeight: "81.875",
    jambDepth: "4.625",
    swingType: "inswing",
    handing: "left",
    grainFilter: "smooth",
    panelStyle: "richersons-6-panel-sg68",
    doorLite: "none",
    exteriorFinishType: "unfinished",
    exteriorFrameFinishType: "",
    interiorFinishType: "unfinished",
    interiorFrameFinishType: "",
    hardware: "",
    hardwareFinish: "",
    handleSet: "",
  };

  Object.entries(defaultValues).forEach(([id, value]) => setControlValue(id, value));

  [
    "finish",
    "finishCustom",
    "exteriorFrameFinish",
    "exteriorFrameFinishCustom",
    "interiorFinish",
    "interiorFinishCustom",
    "interiorFrameFinish",
    "interiorFrameFinishCustom",
  ].forEach((id) => setControlValue(id, ""));
  [
    "hardwareSplitFinish",
    "deadboltPassageStyle",
    "deadboltPassageOther",
    "deadboltLeverStyle",
    "gripSetStyle",
    "gripSetStyleOther",
    "gripSetTrim",
    "gripSetTrimOther",
    "multipointSize",
    "multipointSizeOther",
    "multipointLever",
    "multipointLeverOther",
  ].forEach((id) => setControlValue(id, ""));

  setControlValue("transom", false);
  setControlValue("transomHeight", '10"');
  setControlValue("brickmould", true);

  document.getElementById("location").value = "";
  document.getElementById("notes").value = "";
  updateAll();
}

function addItemForCustomer(customer) {
  activeQuoteCustomer = customer || null;
  activeQuoteId = null;
  setCustomerDetails(activeQuoteCustomer);
  itemCategoryReturnView = "quoteDetail";
  setActiveView("itemCategory");
}

function openItemCategoryPage(customer, returnView) {
  activeQuoteCustomer = customer || null;
  activeQuoteId = null;
  itemCategoryReturnView = returnView;
  setActiveView("itemCategory");
}

function selectItemCategory(category) {
  if (category === "patio-doors") {
    selectedPatioDoorType = "";
    selectedTwoPanelSize = "";
    selectedPatioGlassOption = "";
    selectedPatioLowEOption = "";
    selectedPatioPaintOption = "";
    selectedPatioExteriorColor = "";
    selectedPatioInteriorColor = "";
    selectedPatioHandleOption = "";
    setActiveView("patioDoors");
    return;
  }

  if (category !== "entry-doors") {
    const button = document.querySelector(`[data-item-category="${category}"]`);
    alert(`${button?.textContent?.trim() || "This category"} will be added next.`);
    return;
  }

  setCustomerDetails(activeQuoteCustomer);
  applyNewItemDefaults();
  setActiveView("builder");
}

function populatePatioPaintColors() {
  const colors = [
    paintColors.find(([value]) => value === "cream-white"),
    paintColors.find(([value]) => value === "chantilly-lace"),
    ...paintColors
      .filter(([value]) => !["cream-white", "chantilly-lace"].includes(value))
      .sort((a, b) => a[1].localeCompare(b[1])),
  ];
  const options =
    '<option value="">Select colour...</option>' +
    colors.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  document.getElementById("patioExteriorColor").innerHTML = options;
  document.getElementById("patioReviewColour").innerHTML = options;
}

function openPatioColorPage() {
  const needsInteriorColor = selectedPatioPaintOption === "painted-in-and-out";
  document.getElementById("patioColorLabel").textContent = needsInteriorColor ? "Exterior and Interior Colour" : "Exterior Colour";
  document.getElementById("patioExteriorColor").value = selectedPatioExteriorColor;
  document.getElementById("patioColorWarning").hidden = true;
  setActiveView("patioColors");
}

function patioPaintColorLabel(value) {
  return paintColors.find(([colorValue]) => colorValue === value)?.[1] || "White";
}

function patioSizeLabel(value) {
  return {
    "1500-5": "5 Foot",
    "1800-6": "6 Foot",
    "2400-8": "8 Foot",
    custom: "Custom",
  }[value] || "Selected Size";
}

function updatePatioReviewFields() {
  const glass = document.getElementById("patioReviewGlass").value;
  const paint = document.getElementById("patioReviewPaint").value;
  document.getElementById("patioReviewLowEField").hidden = glass !== "regular-clear-low-e";
  document.getElementById("patioReviewColourField").hidden = paint === "white";
  document.getElementById("patioReviewColourLabel").textContent =
    paint === "painted-in-and-out" ? "Exterior and Interior Colour" : "Exterior Colour";
  document.getElementById("patioReviewWarning").hidden = true;
}

function openPatioReviewPage() {
  document.getElementById("patioReviewType").value = selectedPatioDoorType || "two-panel";
  document.getElementById("patioReviewSize").value = selectedTwoPanelSize || "1500-5";
  document.getElementById("patioReviewGlass").value = selectedPatioGlassOption || "regular-clear-low-e";
  document.getElementById("patioReviewLowE").value = selectedPatioLowEOption || "";
  document.getElementById("patioReviewPaint").value = selectedPatioPaintOption || "white";
  document.getElementById("patioReviewColour").value = selectedPatioExteriorColor || "";
  document.getElementById("patioReviewHandle").value = selectedPatioHandleOption || "contemporary-white";
  updatePatioReviewFields();
  setActiveView("patioReview");
}

function patioOptionsSnapshot() {
  return {
    doorType: selectedPatioDoorType || "two-panel",
    size: selectedTwoPanelSize || "1500-5",
    glass: selectedPatioGlassOption || "regular-clear-low-e",
    lowE: selectedPatioGlassOption === "regular-clear-low-e" ? selectedPatioLowEOption : "",
    paint: selectedPatioPaintOption || "white",
    exteriorColour: selectedPatioExteriorColor || "polytex-white-141",
    interiorColour: selectedPatioInteriorColor || "polytex-white-141",
    handle: selectedPatioHandleOption || "contemporary-white",
  };
}

function applySavedPatioQuoteState(quote) {
  const options = quote.patioOptions || {};
  activeQuoteCustomer = quote.customer || null;
  activeQuoteId = quote.id;
  setCustomerDetails(quote.customer);
  selectedPatioDoorType = options.doorType || "two-panel";
  selectedTwoPanelSize = options.size || "1500-5";
  selectedPatioGlassOption = options.glass || "regular-clear-low-e";
  selectedPatioLowEOption = options.lowE || "";
  selectedPatioPaintOption = options.paint || "white";
  selectedPatioExteriorColor = options.exteriorColour || "polytex-white-141";
  selectedPatioInteriorColor = options.interiorColour || "polytex-white-141";
  selectedPatioHandleOption = options.handle || "contemporary-white";
}

function restorePatioQuote(quote) {
  applySavedPatioQuoteState(quote);
  openPatioReviewPage();
}

async function saveCurrentPatioQuote() {
  const quotes = readSavedQuotes();
  const existingQuote = activeQuoteId ? quotes.find((item) => item.id === activeQuoteId) : null;
  const customer = activeQuoteCustomer || customerDetails();
  const quote = {
    id: existingQuote?.id || Date.now().toString(),
    quoteNumber: existingQuote?.quoteNumber || generateQuoteNumber(),
    date: existingQuote?.date || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: existingQuote?.createdBy || currentUserDisplayName(),
    createdByUsername: existingQuote?.createdByUsername || currentUsername,
    title: customer.customerName || "Patio Door",
    total: Number(existingQuote?.total) || 0,
    customer,
    customerKey: customerKey(customer),
    itemType: "patio-door",
    patioOptions: patioOptionsSnapshot(),
  };
  const updatedQuotes = existingQuote
    ? quotes.map((item) => (item.id === existingQuote.id ? quote : item))
    : [...quotes, quote];
  writeSavedQuotes(updatedQuotes);
  await syncQuoteToSharedStorage(quote);
  activeQuoteId = quote.id;
  renderSavedQuotes();
  openQuoteDetail(quote.id);
}

function renderPatioSummary() {
  const glassLabels = {
    "regular-clear-low-e": "Regular Clear Low-E",
    "with-blinds": "With Blinds",
  };
  const paintLabels = {
    white: "White",
    "painted-out-white-in": "Painted Out, White In",
    "painted-in-and-out": "Painted In and Out",
  };
  const handleLabels = {
    "contemporary-white": "Contemporary (White)",
    "contemporary-black": "Contemporary (Black)",
    "contemporary-satin-nickel": "Contemporary (Satin Nickel)",
    "contemporary-black-white": "Contemporary (Black/White)",
  };
  const sizeImages = {
    "1500-5": "assets/patio-doors/two-panel-sizes/1500-5-clean.png",
    "1800-6": "assets/patio-doors/two-panel-sizes/1800-6-clean.png",
    "2400-8": "assets/patio-doors/two-panel-sizes/2400-8.png",
    custom: "assets/patio-doors/two-panel-sizes/custom.png",
  };
  const customer = activeQuoteCustomer || customerDetails();
  const customerName = customer.customerName || "";
  document.getElementById("patioSummaryCustomer").textContent = customerName;
  document.getElementById("patioSummaryCustomerName").textContent = customerName;
  document.getElementById("patioSummaryCustomerPhone").textContent = customer.customerPhone || "";
  document.getElementById("patioSummaryCustomerEmail").textContent = customer.customerEmail || "";
  document.getElementById("patioSummaryCustomerAddress").textContent = customer.customerAddress || "";
  document.getElementById("patioSummaryCustomerCity").textContent = customer.customerCity || "";
  const summaryImage = document.getElementById("patioSummaryImage");
  summaryImage.src = sizeImages[selectedTwoPanelSize] || sizeImages["1500-5"];
  const sizeLabel = patioSizeLabel(selectedTwoPanelSize);
  summaryImage.alt = `${sizeLabel} patio door`;
  document.getElementById("patioSummaryDoor").textContent = `Two Panel - ${sizeLabel}`;
  document.getElementById("patioSummaryGlass").textContent = glassLabels[selectedPatioGlassOption] || "";
  const lowELine = document.getElementById("patioSummaryLowE");
  lowELine.textContent = selectedPatioGlassOption === "regular-clear-low-e" ? `Low-E Option - ${selectedPatioLowEOption}` : "";
  lowELine.hidden = !lowELine.textContent;
  document.getElementById("patioSummaryPaint").textContent = paintLabels[selectedPatioPaintOption] || "";
  const colourLine = document.getElementById("patioSummaryColour");
  if (selectedPatioPaintOption === "painted-out-white-in") {
    colourLine.textContent = `Exterior Colour - ${patioPaintColorLabel(selectedPatioExteriorColor)}; Interior Colour - White`;
  } else if (selectedPatioPaintOption === "painted-in-and-out") {
    colourLine.textContent = `Exterior and Interior Colour - ${patioPaintColorLabel(selectedPatioExteriorColor)}`;
  } else {
    colourLine.textContent = "Exterior and Interior Colour - White";
  }
  document.getElementById("patioSummaryHandle").textContent = handleLabels[selectedPatioHandleOption] || "";
}

function applySavedQuoteState(quote) {
  activeQuoteCustomer = quote.customer || null;
  activeQuoteId = quote.id;
  setCustomerDetails(quote.customer);
  document.getElementById("quoteNumber").textContent = quote.quoteNumber || "1430081";
  customFrameHeight = quote.customFrameHeight || "";
  const savedValues = quote.values || {};
  Object.entries(savedValues).forEach(([id, value]) => setControlValue(id, value));
  updatePanelCards();
  updateLiteFields();
  updateFinishFields();
  Object.entries(savedValues).forEach(([id, value]) => setControlValue(id, value));
  updateFinishFields();
  document.getElementById("location").value = quote.location || "";
  document.getElementById("notes").value = quote.notes || "";
  updateAll();
}

function restoreQuote(quote) {
  applySavedQuoteState(quote);
  setActiveView("builder");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function quoteTimestamp(quote) {
  return new Date(quote.updatedAt || quote.date || quote.createdAt || 0).getTime() || 0;
}

function quoteMatchesQuery(quote, query) {
  const customer = quote.customer || {};
  return [
    quote.quoteNumber,
    quote.redSheetNumber,
    quote.title,
    customer.customerName,
    customer.customerPhone,
    customer.customerAddress,
    customer.customerEmail,
    customer.customerCity,
    quote.createdBy,
  ]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(query));
}

function groupedCustomerQuotes(quotes) {
  const groups = new Map();
  quotes.forEach((quote) => {
    const key = quote.customerKey || customerKey(quote.customer) || quote.id;
    const group = groups.get(key) || { key, items: [], redSheets: [] };
    group.items.push(quote);
    groups.set(key, group);
  });
  readSavedRedSheets().forEach((redSheet) => {
    const key = redSheet.customerKey || customerKey(redSheet.customer) || redSheet.id;
    const group = groups.get(key) || { key, items: [], redSheets: [] };
    group.redSheets.push(redSheet);
    groups.set(key, group);
  });
  return [...groups.values()].map((group) => {
    const items = group.items.sort((a, b) => quoteTimestamp(b) - quoteTimestamp(a));
    const redSheets = group.redSheets.sort((a, b) => quoteTimestamp(b) - quoteTimestamp(a));
    const primary = items[0] || null;
    const redSheetPrimary = redSheets[0] || null;
    return {
      ...group,
      items,
      redSheets,
      primary,
      redSheetPrimary,
      total: items.reduce((sum, item) => sum + (Number(item.total) || 0), 0),
      latestTimestamp: Math.max(quoteTimestamp(primary || {}), quoteTimestamp(redSheetPrimary || {})),
    };
  });
}

function renderSavedQuotes() {
  const list = document.getElementById("quotesList");
  const quotes = readSavedQuotes();
  const query = document.getElementById("quoteSearch").value.trim().toLowerCase();
  const customerGroups = groupedCustomerQuotes(quotes).sort((a, b) => b.latestTimestamp - a.latestTimestamp);
  const filteredGroups = query
    ? customerGroups.filter(
        (group) =>
          group.items.some((quote) => quoteMatchesQuery(quote, query)) ||
          group.redSheets.some((redSheet) => quoteMatchesQuery(redSheet, query)),
      )
    : customerGroups;
  if (!customerGroups.length) {
    list.innerHTML = '<div class="quotes-empty">No saved quotes or Red Sheets yet.</div>';
    return;
  }
  if (!filteredGroups.length) {
    list.innerHTML = '<div class="quotes-empty">No quotes match your search.</div>';
    return;
  }

  list.innerHTML = filteredGroups
    .map(
      (group) => {
        const source = group.primary || group.redSheetPrimary;
        const customerName = source.customer?.customerName || source.title || "No customer name";
        const sourceDate = source.date || source.createdAt;
        const quoteDate = sourceDate ? new Date(sourceDate).toLocaleDateString("en-CA") : "";
        const createdBy = source.createdBy || "Unknown";
        const itemLabel = group.items.length === 0 ? "No door items" : group.items.length === 1 ? "1 item" : `${group.items.length} items`;
        const redSheetLabel = group.redSheets.length === 1 ? "1 Red Sheet" : `${group.redSheets.length} Red Sheets`;
        const groupSummary = group.redSheets.length ? `${itemLabel} - ${redSheetLabel}` : itemLabel;
        const rowNumber = group.primary?.quoteNumber || group.redSheetPrimary?.redSheetNumber || "Customer";
        const quoteIdAttribute = group.primary ? ` data-quote-id="${escapeHtml(group.primary.id)}"` : "";
        return `<article class="quote-list-item">
        <button class="quote-number-link quote-row-number" type="button"${quoteIdAttribute} data-customer-key="${escapeHtml(group.key)}">${escapeHtml(rowNumber)}</button>
        <span class="quote-row-name">${escapeHtml(customerName)}</span>
        <span class="quote-row-date">${escapeHtml(quoteDate)}</span>
        <span class="quote-row-created">Created by ${escapeHtml(createdBy)} - ${escapeHtml(groupSummary)}</span>
        <button class="quote-open" type="button"${quoteIdAttribute} data-customer-key="${escapeHtml(group.key)}">View</button>
      </article>`;
      },
    )
    .join("");
}

function matchingCustomerQuotes(quote) {
  const key = quote.customerKey || customerKey(quote.customer);
  return readSavedQuotes().filter((item) => (item.customerKey || customerKey(item.customer)) === key);
}

function detailCustomerDetails() {
  return Object.fromEntries(
    Object.entries(detailCustomerFields).map(([field, id]) => [field, document.getElementById(id).value.trim()]),
  );
}

function setDetailCustomerDetails(customer = {}) {
  Object.entries(detailCustomerFields).forEach(([field, id]) => {
    document.getElementById(id).value = field === "customerPhone" ? formatPhoneNumber(customer[field]) : customer[field] || "";
  });
}

function savedPanelName(panelStyle) {
  return (
    [...document.querySelectorAll(".panel-card")].find((card) => card.dataset.panel === panelStyle)?.dataset.name ||
    "Door Panel"
  );
}

function savedLiteSizeLabel(size) {
  if (!size) return "Size not selected";
  if (size === "22x14-7-16") return "22 x 14 7/16";
  return size.replace("x", " x ");
}

function savedDoorDescription(values = {}) {
  const panel = savedPanelName(values.panelStyle);
  if (!values.doorLite || values.doorLite === "none") return `${panel} - No Door Light`;

  const collection = {
    custom: "Custom Glass",
    fusion: "Fusion Glass",
    "trim-lite": "Trimlite Glass",
  }[values.doorLite] || "Door Glass";
  const details = [collection, savedLiteSizeLabel(values.liteSize)];

  if (["fusion", "trim-lite"].includes(values.doorLite)) {
    const style = fusionStylesBySize[values.liteSize]?.find(([value]) => value === values.liteGlassStyle);
    if (style?.[1]) details.push(style[1]);
  } else if (values.doorLite === "custom") {
    details.push(values.liteOption === "frosted" ? "Frosted" : "Low-E/Clear");
  }

  return `${panel} - ${details.join(" - ")}`;
}

function savedExteriorFinish(values = {}) {
  const finishType = values.exteriorFinishType;
  if (!finishType) return "Not selected";
  if (finishType === steelFinishValue) return "Polytex White";
  if (finishType === "unfinished") return "Unfinished";
  if (values.finish === "custom") return values.finishCustom?.trim() || "Custom";
  return [...paintColors, ...stainColors].find(([value]) => value === values.finish)?.[1] || "Color not selected";
}

function matchingCustomerRedSheets(customerKeyValue) {
  return readSavedRedSheets()
    .filter((redSheet) => redSheet.customerKey === customerKeyValue)
    .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
}

function renderSavedRedSheets(customerKeyValue) {
  const list = document.getElementById("savedRedSheetsList");
  if (!list) return;
  const redSheets = matchingCustomerRedSheets(customerKeyValue);
  if (!redSheets.length) {
    list.innerHTML = '<p class="saved-red-sheets-empty">No saved Red Sheets for this customer yet.</p>';
    return;
  }

  list.innerHTML = redSheets
    .map((redSheet) => {
      const updated = redSheet.updatedAt
        ? new Date(redSheet.updatedAt).toLocaleString("en-CA", { dateStyle: "medium", timeStyle: "short" })
        : "";
      const doorCount = redSheet.selectedQuoteIds?.length || 0;
      const doorLabel = doorCount === 1 ? "1 door attached" : `${doorCount} doors attached`;
      return `<article class="saved-red-sheet-row">
        <div>
          <strong>${escapeHtml(redSheet.redSheetNumber || "Red Sheet")}</strong>
          <span>${escapeHtml(doorLabel)}</span>
        </div>
        <div>
          <strong>${escapeHtml(redSheet.createdBy || "Unknown")}</strong>
          <span>Updated ${escapeHtml(updated)}</span>
        </div>
        <div class="saved-red-sheet-actions">
          <button type="button" class="saved-red-sheet-open" data-red-sheet-id="${escapeHtml(redSheet.id)}">Open</button>
          <button type="button" class="saved-red-sheet-copy" data-red-sheet-id="${escapeHtml(redSheet.id)}">Copy</button>
          <button type="button" class="saved-red-sheet-delete" data-red-sheet-id="${escapeHtml(redSheet.id)}">Delete</button>
        </div>
      </article>`;
    })
    .join("");
}

function renderQuoteDetail(quote) {
  activeQuoteCustomer = quote.customer || null;
  const customer = quote.customer || {};
  const items = matchingCustomerQuotes(quote);
  const customerName = customer.customerName || quote.title || "Customer Quote";
  const info = [customer.customerPhone, customer.customerEmail, customer.customerAddress, customer.customerCity]
    .filter(Boolean)
    .join(" | ");

  document.getElementById("detailCustomerName").textContent = customerName;
  document.getElementById("detailCustomerInfo").textContent = info;
  setDetailCustomerDetails(customer);
  const detailPage = document.getElementById("quoteDetailPage");
  detailPage.dataset.customerKey = quote.customerKey || customerKey(customer) || quote.id;
  detailPage.dataset.quoteId = quote.id;
  renderSavedRedSheets(detailPage.dataset.customerKey);
  document.getElementById("detailCustomerSaveStatus").hidden = true;
  document.getElementById("quoteItemsList").innerHTML = items
    .map(
      (item) => {
        const isPatioDoor = item.itemType === "patio-door";
        const patio = item.patioOptions || {};
        const systemSummary = isPatioDoor ? "Patio Door" : labels.systemType[item.values?.systemType] || "Door";
        const locationSummary = isPatioDoor
          ? `${patio.doorType === "two-panel" ? "Two Panel" : "Patio Door"} - ${patioSizeLabel(patio.size)}`
          : item.location || "Location not entered";
        const materialSummary = isPatioDoor
          ? patio.glass === "with-blinds"
            ? "With Blinds"
            : `Regular Clear Low-E${patio.lowE ? ` - ${patio.lowE}` : ""}`
          : item.values?.grainFilter === "steel"
            ? "Steel Door"
            : "Fiberglass Door";
        const doorDescription = isPatioDoor
          ? {
              white: "White",
              "painted-out-white-in": "Painted Out, White In",
              "painted-in-and-out": "Painted In and Out",
            }[patio.paint] || "Paint not selected"
          : savedDoorDescription(item.values);
        const exteriorFinish = isPatioDoor
          ? patio.paint === "white"
            ? "White"
            : patioPaintColorLabel(patio.exteriorColour)
          : savedExteriorFinish(item.values);
        return `<article class="quote-item-row">
        <label class="red-sheet-select" title="Include ${escapeHtml(item.quoteNumber)} in Red Sheet">
          <input class="red-sheet-item-select" type="checkbox" value="${escapeHtml(item.id)}" aria-label="Include ${escapeHtml(item.quoteNumber)} in Red Sheet" />
        </label>
        <div>
          <h2>${escapeHtml(item.quoteNumber)} - ${escapeHtml(item.title || "Door Item")}</h2>
          <p>${escapeHtml(systemSummary)}</p>
          <p>${escapeHtml(locationSummary)}</p>
          <p>${escapeHtml(materialSummary)}</p>
          <p>${escapeHtml(doorDescription)}</p>
          <p>${isPatioDoor ? "Colour" : "Exterior Panel"} - ${escapeHtml(exteriorFinish)}</p>
          <p>${new Date(item.date).toLocaleDateString("en-CA")} - ${currency.format(item.total || 0)}</p>
        </div>
        <div class="quote-item-actions">
          <button class="item-open" type="button" data-quote-id="${escapeHtml(item.id)}">Open Item</button>
          <button class="item-copy" type="button" data-quote-id="${escapeHtml(item.id)}">Copy</button>
          <button class="item-delete" type="button" data-quote-id="${escapeHtml(item.id)}">Delete</button>
        </div>
      </article>`;
      },
    )
    .join("");
}

function setRedSheetText(id, value = "") {
  document.getElementById(id).textContent = value;
}

function redSheetAmountValue(element) {
  const value = Number((element?.textContent || "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

function roundCurrency(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function updateRedSheetTotals() {
  const subtotal = roundCurrency(
    [...document.querySelectorAll(".red-calculation-amount")].reduce(
      (sum, element) => sum + redSheetAmountValue(element),
      0,
    ),
  );
  const hst = roundCurrency(subtotal * 0.13);
  const total = roundCurrency(subtotal + hst);
  const depositElement = document.getElementById("redDeposit");
  const hasDeposit = depositElement.textContent.trim() !== "";
  const deposit = roundCurrency(redSheetAmountValue(depositElement));
  const balance = roundCurrency(total - deposit);

  setRedSheetText("redSubtotal", currency.format(subtotal));
  setRedSheetText("redHst", currency.format(hst));
  setRedSheetText("redTotal", currency.format(total));
  setRedSheetText("redBalance", hasDeposit ? currency.format(balance) : "");
}

function formatRedSheetAmount(element) {
  const rawValue = element.textContent.trim();
  element.textContent = rawValue ? currency.format(redSheetAmountValue(element)) : "";
}

function restoreSavedItemState(item) {
  if (item.itemType === "patio-door") {
    applySavedPatioQuoteState(item);
    renderPatioSummary();
    return;
  }
  applySavedQuoteState(item);
}

function cloneRedSheetQuotePage(item, pageNumber, totalPages) {
  restoreSavedItemState(item);
  const sourceSelector = item.itemType === "patio-door"
    ? "#patioSummaryPage .patio-summary-sheet"
    : "#quoteView > .quote-sheet";
  const quotePage = cleanCloneIds(document.querySelector(sourceSelector).cloneNode(true));
  quotePage.classList.add("quote-sheet", "red-associated-quote");
  if (item.itemType === "patio-door") {
    quotePage.classList.add("patio-associated-quote");
    const footer = document.createElement("footer");
    footer.className = "quote-footer";
    footer.innerHTML = `<span class="quote-page">Page ${pageNumber} of ${totalPages}</span>`;
    quotePage.appendChild(footer);
  } else {
    const pageLabel = quotePage.querySelector(".quote-page");
    if (pageLabel) pageLabel.textContent = `Page ${pageNumber} of ${totalPages}`;
  }
  makeCloneImagesPrintSafe(quotePage);
  return quotePage;
}

function buildRedSheetQuotePages(selectedItems) {
  const totalPages = selectedItems.length + 1;
  const quotePages = document.getElementById("redSheetQuotePages");
  const savedActiveQuoteId = activeQuoteId;
  const savedActiveCustomer = activeQuoteCustomer;
  const savedQuote = readSavedQuotes().find((quote) => quote.id === savedActiveQuoteId);

  setRedSheetText("redPageCurrent", "1");
  setRedSheetText("redPageTotal", String(totalPages));
  quotePages.replaceChildren();

  selectedItems.forEach((item, index) => {
    const quotePage = cloneRedSheetQuotePage(item, index + 2, totalPages);
    const pageShell = document.createElement("div");
    pageShell.className = "red-sheet-quote-page-shell";
    pageShell.appendChild(quotePage);
    quotePages.appendChild(pageShell);
  });

  if (savedQuote) {
    restoreSavedItemState(savedQuote);
  } else {
    activeQuoteId = savedActiveQuoteId;
    activeQuoteCustomer = savedActiveCustomer;
  }
}

const redSheetFieldIds = [
  "redPageCurrent",
  "redPageTotal",
  "redCustomerName",
  "redDate",
  "redCustomerAddress",
  "redLeadTime",
  "redCustomerCity",
  "redPostalCode",
  "redConsultant",
  "redCustomerPhone",
  "redWorkPhone",
  "redCellPhone",
  "redOther",
  "redCustomerEmail",
  "redJambTrim",
  "redJambTrimAmount",
  "redTrimType",
  "redTrimTypeAmount",
  "redAlarms",
  "redAlarmsAmount",
  "redBlinds",
  "redBlindsAmount",
  "redNotesLine1",
  "redNotesLine2",
  "redNotesLine3",
  "redWarrantyDoors",
  "redWarrantyGlass",
  "redWarrantyOther",
  "redDeposit",
];

function generateRedSheetNumber() {
  const existing = new Set(readSavedRedSheets().map((redSheet) => redSheet.redSheetNumber));
  let number = "";
  do {
    number = `RS-${Math.floor(100000 + Math.random() * 900000)}`;
  } while (existing.has(number));
  return number;
}

function renderRedSheetLineItems(items = []) {
  document.getElementById("redSheetLineItems").innerHTML = Array.from({ length: 17 }, (_, index) => {
    const item = items[index] || {};
    const quoteId = item.quoteId ? ` data-quote-id="${escapeHtml(item.quoteId)}"` : "";
    const padding = item.paddingLeft ? ` style="padding-left:${escapeHtml(item.paddingLeft)}"` : "";
    return `<div class="red-line-item"${quoteId}>
      <div class="red-line-description${item.quoteId ? " red-auto-description" : ""}" contenteditable="true" spellcheck="false"${padding}>${escapeHtml(item.description || "")}</div>
      <div class="red-line-amount red-calculation-amount" contenteditable="true" inputmode="decimal" spellcheck="false">${escapeHtml(item.amount || "")}</div>
    </div>`;
  }).join("");
}

function generatedRedSheetLineItems(selectedItems) {
  const result = Array.from({ length: 17 }, () => ({}));
  const lineSpacing = selectedItems.length <= 4 ? 4 : Math.max(1, Math.floor(15 / Math.max(1, selectedItems.length - 1)));
  selectedItems.forEach((item, index) => {
    result[1 + index * lineSpacing] = {
      quoteId: item.id,
      description: `Supply and install door as per quote ${item.quoteNumber}`,
      amount: currency.format(Number(item.total) || 0),
    };
  });
  return result;
}

function captureRedSheetDocument() {
  const fields = Object.fromEntries(
    redSheetFieldIds.map((id) => {
      const element = document.getElementById(id);
      return [id, { text: element.textContent, paddingLeft: element.style.paddingLeft || "" }];
    }),
  );
  const lineItems = [...document.querySelectorAll("#redSheetLineItems .red-line-item")].map((row) => {
    const description = row.querySelector(".red-line-description");
    return {
      quoteId: row.dataset.quoteId || "",
      description: description.textContent,
      amount: row.querySelector(".red-line-amount").textContent,
      paddingLeft: description.style.paddingLeft || "",
    };
  });
  return { fields, lineItems };
}

function restoreRedSheetFields(fields = {}) {
  redSheetFieldIds.forEach((id) => {
    const element = document.getElementById(id);
    const saved = fields[id];
    element.textContent = saved?.text || "";
    if (saved?.paddingLeft) element.style.paddingLeft = saved.paddingLeft;
    else element.style.removeProperty("padding-left");
  });
  ["redCustomerPhone", "redWorkPhone", "redCellPhone", "redOther"].forEach((id) => {
    formatPhoneField(document.getElementById(id));
  });
}

function setRedSheetSaveStatus(message) {
  document.getElementById("redSheetSaveStatus").textContent = message;
}

async function saveActiveRedSheet(saveVersion = redSheetSaveVersion) {
  const existing = readSavedRedSheets().find((redSheet) => redSheet.id === activeRedSheetId);
  if (!existing) return;
  const documentState = captureRedSheetDocument();
  const updated = {
    ...existing,
    updatedAt: new Date().toISOString(),
    fields: documentState.fields,
    lineItems: documentState.lineItems,
  };
  writeSavedRedSheets(readSavedRedSheets().map((redSheet) => (redSheet.id === updated.id ? updated : redSheet)));
  await syncRedSheetToSharedStorage(updated);
  if (saveVersion !== redSheetSaveVersion) return;
  setRedSheetSaveStatus("Saved");
}

function scheduleRedSheetSave(delay = 650) {
  if (!activeRedSheetId) return;
  window.clearTimeout(redSheetSaveTimer);
  redSheetSaveVersion += 1;
  const saveVersion = redSheetSaveVersion;
  setRedSheetSaveStatus("Saving...");
  redSheetSaveTimer = window.setTimeout(() => saveActiveRedSheet(saveVersion), delay);
}

function showRedSheetRecord(redSheet) {
  activeRedSheetId = redSheet.id;
  redSheetReturnQuoteId = redSheet.returnQuoteId || redSheet.selectedQuoteIds?.[0] || null;
  redSheetReturnCustomerKey = redSheet.returnCustomerKey || redSheet.customerKey || "";
  document.getElementById("activeRedSheetNumber").textContent = redSheet.redSheetNumber;
  setRedSheetSaveStatus("Saved");
  const selectedItems = (redSheet.selectedQuoteIds || [])
    .map((id) => readSavedQuotes().find((quote) => quote.id === id))
    .filter(Boolean);
  renderRedSheetLineItems(redSheet.lineItems || []);
  buildRedSheetQuotePages(selectedItems);
  restoreRedSheetFields(redSheet.fields || {});
  updateRedSheetTotals();
  setActiveView("redSheet");
}

async function createRedSheet(options = {}) {
  const selectedIds = options.selectedIdsOverride || [...document.querySelectorAll(".red-sheet-item-select:checked")].map((input) => input.value);
  const quotes = readSavedQuotes();
  const selectedItems = selectedIds.map((id) => quotes.find((quote) => quote.id === id)).filter(Boolean);
  const detailPage = document.getElementById("quoteDetailPage");
  const detailQuoteId = options.returnQuoteIdOverride !== undefined ? options.returnQuoteIdOverride : detailPage.dataset.quoteId;
  const detailQuote = quotes.find((quote) => quote.id === detailQuoteId);
  const customer = options.customerOverride || selectedItems[0]?.customer || detailQuote?.customer || activeQuoteCustomer || {};
  const redSheetCustomerKey = options.customerKeyOverride || detailPage.dataset.customerKey || customerKey(customer);
  redSheetReturnQuoteId = detailQuoteId || selectedItems[0]?.id || null;
  redSheetReturnCustomerKey = redSheetCustomerKey;
  document.querySelectorAll(".red-positionable-field").forEach((element) => element.style.removeProperty("padding-left"));
  redSheetFieldIds.forEach((id) => setRedSheetText(id));
  setRedSheetText("redCustomerName", customer.customerName);
  setRedSheetText("redCustomerAddress", customer.customerAddress);
  setRedSheetText("redCustomerCity", customer.customerCity);
  setRedSheetText("redCustomerPhone", customer.customerPhone);
  setRedSheetText("redCustomerEmail", customer.customerEmail);
  formatPhoneField(document.getElementById("redCustomerPhone"));
  setRedSheetText("redConsultant", currentUserDisplayName());
  setRedSheetText("redDate", new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
  renderRedSheetLineItems(generatedRedSheetLineItems(selectedItems));
  updateRedSheetTotals();
  buildRedSheetQuotePages(selectedItems);

  const now = new Date().toISOString();
  const redSheetNumber = generateRedSheetNumber();
  const state = captureRedSheetDocument();
  const redSheet = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    redSheetNumber,
    customerKey: redSheetCustomerKey,
    customer,
    createdAt: now,
    updatedAt: now,
    createdBy: currentUserDisplayName(),
    createdByUsername: currentUsername,
    returnQuoteId: redSheetReturnQuoteId,
    returnCustomerKey: redSheetReturnCustomerKey,
    selectedQuoteIds: selectedIds,
    fields: state.fields,
    lineItems: state.lineItems,
  };
  activeRedSheetId = redSheet.id;
  writeSavedRedSheets([redSheet, ...readSavedRedSheets()]);
  document.getElementById("activeRedSheetNumber").textContent = redSheetNumber;
  setRedSheetSaveStatus("Saving...");
  setActiveView("redSheet");
  await syncRedSheetToSharedStorage(redSheet);
  setRedSheetSaveStatus("Saved");
}

function openSavedRedSheet(redSheetId) {
  const redSheet = readSavedRedSheets().find((item) => item.id === redSheetId);
  if (redSheet) showRedSheetRecord(redSheet);
}

async function copySavedRedSheet(redSheetId) {
  const source = readSavedRedSheets().find((item) => item.id === redSheetId);
  if (!source) return;
  const now = new Date().toISOString();
  const copy = {
    ...structuredClone(source),
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    redSheetNumber: generateRedSheetNumber(),
    createdAt: now,
    updatedAt: now,
    createdBy: currentUserDisplayName(),
    createdByUsername: currentUsername,
  };
  writeSavedRedSheets([copy, ...readSavedRedSheets()]);
  await syncRedSheetToSharedStorage(copy);
  showRedSheetRecord(copy);
}

async function deleteSavedRedSheet(redSheetId) {
  const redSheet = readSavedRedSheets().find((item) => item.id === redSheetId);
  if (!redSheet || !window.confirm(`Delete ${redSheet.redSheetNumber}?`)) return;
  writeSavedRedSheets(readSavedRedSheets().filter((item) => item.id !== redSheetId));
  await deleteRedSheetFromSharedStorage(redSheetId);
  renderSavedRedSheets(document.getElementById("quoteDetailPage").dataset.customerKey);
}

function refreshRedSheetDoorPricing() {
  const redSheet = readSavedRedSheets().find((item) => item.id === activeRedSheetId);
  if (!redSheet?.selectedQuoteIds?.length) {
    alert("This Red Sheet does not have any door quotes attached.");
    return;
  }
  const quotes = readSavedQuotes();
  document.querySelectorAll("#redSheetLineItems .red-line-item[data-quote-id]").forEach((row) => {
    const quote = quotes.find((item) => item.id === row.dataset.quoteId);
    if (!quote) return;
    row.querySelector(".red-line-description").textContent = `Supply and install door as per quote ${quote.quoteNumber}`;
    row.querySelector(".red-line-amount").textContent = currency.format(Number(quote.total) || 0);
  });
  const selectedItems = redSheet.selectedQuoteIds.map((id) => quotes.find((quote) => quote.id === id)).filter(Boolean);
  buildRedSheetQuotePages(selectedItems);
  updateRedSheetTotals();
  scheduleRedSheetSave(0);
}

async function returnFromRedSheet() {
  window.clearTimeout(redSheetSaveTimer);
  if (activeRedSheetId) await saveActiveRedSheet();
  const quote = readSavedQuotes().find((item) => item.id === redSheetReturnQuoteId);
  activeRedSheetId = null;
  if (quote) {
    renderQuoteDetail(quote);
    setActiveView("quoteDetail");
    return;
  }
  if (redSheetReturnCustomerKey) {
    openCustomerDetailByKey(redSheetReturnCustomerKey);
    return;
  }
  setActiveView("quotes");
}

async function saveCustomerInformation(saveVersion) {
  const detailPage = document.getElementById("quoteDetailPage");
  const previousCustomerKey = detailPage.dataset.customerKey;
  const customer = detailCustomerDetails();
  const nextCustomerKey = customerKey(customer);
  const updatedItems = [];
  const updatedQuotes = readSavedQuotes().map((quote) => {
    const quoteGroupKey = quote.customerKey || customerKey(quote.customer) || quote.id;
    if (quoteGroupKey !== previousCustomerKey) return quote;

    const updatedQuote = {
      ...quote,
      customer,
      customerKey: nextCustomerKey,
      title: customer.customerName || quote.title,
      updatedAt: new Date().toISOString(),
    };
    updatedItems.push(updatedQuote);
    return updatedQuote;
  });

  if (updatedItems.length) writeSavedQuotes(updatedQuotes);
  const customerFieldMap = {
    redCustomerName: customer.customerName,
    redCustomerPhone: customer.customerPhone,
    redCustomerAddress: customer.customerAddress,
    redCustomerEmail: customer.customerEmail,
    redCustomerCity: customer.customerCity,
  };
  const updatedRedSheets = [];
  const nextRedSheets = readSavedRedSheets().map((redSheet) => {
    if (redSheet.customerKey !== previousCustomerKey) return redSheet;
    const fields = { ...(redSheet.fields || {}) };
    Object.entries(customerFieldMap).forEach(([id, text]) => {
      fields[id] = { ...(fields[id] || {}), text: text || "" };
    });
    const updatedRedSheet = {
      ...redSheet,
      customer,
      customerKey: nextCustomerKey,
      returnCustomerKey: nextCustomerKey,
      fields,
      updatedAt: new Date().toISOString(),
    };
    updatedRedSheets.push(updatedRedSheet);
    return updatedRedSheet;
  });
  if (updatedRedSheets.length) writeSavedRedSheets(nextRedSheets);
  if (!updatedItems.length && !updatedRedSheets.length) return;
  activeQuoteCustomer = customer;
  const currentQuote = updatedItems.find((quote) => quote.id === detailPage.dataset.quoteId) || updatedItems[0];
  if (currentQuote) renderQuoteDetail(currentQuote);
  else openCustomerDetailByKey(nextCustomerKey);
  renderSavedQuotes();
  const status = document.getElementById("detailCustomerSaveStatus");
  status.textContent = "Saving...";
  status.hidden = false;
  await Promise.all([
    ...updatedItems.map((quote) => syncQuoteToSharedStorage(quote)),
    ...updatedRedSheets.map((redSheet) => syncRedSheetToSharedStorage(redSheet)),
  ]);
  if (saveVersion !== detailCustomerSaveVersion) return;
  status.textContent = "Customer information saved.";
}

function scheduleCustomerInformationSave(delay = 700) {
  window.clearTimeout(detailCustomerSaveTimer);
  detailCustomerSaveVersion += 1;
  const saveVersion = detailCustomerSaveVersion;
  const status = document.getElementById("detailCustomerSaveStatus");
  status.textContent = "Saving...";
  status.hidden = false;
  detailCustomerSaveTimer = window.setTimeout(() => saveCustomerInformation(saveVersion), delay);
}

async function copyQuoteItem(quoteId) {
  const quotes = readSavedQuotes();
  const quote = quotes.find((item) => item.id === quoteId);
  if (!quote) return;

  const copiedQuote = {
    ...quote,
    id: Date.now().toString(),
    quoteNumber: generateQuoteNumber(),
    date: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: currentUserDisplayName(),
    createdByUsername: currentUsername,
    copiedFrom: quote.quoteNumber,
  };

  writeSavedQuotes([...quotes, copiedQuote]);
  await syncQuoteToSharedStorage(copiedQuote);
  renderQuoteDetail(copiedQuote);
  renderSavedQuotes();
}

async function deleteQuoteItem(quoteId) {
  const quotes = readSavedQuotes();
  const quote = quotes.find((item) => item.id === quoteId);
  if (!quote || !window.confirm(`Delete ${quote.quoteNumber}?`)) return;
  const remaining = quotes.filter((item) => item.id !== quoteId);
  writeSavedQuotes(remaining);
  await deleteQuoteFromSharedStorage(quoteId);
  if (activeQuoteId === quoteId) activeQuoteId = null;
  const nextCustomerQuote = remaining.find((item) => (item.customerKey || customerKey(item.customer)) === (quote.customerKey || customerKey(quote.customer)));
  if (nextCustomerQuote) {
    renderQuoteDetail(nextCustomerQuote);
  } else {
    setActiveView("quotes");
  }
}

function openQuoteDetail(quoteId) {
  const quote = readSavedQuotes().find((item) => item.id === quoteId);
  if (!quote) return;
  renderQuoteDetail(quote);
  setActiveView("quoteDetail");
}

function openCustomerDetailByKey(customerKeyValue) {
  const quote = readSavedQuotes().find(
    (item) => (item.customerKey || customerKey(item.customer) || item.id) === customerKeyValue,
  );
  if (quote) {
    openQuoteDetail(quote.id);
    return;
  }
  const redSheet = readSavedRedSheets().find((item) => item.customerKey === customerKeyValue);
  if (!redSheet) return;
  renderQuoteDetail({
    id: "",
    customer: redSheet.customer || {},
    customerKey: customerKeyValue,
    title: redSheet.customer?.customerName || "Customer",
    date: redSheet.createdAt,
    createdBy: redSheet.createdBy,
  });
  setActiveView("quoteDetail");
}

function liteQuoteLines() {
  if (!valueOf("doorLite") || valueOf("doorLite") === "none") return ["No Door Light"];

  const lines = [
    `${selectedText("doorLite")} Door Lite - ${selectedText("liteSize")}`,
    `Lite Frame - ${selectedText("liteFrame")}`,
  ];
  if (["fusion", "trim-lite"].includes(valueOf("doorLite"))) {
    const styleLabel =
      document.querySelector(`.lite-glass-card[data-style="${valueOf("liteGlassStyle") || "amsterdam-2-zinc"}"] strong`)
        ?.textContent || "Amsterdam 2 Zinc";
    lines.push(`Glass Style - ${styleLabel}`);
    return lines;
  }
  lines.push(`Option - ${selectedText("liteOption")}`);
  lines.push(`Glass Dividers - ${selectedText("glassDividers")}`);
  if (valueOf("doorLite") === "custom" && valueOf("glassDividers") !== "none") {
    lines.push(`SDL Size - ${selectedText("stlSize")}`);
    lines.push(`Horizontal - ${selectedText("dividerHorizontal")}`);
    lines.push(`Vertical - ${selectedText("dividerVertical")}`);
  }
  return lines;
}

function cleanCloneIds(element) {
  element.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  element.removeAttribute("id");
  return element;
}

function updateQuoteSheet() {
  const pricingReady = !hasIncompleteRequiredSelections();
  const totals = totalPrice();
  const tax = pricingReady ? totals.total * 0.13 : 0;
  const panelName = cardName(`.panel-card[data-panel="${valueOf("panelStyle")}"]`);
  const hinges = valueOf("hardware") ? selectedText("hardware") : "No hinge finish selected";
  const handing = selectedText("handing");
  const swing = selectedText("swingType");
  const customer = customerDetails();
  const doorMaterial = normalizedPanelType() === "steel" ? "Steel Door" : "Fiberglass Door";

  document.getElementById("quoteDate").textContent = new Date().toLocaleDateString("en-CA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  document.getElementById("quoteSystem").textContent = `${doorMaterial} - ${labels.systemType[valueOf("systemType")]}`;
  document.getElementById("quoteSwing").textContent = `${swing} with ${hinges} hinges on the ${handing} side.`;
  document.getElementById("quoteFrame").textContent =
    `Frame - ${selectedText("frameOption")} - ${labels.frameWidth[valueOf("frameWidth")]} x ${frameHeightLabel()} x ${labels.jambDepth[valueOf("jambDepth")]}`;
  document.getElementById("quoteSill").textContent = "Black Anodized Finish Sill with Match Brickmould Sill Horns.";
  document.getElementById("quotePanel").textContent = `${panelName} - ${selectedText("frameWidth")} x ${selectedText("frameHeight")}`;
  setQuoteLines(document.getElementById("quoteLite"), liteQuoteLines());
  setQuoteLines(document.getElementById("quoteHardware"), hardwareQuoteLines());
  document.getElementById("quoteExteriorPanelFinish").textContent =
    `Exterior Panel - ${finishPrintDescription("exteriorFinishType", "finish")}`;
  document.getElementById("quoteExteriorFrameFinish").textContent =
    `Exterior Frame - ${finishPrintDescription("exteriorFrameFinishType", "exteriorFrameFinish")}`;
  document.getElementById("quoteInteriorPanelFinish").textContent =
    `Interior Panel - ${finishPrintDescription("interiorFinishType", "interiorFinish")}`;
  document.getElementById("quoteInteriorFrameFinish").textContent =
    `Interior Frame - ${finishPrintDescription("interiorFrameFinishType", "interiorFrameFinish")}`;
  document.getElementById("quoteSubtotal").textContent = pricingReady ? currency.format(totals.total) : "Not calculated";
  document.getElementById("quoteTax").textContent = pricingReady ? currency.format(tax) : "Not calculated";
  document.getElementById("quoteTotal").textContent = pricingReady ? currency.format(totals.total + tax) : "Not calculated";
  document.getElementById("quoteLocation").textContent = document.getElementById("location").value.trim();
  document.getElementById("quoteNotes").textContent = document.getElementById("notes").value;
  document.getElementById("quoteUserEmail").textContent = currentUserEmail();
  document.getElementById("quoteCustomerName").textContent = customer.customerName;
  document.getElementById("quoteCustomerPhone").textContent = customer.customerPhone;
  document.getElementById("quoteCustomerEmail").textContent = customer.customerEmail;
  document.getElementById("quoteCustomerAddress").textContent = customer.customerAddress;
  document.getElementById("quoteCustomerCity").textContent = customer.customerCity;

  const frontView = cleanCloneIds(document.querySelector("#builderView .front-view").cloneNode(true));
  const topView = cleanCloneIds(document.querySelector("#builderView .top-view").cloneNode(true));
  document.getElementById("quoteFrontView").replaceChildren(frontView);
  document.getElementById("quoteTopView").replaceChildren(topView);
}

function updateAll() {
  updatePanelCards();
  updateLiteFields();
  updateFinishFields();
  updateHardwareFields();
  updateRequiredFields();
  updateDrawing();
  updatePrice();
  updateQuoteSheet();
  updateSystemScroll();
  updatePanelScroll();
}

function selectPanelCard(button) {
  document.getElementById("panelStyle").value = button.dataset.panel;
  document.getElementById("panelHeading").textContent = `Door Panel (${button.dataset.name})`;
  document.getElementById("doorPanelArt").src = panelArt[button.dataset.panel] || panelArt.flush;
  document.querySelectorAll(".panel-card").forEach((card) => card.classList.toggle("selected", card === button));
}

function updatePanelCards() {
  const rawPanelType = valueOf("grainFilter");
  if (["fir", "mahogany", "oak"].includes(rawPanelType)) {
    document.querySelectorAll(".panel-card").forEach((card) => {
      card.hidden = true;
      card.classList.remove("selected");
    });
    return;
  }

  const panelType = normalizedPanelType();
  const slabSize = valueOf("frameWidth");
  const frameHeight = valueOf("frameHeight");
  const cards = Array.from(document.querySelectorAll(".panel-card"));
  let firstVisible = null;
  const isSupportedHeightForPanels =
    frameHeight === "81.875" || !["smooth", "steel", "woodgrain"].includes(panelType);

  cards.forEach((card) => {
    const isAllowedThirtySteel =
      panelType !== "steel" ||
      slabSize !== "30" ||
      card.dataset.panel === "steel-flush" ||
      card.dataset.panel === "steel-6-panel";
    const isAllowedThirtyTwoSteel =
      panelType !== "steel" ||
      slabSize !== "32" ||
      !["steel-vog", "steel-oso", "steel-tao"].includes(card.dataset.panel);
    const isAllowedFortyTwoSteel = panelType !== "steel" || slabSize !== "42" || card.dataset.panel === "steel-flush";
    const isAllowedThirtySmooth =
      panelType !== "smooth" || slabSize !== "30" || card.dataset.panel === "richersons-flush-sg00";
    const isAllowedThirtyTwoSmooth =
      panelType !== "smooth" ||
      slabSize !== "32" ||
      card.dataset.panel !== "richersons-6-panel-1-quarter-lite-sg66";
    const isAllowedFortyTwoSmooth =
      panelType !== "smooth" || slabSize !== "42" || card.dataset.panel === "richersons-flush-sg00";
    const isAllowedTrimliteShaker =
      !["trimlite-two-panel-shaker", "trimlite-one-panel-shaker", "trimlite-3-panel-shaker"].includes(card.dataset.panel) ||
      ["32", "34", "36"].includes(slabSize);
    card.hidden =
      !isSupportedHeightForPanels ||
      card.dataset.panelType !== panelType ||
      !isAllowedThirtySteel ||
      !isAllowedThirtyTwoSteel ||
      !isAllowedFortyTwoSteel ||
      !isAllowedThirtySmooth ||
      !isAllowedThirtyTwoSmooth ||
      !isAllowedFortyTwoSmooth ||
      !isAllowedTrimliteShaker;
    if (!card.hidden && !firstVisible) firstVisible = card;
  });

  const currentPanel = valueOf("panelStyle");
  const selected = cards.find((card) => card.dataset.panel === currentPanel && !card.hidden) || firstVisible;
  if (selected) selectPanelCard(selected);
}

function updateLiteFields() {
  const lite = valueOf("doorLite");
  const hasLite = Boolean(lite) && lite !== "none";
  const customGlass = lite === "custom";
  const fusionOrTrimlite = ["fusion", "trim-lite"].includes(lite);
  const liteSize = document.getElementById("liteSize");
  const liteGlassStyle = document.getElementById("liteGlassStyle");
  const liteGlassPicker = document.getElementById("liteGlassPicker");
  const mappedSizes = panelLiteSizeOptions[valueOf("panelStyle")] || allCustomLiteSizes;
  const previousSize = liteSize.value;

  if (mappedSizes.length) {
    liteSize.innerHTML = mappedSizes.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    liteSize.value = mappedSizes.some(([value]) => value === previousSize) ? previousSize : mappedSizes[0][0];
  } else {
    liteSize.innerHTML = '<option value="">No Lite Sizes Available</option>';
    liteSize.value = "";
  }

  document.getElementById("liteHeading").textContent = hasLite ? `Door Lite (${selectedText("doorLite")})` : "Door Lite";
  ["liteSizeField", "liteFrameField"].forEach((id) => {
    const field = document.getElementById(id);
    const select = field.querySelector("select");
    field.hidden = !hasLite;
    select.disabled = !hasLite || (id === "liteSizeField" && !mappedSizes.length);
  });

  const liteOptionField = document.getElementById("liteOptionField");
  const liteOption = document.getElementById("liteOption");
  liteOptionField.hidden = !customGlass || !hasLite;
  liteOption.disabled = !customGlass || !hasLite;

  const glassDividersField = document.getElementById("glassDividersField");
  const glassDividers = document.getElementById("glassDividers");
  glassDividersField.hidden = !customGlass || !hasLite;
  glassDividers.disabled = !customGlass || !hasLite;

  const liteGlassGalleryField = document.getElementById("liteGlassGalleryField");
  const fusionStyles = fusionStylesBySize[valueOf("liteSize")] || [];
  liteGlassGalleryField.hidden = !fusionOrTrimlite || !hasLite || !fusionStyles.length;
  if (fusionStyles.length) {
    if (!fusionStyles.some(([style]) => style === liteGlassStyle.value)) {
      liteGlassStyle.value = fusionStyles[0][0];
    }
    liteGlassPicker.innerHTML = fusionStyles
      .map(
        ([style, label, image]) => `<button class="lite-glass-card${style === liteGlassStyle.value ? " selected" : ""}" type="button" data-style="${style}" aria-selected="${style === liteGlassStyle.value ? "true" : "false"}">
          <img src="${image}" alt="" />
          <strong>${label}</strong>
        </button>`,
      )
      .join("");
  } else {
    liteGlassStyle.value = "";
    liteGlassPicker.innerHTML = "";
  }

  const stlSizeField = document.getElementById("stlSizeField");
  const stlSize = document.getElementById("stlSize");
  const dividerHorizontalField = document.getElementById("dividerHorizontalField");
  const dividerHorizontal = document.getElementById("dividerHorizontal");
  const dividerVerticalField = document.getElementById("dividerVerticalField");
  const dividerVertical = document.getElementById("dividerVertical");
  const showDividerControls = hasLite && customGlass && valueOf("glassDividers") !== "none";
  const showStlSize = showDividerControls;
  stlSizeField.hidden = !showStlSize;
  stlSize.disabled = !showStlSize;
  dividerHorizontalField.hidden = !showDividerControls;
  dividerHorizontal.disabled = !showDividerControls;
  dividerVerticalField.hidden = !showDividerControls;
  dividerVertical.disabled = !showDividerControls;
}

function updateHardwareFields() {
  const hardwareFinish = document.getElementById("hardwareFinish");
  const hardwareSplitFinishField = document.getElementById("hardwareSplitFinishField");
  const hardwareSplitFinish = document.getElementById("hardwareSplitFinish");
  const handleSet = document.getElementById("handleSet");
  const deadboltField = document.getElementById("deadboltPassageField");
  const deadboltStyle = document.getElementById("deadboltPassageStyle");
  const deadboltOtherField = document.getElementById("deadboltPassageOtherField");
  const deadboltOther = document.getElementById("deadboltPassageOther");
  const deadboltLeverStyleField = document.getElementById("deadboltLeverStyleField");
  const deadboltLeverStyle = document.getElementById("deadboltLeverStyle");
  const gripSetField = document.getElementById("gripSetField");
  const gripSetStyle = document.getElementById("gripSetStyle");
  const gripSetStyleOtherField = document.getElementById("gripSetStyleOtherField");
  const gripSetStyleOther = document.getElementById("gripSetStyleOther");
  const gripSetTrimField = document.getElementById("gripSetTrimField");
  const gripSetTrim = document.getElementById("gripSetTrim");
  const gripSetTrimOtherField = document.getElementById("gripSetTrimOtherField");
  const gripSetTrimOther = document.getElementById("gripSetTrimOther");
  const multipointSizeField = document.getElementById("multipointSizeField");
  const multipointSize = document.getElementById("multipointSize");
  const multipointSizeOtherField = document.getElementById("multipointSizeOtherField");
  const multipointSizeOther = document.getElementById("multipointSizeOther");
  const multipointLeverField = document.getElementById("multipointLeverField");
  const multipointLever = document.getElementById("multipointLever");
  const multipointLeverOtherField = document.getElementById("multipointLeverOtherField");
  const multipointLeverOther = document.getElementById("multipointLeverOther");
  const showDeadboltStyle = handleSet.value === "deadbolt-passage";
  const showSplitFinish = hardwareFinish.value === "split-finish";
  const showGripSetStyle = handleSet.value === "grip-set";
  const showGripSetTrim = showGripSetStyle && Boolean(gripSetStyle.value) && gripSetStyle.value !== "other";
  const showMultipointSize = handleSet.value === "multipoint";
  const showMultipointLever = showMultipointSize && Boolean(multipointSize.value) && multipointSize.value !== "other";
  const showDeadboltOther = showDeadboltStyle && deadboltStyle.value === "other";
  const showDeadboltLeverStyle =
    showDeadboltStyle &&
    ["baldwin-keypad-key-no-z-wave-lever", "baldwin-keypad-key-with-z-wave-lever"].includes(deadboltStyle.value);
  const showGripSetStyleOther = showGripSetStyle && gripSetStyle.value === "other";
  const showGripSetTrimOther = showGripSetTrim && gripSetTrim.value === "other";
  const showMultipointSizeOther = showMultipointSize && multipointSize.value === "other";
  const showMultipointLeverOther = showMultipointLever && multipointLever.value === "other";

  hardwareSplitFinishField.hidden = !showSplitFinish;
  hardwareSplitFinish.disabled = !showSplitFinish;
  if (!showSplitFinish) hardwareSplitFinish.value = "";

  deadboltField.hidden = !showDeadboltStyle;
  deadboltStyle.disabled = !showDeadboltStyle;
  if (!showDeadboltStyle) deadboltStyle.value = "";

  deadboltOtherField.hidden = !showDeadboltOther;
  deadboltOther.disabled = !showDeadboltOther;
  if (!showDeadboltOther) deadboltOther.value = "";

  deadboltLeverStyleField.hidden = !showDeadboltLeverStyle;
  deadboltLeverStyle.disabled = !showDeadboltLeverStyle;
  if (!showDeadboltLeverStyle) deadboltLeverStyle.value = "";

  gripSetField.hidden = !showGripSetStyle;
  gripSetStyle.disabled = !showGripSetStyle;
  if (!showGripSetStyle) gripSetStyle.value = "";

  gripSetStyleOtherField.hidden = !showGripSetStyleOther;
  gripSetStyleOther.disabled = !showGripSetStyleOther;
  if (!showGripSetStyleOther) gripSetStyleOther.value = "";

  gripSetTrimField.hidden = !showGripSetTrim;
  gripSetTrim.disabled = !showGripSetTrim;
  if (!showGripSetTrim) gripSetTrim.value = "";

  gripSetTrimOtherField.hidden = !showGripSetTrimOther;
  gripSetTrimOther.disabled = !showGripSetTrimOther;
  if (!showGripSetTrimOther) gripSetTrimOther.value = "";

  multipointSizeField.hidden = !showMultipointSize;
  multipointSize.disabled = !showMultipointSize;
  if (!showMultipointSize) multipointSize.value = "";

  multipointSizeOtherField.hidden = !showMultipointSizeOther;
  multipointSizeOther.disabled = !showMultipointSizeOther;
  if (!showMultipointSizeOther) multipointSizeOther.value = "";

  multipointLeverField.hidden = !showMultipointLever;
  multipointLever.disabled = !showMultipointLever;
  if (!showMultipointLever) multipointLever.value = "";

  multipointLeverOtherField.hidden = !showMultipointLeverOther;
  multipointLeverOther.disabled = !showMultipointLeverOther;
  if (!showMultipointLeverOther) multipointLeverOther.value = "";
}

function updateRequiredFields() {
  document.querySelectorAll(".required-field").forEach((field) => {
    const control = field.querySelector("select, input");
    const isFrameFinishType =
      control?.id === "exteriorFrameFinishType" || control?.id === "interiorFrameFinishType";
    const frameNeedsSelection = isFrameFinishType && ["", "unfinished"].includes(control.value);
    field.classList.toggle(
      "needs-selection",
      !field.hidden && !control.disabled && (frameNeedsSelection || !control.value.trim())
    );
  });
}

function finishMatchSource(button) {
  const interiorDiffers =
    button.dataset.targetColor === "interiorFrameFinish" &&
    valueOf("interiorFinishType") === "paint" &&
    Boolean(valueOf("interiorFinish")) &&
    valueOf("interiorFinish") !== valueOf("finish");

  return interiorDiffers
    ? { typeId: "interiorFinishType", colorId: "interiorFinish", label: "Match Interior" }
    : { typeId: "exteriorFinishType", colorId: "finish", label: "Match Exterior" };
}

function updateFinishFields() {
  const canMatchExterior = valueOf("exteriorFinishType") === "paint" && Boolean(valueOf("finish"));
  const panelType = normalizedPanelType();
  const isSteelPanel = panelType === "steel";
  const isSmoothPanel = panelType === "smooth";
  const panelCannotStain = ["steel", "smooth"].includes(panelType);
  const isSmoothCompositeFrame = valueOf("frameOption") === "smooth-composite";

  document.querySelectorAll(".steel-finish-option").forEach((option) => {
    if (option.classList.contains("smooth-frame-polytex-option")) return;
    option.hidden = !isSteelPanel;
    option.disabled = !isSteelPanel;
  });

  ["exteriorFrameFinishType", "interiorFrameFinishType"].forEach((id) => {
    const select = document.getElementById(id);
    const stainOption = select.querySelector('option[value="stain"]');
    const steelOption = select.querySelector(`option[value="${steelFinishValue}"]`);
    const canUsePolytechWhite = isSteelPanel || isSmoothCompositeFrame;
    stainOption.hidden = isSmoothCompositeFrame;
    stainOption.disabled = isSmoothCompositeFrame;
    steelOption.hidden = !canUsePolytechWhite;
    steelOption.disabled = !canUsePolytechWhite;
    if (isSmoothCompositeFrame && !["", "unfinished", "paint", steelFinishValue].includes(select.value)) {
      select.value = "";
    }
    const requiredField = select.closest(".required-field");
    if (requiredField) requiredField.classList.toggle("needs-selection", ["", "unfinished"].includes(select.value));
  });

  ["exteriorFinishType", "interiorFinishType"].forEach((id) => {
    const select = document.getElementById(id);
    const unfinishedOption = select.querySelector('option[value="unfinished"]');
    const stainOption = select.querySelector('option[value="stain"]');
    unfinishedOption.hidden = isSmoothPanel;
    unfinishedOption.disabled = isSmoothPanel;
    stainOption.hidden = panelCannotStain;
    stainOption.disabled = panelCannotStain;
    if (isSmoothPanel && select.value !== "paint") {
      select.value = "paint";
    }
    if (panelCannotStain && select.value === "stain") {
      select.value = "unfinished";
    }
  });

  ["exteriorFinishType", "exteriorFrameFinishType", "interiorFinishType", "interiorFrameFinishType"].forEach((id) => {
    const select = document.getElementById(id);
    const isFrameFinish = id === "exteriorFrameFinishType" || id === "interiorFrameFinishType";
    const allowPolytechWhite = isFrameFinish && isSmoothCompositeFrame;
    if (!isSteelPanel && !allowPolytechWhite && select.value === steelFinishValue) select.value = "unfinished";
  });

  document.querySelectorAll("[data-finish-color-for]").forEach((field) => {
    const typeSelect = document.getElementById(field.dataset.finishColorFor);
    const usesSecondaryColor = ["paint", "stain"].includes(typeSelect.value);
    const select = field.querySelector("select");
    const customInput = field.querySelector(".custom-finish-color");
    if (usesSecondaryColor && select.dataset.finishType !== typeSelect.value) {
      populateFinishOptions(select, typeSelect.value);
    }
    const usesCustomColor = select.value === "custom";
    customInput.hidden = !usesCustomColor;
    customInput.disabled = !usesCustomColor;
    if (!usesCustomColor) customInput.value = "";
    field.hidden = !usesSecondaryColor && !canMatchExterior;
    select.disabled = !usesSecondaryColor;
    if (!usesSecondaryColor) select.value = "";
    field.classList.toggle("match-only", !usesSecondaryColor && canMatchExterior);
    field.classList.toggle(
      "needs-selection",
      usesSecondaryColor && (!select.value || (usesCustomColor && !customInput.value.trim())),
    );
  });

  document.querySelectorAll(".match-exterior-finish").forEach((button) => {
    const source = finishMatchSource(button);
    const canMatchSource = valueOf(source.typeId) === "paint" && Boolean(valueOf(source.colorId));
    const targetType = document.getElementById(button.dataset.targetType);
    const targetColor = document.getElementById(button.dataset.targetColor);
    const hideAfterInteriorPanelColor = button.dataset.targetColor === "interiorFinish" && Boolean(targetColor.value);
    button.textContent = source.label;
    button.hidden =
      !canMatchSource ||
      hideAfterInteriorPanelColor ||
      (targetType.value === valueOf(source.typeId) && targetColor.value === valueOf(source.colorId));
  });
}

function updateSystemScroll() {
  const picker = document.querySelector(".system-picker");
  const thumb = document.getElementById("systemThumb");
  const maxScroll = picker.scrollWidth - picker.clientWidth;
  const trackWidth = thumb.parentElement.clientWidth;
  const thumbWidth = maxScroll > 0 ? Math.max((picker.clientWidth / picker.scrollWidth) * trackWidth, 32) : trackWidth;
  const maxThumb = trackWidth - thumbWidth;
  const progress = maxScroll > 0 ? picker.scrollLeft / maxScroll : 0;

  thumb.style.width = `${thumbWidth}px`;
  thumb.style.transform = `translateX(${maxThumb * progress}px)`;
}

function updatePanelScroll() {
  const picker = document.querySelector(".panel-picker");
  const thumb = document.getElementById("panelThumb");
  if (!picker || !thumb) return;

  const maxScroll = picker.scrollWidth - picker.clientWidth;
  const trackWidth = thumb.parentElement.clientWidth;
  const thumbWidth = maxScroll > 0 ? Math.max((picker.clientWidth / picker.scrollWidth) * trackWidth, 32) : trackWidth;
  const maxThumb = trackWidth - thumbWidth;
  const progress = maxScroll > 0 ? picker.scrollLeft / maxScroll : 0;

  thumb.style.width = `${thumbWidth}px`;
  thumb.style.transform = `translateX(${maxThumb * progress}px)`;
}

document.querySelectorAll(".accordion-head").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".accordion").classList.toggle("open");
  });
});

controls.forEach((id) => {
  document.getElementById(id).addEventListener("change", updateAll);
});

document.querySelectorAll(".custom-finish-color").forEach((input) => {
  input.addEventListener("input", updateAll);
});

document.querySelectorAll(".system-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("systemType").value = button.dataset.system;
    document.querySelectorAll(".system-card").forEach((card) => card.classList.toggle("selected", card === button));
    button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    updateAll();
  });
});

document.querySelector(".system-picker").addEventListener("scroll", updateSystemScroll);

document.querySelectorAll(".panel-card").forEach((button) => {
  button.addEventListener("click", () => {
    selectPanelCard(button);
    button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    updateAll();
  });
});

document.querySelectorAll(".lite-glass-card").forEach((button) => {
  button.remove();
});
document.getElementById("liteGlassPicker").addEventListener("click", (event) => {
  const button = event.target.closest(".lite-glass-card");
  if (!button) return;
  document.getElementById("liteGlassStyle").value = button.dataset.style;
  updateAll();
});

document.querySelector(".panel-picker").addEventListener("scroll", updatePanelScroll);

document.getElementById("panelScrollLeft").addEventListener("click", () => {
  const picker = document.querySelector(".panel-picker");
  picker.scrollLeft -= 150;
  updatePanelScroll();
});

document.getElementById("panelScrollRight").addEventListener("click", () => {
  const picker = document.querySelector(".panel-picker");
  picker.scrollLeft += 150;
  updatePanelScroll();
});

const panelThumb = document.getElementById("panelThumb");
let panelDrag = null;

panelThumb.addEventListener("pointerdown", (event) => {
  const picker = document.querySelector(".panel-picker");
  panelDrag = {
    startX: event.clientX,
    startScrollLeft: picker.scrollLeft,
  };
  panelThumb.setPointerCapture(event.pointerId);
});

panelThumb.addEventListener("pointermove", (event) => {
  if (!panelDrag) return;

  const picker = document.querySelector(".panel-picker");
  const track = panelThumb.parentElement;
  const maxScroll = picker.scrollWidth - picker.clientWidth;
  const maxThumb = track.clientWidth - panelThumb.offsetWidth;
  const ratio = maxScroll / Math.max(maxThumb, 1);
  picker.scrollLeft = panelDrag.startScrollLeft + (event.clientX - panelDrag.startX) * ratio;
  updatePanelScroll();
});

function stopPanelDrag(event) {
  if (!panelDrag) return;
  panelDrag = null;
  if (event.pointerId !== undefined && panelThumb.hasPointerCapture(event.pointerId)) {
    panelThumb.releasePointerCapture(event.pointerId);
  }
}

panelThumb.addEventListener("pointerup", stopPanelDrag);
panelThumb.addEventListener("pointercancel", stopPanelDrag);

document.querySelectorAll(".clear-finish").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.target).value = "";
    const customInputId = customFinishInputId(button.dataset.target);
    if (customInputId) document.getElementById(customInputId).value = "";
    updateAll();
  });
});

document.querySelectorAll(".match-exterior-finish").forEach((button) => {
  button.addEventListener("click", () => {
    const source = finishMatchSource(button);
    const targetType = document.getElementById(button.dataset.targetType);
    const targetColor = document.getElementById(button.dataset.targetColor);
    targetType.value = valueOf(source.typeId);
    populateFinishOptions(targetColor, targetType.value);
    targetColor.value = valueOf(source.colorId);
    const sourceCustomId = customFinishInputId(source.colorId);
    const targetCustomId = customFinishInputId(button.dataset.targetColor);
    if (sourceCustomId && targetCustomId) {
      document.getElementById(targetCustomId).value = document.getElementById(sourceCustomId).value;
    }
    updateAll();
  });
});

document.getElementById("systemScrollLeft").addEventListener("click", () => {
  document.querySelector(".system-picker").scrollBy({ left: -140, behavior: "smooth" });
});

document.getElementById("systemScrollRight").addEventListener("click", () => {
  document.querySelector(".system-picker").scrollBy({ left: 140, behavior: "smooth" });
});

const systemThumb = document.getElementById("systemThumb");
let systemDrag = null;

systemThumb.addEventListener("pointerdown", (event) => {
  const picker = document.querySelector(".system-picker");
  systemDrag = {
    startX: event.clientX,
    startScrollLeft: picker.scrollLeft,
  };
  systemThumb.setPointerCapture(event.pointerId);
});

systemThumb.addEventListener("pointermove", (event) => {
  if (!systemDrag) return;

  const picker = document.querySelector(".system-picker");
  const track = systemThumb.parentElement;
  const maxScroll = picker.scrollWidth - picker.clientWidth;
  const maxThumb = track.clientWidth - systemThumb.offsetWidth;
  const ratio = maxScroll / Math.max(maxThumb, 1);
  picker.scrollLeft = systemDrag.startScrollLeft + (event.clientX - systemDrag.startX) * ratio;
  updateSystemScroll();
});

function stopSystemDrag(event) {
  if (!systemDrag) return;
  systemDrag = null;
  if (event.pointerId !== undefined && systemThumb.hasPointerCapture(event.pointerId)) {
    systemThumb.releasePointerCapture(event.pointerId);
  }
}

systemThumb.addEventListener("pointerup", stopSystemDrag);
systemThumb.addEventListener("pointercancel", stopSystemDrag);

window.addEventListener("resize", updateSystemScroll);
window.addEventListener("resize", updatePanelScroll);

const heightField = document.querySelector(".editable-frame-height");
const heightSelect = document.getElementById("frameHeight");
const frameHeightDisplay = document.getElementById("frameHeightDisplay");

function openCustomHeight() {
  frameHeightDisplay.readOnly = false;
  frameHeightDisplay.focus();
  frameHeightDisplay.select();
}

function closeCustomHeight() {
  const selectedHeight = labels.frameHeight[valueOf("frameHeight")];
  const value = frameHeightDisplay.value.trim();
  customFrameHeight = value && value !== selectedHeight ? value : "";
  frameHeightDisplay.readOnly = true;
  updateAll();
}

heightField.addEventListener("dblclick", openCustomHeight);
frameHeightDisplay.addEventListener("blur", closeCustomHeight);
frameHeightDisplay.addEventListener("input", () => {
  if (!frameHeightDisplay.readOnly) {
    customFrameHeight = frameHeightDisplay.value.trim();
    document.getElementById("heightLabel").textContent = frameHeightDisplay.value || labels.frameHeight[valueOf("frameHeight")];
  }
});
frameHeightDisplay.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    frameHeightDisplay.blur();
  }

  if (event.key === "Escape") {
    customFrameHeight = "";
    frameHeightDisplay.readOnly = true;
    updateAll();
  }
});

heightSelect.addEventListener("change", () => {
  customFrameHeight = "";
});

document.getElementById("priceButton").addEventListener("click", () => {
  const breakdown = document.getElementById("priceBreakdown");
  breakdown.hidden = !breakdown.hidden;
});

function setActiveView(view) {
  const quoteActive = view === "quote";
  const quotesActive = view === "quotes";
  const customerActive = view === "customer";
  const itemCategoryActive = view === "itemCategory";
  const patioDoorsActive = view === "patioDoors";
  const twoPanelSizesActive = view === "twoPanelSizes";
  const patioGlassActive = view === "patioGlass";
  const patioLowEActive = view === "patioLowE";
  const patioPaintActive = view === "patioPaint";
  const patioColorsActive = view === "patioColors";
  const patioHandleActive = view === "patioHandle";
  const patioReviewActive = view === "patioReview";
  const patioSummaryActive = view === "patioSummary";
  const quoteDetailActive = view === "quoteDetail";
  const redSheetActive = view === "redSheet";
  const quoteWorkflowActive = ["builder", "quote"].includes(view);
  document.getElementById("quotesPage").hidden = !quotesActive;
  document.getElementById("customerPage").hidden = !customerActive;
  document.getElementById("itemCategoryPage").hidden = !itemCategoryActive;
  document.getElementById("patioDoorPage").hidden = !patioDoorsActive;
  document.getElementById("twoPanelSizePage").hidden = !twoPanelSizesActive;
  document.getElementById("patioGlassPage").hidden = !patioGlassActive;
  document.getElementById("patioLowEPage").hidden = !patioLowEActive;
  document.getElementById("patioPaintPage").hidden = !patioPaintActive;
  document.getElementById("patioColorPage").hidden = !patioColorsActive;
  document.getElementById("patioHandlePage").hidden = !patioHandleActive;
  document.getElementById("patioReviewPage").hidden = !patioReviewActive;
  document.getElementById("patioSummaryPage").hidden = !patioSummaryActive;
  document.getElementById("quoteDetailPage").hidden = !quoteDetailActive;
  document.getElementById("redSheetPage").hidden = !redSheetActive;
  document.getElementById("builderView").hidden = quoteActive || quotesActive || customerActive || itemCategoryActive || patioDoorsActive || twoPanelSizesActive || patioGlassActive || patioLowEActive || patioPaintActive || patioColorsActive || patioHandleActive || patioReviewActive || patioSummaryActive || quoteDetailActive || redSheetActive;
  document.getElementById("quoteView").hidden = !quoteActive;
  document.querySelector(".disclaimer").hidden = quoteActive || quotesActive || customerActive || itemCategoryActive || patioDoorsActive || twoPanelSizesActive || patioGlassActive || patioLowEActive || patioPaintActive || patioColorsActive || patioHandleActive || patioReviewActive || patioSummaryActive || quoteDetailActive || redSheetActive;
  document.querySelector(".toolbar").hidden = !quoteWorkflowActive;
  document.querySelector(".toolbar-left").hidden = !quoteWorkflowActive;
  document.querySelector(".view-tabs").hidden = !quoteWorkflowActive;
  document.getElementById("builderTab").classList.toggle("active", view === "builder");
  document.getElementById("quoteTab").classList.toggle("active", quoteActive);
  document.getElementById("quotesLink").classList.toggle("active", quotesActive || customerActive || itemCategoryActive || patioDoorsActive || twoPanelSizesActive || patioGlassActive || patioLowEActive || patioPaintActive || patioColorsActive || patioHandleActive || patioReviewActive || patioSummaryActive || quoteDetailActive || redSheetActive);
  if (quotesActive) renderSavedQuotes();
  if (quoteActive) updateQuoteSheet();
}

async function setAuthenticated(isAuthenticated) {
  document.body.classList.toggle("authenticated", isAuthenticated);
  sessionStorage.setItem("westBuiltDoorBuilderAuthenticated", isAuthenticated ? "true" : "false");
  if (isAuthenticated) {
    if (!validUsers[currentUsername]) {
      currentUsername = "chris";
      sessionStorage.setItem("westBuiltDoorBuilderUser", currentUsername);
    }
    await Promise.all([loadSavedQuotes(), loadSavedRedSheets()]);
    updateAll();
    updateSystemScroll();
    updatePanelScroll();
    setActiveView("quotes");
  } else {
    document.getElementById("quotesPage").hidden = true;
    document.getElementById("customerPage").hidden = true;
    document.getElementById("itemCategoryPage").hidden = true;
    document.getElementById("patioDoorPage").hidden = true;
    document.getElementById("twoPanelSizePage").hidden = true;
    document.getElementById("patioGlassPage").hidden = true;
    document.getElementById("patioLowEPage").hidden = true;
    document.getElementById("patioPaintPage").hidden = true;
    document.getElementById("patioColorPage").hidden = true;
    document.getElementById("patioHandlePage").hidden = true;
    document.getElementById("patioReviewPage").hidden = true;
    document.getElementById("patioSummaryPage").hidden = true;
    document.getElementById("quoteDetailPage").hidden = true;
    document.getElementById("redSheetPage").hidden = true;
    document.getElementById("builderView").hidden = true;
    document.getElementById("quoteView").hidden = true;
    document.querySelector(".toolbar").hidden = true;
    document.querySelector(".disclaimer").hidden = true;
    currentUsername = "";
    sessionStorage.removeItem("westBuiltDoorBuilderUser");
  }
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const loginError = document.getElementById("loginError");
  const valid = validUsers[username]?.password === password;
  loginError.hidden = valid;
  if (valid) {
    currentUsername = username;
    sessionStorage.setItem("westBuiltDoorBuilderUser", username);
    setAuthenticated(true);
  }
});

document.getElementById("builderTab").addEventListener("click", () => setActiveView("builder"));
document.getElementById("quoteTab").addEventListener("click", () => setActiveView("quote"));
document.getElementById("logoutBtn").addEventListener("click", () => {
  activeQuoteId = null;
  activeQuoteCustomer = null;
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginError").hidden = true;
  setAuthenticated(false);
});
document.getElementById("quotesLink").addEventListener("click", (event) => {
  event.preventDefault();
  setActiveView("quotes");
});
document.getElementById("quoteSearch").addEventListener("input", renderSavedQuotes);
document.getElementById("newQuoteBtn").addEventListener("click", startNewQuote);
document.getElementById("openMarketSharpImportBtn").addEventListener("click", () => {
  const panel = document.getElementById("marketSharpImportPanel");
  panel.hidden = false;
  document.getElementById("marketSharpEmailFile").focus();
});
document.getElementById("closeMarketSharpImportBtn").addEventListener("click", resetMarketSharpImport);
document.getElementById("marketSharpEmailFile").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    importMarketSharpEmail(await file.text());
  } catch (error) {
    console.error("Unable to read MarketSharp email", error);
    showMarketSharpImportStatus("That email file could not be read.");
  }
});
document.getElementById("importMarketSharpTextBtn").addEventListener("click", () => {
  const source = document.getElementById("marketSharpEmailText").value.trim();
  if (!source) {
    showMarketSharpImportStatus("Paste the MarketSharp email content first.");
    return;
  }
  importMarketSharpEmail(source);
});
document.getElementById("addItemBtn").addEventListener("click", () => {
  openItemCategoryPage(customerDetails(), "customer");
});
document.getElementById("createCustomerRedSheetBtn").addEventListener("click", () => {
  const customer = customerDetails();
  if (!customer.customerName) {
    alert("Enter the customer name before creating a Red Sheet.");
    document.getElementById("customerName").focus();
    return;
  }
  activeQuoteCustomer = customer;
  createRedSheet({
    customerOverride: customer,
    customerKeyOverride: customerKey(customer),
    returnQuoteIdOverride: null,
    selectedIdsOverride: [],
  });
});
document.getElementById("detailAddItemBtn").addEventListener("click", () => addItemForCustomer(activeQuoteCustomer));
document.getElementById("backFromItemCategoryBtn").addEventListener("click", () => setActiveView(itemCategoryReturnView));
document.querySelectorAll("[data-item-category]").forEach((button) => {
  button.addEventListener("click", () => selectItemCategory(button.dataset.itemCategory));
});
document.getElementById("backFromPatioDoorsBtn").addEventListener("click", () => setActiveView("itemCategory"));
document.querySelectorAll("[data-patio-door-type]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPatioDoorType = button.dataset.patioDoorType;
    document.querySelectorAll("[data-patio-door-type]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    if (selectedPatioDoorType === "two-panel") setActiveView("twoPanelSizes");
  });
});
document.getElementById("backFromTwoPanelSizesBtn").addEventListener("click", () => setActiveView("patioDoors"));
document.querySelectorAll("[data-two-panel-size]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedTwoPanelSize = button.dataset.twoPanelSize;
    document.querySelectorAll("[data-two-panel-size]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    if (["1500-5", "1800-6"].includes(selectedTwoPanelSize)) {
      document.getElementById("patioGlassHeading").textContent = `Two Panel Patio Door - ${patioSizeLabel(selectedTwoPanelSize)}`;
      setActiveView("patioGlass");
    }
  });
});
document.getElementById("backFromPatioGlassBtn").addEventListener("click", () => setActiveView("twoPanelSizes"));
document.querySelectorAll("[data-patio-glass-option]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPatioGlassOption = button.dataset.patioGlassOption;
    document.querySelectorAll("[data-patio-glass-option]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    setActiveView(selectedPatioGlassOption === "regular-clear-low-e" ? "patioLowE" : "patioPaint");
  });
});
document.getElementById("backFromPatioLowEBtn").addEventListener("click", () => setActiveView("patioGlass"));
document.querySelectorAll("[data-patio-low-e-option]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPatioLowEOption = button.dataset.patioLowEOption;
    document.querySelectorAll("[data-patio-low-e-option]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    setActiveView("patioPaint");
  });
});
document.getElementById("backFromPatioPaintBtn").addEventListener("click", () => {
  setActiveView(selectedPatioGlassOption === "regular-clear-low-e" ? "patioLowE" : "patioGlass");
});
document.querySelectorAll("[data-patio-paint-option]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPatioPaintOption = button.dataset.patioPaintOption;
    document.querySelectorAll("[data-patio-paint-option]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    if (selectedPatioPaintOption === "white") {
      selectedPatioExteriorColor = "polytex-white-141";
      selectedPatioInteriorColor = "polytex-white-141";
      setActiveView("patioHandle");
    } else {
      openPatioColorPage();
    }
  });
});
populatePatioPaintColors();
document.getElementById("backFromPatioColorBtn").addEventListener("click", () => setActiveView("patioPaint"));
document.getElementById("patioColorContinueBtn").addEventListener("click", () => {
  const exteriorColor = document.getElementById("patioExteriorColor").value;
  const needsInteriorColor = selectedPatioPaintOption === "painted-in-and-out";
  const valid = Boolean(exteriorColor);
  document.getElementById("patioColorWarning").hidden = Boolean(valid);
  if (!valid) return;
  selectedPatioExteriorColor = exteriorColor;
  selectedPatioInteriorColor = needsInteriorColor ? exteriorColor : "polytex-white-141";
  setActiveView("patioHandle");
});
document.getElementById("patioExteriorColor").addEventListener("change", () => {
  document.getElementById("patioColorWarning").hidden = true;
});
document.getElementById("backFromPatioHandleBtn").addEventListener("click", () => {
  setActiveView(selectedPatioPaintOption === "white" ? "patioPaint" : "patioColors");
});
document.querySelectorAll("[data-patio-handle-option]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedPatioHandleOption = button.dataset.patioHandleOption;
    document.querySelectorAll("[data-patio-handle-option]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    openPatioReviewPage();
  });
});
document.getElementById("backFromPatioReviewBtn").addEventListener("click", () => setActiveView("patioHandle"));
["patioReviewGlass", "patioReviewPaint"].forEach((id) => {
  document.getElementById(id).addEventListener("change", updatePatioReviewFields);
});
document.getElementById("patioReviewFinishBtn").addEventListener("click", () => {
  const glass = document.getElementById("patioReviewGlass").value;
  const lowE = document.getElementById("patioReviewLowE").value;
  const paint = document.getElementById("patioReviewPaint").value;
  const colour = document.getElementById("patioReviewColour").value;
  const valid = (glass !== "regular-clear-low-e" || lowE) && (paint === "white" || colour);
  document.getElementById("patioReviewWarning").hidden = Boolean(valid);
  if (!valid) return;
  selectedPatioDoorType = document.getElementById("patioReviewType").value;
  selectedTwoPanelSize = document.getElementById("patioReviewSize").value;
  selectedPatioGlassOption = glass;
  selectedPatioLowEOption = glass === "regular-clear-low-e" ? lowE : "";
  selectedPatioPaintOption = paint;
  selectedPatioExteriorColor = paint === "white" ? "polytex-white-141" : colour;
  selectedPatioInteriorColor = paint === "painted-out-white-in" ? "polytex-white-141" : selectedPatioExteriorColor;
  selectedPatioHandleOption = document.getElementById("patioReviewHandle").value;
  renderPatioSummary();
  setActiveView("patioSummary");
});
document.getElementById("backFromPatioSummaryBtn").addEventListener("click", openPatioReviewPage);
document.getElementById("savePatioQuoteBtn").addEventListener("click", saveCurrentPatioQuote);
document.getElementById("createRedSheetBtn").addEventListener("click", createRedSheet);
document.getElementById("backFromRedSheetBtn").addEventListener("click", returnFromRedSheet);
document.getElementById("refreshRedSheetPricingBtn").addEventListener("click", refreshRedSheetDoorPricing);
async function waitForPrintImages(root) {
  const images = [...root.querySelectorAll("img")];
  await Promise.all(
    images.map(async (image) => {
      if (image.getAttribute("src") && (!image.complete || !image.naturalWidth)) {
        await new Promise((resolve) => {
          const timeout = window.setTimeout(resolve, 2500);
          const finish = () => {
            window.clearTimeout(timeout);
            resolve();
          };
          image.addEventListener("load", finish, { once: true });
          image.addEventListener("error", finish, { once: true });
        });
      }
    }),
  );
}

async function createRedSheetPdf() {
  const pageElements = [
    document.getElementById("redSheet"),
    ...document.querySelectorAll("#redSheetQuotePages .quote-sheet"),
  ];
  const pages = [];
  for (const pageElement of pageElements) {
    const renderedPage = await renderElementToJpegDataUrl(pageElement);
    pages.push({
      jpegBytes: jpegDataUrlToBytes(renderedPage.dataUrl),
      imageWidth: renderedPage.width,
      imageHeight: renderedPage.height,
    });
  }
  return createPdfFromJpegPages(pages);
}

function shouldPrintRedSheetDirectly() {
  return /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

document.getElementById("printRedSheetBtn").addEventListener("click", async () => {
  if (shouldPrintRedSheetDirectly()) {
    const redSheetNumber = document.getElementById("activeRedSheetNumber").textContent.trim() || "Red Sheet";
    const customerName = document.getElementById("redCustomerName").textContent.trim();
    const defaultPdfName = safeFileName([redSheetNumber, customerName].filter(Boolean).join(" - "));
    const requestedPdfName = window.prompt("Name this PDF before printing:", defaultPdfName);
    if (requestedPdfName === null) return;

    window.clearTimeout(redSheetSaveTimer);
    saveActiveRedSheet().catch((error) => console.error("Red Sheet save failed before printing", error));
    previousPrintTitle = document.title;
    document.title = safeFileName(requestedPdfName).replace(/\.pdf$/i, "") || defaultPdfName;
    document.body.classList.add("printing-red-sheet", "printing-red-sheet-ios");
    window.print();
    return;
  }

  const previewWindow = window.open("", "_blank");
  if (!previewWindow) {
    alert("Chrome blocked the print preview. Please allow pop-ups for this site and try again.");
    return;
  }
  previewWindow.document.write(`<!doctype html><title>Preparing Red Sheet PDF</title>
    <body style="margin:0;display:grid;place-items:center;height:100vh;font:600 18px Arial;color:#17456f">
      Preparing the Red Sheet PDF...
    </body>`);
  previewWindow.document.close();

  const button = document.getElementById("printRedSheetBtn");
  button.disabled = true;
  button.textContent = "Preparing...";
  try {
    window.clearTimeout(redSheetSaveTimer);
    await saveActiveRedSheet();
    const pdfBlob = await createRedSheetPdf();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    previewWindow.location.replace(pdfUrl);
    window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 600000);
  } catch (error) {
    previewWindow.close();
    document.body.dataset.redSheetPrintError = error?.message || "Unknown error";
    console.error("Red Sheet PDF preparation failed", error);
    alert(`The Red Sheet PDF could not be prepared: ${error?.message || "Unknown error"}`);
  } finally {
    button.disabled = false;
    button.textContent = "Print Red Sheet";
  }
});
document.getElementById("redSheet").addEventListener("input", (event) => {
  if (event.target.matches("#redCustomerPhone, #redWorkPhone, #redCellPhone, #redOther")) {
    formatPhoneField(event.target);
  }
  if (event.target.matches(".red-calculation-amount, #redDeposit")) updateRedSheetTotals();
  scheduleRedSheetSave();
});
document.getElementById("redSheet").addEventListener(
  "blur",
  (event) => {
    if (!event.target.matches(".red-calculation-amount, #redDeposit")) return;
    formatRedSheetAmount(event.target);
    updateRedSheetTotals();
    scheduleRedSheetSave(0);
  },
  true,
);
document.getElementById("redSheet").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || !event.target.matches(".red-calculation-amount, #redDeposit")) return;
  event.preventDefault();
  event.target.blur();
});
document.getElementById("redSheet").addEventListener("pointerdown", (event) => {
  const line = event.target.closest(".red-line-description, .red-positionable-field");
  if (!line || line.textContent.trim()) return;
  const bounds = line.getBoundingClientRect();
  const clickPosition = Math.min(Math.max(event.clientX - bounds.left, 4), Math.max(4, bounds.width - 12));
  line.style.paddingLeft = `${clickPosition}px`;
  scheduleRedSheetSave();
});
Object.values(detailCustomerFields).forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener("input", () => scheduleCustomerInformationSave());
  input.addEventListener("change", () => scheduleCustomerInformationSave(0));
});
document.getElementById("customerPhone").addEventListener("input", (event) => formatPhoneField(event.target));
document.getElementById("detailCustomerPhoneInput").addEventListener("input", (event) => formatPhoneField(event.target));
document.getElementById("backToQuotesBtn").addEventListener("click", () => setActiveView("quotes"));
document.getElementById("saveQuoteBtn").addEventListener("click", saveCurrentQuote);
document.getElementById("quotesList").addEventListener("click", (event) => {
  const button = event.target.closest(".quote-open, .quote-number-link");
  if (!button) return;
  if (button.dataset.quoteId) openQuoteDetail(button.dataset.quoteId);
  else openCustomerDetailByKey(button.dataset.customerKey);
});
document.getElementById("quoteItemsList").addEventListener("click", (event) => {
  const openButton = event.target.closest(".item-open");
  if (openButton) {
    const quote = readSavedQuotes().find((item) => item.id === openButton.dataset.quoteId);
    if (quote) {
      if (quote.itemType === "patio-door") restorePatioQuote(quote);
      else restoreQuote(quote);
    }
    return;
  }

  const copyButton = event.target.closest(".item-copy");
  if (copyButton) {
    copyQuoteItem(copyButton.dataset.quoteId);
    return;
  }

  const deleteButton = event.target.closest(".item-delete");
  if (deleteButton) deleteQuoteItem(deleteButton.dataset.quoteId);
});
document.getElementById("savedRedSheetsList").addEventListener("click", (event) => {
  const openButton = event.target.closest(".saved-red-sheet-open");
  if (openButton) {
    openSavedRedSheet(openButton.dataset.redSheetId);
    return;
  }
  const copyButton = event.target.closest(".saved-red-sheet-copy");
  if (copyButton) {
    copySavedRedSheet(copyButton.dataset.redSheetId);
    return;
  }
  const deleteButton = event.target.closest(".saved-red-sheet-delete");
  if (deleteButton) deleteSavedRedSheet(deleteButton.dataset.redSheetId);
});
document.getElementById("notes").addEventListener("input", updateQuoteSheet);
document.getElementById("location").addEventListener("input", updateQuoteSheet);
customerFields.forEach((id) => document.getElementById(id).addEventListener("input", updateQuoteSheet));
document.getElementById("printBtn").addEventListener("click", () => {
  setActiveView("quote");
});

let previousPrintTitle = "";

function quotePdfTitle() {
  const quoteNumber = document.getElementById("quoteNumber")?.textContent.trim();
  const customerName = document.getElementById("quoteCustomerName")?.textContent.trim();
  const titleParts = [quoteNumber || "Quote", customerName].filter(Boolean);
  return titleParts.join(" - ");
}

function safeFileName(value) {
  return `${value || "Quote"}`.replace(/[<>:"/\\|?*\x00-\x1f]/g, "-").replace(/\s+/g, " ").trim();
}

function makeCloneImagesPrintSafe(clone) {
  clone.querySelectorAll("img").forEach((image) => {
    if (image.src) image.setAttribute("src", image.src);
  });
}

async function renderElementToJpegDataUrl(element) {
  await waitForPrintImages(element);
  if (!window.html2canvas) throw new Error("The PDF renderer did not load. Please refresh and try again.");
  const canvas = await window.html2canvas(element, {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true,
    logging: false,
    removeContainer: true,
  });
  return {
    dataUrl: canvas.toDataURL("image/jpeg", 0.9),
    width: canvas.width,
    height: canvas.height,
  };
}

function jpegDataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function concatBytes(parts) {
  const totalLength = parts.reduce((sum, part) => sum + part.length, 0);
  const combined = new Uint8Array(totalLength);
  let offset = 0;
  parts.forEach((part) => {
    combined.set(part, offset);
    offset += part.length;
  });
  return combined;
}

function pdfText(value) {
  return new TextEncoder().encode(value);
}

function createPdfFromJpeg(jpegBytes, imageWidth, imageHeight) {
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 24;
  const scale = Math.min((pageWidth - margin * 2) / imageWidth, (pageHeight - margin * 2) / imageHeight);
  const drawWidth = imageWidth * scale;
  const drawHeight = imageHeight * scale;
  const drawX = (pageWidth - drawWidth) / 2;
  const drawY = pageHeight - margin - drawHeight;
  const content = `q\n${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${drawX.toFixed(2)} ${drawY.toFixed(2)} cm\n/Im0 Do\nQ\n`;
  const objects = [
    pdfText("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"),
    pdfText("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n"),
    pdfText(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`),
    concatBytes([
      pdfText(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imageWidth} /Height ${imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`),
      jpegBytes,
      pdfText("\nendstream\nendobj\n"),
    ]),
    pdfText(`5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`),
  ];

  const header = pdfText("%PDF-1.4\n");
  const offsets = [0];
  let position = header.length;
  objects.forEach((object) => {
    offsets.push(position);
    position += object.length;
  });
  const xrefPosition = position;
  const xref =
    `xref\n0 6\n0000000000 65535 f \n${offsets
      .slice(1)
      .map((offset) => `${String(offset).padStart(10, "0")} 00000 n `)
      .join("\n")}\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`;

  return new Blob([concatBytes([header, ...objects, pdfText(xref)])], { type: "application/pdf" });
}

function createPdfFromJpegPages(pages) {
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 24;
  const pageReferences = pages.map((_, index) => `${3 + index * 3} 0 R`).join(" ");
  const objects = [
    pdfText("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"),
    pdfText(`2 0 obj\n<< /Type /Pages /Kids [${pageReferences}] /Count ${pages.length} >>\nendobj\n`),
  ];

  pages.forEach((page, index) => {
    const pageObject = 3 + index * 3;
    const imageObject = pageObject + 1;
    const contentObject = pageObject + 2;
    const scale = Math.min(
      (pageWidth - margin * 2) / page.imageWidth,
      (pageHeight - margin * 2) / page.imageHeight,
    );
    const drawWidth = page.imageWidth * scale;
    const drawHeight = page.imageHeight * scale;
    const drawX = (pageWidth - drawWidth) / 2;
    const drawY = (pageHeight - drawHeight) / 2;
    const content = `q\n${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${drawX.toFixed(2)} ${drawY.toFixed(2)} cm\n/Im0 Do\nQ\n`;

    objects.push(
      pdfText(`${pageObject} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im0 ${imageObject} 0 R >> >> /Contents ${contentObject} 0 R >>\nendobj\n`),
      concatBytes([
        pdfText(`${imageObject} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${page.imageWidth} /Height ${page.imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpegBytes.length} >>\nstream\n`),
        page.jpegBytes,
        pdfText("\nendstream\nendobj\n"),
      ]),
      pdfText(`${contentObject} 0 obj\n<< /Length ${content.length} >>\nstream\n${content}endstream\nendobj\n`),
    );
  });

  const header = pdfText("%PDF-1.4\n");
  const offsets = [0];
  let position = header.length;
  objects.forEach((object) => {
    offsets.push(position);
    position += object.length;
  });
  const xrefPosition = position;
  const objectCount = objects.length + 1;
  const xref =
    `xref\n0 ${objectCount}\n0000000000 65535 f \n${offsets
      .slice(1)
      .map((offset) => `${String(offset).padStart(10, "0")} 00000 n `)
      .join("\n")}\ntrailer\n<< /Size ${objectCount} /Root 1 0 R >>\nstartxref\n${xrefPosition}\n%%EOF`;

  return new Blob([concatBytes([header, ...objects, pdfText(xref)])], { type: "application/pdf" });
}

async function renderQuoteSheetToPdf({ includePricing = true } = {}) {
  setActiveView("quote");
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const sheet = document.querySelector("#quoteView > .quote-sheet");
  const rect = sheet.getBoundingClientRect();
  const clone = sheet.cloneNode(true);
  if (!includePricing) {
    clone.querySelectorAll(".quote-pricing, .quote-total-row").forEach((element) => element.remove());
  }
  makeCloneImagesPrintSafe(clone);
  clone.style.width = `${rect.width}px`;
  clone.style.minHeight = `${rect.height}px`;
  clone.style.margin = "0";
  clone.style.boxSizing = "border-box";

  const css = Array.from(document.styleSheets)
    .map((sheetStyle) => {
      try {
        return Array.from(sheetStyle.cssRules)
          .map((rule) => rule.cssText)
          .join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${rect.width}" height="${rect.height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>${css}</style>
          ${clone.outerHTML}
        </div>
      </foreignObject>
    </svg>
  `;

  const svgUrl = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const image = new Image();
    image.decoding = "async";
    const loaded = new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    image.src = svgUrl;
    await loaded;
    const canvas = document.createElement("canvas");
    const scale = 2;
    canvas.width = Math.round(rect.width * scale);
    canvas.height = Math.round(rect.height * scale);
    const context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const jpegBytes = jpegDataUrlToBytes(canvas.toDataURL("image/jpeg", 0.92));
    return createPdfFromJpeg(jpegBytes, canvas.width, canvas.height);
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}

async function saveQuotePdfToComputer({ includePricing = true } = {}) {
  const pdfBlob = await renderQuoteSheetToPdf({ includePricing });
  const priceLabel = includePricing ? "With Pricing" : "No Pricing";
  const suggestedName = `${safeFileName(`${quotePdfTitle()} - ${priceLabel}`)}.pdf`;
  if (window.showSaveFilePicker) {
    const fileHandle = await window.showSaveFilePicker({
      suggestedName,
      types: [{ description: "PDF file", accept: { "application/pdf": [".pdf"] } }],
    });
    const writable = await fileHandle.createWritable();
    await writable.write(pdfBlob);
    await writable.close();
    return;
  }

  const link = document.createElement("a");
  link.href = URL.createObjectURL(pdfBlob);
  link.download = suggestedName;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function printQuote({ includePricing, saveToComputer = false }) {
  setActiveView("quote");
  document.body.classList.toggle("print-no-pricing", !includePricing);
  if (saveToComputer) {
    previousPrintTitle = document.title;
    document.title = quotePdfTitle();
  }
  window.print();
}

document.getElementById("printWithPricingBtn").addEventListener("click", () => {
  printQuote({ includePricing: true });
});
document.getElementById("printNoPricingBtn").addEventListener("click", () => {
  printQuote({ includePricing: false });
});
document.getElementById("savePdfBtn").addEventListener("click", async () => {
  try {
    await saveQuotePdfToComputer({ includePricing: true });
  } catch (error) {
    if (error?.name !== "AbortError") {
      alert("The PDF could not be saved. Please use Print Now With Pricing and choose Save as PDF.");
    }
  }
});
document.getElementById("savePdfNoPricingBtn").addEventListener("click", async () => {
  try {
    await saveQuotePdfToComputer({ includePricing: false });
  } catch (error) {
    if (error?.name !== "AbortError") {
      alert("The PDF could not be saved. Please use Print Now No Pricing and choose Save as PDF.");
    }
  }
});
window.addEventListener("afterprint", () => {
  document.body.classList.remove("print-no-pricing");
  document.body.classList.remove("printing-red-sheet");
  document.body.classList.remove("printing-red-sheet-ios");
  if (previousPrintTitle) {
    document.title = previousPrintTitle;
    previousPrintTitle = "";
  }
});

populatePaintColors();
setAuthenticated(sessionStorage.getItem("westBuiltDoorBuilderAuthenticated") === "true");
updateAll();
