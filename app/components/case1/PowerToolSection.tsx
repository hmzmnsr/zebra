'use client';

import Image from 'next/image';

const PowerToolSection = () => {
  return (
    <section className="text-white relative mb-6 sm:mb-10 md:mb-20 pb-6 md:pb-10" style={{ background: 'linear-gradient(to bottom, #1d2928, #242626)', height: '670px' }}>
      {/* First Half - Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] md:min-h-[50vh]">
        {/* Left Half - Text Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center ml-2 sm:ml-4 md:ml-20">
          <div className="max-w-3xl">
            <p className="text-[#fbfdff] text-[20px] mb-2 sm:mb-3 md:mb-0" style={{ fontWeight: 400 }}>
            Il vino nasce dalla terra, ma vive nel racconto.
            </p>
            <p className="text-[#fbfdff] leading-none text-[48px] leading-none" style={{ fontWeight: 250 }}>
            Esperienze immersive per entrare nell&apos;anima dei territori e sentire ogni vino come un&apos;estensione del luogo in cui prende vita.
            </p>
          </div>
        </div>
        
        {/* Right Half - Large Power Tool */}
         <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-1">
           <div className="relative w-full h-full">
             <Image
               src="/assets/case2oniverse/2.jpg"
               alt="Beta Utensili Power Tool"
               width={940}
               height={487}
               className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] object-cover"
             />


<p className="text-[10px] sm:text-xs text-gray-300 mt-2 text-right pr-1 sm:pr-2 md:pr-4">
Limmersività al servizio del sapere
             </p>
           </div>
         </div>
      </div>

      {/* Second Half - Bottom Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 pb-16 sm:pb-20 md:pb-28">
         {/* Left Half - Three Smaller Tools */}
         <div>
           <div className="grid grid-cols-3 gap-1 h-full items-center">
        
          </div>
        </div>
        
        
       </div>




             {/* Floating horizontal lines (adjust positions as needed) */}
      <div className="pointer-events-none absolute left-88 right-0 top-6 h-px bg-white/30"></div>
      <div className="pointer-events-none absolute left-0 right-88 bottom-28 h-px bg-white/30"></div>
    </section>
  );
};

export default PowerToolSection; 