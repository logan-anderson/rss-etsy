import Parser from 'rss-parser';

const rssParser = new Parser();

export type Item = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
};
export type EtsyRSS = {
  items: Item[];
  feedUrl: string;
  title: string;
  description: string;
  link: string;
  language: string;
};
export const parseEtsyRSS = async (url: string): Promise<EtsyRSS> => {
  const content = await rssParser.parseURL(
    `https://www.etsy.com/ca/shop/${url}/rss`
  );
  return content as EtsyRSS;
};
