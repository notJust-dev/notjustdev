type PostMeta = {
  id: string;
  slug: string;
  title: string;
  updatedOn: string;
  image?: string;
  type: PostType;

  seoTitle: string;
  description: string;

  hideImageHeader?: boolean;
  hideNewsletterForm?: boolean;
  authors: Author[];

  youtubeID?: string;
  githubUrl?: string | null;
  kitFormId?: string | null;
  kitFormEmbedID?: string | null;

  redirect_url?: string;

  tags: NotionMultiSelect[];
  // ytVideoId?: string;
  // category: string;
  // keywords?: string;

  parentPageId?: string;
  parentSlug?: string;
};

type NotionMultiSelect = {
  color:
    | 'blue'
    | 'brown'
    | 'default'
    | 'gray'
    | 'green'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'yellow';
  id: string;
  name: string;
};

type PostType = 'Blog' | 'Project';

type Post = PostMeta & {
  content: string;
  toc?: ToCHeading[];
};

type ToCHeading = {
  slug: string;
  title: string;
  depth: number;
};
