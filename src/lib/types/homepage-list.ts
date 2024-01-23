export type HomepageList = HomepageMovieList | HomepagePersonList;

export type HomepageMovieList = {
  order: number;
  internalLabel: string;
  tmdbId: number;
};

export type HomepagePersonList = {
  order: number;
  name: string;
  ids: number[];
};
