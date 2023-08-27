import './globals.css';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/lib/utils';
import MasterProvider from '@/providers/MasterProvider';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Vinca | Home',
  description: 'Welcome to our beauty salon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          baiJamjuree.className,
          'bg-light/10 text-dark antialiased'
        )}
      >
        <MasterProvider>{children}</MasterProvider>
      </body>
    </html>
  );
}
