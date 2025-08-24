'use client';

import Image from 'next/image';

const PowerToolSection = () => {
  return (
    <section className="text-white relative mb-10 md:mb-20 pb-6 md:pb-10" style={{ background: 'linear-gradient(to bottom, #1d2928, #242626)' }}>
      {/* First Half - Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] md:min-h-[50vh]">
        {/* Left Half - Text Content */}
        <div className="p-4 md:p-8 lg:p-12 flex flex-col justify-center ml-4 md:ml-20">
          <div className="max-w-lg">
            <p className="text-xs md:text-sm">
            Far parlare il patrimonio con nuovi linguaggi
            </p>
            <p className="text-gray-300 leading-relaxed font-light text-lg md:text-2xl lg:text-3xl leading-tight">
            Per rendere visibile ciò che Leonardo ha immaginato secoli fa, serviva una tecnologia che sapesse emozionare.
            Un allestimento immersivo che unisce arte, scienza e design al servizio della conoscenza.
            </p>
          </div>
        </div>
        
        {/* Right Half - Large Power Tool */}
         <div className="flex items-center justify-center p-4 md:p-8 lg:p-1">
           <div className="relative w-full h-full">
             <Image
               src="/assets/case2uffizi/12.jpg"
               alt="Beta Utensili Power Tool"
               width={400}
               height={300}
               className="w-full h-104 object-cover"
             />
           </div>
         </div>
      </div>

      {/* Second Half - Bottom Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 pb-28">
         {/* Left Half - Three Smaller Tools */}
         <div>
           <div className="grid grid-cols-3 gap-1 h-full items-center">
        
          </div>
        </div>
        
        
       </div>
    </section>
  );
};

export default PowerToolSection; 