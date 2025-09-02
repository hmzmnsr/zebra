'use client';

import Image from 'next/image';

const ServiziContent = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-8xl mx-auto">
        {/* Third Section - Image Left, Content Right */}
        <div className="bg-gray-100 rounded-lg p-6 md:px-16 md:pt-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Image */}
            <div className="relative lg:col-span-3 order-2 lg:order-1">
              <Image
                src="/assets/servisiz/3.png"
                alt="Produzione contenuti"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover"
                priority
              />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:h-[480px] order-1 lg:order-2">
              {/* Project Header */}
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl text-gray-900">
                  3
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                  Produzione contenuti
                </h3>
                <p className="text-gray-600 leading-tight text-sm md:text-base mt-4 md:mt-8">
                Produzioni A-V pensate per comunicare in modo stupefacente, valorizzando prodotti e aziende tramite contenuti ottimizzati per canali social, YouTube, siti web e spot televisivi. 
                </p>
              </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center lg:text-right mt-4 lg:mt-0">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section - Image Left, Content Right */}
        <div className="bg-gray-100 rounded-lg p-6 md:px-16 md:pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Image */}
            <div className="relative lg:col-span-3 order-2 lg:order-1">
              <Image
                src="/assets/servisiz/12.png"
                alt="Software development"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover"
                priority
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:h-[480px] order-1 lg:order-2">
              {/* Project Header */}
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl text-gray-900">
                  4
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                  Software development
                </h3>
                <p className="text-gray-600 leading-tight text-sm md:text-base mt-4 md:mt-8">
                Software personalizzati con un approccio completo: dal design UX/UI allo sviluppo di applicazioni, anche mobile. Interfacce di controllo intuitive e integrazione di automazioni, per soluzioni che semplificano i processi e valorizzano l&apos;esperienza utente 
                </p>
              </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center lg:text-right mt-4 lg:mt-0">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
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

export default ServiziContent; 