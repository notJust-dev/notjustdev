// TODO: temporary fix. It should be imported from notion client:

import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

// TODO: temporary fix. It should be imported from notion client:
//import {  isFullPage } from '@notionhq/client';
export const isFullPage = (
  response:
    | PageObjectResponse
    | PartialPageObjectResponse
    | DatabaseObjectResponse
    | PartialDatabaseObjectResponse,
): response is PageObjectResponse => 'url' in response;

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
