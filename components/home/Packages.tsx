import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our beauty packages' subTitle='Packages' />
      <HorizontalTab tabs={['Tab 1', 'Tab 2', 'Tab 3']}>
        <p>Tab 1 Content</p>
        <p>Tab 2 Content</p>
        <p>Tab 3 Content</p>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
