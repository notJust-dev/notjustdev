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
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  tags: string[];
  keywords?: string;
  type: 'pro' | 'free';
  redirect_url?: string;
};

// TODO: Update the fields of a sub page
type CourseSubPageMeta = {
  courseSlug: string;
  subPageSlug: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  tags: string[];
  keywords?: string;
  type: 'pro' | 'free';
  redirect_url?: string;
};

type CourseSubPage = CourseSubPageMeta & {
  code?: any;
};
