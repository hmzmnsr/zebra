import SviluppoHero from '../../components/sviluppo/SviluppoHero';
import ServiziServices from '../../components/sviluppo/ServiziServices';
import ProcessSection from '../../components/sviluppo/ProcessSection';
import ExperienceSection from '../../components/sviluppo/ExperienceSection';
import InnovationSection from '../../components/sviluppo/InnovationSection';
import CTASection from '../../components/sviluppo/CTASection';

export default function SviluppoPage() {
  return (
    <main>
      <SviluppoHero />
      <ServiziServices />
      <ProcessSection />
      <ExperienceSection />
      <InnovationSection />
      <CTASection />
    </main>
  );
} 