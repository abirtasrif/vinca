import './globals.css';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#4240b9',
          colorSuccess: '#258841',
          colorWarning: '#ff9750',
          colorDanger: '#ef233c',
          colorBackground: '#e5e3e766',
          colorText: '#373737',
          colorTextSecondary: '#9c9c7c',
          colorTextOnPrimaryBackground: '#e5e3e7',
        },
      }}
    >
      <html lang='en'>
        <body
          className={cn(
            baiJamjuree.className,
            'bg-light/10 text-dark antialiased'
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
