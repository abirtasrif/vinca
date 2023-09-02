import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';

const PackageDetails = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: packageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <PackageDetailsSection packageItem={packageItem} />
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetails;
