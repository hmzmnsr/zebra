'use client';

const ContattiHero = () => {
  return (
    <section className="bg-[#222222] text-white h-[864px] relative flex flex-col">
    {/* Matte overlay */}
    <div className="absolute inset-0  mix-blend-multiply"></div>
    
    <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-auto">
      {/* Header Title with divider line next to it */}
      <div className="flex items-baseline mb-8">
        <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans text-white mr-4">
        Contatti
        </h1>
        <div className="flex-1 h-px bg-gray-500"></div>
      </div>
      
      {/* Body Text - Two paragraphs with generous line spacing */}
      <div className="max-w-6xl pt-8 pb-16">
        {/* First Paragraph */}
        <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans">
        Se hai una visione, siamo pronti ad ascoltarla. Contattaci. Il resto lo costruiremo insieme.
        </p>
        
      </div>
    </div>
  </section>
  );
};

export default ContattiHero; 