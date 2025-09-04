'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="pb-8 sm:py-20 lg:pb-12 lg:pt-36" style={{ backgroundColor: '#2A2A2C' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="sm:mb-8 mt-10 md:mt-20">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none" style={{ fontWeight: 430 }}>
            Hai in mente un progetto multimediale?<br />
            Contattaci ed insieme lo renderemo realtà.
          </h2>
        </div>
        
        <div className="flex justify-center mt-4 sm:mt-12 lg:mt-44">
          <Link 
            href="/contatti" 
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors text-base sm:text-lg lg:text-2xl font-medium"
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