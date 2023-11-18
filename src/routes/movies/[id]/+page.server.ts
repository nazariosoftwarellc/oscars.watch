import TMDBConnector from '$lib/tmdb-connector';
import type { ResolvedMovieDetails } from '$lib/types/resolved-data.js';

export async function load({ params }): Promise<ResolvedMovieDetails> {
  const movieId = Number(params.id);
  const details = await TMDBConnector.getMovieDetails(movieId);
  const credits = await TMDBConnector.getMovieCredits(movieId);
  return { details, credits };
}
