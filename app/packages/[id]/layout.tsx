import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vinca | Package Details',
};

export default function PackageDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
