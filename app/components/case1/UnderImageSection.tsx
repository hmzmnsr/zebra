'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 lg:pb-32 bg-white px-4 sm:px-6 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight">
          Tecnologia al servizio del gusto.
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          Terreni diversi, identità uniche,<br/> vini d&apos;eccellenza.
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-black text-sm leading-tight">
          Due cantine, due splendidi territori, una sola visione: raccontare con autenticità e bellezza la profonda connessione tra luogo, cultura e vino.<br/><br/> Le realtà vinicole di Tenimenti Leone (Lazio) e Podere Guardia Grande (Sardegna), parte del gruppo Oniverse, si sono affidate a ZEBRA per creare esperienze immersive capaci di trasportare i visitatori nell&apos;anima dei propri territori.
          </div>
          <div className="text-black text-sm leading-tight pl-0 sm:pl-0 md:pl-20">
          Il lavoro è partito dalla costruzione del concept narrativo, sviluppato per valorizzare le specificità di ciascun contesto: le colline vulcaniche di Lanuvio e i paesaggi salmastri di Alghero.<br/><br/> Abbiamo prodotto contenuti video su misura, curato l&apos;installazione delle tecnologie immersive e disegnato un flusso esperienziale coerente con l&apos;identità delle cantine.
          </div>
          <div className="text-black text-sm leading-tight">
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 