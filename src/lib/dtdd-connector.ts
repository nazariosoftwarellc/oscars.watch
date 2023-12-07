import fetch from 'isomorphic-fetch';
import type { DTDDMediaItemStats, DTDDTopic } from './types/dtdd-media-item-stats';
import type { DTDDSearchResponse } from './types/dtdd-search-response';

class DTDDConnector {
  async getTopicsForMovie(tmdbId: number, title: string): Promise<DTDDTopic[] | undefined> {
    const searchUrl = `https://www.doesthedogdie.com/dddsearch?q=${encodeURIComponent(title)}`
    const headers = {
      'Accept': 'application/json',
      'X-API-KEY': process.env.VITE_DTDD_API_KEY as string
    };
    const rawSearchResponse = await fetch(searchUrl, {headers});
    const searchResponse: DTDDSearchResponse = await rawSearchResponse.json();
    const matchingMovie = searchResponse.items.find(item => item.tmdbId === tmdbId);
    if (!matchingMovie) return undefined;

    const mediaItemUrl = `https://www.doesthedogdie.com/media/${matchingMovie.id}`;
    const rawMediaItemResponse = await fetch(mediaItemUrl, {headers});
    const mediaItemStats: DTDDMediaItemStats = await rawMediaItemResponse.json();
    return mediaItemStats.topicItemStats.map(topicItemStat => topicItemStat.topic);
  }
}

const singleton = new DTDDConnector();
export default singleton;