// Donnees extraites de edouard_philippe_biographie.docx
// Seed statique pour le rendu initial — sera remplace par la BDD

export const ficheSynthetique = {
  nomComplet: "Edouard Charles Philippe",
  dateNaissance: "28 novembre 1970",
  age: 55,
  lieuNaissance: "Rouen, Seine-Maritime",
  parti: "Horizons (depuis 2021) — ex-UMP/LR",
  fonctionActuelle: "Maire du Havre (3e mandat, depuis 2026)",
  premierMinistre: "15 mai 2017 – 3 juillet 2020",
  conjoint: "Edith Chabre (marie depuis 2002)",
  enfants: "Trois : Anatole, Leonard, Sarah",
  formation:
    "Sciences Po Paris (1992), ENA Marc-Bloch (1997), Young Leader FAF (2011)",
  candidature2027: "Declaree en septembre 2024",
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
    titre: "Naissance a Rouen",
    description:
      "Nait le 28 novembre 1970 a Rouen dans une famille d'enseignants. Son pere est chef d'etablissement scolaire, sa mere professeur de francais. Il evoque regulierement un arriere-grand-pere docker, membre de la CGT au Havre, parmi les premiers adherents du Parti communiste.",
    categorie: "biographie",
    section: "Origines",
  },
  {
    annee: "1988",
    titre: "Baccalaureat au lycee francais de Bonn",
    description:
      "Passe son bac en Allemagne ou son pere est proviseur. Ce sejour formateur marque durablement sa vision europeenne.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "1992",
    titre: "Diplome de Sciences Po Paris",
    description:
      "Section Service public. Se rapproche un temps des clubs animes par le courant rocardien du PS. Milite brievement (environ deux ans) au PS avant de s'en eloigner definitivement.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "1994",
    titre: "Service militaire — officier d'artillerie",
    description:
      "Officier au 11e regiment d'artillerie de marine, avec le grade d'aspirant. Sera ensuite officier dans la reserve operationnelle.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "1995-1997",
    titre: "ENA — promotion Marc-Bloch",
    description:
      "Son excellent classement de sortie lui permet d'integrer le Conseil d'Etat, section du contentieux, specialite droit des marches publics.",
    categorie: "biographie",
    section: "Formation",
  },
  {
    annee: "2011",
    titre: "Young Leader — French-American Foundation",
    description:
      "Selectionne avec 9 autres Francais et 10 Americains. Dans sa promotion : Yann Le Goff (securite regionale CMA CGM), Yohann Benard (Amazon France). Macron sera dans la promotion suivante (2012), Juppe dans la fondatrice (1982). Le contenu des seminaires n'est pas public.",
    categorie: "biographie",
    section: "Reseau",
  },
  // Reseau FCF (decouvert via Wayback Machine)
  {
    annee: "2013",
    titre: "Ribadeau-Dumas rejoint la France China Foundation",
    description:
      "Benoit Ribadeau-Dumas, futur dircab de Philippe a Matignon, issu de la meme promotion ENA Marc-Bloch, integre la France China Foundation (FCF). Emmanuel Lenain, co-createur de la FCF, deviendra conseiller diplomatique de Philippe a Matignon.",
    categorie: "biographie",
    section: "Reseau",
  },
  // II. Carriere professionnelle
  {
    annee: "1997-2002",
    titre: "Conseil d'Etat — auditeur puis maitre des requetes",
    description:
      "Section du contentieux, specialise dans le droit des marches publics.",
    categorie: "carriere",
    section: "Carriere",
  },
  {
    annee: "2004-2007",
    titre: "Avocat chez Debevoise & Plimpton",
    description:
      "Rejoint la filiale francaise du cabinet d'avocats anglo-saxon. Se met en disponibilite du Conseil d'Etat.",
    categorie: "carriere",
    section: "Carriere",
  },
  {
    annee: "2007-2010",
    titre: "Directeur des affaires publiques d'Areva",
    description:
      "Fonction de lobbying et de relations avec les elus au sein de la multinationale nucleaire.",
    categorie: "carriere",
    section: "Carriere",
  },
  {
    annee: "2020",
    titre: "Administrateur d'Atos",
    description:
      "Nomme administrateur independant. Mandat remunere ~70 000€/an, critique alors que l'entreprise connait de graves difficultes financieres. Atos est en pointe sur le traitement des donnees des radars automatiques.",
    categorie: "controverse",
    section: "Carriere",
  },
  // III. Parcours politique local
  {
    annee: "2001",
    titre: "Adjoint au maire du Havre",
    description:
      "Antoine Rufenacht le propose sur sa liste municipale. Charge des affaires juridiques.",
    categorie: "biographie",
    section: "Le Havre",
  },
  {
    annee: "2002",
    titre: "Echec aux legislatives / DG de l'UMP",
    description:
      "Battu par le communiste Daniel Paul (42,5%). Juppe lui propose de participer a la fondation de l'UMP — DG des services jusqu'en 2004.",
    categorie: "biographie",
    section: "Politique nationale",
  },
  {
    annee: "2010",
    titre: "Elu maire du Havre",
    description:
      "Succede a Antoine Rufenacht. President de la communaute d'agglomeration havraise. Mene une politique de transformation urbaine, mais endettement en forte hausse — finances « proches du seuil d'alerte » selon la chambre regionale des comptes.",
    categorie: "biographie",
    section: "Le Havre",
  },
  {
    annee: "2012",
    titre: "Elu depute de la Seine-Maritime",
    description: "7e circonscription, sous l'etiquette UMP.",
    categorie: "biographie",
    section: "Politique nationale",
  },
  {
    annee: "2014",
    titre: "Reelu maire du Havre au 1er tour",
    description: "La liste qu'il conduit l'emporte des le premier tour.",
    categorie: "biographie",
    section: "Le Havre",
  },
  // IV. Route vers Matignon
  {
    annee: "2016",
    titre: "Porte-parole de Juppe a la primaire",
    description:
      "Co-porte-parole avec Benoist Apparu. Apres la defaite de Juppe, se rallie a Fillon.",
    categorie: "biographie",
    section: "Politique nationale",
  },
  {
    annee: "Mars 2017",
    titre: "Retrait de la campagne Fillon",
    description:
      "Se met en retrait apres l'affaire Fillon. Avait qualifie Macron d'« ancien banquier de chez Rothschild » et denonce son « cynisme de vieux routier ».",
    categorie: "biographie",
    section: "Politique nationale",
  },
  // V. Premier ministre
  {
    annee: "15 mai 2017",
    titre: "Nomme Premier ministre",
    description:
      "3e plus jeune PM de la Ve Republique (46 ans). Premiere fois hors cohabitation qu'un PM n'est pas du mouvement presidentiel.",
    categorie: "biographie",
    section: "Matignon",
  },
  {
    annee: "Mai 2017",
    titre: "Ribadeau-Dumas nomme directeur de cabinet",
    description:
      "Benoit Ribadeau-Dumas (ENA Marc-Bloch, meme promotion que Philippe, FCF 2013) est nomme dircab de Matignon. Emmanuel Lenain (co-createur FCF) devient conseiller diplomatique. Le reseau ENA/FAF/FCF se retrouve au coeur du pouvoir executif.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Ete 2017",
    titre: "Ordonnances Code du travail",
    description:
      "Flexibilisation du marche du travail, renforcement du dialogue social. Premiere reforme majeure par ordonnances.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "1er janv. 2018",
    titre: "11 vaccins obligatoires",
    description:
      "Annonce la mesure en personne le 4 juillet 2017. 8 vaccins recommandes deviennent obligatoires, conditionnant l'entree en collectivite. Contestee par les mouvements anti-vaccination. La question des conflits d'interets avec les laboratoires est soulevee.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "1er juil. 2018",
    titre: "Passage a 80 km/h",
    description:
      "Reduction de la vitesse sur les routes secondaires. Dossier le plus personnel de son mandat, porte contre la volonte de Macron. Massivement impopulaire, contribue au ressentiment des Gilets jaunes. Lien potentiel avec Atos (radars automatiques) releve par la presse.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Juil. 2018",
    titre: "Affaire Benalla",
    description:
      "Deux motions de censure rejetees contre le gouvernement.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Nov. 2018",
    titre: "Gilets jaunes — debut du mouvement",
    description:
      "Ne de l'opposition aux taxes carburants et du ressentiment accumule. Bilan : 432 blesses graves, 25 eborgnes, 5 mains arrachees, 1 deces (Zineb Redouane). L'ONU et Amnesty International demandent l'interdiction des LBD40. Philippe encourage la reponse securitaire.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Dec. 2018",
    titre: "Moratoire sur les taxes carburants",
    description:
      "Annonce un moratoire de 6 mois — l'Elysee revient dessus le lendemain. Tensions Matignon/presidence exposees au grand jour.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "Janv.-mars 2019",
    titre: "Grand debat national",
    description:
      "Consultation inedite. A l'issue, Macron annonce baisse de l'IR et reindexation des petites retraites.",
    categorie: "biographie",
    section: "Matignon",
  },
  {
    annee: "Mai 2019",
    titre: "Loi PACTE adoptee",
    description: "Loi pour la croissance et la transformation des entreprises.",
    categorie: "biographie",
    section: "Matignon",
  },
  {
    annee: "Dec. 2019",
    titre: "Reforme des retraites — greve massive",
    description:
      "800 000 manifestants le 5 decembre. Systeme universel en remplacement de 42 regimes. Recours au 49-3 en fevrier 2020.",
    categorie: "controverse",
    section: "Matignon",
  },
  {
    annee: "13 mars 2020",
    titre: "« Le masque est inutile en population generale »",
    description:
      "Declaration sur TF1 alors que les stocks sont insuffisants. Volte-face debut avril. Maintien du 1er tour des municipales le 15 mars, 2 jours avant le confinement.",
    categorie: "controverse",
    section: "Covid",
  },
  {
    annee: "17 mars 2020",
    titre: "Confinement national — 55 jours",
    description:
      "L'un des plus stricts d'Europe. 168 000 deces du Covid entre 2020 et septembre 2023.",
    categorie: "controverse",
    section: "Covid",
  },
  {
    annee: "28 mars 2020",
    titre: "Decret Rivotril",
    description:
      "Autorise la dispensation de Rivotril (depresseur respiratoire) pour patients Covid en fin de vie. Accusations d'« euthanasie legalisee ». Le decret pallie une penurie de midazolam. Les ARS restreignent l'acces hospitalier des residents d'EHPAD.",
    categorie: "controverse",
    section: "Covid",
  },
  {
    annee: "3 juil. 2020",
    titre: "Demission de Matignon",
    description:
      "Reelu maire du Havre avec 58,83%. Remet la demission du gouvernement. Jean Castex lui succede. 3 ans et 49 jours a Matignon.",
    categorie: "biographie",
    section: "Matignon",
  },
  // VI. Apres Matignon
  {
    annee: "9 oct. 2021",
    titre: "Creation du parti Horizons",
    description:
      "Lance le parti au Havre. Centre-droit, aile droite de la majorite. Macron « goute peu » cette creation. Estrosi numero 2. 19 000 adherents en octobre 2022.",
    categorie: "biographie",
    section: "Horizons",
  },
  {
    annee: "2022",
    titre: "Legislatives — 30 deputes Horizons",
    description:
      "58 investitures au sein d'Ensemble. Groupe « Horizons et independants » preside par Laurent Marcangeli.",
    categorie: "biographie",
    section: "Horizons",
  },
  {
    annee: "Juin 2024",
    titre: "Dissolution — « decision funeste et absurde »",
    description:
      "Appelle a faire barrage a LFI et RN. Horizons obtient 6 sieges. Qualifie la dissolution de « funeste et absurde ».",
    categorie: "biographie",
    section: "Horizons",
  },
  // VII. Candidature 2027
  {
    annee: "3 sept. 2024",
    titre: "Candidature presidentielle declaree",
    description:
      "Interview au Point : « Je serai candidat. » Evoque 4 « perils » : democratique, budgetaire, immobilisme, ordre public.",
    categorie: "biographie",
    section: "Presidentielle 2027",
  },
  {
    annee: "Automne 2025",
    titre: "Rupture avec Macron",
    description:
      "Prend ouvertement ses distances. Appelle Macron a demissionner. « Ce president n'aime pas les premiers ministres qui prennent de l'espace. »",
    categorie: "biographie",
    section: "Presidentielle 2027",
  },
  {
    annee: "22 mars 2026",
    titre: "Reelu maire du Havre — 3e mandat",
    description:
      "1er tour 43,76%, 2nd tour 47,71% en triangulaire. Face a Lecoq (gauche, 41,2%) et Keller (UDR-RN, 11,1%). 3 sieges extreme droite au conseil municipal. Horizons revendique 465 maires encarte nationalement.",
    categorie: "biographie",
    section: "Presidentielle 2027",
  },
  // VIII. Affaires judiciaires
  {
    annee: "Juil. 2025",
    titre: "Non-lieu CJR — affaire Covid",
    description:
      "Non-lieu general pour Philippe, Buzyn et Veran. L'arret de 500 pages constitue paradoxalement un « requisitoire impitoyable » contre la gestion gouvernementale (Pr. Olivier Beaud).",
    categorie: "controverse",
    section: "Judiciaire",
  },
  {
    annee: "Avril 2024",
    titre: "Enquete PNF — gestion de la metropole du Havre",
    description:
      "Enquete preliminaire pour prise illegale d'interets, detournement de fonds publics, favoritisme et harcelement moral. Perquisitions a la mairie le 3 avril 2024. Philippe conteste fermement.",
    categorie: "controverse",
    section: "Judiciaire",
  },
  {
    annee: "19 mars 2026",
    titre: "Menaces de mort pendant la campagne",
    description:
      "Courrier anonyme avec menaces de mort et douille percutee recu a la mairie du Havre.",
    categorie: "biographie",
    section: "Presidentielle 2027",
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
    titre: "Gilets jaunes mutiles — la doctrine du maintien de l'ordre",
    resume:
      "432 blesses graves, 25 eborgnes, 5 mains arrachees, 1 deces. L'ONU et Amnesty International ont demande l'interdiction des LBD40.",
    contenu: `Le mouvement des Gilets jaunes eclate en novembre 2018. Le bilan humain est sans precedent dans l'histoire recente du maintien de l'ordre en France : 432 blesses graves recenses parmi plus de 2 500 blesses, dont 1 deces (Zineb Redouane, 80 ans, tuee par une grenade lacrymogene a Marseille), 5 mains arrachees, 25 personnes eborgnees, 236 blesses a la tete, 221 blesses par des tirs de LBD40.

L'usage massif des lanceurs de balles de defense (LBD40) et des grenades de desencerclement (GLI-F4) est au coeur des critiques. En 2018, l'utilisation des LBD a bondi de plus de 200% par rapport a l'annee precedente selon l'IGPN. L'ONU, le Conseil de l'Europe, Amnesty International et le Defenseur des droits Jacques Toubon ont demande l'interdiction de ces armes, proscrites ailleurs en Europe.

David Dufresne (Visionscarto) note que les policiers etaient « encourages par le gouvernement d'Edouard Philippe a employer la force ». L'IGPN a ete saisie de 313 enquetes judiciaires pour suspicions de violences policieres.`,
    date: "2018-11-17",
    gravite: "haute",
    themes: ["gilets-jaunes", "repression", "droits-humains", "maintien-ordre"],
    sources: [
      {
        titre: "Le Mur Jaune — bilan des blesses",
        url: "https://lemurjaune.fr",
        type: "presse",
      },
      {
        titre: "Amnesty International — rapport LBD",
        url: "https://amnesty.fr",
        type: "officiel",
      },
      {
        titre: "Defenseur des droits — rapport Toubon",
        url: "https://defenseurdesdroits.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "decret-rivotril",
    titre: "Decret Rivotril — euthanasie legalisee ?",
    resume:
      "Le decret du 28 mars 2020 autorise un depresseur respiratoire pour patients Covid en EHPAD, alors que l'acces hospitalier est restreint.",
    contenu: `Le decret n° 2020-360 du 28 mars 2020, signe par Edouard Philippe et Olivier Veran, autorise la dispensation du Rivotril (clonazepam) injectable en pharmacie pour les patients Covid « dont l'etat clinique le justifie ».

Le Rivotril est une benzodiazepine dont l'un des effets principaux est la depression respiratoire — precisement le symptome du Covid grave. Des accusations d'« euthanasie legalisee » se repandent.

La penurie de midazolam (medicament de reference pour les sedations, reserve aux reanimateurs) a provoque le recours au Rivotril comme produit de substitution. Parallelement, les ARS emettent des fiches restreignant l'acces hospitalier pour les residents d'EHPAD dans le cadre du Plan Blanc.

Des familles ont ete prevenues du deces de proches qu'elles avaient eus au telephone la veille, sans pouvoir les revoir ni les enterrer en leur presence.`,
    date: "2020-03-28",
    gravite: "haute",
    themes: ["covid", "sante", "ehpad", "rivotril"],
    sources: [
      {
        titre: "Decret n° 2020-360 du 28 mars 2020",
        url: "https://legifrance.gouv.fr/jorf/id/JORFTEXT000041762964",
        type: "officiel",
      },
      {
        titre: "SFGG — reponse sur le Rivotril",
        url: "https://sfgg.org",
        type: "officiel",
      },
    ],
  },
  {
    slug: "masques-mensonge",
    titre: "Covid — « Le masque est inutile en population generale »",
    resume:
      "Declaration du 13 mars 2020 sur TF1 alors que les stocks sont insuffisants. Maintien du 1er tour des municipales le 15 mars.",
    contenu: `Le 13 mars 2020, Edouard Philippe affirme sur TF1 que le port du masque est inutile « en population generale », avant de faire volte-face debut avril.

Le premier tour des elections municipales est maintenu le 15 mars, deux jours avant le confinement national de 55 jours — l'un des plus stricts d'Europe.

Le gouvernement a nie l'utilite des masques alors que les stocks etaient insuffisants. La commission d'enquete parlementaire revelera les contradictions entre les declarations publiques et la realite de la gestion des stocks.

168 000 personnes sont decedees du Covid-19 entre 2020 et septembre 2023.`,
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
        titre: "Sante publique France — bilan Covid",
        url: "https://santepubliquefrance.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "80-kmh",
    titre: "80 km/h — la mesure imposee contre tous",
    resume:
      "Portee contre la volonte de Macron, massivement impopulaire, a contribue au mouvement des Gilets jaunes. Lien potentiel avec Atos (radars automatiques).",
    contenu: `En janvier 2018, Philippe annonce la reduction de la vitesse de 90 a 80 km/h sur les routes secondaires. C'est le dossier le plus personnel de son mandat : il le porte contre la volonte d'Emmanuel Macron lui-meme.

La mesure est massivement impopulaire, particulierement dans la France periurbaine et rurale. Elle contribue au ressentiment qui nourrira le mouvement des Gilets jaunes quelques mois plus tard.

Le groupe Atos — dont Philippe deviendra administrateur en 2020 (remunere ~70 000€/an) et avec lequel il entretient des liens depuis 2006 — est en pointe sur le traitement des donnees des infractions routieres (radars automatiques). Boulevard Voltaire et Blast ont releve un potentiel conflit d'interets.`,
    date: "2018-07-01",
    gravite: "moyenne",
    themes: ["80km", "securite-routiere", "atos", "conflits-interets"],
    sources: [
      {
        titre: "Boulevard Voltaire — liens Atos",
        url: "https://bvoltaire.fr",
        type: "presse",
      },
      {
        titre: "Blast — enquete conflits d'interets",
        url: "https://blast-info.fr",
        type: "presse",
      },
    ],
  },
  {
    slug: "vaccins-obligatoires",
    titre: "11 vaccins obligatoires — « Dans la patrie de Pasteur »",
    resume:
      "8 vaccins supplementaires imposes sous peine d'exclusion de la collectivite. Conflits d'interets avec les laboratoires souleves.",
    contenu: `Edouard Philippe annonce en personne le 4 juillet 2017 : « L'an prochain, les vaccins pour la petite enfance qui sont unanimement recommandes par les autorites de sante deviendront obligatoires. Dans la patrie de Pasteur, ce n'est pas admissible » que des enfants meurent de la rougeole.

8 vaccins recommandes s'ajoutent aux 3 deja obligatoires. La vaccination conditionne l'entree en collectivite (creches, ecoles, centres de loisirs).

La mesure est contestee par les mouvements anti-vaccination et certains medecins qui estiment qu'« etendre l'obligation peut transformer des hesitants en opposants ». La question des conflits d'interets lies aux laboratoires est soulevee.`,
    date: "2018-01-01",
    gravite: "moyenne",
    themes: ["vaccins", "sante", "obligation", "libertes"],
    sources: [
      {
        titre: "Discours de politique generale — 4 juillet 2017",
        url: "https://gouvernement.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "cma-cgm-reseau",
    titre: "CMA CGM — les liens du reseau havrais",
    resume:
      "Les connexions entre le reseau d'Edouard Philippe et CMA CGM, geant du transport maritime base au Havre, suscitent des interrogations.",
    contenu: `Yann Le Goff, responsable securite regionale chez CMA CGM, figure dans la promotion 2011 des Young Leaders de la French-American Foundation aux cotes d'Edouard Philippe.

Le port du Havre, fief politique de Philippe (maire depuis 2010), est le premier point d'entree de cocaine en Europe.

CMA CGM est le premier armateur francais et l'un des plus grands groupes mondiaux de transport maritime. La convergence entre les fonctions de maire du Havre, les liens dans le reseau Young Leaders, et le role strategique du port dans le trafic de stupefiants merite un examen attentif.`,
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
    slug: "metropole-havre-enquete",
    titre: "Enquete PNF — gestion de la metropole du Havre",
    resume:
      "Enquete pour prise illegale d'interets, detournement de fonds publics, favoritisme et harcelement moral. Perquisitions en avril 2024.",
    contenu: `En avril 2024, Edouard Philippe est vise par une enquete preliminaire du parquet national financier pour prise illegale d'interets, detournement de fonds publics, favoritisme et harcelement moral.

L'enquete fait suite a une plainte d'une ancienne directrice generale adjointe de la metropole. Des perquisitions ont lieu a la mairie du Havre le 3 avril 2024.

En juin 2025, une plainte avec constitution de partie civile est deposee. Philippe conteste fermement toute irregularite.`,
    date: "2024-04-03",
    gravite: "haute",
    themes: ["le-havre", "justice", "favoritisme", "fonds-publics"],
    sources: [
      {
        titre: "Parquet national financier — enquete",
        url: "https://justice.gouv.fr",
        type: "officiel",
      },
    ],
  },
  {
    slug: "fcf-cma-cgm-nexus",
    titre: "Le nexus FCF — CMA CGM — Le Havre : un reseau d'influence sino-portuaire",
    resume:
      "Le directeur de cabinet de Philippe a Matignon (Ribadeau-Dumas, ENA Marc-Bloch) est membre de la France China Foundation. Le co-createur de la FCF (Lenain) est conseiller diplomatique de Philippe. CMA CGM, premier client du port du Havre, est au coeur de ce reseau. Le Havre est le 1er point d'entree de cocaine en Europe.",
    contenu: `Benoit Ribadeau-Dumas, directeur de cabinet d'Edouard Philippe a Matignon de 2017 a 2020, est issu de la meme promotion ENA Marc-Bloch (1995-1997) que Philippe. Il est egalement membre de la France China Foundation (promotion 2013).

Emmanuel Lenain, co-createur de la France China Foundation, est le conseiller diplomatique d'Edouard Philippe a Matignon. Il fait le lien entre les reseaux transatlantiques (French-American Foundation) et sino-francais (FCF) autour du Premier ministre.

CMA CGM, premier armateur francais et l'un des plus grands groupes mondiaux de transport maritime, est un acteur majeur des routes commerciales vers l'Asie. Ses navires representent une part significative du trafic du port du Havre — fief politique d'Edouard Philippe depuis 2010.

Yann Le Goff, responsable de la securite regionale chez CMA CGM, est dans la promotion Young Leaders 2011 de Philippe a la French-American Foundation.

Le port du Havre est le premier point d'entree de la cocaine en Europe selon Europol. Les saisies de drogue y ont explose : 18 tonnes de cocaine saisies en 2023 selon les douanes francaises. La question de la securite portuaire — domaine ou se croisent les interets de CMA CGM, la responsabilite du maire, et les reseaux d'influence franco-chinois — merite un examen approfondi.

Ce faisceau de connexions — meme promotion ENA, meme reseau Young Leaders, memes cercles franco-chinois, meme port strategique — dessine un systeme d'influence qui entoure Edouard Philippe depuis ses annees de formation jusqu'a son exercice du pouvoir.`,
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
        titre: "Douanes francaises — saisies 2023",
        url: "https://douane.gouv.fr",
        type: "officiel",
      },
    ],
  },
];

export type PersonneReseau = {
  nom: string;
  slug: string;
  role: string;
  description: string;
  typeLien: string;
  partiPolitique?: string;
};

export const reseau: PersonneReseau[] = [
  {
    nom: "Emmanuel Macron",
    slug: "emmanuel-macron",
    role: "President de la Republique",
    description:
      "Young Leader 2012 (promotion suivante de Philippe). L'a nomme Premier ministre malgre ses critiques anterieures. Tensions croissantes depuis la dissolution de 2024.",
    typeLien: "politique",
    partiPolitique: "LREM/Renaissance",
  },
  {
    nom: "Alain Juppe",
    slug: "alain-juppe",
    role: "Mentor politique — ancien Premier ministre",
    description:
      "Young Leader 1982 (promotion fondatrice). Lance Philippe en politique via l'UMP. Leur proximite marque toute sa carriere.",
    typeLien: "politique",
    partiPolitique: "UMP/LR",
  },
  {
    nom: "CMA CGM",
    slug: "cma-cgm",
    role: "1er armateur francais — transport maritime mondial",
    description:
      "Yann Le Goff (securite CMA CGM) est Young Leader 2011 avec Philippe. Le port du Havre, fief de Philippe, est le 1er point d'entree de cocaine en Europe.",
    typeLien: "financier",
  },
  {
    nom: "Yann Le Goff",
    slug: "yann-le-goff",
    role: "Responsable securite regionale CMA CGM",
    description:
      "Young Leader 2011 dans la meme promotion que Philippe. Charge de la securite chez CMA CGM, dont les navires transitent par le port du Havre.",
    typeLien: "professionnel",
  },
  {
    nom: "Atos",
    slug: "atos",
    role: "Groupe informatique — radars automatiques",
    description:
      "Philippe administrateur depuis 2020 (~70 000€/an). Atos traite les donnees des radars. Lien avec la mesure du 80 km/h portee par Philippe en 2018.",
    typeLien: "financier",
  },
  {
    nom: "Areva",
    slug: "areva",
    role: "Industrie nucleaire — lobbying",
    description:
      "Philippe directeur des affaires publiques de 2007 a 2010. Fonction de lobbying au coeur de la sphere decisionnelle.",
    typeLien: "professionnel",
  },
  {
    nom: "Debevoise & Plimpton",
    slug: "debevoise-plimpton",
    role: "Cabinet d'avocats anglo-saxon",
    description:
      "Philippe avocat de 2004 a 2007. Cabinet americain avec filiale francaise.",
    typeLien: "professionnel",
  },
  {
    nom: "Antoine Rufenacht",
    slug: "antoine-rufenacht",
    role: "Ancien maire du Havre — mentor local",
    description:
      "Lance Philippe en politique en 2001. Christine Poyer-Rufenacht (meme patronyme) est Young Leader 2011.",
    typeLien: "politique",
  },
  {
    nom: "French-American Foundation",
    slug: "french-american-foundation",
    role: "Reseau transatlantique — Young Leaders",
    description:
      "Programme de soft power americain depuis 1981. Philippe (2011), Macron (2012), Juppe (1982), Hollande (1996). Plus de 400 dirigeants passes par le programme.",
    typeLien: "mediatique",
  },
  {
    nom: "Horizons",
    slug: "horizons",
    role: "Parti politique — vehicule presidentiel",
    description:
      "Fonde le 9 oct. 2021 au Havre. Centre-droit. 19 000 adherents, 465 maires, 6 deputes. Estrosi numero 2.",
    typeLien: "politique",
    partiPolitique: "Horizons",
  },
  {
    nom: "Christian Estrosi",
    slug: "christian-estrosi",
    role: "Maire de Nice — numero 2 d'Horizons",
    description: "Figure-cle du parti, second de Philippe dans Horizons.",
    typeLien: "politique",
    partiPolitique: "Horizons",
  },
  {
    nom: "Gilles Boyer",
    slug: "gilles-boyer",
    role: "Bras droit — co-auteur — Juppeiste historique",
    description:
      "Bras droit de Philippe depuis la Juppeie. Co-auteur de deux fictions politiques (« L'heure de verite », « Dans l'ombre »). Conseiller strategique permanent, present a chaque etape cle : UMP, Matignon, Horizons. Fait le lien entre l'heritage Juppe et l'appareil Philippe.",
    typeLien: "professionnel",
  },
  {
    nom: "Christophe Castaner",
    slug: "christophe-castaner",
    role: "Ministre de l'Interieur (2018-2020)",
    description:
      "Nomme par Philippe en oct. 2018. A qualifie les Gilets jaunes de « factieux venus pour tuer ». Responsable de la doctrine de maintien de l'ordre contestee.",
    typeLien: "politique",
    partiPolitique: "LREM",
  },
  // --- Nouvelles entites issues de l'analyse Wayback Machine ---
  {
    nom: "Benoit Ribadeau-Dumas",
    slug: "benoit-ribadeau-dumas",
    role: "Directeur de cabinet de Matignon — ENA Marc-Bloch — FCF 2013",
    description:
      "Dircab de Philippe a Matignon (2017-2020). Issue de la meme promotion ENA Marc-Bloch (1995-1997). Membre de la France China Foundation (promotion 2013). A milite pour le maintien du 1er tour des municipales le 15 mars 2020, deux jours avant le confinement. Proximite avec CMA CGM via la FCF et les reseaux portuaires havrais.",
    typeLien: "politique",
  },
  {
    nom: "France China Foundation",
    slug: "france-china-foundation",
    role: "Reseau franco-chinois — influence et diplomatie economique",
    description:
      "Organisation fondee pour rapprocher les elites francaises et chinoises. Ribadeau-Dumas (dircab de Philippe) en est membre (promotion 2013). Emmanuel Lenain (conseiller diplomatique de Philippe a Matignon) en est le co-createur. Le reseau relie des decideurs politiques, des dirigeants de multinationales et des acteurs du transport maritime — dont CMA CGM, dont les routes commerciales vers l'Asie transitent massivement par Le Havre.",
    typeLien: "mediatique",
  },
  {
    nom: "Emmanuel Lenain",
    slug: "emmanuel-lenain",
    role: "Co-createur FCF — conseiller diplomatique Matignon",
    description:
      "Diplomate, co-fondateur de la France China Foundation. Conseiller diplomatique d'Edouard Philippe a Matignon. Fait le lien entre les reseaux transatlantiques (FAF) et sino-francais (FCF) autour du Premier ministre.",
    typeLien: "professionnel",
  },
  {
    nom: "Port du Havre (HAROPA)",
    slug: "port-du-havre",
    role: "1er port francais — point d'entree cocaine en Europe",
    description:
      "Premier port a conteneurs de France (HAROPA depuis 2021). Premier point d'entree de la cocaine en Europe selon Europol. Fief politique d'Edouard Philippe (maire depuis 2010). Les navires CMA CGM y representent une part majeure du trafic. Les saisies de drogue au Havre ont explose : 18 tonnes de cocaine en 2023.",
    typeLien: "financier",
  },
];

export const stats = {
  controverses: controverses.length,
  articles: timeline.length,
  connexions: reseau.length,
  sources: controverses.reduce((acc, c) => acc + c.sources.length, 0),
};
