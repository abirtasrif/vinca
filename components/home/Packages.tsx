import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';
import { packageItem } from '@/types/packageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Beauty Care', 'Spa', 'Makeup Artistry']}>
        {/* Beauty Care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter(
              (item: packageItem) => item.masterCategory === 'Beauty Care'
            )
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Spa */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Spa')
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter(
              (item: packageItem) => item.masterCategory === 'Makeup Artistry'
            )
            .sort((a: packageItem, b: packageItem) => a.price - b.price)
            .slice(0, 4)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
      <div className='flex justify-center'>
        <Link
          href='/packages'
          className={cn(buttonVariants({ variant: 'outline' }), 'mt-20')}
        >
          View all packages
        </Link>
      </div>
    </section>
  );
};

export default Packages;
