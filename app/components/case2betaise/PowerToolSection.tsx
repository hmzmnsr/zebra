'use client';

import Image from 'next/image';

const PowerToolSection = () => {
  return (
    <section className="text-white relative mb-6 sm:mb-10 md:mb-20 pb-6 md:pb-56" style={{ background: 'linear-gradient(to bottom, #1d2928, #242626)' }}>
      {/* First Half - Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[50vh]">
        {/* Left Half - Text Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center ml-0 sm:ml-4 md:ml-20">
          <div className="max-w-lg">
            <p className="text-[#fbfdff] text-xs sm:text-sm md:text-sm mb-2 sm:mb-3 md:mb-0" style={{ fontWeight: 400 }}>
            Tecnologia che emoziona e coinvolge
            </p>
            <p className="text-[#fbfdff] leading-none text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" style={{ fontWeight: 250 }}>
            Quando la tecnologia incontra<br/> l&apos;arte, lo spazio si trasforma in <br/>esperienza. Un linguaggio<br/> immersivo per raccontare<br/> l&apos;innovazione e lasciare il segno.
            </p>
          </div>
        </div>
        
        {/* Right Half - Large Power Tool */}
         <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-1">
           <div className="relative w-full h-full">
             <Image
               src="/assets/case2betaise/2.jpg"
               alt="Beta Utensili Power Tool"
               width={1000}
               height={400}
               className="w-full max-w-4xl h-64 sm:h-80 md:h-96 lg:h-108 object-cover"
             />
             <p className="text-[10px] sm:text-xs text-gray-300 mt-2 text-right pr-1 sm:pr-2 md:pr-4">
               ISE 2023 EPSON Booth
             </p>
           </div>
         </div>
      </div>

      {/* Second Half - Bottom Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2">
         {/* Left Half - Three Smaller Tools */}
         <div>
                     <div className="grid grid-cols-3 gap-1 h-full items-center">


          </div>
        </div>
        
        
      </div>

      {/* Floating horizontal lines (adjust positions as needed) */}
      <div className="pointer-events-none absolute left-88 right-0 top-6 h-px bg-white/30"></div>
      <div className="pointer-events-none absolute left-0 right-88 bottom-36 h-px bg-white/30"></div>
    </section>
  );
};

export default PowerToolSection; 