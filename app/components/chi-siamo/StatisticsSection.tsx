'use client';

const StatisticsSection = () => {
  return (
    <section 
      className="relative bg-white"
    >

      {/* Bottom Section with Data Grid */}
      <div className="pt-8 md:pt-20 px-4 md:px-0">
        <div className="max-w-8xl mx-auto md:ml-20">
          {/* Grid Container with Connecting Lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Data Point 1 */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <div className="text-2xl md:text-3xl font-thin text-center md:text-right mb-2 md:mb-0" style={{ color: '#20352F' }}>
                  +23
                </div>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#20352F' }}>
                    Paesi in cui operiamo
                  </h3>
                  <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                    Offriamo i nostri servizi in tutto il mondo, garantendo supporto completo in ogni fase del progetto
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 2 */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <div className="text-2xl md:text-3xl font-thin text-center md:text-right mb-2 md:mb-0" style={{ color: '#20352F' }}>
                  +500
                </div>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#20352F' }}>
                    Istituzioni hanno scelto i nostri prodotti
                  </h3>
                  <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                    Forniamo un ampio spettro di istituzioni pubbliche, incluse scuole, università, musei ed ospedali
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <div className="text-2xl md:text-3xl font-thin text-center md:text-right mb-2 md:mb-0" style={{ color: '#20352F' }}>
                  +600
                </div>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#20352F' }}>
                    Server attivi a livello globale
                  </h3>
                  <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                    Forniamo assistenza, gestione remota e supporto sui nostri sistemi, ovunque si trovino nel mondo
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <div className="text-2xl md:text-3xl font-thin text-center md:text-right mb-2 md:mb-0" style={{ color: '#20352F' }}>
                  100%
                </div>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#20352F' }}>
                    Sostenibilità aziendale
                  </h3>
                  <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                    ZEBRA è alimentata da un sistema proprietario di produzione energetica da fonti rinnovabili, che ci permette di svolgere la maggior parte delle attività a impatto zero sull&apos;ambiente
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection; 