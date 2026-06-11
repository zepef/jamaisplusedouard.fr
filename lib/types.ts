// Type d'une source citée (utilisé par les composants d'affichage).
export type Source = {
  url: string;
  titre?: string | null;
  auteur?: string | null;
  dateSource?: string | Date | null;
  type: string;
  archiveUrl?: string | null;
};
