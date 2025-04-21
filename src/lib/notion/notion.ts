import {
  APIErrorCode,
  Client,
  isFullPage,
  isNotionClientError,
} from '@notionhq/client';
import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { getAuthorDetails } from '../authors';
import { richTextToPlain } from '../utils';
import { copyFileToS3 } from '../s3Client';
import { getStatusFilter, notionPageToMDX } from './utils';

const { NOTION_KEY, NOTION_DATABASE = '' } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

const parseNotionPageMeta = async (
  page: PageObjectResponse,
  includeAuthors = false,
): Promise<PostMeta> => {
  const {
    properties: {
      slug,
      Name,
      description,
      'Hide Image Header': hideImageHeader,
      'Hide Newsletter': hideNewsletter,
      Author,
      Type,
      tags,
      'Parent page': parentPage,
      'Parent slug': parentSlug,
      'Youtube ID': youtubeID,
      'Kit Form ID': kitFormId,
      Github,
      seo_title: seoTitle,
    },
  } = page;

  // validation
  if (slug.type !== 'rich_text') {
    throw new Error('Validation Error: slug is not a rich_text');
  }
  if (Name.type !== 'title') {
    throw new Error('Validation Error: Name is not a title');
  }
  if (seoTitle.type !== 'rich_text') {
    throw new Error('Validation Error: seo_title is not a rich_text');
  }
  if (description.type !== 'rich_text') {
    throw new Error('Validation Error: description is not a rich_text');
  }
  if (hideImageHeader.type !== 'checkbox') {
    throw new Error('Validation Error: hideImageHeader is not a checkbox');
  }
  if (hideNewsletter.type !== 'checkbox') {
    throw new Error('Validation Error: hideNewsletter is not a checkbox');
  }
  if (Author.type !== 'relation') {
    throw new Error('Validation Error: Author is not a relation');
  }
  if (Type.type !== 'select' || !Type.select) {
    throw new Error('Validation Error: Type is not a select');
  }
  if (tags.type !== 'multi_select') {
    throw new Error('Validation Error: Tags is not a multi-select');
  }
  if (parentPage.type !== 'relation') {
    throw new Error('Validation Error: Parent page is not a relation');
  }
  if (youtubeID.type !== 'rich_text') {
    throw new Error('Validation Error: youtubeID is not a rich_text');
  }
  if (kitFormId.type !== 'rich_text') {
    throw new Error('Validation Error: kitFormId is not a rich_text');
  }
  if (parentSlug.type !== 'rollup' || parentSlug.rollup.type !== 'array') {
    throw new Error('Validation Error: Parent slug is not a rollup');
  }
  if (Github.type !== 'url') {
    throw new Error('Validation Error: Github is not a url');
  }

  const post: PostMeta = {
    id: page.id,
    updatedOn: page.last_edited_time,
    slug: richTextToPlain(slug.rich_text),
    title: richTextToPlain(Name.title),
    seoTitle: richTextToPlain(seoTitle.rich_text),
    description: richTextToPlain(description.rich_text),
    hideImageHeader: hideImageHeader.checkbox,
    hideNewsletterForm: hideNewsletter.checkbox,
    authors: [],
    type: Type.select.name as PostType,
    tags: tags.multi_select,
    youtubeID: richTextToPlain(youtubeID.rich_text),
    githubUrl: Github.url,
    kitFormId: richTextToPlain(kitFormId.rich_text),
  };
  if (parentPage.relation.length > 0) {
    post.parentPageId = parentPage.relation[0]?.id;
  }
  if (parentSlug.rollup.array.length > 0) {
    post.parentSlug =
      parentSlug.rollup.array[0].type !== 'rich_text'
        ? 'parse_error'
        : richTextToPlain(parentSlug.rollup.array[0].rich_text);
  }

  if (includeAuthors) {
    post.authors = (
      await Promise.all(Author.relation.map(({ id }) => getAuthorDetails(id)))
    ).filter((a) => a !== null) as Author[];
  }

  if (page.cover?.type === 'file' && page.cover.file.url) {
    post.image = await copyFileToS3(page.cover.file.url);
  }
  return post;
};

interface GetAllPostsOption {
  type?: PostType;
  tag?: NotionMultiSelect;
  pageSize?: number;
  subPageFilter?: 'all' | 'main_pages' | 'sub_pages';
}

export const getAllPosts = async ({
  type,
  pageSize = 100,
  tag,
  subPageFilter = 'main_pages',
}: GetAllPostsOption): Promise<PostMeta[]> => {
  const filter: QueryDatabaseParameters['filter'] = {
    and: [getStatusFilter()],
  };
  if (type) {
    filter.and.push({
      property: 'Type',
      select: {
        equals: type,
      },
    });
  }
  if (tag) {
    filter.and.push({
      property: 'tags',
      multi_select: {
        contains: tag.name,
      },
    });
  }
  if (subPageFilter !== 'all') {
    filter.and.push({
      property: 'Parent page',
      relation:
        subPageFilter === 'main_pages'
          ? { is_empty: true }
          : { is_not_empty: true },
    });
  }

  const query: QueryDatabaseParameters = {
    database_id: NOTION_DATABASE,
    page_size: pageSize,
    filter,
  };

  try {
    const response = await notion.databases.query(query);

    return Promise.all(
      response.results
        .filter(isFullPage)
        .map((page) => parseNotionPageMeta(page)),
    );
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      if (error.code === APIErrorCode.RateLimited) {
        console.log('Rate limited... TODO: what todo?');
      }
    }
    throw error;
  }
};

export const getSubPostsFor = async (id: string) => {
  const query: QueryDatabaseParameters = {
    database_id: NOTION_DATABASE,
    page_size: 100,
    filter: {
      property: 'Parent page',
      relation: {
        contains: id,
      },
    },
  };

  const response = await notion.databases.query(query);

  return Promise.all(
    response.results
      .filter(isFullPage)
      .map((page) => parseNotionPageMeta(page)),
  );
};

export const getPostBySLug = async (
  slug: string,
  parentSlug?: string,
): Promise<Post | null> => {
  const filter: QueryDatabaseParameters['filter'] = {
    and: [
      {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    ],
  };
  if (parentSlug) {
    filter.and.push({
      property: 'Parent slug',
      rollup: {
        any: {
          rich_text: {
            contains: parentSlug,
          },
        },
      },
    });
  }

  const response = await notion.databases.query({
    database_id: NOTION_DATABASE,
    filter,
  });

  const page = response.results?.[0];
  if (!page || !isFullPage(page)) {
    console.error(`Page with slug "${slug}" NOT FOUND!`);
    return null;
  }

  return {
    ...(await parseNotionPageMeta(page, true)),
    ...(await notionPageToMDX(page)),
  };
};

export const getRecommendedPostsMeta = async (
  forPost: PostMeta,
  limit: number = 2,
): Promise<PostMeta[]> => {
  // TODO: fix and improve the performance
  console.log(forPost.id, limit);
  return [];
  // const all = (await getAllPosts({ type: forPost.type })).filter(
  //   (p) => p.slug !== forPost.slug,
  // );

  // const random2 = shuffle(all).slice(0, limit > 0 ? limit : 2);

  // return random2;
};
export const getAllPostTags = async (): Promise<NotionMultiSelect[]> => {
  const response = await notion.databases.retrieve({
    database_id: NOTION_DATABASE,
  });
  if (response.properties.tags.type !== 'multi_select') {
    throw new Error('Validation Error: Tags is not a multi-select');
  }
  return response.properties.tags.multi_select.options;
};

export const getPage = async (page_id: string) => {
  // WIP
  const response = notion.pages.retrieve({ page_id });
  console.log(response);
};
