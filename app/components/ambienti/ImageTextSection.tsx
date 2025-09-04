'use client';

import Image from 'next/image';

const ImageTextSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <div className="py-8 md:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8 pl-18">
              <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
              Collaborazione e presentazione potenziate
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
              Sale meeting immersive
              </h2>
              <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Progettiamo e realizziamo spazi collaborativi all&apos;avanguardia, dove l&apos;immersività pervade ogni superficie, trasformandola in un&apos;area di lavoro e interazione. 
                </p>
                <p>
                Ogni ambiente è personalizzato in base al workflow del cliente, per rispondere in modo preciso alle reali esigenze operative. Le tecnologie multimediali e immersive potenziano produttività e creatività, rendendo ogni presentazione ai clienti, riunione o sessione di design thinking un esperienza coinvolgente e ad alte prestazioni. 
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <Image
                src="/assets/servizi3/4.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-[26rem] shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Image on Left, Text on Right */}
      <div className="py-8 md:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-8 mb-8 lg:mb-0">
              <Image
                src="/assets/servizi3/71.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-[26rem] shadow-lg object-cover"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-8">
              <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
              Condivisione senza limiti
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
              Sale conferenza ed auditorium
              </h2>
              <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Nel workflow moderno, la collaborazione e la presentazione dei contenuti assumono un ruolo sempre più centrale, anche quando i team lavorano da luoghi diversi o i clienti non sono presenti fisicamente. ZEBRA progetta e realizza sale conferenza dotate di videoproiettori, display, sistemi audio, microfoni e telecamere intelligenti, pensati per avvicinare persone lontane e massimizzare l&apos;efficacia della comunicazione. 
                </p>
                <p>
                Dalle più piccole meeting room ai grandi auditorium, ogni infrastruttura è progettata su misura, in base alle esigenze operative e agli obiettivi del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Text on Left, Image on Right */}
      <div className="py-8 md:py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8 pl-18">
              <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
              Dimostrazione e formazione efficaci
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
              Demo e training center aziendali
              </h2>
              <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Nella strategia aziendale, le aree demo e training hanno un ruolo fondamentale per fidelizzare e formare partner, forza vendita e tecnici.
                </p>
                <p>
                ZEBRA supporta il cliente con un servizio completo, che parte dall&apos;analisi degli obiettivi formativi e commerciali, fino alla progettazione e implementazione di strumenti digitali avanzati per la dimostrazione e la formazione. 
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <Image
                src="/assets/servizi3/5.jpg"
                alt="Design e grafica"
                width={800}
                height={600}
                className="w-full h-[26rem] shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextSection; 