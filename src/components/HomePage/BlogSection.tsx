import BlogCard from '../BlogCard';
import Button from '../Button';

type BlogSection = {
  posts: PostMeta[];
};

export default function BlogSection({ posts }: BlogSection) {
  return (
    <section className="flex flex-col items-start">
      <div className="flex flex-col gap-8 items-start">
        <span className="text-pill">News & Updates</span>
        <h2 className="text-5xl text-primary-gradient">Blog</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>

      <Button
        text="See all posts"
        href="/blog"
        type="secondary"
        className="self-center"
      />
    </section>
  );
}
