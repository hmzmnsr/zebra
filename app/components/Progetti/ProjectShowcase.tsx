'use client';

import Image from 'next/image';
import Link from 'next/link';

const ProjectShowcase = () => {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="max-w-8xl mx-auto px-4 md:px-2">
        {/* First Project */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center py-8 md:py-12">
          
          {/* Project Image - Takes 3 columns (1.2 parts) */}
          <div className="relative lg:col-span-3">
            <Image
              src="/assets/progetti/sala.jpg"
              alt="Accenture Sala meeting immersiva"
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
            />
          </div>
          
          {/* Project Content - Takes 2 columns (0.8 parts) */}
          <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:mr-8">
            {/* Project Header */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-gray-900">
                Accenture
              </h2>
              <h3 className="text-2xl md:text-4xl text-gray-700">
                Sala meeting immersiva
              </h3>
            </div>
            
            {/* Project Description */}
            <div className="text-gray-600 leading-tight text-sm md:text-base">
              <p>
                Uno spazio progettato per elevare meeting e presentazioni a un nuovo livello di efficacia e coinvolgimento. La tecnologia di base è ZEBRA, un sistema avanzato ma intuitivo.
              </p>
              
              <p>
                Uno spazio versatile dove la collaborazione si fonde con l&apos;interattività, migliorando le performance operative. Uno strumento sorprendente capace di coinvolgere i clienti in presentazioni immersive e comunicare concetti in modo chiaro, impattante e memorabile.
              </p>
              
              <p>
                Una batteria di videoproiettori crea una superficie di visualizzazione panoramica ad alta risoluzione. Sistemi audio, microfoni e telecamere intelligenti abilitano una comunicazione fluida, anche da remoto.
              </p>
              
              <p>
                L&apos;intero sistema è gestito da ARES Media Engine per garantire alte performance, facilità d&apos;uso e controllo totale. Il supporto tecnico da remoto fornisce assistenza in tempo reale, assicurando che ogni sessione rispetti le aspettative.
              </p>
            </div>
            
            {/* Call to Action Button - Positioned at bottom right */}
            <div className="text-center md:text-right">
              <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Second Project - Reversed Layout on Desktop Only */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
          
          {/* Project Image - Takes 3 columns (1.2 parts) - On mobile: first, On desktop: second */}
          <div className="relative lg:col-span-3 lg:order-2">
            <Image
              src="/assets/progetti/vid.png"
              alt="Beta Utensili Video 3D Avvitatore Oilless"
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
            />
          </div>
          
          {/* Project Content - Takes 2 columns (0.8 parts) - On mobile: second, On desktop: first */}
          <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-8 lg:order-1">
            {/* Project Header */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-gray-900">
                Beta Utensili
              </h2>
              <h3 className="text-2xl md:text-4xl text-gray-700">
                Video 3D Avvitatore Oilless
              </h3>
            </div>
            
            {/* Project Description */}
            <div className="text-gray-600 leading-tight text-sm md:text-base">
              <p>
              In occasione del lancio del rivoluzionario avvitatore Oil-Less, Beta Utensili ci ha affidato la realizzazione di un contenuto 3D ad alto impatto visivo, capace di esprimere l&apos;elevato livello di innovazione tecnica e la raffinatezza progettuale del prodotto.
              </p>
              
              <p>
              Attraverso una modellazione accurata, animazioni fluide e visual effects fotorealistici, abbiamo dato vita al prodotto evidenziandone materiali, dettagli costruttivi e funzionalità, anche attraverso efficaci comparazioni con i competitor. 
              </p>
              <p>
              L&apos;intero progetto è stato curato nei minimi dettagli: il sound design, sincronizzato con le animazioni, valorizza le dinamiche del racconto; il background richiama l&apos;immagine coordinata del brand; mentre le text animation comunicano i dati tecnici in modo chiaro ed elegante, mantenendo uno stile essenziale e coinvolgente. 
              </p>
            </div>
            
            {/* Call to Action Button - Positioned at bottom right */}
            <div className="text-center md:text-right">
              <Link href="/case" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="bg-white py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg md:text-xl lg:text-4xl text-gray-900 leading-tight font-sans text-center md:text-left pl-0 md:pl-28">
            Quando la conoscenza diventa esperienza, nasce un
          </p>
          <p className="text-lg md:text-xl lg:text-4xl text-gray-900 leading-tight font-sans text-center md:text-left">
            apprendimento che emoziona, coinvolge e resta impresso nella
          </p>
          <p className="text-lg md:text-xl lg:text-4xl text-gray-900 leading-tight font-sans text-center md:text-left">
            memoria
          </p>
        </div>
      </div>

      {/* Third Project - Image Left, Content Right */}
      <div className="max-w-8xl mx-auto px-4 md:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center pb-8 md:pb-12">
          
          {/* Project Image - Takes 3 columns (1.2 parts) */}
          <div className="relative lg:col-span-3">
            <Image
              src="/assets/progetti/sala.jpg"
              alt="Project Three"
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
            />
          </div>
          
          {/* Project Content - Takes 2 columns (0.8 parts) */}
          <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:mr-8">
            {/* Project Header */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-gray-900">
                Beta CDA
              </h2>
              <h3 className="text-2xl md:text-4xl text-gray-700">
                Sala Conferenze
              </h3>
            </div>
            
            {/* Project Description */}
            <div className="text-gray-600 leading-tight text-sm md:text-base">
              <p>
                All&apos;interno dei nuovi headquarters di Beta Utensili, ZEBRA è stata incaricata di progettare e realizzare il sistema tecnologico per la sala del Consiglio di amministrazione: uno spazio iconico dove design e funzionalità si incontrano.
              </p>
              
              <p>
              L&apos;obiettivo era chiaro: garantire riunioni e presentazioni altamente efficaci, potenziando la condivisione dei contenuti e la comunicazione con i partecipanti da remoto. Ai margini della spettacolare Jordan F1 sospesa al soffitto, abbiamo integrato con discrezione videoproiettori, sistemi audio, microfoni intelligenti e telecamere per ottenere un ambiente tecnologicamente evoluto ma visivamente pulito.
              </p>
              
              <p>
              Il tutto è gestito tramite un&apos;interfaccia intuitiva da tablet, che consente di attivare l&apos;intero sistema conference in pochi secondi, semplificando l&apos;avvio di ogni riunione e migliorando l&apos;efficienza operativa. 
              </p>
            </div>
            
            {/* Call to Action Button - Positioned at bottom right */}
            <div className="text-center md:text-right">
              <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Project - Content Left, Image Right on Desktop Only */}
      <div className="max-w-8xl mx-auto px-4 md:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
          
          {/* Project Image - Takes 3 columns (1.2 parts) - On mobile: first, On desktop: second */}
          <div className="relative lg:col-span-3 lg:order-2">
            <Image
              src="/assets/progetti/vid.png"
              alt="Project Four"
              width={600}
              height={400}
              className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
            />
          </div>
          
          {/* Project Content - Takes 2 columns (0.8 parts) - On mobile: second, On desktop: first */}
          <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-8 lg:order-1">
            {/* Project Header */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-gray-900">
                EPSON ISE, Barcellona
              </h2>
              <h3 className="text-2xl md:text-4xl text-gray-700">
              Soluzioni per fiere e musei
              </h3>
            </div>
            
            {/* Project Description */}
            <div className="text-gray-600 leading-tight text-sm md:text-base">
              <p>
              In occasione della fiera ISE di Barcellona, il nostro partner strategico EPSON, leader mondiale nella videoproiezione, ci ha affidato la progettazione e realizzazione del suo stand immersivo: uno spazio concepito per esaltare versatilità e qualità delle soluzioni di videoproiezione firmate EPSON. 
              </p>
              
              <p>
              Dalla fase di concept creativo alla gestione tecnica in loco, ZEBRA ha curato ogni aspetto della realizzazione, trasformando lo stand in una vera e propria opera immersiva ad altissima risoluzione, animata da un racconto digitale coinvolgente, creato per omaggiare la città di Barcellona e i grandi maestri della pittura spagnola. 
              </p>
              
              <p>
              Un&apos;esperienza visiva emozionante, visitata da migliaia di persone, che ha permesso a EPSON di aggiudicarsi il premio come miglior stand della manifestazione. 
              </p>
            </div>
            
            {/* Call to Action Button - Positioned at bottom right */}
            <div className="text-center md:text-right">
              <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fifth Project - Image Left, Content Right */}
      <div className="bg-white py-8 md:py-12">
        <div className="max-w-8xl mx-auto px-4 md:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) */}
            <div className="relative lg:col-span-3">
              <Image
                src="/assets/progetti/sala.jpg"
                alt="Project Five"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:mr-8">
              {/* Project Header */}
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl text-gray-900">
                Sala Immersive Ulisse, Centro TOG Milano
                </h2>
                <h3 className="text-2xl md:text-4xl text-gray-700">
                Soluzioni Medico-Terapeutiche
                </h3>
              </div>
              
              {/* Project Description */}
              <div className="text-gray-600 leading-tight text-sm md:text-base">
                <p>
                Il Centro TOG di Milano è un&apos;eccellenza nel trattamento di bambini con disabilità cognitive e neurologiche, da sempre in prima linea nell&apos;adozione di approcci innovativi in campo terapeutico. ZEBRA ha scelto di diventare partner attivo del progetto, mettendo a disposizione le proprie competenze tecnologico-esperienziali. Dalla collaborazione con le terapeute del centro è nata una stanza immersiva interattiva, un ambiente progettato a quattro mani per offrire ai piccoli pazienti trattamenti personalizzati e potenziati, calibrati sulle esigenze individuali. 
                </p>
                
                <p>
                Grazie alla combinazione di immersività, interattività e know-how terapeutico, abbiamo realizzato una sala dove i bambini possono esplorare scenari 3D coinvolgenti – dai fondali marini ai boschi innevati – pensati per stimolare i sensi, favorire l&apos;apprendimento e regalare momenti di libertà ed emozione. 
                </p>
                
                <p>
                Un progetto pionieristico che ha attirato l&apos;attenzione del settore e dei media, aprendo nuove prospettive sull&apos;uso delle tecnologie immersive in ambito medico-terapeutico. Un percorso di crescita che prosegue, alimentato dalla collaborazione continua con gli amici di TOG e dall&apos;impegno condiviso nell&apos;innovazione al servizio delle persone. 
                </p>
              </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sixth Project - Content Left, Image Right on Desktop Only */}
      <div className="bg-white">
        <div className="max-w-8xl mx-auto px-4 md:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) - On mobile: first, On desktop: second */}
            <div className="relative lg:col-span-3 lg:order-2">
              <Image
                src="/assets/progetti/vid.png"
                alt="Project Six"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) - On mobile: second, On desktop: first */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:ml-8 lg:order-1">
              {/* Project Header */}
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl text-gray-900">
                Sfilata maison Pierre Cardin, Parigi e Guyana francese 
                </h2>
                <h3 className="text-2xl md:text-4xl text-gray-700">
                Soluzioni per eventi
                </h3>
              </div>
              
              {/* Project Description */}
              <div className="text-gray-600 leading-tight text-sm md:text-base">
                <p>
                l nostro prodotto immersivo più conosciuto: uno spazio di proiezione panoramica di oltre 6 metri di base che permette di insegnare entrando letteralmente nella materia. L&apos;intera superficie è interattiva, trasformando ogni lezione in un&apos;esperienza dinamica e partecipativa. 
                </p>
                
                <p>
                Già adottato da oltre 500 scuole in tutta Italia, è dotato di un vastissimo repertorio di scenari 3D multilingua, pensati per rendere ogni lezione interattiva, coinvolgente e indimenticabile. 
                </p>
                
                <p>
                Il supporto tecnico da remoto incluso garantisce massima continuità operativa in ogni momento. 
                </p>
              </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right">
                <button className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 