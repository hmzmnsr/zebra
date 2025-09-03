'use client';

import Image from 'next/image';
import Link from 'next/link';

const IntegratedApproachSection = () => {
  return (
    <section className="relative min-h-[60vh] md:h-116 w-full overflow-hidden pl-12 pr-6">
      {/* Dark gradient background - starts from same color as video section ends */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#222222] via-[#222222] to-[#23373c]"></div>
      
      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center md:justify-between items-center min-h-[60vh] md:h-full px-4 md:px-8 lg:px-20 py-8 md:py-0">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 max-w-2xl text-center md:text-left mb-8 md:mb-0">
          <h1 style={{ fontWeight: 400, lineHeight: '0.9' }} className="text-xl md:text-2xl lg:text-4xl text-white mb-6 md:mb-24 px-2 md:px-0">
            Il nostro approccio integrato fonde tecnologia e creatività per dare vita<br/> 
            ad esperienze sensorialmente<br/> stimolanti ed indimenticabili
          </h1>
          
          {/* Call-to-action with horizontal line */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                         <Link 
               href="/chi-siamo"
               className="text-gray-300 text-lg hover:text-white transition-colors"
             >
               <span className="underline mr-4">Scopri ciò che facciamo</span> ↓
             </Link>
                         <div className="hidden md:block absolute mt-5 left-112 right-0 h-px bg-gray-400"></div>
          </div>
        </div>
        
        {/* Right Column - Logo */}
        <div className="flex-1 flex justify-center items-start mb-32">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-28 lg:h-28">
            <Image
              src="/assets/homepage/zebra.png"
              alt="Zebra Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproachSection; 