'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#282b3e] to-[#363c49] text-white h-[864px] relative flex flex-col">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-auto">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans text-white mr-4">
             Sala Ulisse, Centro TOG Milano
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-16 mb-16">
          <span className="text-xs sm:text-sm text-gray-300">progetti</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-6xl space-y-6 sm:space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans font-thin">
          Il Centro TOG di Milano è un&apos;eccellenza nel trattamento di bambini con disabilità cognitive e neurologiche, da sempre in prima linea nell&apos;adozione di approcci innovativi in campo terapeutico. 


          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans font-thin">
          ZEBRA ha scelto di diventare partner attivo del progetto, mettendo a disposizione le proprie competenze tecnologico-esperienziali. 

          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 