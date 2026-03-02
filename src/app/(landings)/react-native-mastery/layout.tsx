import '@/styles/globals.css';
import CopyrightFooter from '@/components/Footer/CopyrightFooter';

export default function ReactNativeMasteryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{children}</main>

      <footer className="flex w-full bg-neutral-900/50 backdrop-blur-2xl z-10 ">
        <CopyrightFooter />
      </footer>
    </div>
  );
}
