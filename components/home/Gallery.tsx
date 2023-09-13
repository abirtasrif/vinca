import SectionTitle from '../shared/SectionTitle';

const Gallery = () => {
  return (
    <section className='min-h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full w-full'>
        <SectionTitle
          subTitle='gallery'
          title='A visual glimpse of our beauties'
          color='bg-orange'
        />

        {/* GRID MAIN */}
        <div className='gallery-grid-parent h-screen w-full gap-10'>
          <div className='grid-child-1 h-full w-full border'></div>
          <div className='grid-child-2 h-full w-full border'></div>
          <div className='grid-child-3 h-full w-full border'></div>
          <div className='grid-child-4 h-full w-full border'></div>
          <div className='grid-child-5 h-full w-full border'></div>
          <div className='grid-child-6 h-full w-full border'></div>
          <div className='grid-child-7 h-full w-full border'></div>
          <div className='grid-child-8 h-full w-full border'></div>
          <div className='grid-child-9 h-full w-full border'></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
