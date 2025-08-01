'use client';

import Image from 'next/image';

const SoftwareProductsSection = () => {
  return (
    <section className="bg-[#f5f5f5] text-white pb-16">
      <div className="max-w-8xl mx-auto px-8">
        {/* Two-column layout for software products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Panel 1: EVA Digital Signage */}
          <div className="transition-transform duration-300 flex flex-col items-center">
            {/* Product Image with gradient background */}
            <div className="w-full h-120 mb-6 flex items-center justify-center bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
                src="/assets/prodotti/4.png"
                alt="EVA Digital Signage"
                width={300}
                height={220}
                className="w-auto h-60 object-contain relative z-10"
              />
            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-[#2d5016]">
                EVA Digital Signage
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#CCCCCC] text-[#CCCCCC] rounded-full hover:border-[#2d5016] hover:text-[#2d5016] transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-[#2d5016] mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3">
              <p className="text-sm text-[#2d5016] leading-6 text-left">
                Software ZEBRA per digital signage, semplice e intuitivo per la gestione della comunicazione su monitor, ledwall e videoproiettori con un solo click. Permette il controllo pratico e centralizzato degli orari, scegliendo cosa trasmettere e quando, anche da remoto.
              </p>
              <p className="text-sm text-[#2d5016] leading-6 text-left">
                Si integra con ARES controller, permettendo la gestione di una o più uscite e automatizzando le funzioni dei dispositivi, incluso l'accensione/spegnimento. La soluzione è costruita su una base cloud avanzata, progettata per alta sicurezza contro intrusioni esterne e manomissioni.
              </p>
            </div>
          </div>

          {/* Panel 2: Chrono Interfaccia di controllo */}
          <div className="transition-transform duration-300 flex flex-col items-center">
            {/* Product Image with gradient background */}
            <div className="w-full h-120 mb-6 flex items-center justify-center bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
                src="/assets/prodotti/5.png"
                alt="Chrono Interfaccia di controllo"
                width={300}
                height={220}
                className="w-auto h-60 object-contain relative z-10"
              />
            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-[#2d5016]">
                Chrono Interfaccia di controllo
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#CCCCCC] text-[#CCCCCC] rounded-full hover:border-[#2d5016] hover:text-[#2d5016] transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-[#2d5016] mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3">
              <p className="text-sm text-[#2d5016] leading-6 text-left">
                Software che permette ai mediaserver ARES di controllare qualsiasi dispositivo connesso. Altamente flessibile e configurabile, si adatta ai più diversi contesti applicativi, funzionando come domotica avanzata.
              </p>
              <p className="text-sm text-[#2d5016] leading-6 text-left">
                Permette ad ARES di comunicare e gestire ogni componente di un sistema multimediale: luci, tapparelle, automazioni e dispositivi connessi. Grazie all'interfaccia tablet con ZNC, tutti i controlli del sistema sono facilmente accessibili, semplici, intuitivi e personalizzabili.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProductsSection; 