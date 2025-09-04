'use client';

const UnderImageSection = () => {
  return (
    <div className="py-8 sm:py-24 lg:pt-12 lg:pb-12" style={{ backgroundColor: '#2b2b2e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="mb-4 sm:mb-12 leading-none">
          <h3 className="text-white text-xs leading-none" style={{ fontWeight: 400 }}>
          L ambiente di lavoro come espressione dell innovazione
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-3xl text-white leading-none" style={{ fontWeight: 250 }}>
            Il futuro è collaborativo
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mt-8 sm:mt-20 lg:mt-24">
          <div className="text-white text-sm leading-none" style={{ fontWeight: 400 }}>
          Immagina uno spazio in cui realizzare presentazioni e dimostrazioni ad alto impatto, capaci di stupire il cliente e comunicare innovazione. Uno spazio flessibile, pensato per creare, progettare e collaborare con il tuo team, anche a distanza.  
          </div>
          <div className="text-white text-sm leading-none" style={{ fontWeight: 400 }}>
          Le soluzioni collaborative di ZEBRA rispondono a tutte queste esigenze, combinando tecnologia avanzata e design funzionale per supportare il lavoro ibrido, potenziandolo. 
          </div>
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
            {/* Empty right section */}
          </div>
        </div>
      </div>


      {/* Horizontal line extending full screen width */}
      <div className="w-11/12 h-px bg-gray-400 opacity-60 mt-10 sm:mt-28 lg:mt-36 mb-2 -ml-4 sm:-ml-6 lg:-ml-8"></div>
      
      {/* Creative Stack Section - positioned at bottom right */}
      <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-end px-4 sm:px-6 lg:px-8 lg:pr-2">
        <div className="flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 lg:gap-8 text-center lg:text-right">
          <h3 className="text-xs sm:text-sm lg:text-xs text-gray-300 font-light -mt-5">
            La nostra stack creativa
          </h3>
          <p className="text-xs sm:text-sm lg:text-xs text-gray-300 font-light">
          Progettazione, allestimento, cablaggio,<br className="hidden sm:hidden lg:block" />programmazione, automazione, supporto 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 