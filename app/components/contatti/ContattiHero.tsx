'use client';

const ContattiHero = () => {
  return (
    <section className="relative w-full overflow-hidden h-screen pt-[70px]">
      {/* Grid Layout Container */}
      <div className="grid grid-cols-5 grid-rows-5 h-[130vh]">
        {/* Div 1 - Large section */}
        <div className="col-span-3 bg-[#2a433d] flex items-center justify-start pl-2 pt-20">
          <div className="text-start text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin mb-4">
              Contatti
            </h1>
          </div>
        </div>
        
        {/* Div 2 - Black section */}
        <div className="col-span-2 row-start-2 bg-[#2a433d] flex items-center justify-center">
          <div className="text-center text-white p-6">

          </div>
        </div>
        
        {/* Div 3 - Small section */}
        <div className="row-start-3 bg-[#2a433d] flex items-center justify-center">
          <div className="text-center text-white p-4">
          </div>
        </div>
        
        {/* Div 4 - Small section */}
        <div className="col-start-3 row-start-3 bg-[#2a433d] flex items-center justify-center">
          <div className="text-center text-white p-4">
          </div>
        </div>
      </div>
      
      {/* Overlay content for larger screens */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 md:px-8 pointer-events-none">
        <div className="text-center text-white max-w-4xl w-full hidden md:block">
          <h1 className="text-4xl lg:text-3xl font-thin leading-tight ml-36">
          Se hai una visione, siamo pronti ad ascoltarla.
          </h1>
          <h1 className="text-4xl lg:text-3xl font-thin mb-6 leading-tight ml-10 mr-36">
          Contattaci. Il resto lo costruiremo insieme.
          </h1>
        </div>
      </div>
      
      {/* Mobile overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 md:hidden pointer-events-none">
        <div className="text-center text-white max-w-sm w-full">
          <h1 className="text-lg sm:text-xl font-thin leading-tight mb-4">
          Se hai una visione, siamo pronti ad ascoltarla.
          </h1>
          <h1 className="text-lg sm:text-xl font-thin leading-tight">
          Contattaci. Il resto lo costruiremo insieme.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContattiHero; 