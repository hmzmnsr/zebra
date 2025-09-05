'use client';

import Image from 'next/image';

const InnovationSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <section className="relative pb-8 md:pb-16 pt-8 md:pt-48" style={{ background: 'linear-gradient(to bottom, #083933, #09332E, #72ABA3)' }}>
        {/* First horizontal line - positioned absolutely */}
        <div className="absolute left-116 right-0 top-56 h-px bg-gray-400"></div>
        

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
            {/* Left Content - Text Block */}
            <div className="order-2 lg:order-1">
                             <h3 className="text-gray-300 px-2 md:px-4 sm:px-8 lg:px-32" style={{ fontSize: '32px', fontWeight: 434 }}>
                 Chi siamo
               </h3>
                             <p className="text-white leading-none px-2 md:px-4 sm:px-8 lg:px-32 mt-4 md:mt-8" style={{ fontSize: '20px', fontWeight: 400 }}>
               ZEBRA è un&apos;azienda specializzata nella creazione di soluzioni multimediali avanzate integrando contenuto e digital media technology. 
               </p>
               <p className="text-white leading-none px-2 md:px-4 sm:px-8 lg:px-32 mt-3 md:mt-4" style={{ fontSize: '20px', fontWeight: 400 }}>
               Nata nel 2013 tra i pionieri del videomapping in Italia, ZEBRA ha rapidamente ampliato l&apos;applicazione delle tecnologie immersive ai settori museale e corporate, affermandosi come partner strategico di EPSON, leader mondiale nella videoproiezione. 
               </p>
               <p className="text-white leading-none px-2 md:px-4 sm:px-8 lg:px-32 mt-3 md:mt-4" style={{ fontSize: '20px', fontWeight: 400 }}>
               Nel tempo abbiamo iniziato a sviluppare e produrre internamente i nostri sistemi software ed hardware, tra cui ARES Media Engine, il nostro mediaserver proprietario per la gestione avanzata di infrastrutture multimediali. 
               </p>
               <p className="text-white leading-none px-2 md:px-4 sm:px-8 lg:px-32 mt-3 md:mt-4" style={{ fontSize: '20px', fontWeight: 400 }}>
               La crescita prosegue con l&apos;ingresso nel mondo dei brand e degli eventi internazionali, dove l&apos;immersività diventa strumento distintivo di comunicazione. 
               </p>
               <p className="text-white leading-none px-2 md:px-4 sm:px-8 lg:px-32 mt-3 md:mt-4" style={{ fontSize: '20px', fontWeight: 400 }}>
                Oggi operiamo, verso tutto il mondo, dalla nuova sede di Vicenza: uno spazio all&apos;avanguardia per design e sostenibilità, alimentato da fonti rinnovabili e progettato per offrire soluzioni tecnologiche a impatto ambientale quanto più possibile vicino allo zero. 
               </p>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end pr-2 md:pr-32 order-1 lg:order-2">
              <Image
                src="/assets/homepage/cvr1.jpg"
                alt="Innovazione coinvolgente - ambiente collaborativo immersivo"
                width={782}
                height={474}
                className="object-cover"
                style={{ width: '782px', height: '474px' }}
              />
                         </div>
           </div>
         </div>
         
         {/* Second horizontal line - positioned absolutely */}
         <div className="absolute left-0 right-0 h-px bg-gray-300" style={{ bottom: '2%' }}></div>

      </section>
    </>
  );
};

export default InnovationSection; 