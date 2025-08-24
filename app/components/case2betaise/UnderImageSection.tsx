'use client';

import Image from 'next/image';

const UnderImageSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      {/* Overlapping Image - Top Right Corner */}
      <div className="absolute top-8 lg:right-4 sm:top-4 right-0 z-10 w-1/2 sm:w-1/3 lg:w-2/5 h-full">
        <Image
          src="/assets/case2betaise/x.png"
          alt="Decorative Image"
          width={200}
          height={50}
          className="w-full h-auto object-contain transform -translate-y-16 sm:-translate-y-20 lg:-translate-y-32 rotate-[30deg]"
        />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight mb-2 sm:mb-3">
             Uno stand che non si guarda: si vive.
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          Far rivivere i capolavori 
          <br/>tramite la tecnologia
          </h2>
        </div>

        {/* Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 mr-0 sm:mr-16 md:mr-32 lg:mr-104">
          <div className="text-black text-sm leading-tight">
          In occasione della fiera ISE di Barcellona, il nostro<br/> partner strategico EPSON, leader mondiale nella <br/>videoproiezione, ci ha affidato la progettazione e <br/>realizzazione del suo stand immersivo: uno spazio <br/>concepito per esaltare versatilità e qualità delle<br/> soluzioni di videoproiezione firmate EPSON. 
          </div>
          <div className="text-black text-sm leading-tight">
          Dalla fase di concept creativo alla gestione tecnica in<br/> loco, ZEBRA ha curato ogni aspetto della<br/> realizzazione, trasformando lo stand in una vera e<br/> propria opera immersiva ad altissima risoluzione, <br/>animata da un racconto digitale coinvolgente, creato<br/> per omaggiare la città di Barcellona e i grandi maestri<br/> della pittura spagnola. 
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 