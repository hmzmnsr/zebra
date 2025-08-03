'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden mt-[70px] md:mt-0 h-[calc(100vh-70px)] md:h-auto">
      {/* Background Image */}
      <div className="relative h-full">
        <Image
          src="/assets/homepage/sec1.png"
          alt="Hero Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center md:items-end justify-center z-10 px-4 md:px-8 mb-0 md:mb-24">
          <div className="text-center text-white max-w-4xl w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin mb-4 md:mb-6 leading-tight px-2 md:px-0">
              Creiamo esperienze<br className="hidden sm:block"/> immersive memorabili
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed px-2 md:px-0">
              Diamo forma a visioni ambiziose trasformandole in <br className="hidden sm:block"/> soluzioni multimediali su misura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 