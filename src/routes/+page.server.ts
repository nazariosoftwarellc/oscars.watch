import TMDBConnector from '$lib/tmdb-connector';
import type {
  HomepageMovieList,
  HomepagePersonList
} from '$lib/types/homepage-list';
import type {
  PeopleCategory,
  ResolvedOscarCategoryList
} from '$lib/types/resolved-data';
import type { TMDBList } from '$lib/types/tmdb-list';
import { removeYearFromListName } from '$lib/utils';
import { homepageLists } from '../details/lists';

export async function load(): Promise<ResolvedOscarCategoryList> {

  const tmdbMovieLists: TMDBList[] = [];
  const homepageMovieLists = homepageLists.filter(
    list => (list as HomepageMovieList).tmdbId !== undefined
  ) as HomepageMovieList[];
  for await (const movieList of homepageMovieLists) {
    tmdbMovieLists.push(await TMDBConnector.getList(movieList.tmdbId));
  }
  const movieCategories = tmdbMovieLists.map(list => {
    return {
      name: removeYearFromListName(list.name),
      movies: list.items
    };
  });

  const homepagePeopleLists = homepageLists.filter(
    list => (list as HomepagePersonList).ids !== undefined
  ) as HomepagePersonList[];
  const peopleCategories: PeopleCategory[] = [];
  for await (const peopleList of homepagePeopleLists) {
    const newCategory: PeopleCategory = {
      name: peopleList.name,
      people: []
    };
    for (const personId of peopleList.ids) {
      newCategory.people.push(await TMDBConnector.getPersonDetails(personId));
    }
    peopleCategories.push(newCategory);
  }

  return { movieCategories, peopleCategories };
}
