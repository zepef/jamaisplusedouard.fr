// Données extraites de edouard_philippe_biographie.docx
// Seed statique pour le rendu initial — sera remplacé par la BDD

export const ficheSynthetique = {
  nomComplet: "Édouard Charles Philippe",
  dateNaissance: "28 novembre 1970",
  age: 55,
  lieuNaissance: "Rouen, Seine-Maritime",
  parti: "Horizons (depuis 2021) — ex-UMP/LR",
  fonctionActuelle: "Maire du Havre (3e mandat, depuis 2026)",
  premierMinistre: "15 mai 2017 – 3 juillet 2020",
  conjoint: "Édith Chabre (marié depuis 2002)",
  enfants: "Trois : Anatole, Léonard, Sarah",
  formation:
    "Sciences Po Paris (1992), ENA Marc-Bloch (1997), Young Leader FAF (2011)",
  candidature2027: "Déclarée en septembre 2024",
};

export type TimelineEvent = {
  annee: string;
  titre: string;
  description: string;
  categorie: "biographie" | "controverse" | "carriere";
  section?: string;
};

export const timeline: TimelineEvent[] = [
  // I. Origines, jeunesse et formation
  {
    annee: "1970",
    titre: "Naissance à Rouen",
    description:
      "Naît le 28 novembre 1970 à Rouen dans une famille d'enseignants. Son père est chef d'établissement scolaire, sa mère professeur de français. Il évoque régulièrement un arrière-grand-père docker, membre de la CGT au Havre, parmi les premiers adhérents du Parti communiste.",
    categorie: "biographie",
    section: "Origines",
  },
  {
    annee: "1988",
    titre: "Baccalauréat au lycée français de Bonn",
    description:
      "Passe son bac en Allemagne où son père est proviseur. Ce séjour formateur marque durablement sa vision européenne.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "1992",
    titre: "Diplôme de Sciences Po Paris",
    description:
      "Section Service public. Se rapproche un temps des clubs animés par le courant rocardien du PS. Milite brièvement (environ deux ans) au PS avant de s'en éloigner définitivement.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "1994",
    titre: "Service militaire — officier d'artillerie",
    description:
      "Officier au 11e régiment d'artillerie de marine, avec le grade d'aspirant. Sera ensuite officier dans la réserve opérationnelle.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "1995-1997",
    titre: "ENA — promotion Marc-Bloch",
    description:
      "Son excellent classement de sortie lui permet d'intégrer le Conseil d'État, section du contentieux, spécialité droit des marchés publics.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "2011",
    titre: "Young Leader — French-American Foundation",
    description:
      "Sélectionné avec 9 autres Français et 10 Américains. Dans sa promotion : Yann Le Goff (sécurité régionale CMA CGM), Yohann Bénard (Amazon France). Macron sera dans la promotion suivante (2012), Juppé dans la fondatrice (1982). Le contenu des séminaires n'est pas public.",
    categorie: "biographie",
    section: "Réseau",
  },
  // Réseau FCF (découvert via Wayback Machine)
  {
    annee: "2013",
    titre: "Ribadeau-Dumas rejoint la France China Foundation",
    description:
      "Benoît Ribadeau-Dumas, futur dircab de Philippe à Matignon, issu de la même promotion ENA Marc-Bloch, intègre la France China Foundation (FCF). Emmanuel Lenain, co-créateur de la FCF, deviendra conseiller diplomatique de Philippe à Matignon.",
    categorie: "biographie",
    section: "Réseau",
  },
  // II. Carrière professionnelle
  {
    annee: "1997-2002",
    titre: "Conseil d'État — auditeur puis maître des requêtes",
    description:
      "Section du contentieux, spécialisé dans le droit des marchés publics.",
    categorie: "carriere",
    section: "Carrière",
  },
  {
    annee: "2004-2007",
    titre: "Avocat chez Debevoise & Plimpton",
    description:
      "Rejoint la filiale française du cabinet d'avocats anglo-saxon. Se met en disponibilité du Conseil d'État.",
    categorie: "carriere",
    section: "Carrière",
  },
  {
    annee: "2007-2010",
    titre: "Directeur des affaires publiques d'Areva",
    description:
      "Fonction de lobbying et de relations avec les élus au sein de la multinationale nucléaire.",
    categorie: "carriere",
    section: "Carrière",
  },
  {
    annee: "2020",
    titre: "Administrateur d'Atos",
    description:
      "Nommé administrateur indépendant. Mandat rémunéré ~70 000€/an, critiqué alors que l'entreprise connaît de graves difficultés financières. Atos est en pointe sur le traitement des données des radars automatiques.",
    categorie: "controverse",
    section: "Carrière",
  },
  // III. Parcours politique local
  {
    annee: "2001",
    titre: "Adjoint au maire du Havre",
    description:
      "Antoine Rufenacht le propose sur sa liste municipale. Chargé des affaires juridiques.",
    categorie: "biographie",
    section: "Le Havre",
  },
  {
    annee: "2002",
    titre: "Échec aux législatives / DG de l'UMP",
    description:
      "Battu par le communiste Daniel Paul (42,5%). Juppé lui propose de participer à la fondation de l'UMP — DG des services jusqu'en 2004.",
    categorie: "biographie",
    section: "Politique nationale",
  },
  {
    annee: "2010",
    titre: "Élu maire du Havre",
    description:
      "Succède à Antoine Rufenacht. Président de la communauté d'agglomération havraise. Mène une politique de transformation urbaine, mais endettement en forte hausse — finances « proches du seuil d'alerte » selon la chambre régionale des comptes.",
    categorie: "biographie",
    section: "Le Havre",
  },
  {
    annee: "2012",
    titre: "Élu député de la Seine-Maritime",
    description: "7e circonscription, sous l'étiquette UMP.",
    categorie: "biographie",
    section: "Politique nationale",
  },
  {
    annee: "2014",
    titre: "Réélu maire du Havre au 1er tour",
    description: "La liste qu'il conduit l'emporte dès le premier tour.",
    categorie: "biographie",
    section: "Le Havre",
  },
  // IV. Route vers Matignon
  {
    annee: "2016",
    titre: "Porte-parole de Juppé à la primaire",
    description:
      "Co-porte-parole avec Benoist Apparu. Après la défaite de Juppé, se rallié à Fillon.",
    categorie: "biographie",
    section: "Politique nationale",
  },
  {
    annee: "Mars 2017",
    titre: "Retrait de la campagne Fillon",
    description:
      "Se met en retrait après l'affaire Fillon. Avait qualifié Macron d'« ancien banquier de chez Rothschild » et dénoncé son « cynisme de vieux routier ».",
    categorie: "biographie",
    section: "Politique nationale",
  },
  // V. Premier ministre
  {
    annee: "15 mai 2017",
    titre: "Nommé Premier ministre",
    description:
      "3e plus jeune PM de la Ve République (46 ans). Première fois hors cohabitation qu'un PM n'est pas du mouvement présidentiel.",
    categorie: "biographie",
    section: "Matignon",
  },
  {
    annee: "Mai 2017",
    titre: "Ribadeau-Dumas nommé directeur de cabinet",
    description:
      "Benoît Ribadeau-Dumas (ENA Marc-Bloch, même promotion que Philippe, FCF 2013) est nommé dircab de Matignon. Emmanuel Lenain (co-créateur FCF) devient conseiller diplomatique. Le réseau ENA/FAF/FCF se retrouve au cœur du pouvoir exécutif.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Été 2017",
    titre: "Ordonnances Code du travail",
    description:
      "Flexibilisation du marché du travail, renforcement du dialogue social. Première réforme majeure par ordonnances.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "1er janv. 2018",
    titre: "11 vaccins obligatoires",
    description:
      "Annonce la mesure en personne le 4 juillet 2017. 8 vaccins recommandés deviennent obligatoires, conditionnant l'entrée en collectivité. Contestée par les mouvements anti-vaccination. La question des conflits d'intérêts avec les laboratoires est soulevée.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "1er juil. 2018",
    titre: "Passage à 80 km/h",
    description:
      "Réduction de la vitesse sur les routes secondaires. Dossier le plus personnel de son mandat, porté contre la volonté de Macron. Massivement impopulaire, contribue au ressentiment des Gilets jaunes. Lien potentiel avec Atos (radars automatiques) relevé par la presse.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Juil. 2018",
    titre: "Affaire Benalla",
    description:
      "Deux motions de censure rejetées contre le gouvernement.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Nov. 2018",
    titre: "Gilets jaunes — début du mouvement",
    description:
      "Né de l'opposition aux taxes carburants et du ressentiment accumulé. Bilan : 432 blessés graves, 25 éborgnes, 5 mains arrachées, 1 décès (Zineb Redouane). L'ONU et Amnesty International demandent l'interdiction des LBD40. Philippe encourage la réponse sécuritaire.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Dec. 2018",
    titre: "Moratoire sur les taxes carburants",
    description:
      "Annonce un moratoire de 6 mois — l'Élysée revient dessus le lendemain. Tensions Matignon/présidence exposées au grand jour.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Janv.-mars 2019",
    titre: "Grand débat national",
    description:
      "Consultation inédite. A l'issue, Macron annonce baisse de l'IR et réindexation des petites retraites.",
    categorie: "biographie",
    section: "Matignon",
  },
  {
    annee: "Mai 2019",
    titre: "Loi PACTE adoptée",
    description: "Loi pour la croissance et la transformation des entreprises.",
    categorie: "biographie",
    section: "Matignon",
  },
  {
    annee: "Dec. 2019",
    titre: "Réforme des retraites — grève massive",
    description:
      "800 000 manifestants le 5 décembre. Système universel en remplacement de 42 régimes. Recours au 49-3 en février 2020.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "13 mars 2020",
    titre: "« Le masque est inutile en population générale »",
    description:
      "Déclaration sur TF1 alors que les stocks sont insuffisants. Volte-face début avril. Maintien du 1er tour des municipales le 15 mars, 2 jours avant le confinement.",
    categorie: "controverse",
    section: "Covid",
  },
  {
    annee: "17 mars 2020",
    titre: "Confinement national — 55 jours",
    description:
      "L'un des plus stricts d'Europe. 168 000 décès du Covid entre 2020 et septembre 2023.",
    categorie: "controverse",
    section: "Covid",
  },
  {
    annee: "28 mars 2020",
    titre: "Décret Rivotril",
    description:
      "Autorise la dispensation de Rivotril (dépresseur respiratoire) pour patients Covid en fin de vie. Accusations d'« euthanasie légalisée ». Le décret pallié une pénurie de midazolam. Les ARS restreignent l'accès hospitalier des résidents d'EHPAD.",
    categorie: "controverse",
    section: "Covid",
  },
  {
    annee: "3 juil. 2020",
    titre: "Démission de Matignon",
    description:
      "Réélu maire du Havre avec 58,83%. Remet la démission du gouvernement. Jean Castex lui succède. 3 ans et 49 jours à Matignon.",
    categorie: "biographie",
    section: "Matignon",
  },
  // VI. Après Matignon
  {
    annee: "9 oct. 2021",
    titre: "Création du parti Horizons",
    description:
      "Lance le parti au Havre. Centre-droit, aile droite de la majorité. Macron « goûte peu » cette création. Estrosi numéro 2. 19 000 adhérents en octobre 2022.",
    categorie: "biographie",
    section: "Horizons",
  },
  {
    annee: "2022",
    titre: "Législatives — 30 députés Horizons",
    description:
      "58 investitures au sein d'Ensemble. Groupe « Horizons et indépendants » présidé par Laurent Marcangeli.",
    categorie: "biographie",
    section: "Horizons",
  },
  {
    annee: "Juin 2024",
    titre: "Dissolution — « décision funeste et absurde »",
    description:
      "Appelle à faire barrage à LFI et RN. Horizons obtient 6 sièges. Qualifie la dissolution de « funeste et absurde ».",
    categorie: "biographie",
    section: "Horizons",
  },
  // VII. Candidature 2027
  {
    annee: "3 sept. 2024",
    titre: "Candidature présidentielle déclarée",
    description:
      "Interview au Point : « Je serai candidat. » Évoque 4 « périls » : démocratique, budgétaire, immobilisme, ordre public.",
    categorie: "biographie",
    section: "Présidentielle 2027",
  },
  {
    annee: "Automne 2025",
    titre: "Rupture avec Macron",
    description:
      "Prend ouvertement ses distances. Appelle Macron à démissionner. « Ce président n'aime pas les premiers ministres qui prennent de l'espace. »",
    categorie: "biographie",
    section: "Présidentielle 2027",
  },
  {
    annee: "22 mars 2026",
    titre: "Réélu maire du Havre — 3e mandat",
    description:
      "1er tour 43,76%, 2nd tour 47,71% en triangulaire. Face à Lecoq (gauche, 41,2%) et Keller (UDR-RN, 11,1%). 3 sièges extrême droite au conseil municipal. Horizons revendique 465 maires encartés nationalement.",
    categorie: "biographie",
    section: "Présidentielle 2027",
  },
  // VIII. Affaires judiciaires
  {
    annee: "Juil. 2025",
    titre: "Non-lieu CJR — affaire Covid",
    description:
      "Non-lieu général pour Philippe, Buzyn et Véran. L'arrêt de 500 pages constitue paradoxalement un « réquisitoire impitoyable » contre la gestion gouvernementale (Pr. Olivier Beaud).",
    categorie: "controverse",
    section: "Judiciaire",
  },
  {
    annee: "Avril 2024",
    titre: "Enquête PNF — gestion de la métropole du Havre",
    description:
      "Enquête préliminaire pour prise illégale d'intérêts, détournement de fonds publics, favoritisme et harcèlement moral. Perquisitions à la mairie le 3 avril 2024. Philippe conteste fermement.",
    categorie: "controverse",
    section: "Judiciaire",
  },
  {
    annee: "19 mars 2026",
    titre: "Menaces de mort pendant la campagne",
    description:
      "Courrier anonyme avec menaces de mort et douille percutée reçu à la mairie du Havre.",
    categorie: "biographie",
    section: "Présidentielle 2027",
  },
];

export type Controverse = {
  slug: string;
  titre: string;
  resume: string;
  contenu: string;
  date: string;
  gravite: "haute" | "moyenne" | "basse";
  themes: string[];
  sources: { titre: string; url: string; type: string; auteur?: string }[];
};

export const controverses: Controverse[] = [
  {
    slug: "gilets-jaunes-mutiles",
    titre: "Gilets jaunes mutilés — la doctrine du maintien de l'ordre",
    resume:
      "432 blessés graves, 25 éborgnes, 5 mains arrachées, 1 décès. L'ONU et Amnesty International ont demandé l'interdiction des LBD40.",
    contenu: `Le mouvement des Gilets jaunes éclate en novembre 2018. Le bilan humain est sans précédent dans l'histoire récente du maintien de l'ordre en France : 432 blessés graves recensés parmi plus de 2 500 blessés, dont 1 décès (Zineb Redouane, 80 ans, tuée par une grenade lacrymogène à Marseille), 5 mains arrachées, 25 personnes éborgnées, 236 blessés à la tête, 221 blessés par des tirs de LBD40.

L'usage massif des lanceurs de balles de défense (LBD40) et des grenades de désencerclement (GLI-F4) est au cœur des critiques. En 2018, l'utilisation des LBD à bondi de plus de 200% par rapport à l'année précédente selon l'IGPN. L'ONU, le Conseil de l'Europe, Amnesty International et le Défenseur des droits Jacques Toubon ont demandé l'interdiction de ces armes, proscrites ailleurs en Europe.

David Dufresne (Visionscarto) note que les policiers étaient « encouragés par le gouvernement d'Édouard Philippe à employer la force ». L'IGPN à été saisie de 313 enquêtes judiciaires pour suspicions de violences policières.`,
    date: "2018-11-17",
    gravite: "haute",
    themes: ["gilets-jaunes", "repression", "droits-humains", "maintien-ordre"],
    sources: [
      {
        titre: "Le Mur Jaune — bilan des blessés",
        url: "https://lemurjaune.fr",
        type: "presse",
      },
      {
        titre: "Amnesty International — rapport LBD",
        url: "https://amnesty.fr",
        type: "officiel",
      },
      {
        titre: "Défenseur des droits — rapport Toubon",
        url: "https://défenseurdesdroits.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "décret-rivotril",
    titre: "Décret Rivotril — euthanasie légalisée ?",
    resume:
      "Le décret du 28 mars 2020 autorise un dépresseur respiratoire pour patients Covid en EHPAD, alors que l'accès hospitalier est restreint.",
    contenu: `Le décret n° 2020-360 du 28 mars 2020, signé par Édouard Philippe et Olivier Véran, autorise la dispensation du Rivotril (clonazépam) injectable en pharmacie pour les patients Covid « dont l'état clinique le justifie ».

Le Rivotril est une benzodiazépine dont l'un des effets principaux est la dépression respiratoire — précisément le symptôme du Covid grave. Des accusations d'« euthanasie légalisée » se répandent.

La pénurie de midazolam (médicament de référence pour les sédations, réservé aux réanimateurs) à provoqué le recours au Rivotril comme produit de substitution. Parallèlement, les ARS émettent des fiches restreignant l'accès hospitalier pour les résidents d'EHPAD dans le cadre du Plan Blanc.

Des familles ont été prévenues du décès de proches qu'elles avaient eus au téléphone la veille, sans pouvoir les revoir ni les enterrer en leur présence.`,
    date: "2020-03-28",
    gravite: "haute",
    themes: ["covid", "sante", "ehpad", "rivotril"],
    sources: [
      {
        titre: "Décret n° 2020-360 du 28 mars 2020",
        url: "https://legifrance.gouv.fr/jorf/id/JORFTEXT000041762964",
        type: "officiel",
      },
      {
        titre: "SFGG — réponse sur le Rivotril",
        url: "https://sfgg.org",
        type: "officiel",
      },
    ],
  },
  {
    slug: "masques-mensonge",
    titre: "Covid — « Le masque est inutile en population générale »",
    resume:
      "Déclaration du 13 mars 2020 sur TF1 alors que les stocks sont insuffisants. Maintien du 1er tour des municipales le 15 mars.",
    contenu: `Le 13 mars 2020, Édouard Philippe affirme sur TF1 que le port du masque est inutile « en population générale », avant de faire volte-face début avril.

Le premier tour des élections municipales est maintenu le 15 mars, deux jours avant le confinement national de 55 jours — l'un des plus stricts d'Europe.

Le gouvernement à nié l'utilité des masques alors que les stocks étaient insuffisants. La commission d'enquête parlementaire révélera les contradictions entre les déclarations publiques et la réalité de la gestion des stocks.

168 000 personnes sont décédées du Covid-19 entre 2020 et septembre 2023.`,
    date: "2020-03-13",
    gravite: "haute",
    themes: ["covid", "masques", "municipales", "mensonge"],
    sources: [
      {
        titre: "Interview TF1 — 13 mars 2020",
        url: "https://tf1.fr",
        type: "presse",
      },
      {
        titre: "Santé publique France — bilan Covid",
        url: "https://santepubliquefrance.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "80-kmh",
    titre: "80 km/h — la mesure imposée contre tous",
    resume:
      "Portée contre la volonté de Macron, massivement impopulaire, à contribué au mouvement des Gilets jaunes. Lien potentiel avec Atos (radars automatiques).",
    contenu: `En janvier 2018, Philippe annonce la réduction de la vitesse de 90 à 80 km/h sur les routes secondaires. C'est le dossier le plus personnel de son mandat : il le porté contre la volonté d'Emmanuel Macron lui-même.

La mesure est massivement impopulaire, particulièrement dans la France périurbaine et rurale. Elle contribue au ressentiment qui nourrira le mouvement des Gilets jaunes quelques mois plus tard.

Le groupe Atos — dont Philippe deviendra administrateur en 2020 (rémunéré ~70 000€/an) et avec lequel il entretient des liens depuis 2006 — est en pointe sur le traitement des données des infractions routières (radars automatiques). Boulevard Voltaire et Blast ont relevé un potentiel conflit d'intérêts.`,
    date: "2018-07-01",
    gravite: "moyenne",
    themes: ["80km", "sécurité-routière", "atos", "conflits-interets"],
    sources: [
      {
        titre: "Boulevard Voltaire — liens Atos",
        url: "https://bvoltaire.fr",
        type: "presse",
      },
      {
        titre: "Blast — enquête conflits d'intérêts",
        url: "https://blast-info.fr",
        type: "presse",
      },
    ],
  },
  {
    slug: "vaccins-obligatoires",
    titre: "11 vaccins obligatoires — « Dans la patrie de Pasteur »",
    resume:
      "8 vaccins supplémentaires imposés sous peine d'exclusion de la collectivité. Conflits d'intérêts avec les laboratoires soulevés.",
    contenu: `Édouard Philippe annonce en personne le 4 juillet 2017 : « L'an prochain, les vaccins pour la petite enfance qui sont unanimement recommandés par les autorités de santé deviendront obligatoires. Dans la patrie de Pasteur, ce n'est pas admissible » que des enfants meurent de la rougeole.

8 vaccins recommandés s'ajoutent aux 3 déjà obligatoires. La vaccination conditionne l'entrée en collectivité (crèches, écoles, centres de loisirs).

La mesure est contestée par les mouvements anti-vaccination et certains médecins qui estiment qu'« étendre l'obligation peut transformer des hésitants en opposants ». La question des conflits d'intérêts liés aux laboratoires est soulevée.`,
    date: "2018-01-01",
    gravite: "moyenne",
    themes: ["vaccins", "sante", "obligation", "libertés"],
    sources: [
      {
        titre: "Discours de politique générale — 4 juillet 2017",
        url: "https://gouvernement.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "cma-cgm-reseau",
    titre: "CMA CGM — les liens du réseau havrais",
    resume:
      "Les connexions entre le réseau d'Édouard Philippe et CMA CGM, géant du transport maritime basé au Havre, suscitent des interrogations.",
    contenu: `Yann Le Goff, responsable sécurité régionale chez CMA CGM, figure dans la promotion 2011 des Young Leaders de la French-American Foundation aux côtés d'Édouard Philippe.

Le port du Havre, fief politique de Philippe (maire depuis 2010), est le premier point d'entrée de cocaïne en Europe.

CMA CGM est le premier armateur français et l'un des plus grands groupes mondiaux de transport maritime. La convergence entre les fonctions de maire du Havre, les liens dans le réseau Young Leaders, et le rôle stratégique du port dans le trafic de stupéfiants mérite un examen attentif.`,
    date: "2026-03-25",
    gravite: "haute",
    themes: ["cma-cgm", "le-havre", "narcotrafic", "reseau", "young-leaders"],
    sources: [
      {
        titre:
          "French-American Foundation — promotion 2011",
        url: "https://frenchamerican.org",
        type: "officiel",
      },
    ],
  },
  {
    slug: "métropole-havre-enquete",
    titre: "Enquête PNF — gestion de la métropole du Havre",
    resume:
      "Enquête pour prise illégale d'intérêts, détournement de fonds publics, favoritisme et harcèlement moral. Perquisitions en avril 2024.",
    contenu: `En avril 2024, Édouard Philippe est visé par une enquête préliminaire du parquet national financier pour prise illégale d'intérêts, détournement de fonds publics, favoritisme et harcèlement moral.

L'enquête fait suite à une plainte d'une ancienne directrice générale adjointe de la métropole. Des perquisitions ont lieu à la mairie du Havre le 3 avril 2024.

En juin 2025, une plainte avec constitution de partie civile est déposée. Philippe conteste fermement toute irrégularité.`,
    date: "2024-04-03",
    gravite: "haute",
    themes: ["le-havre", "justice", "favoritisme", "fonds-publics"],
    sources: [
      {
        titre: "Parquet national financier — enquête",
        url: "https://justice.gouv.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "fcf-cma-cgm-nexus",
    titre: "Le nexus FCF — CMA CGM — Le Havre : un réseau d'influence sino-portuaire",
    resume:
      "Le directeur de cabinet de Philippe à Matignon (Ribadeau-Dumas, ENA Marc-Bloch) est membre de la France China Foundation. Le co-créateur de la FCF (Lenain) est conseiller diplomatique de Philippe. CMA CGM, premier client du port du Havre, est au cœur de ce réseau. Le Havre est le 1er point d'entrée de cocaïne en Europe.",
    contenu: `Benoît Ribadeau-Dumas, directeur de cabinet d'Édouard Philippe à Matignon de 2017 à 2020, est issu de la même promotion ENA Marc-Bloch (1995-1997) que Philippe. Il est également membre de la France China Foundation (promotion 2013).

Emmanuel Lenain, co-créateur de la France China Foundation, est le conseiller diplomatique d'Édouard Philippe à Matignon. Il fait le lien entre les réseaux transatlantiques (French-American Foundation) et sino-français (FCF) autour du Premier ministre.

CMA CGM, premier armateur français et l'un des plus grands groupes mondiaux de transport maritime, est un acteur majeur des routes commerciales vers l'Asie. Ses navires représentent une part significative du trafic du port du Havre — fief politique d'Édouard Philippe depuis 2010.

Yann Le Goff, responsable de la sécurité régionale chez CMA CGM, est dans la promotion Young Leaders 2011 de Philippe à la French-American Foundation.

Le port du Havre est le premier point d'entrée de la cocaïne en Europe selon Europol. Les saisies de drogue y ont explosé : 18 tonnes de cocaïne saisies en 2023 selon les douanes françaises. La question de la sécurité portuaire — domaine où se croisent les intérêts de CMA CGM, la responsabilité du maire, et les réseaux d'influence franco-chinois — mérite un examen approfondi.

Ce faisceau de connexions — même promotion ENA, même réseau Young Leaders, mêmes cercles franco-chinois, même port stratégique — dessine un système d'influence qui entoure Édouard Philippe depuis ses années de formation jusqu'à son exercice du pouvoir.`,
    date: "2026-03-27",
    gravite: "haute",
    themes: [
      "fcf",
      "cma-cgm",
      "le-havre",
      "narcotrafic",
      "reseau",
      "young-leaders",
      "ribadeau-dumas",
      "influence",
    ],
    sources: [
      {
        titre: "France China Foundation — liste des membres",
        url: "https://francechinafoundation.org",
        type: "officiel",
      },
      {
        titre: "French-American Foundation — promotion 2011",
        url: "https://frenchamerican.org",
        type: "officiel",
      },
      {
        titre: "Europol — rapport narcotrafic portuaire",
        url: "https://europol.europa.eu",
        type: "officiel",
      },
      {
        titre: "Douanes françaises — saisies 2023",
        url: "https://douane.gouv.fr",
        type: "officiel",
      },
    ],
  },
];

export type SousReseau =
  | "young-leaders"
  | "sino-francais"
  | "matignon"
  | "le-havre"
  | "entreprises"
  | "horizons"
  | "villepin"
  | "chiraquien"
  | "facilitateurs"
  | "portuaire"
  | "bilderberg"
  | "coalition-2027";

export type Centroide = "philippe" | "juppe" | "raffarin" | "villepin";

export type PersonneReseau = {
  nom: string;
  slug: string;
  role: string;
  description: string;
  typeLien: string;
  partiPolitique?: string;
  sousReseaux?: SousReseau[];
  /** Si défini, ce nœud est rattaché à un centroïde spécifique dans le graphe */
  rattachement?: Centroide | Centroide[];
};

export const reseau: PersonneReseau[] = [
  {
    nom: "Emmanuel Macron",
    slug: "emmanuel-macron",
    role: "Président de la République — Young Leader 2012",
    description:
      "Emmanuel Macron est sélectionné Young Leader de la promotion 2012, un an après Édouard Philippe. Leur mentor commun, Alain Juppé, appartenait à la promotion fondatrice de 1982 — trois générations de Young Leaders liées par un même parrain politique. Macron nomme Philippe Premier ministre le 15 mai 2017, malgré les critiques antérieures de ce dernier (« ancien banquier de chez Rothschild », « cynisme d'un vieux routier »). Ce ralliement post-critiques illustre la force des liens de réseau sur les positions publiques. Macron est issu de l'inspection des finances, puis de la banque Rothschild, avant d'être nommé secrétaire général adjoint de l'Élysée sous Hollande (lui-même Young Leader 1996). La chaîne Hollande (YL 1996) → Macron (YL 2012) → Philippe (YL 2011) au sommet de l'État est unique dans l'histoire de la FAF. Les tensions entre les deux hommes sont croissantes depuis 2020 : Philippe reproche à Macron la dissolution de 2024 (« décision funeste et absurde ») et l'appelle à démissionner fin 2025. La promotion 2012 de Macron incluait aussi Fleur Pellerin et Cédric Villani, tous deux devenus des figures politiques. Le fait qu'un président et son Premier ministre soient issus de promotions consécutives du même programme transatlantique est sans précédent et soulève des questions sur l'influence américaine dans la formation des élites dirigeantes françaises.",
    typeLien: "politique",
    partiPolitique: "LREM/Renaissance",
    sousReseaux: ["young-leaders", "matignon"],
  },
  {
    nom: "Alain Juppé",
    slug: "alain-juppe",
    role: "Parrain neutralisé — Conseil constitutionnel — YL FAF 1982 — Institut Pompidou",
    description:
      "Alain Juppé est le parrain de tout l'écosystème. Premier ministre de Chirac (1995-1997), condamné en 2004 (emplois fictifs RPR), Young Leader de la promotion fondatrice FAF (1982), maire de Bordeaux (2006-2019), membre du Conseil constitutionnel depuis mars 2019 (mandat jusqu'en 2028), président de l'Institut Georges-Pompidou depuis février 2025. C'est Juppé qui lance Philippe en politique (DG de l'UMP en 2002), et Villepin l'a côtoyé dès le « groupe J » (1979) avant d'être nommé dircab au Quai d'Orsay par Juppé (1993). Le triangle Juppé (YL 1982) → Philippe (YL 2011) → Macron (YL 2012) est le cas le plus spectaculaire de transmission du pouvoir au sein de la FAF. Aujourd'hui neutralisé par les contraintes du CC (devoir de réserve, interdiction de toute responsabilité partisane, incompatibilité avec tout mandat), il ne peut ni soutenir Philippe, ni s'exprimer sur les sujets politiques, ni exercer de rôle dans Horizons. Mais son pouvoir résiduel est triple : institutionnel (il participe aux décisions constitutionnelles, siège avec Richard Ferrand YL 2005), symbolique (son héritage irrigue Horizons : pragmatisme, européisme, libéralisme tempéré), et réticulaire (la « Juppéie » — son réseau informel de fidèles — forme l'épine dorsale d'Horizons). Publication de L'heure du choix (Tallandier, 2025) sur l'indépendance européenne. « Alain Juppé a perdu mais les juppéistes ont gagné : ils sont partout dans les cabinets ministériels » (Julien Miro).",
    typeLien: "politique",
    partiPolitique: "CC (ex-UMP/LR)",
    sousReseaux: ["young-leaders", "chiraquien"],
    rattachement: ["philippe", "juppe", "villepin"],
  },
  {
    nom: "CMA CGM",
    slug: "cma-cgm",
    role: "1er armateur français — transport maritime mondial",
    description:
      "CMA CGM est le premier armateur français et le troisième mondial, fondé à Marseille par Jacques Saadé en 1978. Le groupe possède plus de 600 navires et dessert 420 ports dans le monde. Yann Le Goff, responsable de la sécurité régionale chez CMA CGM, est sélectionné dans la promotion 2011 des Young Leaders aux côtés d'Édouard Philippe. Le port du Havre, fief politique de Philippe depuis 2010, est l'un des principaux hubs de CMA CGM en Europe — les navires du groupe représentent une part significative du trafic conteneurisé havrais. Le Havre est le premier point d'entrée de la cocaïne en Europe selon Europol, avec 18 tonnes saisies en 2023. La question de la sécurité portuaire — domaine où se croisent CMA CGM (via Le Goff), la responsabilité du maire (Philippe), et les réseaux transatlantiques (FAF) — est un nœud critique. CMA CGM a été dirigé par Rodolphe Saadé depuis 2017, et le groupe a diversifié ses activités dans les médias (rachat de La Tribune, La Provence) et la logistique. La France China Foundation, dont Ribadeau-Dumas (dircab de Philippe) est membre, s'inscrit dans les mêmes circuits d'influence sino-maritimes. Les routes commerciales CMA CGM vers l'Asie transitent massivement par Le Havre, faisant du port un point de convergence entre intérêts commerciaux, diplomatiques et politiques.",
    typeLien: "financier",
    sousReseaux: ["sino-francais", "le-havre", "entreprises"],
  },
  {
    nom: "Yann Le Goff",
    slug: "yann-le-goff",
    role: "Responsable sécurité régionale CMA CGM — Young Leader 2011",
    description:
      "Yann Le Goff est responsable de la sécurité régionale chez CMA CGM, premier armateur français, au moment de sa sélection comme Young Leader en 2011 aux côtés d'Édouard Philippe. Sa fonction chez CMA CGM le place au cœur des enjeux de sécurité du transport maritime — un domaine qui inclut la lutte contre le narcotrafic dans les ports. Le port du Havre, fief politique de Philippe, est le premier point d'entrée de la cocaïne en Europe selon Europol. Les navires CMA CGM représentent une part majeure du trafic conteneurisé au Havre, ce qui signifie que la sécurité CMA CGM et la sécurité portuaire havraise sont intimement liées. Le Goff et Philippe se sont côtoyés lors de deux séminaires de cinq jours en 2011-2012, forgeant des liens personnels dans un cadre informel et confidentiel. La présence dans la même promotion Young Leaders d'un futur maire/Premier ministre et d'un responsable sécurité du principal armateur opérant dans son port crée un canal d'influence direct. Cette connexion est d'autant plus significative que la question du narcotrafic portuaire est devenue un enjeu politique majeur en France, avec des saisies record au Havre (18 tonnes de cocaïne en 2023). Le Goff représente le nœud CMA CGM dans le réseau Young Leaders de Philippe. La convergence entre son poste (sécurité maritime), le territoire de Philippe (Le Havre) et le problème structurel (narcotrafic) mérite un examen approfondi.",
    typeLien: "professionnel",
    sousReseaux: ["young-leaders", "le-havre"],
  },
  {
    nom: "Atos",
    slug: "atos",
    role: "Groupe informatique — radars automatiques — administrateur Philippe",
    description:
      "Atos est un groupe informatique français spécialisé dans la transformation numérique, la cybersécurité et le cloud computing. Édouard Philippe y est nommé administrateur indépendant en 2020, immédiatement après son départ de Matignon, pour un mandat rémunéré environ 70 000 euros par an. Atos est en pointe sur le traitement des données informatisées des infractions routières, notamment les radars automatiques, un marché qui a directement bénéficié de la mesure du 80 km/h imposée par Philippe en 2018. Boulevard Voltaire et Blast ont relevé ce potentiel conflit d'intérêts : le Premier ministre qui impose une mesure routière massivement impopulaire rejoint ensuite le conseil d'administration de l'entreprise qui traite les données générées par cette même mesure. Les liens entre Philippe et Atos remontent à 2006, bien avant sa nomination à Matignon. L'entreprise a connu de graves difficultés financières à partir de 2022, avec une chute spectaculaire de son cours de bourse et des restructurations massives. Atos gère également des activités stratégiques pour l'État français (supercalculateurs, défense, JO 2024), ce qui en fait un acteur sensible dont l'administrateur est aussi un candidat à la présidentielle. La chronologie — 80 km/h en 2018, départ de Matignon en 2020, nomination chez Atos en 2020 — soulève des questions sur la porosité entre décisions publiques et intérêts privés. Philippe n'a jamais commenté publiquement ce potentiel conflit d'intérêts.",
    typeLien: "financier",
    sousReseaux: ["entreprises"],
  },
  {
    nom: "Areva",
    slug: "areva",
    role: "Industrie nucléaire — lobbying — employeur de Philippe (2007-2010)",
    description:
      "Areva (devenue Orano en 2018) est la multinationale française de l'industrie nucléaire, couvrant l'ensemble du cycle du combustible. Édouard Philippe y occupe le poste de directeur des affaires publiques d'octobre 2007 à octobre 2010, une fonction de lobbying et de relations avec les élus qui le maintient au cœur de la sphère décisionnelle. Cette période coïncide avec sa sélection comme Young Leader en 2011, alors qu'il est présenté comme « maire du Havre et directeur des affaires publiques d'Areva ». Le lobbying nucléaire est l'un des plus puissants en France, où l'industrie représente environ 70% de la production électrique. En tant que directeur des affaires publiques, Philippe était chargé de défendre les intérêts d'Areva auprès des parlementaires et du gouvernement — les mêmes institutions qu'il dirigera plus tard comme Premier ministre. Sa trajectoire Conseil d'État → Debevoise & Plimpton (avocat d'affaires) → Areva (lobbying) → mairie du Havre → Matignon illustre un parcours classique de pantouflage entre public et privé. Areva a connu un scandale majeur avec le rachat désastreux d'UraMin en 2007 (3,6 milliards d'euros de pertes), une affaire qui a éclaté pendant la période où Philippe y travaillait. Le groupe a dû être restructuré et recapitalisé par l'État à hauteur de 5 milliards d'euros en 2017 — sous le gouvernement Philippe. Le Premier ministre qui sauve l'entreprise qui l'a employé comme lobbyiste est un cas d'école de conflit d'intérêts potentiel.",
    typeLien: "professionnel",
    sousReseaux: ["entreprises"],
  },
  {
    nom: "Debevoise & Plimpton",
    slug: "debevoise-plimpton",
    role: "Cabinet d'avocats anglo-saxon — employeur de Philippe (2004-2007)",
    description:
      "Debevoise & Plimpton LLP est un cabinet d'avocats américain fondé en 1931 à New York, spécialisé dans le droit des affaires internationales, les fusions-acquisitions, le private equity et l'arbitrage international. Le cabinet compte environ 800 avocats et des bureaux à New York, Washington, Londres, Paris, Francfort, Hong Kong et Shanghai. Édouard Philippe y exerce comme avocat de 2004 à 2007, dans la filiale parisienne, après avoir quitté ses fonctions de directeur général de l'UMP et s'être mis en disponibilité du Conseil d'État. Ce passage dans un cabinet anglo-saxon de premier plan illustre la trajectoire classique du pantouflage : haute fonction publique (ENA, Conseil d'État), direction de parti politique (UMP), puis secteur privé international, avant de revenir en politique. Debevoise représente des entreprises du Fortune 500 et des fonds d'investissement, ce qui a permis à Philippe de tisser un réseau dans les milieux d'affaires internationaux. Le cabinet est présent à Hong Kong et Shanghai, centres névralgiques du commerce asiatique — un détail qui prend son sens au regard des connexions sino-françaises ultérieures de l'entourage de Philippe. Après Debevoise, Philippe rejoint Areva comme directeur des affaires publiques (lobbying), confirmant son ancrage dans les cercles d'influence économiques. La séquence Conseil d'État → UMP → Debevoise → Areva → mairie → Matignon dessine un parcours où chaque étape enrichit le carnet d'adresses de la suivante. Le passage chez Debevoise est la parenthèse anglo-saxonne de ce parcours essentiellement français. Les honoraires et les mandats qu'il a gérés chez Debevoise n'ont jamais été rendus publics.",
    typeLien: "professionnel",
    sousReseaux: ["entreprises"],
  },
  {
    nom: "Antoine Rufenacht",
    slug: "antoine-rufenacht",
    role: "Ancien maire du Havre — mentor et prédécesseur de Philippe",
    description:
      "Antoine Rufenacht est le maire du Havre de 1995 à 2010, ancien énarque et figure de la droite normande. C'est lui qui identifie Édouard Philippe comme successeur potentiel et le fait entrer en politique en 2001, en l'intégrant à sa liste municipale comme adjoint chargé des affaires juridiques. Rufenacht recommande ensuite Philippe à Alain Juppé pour la direction de l'UMP en 2002, lançant ainsi sa carrière nationale. Quand Rufenacht démissionne de la mairie en 2010, le conseil municipal élit Philippe pour lui succéder — une transmission du pouvoir local parfaitement orchestrée. Christine Poyer-Rufenacht, avocate portant le même patronyme que l'ancien maire, est sélectionnée dans la promotion 2011 des Young Leaders de la FAF aux côtés de Philippe — une coïncidence qui n'a jamais été expliquée publiquement. Rufenacht a dirigé Le Havre pendant quinze ans, façonnant le réseau politique et économique local que Philippe hérite. Sous Rufenacht, Le Havre engage une transformation urbaine autour du port et de l'architecture Perret classée UNESCO. La relation Rufenacht-Philippe est un cas d'école de succession politique locale : le mentor identifie, forme et installe son protégé à la tête de la ville. L'ancrage havrais de Philippe — mairie, port, communauté urbaine — est directement hérité du réseau Rufenacht. Le fait que le mentor local et le réseau transatlantique (FAF) convergent autour du même patronyme interroge sur les mécanismes de cooptation dans les élites françaises.",
    typeLien: "politique",
    sousReseaux: ["le-havre"],
  },
  {
    nom: "French-American Foundation",
    slug: "french-american-foundation",
    role: "Réseau transatlantique — Young Leaders",
    description:
      "La French-American Foundation (FAF) est une organisation fondee en 1976 sous les auspices des présidents Gerald Ford et Valery Giscard d'Estaing. Son programme Young Leaders, crée en 1981, sélectionné chaque année dix Français et dix Américains ages de 30 à 40 ans, issus de la haute fonction publique, de l'entreprise, des medias, de l'armee et de la recherche. Les participants suivent deux séminaires de cinq jours sur deux années consécutives, alternativement en France et aux Etats-Unis. Le contenu des séminaires n'est pas publié — la FAF ne divulgue pas les ordres du jour des éditions passées. A l'issue du programme, les participants integrent un réseau d'alumni de plus de 600 membres. Le programme est régulièrement decrit comme un instrument du soft power américain, même si la FAF se présenté comme n'étant « ni un think tank, ni un lobby, ni une amicale parlementaire ». La présence des Young Leaders au gouvernement français est remarquable et transcende les alternances politiques. Édouard Philippe appartient à la promotion 2011, Emmanuel Macron à la promotion 2012, Alain Juppé à la promotion fondatrice de 1982, François Hollande à celle de 1996. Richard Ferrand, ministre du gouvernement Philippe, était Young Leader 2005. Plus de 400 dirigeants ont bénéficié du programme depuis 1981, et le fait qu'un président et son Premier ministre soient issus de promotions consécutives est sans précédent dans l'histoire de la FAF. Les sponsors du programme incluent Airbus, J.P. Morgan et Sodexo.",
    typeLien: "mediatique",
    sousReseaux: ["young-leaders"],
  },
  // --- Young Leaders promotion 2011 (côté français) ---
  {
    nom: "David Barroux",
    slug: "david-barroux",
    role: "Rédacteur en chef aux Échos — Young Leader 2011",
    description:
      "David Barroux est journaliste et rédacteur en chef au quotidien économique Les Échos, l'un des principaux journaux d'affaires français. Il fait partie de la promotion 2011 des Young Leaders de la French-American Foundation, aux côtés d'Édouard Philippe. Sa position à la tête d'un media économique de référence lui confere une influence significative sur la couverture de la politique économique française. Les Échos appartiennent au groupe LVMH de Bernard Arnault, ce qui inscrit Barroux dans un écosystème médiatique lie aux grandes fortunes françaises. En tant que Young Leader, il à partage avec Philippe deux séminaires de cinq jours entre 2011 et 2012, forgeant des liens personnels et professionnels durables. La convergence entre un futur Premier ministre et un rédacteur en chef d'un grand quotidien dans le même réseau transatlantique mérite d'etre notee. Les Échos ont généralement accorde une couverture favorable aux réformes du gouvernement Philippe, notamment sur le Code du travail et la loi PACTE. Cette proximite illustre l'imbrication des élites politiques et médiatiques françaises au sein des mêmes réseaux d'influence. Barroux représente le pilier médiatique de la promotion 2011. La FAF ne publié pas les echanges qui ont eu lieu entre ces futurs dirigeants lors des séminaires.",
    typeLien: "mediatique",
    sousReseaux: ["young-leaders"],
  },
  {
    nom: "Yohann Bénard",
    slug: "yohann-benard",
    role: "Directeur des affaires publiques Amazon France — Young Leader 2011",
    description:
      "Yohann Bénard est directeur des affaires publiques d'Amazon France au moment de sa sélection comme Young Leader en 2011. Il partage la promotion de la FAF avec Édouard Philippe, alors maire du Havre et directeur des affaires publiques d'Areva. Les deux hommes occupent donc des fonctions similaires — le lobbying et les relations institutionnelles — l'un pour le geant du nucléaire, l'autre pour le geant du e-commerce américain. Amazon est l'une des entreprises les plus controversees en France pour ses pratiques sociales, fiscales et son impact sur le commerce de proximite. Bénard est charge de défendre les intérêts d'Amazon auprès des élus et des administrations françaises. En partageant un réseau d'élite transatlantique avec un futur Premier ministre, il dispose d'un accès privilégié aux cercles décisionnels. Le gouvernement Philippe n'a pas particulièrement durci la fiscalite des GAFA pendant ses trois années à Matignon, malgre les promesses en la matière. La présence simultanee dans la promotion 2011 d'un lobbyiste d'Amazon et d'un lobbyiste d'Areva qui deviendra Premier ministre illustre la porosité entre intérêts corporatistes et pouvoir politique. Les séminaires de la FAF ont offert un cadre informel pour tisser ces liens. Bénard représente le pilier corporate américain de la promotion.",
    typeLien: "professionnel",
    sousReseaux: ["young-leaders"],
  },
  {
    nom: "Stéphane Israel",
    slug: "stephane-israel",
    role: "Président exécutif d'Arianespace — Young Leader 2011",
    description:
      "Stéphane Israël est sélectionné comme Young Leader 2011, la même année qu'Édouard Philippe. Il deviendra président exécutif d'Arianespace, le leader mondial des services de lancement spatial, filiale d'ArianeGroup (joint-venture Airbus/Safran). Avant Arianespace, Israël à été directeur de cabinet de la ministre de l'Enseignement superieur et de la Recherche Genevieve Fioraso (2012-2014) sous la présidence Hollande. Il incarne le profil type du pantouflage entre haute fonction publique et industrie stratégique. Sa trajectoire — cabinet ministériel puis direction d'une entreprise publique — est comparable à celle de Philippe (Conseil d'État, Areva, politique). Arianespace est un acteur cle de la souveraineté spatiale européenne, et son président entretient nécessairement des relations étroites avec le pouvoir exécutif français. La présence d'Israël dans la même promotion Young Leaders que Philippe crée un lien transversal entre les industries nucléaire, spatiale et le pouvoir politique. Airbus, maison-mère d'ArianeGroup, est par ailleurs l'un des sponsors du programme Young Leaders de la FAF. Ces interconnexions entre sponsors du programme et membres sélectionnés soulèvent des questions sur l'indépendance du processus de sélection. Israël représente le pilier industriel stratégique de la promotion 2011.",
    typeLien: "professionnel",
    sousReseaux: ["young-leaders", "entreprises"],
  },
  {
    nom: "Christine Poyer-Rufenacht",
    slug: "christine-poyer-rufenacht",
    role: "Avocate associée — Young Leader 2011",
    description:
      "Christine Poyer-Rufenacht est avocate associée, sélectionnée dans la promotion 2011 des Young Leaders de la FAF aux côtés d'Édouard Philippe. Son patronyme n'est pas sans évoquer Antoine Rufenacht, le maire du Havre qui à lance Philippe en politique en 2001 — une homonymie troublante que la biographie officielle ne commenté pas. Antoine Rufenacht à été le mentor local de Philippe, lui offrant sa première place sur une liste municipale puis le recommandant pour la direction de l'UMP auprès d'Alain Juppé. La présence dans la même promotion Young Leaders d'un protégé de Rufenacht et d'une personne portant le même nom de famille interroge sur les mécanismes de cooptation au sein de ces réseaux. La FAF ne publié pas les criteres de sélection détaillés, et le processus de candidature repose en partie sur le parrainage. Si Christine Poyer-Rufenacht est parente d'Antoine Rufenacht, cela constituerait un cas de réseau familial et politique se reproduisant au sein d'une institution transatlantique. A minima, la coïncidence patronymique illustre l'etroitesse des cercles dans lesquels evoluent les élites françaises sélectionnées par la FAF. Le Havre apparait comme un nœud recurrent dans ces réseaux : Philippe, Rufenacht, CMA CGM. Cette connexion mérite une investigation approfondie. L'opacité de la FAF sur ses processus rend la verification difficile.",
    typeLien: "mediatique",
    sousReseaux: ["young-leaders", "le-havre"],
  },
  {
    nom: "Estelle Youssouffa",
    slug: "estelle-youssouffa",
    role: "Deputee de Mayotte — Young Leader 2011",
    description:
      "Estelle Youssouffa est aujourd'hui députée de la première circonscription de Mayotte, élue en 2022. Elle est sélectionnée comme Young Leader 2011 dans la même promotion qu'Édouard Philippe. Avant son entrée en politique, Youssouffa était journaliste, notamment pour France 24 et Al Jazeera, ce qui l'inscrit dans le pilier médiatique du programme. Son parcours — du journalisme international à la représentation parlementaire — illustre la trajectoire classique des Young Leaders vers les postes de pouvoir. En tant que députée, elle siege à l'Assemblee nationale où le groupe Horizons d'Édouard Philippe dispose également de représentants, creant des possibilites d'alliance parlementaire entre anciens de la même promotion. Mayotte est un territoire confronte à des defis majeurs (immigration, sécurité, developpement) qui font régulièrement l'objet de débats nationaux. La présence de Youssouffa et Philippe dans la même promotion FAF etablit un lien entre les enjeux ultramarins et le réseau philippiste. Le programme Young Leaders à historiquement produit des connexions durables entre ses membres, qui se retrouvent ensuite à des postes d'influence dans différéntes spheres. Cette dynamique de cohorte est l'un des mécanismes les plus efficaces du réseau. Youssouffa représente le pilier ultramarin et médiatique de la promotion 2011.",
    typeLien: "politique",
    sousReseaux: ["young-leaders"],
  },
  // --- Young Leaders d'autres promotions connectes à Philippe ---
  {
    nom: "Richard Ferrand",
    slug: "richard-ferrand",
    role: "Ancien président de l'Assemblee nationale — Young Leader 2005",
    description:
      "Richard Ferrand est un homme politique français, ancien président de l'Assemblee nationale (2018-2022) et ancien ministre de la Cohesion des territoires dans le premier gouvernement d'Édouard Philippe (mai-juin 2017). Il est Young Leader de la promotion 2005, six ans avant Philippe. Ferrand est l'un des premiers soutiens d'Emmanuel Macron et cofondateur d'En Marche en 2016. En tant que ministre de Philippe puis président de l'Assemblee, il à été un rouage essentiel du système macroniste dans lequel Philippe à opère. Sa promotion Young Leader 2005 l'inscrit dans le même réseau transatlantique que Philippe (2011), Macron (2012) et Juppé (1982). Le fait que le ministre de la Cohesion des territoires et le Premier ministre soient tous deux d'anciens Young Leaders illustre la densité de ce réseau au sein du gouvernement. Ferrand à été mis en examen en 2019 pour prise illégale d'intérêts dans une affaire immobiliere — les Mutuelles de Bretagne. Il à bénéficié d'un non-lieu en 2023. Son parcours judiciaire montre que l'appartenance au réseau Young Leaders ne protégé pas nécessairement des poursuites. Néanmoins, la convergence entre Young Leaders au sommet de l'exécutif et du legislatif mérite un examen critique.",
    typeLien: "politique",
    partiPolitique: "LREM/Renaissance",
    sousReseaux: ["young-leaders", "matignon"],
  },
  {
    nom: "François Hollande",
    slug: "francois-hollande",
    role: "Ancien président de la République — Young Leader 1996",
    description:
      "François Hollande, président de la République de 2012 à 2017, est Young Leader de la promotion 1996 de la FAF, aux côtés de Pierre Moscovici. Son passage par le programme quinze ans avant Philippe illustre la continuite du réseau à travers les générations politiques et les alternances. Hollande nommé Manuel Valls puis Bernard Cazeneuve à Matignon, mais c'est son successeur Macron (Young Leader 2012) qui nommera Philippe (Young Leader 2011). La chaîne de succession présidentielle Hollande-Macron est donc une chaîne interne au réseau Young Leaders. Hollande à été premier secrétaire du PS pendant onze ans (1997-2008) avant d'accéder à la présidence, ce qui lui à permis de structurer un réseau politique dense. Sa promotion 1996 incluait Pierre Moscovici, futur commissaire européen puis président de la Cour des comptes, illustrant la diversite des postes occupes par les anciens Young Leaders. Le programme FAF à ainsi produit deux présidents de la République (Hollande et Macron), au moins quatre Premiers ministres (Juppé, Philippe, et indirectement d'autres), et de nombreux ministres. Cette concentration de pouvoir issu d'un même programme de sélection soulève des questions démocratiques sur la formation des élites dirigeantes françaises. Hollande à critique Philippe à plusieurs reprises après 2017, mais ils partagent le même réseau structurel.",
    typeLien: "politique",
    partiPolitique: "PS",
    sousReseaux: ["young-leaders"],
  },
  {
    nom: "Laurent Wauquiez",
    slug: "laurent-wauquiez",
    role: "Président de la region Auvergne-Rhone-Alpes — Young Leader 2006",
    description:
      "Laurent Wauquiez, président de la region Auvergne-Rhone-Alpes et ancien président des Republicains (2017-2019), est Young Leader de la promotion 2006. Il représente l'aile droite du même réseau transatlantique qu'Édouard Philippe. Les deux hommes se sont affrontes au sein de LR avant que Philippe ne rejoigne Macron en 2017. Wauquiez à vivement critique la nomination de Philippe à Matignon, la qualifiant de trahison envers la droite. Malgre leur rivalite politique, ils partagent le même parcours de formation d'élite — ENA pour les deux, Young Leaders pour les deux. Wauquiez est considéré comme un potentiel candidat à la Présidentielle 2027, ce qui en ferait un rival direct de Philippe issu du même réseau. Le fait que deux candidats potentiels à la présidentielle soient d'anciens Young Leaders illustre la capacité du programme à produire les futurs dirigeants du pays, quel que soit le bord politique. La promotion 2006 de Wauquiez le place entre les générations Ferrand (2005) et Philippe (2011) dans la chronologie du réseau. Sa trajectoire politique — de secrétaire d'État sous Sarkozy à président de region — montre un parcours parallele à celui de Philippe mais dans un registre plus droitier. Les séminaires FAF ont potentiellement permis à Wauquiez et Philippe de se croiser via le réseau alumni avant même leur confrontation politique publique.",
    typeLien: "politique",
    partiPolitique: "LR",
    sousReseaux: ["young-leaders"],
  },
  {
    nom: "Fleur Pellerin",
    slug: "fleur-pellerin",
    role: "Ancienne ministre de la Culture — Young Leader 2012",
    description:
      "Fleur Pellerin est sélectionnée dans la promotion 2012 des Young Leaders, la même année qu'Emmanuel Macron. Elle est alors ministre déléguée aux PME, à l'Innovation et à l'Economie numérique sous Hollande, puis deviendra ministre de la Culture (2014-2016). Sa promotion 2012 est la promotion immédiatement successive à celle de Philippe (2011), ce qui signifie que les séminaires des deux cohortes se chevauchaient potentiellement — le second séminaire de Philippe en 2012 pouvait coincider avec le premier de Pellerin et Macron. Pellerin est diplôme de l'ENA (promotion Senghor, 2000), une école qui revient constamment dans les profils Young Leaders. Après son passage ministériel, elle à fondé une société de capital-risque, Korelya Capital, spécialisée dans l'investissement en Asie — creant un pont entre les réseaux transatlantiques (FAF) et asiatiques qui rappelle la France China Foundation. Pellerin est nee en Coree du Sud et adoptée en France, ce qui lui confere un profil biculturel valorise par la FAF. Sa trajectoire post-ministérielle vers le capital-risque asiatique illustre comment les connexions tissees dans les réseaux d'élite se transforment en opportunités économiques. La promotion 2012, qui inclut aussi Macron et Cédric Villani, est l'une des plus politiquement influentes de l'histoire du programme.",
    typeLien: "politique",
    partiPolitique: "PS",
    sousReseaux: ["young-leaders"],
  },
  {
    nom: "Laphonza Butler",
    slug: "laphonza-butler",
    role: "Senatrice de Californie — Young Leader 2011 (USA)",
    description:
      "Laphonza Butler est une femme politique américaine, nommee sénatrice de Californie en octobre 2023 par le gouverneur Gavin Newsom pour remplacer la sénatrice Dianne Feinstein. Elle fait partie de la promotion 2011 des Young Leaders, côté américain, aux côtés d'Édouard Philippe côté français. Avant le Senat, Butler était présidente du SEIU Local 2015, le plus grand syndicat de travailleurs de la santé en Californie (400 000 membres). Elle à ensuite dirigé EMILYs List, l'organisation democrate de soutien aux candidates feministes. Sa nomination au Senat illustre la trajectoire des Young Leaders américains vers les plus hautes fonctions. Le fait qu'un sénateur américain et un ancien Premier ministre français aient été formes ensemble dans le même programme transatlantique crée un canal d'influence direct entre le Senat américain et la politique française. Butler à côtoyé Philippe pendant deux séminaires de cinq jours en 2011-2012, forgeant des liens personnels durables. Le programme Young Leaders est concu précisément pour creer ces ponts entre futurs dirigeants des deux pays. Butler représente le pilier politique progressiste américain de la promotion 2011. Sa présence illustre la capacité de la FAF à identifier de futurs leaders bien avant leur accession aux fonctions les plus elevees.",
    typeLien: "mediatique",
    sousReseaux: ["young-leaders"],
  },
  {
    nom: "Horizons",
    slug: "horizons",
    role: "Parti politique — véhicule présidentiel 2027",
    description:
      "Horizons est le parti politique fondé par Édouard Philippe le 9 octobre 2021 lors d'une reunion publique au Havre, sa ville fief. Le parti se positionné au centre-droit, incarnant l'aile droite de la majorité présidentielle macroniste. Ses quatre themes centraux sont la demographie, l'environnement, la geopolitique et la technologie, sous le slogan « Voir loin pour faire bien ». Emmanuel Macron goûte peu la création d'Horizons par cet ancien Premier ministre « loyal mais libre ». En janvier 2022, le parti intègre la coalition Ensemble Citoyens. Christian Estrosi, maire de Nice, en devient le numéro deux, apportant un ancrage méditerranéen au parti ancre en Normandie. Pour les législatives de 2022, Horizons obtient 58 investitures au sein de la coalition et constitue un groupe parlementaire « Horizons et indépendants » d'une trentaine de députés, présidé par Laurent Marcangeli. Après la dissolution de 2024, le parti ne conserve que 6 sièges. En mars 2026, Horizons revendique 465 maires encarté sur l'ensemble du territoire — un maillage local qui constitue la colonne vertébrale de la campagne Présidentielle 2027 de Philippe. Le parti fonctionne comme un véhicule électoral personnel : son seul objectif stratégique est de porter Philippe à l'Élysée. Les cadres du parti sont largement issus du réseau havrais et juppeiste de Philippe.",
    typeLien: "politique",
    partiPolitique: "Horizons",
    sousReseaux: ["horizons"],
  },
  {
    nom: "Christian Estrosi",
    slug: "christian-estrosi",
    role: "Maire de Nice — numéro 2 d'Horizons — relais méditerranéen",
    description:
      "Christian Estrosi est le maire de Nice depuis 2008 (avec une interruption 2014-2017 où il était président de la region PACA) et le numéro deux du parti Horizons d'Édouard Philippe. Ancien ministre de l'Industrie sous Sarkozy (2009-2010) et figure de la droite provencale, Estrosi apporte à Horizons un ancrage sudiste qui complète l'ancrage normand de Philippe. Son ralliement à Horizons en 2021 est un coup politique majeur : il quitte LR pour rejoindre un parti centriste, entrainant une partie de la droite nicoise et azureenne. Nice est la cinquième ville de France et un hub touristique et économique de premier plan, ce qui confere à Estrosi un poids politique considérable au sein du parti. Estrosi à été marque par l'attentat de Nice du 14 juillet 2016 (86 morts), qu'il à gère en tant que président de la métropole — un événement qui à forge son image de gestionnaire de crise. Il est marie à Laura Tenoudji, journaliste, ce qui lui assure une visibilité médiatique supplementaire. Au sein d'Horizons, Estrosi joue le rôle de recruteur auprès des élus LR tentés par le centre-droit. Sa trajectoire illustre la stratégie de Philippe : absorber les cadres de droite deçus par l'évolution de LR vers la droite dure. Le duo Philippe (Normandie) / Estrosi (PACA) donne à Horizons une assise bi-régionale qui structurera la campagne Présidentielle 2027. Estrosi est également vice-président d'Intercommunalites de France, ce qui lui confere un réseau territorial complémentaire à celui de Philippe.",
    typeLien: "politique",
    partiPolitique: "Horizons",
    sousReseaux: ["horizons"],
  },
  {
    nom: "Gilles Boyer",
    slug: "gilles-boyer",
    role: "Alter ego de Philippe — 1er cercle Juppéie — eurodéputé Renaissance",
    description:
      "Gilles Boyer est le conseiller le plus proche d'Édouard Philippe depuis plus de vingt ans, forgé dans l'orbite de Juppé. Directeur de cabinet de Juppé à la mairie de Bordeaux (2002-2004, 2006-2010), puis directeur de campagne de Juppé à la primaire 2016 (Philippe co-porte-parole). Co-auteur avec Philippe de deux romans politiques (L'heure de vérité 2007, Dans l'ombre 2011) et d'Impressions et lignes claires (2021). Conseiller spécial de Philippe à Matignon (2017-2019). Aujourd'hui eurodéputé Renaissance. Un sarkozyste les surnommait « Plic et Ploc » (Boyer et Philippe) tant leur tandem était indissociable. Boyer fait le lien entre l'héritage Juppé et la machine Horizons : il est le gardien de la doctrine philippiste et l'archétype du conseiller de l'ombre qui influence chaque orientation. Premier cercle de la Juppéie.",
    typeLien: "professionnel",
    sousReseaux: ["matignon", "chiraquien"],
    rattachement: ["philippe", "juppe"],
  },
  {
    nom: "Christophe Castaner",
    slug: "christophe-castaner",
    role: "Ministre de l'Interieur (2018-2020) — doctrine maintien de l'ordre",
    description:
      "Christophe Castaner est nommé ministre de l'Interieur par Édouard Philippe en octobre 2018, après l'interim le plus long de la Ve République à la place Beauvau suite à la démission de Gérard Collomb. Sa nomination intervient un mois avant le debut du mouvement des Gilets jaunes, ce qui en fait le responsable direct de la doctrine de maintien de l'ordre la plus contestee depuis Mai 68. Castaner à qualifié les manifestants de « factieux venus pour tuer », légitimant une réponse sécuritaire disproportionnee. Sous sa direction, l'usage des lanceurs de balles de défense (LBD40) à bondi de plus de 200% par rapport à l'année précédente. Le bilan humain est sans précédent : 25 personnes éborgnées, 5 mains arrachees, 432 blesses graves. L'ONU, le Conseil de l'Europe et Amnesty International ont demandé l'interdiction de ces armes. Castaner à systématiquement ignore les signalements de violences policières et refuse de suspendre l'usage des LBD. En tant que ministre de Philippe, sa doctrine engageait directement la responsabilité du Premier ministre. L'IGPN à été saisie de 313 enquêtes judiciaires pour suspicions de violences policières — un record. Castaner était auparavant délégué général de LREM, ce qui illustre la fusion entre l'appareil macroniste et l'appareil sécuritaire sous le gouvernement Philippe.",
    typeLien: "politique",
    partiPolitique: "LREM",
    sousReseaux: ["matignon"],
  },
  // ═══════════════════════════════════════════════════════
  // RESEAU SINO-FRANCAIS
  // ═══════════════════════════════════════════════════════
  {
    nom: "Benoît Ribadeau-Dumas",
    slug: "benoit-ribadeau-dumas",
    role: "Dircab Matignon — 1er cercle Juppéie — ENA Marc-Bloch — FCF 2013 — « Le Vatican »",
    description:
      "Benoît Ribadeau-Dumas, major de la promotion Marc-Bloch de l'ENA (1997), condisciple de Philippe. Directeur de cabinet à Matignon (2017-2020) — choisi contre la volonté de Macron qui voulait imposer Nicolas Revel. Surnommé « Le Vatican » pour sa rigidité. Membre de la FCF (promotion inaugurale 2013 avec Philippe et Macron). Avant Matignon : dircab adjoint de Sarkozy à l'Élysée (2011-2012), secrétaire général adjoint sous Hollande — un parcours qui transcende les alternances. Architecte opérationnel de toutes les décisions du gouvernement Philippe : ordonnances travail, 80 km/h, Gilets jaunes, réforme des retraites, Covid. A milité pour le maintien du premier tour des municipales le 15 mars 2020. Après Matignon, rejoint Exor (family office Elkann/Agnelli), administrateur de Stellantis et Iveco. Premier cercle de la Juppéie — le nœud qui relie réseau ENA, FCF et pouvoir exécutif.",
    typeLien: "politique",
    sousReseaux: ["sino-francais", "matignon", "chiraquien"],
    rattachement: ["philippe", "juppe"],
  },
  {
    nom: "France China Foundation",
    slug: "france-china-foundation",
    role: "Réseau franco-chinois — influence et diplomatie économique",
    description:
      "La France China Foundation (FCF) est une organisation fondée en 2012 pour rapprocher les élites dirigeantes françaises et chinoises. Son conseil stratégique inclut Jean-Pierre Raffarin, Laurent Fabius et Alain Mérieux (architecte du laboratoire P4 de Wuhan). Son partenaire chinois officiel est le CPIFA (Chinese People's Institute of Foreign Affairs), lié au ministère chinois des Affaires étrangères. La promotion inaugurale 2013 réunit Philippe, Macron et Ribadeau-Dumas. En 2015, Philippe accueille la délégation FCF au Havre pour une visite du port. En mai 2018, il assiste au gala annuel à Versailles en tant que Premier ministre et ancien Young Leader. L'opacité de la FCF est comparable à celle de la FAF : pas de publication des ordres du jour, pas de comptes rendus publics. La simultanéité des réseaux FAF (transatlantique) et FCF (sino-français) autour du même noyau — Philippe, Ribadeau-Dumas, Lenain — crée un système d'influence bipolaire sans précédent à Matignon. Villepin ne figure dans aucun espace FCF — son réseau chinois est personnel et privé, non institutionnel.",
    typeLien: "mediatique",
    sousReseaux: ["sino-francais"],
    rattachement: ["philippe", "raffarin"],
  },
  {
    nom: "Emmanuel Lenain",
    slug: "emmanuel-lenain",
    role: "Co-créateur FCF — conseiller diplomatique Matignon — ambassadeur",
    description:
      "Emmanuel Lenain est diplomate de carrière, co-fondateur de la France China Foundation en 2012 et conseiller diplomatique d'Édouard Philippe à Matignon de 2017 à 2020. Cette double casquette — architecte du réseau sino-français et conseiller du Premier ministre — en fait le pont humain entre les réseaux transatlantiques (FAF) et asiatiques (FCF) au cœur du pouvoir exécutif. Avant Matignon, Lenain a occupé plusieurs postes diplomatiques stratégiques, notamment à la représentation permanente de la France auprès des Nations Unies. Après son passage à Matignon, il est nommé ambassadeur de France en Inde (2019-2022), un poste qui l'inscrit dans le triangle stratégique France-Chine-Inde. Sa création de la FCF en 2012, un an après la sélection de Philippe comme Young Leader à la FAF, suggère une stratégie délibérée de construction de réseaux d'influence bilatéraux complémentaires. En tant que conseiller diplomatique de Philippe, Lenain avait accès à toutes les négociations internationales du gouvernement, y compris celles impliquant la Chine et les routes commerciales maritimes. Le Havre, premier port français et fief de Philippe, est directement concerné par les enjeux du commerce sino-français et l'initiative Belt and Road (Nouvelles Routes de la Soie). La position de Lenain à la croisée de la FCF, de Matignon et de la diplomatie asiatique illustre comment un seul individu peut servir de courroie de transmission entre des intérêts diplomatiques, économiques et politiques. Son parcours après Matignon — ambassade en Inde, puis postes au Quai d'Orsay — confirme sa trajectoire au sein de l'appareil diplomatique français orienté vers l'Asie. Lenain est le chaînon manquant qui relie le réseau Young Leaders de Philippe au réseau sino-français.",
    typeLien: "professionnel",
    sousReseaux: ["sino-francais", "matignon"],
  },
  {
    nom: "Port du Havre (HAROPA)",
    slug: "port-du-havre",
    role: "1er port français — nœud sino-maritime — point d'entrée cocaïne",
    description:
      "Le port du Havre est le premier port à conteneurs de France et le cinquième en Europe. Depuis 2021, il est intègre dans l'ensemble HAROPA (Le Havre, Rouen, Paris), le premier complexe portuaire français. Édouard Philippe en est le maire depuis 2010, ce qui lui confere une influence directe sur les orientations stratégiques du port et de la communauté urbaine Le Havre Seine Métropole. CMA CGM, premier armateur français, y représente une part majeure du trafic conteneurisé, avec des lignes directes vers Shanghai, Ningbo, Shenzhen et les grands ports asiatiques. Le commerce maritime franco-chinois transiteant par Le Havre représente des milliards d'euros annuels. Le port est également concerné par l'initiative chinoise Belt and Road (Nouvelles Routes de la Soie), qui vise à connecter les infrastructures portuaires européennes au réseau logistique chinois. Selon Europol, Le Havre est le premier point d'entrée de la cocaïne en Europe. Les saisies de drogue y ont explose : 18 tonnes de cocaïne saisies par les douanes françaises en 2023, un record. La sécurité portuaire est sous la responsabilité partagée de l'État, des douanes et des autorités portuaires — un domaine où les intérêts de CMA CGM (via Yann Le Goff, sécurité), de la mairie (Philippe), et des réseaux d'influence (FAF, FCF) se croisent. L'extension du port et les investissements dans les terminaux à conteneurs sont des enjeux économiques majeurs pour la region, où Philippe jouit d'un ancrage politique sans partage depuis quinze ans. La question de la gouvernance portuaire — qui decide des investissements, des concessions, des contrôles — est au cœur du nexus Philippe-CMA CGM-FCF.",
    typeLien: "financier",
    sousReseaux: ["le-havre", "sino-francais"],
  },
  // --- Acteurs cles du réseau sino-français ---
  {
    nom: "Jean-Pierre Raffarin",
    slug: "jean-pierre-raffarin",
    role: "Ancien PM — plaque tournante sino-française — membre Horizons — alerté par la DGSI",
    description:
      "Jean-Pierre Raffarin, Premier ministre de Chirac (2002-2005), est la plaque tournante entre les réseaux chinois de Philippe et de Villepin. Il cumule un nombre sans équivalent de positions chinoises : membre du « council of advisors » du Forum de Bo'ao (Davos asiatique), du Belt & Road Forum, administrateur de la CEIBS de Shanghai, co-président de la Sino-International Entrepreneurs Federation, présentateur d'émission sur la CGTN (TV publique chinoise), représentant spécial du gouvernement français pour la Chine (depuis 2018), co-parrain FCF et président du Comité France-Chine. Le 29 septembre 2019, Xi Jinping lui remet la médaille de l'ordre de l'Amitié — plus haute distinction chinoise pour un étranger, partagée avec Poutine et Castro. La DGSI l'a convoqué à un « entretien de sensibilisation » à l'été 2018 pour sa fréquentation d'hommes d'affaires chinois considérés comme agents du Parti. Sa Fondation Prospective et Innovation (FPI) dispose d'un budget de 3,5 M€ financé par une trentaine d'entreprises (Carrefour, Kering, L'Oréal, LVMH) et a reçu 85 000 € de l'ancien ambassadeur chinois Wu Jianmin. En 2022, Raffarin rejoint Horizons — sa double casquette (représentant officiel pour la Chine ET membre du parti de Philippe) est sans équivalent. Causeur note que Raffarin et Villepin ont suivi des « parcours miroirs » dans leurs reconversions chinoises post-Matignon.",
    typeLien: "politique",
    partiPolitique: "Horizons (depuis 2022)",
    sousReseaux: ["sino-francais", "chiraquien", "horizons"],
    rattachement: ["philippe", "raffarin", "villepin"],
  },
  {
    nom: "Rodolphe Saadé",
    slug: "rodolphe-saade",
    role: "PDG de CMA CGM — empire maritime franco-libanais",
    description:
      "Rodolphe Saadé est le président-directeur général de CMA CGM depuis 2017, succedant à son père Jacques Saadé, fondateur du groupe en 1978. Sous sa direction, CMA CGM est devenu le troisième armateur mondial avec un chiffre d'affaires dépassant 70 milliards d'euros en 2022. Saade à diversifié le groupe au-dela du transport maritime : acquisition de CEVA Logistics (logistique), rachat de La Tribune et La Provence (medias), investissements dans la tech. Le groupe Saade est d'origine libanaise, basé à Marseille, et entretient des liens commerciaux majeurs avec la Chine — les routes Asie-Europe représentent le cœur de l'activité de CMA CGM. Le port du Havre, fief d'Édouard Philippe, est l'un des principaux hubs européens de CMA CGM. Yann Le Goff, responsable sécurité CMA CGM et Young Leader 2011 avec Philippe, opère directement sous l'autorité de la direction Saade. La fortune de Rodolphe Saadé est estimée à plus de 40 milliards d'euros, ce qui en fait l'une des plus grandes fortunes de France. Son expansion dans les médias (La Tribune, La Provence, BFM Marseille) lui confere une influence médiatique en plus de son poids économique. CMA CGM est un acteur central de l'initiative Belt and Road chinoise, avec des partenariats portuaires en Méditerranée, en Afrique et en Asie du Sud-Est. La convergence entre l'empire Saade, le port du Havre de Philippe, et les réseaux FCF de Ribadeau-Dumas constitue un nexus d'intérêts économiques et politiques d'une ampleur considérable.",
    typeLien: "financier",
    sousReseaux: ["sino-francais", "entreprises"],
  },
  {
    nom: "Nouvelles Routes de la Soie (Belt and Road)",
    slug: "belt-and-road",
    role: "Initiative chinoise d'infrastructures — impact portuaire européen",
    description:
      "L'initiative Belt and Road (BRI), lancee par Xi Jinping en 2013, est le plus grand programme d'infrastructures de l'histoire, avec des investissements estimés à plus de 1 000 milliards de dollars à travers l'Asie, l'Afrique et l'Europe. Le volet maritime de la BRI — la « Route de la Soie Maritime du XXIe siècle » — vise à connecter les ports chinois aux ports européens via des investissements dans les terminaux, la logistique et les concessions portuaires. En Europe, la Chine à investi dans les ports du Piree (Grece, via COSCO), de Hambourg, d'Anvers et de Valence. Le port du Havre, premier port français à conteneurs et fief d'Édouard Philippe, est directement concerné par cette stratégie. CMA CGM, dont les routes Asie-Europe sont le cœur de l'activité, est à la fois concurrent et partenaire potentiel des armateurs chinois COSCO et OOCL. La France China Foundation, dont le directeur de cabinet de Philippe (Ribadeau-Dumas) est membre, opère dans cet espace où la diplomatie économique chinoise cherche à établir des relais d'influence auprès des decideurs européens. La BRI à été critiquee comme un instrument de « diplomatie de la dette » et d'influence geopolitique chinoise. Le fait que le Premier ministre français ait été entoure à Matignon de personnes inscrites dans les réseaux sino-français (FCF) tout en étant maire du premier port français sur la route maritime chinoise crée une convergence d'intérêts inédite. L'Italie à signe un mémorandum BRI en 2019 avant de s'en retirer en 2023 — la France, sous Philippe, n'a jamais signe mais à maintenu une position ambigue. La question de la souveraineté portuaire face aux investissements chinois est un enjeu stratégique qui touche directement Le Havre.",
    typeLien: "mediatique",
    sousReseaux: ["sino-francais"],
  },
  {
    nom: "COSCO Shipping",
    slug: "cosco-shipping",
    role: "Premier armateur chinois — rival et partenaire de CMA CGM",
    description:
      "COSCO Shipping est le premier armateur chinois et le quatrième mondial, détenu par l'État chinois via le SASAC (commission de supervision des entreprises d'État). COSCO opère plus de 1 300 navires et dessert plus de 300 ports dans le monde. En Europe, COSCO à acquis 67% du port du Piree en Grece (2016), illustrant la stratégie chinoise de prise de contrôle d'infrastructures portuaires stratégiques. COSCO et CMA CGM sont à la fois concurrents et partenaires au sein de l'alliance maritime Ocean Alliance, qui regroupe les lignes Asie-Europe — les mêmes routes qui transitent par Le Havre. Cette alliance signifie que les conteneurs CMA CGM et COSCO partagent les mêmes navires et les mêmes terminaux, y compris au Havre. La présence de COSCO dans les ports européens à suscite des inquietudes en matière de sécurité nationale et de souveraineté. L'Allemagne à bloque en 2022 la prise de participation de COSCO dans le terminal de Hambourg au-dela de 24,9%. La question se pose pour Le Havre : dans quelle mesure les investissements chinois dans les ports concurrents affectent-ils la stratégie du premier port français ? La France China Foundation, dont des membres entourent Philippe à Matignon, opère précisément dans cet espace de diplomatie portuaire sino-européenne. L'imbrication entre Ocean Alliance (COSCO + CMA CGM), les réseaux FCF, et la mairie du Havre de Philippe constitue un faisceau d'intérêts qui mérite un examen approfondi. COSCO est un bras arme de la politique Belt and Road chinoise dans le domaine maritime.",
    typeLien: "financier",
    sousReseaux: ["sino-francais", "entreprises"],
  },
  {
    nom: "Comité France-Chine (MEDEF)",
    slug: "comite-france-chine",
    role: "Diplomatie économique — lobby sino-français du patronat",
    description:
      "Le Comité France-Chine, rattaché au MEDEF International, est le principal organe de lobbying du patronat français auprès de la Chine. Présidé par Jean-Pierre Raffarin, il fonctionne en synergie avec la France China Foundation : le Comité opère au niveau des entreprises, la FCF au niveau des individus. La présence de Raffarin à la tête du Comité et comme parrain de la FCF crée un pont entre diplomatie économique officielle et réseaux d'influence informels. Les membres incluent des groupes du CAC 40 actifs en Chine : Airbus, Total, L'Oréal, Sanofi, et des acteurs portuaires et logistiques. Ribadeau-Dumas (dircab de Philippe, FCF 2013) et Lenain (co-créateur FCF, conseiller diplomatique) ont tous deux évolué dans cet écosystème.",
    typeLien: "mediatique",
    sousReseaux: ["sino-francais"],
    rattachement: "raffarin",
  },
  // ═══════════════════════════════════════════════════════
  // ENTITES DE DEUXIEME NIVEAU — conflits d'intérêts
  // ═══════════════════════════════════════════════════════
  {
    nom: "Alexis Kohler",
    slug: "alexis-kohler",
    role: "Secrétaire général de l'Élysée — mis en examen pour conflits d'intérêts maritimes",
    description:
      "Alexis Kohler est le secrétaire général de la présidence de la République depuis mai 2017, nommé par Emmanuel Macron. C'est le poste non-élu le plus puissant de France : il coordonne l'ensemble de l'action gouvernementale et gère l'agenda du président. Kohler est mis en examen en septembre 2022 pour prise illégale d'intérêts en lien avec ses fonctions antérieures à la direction du Tresor et au ministere de l'Economie, où il supervisait des dossiers impliquant MSC (Mediterranean Shipping Company). Sa mère est cousine de Rafaela Aponte, épouse de Gianluigi Aponte, fondateur de MSC, deuxième armateur mondial. Kohler à nie tout conflit d'intérêts, affirmant avoir récusé ses liens familiaux dans les procédures. MSC et CMA CGM sont les deux premiers armateurs opérant au port du Havre, fief d'Édouard Philippe. La chaîne Philippe → Macron → Kohler → armateurs crée un circuit où le maire du premier port français est nommé Premier ministre par un président dont le bras droit est familialement lie à l'industrie maritime. Kohler à également joue un rôle central dans la restructuration d'Areva/Orano et dans les grands contrats industriels du quinquennat — des dossiers où Philippe était directement implique comme ancien lobbyiste d'Areva. Son maintien au poste malgre la mise en examen illustre l'impunité structurelle au sommet de l'État. Kohler est le nœud qui relie le pouvoir présidentiel à l'industrie maritime mondiale.",
    typeLien: "politique",
    sousReseaux: ["matignon", "entreprises"],
  },
  {
    nom: "Sibyle Veil",
    slug: "sibyle-veil",
    role: "Présidente de Radio France — ENA Senghor avec Macron",
    description:
      "Sibyle Veil est présidente de Radio France depuis avril 2018, nommee par le CSA (devenu Arcom) dont les membres sont influences par l'exécutif. Elle est issue de la promotion Leopold Sedar Senghor de l'ENA (2004), la même promotion qu'Emmanuel Macron. Cette camaraderie de promotion — l'un des liens les plus forts dans la haute fonction publique française — connecte directement la présidence de la première radio publique au président de la République. Sous sa direction, France Inter est restee la radio la plus écoutée de France avec sa matinale politique. Les interviews d'Édouard Philippe sur France Inter se caracterisent par une tonalite favorable et l'absence systématique de questions sur les dossiers sensibles : liens CMA CGM, France China Foundation, affaire Atos. Veil à été renouvelée en 2022, confirmant la confiance de l'exécutif macroniste. Avant Radio France, elle était conseillere au Conseil d'État et avait travaille à la Cour des comptes. Son parcours ENA → Conseil d'État → direction d'un media public est un archetype du système français où les mêmes promotions contrôlent le pouvoir exécutif et le pouvoir médiatique. La chaîne Macron (président) → Arcom (nomination) → Veil (direction) → France Inter (éditorial) illustre le contrôle indirect de l'audiovisuel public. Radio France couvre environ 15 millions d'auditeurs quotidiens.",
    typeLien: "mediatique",
    sousReseaux: ["matignon"],
  },
  {
    nom: "Bernard Arnault",
    slug: "bernard-arnault",
    role: "PDG LVMH — 1ere fortune mondiale — propriétaire Les Échos / Le Parisien",
    description:
      "Bernard Arnault est le président-directeur général de LVMH, première fortune mondiale avec un patrimoine estimé à plus de 200 milliards d'euros. Il est propriétaire du groupe Les Échos-Le Parisien, qui inclut le quotidien économique Les Échos, dont le rédacteur en chef David Barroux est Young Leader 2011 avec Édouard Philippe. Arnault est considéré comme le plus proche allié oligarchique d'Emmanuel Macron, avec qui il entretient des relations personnelles documentées. LVMH est le premier annonceur publicitaire de France, ce qui lui confere un pouvoir d'influence indirect sur l'ensemble des médias français. La couverture des Échos est systématiquement favorable aux réformes économiques portees par Philippe (ordonnances travail, loi PACTE). Le Parisien, journal populaire le plus lu en Ile-de-France, complète le dispositif médiatique en touchant un public plus large. Arnault à inauguré plusieurs projets architecturaux avec Macron et Philippe. La convergence entre la première fortune mondiale, le président qui nommé Philippe, et le rédacteur en chef Young Leader forme un triangle pouvoir-argent-media. LVMH à des intérêts commerciaux majeurs en Chine, ce qui relie Arnault au réseau sino-français via des canaux différénts de la FCF. Le fait que le propriétaire du premier media économique de France soit aussi le premier soutien financier du président qui à nommé Philippe crée un conflit d'intérêts médiatique structurel.",
    typeLien: "financier",
    sousReseaux: ["entreprises"],
  },
  {
    nom: "Vincent Bollore",
    slug: "vincent-bollore",
    role: "Industriel — CNews, Europe 1, C8, Canal+ — réorientation droitiere des medias",
    description:
      "Vincent Bolloré est un industriel breton qui à construit un empire médiatique via Vivendi : Canal+, CNews, C8, Europe 1, Paris Match, Le Journal du Dimanche. Son rachat progressif de ces médias à partir de 2015 à été accompagne d'une réorientation éditoriale vers la droite et l'extrême-droite, avec des figures comme Eric Zemmour, Pascal Praud et Laurence Ferrari. CNews est devenue la « Fox News française ». Dans le jeu politique, Bolloré est un « faiseur de rois » : sa chaîne à permis l'émergence médiatique de Zemmour comme candidat présidentiel en 2022. Pour Philippe, CNews joue un rôle paradoxal : la chaîne le présenté comme l'alternative « raisonnable » face au RN, servant le récit macroniste du barrage républicain. Europe 1, sous contrôle Bolloré via Lagardère, à été réorientée vers une ligne compatible avec le centre-droit de Philippe. Bolloré à également des intérêts massifs en Afrique (Bolloré Africa Logistics, ports) et en Asie, ce qui le connecte aux enjeux de transport maritime et aux réseaux sino-africains. Son empire logistique africain à été revendu à CMA CGM (MSC) en 2022, creant un lien direct entre Bolloré et le groupe Saade. La concentration médiatique entre Arnault (Les Échos, Le Parisien), Bolloré (CNews, Europe 1) et Saade/CMA CGM (BFM TV) signifie que les trois premiers médias d'info de France sont detenus par des oligarques proches du pouvoir macroniste.",
    typeLien: "mediatique",
    sousReseaux: ["entreprises"],
  },
  {
    nom: "Patrick Drahi",
    slug: "patrick-drahi",
    role: "Ex-propriétaire BFM TV / RMC — revendu à CMA CGM",
    description:
      "Patrick Drahi est un homme d'affaires franco-israelien, fondateur d'Altice, qui à détenu BFM TV, RMC et Libération jusqu'a la revente de ses actifs médias à CMA CGM (Rodolphe Saadé) en 2024. Cette transaction est cruciale dans la chaîne de conflits d'intérêts : BFM TV, premier media d'info en continu, passé d'un propriétaire entoure de controverses financières (endettement massif d'Altice) à CMA CGM, premier armateur opérant dans le port du fief d'Édouard Philippe. Drahi avait déjà été critique pour son influence sur la ligne éditoriale de BFM. Le passage à CMA CGM aggrave le conflit : l'opérateur portuaire du Havre possède désormais le media qui couvre le candidat-maire du Havre. Drahi est également propriétaire de HOT en Israël et de Sotheby's. Son empire est construit sur un endettement massif (plus de 60 milliards d'euros à son pic), un modèle financier qui à suscite des enquêtes fiscales dans plusieurs pays. La revente à Saade illustre la concentration médiatique en cours en France : les médias d'info passent des mains d'un milliardaire endetté à celles d'un armateur milliardaire lie aux routes commerciales chinoises. La chaîne Drahi → BFM → CMA CGM → Le Havre → Philippe est un parcours de conflit d'intérêts qui se construit par acquisitions successives.",
    typeLien: "financier",
    sousReseaux: ["entreprises"],
  },
  {
    nom: "Pierre Moscovici",
    slug: "pierre-moscovici",
    role: "Président de la Cour des comptes — Young Leader 1996",
    description:
      "Pierre Moscovici est président de la Cour des comptes depuis juin 2020. Young Leader 1996 (même promotion que Hollande). Ancien ministre de l'Économie puis commissaire européen. Le fait que le contrôleur suprême des comptes publics et l'ancien Premier ministre soient issus du même réseau Young Leaders soulève des questions sur l'indépendance du contrôle.",
    typeLien: "politique",
    sousReseaux: ["young-leaders"],
  },
  // ═══════════════════════════════════════════════════════
  // RESEAU VILLEPIN — connexions chinoises privées et opaques
  // ═══════════════════════════════════════════════════════
  {
    nom: "Dominique de Villepin",
    slug: "dominique-de-villepin",
    role: "Ancien PM — candidat probable 2027 — réseau privé multipolaire (Chine, Qatar, Russie)",
    description:
      "Dominique de Villepin, Premier ministre de Chirac (2005-2007), opère un réseau privé, multipolaire et opaque. Aucune relation directe documentée ne le relie à Philippe — leurs réseaux convergent par Juppé et les connexions chinoises. Villepin a intégré le « groupe J » (fidèles de Juppé) dès 1979, puis a été nommé directeur de cabinet au Quai d'Orsay par Juppé en 1993. Depuis 2008 : ~50 conférences rémunérées en Chine (94 000 € pour deux selon Radio France), présidence de l'IMTA (organisme chinois), sociétés à Hong Kong (comptes non déposés depuis 2015), proximité Xi Jinping. Réseau multipolaire au-delà de la Chine : ami de la famille Al-Thani (Qatar), poste à l'Autorité des musées du Qatar, tribune partagée avec Poutine à Valdaï (2014), 800 000 €/an du groupe saoudien Bugshan via une société panaméenne liée à Djouhri (2008-2010), contrat Veolia de 17 ans via Proglio, activités en Iran, Venezuela, Arménie, Azerbaïdjan. Aide des entreprises chinoises en Afrique et Europe, parfois en concurrence avec des entreprises françaises. Sondages mai 2025 : Villepin 51 %, Philippe 50 %. Séduit à gauche (65 % LFI), Philippe au centre-droit. Concurrent direct pour 2027.",
    typeLien: "politique",
    partiPolitique: "Indépendant",
    sousReseaux: ["villepin", "chiraquien", "sino-francais"],
  },
  {
    nom: "Villepin International",
    slug: "villepin-international",
    role: "Société de conseil — comptes non déposés depuis 2015",
    description:
      "Villepin International est la société de conseil de Dominique de Villepin créée après son départ de Matignon. Ses comptes ne sont plus déposés depuis 2015 — la même année, deux sociétés sont créées à Hong Kong, puis une troisième (Villepin Group Limited), avec des flux financiers importants. L'enquête de la cellule investigation de Radio France (décembre 2025) révèle l'étendue des activités chinoises transitant par ces structures. La destination et les bénéficiaires des flux financiers restent des zones d'ombre majeures. L'opacité financière contraste avec le réseau institutionnel et relativement transparent de Philippe via la FCF.",
    typeLien: "financier",
    sousReseaux: ["villepin", "sino-francais"],
    rattachement: "villepin",
  },
  {
    nom: "Alexandre Djouhri",
    slug: "alexandre-djouhri",
    role: "Intermédiaire — condamné à 6 ans (financements libyens) — voyages avec Villepin",
    description:
      "Alexandre Djouhri est un intermédiaire condamné en septembre 2025 à six ans de prison dans l'affaire des financements libyens. L'enquête de Radio France révèle que Villepin a effectué des déplacements à l'étranger en sa compagnie. Lors du forum de Saint-Pétersbourg, les deux hommes se sont fait enregistrer comme « vice-présidents » de Veolia — un enregistrement démenti par la direction du groupe. Aucun lien comparable n'est documenté pour Philippe. Djouhri est un nœud d'ombre spécifique au réseau Villepin, reliant l'ancien Premier ministre aux milieux d'affaires les plus controversés (Russie, Golfe, Libye).",
    typeLien: "financier",
    sousReseaux: ["villepin"],
    rattachement: "villepin",
  },
  {
    nom: "Henri Proglio",
    slug: "henri-proglio",
    role: "Ancien PDG EDF/Veolia — lien Villepin-Veolia depuis 17 ans",
    description:
      "Henri Proglio est l'ancien PDG de Veolia Environnement (2003-2009) puis d'EDF (2009-2014). Selon les investigations, Villepin est sous contrat avec Veolia depuis 17 ans via Proglio. Ce lien explique l'épisode du forum de Saint-Pétersbourg où Villepin et Djouhri se sont enregistrés comme « vice-présidents » de Veolia. Proglio est une figure du capitalisme français ayant navigué entre secteur public et privé. Son rôle comme point de contact entre Villepin et le monde des affaires constitue une piste d'approfondissement identifiée par le rapport.",
    typeLien: "financier",
    sousReseaux: ["villepin", "entreprises"],
    rattachement: "villepin",
  },
  {
    nom: "IMTA (International Mountain Tourism Alliance)",
    slug: "imta",
    role: "Organisme chinois — présidé par Villepin",
    description:
      "L'International Mountain Tourism Alliance (IMTA) est un organisme chinois dont Villepin est le président. Cette présidence s'inscrit dans le réseau de fonctions officielles et semi-officielles que Villepin a accumulées en Chine depuis 2008 : présidence d'associations de droit chinois, intégration de comités exécutifs de fonds d'investissement. L'IMTA illustre l'ancrage institutionnel chinois de Villepin — une légitimité obtenue par le haut, directement auprès du pouvoir central, contrairement au parcours FCF de Philippe qui passe par des structures franco-chinoises encadrées.",
    typeLien: "mediatique",
    sousReseaux: ["villepin", "sino-francais"],
    rattachement: "villepin",
  },
  {
    nom: "Alain Mérieux",
    slug: "alain-merieux",
    role: "Architecte du laboratoire P4 de Wuhan — Conseil stratégique FCF",
    description:
      "Alain Mérieux est l'industriel lyonnais fondateur de bioMérieux, leader mondial du diagnostic in vitro. Il est l'architecte du laboratoire P4 de haute sécurité de Wuhan, inauguré en 2018 — un projet de coopération franco-chinoise lancé sous la présidence Chirac. Mérieux siège au Conseil stratégique de la France China Foundation aux côtés de Raffarin et Fabius. Sa présence au cœur du dispositif FCF établit un lien entre la diplomatie sanitaire franco-chinoise (le P4 de Wuhan) et les réseaux d'influence dans lesquels s'inscrit Philippe. La question du laboratoire P4 est devenue géopolitiquement sensible depuis 2020 et la pandémie de Covid-19.",
    typeLien: "professionnel",
    sousReseaux: ["sino-francais", "chiraquien"],
    rattachement: "raffarin",
  },
  {
    nom: "Laurent Fabius",
    slug: "laurent-fabius",
    role: "Président du Conseil constitutionnel — co-parrain FCF",
    description:
      "Laurent Fabius, ancien Premier ministre (1984-1986) et président du Conseil constitutionnel depuis 2016, est co-parrain de la France China Foundation avec Raffarin. Ancien ministre des Affaires étrangères sous Hollande (2012-2016), il a contribué à structurer la diplomatie sino-française. Sa présence au Conseil stratégique de la FCF aux côtés de Raffarin et Mérieux transcende les clivages gauche-droite et illustre le consensus des élites françaises autour du rapprochement avec Pékin. Fabius valide la constitutionnalité des lois — y compris celles du gouvernement Philippe.",
    typeLien: "politique",
    partiPolitique: "PS",
    sousReseaux: ["sino-francais", "chiraquien"],
    rattachement: "raffarin",
  },
  {
    nom: "Hubert Védrine",
    slug: "hubert-vedrine",
    role: "Ancien ministre des Affaires étrangères — Conseil stratégique FCF",
    description:
      "Hubert Védrine, ancien secrétaire général de l'Élysée sous Mitterrand puis ministre des Affaires étrangères (1997-2002), est membre du Conseil stratégique de la FCF. Théoricien de la politique étrangère française et inventeur du concept d'« hyperpuissance » américaine, il représente la continuité de la tradition diplomatique française d'indépendance vis-à-vis des États-Unis — la même tradition qui a poussé les héritiers de Chirac vers la Chine.",
    typeLien: "politique",
    sousReseaux: ["sino-francais"],
    rattachement: "raffarin",
  },
  {
    nom: "Jacques Chirac",
    slug: "jacques-chirac",
    role: "Ancien président de la République — source du chiraquisme",
    description:
      "Jacques Chirac (1932-2019), président de la République (1995-2007), est la source commune de tout l'écosystème. Sa politique d'indépendance vis-à-vis des États-Unis et son dialogue privilégié avec Pékin ont produit une tradition de relations sino-françaises dont Philippe et Villepin sont les héritiers par des canaux distincts. Un sondage JDD/Ifop de 2019 classait Juppé comme premier héritier de Chirac (62 %), Villepin en troisième, tout en se demandant si « le dernier bastion du chiraquisme n'est pas à Matignon, avec Édouard Philippe ». Villepin était l'un des « fils préférés » de Chirac (La Libre). Chirac → Juppé → Philippe et Chirac → Villepin sont les deux branches de cet arbre politique.",
    typeLien: "politique",
    partiPolitique: "RPR/UMP",
    sousReseaux: ["chiraquien"],
    rattachement: ["philippe", "raffarin", "villepin"],
  },
  {
    nom: "CPIFA",
    slug: "cpifa",
    role: "Chinese People's Institute of Foreign Affairs — partenaire officiel FCF",
    description:
      "Le CPIFA (Chinese People's Institute of Foreign Affairs) est le partenaire chinois officiel de la France China Foundation. Lié au ministère chinois des Affaires étrangères, il constitue l'interlocuteur institutionnel du réseau sino-français de Philippe et Raffarin. Le CPIFA est l'interface entre le soft power français (FCF) et l'appareil diplomatique chinois. Cette connexion distingue le réseau Philippe/Raffarin (institutionnel, encadré) du réseau Villepin (privé, accès direct au pouvoir central via Xi Jinping).",
    typeLien: "mediatique",
    sousReseaux: ["sino-francais"],
    rattachement: "raffarin",
  },
  // ═══════════════════════════════════════════════════════
  // LA JUPPÉIE — Les cercles juppéistes
  // ═══════════════════════════════════════════════════════
  {
    nom: "Charles Hufnagel",
    slug: "charles-hufnagel",
    role: "1er cercle Juppéie — communication — porte-parole Matignon",
    description:
      "Charles Hufnagel est le conseiller en communication de Juppé, croisé chez Areva dans les années 2000. Porte-parole de Philippe à Matignon. Jugé par les journalistes politiques comme « bien plus fiable » que son homologue de l'Élysée (Le Temps). Il incarne la continuité communicationnelle de la Juppéie : c'est la même doctrine de discrétion et de sobriété médiatique qui a marqué les campagnes de Juppé et le passage de Philippe à Matignon. Premier cercle de la Juppéie.",
    typeLien: "professionnel",
    sousReseaux: ["matignon", "chiraquien"],
    rattachement: ["philippe", "juppe"],
  },
  {
    nom: "Benoist Apparu",
    slug: "benoist-apparu",
    role: "1er cercle Juppéie — co-porte-parole campagne Juppé 2016",
    description:
      "Benoist Apparu, ancien secrétaire d'État au Logement sous Sarkozy, est co-porte-parole de la campagne Juppé 2016 avec Philippe. Après la défaite de Juppé à la primaire, il intègre l'équipe de campagne Fillon. Son parcours illustre la dispersion des juppéistes après novembre 2016 — une partie rejoint Macron (Boyer, Philippe), une autre reste dans l'orbite LR. Premier cercle de la Juppéie.",
    typeLien: "politique",
    partiPolitique: "LR",
    sousReseaux: ["chiraquien"],
    rattachement: "juppe",
  },
  {
    nom: "Anne Clerc",
    slug: "anne-clerc",
    role: "Directrice de cabinet Matignon — ancienne équipe Raffarin",
    description:
      "Anne Clerc est directrice de cabinet à Matignon sous Philippe. Ancienne membre de l'équipe Raffarin à Matignon — ce qui en fait le pont humain entre les deux cabinets de Premiers ministres chiraquiens. Sa présence dans le cabinet Philippe illustre la continuité de la Juppéie au sein de l'appareil d'État : les mêmes réseaux se transmettent de Matignon en Matignon.",
    typeLien: "professionnel",
    sousReseaux: ["matignon", "chiraquien"],
    rattachement: ["philippe", "juppe", "raffarin"],
  },
  {
    nom: "Xavier Chinaud",
    slug: "xavier-chinaud",
    role: "Conseiller relations élus Matignon — ancien Matignon Raffarin",
    description:
      "Xavier Chinaud est conseiller aux relations avec les élus à Matignon sous Philippe. Ancien « études politiques » à Matignon sous Raffarin. Comme Anne Clerc, il est un trait d'union entre les cabinets Raffarin et Philippe, assurant la transmission des pratiques et des réseaux entre les deux Matignons chiraquiens.",
    typeLien: "professionnel",
    sousReseaux: ["matignon", "chiraquien"],
    rattachement: ["philippe", "juppe", "raffarin"],
  },
  {
    nom: "Christophe Béchu",
    slug: "christophe-bechu",
    role: "Secrétaire général d'Horizons — ancien ministre — maire d'Angers",
    description:
      "Christophe Béchu est le secrétaire général du parti Horizons, ancien ministre de la Transition écologique (2022-2024) et maire d'Angers. Son rôle au sein d'Horizons est structurant : il assure l'organisation territoriale du parti et fait le lien entre l'appareil philippiste et les élus locaux. L'axe Philippe (Normandie) / Béchu (Loire) / Estrosi (PACA) donne à Horizons une assise multi-régionale pour 2027. Troisième cercle de la Juppéie — allié institutionnel.",
    typeLien: "politique",
    partiPolitique: "Horizons",
    sousReseaux: ["horizons", "chiraquien"],
    rattachement: ["philippe", "juppe"],
  },
  {
    nom: "Nathalie Loiseau",
    slug: "nathalie-loiseau",
    role: "Eurodéputée Renaissance — ancienne directrice de l'ENA — proche juppéistes",
    description:
      "Nathalie Loiseau, eurodéputée Renaissance et ancienne ministre des Affaires européennes (2017-2019), est proche des cercles juppéistes. Ancienne directrice de l'ENA, elle représente le lien européen de la Juppéie. Après la défaite de Juppé à la primaire, elle fait partie du groupe des « marcheurs » — les juppéistes ralliés à Macron. Troisième cercle de la Juppéie.",
    typeLien: "politique",
    partiPolitique: "Renaissance",
    sousReseaux: ["chiraquien"],
    rattachement: ["philippe", "juppe"],
  },
  {
    nom: "Virginie Calmels",
    slug: "virginie-calmels",
    role: "Ex-adjointe de Juppé à Bordeaux — ralliée Wauquiez/DroiteLib",
    description:
      "Virginie Calmels, ancienne première adjointe de Juppé à la mairie de Bordeaux, représente la branche « néo-droitière » de la Juppéie — celle qui s'est éloignée de Philippe pour rejoindre Laurent Wauquiez via le mouvement DroiteLib. Son parcours illustre la fragmentation de la Juppéie après la défaite de 2016 : si la majorité des juppéistes a rejoint Macron, une minorité a opté pour la droitisation de LR. Ancienne patronne d'Endemol France, elle incarne le profil manager-politique valorisé par Juppé.",
    typeLien: "politique",
    partiPolitique: "LR (DroiteLib)",
    sousReseaux: ["chiraquien"],
    rattachement: "juppe",
  },
  {
    nom: "Julien Miro",
    slug: "julien-miro",
    role: "2e cercle Juppéie — organisateur des « bébés Juppé »",
    description:
      "Julien Miro est l'un des organisateurs du réseau des « bébés Juppé » — une trentaine de trentenaires, anciens de la campagne de la primaire 2016, structurés en réseau informel après la défaite. Avec Guillaume Pfister, il organise des dîners bimestriels avec des personnalités amies (Boyer, Gaymard, Keller, Bournazel). Fait révélateur, Miro déclarait : « Alain Juppé a perdu mais les juppéistes ont gagné : ils sont partout dans les cabinets ministériels ». Conseillers à Matignon, au Quai d'Orsay, aux ministères de l'Économie, de la Transition écologique, de la Culture — les bébés Juppé étaient aux manettes des réformes de la Macronie. Deuxième cercle de la Juppéie.",
    typeLien: "professionnel",
    sousReseaux: ["chiraquien"],
    rattachement: "juppe",
  },
  {
    nom: "Guillaume Pfister",
    slug: "guillaume-pfister",
    role: "2e cercle Juppéie — co-organisateur des « bébés Juppé »",
    description:
      "Guillaume Pfister est le co-organisateur, avec Julien Miro, du réseau informel des « bébés Juppé ». Leur objectif déclaré : « entretenir la flamme juppéiste » et « préparer l'après-Juppé ». Les dîners réunissent des personnalités proches de Juppé (Boyer, Gaymard, Keller, Bournazel) et des jeunes conseillers disséminés dans les cabinets ministériels. Ce réseau constitue la pépinière de cadres d'Horizons. Deuxième cercle de la Juppéie.",
    typeLien: "professionnel",
    sousReseaux: ["chiraquien"],
    rattachement: "juppe",
  },
  {
    nom: "Fondation Prospective et Innovation (FPI)",
    slug: "fpi-raffarin",
    role: "Véhicule de relations franco-chinoises de Raffarin — budget 3,5 M€",
    description:
      "La FPI est la fondation de Raffarin, reconfigurée pour servir de véhicule aux relations franco-chinoises. Budget de 3,5 M€ financé par une trentaine d'entreprises (Carrefour, Kering, L'Oréal, LVMH) à 15 000 €/an chacune. La fondation a reçu des dons de personnalités chinoises, dont 85 000 € de l'ancien ambassadeur Wu Jianmin. La FPI opère à l'intersection du think tank et du réseau d'influence, fournissant à Raffarin une infrastructure institutionnelle pour ses activités chinoises. C'est un canal parallèle à la FCF — l'un (FPI) est le véhicule personnel de Raffarin, l'autre (FCF) est la structure collective.",
    typeLien: "financier",
    sousReseaux: ["sino-francais"],
    rattachement: "raffarin",
  },
  {
    nom: "Groupe Bugshan",
    slug: "groupe-bugshan",
    role: "Conglomérat saoudien — 800 000 €/an à Villepin via Djouhri (2008-2010)",
    description:
      "Le groupe Bugshan est un conglomérat saoudien qui a versé 800 000 €/an à Villepin entre 2008 et 2010, via une société panaméenne liée à Alexandre Djouhri. Ces flux financiers, révélés par l'enquête de Radio France, illustrent l'opacité du réseau d'affaires de Villepin. L'argent transitait par une structure offshore, ce qui rend la traçabilité des bénéficiaires difficile. Le lien Bugshan-Djouhri-Villepin est l'un des nœuds les plus opaques du réseau.",
    typeLien: "financier",
    sousReseaux: ["villepin"],
    rattachement: "villepin",
  },
  // Nouveaux alliés gouvernementaux du cercle philippiste
  {
    nom: "Sébastien Lecornu",
    slug: "sebastien-lecornu",
    role: "Premier ministre en exercice — relation compétition-coopération avec Philippe",
    description:
      "Sébastien Lecornu, Premier ministre en exercice, entretient une relation de compétition-coopération avec Philippe. Ancien lemairiste passé dans l'équipe Fillon avec les juppéistes après la primaire 2016. Son parcours croise celui de la Juppéie sans s'y fondre. Normand comme Philippe (Évreux), il représente un rival potentiel au sein de la majorité pour l'influence sur la droite modérée.",
    typeLien: "politique",
    partiPolitique: "Renaissance",
    sousReseaux: ["chiraquien"],
    rattachement: "philippe",
  },
  {
    nom: "Plastic Omnium",
    slug: "plastic-omnium",
    role: "Équipementier automobile — lien Raffarin — intérêts chinois majeurs",
    description:
      "Plastic Omnium est un équipementier automobile français dont le conseil d'administration a compté Raffarin. Le groupe réalise une part significative de son chiffre d'affaires en Chine, ce qui en fait un bénéficiaire direct des réseaux sino-français facilités par Raffarin. Sa présence dans l'écosystème Raffarin illustre le mécanisme de valorisation du carnet d'adresses : les entreprises à intérêts chinois financent la FPI (15 000 €/an) et bénéficient en retour de l'accès au marché chinois facilité par le « Monsieur Chine » de la politique française.",
    typeLien: "financier",
    sousReseaux: ["sino-francais", "entreprises"],
    rattachement: "raffarin",
  },
  {
    nom: "Laurent Marcangeli",
    slug: "laurent-marcangeli",
    role: "Président du groupe Horizons à l'Assemblée nationale",
    description:
      "Laurent Marcangeli préside le groupe parlementaire « Horizons et indépendants » à l'Assemblée nationale. C'est le relais législatif de Philippe : il coordonne les positions du groupe sur les textes de loi et assure la cohésion des députés philippistes. Après la dissolution de 2024, le groupe est passé de trente députés à six — un effondrement qui illustre la fragilité de la base parlementaire d'Horizons.",
    typeLien: "politique",
    partiPolitique: "Horizons",
    sousReseaux: ["horizons"],
    rattachement: "philippe",
  },
  // === RAPPORT ATTALI-MINC : les architectes de l'ombre ===
  {
    nom: "Jacques Attali",
    slug: "jacques-attali",
    role: "Faiseur de rois transpartisan — architecte du couple Macron-Philippe",
    description:
      "Polytechnicien, énarque, conseiller de Mitterrand (1981-1991), fondateur de la BERD, président de la Commission Attali (2007). Co-fondateur du Conseil stratégique de la FCF. A lancé la carrière de Macron (rapporteur Commission 2007), l'a présenté à Hollande (2011), puis a suggéré Philippe comme Premier ministre et organisé leur rencontre (mars 2017). Quitte la FCF en mars 2020.",
    typeLien: "politique",
    sousReseaux: ["facilitateurs", "sino-francais"],
    rattachement: ["philippe", "raffarin"],
  },
  {
    nom: "Alain Minc",
    slug: "alain-minc",
    role: "Conseiller transversal des présidents — canal Boyer vers Philippe",
    description:
      "ENA (major, promotion Léon Blum), ancien président du conseil de surveillance du Monde, président d'AM Conseil. A soutenu Juppé à la primaire 2016, puis Macron en 2017. Fait passer des messages à Philippe via Gilles Boyer à Matignon. Young Leader FAF. Un tiers des patrons du CAC 40 rémunèrent ses services. Trésorier de la Fondation Saint-Simon, membre du Siècle.",
    typeLien: "politique",
    sousReseaux: ["facilitateurs", "young-leaders"],
    rattachement: ["philippe", "juppe"],
  },
  {
    nom: "Commission Attali",
    slug: "commission-attali",
    role: "Commission pour la libération de la croissance (2007-2010) — 316 mesures",
    description:
      "Commandée par Sarkozy, présidée par Attali, avec Macron comme rapporteur général adjoint. Parmi les 316 mesures : la libéralisation des VTC, qui conduit à la loi Novelli (2009) puis au « deal » Uber-Macron (2014-2016). Point d'origine de la chaîne de dérégulation Commission → Uber → Macron → Philippe.",
    typeLien: "professionnel",
    sousReseaux: ["facilitateurs"],
    rattachement: ["philippe", "juppe"],
  },
  // === RAPPORT UBER FILES & KOHLER : le triangle portuaire ===
  {
    nom: "Alexis Kohler",
    slug: "alexis-kohler",
    role: "Secrétaire général de l'Élysée (2017-2025) — mis en examen — liens MSC",
    description:
      "Bras droit de Macron, énarque, Inspection des finances. A siégé au conseil de surveillance du GPMH (2010-2012) aux côtés de Philippe (maire), sans déclarer ses liens familiaux avec MSC (famille Aponte). A voté des contrats MSC. Mis en examen pour prise illégale d'intérêts, trafic d'influence et corruption passive (2022). Circuit : IGF → APE/GPMH → cabinet Macron → MSC → Élysée → Société Générale.",
    typeLien: "politique",
    sousReseaux: ["portuaire", "le-havre"],
    rattachement: "philippe",
  },
  {
    nom: "MSC (Mediterranean Shipping Company)",
    slug: "msc-aponte",
    role: "2e armateur mondial — famille Aponte (cousins de Kohler) — terminal au Havre",
    description:
      "Fondé par la famille Aponte, cousins de la mère d'Alexis Kohler. Deuxième armateur mondial, exploite un terminal à conteneurs au port du Havre. Kohler n'a jamais déclaré ses liens familiaux avec MSC lors de son mandat au GPMH. Au cœur de la mise en examen de Kohler pour prise illégale d'intérêts.",
    typeLien: "financier",
    sousReseaux: ["portuaire", "entreprises"],
    rattachement: "philippe",
  },
  {
    nom: "Rodolphe Saadé (CMA CGM)",
    slug: "rodolphe-saade-cma-cgm",
    role: "PDG CMA CGM — propriétaire BFM/RMC — hub Le Havre — nœud multifonctionnel",
    description:
      "PDG de CMA CGM (3e armateur mondial), propriétaire de BFM TV et RMC depuis le rachat d'Altice Media (2023). CMA CGM exploite des terminaux au port du Havre, hub de Philippe. A racheté Bolloré Transport & Logistics (2024). Nœud triple : économique (transport maritime), médiatique (BFM/RMC) et politique (partenaire portuaire du maire du Havre).",
    typeLien: "financier",
    sousReseaux: ["portuaire", "le-havre", "entreprises"],
    rattachement: "philippe",
  },
  {
    nom: "Grand Port Maritime du Havre (GPMH)",
    slug: "gpmh",
    role: "Premier port français — nœud géostratégique Philippe/Kohler/MSC/CMA CGM",
    description:
      "Premier port de France, nœud de convergence du réseau. Kohler et Philippe y ont siégé ensemble au conseil de surveillance (2010-2012). Hub de CMA CGM et client de MSC. Jumelé avec Dalian (Chine). Lié à COSCO Shipping (1er armateur chinois). Point géographique où convergent pouvoir politique, financier, médiatique et géostratégique.",
    typeLien: "professionnel",
    sousReseaux: ["portuaire", "le-havre"],
    rattachement: "philippe",
  },
  {
    nom: "Uber Files",
    slug: "uber-files",
    role: "124 000 documents fuités — deal caché Macron-Uber (2014-2016)",
    description:
      "124 000 documents internes d'Uber fuités à l'ICIJ. Révèlent 17 échanges Uber-cabinet Macron, 4 rencontres Macron-Kalanick, un deal caché (Uber renonce à UberPop, l'État réduit la formation VTC de 250h à 7h), des amendements rédigés par Uber transmis à des députés. Commission d'enquête parlementaire (2023) : pas de conflit d'intérêts mais « relations privilégiées » confirmées.",
    typeLien: "professionnel",
    sousReseaux: ["facilitateurs"],
    rattachement: "philippe",
  },
  // === RAPPORT BILDERBERG : le cénacle transatlantique ===
  {
    nom: "Henri de Castries",
    slug: "henri-de-castries",
    role: "Super-facilitateur — président Bilderberg — CS FCF — ex-PDG AXA — ENA Voltaire (condisciple Villepin)",
    description:
      "Nœud unique du système : préside le comité de direction du Bilderberg depuis 2012, siège au Conseil stratégique de la FCF aux côtés d'Attali, Raffarin et Philippe, et est condisciple de Villepin à l'ENA (promotion Voltaire, 1980). Ancien PDG d'AXA (2000-2016), président de l'Institut Montaigne, triple Young Leader FAF (1994, 1995, 1998). Pont unique entre réseau transatlantique (Bilderberg, FAF) et réseau sino-français (FCF).",
    typeLien: "financier",
    sousReseaux: ["bilderberg", "sino-francais", "young-leaders", "facilitateurs"],
    rattachement: ["philippe", "juppe", "raffarin", "villepin"],
  },
  {
    nom: "Gabriel Attal",
    slug: "gabriel-attal",
    role: "Ancien Premier ministre — Bilderberg 2023 + 2025 — promu PM 7 mois après sa 1ère participation",
    description:
      "Premier ministre (janvier-septembre 2024), plus jeune PM de la Ve République. Invité au Bilderberg à Lisbonne (2023) alors ministre des Comptes publics, nommé PM sept mois plus tard. Présent à Stockholm (2025) aux côtés de Philippe — première fois que deux anciens PM macronistes participent ensemble. Pattern récurrent : Macron (Bilderberg 2014 → ministre 2 mois après), Philippe (2016 → PM 11 mois après), Attal (2023 → PM 7 mois après).",
    typeLien: "politique",
    partiPolitique: "Renaissance",
    sousReseaux: ["bilderberg"],
    rattachement: "philippe",
  },
  {
    nom: "Patricia Barbizet",
    slug: "patricia-barbizet",
    role: "Comité directeur permanent du Bilderberg — ancienne présidente du Siècle",
    description:
      "Membre du comité directeur permanent du Bilderberg — second représentant français permanent après de Castries. Ancienne présidente du Siècle, ancienne DG de la holding Artémis (Pinault). Présente au Bilderberg 2023 à Lisbonne. Connecte le Bilderberg au Siècle, où siègent également Attali et Minc.",
    typeLien: "financier",
    sousReseaux: ["bilderberg", "entreprises"],
    rattachement: "philippe",
  },
  {
    nom: "Institut Montaigne",
    slug: "institut-montaigne",
    role: "Think tank libéral (de Castries) — financé par AXA, BNP, LVMH, Total — référence Macron 2017",
    description:
      "Think tank libéral présidé par Henri de Castries, financé par AXA, Engie, BNP Paribas, LVMH et TotalEnergies. Référence intellectuelle de la campagne Macron 2017 : son directeur Laurent Bigorgne avait fourni l'adresse de campagne de LREM. Véhicule de production doctrinale pour le programme Horizons 2027.",
    typeLien: "professionnel",
    sousReseaux: ["bilderberg", "entreprises"],
    rattachement: "philippe",
  },
  // === RAPPORT BLACKROCK : le gestionnaire d'actifs au cœur du système ===
  {
    nom: "BlackRock",
    slug: "blackrock",
    role: "1er gestionnaire d'actifs mondial (10 000 Mds $) — actionnaire de 18 entreprises du CAC 40",
    description:
      "Premier gestionnaire d'actifs mondial, fondé par Larry Fink. Détient des participations dans au moins 18 entreprises du CAC 40 dont AXA (de Castries), BNP (Lemierre, Bilderberg 2025), TotalEnergies (Pouyanné, Bilderberg), Société Générale (Kohler 2025). Allié de MSC dans l'acquisition de 43 ports mondiaux pour 22,8 Mds $ (2025). Philippe propose 15 % de capitalisation retraites en 2027 — précisément l'objectif de BlackRock en France.",
    typeLien: "financier",
    sousReseaux: ["entreprises", "portuaire"],
    rattachement: ["philippe", "raffarin"],
  },
  {
    nom: "Jean-François Cirelli",
    slug: "jean-francois-cirelli",
    role: "Président BlackRock France — ancien dircab Raffarin — promu LH par Philippe en pleine crise retraites",
    description:
      "ENA (promotion Léonard de Vinci, 1985), ancien conseiller de Chirac, directeur adjoint du cabinet de Raffarin (2002-2004), artisan de la réforme des retraites Fillon 2003. PDG de Gaz de France, numéro 2 d'Engie. Président de BlackRock France depuis 2015. Invité par Philippe au Comité Action Publique 2022 (2018). Promu officier de la Légion d'honneur par Philippe le 31 décembre 2019, en pleine grève historique des retraites.",
    typeLien: "financier",
    sousReseaux: ["entreprises", "facilitateurs"],
    rattachement: ["philippe", "raffarin"],
  },
  // === RAPPORT COALITION 2027 : la tribune des 90 ===
  {
    nom: "Marc Ferracci",
    slug: "marc-ferracci",
    role: "Témoin de mariage de Macron — fils de Pierre Ferracci (Commission Attali) — signataire tribune 2027",
    description:
      "Économiste, HEC, docteur en sciences économiques. Rencontre Macron à 22 ans à Sciences Po. Témoin de mariage de Macron. Son père Pierre Ferracci a siégé à la Commission Attali (2007) où Macron était rapporteur. Député Renaissance, ex-ministre de l'Industrie. Patrimoine déclaré : 23 M€. Signataire de la tribune « Pour la France, construisons l'union ! » (29 mars 2026). Agent-pont entre l'écosystème Macron et la coalition Philippe.",
    typeLien: "politique",
    partiPolitique: "Renaissance",
    sousReseaux: ["coalition-2027", "facilitateurs"],
    rattachement: "philippe",
  },
  {
    nom: "Philippe Tabarot",
    slug: "philippe-tabarot",
    role: "Ministre des Transports — supervise les ports — signataire tribune 2027 — enquêté PNF",
    description:
      "Ministre des Transports depuis décembre 2024. Supervise les ports maritimes français dont le GPMH (nœud Philippe/Kohler/MSC/CMA CGM). Ex-vice-président régional PACA aux côtés d'Estrosi (Horizons). Sénateur LR. Enquêté par le PNF pour détournement de fonds publics et prise illégale d'intérêts. Le poste de ministre des Transports est un nœud récurrent : Djebbari (YL FCF 2020) s'est vu interdire par la HATVP de rejoindre CMA CGM.",
    typeLien: "politique",
    partiPolitique: "LR",
    sousReseaux: ["coalition-2027", "portuaire"],
    rattachement: "philippe",
  },
  {
    nom: "Maud Bregeon",
    slug: "maud-bregeon",
    role: "Porte-parole du gouvernement — signataire tribune 2027 — « Philippe mieux placé »",
    description:
      "Porte-parole du gouvernement Lecornu, ministre déléguée. Signataire de la tribune « Pour la France, construisons l'union ! » (29 mars 2026). A déclaré sur LCI que Philippe « a pris une sérieuse option, étant potentiellement le mieux placé pour mener ce combat ». Fait la jonction explicite entre le gouvernement actuel et la candidature Philippe 2027.",
    typeLien: "politique",
    partiPolitique: "Renaissance",
    sousReseaux: ["coalition-2027"],
    rattachement: "philippe",
  },
  // === RAPPORT BILAN FISCAL/SOCIAL + CONTROVERSES MANDAT ===
  {
    nom: "Jean-Paul Delevoye",
    slug: "jean-paul-delevoye",
    role: "Haut-commissaire aux retraites — a rencontré BlackRock — démission pour activités non déclarées",
    description:
      "Haut-commissaire aux retraites sous le gouvernement Philippe, chargé du système universel à points. A rencontré BlackRock dès mars 2018, soit trois mois après sa nomination. Démissionne le 16 décembre 2019 pour 13 mandats non déclarés à la HATVP. La réforme qu'il préparait est soupçonnée de préparer la capitalisation au profit de BlackRock. Le recours au 49.3 en février 2020, puis la pandémie, gèlent la réforme indéfiniment.",
    typeLien: "politique",
    sousReseaux: ["matignon", "entreprises"],
    rattachement: "philippe",
  },
  // === RAPPORT SONDAGES & MÉDIAS ===
  {
    nom: "Elabe / BFMTV",
    slug: "elabe-bfmtv",
    role: "Sondage du 28 mars 2026 — Philippe « seul capable de battre le RN » — commandité par CMA CGM/BFM",
    description:
      "Sondage Elabe pour BFMTV (propriété de CMA CGM/Saadé) du 28 mars 2026 donnant Philippe à 20,5-25,5 % au 1er tour. L'agrégation bayésienne indépendante de moipresident.online le donne à 17 %, soit 3,5 à 8,5 points de moins. Le score de 51,5 % face à Bardella au 2nd tour est dans la marge d'erreur. Le commanditaire (BFMTV/CMA CGM) partage un intérêt avec le candidat (port du Havre).",
    typeLien: "mediatique",
    sousReseaux: ["portuaire", "coalition-2027"],
    rattachement: "philippe",
  },
  // === RAPPORTS BILDERBERG APPROFONDI + KOHLER-SAADÉ-HAVRE ===
  {
    nom: "Patrick Pouyanné",
    slug: "patrick-pouyanné",
    role: "PDG TotalEnergies — Bilderberg 2023 + 2025 — actionnaire BlackRock",
    description:
      "PDG de TotalEnergies, participant récurrent du Bilderberg (2023, 2025) aux côtés de Philippe. TotalEnergies est actionnaire de l'Institut Montaigne (de Castries) et détenue à hauteur significative par BlackRock. Présent à Lisbonne et Stockholm avec Philippe, Attal et de Castries. Nœud reliant le cercle Bilderberg au cercle entreprises/BlackRock.",
    typeLien: "financier",
    sousReseaux: ["bilderberg", "entreprises"],
    rattachement: "philippe",
  },
  {
    nom: "Jean Lemierre",
    slug: "jean-lemierre",
    role: "Président BNP Paribas — Bilderberg 2025 — Kohler rejoint SocGen (même écosystème bancaire)",
    description:
      "Président de BNP Paribas, présent au Bilderberg 2025 à Stockholm aux côtés de Philippe et Attal. BNP est détenue partiellement par BlackRock et finance l'Institut Montaigne. Kohler quitte l'Élysée en 2025 pour rejoindre la Société Générale — même écosystème bancaire. Le cercle Bilderberg connecte directement les banques systémiques françaises aux candidats présidentiels.",
    typeLien: "financier",
    sousReseaux: ["bilderberg", "entreprises"],
    rattachement: "philippe",
  },
  {
    nom: "Bernard Émié",
    slug: "bernard-emie",
    role: "Directeur de la DGSE — Bilderberg 2023 — renseignement français au cénacle transatlantique",
    description:
      "Directeur général de la sécurité extérieure (DGSE, 2017-2024), présent au Bilderberg 2023 à Lisbonne aux côtés de Philippe, Attal et de Castries. La présence du patron du renseignement extérieur français dans un forum privé transatlantique est un fait notable, soulevé par Regards.fr. En 2025, Nicolas Roche (SGDSN), nommé deux mois plus tôt, le remplace au Bilderberg.",
    typeLien: "politique",
    sousReseaux: ["bilderberg"],
    rattachement: "philippe",
  },
  // === AGENTS FACILITATEURS (RAPPORTS ATTALI-MINC & UBER-KOHLER) ===
  {
    nom: "Jacques Attali",
    slug: "jacques-attali",
    role: "Polytechnicien, énarque — Faiseur de rois transpartisan — Architecte du couple Macron-Philippe",
    description:
      "Jacques Attali (né 1943) est polytechnicien et énarque (promotion Robespierre, 1970). Ancien auditeur au Conseil d'État, conseiller spécial de François Mitterrand pendant dix ans (1981-1991), fondateur et premier président de la BERD (1991-1993), président de la Commission pour la libération de la croissance française (2007-2010). En tant qu'agent facilitateur, Attali a architecturé le couple Macron-Philippe : en 2007, il choisit le jeune Macron comme rapporteur adjoint de sa Commission. En 2011, il présente Macron à Hollande. En mars 2017, il suggère à Macron de choisir Philippe comme Premier ministre et organise leur rencontre. Cette chaîne Attali → Macron → Philippe est le mécanisme fondateur du gouvernement Philippe (2017-2020). Attali est co-fondateur du Conseil stratégique de la France China Foundation (2013), où il siège aux côtés de Philippe, Raffarin, Fabius, Mérieux et de Castries — une convergence unique de cinq niveaux de pouvoir. Il quitte la FCF en mars 2020, date de l'arrivée de la pandémie. En système multi-agent, Attali ne possède pas de centroïde propre mais fonctionne comme nœud de connexion maximisant l'influence indirecte par la liaison de centroïdes entre eux. Sa valeur réside dans le réseau, pas dans le pouvoir formel, ce qui lui permet de traverser les alternances sans dommage — un président peut changer, un Premier ministre peut tomber, Attali reste.",
    typeLien: "politique",
    partiPolitique: "Technocrate transpartisan",
    sousReseaux: ["facilitateurs", "sino-francais"],
  },
  {
    nom: "Alain Minc",
    slug: "alain-minc",
    role: "Énarque, major 1975 — Conseiller transversal des présidents — Agent facilitateur",
    description:
      "Alain Minc (né 1954) est énarque (promotion Léon Blum, 1975, major), inspecteur général des finances. Ancien président du conseil de surveillance du Monde, président d'AM Conseil, président du conseil d'administration de la Sanef, trésorier de la Fondation Saint-Simon, membre du Siècle. Un tiers des grands patrons du CAC 40 ont rémunéré ses services (Bolloré, Bouygues, Vinci, Club Med, Suez). En tant qu'agent facilitateur, Minc opère depuis la droite française (Balladur, Sarkozy, Juppé) tandis que son complémentaire Attali opère depuis la gauche (Mitterrand, Hollande) — une symétrie qui leur permet de couvrir l'ensemble de l'échiquier politique. Minc soutient Juppé à la primaire 2016, puis se reporte sur Macron en 2017 (transfert identique à celui des juppéistes eux-mêmes). Il entretient un canal indirect avec Philippe via Gilles Boyer (conseiller à Matignon), documenté par le JDD concernant le prélèvement à la source (2018). Macron dispose de deux mentors à sa sortie de l'ENA : Minc et Attali, confirmant le modèle facilitateur en tandem. Minc est ancien Young Leader de la FAF, formant ainsi une chaîne de quatre décennies : Minc (YL) → Juppé (YL 1982) → Philippe (YL 2011) → Macron (YL 2012). Comme Attali, Minc maximise son influence indirecte en restant invisible aux yeux du public. Aucune responsabilité électorale, pas de pouvoir formel, mais une capacité de connexion inégalée.",
    typeLien: "professionnel",
    partiPolitique: "Technocrate transpartisan",
    sousReseaux: ["facilitateurs", "young-leaders"],
  },
  {
    nom: "Alexis Kohler",
    slug: "alexis-kohler",
    role: "Secrétaire général de l'Élysée (2017-2025) — Agent pivot portuaire — MSC/Aponte",
    description:
      "Alexis Kohler (né 1972 à Strasbourg) est énarque, directeur de cabinet au ministère de l'Économie sous Macron (2014), puis secrétaire général de l'Élysée (2017-2025) — le bras droit d'Emmanuel Macron pendant huit ans. En mars 2022, il est mis en examen pour prise illégale d'intérêts, trafic d'influence et corruption passive, pour ses conflits d'intérêts avec MSC (Mediterranean Shipping Company), fondée par la famille Aponte — cousins de sa mère. De 2010 à 2012, Kohler siège au conseil de surveillance du Grand Port Maritime du Havre (GPMH) comme représentant de l'Agence des participations de l'État, aux côtés d'Édouard Philippe (maire depuis octobre 2010). Selon Mediapart, Kohler n'a jamais déclaré ses liens familiaux avec MSC et ne s'est pas déporté lors des votes concernant MSC, tandis que Philippe respectait scrupuleusement les règles de déport. Kohler fonctionne comme agent pivot : Inspection des finances → APE/GPMH (aux côtés de Philippe) → cabinet Macron (Bercy) → MSC (pantouflage) → Élysée (SG) → Société Générale (2025). Ce circuit illustre le mécanisme de rendements croissants du carnet d'adresses. Le port du Havre où Kohler et Philippe se côtoient est un nœud géostratégique : hub de CMA CGM (3e armateur mondial), client de MSC (2e armateur, famille de Kohler), lié à COSCO Shipping (1er armateur chinois, jumelage Dalian), sous gouvernance politique de Philippe. En 2025, Kohler quitte l'Élysée pour la Société Générale, poursuivant le circuit eau-de-vie entre État et finance.",
    typeLien: "politique",
    partiPolitique: "Technocrate macroniste",
    sousReseaux: ["facilitateurs", "portuaire", "entreprises"],
    rattachement: "philippe",
  },
  // === RAPPORT NUÑEZ : le bras armé de la répression macroniste ===
  {
    nom: "Laurent Nuñez",
    slug: "laurent-nunez",
    role: "Ministre de l'Intérieur (Lecornu II) — ex-DGSI — ex-préfet de police — exécuteur Gilets jaunes",
    description:
      "Laurent Nuñez-Belda (né 1964 à Bourges) est énarque (promotion Cyrano de Bergerac, 1997-1999, concours interne). Directeur de la DGSI (juin 2017–octobre 2018), secrétaire d'État à l'Intérieur dans le gouvernement Philippe II (octobre 2018–juillet 2020), coordonnateur national du renseignement à l'Élysée (juillet 2020–juillet 2022), préfet de police de Paris (juillet 2022–octobre 2025), puis ministre de l'Intérieur dans le gouvernement Lecornu II (depuis octobre 2025). Il est l'exécuteur opérationnel de la répression des Gilets jaunes aux côtés de Castaner, tandis que Philippe en assume la responsabilité politique. Nuñez défend publiquement les LBD, participe au limogeage du préfet Delpuech (mars 2019), et assume sans ambiguïté la doctrine du maintien de l'ordre la plus dure de la Ve République. En termes MAS, il est un agent d'exécution régalien : sa loyauté va directement à Macron (qui le nomme personnellement à chaque poste), pas à Philippe (son supérieur nominal). Sa présence dans le gouvernement Lecornu II, aux côtés de membres d'Horizons, crée un lien indirect supplémentaire avec la sphère philippiste. Le triangle Nuñez–Bompard–Caubel est la découverte structurante du rapport : condisciple ENA de Bompard (PDG Carrefour), dont l'épouse Charlotte Caubel était cheffe du pôle justice au cabinet Philippe (2017-2020) et est membre d'Horizons.",
    typeLien: "politique",
    partiPolitique: "Technocrate macroniste",
    sousReseaux: ["matignon"],
    rattachement: "philippe",
  },
  {
    nom: "Alexandre Bompard",
    slug: "alexandre-bompard",
    role: "PDG Carrefour — condisciple ENA Nuñez (Cyrano 1997-99) — époux de Charlotte Caubel",
    description:
      "Alexandre Joubert-Bompard (né 1972) est PDG du groupe Carrefour (CA 2024 : 86 milliards d'euros), sorti 4e de la promotion Cyrano de Bergerac de l'ENA (1997-1999). Il est le condisciple de Laurent Nuñez dans cette même promotion (arrêté du 19 avril 1999, Légifrance, JORFTEXT000000211140). Son épouse Charlotte Caubel a été cheffe du pôle justice au cabinet d'Édouard Philippe à Matignon (2017-2020). Bompard n'a aucun lien documenté direct avec Philippe, mais son réseau familial (via Caubel) et professionnel (via Nuñez) relie l'univers de la grande distribution aux cercles du pouvoir exécutif. Carrefour a d'importants intérêts en Chine et a été partenaire officiel des JO de Paris 2024.",
    typeLien: "professionnel",
    partiPolitique: undefined,
    sousReseaux: ["entreprises"],
    rattachement: "philippe",
  },
  {
    nom: "Charlotte Caubel",
    slug: "charlotte-caubel",
    role: "Ancienne cheffe pôle justice cabinet Philippe (2017-20) — membre Horizons — épouse Bompard",
    description:
      "Charlotte Caubel (magistrate, Sciences Po) est nommée conseillère justice au cabinet d'Édouard Philippe à Matignon en mai 2017. Elle y reste trois ans (2017-2020), devenant cheffe du pôle justice. Après Matignon, elle dirige la Protection judiciaire de la jeunesse (2020-2022), puis est nommée secrétaire d'État chargée de l'Enfance dans le gouvernement Borne (2022-2024). Elle est membre du parti Horizons. En août 2025, elle est nommée procureure adjointe à Paris. Son mari est Alexandre Bompard (PDG Carrefour), condisciple ENA de Laurent Nuñez. Ce triangle Nuñez–Bompard–Caubel relie directement la promotion ENA de Nuñez au cœur du cabinet Philippe et au parti Horizons.",
    typeLien: "politique",
    partiPolitique: "Horizons",
    sousReseaux: ["matignon", "horizons"],
    rattachement: "philippe",
  },
];

export type Investigation = {
  slug: string;
  titre: string;
  sousTitre: string;
  resume: string;
  date: string;
  themes: string[];
  parties: {
    titre: string;
    contenu: string;
  }[];
  noeudsLies: string[]; // slugs of related network nodes
  sources: { titre: string; url?: string; type: string }[];
};

export const investigations: Investigation[] = [
  {
    slug: "attali-minc-architectes-ombre",
    titre: "Attali & Minc — Les architectes de l'ombre",
    sousTitre: "Connexions avec le réseau étendu Philippe–Juppé–Raffarin–Villepin",
    resume:
      "Jacques Attali et Alain Minc constituent les deux « architectes de l'ombre » du système politique français. Sans mandat électif, ils ont façonné les carrières de trois présidents et influencé deux Premiers ministres du réseau étudié. Attali est l'architecte direct du couple Macron-Philippe.",
    date: "2026-03-30",
    themes: ["fcf", "faf", "facilitateurs", "macron", "philippe", "juppe", "raffarin"],
    parties: [
      {
        titre: "Jacques Attali : le faiseur de rois transpartisan",
        contenu: `Polytechnicien, énarque (promotion Robespierre, 1970), ancien auditeur au Conseil d'État. Conseiller spécial de Mitterrand pendant dix ans (1981-1991). Fondateur et premier président de la BERD (1991-1993). Président de la Commission pour la libération de la croissance française (2007-2010).

La séquence Attali → Macron → Philippe est documentée et constitue la découverte la plus significative de cette investigation :

2007 : Attali choisit Macron (28 ans, inspecteur des finances) comme rapporteur général adjoint de la Commission pour la libération de la croissance.
2011 : Attali présente Macron à François Hollande. Macron est nommé secrétaire général adjoint de l'Élysée (2012), puis ministre de l'Économie (2014).
Mars 2017 : Attali suggère à Macron de choisir Édouard Philippe comme Premier ministre. Il organise leur rencontre.
Mai 2017 : Philippe est nommé Premier ministre. Son cabinet est peuplé de juppéistes et de membres de la FCF.

Attali est membre fondateur du Conseil stratégique de la FCF dès 2013, aux côtés de Raffarin, Fabius, Philippe, Mérieux, de Castries et Villani. Il quitte la fondation en mars 2020, coïncidant avec l'arrivée de la pandémie.`,
      },
      {
        titre: "Alain Minc : le conseiller transversal des présidents",
        contenu: `ENA (promotion Léon Blum, 1975, major), Inspection générale des finances. Ancien président du conseil de surveillance du Monde. Président d'AM Conseil. Trésorier de la Fondation Saint-Simon. Membre du Siècle. Un tiers des grands patrons du CAC 40 ont rémunéré ses services.

Minc → Juppé : a soutenu Juppé à la primaire 2016, puis s'est reporté sur Macron après sa défaite — le même transfert que les juppéistes eux-mêmes (Philippe, Boyer, Hufnagel).

Minc → Philippe (via Boyer) : fait passer des messages à Philippe via Gilles Boyer (conseiller spécial à Matignon). Le canal Minc → Boyer → Philippe est documenté par le JDD.

Minc → Macron : mentor dès sa sortie de l'ENA, l'a introduit dans les cercles du pouvoir. A soutenu Macron en 2017 et 2022.

Minc est ancien Young Leader de la FAF. La séquence Minc (YL) → Juppé (YL 1982) → Philippe (YL 2011) → Macron (YL 2012) dessine une chaîne de cooptation transatlantique sur quatre décennies.`,
      },
      {
        titre: "Analyse croisée : agents facilitateurs du système",
        contenu: `Les deux hommes fonctionnent en tandem complémentaire depuis les années 1980. Attali opère depuis la gauche (Mitterrand, Hollande), Minc depuis la droite (Balladur, Sarkozy, Juppé). Mais les deux convergent vers Macron, qui incarne la synthèse droite-gauche.

En termes de systèmes multi-agents, Attali et Minc ne sont pas des centroïdes mais des « agents facilitateurs » — des nœuds qui optimisent non pas leur propre accès au pouvoir mais leur capacité à connecter des agents entre eux. Leur valeur réside dans le réseau, pas dans le pouvoir formel.

La FCF est la structure où Attali et le réseau Philippe-Raffarin se rencontrent formellement. Le Conseil stratégique réunit un « faiseur de rois » (Attali), un candidat présidentiel (Philippe), un « Monsieur Chine » (Raffarin), le président du Conseil constitutionnel (Fabius) et un industriel lié au P4 de Wuhan (Mérieux) — cinq niveaux de pouvoir dans une seule fondation.

L'angle mort : ni Attali ni Minc n'ont de connexion documentée avec Villepin, qui opère dans un écosystème distinct (Djouhri, Veolia/Proglio, Qatar, Russie).`,
      },
    ],
    noeudsLies: [
      "jacques-attali", "alain-minc", "commission-attali", "emmanuel-macron",
      "edouard-philippe", "alain-juppe", "jean-pierre-raffarin",
      "gilles-boyer", "benoit-ribadeau-dumas", "emmanuel-lenain",
      "laurent-fabius", "alain-merieux",
    ],
    sources: [
      { titre: "Wikipédia — Jacques Attali", type: "presse" },
      { titre: "Wikipédia — Commission pour la libération de la croissance", type: "presse" },
      { titre: "Europe 1 — Attali sur Macron : « Je ne crois pas m'être trompé »", type: "presse" },
      { titre: "Le Lanceur — Macron, le candidat des oligarques (double mentorat Attali-Minc)", type: "presse" },
      { titre: "France 2 / Quelle époque — Attali et Minc critiquent Philippe et Macron (mars 2026)", type: "presse" },
      { titre: "Wikipédia — Alain Minc", type: "presse" },
      { titre: "Le JDD — Minc et le prélèvement à la source : canal Boyer–Philippe", type: "presse" },
      { titre: "Cairn.info — Alain Minc, marchand d'affaires et d'idéologie", type: "presse" },
      { titre: "Révolution Permanente — La FAF, usine à dirigeants capitalistes", type: "presse" },
      { titre: "Forbes France — Conseil stratégique FCF (Attali, Philippe, Raffarin)", type: "presse" },
      { titre: "France China Foundation — liste du Conseil stratégique", type: "officiel" },
    ],
  },
  {
    slug: "uber-files-kohler-triangle-portuaire",
    titre: "Uber Files & Affaire Kohler — Le triangle portuaire",
    sousTitre: "De la Commission Attali (2007) au Grand Port Maritime du Havre",
    resume:
      "Ce rapport approfondit deux axes : la chaîne Commission Attali → Uber Files → Macron → Philippe, et le triangle portuaire Kohler–Philippe–CMA CGM/MSC au Havre. Kohler a siégé au GPMH aux côtés de Philippe sans déclarer ses liens avec MSC.",
    date: "2026-03-30",
    themes: ["uber-files", "kohler", "port-du-havre", "msc", "cma-cgm", "conflits-interets", "deregulation"],
    parties: [
      {
        titre: "De la Commission Attali aux Uber Files : la chaîne de dérégulation",
        contenu: `En juillet 2007, Jacques Attali est chargé par Sarkozy de présider une commission de 42 membres. Emmanuel Macron, inspecteur des finances de 28 ans, est nommé rapporteur général adjoint. Parmi les 316 mesures : la libéralisation des VTC, qui conduit à la loi Novelli (2009).

Quand Macron devient ministre de l'Économie (2014), il met en œuvre ces principes. Les Uber Files (124 000 documents internes) révèlent : 17 échanges documentés entre Uber et le cabinet de Macron, au moins 4 rencontres Macron-Kalanick, un « deal » caché (Uber renonce à UberPop, l'État réduit la formation VTC de 250h à 7h), des amendements « clé en main » rédigés par Uber, un « kill switch » désactivant les serveurs lors des perquisitions.

La commission d'enquête parlementaire (2023) conclut : pas de conflit d'intérêts ni d'enrichissement personnel, mais des « relations privilégiées » et un « deal » confirmé sous serment. Les 10 députés Renaissance se sont abstenus. Les 12 députés Nupes/Liot/RN l'ont approuvé.`,
      },
      {
        titre: "Alexis Kohler : le triangle portuaire",
        contenu: `Alexis Kohler, secrétaire général de l'Élysée (2017-2025), est mis en examen en 2022 pour prise illégale d'intérêts, trafic d'influence et corruption passive pour ses conflits d'intérêts avec MSC, fondée par la famille Aponte — cousins de sa mère.

De 2010 à 2012, Kohler siège au GPMH comme représentant de l'APE. Dans la même enceinte : Édouard Philippe (maire depuis octobre 2010) et Antoine Rufenacht (ancien maire, mentor de Philippe). Selon Mediapart, Kohler n'a jamais informé les autres membres de ses liens familiaux avec MSC et ne s'est pas déporté lors des votes concernant MSC. Philippe, en revanche, se déportait quand il détectait un risque de conflit d'intérêts.

Le port du Havre est le nœud géostratégique : hub de CMA CGM (3e armateur mondial), client de MSC (2e armateur, famille Kohler), lié à COSCO Shipping (1er armateur chinois, jumelage avec Dalian), sous la gouvernance politique de Philippe.`,
      },
      {
        titre: "CMA CGM : le nœud multifonctionnel",
        contenu: `En 2023, Rodolphe Saadé (PDG de CMA CGM) rachète BFM TV, RMC et BFM Business à Patrick Drahi. CMA CGM devient simultanément un acteur du transport maritime mondial, un propriétaire de médias nationaux et un partenaire portuaire du maire du Havre.

En 2024, CMA CGM rachète la branche Bolloré Transport & Logistics, renforçant sa position en Afrique. Yann Le Goff, responsable sécurité régionale de CMA CGM, est Young Leader FAF 2011 dans la même promotion que Philippe.

Le triangle portuaire MSC–CMA CGM–Élysée constitue un nœud de conflits d'intérêts documentés. Kohler est l'« agent pivot » qui connecte l'écosystème Macron/Élysée à l'écosystème maritime mondial via le port du Havre, où Philippe exerce le pouvoir local.`,
      },
    ],
    noeudsLies: [
      "alexis-kohler", "msc-aponte", "rodolphe-saade-cma-cgm", "gpmh",
      "uber-files", "jacques-attali", "commission-attali", "emmanuel-macron",
      "edouard-philippe", "cma-cgm", "yann-le-goff", "antoine-rufenacht",
    ],
    sources: [
      { titre: "ICIJ — Uber Files investigation (2022-2023)", type: "presse" },
      { titre: "The Guardian — publication initiale des Uber Files (juillet 2022)", type: "presse" },
      { titre: "Le Monde / Radio France — enquête conjointe Uber Files", type: "presse" },
      { titre: "Assemblée nationale — rapport commission d'enquête n° 1521 (juillet 2023)", type: "officiel" },
      { titre: "Mediapart — révélations Kohler-MSC (mai-août 2018)", type: "presse" },
      { titre: "Anticor — plaintes successives Kohler (2018-2019)", type: "officiel" },
      { titre: "Off-Investigation — Affaire Kohler : le scandale qui menace Macron", type: "presse" },
      { titre: "Europe 1 — Ce que la justice reproche à Kohler (novembre 2024)", type: "presse" },
      { titre: "Transparency International France — note Uber Files (mai 2023)", type: "officiel" },
    ],
  },
  {
    slug: "bilderberg-philippe-attal",
    titre: "Le réseau Bilderberg — Philippe, Attal et le cénacle transatlantique",
    sousTitre: "Henri de Castries : le pont entre Bilderberg et la France China Foundation",
    resume:
      "Le groupe Bilderberg réunit chaque année 120 à 140 dirigeants sous la règle de Chatham House. Henri de Castries, président du comité depuis 2012, est simultanément au CS de la FCF — pont unique entre réseau transatlantique et sino-français. Philippe y a participé quatre fois, Attal deux, Macron une. Les trois ont été promus dans les mois suivant leur première participation.",
    date: "2026-03-30",
    themes: ["bilderberg", "castries", "axa", "attal", "transatlantique", "fcf", "institut-montaigne"],
    parties: [
      {
        titre: "Chronologie des participations Bilderberg",
        contenu: `Philippe : quatre participations confirmées (2016, 2023, 2024, 2025). Nommé Premier ministre onze mois après sa première participation en 2016.

Attal : invité à Lisbonne en 2023 (ministre des Comptes publics), nommé PM sept mois plus tard. Présent à Stockholm en 2025 comme ancien PM. En 2025, les deux anciens PM macronistes sont présents ensemble, aux côtés de Nicolas Roche (SGDSN).

Macron : participe en 2014 (SG adjoint Élysée), nommé ministre de l'Économie deux mois plus tard.

Le pattern « promotion post-Bilderberg » ne démontre pas une causalité, mais révèle que le comité de sélection (présidé par de Castries) identifie des personnalités à fort potentiel d'ascension avant que leur promotion ne soit publique.`,
      },
      {
        titre: "Henri de Castries : le nœud unique du système",
        contenu: `Ancien PDG d'AXA pendant 16 ans (2000-2016), de Castries cumule des positions sans équivalent : président du comité de direction du Bilderberg depuis 2012, président de l'Institut Montaigne depuis 2015, membre du Conseil stratégique de la FCF, Young Leader FAF à triple sélection (1994, 1995, 1998), condisciple de Villepin à l'ENA (promotion Voltaire, 1980).

Il est le seul individu identifié qui siège simultanément au comité de direction du Bilderberg ET au Conseil stratégique de la FCF. Au sein de la FCF, il retrouve Philippe, Raffarin et Attali. Au Bilderberg, il sélectionne et accueille Philippe, Attal et avait accueilli Macron.

L'écosystème AXA irrigue le Bilderberg français : de Castries (ex-PDG), Buberl (DG actuel) et Gosset-Grainville (président du CA) étaient présents ensemble en 2023. Patricia Barbizet, ex-présidente du Siècle, est le second représentant français permanent au comité directeur.`,
      },
      {
        titre: "Le Bilderberg comme 7ème cercle du réseau Philippe",
        contenu: `Notre cartographie identifiait six cercles d'influence : Juppéie, ENA Marc-Bloch, FAF, FCF, monde des affaires, Horizons. Le Bilderberg constitue un septième cercle, plus discret, caractérisé par : opacité maximale (Chatham House), sélection par le haut (de Castries sélectionne), exclusivité transatlantique (aucune personnalité russe, chinoise, indienne ou africaine invitée).

L'édition 2025 (Stockholm) marque un tournant avec les sujets : relations transatlantiques, axe autoritaire, IA et sécurité nationale. Parmi les participants : le SG de l'OTAN (Rutte), le PDG de Pfizer (Bourla), Peter Thiel et Alex Karp (Palantir), Satya Nadella (Microsoft).

En MAS, de Castries est un « super-facilitateur » qui ne se contente pas de connecter des agents mais sélectionne ceux exposés au réseau transatlantique. En cooptant les futurs dirigeants, il garantit que le prochain occupant de l'Élysée aura été exposé à la vision transatlantique avant d'y accéder.`,
      },
    ],
    noeudsLies: [
      "henri-de-castries", "gabriel-attal", "patricia-barbizet",
      "institut-montaigne", "edouard-philippe", "emmanuel-macron",
      "jacques-attali", "jean-pierre-raffarin",
    ],
    sources: [
      { titre: "bilderberg-meetings.org — listes officielles des participants 2023-2025", type: "officiel" },
      { titre: "FranceSoir — Le groupe Bilderberg, un mini-Davos très secret (2023)", type: "presse" },
      { titre: "Regards.fr — Deux anciens PM macronistes chez Bilderberg (2025)", type: "presse" },
      { titre: "Ifri — Bilderberg, la conférence la plus secrète du monde", type: "presse" },
      { titre: "Parlement européen — question écrite E-001703/2023 (Virginie Joron)", type: "officiel" },
      { titre: "Wikipédia — Henri de Castries, Institut Montaigne", type: "presse" },
    ],
  },
  {
    slug: "blackrock-reseau-philippe",
    titre: "BlackRock & le réseau Philippe — Le gestionnaire d'actifs au cœur du système",
    sousTitre: "De Cirelli à Kohler : la convergence des intérêts financiers et politiques",
    resume:
      "BlackRock (10 000 Mds $) est lié structurellement au réseau Philippe via Cirelli (ex-dircab Raffarin, promu LH par Philippe en pleine grève des retraites). En mars 2025, BlackRock et MSC (famille Kohler) s'associent pour acheter 43 ports mondiaux. Philippe propose 15 % de capitalisation retraites — le rêve de BlackRock.",
    date: "2026-03-30",
    themes: ["blackrock", "cirelli", "retraites", "capitalisation", "msc", "ports", "cac-40", "raffarin"],
    parties: [
      {
        titre: "Jean-François Cirelli : le pont BlackRock–Raffarin–Philippe",
        contenu: `ENA (promotion Léonard de Vinci, 1985), ancien conseiller de Chirac, directeur adjoint du cabinet de Raffarin (2002-2004), artisan de la réforme des retraites Fillon 2003 — son « plus grand sujet de fierté ». PDG de Gaz de France puis numéro 2 de GDF Suez (Engie). Président de BlackRock France depuis 2015.

La chaîne est directe : conseiller de Chirac → dircab de Raffarin → PDG Gaz de France → BlackRock France → invité par Philippe au CAP 2022 → promu LH par Philippe.

Philippe lance en 2018 le Comité Action Publique 2022. Cirelli y siège et recommande des « transferts au secteur privé ». Cirelli déclarait devant l'AMF vouloir « renforcer l'idée auprès des autorités publiques qu'il faut investir pour la retraite dans les marchés de capitaux ». Le patron de BlackRock conseille directement le Premier ministre.

Le 31 décembre 2019, en pleine grève historique, Cirelli est élevé officier de la Légion d'honneur sur proposition de Philippe. Le 7 janvier 2020, des grévistes envahissent le siège de BlackRock.`,
      },
      {
        titre: "Le deal BlackRock–MSC : le nœud portuaire mondial",
        contenu: `En mars 2025, BlackRock et TiL (opérateur portuaire de MSC, famille Aponte, cousins de Kohler) annoncent l'acquisition de 43 ports de CK Hutchison dans 23 pays pour 22,8 milliards de dollars. BlackRock prend les deux ports stratégiques du Canal de Panama, MSC/TiL la majorité des 41 autres.

COSCO Shipping (armateur chinois d'État, partenaire du port du Havre via le jumelage Dalian) exige une participation majoritaire dans le consortium, menaçant de faire capoter le deal. Ce bras de fer illustre la rivalité sino-américaine pour le contrôle des infrastructures portuaires — le même enjeu qui sous-tend le port du Havre.

Connexions avec le réseau : BlackRock est actionnaire d'AXA (de Castries/Bilderberg), BNP (Lemierre/Bilderberg 2025), Total (Pouyanné/Bilderberg), SocGen (où Kohler rejoint en 2025). Le deal BlackRock-MSC connecte directement le gestionnaire d'actifs au triangle Kohler–MSC–Le Havre–Philippe.`,
      },
      {
        titre: "Philippe 2027 : le programme BlackRock",
        contenu: `En juin 2025, Philippe propose 15 % de capitalisation dans les retraites, tout en menaçant de relever l'âge de départ à 67 ans si cette option n'est pas retenue.

Chronologie de la convergence : Cirelli dircab Raffarin et réforme Fillon 2003 → Cirelli président BlackRock France 2015 → Larry Fink reçu à l'Élysée juin 2017 (30 jours après investiture Macron) → ministres Philippe pitchent la France à BlackRock octobre 2017 → Cirelli invité au CAP 2022 (2018) → Cirelli promu LH décembre 2019 → réforme retraites Philippe/Macron 2019-2020 → Philippe propose 15 % capitalisation 2025.

Dans le modèle MAS, BlackRock est une contrainte environnementale — un attracteur financier vers lequel gravitent les agents qui optimisent leur capital relationnel. La convergence Philippe-BlackRock est le produit d'un alignement structurel entre un candidat réformateur et un gestionnaire qui a besoin de la capitalisation.`,
      },
    ],
    noeudsLies: [
      "blackrock", "jean-francois-cirelli", "jean-pierre-raffarin",
      "edouard-philippe", "alexis-kohler", "msc-aponte",
      "henri-de-castries", "gpmh",
    ],
    sources: [
      { titre: "FranceSoir — La dangereuse collusion entre Philippe et BlackRock (juin 2025)", type: "presse" },
      { titre: "Basta! — BlackRock et les retraites : pourquoi et comment", type: "presse" },
      { titre: "Élucid — BlackRock en France : les dangers d'une intoxication institutionnelle (2023)", type: "presse" },
      { titre: "Novethic — La promotion du patron français de BlackRock passe mal (2020)", type: "presse" },
      { titre: "Arte — reportage BlackRock et les retraites (septembre 2019)", type: "presse" },
      { titre: "The Maritime Executive — Hutchison Sells Panama and Other Ports (mars 2025)", type: "presse" },
      { titre: "Wikipédia — BlackRock, Jean-François Cirelli", type: "presse" },
    ],
  },
  {
    slug: "coalition-philippe-2027",
    titre: "La Coalition Philippe 2027 — 90 signataires, un réseau, une candidature",
    sousTitre: "Analyse de la tribune « Pour la France, construisons l'union ! » — La Tribune dimanche, 29 mars 2026",
    resume:
      "90 personnalités de quatre familles politiques (Renaissance, LR, Horizons, MoDem) publient un appel à une candidature unique pour 2027. Marc Ferracci (témoin de Macron, fils d'un membre de la Commission Attali) signe la tribune, bouclant la chaîne Attali → Macron → Philippe. Philippe Tabarot (ministre des Transports, supervise les ports) renforce le triangle portuaire.",
    date: "2026-03-30",
    themes: ["coalition-2027", "tribune", "ferracci", "tabarot", "bregeon", "transports", "attali", "primaire"],
    parties: [
      {
        titre: "La tribune : anatomie d'un ralliement",
        contenu: `La tribune paraît le 29 mars 2026, un jour après l'installation de Philippe comme maire du Havre pour son troisième mandat. Le timing accompagne la transition municipales → présidentielle. Le grand meeting présidentiel est prévu le 12 avril à Paris.

Les signataires écrivent : « Nous appelons à un sursaut d'unité, pour créer les conditions d'un large rassemblement autour d'un projet et d'une candidature unique en 2027 ». Officiellement, aucun candidat n'est désigné. Officieusement, Maud Bregeon déclare sur LCI que Philippe « a pris une sérieuse option, étant potentiellement le mieux placé pour mener ce combat ».

Parmi les signataires : des ministres en exercice (Bregeon, Jeanbrun, Tabarot, Rist, Moutchou), des députés et anciens ministres (Ferracci, Travert, Panosyan-Bouvet), et des sénateurs (Buffet) issus de quatre familles politiques.`,
      },
      {
        titre: "Marc Ferracci : le bouclage de la chaîne Attali",
        contenu: `Marc Ferracci rencontre Macron à 22 ans à Sciences Po. Témoin de mariage de Macron, et Macron est le sien. Son père Pierre Ferracci (Groupe Alpha) a siégé à la Commission Attali en 2007 — la même commission où Macron était rapporteur. Pierre Ferracci a déclaré que le libéralisme de Macron est « un peu le produit de la commission Attali ».

La chaîne se boucle : Attali → Pierre Ferracci (commission 2007) → Marc Ferracci (ami intime de Macron) → Macron → Philippe (PM 2017, suggestion d'Attali) → coalition 2027 (tribune du 29 mars). L'écosystème Attali-Macron ne disparaît pas avec la fin du mandat Macron. Il se transfère vers Philippe via ses agents les plus intimes.

En 2023, Blast révèle que Ferracci détient un tiers des parts du Groupe Alpha, dont la filiale Secafi bénéficierait de la réorganisation de Pôle emploi qu'il co-rapporte. Ce schéma de conflit d'intérêts familial rappelle l'affaire Kohler/MSC.`,
      },
      {
        titre: "Le triangle Transports-Ports-Philippe renforcé",
        contenu: `Philippe Tabarot, ministre des Transports et co-signataire, supervise les ports maritimes français dont le GPMH — nœud Philippe/Kohler/MSC/CMA CGM. Deux précédents sur ce poste : Djebbari (YL FCF 2020, interdit par la HATVP de rejoindre CMA CGM) et Beaune (Bilderberg 2023).

Tabarot est visé par une enquête PNF pour détournement de fonds publics et prise illégale d'intérêts. Ce pattern d'investigations PNF se retrouve chez Philippe (métropole du Havre, 2024) et Kohler (MSC, 2022) — trois nœuds du réseau sous surveillance judiciaire.

Cette tribune constitue un 8ème cercle du réseau Philippe : la coalition gouvernementale transpartisane. Elle se distingue des précédents cercles par sa nature explicitement politique et sa composition multipartite. C'est le passage de l'émergence à la coalescence — les agents qui optimisaient individuellement leur capital relationnel se coordonnent explicitement autour de la candidature Philippe.`,
      },
    ],
    noeudsLies: [
      "marc-ferracci", "philippe-tabarot", "maud-bregeon",
      "edouard-philippe", "jacques-attali", "commission-attali",
      "emmanuel-macron", "gpmh", "alexis-kohler",
    ],
    sources: [
      { titre: "La Tribune dimanche — tribune « Pour la France, construisons l'union ! » (29 mars 2026)", type: "presse" },
      { titre: "France Info — 90 personnalités appellent à une candidature unique (29 mars 2026)", type: "presse" },
      { titre: "LCI — Maud Bregeon : Philippe « mieux placé pour mener ce combat »", type: "presse" },
      { titre: "Blast — conflit d'intérêts Secafi/Alpha/France Travail (2023)", type: "presse" },
      { titre: "Wikipédia — Marc Ferracci, Philippe Tabarot", type: "presse" },
      { titre: "France 3 PACA — « Ce sont des traîtres » : réactions LR (octobre 2025)", type: "presse" },
    ],
  },
  {
    slug: "bilan-fiscal-social-philippe",
    titre: "Bilan fiscal, social et sanitaire — Les dossiers manquants du mandat Philippe",
    sousTitre: "CSG, ISF/IFI, flat tax, ordonnances travail, assurance chômage, obligation vaccinale",
    resume:
      "Huit dossiers supplémentaires du mandat Philippe (2017-2020) : la réforme fiscale du capital (ISF→IFI, flat tax, CSG), la réforme du marché du travail (ordonnances, assurance chômage) et les dossiers sanitaires. Le bilan dessine une orientation cohérente : alléger la fiscalité du capital tout en alourdissant les prélèvements sur le travail et les retraités — exactement aligné avec les intérêts de BlackRock.",
    date: "2026-03-31",
    themes: ["isf", "ifi", "flat-tax", "csg", "ordonnances-travail", "chomage", "blackrock", "ferracci", "retraites"],
    parties: [
      {
        titre: "La réforme fiscale du capital : ISF, flat tax, CSG",
        contenu: `Au 1er janvier 2018, trois réformes simultanées transforment la fiscalité française :

CSG +1,7 point : 22,5 milliards de recettes. Les salariés du privé sont légèrement gagnants (suppression cotisations), mais les retraités perdent 3,5 milliards. Selon l'IFRAP, l'État gagne 1,32 milliard net — un impôt déguisé. Déclencheur direct de la colère des Gilets jaunes.

ISF → IFI : seuls les biens immobiliers taxés, actifs financiers exonérés. Contribuables : 358 000 (ISF) → 133 000 (IFI). Coût : 4,5 Mds/an. France Stratégie (2023) conclut : aucun effet significatif sur l'investissement. Connexion BlackRock : en exonérant les actifs financiers, la réforme rend les ETF BlackRock plus attractifs que l'immobilier.

Flat tax (PFU 30 %) : taux unique remplaçant le barème progressif pour les revenus du capital. Les dividendes explosent (+60 % entre 2017 et 2019) mais se concentrent sur les 0,1 % les plus riches. Le sénateur Éblé : « 4,5 Mds/an pour 50 000 emplois = 90 000 € par emploi ! »`,
      },
      {
        titre: "Ordonnances travail et assurance chômage : la chaîne Attali-Ferracci",
        contenu: `Le 31 août 2017, Philippe et Pénicaud présentent 5 ordonnances réformant le Code du travail : plafonnement des indemnités prud'homales (« barème Macron »), rupture conventionnelle collective, fusion des instances en CSE, primauté de l'accord d'entreprise.

Connexion réseau : les ordonnances s'inscrivent dans la chaîne Commission Attali (2007) → Macron ministre (deal Uber) → ordonnances Philippe (2017). Marc Ferracci, théoricien de la « flexisécurité », est le cerveau de la réforme. Il est témoin de mariage de Macron ET fils de Pierre Ferracci (Commission Attali). Ferracci signe la tribune des 90 pour Philippe en mars 2026.

L'été 2019, la réforme de l'assurance chômage réduit les allocations pour les travailleurs précaires. L'Unédic estime que 1,15 million d'allocataires verront leurs droits réduits. La réforme est inspirée par Ferracci.

En MAS, le bilan Philippe n'est pas une série de décisions isolées — c'est la fonction d'utilité révélée d'un centroïde optimisant dans l'espace d'états défini par BlackRock (capitalisation), CMA CGM (dérégulation portuaire) et le réseau Attali-Ferracci (flexisécurité).`,
      },
      {
        titre: "Dossiers sanitaires et correctif factuel",
        contenu: `Point de rigueur : l'obligation vaccinale des soignants (loi du 5 août 2021) a été votée sous Castex, pas Philippe (parti le 3 juillet 2020). L'infographie virale la lui attribue à tort. Philippe est responsable de la gestion initiale du Covid : confinement (17 mars 2020), décret Rivotril (28 mars 2020), « masques inutiles » (13 mars 2020, TF1).

Environ 15 000 soignants ont été suspendus, dont 4 000 encore suspendus en mai 2022. L'obligation a été suspendue le 13 mai 2023 après recommandation de la HAS.

Les impôts de production (3,5 % du PIB, champion européen) n'ont PAS été réduits sous Philippe malgré les recommandations de BlackRock, du MEDEF et de la Commission européenne. Philippe a préféré ISF/flat tax — des mesures qui bénéficient aux actionnaires plutôt qu'aux entreprises productrices. La baisse n'interviendra que sous Castex et Attal.`,
      },
    ],
    noeudsLies: [
      "edouard-philippe", "blackrock", "jean-francois-cirelli",
      "marc-ferracci", "commission-attali", "jacques-attali",
      "jean-paul-delevoye", "emmanuel-macron",
    ],
    sources: [
      { titre: "France Stratégie — Comité d'évaluation réformes fiscalité du capital (octobre 2023)", type: "officiel" },
      { titre: "Sénat — ISF → IFI et PFU : un premier bilan (rapport Éblé-Montgolfier, octobre 2019)", type: "officiel" },
      { titre: "Vie-publique.fr — Suppression de l'ISF, IFI, flat tax : quel bilan ?", type: "officiel" },
      { titre: "IFRAP — Ce que l'ISF a fait perdre à la France", type: "presse" },
      { titre: "Vision Libérale — Philippe a ajouté 406 milliards à la dette (mars 2026)", type: "presse" },
      { titre: "JDN — Loi Travail : les principales mesures des ordonnances", type: "presse" },
      { titre: "Légifrance — Décret n° 2023-368 (suspension obligation vaccinale)", type: "officiel" },
    ],
  },
  {
    slug: "controverses-mandat-philippe",
    titre: "Les controverses du mandat Philippe — Huit dossiers, un bilan contesté",
    sousTitre: "LBD, Rivotril, Fessenheim, 80 km/h, retraites, NDDL, taxe carbone, chômage",
    resume:
      "Le mandat Philippe (2017-2020) est marqué par huit dossiers controversés : répression des Gilets jaunes (2 500 blessés, 24 éborgnés), décret Rivotril, fermeture de Fessenheim (5 Mds de coût), 80 km/h, réforme des retraites inachevée, NDDL, taxe carbone (déclencheur Gilets jaunes) et 406,6 milliards de dette ajoutée.",
    date: "2026-03-31",
    themes: ["gilets-jaunes", "rivotril", "fessenheim", "80kmh", "retraites", "nddl", "taxe-carbone", "dette"],
    parties: [
      {
        titre: "Répression des Gilets jaunes et décret Rivotril",
        contenu: `De novembre 2018 à mi-2019, le mouvement des Gilets jaunes constitue la pire crise sociale depuis Mai 68. Selon Amnesty International : 2 500 blessés, 24 éborgnés, 5 mains arrachées. La France est le seul pays de l'UE à utiliser les LBD 40 et les grenades GLI-F4 (25 g de TNT) en maintien de l'ordre. L'ONU, le Conseil de l'Europe et Amnesty International condamnent une répression disproportionnée. 89 000 agents mobilisés, véhicules blindés en métropole.

Le 28 mars 2020, le décret Rivotril autorise la dispensation d'un dépresseur respiratoire pour patients Covid en fin de vie. Des soignants témoignent sur France 2 : « On nous demande de faire une euthanasie passive. » La SFGG dément : c'est un soin palliatif. Le décret pallie une pénurie de midazolam.

Parallèlement, les ARS établissent des fiches excluant les résidents d'EHPAD de l'hospitalisation en réanimation. Philippe affirme devant la commission d'enquête qu'il n'y avait pas d'instruction d'interdiction, contredisant les fiches ARS documentées.`,
      },
      {
        titre: "Fessenheim, NDDL et taxe carbone",
        contenu: `Fessenheim : le gouvernement ferme la doyenne des centrales nucléaires (décret du 18 février 2020). Aucune justification technique — c'est l'exécution d'une promesse Hollande aux écologistes. Coût estimé : 5 milliards d'euros. En pleine crise énergétique 2022, les 10 TWh manquants auraient représenté 3 à 6 milliards sur le marché. La mission parlementaire conclut à un « fiasco ».

NDDL : le 17 janvier 2018, Philippe abandonne le projet d'aéroport. Le 9 avril, 2 500 gendarmes expulsent les zadistes. Un étudiant a la main arrachée en ramassant une grenade. La droite accuse Philippe d'avoir « capitulé ».

Taxe carbone : la composante carbone de la TICPE passe de 7 €/t (2014) à 44,60 €/t (2018). Le 17 novembre 2018, 280 000 Gilets jaunes se lèvent. Le 4 décembre, Philippe annonce un moratoire ; l'Élysée le désavoue le lendemain. Résultat : zéro recette, une crise historique, et une prime d'activité d'urgence de 9,5 Mds/an.`,
      },
      {
        titre: "Retraites inachevées et bilan économique : 406 milliards de dette",
        contenu: `Le 11 décembre 2019, Philippe présente le système universel à points. Trois mois de grèves s'ensuivent. Delevoye démissionne pour activités non déclarées (il avait rencontré BlackRock en mars 2018). Philippe utilise le 49.3 en février 2020, puis la pandémie gèle la réforme.

Bilan économique : le chômage baisse (9,4 % → 7,1 % entre 2017 et 2019) mais la dette explose de 406,6 milliards en trois ans (98,4 % → 115,7 % du PIB). Les réformes structurelles sont inachevées (retraites, assurance chômage). Le sénateur Dallier (LR) : « La situation de la France est moins bonne au moment où il part que quand il arrive. »

Public Sénat titre : « Un homme d'État mais des réformes inachevées. » Euractiv résume un mandat « marqué par les crises ». La dette ajoutée en trois ans dépasse celle des huit années Hollande.`,
      },
    ],
    noeudsLies: [
      "edouard-philippe", "jean-paul-delevoye", "blackrock",
      "jean-francois-cirelli", "emmanuel-macron",
    ],
    sources: [
      { titre: "Amnesty International — Gilets jaunes : un bilan inquiétant (novembre 2019)", type: "officiel" },
      { titre: "France Info / Pièces à conviction — EHPAD et Rivotril (novembre 2020)", type: "presse" },
      { titre: "Légifrance — Décret n° 2020-360 (Rivotril) et n° 2020-129 (Fessenheim)", type: "officiel" },
      { titre: "Assemblée nationale — Mission d'information Fessenheim", type: "officiel" },
      { titre: "Public Sénat — Un homme d'État mais des réformes inachevées (juillet 2020)", type: "presse" },
      { titre: "Euractiv — Philippe quitte Matignon après un mandat marqué par les crises", type: "presse" },
      { titre: "Vision Libérale — Philippe a ajouté 406 milliards à la dette (mars 2026)", type: "presse" },
    ],
  },
  {
    slug: "sondages-medias-philippe",
    titre: "Sondages & médias complaisants — La fabrique du candidat providentiel",
    sousTitre: "Elabe/BFMTV vs moipresident.online vs Ipsos-BVA vs Odoxa",
    resume:
      "Le sondage Elabe/BFMTV du 28 mars 2026 donne à Philippe 3,5 à 8,5 points de plus que l'agrégation bayésienne indépendante. BFMTV appartient à CMA CGM (Saadé), dont le hub est Le Havre. La synchronisation sondage + tribune 90 signataires + meeting constitue une opération de communication intégrée. Le baromètre Ipsos-BVA donne Philippe dernier du bloc central (20 %).",
    date: "2026-03-31",
    themes: ["sondages", "bfmtv", "cma-cgm", "elabe", "medias", "propagande", "moipresident"],
    parties: [
      {
        titre: "Le sondage Elabe/BFMTV : un candidat surévalué",
        contenu: `Sondage Elabe du 25-27 mars 2026 (1 504 personnes) : Philippe à 20,5-25,5 % au premier tour selon les configurations. Philippe 51,5 % vs Bardella 48,5 % au second tour.

Point critique : le score de 51,5 % est DANS la marge d'erreur (3,1 points). Ce résultat n'est pas statistiquement significatif. Le meilleur score (25,5 %) repose sur une configuration irréaliste : gauche éparpillée ET absence de tout candidat LR. Or Retailleau est déclaré et affirme qu'« un candidat macroniste ne pourra pas être élu ».

L'agrégation bayésienne de moipresident.online donne Philippe à 17 % au 16 mars — soit 3,5 à 8,5 points de moins. Seul Philippe bénéficie de cet écart ; Bardella et Glucksmann sont cohérents entre les sources.`,
      },
      {
        titre: "Ipsos-BVA et Odoxa : la réalité des données",
        contenu: `Le baromètre Ipsos-BVA/CESI de mars 2026 donne la satisfaction en cas d'accession à la présidence : Bardella 35 %, Le Pen 33 %, Marion Maréchal 24 %, Darmanin 22 %, Attal 21 %, Philippe 20 %. Philippe est dernier du bloc central, à 15 points de Bardella. Ce baromètre contredit frontalement le récit du « seul capable de battre le RN ».

Le baromètre Odoxa de décembre 2025 montrait Philippe sous la barre des 30 % d'opinions favorables (29 %, point le plus bas depuis sa candidature). Avant les municipales, un sondage le donnait battu au Havre par le communiste Lecoq.

Luc Ferry qualifie Philippe de « pire Premier ministre de la Ve République » et ne croit pas aux sondages. Le contraste entre la promotion médiatique et les indicateurs réels est saisissant.`,
      },
      {
        titre: "BFMTV/CMA CGM : le conflit d'intérêts médiatique",
        contenu: `BFMTV, commanditaire du sondage, appartient depuis 2023 à CMA Média (filiale CMA CGM, Rodolphe Saadé). CMA CGM est le 3e armateur mondial, dont le hub principal est Le Havre — fief de Philippe. Le média qui commande le sondage et le candidat qu'il promeut partagent un intérêt commun.

La triple offensive du 28-29 mars : sondage Elabe/BFMTV (28 mars) + tribune 90 signataires dans La Tribune dimanche (29 mars) + annonce meeting Horizons (12 avril). Le sondage légitime la tribune, la tribune légitime le meeting, le meeting lance la campagne. Boulevard Voltaire : « La Macronie poursuit la mise en orbite d'Édouard Philippe. »

En MAS, les sondages ne sont pas des mesures neutres — ce sont des signaux qui influencent le comportement des agents. Un sondage commandé par un média du réseau crée une boucle de rétroaction positive : la prophétie auto-réalisatrice du système médiatico-politique.`,
      },
    ],
    noeudsLies: [
      "edouard-philippe", "rodolphe-saade-cma-cgm", "cma-cgm",
      "elabe-bfmtv", "gabriel-attal", "maud-bregeon",
    ],
    sources: [
      { titre: "Elabe — Sondage pour BFMTV et La Tribune dimanche (25-27 mars 2026)", type: "presse" },
      { titre: "moipresident.online — agrégation bayésienne des sondages (16 mars 2026)", type: "presse" },
      { titre: "Ipsos-BVA/CESI — Baromètre politique mars 2026", type: "presse" },
      { titre: "Odoxa-Mascaret — Baromètre de popularité décembre 2025 pour Public Sénat", type: "presse" },
      { titre: "Boulevard Voltaire — Sondage, tribune, meeting : la promotion de Philippe (30 mars 2026)", type: "presse" },
      { titre: "Planet.fr — Cote de popularité en net recul (décembre 2025)", type: "presse" },
    ],
  },
  {
    slug: "bilderberg-cooptation-castries",
    titre: "Édouard Philippe et le groupe Bilderberg — Cinq participations, un coopteur",
    sousTitre: "Henri de Castries, le coopteur commun de Macron et Philippe",
    resume:
      "De Castries confirme au JDD avoir personnellement coopté Philippe au Bilderberg en 2015 et Macron en 2014. Cinq participations documentées (2015-2025). Le pattern d'élévation post-Bilderberg est récurrent : Macron ministre 2 mois après, Philippe PM 11 mois après, Attal PM 7 mois après. Juppé était présent en 2015 avec Philippe.",
    date: "2026-04-01",
    themes: ["bilderberg", "castries", "cooptation", "macron", "juppe", "axa", "dgse", "transatlantique"],
    parties: [
      {
        titre: "Les cinq participations d'Édouard Philippe (2015-2025)",
        contenu: `Henri de Castries confirme au JDD : « C'est moi qui l'ai proposé. Comme maire, il avait développé des idées intéressantes. » Philippe n'est alors que simple maire du Havre.

2015 (Telfs-Buchen) : première cooptation. Philippe se retrouve à la table de Kissinger, Peter Thiel (Palantir), Demis Hassabis (DeepMind), les présidents de BP, Shell, Lazard, BlackRock, LinkedIn, le PM belge Charles Michel. Alain Juppé, son mentor, est également présent.

2016 (Dresde) : deuxième carton. Philippe y côtoie Christine Lagarde (FMI), Laurent Fabius, Emmanuelle Charpentier. Onze mois plus tard, il est nommé Premier ministre.

2023-2025 (Lisbonne, Madrid, Stockholm) : retour en force. En 2025, première fois que deux anciens PM macronistes (Philippe et Attal) participent ensemble, aux côtés de Nicolas Roche (SGDSN, nommé deux mois plus tôt).

Chronologie des cooptations de Castries : Macron en 2014 → ministre 2 mois après. Philippe en 2015 → PM 11 mois après la 2e participation (2016). Attal en 2023 → PM 7 mois après. FranceSoir documente ce pattern récurrent d'élévation post-Bilderberg.`,
      },
      {
        titre: "Le noyau français récurrent et le renseignement",
        contenu: `L'analyse des listes de participants révèle un noyau qui recoupe les autres cercles d'influence de Philippe :

Henri de Castries (AXA, Institut Montaigne) — 2015, 2016, 2023. Patrick Pouyanné (TotalEnergies) — 2023, 2025. Patricia Barbizet (ex-Kering, ex-présidente du Siècle) — 2016, 2023. Thomas Buberl (DG AXA) — 2023. Antoine Gosset-Grainville (président CA AXA) — 2023. Jean Lemierre (président BNP Paribas) — 2025. Bernard Émié (directeur DGSE) — 2023. Nicolas Roche (SGDSN) — 2025.

La présence simultanée de dirigeants du renseignement français (Émié, Roche) aux côtés de candidats présidentiels dans un forum privé est soulevée par Regards.fr : « Il est légitime de s'interroger sur ce qu'ont été faire et dire Nicolas Roche, mais aussi Gabriel Attal et Édouard Philippe à cette réunion annuelle. »

La triple concentration AXA (de Castries + Buberl + Gosset-Grainville) au Bilderberg 2023 documente l'irrigation de l'écosystème par un seul assureur — dont le conseil stratégique FCF inclut Philippe et Raffarin.`,
      },
      {
        titre: "Le Bilderberg comme méta-cercle du réseau Philippe",
        contenu: `Le Bilderberg constitue le 7ème cercle de la cartographie. Il se distingue par sa dimension transatlantique et le calibre des co-participants (chefs d'État, PDG Fortune 500, chefs du renseignement).

Les intersections entre cercles sont significatives : AXA (Bilderberg) est au CS de la FCF. Juppé (cercle 1) est présent au Bilderberg 2015 avec Philippe. Castries (Bilderberg) préside l'Institut Montaigne, qui a inspiré la doctrine Macron 2017. Le Bilderberg fonctionne comme un méta-cercle où les nœuds des cercles inférieurs (FAF, FCF, monde des affaires) se retrouvent.

Philippe Villin, ancien patron du Figaro, décrit les invités comme « assez conformistes, tous attachés au capitalisme et au libre-échangisme ». Etienne Davignon (avant-dernier président) : « Pour y être coopté, il faut avoir de l'entregent et une vision planétaire. »

En MAS, le Bilderberg est l'espace de coordination de plus haut niveau — le lieu où les fonctions d'utilité des centroïdes s'alignent sous couvert de confidentialité Chatham House.`,
      },
    ],
    noeudsLies: [
      "henri-de-castries", "edouard-philippe", "gabriel-attal",
      "emmanuel-macron", "alain-juppe", "patricia-barbizet",
      "patrick-pouyanné", "jean-lemierre", "bernard-emie",
      "institut-montaigne", "blackrock",
    ],
    sources: [
      { titre: "bilderbergmeetings.org — listes officielles 2015-2025", type: "officiel" },
      { titre: "JDD — Ce que Macron a dit au Bilderberg en 2014 (témoignage de Castries)", type: "presse" },
      { titre: "FranceSoir — enquêtes Bilderberg 2023-2024, schémas d'élévation", type: "presse" },
      { titre: "Regards.fr — Deux anciens PM macronistes chez Bilderberg (juin 2025)", type: "presse" },
      { titre: "Parlement européen — question écrite E-001703/2023 (Virginie Joron)", type: "officiel" },
      { titre: "publicintelligence.net — archives participants depuis 1954", type: "presse" },
    ],
  },
  {
    slug: "kohler-saade-narcotrafic-havre",
    titre: "Kohler, Saadé, le port du Havre et le tsunami blanc",
    sousTitre: "MSC, CMA CGM, narcotrafic portuaire et nexus médiatico-politique",
    resume:
      "Le Havre représente 78 % des saisies portuaires françaises de cocaïne. Estimation : 70 à 280 tonnes/an transitent par le port. Kohler a voté des contrats MSC au GPMH sans déclarer ses liens familiaux. Saadé (CMA CGM) contrôle BFM TV/RMC et affiche 296 M€ de déficit médiatique — un investissement d'influence, pas de rendement. Macron a personnellement écrit au PNF pour disculper Kohler.",
    date: "2026-04-01",
    themes: ["kohler", "saade", "cma-cgm", "msc", "narcotrafic", "cocaïne", "bfmtv", "havre", "gpmh", "medias"],
    parties: [
      {
        titre: "Kohler au GPMH : les votes MSC et la chronologie judiciaire",
        contenu: `Mediapart révèle en août 2018 que Kohler a voté en faveur de contrats entre le GPMH et Terminal Normandie MSC (TNMSC) lors des séances de septembre 2010 et septembre 2011. Or la mère de Kohler est cousine germaine de Rafaela Aponte, cofondatrice de MSC. Kohler n'a jamais informé les autres membres ni ne s'est déporté. Philippe, lui, se déportait régulièrement.

Chronologie judiciaire : mai 2018 (révélation Mediapart, enquête PNF) → août 2018 (plainte Anticor) → été 2019 (classement sans suite) → Mediapart révèle que Macron a personnellement écrit au PNF pour disculper Kohler, au lendemain d'un rapport de police l'accablant → septembre 2022 (mise en examen prise illégale d'intérêts, témoin assisté trafic d'influence) → novembre 2024 (cour d'appel confirme les poursuites). Ses anciens supérieurs à l'APE (Bézard, Comolli) sont également mis en examen pour complicité.

France Télévisions a déprogrammé un Complément d'enquête prévu sur Kohler. La question de ce que Philippe savait des liens Kohler-Aponte au GPMH reste ouverte.`,
      },
      {
        titre: "L'empire médiatique Saadé : 296 M€ de déficit pour l'influence",
        contenu: `En moins de trois ans, Saadé a bâti un pôle médiatique de premier plan : La Provence et Corse-Matin (81 M€, 2022), La Tribune (2023), Altice Média — BFM TV, RMC, BFM Business, 10 BFM Régions, RMC Sport (1,55 Md€, mars 2024), Brut (2025), parts dans M6 (10,25 %). Troisième pôle médiatique français après Bolloré et Arnault.

L'Informé note que le rachat d'Altice Média représentait 14 fois l'Ebitda 2023. Le vendeur (Drahi) aurait déclaré : « Une influence politique, ça n'a pas de prix. » Six mois après, 250 M€ de dépréciation et 296 M€ de déficit net en 2024. L'investissement est structurellement déficitaire — objectif d'influence, pas de rentabilité.

En mars 2024, le directeur de La Provence est mis à pied après une Une défavorable à Macron. Grève de plusieurs titres. L'actionnaire intervient quand la couverture du pouvoir exécutif ne convient pas. La question : cette influence s'exercera-t-elle en faveur de Philippe pendant la campagne 2027 ?`,
      },
      {
        titre: "Le tsunami blanc : narcotrafic portuaire au Havre",
        contenu: `Le Havre représente 78 % des saisies portuaires françaises de cocaïne. En 2024, 22 tonnes saisies (avec interceptions amont). Les spécialistes estiment que les saisies ne représentent que 5 à 20 % du trafic réel — soit 70 à 280 tonnes par an. Les experts parlent d'un « tsunami blanc ».

Le mode opératoire du « conteneur clone » (saisie du 30/12/2024, 2 tonnes) : un conteneur portant un marquage identique est déposé à l'avance, sort sans passer par le scanner. Implication récurrente de dockers : en huit ans, une quinzaine d'enlèvements, dont un docker torturé et tué en 2020. La zone portuaire couvre 10 000 hectares (= Paris intra-muros). 8 000 conteneurs/jour, moins de 5 % contrôlés. 350 douaniers. L'OFAST n'est installé que depuis septembre 2023 (21 agents).

Off-Investigation et Bloomberg confirment que « plusieurs cargos MSC ont été découverts avec d'importantes quantités de cocaïne ». Le maire, dont la légitimité repose en partie sur la prospérité portuaire, se trouve en conflit d'intérêts structurel entre promotion du port et contrôle de ses dérives — et ce depuis 2010.`,
      },
    ],
    noeudsLies: [
      "alexis-kohler", "rodolphe-saade-cma-cgm", "msc-aponte",
      "gpmh", "edouard-philippe", "cma-cgm", "elabe-bfmtv",
      "antoine-rufenacht", "yann-le-goff",
    ],
    sources: [
      { titre: "Mediapart (Martine Orange, Laurent Mauduit) — révélations Kohler-MSC-GPMH 2018", type: "presse" },
      { titre: "Off-Investigation — série « Emmanuel, un homme d'affaires à l'Élysée », épisode Kohler", type: "presse" },
      { titre: "Bloomberg — enquête MSC-cocaïne", type: "presse" },
      { titre: "Europe 1 — Kohler a voté des contrats MSC au port du Havre", type: "presse" },
      { titre: "Décideurs Magazine — relations Saadé-Philippe", type: "presse" },
      { titre: "L'Informé — pertes CMA Média 2024, 296 M€ de déficit", type: "presse" },
      { titre: "Franceinfo / Envoyé spécial — saisies Le Havre 2019-2024", type: "presse" },
      { titre: "France Bleu Normandie — conteneurs clones, enlèvements dockers", type: "presse" },
      { titre: "HATVP — avis Djebbari/CMA CGM, risques déontologiques substantiels", type: "officiel" },
    ],
  },
  {
    slug: "nunez-bras-arme-repression",
    titre: "Laurent Nuñez — Le bras armé de la répression macroniste",
    sousTitre: "DGSI • Gilets jaunes • BRAV-M • JO 2024 • gouvernement Lecornu II",
    resume:
      "Laurent Nuñez est l'exécuteur opérationnel de la répression des Gilets jaunes (2 500 blessés, 24 éborgnés) dans le gouvernement Philippe II. Directeur de la DGSI, secrétaire d'État à l'Intérieur (tandem Castaner-Nuñez), coordonnateur renseignement à l'Élysée, préfet de police de Paris, puis ministre de l'Intérieur (Lecornu II). Découverte centrale : le triangle ENA Nuñez–Bompard–Caubel relie directement sa promotion (Cyrano de Bergerac, 1997-99) au cabinet Philippe et au parti Horizons.",
    date: "2026-04-02",
    themes: ["nunez", "dgsi", "gilets-jaunes", "brav-m", "jo-2024", "lecornu", "ena", "repression"],
    parties: [
      {
        titre: "Parcours préfectoral — l'ascension d'un appareil sécuritaire",
        contenu: `Laurent Nuñez-Belda (né le 19 février 1964 à Bourges) est issu d'une famille de pieds-noirs d'origine espagnole rapatriés en 1962. Après un DESS en gestion des collectivités locales, il est inspecteur des impôts à Bercy, puis intègre l'ENA par le concours interne en 1997 (promotion Cyrano de Bergerac, 1997-1999).

Chaque poste le place au cœur de crises majeures : directeur de cabinet du préfet de police de Paris (attentats Charlie Hebdo/Hyper Cacher, 2015), préfet de police des Bouches-du-Rhône — où il déploie charges de CRS et canon à eau contre des grévistes à Fos-sur-Mer en 2016.

Le 22 juin 2017, cinq semaines après la nomination de Philippe à Matignon, Macron nomme Nuñez à la tête de la DGSI. La simultanéité avec la formation du gouvernement Philippe n'est pas anodine : Macron réorganise l'ensemble du dispositif sécuritaire dès les premières semaines du quinquennat.`,
      },
      {
        titre: "La répression des Gilets jaunes — le bras armé de Philippe",
        contenu: `Le 16 octobre 2018, Nuñez entre au gouvernement Philippe II comme secrétaire d'État auprès du ministre de l'Intérieur Christophe Castaner. Le timing est critique : le mouvement des Gilets jaunes éclate un mois plus tard, le 17 novembre 2018.

Le tandem Castaner-Nuñez : officiellement, Castaner est le ministre et Nuñez son adjoint. En réalité, selon Libération et Le Monde, « c'est lui [Nuñez] qui est véritablement aux manettes » à Beauvau. Castaner assume le rôle politique et médiatique ; Nuñez épluche les dossiers et prémâche le travail.

Défense des LBD (mars 2019, BFMTV) : « Sans le LBD, on est incapable d'interpeller des personnes dans des scènes de guérilla urbaine. » Il reproche au Défenseur des droits Jacques Toubon d'avoir fragilisé les policiers. Il participe au limogeage du préfet Delpuech en mars 2019, jugé trop laxiste, ouvrant la phase la plus dure de la répression sous Lallement.

La chaîne de responsabilité s'établit sur quatre niveaux : décision politique (Macron/Philippe), pilotage opérationnel (Castaner/Nuñez), exécution terrain (Lallement), continuité post-2020 (Nuñez comme préfet de police, puis ministre).`,
      },
      {
        titre: "Le triangle ENA : Nuñez–Bompard–Caubel",
        contenu: `La découverte structurante de l'investigation : Nuñez et Alexandre Bompard sont condisciples de la promotion Cyrano de Bergerac de l'ENA (1997-1999). L'arrêté du 19 avril 1999 (Légifrance, JORFTEXT000000211140) en fait foi. Bompard sort 4e de la promotion et choisit l'Inspection générale des finances ; Nuñez rejoint le ministère de l'Intérieur.

L'épouse d'Alexandre Bompard, Charlotte Caubel (magistrate, Sciences Po), est nommée en mai 2017 conseillère justice au cabinet d'Édouard Philippe à Matignon. Elle y reste trois ans (2017-2020), devenant cheffe du pôle justice. Nuñez, entré au gouvernement Philippe en octobre 2018, siège donc dans le même exécutif que l'épouse de son condisciple de l'ENA.

Charlotte Caubel est membre du parti Horizons. Après Matignon, elle dirige la Protection judiciaire de la jeunesse (2020-2022), puis devient secrétaire d'État chargée de l'Enfance dans le gouvernement Borne (2022-2024). Son mari Alexandre Bompard dirige Carrefour (CA 2024 : 86 milliards d'euros), groupe ayant d'importants intérêts en Chine et partenaire officiel des JO 2024.

Ce triangle relie directement la promotion ENA de Nuñez au cœur du cabinet Philippe et au parti Horizons.`,
      },
      {
        titre: "Analyse MAS — l'agent d'exécution régalien",
        contenu: `En termes de systèmes multi-agents, Laurent Nuñez n'est pas un centroïde mais un agent spécialisé de type « exécuteur régalien ». Sa fonction d'utilité est la maximisation du contrôle sécuritaire au service du centroïde dominant (Macron).

Contrairement à Attali ou Minc (agents facilitateurs qui connectent des centroïdes), Nuñez implémente les décisions des centroïdes dans l'espace d'états sécuritaire. Sa loyauté va directement au président — qui le nomme personnellement à chaque poste clé (DGSI, CNRLT, préfecture de police, ministère) — pas au Premier ministre qui le supervise nominalement.

Vis-à-vis de Philippe, Nuñez est un subordonné opérationnel (2018-2020) sans fidélité organique. Leur lien est une co-responsabilité : toute mise en cause de la répression des Gilets jaunes implique simultanément Philippe (responsabilité politique) et Nuñez (exécution opérationnelle).

Dans le gouvernement Lecornu II, sa présence aux côtés de membres Horizons (Parmentier-Lecocq, Bregeon) crée un lien indirect supplémentaire avec la sphère philippiste.`,
      },
      {
        titre: "Controverses — BRAV-M, Nahel Merzouk, Sainte-Soline",
        contenu: `BRAV-M et retraites (2023) : la brigade BRAV-M, créée sous son secrétariat d'État (2019), est mise en cause pour sept blessés graves lors des manifestations contre la réforme des retraites 2023. Nuñez prend leur défense et paie leurs frais d'avocat contre l'avis de ses services.

Affaire Nahel Merzouk (2023-2024) : en juillet 2023, Nuñez soutient les propos du DGPN Frédéric Veaux estimant « qu'un policier n'a pas sa place en prison ». En février 2024, il émet un avis « particulièrement favorable » pour la mutation du policier ayant tué Nahel dans le commissariat de son choix — décision dénoncée comme une institutionnalisation de l'impunité policière.

Sainte-Soline (2023-2025) : des vidéos policières révèlent des « tirs tendus » de grenades, pratique illégale. Nuñez refuse le terme de « violences policières » mais demande une enquête administrative.

En parallèle, sa gestion des JO de Paris 2024 est unanimement reconnue comme un succès sécuritaire majeur, lui valant le grade de commandeur de la Légion d'honneur.`,
      },
    ],
    noeudsLies: [
      "laurent-nunez", "christophe-castaner", "sebastien-lecornu",
      "gabriel-attal", "bernard-emie", "alexandre-bompard", "charlotte-caubel",
    ],
    sources: [
      { titre: "Wikipédia — article « Laurent Nuñez »", type: "presse" },
      { titre: "Légifrance — Arrêté du 19 avril 1999, promotion Cyrano de Bergerac (JORFTEXT000000211140)", type: "officiel" },
      { titre: "Europe 1 — « Cinq choses à savoir sur Laurent Nuñez » (octobre 2018)", type: "presse" },
      { titre: "Le JDD — « Laurent Nuñez, patron de la DGSI et nouvel homme fort du renseignement » (juillet 2017)", type: "presse" },
      { titre: "France 24 — « Nuñez nommé à l'Intérieur » (octobre 2025)", type: "presse" },
      { titre: "Révolution Permanente — « Un artisan de la répression des Gilets jaunes à Beauvau » (octobre 2025)", type: "presse" },
      { titre: "Vie-publique.fr — Interview Nuñez, BFMTV, 19 mars 2019 (maintien de l'ordre)", type: "officiel" },
      { titre: "Libération / Le Monde — « C'est lui qui est véritablement aux manettes » (Nuñez à Beauvau)", type: "presse" },
      { titre: "Le Point — « Le couple Bompard a le vent en poupe » (juin 2017)", type: "presse" },
      { titre: "Gendinfo — « Laurent Nuñez succède à Bruno Retailleau » (octobre 2025)", type: "presse" },
      { titre: "info.gouv.fr — Fiche Charlotte Caubel (parcours officiel)", type: "officiel" },
      { titre: "JSS — « Charlotte Caubel nommée procureure adjointe à Paris » (août 2025)", type: "presse" },
      { titre: "FranceSoir — « Laurent Nuñez succède à Didier Lallement » (juillet 2022)", type: "presse" },
    ],
  },
];

export const stats = {
  controverses: controverses.length,
  articles: timeline.length,
  connexions: reseau.length,
  sources: controverses.reduce((acc, c) => acc + c.sources.length, 0),
  investigations: investigations.length,
};
