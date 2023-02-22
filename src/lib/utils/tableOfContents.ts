import GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger();

const isHeader2or3 = (line: string) => {
  const trimmed = line.trim();
  return trimmed.startsWith('## ') || trimmed.startsWith('### ');
};

export const buildToC = (mdString: string): ToCHeading[] => {
  const headings = mdString.split(/\r?\n/).filter(isHeader2or3);

  const toc = headings.map((h) => {
    const depth = h.split(' ', 1)[0].length;
    const title = h
      .slice(depth)
      .replaceAll('_', '')
      .replace(/\[([^\[\]]*)\]\((.*?)\)/gm, '$1')
      .trim();
    return {
      slug: slugger.slug(title),
      title,
      depth,
    };
  });

  toc.unshift({ slug: 'introduction', title: 'Introduction', depth: 2 });
  return toc;
};

// Shift heading one way smaller (H1 becomes H2, H2 -> H3)
export const shiftHeadings = (mdString: string) => {
  const headings = mdString
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith('#'));

  headings.forEach(
    (heading) => (mdString = mdString.replace(heading, `#${heading.trim()}`)),
  );
  return mdString;
};
