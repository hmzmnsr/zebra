'use client';

import Image from 'next/image';

const ChiSiamoStory = () => {
  return (
    <section className="bg-[#FBFDFC] text-[#083933] py-0 md:py-16">
      <div className="px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Visual Content (50% width) */}
          <div className="relative">
            {/* Horizontal line extending from text column */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gray-300 transform -translate-x-full lg:translate-x-0"></div>
            
            {/* Image */}
            <div className="relative h-64 sm:h-96">
              <Image
                src="/assets/chisiamo/first.jpg"
                alt="ZEBRA immersive display experience"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text Content (50% width) */}
          <div className="flex flex-col justify-start items-start h-64 sm:h-96 space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-6 lg:px-24">
            {/* Heading */}

            
            {/* Body Text */}
            <div className="w-full">
            <h2 className="text-xl sm:text-2xl md:text-xl font-sans text-[#083933] text-left w-full" style={{ fontWeight: 400 }}>
              La nostra storia
            </h2>
              <p className="text-sm sm:text-base md:text-3xl text-[#083933] leading-tight font-sans text-left" style={{ fontWeight: 350 }}>
              Nata nel 2013 tra i pionieri del videomapping in Italia, ZEBRA ha rapidamente ampliato l&apos;applicazione delle tecnologie immersive ai settori museale e corporate, affermandosi come partner strategico di EPSON, leader mondiale nella videoproiezione. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoStory; 