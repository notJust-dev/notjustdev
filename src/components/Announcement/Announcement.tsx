import Link from 'next/link';

const Announcement = () => (
  <Link href="/CodeForUkraine">
    <div className="flex justify-center p-3 cursor-pointer bg-custom-blue-500">
      <h3 className="text-primary">Join the #CodeForUkraine Hackathon →</h3>
    </div>
  </Link>
);

export default Announcement;
