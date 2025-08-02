'use client';

import Image from 'next/image';

const ImageTextSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8">
              <h3 className="text-black text-xs font-thin leading-tight px-4 sm:px-6 lg:pl-10">
              Collaborazione e presentazione potenziate
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-thin text-black leading-tight px-4 sm:px-6 lg:pl-10">
              Sale meeting immersive
              </h2>
              <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-thin">
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
                className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-96 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Image on Left, Text on Right */}
      <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-8 mb-8 lg:mb-0">
              <Image
                src="/assets/servizi3/5.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-auto shadow-lg"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-8">
              <h3 className="text-black text-xs font-thin leading-tight px-4 sm:px-6 lg:pl-10">
                Ogni frame, una storia
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-thin text-black leading-tight px-4 sm:px-6 lg:pl-10">
                Riprese ed editing video
              </h2>
              <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-thin">
                <p>
                Il video è il formato che più di ogni altro cattura l&apos;attenzione e genera engagement. Per questo realizziamo contenuti che uniscono estetica cinematografica e strategia comunicativa, per raccontare storie in modo efficace e indelebile. 
                </p>
                <p>
                Dalle riprese al montaggio finale, seguiamo ogni fase con cura maniacale: elaborazione degli storyboard, regia, illuminazione, color grading, motion graphics e sound desing. Effettuiamo riprese in ogni tipo di formato: 360° immersive, aeree tramite droni e tradizionali a terra, garantendo qualità estrema in ogni contesto. 
                </p>
                <p>
                Ci occupiamo di diversi formati: corporate video, tutorial, spot televisivi, contenuti per social media e per supporti immersivi. Ogni progetto è pensato per essere performante su tutte le piattaforme, ottimizzando durata, formato e fruibilità del messaggio. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Text on Left, Image on Right */}
      <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8">
              <h3 className="text-black text-xs font-thin leading-tight px-4 sm:px-6 lg:pl-10">
              Il suono che fa la differenza
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-3xl font-thin text-black leading-tight px-4 sm:px-6 lg:pl-10">
              Sound design
              </h2>
              <div className="text-black text-sm leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-thin">
                <p>
                Il suono è un linguaggio potente che amplifica e completa l&apos;esperienza visiva. Creiamo paesaggi sonori unici, effetti sincronizzati all&apos;immagine e colonne sonore originali, per dare ritmo e carattere ad ogni progetto. Dal design audio alla colonna sonora, evolviamo i contenuti in esperienze multisensoriali indimenticabili. 
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
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextSection; 