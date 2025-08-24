'use client';

import Image from 'next/image';

const NewImageSection = () => {
  return (
    <div className="w-full">
 {/* Second Section - Image on Left, Text on Right */}
 <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-0 sm:pr-4 lg:pr-8 mb-6 sm:mb-8 lg:mb-0">
              <Image
                src="/assets/case2uffizi/13.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-108 shadow-lg"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-0 sm:pl-4 lg:pl-8">
              <h3 className="text-black text-sm sm:text-md font-thin leading-extralight px-0 sm:px-4 lg:pl-20">
              Immersi nel pensiero di Leonardo
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extralight text-black leading-tight px-0 sm:px-4 lg:pl-20">
              Un&apos;interfaccia interattiva ha<br/> permesso di sfogliare<br/> virtualmente le pagine originali<br/> del Codice, con traduzioni e<br/> approfondimenti in tempo reale,<br/> rendendo comprensibile e<br/> accessibile un documento di<br/> enorme complessità.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageSection; 