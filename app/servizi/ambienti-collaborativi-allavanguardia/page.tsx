import AmbientiHero from '../../components/ambienti/AmbientiHero';
import ServiziServices from '../../components/ambienti/ServiziServices';
import ProcessSection from '../../components/ambienti/ProcessSection';
import InnovationSection from '../../components/ambienti/InnovationSection';
import ExperienceSection from '../../components/ambienti/ExperienceSection';
import UnderImageSection from '../../components/ambienti/UnderImageSection';
import ImageTextSection from '../../components/ambienti/ImageTextSection';
import ShotGallery from '../../components/ambienti/ShotGallery';
import CTASection from '../../components/ambienti/CTASection';

export default function AmbientiPage() {
  return (
    <main>
      <AmbientiHero />
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