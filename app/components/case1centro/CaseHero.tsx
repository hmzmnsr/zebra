'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#282b3e] to-[#363c49] text-white py-32 sm:py-40 md:py-48 lg:py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans text-white mr-4">
             Sala Ulisse, Centro TOG Milano
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">progetti</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-base sm:text-lg md:text-xl text-gray-100 leading-none font-sans font-thin">
          Il Centro TOG di Milano è un&apos;eccellenza nel trattamento di bambini con disabilità cognitive e neurologiche, da sempre in prima linea nell&apos;adozione di approcci innovativi in campo terapeutico. 


          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-base sm:text-lg md:text-xl text-gray-100 leading-none font-sans font-thin">
          ZEBRA ha scelto di diventare partner attivo del progetto, mettendo a disposizione le proprie competenze tecnologico-esperienziali. 

          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 