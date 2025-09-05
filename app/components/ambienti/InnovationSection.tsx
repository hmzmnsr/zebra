'use client';

import Image from 'next/image';

const InnovationSection = () => {
  return (
    <section className="pb-8 pt-6 md:pb-16 md:pt-12" style={{ background: 'linear-gradient(to bottom, #47515a, #2b2b2e)' }}>
      <div className="relative h-px bg-gray-400 ml-88 top-28"></div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start pl-4">
            <Image
              src="/assets/servizi3/3.png"
              alt="Innovazione coinvolgente - ambiente collaborativo immersivo"
              width={1098}
              height={564}
              className="w-full h-[564px] object-cover"
            />
          </div>

          {/* Right Content - Text Block */}
          <div className="flex flex-col justify-center">
            <h3 className="text-gray-300 text-[20px] font-normal px-4 sm:px-8 lg:px-32">
              Un cambio di paradigma negli ambienti di lavoro
            </h3>
            <h2 className="text-white text-[48px] font-extralight leading-none px-4 sm:px-8 lg:px-32 mb-8">
              Innovazione coinvolgente
            </h2>
            
           
            <p className="text-white text-[20px] leading-tight px-4 sm:px-8 lg:px-32 font-normal sm:mt-0 lg:mt-24">
              Costruiamo spazi multimediali progettati per stimolare creatività e collaborazione, integrando tecnologie visive e interattive di ultima generazione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection; 