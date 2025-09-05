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
          Immersive Runway Pierre Cardin
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
          Un lanciatore spaziale, una maison leggendaria, l&apos;Agenzia Spaziale Europea e la visione creativa di ZEBRA. 


          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans font-thin">
          Da questo connubio è nato uno degli eventi più spettacolari e audaci degli ultimi anni: due sfilate gemelle firmate Pierre Cardin, andate in scena a Parigi e nella Guyana Francese, all&apos;ombra dell&apos;iconico razzo Ariane 5. 


          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 