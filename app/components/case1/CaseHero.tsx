'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white py-40 sm:py-40 md:py-48 lg:py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline mb-4 sm:mb-2 mt-4 sm:mt-6 md:mt-10">
          <h1 style={{ fontWeight: 300 }} className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-sans text-white mr-0 md:mr-4 mb-3 sm:mb-2 md:mb-0 leading-tight">
            Cantine Oniverse (Gruppo Calzedonia)
          </h1>
          <div className="hidden md:block flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-2 mb-12">
          <span className="text-xs sm:text-sm text-gray-300">progetti</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-4 sm:space-y-0 md:space-y-0">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-100 leading-none font-sans font-thin">
          Dai suoli vulcanici di Lanuvio a quelli carichi di salsedine di Alghero, le cantine Tenimenti Leone e Podere Guardia Grande, parte del gruppo Oniverse (Calzedonia), hanno scelto ZEBRA per raccontare il valore dei propri luoghi attraverso storytelling immersivi ad alto impatto emozionale.<br/><br/>
          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-100 leading-none font-sans font-thin">
          Dal concept narrativo alla produzione video, fino all&apos;installazione delle tecnologie immersive, abbiamo curato l&apos;intero percorso esperienziale, creando due viaggi sensoriali. Due racconti visivi che fondono territorio, cultura e prodotto, pensati per rafforzare il legame emotivo tra l&apos;ospite e l&apos;identità delle cantine.

          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 