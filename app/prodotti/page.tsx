import ProdottiHero from '../components/prodotti/ProdottiHero';
import ProductsSection from '../components/prodotti/ProductsSection';
import SoftwareProductsSection from '../components/prodotti/SoftwareProductsSection';
import ContactCTA from '../components/ContactCTA';

export default function Prodotti() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ProdottiHero />
      
      {/* Hardware Section */}
      <section className="bg-[#282d2c] text-white py-32">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Title */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans text-white font-light">
              01 Hardware
            </h2>
          </div>
          
          {/* Two-column layout for content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-100 leading-relaxed font-sans font-light">
                Frutto di un'intensa attività di ricerca e sviluppo, i nostri mediaserver sono progettati per garantire massima flessibilità e affidabilità: gestione di output video in numero illimitato, sistemi audio anche multicanale, acquisizioni video in 4K e controllo di apparati tramite PLC.
              </p>
              
              <p className="text-base md:text-lg text-gray-100 leading-relaxed font-sans font-light">
                Compatibili con i più diffusi sistemi di controllo integrato, gli ARES spaziano dal più compatto controller per digital signage ai mediaserver di fascia alta per la gestione di ambienti immersivi complessi.
              </p>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <p className="text-base md:text-lg text-gray-100 leading-relaxed font-sans font-light">
                Sono disponibili anche versioni personalizzate, configurate in base alle specifiche esigenze di connessione e integrazione.
              </p>
              
              <p className="text-base md:text-lg text-gray-100 leading-relaxed font-sans font-light">
                Ogni mediaserver ZEBRA include un servizio di supporto da remoto, pensato per garantire la massima continuità operativa e intervento tempestivo in caso di necessità. (METTERE ICONA SUPPORTO REMOTO)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Software Section */}
      <section className="bg-white py-32">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header Title */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-sans text-[#2d5016] font-light">
              02 Software
            </h2>
          </div>
          
          {/* Software Description */}
          <div className="max-w-4xl">
            <p className="text-base md:text-lg text-[#2d5016] leading-relaxed font-sans font-light">
              I nostri software proprietari gestiscono la programmazione, automazione e controllo di tutto il nostro hardware. Con affidabilità e accessibilità senza pari.
            </p>
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