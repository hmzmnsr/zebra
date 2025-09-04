'use client';

import Image from 'next/image';

const InnovationSection = () => {
  return (
    <section className="pb-8 pt-6 md:pb-16 md:pt-12" style={{ background: 'linear-gradient(to bottom, #47515a, #2b2b2e)' }}>
      <div className="relative h-px bg-gray-400 ml-88 top-20"></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start pl-4">
            <Image
              src="/assets/servizi3/3.png"
              alt="Innovazione coinvolgente - ambiente collaborativo immersivo"
              width={800}
              height={600}
              className="w-full h-[60vh] object-cover"
            />
          </div>

          {/* Right Content - Text Block */}
          <div className="">
            <h3 className="text-gray-300 text-md font-normal px-4 sm:px-8 lg:px-32">
              Un cambio di paradigma negli ambienti di lavoro
            </h3>
            <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-extralight leading-tight px-4 sm:px-8 lg:px-32 mb-8">
              Innovazione coinvolgente
            </h2>
            
           
            <p className="text-white text-sm leading-tight px-4 sm:px-8 lg:px-32 font-normal">
              Costruiamo spazi multimediali progettati per stimolare creatività e collaborazione, integrando tecnologie visive e interattive di ultima generazione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection; 