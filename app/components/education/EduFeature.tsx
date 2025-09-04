'use client';

import Image from 'next/image';

const EduFeature = () => {
  return (
    <section className="bg-[#FBFDFC]">
      <div className="max-w-8xl mx-auto">

        {/* First Section - Image Left, Content Right */}
        <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Image */}
            <div className="relative lg:col-span-3 order-2 lg:order-1">
              <Image
                src="/assets/education/1.png"
                alt="Soluzioni Multimediali Immersive"
                width={600}
                height={400}
                className="w-full h-[45vh] md:h-[70vh] object-cover shadow-lg"
                priority
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col h-[45vh] md:h-[70vh] order-1 lg:order-2">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 className="text-lg md:text-xl text-gray-900">
                  1
                </h2>
                {/* Logo */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <Image
                    src="/assets/education/logo.webp"
                    alt="ZEBRA Logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                    priority
                  />
                </div>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-3xl text-[#082239]">
                 Kit di simulazione per laboratori
                </h3>
                <p style={{ fontWeight: 400 }} className="text-[#082239] leading-none text-sm md:text-base mt-4 md:mt-8">
                  <span style={{ fontWeight: 500 }}>SYM LAB</span> è il kit di simulazione immersiva di ZEBRA, progettato per trasformare la formazione in esperienza. Permette di ricreare attività pratiche in modo realistico e coinvolgente: dalla guida di mezzi industriali alla progettazione, dal design di moda alla manutenzione tecnica.
                </p>
                <p style={{ fontWeight: 500 }} className="text-[#082239] leading-none text-sm md:text-base mt-4 md:mt-8">
                  <span style={{ fontWeight: 500 }}>Tecnologia integrata:</span>
                </p>
                <ul className="text-gray-600 leading-none text-sm md:text-base mt-2 space-y-1 list-disc list-inside pl-4">
                  <li>Schermo curvo con proiezione ad alta risoluzione</li>
                  <li><span style={{ fontWeight: 500 }}>MediaServer ARES</span> per la gestione delle simulazioni</li>
                  <li>Postazione regolabile con telecamera integrata</li>
                  <li>Seduta e comandi dedicati per scenari specifici</li>
                </ul>
                <p style={{ fontWeight: 400 }} className="text-[#082239] leading-none text-sm md:text-base mt-4 md:mt-4">
                  Con <span style={{ fontWeight: 500 }}>SYM LAB</span>, teoria e pratica si incontrano in un ambiente sicuro, dinamico e altamente formativo: la soluzione ideale per scuole, aziende e centri professionali.
                </p>
              </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center lg:text-right">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span className='text-[#082239]'>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Image Left, Content Right */}
        <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Image */}
            <div className="relative lg:col-span-3 order-2 lg:order-1">
              <Image
                src="/assets/education/2.png"
                alt="Ambienti collaborativi all&apos;avanguardia"
                width={600}
                height={400}
                className="w-full h-[45vh] md:h-[70vh] object-cover shadow-lg"
                priority
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col h-[45vh] md:h-[70vh] order-1 lg:order-2">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 className="text-lg md:text-xl text-gray-900">
                  2
                </h2>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-[#082239]">
                  Simulatori professionali per laboratori
                </h3>
                <p style={{ fontWeight: 400 }} className="text-[#082239] leading-none text-sm md:text-base mt-4 md:mt-8">
                  Progettiamo e realizziamo simulatori <span style={{ fontWeight: 500 }}>professionali ad alte prestazioni per laboratori scolastici e formativi</span>, pensati per offrire un esperienza realistica e coinvolgente in qualsiasi ambito applicativo. 
                </p>
                <p className="text-gray-600 leading-tight text-sm md:text-base mt-4 md:mt-5">
                  <span style={{ fontWeight: 500 }}>Ogni simulatore è personalizzato</span>, completamente <span style={{ fontWeight: 500 }}>configurabile</span> nelle dimensioni, nei comandi e nel software, così da rispondere ad ogni esigenza didattica. 
                </p>
                <p style={{ fontWeight: 400 }} className="text-[#082239] leading-none text-sm md:text-base mt-4 md:mt-5">
                  Dai simulatori di volo a quelli navali, fino alle simulazioni di macchine agricole e industriali, <span style={{ fontWeight: 500 }}>ogni sistema è dotato di tecnologie di visualizzazione all avanguardia</span> per garantire un apprendimento pratico, immersivo e professionale. 
                </p>
              </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center lg:text-right">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span className='text-[#082239]'>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EduFeature; 