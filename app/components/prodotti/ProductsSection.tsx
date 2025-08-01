'use client';

import Image from 'next/image';

const ProductsSection = () => {
  return (
    <section className="bg-[#282d2c] text-white pb-16">
      <div className="max-w-8xl mx-auto px-8">
        {/* Three-column layout for products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          
          {/* Panel 1: ARES Controller */}
          <div className="shadow-lg transition-transform duration-300 flex flex-col items-center">
            {/* Product Image with gradient background */}
            <div className="w-full h-120 mb-6 flex items-center justify-center bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
                src="/assets/prodotti/1.png"
                alt="ARES Controller"
                width={300}
                height={220}
                className="w-auto h-60 object-contain relative z-10"
              />
            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-white">
                ARES Controller
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#CCCCCC] text-[#CCCCCC] rounded-full hover:border-white hover:text-white transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-white mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3 ">
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                Il più compatto della famiglia ARES, ma con una potenza che non teme confronti. Pensato per la gestione del digital signage in contesti ad alta intensità operativa: display e ledwall per aeroporti, stadi, centri commerciali e retail.
              </p>
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                ARES Controller, combinato al software EVA, automatizza completamente la gestione del digital signage, lasciando all'utente solo il compito di programmare la sequenza dei contenuti e definire gli orari di riproduzione. E' comandabile in modo semplice e intuitivo, sia da desktop che da dispositivi mobile.
              </p>
            </div>
          </div>

          {/* Panel 2: ARES Media Engine */}
          <div className="shadow-lg transition-transform duration-300 flex flex-col items-center">
            {/* Product Image with gradient background */}
            <div className="w-full h-120 mb-6 flex items-center justify-center bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
                src="/assets/prodotti/2.png"
                alt="ARES Media Engine"
                width={300}
                height={220}
                className="w-auto h-60 object-contain relative z-10"
              />
            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-white">
                ARES Media Engine
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#CCCCCC] text-[#CCCCCC] rounded-full hover:border-white hover:text-white transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-white mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3">
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                Il mediaserver più diffuso per la gestione di sistemi multimediali complessi, dalle sale immersive museali ai grandi videomapping architetturali.
              </p>
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                Grazie a una potenza e un'affidabilità straordinarie, ARES Media Engine è l'unità di controllo ideale per applicazioni che richiedono alto numero di uscite, grandi risoluzioni, acquisizioni video e di sensori e distribuzione audio multicanale.
              </p>
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                ARES automatizza l'intero funzionamento degli impianti multimediali, grazie alla perfetta integrazione con i principali sistemi di controllo e al supporto del software proprietario ZNC.
              </p>
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                Addio a procedure complesse e controlli intricati: con l'interfaccia tablet personalizzabile, gestire un sistema multimediale non è mai stato così semplice.
              </p>
            </div>
          </div>

          {/* Panel 3: ARES Rig */}
          <div className="shadow-lg transition-transform duration-300 flex flex-col items-center">
            {/* Product Image with gradient background */}
            <div className="w-full h-120 mb-6 flex items-center justify-center bg-gradient-to-b from-[#CED7CB] to-[#4C64612B] relative">
              {/* Matte overlay */}
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              <Image
                src="/assets/prodotti/3.png"
                alt="ARES Rig"
                width={300}
                height={220}
                className="w-auto h-60 object-contain relative z-10"
              />
            </div>
            
            {/* Product Title and Button - Same Line */}
            <div className="w-full flex items-center justify-between mb-4">
              <h3 className="text-2xl text-white">
                ARES Rig
              </h3>
              <button className="h-7 px-3 text-sm bg-transparent border border-[#CCCCCC] text-[#CCCCCC] rounded-full hover:border-white hover:text-white transition-all duration-300">
                info.pdf
              </button>
            </div>
            
            {/* White line beneath title and button */}
            <div className="w-full h-px bg-white mb-4"></div>
            
            {/* Product Description */}
            <div className="space-y-3">
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                ARES Rig non è un semplice rack, ma un modulo integrato progettato per assicurare la massima connettività ed efficienza operativa ai nostri mediaserver.
              </p>
              <p className="text-sm text-[#D1D5DB] leading-6 text-left">
                Include tutto il necessario: gestione termica, switch gigabit, UPS, NAS, extender video e cablaggio organizzato in modo impeccabile. Una soluzione compatta e ordinata, pensata per garantire affidabilità e prestazioni senza compromessi, completamente personalizzabile in base alle specifiche esigenze del sistema multimediale a cui è connesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 