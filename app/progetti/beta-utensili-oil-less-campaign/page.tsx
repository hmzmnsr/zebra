import CaseHero from '../../components/case/CaseHero';
import ImageSection from '../../components/case/ImageSection';
import ExperienceSection from '../../components/case/ExperienceSection';
import PowerToolSection from '../../components/case/PowerToolSection';
import CTASection from '../../components/case/CTASection';
import ShotGallery from '../../components/case/ShotGallery';
import UnderImageSection from '../../components/case/UnderImageSection';
import TechStack from '../../components/case/techstack';


export default function Case() {
  return (
    <div className="min-h-screen bg-white">
      <CaseHero />
      <ImageSection />
      <ExperienceSection />
      <PowerToolSection />
      <UnderImageSection />
      <ShotGallery />
      <CTASection />
    </div>
  );
}

