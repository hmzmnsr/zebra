'use client';

const ProdottiHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white py-48 relative">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-4xl md:text-6xl font-sans text-white mr-4">
            Prodotti
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-base md:text-xl text-gray-100 leading-none font-sans">
            Produciamo mediaserver di controllo in grado di gestire qualsiasi infrastruttura multimediale: ARES Media Engine.
          </p>
          
          {/* Second Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-base md:text-xl text-gray-100 leading-none font-sans">
            A seconda dell&apos;applicazione, ogni mediaserver è corredato dai nostri software proprietari, sviluppati internamente per garantire massima efficienza e integrazione.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProdottiHero; 