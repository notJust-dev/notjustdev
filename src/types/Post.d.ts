type Post = {
  slug: string;
  title: string;
  publishedOn: string;
  image: string;
  canonical?: string;
  description: string;
  category: string;
  tags: string[];
  draft?: boolean;

  code?: any;
};
