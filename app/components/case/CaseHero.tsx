'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white py-44 sm:py-48 md:py-48 lg:py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline mb-4 sm:mb-2 mt-4 sm:mt-6 md:mt-10">
          <h1 style={{ fontWeight: 300 }} className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-sans text-white mr-0 md:mr-4 mb-3 sm:mb-2 md:mb-0 leading-tight">
          Beta Utensili Oil less campaign
          </h1>
          <div className="hidden md:block flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-2 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">progetti</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-4 sm:space-y-3 md:space-y-2">
          {/* First Paragraph */}
          <br/>

          <p style={{ fontWeight: 300 }} className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-100 leading-none font-sans font-thin">
          Per presentare il nuovo avvitatore Oil-Less, Beta Utensili ha scelto un formato capace di unire precisione tecnica e forte impatto visivo: un video 3D pensato per una diffusione multicanale dai social alle fiere, fino alle presentazioni promo e al canale YouTube.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 