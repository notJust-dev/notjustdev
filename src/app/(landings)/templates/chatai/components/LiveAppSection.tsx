import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const APP_STORE_URL =
  'https://apps.apple.com/us/app/ai-chat-assistant-rhys/id6762458844';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=app.notjust.rhys';

function AppleIcon() {
  return (
    <svg
      className="w-7 h-7 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="w-7 h-7 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3.6 2.4c-.3.3-.5.7-.5 1.3v16.6c0 .6.2 1 .5 1.3l9.1-9.6L3.6 2.4zm12 7.7L5.8 1.9 16.7 8l-1.1 2.1zm0 3.8L16.7 16l-10.9 6.1 9.8-8.2zm5-3.1c.7.4.7 1.5 0 1.9l-2.7 1.5-1.4-2.4 1.4-2.4 2.7 1.4z" />
    </svg>
  );
}

export default function LiveAppSection() {
  return (
    <MaxWidthWrapper>
      <section id="live-app" className="py-20 md:py-24 scroll-mt-20">
        <div className="relative rounded-3xl overflow-hidden border border-white-200/10 bg-gradient-to-br from-primary/10 via-black/40 to-secondary/5 p-8 md:p-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="shrink-0">
              <Image
                src="/images/templates/chatai/rhys-icon.png"
                alt="Rhys — AI Chat Assistant app icon"
                width={160}
                height={160}
                className="rounded-[36px] shadow-2xl shadow-primary/20"
              />
            </div>

            <div className="flex-1 space-y-5 text-center lg:text-left">
              <p className="text-pill w-fit mx-auto lg:mx-0">
                Live in production
              </p>
              <h2 className="text-3xl md:text-5xl leading-tight">
                We built this template,{' '}
                <span className="text-primary-gradient">
                  then shipped Rhys with it.
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0">
                Rhys is a real AI chat assistant, live on the App Store and
                Play Store. Every screen, paywall, and streaming response you
                see in the screenshots is the same code you get when you buy
                the template. Download it, feel it, then ship your own.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 justify-center lg:justify-start">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white-100 text-gray-900 hover:bg-primary transition-colors font-space-grotesk font-medium"
                >
                  <AppleIcon />
                  <span className="text-left leading-tight">
                    <span className="block text-xs opacity-70">
                      Download on the
                    </span>
                    <span className="block text-lg">App Store</span>
                  </span>
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white-100 text-gray-900 hover:bg-primary transition-colors font-space-grotesk font-medium"
                >
                  <PlayIcon />
                  <span className="text-left leading-tight">
                    <span className="block text-xs opacity-70">Get it on</span>
                    <span className="block text-lg">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
