'use client';

import Image from 'next/image';

const NewImageSection = () => {
  return (
    <div className="w-full">
 {/* Second Section - Text on Left, Image on Right */}
 <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content - Text */}
            <div className="order-1 mb-8 lg:mb-0 pl-24">
              <h3 className="text-black text-md font-thin leading-extralight px-4 sm:px-6 lg:pr-32">
              Gestione centralizzata, semplice ed intuitiva
              </h3>
              <p className="text-4xl md:text-5xl lg:text-3xl font-extralight text-black leading-tight px-4 sm:px-6 lg:pr-32">
              Il tutto è gestito tramite un&apos;interfaccia intuitiva da tablet, che consente di attivare l&apos;intero sistema conference in pochi secondi, semplificando l&apos;avvio di ogni riunione e migliorando l&apos;efficienza operativa. 
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="order-2 flex justify-center lg:justify-start pl-8">
              <Image
                src="/assets/case1beta/3.png"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-108 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewImageSection; 