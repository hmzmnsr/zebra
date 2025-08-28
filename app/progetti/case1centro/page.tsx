import CaseHero from '../../components/case1centro/CaseHero';
import ImageSection from '../../components/case1centro/ImageSection';
import ExperienceSection from '../../components/case1centro/ExperienceSection';
import PowerToolSection from '../../components/case1centro/PowerToolSection';
import CTASection from '../../components/case1centro/CTASection';
import UnderImageSection from '../../components/case1centro/UnderImageSection';
import NewImageSection from '../../components/case1centro/newimagesection';


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

