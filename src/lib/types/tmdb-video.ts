export type TMDBVideosResponse = {
  id: number;
  results: TMDBVideo[];
};

export type TMDBVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: TMDBVideoType;
  official: boolean;
  published_at: string;
  id: string;
};

export enum TMDBVideoType {
  BehindTheScenes = 'Behind the Scenes',
  Clip = 'Clip',
  Featurette = 'Featurette',
  Teaser = 'Teaser',
  Trailer = 'Trailer'
}
