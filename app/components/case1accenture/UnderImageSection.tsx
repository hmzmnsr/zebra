'use client';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight mb-2 sm:mb-3">
          Ogni riunione è già un passo avanti
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          Uno spazio all&apos;altezza
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-black text-sm leading-tight">
          All&apos;interno dei nuovi headquarters di Beta Utensili, ZEBRA è stata incaricata di progettare e realizzare il sistema tecnologico per la sala del Consiglio di amministrazione: uno spazio iconico dove design e funzionalità si incontrano. L&apos;obiettivo era chiaro: garantire riunioni e presentazioni altamente efficaci, potenziando la condivisione dei contenuti e la comunicazione con i partecipanti da remoto. 
          </div>
          <div className="text-black text-sm leading-tight pl-0 sm:pl-8 md:pl-16 lg:pl-20">
          Ai margini della spettacolare Jordan F1 sospesa al soffitto, abbiamo integrato con discrezione videoproiettori, sistemi audio, microfoni intelligenti e telecamere per ottenere un ambiente tecnologicamente evoluto ma visivamente pulito. 
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