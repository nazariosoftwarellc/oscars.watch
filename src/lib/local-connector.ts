import { readFile } from 'fs/promises';
import showdown from 'showdown';

const converter = new showdown.Converter();
class LocalConnector {
  async reviewQuotes(tmdbId: number): Promise<string> {
    const markdown = await readFile(`src/reviews/${tmdbId}.md`, 'utf-8');
    return converter.makeHtml(markdown);
  }
}

const singleton = new LocalConnector();
export default singleton;