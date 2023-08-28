import { packageItem } from '@/types/packageItem';

interface PackageDetailsSectionProps {
  packageItem: packageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return <div className='wrapper section-padding'>PackageDetailsSection</div>;
};

export default PackageDetailsSection;
