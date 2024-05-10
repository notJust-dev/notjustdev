import { load } from 'cheerio';

import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const PageUI = dynamic(() => import('./PageUI'), { ssr: false });

type Props = {
  params: { webflow_path: string[] };
};

const getWebflowUrl = (params: Props['params']) => {
  // Use path to determine Webflow path
  let url = params.webflow_path[0] || '';
  // url = url.join(`/`);
  if (url.charAt(0) !== `/`) {
    url = `/${url}`;
  }
  return process.env.WEBFLOW_URL + url;
};

const getWebflowHTML = async (url: string) => {
  // Fetch HTML
  const res = await fetch(url, { next: { tags: ['webflow_page'] } }).catch(
    (err) => {
      console.error(err);
    },
  );
  return res?.text();
};

export default async function Page({ params }: Props) {
  const fetchUrl = getWebflowUrl(params);
  const html = await getWebflowHTML(fetchUrl);
  // Parse HTML with Cheerio
  const $ = load(html || '');

  // remove meta
  $('title').remove();

  return <PageUI head={$(`body`).html()} body={$(`head`).html()} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta: Metadata = {};

  const fetchUrl = getWebflowUrl(params);
  const html = await getWebflowHTML(fetchUrl);

  const $ = load(html || '');
  const title = $('title').text();
  if (title) {
    meta.title = title;
  }

  // TODO: add dynamic descirption.
  // Now it will work, because it will be written as head content
  // In future, if we define a default descirpiton in app/layout.tsx, it will be duplicated

  return meta;
}
