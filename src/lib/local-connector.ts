import { readFile } from 'fs/promises';
import showdown from 'showdown';
import { videoMovieMap } from '../details/videos';

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  splitAdjacentBlockquotes: true
});
class LocalConnector {
  async reviewQuotes(tmdbId: number): Promise<string> {
    try {
      const files = import.meta.glob('../details/movies/*.md', {
        as: 'raw'
      });
      const markdown = await files[`../details/movies/${tmdbId}.md`]();
      return converter.makeHtml(markdown);
    } catch (e) {
      return '';
    }
  }

  async personQuotes(tmdbId: number): Promise<string> {
    try {
      const files = import.meta.glob('../details/people/*.md', { as: 'raw' });
      const markdown = await files[`../details/people/${tmdbId}.md`]();
      return converter.makeHtml(markdown);
    } catch {
      return '';
    }
  }

  async tmdbMovieId(youtubeVideoId: string): Promise<number | undefined> {
    try {
      return videoMovieMap[youtubeVideoId];
    } catch {
      return undefined
    }
  }
}

const singleton = new LocalConnector();
export default singleton;
