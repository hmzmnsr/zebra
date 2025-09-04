'use client';

import Image from 'next/image';

const SoftwareProductsSection = () => {
  return (
    <section className="bg-[#FBFDFC] text-white pb-16">
      <div className="max-w-8xl mx-auto px-8">
        {/* Two-column layout for software products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Panel 1: EVA Digital Signage */}
          <div className="transition-transform duration-300 flex flex-col items-center">
            {/* Software Interface Screenshot */}
            <div className="w-full h-128 mb-6 flex items-center justify-end bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative overflow-hidden rounded-lg">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
                src="/assets/prodotti/6.png"
                alt="EVA Digital Signage Software Interface"
                width={2000}
                height={1500}
                className="w-full h-full object-cover scale-125 relative z-10 -mr-32 pt-20"
                quality={95}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-[#083933] font-light">
                EVA Digital Signage
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#083933] text-[#083933] rounded-full hover:border-[#083933] hover:text-[#083933] transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-[#2d5016] mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3">
            <p className="text-md text-[#083933] leading-6 text-left font-normal">
              La soluzione software di ZEBRA dedicata al digital signage: una piattaforma semplice e intuitiva per gestire, con un solo click, la comunicazione su monitor, ledwall e videoproiettori. 
              </p>
              <p className="text-md text-[#083933] leading-6 text-left font-normal">
              Consente di controllare in modo pratico e centralizzato il palinsesto, scegliendo cosa trasmettere e quando farlo, anche da remoto. 
              </p>
              <p className="text-md text-[#083933] leading-6 text-left font-normal">
              Integrato con il controller ARES, EVA permette la gestione di uno o più output, automatizzando completamente il funzionamento, compresi accensione e spegnimento dei dispositivi. 
              </p>
              <p className="text-md text-[#083933] leading-6 text-left font-normal">
              È dotato di una base cloud evoluta, progettata per garantire i più alti standard di sicurezza contro intrusioni e manomissioni esterne. 
              </p>
            </div>
          </div>

          {/* Panel 2: Chrono Interfaccia di controllo */}
          <div className="transition-transform duration-300 flex flex-col items-center">
            {/* Software Interface Screenshot */}
            <div className="w-full h-128 mb-6 flex items-center justify-end bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative overflow-hidden rounded-lg">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
  src="/assets/prodotti/7.png"
  alt="Chrono Control Interface Software"
  width={2000}
  height={1500}
  className="w-full h-full object-cover scale-125 relative z-10 -mr-32 pt-20"
  quality={95}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-[#083933] font-light">
                Chrono Interfaccia di controllo
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#083933] text-[#083933] rounded-full hover:border-[#083933] hover:text-[#083933] transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-[#2d5016] mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3">
              <p className="text-md text-[#083933] leading-6 text-left font-normal">
              E' il software che consente ai mediaserver ARES di controllare qualsiasi dispositivo ad essi connesso. 
              </p>
              <p className="text-md text-[#083933] leading-6 text-left font-normal">
              Estremamente flessibile e configurabile, si adatta a diversi contesti applicativi fungendo da domotica evoluta, permettendo ad ARES di dialogare e gestire ogni componente del sistema multimediale, comprese luci, tende, automazioni e dispositivi collegati. Grazie all'interfaccia tablet, con ZNC tutti i controlli dell'impianto sono sempre a portata di mano, in modo semplice, intuitivo e personalizzabile. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareProductsSection; 