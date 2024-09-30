import { load } from 'cheerio';
import parseHtml from 'html-react-parser';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';

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

  const head = $(`head`).html();
  const body = $(`body`).html();
  const bodyClass = $(`body`).attr('class');

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
      {/* TODO get url dynamically: Not sure if this "webflow.5bed71c6e.js" is dynamic or not */}
      <Script
        src="https://assets-global.website-files.com/65cd13813bd3677534fa7c0b/js/webflow.5bed71c6e.js"
        type="text/javascript"
      />
    </>
  );
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
