'use client';
import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  toc: ToCHeading[];
}

const margins = [
  'ml-0', // h0
  'ml-0', // h1
  'ml-0', // h2
  'ml-3', // h3
];

export default function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeHeadingId, setActiveHeadingId] = useState('');

  useEffect(() => {
    const callback: IntersectionObserverCallback = (headings) => {
      const intersectingHeader = headings.find((h) => h.isIntersecting);
      if (intersectingHeader) {
        setActiveHeadingId(intersectingHeader.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Table of Contents">
      <h3 className="mb-4 pl-3 border-l-4 border-secondary text-xl">
        Table of Contents
      </h3>
      <ul>
        {toc.map((h) => (
          <li
            key={h.title}
            className={`${
              margins[h.depth]
            } my-2 hover:text-primary font-light text-sm ${
              h.slug === activeHeadingId
                ? 'text-primary font-bold'
                : 'text-gray-400'
            }`}
          >
            <a
              href={`#${h.slug}`}
              onClick={(e) => {
                e.preventDefault();
                history.replaceState(undefined, '', `#${h.slug}`);
                document.querySelector(`#${h.slug}`)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {h.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
