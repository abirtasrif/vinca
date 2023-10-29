'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/libs/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { data } from '@/data/sliderContents';
import Image from 'next/image';
import Link from 'next/link';
import Overlay from '@/components/ui/Overlay';

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)] w-full'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        speed={1000}
        className='mySlider h-full w-full'
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.heading} className='relative h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1620}
              height={1080}
              className='h-full w-full object-cover'
            />
            <Overlay />
            <div className='sp container absolute bottom-0 left-0 right-0 top-0 h-full w-full space-y-5 text-white'>
              <h1>{slide.heading}</h1>
              <p className='max-w-6xl'>{slide.subHeading}</p>
              <Link
                href='/beauty-packages'
                className={cn(buttonVariants({ variant: 'secondary' }))}
              >
                Browse Beauty Packages
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
