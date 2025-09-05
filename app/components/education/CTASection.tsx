'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="w-full h-[750px] bg-[#FBFDFC] flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="sm:mb-8 mt-20">
          <h2 className="text-black text-[60px] leading-none" style={{ fontWeight: 430 }}>
            Stai creando un progetto multimediale per<br />
            una scuola? Contattaci ed insieme lo<br />
            renderemo realtà 
          </h2>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-12 lg:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-black hover:text-gray-300 transition-colors text-[32px] font-medium"
          >
            <span>Contatta un esperto</span>
            <span className="ml-5" style={{ fontWeight: 634 }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 