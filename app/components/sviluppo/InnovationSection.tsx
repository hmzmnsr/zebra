'use client';

import Image from 'next/image';

const InnovationSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <section className="pb-16 pt-12 bg-gradient-to-b from-[#29292b] to-white from-50% to-50%">
      <div className="relative h-px bg-gray-500 ml-128 top-7"></div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Text Block */}
            <div className="order-2 lg:order-1">
              <h3 className="text-gray-300 text-md font-normal px-4 sm:px-8 lg:px-32">
              Semplicità e praticità
              </h3>
              <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-light leading-tight px-4 sm:px-8 lg:px-32 mb-4">
              UX-UI Design
              </h2>
              <p className="text-white text-sm leading-tight px-4 sm:px-8 lg:px-32 font-normal">
              Progettiamo interfacce belle da vedere e facili da usare, dove ogni elemento è studiato per migliorare l&apos;esperienza dell&apos;utente. Dall&apos;architettura delle informazioni al design visivo, curiamo ogni dettaglio per rendere l&apos;interazione intuitiva, accessibile ed efficace. 
              </p>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end pr-4 order-1 lg:order-2">
              <Image
                src="/assets/servizi4/31.png"
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
      <section className="pb-16 pt-12 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Image */}
            <div className="flex justify-center lg:justify-start pl-4 order-1">
              <Image
                src="/assets/servizi4/4.jpg"
                alt="Innovazione coinvolgente - ambiente collaborativo immersivo"
                width={800}
                height={600}
                className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-108"
              />
            </div>

            {/* Right Content - Text Block */}
            
            <div className="order-2">
              <h3 className="text-black text-md font-normal px-4 sm:px-8 lg:px-32">
              Soluzioni su misura
              </h3>
              <h2 className="text-black text-4xl md:text-5xl lg:text-4xl font-light leading-tight px-4 sm:px-8 lg:px-32 mb-4">
              Software development
              </h2>
              <div className="w-16 h-px bg-white mb-6 mx-4 sm:mx-8 lg:mx-32"></div>
              <p className="text-black text-sm leading-tight px-4 sm:px-8 lg:px-32 font-normal">
              Sviluppiamo applicazioni personalizzate, dai configuratori interattivi alle automazioni, dalle interfacce di controllo alle app per smartphone e tablet. Ogni soluzione è progettata su misura per rispondere a esigenze specifiche ed è facilmente integrabile con sistemi preesistenti 
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-px bg-gray-300 mr-58 bottom-80"></div>
      </section>
    </>
  );
};

export default InnovationSection; 