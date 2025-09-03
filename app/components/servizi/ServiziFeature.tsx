'use client';

import Image from 'next/image';

const ServiziFeature = () => {
  return (
    <section className="bg-[#FBFDFC] py-16">
      <div className="max-w-8xl mx-auto">
        {/* First Section - Image Left, Content Right */}
        <div className="bg-gray-100 rounded-lg mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start">
            {/* Left Side - Image */}
            <div className="relative lg:col-span-3 order-2 lg:order-1 px-4 md:px-6">
              <Image
                src="/assets/servisiz/11.jpg"
                alt="Soluzioni Multimediali Immersive"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
                priority
              />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:h-[480px] order-1 lg:order-2 px-6 md:px-16 pt-8 md:pt-8 pb-0 md:pb-0">
              {/* Project Header */}
              <div className="space-y-2">
                                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#083933]">
                   1
                 </h2>
                                  <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-[#083933]">
                   Soluzioni Multimediali Immersive
                 </h3>
                 <p style={{ fontWeight: 407 }} className="text-[#083933] leading-none text-sm md:text-base mt-4 md:mt-8">
                   Sistemi immersivi che avvolgono lo spettatore in un momento sensoriale unico, trasformando ogni ambiente in un viaggio emozionale capace di coinvolgere, stupire e lasciare un segno indelebile nella memoria.
                 </p>
               </div>
               
               {/* Call to Action Button - Positioned at bottom right */}
               <div className="text-center lg:text-right mt-auto">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Content Left, Image Right */}
        <div className="bg-gray-100 rounded-lg mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:h-[480px] order-1 px-6 md:px-16 pt-8 md:pt-8 pb-0 md:pb-0">
              {/* Project Header */}
              <div className="space-y-2">
                                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#083933]">
                   2
                 </h2>
                                  <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-[#083933]">
                   Ambienti collaborativi all&apos;avanguardia
                 </h3>
                 <p style={{ fontWeight: 407 }} className="text-[#083933] leading-none text-sm md:text-base mt-4 md:mt-8">
                 Spazi collaborativi all&apos;avanguardia dove tecnologie multimediali ed immersive potenziano produttività e creatività, trasformando ogni riunione, presentazione o sessione di training in un&apos;esperienza d&apos;impatto altamente performante. 
                 </p>
               </div>
               
               {/* Call to Action Button - Positioned at bottom right */}
               <div className="text-center lg:text-right mt-auto">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative lg:col-span-3 order-2 px-4 md:px-6">
              <Image
                src="/assets/servisiz/2.jpg"
                alt="Ambienti collaborativi all&apos;avanguardia"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiziFeature; 