import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from '../home/PackageItem';
import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';

const AllPackages = () => {
  return (
    <section className='wrapper section-padding min-h-screen'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />

      <HorizontalTab tabs={['Beauty Care', 'Spa', 'Makeup Artistry']}>
        {/* Beauty Care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty Care')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Spa */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Spa')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Makeup Artistry')
            .sort((a: any, b: any) => a.price - b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default AllPackages;
