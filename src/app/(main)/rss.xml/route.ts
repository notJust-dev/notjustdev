import { getPublicBroadcasts } from '@/lib/convertkit/broadcasts';

export async function GET() {
  console.log('Fetching RSS Feed');

  // Fetch Newsletter Issues from ConvertKit
  const broadcasts = await getPublicBroadcasts();
  const newsletterItems = broadcasts
    .filter((issue) => issue.published_at)
    .map(
      (issue) => `
      <item>
        <title><![CDATA[${issue.subject}]]></title>
        <link>https://www.notjust.dev/newsletter/${issue.id}</link>
        <guid>https://www.notjust.dev/newsletter/${issue.id}</guid>
        <pubDate>${new Date(issue.published_at).toUTCString()}</pubDate>
        <description><![CDATA[${
          issue.preview_text || issue.subject
        }]]></description>
      </item>
    `,
    );

  // Fetch Blog Posts (Assuming Stored in Your CMS or Database)
  // const blogRes = await fetch('https://yourwebsite.com/api/blog-posts'); // Adjust URL based on your CMS
  // const blogData = await blogRes.json();
  // const blogItems = blogData.posts?.map(
  //   (post) => `
  //     <item>
  //       <title><![CDATA[${post.title}]]></title>
  //       <link>https://yourwebsite.com/blog/${post.slug}</link>
  //       <pubDate>${new Date(post.published_at).toUTCString()}</pubDate>
  //       <description><![CDATA[${post.excerpt || ''}]]></description>
  //     </item>
  //   `,
  // );

  // Combine Both Feeds
  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>notJust.dev Feed</title>
      <link>https://www.notjust.dev/</link>
      <atom:link href="https://www.notjust.dev/rss.xml" rel="self" type="application/rss+xml"/>

      <description>React Native and mobile development news and tutorials</description>
      ${[...(newsletterItems || [])].join('')}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
