// Données de suivi du matraquage médiatique
// Sera alimente automatiquement par les agents OpenClaw

export type MediaCategorie = "public" | "macroniste" | "independant" | "opposition";

export type ChaineMedia = {
  nom: string;
  slug: string;
  categorie: MediaCategorie;
  description: string;
  proprietaire: string;
  lienMacronisme: string;
};

export type ApparitionMedia = {
  chaineSlug: string;
  date: string;
  emission: string;
  dureeMinutes: number;
  type: "interview" | "plateau" | "reportage" | "mention" | "debat";
  tonalite: "favorable" | "neutre" | "critique";
  resume: string;
  url?: string;
};

export type BilanHebdo = {
  semaine: string; // "2026-W13"
  dateDebut: string;
  dateFin: string;
  totalMinutes: number;
  apparitions: number;
  parCategorie: Record<MediaCategorie, number>;
  parTonalite: Record<string, number>;
};

// --- Chaînes suivies ---

export const chainesMedia: ChaineMedia[] = [
  // Medias publics
  {
    nom: "France 2",
    slug: "france-2",
    categorie: "public",
    description: "Première chaîne publique française. Journal de 20h présenté par Anne-Sophie Lapix puis Lea Salame. Principal vecteur de communication politique télévisée en France.",
    proprietaire: "France Télévisions (État)",
    lienMacronisme: "Nomination de la présidente de France Télévisions par l'Arcom, autorité dont les membres sont nommes par le pouvoir exécutif. Delphine Ernotte, présidente depuis 2015, a ete renouvelée en 2022 sous Macron.",
  },
  {
    nom: "France 5",
    slug: "france-5",
    categorie: "public",
    description: "Chaîne publique a vocation culturelle et de débat. C dans l'air (Caroline Roux), émissions politiques du week-end.",
    proprietaire: "France Télévisions (État)",
    lienMacronisme: "Meme gouvernance que France 2. C dans l'air accorde régulièrement du temps de parole aux figures macronistes et du centre-droit.",
  },
  {
    nom: "France Inter",
    slug: "france-inter",
    categorie: "public",
    description: "Première radio publique de France. Matinale la plus écoutée (7-9h). Interviews politiques quotidiennes avec les editorialistes de Radio France.",
    proprietaire: "Radio France (État)",
    lienMacronisme: "Sibyle Veil, présidente de Radio France depuis 2018, est une camarade de promotion ENA de Macron (promotion Leopold Sedar Senghor, 2004). Lien direct entre la direction de la radio publique et le réseau présidentiel.",
  },
  {
    nom: "France Info TV",
    slug: "france-info-tv",
    categorie: "public",
    description: "Chaîne d'information en continu publique. Lancee en 2016 sous le gouvernement Valls. Couverture politique 24/7.",
    proprietaire: "France Télévisions / Radio France (État)",
    lienMacronisme: "Double tutelle publique. La chaîne amplifie mécaniquement la couverture des figures gouvernementales et ex-gouvernementales comme Philippe.",
  },
  // Medias pro-Macron / centre-droit
  {
    nom: "BFM TV",
    slug: "bfm-tv",
    categorie: "macroniste",
    description: "Première chaîne d'info en continu privée. Couverture politique intensive. Decodeurs, editorialistes, invitations plateau quotidiennes.",
    proprietaire: "Altice Media (Patrick Drahi jusqu'en 2024, puis CMA CGM/Rodolphe Saade)",
    lienMacronisme: "Rachetee par CMA CGM de Rodolphe Saade — dont le responsable sécurité (Yann Le Goff) est Young Leader 2011 avec Philippe. BFM est devenue un relais du centre-droit macroniste. La convergence CMA CGM / BFM TV / réseau Philippe est un conflit d'intérêts médiatique majeur.",
  },
  {
    nom: "LCI",
    slug: "lci",
    categorie: "macroniste",
    description: "Chaîne d'info en continu du groupe TF1. Debats politiques, Darius Rochebin, Ruth Elkrief. Positionnement centre-droit.",
    proprietaire: "Bouygues (Groupe TF1)",
    lienMacronisme: "Martin Bouygues est un proche historique de Nicolas Sarkozy. TF1/LCI a évolué vers un positionnement pro-macroniste compatible avec le centre-droit de Philippe. Invitations fréquentes des figures Horizons.",
  },
  {
    nom: "CNews",
    slug: "cnews",
    categorie: "macroniste",
    description: "Chaîne d'info du groupe Canal+. Positionnement droite/centre-droit. Pascal Praud, Laurence Ferrari.",
    proprietaire: "Vivendi / Vincent Bollore",
    lienMacronisme: "Bollore a reoriente CNews vers la droite conservatrice. La chaîne donne une visibilité importante a Philippe comme alternative « raisonnable » face au RN, servant le récit macroniste du « barrage républicain ».",
  },
  {
    nom: "Europe 1",
    slug: "europe-1",
    categorie: "macroniste",
    description: "Radio generaliste historique. Matinale politique, interviews du matin.",
    proprietaire: "Vivendi / Lagardere (Vincent Bollore)",
    lienMacronisme: "Passee sous contrôle Bollore via Lagardere. La ligne éditoriale a ete réorientée vers le centre-droit, favorable aux figures comme Philippe.",
  },
  {
    nom: "Le Point",
    slug: "le-point",
    categorie: "macroniste",
    description: "Hebdomadaire d'actualite. C'est dans Le Point que Philippe a annonce sa candidature en septembre 2024.",
    proprietaire: "Francois Pinault (Artemis)",
    lienMacronisme: "Pinault est un proche du pouvoir macroniste. Le choix de Philippe d'annoncer sa candidature dans Le Point plutot que dans un media neutre est révélateur de l'alignement médiatique.",
  },
  {
    nom: "Les Échos",
    slug: "les-echos",
    categorie: "macroniste",
    description: "Quotidien économique de référence. David Barroux, Young Leader 2011 avec Philippe, y est rédacteur en chef.",
    proprietaire: "LVMH (Bernard Arnault)",
    lienMacronisme: "Arnault est le plus proche allié oligarchique de Macron. La présence de Barroux (YL 2011 avec Philippe) a la tête de la rédaction crée un canal direct entre le candidat et la ligne éditoriale du journal.",
  },
  // Medias indépendants
  {
    nom: "Mediapart",
    slug: "mediapart",
    categorie: "independant",
    description: "Media d'investigation en ligne. Fonde par Edwy Plenel. Enquêtes sur les conflits d'intérêts et le réseau Philippe.",
    proprietaire: "Independant (fonds de dotation depuis 2019)",
    lienMacronisme: "Aucun. Mediapart est l'un des rares medias sans lien capitalistique avec les oligarques proches du pouvoir. Couverture critique du macronisme et de Philippe.",
  },
  {
    nom: "Blast",
    slug: "blast",
    categorie: "independant",
    description: "Media d'investigation vidéo en ligne. A enquête sur les liens Philippe-Atos et les conflits d'intérêts.",
    proprietaire: "Independant",
    lienMacronisme: "Aucun. Blast a produit des enquêtes critiques sur le réseau Philippe, notamment le lien Atos/80 km/h.",
  },
  // Opposition
  {
    nom: "Le Media",
    slug: "le-media",
    categorie: "opposition",
    description: "Web TV proche de la gauche radicale. Couverture critique systématique du macronisme et de ses alliés.",
    proprietaire: "Independant / Associatif",
    lienMacronisme: "Aucun. Positionne comme contre-pouvoir médiatique face aux medias dominants.",
  },
];

// --- Apparitions (données seed — sera alimente par les agents) ---

export const apparitions: ApparitionMedia[] = [
  {
    chaineSlug: "france-2",
    date: "2026-03-24",
    emission: "Journal de 20h — Lea Salame",
    dureeMinutes: 18,
    type: "interview",
    tonalite: "favorable",
    resume: "Interview post-municipales. Philippe définit l'école comme sa « priorité numéro 1 ». Pas de question sur l'enquête PNF au Havre ni sur les liens CMA CGM.",
  },
  {
    chaineSlug: "france-inter",
    date: "2026-03-25",
    emission: "Matinale — 7h50",
    dureeMinutes: 12,
    type: "interview",
    tonalite: "favorable",
    resume: "Philippe présenté son calendrier présidentiel. Questions complaisantes sur « sa vision de la France ». Aucune question sur la France China Foundation.",
  },
  {
    chaineSlug: "bfm-tv",
    date: "2026-03-25",
    emission: "BFM Politique",
    dureeMinutes: 25,
    type: "plateau",
    tonalite: "favorable",
    resume: "Long plateau ou Philippe expose son programme. BFM, désormais propriété de CMA CGM (Saade), ne pose aucune question sur les liens entre le groupe et le candidat.",
  },
  {
    chaineSlug: "lci",
    date: "2026-03-22",
    emission: "Soiree électorale municipales",
    dureeMinutes: 15,
    type: "debat",
    tonalite: "neutre",
    resume: "Analyse de la réélection de Philippe au Havre. Commentaires élogieux sur sa victoire en triangulaire.",
  },
  {
    chaineSlug: "france-5",
    date: "2026-03-21",
    emission: "C dans l'air",
    dureeMinutes: 8,
    type: "mention",
    tonalite: "favorable",
    resume: "Émission consacree aux municipales. Philippe présenté comme le « candidat naturel du centre-droit pour 2027 ». Pas de contradicteur.",
  },
  {
    chaineSlug: "cnews",
    date: "2026-03-20",
    emission: "L'heure des pros",
    dureeMinutes: 10,
    type: "mention",
    tonalite: "neutre",
    resume: "Débat sur les candidatures 2027. Philippe évoque comme « le plus sérieux » face au RN. Cadre narratif du barrage républicain.",
  },
  {
    chaineSlug: "les-echos",
    date: "2026-03-24",
    emission: "Éditorial + interview",
    dureeMinutes: 0,
    type: "interview",
    tonalite: "favorable",
    resume: "Interview de 3 pages sur le programme économique de Philippe. Rédacteur en chef : David Barroux (Young Leader 2011 avec Philippe). Aucune mention du conflit d'intérêts.",
  },
  {
    chaineSlug: "le-point",
    date: "2026-03-26",
    emission: "Couverture + entretien",
    dureeMinutes: 0,
    type: "interview",
    tonalite: "favorable",
    resume: "Couverture magazine avec photo officielle. Entretien « intimiste » sur sa vision présidentielle. Le Point avait déjà accueilli l'annonce de sa candidature en sept. 2024.",
  },
  {
    chaineSlug: "europe-1",
    date: "2026-03-23",
    emission: "Matinale — 8h15",
    dureeMinutes: 10,
    type: "interview",
    tonalite: "favorable",
    resume: "Interview sur la stratégie d'union de la droite et du centre. Questions prévisibles, pas de relance sur les dossiers sensibles.",
  },
  {
    chaineSlug: "france-info-tv",
    date: "2026-03-22",
    emission: "Édition speciale municipales",
    dureeMinutes: 6,
    type: "reportage",
    tonalite: "neutre",
    resume: "Reportage sur la victoire de Philippe au Havre. Images de la celebration, interviews de partisans. Format standard chaîne info.",
  },
  {
    chaineSlug: "mediapart",
    date: "2026-03-19",
    emission: "Enquête en ligne",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "critique",
    resume: "Enquête sur le financement de la campagne municipale et les liens entre la mairie du Havre et les intérêts portuaires. Seul media a traiter le sujet.",
  },
  {
    chaineSlug: "blast",
    date: "2026-03-15",
    emission: "Video enquête",
    dureeMinutes: 35,
    type: "reportage",
    tonalite: "critique",
    resume: "Enquête vidéo sur le réseau Atos-Philippe et la mesure du 80 km/h. Conflit d'intérêts détaillé avec timeline et documents.",
  },
];

// --- Calculs ---

export function getStatsMedia() {
  const totalMinutes = apparitions
    .filter((a) => a.dureeMinutes > 0)
    .reduce((acc, a) => acc + a.dureeMinutes, 0);

  const totalApparitions = apparitions.length;

  const parCategorie = apparitions.reduce(
    (acc, a) => {
      const chaine = chainesMedia.find((c) => c.slug === a.chaineSlug);
      if (chaine) {
        acc[chaine.categorie] = (acc[chaine.categorie] || 0) + 1;
      }
      return acc;
    },
    {} as Record<MediaCategorie, number>
  );

  const minutesParCategorie = apparitions.reduce(
    (acc, a) => {
      const chaine = chainesMedia.find((c) => c.slug === a.chaineSlug);
      if (chaine) {
        acc[chaine.categorie] = (acc[chaine.categorie] || 0) + a.dureeMinutes;
      }
      return acc;
    },
    {} as Record<MediaCategorie, number>
  );

  const parTonalite = apparitions.reduce(
    (acc, a) => {
      acc[a.tonalite] = (acc[a.tonalite] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const parChaine = apparitions.reduce(
    (acc, a) => {
      acc[a.chaineSlug] = (acc[a.chaineSlug] || 0) + a.dureeMinutes;
      return acc;
    },
    {} as Record<string, number>
  );

  return {
    totalMinutes,
    totalApparitions,
    parCategorie,
    minutesParCategorie,
    parTonalite,
    parChaine,
  };
}
