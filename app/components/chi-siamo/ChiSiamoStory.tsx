'use client';

import Image from 'next/image';

const ChiSiamoStory = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Text Content (50% width) */}
          <div className="flex flex-col justify-center items-center h-64 sm:h-96 space-y-6 sm:space-y-8 px-4 sm:px-12 lg:px-24">
            {/* Heading */}

            
            {/* Body Text */}
            <div className="w-full">
            <h2 className="text-xl sm:text-2xl md:text-xl font-sans text-gray-800 text-left w-full">
              La nostra storia
            </h2>
              <p className="text-sm sm:text-base md:text-3xl text-gray-800 font-medium leading-tight font-sans text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          
          {/* Right Column - Visual Content (50% width) */}
          <div className="relative">
            {/* Horizontal line extending from text column */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gray-300 transform -translate-x-full lg:translate-x-0"></div>
            
            {/* Image */}
            <div className="relative h-64 sm:h-96">
              <Image
                src="/assets/chisiamo/first.jpg"
                alt="ZEBRA immersive display experience"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoStory; 