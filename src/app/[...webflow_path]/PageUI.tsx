'use client';
import parseHtml, {
  domToReact,
  type HTMLReactParserOptions,
  type DOMNode,
  Element,
} from 'html-react-parser';
import Link from 'next/link';
import Script from 'next/script';

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

function generateBase64Id(text: string) {
  const trimmed = text.trim();
  const buffer = Buffer.from(trimmed, 'utf-8');
  const encoded = buffer.toString('base64');

  const sanitized = encoded.replace(/[^a-zA-Z0-9]/g, '');

  return sanitized;
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
        <Link href={href} {...props}>
          {!!node.children &&
            !!node.children.length &&
            domToReact(node.children as DOMNode[], parseOptions)}
        </Link>
      );
    }

    // Replace scripts
    if (node.name === 'script') {
      const { attribs = {}, children } = node;

      if (attribs.src) {
        return <Script src={attribs.src} />;
      }

      return (
        <Script
          id={`webflow_script_${generateBase64Id(
            children[0].type === 'text' ? children[0].data : '',
          )}`}
        >
          {children.map((child) => (child.type === 'text' ? child.data : ''))}
        </Script>
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
