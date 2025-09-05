'use client';

const UnderImageSection = () => {
  return (
    <div className="py-16 sm:py-24 lg:py-32 bg-[#fbfdfc]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        {/* Header Area */}
        <div className="mb-8 sm:mb-12 leading-none">
          <h3 className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
          Il valore aggiunto dell immersività
          </h3>
          <h2 className="text-[48px] text-[#082239] leading-none" style={{ fontWeight: 250 }}>
          Esperienze vissute a 360 gradi
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20 lg:mt-24">
          <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
          Immagina di varcare la soglia di un racconto e non limitarti ad ascoltarlo, ma viverlo. L immersività trasforma lo storytelling in esperienza: le immagini avvolgono, i suoni affascinano e le superfici prendono vita. Ogni dettaglio diventa un frammento di narrazione, ogni movimento del pubblico un&apos;interazione che amplifica le emozioni.  Non è più il pubblico a guardare la storia: è la storia a plasmarsi sull utente, a seguirlo, a rispondere ai suoi gesti. 
          </div>
          <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
          Così i messaggi diventano indelebili, pervadendo corpo e mente, imprimendosi nella memoria emotiva. Con le nostre tecnologie e la nostra creatività lo storytelling si apre ad infinite possibilità, abbracciando la percezione diretta dell uomo: è così che creiamo esperienze che parlano direttamente ai sensi ed al cuore. 
          </div>
          <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 