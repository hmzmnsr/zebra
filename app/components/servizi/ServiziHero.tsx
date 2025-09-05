'use client';

const ServiziHero = () => {
  return (
    <section className="bg-gradient-to-bl from-black via-[#1a2a28] to-[#4a6b65] text-white h-[864px] relative flex flex-col">
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10 my-auto">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-[88px] font-sans text-[#fbfdff] mr-4">
            Servizi
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-[#fbfdff]">I nostri servizi</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-6xl space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-[32px] text-[#fbfdff] leading-none font-sans">
          Immaginiamo e realizziamo esperienze che fondono tecnologia e design, creando mondi immersivi, spazi collaborativi e contenuti capaci di emozionare. Con il nostro software trasformiamo la complessità in soluzioni semplici e intuitive, per connettere persone, idee e strumenti in un flusso creativo senza confini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiziHero; 