'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="pb-16 sm:py-20 lg:pb-12 lg:pt-36 bg-[#FBFDFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="sm:mb-8 mt-20">
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
            Stai creando un progetto multimediale per<br />
            una scuola? Contattaci ed insieme lo<br />
            renderemo realtà 
          </h2>
        </div>
        
        <div className="flex justify-center mt-8 sm:mt-12 lg:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-black hover:text-gray-300 transition-colors text-base sm:text-lg font-medium"
          >
            <span>Contatta un esperto</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 