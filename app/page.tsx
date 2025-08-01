
import Clients from "./components/homepage/Clients";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Benvenuti in ZEBRA
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Soluzioni innovative per il futuro digitale. Specializzati in tecnologie immersive, 
            produzione di contenuti e ambienti collaborativi all&apos;avanguardia.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors">
              Scopri i nostri servizi
            </button>
            <button className="border border-gray-800 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-800 hover:text-white transition-colors">
              Contattaci
            </button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <Clients />
      
      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
}
