import { readFile } from 'fs/promises';
import showdown from 'showdown';

const converter = new showdown.Converter({
  openLinksInNewWindow: true
});
class LocalConnector {
  async reviewQuotes(tmdbId: number): Promise<string> {
    try {
      const markdown = await readFile(`src/details/movies/${tmdbId}.md`, 'utf-8');
      return converter.makeHtml(markdown);
    } catch {
      return '';
    }
  }
}

const singleton = new LocalConnector();
export default singleton;
