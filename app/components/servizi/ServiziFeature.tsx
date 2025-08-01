'use client';

import Image from 'next/image';

const ServiziFeature = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section - Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Left Side - Image */}
          <div className="relative lg:col-span-3 order-2 lg:order-1">
            <Image
              src="/assets/servisiz/1.jpg"
              alt="Soluzioni Multimediali Immersive"
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              priority
            />
          </div>
          
          {/* Right Side - Text Content */}
          <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:mr-16 flex flex-col justify-between min-h-[280px] md:h-[480px] order-1 lg:order-2">
            {/* Project Header */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-gray-900">
                1
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                Soluzioni Multimediali Immersive
              </h3>
              <p className="text-gray-600 leading-tight text-sm md:text-base mt-4 md:mt-8">
                Sistemi immersivi che avvolgono lo spettatore in un momento sensoriale unico, trasformando ogni ambiente in un viaggio emozionale capace di coinvolgere, stupire e lasciare un segno indelebile nella memoria.
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

        {/* Second Section - Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start mt-16">
          {/* Left Side - Text Content */}
          <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-16 flex flex-col justify-between min-h-[280px] md:h-[480px] order-1">
            {/* Project Header */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-gray-900">
                2
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                Ambienti collaborativi all'avanguardia
              </h3>
              <p className="text-gray-600 leading-tight text-sm md:text-base mt-4 md:mt-8">
              Spazi collaborativi all'avanguardia dove tecnologie multimediali ed immersive potenziano produttività e creatività, trasformando ogni riunione, presentazione o sessione di training in un'esperienza d'impatto altamente performante. 
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

          {/* Right Side - Image */}
          <div className="relative lg:col-span-3 order-2">
            <Image
              src="/assets/servisiz/2.jpg"
              alt="Ambienti collaborativi all'avanguardia"
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiziFeature; 