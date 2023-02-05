import { Client, isFullPage } from '@notionhq/client';

import { downloadImage } from '../utils/imageDownloader';
import { richTextToPlain } from './utils';

const { NOTION_KEY } = process.env;

const notion = new Client({
  auth: NOTION_KEY,
});

export const getAuthorDetails = async (id: string): Promise<Author | null> => {
  const page = await notion.pages.retrieve({ page_id: id });
  if (!isFullPage(page)) {
    return null;
  }
  const author: Author = {
    id,
    name: richTextToPlain(page.properties.Name.title),
    bio: richTextToPlain(page.properties.Bio.rich_text),
    Facebook: page.properties.Facebook.url,
    LinkedIn: page.properties.LinkedIn.url,
    Github: page.properties.Github.url,
    Twitter: page.properties.Twitter.url,
    Youtube: page.properties.Youtube.url,
    Instagram: page.properties.Instagram.url,
    buyMeACoffee: page.properties.buyMeACoffee.url,
  };

  if (page.cover?.file?.url) {
    author.image = await downloadImage(
      page.cover.file.url,
      `/images/notion/authors/${id}.png`,
    );
  }
  return author;
};
