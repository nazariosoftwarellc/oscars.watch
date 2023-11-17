import type { TMDBList } from './types/tmdb-list';

class TMDBConnector {
  private readToken: string;
  constructor() {
    console.log(process.env)
    this.readToken = process.env.TMDB_API_READ_TOKEN as string;
    if (!this.readToken) {
      throw new Error('TMDB_API_READ_TOKEN is not defined');
    }
  }

  async getList(listId: number): Promise<TMDBList>  {
    const url = `https://api.themoviedb.org/3/list/${listId}`
    const headers = {
      Authorization: `Bearer ${this.readToken}`
    }
    const response = await fetch(url, { headers });
    return await response.json();
  }
}

const singleton = new TMDBConnector();
export default singleton;