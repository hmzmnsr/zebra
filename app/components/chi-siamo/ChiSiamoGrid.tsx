'use client';

import Image from 'next/image';

const ChiSiamoGrid = () => {
  return (
    <section className="bg-[#FBFDFC] text-[#083933] py-12 md:py-8">
      <div className="px-2 sm:px-4 lg:px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Row 1 - First 3 boxes */}
          <div className="relative h-48 sm:h-64 bg-black overflow-hidden">
            <Image
              src="/assets/chisiamo/allimages.png"
              alt="Dark cylindrical object with red line"
              fill
              className="object-cover"
              priority
            />
            {/* Red line overlay */}
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500"></div>
          </div>
          
          <div className="relative h-48 sm:h-64 bg-black overflow-hidden">
            <Image
              src="/assets/chisiamo/allimages.png"
              alt="Dark cylindrical object with red line"
              fill
              className="object-cover"
              priority
            />
            {/* Red line overlay */}
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500"></div>
          </div>
          
          <div className="relative h-48 sm:h-64 bg-black overflow-hidden">
            <Image
              src="/assets/chisiamo/allimages.png"
              alt="Dark cylindrical object with red line"
              fill
              className="object-cover"
              priority
            />
            {/* Red line overlay */}
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500"></div>
          </div>
          
          {/* Row 2 - Second 3 boxes */}
          <div className="relative h-48 sm:h-64 bg-black overflow-hidden">
            <Image
              src="/assets/chisiamo/allimages.png"
              alt="Dark cylindrical object with red line"
              fill
              className="object-cover"
              priority
            />
            {/* Red line overlay */}
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500"></div>
          </div>
          
          <div className="relative h-48 sm:h-64 bg-black overflow-hidden">
            <Image
              src="/assets/chisiamo/allimages.png"
              alt="Dark cylindrical object with red line"
              fill
              className="object-cover"
              priority
            />
            {/* Red line overlay */}
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500"></div>
          </div>
          
          <div className="relative h-48 sm:h-64 bg-black overflow-hidden">
            <Image
              src="/assets/chisiamo/allimages.png"
              alt="Dark cylindrical object with red line"
              fill
              className="object-cover"
              priority
            />
            {/* Red line overlay */}
            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoGrid; 