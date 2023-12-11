import type { TMDBList } from './types/tmdb-list';
import type { TMDBMovieDetails } from './types/tmdb-movie-details';
import * as wp from '../mock-data/watch.json';
import type { TMDBMovieCredits } from './types/tmdb-movie-credits';
import type { TMDBWatchProvidersResponse } from './types/tmdb-watch-provider';

class TMDBConnector {
  private readToken: string;
  constructor() {
    this.readToken = process.env.VITE_TMDB_API_READ_TOKEN as string;
    if (!this.readToken) {
      throw new Error('VITE_TMDB_API_READ_TOKEN is not defined');
    }
  }

  async getList(tmdbListId: number): Promise<TMDBList> {
    const url = `https://api.themoviedb.org/3/list/${tmdbListId}`;
    return this.getData(url);
  }

  async getMovieDetails(tmdbMovieId: number): Promise<TMDBMovieDetails> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}`;
    return this.getData(url);
  }

  async getMovieCredits(tmdbMovieId: number): Promise<TMDBMovieCredits> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}/credits`;
    return this.getData(url);
  }

  async getMovieWatchProviders(
    tmdbMovieId: number
  ): Promise<TMDBWatchProvidersResponse> {
    const url = `https://api.themoviedb.org/3/movie/${tmdbMovieId}/watch/providers`;
    return this.getData(url);
  }

  private async getData(url: string): Promise<any> {
    const headers = {
      Authorization: `Bearer ${this.readToken}`
    };
    const response = await fetch(url, { headers });
    return await response.json();
  }
}

const singleton = new TMDBConnector();
export default singleton;
