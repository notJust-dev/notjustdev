import ServerLayout from '@/components/ServerLayout';
import '@/styles/globals.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerLayout
    // title={post.seoTitle || post.title}
    // description={post.description}
    // image={post.image}
    // pageType="article"
    // // keywords={post.keywords}
    // hideNewsletterForm={post.hideNewsletterForm}
    >
      <section>{children}</section>
    </ServerLayout>
  );
}
