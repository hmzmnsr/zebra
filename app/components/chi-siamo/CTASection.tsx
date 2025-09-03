'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="pb-16 pt-24 sm:pb-12 md:pb-16 lg:pb-12 lg:pt-24 sm:pt-28 md:pt-32 lg:pt-36 bg-[#FBFDFC] text-[#083933]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-4 sm:mb-8 md:mb-8 mt-4 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-44">
          <h2 className="text-[#083933] text-base sm:text-lg md:text-xl lg:text-[44px] leading-none px-2 sm:px-4" style={{ fontWeight: 430 }}>
          Hai in mente un progetto multimediale?<br />
          Contattaci ed insieme lo renderemo realtà.
          </h2>
        </div>
        
        <div className="flex justify-center mt-4 sm:mt-8 md:mt-8 lg:mt-12 xl:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-[#083933] hover:text-gray-300 transition-colors text-sm sm:text-base md:text-base lg:text-2xl px-4 py-2 sm:px-6 sm:py-3"
          >
            <span style={{ fontWeight: 434 }}>Contatta un esperto</span>
            <span className="ml-5" style={{ fontWeight: 634 }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 