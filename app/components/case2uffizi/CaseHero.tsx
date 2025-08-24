'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white py-44 sm:py-48 md:py-48 lg:py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline mb-4 sm:mb-2 mt-4 sm:mt-6 md:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-sans text-white mr-0 md:mr-4 mb-3 sm:mb-2 md:mb-0 leading-tight">
          Il Codice Leicester: Galleria degli Uffizi
          </h1>
          <div className="hidden md:block flex-1 h-px bg-gray-500"></div>
        </div>
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-sans text-white mr-0 md:mr-4 mb-8 sm:mb-12 md:mb-24">
        
        </h2>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-4 sm:space-y-0 md:space-y-0">
          {/* First Paragraph */}
          <p className="text-sm sm:text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed md:leading-tight font-sans font-thin">
          In occasione della mostra "Il Codice Leicester" di Leonardo da Vinci, la Galleria degli Uffizi di<br/> Firenze ha coinvolto il team ZEBRA nella progettazione e realizzazione di exhibit digitali<br/> interattivi per immergere i visitatori nell&apos;universo visionario del genio toscano. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 