import Link from 'next/link';
import { load } from 'cheerio';
import parseHtml, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from 'html-react-parser';

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

export default async function Page({
  params,
}: {
  params: { webflow_path: string[] };
}) {
  // Use path to determine Webflow path
  let url = params.webflow_path[0] || '';
  // url = url.join(`/`);
  if (url.charAt(0) !== `/`) {
    url = `/${url}`;
  }
  const fetchUrl = process.env.WEBFLOW_URL + url;

  // Fetch HTML
  let res = await fetch(fetchUrl).catch((err) => {
    console.error(err);
  });
  const html = await res?.text();

  // Parse HTML with Cheerio
  const $ = load(html || '');
  const bodyContent = $(`body`).html();
  const headContent = $(`head`).html();

  return (
    <>
      {headContent && parseHtml(headContent)}
      {bodyContent && parseHtml(bodyContent, parseOptions)}
    </>
  );
}
