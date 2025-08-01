'use client';

const ProduzioneHero = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white py-48 relative" style={{ backgroundImage: 'url(/assets/servizi2/1.png)' }}>
      {/* Black layer */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 className="text-4xl md:text-6xl font-sans text-white mr-4">
            Produzione contenuti
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-4xl space-y-8">
          {/* First Paragraph */}
          <p className="text-base md:text-lg text-gray-100 leading-relaxed font-sans">
            Produzioni A-V pensate per comunicare in modo stupefacente, valorizzando prodotti e aziende tramite contenuti ottimizzati per canali social, YouTube, siti web e spot televisivi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProduzioneHero; 