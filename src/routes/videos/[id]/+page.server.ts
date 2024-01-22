import TMDBConnector from '$lib/tmdb-connector';
import LocalConnector from '$lib/local-connector';
import type { ResolvedVideoDetails } from '$lib/types/resolved-data.js';
import type { TMDBMovieDetails } from '$lib/types/tmdb-movie-details.js';

export async function load({ params }): Promise<ResolvedVideoDetails> {
  const youtubeVideoId = params.id;
  const tmdbMovieId = await LocalConnector.tmdbMovieId(youtubeVideoId);
  let movieDetails: TMDBMovieDetails | undefined;
  if (tmdbMovieId) {
    movieDetails = await TMDBConnector.getMovieDetails(tmdbMovieId);
  }
  return { youtubeVideoId, movieDetails };
}
