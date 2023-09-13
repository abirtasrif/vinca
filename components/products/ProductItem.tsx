import { productItem } from '@/types/productItem';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';

interface ProductItemProps {
  item: productItem;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className='flex h-full w-full flex-col gap-5 overflow-hidden rounded-xl border border-gray/50 p-5'>
      <div className='group h-[20rem] w-full overflow-hidden rounded-lg'>
        <Image
          src={item.images[0]}
          alt={item.title}
          width={340}
          height={500}
          priority
          className='eoq h-full w-full object-cover group-hover:scale-125'
        />
      </div>
      <div className='flex flex-col gap-2.5'>
        <span className='text-xs font-bold uppercase tracking-widest text-orange'>
          {item.category}
        </span>
        <h3 className='truncate text-2xl'>{item.title}</h3>
        <hr className='opacity-25' />
        <p className='opacity-60'>{item.description.substring(0, 150)}</p>
        <div className='just flex items-center gap-5'>
          <p className='text-2xl'>{formatCurrency(item.price)}</p>
          <Link
            href={`/products/${item.id}`}
            className={buttonVariants({ variant: 'ocean' })}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
