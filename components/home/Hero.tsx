import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full  grid grid-rows-6">
        {/* FIRST ROW */}
        <div className="w-full h-full bg-green"></div>

        {/* SECOND ROW */}
        <div className="w-full h-full grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0_40px_0_40px]">
            <Image
              src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={600}
              className="w-full h-full object-cover"
              alt="first-image"
            />
          </div>

          <div className="w-full h-full  flex flex-col justify-center">
            <h2 className="text-6xl uppercase font-semibold">
              Lorem ipsum dolor sit
            </h2>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="w-full h-full grid grid-cols-[25%_auto_50%] gap-20  ">
          <div className="w-full h-full  flex flex-col justify-center">
            <h2 className="text-6xl uppercase font-semibold">Lorem</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[40px_0_65px_40px]">
            <Image
              src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={500}
              width={300}
              className="w-full h-full object-cover"
              alt="first-image"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-6xl uppercase font-semibold ">
              Lorem ipsum dolor
            </h2>
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className="w-full h-full bg-yellow-300 grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full bg-lime-400"></div>
          <div className="w-full h-full bg-light"></div>
        </div>

        {/* FIFTH ROW */}
        <div className="w-full h-full bg-blue grid grid-cols-[35%_auto_45%] gap-20">
          <div className="w-full h-full bg-rose-400"></div>
          <div className="w-full h-full bg-lime-400"></div>
          <div className="w-full h-full bg-light"></div>
        </div>

        {/* LAST ROW */}
        <div className="w-full h-full bg-green"></div>
      </div>
    </section>
  );
};

export default Hero;
