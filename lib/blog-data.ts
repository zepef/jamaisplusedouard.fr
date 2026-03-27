// Donnees du blog — articles d'analyse et d'opinion
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
      "jamaisplusedouard.fr est ne d'un constat : les medias mainstream ne font pas leur travail d'investigation sur Edouard Philippe. Ce site comble ce vide.",
    contenu: `La democratie francaise traverse une crise de confiance sans precedent. Les citoyens ne croient plus en la capacite des medias a informer de maniere independante. Et pour cause.

Quand BFM TV, premier media d'information en continu, appartient a CMA CGM — le premier armateur operant dans le port du candidat qu'elle couvre —, le conflit d'interets est structurel. Quand le redacteur en chef des Echos (David Barroux) est issu de la meme promotion Young Leaders que le candidat qu'il couvre (Edouard Philippe, promotion 2011), l'independance editoriale est une fiction. Quand la presidente de Radio France (Sibyle Veil) est camarade de promotion ENA du president qui a nomme ce candidat Premier ministre, le service public d'information est capture.

Ce site existe pour faire ce que les medias ne font pas : documenter, sourcer, relier les points.

Nous ne sommes pas neutres. Nous sommes un site d'opposition politique, et nous l'assumons. La Constitution francaise garantit ce droit. L'article 11 de la Declaration des Droits de l'Homme protege la libre communication des pensees et des opinions. La loi du 29 juillet 1881 sur la liberte de la presse encadre notre travail.

Ce qui nous distingue : chaque fait est source. Chaque lien est documente. Chaque chaine de conflits d'interets est tracee maillon par maillon. Nous utilisons l'intelligence artificielle — des agents de veille automatises 24/7 — pour surveiller ce qu'un citoyen seul ne pourrait pas couvrir.

Le hashtag #JamaisPlusEdouard n'est pas un slogan. C'est un programme : plus jamais un Premier ministre qui impose le 80 km/h puis rejoint le conseil d'administration de l'entreprise des radars. Plus jamais un chef de gouvernement dont le directeur de cabinet est membre d'un reseau d'influence chinois. Plus jamais un maire dont le port est le premier point d'entree de cocaine en Europe pendant que son camarade Young Leader dirige la securite de l'armateur principal.

L'IA au service du Citoyen — c'est notre mission.`,
    auteur: "La redaction",
    date: "2026-03-27",
    tags: ["editorial", "mission", "liberte-presse"],
    sources: [
      {
        titre: "Article 11 DDHC — Liberte d'expression",
        url: "https://legifrance.gouv.fr",
      },
      {
        titre: "Loi du 29 juillet 1881 — Liberte de la presse",
        url: "https://legifrance.gouv.fr",
      },
    ],
  },
  {
    slug: "young-leaders-machine-a-pouvoir",
    titre: "Young Leaders : la machine a fabriquer le pouvoir francais",
    resume:
      "Comment un programme de 20 personnes par an a produit deux presidents, plusieurs Premiers ministres, et controle les postes cles de l'Etat francais.",
    contenu: `La French-American Foundation selectionne chaque annee dix Francais et dix Americains pour son programme Young Leaders. Vingt personnes. Deux seminaires de cinq jours. Et un reseau a vie.

Les chiffres parlent d'eux-memes. Depuis 1981, le programme a produit : deux presidents de la Republique (Francois Hollande, promotion 1996 ; Emmanuel Macron, promotion 2012), au moins trois Premiers ministres (Alain Juppe, promotion 1982 ; Edouard Philippe, promotion 2011), le president de la Cour des comptes (Pierre Moscovici, promotion 1996), plusieurs commissaires europeens, des dizaines de ministres.

Le cas Philippe-Macron est sans precedent : un president et son Premier ministre issus de promotions consecutives (2012 et 2011), dont le mentor commun (Juppe) appartient a la promotion fondatrice. La chaine de transmission Juppe (1982) → Philippe (2011) → Macron (2012) couvre quarante ans de pouvoir.

Mais la promotion 2011 de Philippe revele autre chose. On y trouve : le responsable securite de CMA CGM (Yann Le Goff), le redacteur en chef des Echos (David Barroux, journal de Bernard Arnault), le directeur des affaires publiques d'Amazon France (Yohann Benard), le futur president d'Arianespace (Stephane Israel). Politique, medias, defense, tech, transport maritime : tous les piliers du pouvoir dans une seule cohorte de dix personnes.

Le contenu des seminaires n'est pas public. La FAF ne publie pas les ordres du jour. Cette opacite est constitutive du modele : la valeur repose sur le reseau, pas sur le contenu formel.

La question democratique est simple : est-il normal que les futurs dirigeants d'un pays soient selectionnes par une fondation privee, financee par Airbus, J.P. Morgan et Sodexo, dont les seminaires se deroulent dans le secret ? Est-il normal que le controleur des comptes publics (Moscovici) et le Premier ministre (Philippe) soient issus du meme programme de cooptation ?`,
    auteur: "La redaction",
    date: "2026-03-27",
    tags: ["young-leaders", "faf", "elite", "cooptation", "analyse"],
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
