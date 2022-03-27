import { REGEX } from './regex.helper';

export const pagesToLines = (markdown: string): string[] => {
  return markdown.split('\r\n');
};

export const textSlugfy = (text: string): string => {
  return text.toLowerCase().replace(REGEX.SLUGFY_WORDS, '-');
};
