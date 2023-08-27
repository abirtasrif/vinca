'use client';

import Footer from '@/components/shared/Footer';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';
import NavbarMini from '@/components/shared/NavbarMini';
import { usePathname } from 'next/navigation';

const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  switch (pathname) {
    case '/':
      return (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      );
    case '/user/signin':
    case '/user/sign-up':
      return (
        <>
          <NavbarMini />
          {children}
          <FooterMini />
        </>
      );
    default:
      return (
        <>
          <Navbar />
          {children}
          <FooterMini />
        </>
      );
  }
};

export default MasterProvider;
