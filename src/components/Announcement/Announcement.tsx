import Link from 'next/link';

const text = '';

const Announcement = () =>
  !text ? null : (
    <Link href="/blog/2022-03-24-uber-eats-5-days-challenge">
      <a>
        <div className="flex justify-center p-3 cursor-pointer bg-custom-blue-500">
          <h3 className="text-primary">
            Join the 5-Days Uber Eats Challenge →
          </h3>
        </div>
      </a>
    </Link>
  );

export default Announcement;
