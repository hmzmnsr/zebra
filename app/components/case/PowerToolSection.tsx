'use client';

import Image from 'next/image';

const PowerToolSection = () => {
  return (
    <section className="text-white relative mb-10 md:mb-20 pb-6 md:pb-10" style={{ backgroundColor: '#212a29' }}>
      {/* First Half - Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] md:min-h-[50vh]">
        {/* Left Half - Text Content */}
        <div className="p-4 md:p-8 lg:p-12 flex flex-col justify-center ml-0 md:ml-20">
          <div className="max-w-lg">
            <p className="text-xs md:text-sm">
              with the brand&apos;s signature orange.
            </p>
            <p className="text-gray-300 leading-relaxed font-light text-base md:text-2xl lg:text-3xl leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
        {/* Right Half - Large Power Tool */}
         <div className="flex items-center justify-center p-4 md:p-8 lg:p-1">
           <div className="relative w-full h-full">
             <Image
               src="/assets/case/sec1.png"
               alt="Beta Utensili Power Tool"
               width={400}
               height={300}
               className="w-full h-full object-cover"
             />
           </div>
         </div>
      </div>

      {/* Second Half - Bottom Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2">
         {/* Left Half - Three Smaller Tools */}
         <div>
                     <div className="grid grid-cols-3 gap-1 h-full items-center">
             {/* First tool - Dark silhouette with orange line */}
             <div className="relative h-full">
               <Image
                 src="/assets/case/sec2.png"
                 alt="Power Tool Detail 1"
                 width={150}
                 height={150}
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Second tool - Dark silhouette with orange line */}
             <div className="relative h-full">
               <Image
                 src="/assets/case/sec3.png"
                 alt="Power Tool Detail 2"
                 width={150}
                 height={150}
                 className="w-full h-full object-cover"
               />
              
             </div>
             
             {/* Third tool - Exploded view with orange glow */}
             <div className="relative h-full">
               <Image
                 src="/assets/case/sec4.png"
                 alt="Power Tool Exploded View"
                 width={150}
                 height={150}
                 className="w-full h-full object-cover"
               />
             </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default PowerToolSection; 