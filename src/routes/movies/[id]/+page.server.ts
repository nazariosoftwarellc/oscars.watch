import TMDBConnector from '$lib/tmdb-connector';
import DTDDConnector from '$lib/dtdd-connector';
import LocalConnector from '$lib/local-connector';
import type { ResolvedMovieDetails } from '$lib/types/resolved-data.js';

export async function load({ params }): Promise<ResolvedMovieDetails> {
  const movieId = Number(params.id);
  const details = await TMDBConnector.getMovieDetails(movieId);
  const credits = await TMDBConnector.getMovieCredits(movieId);
  const watchProviders = await TMDBConnector.getMovieWatchProviders(movieId);
  const reviewHtml = await LocalConnector.reviewQuotes(movieId);
  const dtddUrl = await DTDDConnector.getDTDDLinkForMovie(
    movieId,
    details.title
  );
  return { details, credits, watchProviders, reviewHtml, dtddUrl };
}
