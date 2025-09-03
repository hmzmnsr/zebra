'use client';

const CaseContent = () => {
  return (
    <section className="bg-[#FBFDFC] py-32">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Main Description */}
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-sans font-light">
                Attraverso una modellazione accurata, animazioni fluide e visual effects fotorealistici, abbiamo dato vita al prodotto evidenziandone materiali, dettagli costruttivi e funzionalità, anche attraverso efficaci comparazioni con i competitor.
              </p>
              
              <p className="text-base md:text-lg text-gray-800 leading-relaxed font-sans font-light">
                L&apos;intero progetto è stato curato nei minimi dettagli: il sound design, sincronizzato con le animazioni, valorizza le dinamiche del racconto; il background richiama l&apos;immagine coordinata del brand; mentre le text animation comunicano i dati tecnici in modo chiaro ed elegante, mantenendo uno stile essenziale e coinvolgente.
              </p>
            </div>
            
            {/* Right Column - CTA Button */}
            <div className="flex items-center justify-center lg:justify-end">
              <button className="bg-[#2d5016] hover:bg-[#1a2a28] text-white px-8 py-4 text-lg font-sans font-light transition-colors duration-300 border border-[#2d5016] hover:border-[#1a2a28]">
                Scopri di più
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseContent; 