import type { TMDBList } from './types/tmdb-list';
import type { TMDBMovieDetails } from './types/tmdb-movie-details';
import * as bpList from '../bp.json';
import * as eeaao from '../movie.json'

class TMDBConnector {
  // private readToken: string;
  constructor() {
    // this.readToken = process.env.VITE_TMDB_API_READ_TOKEN as string;
    // if (!this.readToken) {
    //   throw new Error('VITE_TMDB_API_READ_TOKEN is not defined');
    // }
  }

  async getList(listId: number): Promise<TMDBList>  {
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
}

const singleton = new TMDBConnector();
export default singleton;