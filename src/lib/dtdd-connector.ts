import fetch from 'isomorphic-fetch';
import type { DTDDSearchResponse } from './types/dtdd-search-response';

class DTDDConnector {
  async getDTDDLinkForMovie(
    tmdbId: number,
    title: string
  ): Promise<string | undefined> {
    const searchUrl = `https://www.doesthedogdie.com/dddsearch?q=${encodeURIComponent(
      title
    )}`;
    const headers = {
      Accept: 'application/json',
      'X-API-KEY': process.env.VITE_DTDD_API_KEY as string
    };
    const rawSearchResponse = await fetch(searchUrl, { headers });
    const searchResponse: DTDDSearchResponse = await rawSearchResponse.json();
    const matchingMovie = searchResponse.items.find(
      item => item.tmdbId === tmdbId
    );
    if (!matchingMovie) return undefined;
    return `https://www.doesthedogdie.com/media/${matchingMovie.id}`;
  }
}

const singleton = new DTDDConnector();
export default singleton;
