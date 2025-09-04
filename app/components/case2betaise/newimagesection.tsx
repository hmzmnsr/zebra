'use client';

import Image from 'next/image';

const NewImageSection = () => {
  return (
    <div className="w-full">
 {/* Second Section - Image on Left, Text on Right */}
 <div className="py-12 sm:py-16 md:py-16 lg:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-0">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-0 sm:pr-4 md:pr-6 lg:pr-8 mb-8 lg:mb-0">
              <Image
                src="/assets/case2betaise/img1.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] object-cover shadow-lg"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-0 sm:pl-4 md:pl-6 lg:pl-8">
              <h3 className="text-[#082239] text-sm sm:text-md px-0 sm:px-4 md:px-6 lg:pl-16 mb-3 sm:mb-1" style={{ fontWeight: 420 }}>
              Tecnologia immersiva per raccontare, coinvolgere, vincere
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extralight text-[#082239] leading-none px-0 sm:px-4 md:px-6 lg:pl-16" style={{ fontWeight: 250 }}>
              Un&apos;esperienza visiva<br/> emozionante, visitata da migliaia <br/> di persone, che ha permesso a <br/> EPSON di aggiudicarsi il premio <br/> come miglior stand della <br/> manifestazione. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageSection; 