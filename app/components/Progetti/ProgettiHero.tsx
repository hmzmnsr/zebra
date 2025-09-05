'use client';

const ProgettiHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#282b3e] to-[#363c49] text-white h-[864px] relative flex flex-col">
      {/* Matte overlay */}
      <div className="absolute inset-0  mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-auto">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans text-white mr-4">
            Progetti
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">Progetti</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-6xl space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans">
            Una selezione delle nostre realizzazioni più significative.
          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans">
          Esperienze, contenuti e tecnologie: dalle immersive room al 3D, alcune delle nostre creazioni<br/> più rappresentative nei diversi ambiti applicative.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgettiHero; 