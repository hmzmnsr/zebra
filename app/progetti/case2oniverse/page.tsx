import CaseHero from '../../components/case1/CaseHero';
import ImageSection from '../../components/case1/ImageSection';
import ExperienceSection from '../../components/case1/ExperienceSection';
import PowerToolSection from '../../components/case1/PowerToolSection';
import CTASection from '../../components/case1/CTASection';
import ShotGallery from '../../components/case1/ShotGallery';
import UnderImageSection from '../../components/case1/UnderImageSection';
import NewImageSection from '../../components/case1/newimagesection';


export default function Case() {
  return (
    <div className="min-h-screen bg-white">
      <CaseHero />
      <ImageSection />
      <ExperienceSection />
      <PowerToolSection />
      <UnderImageSection />
      <NewImageSection/>
      <ShotGallery />
      <CTASection />
    </div>
  );
}

