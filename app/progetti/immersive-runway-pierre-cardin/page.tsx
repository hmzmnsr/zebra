import CaseHero from '../../components/case1pierre/CaseHero';
import ImageSection from '../../components/case1pierre/ImageSection';
import ExperienceSection from '../../components/case1pierre/ExperienceSection';
import PowerToolSection from '../../components/case1pierre/PowerToolSection';
import CTASection from '../../components/case1pierre/CTASection';
import UnderImageSection from '../../components/case1pierre/UnderImageSection';
import NewImageSection from '../../components/case1pierre/newimagesection';
import ShotGallery from '../../components/case1pierre/ShotGallery';


export default function Case() {
  return (
    <div className="min-h-screen bg-white">
      <CaseHero />
      <ImageSection />
      <ExperienceSection />
      <PowerToolSection />
      <UnderImageSection /> 
      <NewImageSection/>
      <ShotGallery/>
      <CTASection />
    </div>
  );
}

