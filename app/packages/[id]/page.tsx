import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import Error from '@/components/shared/error';
import FooterMini from '@/components/shared/footer/FooterMini';
import Loading from '@/components/shared/loading';
import Navbar from '@/components/shared/navbar/Navbar';
import useFetch from '@/hooks/use-fetch';

const PackageDetails = ({ params }: { params: { id: string } }) => {
  const {
    data: packageItem,
    isLoading,
    error,
  } = useFetch(`/api/beauty_packages/${params.id}`);

  return (
    <>
      <Navbar />
      <main>
        {isLoading && (
          <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
            <Loading isLoading={isLoading} />
          </div>
        )}

        {error && (
          <div className='flex h-[calc(100vh-5rem)] items-center justify-center'>
            <Error error={error.message} />
          </div>
        )}

        {packageItem && <PackageDetailsSection packageItem={packageItem} />}
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetails;
