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
    lienMacronisme: "Nomination de la présidente de France Télévisions par l'Arcom, autorité dont les membres sont nommés par le pouvoir exécutif. Delphine Ernotte, présidente depuis 2015, a été reconduite une première fois en 2020 puis, le 14 mai 2025, par l'Arcom pour un 3e mandat (jusqu'en 2030) — sous Macron.",
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
    proprietaire: "CMA CGM / Rodolphe Saadé (rachat d'Altice Media à Patrick Drahi finalisé le 2 juillet 2024)",
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
    description: "Chaîne d'info du groupe Canal+ (ex-Vivendi), contrôlée par Bolloré. Droite dure. Plateforme d'Éric Zemmour en 2021-2022. Pascal Praud, Laurence Ferrari. Sanctionnée par l'Arcom pour manquements au pluralisme.",
    proprietaire: "Groupe Canal+ / Vincent Bolloré (depuis la scission de Vivendi en décembre 2024)",
    lienMacronisme: "Adversaire structurel du macronisme (Bolloré, droite dure). Non favorable à Philippe : le reproche de l'avoir cité comme « alternative raisonnable » face au RN est un positionnement tactique de la chaîne, pas un soutien. Le boycott du FIC 2023 par les ministères de l'Intérieur et des Armées visait d'ailleurs le groupe Avisa/Forward Global — pas CNews. Correction bulletin 2 avril 2026 : CNews ≠ macroniste.",
  },
  {
    nom: "Europe 1",
    slug: "europe-1",
    categorie: "opposition",
    description: "Radio généraliste historique, passée sous contrôle Bolloré via Lagardère. Matinale politique droite conservatrice.",
    proprietaire: "Lagardère / Louis Hachette Group — Vincent Bolloré (depuis la scission de Vivendi en décembre 2024)",
    lienMacronisme: "Adversaire structurel : Bolloré est en opposition avec la Macronie. Ligne éditoriale droite conservatrice, non alignée avec le centre-libéral macroniste. La reprise de certains sujets favorables à Philippe reflète l'opposition commune au candidat Bardella/RN, non un soutien au macronisme. Correction bulletin 2 avril 2026 : Europe 1 ≠ macroniste.",
  },
  {
    nom: "Le Point",
    slug: "le-point",
    categorie: "macroniste",
    description: "Hebdomadaire d'actualité. C'est dans Le Point que Philippe a annonce sa candidature en septembre 2024.",
    proprietaire: "Artémis — famille Pinault (François et François-Henri Pinault, holding de Kering)",
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
    description: "Quotidien de référence de la droite française. Fondé en 1826. Propriété du Groupe Industriel Marcel Dassault (GIMD). Après les décès de Serge Dassault (2018) et de son fils Olivier (accident d'hélicoptère, 7 mars 2021), le contrôle reste familial. Centre-droit à droite classique. Position variable sur Philippe : Retailleau (rival de droite) y est souvent mis en valeur.",
    proprietaire: "Groupe Industriel Marcel Dassault (GIMD) — famille Dassault, industrie de défense",
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
  // Quotidiens et magazines ajoutés (veille avril-juin 2026)
  {
    nom: "Le Monde",
    slug: "le-monde",
    categorie: "independant",
    description: "Quotidien de référence du soir. A révélé, en mai 2026, les réquisitions du Parquet national financier aux fins d'ouverture d'une information judiciaire visant Philippe au Havre. Dossier « CMA CGM, une entreprise au cœur du pouvoir ».",
    proprietaire: "Groupe Le Monde (Xavier Niel, Daniel Křetínský, Matthieu Pigasse)",
    lienMacronisme: "Ambivalent : l'actionnaire de référence Xavier Niel est un proche d'Emmanuel Macron, mais la rédaction conserve une indépendance documentée et a sorti la révélation des réquisitions du PNF contre Philippe. Couverture factuelle à charge sur le dossier du Havre et l'écosystème CMA CGM.",
  },
  {
    nom: "Le Parisien",
    slug: "le-parisien",
    categorie: "macroniste",
    description: "Quotidien populaire à forte audience nationale (édition Aujourd'hui en France). Couverture politique grand public. A traité les soupçons de détournement de fonds publics visant Philippe.",
    proprietaire: "LVMH (Bernard Arnault)",
    lienMacronisme: "Propriété de Bernard Arnault, premier allié oligarchique de Macron — même actionnaire que Les Échos et désormais L'Opinion. Alignement structurel avec le centre-libéral macroniste compatible avec Philippe.",
  },
  {
    nom: "L'Opinion",
    slug: "l-opinion",
    categorie: "macroniste",
    description: "Quotidien libéral et pro-business fondé par Nicolas Beytout en 2013. Ligne éditoriale favorable aux réformes économiques de marché, compatible avec le positionnement de Philippe.",
    proprietaire: "LVMH (Bernard Arnault) — rachat de Bey Médias finalisé en juillet 2025",
    lienMacronisme: "Historiquement financé par Bernard Arnault et la famille Bettencourt, le titre est passé en juillet 2025 dans le giron de LVMH (Arnault). Ligne libérale pro-réformes alignée avec l'offre politique de Philippe.",
  },
  {
    nom: "La Tribune",
    slug: "la-tribune",
    categorie: "macroniste",
    description: "Quotidien économique et financier (et La Tribune Dimanche). Relaie le programme budgétaire de Philippe (règle d'or, référendum). Racheté à 100 % par CMA CGM en juillet 2023.",
    proprietaire: "CMA CGM / CMA Média — Rodolphe Saadé (via le groupe Hima)",
    lienMacronisme: "Propriété de CMA CGM (Rodolphe Saadé), exactement comme BFM TV et RMC. Le responsable sécurité de CMA CGM (Yann Le Goff) est Young Leader 2011 avec Philippe. La Tribune prolonge la convergence CMA CGM / médias / réseau Philippe : conflit d'intérêts médiatique identique à celui de BFM.",
  },
  {
    nom: "Ouest-France",
    slug: "ouest-france",
    categorie: "independant",
    description: "Premier quotidien français en diffusion. Forte présence régionale, dont la Normandie et Le Havre. A couvert l'ouverture de l'enquête du juge d'instruction sur Philippe.",
    proprietaire: "Association pour le soutien des principes de la démocratie humaniste (SIPA — Ouest-France), à but non lucratif",
    lienMacronisme: "Aucun lien capitalistique macroniste : propriété d'une association à but non lucratif. Couverture régionale factuelle, y compris des soupçons de détournement de fonds publics au Havre.",
  },
  {
    nom: "20 Minutes",
    slug: "20-minutes",
    categorie: "independant",
    description: "Quotidien gratuit et média en ligne à très large audience. A relayé la désignation d'un juge d'instruction visant Philippe.",
    proprietaire: "Groupe Rossel (belge) — passage à 100 % en 2026, après le retrait de SIPA-Ouest-France",
    lienMacronisme: "Aucun lien avec la Macronie : capital détenu par le groupe de presse belge Rossel. Traitement factuel et grand public, sans alignement éditorial sur Philippe.",
  },
  {
    nom: "La Dépêche du Midi",
    slug: "la-depeche",
    categorie: "independant",
    description: "Grand quotidien régional du Sud-Ouest. Publie le baromètre Odoxa qui a acté le décrochage de Philippe dans les intentions de vote après l'annonce de l'enquête.",
    proprietaire: "Groupe La Dépêche — famille Baylet (Jean-Michel Baylet, PRG)",
    lienMacronisme: "Pas de lien capitalistique macroniste : groupe contrôlé par la famille Baylet, marquée au Parti radical de gauche. Couverture des sondages et du dossier judiciaire sans complaisance particulière envers Philippe.",
  },
  // Titres identifiés par la collecte Hermès du 11 juin 2026
  {
    nom: "Le Nouvel Obs",
    slug: "le-nouvel-obs",
    categorie: "independant",
    description: "Hebdomadaire d'actualité de centre-gauche (ex-Nouvel Observateur). Couverture politique et enquêtes. Identifié par la collecte de veille comme source mentionnant Philippe.",
    proprietaire: "Groupe Le Monde (Xavier Niel, Daniel Křetínský, Matthieu Pigasse)",
    lienMacronisme: "Même actionnariat que Le Monde : l'actionnaire de référence Xavier Niel est un proche de Macron, mais la rédaction conserve une indépendance documentée. Ligne de centre-gauche, pas d'alignement éditorial sur Philippe.",
  },
  {
    nom: "RTL",
    slug: "rtl",
    categorie: "independant",
    description: "Première radio commerciale généraliste de France. Matinale et interviews politiques à large audience. Identifiée par la collecte de veille comme source mentionnant Philippe.",
    proprietaire: "Groupe M6 (Métropole Télévision) — contrôlé par Bertelsmann / RTL Group (48,3 %)",
    lienMacronisme: "Aucun lien capitalistique macroniste : RTL est passée sous contrôle du Groupe M6 (radios RTL acquises en 2022), lui-même détenu par le conglomérat allemand Bertelsmann. Radio commerciale grand public, sans alignement structurel sur la Macronie.",
  },
  {
    nom: "La Gazette France",
    slug: "la-gazette-france",
    categorie: "independant",
    description: "Presse économique régionale et journal d'annonces légales (éditions Nord-Pas-de-Calais et Picardie, basé à Lille). Couvre l'actualité économique des territoires. Identifiée par la collecte de veille comme source mentionnant Philippe.",
    proprietaire: "Société La Gazette France (Lille) — éditeur indépendant régional",
    lienMacronisme: "Aucun lien avec la Macronie : éditeur régional indépendant, centré sur l'information économique locale et les annonces légales. Mention de Philippe à qualifier (contexte économique/territorial).",
  },
];

// --- Apparitions (données seed — sera alimente par les agents) ---

export const apparitions: ApparitionMedia[] = [
  // --- Veille avril-juin 2026 (depuis l'implémentation du Matraquage, 27 mars 2026) ---
  {
    chaineSlug: "le-monde",
    date: "2026-05-13",
    emission: "Dossier — CMA CGM, une entreprise au cœur du pouvoir",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "critique",
    resume: "Enquête au long cours sur l'emprise de CMA CGM (Saadé) dans les médias et le pouvoir, dont BFM, RMC et La Tribune. Mise en perspective des liens avec l'écosystème politique proche de Philippe.",
    url: "https://www.lemonde.fr/cma-cgm-une-entreprise-au-c-ur-du-pouvoir/",
  },
  {
    chaineSlug: "le-monde",
    date: "2026-05-21",
    emission: "Affaire du Havre — le PNF demande l'ouverture d'une information judiciaire",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "critique",
    resume: "Le Monde révèle que le Parquet national financier a pris, le 7 mai, des réquisitions aux fins d'ouverture d'une information judiciaire visant Philippe. Détournement de fonds publics, favoritisme, prise illégale d'intérêt et concussion.",
    url: "https://www.lemonde.fr/politique/article/2026/05/19/affaire-edouard-philippe/",
  },
  {
    chaineSlug: "20-minutes",
    date: "2026-05-19",
    emission: "Justice — un juge d'instruction désigné",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "neutre",
    resume: "Un juge d'instruction va enquêter sur Philippe, candidat à la présidentielle 2027, pour détournement de fonds publics, favoritisme, prise illégale d'intérêt et concussion au Havre.",
    url: "https://www.20minutes.fr/justice/4224337-20260519-juge-instruction-edouard-philippe/",
  },
  {
    chaineSlug: "ouest-france",
    date: "2026-05-20",
    emission: "Soupçon de détournement de fonds publics — enquête ouverte",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "neutre",
    resume: "Un juge d'instruction va enquêter sur Philippe pour détournement de fonds publics, favoritisme, prise illégale d'intérêt et concussion. Rappel de l'origine : la lanceuse d'alerte de la mairie du Havre.",
    url: "https://www.ouest-france.fr/politique/edouard-philippe/",
  },
  {
    chaineSlug: "le-parisien",
    date: "2026-05-28",
    emission: "Soupçons de détournement de fonds publics au Havre",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "neutre",
    resume: "L'ex-Premier ministre est soupçonné de détournement de fonds publics, favoritisme, prise illégale d'intérêt et concussion au Havre, où il est maire. Couverture grand public du dossier judiciaire.",
    url: "https://www.leparisien.fr/faits-divers/",
  },
  {
    chaineSlug: "l-opinion",
    date: "2026-05-20",
    emission: "Philippe visé par une enquête pour favoritisme",
    dureeMinutes: 0,
    type: "mention",
    tonalite: "neutre",
    resume: "L'Opinion relaie l'ouverture de l'enquête confiée à un juge d'instruction. Traitement bref, centré sur les implications pour la candidature.",
    url: "https://www.lopinion.fr/politique/",
  },
  {
    chaineSlug: "la-tribune",
    date: "2026-05-29",
    emission: "Budget — Philippe veut une « règle d'or » par référendum",
    dureeMinutes: 0,
    type: "interview",
    tonalite: "favorable",
    resume: "La Tribune (propriété de CMA CGM/Saadé) relaie largement le programme budgétaire de Philippe : un référendum pour inscrire une règle d'or dans la Constitution. Mise en valeur du projet, sans rappel du conflit d'intérêts capitalistique du titre.",
    url: "https://www.latribune.fr/article/economie/finances-publiques/",
  },
  {
    chaineSlug: "la-depeche",
    date: "2026-05-26",
    emission: "Baromètre Odoxa — La Dépêche / Public Sénat",
    dureeMinutes: 0,
    type: "mention",
    tonalite: "neutre",
    resume: "« Coup de tonnerre » : après l'annonce de l'enquête, Philippe décroche dans le baromètre Odoxa. Bardella domine, Mélenchon revient fort. Fragilisation mesurée de la candidature Horizons.",
    url: "https://www.ladepeche.fr/2026/05/26/presidentielle-2027-sondage-odoxa/",
  },
  {
    chaineSlug: "france-info-tv",
    date: "2026-04-11",
    emission: "Le brief politique",
    dureeMinutes: 5,
    type: "mention",
    tonalite: "neutre",
    resume: "Trois semaines après sa réélection au Havre, Philippe « donne le sentiment de ne pas profiter du moment » sur le chemin de la présidentielle. Analyse de sa temporisation stratégique.",
    url: "https://www.franceinfo.fr/replay-radio/le-brief-politique/",
  },
  {
    chaineSlug: "le-figaro",
    date: "2026-05-04",
    emission: "Sondage Toluna Harris Interactive — premier tour 2027",
    dureeMinutes: 0,
    type: "mention",
    tonalite: "neutre",
    resume: "Le RN (Bardella/Le Pen) largement en tête dans les quatre configurations testées. Philippe devance Attal parmi les candidats possibles du « bloc central » dans tous les scénarios.",
    url: "https://www.lefigaro.fr/politique/",
  },
  {
    chaineSlug: "bfm-tv",
    date: "2026-05-07",
    emission: "Présidentielle 2027 — cotes de popularité",
    dureeMinutes: 0,
    type: "mention",
    tonalite: "neutre",
    resume: "Étude du 6 mai : Bardella (37 %) et Le Pen (34 %) bénéficient des images les plus positives et prennent de l'avance sur Philippe. Pas de mise en perspective des liens CMA CGM/BFM.",
    url: "https://www.bfmtv.com/politique/elections/presidentielle/",
  },
  {
    chaineSlug: "bfm-tv",
    date: "2026-05-19",
    emission: "BFMTV Police-Justice — information judiciaire PNF",
    dureeMinutes: 8,
    type: "reportage",
    tonalite: "neutre",
    resume: "BFM couvre l'ouverture d'une information judiciaire visant Philippe (détournement de fonds publics, favoritisme, prise illégale d'intérêt, concussion) suite aux réquisitions du PNF du 7 mai. Traitement factuel, sans rappel des liens entre le candidat et le propriétaire de la chaîne (CMA CGM).",
    url: "https://www.bfmtv.com/police-justice/",
  },
  {
    chaineSlug: "france-inter",
    date: "2026-05-19",
    emission: "L'info de France Inter — 17h",
    dureeMinutes: 4,
    type: "reportage",
    tonalite: "neutre",
    resume: "Un juge d'instruction va enquêter sur Philippe au Havre. Reprise des réquisitions du PNF et rappel de la plainte de la lanceuse d'alerte de septembre 2023.",
    url: "https://www.radiofrance.fr/franceinter/",
  },
  {
    chaineSlug: "france-info-tv",
    date: "2026-05-19",
    emission: "Édition spéciale justice",
    dureeMinutes: 6,
    type: "reportage",
    tonalite: "neutre",
    resume: "Couverture de la désignation d'un juge d'instruction et des quatre chefs d'enquête. Rappel chronologique : plainte de septembre 2023, perquisition d'avril 2024, statut de lanceuse d'alerte de janvier 2025.",
    url: "https://france3-regions.franceinfo.fr/normandie/seine-maritime/havre/",
  },
  {
    chaineSlug: "bfm-tv",
    date: "2026-05-19",
    emission: "Étude Fondation Jean-Jaurès — bloc central",
    dureeMinutes: 0,
    type: "mention",
    tonalite: "neutre",
    resume: "Seul un tiers des électeurs d'Emmanuel Macron en 2022 restent attachés au bloc central en vue de 2027. Fragmentation de l'espace centriste convoité par Philippe.",
    url: "https://www.bfmtv.com/politique/",
  },
  {
    chaineSlug: "cnews",
    date: "2026-05-26",
    emission: "L'heure des pros — baromètre Odoxa",
    dureeMinutes: 10,
    type: "debat",
    tonalite: "neutre",
    resume: "Quelques jours après l'annonce de l'enquête, Philippe « décroche » dans le baromètre Odoxa. Bardella domine, Mélenchon remonte après sa candidature. Débat sur la fragilisation de la candidature Horizons.",
    url: "https://www.cnews.fr/",
  },
  {
    chaineSlug: "france-inter",
    date: "2026-05-28",
    emission: "L'invité de 8h20 — le grand entretien",
    dureeMinutes: 22,
    type: "interview",
    tonalite: "neutre",
    resume: "Philippe « extrêmement déterminé » pour 2027 : il propose d'« utiliser à nouveau l'outil référendaire » pour inscrire une règle d'or budgétaire dans la Constitution. Maintien de la candidature malgré l'enquête judiciaire.",
    url: "https://www.radiofrance.fr/franceinter/podcasts/l-invite-de-8h20-le-grand-entretien/",
  },
  {
    chaineSlug: "mediapart",
    date: "2026-06-05",
    emission: "Enquête — le superpollueur CMA CGM finance la COP",
    dureeMinutes: 0,
    type: "reportage",
    tonalite: "critique",
    resume: "Mediapart documente le recours en catastrophe au mécénat de CMA CGM (Rodolphe Saadé) pour combler le dérapage budgétaire du sommet des océans de Nice. Rappel des liens du groupe avec l'écosystème médiatique et politique de Philippe.",
    url: "https://www.mediapart.fr/journal/france/050625/",
  },
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
