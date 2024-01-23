import type {
  HomepageMovieList,
  HomepagePersonList as HomepagePeopleList
} from '$lib/types/homepage-list';

export const homepageMovieLists: HomepageMovieList[] = [
  { tmdbId: 8288577, internalLabel: 'picture' },
  { tmdbId: 8288578, internalLabel: 'adapted screenplay' },
  { tmdbId: 8288579, internalLabel: 'original screenplay' },
  { tmdbId: 8288580, internalLabel: 'score' },
  { tmdbId: 8288581, internalLabel: 'international feature' },
  { tmdbId: 8288582, internalLabel: 'animated feature' },
  { tmdbId: 8288583, internalLabel: 'documentary feature' },
  { tmdbId: 8288584, internalLabel: 'costume' },
  { tmdbId: 8288585, internalLabel: 'makeup' },
  { tmdbId: 8288586, internalLabel: 'production design' },
  { tmdbId: 8288587, internalLabel: 'sound' },
  { tmdbId: 8288588, internalLabel: 'editing' },
  { tmdbId: 8288589, internalLabel: 'cinematography' },
  { tmdbId: 8288590, internalLabel: 'visual effects' },
  { tmdbId: 8288591, internalLabel: 'live short' },
  { tmdbId: 8288592, internalLabel: 'animated short' },
  { tmdbId: 8288593, internalLabel: 'documentary short' }
];

export const homepagePeopleLists: HomepagePeopleList[] = [
  { name: 'Best Actor', ids: [51329, 91671, 13242, 2037, 2954] },
  { name: 'Best Actress', ids: [516, 1183917, 7152, 36662, 54693] },
  { name: 'Best Supporting Actor', ids: [1225953, 380, 3223, 30614, 103] },
  {
    name: 'Best Supporting Actress',
    ids: [5081, 1075037, 59174, 1038, 1180099]
  },
  { name: 'Best Director', ids: [1175620, 1032, 525, 122423, 66728] }
];
