import type {
  HomepageMovieList,
  HomepagePersonList as HomepagePeopleList
} from '$lib/types/homepage-list';

export const homepageMovieLists: HomepageMovieList[] = [
  { tmdbId: 8275755, internalLabel: 'best picture' }
];

export const homepagePeopleLists: HomepagePeopleList[] = [
  { name: 'Best Actress', ids: [1812] }
];
