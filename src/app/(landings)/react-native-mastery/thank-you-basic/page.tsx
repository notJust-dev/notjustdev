import { Metadata } from 'next';
import { FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import PurchaseEvent from './PurchaseEvent';

const pageUrl = 'https://www.notjust.dev/react-native-mastery';
const shareText =
  "I just joined React Native Mastery by @VadimNotJustDev to level up my mobile development skills! #ReactNativeMastery";

const shareLinks = [
  {
    name: 'X',
    icon: FaTwitter,
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: 'Facebook',
    icon: FaFacebookF,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
  },
];

export const metadata: Metadata = {
  title: 'Thank you for joining React Native Mastery!',
  description:
    "You've successfully enrolled in React Native Mastery. Check your email for next steps.",
};

export default function ThankYouBasic() {
  return (
    <>
      <PurchaseEvent />
      <MaxWidthWrapper maxWidth={900}>
      <section className="min-h-[80vh] flex flex-col justify-between py-20">
        <div className="space-y-5">
          <h1 className="text-primary">
            Thank you for joining React Native Mastery! 🎉
          </h1>

          <p className="text-lg text-gray-200">
            We&apos;re thrilled to have you on this journey to becoming a React
            Native pro.
          </p>

          <p className="text-lg text-gray-200">
            Check your email for instructions on the next steps. If you
            don&apos;t see it, check your spam or junk folder.
          </p>

          <div className="pt-6 space-y-3">
            <h2 className="text-2xl font-bold text-primary">
              Spread the Word and Inspire Others!
            </h2>
            <p className="text-gray-300">
              Let your network know you&apos;re leveling up your skills! Use
              #ReactNativeMastery.
            </p>

            <div className="flex gap-5 pt-2">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Share on ${link.name}`}
                  className="text-white hover:text-primary transition-colors"
                >
                  <link.icon size={40} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-400 pt-16">
          Need help? Reach out to us at{' '}
          <a
            href="mailto:support@notjust.dev"
            className="text-primary hover:underline"
          >
            support@notjust.dev
          </a>
        </p>
      </section>
    </MaxWidthWrapper>
    </>
  );
}
