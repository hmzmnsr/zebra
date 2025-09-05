'use client';

import Image from 'next/image';

const ProcessSection = () => {
  return (
    <section className="py-8 md:pb-16 md:pt-44" style={{ backgroundColor: '#1b2926' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Block */}
          <div className="">
            <h3 className="text-[#fbfdfc] text-[20px] font-thin px-4 sm:px-8 lg:px-32">
            Il nostro processo
            </h3>
            <p className="text-[#fbfdfc] text-[48px] leading-none px-4 sm:px-8 lg:px-32 font-extralight">
            Ogni progetto è cucito su misura e prende vita grazie alla sinergia tra tecnica e creatività. Ti accompagniamo in ogni fase del progetto, trasformando la tua visione in un&apos;esperienza memorabile 
              </p>
          </div>

          {/* Right Content - Process List */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full">
              {/* Visione */}
              <div className="flex items-center py-2 pr-0 sm:pr-16 md:pr-32 lg:pr-64">
                <div className="w-8 sm:w-12 md:w-14 lg:w-16 h-6 flex items-center justify-center">
                  <Image
                    src="/assets/servizi1/l1.PNG"
                    alt="Visione icon"
                    width={33.33}
                    height={33.33}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-[32px] ml-4">Visione</span>
              </div>
              <div className="border-t border-white/70 ml-0 sm:ml-2 md:ml-3 lg:ml-4"></div>
              <div className='text-[#1b2926] text-md'>.</div>
              
              {/* Progettazione */}
              <div className="flex items-center py-2 pl-2 sm:pl-6 md:pl-10 lg:pl-14">
                <div className="w-6 h-6 mr-2 sm:mr-3 md:mr-4 flex items-center justify-center">
                  <Image
                    src="/assets/servizi1/l2.PNG"
                    alt="Progettazione icon"
                    width={33.33}
                    height={33.33}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-[32px] ml-4">Progettazione</span>
              </div>
              <div className="border-t border-white/70 ml-1 sm:ml-6 md:ml-10 lg:ml-13"></div>
              <div className='text-[#1b2926] text-md'>.</div>
              
              {/* Realizzazione */}
              <div className="flex items-center py-2 pl-4 sm:pl-12 md:pl-18 lg:pl-24">
                <div className="w-6 h-6 mr-2 sm:mr-3 md:mr-4 flex items-center justify-center">
                  <Image
                    src="/assets/servizi1/l3.PNG"
                    alt="Realizzazione icon"
                    width={33.33}
                    height={33.33}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-[32px] ml-4">Realizzazione</span>
              </div>
              <div className="border-t border-white/70 ml-2 sm:ml-10 md:ml-16 lg:ml-23"></div>
              <div className='text-[#1b2926] text-md'>.</div>
              
              {/* Supporto */}
              <div className="flex items-center py-2 pl-6 sm:pl-18 md:pl-26 lg:pl-34">
                <div className="w-6 h-6 mr-2 sm:mr-3 md:mr-4 flex items-center justify-center">
                  <Image
                    src="/assets/servizi1/l4.PNG"
                    alt="Supporto icon"
                    width={33.33}
                    height={33.33}
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-[32px] ml-4">Supporto</span>
              </div>
              <div className="border-t border-white/70 ml-3 sm:ml-14 md:ml-22 lg:ml-33"></div>
              <div className='text-[#1b2926] text-md'>.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 