'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 lg:pb-32 bg-white px-4 sm:px-6 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-none">
          <h3 className="text-[#082239] text-xs leading-none" style={{ fontWeight: 400 }}>
             Tradurre il genio in esperienza
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#082239] leading-none" style={{ fontWeight: 250 }}>
           Dall&apos;analogico al digitale, un<br/> equilibrio tra fedeltà storica ed<br/> esperienza contemporanea.
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
           Cascate digitali che scorrono su pareti e pavimenti, proiezioni di grande formato pensate per spiegare concetti e dettagli con efficacia visiva, e supporti interattivi che permettono di sfogliare e tradurre in tempo reale le pagine originali del Codice Leicester concesso per l&apos;occasione da Bill Gates, hanno trasformato l&apos;esperienza museale in un viaggio emozionale e conoscitivo senza precedenti. 
          </div>
          <div className="text-[#082239] text-sm leading-none pl-0 sm:pl-0 md:pl-20" style={{ fontWeight: 400 }}>
             Un racconto visivo che fonde territorio, cultura e prodotto, pensato per rafforzare il legame emotivo tra l&apos;ospite e l&apos;identità delle cantine. 
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