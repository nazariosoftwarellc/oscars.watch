import { readFile } from 'fs/promises';
import path from 'path';
import showdown from 'showdown';

const converter = new showdown.Converter({
  openLinksInNewWindow: true,
  splitAdjacentBlockquotes: true
});
class LocalConnector {
  async reviewQuotes(tmdbId: number): Promise<string> {
    try {
      const markdown = await readFile(
        path.join(process.cwd(), 'src', 'details', 'movies', `${tmdbId}.md`),
        'utf-8'
      );
      return converter.makeHtml(markdown);
    } catch (e) {
      return '';
    }
  }

  async personQuotes(tmdbId: number): Promise<string> {
    try {
      const markdown = await readFile(
        `src/details/people/${tmdbId}.md`,
        'utf-8'
      );
      return converter.makeHtml(markdown);
    } catch {
      return '';
    }
  }
}

const singleton = new LocalConnector();
export default singleton;
