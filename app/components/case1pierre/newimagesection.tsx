'use client';

import Image from 'next/image';

const NewImageSection = () => {
  return (
    <div className="w-full">
 {/* Second Section - Text on Left, Image on Right */}
 <div className="py-12 sm:py-16 md:py-16 lg:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-0">
            {/* Left Content - Text */}
            <div className="order-1 mb-8 lg:mb-0 pl-0 sm:pl-8 md:pl-16 lg:pl-24">
              <h3 className="text-[#082239] text-sm sm:text-md px-0 sm:px-4 md:px-6 lg:pr-32 mb-3 sm:mb-1" style={{ fontWeight: 420 }}>
              Un impegno che continua
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extralight text-[#082239] leading-none px-0 sm:px-4 md:px-6 lg:pr-32" style={{ fontWeight: 250 }}>
              ZEBRA ha curato la realizzazione del videomapping monumentale sul razzo, concepito per raccontare, la narrazione alla base della sfilata, culminata con un epilogo simbolico: il lancio verso lo spazio. 
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="order-2 flex justify-center lg:justify-start pl-0 sm:pl-4 md:pl-6 lg:pl-8">
              <Image
                src="/assets/case1pierra/3.png"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-108 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageSection; 