'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="pb-12 md:pb-16 lg:pb-12 sm:pt-28 md:pt-32 lg:pt-36 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 md:mb-8 mt-12 md:mt-20">
          <h2 className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light leading-relaxed md:leading-tight">
          Hai in mente un progetto multimediale?<br />
          Contattaci ed insieme lo renderemo realtà.
          </h2>
        </div>
        
        <div className="flex justify-center mt-6 md:mt-8 lg:mt-12 xl:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-black hover:text-gray-300 transition-colors text-sm md:text-base lg:text-lg font-medium"
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