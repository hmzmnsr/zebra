'use client';

const UnderImageSection = () => {
  return (
    <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#252928' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="mb-8 sm:mb-12 leading-tight">
          <h3 className="text-white text-xs font-thin leading-tight">
            Diamo vita alle tue idee
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold text-white leading-tight">
            Contenuti che catturano<br />
            l&apos;attenzione
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20 lg:mt-24">
          <div className="text-white text-sm leading-tight">
            Ogni brand ha una storia o un prodotto da raccontare. Il nostro compito è farli vivere potenziandone la portata comunicativa: non ci limitiamo a creare contenuti, studiamo attentamente ogni narrazione per generare emozioni, stimolare la curiosità e rafforzare l&apos;identità del tuo prodotto.
          </div>
          <div className="text-white text-sm leading-tight">
            Lo facciamo unendo strategia, creatività e tecnologia. Dai video aziendali alle animazioni 3D, ogni dettaglio è pensato per comunicare in modo chiaro e coinvolgente. Perché un racconto multimediale non è solo immagine: è la chiave per creare connessioni autentiche con il pubblico.
          </div>
          <div className="text-white text-sm leading-tight">
            {/* Empty right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 