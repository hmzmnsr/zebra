'use client';

import Image from 'next/image';

const ServiziFeature = () => {
  return (
    <section className="bg-[#FBFDFC]">
      <div className="max-w-8xl mx-auto">

                   {/* zero Section - Content Left, Image Right */}
          <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-16 flex flex-col h-[340px] md:h-[540px] order-1">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-gray-900">
                  3
                </h2>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                  Aula Immersiva
                </h3>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                 Trasforma qualsiasi ambiente in un aula immersiva ad alto impatto visivo, grazie a 3 o 4 videoproiettori che proiettano fino a 12 metri di base e 2 metri di altezza sulle pareti, senza strutture aggiuntive. Ideale per software didattici, scenari 3D interattivi, navigazione web e numerose applicazioni educative. 
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                  L installazione è semplice con proiettori a soffitto, impianto audio dedicato e MediaServer ARES per una gestione fluida e affidabile dei contenuti.
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                Il kit Aula Immersiva è personalizzabile in base alle dimensioni dello spazio disponibile.
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                Un esperienza che trasforma la lezione in un viaggio immersivo.
                </p>
              </div>
              
                             {/* Call to Action Button - Positioned at bottom right */}
                             <div className="text-center lg:text-right">
                 <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                   <span>Scopri di più</span>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </button>
               </div>
            </div>

                         {/* Right Side - Image */}
             <div className="relative lg:col-span-3 order-2">
               <Image
                 src="/assets/education/3.jpg"
                 alt="Ambienti collaborativi all&apos;avanguardia"
                 width={600}
                 height={400}
                 className="w-full h-[340px] md:h-[540px] object-cover shadow-lg"
                 priority
               />
             </div>
           </div>
         </div>

                 {/* First Section - Content Left, Image Right */}
         <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-16 flex flex-col h-[340px] md:h-[540px] order-1">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-gray-900">
                  4
                </h2>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                Aula Cinema
                </h3>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                Il Kit Cinema è una soluzione completa pensata per portare nelle scuole un esperienza audiovisiva di altissima qualità, ideale per laboratori dedicati al cinema ma perfettamente adattabile anche ad altre discipline grazie alla sua versatilità. 
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                Il sistema include uno schermo da 4 metri, un videoproiettore EPSON ad alte prestazioni e il mediaserver ARES con software di controllo integrato, per garantire una qualità d immagine eccezionale. A completare il kit, un impianto audio professionale, un manuale dettagliato per l installazione e la configurazione e tutti i cablaggi necessari. 
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                Grazie al software multilingua Mozaik incluso, il Kit Cinema può essere impiegato in attività didattiche trasversali, offrendo agli studenti un ambiente immersivo e coinvolgente in cui apprendere, creare e raccontare. Il supporto tecnico da remoto assicura inoltre la massima continuità operativa, permettendo alle scuole di lavorare in modo fluido e senza interruzioni. 
                </p>
              </div>
              
                             {/* Call to Action Button - Positioned at bottom right */}
                             <div className="text-center lg:text-right">
                 <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                   <span>Scopri di più</span>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </button>
               </div>
            </div>

                                                   {/* Right Side - Image */}
              <div className="relative lg:col-span-3 order-2">
                <Image
                  src="/assets/education/4.jpg"
                  alt="Soluzioni Multimediali Immersive"
                  width={600}
                  height={400}
                  className="w-full h-[340px] md:h-[540px] object-cover shadow-lg"
                  priority
                />
              </div>
          </div>
        </div>

                 {/* Second Section - Image Left, Content Right */}
         <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
             {/* Left Side - Image */}
             <div className="relative lg:col-span-3 order-2 lg:order-1">
               <Image
                 src="/assets/education/5.jpg"
                 alt="Ambienti collaborativi all&apos;avanguardia"
                 width={600}
                 height={400}
                 className="w-full h-[340px] md:h-[540px] object-cover shadow-lg"
                 priority
               />
             </div>

            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:mr-16 flex flex-col h-[340px] md:h-[540px] order-1 lg:order-2">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-gray-900">
                  5
                </h2>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                Kit Mapping
                </h3>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                Il kit Mapping ZEBRA è la soluzione completa dedicata alle scuole per sperimentare le arti visive e le tecniche di videomapping in modo semplice e professionale. 
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                Grazie al mediaserver ARES, dotato di software dedicato, e a due videoproiettori EPSON, è possibile proiettare su oggetti, pareti o scenografie, esplorando la digital art e la creatività multimediale.Tutto il sistema, completo di cablaggi e accessori, è alloggiato in un pratico flight case antiurto, facile da trasportare e pronto all uso. 
                </p>
              </div>
              
                             {/* Call to Action Button - Positioned at bottom right */}
                             <div className="text-center lg:text-right">
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

                     {/* third Section - Content Left, Image Right */}
           <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-16 flex flex-col h-[340px] md:h-[540px] order-1">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-gray-900">
                  6
                </h2>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                Soluzioni Custom
                </h3>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                Progettiamo ambienti multimediali evoluti, su misura per auditorium, aule magne e sale conferenze. Utilizziamo grandi schermi curvi, proiezioni su superfici esistenti e integriamo telecamere, microfoni, impianti audio, presenter wireless e ogni tecnologia necessaria per creare esperienze di presentazione e collaborazione coinvolgenti, efficaci e spettacolari. 
                </p>
              </div>
              
                             {/* Call to Action Button - Positioned at bottom right */}
                             <div className="text-center lg:text-right">
                 <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                   <span>Scopri di più</span>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </button>
               </div>
          </div>

                                           {/* Right Side - Image */}
            <div className="relative lg:col-span-3 order-2">
              <Image
                src="/assets/education/6.jpg"
                alt="Soluzioni Multimediali Immersive"
                width={600}
                height={400}
                className="w-full h-[340px] md:h-[540px] object-cover shadow-lg"
                priority
              />
            </div>
        </div>
        </div>

                 {/* Second Section - Image Left, Content Right */}
         <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
                           {/* Left Side - Image */}
              <div className="relative lg:col-span-3 order-2 lg:order-1">
                <Image
                  src="/assets/education/7.jpg"
                  alt="Ambienti collaborativi all&apos;avanguardia"
                  width={600}
                  height={400}
                  className="w-full h-[340px] md:h-[540px] object-cover shadow-lg"
                  priority
                />
              </div>

            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:mr-16 flex flex-col h-[340px] md:h-[540px] order-1 lg:order-2">
              {/* Project Header */}
              <div className="space-y-2 flex-1">
                <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-gray-900">
                  7
                </h2>
                <h3 style={{ fontWeight: 250 }} className="text-xl md:text-2xl lg:text-4xl text-gray-700">
                ITS: Immersive Teaching System
                </h3>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                l nostro prodotto immersivo più conosciuto: uno spazio di proiezione panoramica di oltre 6 metri di base che permette di insegnare entrando letteralmente nella materia. 
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-2">
                L intera superficie è interattiva, trasformando ogni lezione in un esperienza dinamica e partecipativa. 

                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                Già adottato da oltre 500 scuole in tutta Italia, è dotato di un vastissimo repertorio di scenari 3D multilingua, pensati per rendere ogni lezione interattiva, coinvolgente e indimenticabile. 
                </p>
                <p style={{ fontWeight: 407 }} className="text-gray-600 leading-none text-sm md:text-base mt-4 md:mt-8">
                Il supporto tecnico da remoto incluso garantisce massima continuità operativa in ogni momento. 
                </p>
              </div>
              
                             {/* Call to Action Button - Positioned at bottom right */}
                             <div className="text-center lg:text-right">
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
      </div>
    </section>
  );
};

export default ServiziFeature; 