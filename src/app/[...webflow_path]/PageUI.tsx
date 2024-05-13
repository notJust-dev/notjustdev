'use client';
import parseHtml, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from 'html-react-parser';
import Link from 'next/link';

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

type PageUIProps = {
  body: string | null;
};

export default function PageUI({ body }: PageUIProps) {
  return <>{body && parseHtml(body, parseOptions)}</>;
}
