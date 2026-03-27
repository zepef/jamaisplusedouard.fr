// Chaines de conflits d'interets
// Chaque chaine trace un parcours multi-noeud reliant Philippe a un interet prive

export type ChainMaillon = {
  nom: string;
  slug: string;
  role: string;
  lienSuivant: string; // description du lien vers le maillon suivant
};

export type ChaineConflit = {
  id: string;
  titre: string;
  resume: string;
  gravite: "critique" | "haute" | "moyenne";
  domaine: string;
  maillons: ChainMaillon[];
  consequence: string;
  sources: { titre: string; url: string }[];
};

export const chainesConflits: ChaineConflit[] = [
  {
    id: "philippe-macron-kohler-cmacgm",
    titre: "Philippe → Macron → Kohler → CMA CGM",
    resume:
      "Le secretaire general de l'Elysee, Alexis Kohler, est lie familialement a la famille Aponte-Saade du transport maritime. Philippe, maire du premier port CMA CGM en France, est nomme par Macron dont le bras droit est compromis avec le meme armateur.",
    gravite: "critique",
    domaine: "Transport maritime / Port du Havre",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Maire du Havre — premier port CMA CGM en France",
        lienSuivant:
          "Nomme Premier ministre par Macron en 2017. Les deux sont Young Leaders (2011 et 2012).",
      },
      {
        nom: "Emmanuel Macron",
        slug: "emmanuel-macron",
        role: "President de la Republique — Young Leader 2012",
        lienSuivant:
          "Nomme Alexis Kohler secretaire general de l'Elysee, le poste le plus puissant de la presidence.",
      },
      {
        nom: "Alexis Kohler",
        slug: "alexis-kohler",
        role: "Secretaire general de l'Elysee — mis en examen pour conflits d'interets",
        lienSuivant:
          "Liens familiaux avec la famille Aponte (MSC). A supervise des decisions impliquant MSC et le secteur maritime depuis Bercy puis l'Elysee.",
      },
      {
        nom: "CMA CGM / MSC",
        slug: "cma-cgm",
        role: "Les deux premiers armateurs operant au Havre",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le maire du premier port francais est nomme Premier ministre par un president dont le bras droit est mis en examen pour ses liens avec l'industrie maritime. Les decisions portuaires, douanieres et d'amenagement du Havre sont prises dans cet ecosysteme. CMA CGM (Saade) a ensuite rachete BFM TV, devenant proprietaire du premier media d'info en continu — un cercle complet pouvoir-port-media.",
    sources: [
      {
        titre: "Mise en examen de Kohler — Le Monde",
        url: "https://lemonde.fr",
      },
      {
        titre: "Liens familiaux Kohler-Aponte — Mediapart",
        url: "https://mediapart.fr",
      },
    ],
  },
  {
    id: "philippe-atos-80kmh-radars",
    titre: "Philippe → 80 km/h → Atos → radars automatiques",
    resume:
      "Philippe impose le 80 km/h contre l'avis de Macron, generant un boom des infractions. Il rejoint ensuite le conseil d'administration d'Atos, entreprise qui traite les donnees des radars automatiques.",
    gravite: "critique",
    domaine: "Securite routiere / Donnees numeriques",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Premier ministre — porte le 80 km/h en personne",
        lienSuivant:
          "Impose la mesure du 80 km/h le 1er juillet 2018, contre l'avis de Macron et de l'opinion.",
      },
      {
        nom: "80 km/h",
        slug: "80-kmh",
        role: "Mesure la plus impopulaire du mandat Philippe",
        lienSuivant:
          "La reduction de vitesse genere mecaniquement plus d'infractions, donc plus de donnees a traiter par les radars automatiques.",
      },
      {
        nom: "Radars automatiques",
        slug: "atos",
        role: "Systeme de controle automatise — marche en expansion",
        lienSuivant:
          "Le traitement des donnees des infractions routieres est assure par Atos, via des contrats avec l'Etat.",
      },
      {
        nom: "Atos",
        slug: "atos",
        role: "Groupe informatique — Philippe administrateur depuis 2020",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le Premier ministre qui impose une mesure generant plus d'infractions rejoint 2 ans plus tard le conseil d'administration de l'entreprise qui traite ces infractions (~70 000€/an). Les liens Philippe-Atos remontent a 2006, bien avant Matignon. La sequence temporelle — decision publique puis benefice prive — est un schema classique de conflit d'interets differe.",
    sources: [
      {
        titre: "Enquete Blast — liens Philippe-Atos",
        url: "https://blast-info.fr",
      },
      {
        titre: "Boulevard Voltaire — conflit d'interets radars",
        url: "https://bvoltaire.fr",
      },
    ],
  },
  {
    id: "philippe-areva-recapitalisation",
    titre: "Philippe → Areva (lobbying) → Matignon → recapitalisation 5 Mds€",
    resume:
      "Philippe est lobbyiste d'Areva de 2007 a 2010. Devenu Premier ministre en 2017, il supervise la recapitalisation d'Areva/Orano par l'Etat a hauteur de 5 milliards d'euros.",
    gravite: "haute",
    domaine: "Industrie nucleaire / Fonds publics",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Directeur des affaires publiques d'Areva (2007-2010)",
        lienSuivant:
          "Quitte Areva pour la mairie du Havre. Garde son reseau dans l'industrie nucleaire.",
      },
      {
        nom: "Areva / Orano",
        slug: "areva",
        role: "Multinationale nucleaire — perte de 3,6 Mds€ sur UraMin",
        lienSuivant:
          "Le scandale UraMin (2007, pendant la presence de Philippe) precipite la crise financiere du groupe.",
      },
      {
        nom: "Recapitalisation 2017",
        slug: "areva",
        role: "5 milliards d'euros de fonds publics",
        lienSuivant:
          "Le gouvernement Philippe valide la restructuration et la recapitalisation d'Areva devenue Orano.",
      },
      {
        nom: "Contribuable francais",
        slug: "edouard-philippe",
        role: "Payeur final — 5 milliards d'euros",
        lienSuivant: "",
      },
    ],
    consequence:
      "L'ancien lobbyiste d'Areva sauve son ancien employeur avec l'argent public quand il arrive au pouvoir. La perte de 3,6 milliards sur UraMin a eu lieu en 2007, l'annee meme ou Philippe rejoint Areva comme directeur des affaires publiques. Le Premier ministre qui restructure le nucleaire francais est l'ancien charge de com du groupe en difficulte.",
    sources: [
      {
        titre: "Recapitalisation Areva — Les Echos",
        url: "https://lesechos.fr",
      },
      {
        titre: "Scandale UraMin — Mediapart",
        url: "https://mediapart.fr",
      },
    ],
  },
  {
    id: "philippe-legoff-cmacgm-havre-drogue",
    titre: "Philippe → Le Goff (YL 2011) → CMA CGM → Le Havre → narcotrafic",
    resume:
      "Philippe partage la promotion Young Leaders 2011 avec le responsable securite de CMA CGM. CMA CGM est le premier operateur du port du Havre, dont Philippe est le maire. Le Havre est le premier point d'entree de cocaine en Europe.",
    gravite: "critique",
    domaine: "Securite portuaire / Narcotrafic",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Maire du Havre depuis 2010 — Young Leader 2011",
        lienSuivant:
          "Meme promotion FAF 2011 que Yann Le Goff. Deux seminaires de 5 jours ensemble.",
      },
      {
        nom: "Yann Le Goff",
        slug: "yann-le-goff",
        role: "Responsable securite CMA CGM — Young Leader 2011",
        lienSuivant:
          "Charge de la securite des operations CMA CGM, y compris la securite des conteneurs au Havre.",
      },
      {
        nom: "CMA CGM",
        slug: "cma-cgm",
        role: "1er armateur au Havre — routes Asie/Amerique latine",
        lienSuivant:
          "Ses navires representent une part majeure du trafic conteneurise au Havre. Routes depuis la Colombie, le Bresil, l'Equateur.",
      },
      {
        nom: "Port du Havre",
        slug: "port-du-havre",
        role: "1er point d'entree cocaine en Europe — 18t saisies en 2023",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le maire du premier port d'entree de cocaine en Europe et le responsable securite du premier armateur de ce meme port se connaissent personnellement via un reseau d'elite transatlantique. La question n'est pas de les accuser de complicite, mais de pointer la convergence structurelle : la securite portuaire face au narcotrafic est un enjeu ou les interets du maire, de l'armateur et de la FAF s'entrecroisent dans l'opacite.",
    sources: [
      {
        titre: "Europol — narcotrafic portuaire europeen",
        url: "https://europol.europa.eu",
      },
      {
        titre: "Douanes francaises — saisies 2023",
        url: "https://douane.gouv.fr",
      },
      {
        titre: "FAF — promotion 2011",
        url: "https://frenchamerican.org",
      },
    ],
  },
  {
    id: "philippe-ribadeau-fcf-chine-havre",
    titre: "Philippe → Ribadeau-Dumas → FCF → Chine → Le Havre",
    resume:
      "Le directeur de cabinet de Philippe a Matignon est membre de la France China Foundation. Le co-createur de la FCF est conseiller diplomatique de Philippe. Les routes commerciales chinoises transitent par Le Havre via CMA CGM.",
    gravite: "haute",
    domaine: "Diplomatie economique / Influence chinoise",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Premier ministre / Maire du Havre",
        lienSuivant:
          "Nomme Ribadeau-Dumas directeur de cabinet et Lenain conseiller diplomatique.",
      },
      {
        nom: "Benoit Ribadeau-Dumas",
        slug: "benoit-ribadeau-dumas",
        role: "Dircab Matignon — ENA Marc-Bloch — FCF 2013",
        lienSuivant:
          "Membre de la France China Foundation depuis 2013, reseau d'influence franco-chinois.",
      },
      {
        nom: "France China Foundation",
        slug: "france-china-foundation",
        role: "Reseau franco-chinois — co-cree par Lenain (conseiller Philippe)",
        lienSuivant:
          "La FCF connecte les elites francaises aux decideurs chinois, dans un contexte ou la Chine investit dans les ports europeens.",
      },
      {
        nom: "Commerce sino-francais → Le Havre",
        slug: "port-du-havre",
        role: "Porte d'entree du commerce chinois en France",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le Premier ministre est entoure de personnes inscrites dans les reseaux d'influence chinois tout en etant maire du principal port d'importation chinoise en France. Les decisions diplomatiques et portuaires prises a Matignon impactent directement Le Havre. Le dircab qui negocie avec Pekin est le meme qui administre le port de son patron politique.",
    sources: [
      {
        titre: "France China Foundation — liste des membres",
        url: "https://francechinafoundation.org",
      },
    ],
  },
  {
    id: "philippe-barroux-echos-couverture",
    titre: "Philippe → Barroux (YL 2011) → Les Echos (LVMH) → couverture favorable",
    resume:
      "Le redacteur en chef des Echos est dans la meme promotion Young Leaders que Philippe. Les Echos appartiennent a Bernard Arnault (LVMH), proche de Macron. La couverture economique de Philippe y est systematiquement favorable.",
    gravite: "moyenne",
    domaine: "Medias / Couverture editoriale",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Candidat a la presidentielle — Young Leader 2011",
        lienSuivant:
          "Meme promotion FAF 2011 que David Barroux. Seminaires communs 2011-2012.",
      },
      {
        nom: "David Barroux",
        slug: "david-barroux",
        role: "Redacteur en chef des Echos — Young Leader 2011",
        lienSuivant:
          "Dirige la ligne editoriale du principal quotidien economique francais.",
      },
      {
        nom: "Les Echos / LVMH",
        slug: "les-echos",
        role: "Quotidien economique — propriete de Bernard Arnault",
        lienSuivant:
          "Arnault est le plus proche allie oligarchique de Macron. LVMH est le premier annonceur de France.",
      },
      {
        nom: "Couverture favorable",
        slug: "david-barroux",
        role: "Traitement editorial positif des reformes Philippe",
        lienSuivant: "",
      },
    ],
    consequence:
      "Un candidat a la presidentielle et le redacteur en chef du principal quotidien economique de France sont issus de la meme promotion d'un reseau d'elite. Le journal appartient au plus grand groupe de luxe mondial, dont le patron entretient des relations etroites avec le president qui a nomme ce candidat Premier ministre. La chaine Philippe → Barroux → Arnault → Macron forme une boucle fermee entre pouvoir politique, pouvoir mediatique et pouvoir economique.",
    sources: [
      {
        titre: "FAF — promotion 2011",
        url: "https://frenchamerican.org",
      },
    ],
  },
  {
    id: "philippe-bfm-cmacgm-media",
    titre: "Philippe → Le Havre → CMA CGM (Saade) → BFM TV → couverture favorable",
    resume:
      "CMA CGM, premier operateur du port de Philippe, a rachete BFM TV. Le media couvre Philippe sans jamais interroger les liens entre le candidat et son proprietaire.",
    gravite: "critique",
    domaine: "Medias / Concentration mediatique",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Maire du Havre — premier port CMA CGM",
        lienSuivant:
          "Le Havre est un hub majeur de CMA CGM. Les decisions municipales impactent l'activite de l'armateur.",
      },
      {
        nom: "CMA CGM / Rodolphe Saade",
        slug: "cma-cgm",
        role: "1er armateur francais — fortune >40 Mds€",
        lienSuivant:
          "Saade rachete BFM TV (ex-Altice/Drahi) en 2024, devenant proprietaire du premier media d'info en continu.",
      },
      {
        nom: "BFM TV",
        slug: "bfm-tv",
        role: "1ere chaine d'info — propriete CMA CGM",
        lienSuivant:
          "BFM accorde 25 minutes de plateau a Philippe sans question sur les liens CMA CGM/Le Havre.",
      },
      {
        nom: "Opinion publique",
        slug: "edouard-philippe",
        role: "Information biaisee — conflit d'interets mediatique",
        lienSuivant: "",
      },
    ],
    consequence:
      "L'operateur portuaire du fief du candidat possede le media qui le couvre le plus. C'est un cas d'ecole de conflit d'interets mediatique : CMA CGM a un interet direct a maintenir de bonnes relations avec le maire/candidat du Havre, et possede simultanement le media qui forme l'opinion sur ce candidat. Aucune question sur cette imbrication n'est posee lors des plateaux BFM.",
    sources: [
      {
        titre: "Rachat BFM par CMA CGM — Le Monde",
        url: "https://lemonde.fr",
      },
    ],
  },
  {
    id: "philippe-macron-veil-franceinter",
    titre: "Philippe → Macron → Sibyle Veil (ENA) → France Inter → couverture complaisante",
    resume:
      "La presidente de Radio France est camarade de promotion ENA de Macron. France Inter accorde regulierement des interviews complaisantes a Philippe sans questions derangeantes.",
    gravite: "moyenne",
    domaine: "Medias publics / Nomination",
    maillons: [
      {
        nom: "Edouard Philippe",
        slug: "edouard-philippe",
        role: "Ancien Premier ministre de Macron — Young Leader 2011",
        lienSuivant:
          "Nomme par Macron, dont il partage le reseau Young Leaders et le cercle de pouvoir.",
      },
      {
        nom: "Emmanuel Macron",
        slug: "emmanuel-macron",
        role: "President — nomme les membres de l'Arcom",
        lienSuivant:
          "L'Arcom nomme la presidente de France Televisions. Macron influence indirectement la gouvernance de l'audiovisuel public.",
      },
      {
        nom: "Sibyle Veil",
        slug: "emmanuel-macron",
        role: "Presidente Radio France — ENA Senghor (2004) avec Macron",
        lienSuivant:
          "Camarade de promotion ENA de Macron. Dirige France Inter, premiere radio de France.",
      },
      {
        nom: "France Inter",
        slug: "france-inter",
        role: "1ere radio de France — matinale la plus ecoutee",
        lienSuivant: "",
      },
    ],
    consequence:
      "La presidente de la premiere radio publique de France est une camarade de promotion du president qui a nomme Philippe. Cette chaine de nomination — Macron → Arcom → Veil → France Inter — cree un canal d'influence indirect entre l'Elysee et la ligne editoriale de la radio publique. Les interviews de Philippe sur France Inter evitent systematiquement les sujets sensibles (FCF, Atos, CMA CGM).",
    sources: [
      {
        titre: "Sibyle Veil, ENA Senghor — Who's Who",
        url: "https://whoswho.fr",
      },
    ],
  },
];

// Sous-reseaux de conflits par domaine
export const domainesConflits = [
  ...new Set(chainesConflits.map((c) => c.domaine)),
];
