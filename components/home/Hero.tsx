const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-full bg-red grid grid-rows-6">
        {/* FIRST ROW */}
        <div className="w-full h-full bg-green"></div>

        {/* SECOND ROW */}
        <div className="w-full h-full bg-blue grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full bg-rose-400"></div>
        </div>

        {/* THIRD ROW */}
        <div className="w-full h-full bg-blue grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full bg-rose-400"></div>
          <div className="w-full h-full bg-lime-400"></div>
          <div className="w-full h-full bg-light"></div>
        </div>

        {/* FOURTH ROW */}
        <div className="w-full h-full bg-dark"></div>

        {/* FIFTH ROW */}
        <div className="w-full h-full bg-orange"></div>

        {/* LAST ROW */}
        <div className="w-full h-full bg-green"></div>
      </div>
    </section>
  );
};

export default Hero;
