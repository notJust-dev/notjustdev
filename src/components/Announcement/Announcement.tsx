import Link from 'next/link';

const text = '';

const Announcement = () =>
  !text ? null : (
    <Link href="https://academy.notjust.dev/">
      <div className="flex justify-center p-3 cursor-pointer bg-custom-blue-500">
        <h3 className="text-primary">{text} →</h3>
      </div>
    </Link>
  );

export default Announcement;
