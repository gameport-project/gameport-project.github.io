"use strict";

/* The texts, in the two languages. Everything is written for any device and in a general form, without speaking to the reader. */
const TEXTS = {
  en: {
    download: "Download", title: "Android versions of Steam games",
    lead: "Every Steam game that has an Android version, and what players report for each kind of device. The reports come from the players of GamePort, one answer for each player and game.",
    pageTitle: "GamePort: play your Steam games on Quest, Pico and Android",
    pageDescription: "GamePort is a free, open-source app that brings the Android versions of your Steam games to Meta Quest, Pico, other standalone VR headsets, Android phones and tablets. See which Steam games run on which device.",
    heroTitle: "Your Steam games, on Quest, Pico and any Android device.",
    heroLead: "GamePort is a free, open-source app that signs in to a Steam account, shows the Android versions of the games owned (or shared by the Steam family), and takes care of the rest: download, install, launch. Saves follow through Steam Cloud, and play time counts on the account.",
    heroGet: "Get GamePort", heroSee: "See the games", heroDiscord: "Join the Discord",
    features: [
      ["A store for the Android versions", "Every Steam game that has an Android version, with its price, its price history and a plain verdict, in the currency of the account."],
      ["Compatibility, reported by players", "Players say whether each game works on their kind of device. The table below shows it game by game."],
      ["One tap to install", "GamePort downloads the game, prepares it so it runs on the device, and installs it. Saves and play time stay with the Steam account."],
    ],
    worksOn: "Meta Quest, Pico, other Android headsets that run OpenXR games, and Android phones and tablets for the games that are not VR.",
    sectionTitle: "Compatibility, game by game",
    onlineNote: "Multiplayer works in several games.",
    onlineNoteMore: "A few rare games will not work, because of an APK protection or another block. The reports below say what players found for each game.",
    deviceLabel: "Device", compatLabel: "Reports",
    types: { demo: "Demo", beta: "Beta", application: "App" },
    latestTitle: "Latest additions", latestLead: "The latest Android versions the catalog has seen.", prev: "Previous", next: "Next",
    adultLabel: "Adult content", adult: { all: "Adult: all", only: "Adult only", hidden: "No adult" },
    demo: "Demo", fullGameGp: "Full game on GamePort", fullGameSteam: "Full game on Steam", demoGp: "Demo on GamePort", demoSteam: "Demo on Steam", demoOf: "Demo of", hasDemo: "A demo is available", tryDemo: "Try the demo",
    search: "Search games", all: "All", vr: "VR", flat: "Flat",
    devices: { all: "All devices", quest: "Quest", pico: "Pico", phone: "Phone", tablet: "Tablet", other: "Other" },
    compat: { all: "Any report", works: "Works", issues: "Problems", none: "No report" },
    sort: "Sort", sorts: { reports: "Reports first", name: "Name", rating: "Rating", recent: "Newest" },
    shown: (n, total) => (n === total ? `${total} games` : `${n} of ${total} games`),
    empty: "No game matches.", soon: "Soon", back: "All games",
    levels: { works: "Works", offline: "Works offline only", mixed: "Mixed reports", fails: "Problems reported", incompatible: "Incompatible", none: "No report yet" },
    reports: "What players report", reportsNone: "No player has said anything about this game yet.",
    unreliable: "Few answers so far: the result may not be reliable.",
    countNames: { works: "Works", offline: "Offline only", fails: "Does not work" },
    fixed: (day, version) => `Problem solved on ${day}${version ? ` in version ${version}` : ""}, counted as works`,
    issuesTitle: "Problems reported by users:",
    modelsTitle: "Detail by device", unknownModel: "Device not specified", moreModels: n => `${n} more`,
    issueLabels: { no_image: "nothing shows", flat_window: "flat window instead of VR", closes: "closes by itself", stuck_loading: "stuck on loading", no_controls: "controls missing or wrong", no_sound: "no sound", no_online: "cannot play online", slow: "slow or stuttering", no_passthrough: "no passthrough", visual: "broken image or colors", other: "something else" },
    about: "About this game", rating: p => `${p}% of Steam reviews positive`, reviews: n => `${n.toLocaleString("en")} reviews`,
    release: "Released", developer: "Developer", frame: "Steam Frame", deck: "Steam Deck",
    verdicts: { verified: "verified", playable: "playable", unsupported: "unsupported", unknown: "unknown" },
    steam: "Open on Steam", notYet: "The Android version is not published yet.",
    howTitle: "How to read this", how: "A game is said to work when three quarters of the players of the same kind of device could play it. With only a few answers (under 3), the result may not be reliable. Offline only means that most of them could play only without the network. Prices and installs are in the app.",
    notFound: "This game is not in the catalog.",
    foot: "GamePort is an independent community project, not made by or affiliated with Valve, Meta or Pico. The list comes from a public catalog and is refreshed every few hours.",
  },
  fr: {
    download: "Télécharger", title: "Les versions Android des jeux Steam",
    lead: "Tous les jeux Steam qui ont une version Android, et ce que les joueurs rapportent pour chaque type d'appareil. Les rapports viennent des joueurs de GamePort, une réponse par joueur et par jeu.",
    pageTitle: "GamePort : jouer à ses jeux Steam sur Quest, Pico et Android",
    pageDescription: "GamePort est une application gratuite et open source qui apporte les versions Android de vos jeux Steam sur Meta Quest, Pico, d'autres casques VR autonomes, téléphones et tablettes Android. Voir quels jeux Steam fonctionnent sur quel appareil.",
    heroTitle: "Les jeux Steam, sur Quest, Pico et tout appareil Android.",
    heroLead: "GamePort est une application gratuite et open source qui se connecte à un compte Steam, montre les versions Android des jeux possédés (ou partagés par la famille Steam), et s'occupe du reste : téléchargement, installation, lancement. Les sauvegardes suivent grâce à Steam Cloud, et le temps de jeu compte sur le compte.",
    heroGet: "Obtenir GamePort", heroSee: "Voir les jeux", heroDiscord: "Rejoindre le Discord",
    features: [
      ["Un store pour les versions Android", "Tous les jeux Steam qui ont une version Android, avec leur prix, l'historique de ce prix et un verdict simple, dans la monnaie du compte."],
      ["La compatibilité, rapportée par les joueurs", "Les joueurs disent si chaque jeu fonctionne sur leur type d'appareil. Le tableau ci-dessous le montre jeu par jeu."],
      ["Un geste pour installer", "GamePort télécharge le jeu, le prépare pour qu'il tourne sur l'appareil, et l'installe. Les sauvegardes et le temps de jeu restent avec le compte Steam."],
    ],
    worksOn: "Meta Quest, Pico, les autres casques Android qui font tourner des jeux OpenXR, et les téléphones et tablettes Android pour les jeux qui ne sont pas en VR.",
    sectionTitle: "La compatibilité, jeu par jeu",
    onlineNote: "Le multijoueur fonctionne dans plusieurs jeux.",
    onlineNoteMore: "Quelques rares jeux ne fonctionneront pas, à cause d'une protection de l'APK ou d'un autre blocage. Les rapports indiquent ce que les joueurs ont constaté pour chaque jeu.",
    deviceLabel: "Appareil", compatLabel: "Rapports",
    types: { demo: "Démo", beta: "Bêta", application: "Appli" },
    latestTitle: "Derniers ajouts", latestLead: "Les dernières versions Android vues par le catalogue.", prev: "Précédent", next: "Suivant",
    adultLabel: "Contenu pour adultes", adult: { all: "Tous publics et adultes", only: "Réservé aux adultes", hidden: "Tous publics" },
    demo: "Démo", fullGameGp: "Jeu complet sur GamePort", fullGameSteam: "Jeu complet sur Steam", demoGp: "Démo sur GamePort", demoSteam: "Démo sur Steam", demoOf: "Démo de", hasDemo: "Une démo est disponible", tryDemo: "Essayer la démo",
    search: "Rechercher un jeu", all: "Tous", vr: "VR", flat: "Plat",
    devices: { all: "Tous les appareils", quest: "Quest", pico: "Pico", phone: "Téléphone", tablet: "Tablette", other: "Autre" },
    compat: { all: "Tout rapport", works: "Fonctionne", issues: "Problèmes", none: "Sans rapport" },
    sort: "Tri", sorts: { reports: "Rapports d'abord", name: "Nom", rating: "Note", recent: "Récents" },
    shown: (n, total) => (n === total ? `${total} jeux` : `${n} jeux sur ${total}`),
    empty: "Aucun jeu ne correspond.", soon: "Bientôt", back: "Tous les jeux",
    levels: { works: "Fonctionne", offline: "Fonctionne hors ligne seulement", mixed: "Avis partagés", fails: "Problèmes signalés", incompatible: "Incompatible", none: "Pas encore de rapport" },
    reports: "Ce que rapportent les joueurs", reportsNone: "Aucun joueur n'a encore donné son avis sur ce jeu.",
    unreliable: "Peu de réponses pour l'instant : le résultat peut ne pas être fiable.",
    countNames: { works: "Fonctionne", offline: "Hors ligne seulement", fails: "Ne fonctionne pas" },
    fixed: (day, version) => `Problème réglé le ${day}${version ? ` dans la version ${version}` : ""}, compté comme fonctionnel`,
    issuesTitle: "Problèmes remontés par les utilisateurs :",
    modelsTitle: "Détail par appareil", unknownModel: "Appareil non précisé", moreModels: n => `${n} autres`,
    issueLabels: { no_image: "rien ne s'affiche", flat_window: "fenêtre plate au lieu de la VR", closes: "se ferme tout seul", stuck_loading: "bloqué au chargement", no_controls: "commandes absentes ou fausses", no_sound: "pas de son", no_online: "impossible de jouer en ligne", slow: "lent ou saccadé", no_passthrough: "pas de transparence", visual: "image cassée ou couleurs fausses", other: "autre chose" },
    about: "À propos de ce jeu", rating: p => `${p} % d'avis positifs sur Steam`, reviews: n => `${n.toLocaleString("fr")} avis`,
    release: "Sortie", developer: "Développeur", frame: "Steam Frame", deck: "Steam Deck",
    verdicts: { verified: "vérifié", playable: "jouable", unsupported: "non pris en charge", unknown: "inconnu" },
    steam: "Ouvrir sur Steam", notYet: "La version Android n'est pas encore publiée.",
    howTitle: "Comment lire ces rapports", how: "Un jeu est dit fonctionnel quand les trois quarts des joueurs du même type d'appareil ont pu y jouer. Avec seulement quelques réponses (moins de 3), le résultat peut ne pas être fiable. Hors ligne seulement veut dire que la plupart n'ont pu jouer que sans le réseau. Les prix et les installations sont dans l'application.",
    notFound: "Ce jeu n'est pas dans le catalogue.",
    foot: "GamePort est un projet communautaire indépendant, non conçu par Valve, Meta ou Pico ni affilié à eux. La liste vient d'un catalogue public et se met à jour toutes les quelques heures.",
  },
};

const DEVICES = ["all", "quest", "pico", "phone", "tablet", "other"];
const MIN_PLAYERS = 3;
/* The store tags of nudity and sexual content: Nudity, Sexual Content, NSFW, Hentai. */
const ADULT_TAGS = new Set([6650, 12095, 24904, 9130]);
const isAdult = g => (g.tags || []).some(t => ADULT_TAGS.has(t));
const WORKS_SHARE = 0.75;
const FAILS_SHARE = 0.25;

const ICONS = {
  works: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16 9.5"/></svg>',
  offline: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><path d="M5 12.6a10 10 0 0 1 3.1-2M10.7 6.1A14 14 0 0 1 22 9.3M2 9.3a14 14 0 0 1 3-1.9M8.5 16a5 5 0 0 1 4.2-1.3M12 20h.01"/></svg>',
  mixed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>',
  fails: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg>',
  exclaim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M12 6.5v7"/><path d="M12 17.4h.01"/></svg>',
  none: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/></svg>',
};

const STEAMDB_ICON = '<svg class="st" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>';

const GAMEPORT_ICON = '<svg class="gp" viewBox="96 96 320 320" fill="none" stroke="currentColor" aria-hidden="true"><path d="M348.2,173 A124,124 0 1 0 380,256 L272,256" stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/><path transform="translate(-12)" d="M206,214 L206,298 Q206,312 218,305 L284,263 Q294,256 284,249 L218,207 Q206,200 206,214 Z" fill="currentColor" stroke-width="8" stroke-linejoin="round"/></svg>';

const STEAM_ICON = '<svg class="st" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>';

const DISCORD_ICON = '<svg class="dc" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>';

const state = { lang: "en", games: [], byId: new Map(), summary: new Map(), incompatible: new Map(), reasons: {}, type: "all", device: "all", compat: "all", adult: "all", sort: "reports", query: "" };

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const t = () => TEXTS[state.lang];

/* A date as the visitor's browser writes it (day, month and year in the order of their region). */
function formatDay(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  try { return d.toLocaleDateString(navigator.language || state.lang, { dateStyle: "medium", timeZone: "UTC" }); } catch (_) { return iso; }
}

/* The same rule as the app: one answer is a verdict, flagged as possibly unreliable under 3; a game that works offline works for this count. */
function verdict(counts) {
  if (!counts) return null;
  const total = counts.works + counts.offlineOnly + counts.fails;
  if (total === 0) return null;
  const positive = counts.works + counts.offlineOnly;
  const share = positive / total;
  let level;
  if (share >= WORKS_SHARE) level = counts.offlineOnly * 2 >= positive ? "offline" : "works";
  else if (share <= FAILS_SHARE) level = "fails";
  else level = "mixed";
  return { level, total, unreliable: total < MIN_PLAYERS, ...counts };
}

/** What players ticked as going wrong, most reported first: for the game, or for one kind of device. */
function issuesFor(appId, device) {
  const game = state.summary.get(appId);
  const counts = device === "all" ? game?.issues : game?.devices?.[device]?.issues;
  return Object.entries(counts ?? {}).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

/** The devices that answered for one kind of device: their name (or the raw model), their counts and the problems ticked, the most answers first. */
function modelsFor(appId, device) {
  const kind = state.summary.get(appId)?.devices?.[device];
  const found = new Map();
  for (const [model, c] of Object.entries(kind?.models ?? {})) {
    const label = c.name ?? model;
    const entry = found.get(label) ?? { label, works: 0, offlineOnly: 0, fails: 0, issues: {} };
    entry.works += c.works; entry.offlineOnly += c.offlineOnly; entry.fails += c.fails;
    for (const [code, n] of Object.entries(c.issues ?? {})) entry.issues[code] = (entry.issues[code] ?? 0) + n;
    found.set(label, entry);
  }
  const total = e => e.works + e.offlineOnly + e.fails;
  const rows = [...found.values()].sort((a, b) => total(b) - total(a) || a.label.localeCompare(b.label));
  // The answers that came without a model (an older version of the app) are what is left of the totals of this kind of device: shown as one line, so the lines add up.
  if (kind) {
    const left = { label: t().unknownModel, works: kind.works - rows.reduce((n, e) => n + e.works, 0), offlineOnly: kind.offlineOnly - rows.reduce((n, e) => n + e.offlineOnly, 0), fails: kind.fails - rows.reduce((n, e) => n + e.fails, 0), issues: {} };
    if (rows.length && total(left) > 0) rows.push(left);
    // The problems the totals have and the lines do not say yet: only an answer that is not "it works" carries any, so they can belong to the one line that has such answers, and to no other. With several, nothing is guessed.
    const owners = rows.filter(e => e.fails + e.offlineOnly > 0);
    if (owners.length === 1) {
      for (const [code, n] of Object.entries(kind.issues ?? {})) {
        const rest = n - rows.reduce((m, e) => m + (e.issues[code] ?? 0), 0);
        if (rest > 0) owners[0].issues[code] = (owners[0].issues[code] ?? 0) + rest;
      }
    }
  }
  return rows;
}

function countsFor(appId, device) {
  const game = state.summary.get(appId);
  if (!game) return null;
  if (device === "all") return { works: game.works, offlineOnly: game.offlineOnly, fails: game.fails };
  return game.devices?.[device] ?? null;
}

const RANK = { works: 0, offline: 1, mixed: 2, fails: 3, incompatible: 4 };

/** What a game is known as: incompatible when it is on the developer's list (whatever the players said), else the verdict of the answers, else null. */
function standing(g, device) {
  if (state.incompatible.has(g.appid)) return { level: "incompatible", total: 0, unreliable: false };
  return verdict(countsFor(g.appid, device));
}

function visible() {
  const q = state.query.trim().toLowerCase();
  const list = state.games.filter(g => {
    if (q && !g.name.toLowerCase().includes(q)) return false;
    if (state.type === "vr" && !g.vr) return false;
    if (state.type === "flat" && g.vr) return false;
    if (state.adult === "only" && !isAdult(g)) return false;
    if (state.adult === "hidden" && isAdult(g)) return false;
    const v = standing(g, state.device);
    if (state.compat === "works" && !(v && (v.level === "works" || v.level === "offline"))) return false;
    if (state.compat === "issues" && !(v && (v.level === "mixed" || v.level === "fails" || v.level === "incompatible"))) return false;
    if (state.compat === "none" && v) return false;
    return true;
  });
  const byName = (a, b) => a.name.localeCompare(b.name, state.lang);
  const key = g => standing(g, state.device);
  if (state.sort === "name") list.sort(byName);
  else if (state.sort === "rating") list.sort((a, b) => (b.reviewPercent ?? -1) - (a.reviewPercent ?? -1) || byName(a, b));
  else if (state.sort === "recent") list.sort((a, b) => (b.androidSince ?? "").localeCompare(a.androidSince ?? "") || byName(a, b));
  else list.sort((a, b) => {
    const va = key(a), vb = key(b);
    if (!!va !== !!vb) return va ? -1 : 1;
    if (va && vb && RANK[va.level] !== RANK[vb.level]) return RANK[va.level] - RANK[vb.level];
    if (va && vb && vb.total !== va.total) return vb.total - va.total;
    if (a.installable !== b.installable) return a.installable ? -1 : 1;
    return byName(a, b);
  });
  return list;
}

function mark(level, extra = "") {
  return `<span class="lv-${level} ${extra}" aria-hidden="true">${ICONS[level === "offline" ? "offline" : level === "incompatible" ? "fails" : level]}</span>`;
}

/**
 * The cover of an app, with the other pictures it has for when Steam has no file under the cover's name (it happens for recent apps and demos): the page tries them
 * one after the other, see the listener below.
 */
function picture(g) {
  const urls = [g.cover, g.header, g.capsule, g.banner].filter((u, i, all) => u && all.indexOf(u) === i);
  if (!urls.length) return "";
  return `<img src="${esc(urls[0])}" data-next="${esc(urls.slice(1).join(" "))}" alt="" loading="lazy">`;
}

document.addEventListener("error", e => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || !img.dataset.next) { if (img instanceof HTMLImageElement) img.classList.add("broken"); return; }
  const [next, ...rest] = img.dataset.next.split(" ");
  img.dataset.next = rest.join(" ");
  // What stands in for a missing cover is a wide picture: it is shown whole, on a blurred copy of itself, instead of cut to the shape of a cover.
  const art = img.closest(".art");
  if (art) { art.classList.add("wide"); art.style.setProperty("--wide", `url("${next}")`); }
  img.src = next;
}, true);

function card(g) {
  const v = standing(g, state.device);
  const level = v ? v.level : "none";
  const label = t().levels[level];
  return `<a class="card${g.installable ? "" : " soon"}" href="#/g/${g.appid}" aria-label="${esc(g.name)}, ${esc(label)}">
    <div class="art">${picture(g)}
      ${g.vr ? '<span class="tag">VR</span>' : ""}${g.installable ? "" : `<span class="tag soon-tag">${esc(t().soon)}</span>`}${t().types[g.type] ? `<span class="tag soon-tag">${esc(t().types[g.type])}</span>` : ""}
      <span class="dot lv-${level}" title="${esc(label)}">${ICONS[level === "incompatible" ? "fails" : level]}</span>
    </div>
    <div class="name">${esc(g.name)}</div>
  </a>`;
}

function pick(name, options, current, labels, title) {
  return `<label class="pick" data-pick="${name}"><span class="pl">${esc(title)}</span><select aria-label="${esc(title)}">${options.map(o => `<option value="${o}"${o === current ? " selected" : ""}>${esc(labels[o])}</option>`).join("")}</select></label>`;
}

function group(name, options, current, labels) {
  return `<div class="group" role="group" data-group="${name}">${options.map(o => `<button type="button" data-value="${o}" aria-pressed="${o === current}">${esc(labels[o])}</button>`).join("")}</div>`;
}

const LATEST_MAX = 40;

/**
 * The newest Android versions the catalog has seen, the last one scanned first, forty at most: the ones the catalog dated, by the day each arrived (in UTC). The
 * catalog keeps no time of day, so among apps of the same day the one with the highest app id, the most recent on Steam, comes first.
 */
function latest() {
  return state.games
    .filter(g => g.androidSince)
    .sort((a, b) => b.androidSince.localeCompare(a.androidSince) || b.appid - a.appid)
    .slice(0, LATEST_MAX);
}

function latestSection(x) {
  const list = latest();
  if (!list.length) return "";
  return `<section class="latest" aria-label="${esc(x.latestTitle)}">
    <div class="latest-head"><div><h2>${esc(x.latestTitle)}</h2><p>${esc(x.latestLead)}</p></div>
      <div class="arrows"><button type="button" data-dir="-1" aria-label="${esc(x.prev)}">‹</button><button type="button" data-dir="1" aria-label="${esc(x.next)}">›</button></div></div>
    <div class="track" id="track">${list.map(card).join("")}</div>
  </section>`;
}

function renderList() {
  const x = t();
  document.title = x.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", x.pageDescription);
  const view = document.getElementById("view");
  const typeLabels = { all: x.all, vr: x.vr, flat: x.flat };
  view.innerHTML = `
    <section class="intro">
      <div class="intro-text">
        <h1>${esc(x.heroTitle)}</h1>
        <p>${esc(x.heroLead)}</p>
        <div class="actions">
          <a class="btn fill" href="https://github.com/gameport-project/gameport-app/releases/latest">${esc(x.heroGet)}</a>
          <a class="btn" href="#games" data-jump>${esc(x.heroSee)}</a>
          <a class="btn discord-btn" href="https://discord.gg/yWXXAC2AKc">${DISCORD_ICON}${esc(x.heroDiscord)}</a>
        </div>
      </div>
    </section>
    <section class="features">${x.features.map(([h, p]) => `<article class="feature"><h3>${esc(h)}</h3><p>${esc(p)}</p></article>`).join("")}</section>
    <p class="works-on">${esc(x.worksOn)}</p>
    <aside class="notice" role="note"><span class="warn-mark" aria-hidden="true">${ICONS.exclaim}</span><div><strong>${esc(x.onlineNote)}</strong><span>${esc(x.onlineNoteMore)}</span></div></aside>
    ${latestSection(x)}
    <section class="hero" id="games"><h2>${esc(x.sectionTitle)}</h2><p>${esc(x.lead)}</p></section>
    <div class="tools">
      <div class="searchrow">
        <label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input id="q" type="search" placeholder="${esc(x.search)}" value="${esc(state.query)}" autocomplete="off" aria-label="${esc(x.search)}"></label>
        <label class="sort">${esc(x.sort)}
          <select id="sort">${Object.keys(x.sorts).map(k => `<option value="${k}"${k === state.sort ? " selected" : ""}>${esc(x.sorts[k])}</option>`).join("")}</select></label>
      </div>
      <div class="filters">
        ${group("type", ["all", "vr", "flat"], state.type, typeLabels)}
        ${group("device", DEVICES, state.device, x.devices)}
        ${group("compat", ["all", "works", "issues", "none"], state.compat, x.compat)}
        ${group("adult", ["all", "only", "hidden"], state.adult, x.adult)}
        ${pick("device", DEVICES, state.device, x.devices, x.deviceLabel)}
        ${pick("compat", ["all", "works", "issues", "none"], state.compat, x.compat, x.compatLabel)}
        ${pick("adult", ["all", "only", "hidden"], state.adult, x.adult, x.adultLabel)}
      </div>
    </div>
    <p class="count" id="count"></p>
    <div class="grid" id="grid"></div>`;
  view.querySelector("[data-jump]").addEventListener("click", e => { e.preventDefault(); document.getElementById("games").scrollIntoView({ behavior: "smooth" }); });
  const track = document.getElementById("track");
  if (track) view.querySelectorAll(".arrows button").forEach(b => b.addEventListener("click", () => track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.85, behavior: "smooth" })));
  const q = document.getElementById("q");
  q.addEventListener("input", () => { state.query = q.value; paint(); });
  document.getElementById("sort").addEventListener("change", e => { state.sort = e.target.value; paint(); });
  const sync = name => {
    view.querySelectorAll(`.group[data-group="${name}"] button`).forEach(o => o.setAttribute("aria-pressed", String(o.dataset.value === state[name])));
    const menu = view.querySelector(`.pick[data-pick="${name}"] select`);
    if (menu) menu.value = state[name];
  };
  view.querySelectorAll(".group").forEach(el => el.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    state[el.dataset.group] = b.dataset.value;
    sync(el.dataset.group);
    paint();
  }));
  view.querySelectorAll(".pick").forEach(el => el.querySelector("select").addEventListener("change", e => {
    state[el.dataset.pick] = e.target.value;
    sync(el.dataset.pick);
    paint();
  }));
  paint();
}

function paint() {
  const list = visible();
  document.getElementById("count").textContent = t().shown(list.length, state.games.length);
  document.getElementById("grid").innerHTML = list.length ? list.map(card).join("") : `<p class="empty">${esc(t().empty)}</p>`;
}

function renderGame(id) {
  const x = t();
  const view = document.getElementById("view");
  const g = state.byId.get(id);
  if (!g) {
    view.innerHTML = `<a class="back" href="#/">← ${esc(x.back)}</a><p class="empty">${esc(x.notFound)}</p>`;
    return;
  }
  document.title = `${g.name} · GamePort`;
  // A demo of this game (an app of the catalog whose parent it is), and, on a demo, the game it belongs to.
  const demos = state.games.filter(d => d.parent === g.appid && d.type === "demo");
  const parent = g.parent ? state.byId.get(g.parent) : null;
  // The demo and the full game, each on GamePort (when the catalog has it, which it only does for an app with an Android build) and on Steam (always).
  const steamBtn = (id, label) => `<a class="btn steam" href="https://store.steampowered.com/app/${id}">${STEAM_ICON}${esc(label)}</a>`;
  const gameportBtn = (id, label) => `<a class="btn" href="#/g/${id}">${GAMEPORT_ICON}${esc(label)}</a>`;
  const steamLinks = [...demos.map(d => steamBtn(d.appid, x.demoSteam)), ...(g.parent ? [steamBtn(g.parent, x.fullGameSteam)] : [])].join("");
  const gameportLinks = [...demos.map(d => gameportBtn(d.appid, x.demoGp)), ...(parent ? [gameportBtn(parent.appid, x.fullGameGp)] : [])].join("");
  const blocked = state.incompatible.get(g.appid);
  const why = blocked ? state.reasons[blocked.reason] : null;
  const blockedNote = blocked && why
    ? `<p class="warn inline lv-incompatible"><span class="warn-mark" aria-hidden="true">${ICONS.fails}</span><span><strong>${esc(x.levels.incompatible)}</strong>${state.lang === "fr" ? " : " : ": "}${esc(why.title[state.lang] ?? why.title.en)}${state.lang === "fr" ? " : " : ": "}${esc(why.text[state.lang] ?? why.text.en)}</span></p>`
    : "";
  // What players report and the devices that answered are shown once, under each kind of device, not again under "all devices"; the doubt about few answers under "all devices" when there are several kinds.
  const MAX_MODELS_SHOWN = 30;
  const kindsAnswered = DEVICES.filter(d => d !== "all" && countsFor(g.appid, d)).length;
  // The totals for all devices are not a card of their own: each kind of device has its own, and with several the overall verdict sits in the title of the section.
  const overall = kindsAnswered >= 2 ? verdict(countsFor(g.appid, "all")) : null;
  const rows = DEVICES.map(d => {
    if (d === "all") return null;
    const c = countsFor(g.appid, d);
    if (!c) return null;
    const total = c.works + c.offlineOnly + c.fails;
    if (!total) return null;
    const v = verdict(c);
    const level = v ? v.level : "none";
    const fixes = (state.summary.get(g.appid)?.fixes ?? []).filter(f => d === "all" || f.device === d);
    const fixedNote = fixes.map(f => `<span class="nums">${esc(x.fixed(f.day, f.version))}</span>`).join("");
    const reported = d === "all" ? [] : issuesFor(g.appid, d);
    const issuesNote = reported.length
      ? `<div class="issues"><div class="issues-title">${esc(x.issuesTitle)}</div><div class="issues-list">${reported.map(([code, n]) => `<span class="issue">${esc(x.issueLabels[code] ?? code)}${n > 1 ? `<b>${n}</b>` : ""}</span>`).join("")}</div></div>`
      : "";
    // One line per device that answered, folded: what each said and the problems it ticked.
    const answered = modelsFor(g.appid, d);
    const shownModels = answered.slice(0, MAX_MODELS_SHOWN);
    const modelRow = e => {
      const mv = verdict({ works: e.works, offlineOnly: e.offlineOnly, fails: e.fails });
      const level = mv ? mv.level : "none";
      const codes = Object.entries(e.issues).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      return `<div class="mrow"><span class="lvl mico lv-${level}" title="${esc(x.levels[level])}" role="img" aria-label="${esc(x.levels[level])}">${ICONS[level]}</span><span class="mname">${esc(e.label)}</span>${codes.length ? `<span class="issues-list">${codes.map(([code, n]) => `<span class="issue">${esc(x.issueLabels[code] ?? code)}${n > 1 ? `<b>${n}</b>` : ""}</span>`).join("")}</span>` : ""}</div>`;
    };
    const models = answered.length
      ? `<details class="by-model"><summary>${esc(x.modelsTitle)} (${answered.length})</summary>${shownModels.map(modelRow).join("")}${answered.length > shownModels.length ? `<div class="mmore">${esc(x.moreModels(answered.length - shownModels.length))}</div>` : ""}</details>`
      : "";
    return `<div class="row st-${level}"><span class="who">${esc(x.devices[d])}</span>
      <span class="lvl lv-${level}">${ICONS[level]}${esc(x.levels[level])}</span>
      <span class="counts">${[["works", c.works], ["offline", c.offlineOnly], ["fails", c.fails]].filter(([, n]) => n).map(([k, n]) => `<span class="tally c-${k}"><i></i>${esc(x.countNames[k])} <b>${n}</b></span>`).join("")}</span>
      ${fixedNote}
      ${issuesNote}
      ${models}
      ${v && v.unreliable && kindsAnswered < 2 ? `<span class="warn"><span class="warn-mark" aria-hidden="true">${ICONS.exclaim}</span>${esc(x.unreliable)}</span>` : ""}</div>`;
  }).filter(Boolean);
  const verdictLabel = k => x.verdicts[k] ?? k;
  const pills = [
    g.type === "demo" ? x.demo : null,
    g.vr ? "VR" : x.flat,
    g.reviewPercent != null ? x.rating(g.reviewPercent) : null,
    g.reviewCount ? x.reviews(g.reviewCount) : null,
    g.frame ? `${x.frame}: ${verdictLabel(g.frame)}` : null,
    g.deck ? `${x.deck}: ${verdictLabel(g.deck)}` : null,
  ].filter(Boolean);
  const art = g.banner || g.header || "";
  view.innerHTML = `
    <a class="back" href="#/">← ${esc(x.back)}</a>
    <section class="game-head" style="${art ? `background-image:url('${esc(art)}')` : ""}">
      <div class="head-actions">
        <div class="grp">${gameportLinks}</div>
        <div class="grp">
        ${g.store ? `<a class="btn steam" href="${esc(g.store)}">${STEAM_ICON}${esc(x.steam)}</a>` : ""}
        <a class="btn" href="https://steamdb.info/app/${g.appid}/">${STEAMDB_ICON}SteamDB</a>
        ${steamLinks}
        </div>
      </div>
      <div><h1>${esc(g.name)}</h1>
        <div class="meta">${g.developer?.length ? `<span>${esc(x.developer)}: ${esc(g.developer.join(", "))}</span>` : ""}${g.release ? `<span>${esc(x.release)}: ${esc(formatDay(g.release))}</span>` : ""}</div>
        <div class="pills">${pills.map(p => `<span class="pill">${esc(p)}</span>`).join("")}</div></div>
    </section>
    <section class="panel how"><h2>${esc(x.howTitle)}</h2><p>${esc(x.how)}</p></section>
    <div class="cols one">
      <section class="panel"><h2>${esc(x.reports)}${overall ? ` <span class="lvl lv-${overall.level}">${ICONS[overall.level]}${esc(x.levels[overall.level])}</span>` : ""}</h2>
        ${overall && overall.unreliable ? `<p class="warn inline"><span class="warn-mark" aria-hidden="true">${ICONS.exclaim}</span>${esc(x.unreliable)}</p>` : ""}
        ${blockedNote}
        ${rows.length ? `<div class="rows">${rows.join("")}</div>` : `<p>${esc(x.reportsNone)}</p>`}
        ${g.installable ? "" : `<p>${esc(x.notYet)}</p>`}
      </section>
    </div>`;
  window.scrollTo(0, 0);
}

function route() {
  const m = location.hash.match(/^#\/g\/(\d+)/);
  if (m) renderGame(Number(m[1]));
  else renderList();
}

function applyLanguage() {
  const x = t();
  document.documentElement.lang = state.lang;
  document.getElementById("link-download").textContent = x.download;
  const other = state.lang === "en" ? ["Français", "FR"] : ["English", "EN"];
  document.getElementById("lang").innerHTML = `<span class="long">${other[0]}</span><span class="short">${other[1]}</span>`;
  document.getElementById("foot-note").textContent = x.foot;
}

function pickLanguage() {
  try {
    const kept = localStorage.getItem("gameport-lang");
    if (kept === "en" || kept === "fr") return kept;
  } catch (_) { /* storage can be unavailable: the browser's language is used */ }
  return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
}

async function load() {
  const [catalog, summary, incompatible] = await Promise.all([
    fetch("data/catalog.json").then(r => r.json()),
    fetch("data/summary.json").then(r => r.json()).catch(() => ({ games: [] })),
    fetch("data/incompatible.json").then(r => r.json()).catch(() => ({ games: [] })),
  ]);
  if (!catalog.apps || !catalog.apps.length) throw new Error("the catalog is empty");
  // Everything whose Android version is published (games, demos, betas, applications): the ones that are only announced are not listed.
  state.games = catalog.apps.filter(a => a.installable);
  state.byId = new Map(catalog.apps.map(a => [a.appid, a]));
  state.summary = new Map((summary.games || []).map(g => [g.appId, g]));
  state.incompatible = new Map((incompatible.games || []).map(g => [g.appId, g]));
  state.reasons = incompatible.reasons || {};
}

document.getElementById("lang").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "fr" : "en";
  try { localStorage.setItem("gameport-lang", state.lang); } catch (_) { /* a language that is not kept is chosen again next time */ }
  applyLanguage();
  route();
});
window.addEventListener("hashchange", route);

state.lang = pickLanguage();
applyLanguage();
load().then(route).catch(() => {
  // Opened as a file, a browser refuses to read the data next to the page: the site has to be served (see the README).
  const hint = location.protocol === "file:" ? "The page has to be served, not opened as a file: run scripts/fetch_data.sh, then python3 -m http.server in the site folder." : "Try again later.";
  document.getElementById("view").innerHTML = `<p class="empty">The list could not be read. ${hint}</p>`;
});
