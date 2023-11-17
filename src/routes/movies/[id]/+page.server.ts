import TMDBConnector from '$lib/tmdb-connector';
import type { ResolvedMovieDetails } from '$lib/types/resolved-data.js';

export async function load({ params }): Promise<ResolvedMovieDetails> {
  const movieId = Number(params.id);
  const movieDetails = await TMDBConnector.getMovieDetails(movieId);
  return { movieDetails };
}
