'use client';

const UnderImageSection = () => {
  return (
    <div className="py-16 sm:py-24 lg:pt-12 lg:pb-32" style={{ backgroundColor: '#2b2b2e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="mb-8 sm:mb-12 leading-tight">
          <h3 className="text-white text-xs font-thin leading-tight">
          L ambiente di lavoro come espressione dell innovazione
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-3xl font-thin text-white leading-tight">
            Il futuro è collaborativo
          </h2>
        </div>

        {/* Content Area - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-20 lg:mt-24">
          <div className="text-white text-sm leading-tight">
          Immagina uno spazio in cui realizzare presentazioni e dimostrazioni ad alto impatto, capaci di stupire il cliente e comunicare innovazione. Uno spazio flessibile, pensato per creare, progettare e collaborare con il tuo team, anche a distanza.  
          </div>
          <div className="text-white text-sm leading-tight">
          Le soluzioni collaborative di ZEBRA rispondono a tutte queste esigenze, combinando tecnologia avanzata e design funzionale per supportare il lavoro ibrido, potenziandolo. 
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