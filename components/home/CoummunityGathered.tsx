import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='relative flex h-full w-full items-center justify-center'>
        {/* MAIN ZONE */}
        <div className='relative h-[500px] w-[500px] bg-gray/20'>
          {/* LEFT ZONE */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-tl-[100px] '>
            <Image
              src='https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='mid-image'
              height={1200}
              width={720}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* MID ZONE */}
          <div className='absolute left-1/2 top-1/2 z-[3] h-[380px] w-[350px] -translate-x-1/2 -translate-y-1/2'>
            <Image
              src='https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='mid-image'
              height={1200}
              width={720}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* RIGHT ZONE */}
          <div className='absolute -bottom-[15%] -right-[25%] z-[2] h-[400px] w-[300px] overflow-hidden rounded-br-[100px] '>
            <Image
              src='https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='mid-image'
              height={1200}
              width={720}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* UPPER RIGHT TEXT */}
          <h2 className='headline-1 absolute -top-[15%] left-[40%] whitespace-nowrap font-semibold uppercase'>
            Join Vinca
          </h2>

          {/* BOTTOM LEFT TEXT */}
          <h2 className='headline-1 absolute -bottom-[15%] right-[40%] font-semibold uppercase'>
            community
          </h2>
        </div>

        {/* JOIN BUTTON */}
        <Link
          href='/sign-in'
          className='eoq group absolute bottom-0 right-[6%] z-10 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/80 backdrop-blur-lg hover:shadow-red/80'
        >
          <p className='z-30'>Join Now</p>
          <span className='eoq rounded-0 absolute bottom-0 left-0 right-0 top-full z-20 h-full w-full bg-red group-hover:top-1/2'></span>
          <span className='eoq rounded-0 absolute -top-full bottom-0 left-0 right-0 z-20 h-full w-full bg-red group-hover:-top-1/2'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
