'use client';

import Image from 'next/image';

const ImageTextSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <div className="py-8 md:py-16 bg-[#FBFDFC]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8 pl-18">
                             <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
               Rendere il pubblico protagonista
               </h3>
               <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
               Installazioni interattive
               </h2>
               <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Sviluppiamo installazioni multimediali interattive che consentono una cognizione attiva, ponendo il pubblico al centro dell esperienza. Dagli exhibit museali fino ai configuratori, le nostre soluzioni personalizzate tracciano i movimenti degli utenti rendendoli protagonisti di un esperienza affascinante. 
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                                             <Image
                  src="/assets/servizi1/5.jpg"
                  alt="Innovazione tecnologica"
                  width={800}
                  height={600}
                  className="w-full h-[55vh] object-cover shadow-lg"
                />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Image on Left, Text on Right */}
      <div className="py-8 md:py-16 bg-[#FBFDFC]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-8 mb-8 lg:mb-0">
                                             <Image
                  src="/assets/servizi1/6.png"
                  alt="Innovazione tecnologica"
                  width={800}
                  height={600}
                  className="w-full h-[55vh] object-cover shadow-lg"
                />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-8">
                             <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
               Nuove frontiere della formazione 
               </h3>
               <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
               Simulazione
               </h2>
               <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                                <p>
                Progettiamo e forniamo sistemi visuali per simulazioni altamente realistiche di utilizzo di veicoli e macchine, inclusi auto, macchine agricole, attrezzature industriali, treni, aerei, navi e veicoli da cantiere. Offriamo soluzioni di proiezione personalizzate, ottimizzate per il campo visivo richiesto e le dimensioni dell&apos;ambiente, garantendo esperienze di simulazione avanzate e fedeli alla realtà, anche nelle interfacce di controllo. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Text on Left, Image on Right */}
      <div className="py-8 md:py-16 bg-[#FBFDFC]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8 pl-18">
                             <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
               Dar vita alle architetture
               </h3>
               <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
               Videomapping
               </h2>
               <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Trasformiamo edifici e superfici in scenografie spettacolari attraverso videomapping architetturali cuciti su misura: un’esperienza immersiva che unisce tecnologia e creatività visiva per raccontare storie, emozionare e lasciare il pubblico senza fiato. Dalla progettazione alla messa in scena, offriamo una soluzione chiavi in mano per eventi indimenticabili ad alto effetto wow.
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                                             <Image
                  src="/assets/servizi1/7.jpg"
                  alt="Design e grafica"
                  width={800}
                  height={600}
                  className="w-full h-[55vh] object-cover shadow-lg"
                />
            </div>
          </div>
        </div>
      </div>


       {/* forth Section - Image on Left, Text on Right */}
       <div className="py-8 md:py-16 bg-[#FBFDFC]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-8 mb-8 lg:mb-0">
                             <Image
                 src="/assets/servizi1/n.jpg"
                 alt="Innovazione tecnologica"
                 width={800}
                 height={600}
                 className="w-full h-[50vh] object-cover shadow-lg"
               />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-8">
                             <h3 className="text-black text-xs font-normal leading-tight px-4 sm:px-6 lg:pl-10">
               Affascinare e sorprendere il pubblico
               </h3>
               <h2 className="text-4xl md:text-5xl lg:text-3xl font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
               Soluzioni per fiere ed eventi
               </h2>
               <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Creiamo installazioni multimediali pensate per comunicare in modo efficace e coinvolgere il pubblico in maniera diretta e suggestiva. Dalle videoproiezioni ai ledwall, fino ai sistemi interattivi, realizziamo soluzioni su misura che amplificano il messaggio e valorizzano ogni stand ed evento. Lavoriamo in sinergia con cliente e allestitore per valorizzare ogni spazio espositivo, creando esperienze coinvolgenti che restano impresse nella memoria e comunicano in modo sorprendente contenuti tecnici e commerciali 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextSection; 