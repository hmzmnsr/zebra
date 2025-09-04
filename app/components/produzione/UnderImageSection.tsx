'use client';

const UnderImageSection = () => {
  return (
    <div className="py-16 sm:py-24 lg:pt-32 lg:pb-12" style={{ backgroundColor: '#252928' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="mb-8 sm:mb-12 leading-none">
          <h3 className="text-[#fbfdfc] text-xs leading-none text-center lg:text-left" style={{ fontWeight: 400 }}>
            Diamo vita alle tue idee
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-[#fbfdfc] leading-none text-center lg:text-left" style={{ fontWeight: 250 }}>
            Contenuti che catturano<br className="hidden lg:block" />
            l&apos;attenzione
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 lg:mt-24">
          <div className="text-[#fbfdfc] text-xs sm:text-sm lg:text-sm leading-none" style={{ fontWeight: 400 }}>
            Ogni brand ha una storia o un prodotto da raccontare. Il nostro compito è farli vivere potenziandone la portata comunicativa: non ci limitiamo a creare contenuti, studiamo attentamente ogni narrazione per generare emozioni, stimolare la curiosità e rafforzare l&apos;identità del tuo prodotto.
          </div>
          <div className="text-[#fbfdfc] text-xs sm:text-sm lg:text-sm leading-none" style={{ fontWeight: 400 }}>
            Lo facciamo unendo strategia, creatività e tecnologia. Dai video aziendali alle animazioni 3D, ogni dettaglio è pensato per comunicare in modo chiaro e coinvolgente. Perché un racconto multimediale non è solo immagine: è la chiave per creare connessioni autentiche con il pubblico.
          </div>
          <div className="text-[#fbfdfc] text-xs sm:text-sm lg:text-sm leading-none md:col-span-2 lg:col-span-1" style={{ fontWeight: 400 }}>
            {/* Empty right section */}
          </div>
        </div>
      </div>
      
      {/* Horizontal line extending full screen width */}
      <div className="w-11/12 h-px bg-gray-400 opacity-60 mt-20 sm:mt-28 lg:mt-36 mb-2 -ml-4 sm:-ml-6 lg:-ml-8"></div>
      
      {/* Creative Stack Section - positioned at bottom right */}
      <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-end px-4 sm:px-6 lg:px-8 lg:pr-2">
        <div className="flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 lg:gap-8 text-center lg:text-right">
          <h3 className="text-xs sm:text-sm lg:text-xs text-gray-300 font-light -mt-5">
            La nostra stack creativa
          </h3>
          <p className="text-xs sm:text-sm lg:text-xs text-gray-300 font-light">
            Unreal Engine, DaVinci Resolve, Maya, Vray, Blender,<br className="hidden sm:hidden lg:block" /> Adobe CC, Logic Pro X, Figma
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 