'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="pb-8 pt-1 sm:pb-12 md:pb-16 lg:pb-12 sm:pt-1 md:pt-1 lg:pt-1 bg-[#FBFDFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-2 sm:mb-8 md:mb-8 mt-2 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-44">
          <h2 className="text-[#083933] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-none px-2 sm:px-4" style={{ fontWeight: 430 }}>
          Stai creando un progetto multimediale?<br/> Contattaci e insieme lo renderemo realtà 
          </h2>
        </div>
        
        <div className="flex justify-center mt-2 sm:mt-8 md:mt-8 lg:mt-12 xl:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-[#083933] hover:text-gray-300 transition-colors text-sm sm:text-base md:text-base lg:text-2xl font-medium px-4 py-2 sm:px-6 sm:py-3"
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