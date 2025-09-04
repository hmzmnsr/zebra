'use client';

import Image from 'next/image';

const InnovationSection = () => {
  return (
    <>
    <div className="relative h-px bg-gray-500 ml-136 top-28"></div>
      {/* First Section - Text on Left, Image on Right */}
      <section className="pb-8 pt-6 md:pb-16 md:pt-12" style={{ background: 'linear-gradient(to bottom, #1b2926, #252727)' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Text Block */}
            <div className="order-2 lg:order-1">
              <h3 className="text-gray-300 text-md font-thin px-4 sm:px-8 lg:px-32">
              Racconti da vivere
              </h3>
                             <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-thin leading-tight px-4 sm:px-8 lg:px-32 mb-8">
               Storytelling immersivi
               </h2>
               
              <p className="text-white text-sm leading-tight px-4 sm:px-8 lg:px-32 font-thin">
               Creiamo esperienze immersive che stupiscono il pubblico attraverso storytelling multisensoriali personalizzati. 
<br/>
<br/>
Dal concept iniziale alla creazione dei contenuti, fino alla realizzazione finale e allassistenza post-lancio: un viaggio emozionale completo, pensato per rendere lesperienza un ricordo straordinario. 
<br/>
<br/>
Per showroom, musei, stand fieristici, eventi, product reveal e contesti educativi. 
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
      <section className="pb-8 pt-6 md:pb-16 md:pt-12 bg-[linear-gradient(to_bottom,#252727_70%,white_70%)]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              Nuove forme di terapia
              </h3>
              <h2 className="text-white text-4xl md:text-5xl lg:text-4xl font-thin leading-tight px-4 sm:px-8 lg:pl-32 mb-8">
              Soluzioni medico-terapeutiche
              </h2>
              
              <p className="text-white text-sm leading-tight px-4 sm:px-8 lg:px-32 font-thin">
              Progettiamo ed implementiamo sistemi immersivi avanzati per il settore medico, supportando ospedali, centri di riabilitazione e strutture terapeutiche con soluzioni innovative che arricchiscono lesperienza dei pazienti. Grazie allimmersività, offriamo ai terapeuti nuovi strumenti per potenziare le cure, migliorando il benessere psicologico dei pazienti durante il trattamento e favorendone una maggiore efficacia. 
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-px bg-gray-500 right-18 bottom-88"></div>
      </section>
      
    </>
  );
};

export default InnovationSection; 