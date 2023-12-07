import type { TMDBList } from './types/tmdb-list';
import type { TMDBMovieDetails } from './types/tmdb-movie-details';
import * as bpList from '../mock-data/bp.json';
import * as eeaao from '../mock-data/movie.json';
import * as crew from '../mock-data/crew.json';
import * as wp from '../mock-data/watch.json';
import type { TMDBMovieCredits } from './types/tmdb-movie-credits';
import type { TMDBWatchProvidersResponse } from './types/tmdb-watch-provider';

class TMDBConnector {
  // private readToken: string;
  constructor() {
    // this.readToken = process.env.VITE_TMDB_API_READ_TOKEN as string;
    // if (!this.readToken) {
    //   throw new Error('VITE_TMDB_API_READ_TOKEN is not defined');
    // }
  }

  async getList(listId: number): Promise<TMDBList> {
    // const url = `https://api.themoviedb.org/3/list/${listId}`
    // const headers = {
    //   Authorization: `Bearer ${this.readToken}`
    // }
    // const response = await fetch(url, { headers });
    // return await response.json();
    return bpList as any;
  }

  async getMovieDetails(movieId: number): Promise<TMDBMovieDetails> {
    // const url = `https://api.themoviedb.org/3/movie/${movieId}`
    // const headers = {
    //   Authorization: `Bearer ${this.readToken}`
    // }
    // const response = await fetch(url, { headers });
    // return await response.json();
    return JSON.parse(JSON.stringify(eeaao));
  }

  async getMovieCredits(movieId: number): Promise<TMDBMovieCredits> {
    return JSON.parse(JSON.stringify(crew));
  }

  async getMovieWatchProviders(
    movieId: number
  ): Promise<TMDBWatchProvidersResponse> {
    return JSON.parse(JSON.stringify(wp));
  }
}

const singleton = new TMDBConnector();
export default singleton;
