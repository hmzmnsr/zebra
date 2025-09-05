'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="w-full h-[750px] bg-[#FBFDFC] flex flex-col justify-center items-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8 md:mb-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-44">
          <h2 className="text-black text-[60px] leading-none px-2 sm:px-4" style={{ fontWeight: 430 }}>
          Hai in mente un progetto multimediale?<br />
          Contattaci ed insieme lo renderemo realtà.
          </h2>
        </div>
        
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-8 lg:mt-12 xl:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-black hover:text-gray-300 transition-colors text-[32px] font-medium px-4 py-2 sm:px-6 sm:py-3"
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