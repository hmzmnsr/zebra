'use client';

import Image from 'next/image';

const NewImageSection = () => {
  return (
    <div className="w-full">
 {/* Second Section - Image on Left, Text on Right */}
 <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-8 mb-8 lg:mb-0">
              <Image
                src="/assets/case2betaise/img1.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-108 shadow-lg"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-8">
              <h3 className="text-black text-md font-thin leading-extralight px-4 sm:px-6 lg:pl-16">
              Tecnologia immersiva per raccontare, coinvolgere, vincere
              </h3>
              <p className="text-4xl md:text-5xl lg:text-3xl font-extralight text-black leading-tight px-4 sm:px-6 lg:pl-16">
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