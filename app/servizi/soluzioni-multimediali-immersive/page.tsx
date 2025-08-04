import SoluzioniHero from '../../components/soluzioni/SoluzioniHero';
import ServiziServices from '../../components/soluzioni/ServiziServices';
import ProcessSection from '../../components/soluzioni/ProcessSection';
import ExperienceSection from '../../components/soluzioni/ExperienceSection';
import InnovationSection from '../../components/soluzioni/InnovationSection';
import UnderImageSection from '../../components/soluzioni/UnderImageSection';
import ImageTextSection from '../../components/soluzioni/ImageTextSection';
import ShotGallery from '../../components/soluzioni/ShotGallery';
import CTASection from '../../components/soluzioni/CTASection';

export default function SoluzioniPage() {
  return (
    <main className="bg-[#222222]">
      <SoluzioniHero />
      <ServiziServices />
      <ProcessSection />
      <ExperienceSection />
      <InnovationSection />
      <UnderImageSection />
      <ImageTextSection />
      <ShotGallery />
      <CTASection />
    </main>
  );
} 