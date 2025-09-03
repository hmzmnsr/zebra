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
                src="/assets/case2oniverse/3.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-108 shadow-lg"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-0 sm:pl-4 lg:pl-8">
              <h3 className="text-[#082239] text-sm sm:text-md px-0 sm:px-4 lg:pl-20 mb-3 sm:mb-1" style={{ fontWeight: 420 }}>
              Vino, terra e racconto.
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extralight text-[#082239] leading-none px-0 sm:px-4 lg:pl-20" style={{ fontWeight: 250 }}>
              Ne sono nati due percorsi<br/> sensoriali che accompagnano<br/> l&apos;ospite in un racconto fatto di<br/> immagini, suoni e atmosfere,<br/> rafforzando il legame emotivo <br/>con il luogo e offrendo<br/> un&apos;introduzione memorabile<br/> all&apos;esperienza enologica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageSection; 