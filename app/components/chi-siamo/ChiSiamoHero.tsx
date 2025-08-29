'use client';

const ChiSiamoHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#282b3e] to-[#363c49] text-white py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col sm:flex-row sm:items-baseline mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans text-white mr-0 sm:mr-4 mb-4 sm:mb-0">
            Chi siamo
          </h1>
          <div className="hidden sm:block flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">La nostra storia</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-5xl space-y-6 sm:space-y-8">
          {/* First Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed font-sans">
            Una selezione delle nostre realizzazioni più significative.
          </p>
          
          {/* Second Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed font-sans">
            Esperienze, contenuti e tecnologie: dalle immersive room al 3D, alcune delle nostre creazioni più rappresentative nei diversi ambiti applicativi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoHero; 