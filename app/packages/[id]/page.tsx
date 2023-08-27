import { data } from '@/data/packages';

const PackageDetails = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const packageItem = data.find((item: any) => item.id === id);
  return <div className='text-6xl'>{packageItem?.title}</div>;
};

export default PackageDetails;
