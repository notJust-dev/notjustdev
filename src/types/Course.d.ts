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
