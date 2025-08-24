'use client';

const CaseHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white pt-24 md:pt-48 pb-16 md:pb-32 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline mb-2 mt-6 md:mt-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-sans text-white mr-0 md:mr-4 mb-2 md:mb-0">
          EPSON Booth ISE Barcellona
          </h1>
          <div className="hidden md:block flex-1 h-px bg-gray-500"></div>
        </div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-sans text-white mr-0 md:mr-4 mb-12 md:mb-24">
        </h2>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-3 md:space-y-2">
          {/* First Paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed md:leading-tight font-sans font-thin">
          In occasione della fiera ISE di Barcellona, il nostro partner strategico EPSON, leader mondiale nella videoproiezione, ci ha affidato la progettazione e realizzazione del suo stand immersivo: uno spazio concepito per esaltare versatilità e qualità delle soluzioni di videoproiezione firmate EPSON.
          <br/>
          <br/>
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed md:leading-tight font-sans font-thin">
          Dalla fase di concept creativo alla gestione tecnica in loco, ZEBRA ha curato ogni aspetto della realizzazione, trasformando lo stand in una vera e propria opera immersiva ad altissima risoluzione, animata da un racconto digitale coinvolgente, creato per omaggiare la città di Barcellona e i grandi maestri della pittura spagnola. 


          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero; 