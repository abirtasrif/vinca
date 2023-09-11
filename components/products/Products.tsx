import SectionTitle from '../shared/SectionTitle';

const Products = () => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subTitle='Products'
        title='Browse Our Beauty Products'
        color='bg-blue'
      />

      {/* ALL PRODUCTS */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {/* MULTIPLE PRODUCTS */}
      </div>
    </section>
  );
};

export default Products;
