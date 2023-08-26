import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)] '>
      <div className='grid-rows-8 grid h-auto w-full items-center gap-3'>
        {/* FIRSTROW */}
        <div className='grid h-[7rem] w-full grid-cols-[30%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[0_40px_0_40px]'>
            <Image
              src='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              height={500}
              width={620}
              className='h-full w-full object-cover'
              alt='first-image'
            />
          </div>

          <div className='flex h-full w-full flex-col justify-center'>
            <h2 className='text-6xl font-semibold uppercase'>
              Lorem ipsum dolor sit
            </h2>
          </div>
        </div>
        <hr className='border-grey/25' />

        {/* SECOND ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className='flex h-full  w-full flex-col justify-center'>
            <h2
              className={cn(
                playfairDisplay.className,
                'text-6xl font-semibold uppercase'
              )}
            >
              Lorem
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[40px_0_40px_40px]'>
            <Image
              src='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              height={500}
              width={350}
              className='h-full w-full object-cover'
              alt='first-image'
            />
          </div>
          <div className='flex h-full w-full flex-col justify-center'>
            <h2 className='text-6xl font-semibold uppercase '>
              Lorem ipsum dolor
            </h2>
          </div>
        </div>
        <hr className='border-grey/25' />

        {/* THIRD ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[40%_auto] gap-20'>
          <div className='flex h-full w-full flex-col justify-center'>
            <h2 className='text-6xl font-semibold uppercase '>Lorem ipsum</h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0_40px_0_40px]'>
            <Image
              src='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              height={500}
              width={1260}
              className='h-full w-full object-cover'
              alt='first-image'
            />
          </div>
        </div>
        <hr className='border-grey/25' />

        {/* FOURTHROW */}
        <div className='grid h-[8rem] w-full grid-cols-[35%_auto] gap-20 '>
          <div className='h-full w-full overflow-hidden rounded-[40px_40px_40px_0]'>
            <Image
              src='https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              height={500}
              width={700}
              className='h-full w-full object-cover'
              alt='first-image'
            />
          </div>
          <div className='flex h-full w-full flex-col justify-center'>
            <h2 className='text-6xl font-semibold uppercase text-orange'>
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase '
                )}
              >
                Lorem
              </span>
              ipsum dolor sit
            </h2>
          </div>
        </div>

        <hr className='border-grey/25' />
      </div>
    </section>
  );
};

export default Hero;
