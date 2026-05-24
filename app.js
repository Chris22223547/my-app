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
  hardware: { black: 165, "satin-nickel": 130 },
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
    "temporary-knob": 45,
  },
  multipointSize: { "1-5x11": 0, "2x10": 0, "2-5x17": 0 },
  multipointLever: { athena: 0, helios: 0, hercules: 0 },
  transom: 740,
  brickmould: 195,
  install: 650,
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

let customFrameHeight = "";

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
          ...paintColors.filter(([value]) => value !== "cream-white").sort((a, b) => a[1].localeCompare(b[1])),
        ];

  select.innerHTML =
    '<option value="">Select color...</option>' +
    colors.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
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
  "finish",
  "exteriorFinishType",
  "exteriorFrameFinish",
  "exteriorFrameFinishType",
  "interiorFinish",
  "interiorFinishType",
  "interiorFrameFinish",
  "interiorFrameFinishType",
  "hardware",
  "handleSet",
  "deadboltPassageStyle",
  "gripSetStyle",
  "gripSetTrim",
  "multipointSize",
  "multipointLever",
  "handing",
  "install",
];

function valueOf(id) {
  const element = document.getElementById(id);
  return element.type === "checkbox" ? element.checked : element.value;
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
  const panelPrice = ["smooth", "woodgrain"].includes(valueOf("grainFilter")) ? 200 : 0;
  const finishPrice = paintFinishPrice();
  const hardwarePrice = handleSetPrice();
  const options = panelPrice + finishPrice + hardwarePrice;

  return { base, options, total: base + options };
}

function handleSetPrice() {
  const handleSet = valueOf("handleSet");
  if (handleSet === "grip-set") return 200;
  if (handleSet === "multipoint") return 600;
  return 0;
}

function paintFinishPrice() {
  const exteriorPainted = valueOf("exteriorFinishType") === "paint";
  const interiorPainted = valueOf("interiorFinishType") === "paint";
  const exteriorColor = valueOf("finish");
  const interiorColor = valueOf("interiorFinish");

  if (exteriorPainted && interiorPainted && exteriorColor && interiorColor) {
    return exteriorColor === interiorColor ? 300 : 400;
  }

  if (exteriorPainted && !interiorPainted) return 200;

  return 0;
}

function updateDrawing() {
  const system = valueOf("systemType");
  const finish = valueOf("finish");
  const frameFinish = valueOf("exteriorFrameFinish");
  const lite = valueOf("doorLite");
  const panel = valueOf("panelStyle");
  const handing = valueOf("handing");
  const swingType = valueOf("swingType");
  const hasTransom = valueOf("transom");

  const doorSystem = document.getElementById("doorSystem");
  const doorFace = document.getElementById("doorFace");
  const glass = document.getElementById("glass");
  const panelLines = document.getElementById("panelLines");
  const doorPanelArt = document.getElementById("doorPanelArt");
  const handle = document.getElementById("handle");
  const swing = document.getElementById("swing");

  doorSystem.className = "door-system";
  if (system.includes("sidelite")) doorSystem.classList.add("with-sidelite");
  if (system.startsWith("double")) doorSystem.classList.add("double");
  if (hasTransom) doorSystem.classList.add("has-transom");

  doorFace.className = `door-face finish-${finish}`;
  const activeFinish = finishStyles[finish] || finishStyles.black;
  const activeFrameFinish = finishStyles[frameFinish] || activeFinish;
  doorSystem.style.setProperty("--door-color", activeFinish.color);
  doorSystem.style.setProperty("--frame-color", activeFrameFinish.color);
  doorSystem.style.setProperty("--finish-overlay-opacity", activeFinish.opacity);
  doorPanelArt.src = panelArt[panel] || panelArt.flush;
  const hasDoorLite = lite && lite !== "none";
  glass.className = hasDoorLite ? `glass ${lite}` : "glass none";

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

function updatePrice() {
  const totals = totalPrice();
  document.getElementById("priceButton").textContent = currency.format(totals.total);
  document.getElementById("basePrice").textContent = currency.format(totals.base);
  document.getElementById("optionPrice").textContent = currency.format(totals.options);
  document.getElementById("breakdownTotal").textContent = currency.format(totals.total);
}

function selectedText(id) {
  const element = document.getElementById(id);
  if (!element || !element.selectedOptions) return "";
  return element.selectedOptions[0]?.textContent.trim() || "";
}

function cardName(selector) {
  return document.querySelector(selector)?.dataset.name || "";
}

function finishDescription(typeId, colorId) {
  const type = selectedText(typeId);
  const color = selectedText(colorId);
  return valueOf(typeId) === "unfinished" || !color ? type : `${type} ${color}`;
}

function cleanCloneIds(element) {
  element.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  element.removeAttribute("id");
  return element;
}

function updateQuoteSheet() {
  const totals = totalPrice();
  const tax = totals.total * 0.13;
  const panelName = cardName(`.panel-card[data-panel="${valueOf("panelStyle")}"]`);
  const lite = valueOf("doorLite") ? selectedText("doorLite") : "No Door Light";
  const handle = valueOf("handleSet") ? selectedText("handleSet") : "No handle selected";
  const hinges = valueOf("hardware") ? selectedText("hardware") : "No hinge finish selected";
  const handing = selectedText("handing");
  const swing = selectedText("swingType");

  document.getElementById("quoteDate").textContent = new Date().toLocaleDateString("en-CA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  document.getElementById("quoteSystem").textContent = `Fiberglass Door - ${labels.systemType[valueOf("systemType")]}`;
  document.getElementById("quoteSwing").textContent = `${swing} with ${hinges} hinges on the ${handing} side.`;
  document.getElementById("quoteFrame").textContent =
    `Frame - ${selectedText("frameOption")} - ${labels.frameWidth[valueOf("frameWidth")]} x ${frameHeightLabel()} x ${labels.jambDepth[valueOf("jambDepth")]}`;
  document.getElementById("quoteSill").textContent = "Black Anodized Finish Sill with Match Brickmould Sill Horns.";
  document.getElementById("quotePanel").textContent = `${panelName} - ${selectedText("frameWidth")} x ${selectedText("frameHeight")}`;
  document.getElementById("quoteLite").textContent = lite;
  document.getElementById("quoteHardware").textContent = `${handle}. ${hinges} hinge finish.`;
  document.getElementById("quoteDoorFinish").textContent =
    `Door - Exterior ${finishDescription("exteriorFinishType", "finish")}, Interior ${finishDescription("interiorFinishType", "interiorFinish")}`;
  document.getElementById("quoteFrameFinish").textContent =
    `Frame - Exterior ${finishDescription("exteriorFrameFinishType", "exteriorFrameFinish")}, Interior ${finishDescription("interiorFrameFinishType", "interiorFrameFinish")}`;
  document.getElementById("quoteSubtotal").textContent = currency.format(totals.total);
  document.getElementById("quoteTax").textContent = currency.format(tax);
  document.getElementById("quoteTotal").textContent = currency.format(totals.total + tax);
  document.getElementById("quoteNotes").textContent = document.getElementById("notes").value;

  const frontView = cleanCloneIds(document.querySelector(".front-view").cloneNode(true));
  const topView = cleanCloneIds(document.querySelector(".top-view").cloneNode(true));
  document.getElementById("quoteFrontView").replaceChildren(frontView);
  document.getElementById("quoteTopView").replaceChildren(topView);
}

function updateAll() {
  updatePrice();
  updatePanelCards();
  updateFinishFields();
  updateHardwareFields();
  updateRequiredFields();
  updateDrawing();
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
  const panelType = valueOf("grainFilter");
  const slabSize = valueOf("frameWidth");
  const cards = Array.from(document.querySelectorAll(".panel-card"));
  let firstVisible = null;

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

function updateHardwareFields() {
  const handleSet = document.getElementById("handleSet");
  const deadboltField = document.getElementById("deadboltPassageField");
  const deadboltStyle = document.getElementById("deadboltPassageStyle");
  const gripSetField = document.getElementById("gripSetField");
  const gripSetStyle = document.getElementById("gripSetStyle");
  const gripSetTrimField = document.getElementById("gripSetTrimField");
  const gripSetTrim = document.getElementById("gripSetTrim");
  const multipointSizeField = document.getElementById("multipointSizeField");
  const multipointSize = document.getElementById("multipointSize");
  const multipointLeverField = document.getElementById("multipointLeverField");
  const multipointLever = document.getElementById("multipointLever");
  const showDeadboltStyle = handleSet.value === "deadbolt-passage";
  const showGripSetStyle = handleSet.value === "grip-set";
  const showGripSetTrim = showGripSetStyle && Boolean(gripSetStyle.value);
  const showMultipointSize = handleSet.value === "multipoint";
  const showMultipointLever = showMultipointSize && Boolean(multipointSize.value);

  deadboltField.hidden = !showDeadboltStyle;
  deadboltStyle.disabled = !showDeadboltStyle;
  if (!showDeadboltStyle) deadboltStyle.value = "";

  gripSetField.hidden = !showGripSetStyle;
  gripSetStyle.disabled = !showGripSetStyle;
  if (!showGripSetStyle) gripSetStyle.value = "";

  gripSetTrimField.hidden = !showGripSetTrim;
  gripSetTrim.disabled = !showGripSetTrim;
  if (!showGripSetTrim) gripSetTrim.value = "";

  multipointSizeField.hidden = !showMultipointSize;
  multipointSize.disabled = !showMultipointSize;
  if (!showMultipointSize) multipointSize.value = "";

  multipointLeverField.hidden = !showMultipointLever;
  multipointLever.disabled = !showMultipointLever;
  if (!showMultipointLever) multipointLever.value = "";
}

function updateRequiredFields() {
  document.querySelectorAll(".required-field").forEach((field) => {
    const select = field.querySelector("select");
    field.classList.toggle("needs-selection", !field.hidden && !select.disabled && !select.value);
  });
}

function updateFinishFields() {
  document.querySelectorAll("[data-finish-color-for]").forEach((field) => {
    const typeSelect = document.getElementById(field.dataset.finishColorFor);
    const isUnfinished = typeSelect.value === "unfinished";
    const select = field.querySelector("select");
    if (!isUnfinished && select.dataset.finishType !== typeSelect.value) {
      populateFinishOptions(select, typeSelect.value);
    }
    field.hidden = isUnfinished;
    select.disabled = isUnfinished;
    if (isUnfinished) select.value = "";
    field.classList.toggle("needs-selection", !isUnfinished && !select.value);
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
  document.getElementById("builderView").hidden = quoteActive;
  document.getElementById("quoteView").hidden = !quoteActive;
  document.querySelector(".disclaimer").hidden = quoteActive;
  document.getElementById("builderTab").classList.toggle("active", !quoteActive);
  document.getElementById("quoteTab").classList.toggle("active", quoteActive);
  if (quoteActive) updateQuoteSheet();
}

document.getElementById("builderTab").addEventListener("click", () => setActiveView("builder"));
document.getElementById("quoteTab").addEventListener("click", () => setActiveView("quote"));
document.getElementById("notes").addEventListener("input", updateQuoteSheet);
document.getElementById("printBtn").addEventListener("click", () => {
  setActiveView("quote");
  window.print();
});

populatePaintColors();
updateAll();
