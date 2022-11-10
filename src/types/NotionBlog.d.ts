type NotionBlogMeta = {
  slug: string;
  title: string;
  updatedOn: string;
  image?: string;
  // canonical?: string;
  description: string;
  // category: string;
  // tags: string[];
  // draft?: boolean;
  // keywords?: string;
  // hideImageHeader?: boolean;
  // author?: string;
};

type NotionBlog = NotionBlogMeta & {
  code?: any;
  toc?: ToCHeading[];
};

type ToCHeading = {
  slug: string;
  title: string;
  depth: number;
};
