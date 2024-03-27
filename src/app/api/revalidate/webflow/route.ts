import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('webflow_page');
  return Response.json({ revalidated: true, now: Date.now() });
}
