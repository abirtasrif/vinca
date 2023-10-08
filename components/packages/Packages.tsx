'use client';

import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { beautyPackageType } from '@/types/packageItem';
import useFetch from '@/hooks/use-fetch';

interface PackagesProps {
  fromPackagePage?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackagePage }) => {
  const {
    data: beautyPackages,
    error,
    isLoading,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />

      {isLoading && <Loading isLoading={isLoading} />}

      {error && <Error error={error.message} />}

      {beautyPackages && beautyPackages.length > 0 && (
        <HorizontalTab tabs={['Beauty Care', 'Spa', 'Makeup Artistry']}>
          {/* Beauty Care */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              data
                ?.filter(
                  (item: packageItem) => item.masterCategory === 'Beauty Care'
                )
                .sort((a: packageItem, b: packageItem) => a.price - b.price)
                .slice(0, 4)
                .map((item: packageItem) => (
                  <PackageItem key={item.id} packageItem={item} />
                ))}

            {fromPackagePage &&
              data
                ?.filter(
                  (item: packageItem) => item.masterCategory === 'Beauty Care'
                )
                .sort((a: packageItem, b: packageItem) => a.price - b.price)
                .map((item: packageItem) => (
                  <PackageItem key={item.id} packageItem={item} />
                ))}
          </div>

          {/* Spa */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              data
                ?.filter((item: packageItem) => item.masterCategory === 'Spa')
                .sort((a: packageItem, b: packageItem) => a.price - b.price)
                .slice(0, 4)
                .map((item: packageItem) => (
                  <PackageItem key={item.id} packageItem={item} />
                ))}

            {fromPackagePage &&
              data
                ?.filter((item: packageItem) => item.masterCategory === 'Spa')
                .sort((a: packageItem, b: packageItem) => a.price - b.price)
                .map((item: packageItem) => (
                  <PackageItem key={item.id} packageItem={item} />
                ))}
          </div>

          {/* Makeup Artistry */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
            {!fromPackagePage &&
              data
                ?.filter(
                  (item: packageItem) =>
                    item.masterCategory === 'Makeup Artistry'
                )
                .sort((a: packageItem, b: packageItem) => a.price - b.price)
                .slice(0, 4)
                .map((item: packageItem) => (
                  <PackageItem key={item.id} packageItem={item} />
                ))}

            {fromPackagePage &&
              data
                ?.filter(
                  (item: packageItem) =>
                    item.masterCategory === 'Makeup Artistry'
                )
                .sort((a: packageItem, b: packageItem) => a.price - b.price)
                .map((item: packageItem) => (
                  <PackageItem key={item.id} packageItem={item} />
                ))}
          </div>
        </HorizontalTab>
      )}

      {!fromPackagePage && beautyPackages && beautyPackages.length > 0 && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;
