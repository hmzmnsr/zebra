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
      <section className="bg-[#FBFDFC] py-16 md:pt-12 md:pb-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 style={{ fontWeight: 400 }} className="text-[48px] text-[#082239] mb-14">
            Prodotti per l&apos;educazione
          </h2>
          <p style={{ fontWeight: 300 }} className="text-[32px] text-[#082239] leading-none">
            Offriamo kit chiavi in mano e sistemi personalizzati per ogni tipo di attività <br/>
            didattica: dalla simulazione in laboratorio alle aule immersive.
          </p>
        </div>
      </section>
      
      <EduFeature />


    {/* Quote Section */}
    <div className="bg-[#FBFDFC] py-16 md:py-60">
        <div className="max-w-8xl mx-auto px-44">
          <p style={{ fontWeight: 400 }} className="text-[50px] text-[#082239] leading-none font-sans text-center md:text-left pl-0 md:pl-28">
            Quando la conoscenza diventa esperienza, nasce un
          </p>
          <p style={{ fontWeight: 400 }} className="text-[50px] text-[#082239] leading-none font-sans text-center md:text-left">
            apprendimento che emoziona, coinvolge e resta impresso per sempre
          </p>
          <p style={{ fontWeight: 400 }} className="text-[50px] text-[#082239] leading-none font-sans text-center md:text-left">
          nella memoria.
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