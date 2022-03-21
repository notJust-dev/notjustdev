import Link from 'next/link';

const Announcement = () => (
  <Link href="/blog/2022-03-21-the-full-stack-mobile-developer-course-is-coming-soon">
    <a href="replaced">
      <div className="flex justify-center p-3 cursor-pointer bg-custom-blue-500">
        <h3 className="text-primary">
          The Full Stack Developer Course coming soon →
        </h3>
      </div>
    </a>
  </Link>
);

export default Announcement;
