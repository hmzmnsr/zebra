import CaseHero from '../../components/case1/CaseHero';
import ImageSection from '../../components/case1/ImageSection';
import ExperienceSection from '../../components/case1/ExperienceSection';
import PowerToolSection from '../../components/case1/PowerToolSection';
import CTASection from '../../components/case1/CTASection';
import ShotGallery from '../../components/case1/ShotGallery';
import UnderImageSection from '../../components/case1/UnderImageSection';
import NewImageSection from '../../components/case1/newimagesection';
import HorizontalImage from '../../components/case1/horizontalimage';

export default function Case() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[1920px]">
        <CaseHero />
        <ImageSection />
        <ExperienceSection />
        <PowerToolSection />
        <UnderImageSection />
        <HorizontalImage/>
        <NewImageSection/>
        <ShotGallery />
        <CTASection />
      </div>
    </div>
  );
}

