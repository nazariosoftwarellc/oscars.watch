class TMDBConnector {
  private readToken: string;
  constructor() {
    this.readToken = process.env.TMDB_API_READ_TOKEN as string;
    if (!this.readToken) {
      throw new Error('TMDB_API_READ_TOKEN is not defined');
    }
  }
}

const singleton = new TMDBConnector();
export default singleton;