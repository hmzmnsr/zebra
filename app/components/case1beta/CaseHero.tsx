'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#282b3e] to-[#363c49] text-white pt-24 md:pt-48 pb-16 md:pb-32 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline mb-2 mt-6 md:mt-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-sans text-white mr-0 md:mr-4 mb-2 md:mb-0">
            Beta Sala CDA
          </h1>
          <div className="hidden md:block flex-1 h-px bg-gray-500"></div>
        </div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-sans text-white mr-0 md:mr-4 mb-12 md:mb-24">
        
        </h2>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-4 md:space-y-4">
          {/* First Paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed md:leading-tight font-sans font-thin">
          All&apos;interno dei nuovi headquarters di Beta Utensili, abbiamo progettato un sistema tecnologico su misura per la Sala del Consiglio di Amministrazione: un ambiente strategico.

          </p>
          
          {/* Second Paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed md:leading-tight font-sans font-thin">
           Ogni dettaglio, dalla qualità audio-video al controllo da tablet, è pensato per garantire riunioni fluide, presentazioni efficaci e una comunicazione impeccabile con i partecipanti da remoto — il tutto in un contesto di forte impatto estetico e simbolico.

          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 