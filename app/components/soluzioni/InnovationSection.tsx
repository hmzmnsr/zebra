'use client';

import Image from 'next/image';

const InnovationSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <section className="pb-16 pt-12" style={{ background: 'linear-gradient(to bottom, #1b2926, #252727)' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Text Block */}
            <div className="order-2 lg:order-1">
              <h3 className="text-gray-300 text-md font-thin px-4 sm:px-8 lg:px-32">
                Un cambio di paradigma negli ambienti di lavoro
              </h3>
              <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-thin leading-tight px-4 sm:px-8 lg:px-32 mb-4">
                Innovazione coinvolgente
              </h2>
              <div className="w-16 h-px bg-white mb-6 mx-4 sm:mx-8 lg:mx-32"></div>
              <p className="text-white text-sm leading-tight px-4 sm:px-8 lg:px-32 font-thin">
                Costruiamo spazi multimediali progettati per stimolare creatività e collaborazione, integrando tecnologie visive e interattive di ultima generazione.
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end pr-4 order-1 lg:order-2">
              <Image
                src="/assets/servizi1/3.jpg"
                alt="Innovazione coinvolgente - ambiente collaborativo immersivo"
                width={800}
                height={600}
                className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-108"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Image on Left, Text on Right */}
      <section className="pb-16 pt-12" style={{ backgroundColor: '#252727' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Image */}
            <div className="flex justify-center lg:justify-start pl-4 order-1">
              <Image
                src="/assets/servizi1/4.jpg"
                alt="Innovazione coinvolgente - ambiente collaborativo immersivo"
                width={800}
                height={600}
                className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-108"
              />
            </div>

            {/* Right Content - Text Block */}
            <div className="order-2">
              <h3 className="text-gray-300 text-md font-thin px-4 sm:px-8 lg:px-32">
                Un cambio di paradigma negli ambienti di lavoro
              </h3>
              <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-thin leading-tight px-4 sm:px-8 lg:px-32 mb-4">
                Innovazione coinvolgente
              </h2>
              <div className="w-16 h-px bg-white mb-6 mx-4 sm:mx-8 lg:mx-32"></div>
              <p className="text-white text-sm leading-tight px-4 sm:px-8 lg:px-32 font-thin">
                Costruiamo spazi multimediali progettati per stimolare creatività e collaborazione, integrando tecnologie visive e interattive di ultima generazione.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovationSection; 