import TMDBConnector from '$lib/tmdb-connector';
import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';

export async function load(): Promise<ResolvedOscarCategoryList> {
  const bestPictureListId = 8275755;
  const bestPictureList = await TMDBConnector.getList(bestPictureListId);
  return {
    categories: [
      {
        name: 'Best Picture',
        movies: bestPictureList.items
      }
    ]
  }
}