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
    lienMacronisme: "Nomination de la présidente de France Télévisions par l'Arcom, autorité dont les membres sont nommés par le pouvoir exécutif. Delphine Ernotte, présidente depuis 2015, a été renouvelée en 2022 sous Macron.",
  },
  {
    nom: "France 5",
    slug: "france-5",
    categorie: "public",
    description: "Chaîne publique a vocation culturelle et de débat. C dans l'air (Caroline Roux), émissions politiques du week-end.",
    proprietaire: "France Télévisions (État)",
    lienMacronisme: "Même gouvernance que France 2. C dans l'air accorde régulièrement du temps de parole aux figures macronistes et du centre-droit.",
  },
  {
    nom: "France Inter",
    slug: "france-inter",
    categorie: "public",
    description: "Première radio publique de France. Matinale la plus écoutée (7-9h). Interviews politiques quotidiennes avec les éditorialistes de Radio France.",
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
    description: "Première chaîne d'info en continu privée. Couverture politique intensive. Décodeurs, éditorialistes, invitations plateau quotidiennes.",
    proprietaire: "Altice Media (Patrick Drahi jusqu'en 2024, puis CMA CGM/Rodolphe Saadé)",
    lienMacronisme: "Rachetee par CMA CGM de Rodolphe Saadé — dont le responsable sécurité (Yann Le Goff) est Young Leader 2011 avec Philippe. BFM est devenue un relais du centre-droit macroniste. La convergence CMA CGM / BFM TV / réseau Philippe est un conflit d'intérêts médiatique majeur.",
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
    categorie: "opposition",
    description: "Chaîne d'info Vivendi/Bolloré. Droite dure. Plateforme d'Éric Zemmour en 2021-2022. Pascal Praud, Laurence Ferrari. Sanctionnée par l'Arcom pour manquements au pluralisme.",
    proprietaire: "Vivendi / Vincent Bolloré",
    lienMacronisme: "Adversaire structurel du macronisme (Bolloré, droite dure). Non favorable à Philippe : le reproche de l'avoir cité comme « alternative raisonnable » face au RN est un positionnement tactique de la chaîne, pas un soutien. Le boycott du FIC 2023 par les ministères de l'Intérieur et des Armées visait d'ailleurs le groupe Avisa/Forward Global — pas CNews. Correction bulletin 2 avril 2026 : CNews ≠ macroniste.",
  },
  {
    nom: "Europe 1",
    slug: "europe-1",
    categorie: "opposition",
    description: "Radio généraliste historique, passée sous contrôle Bolloré via Lagardère. Matinale politique droite conservatrice.",
    proprietaire: "Vivendi / Lagardère (Vincent Bolloré)",
    lienMacronisme: "Adversaire structurel : Bolloré est en opposition avec la Macronie. Ligne éditoriale droite conservatrice, non alignée avec le centre-libéral macroniste. La reprise de certains sujets favorables à Philippe reflète l'opposition commune au candidat Bardella/RN, non un soutien au macronisme. Correction bulletin 2 avril 2026 : Europe 1 ≠ macroniste.",
  },
  {
    nom: "Le Point",
    slug: "le-point",
    categorie: "macroniste",
    description: "Hebdomadaire d'actualité. C'est dans Le Point que Philippe a annonce sa candidature en septembre 2024.",
    proprietaire: "Francois Pinault (Artemis)",
    lienMacronisme: "Pinault est un proche du pouvoir macroniste. Le choix de Philippe d'annoncer sa candidature dans Le Point plutôt que dans un média neutre est révélateur de l'alignement médiatique.",
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
    description: "Média d'investigation en ligne. Fondé par Edwy Plenel en 2008. Enquêtes sur les conflits d'intérêts, le réseau Philippe, Kohler/MSC, Avisa Partners. Classé à gauche. Financement : 95 % par abonnements (~220 000 abonnés), sans publicité. Capital détenu depuis 2019 par le Fonds pour une presse libre (FPL), organisme à but non lucratif. Ne perçoit plus de subventions publiques depuis 2010 (avait reçu 200 000 € en 2009). Investisseurs fondateurs : Xavier Niel (200 000 €), Maurice Lévy (Publicis), Stéphane Fouks (Euro RSCG).",
    proprietaire: "Fonds pour une presse libre (FPL) — à but non lucratif (depuis 2019)",
    lienMacronisme: "Aucun lien capitalistique. Couverture critique documentée : révélations Kohler/MSC (2018), enquêtes Avisa Partners/Forward Global (2022-2023), cabinet Philippe à Matignon. Indépendance actionnariale vérifiée, sans subventions publiques depuis 2010.",
  },
  {
    nom: "Blast",
    slug: "blast",
    categorie: "independant",
    description: "Média d'investigation vidéo en ligne, fondé en 2021 par Denis Robert. Enquêtes sur les liens Philippe-Atos (80 km/h), Kohler, Forward Global/Avisa. Classé à gauche. Financement : crowdfunding (620 000 € levés en un mois à la création), abonnements et dons. A reçu 803 000 € d'aide publique au pluralisme de la presse en ligne (2021-2022, source Acrimed/ministère de la Culture). A refusé le mécénat privé après polémique Vinciguerra (2021). Cofondateurs : David Dufresne, Élise Van Beneden (présidente Anticor), Salomé Saqué.",
    proprietaire: "Denis Robert (entreprise de presse à but non lucratif)",
    lienMacronisme: "Aucun lien capitalistique. Couverture critique : pantouflage Atos/Philippe, conflit d'intérêts Ferracci/Secafi, réseau BlackRock. Financement public (803 k€ aide pluralisme 2021-2022) à noter — comparable à de nombreux médias en ligne.",
  },
  // Centre-droit / opposition droite
  {
    nom: "Le Figaro",
    slug: "le-figaro",
    categorie: "opposition",
    description: "Quotidien de référence de la droite française. Fondé en 1826. Propriété du Groupe Dassault (Serge Dassault puis son fils Olivier). Centre-droit à droite classique. Position variable sur Philippe selon les sujets : Retailleau (rival de droite) y est souvent mis en valeur.",
    proprietaire: "Groupe Dassault (famille Dassault — industrie de défense)",
    lienMacronisme: "Variable (centre-droit). Ni pro-Macron ni anti-Macron systématique. A repris les sondages favorables à Philippe dans un cadre de concurrence avec le RN. Distinct de BFMTV/CMA CGM qui sont structurellement pro-Philippe.",
  },
  // Opposition
  {
    nom: "Le Media",
    slug: "le-media",
    categorie: "opposition",
    description: "Web TV proche de la gauche radicale. Couverture critique systématique du macronisme et de ses alliés.",
    proprietaire: "Independant / Associatif",
    lienMacronisme: "Aucun. Positionné comme contre-pouvoir médiatique face aux medias dominants.",
  },
  // Droite identitaire / souverainiste — sources critiques documentées
  {
    nom: "Polémia",
    slug: "polemia",
    categorie: "opposition",
    description: "Site de réflexion politique droite identitaire, fondé par Jean-Yves Le Gallou (Fondation Polémia). Couvre les connexions sino-françaises, FCF, réseaux d'influence. Utilisé comme source sur les listes FCF et l'influence chinoise.",
    proprietaire: "Fondation Polémia (Jean-Yves Le Gallou)",
    lienMacronisme: "Adversaire : critique le macronisme, la FCF et les connexions chinoises du réseau Philippe. Sa convergence factuelle avec Mediapart et Blast sur les listes FCF renforce la fiabilité de ces données malgré des orientations politiques opposées.",
  },
  {
    nom: "Révolution Permanente",
    slug: "revolution-permanente",
    categorie: "opposition",
    description: "Média de la gauche radicale (courant NPA/RP). Couvre la répression des Gilets jaunes, le bilan Nuñez, la politique sécuritaire de Philippe. Classé extrême gauche.",
    proprietaire: "Courant NPA / Révolution Permanente",
    lienMacronisme: "Adversaire : critique systématique du macronisme, des réformes Philippe, de la répression des GJ. Sa convergence factuelle avec d'autres sources sur les bilans des répressions (GJ, Sainte-Soline) renforce la fiabilité des données malgré l'orientation partisane.",
  },
  {
    nom: "Boulevard Voltaire",
    slug: "boulevard-voltaire",
    categorie: "opposition",
    description: "Site d'information droite souverainiste, fondé par Robert Ménard (maire de Béziers). Couvre les conflits d'intérêts Atos/Philippe, le matraquage médiatique. Financement : dons et publicité.",
    proprietaire: "Robert Ménard (indépendant)",
    lienMacronisme: "Adversaire souverainiste : critique le pantouflage Philippe/Atos, la collusion BlackRock. Sa convergence factuelle avec Blast et Mediapart sur certains sujets (Atos, matraquage CMA CGM) renforce la fiabilité malgré l'orientation politique opposée.",
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
    resume: "Long plateau ou Philippe expose son programme. BFM, désormais propriété de CMA CGM (Saadé), ne pose aucune question sur les liens entre le groupe et le candidat.",
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
