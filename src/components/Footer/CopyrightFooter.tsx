import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';

export default function CopyrightFooter() {
  return (
    <MaxWidthWrapper className="flex justify-between py-5 text-neutral-400 text-sm">
      <p className="text-neutral-300">Copyright © 2026 notJust.dev</p>
      <div className="flex gap-4">
        <Link href="/legal-notice">Legal Notice</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="#" className="cky-banner-element">
          Cookie Preferences
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
