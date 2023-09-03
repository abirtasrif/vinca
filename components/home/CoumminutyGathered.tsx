import Image from 'next/image';

const CoumminutyGathered = () => {
  return (
    <section className='my-20 min-h-screen bg-dark py-40'>
      <div className='wrapper flex h-full w-full items-center justify-center'>
        {/* SQUARE */}
        <div className='relative grid h-[1000px] w-[1000px] grid-cols-10'>
          {Array.from({ length: 100 })
            .fill(``)
            .map((_, index) => (
              // BLOCK OUTER
              <div
                key={index}
                className='group z-[3] h-full w-full overflow-hidden'
              >
                {/* BLOCK INNER */}
                <div className='eoq invisible h-full w-full bg-violet opacity-50 group-hover:visible group-hover:opacity-100'></div>
              </div>
            ))}
          {/* OVERLAY */}
          <div className='absolute bottom-0 left-0 right-0 top-0  z-[2] h-full w-full bg-dark/20'></div>

          {/* IMAGE */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden'>
            <Image
              alt='community-image'
              src='https://images.pexels.com/photos/14610788/pexels-photo-14610788.jpeg'
              width={1920}
              height={1920}
              priority
            />
          </div>

          {/* UPPER LEFT */}
          <div className='absolute -left-[12%] top-[10%] z-[4] w-3/5 text-5xl text-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore
            ea tempora harum accusamus quas perferendis impedit magnam nam odit.
          </div>
          {/* LOWER RIGHT */}
          <div className='absolute -right-[12%] bottom-[10%] z-[4] w-3/5 text-5xl text-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore
            ea tempora harum accusamus quas perferendis impedit magnam nam odit.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoumminutyGathered;
