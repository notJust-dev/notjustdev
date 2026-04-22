import { MetadataRoute } from 'next';
import { getAllPostTags, getAllPosts } from '../lib/notion/notion';
import { getAllEvents } from '../lib/events';
import { getPublicBroadcasts } from '../lib/convertkit/broadcasts';

const root = 'https://www.notjust.dev';

const getNewsletterSiteMap = async (): Promise<MetadataRoute.Sitemap> => {
  const broadcasts = await getPublicBroadcasts();

  return broadcasts.map((broadcast) => ({
    url: `${root}/newsletter/${broadcast.id}`,
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [
    {
      url: root,
    },
    {
      url: `${root}/links`,
    },
    {
      url: `${root}/pro-courses`,
    },
    {
      url: `${root}/testimonials`,
    },
  ];

  //blog
  urls.push({
    url: `${root}/blog`,
  });

  const posts = await getAllPosts({ type: 'Blog' });
  urls.push(
    ...posts.map(({ slug, updatedOn }) => ({
      url: `${root}/blog/${slug}`,
      lastModified: new Date(updatedOn),
    })),
  );

  //projects
  urls.push({
    url: `${root}/projects`,
  });

  const projects = await getAllPosts({ type: 'Project' });
  urls.push(
    ...projects.map(({ slug, updatedOn }) => ({
      url: `${root}/projects/${slug}`,
      lastModified: new Date(updatedOn),
    })),
  );

  // project sub pages
  const projectSubpages = await getAllPosts({
    type: 'Project',
    subPageFilter: 'sub_pages',
  });
  urls.push(
    ...projectSubpages.map(({ parentSlug, slug, updatedOn }) => ({
      url: `${root}/projects/${parentSlug}/${slug}`,
      lastModified: new Date(updatedOn),
    })),
  );

  //events
  urls.push({
    url: `${root}/events`,
  });
  const events = await getAllEvents({});
  urls.push(
    ...events.map(({ slug, updatedOn }) => ({
      url: `${root}/events/${slug}`,
      lastModified: new Date(updatedOn),
    })),
  );

  // tags
  const tags = await getAllPostTags();
  urls.push(
    ...tags.map(({ name }) => ({
      url: `${root}/tag/${encodeURIComponent(name)}`,
    })),
  );

  // React Native Mastery
  urls.push({ url: `${root}/react-native-mastery` });

  // Templates
  urls.push({ url: `${root}/templates/chatai` });
  urls.push({ url: `${root}/templates/imageai` });
  urls.push({ url: `${root}/templates/ecommerce` });

  // Newsletter public posts
  urls.push({ url: `${root}/newsletter/archive` });
  urls.push(...(await getNewsletterSiteMap()));

  // podcast
  urls.push({ url: `${root}/podcast` });

  // tools
  urls.push({ url: `${root}/app-revenue-calculator` });

  return urls;
}
