type PostMeta = {
  slug: string;
  title: string;
  // publishedOn: string;
  // image: string;
  // ytVideoId?: string;
  // canonical?: string;
  // description: string;
  // category: string;
  // tags: string[];
  // draft?: boolean;
  // keywords?: string;
  // hideImageHeader?: boolean;
  // hideReadNext?: boolean;
  // hideNewsletterForm?: boolean;
  // author?: string;
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
