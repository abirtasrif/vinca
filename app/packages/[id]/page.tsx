import { data } from '@/data/packages';

const PackageDetails = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: any) => item.id === id);

  if (!packageItem) {
    return null;
  }
  return <main className='text-6xl'>{packageItem?.title}</main>;
};

export default PackageDetails;
