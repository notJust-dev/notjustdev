type PostMeta = {
  slug: string;
  title: string;
  updatedOn: string;
  image?: string;

  description: string;

  hideImageHeader: boolean;
  hideNewsletterForm: boolean;
  authors: Author[];
  // ytVideoId?: string;
  // category: string;
  // tags: string[];
  // keywords?: string;
};

type Post = PostMeta & {
  content: MDXRemoteSerializeResult;
  toc?: ToCHeading[];
};

type ToCHeading = {
  slug: string;
  title: string;
  depth: number;
};
