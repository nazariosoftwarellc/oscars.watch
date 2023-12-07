export type DTDDSearchResponse = {
  items: DTDDSearchResult[];
};

export type DTDDSearchResult = {
  id: number;
  name: string;
  cleanName: string;
  genre: null | string;
  releaseYear: string;
  legacyId: number;
  legacyUserId: number;
  umId: null;
  legacyItemType: string;
  newsletterDate: null;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  ItemTypeId: number;
  tmdbId: number | null;
  imdbId: null;
  backgroundImage: null | string;
  posterImage: null | string;
  tmdbResult: null | string;
  overview: null | string;
  itemType: {
    id: number;
    name: string;
  };
  itemTypeId: number;
  art?: null;
};
