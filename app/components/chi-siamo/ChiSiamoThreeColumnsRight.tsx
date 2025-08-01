'use client';

import Image from 'next/image';

const ChiSiamoThreeColumnsRight = () => {
  return (
    <section className="bg-white py-12 md:py-2">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-1">
            {/* Small text */}
            <p className="text-xs sm:text-sm text-gray-600">
              with the brand's signature orange.
            </p>
            
            {/* Main heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans text-gray-800 font-medium">
              Lorem ipsum dolor sit amet,
            </h2>
            
            {/* Body text blocks */}
            <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-36">
              {/* First text block */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  For IBM's latest Linux platform launch, we created a launch film that brought a fresh, playful energy to the hardware.
                </p>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  To celebrate the platform's signature openness, we leaned into an original song (inspired by a reference) for an invitation few could resist—capped with the brand's signature orange.
                </p>
              </div>
            </div>
          </div>
          
          {/* Second Column - Additional Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 mt-12 sm:mt-48">
            {/* Additional content can be added here */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                For IBM's latest Linux platform launch, we created a launch film that brought a fresh, playful energy to the hardware.
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                To celebrate the platform's signature openness, we leaned into an original song (inspired by a reference) for an invitation few could resist—capped with the brand's signature orange.
              </p>
            </div>
          </div>
          
          {/* Third Column - Image */}
          <div className="relative m-8 sm:m-16">
            <div className="relative">
               <Image
                 src="/assets/chisiamo/uncle1.jpg"
                 alt="Elderly man with blue sweater and orange collar"
                 width={400}
                 height={600}
                 className="object-cover rounded-lg w-full h-auto"
                 priority
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoThreeColumnsRight; 