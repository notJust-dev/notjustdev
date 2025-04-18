// TODO: temporary fix. It should be imported from notion client:

import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from 'notion-to-md';
import { processVideos } from '../utils/videos';
import { copyFileToS3 } from '../s3Client';
import { buildToC, shiftHeadings } from '../utils/tableOfContents';

const { NOTION_KEY } = process.env;
const MD_IMAGE_REGEX = /!\[(?<alt>[^\]]*)\]\((?<url>.*?)(?=\"|\))\)/g;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: { parseChildPages: false },
});

const downloadAndReplaceMDXImages = async (mdString: string) => {
  const matches = mdString.matchAll(MD_IMAGE_REGEX);

  for (const match of matches) {
    if (match.groups?.url) {
      const uri = await copyFileToS3(match.groups.url);
      mdString = mdString.replace(match.groups?.url, uri);
    }
  }
  return mdString;
};

// TODO: temporary fix. It should be imported from notion client:
// import { isFullPage } from '@notionhq/client';
// export const isFullPage = (
//   response:
//     | PageObjectResponse
//     | PartialPageObjectResponse
//     | DatabaseObjectResponse
//     | PartialDatabaseObjectResponse,
// ): response is PageObjectResponse => 'url' in response;

export const getStatusFilter = () => {
  // In production, show only Published posts
  const statuses = ['Published'];

  // On staging, show Published and Draft posts
  if (process.env.VERCEL_ENV === 'preview') {
    statuses.push('Draft');
  }

  // Locally, show Published, Draft and In progress posts
  if (process.env.NODE_ENV === 'development') {
    statuses.push('Draft');
    statuses.push('In progress');
  }

  return {
    or: statuses.map((status) => ({
      property: 'Status',
      status: {
        equals: status,
      },
    })),
  };
};

export const notionPageToMDX = async (
  page: PageObjectResponse,
): Promise<{ content: string; toc: ToCHeading[] }> => {
  let mdBlocks = await n2m.pageToMarkdown(page.id);

  mdBlocks = await Promise.all(mdBlocks.map(processVideos));
  if (!mdBlocks.length) {
    return {
      content: '',
      toc: [],
    };
  }

  let content = n2m
    .toMarkdownString(mdBlocks)
    .parent.replaceAll('“', '"')
    .replaceAll('”', '"');

  // TODO them based on blocks, similar to videos?
  // There is also custom transformers
  // https://github.com/souvikinator/notion-to-md/blob/master/README.md#custom-transformers
  content = await downloadAndReplaceMDXImages(content);
  // TODO maybe this should be a rehype plugin?
  content = shiftHeadings(content);
  const toc = buildToC(content);

  return { content, toc };
};
