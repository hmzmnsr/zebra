'use client';

import Image from 'next/image';

const ChiSiamoFeatures = () => {
  return (
    <section className="bg-[#FBFDFC] text-[#083933] py-12 md:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Text Content (3/5 width = 60%) */}
          <div className="lg:col-span-3 flex flex-col justify-start  space-y-4 sm:space-y-2 px-4 sm:px-12 mt-8 sm:mt-12">
            
            {/* Small text */}
            <p className="text-xs sm:text-sm text-[#083933]">
              with the brand&apos;s signature orange.
            </p>
            
            {/* Main heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans text-[#083933] font-medium">
              Lorem ipsum dolor sit amet,
            </h2>
            
            {/* Large number and text */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center space-y-4 sm:space-x-4 mt-8 sm:mt-12">
              <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#083933]">+100%</span>
              <div className="space-y-2 text-xs sm:text-sm text-[#083933]">
                <p>Di auto produzione energetica</p>
                <p>Forniamo gestione remota, supporto al nostro hardware ovunque</p>
                <p>si trovi nel mondo</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Content (2/5 width = 40%) */}
          <div className="lg:col-span-2 relative">
            {/* Image */}
            <div className="relative h-[40vh] sm:h-[50vh]">
              <Image
                src="/assets/chisiamo/first.jpg"
                alt="ZEBRA immersive display experience"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoFeatures; 