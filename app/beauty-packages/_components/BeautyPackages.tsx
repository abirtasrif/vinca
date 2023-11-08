'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import useFetch from '@/hooks/useFetch';
import React from 'react';

const BeautyPackages = () => {
  const {
    data: beautyPackages,
    isLoading,
    error,
  } = useFetch('/api/beauty_packages');

  return (
    <section className='section-padding container'>
      <SectionTitle title='Beauty Packages' />

      <div className='grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {/* Beauty Packages */}
      </div>
    </section>
  );
};

export default BeautyPackages;
