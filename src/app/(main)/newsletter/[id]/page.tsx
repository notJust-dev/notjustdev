import { getBroadcast } from '@/lib/convertkit/broadcasts';

export default async function NewsletterIssue() {
  const issue = await getBroadcast(16337755);

  console.log(issue.content);

  return <div dangerouslySetInnerHTML={{ __html: issue.content }} />;
}
