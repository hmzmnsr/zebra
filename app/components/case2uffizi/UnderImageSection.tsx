'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 lg:pb-32 bg-white px-4 sm:px-6 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight">
            Tradurre il genio in esperienza
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          Dall&apos;analogico al digitale, un<br/> equilibrio tra fedeltà storica ed<br/> esperienza contemporanea.
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-black text-sm leading-tight">
            Dal concept narrativo alla produzione video, fino all&apos;installazione delle tecnologie immersive, abbiamo curato l&apos;intero percorso esperienziale, creando due viaggi sensoriali pensati per coinvolgere i visitatori e trasportarli nell&apos;anima autentica dei territori e dei vini.
          </div>
          <div className="text-black text-sm leading-tight pl-0 sm:pl-0 md:pl-20">
            Un racconto visivo che fonde territorio, cultura e prodotto, pensato per rafforzare il legame emotivo tra l&apos;ospite e l&apos;identità delle cantine. 
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