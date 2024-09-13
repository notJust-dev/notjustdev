import ServerLayout from '@/components/ServerLayout';
import '@/styles/globals.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerLayout>
      <section>{children}</section>
    </ServerLayout>
  );
}
