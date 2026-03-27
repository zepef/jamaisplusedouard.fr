// Chaînes de conflits d'intérêts
// Chaque chaîne trace un parcours multi-nœud reliant Philippe a un intérêt privé

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
      "Le secrétaire général de l'Élysée, Alexis Kohler, est lie familialement a la famille Aponte-Saade du transport maritime. Philippe, maire du premier port CMA CGM en France, est nomme par Macron dont le bras droit est compromis avec le même armateur.",
    gravite: "critique",
    domaine: "Transport maritime / Port du Havre",
    maillons: [
      {
        nom: "Édouard Philippe",
        slug: "edouard-philippe",
        role: "Maire du Havre — premier port CMA CGM en France",
        lienSuivant:
          "Nomme Premier ministre par Macron en 2017. Les deux sont Young Leaders (2011 et 2012).",
      },
      {
        nom: "Emmanuel Macron",
        slug: "emmanuel-macron",
        role: "Président de la République — Young Leader 2012",
        lienSuivant:
          "Nomme Alexis Kohler secrétaire général de l'Élysée, le poste le plus puissant de la présidence.",
      },
      {
        nom: "Alexis Kohler",
        slug: "alexis-kohler",
        role: "Secrétaire général de l'Élysée — mis en examen pour conflits d'intérêts",
        lienSuivant:
          "Liens familiaux avec la famille Aponte (MSC). A supervise des décisions impliquant MSC et le secteur maritime depuis Bercy puis l'Élysée.",
      },
      {
        nom: "CMA CGM / MSC",
        slug: "cma-cgm",
        role: "Les deux premiers armateurs opérant au Havre",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le maire du premier port français est nomme Premier ministre par un président dont le bras droit est mis en examen pour ses liens avec l'industrie maritime. Les décisions portuaires, douanieres et d'amenagement du Havre sont prises dans cet écosystème. CMA CGM (Saade) a ensuite rachete BFM TV, devenant propriétaire du premier media d'info en continu — un cercle complet pouvoir-port-media.",
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
      "Philippe impose le 80 km/h contre l'avis de Macron, générant un boom des infractions. Il rejoint ensuite le conseil d'administration d'Atos, entreprise qui traite les données des radars automatiques.",
    gravite: "critique",
    domaine: "Sécurité routiere / Données numériques",
    maillons: [
      {
        nom: "Édouard Philippe",
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
          "La réduction de vitesse genere mécaniquement plus d'infractions, donc plus de données a traiter par les radars automatiques.",
      },
      {
        nom: "Radars automatiques",
        slug: "atos",
        role: "Système de contrôle automatise — marché en expansion",
        lienSuivant:
          "Le traitement des données des infractions routieres est assure par Atos, via des contrats avec l'État.",
      },
      {
        nom: "Atos",
        slug: "atos",
        role: "Groupe informatique — Philippe administrateur depuis 2020",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le Premier ministre qui impose une mesure générant plus d'infractions rejoint 2 ans plus tard le conseil d'administration de l'entreprise qui traite ces infractions (~70 000€/an). Les liens Philippe-Atos remontent a 2006, bien avant Matignon. La séquence temporelle — décision publique puis bénéfice privé — est un schema classique de conflit d'intérêts differe.",
    sources: [
      {
        titre: "Enquête Blast — liens Philippe-Atos",
        url: "https://blast-info.fr",
      },
      {
        titre: "Boulevard Voltaire — conflit d'intérêts radars",
        url: "https://bvoltaire.fr",
      },
    ],
  },
  {
    id: "philippe-areva-recapitalisation",
    titre: "Philippe → Areva (lobbying) → Matignon → recapitalisation 5 Mds€",
    resume:
      "Philippe est lobbyiste d'Areva de 2007 a 2010. Devenu Premier ministre en 2017, il supervise la recapitalisation d'Areva/Orano par l'État a hauteur de 5 milliards d'euros.",
    gravite: "haute",
    domaine: "Industrie nucléaire / Fonds publics",
    maillons: [
      {
        nom: "Édouard Philippe",
        slug: "edouard-philippe",
        role: "Directeur des affaires publiques d'Areva (2007-2010)",
        lienSuivant:
          "Quitte Areva pour la mairie du Havre. Garde son réseau dans l'industrie nucléaire.",
      },
      {
        nom: "Areva / Orano",
        slug: "areva",
        role: "Multinationale nucléaire — perte de 3,6 Mds€ sur UraMin",
        lienSuivant:
          "Le scandale UraMin (2007, pendant la présence de Philippe) précipite la crise financière du groupe.",
      },
      {
        nom: "Recapitalisation 2017",
        slug: "areva",
        role: "5 milliards d'euros de fonds publics",
        lienSuivant:
          "Le gouvernement Philippe valide la restructuration et la recapitalisation d'Areva devenue Orano.",
      },
      {
        nom: "Contribuable français",
        slug: "edouard-philippe",
        role: "Payeur final — 5 milliards d'euros",
        lienSuivant: "",
      },
    ],
    consequence:
      "L'ancien lobbyiste d'Areva sauve son ancien employeur avec l'argent public quand il arrive au pouvoir. La perte de 3,6 milliards sur UraMin a eu lieu en 2007, l'année même ou Philippe rejoint Areva comme directeur des affaires publiques. Le Premier ministre qui restructuré le nucléaire français est l'ancien charge de com du groupe en difficulte.",
    sources: [
      {
        titre: "Recapitalisation Areva — Les Échos",
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
      "Philippe partage la promotion Young Leaders 2011 avec le responsable sécurité de CMA CGM. CMA CGM est le premier opérateur du port du Havre, dont Philippe est le maire. Le Havre est le premier point d'entrée de cocaine en Europe.",
    gravite: "critique",
    domaine: "Sécurité portuaire / Narcotrafic",
    maillons: [
      {
        nom: "Édouard Philippe",
        slug: "edouard-philippe",
        role: "Maire du Havre depuis 2010 — Young Leader 2011",
        lienSuivant:
          "Meme promotion FAF 2011 que Yann Le Goff. Deux séminaires de 5 jours ensemble.",
      },
      {
        nom: "Yann Le Goff",
        slug: "yann-le-goff",
        role: "Responsable sécurité CMA CGM — Young Leader 2011",
        lienSuivant:
          "Charge de la sécurité des operations CMA CGM, y compris la sécurité des conteneurs au Havre.",
      },
      {
        nom: "CMA CGM",
        slug: "cma-cgm",
        role: "1er armateur au Havre — routes Asie/Amerique latine",
        lienSuivant:
          "Ses navires représentent une part majeure du trafic conteneurise au Havre. Routes depuis la Colombie, le Bresil, l'Equateur.",
      },
      {
        nom: "Port du Havre",
        slug: "port-du-havre",
        role: "1er point d'entrée cocaine en Europe — 18t saisies en 2023",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le maire du premier port d'entrée de cocaine en Europe et le responsable sécurité du premier armateur de ce même port se connaissent personnellement via un réseau d'élite transatlantique. La question n'est pas de les accuser de complicite, mais de pointer la convergence structurelle : la sécurité portuaire face au narcotrafic est un enjeu ou les intérêts du maire, de l'armateur et de la FAF s'entrecroisent dans l'opacité.",
    sources: [
      {
        titre: "Europol — narcotrafic portuaire europeen",
        url: "https://europol.europa.eu",
      },
      {
        titre: "Douanes françaises — saisies 2023",
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
      "Le directeur de cabinet de Philippe a Matignon est membre de la France China Foundation. Le co-créateur de la FCF est conseiller diplomatique de Philippe. Les routes commerciales chinoises transitent par Le Havre via CMA CGM.",
    gravite: "haute",
    domaine: "Diplomatie économique / Influence chinoise",
    maillons: [
      {
        nom: "Édouard Philippe",
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
          "Membre de la France China Foundation depuis 2013, réseau d'influence franco-chinois.",
      },
      {
        nom: "France China Foundation",
        slug: "france-china-foundation",
        role: "Réseau franco-chinois — co-crée par Lenain (conseiller Philippe)",
        lienSuivant:
          "La FCF connecte les élites françaises aux decideurs chinois, dans un contexte ou la Chine investit dans les ports européens.",
      },
      {
        nom: "Commerce sino-français → Le Havre",
        slug: "port-du-havre",
        role: "Porte d'entrée du commerce chinois en France",
        lienSuivant: "",
      },
    ],
    consequence:
      "Le Premier ministre est entoure de personnes inscrites dans les réseaux d'influence chinois tout en étant maire du principal port d'importation chinoise en France. Les décisions diplomatiques et portuaires prises a Matignon impactent directement Le Havre. Le dircab qui négocié avec Pekin est le même qui administre le port de son patron politique.",
    sources: [
      {
        titre: "France China Foundation — liste des membres",
        url: "https://francechinafoundation.org",
      },
    ],
  },
  {
    id: "philippe-barroux-echos-couverture",
    titre: "Philippe → Barroux (YL 2011) → Les Échos (LVMH) → couverture favorable",
    resume:
      "Le rédacteur en chef des Échos est dans la même promotion Young Leaders que Philippe. Les Échos appartiennent a Bernard Arnault (LVMH), proche de Macron. La couverture économique de Philippe y est systématiquement favorable.",
    gravite: "moyenne",
    domaine: "Medias / Couverture éditoriale",
    maillons: [
      {
        nom: "Édouard Philippe",
        slug: "edouard-philippe",
        role: "Candidat a la présidentielle — Young Leader 2011",
        lienSuivant:
          "Meme promotion FAF 2011 que David Barroux. Séminaires communs 2011-2012.",
      },
      {
        nom: "David Barroux",
        slug: "david-barroux",
        role: "Rédacteur en chef des Échos — Young Leader 2011",
        lienSuivant:
          "Dirige la ligne éditoriale du principal quotidien économique français.",
      },
      {
        nom: "Les Échos / LVMH",
        slug: "les-echos",
        role: "Quotidien économique — propriété de Bernard Arnault",
        lienSuivant:
          "Arnault est le plus proche allié oligarchique de Macron. LVMH est le premier annonceur de France.",
      },
      {
        nom: "Couverture favorable",
        slug: "david-barroux",
        role: "Traitement éditorial positif des réformes Philippe",
        lienSuivant: "",
      },
    ],
    consequence:
      "Un candidat a la présidentielle et le rédacteur en chef du principal quotidien économique de France sont issus de la même promotion d'un réseau d'élite. Le journal appartient au plus grand groupe de luxe mondial, dont le patron entretient des relations étroites avec le président qui a nomme ce candidat Premier ministre. La chaîne Philippe → Barroux → Arnault → Macron forme une boucle fermee entre pouvoir politique, pouvoir médiatique et pouvoir économique.",
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
      "CMA CGM, premier opérateur du port de Philippe, a rachete BFM TV. Le media couvre Philippe sans jamais interroger les liens entre le candidat et son propriétaire.",
    gravite: "critique",
    domaine: "Medias / Concentration médiatique",
    maillons: [
      {
        nom: "Édouard Philippe",
        slug: "edouard-philippe",
        role: "Maire du Havre — premier port CMA CGM",
        lienSuivant:
          "Le Havre est un hub majeur de CMA CGM. Les décisions municipales impactent l'activite de l'armateur.",
      },
      {
        nom: "CMA CGM / Rodolphe Saade",
        slug: "cma-cgm",
        role: "1er armateur français — fortune >40 Mds€",
        lienSuivant:
          "Saade rachete BFM TV (ex-Altice/Drahi) en 2024, devenant propriétaire du premier media d'info en continu.",
      },
      {
        nom: "BFM TV",
        slug: "bfm-tv",
        role: "1ere chaîne d'info — propriété CMA CGM",
        lienSuivant:
          "BFM accorde 25 minutes de plateau a Philippe sans question sur les liens CMA CGM/Le Havre.",
      },
      {
        nom: "Opinion publique",
        slug: "edouard-philippe",
        role: "Information biaisee — conflit d'intérêts médiatique",
        lienSuivant: "",
      },
    ],
    consequence:
      "L'opérateur portuaire du fief du candidat possède le media qui le couvre le plus. C'est un cas d'école de conflit d'intérêts médiatique : CMA CGM a un intérêt direct a maintenir de bonnes relations avec le maire/candidat du Havre, et possède simultanément le media qui forme l'opinion sur ce candidat. Aucune question sur cette imbrication n'est posee lors des plateaux BFM.",
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
      "La présidente de Radio France est camarade de promotion ENA de Macron. France Inter accorde régulièrement des interviews complaisantes a Philippe sans questions derangeantes.",
    gravite: "moyenne",
    domaine: "Medias publics / Nomination",
    maillons: [
      {
        nom: "Édouard Philippe",
        slug: "edouard-philippe",
        role: "Ancien Premier ministre de Macron — Young Leader 2011",
        lienSuivant:
          "Nomme par Macron, dont il partage le réseau Young Leaders et le cercle de pouvoir.",
      },
      {
        nom: "Emmanuel Macron",
        slug: "emmanuel-macron",
        role: "Président — nomme les membres de l'Arcom",
        lienSuivant:
          "L'Arcom nomme la présidente de France Télévisions. Macron influence indirectement la gouvernance de l'audiovisuel public.",
      },
      {
        nom: "Sibyle Veil",
        slug: "emmanuel-macron",
        role: "Présidente Radio France — ENA Senghor (2004) avec Macron",
        lienSuivant:
          "Camarade de promotion ENA de Macron. Dirige France Inter, première radio de France.",
      },
      {
        nom: "France Inter",
        slug: "france-inter",
        role: "1ere radio de France — matinale la plus écoutée",
        lienSuivant: "",
      },
    ],
    consequence:
      "La présidente de la première radio publique de France est une camarade de promotion du président qui a nomme Philippe. Cette chaîne de nomination — Macron → Arcom → Veil → France Inter — crée un canal d'influence indirect entre l'Élysée et la ligne éditoriale de la radio publique. Les interviews de Philippe sur France Inter evitent systématiquement les sujets sensibles (FCF, Atos, CMA CGM).",
    sources: [
      {
        titre: "Sibyle Veil, ENA Senghor — Who's Who",
        url: "https://whoswho.fr",
      },
    ],
  },
];

// Sous-réseaux de conflits par domaine
export const domainesConflits = [
  ...new Set(chainesConflits.map((c) => c.domaine)),
];
