type EventMeta = {
  id: string;
  slug: string;
  title: string;
  description: string;
  updatedOn: string;
  image?: string;

  date: string;
  isPro: boolean;

  cta?: string;
  ctaUrl?: string;

  authors: Author[];

  // redirect_url?: string;

  // tags: NotionMultiSelect[];
  // ytVideoId?: string;
  // category: string;
  // keywords?: string;

  // parentPageId?: string;
  // parentSlug?: string;
};

type EventWithContent = EventMeta & {
  content: MDXRemoteSerializeResult;
};
