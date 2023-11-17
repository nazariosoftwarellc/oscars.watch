import type { TMDBMovie } from './tmdb-movie';

export type OscarCategory = {
  name: string;
  movies: TMDBMovie[];
}

export type ResolvedOscarCategoryList = {
  categories: OscarCategory[];
}
