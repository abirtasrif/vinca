import Image from 'next/image';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        {/* MAIN ZONE */}
        <div className='relative h-[500px] w-[500px] bg-gray'>
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
              src='https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
              src='https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='mid-image'
              height={1200}
              width={720}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
