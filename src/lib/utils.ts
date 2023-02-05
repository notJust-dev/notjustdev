import { join } from 'path';
import fs from 'fs';

export const getFileContents = (path: string) => fs.readFileSync(path, 'utf8');

export const getFullPath = (slug: string, dirname: string) => {
  const realSlug = slug.replace(/\.md$/, '');

  let fullPath = join(dirname, `${realSlug}.md`);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  fullPath = join(dirname, realSlug, `index.md`);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  throw new Error(`MDX file not found: ${fullPath}`);
};

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const richTextToPlain = (richText: any[]) => {
  return richText.map((rt) => rt.plain_text).join(' ');
};
