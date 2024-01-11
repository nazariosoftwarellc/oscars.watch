export type HomepageList = HomepageMovieList | HomepagePersonList;

export type HomepageMovieList = {
  internalLabel: string;
  tmdbId: number;
};

export type HomepagePersonList = {
  name: string;
  ids: number[];
};
