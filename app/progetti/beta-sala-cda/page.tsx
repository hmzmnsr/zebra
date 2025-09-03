import CaseHero from '../../components/case1beta/CaseHero';
import ImageSection from '../../components/case1beta/ImageSection';
import ExperienceSection from '../../components/case1beta/ExperienceSection';
import PowerToolSection from '../../components/case1beta/PowerToolSection';
import CTASection from '../../components/case1beta/CTASection';
import UnderImageSection from '../../components/case1beta/UnderImageSection';
import NewImageSection from '../../components/case1beta/newimagesection';


export default function Case() {
  return (
    <div className="min-h-screen bg-white">
      <CaseHero />
      <ImageSection />
      <ExperienceSection />
      <PowerToolSection />
      <UnderImageSection /> 
      <NewImageSection/>
      <CTASection />
    </div>
  );
}

