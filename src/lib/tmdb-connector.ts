import type { TMDBList } from './types/tmdb-list';
import * as bpList from '../bp.json';

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
}

const singleton = new TMDBConnector();
export default singleton;