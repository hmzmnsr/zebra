'use client';

const ChiSiamoHero = () => {
  return (
    <section className="bg-[#FBFDFC] text-[#083933] h-[864px] relative flex flex-col">
      {/* Matte overlay */}
      <div className="absolute inset-0 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-66">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col sm:flex-row sm:items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans mr-0 sm:mr-4 mb-4 sm:mb-0 text-[#083933]">
            Chi siamo
          </h1>
          <div className="hidden sm:block flex-1 h-px bg-[#083933]"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-16 mb-16">
          <span className="text-xs sm:text-sm text-[#083933]">La nostra storia</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-6xl space-y-6 sm:space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-[#083933] leading-none font-sans mt-14">
          ZEBRA è una azienda specializzata nella creazione di soluzioni multimediali avanzate<br className="hidden sm:block"/> integrando contenuto e digital media technology.
          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-sm sm:text-base md:text-xl text-[#083933] leading-none font-sans">

          </p>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoHero; 