// Données du blog — articles d'analyse et d'opinion
// Sera alimente manuellement ou par les agents OpenClaw

export type BlogPost = {
  slug: string;
  titre: string;
  resume: string;
  contenu: string;
  auteur: string;
  date: string;
  tags: string[];
  sources: { titre: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pourquoi-ce-site",
    titre: "Pourquoi ce site existe",
    resume:
      "jamaisplusedouard.fr est ne d'un constat : les médias mainstream ne font pas leur travail d'investigation sur Édouard Philippe. Ce site comble ce vide.",
    contenu: `La démocratie française traverse une crise de confiance sans précédent. Les citoyens ne croient plus en la capacite des médias à informer de manière indépendante. Et pour cause.

Quand BFM TV, premier média d'information en continu, appartient a CMA CGM — le premier armateur opérant dans le port du candidat qu'elle couvre —, le conflit d'intérêts est structurel. Quand le rédacteur en chef des Échos (David Barroux) est issu de la même promotion Young Leaders que le candidat qu'il couvre (Edouard Philippe, promotion 2011), l'indépendance éditoriale est une fiction. Quand la présidente de Radio France (Sibyle Veil) est camarade de promotion ENA du président qui a nomme ce candidat Premier ministre, le service public d'information est capture.

Ce site existe pour faire ce que les médias ne font pas : documenter, sourcer, relier les points.

Nous ne sommes pas neutres. Nous sommes un site d'opposition politique, et nous l'assumons. La Constitution française garantit ce droit. L'article 11 de la Déclaration des Droits de l'Homme protège la libre communication des pensées et des opinions. La loi du 29 juillet 1881 sur la liberté de la presse encadre notre travail.

Ce qui nous distingue : chaque fait est sourcé. Chaque lien est documenté. Chaque chaine de conflits d'intérêts est tracée maillon par maillon. Nous utilisons l'intelligence artificielle — des agents de veille automatisés 24/7 — pour surveiller ce qu'un citoyen seul ne pourrait pas couvrir.

Le hashtag #JamaisPlusEdouard n'est pas un slogan. C'est un programme : plus jamais un Premier ministre qui impose le 80 km/h puis rejoint le conseil d'administration de l'entreprise des radars. Plus jamais un chef de gouvernement dont le directeur de cabinet est membre d'un réseau d'influence chinois. Plus jamais un maire dont le port est le premier point d'entrée de cocaine en Europe pendant que son camarade Young Leader dirige la sécurité de l'armateur principal.

L'IA au service du Citoyen — c'est notre mission.`,
    auteur: "La rédaction",
    date: "2026-03-27",
    tags: ["éditorial", "mission", "liberté-presse"],
    sources: [
      {
        titre: "Article 11 DDHC — Liberté d'expression",
        url: "https://legifrance.gouv.fr",
      },
      {
        titre: "Loi du 29 juillet 1881 — Liberté de la presse",
        url: "https://legifrance.gouv.fr",
      },
    ],
  },
  {
    slug: "young-leaders-machine-a-pouvoir",
    titre: "Young Leaders : la machine a fabriquer le pouvoir français",
    resume:
      "Comment un programme de 20 personnes par an a produit deux présidents, plusieurs Premiers ministres, et contrôle les postes cles de l'État français.",
    contenu: `La French-American Foundation sélectionné chaque année dix Français et dix Americains pour son programme Young Leaders. Vingt personnes. Deux séminaires de cinq jours. Et un réseau a vie.

Les chiffres parlent d'eux-mêmes. Depuis 1981, le programme a produit : deux présidents de la République (Francois Hollande, promotion 1996 ; Emmanuel Macron, promotion 2012), au moins trois Premiers ministres (Alain Juppe, promotion 1982 ; Édouard Philippe, promotion 2011), le président de la Cour des comptes (Pierre Moscovici, promotion 1996), plusieurs commissaires européens, des dizaines de ministres.

Le cas Philippe-Macron est sans précédent : un président et son Premier ministre issus de promotions consécutives (2012 et 2011), dont le mentor commun (Juppe) appartient a la promotion fondatrice. La chaîne de transmission Juppe (1982) → Philippe (2011) → Macron (2012) couvre quarante ans de pouvoir.

Mais la promotion 2011 de Philippe révèle autre chose. On y trouve : le responsable sécurité de CMA CGM (Yann Le Goff), le rédacteur en chef des Echos (David Barroux, journal de Bernard Arnault), le directeur des affaires publiques d'Amazon France (Yohann Benard), le futur président d'Arianespace (Stephane Israel). Politique, medias, défense, tech, transport maritime : tous les piliers du pouvoir dans une seule cohorte de dix personnes.

Le contenu des séminaires n'est pas public. La FAF ne publie pas les ordres du jour. Cette opacité est constitutive du modèle : la valeur repose sur le réseau, pas sur le contenu formel.

La question démocratique est simple : est-il normal que les futurs dirigeants d'un pays soient sélectionnés par une fondation privée, financée par Airbus, J.P. Morgan et Sodexo, dont les séminaires se déroulent dans le secret ? Est-il normal que le contrôleur des comptes publics (Moscovici) et le Premier ministre (Philippe) soient issus du même programme de cooptation ?`,
    auteur: "La rédaction",
    date: "2026-03-27",
    tags: ["young-leaders", "faf", "élite", "cooptation", "analyse"],
    sources: [
      {
        titre: "French-American Foundation — site officiel",
        url: "https://frenchamerican.org",
      },
      {
        titre: "Liste des Young Leaders — Wikipedia",
        url: "https://fr.wikipedia.org",
      },
    ],
  },
];
