'use client';

import Image from 'next/image';

const UnderImageSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 lg:pb-32 px-4 sm:px-6 lg:px-24">
      {/* Overlapping Image - Top Right Corner - Hidden on mobile, shown on larger screens */}
      <div className="hidden md:block absolute -top-32 sm:-top-40 md:-top-56 right-0 z-10 w-2/3 lg:w-3/5 h-full">
        <Image
          src="/assets/case/bg1.png"
          alt="Decorative Image"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile Image - Centered and visible only on mobile */}
      <div className="md:hidden flex justify-center mb-8">
        <Image
          src="/assets/case/bg1.png"
          alt="Decorative Image"
          width={400}
          height={300}
          className="w-3/4 h-auto object-contain"
        />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Area */}
        <div className="mb-6 sm:mb-8 md:mb-12 leading-tight">
          <h3 className="text-black text-xs font-thin leading-tight">
             Uno stand che non si guarda: si vive.
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thin text-black leading-tight">
          Far rivivere i capolavori 
          <br/>tramite la tecnologia
          </h2>
        </div>

        {/* Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 mr-0 sm:mr-0 md:mr-104">
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