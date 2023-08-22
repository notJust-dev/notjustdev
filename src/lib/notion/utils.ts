// TODO: temporary fix. It should be imported from notion client:

import {
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

// TODO: temporary fix. It should be imported from notion client:
//import {  isFullPage } from '@notionhq/client';
export function isFullPage(
  response:
    | PageObjectResponse
    | PartialPageObjectResponse
    | DatabaseObjectResponse
    | PartialDatabaseObjectResponse,
): response is PageObjectResponse {
  return 'url' in response;
}
