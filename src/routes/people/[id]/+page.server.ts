import TMDBConnector from '$lib/tmdb-connector';
import LocalConnector from '$lib/local-connector';
import type { ResolvedPersonDetails } from '$lib/types/resolved-data.js';

export async function load({ params }): Promise<ResolvedPersonDetails> {
  const personTMDBId = Number(params.id);
  const details = await TMDBConnector.getPersonDetails(personTMDBId);
  const credits = await TMDBConnector.getPersonCredits(personTMDBId);
  const reviewHtml = await LocalConnector.personQuotes(personTMDBId);
  return { details, credits, reviewHtml };
}
