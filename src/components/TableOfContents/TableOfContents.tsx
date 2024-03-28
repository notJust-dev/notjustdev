interface TableOfContentsProps {
  toc: ToCHeading[];
  activeHeadingId: string;
}

const margins = [
  'ml-0', // h0
  'ml-0', // h1
  'ml-0', // h2
  'ml-3', // h3
];

const TableOfContents = ({ toc, activeHeadingId }: TableOfContentsProps) => (
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

export default TableOfContents;
