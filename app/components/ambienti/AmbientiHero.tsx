'use client';

const AmbientiHero = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white h-[864px] relative flex flex-col" style={{ backgroundImage: 'url(/assets/servizi3/1.jpg)' }}>
      
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-auto">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans text-white mr-4">
            Ambienti collaborativi all&apos;avanguardia
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">Soluzioni e servizi</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-6xl space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans">
          Creiamo ambienti che trasformano il modo di collaborare. Non semplici sale riunioni, ma infrastrutture multimediali flessibili capaci di potenziare la produttività: dalla presentazione al design thinking, dal training alla conferenza, ogni esperienza diventa più chiara, interattiva e condivisa. 

          </p>
        </div>
      </div>
    </section>
  );
};

export default AmbientiHero; 