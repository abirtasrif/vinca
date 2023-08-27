import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Hair Care', 'Spa', 'Makeup Artistry']}>
        <p>Tab 1 Content</p>
        <p>Tab 2 Content</p>
        <p>Tab 3 Content</p>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
