'use client';

import Image from 'next/image';

const UnderImageSection = () => {
  return (
    <div className="relative pb-12 sm:pb-16 lg:pb-32 px-4 sm:px-6 lg:px-24">
      {/* Overlapping Image - Top Right Corner - Hidden on mobile, shown on larger screens */}
      <div className="hidden md:block absolute -top-32 sm:-top-40 md:-top-68 right-0 z-10 w-2/3 lg:w-3/5 h-full">
        <Image
          src="/assets/case/b2.png"
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
        <div className="mb-6 sm:mb-8 md:mb-12 leading-none">
          <h3 className="text-[#082239] text-xs leading-none" style={{ fontWeight: 400 }}>
          Un racconto visivo pronto per ogni touchpoint
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#082239] leading-none" style={{ fontWeight: 250 }}>
          L&apos;innovazione parla in 3D
          </h2>
        </div>

        {/* Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 mr-0 sm:mr-0 md:mr-104">
          <div className="text-[#082239] text-sm leading-none" style={{ fontWeight: 400 }}>
          In occasione del lancio del rivoluzionario avvitatore Oil-Less, Beta Utensili ci ha affidato la realizzazione di un contenuto 3D ad alto impatto visivo, capace di esprimere l&apos;elevato livello di innovazione tecnica e la raffinatezza progettuale del prodotto.<br/><br/> Attraverso una modellazione accurata, animazioni fluide e visual effects fotorealistici, abbiamo dato vita al prodotto evidenziandone materiali, dettagli costruttivi e funzionalità, anche attraverso efficaci comparazioni con i competitor.
          </div>
          <div className="text-[#082239] text-sm leading-none pl-0 sm:pl-0 md:pl-20" style={{ fontWeight: 400 }}>
          L&apos;intero progetto è stato curato nei minimi dettagli: il sound design, sincronizzato con le animazioni, valorizza le dinamiche del racconto; il background richiama l&apos;immagine coordinata del brand; mentre le text animation comunicano i dati tecnici in modo chiaro ed elegante, mantenendo uno stile essenziale e coinvolgente. <br/>In ogni fase è stata eseguita una puntuale ricerca visuale per cogliere al meglio l&apos;essenza del brand e coniugarla con nuovi linguaggi visivi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 