'use client';

import Image from 'next/image';

const ProcessSection = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#47515a' }}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Block */}
          <div className="">
            <h3 className="text-gray-300 text-md font-thin px-4 sm:px-8 lg:px-32">
              Il nostro processo
            </h3>
            <p className="text-white text-xl leading-tight px-4 sm:px-8 lg:px-32 font-thin">
            Ogni progetto è personalizzato: dal concept alla configurazione tecnica, curiamo ogni dettaglio per creare spazi che non sono semplici aree per riunioni, ma strumenti evoluti di collaborazione e apprendimento. 
              </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/servizi2/2.PNG"
              alt="Process illustration"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 