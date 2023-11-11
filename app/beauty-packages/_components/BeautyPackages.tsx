'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import BeautyPackageCard from './BeautyPackageCard';
import Loading from '@/components/ui/Loading';

interface BeautyPackagesProps {
  native?: boolean;
}

const BeautyPackages: React.FC<BeautyPackagesProps> = ({ native }) => {
  const {
    data: beautyPackages,
    isLoading,
    error,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='section-padding container'>
      <SectionTitle title='Beauty Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {beautyPackages && (
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {/* Beauty Packages */}
          {beautyPackages.map((item) => (
            <BeautyPackageCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BeautyPackages;
