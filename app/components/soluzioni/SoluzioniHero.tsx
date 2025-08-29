'use client';

const SoluzioniHero = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white py-48 relative" style={{ backgroundImage: 'url(/assets/servizi1/1.jpg)' }}>
      {/* Black layer */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 className="text-4xl md:text-6xl font-sans text-white mr-4">
            Soluzioni multimediali immersive
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-gray-300">Soluzioni e servizi</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-8">
          {/* First Paragraph */}
          <p className="text-base md:text-lg text-gray-100 leading-relaxed font-sans">
            Diamo vita a spazi che comunicano, emozionano e trasformano la percezione. Tramite tecnologie all&apos;avanguardia e una visione creativa, creiamo ambienti immersivi che uniscono mondo digitale e fisico, trasportando il pubblico oltre i confini dell&apos;immaginazione.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoluzioniHero; 