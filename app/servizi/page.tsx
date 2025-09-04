import ServiziHero from '../components/servizi/ServiziHero';
import ServiziServices from '../components/servizi/ServiziServices';
import ServiziFeature from '../components/servizi/ServiziFeature';
import ServiziContent from '../components/servizi/ServiziContent';
import ServiziQuote from '../components/servizi/ServiziQuote';
import ContactCTA from '../components/servizi/ContactCTA';

export default function ServiziPage() {
  return (
    <main className="bg-[#FBFDFC]">
      <ServiziHero />
      <ServiziServices />
      <ServiziFeature />
      <ServiziQuote />
      <ServiziContent />
      <ContactCTA />
    </main>
  );
} 