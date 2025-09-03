'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-none">
          <h3 className="text-[#082239] text-xs leading-none mb-2 sm:mb-3" style={{ fontWeight: 400 }}>
          Comunicare concetti in modo chiaro e impattante
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#082239] leading-none" style={{ fontWeight: 250 }}>
          Lo spazio come strumento
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
          La tecnologia ZEBRA è il cuore di questo ambiente immersivo: un sistema avanzato nella configurazione ma estremamente intuitivo nell&apos;utilizzo. Uno spazio polivalente, dove la collaborazione si fonde con l&apos;interattività, migliorando le performance operative. Uno strumento sorprendente, capace di coinvolgere il cliente in presentazioni immersive e comunicare concetti in modo chiaro, impattante e memorabile. 

          </div>
          <div className="text-[#082239] text-sm leading-none pl-0 sm:pl-8 md:pl-16 lg:pl-20" style={{ fontWeight: 400 }}>
          Un array di videoproiettori crea una superficie di visualizzazione panoramica ad altissima risoluzione, mentre sistemi audio, microfoni e telecamere intelligenti permettono una comunicazione fluida anche da remoto. 
<br/>Il tutto è gestito interamente da ARES Media Engine, per garantire prestazioni elevate, flessibilità d&apos;uso e totale controllo. 

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