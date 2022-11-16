type PostMeta = {
  slug: string;
  title: string;
  publishedOn: string;
  image: string;
  ytVideoId?: string;
  canonical?: string;
  description: string;
  category: string;
  tags: string[];
  draft?: boolean;
  keywords?: string;
  hideImageHeader?: boolean;
  hideReadNext?: boolean;
  hideNewsletterForm?: boolean;
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
};

type Course = CourseMeta & {
  code?: any;
};

type CourseMeta = {
  slug: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  tags: string[];
  keywords?: string;
  type: 'pro' | 'free';
  redirect_url?: string;
};
