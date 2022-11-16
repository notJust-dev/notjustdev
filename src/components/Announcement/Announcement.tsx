import Link from 'next/link';

const text =
  'notJust Hack 🚀 - Build the app you always wanted to! Sign up NOW!';

const Announcement = () =>
  !text ? null : (
    <Link href="/hack">
      <div className="flex justify-center p-3 cursor-pointer bg-custom-blue-500">
        <h3 className="text-primary">{text} →</h3>
      </div>
    </Link>
  );

export default Announcement;
