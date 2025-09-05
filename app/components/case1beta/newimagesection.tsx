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
              <h3 className="text-[#082239] text-[20px] px-0 sm:px-4 md:px-6 lg:pr-32 mb-3 sm:mb-1" style={{ fontWeight: 400 }}>
              Gestione centralizzata, semplice ed intuitiva
              </h3>
              <p className="text-[48px] text-[#082239] leading-none px-0 sm:px-4 md:px-6 lg:pr-32" style={{ fontWeight: 250 }}>
              Il tutto è gestito tramite un&apos;interfaccia intuitiva da tablet, che consente di attivare l&apos;intero sistema conference in pochi secondi, semplificando l&apos;avvio di ogni riunione e migliorando l&apos;efficienza operativa. 
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="order-2 flex justify-center lg:justify-start pl-0 sm:pl-4 md:pl-6 lg:pl-8">
              <Image
                src="/assets/case1beta/3.png"
                alt="Innovazione tecnologica"
                width={940}
                height={487}
                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageSection; 