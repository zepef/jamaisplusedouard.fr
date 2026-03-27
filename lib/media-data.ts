// Donnees de suivi du matraquage mediatique
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

// --- Chaines suivies ---

export const chainesMedia: ChaineMedia[] = [
  // Medias publics
  {
    nom: "France 2",
    slug: "france-2",
    categorie: "public",
    description: "Premiere chaine publique francaise. Journal de 20h presente par Anne-Sophie Lapix puis Lea Salame. Principal vecteur de communication politique televisee en France.",
    proprietaire: "France Televisions (Etat)",
    lienMacronisme: "Nomination de la presidente de France Televisions par l'Arcom, autorite dont les membres sont nommes par le pouvoir executif. Delphine Ernotte, presidente depuis 2015, a ete renouvelee en 2022 sous Macron.",
  },
  {
    nom: "France 5",
    slug: "france-5",
    categorie: "public",
    description: "Chaine publique a vocation culturelle et de debat. C dans l'air (Caroline Roux), emissions politiques du week-end.",
    proprietaire: "France Televisions (Etat)",
    lienMacronisme: "Meme gouvernance que France 2. C dans l'air accorde regulierement du temps de parole aux figures macronistes et du centre-droit.",
  },
  {
    nom: "France Inter",
    slug: "france-inter",
    categorie: "public",
    description: "Premiere radio publique de France. Matinale la plus ecoutee (7-9h). Interviews politiques quotidiennes avec les editorialistes de Radio France.",
    proprietaire: "Radio France (Etat)",
    lienMacronisme: "Sibyle Veil, presidente de Radio France depuis 2018, est une camarade de promotion ENA de Macron (promotion Leopold Sedar Senghor, 2004). Lien direct entre la direction de la radio publique et le reseau presidentiel.",
  },
  {
    nom: "France Info TV",
    slug: "france-info-tv",
    categorie: "public",
    description: "Chaine d'information en continu publique. Lancee en 2016 sous le gouvernement Valls. Couverture politique 24/7.",
    proprietaire: "France Televisions / Radio France (Etat)",
    lienMacronisme: "Double tutelle publique. La chaine amplifie mecaniquement la couverture des figures gouvernementales et ex-gouvernementales comme Philippe.",
  },
  // Medias pro-Macron / centre-droit
  {
    nom: "BFM TV",
    slug: "bfm-tv",
    categorie: "macroniste",
    description: "Premiere chaine d'info en continu privee. Couverture politique intensive. Decodeurs, editorialistes, invitations plateau quotidiennes.",
    proprietaire: "Altice Media (Patrick Drahi jusqu'en 2024, puis CMA CGM/Rodolphe Saade)",
    lienMacronisme: "Rachetee par CMA CGM de Rodolphe Saade — dont le responsable securite (Yann Le Goff) est Young Leader 2011 avec Philippe. BFM est devenue un relais du centre-droit macroniste. La convergence CMA CGM / BFM TV / reseau Philippe est un conflit d'interets mediatique majeur.",
  },
  {
    nom: "LCI",
    slug: "lci",
    categorie: "macroniste",
    description: "Chaine d'info en continu du groupe TF1. Debats politiques, Darius Rochebin, Ruth Elkrief. Positionnement centre-droit.",
    proprietaire: "Bouygues (Groupe TF1)",
    lienMacronisme: "Martin Bouygues est un proche historique de Nicolas Sarkozy. TF1/LCI a evolue vers un positionnement pro-macroniste compatible avec le centre-droit de Philippe. Invitations frequentes des figures Horizons.",
  },
  {
    nom: "CNews",
    slug: "cnews",
    categorie: "macroniste",
    description: "Chaine d'info du groupe Canal+. Positionnement droite/centre-droit. Pascal Praud, Laurence Ferrari.",
    proprietaire: "Vivendi / Vincent Bollore",
    lienMacronisme: "Bollore a reoriente CNews vers la droite conservatrice. La chaine donne une visibilite importante a Philippe comme alternative « raisonnable » face au RN, servant le recit macroniste du « barrage republicain ».",
  },
  {
    nom: "Europe 1",
    slug: "europe-1",
    categorie: "macroniste",
    description: "Radio generaliste historique. Matinale politique, interviews du matin.",
    proprietaire: "Vivendi / Lagardere (Vincent Bollore)",
    lienMacronisme: "Passee sous controle Bollore via Lagardere. La ligne editoriale a ete reorientee vers le centre-droit, favorable aux figures comme Philippe.",
  },
  {
    nom: "Le Point",
    slug: "le-point",
    categorie: "macroniste",
    description: "Hebdomadaire d'actualite. C'est dans Le Point que Philippe a annonce sa candidature en septembre 2024.",
    proprietaire: "Francois Pinault (Artemis)",
    lienMacronisme: "Pinault est un proche du pouvoir macroniste. Le choix de Philippe d'annoncer sa candidature dans Le Point plutot que dans un media neutre est revelateur de l'alignement mediatique.",
  },
  {
    nom: "Les Echos",
    slug: "les-echos",
    categorie: "macroniste",
    description: "Quotidien economique de reference. David Barroux, Young Leader 2011 avec Philippe, y est redacteur en chef.",
    proprietaire: "LVMH (Bernard Arnault)",
    lienMacronisme: "Arnault est le plus proche allie oligarchique de Macron. La presence de Barroux (YL 2011 avec Philippe) a la tete de la redaction cree un canal direct entre le candidat et la ligne editoriale du journal.",
  },
  // Medias independants
  {
    nom: "Mediapart",
    slug: "mediapart",
    categorie: "independant",
    description: "Media d'investigation en ligne. Fonde par Edwy Plenel. Enquetes sur les conflits d'interets et le reseau Philippe.",
    proprietaire: "Independant (fonds de dotation depuis 2019)",
    lienMacronisme: "Aucun. Mediapart est l'un des rares medias sans lien capitalistique avec les oligarques proches du pouvoir. Couverture critique du macronisme et de Philippe.",
  },
  {
    nom: "Blast",
    slug: "blast",
    categorie: "independant",
    description: "Media d'investigation video en ligne. A enquete sur les liens Philippe-Atos et les conflits d'interets.",
    proprietaire: "Independant",
    lienMacronisme: "Aucun. Blast a produit des enquetes critiques sur le reseau Philippe, notamment le lien Atos/80 km/h.",
  },
  // Opposition
  {
    nom: "Le Media",
    slug: "le-media",
    categorie: "opposition",
    description: "Web TV proche de la gauche radicale. Couverture critique systematique du macronisme et de ses allies.",
    proprietaire: "Independant / Associatif",
    lienMacronisme: "Aucun. Positionne comme contre-pouvoir mediatique face aux medias dominants.",
  },
];

// --- Apparitions (donnees seed — sera alimente par les agents) ---

export const apparitions: ApparitionMedia[] = [
  {
    chaineSlug: "france-2",
    date: "2026-03-24",
    emission: "Journal de 20h — Lea Salame",
    dureeMinutes: 18,
    type: "interview",
    tonalite: "favorable",
    resume: "Interview post-municipales. Philippe definit l'ecole comme sa « priorite numero 1 ». Pas de question sur l'enquete PNF au Havre ni sur les liens CMA CGM.",
  },
  {
    chaineSlug: "france-inter",
    date: "2026-03-25",
    emission: "Matinale — 7h50",
    dureeMinutes: 12,
    type: "interview",
    tonalite: "favorable",
    resume: "Philippe presente son calendrier presidentiel. Questions complaisantes sur « sa vision de la France ». Aucune question sur la France China Foundation.",
  },
  {
    chaineSlug: "bfm-tv",
    date: "2026-03-25",
    emission: "BFM Politique",
    dureeMinutes: 25,
    type: "plateau",
    tonalite: "favorable",
    resume: "Long plateau ou Philippe expose son programme. BFM, desormais propriete de CMA CGM (Saade), ne pose aucune question sur les liens entre le groupe et le candidat.",
  },
  {
    chaineSlug: "lci",
    date: "2026-03-22",
    emission: "Soiree electorale municipales",
    dureeMinutes: 15,
    type: "debat",
    tonalite: "neutre",
    resume: "Analyse de la reelection de Philippe au Havre. Commentaires elogieux sur sa victoire en triangulaire.",
  },
  {
    chaineSlug: "france-5",
    date: "2026-03-21",
    emission: "C dans l'air",
    dureeMinutes: 8,
    type: "mention",
    tonalite: "favorable",
    resume: "Emission consacree aux municipales. Philippe presente comme le « candidat naturel du centre-droit pour 2027 ». Pas de contradicteur.",
  },
  {
    chaineSlug: "cnews",
    date: "2026-03-20",
    emission: "L'heure des pros",
    dureeMinutes: 10,
    type: "mention",
    tonalite: "neutre",
    resume: "Debat sur les candidatures 2027. Philippe evoque comme « le plus serieux » face au RN. Cadre narratif du barrage republicain.",
  },
  {
    chaineSlug: "les-echos",
    date: "2026-03-24",
    emission: "Editorial + interview",
    dureeMinutes: 0,
    type: "interview",
    tonalite: "favorable",
    resume: "Interview de 3 pages sur le programme economique de Philippe. Redacteur en chef : David Barroux (Young Leader 2011 avec Philippe). Aucune mention du conflit d'interets.",
  },
  {
    chaineSlug: "le-point",
    date: "2026-03-26",
    emission: "Couverture + entretien",
    dureeMinutes: 0,
    type: "interview",
    tonalite: "favorable",
    resume: "Couverture magazine avec photo officielle. Entretien « intimiste » sur sa vision presidentielle. Le Point avait deja accueilli l'annonce de sa candidature en sept. 2024.",
  },
  {
    chaineSlug: "europe-1",
    date: "2026-03-23",
    emission: "Matinale — 8h15",
    dureeMinutes: 10,
    type: "interview",
    tonalite: "favorable",
    resume: "Interview sur la strategie d'union de la droite et du centre. Questions previsibles, pas de relance sur les dossiers sensibles.",
  },
  {
    chaineSlug: "france-info-tv",
    date: "2026-03-22",
    emission: "Edition speciale municipales",
    dureeMinutes: 6,
    type: "reportage",
    tonalite: "neutre",
    resume: "Reportage sur la victoire de Philippe au Havre. Images de la celebration, interviews de partisans. Format standard chaine info.",
  },
  {
    chaineSlug: "mediapart",
    date: "2026-03-19",
    emission: "Enquete en ligne",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "critique",
    resume: "Enquete sur le financement de la campagne municipale et les liens entre la mairie du Havre et les interets portuaires. Seul media a traiter le sujet.",
  },
  {
    chaineSlug: "blast",
    date: "2026-03-15",
    emission: "Video enquete",
    dureeMinutes: 35,
    type: "reportage",
    tonalite: "critique",
    resume: "Enquete video sur le reseau Atos-Philippe et la mesure du 80 km/h. Conflit d'interets detaille avec timeline et documents.",
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
