'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { data } from '@/data/sliderContents';
import Image from 'next/image';

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)]'>
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
          <SwiperSlide key={slide.heading} className='h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1200}
              height={800}
              className='h-full w-full object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
