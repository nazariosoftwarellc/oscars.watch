import TMDBConnector from '$lib/tmdb-connector';
import type { ResolvedOscarCategoryList } from '$lib/types/resolved-data';
import type { TMDBList } from '$lib/types/tmdb-list';
import { homepageMovieLists, homepagePeopleLists } from '../details/lists';

export async function load(): Promise<ResolvedOscarCategoryList> {
  const tmdbMovieLists: TMDBList[] = [];
  for await (const movieList of homepageMovieLists) {
    tmdbMovieLists.push(await TMDBConnector.getList(movieList.tmdbId));
  }
  const movieCategories = tmdbMovieLists.map(list => {
    return {
      name: list.name,
      movies: list.items
    };
  });

  const tmdbPeople: TMDBPersonDetails[] = [];
  for await (const peopleList of homepagePeopleLists) {
    for (const personId of peopleList.ids) {
      tmdbPeople.push(await TMDBConnector.getPersonDetails(personId));
    }
  }

  return {
    categories: movieCategories
  };
}
