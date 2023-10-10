import { beautyPackageType } from '@/types/packageItem';
import React from 'react';

interface PackageDetailsSectionProps {
  packageItem: beautyPackageType;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  packageItem,
}) => {
  return (
    <section className='wrapper section-padding'>
      <p>{packageItem.title}</p>
    </section>
  );
};

export default PackageDetailsSection;
