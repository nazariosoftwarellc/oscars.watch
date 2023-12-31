import type { TMDBMovie } from './tmdb-movie';
import type { TMDBMovieCredits } from './tmdb-movie-credits';
import type { TMDBMovieDetails } from './tmdb-movie-details';
import type { TMDBVideo } from './tmdb-video';
import type { TMDBWatchProvidersResponse } from './tmdb-watch-provider';

export type OscarCategory = {
  name: string;
  movies: TMDBMovie[];
};

export type ResolvedOscarCategoryList = {
  categories: OscarCategory[];
};

export type ResolvedMovieDetails = {
  details: TMDBMovieDetails;
  credits: TMDBMovieCredits;
  watchProviders: TMDBWatchProvidersResponse;
  reviewHtml: string;
  videos: TMDBVideo[];
};

export type ResolvedPersonDetails = {
  details: TMDBPersonDetails;
  credits: TMDBPersonCreditsResponse;
  reviewHtml: string;
};
