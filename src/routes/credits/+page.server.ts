import type { ResolvedSiteCredits } from '$lib/types/resolved-data';
import LocalConnector from '$lib/local-connector';

export async function load(): Promise<ResolvedSiteCredits> {
  const creditHtml = await LocalConnector.getSiteCredits();
  return { creditHtml };
}
