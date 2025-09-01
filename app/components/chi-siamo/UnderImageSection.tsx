'use client';

const UnderImageSection = () => {
  return (
    <div className="pt-16 pb-8 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-4 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight">
          Un vettore verso l&apos;innovazione
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          Il nostro percorso
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-black text-sm leading-tight">
          Nel tempo abbiamo iniziato a sviluppare e produrre internamente i nostri sistemi software ed hardware, tra cui ARES Media Engine: il nostro mediaserver proprietario per la gestione avanzata di infrastrutture multimediali. <br/>La crescita prosegue con l&apos;ingresso nel mondo dei brand e degli eventi internazionali, dove l&apos;immersività diventa strumento distintivo di comunicazione. 


          </div>
          <div className="text-black text-sm leading-tight pl-0 sm:pl-8 md:pl-16 lg:pl-20">
          Oggi operiamo, verso tutto il mondo, dalla nuova sede di Vicenza: uno spazio all&apos;avanguardia per design e sostenibilità, alimentato da fonti rinnovabili e progettato per offrire soluzioni tecnologiche a impatto ambientale quanto più possibile vicino allo zero. 

          </div>
          <div className="text-black text-sm leading-tight">
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 