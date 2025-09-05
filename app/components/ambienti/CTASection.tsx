'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="w-full h-[750px] flex flex-col justify-between items-center" style={{ backgroundColor: '#222222' }}>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center pt-16">
          <h2 className="text-white text-[60px] leading-none" style={{ fontWeight: 430 }}>
            Stai progettando la nuova era della<br /> 
            collaborazione nella tua azienda?<br /> 
            Siamo pronti a realizzarla con te.
          </h2>
        </div>
      </div>
      
      <div className="w-full flex justify-center pb-16">
        <Link 
          href="/contatti" 
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors text-[32px] font-medium"
        >
          <span>Contatta un esperto</span>
          <span className="ml-5" style={{ fontWeight: 634 }}>→</span>
        </Link>
      </div>
    </div>
  );
};

export default CTASection; 