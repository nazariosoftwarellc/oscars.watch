import type { TMDBMovie } from './tmdb-movie';
import type { TMDBMovieCredits } from './tmdb-movie-credits';
import type { TMDBMovieDetails } from './tmdb-movie-details';

export type OscarCategory = {
  name: string;
  movies: TMDBMovie[];
}

export type ResolvedOscarCategoryList = {
  categories: OscarCategory[];
}

export type ResolvedMovieDetails = {
  details: TMDBMovieDetails;
  credits: TMDBMovieCredits;
}
