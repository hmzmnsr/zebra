'use client';

const StatisticsSection = () => {
  return (
    <section 
      className="relative bg-[#FBFDFC] text-[#083933]"
    >

      {/* Bottom Section with Data Grid */}
      <div className="pt-8 md:pt-20 px-4 md:px-0">
        <div className="max-w-8xl mx-auto md:ml-8">
          {/* Grid Container with Connecting Lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {/* Grid Lines - Hidden on mobile */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {/* Horizontal line in the middle */}
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[#D0DADA] transform -translate-y-1/2"></div>
              {/* Vertical line in the middle */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#D0DADA] transform -translate-x-1/2"></div>
            </div>

            {/* Data Point 1 */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <h3 className="text-center md:text-right -mt-3" style={{ color: '#20352F', fontSize: '48px', fontWeight: 250 }}>
                  +23
                </h3>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="mb-1" style={{ color: '#20352F', fontSize: '20px', fontWeight: 700 }}>
                    Paesi in cui operiamo
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontWeight: 400 }}>
                    Offriamo i nostri servizi in tutto il mondo, garantendo supporto completo in ogni fase del progetto
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 2 */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <h3 className="text-center md:text-right -mt-3" style={{ color: '#20352F', fontSize: '48px', fontWeight: 250 }}>
                  +500
                </h3>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="mb-1" style={{ color: '#20352F', fontSize: '20px', fontWeight: 700 }}>
                    Istituzioni hanno scelto i nostri prodotti
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontWeight: 400 }}>
                    Forniamo un ampio spettro di istituzioni pubbliche, incluse scuole, università, musei ed ospedali
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 3 */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <h3 className="text-center md:text-right -mt-3" style={{ color: '#20352F', fontSize: '48px', fontWeight: 250 }}>
                  +600
                </h3>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="mb-1" style={{ color: '#20352F', fontSize: '20px', fontWeight: 700 }}>
                    Server attivi a livello globale
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontWeight: 400 }}>
                    Forniamo assistenza, gestione remota e supporto sui nostri sistemi, ovunque si trovino nel mondo
                  </p>
                </div>
              </div>
            </div>

            {/* Data Point 4 */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-start">
                <h3 className="text-center md:text-right -mt-3" style={{ color: '#20352F', fontSize: '48px', fontWeight: 250 }}>
                  100%
                </h3>
                <div className="col-span-1 md:col-span-2 text-center md:text-left">
                  <h3 className="mb-1" style={{ color: '#20352F', fontSize: '20px', fontWeight: 700 }}>
                    Sostenibilità aziendale
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontWeight: 400 }}>
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