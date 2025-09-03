'use client';

import Image from 'next/image';
import Link from 'next/link';

const ProjectShowcase = () => {
  return (
    <section className="bg-white pt-16 md:pt-32 pb-28 md:pb-12">
      <div className="max-w-8xl mx-auto">
                 {/* First Project */}
         <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
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
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                 Sala meeting immersiva
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                 Accenture Immersive Room
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Uno spazio progettato per portare meeting e presentazioni a un nuovo livello di efficacia e coinvolgimento
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 La tecnologia ZEBRA è il cuore di questo ambiente immersivo: un sistema avanzato nella configurazione ma estremamente intuitivo nell&apos;utilizzo. Uno spazio polivalente, dove la collaborazione si fonde con l&apos;interattività, migliorando le performance operative. Uno strumento sorprendente, capace di coinvolgere il cliente in presentazioni immersive e comunicare concetti in modo chiaro, impattante e memorabile
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Un array di videoproiettori crea una superficie di visualizzazione panoramica ad altissima risoluzione, mentre sistemi audio, microfoni e telecamere intelligenti permettono una comunicazione fluida anche da remoto.
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Il tutto è gestito da ARES Media Engine, per garantire prestazioni elevate, flessibilità d&apos;uso e pieno controllo.
                 </p>

                               
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Il supporto tecnico da remoto assicura assistenza in tempo reale, affinché ogni sessione sia sempre all&apos;altezza delle aspettative.
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center lg:text-right mt-auto">
                 <Link href="/progetti/accenture-immersive-meeting-space" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

                 {/* Second Project - Reversed Layout on Desktop Only */}
         <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-12 overflow-hidden">
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
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:order-1 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                   Beta Utensili
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                   Video 3D Avvitatore Oilless
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 In occasione del lancio del rivoluzionario avvitatore Oil-Less, Beta Utensili ci ha affidato la realizzazione di un contenuto 3D ad alto impatto visivo, capace di esprimere l&apos;elevato livello di innovazione tecnica e la raffinatezza progettuale del prodotto.
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Attraverso una modellazione accurata, animazioni fluide e visual effects fotorealistici, abbiamo dato vita al prodotto evidenziandone materiali, dettagli costruttivi e funzionalità, anche attraverso efficaci comparazioni con i competitor. 
                 </p>
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 L&apos;intero progetto è stato curato nei minimi dettagli: il sound design, sincronizzato con le animazioni, valorizza le dinamiche del racconto; il background richiama l&apos;immagine coordinata del brand; mentre le text animation comunicano i dati tecnici in modo chiaro ed elegante, mantenendo uno stile essenziale e coinvolgente. 
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center lg:text-right mt-auto">
                <Link href="/progetti/beta-utensili-oil-less-campaign" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="bg-white py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-lg md:text-xl lg:text-4xl text-[#082239] leading-tight font-sans text-center md:text-left pl-0 md:pl-28">
            Quando la conoscenza diventa esperienza, nasce un
          </p>
          <p className="text-lg md:text-xl lg:text-4xl text-[#082239] leading-tight font-sans text-center md:text-left">
            apprendimento che emoziona, coinvolge e resta impresso nella
          </p>
          <p className="text-lg md:text-xl lg:text-4xl text-[#082239] leading-tight font-sans text-center md:text-left">
            memoria
          </p>
        </div>
      </div>

               {/* Third Project - Image Left, Content Right */}
         <div className="max-w-8xl mx-auto">
           <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) */}
            <div className="relative lg:col-span-3">
              <Image
                src="/assets/progetti/3.jpg"
                alt="Project Three"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                   Beta CDA
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                   Sala Conferenze
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                   All&apos;interno dei nuovi headquarters di Beta Utensili, ZEBRA è stata incaricata di progettare e realizzare il sistema tecnologico per la sala del Consiglio di amministrazione: uno spazio iconico dove design e funzionalità si incontrano.
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 L&apos;obiettivo era chiaro: garantire riunioni e presentazioni altamente efficaci, potenziando la condivisione dei contenuti e la comunicazione con i partecipanti da remoto. Ai margini della spettacolare Jordan F1 sospesa al soffitto, abbiamo integrato con discrezione videoproiettori, sistemi audio, microfoni intelligenti e telecamere per ottenere un ambiente tecnologicamente evoluto ma visivamente pulito.
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Il tutto è gestito tramite un&apos;interfaccia intuitiva da tablet, che consente di attivare l&apos;intero sistema conference in pochi secondi, semplificando l&apos;avvio di ogni riunione e migliorando l&apos;efficienza operativa. 
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right lg:text-right mt-auto">
                 <Link href="/progetti/beta-sala-cda" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

               {/* Fourth Project - Content Left, Image Right on Desktop Only */}
         <div className="max-w-8xl mx-auto">
           <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) - On mobile: first, On desktop: second */}
            <div className="relative lg:col-span-3 lg:order-2">
              <Image
                src="/assets/progetti/4.jpg"
                alt="Project Four"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) - On mobile: second, On desktop: first */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:order-1 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                 Soluzioni per fiere e musei
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                 EPSON Booth ISE Barcellona
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 In occasione della fiera ISE di Barcellona, il nostro partner strategico EPSON, leader mondiale nella videoproiezione, ci ha affidato la progettazione e realizzazione del suo stand immersivo: uno spazio concepito per esaltare versatilità e qualità delle soluzioni di videoproiezione firmate EPSON. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Dalla fase di concept creativo alla gestione tecnica in loco, ZEBRA ha curato ogni aspetto della realizzazione, trasformando lo stand in una vera e propria opera immersiva ad altissima risoluzione, animata da un racconto digitale coinvolgente, creato per omaggiare la città di Barcellona e i grandi maestri della pittura spagnola. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Un&apos;esperienza visiva emozionante, visitata da migliaia di persone, che ha permesso a EPSON di aggiudicarsi il premio come miglior stand della manifestazione. 
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right lg:text-right mt-auto">
                 <Link href="/progetti/epson-booth-ise-barcellona" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fifth Project - Image Left, Content Right */}
      <div className="max-w-8xl mx-auto">
        <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) */}
            <div className="relative lg:col-span-3">
              <Image
                src="/assets/progetti/5.jpg"
                alt="Project Five"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                 Soluzioni Medico-Terapeutiche
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                 Sala Ulisse, Centro TOG Milano
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Il Centro TOG di Milano è un&apos;eccellenza nel trattamento di bambini con disabilità cognitive e neurologiche, da sempre in prima linea nell&apos;adozione di approcci innovativi in campo terapeutico. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 ZEBRA ha scelto di diventare partner attivo del progetto, mettendo a disposizione le proprie competenze tecnologico-esperienziali. Dalla collaborazione con le terapeute del centro è nata una stanza immersiva interattiva, un ambiente progettato a quattro mani per offrire ai piccoli pazienti trattamenti personalizzati e potenziati, calibrati sulle esigenze individuali. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Grazie alla combinazione di immersività, interattività e know-how terapeutico, abbiamo realizzato una sala dove i bambini possono esplorare scenari 3D coinvolgenti – dai fondali marini ai boschi innevati – pensati per stimolare i sensi, favorire l&apos;apprendimento e regalare momenti di libertà ed emozione. 
                 </p>

                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Un progetto pionieristico che ha attirato l&apos;attenzione del settore e dei media, aprendo nuove prospettive sull&apos;uso delle tecnologie immersive in ambito medico-terapeutico. Un percorso di crescita che prosegue, alimentato dalla collaborazione continua con gli amici di TOG e dall&apos;impegno condiviso nell&apos;innovazione al servizio delle persone. 
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right mt-auto">
              <Link href="/progetti/sala-ulisse-centro-tog-milano" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sixth Project - Content Left, Image Right on Desktop Only */}
      <div className="max-w-8xl mx-auto">
        <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) - On mobile: first, On desktop: second */}
            <div className="relative lg:col-span-3 lg:order-2">
              <Image
                src="/assets/progetti/6.jpg"
                alt="Project Six"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) - On mobile: second, On desktop: first */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:order-1 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                 Soluzioni per eventi
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                 Immersive Runway Pierre Cardin, Parigi e Guyana francese 
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Un lanciatore spaziale, una maison leggendaria, l&apos;Agenzia Spaziale Europea e la visione creativa di ZEBRA. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Da questo connubio è nato uno degli eventi più spettacolari e audaci degli ultimi anni: due sfilate gemelle firmate Pierre Cardin, andate in scena a Parigi e nella Guyana Francese, all&apos;ombra dell&apos;iconico razzo Ariane 5. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 ZEBRA ha curato la realizzazione di un videomapping monumentale sul razzo, concepito per raccontare – attraverso immagini, luce e movimento – la narrazione alla base della sfilata, culminata con un epilogo simbolico: il lancio verso lo spazio. 
                 </p>

                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Oltre 300.000 lumen hanno illuminato le notti parigine e sudamericane per uno show trasmesso in diretta mondiale, dove la tecnologia ZEBRA è stata chiamata a garantire prestazioni impeccabili e massima affidabilità, in un contesto tecnico e simbolico di altissimo livello. 
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right lg:text-right mt-auto">
              <Link href="/progetti/immersive-runway-pierre-cardin" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* Fifth Project - Image Left, Content Right */}
        <div className="max-w-8xl mx-auto">
          <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
              
              {/* Project Image - Takes 3 columns (1.2 parts) */}
              <div className="relative lg:col-span-3">
                <Image
                  src="/assets/progetti/7.jpg"
                  alt="Project Five"
                  width={600}
                  height={400}
                  className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
                />
              </div>
              
              {/* Project Content - Takes 2 columns (0.8 parts) */}
              <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                                 {/* Project Header */}
                 <div className="space-y-0">
                   <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                   Simulatori e Demo Center 
                   </h2>
                   <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                   AGCO Agridome
                   </h3>
                 </div>
                 
                 {/* Project Description */}
                 <div className="text-[#082239] leading-tight text-sm md:text-base">
                   <p style={{ fontWeight: 407 }} className="leading-none">
                   Il colosso della meccanizzazione agricola AGCO ha affidato a ZEBRA e Mosaico una doppia sfida: realizzare un simulatore per la trebbia di punta IDEAL e progettare un demo center esperienziale capace di trasmettere il know-how e l&apos;identità del brand. 
                   </p>
                   
                   <p style={{ fontWeight: 407 }} className="leading-none">
                   Per il simulatore, abbiamo sviluppato un sistema visuale immersivo che replica con precisione il lavoro in campo, utilizzando la cabina reale della trebbia come superficie di proiezione e centro di comando. Questo strumento innovativo, pensato per la formazione di clienti e forza vendita, viene utilizzato in eventi internazionali, permettendo di testare il prodotto senza uscire dalla sala o dalla fiera. 
                   </p>
                   
                   <p style={{ fontWeight: 407 }} className="leading-none">
                   Parallelamente, presso l&apos;AGCO Agridome di Breganze, abbiamo creato un percorso immersivo che guida il visitatore attraverso tutte le fasi di sviluppo del prodotto – dalla prototipazione al rilascio. Sale immersive, supporti digitali interattivi e videomapping su mockup trasformano la visita in un&apos;esperienza coinvolgente e memorabile, pensata per rafforzare il legame con il marchio e valorizzare l&apos;eccellenza tecnologica del gruppo AGCO. 
                   </p>
                 </div>
                
                {/* Call to Action Button - Positioned at bottom right */}
                <div className="text-center md:text-right lg:text-right mt-auto">
                <Link href="/progetti/agco-agridome" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                  <span>Scopri di più</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* Sixth Project - Content Left, Image Right on Desktop Only */}
      <div className="max-w-8xl mx-auto">
        <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) - On mobile: first, On desktop: second */}
            <div className="relative lg:col-span-3 lg:order-2">
              <Image
                src="/assets/progetti/8.jpg"
                alt="Project Six"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) - On mobile: second, On desktop: first */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 lg:order-1 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                 Soluzioni multimediali immersive per i musei
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                 Galleria degli Uffizi 
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 In occasione della mostra &ldquo;Il Codice Leicester&rdquo; di Leonardo da Vinci, la Galleria degli Uffizi di Firenze ha coinvolto il team ZEBRA nella progettazione e realizzazione di exhibit digitali interattivi per immergere i visitatori nell&apos;universo visionario del genio toscano. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Cascate digitali che scorrono su pareti e pavimenti, proiezioni di grande formato pensate per spiegare concetti e dettagli con efficacia visiva, e supporti digitali interattivi che permettono di sfogliare e tradurre in tempo reale le pagine originali del Codice Leicester – concesso per l&apos;occasione da Bill Gates – hanno trasformato l&apos;esperienza museale in un viaggio emozionale e conoscitivo senza precedenti. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Un perfetto equilibrio tra tecnologia e patrimonio culturale, in cui le nostre soluzioni immersive hanno affiancato uno dei più preziosi manoscritti del Rinascimento, amplificandone la forza narrativa e rendendola accessibile a tutti  
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right lg:text-right mt-auto">
              <Link href="/progetti/il-codice-leicester-galleria-degli-uffizi" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>




       {/* Fifth Project - Image Left, Content Right */}
       <div className="max-w-8xl mx-auto">
        <div className="bg-gray-100 rounded-lg px-6 md:px-8 mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center">
            
            {/* Project Image - Takes 3 columns (1.2 parts) */}
            <div className="relative lg:col-span-3">
              <Image
                src="/assets/progetti/9.jpg"
                alt="Project Five"
                width={600}
                height={400}
                className="w-full h-[280px] md:h-[480px] object-cover shadow-lg"
              />
            </div>
            
            {/* Project Content - Takes 2 columns (0.8 parts) */}
            <div className="space-y-4 md:space-y-6 relative lg:col-span-2 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
                             {/* Project Header */}
               <div className="space-y-0">
                 <h2 style={{ fontWeight: 400 }} className="text-lg md:text-xl text-[#082239]">
                 Storytelling immersivo
                 </h2>
                 <h3 style={{ fontWeight: 250 }} className="text-2xl md:text-4xl text-[#082239]">
                 Cantine Oniverse (gruppo Calzedonia) 
                 </h3>
               </div>
               
               {/* Project Description */}
               <div className="text-[#082239] leading-tight text-sm md:text-base">
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Terreni diversi, identità uniche, vini d&apos;eccellenza. 
                 Dai suoli vulcanici di Lanuvio a quelli carichi di salsedine di Alghero, le cantine Tenimenti Leone e Podere Guardia Grande, parte del gruppo Oniverse (Calzedonia), hanno scelto ZEBRA per raccontare il valore dei propri luoghi attraverso storytelling immersivi ad alto impatto emozionale.
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Dal concept narrativo alla produzione video, fino all&apos;installazione delle tecnologie immersive, abbiamo curato l&apos;intero percorso esperienziale, creando due viaggi sensoriali pensati per coinvolgere i visitatori e trasportarli nell&apos;anima autentica dei territori e dei vini. 
                 </p>
                 
                 <p style={{ fontWeight: 407 }} className="leading-none">
                 Un racconto visivo che fonde territorio, cultura e prodotto, pensato per rafforzare il legame emotivo tra l&apos;ospite e l&apos;identità delle cantine. 
                 </p>
               </div>
              
              {/* Call to Action Button - Positioned at bottom right */}
              <div className="text-center md:text-right lg:text-right mt-auto">
              <Link href="/progetti/cantine-oniverse-gruppo-calzedonia" className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#F5F5F5] text-black border-t border-l border-b border-[#D0E0E0] hover:bg-gray-100 transition-colors text-sm md:text-base">
                <span>Scopri di più</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 