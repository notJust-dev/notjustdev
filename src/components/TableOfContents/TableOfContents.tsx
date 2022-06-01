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
  <aside className="w-80 ml-16 py-5 sticky top-0 self-start max-h-screen overflow-scroll hidden lg:block">
    <nav aria-label="Table of Contents">
      <h3>Table of Contents</h3>
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
  </aside>
);

export default TableOfContents;
