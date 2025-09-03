import EducationHero from '../components/education/EducationHero';
import CTASection from '../components/education/CTASection';
import ServiziFeature from '../components/education/ServiziFeature';
import EduFeature from '../components/education/EduFeature';


export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <EducationHero />

             {/* Prodotti per l'educazione Section */}
      <section className="bg-[#FBFDFC] py-16 md:py-12">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontWeight: 400 }} className="text-2xl md:text-3xl lg:text-4xl text-[#082239] mb-14">
            Prodotti per l&apos;educazione
          </h2>
          <p style={{ fontWeight: 300 }} className="text-lg md:text-lg text-[#082239] leading-none">
            Offriamo kit chiavi in mano e sistemi personalizzati per ogni tipo di attività <br/>
            didattica: dalla simulazione in laboratorio alle aule immersive.
          </p>
        </div>
      </section>
      
      <EduFeature />


    {/* Quote Section */}
    <div className="bg-[#FBFDFC] py-16 md:py-32">
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

      <ServiziFeature />
      

      {/* Contact CTA Section */}
      <CTASection />
      
      {/* Additional content sections can be added here */}
    </div>
  );
} 