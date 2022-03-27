import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { textSlugfy } from '../helpers/string.helpers';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer({ headerIds: true });

  renderer.heading = (text: string, level: number): string => {
    const id = textSlugfy(text);
    return (
      '<h' +
      level +
      ' id="' +
      id +
      '" class="heading"> ' +
      text +
      ' </h' +
      level +
      '>'
    );
  };

  return {
    renderer: renderer
  };
}
