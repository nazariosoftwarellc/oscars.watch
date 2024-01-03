import TMDBConnector from '$lib/tmdb-connector';
import LocalConnector from '$lib/local-connector';
import type { ResolvedMovieDetails } from '$lib/types/resolved-data.js';

export async function load({ params }): Promise<ResolvedMovieDetails> {
  const movieId = Number(params.id);
  const details = await TMDBConnector.getMovieDetails(movieId);
  const credits = await TMDBConnector.getMovieCredits(movieId);
  const watchProviders = await TMDBConnector.getMovieWatchProviders(movieId);
  const videos = await TMDBConnector.getMovieVideos(movieId);
  const reviewHtml = await LocalConnector.reviewQuotes(movieId);
  return { details, credits, watchProviders, reviewHtml, videos };
}
