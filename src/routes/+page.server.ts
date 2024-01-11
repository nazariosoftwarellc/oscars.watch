import TMDBConnector from '$lib/tmdb-connector';
import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';
import type { TMDBList } from '$lib/types/tmdb-list';
import { homepageMovieLists } from '../details/lists';

export async function load(): Promise<ResolvedOscarCategoryList> {
  let tmdbMovieLists: TMDBList[] = [];
  for await (const movieList of homepageMovieLists) {
    tmdbMovieLists.push(await TMDBConnector.getList(movieList.tmdbId));
  }
  return {
    categories: tmdbMovieLists.map(list => {
      return {
        name: list.name,
        movies: list.items
      };
    })
  };
}
