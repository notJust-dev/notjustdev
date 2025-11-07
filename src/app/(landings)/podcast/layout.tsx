import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import NavbarMini from '@/components/Navbar/NavbarMini';
import Image from 'next/image';
import brandElements from '@images/brand_elements/union.svg';
import '@/styles/globals.css';
import CopyrightFooter from '@/components/Footer/CopyrightFooter';

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMini />
      <Image
        src={brandElements}
        alt="brand elements"
        width={731}
        height={850}
        className="absolute top-0 bottom-0 max-h-[100vh] left-auto right-0 blur-[300px] pointer-events-none"
      />
      <main className="flex-1">
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </main>

      <footer className="flex w-full bg-neutral-900/50 backdrop-blur-2xl z-10 ">
        <CopyrightFooter />
      </footer>
    </div>
  );
}
