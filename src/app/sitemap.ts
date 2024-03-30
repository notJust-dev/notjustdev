import { MetadataRoute } from 'next';
import { getAllPostTags, getAllPosts } from '../lib/notion/notion';
import { getAllEvents } from '../lib/events';
import { XMLParser } from 'fast-xml-parser';

const root = 'https://notjust.dev';

const getWebflowSiteMap = async (): Promise<MetadataRoute.Sitemap> => {
  try {
    const sitemapLink = process.env.WEBFLOW_URL + `/sitemap.xml`;
    const response = await fetch(sitemapLink);
    const sitemapXML = await response.text();

    const parser = new XMLParser();
    const sitemapObj = parser.parse(sitemapXML);
    const links = sitemapObj.urlset.url.map((l) => l.loc);

    const urls: MetadataRoute.Sitemap = [];

    for (let link of links) {
      let url = new URL(link);
      const path = url.pathname.replace(`/`, ``).split(`/`);
      if (!path.length || !path[0]) continue;
      urls.push({
        url: `${root}/${path}`,
      });
    }
    return urls;
  } catch (e) {
    console.log('Failed to fetch and parse webflow sitemap');
    return [];
  }
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
      url: `${root}/pro`,
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

  // webflow
  urls.push(...(await getWebflowSiteMap()));
  return urls;
}
