import CaseHero from '../../components/case2betaise/CaseHero';
import ImageSection from '../../components/case2betaise/ImageSection';
import ExperienceSection from '../../components/case2betaise/ExperienceSection';
import PowerToolSection from '../../components/case2betaise/PowerToolSection';
import CTASection from '../../components/case2betaise/CTASection';
import ShotGallery from '../../components/case2betaise/ShotGallery';
import UnderImageSection from '../../components/case2betaise/UnderImageSection';
import HorizontalImage from '../../components/case2betaise/horizontalimage';
import NewImageSection from '../../components/case2betaise/newimagesection';
import TechStack from '../../components/case2betaise/techstack';


export default function Case() {
  return (
    <div className="min-h-screen bg-white">
      <CaseHero />
      <ImageSection />
      <ExperienceSection />
      <PowerToolSection />
      <UnderImageSection />
      <NewImageSection/>
      <TechStack />
      <HorizontalImage />
      <ShotGallery />
      <CTASection />
    </div>
  );
}

