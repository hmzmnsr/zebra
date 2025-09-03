'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 lg:pb-32 bg-white px-4 sm:px-6 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-none">
          <h3 className="text-[#082239] text-xs leading-none" style={{ fontWeight: 400 }}>
           Tecnologia al servizio del gusto.
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#082239] leading-none" style={{ fontWeight: 250 }}>
           Terreni diversi, identità uniche,<br/> vini d&apos;eccellenza.
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
           Due cantine, due splendidi territori, una sola visione: raccontare con autenticità e bellezza la profonda connessione tra luogo, cultura e vino.<br/><br/> Le realtà vinicole di Tenimenti Leone (Lazio) e Podere Guardia Grande (Sardegna), parte del gruppo Oniverse, si sono affidate a ZEBRA per creare esperienze immersive capaci di trasportare i visitatori nell&apos;anima dei propri territori.
          </div>
          <div className="text-[#082239] text-sm leading-none pl-0 sm:pl-0 md:pl-20" style={{ fontWeight: 400 }}>
           Il lavoro è partito dalla costruzione del concept narrativo, sviluppato per valorizzare le specificità di ciascun contesto: le colline vulcaniche di Lanuvio e i paesaggi salmastri di Alghero.<br/><br/> Abbiamo prodotto contenuti video su misura, curato l&apos;installazione delle tecnologie immersive e disegnato un flusso esperienziale coerente con l&apos;identità delle cantine.
          </div>
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 