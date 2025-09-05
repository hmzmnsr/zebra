'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white h-[864px] relative flex flex-col">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-auto">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8 mt-12">
          <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans text-white mr-4">
          EPSON Booth ISE Barcellona
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
          In occasione della fiera ISE di Barcellona, il nostro partner strategico EPSON, leader mondiale nella videoproiezione, ci ha affidato la progettazione e realizzazione del suo stand immersivo: uno spazio concepito per esaltare versatilità e qualità delle soluzioni di videoproiezione firmate EPSON.
          <br/>
          <br/>
          </p>
          <p style={{ fontWeight: 300 }} className="text-[32px] text-gray-100 leading-none font-sans font-thin">
          Dalla fase di concept creativo alla gestione tecnica in loco, ZEBRA ha curato ogni aspetto della realizzazione, trasformando lo stand in una vera e propria opera immersiva ad altissima risoluzione, animata da un racconto digitale coinvolgente, creato per omaggiare la città di Barcellona e i grandi maestri della pittura spagnola. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 