import SviluppoHero from '../../components/sviluppo/SviluppoHero';
import ServiziServices from '../../components/sviluppo/ServiziServices';
import ProcessSection from '../../components/sviluppo/ProcessSection';
import ExperienceSection from '../../components/sviluppo/ExperienceSection';
import InnovationSection from '../../components/sviluppo/InnovationSection';
import CTASection from '../../components/sviluppo/CTASection';

export default function SviluppoPage() {
  return (
    <main className="bg-[#2a2a2c] flex justify-center">
      <div className="w-full max-w-[1920px]">
        <SviluppoHero />
        <ServiziServices />
        <ProcessSection />
        <ExperienceSection />
        <InnovationSection />
        <CTASection />
      </div>
    </main>
  );
} 