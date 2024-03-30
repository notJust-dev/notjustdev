import { MetadataRoute } from 'next';
import { getAllPostTags, getAllPosts } from '../lib/notion/notion';
import { getAllEvents } from '../lib/events';
import GetSitemapLinks from 'sitemap-links';

const root = 'https://notjust.dev';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = [
    {
      url: root,
    },
    {
      url: `${root}/links`,
      lastModified: new Date(),
    },
    {
      url: `${root}/pro`,
      lastModified: new Date(),
    },
    {
      url: `${root}/pro-courses`,
      lastModified: new Date(),
    },
    {
      url: `${root}/testimonials`,
      lastModified: new Date(),
    },
  ];

  //blog
  urls.push({
    url: `${root}/blog`,
    lastModified: new Date(),
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
    lastModified: new Date(),
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
    lastModified: new Date(),
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
      lastModified: new Date(),
    })),
  );

  // webflow
  const sitemapLink = process.env.WEBFLOW_URL + `/sitemap.xml`;
  const links = await GetSitemapLinks(sitemapLink).catch((err: Error) => {
    console.error(err);
  });

  // Extract paths from absolute links
  for (let link of links) {
    let url = new URL(link);
    const path = url.pathname.replace(`/`, ``).split(`/`);
    if (!path.length || !path[0]) continue;
    urls.push({
      url: `${root}/${path}`,
      lastModified: new Date(),
    });
  }

  return urls;
}
