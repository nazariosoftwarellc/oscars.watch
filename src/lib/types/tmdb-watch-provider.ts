export type TMDBWatchProvidersResponse = {
  id: number;
  results: Record<string, TMDBLocaleWatchProviders>;
};

export type TMDBLocaleWatchProviders = {
  link: string;
  rent?: TMDBWatchProvider[];
  buy?: TMDBWatchProvider[];
  flatrate?: TMDBWatchProvider[];
  free?: TMDBWatchProvider[];
};

export type TMDBWatchProvider = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
};
