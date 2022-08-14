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
  hideImageHeader?: boolean;
  author?: string;
};

type Post = PostMeta & {
  code?: any;
  toc?: ToCHeading[];
};

type ToCHeading = {
  slug: string;
  title: string;
  depth: number;
  url?: string;
};

type Course = CourseMeta & {
  code?: any;
  toc?: ToCHeading[];
};

type CourseMeta = {
  slug: string;
  parentSlug?: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  tags: string[];
  keywords?: string;
  type: 'pro' | 'free';
  redirect_url?: string;
};
