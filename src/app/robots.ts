import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: [
        '/email-preferences-updated',
        '/form-success',
        '/subscription-success',
      ],
      allow: '/',
    },
    sitemap: 'https://notjust.dev/sitemap.xml',
  };
}
