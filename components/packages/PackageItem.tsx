import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '../ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';
import { beautyPackageType } from '@/types/packageItem';

interface PackageItemProps {
  packageItem: beautyPackageType;
}

const PackageItem: React.FC<PackageItemProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <Link
        href={`/packages/${packageItem._id}`}
        className='group h-[14rem] w-full overflow-hidden rounded-xl border border-gray/25'
      >
        <Image
          src={packageItem.images[0]}
          alt={packageItem.title}
          height={640}
          width={550}
          priority
          className='eoq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>

      <div className='eoq flex w-full flex-col gap-2.5 rounded-xl border bg-gray/25 p-5 hover:bg-gray/50'>
        <span className='font text-sm uppercase tracking-[0.375em] text-green'>
          {packageItem.category}
        </span>
        <h4 className='text-2xl '>{packageItem.title}</h4>
        <hr />
        <p className='text-dark'>{packageItem.description}</p>
        <div className='flex items-center justify-between gap-2.5'>
          <p className='text-2xl '>
            {formatCurrency(packageItem.price, 'en-US', 'USD')}
          </p>
          <Link
            href={`/packages/${packageItem._id}`}
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
