import SectionTitle from '../shared/SectionTitle';
import { productsData } from '@/data/products';
import ProductItem from './ProductItem';

const Products = () => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subTitle='Products'
        title='Browse Our Beauty Products'
        color='bg-blue'
      />

      {/* ALL PRODUCTS */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {productsData.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
