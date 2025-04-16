import { load } from 'cheerio';
import parseHtml from 'html-react-parser';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
const PageUI = dynamic(() => import('./PageUI'), { ssr: !!false });

type Props = {
  params: Promise<{ webflow_path: string[] }>;
};

const getWebflowUrl = (webflow_path: string[]) => {
  // Join all parts of the path into a single string
  const url = webflow_path.join('/');

  return `${process.env.WEBFLOW_URL}/${url}`;
};

const getWebflowHTML = async (url: string) => {
  // Fetch HTML
  const res = await fetch(url, {
    next: { tags: ['webflow_page'] },
    cache: 'force-cache',
  }).catch((err) => {
    console.error(err);
  });
  return res?.text();
};

export default async function Page(props: Props) {
  const params = await props.params;
  const fetchUrl = getWebflowUrl(params.webflow_path);
  const html = await getWebflowHTML(fetchUrl);
  // Parse HTML with Cheerio
  const $ = load(html || '');

  // remove meta
  $('title').remove();

  const head = $(`head`).html();
  const body = $(`body`).html();
  const bodyClass = $(`body`).attr('class');

  // Use a regular expression to match the dynamic part in the src attribute
  const scriptElement = $(
    'script[src^="https://cdn.prod.website-files.com/65cd13813bd3677534fa7c0b/js/webflow."]',
  );
  const webflowJsSrc = scriptElement.length
    ? scriptElement.attr('src')
    : 'https://cdn.prod.website-files.com/65cd13813bd3677534fa7c0b/js/webflow.90d665a58.js';

  return (
    <>
      {head && parseHtml(head)}

      <div className={bodyClass}>
        <PageUI body={body} />
      </div>
      {/* eslint-disable-next-line @next/next/no-sync-scripts*/}
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65cd13813bd3677534fa7c0b"
        type="text/javascript"
        crossOrigin="anonymous"
      ></script>
      <Script src={webflowJsSrc} type="text/javascript" />
    </>
  );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const meta: Metadata = {};

  const fetchUrl = getWebflowUrl(params.webflow_path);
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
