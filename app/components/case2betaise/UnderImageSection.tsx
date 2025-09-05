'use client';

import Image from 'next/image';

const UnderImageSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      {/* Overlapping Image - Top Right Corner */}
      <div className="absolute bottom-32 lg:right right-0 z-10 w-1/2 sm:w-1/3 lg:w-2/5 h-full">
        <Image
          src="/assets/case2betaise/lizard12.png"
          alt="Decorative Image"
          width={200}
          height={50}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-none">
          <h3 className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
             Uno stand che non si guarda: si vive.
          </h3>
          <h2 className="text-[48px] text-[#082239] leading-none" style={{ fontWeight: 250 }}>
           Far rivivere i capolavori 
           <br/>tramite la tecnologia
          </h2>
        </div>

        {/* Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 mr-0 sm:mr-16 md:mr-32 lg:mr-104">
          <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
           In occasione della fiera ISE di Barcellona, il nostro<br/> partner strategico EPSON, leader mondiale nella <br/>videoproiezione, ci ha affidato la progettazione e <br/>realizzazione del suo stand immersivo: uno spazio <br/>concepito per esaltare versatilità e qualità delle<br/> soluzioni di videoproiezione firmate EPSON. 
          </div>
          <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
           Dalla fase di concept creativo alla gestione tecnica in<br/> loco, ZEBRA ha curato ogni aspetto della<br/> realizzazione, trasformando lo stand in una vera e<br/> propria opera immersiva ad altissima risoluzione, <br/>animata da un racconto digitale coinvolgente, creato<br/> per omaggiare la città di Barcellona e i grandi maestri<br/> della pittura spagnola. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 