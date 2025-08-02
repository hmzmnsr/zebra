'use client';

import Image from 'next/image';

const ProcessSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#1b2926' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Block */}
          <div className="">
            <h3 className="text-gray-300 text-md font-thin px-4 sm:px-8 lg:px-32">
              Il nostro processo
            </h3>
            <p className="text-white text-xl leading-tight px-4 sm:px-8 lg:px-32 font-thin">
            Ci occupiamo di ogni fase del progetto garantendo qualità superiore, innovazione estetica e tempistiche certe. I nostri lavori sono pensati per comunicare in modo stupefacente, valorizzando prodotti e aziende tramite contenuti ottimizzati per tutti i canali.
              </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/servizi3/2.PNG"
              alt="Process illustration"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 