'use client';

import Image from 'next/image';

const ImageTextSection = () => {
  return (
    <>
      {/* First Section - Text on Left, Image on Right */}
      <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8 pl-18">
              <h3 className="text-black text-[20px] font-normal leading-tight px-4 sm:px-6 lg:pl-10">
                Immagini che parlano da sole
              </h3>
              <h2 className="text-[32px] font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
                Produzione video 3D
              </h2>
              <div className="text-black text-[20px] leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                  Creiamo contenuti 3D di nuova generazione per raccontare il tuo brand e i tuoi prodotti utilizzando linguaggi visivi innovativi ed immersivi. Non solo animazione: sviluppiamo veri e propri mondi digitali, capaci di valorizzare ogni prodotto e concetto. 
                </p>
                <p>
                  Utilizziamo tecnologie all&apos;avanguardia per ottenere rendering fotorealistici e animazioni ultra-fluide, ideali per campagne pubblicitarie, comunicazione online, presentazioni e lancio di prodotti. Ogni progetto è studiato nei minimi dettagli, dall&apos;illuminazione alle texture, per garantire risultati che uniscono estetica e funzionalità. 
                </p>
                <p>
                   Grazie a pipeline ottimizzate e workflow in real-time, siamo in grado di comprimere i tempi di produzione senza compromettere la qualità. Con noi, il 3D diventa uno strumento strategico per comunicare innovazione, affermare il brand e coinvolgere il pubblico. Ogni nostra realizzazione è ottimizzata in base al medium comunicativo scelto, che si tratti di canali social, YouTube, siti web, spot televisivi o supporti digitali fisici, anche immersivi. 
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <Image
                src="/assets/servizi2/4.png"
                alt="Innovazione tecnologica"
                width={940}
                height={487}
                className="w-full h-[487px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Image on Left, Text on Right */}
      <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Image */}
            <div className="order-1 flex justify-center lg:justify-end pr-8 mb-8 lg:mb-0">
              <Image
                src="/assets/servizi2/5.jpg"
                alt="Innovazione tecnologica"
                width={800}
                height={600}
                className="w-full h-[487px] object-cover shadow-lg"
              />
            </div>

            {/* Right Content - Text */}
            <div className="order-2 pl-8">
              <h3 className="text-black text-[20px] font-normal leading-tight px-4 sm:px-6 lg:pl-10">
                Ogni frame, una storia
              </h3>
              <h2 className="text-[32px] font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
                Riprese ed editing video
              </h2>
              <div className="text-black text-[20px] leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            {/* Left Content - Text */}
            <div className="order-2 lg:order-1 pr-8 pl-18">
              <h3 className="text-black text-[20px] font-normal leading-tight px-4 sm:px-6 lg:pl-10">
              Il suono che fa la differenza
              </h3>
              <h2 className="text-[32px] font-light text-black leading-tight px-4 sm:px-6 lg:pl-10">
              Sound design
              </h2>
              <div className="text-black text-[20px] leading-tight space-y-4 mt-8 px-4 sm:px-6 lg:pr-40 lg:pl-10 font-normal">
                <p>
                Il suono è un linguaggio potente che amplifica e completa l&apos;esperienza visiva. Creiamo paesaggi sonori unici, effetti sincronizzati all&apos;immagine e colonne sonore originali, per dare ritmo e carattere ad ogni progetto. Dal design audio alla colonna sonora, evolviamo i contenuti in esperienze multisensoriali indimenticabili. 
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start mb-8 lg:mb-0">
              <Image
                src="/assets/servizi2/6.png"
                alt="Design e grafica"
                width={800}
                height={600}
                className="w-full h-[487px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextSection; 