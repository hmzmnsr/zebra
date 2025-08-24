'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-16 sm:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-8 sm:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight">
          Conoscere, provare, credere
          </h3>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          L&apos;esperienza è il nuovo<br/> vantaggio competitivo
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20 lg:mt-24">
          <div className="text-black text-sm leading-tight">
          Il colosso della meccanizzazione agricola AGCO ha affidato a ZEBRA e Mosaico una doppia sfida: realizzare un simulatore per la trebbia di punta IDEAL e progettare un demo center esperienziale capace di trasmettere il know-how e l&apos;identità del brand.<br/>
Per il simulatore, abbiamo sviluppato un sistema visuale immersivo che replica con precisione il lavoro in campo, utilizzando la cabina reale della trebbia come superficie di proiezione e centro di comando. Questo strumento innovativo, pensato per la formazione di clienti e forza vendita, viene utilizzato in eventi internazionali, permettendo di testare il prodotto senza uscire dalla sala o dalla fiera. 
          </div>
          <div className="text-black text-sm leading-tight pl-20">
          Parallelamente, presso l&apos;AGCO Agridome di Breganze, abbiamo creato un percorso immersivo che guida il visitatore attraverso tutte le fasi di sviluppo del prodotto – dalla prototipazione al rilascio. Sale immersive, supporti digitali interattivi e videomapping su mockup trasformano la visita in un&apos;esperienza coinvolgente e memorabile, pensata per rafforzare il legame con il marchio e valorizzare l&apos;eccellenza tecnologica del gruppo AGCO. 
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