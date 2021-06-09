type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  canonical?: string;
  description: string;
  category: string;
  tags: string[];

  code?: any;
};
