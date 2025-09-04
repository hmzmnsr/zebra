'use client';

const SviluppoHero = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white py-54 relative" style={{ backgroundImage: 'url(/assets/servizi4/1.jpg)' }}>
      {/* Black layer */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Matte overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      
      <div className="px-4 sm:px-6 lg:px-3 relative z-10">
        {/* Header Title with divider line next to it */}
        <div className="flex items-baseline mb-8">
          <h1 style={{ fontWeight: 300 }} className="text-4xl md:text-6xl font-sans text-[#fbfdff] mr-4">
            Sviluppo applicazioni
          </h1>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="hidden md:flex justify-end -mt-8 mb-6">
          <span className="text-xs sm:text-sm text-[#fbfdff]">Soluzioni e servizi</span>
        </div>
        
        {/* Body Text - Two paragraphs with generous line spacing */}
        <div className="max-w-5xl space-y-8">
          {/* First Paragraph */}
          <p style={{ fontWeight: 300 }} className="text-base md:text-xl text-[#fbfdff] leading-none font-sans">
          Sviluppiamo software personalizzati con un approccio completo: dal design UX/UI allo sviluppo<br/> di applicazioni, anche mobile.<br/> Interfacce di controllo intuitive e integrazione di automazioni, per soluzioni che semplificano i <br/>processi e valorizzano l&apos;esperienza utente. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default SviluppoHero; 