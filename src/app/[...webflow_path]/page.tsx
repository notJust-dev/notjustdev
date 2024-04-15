import Link from 'next/link';
import { load } from 'cheerio';
import parseHtml, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from 'html-react-parser';
import { Metadata } from 'next';

// Determines if URL is internal or external
function isUrlInternal(link: string) {
  if (
    !link ||
    link.indexOf(`https:`) === 0 ||
    link.indexOf(`#`) === 0 ||
    link.indexOf(`http`) === 0 ||
    link.indexOf(`://`) === 0
  ) {
    return false;
  }
  return true;
}

const parseOptions: HTMLReactParserOptions = {
  replace(node) {
    if (!(node instanceof Element)) {
      return;
    }
    const attribs = node.attribs || {};

    // Replace links with Next links
    if (node.name === `a` && isUrlInternal(attribs.href)) {
      const { href, ...props } = attribs;
      if (props.class) {
        props.className = props.class;
        delete props.class;
      }
      return (
        <Link href={href}>
          <a {...props}>
            {!!node.children &&
              !!node.children.length &&
              domToReact(node.children as DOMNode[], parseOptions)}
          </a>
        </Link>
      );
    }
  },
};

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

  const bodyContent = $(`body`).html();
  const headContent = $(`head`).html();

  return (
    <>
      {headContent && parseHtml(headContent)}
      {bodyContent && parseHtml(bodyContent, parseOptions)}
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
