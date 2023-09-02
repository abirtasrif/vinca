import Packages from '@/components/packages/Packages';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Packages fromPackagePage />
      </main>
      <FooterMini />
    </>
  );
};

export default PackagesPage;
