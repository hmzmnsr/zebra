'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-[#FBFDFC] px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-none">
          <h3 className="text-[#082239] text-xs leading-none mb-2 sm:mb-3" style={{ fontWeight: 400 }}>
          Conoscere, provare, credere
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#082239] leading-none" style={{ fontWeight: 250 }}>
          L&apos;esperienza è il nuovo<br/> vantaggio competitivo
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
          Il colosso della meccanizzazione agricola AGCO ha affidato a ZEBRA e Mosaico una doppia sfida: realizzare un simulatore per la trebbia di punta IDEAL e progettare un demo center esperienziale capace di trasmettere il know-how e l&apos;identità del brand.<br/>
 Per il simulatore, abbiamo sviluppato un sistema visuale immersivo che replica con precisione il lavoro in campo, utilizzando la cabina reale della trebbia come superficie di proiezione e centro di comando. Questo strumento innovativo, pensato per la formazione di clienti e forza vendita, viene utilizzato in eventi internazionali, permettendo di testare il prodotto senza uscire dalla sala o dalla fiera. 
          </div>
          <div className="text-[#082239] text-sm leading-none pl-0 sm:pl-8 md:pl-16 lg:pl-20" style={{ fontWeight: 400 }}>
          Parallelamente, presso l&apos;AGCO Agridome di Breganze, abbiamo creato un percorso immersivo che guida il visitatore attraverso tutte le fasi di sviluppo del prodotto – dalla prototipazione al rilascio. Sale immersive, supporti digitali interattivi e videomapping su mockup trasformano la visita in un&apos;esperienza coinvolgente e memorabile, pensata per rafforzare il legame con il marchio e valorizzare l&apos;eccellenza tecnologica del gruppo AGCO. 
          </div>
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 