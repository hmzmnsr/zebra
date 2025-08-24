import ProdottiHero from '../components/prodotti/ProdottiHero';
import ProductsSection from '../components/prodotti/ProductsSection';
import SoftwareProductsSection from '../components/prodotti/SoftwareProductsSection';
import ContactCTA from '../components/ContactCTA';
import Image from 'next/image';

export default function Prodotti() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ProdottiHero />
      
      {/* Hardware Section */}
      <section className="bg-[#282d2c] text-white py-32">
      <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans text-white font-light">
              01 Hardware
            </h2>
          </div>
          
          {/* Software Description */}
          <div className="max-w-4xl mb-16">
            <p className="text-base md:text-lg text-white leading-relaxed font-sans font-light">
            </p>
          </div>

          {/* Two-column grid for software features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-12">
              
              {/* Feature 1: Ecosystem Management */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/h1.PNG"
                    alt="Ecosystem Management Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-white leading-relaxed font-sans font-light">
                  Frutto di un’intensa attività di ricerca e sviluppo, i nostri mediaserver sono progettati per garantire massima flessibilità e affidabilità: gestione di output video in numero illimitato, sistemi audio anche multicanale, acquisizioni video in 4K e controllo di apparati tramite PLC. 
                  </p>
                </div>
              </div>

              {/* Feature 2: Automation */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/h2.PNG"
                    alt="Automation Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-white leading-relaxed font-sans font-light">
                  Compatibili con i più diffusi sistemi di controllo integrato, gli ARES spaziano dal più compatto controller per digital signage ai mediaserver di fascia alta per la gestione di ambienti immersivi complessi.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              
              {/* Feature 3: Cloud Security */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/h3.PNG"
                    alt="Cloud Security Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-white leading-relaxed font-sans font-light">
                  Sono disponibili anche versioni personalizzate, configurate in base alle specifiche esigenze di connessione e integrazione.
                  </p>
                </div>
              </div>

              {/* Feature 4: Modularity */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/h4.PNG"
                    alt="Modularity Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-white leading-relaxed font-sans font-light">
                  Ogni mediaserver ZEBRA include un servizio di supporto da remoto, pensato per garantire la massima continuità operativa e intervento tempestivo in caso di necessità. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Software Section */}
      <section className="bg-white pt-32 py-24">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans text-[#083933] font-light">
              02 Software
            </h2>
          </div>
          
          {/* Software Description */}
          <div className="max-w-4xl mb-16">
            <p className="text-base md:text-lg text-[#083933] leading-relaxed font-sans font-light">
            </p>
          </div>

          {/* Two-column grid for software features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-12">
              
              {/* Feature 1: Ecosystem Management */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/s1.PNG"
                    alt="Ecosystem Management Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-[#083933] leading-relaxed font-sans font-light">
                  I software ZEBRA consentono di gestire da un&apos;unica piattaforma l&apos;intero ecosistema multimediale: dai contenuti digitali ai dispositivi connessi. L&apos;interfaccia semplice e accessibile anche da remoto, permette un controllo rapido e preciso, senza bisogno di competenze tecniche avanzate.
                  </p>
                </div>
              </div>

              {/* Feature 2: Automation */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/s2.PNG"
                    alt="Automation Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-[#083933] leading-relaxed font-sans font-light">
                  Il nostro software automatizza ogni fase operativa, dalla programmazione dei contenuti alla gestione dell&apos;hardware. Il sistema controlla accensione, spegnimento e funzionamento dei dispositivi in modo sincronizzato, riducendo gli interventi manuali e aumentando l&apos;efficienza dell&apos;intero impianto.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              
              {/* Feature 3: Cloud Security */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/s3.PNG"
                    alt="Cloud Security Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-[#083933] leading-relaxed font-sans font-light">
                  La struttura cloud evoluta garantisce prestazioni stabili nel tempo e altissimi standard di sicurezza contro accessi non autorizzati. I software sono pensati per funzionare in ambienti professionali e critici, dove affidabilità e protezione dei dati sono fondamentali.
                  </p>
                </div>
              </div>

              {/* Feature 4: Modularity */}
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/assets/prodotti/s4.PNG"
                    alt="Modularity Icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-base text-[#083933] leading-relaxed font-sans font-light">
                  Grazie alla loro natura modulare e configurabile, i software si adattano a qualsiasi contesto d&apos;uso: museale, corporate, educational, retail, fieristico; e dialogano con tutti i dispositivi del sistema: luci, schermi, automazioni, sensoristica e altro ancora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Products Section */}
      <SoftwareProductsSection />

      {/* Contact CTA Section */}
      <ContactCTA />
      
      {/* Additional content sections can be added here */}
    </div>
  );
} 