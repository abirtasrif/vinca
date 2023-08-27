'use client';

import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';

interface PackageItemProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
}

const PackageItem: React.FC<PackageItemProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
}) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Link
        href={`/packages/${id}`}
        className='border-gray/25 group h-[14rem] w-full overflow-hidden rounded-xl border'
      >
        <Image
          src={image}
          alt={title}
          height={640}
          width={550}
          className='eoq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>

      <div className='eoq bg-gray/25 hover:bg-gray/50 flex w-full flex-col gap-2.5 rounded-xl border p-5'>
        <span className='font text-sm uppercase tracking-[0.375em] text-green'>
          {category}
        </span>
        <h4 className='text-2xl '>{title}</h4>
        <hr />
        <p className='text-dark'>{description}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-2xl '>{formatCurrency(price, 'en-US', 'USD')}</p>
          <Link
            href={`/packages/${id}`}
            className={buttonVariants({ variant: 'lavender' })}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
