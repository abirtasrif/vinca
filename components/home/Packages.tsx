import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Beauty Care', 'Spa', 'Makeup Artistry']}>
        {/* Beauty Care */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty Care')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Spa */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Spa')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Makeup Artistry */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Makeup Artistry')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
