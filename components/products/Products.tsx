import SectionTitle from '../shared/SectionTitle';
import { productsData } from '@/data/products';
import ProductItem from './ProductItem';
import { productItem } from '@/types/productItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

interface ProductsPageProps {
  fromProductPage?: boolean;
}

const Products: React.FC<ProductsPageProps> = ({ fromProductPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        subTitle='Products'
        title='Browse Our Beauty Products'
        color='bg-blue'
      />

      {/* ALL PRODUCTS */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {!fromProductPage &&
          productsData
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 8)
            .map((item) => <ProductItem key={item.id} item={item} />)}
        {fromProductPage &&
          productsData
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item) => <ProductItem key={item.id} item={item} />)}
      </div>

      {!fromProductPage && (
        <div className='mt-20 flex justify-center'>
          <Link
            href='/products'
            className={buttonVariants({ variant: 'outline' })}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
