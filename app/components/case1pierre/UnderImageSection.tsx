'use client';

import Image from 'next/image';

const UnderImageSection = () => {
  return (
    <div className="pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-white px-0 lg:px-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Content Area - Image Left + All Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          {/* Left Side - Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="/assets/case1pierra/77.jpg"
              alt="Spazio immersivo"
              width={466}
              height={785}
              className="w-full max-w-md h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover shadow-lg"
            />
          </div>

          {/* Right Side - All Content (Header + Text) */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Header Area */}
            <div className="leading-none py-12 sm:py-16 md:py-20">
              <h3 className="text-[#082239] text-[20px] leading-none mb-2 sm:mb-3" style={{ fontWeight: 400 }}>
              Dal tessuto al cosmo.
              </h3>
              <h2 className="text-[48px] text-[#082239] leading-none" style={{ fontWeight: 250 }}>
              La moda guarda alle stelle
              </h2>
            </div>

            {/* Text Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
                Un lanciatore spaziale, una maison leggendaria, l&apos;Agenzia Spaziale Europea e la visione creativa di ZEBRA.<br/><br/>Da questo connubio è nato uno degli eventi più spettacolari e audaci degli ultimi anni: due sfilate gemelle firmate Pierre Cardin, andate in scena a Parigi e nella Guyana Francese, all&apos;ombra dell&apos;iconico razzo Ariane 5. 
              </div>
              <div className="text-[#082239] text-[20px] leading-none" style={{ fontWeight: 400 }}>
              ZEBRA ha curato la realizzazione di un videomapping monumentale sul razzo, concepito per raccontare,  attraverso immagini, luce e movimento, la narrazione alla base della sfilata, culminata con un epilogo simbolico: il lancio verso lo spazio. <br/><br/>Oltre 300.000 lumen hanno illuminato le notti parigine e sudamericane per uno show trasmesso in diretta mondiale, dove la tecnologia ZEBRA è stata chiamata a garantire prestazioni impeccabili e massima affidabilità, in un contesto tecnico e simbolico di altissimo livello. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection;