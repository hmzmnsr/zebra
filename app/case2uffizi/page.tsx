import CaseHero from '../components/case2uffizi/CaseHero';
import ImageSection from '../components/case2uffizi/ImageSection';
import ExperienceSection from '../components/case2uffizi/ExperienceSection';
import PowerToolSection from '../components/case2uffizi/PowerToolSection';
import CTASection from '../components/case2uffizi/CTASection';
import ShotGallery from '../components/case2uffizi/ShotGallery';
import UnderImageSection from '../components/case2uffizi/UnderImageSection';
import NewImageSection from '../components/case2uffizi/newimagesection';


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