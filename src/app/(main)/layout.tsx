import ServerLayout from '@/components/ServerLayout';
import '@/styles/globals.css';
import Image from 'next/image';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image
        src="/images/brand_elements/union.svg"
        alt="brand elements"
        width={731}
        height={850}
        className="absolute top-0 bottom-0 left-auto right-0 blur-[300px] pointer-events-none"
      />

      <ServerLayout>
        <section>{children}</section>
      </ServerLayout>
    </>
  );
}
