type PostMeta = {
  slug: string;
  title: string;
  publishedOn: string;
  image: string;
  canonical?: string;
  description: string;
  category: string;
  tags: string[];
  draft?: boolean;
  keywords?: string;
};

type Post = PostMeta & {
  code?: any;
};
