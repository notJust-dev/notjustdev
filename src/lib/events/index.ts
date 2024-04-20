import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { getStatusFilter, isFullPage, notionPageToMDX } from '../notion/utils';
import { richTextToPlain } from '../utils';
import { copyFileToS3 } from '../s3Client';
import { getAuthorDetails } from '../authors';
const { NOTION_KEY, NOTION_EVENTS_DATABASE = '' } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

interface GetAllEventsOption {
  pageSize?: number;
  filter?: {
    isPro?: boolean;
    beforeDate?: Date;
    afterDate?: Date;
  };
  sorts?: QueryDatabaseParameters['sorts'];
}

const parseEventPageMeta = async (
  page: PageObjectResponse,
  includeAuthors = false,
): Promise<EventMeta> => {
  const {
    properties: { slug, Name, pro, date, description, Author, cta, ctaUrl },
  } = page;

  // validation
  if (slug.type !== 'rich_text') {
    throw new Error('Validation Error: slug is not a rich_text');
  }
  if (Name.type !== 'title') {
    throw new Error('Validation Error: Name is not a title');
  }
  if (description.type !== 'rich_text') {
    throw new Error('Validation Error: description is not a rich_text');
  }
  if (pro.type !== 'checkbox') {
    throw new Error('Validation Error: Pro is not a checkbox');
  }
  if (date.type !== 'date' || !date.date?.start) {
    throw new Error('Validation Error: Date is not a date');
  }
  if (Author.type !== 'relation') {
    throw new Error('Validation Error: Author is not a relation');
  }

  if (cta.type !== 'rich_text') {
    throw new Error('Validation Error: cta is not a rich_text');
  }

  if (ctaUrl.type !== 'url') {
    throw new Error('Validation Error: ctaUrl is not a url');
  }

  const event: EventMeta = {
    id: page.id,
    updatedOn: page.last_edited_time,
    slug: richTextToPlain(slug.rich_text),
    title: richTextToPlain(Name.title),
    isPro: pro.checkbox,
    date: date.date.start,
    description: richTextToPlain(description.rich_text),
    authors: [],
    cta: richTextToPlain(cta.rich_text),
  };
  if (ctaUrl.url) {
    event.ctaUrl = ctaUrl.url;
  }

  if (includeAuthors) {
    event.authors = (
      await Promise.all(Author.relation.map(({ id }) => getAuthorDetails(id)))
    ).filter((a) => a !== null) as Author[];
  }

  if (page.cover?.type === 'file' && page.cover.file.url) {
    event.image = await copyFileToS3(page.cover.file.url);
  }
  return event;
};

export const getAllEvents = async ({
  pageSize = 100,
  filter,
  sorts = [],
}: GetAllEventsOption): Promise<EventMeta[]> => {
  const notionFilter: any = { and: [getStatusFilter()] };
  if (filter?.isPro) {
    notionFilter.and.push({
      property: 'pro',
      checkbox: {
        equals: filter.isPro,
      },
    });
  }

  if (filter?.afterDate) {
    notionFilter.and.push({
      property: 'date',
      date: {
        on_or_after: filter.afterDate.toISOString(),
      },
    });
  }

  if (filter?.beforeDate) {
    notionFilter.and.push({
      property: 'date',
      date: {
        before: filter.beforeDate.toISOString(),
      },
    });
  }

  const query: QueryDatabaseParameters = {
    database_id: NOTION_EVENTS_DATABASE,
    page_size: pageSize,
    filter: notionFilter,
    sorts,
  };

  const response = await notion.databases.query(query);

  return Promise.all(
    response.results.filter(isFullPage).map((page) => parseEventPageMeta(page)),
  );
};

export const getUpcomingEvents = async ({
  pageSize = 100,
  filter = {},
}: GetAllEventsOption): Promise<EventMeta[]> => {
  filter.afterDate = new Date();
  return getAllEvents({
    pageSize,
    filter,
    sorts: [
      {
        property: 'date',
        direction: 'ascending',
      },
    ],
  });
};

export const getPastEvents = async ({
  pageSize = 100,
  filter = {},
}: GetAllEventsOption): Promise<EventMeta[]> => {
  filter.beforeDate = new Date();
  return getAllEvents({
    pageSize,
    filter,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });
};

export const getEventBySLug = async (
  slug: string,
): Promise<EventWithContent | null> => {
  const filter: any = {
    and: [
      {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    ],
  };

  const response = await notion.databases.query({
    database_id: NOTION_EVENTS_DATABASE,
    filter,
  });

  const page = response.results?.[0];
  if (!page || !isFullPage(page)) {
    console.error(`Page with slug "${slug}" NOT FOUND!`);
    return null;
  }

  return {
    ...(await parseEventPageMeta(page, true)),
    ...(await notionPageToMDX(page)),
  };
};
