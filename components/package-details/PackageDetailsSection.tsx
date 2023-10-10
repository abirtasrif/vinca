import { beautyPackageType } from '@/types/packageItem';

interface PackageDetailsSectionProps {
  packageItem: beautyPackageType;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return <div className='wrapper section-padding'>{packageItem.title}</div>;
};

export default PackageDetailsSection;
