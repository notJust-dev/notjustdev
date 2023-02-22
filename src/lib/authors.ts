import { Client, isFullPage } from '@notionhq/client';

import { downloadImage } from './utils/imageDownloader';
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

  const {
    properties: {
      Name,
      Bio,
      Facebook,
      LinkedIn,
      Github,
      Twitter,
      Youtube,
      Instagram,
      buyMeACoffee,
    },
  } = page;

  // Validation
  if (Name.type !== 'title') {
    throw new Error('Validation Error: Name is not a title');
  }
  if (Bio.type !== 'rich_text') {
    throw new Error('Validation Error: Bio is not a rich_text');
  }
  if (
    Facebook.type !== 'url' ||
    LinkedIn.type !== 'url' ||
    Github.type !== 'url' ||
    Twitter.type !== 'url' ||
    Youtube.type !== 'url' ||
    Instagram.type !== 'url' ||
    buyMeACoffee.type !== 'url'
  ) {
    throw new Error('Validation Error: Some social is not a url');
  }

  const author: Author = {
    id,
    name: richTextToPlain(Name.title),
    bio: richTextToPlain(Bio.rich_text),
    Facebook: Facebook.url,
    LinkedIn: LinkedIn.url,
    Github: Github.url,
    Twitter: Twitter.url,
    Youtube: Youtube.url,
    Instagram: Instagram.url,
    buyMeACoffee: buyMeACoffee.url,
  };

  if (page.cover?.type === 'file' && page.cover.file.url) {
    author.image = await downloadImage(
      page.cover.file.url,
      `/images/notion/authors/${id}.png`,
    );
  }
  return author;
};
