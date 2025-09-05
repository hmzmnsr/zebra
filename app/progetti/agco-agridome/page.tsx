import CaseHero from '../../components/case1agco/CaseHero';
import ImageSection from '../../components/case1agco/ImageSection';
import ExperienceSection from '../../components/case1agco/ExperienceSection';
import PowerToolSection from '../../components/case1agco/PowerToolSection';
import CTASection from '../../components/case1agco/CTASection';
import UnderImageSection from '../../components/case1agco/UnderImageSection';


export default function Case() {
  return (
    <div className="min-h-screen bg-[#fbfdfc]">
      <CaseHero />
      <ImageSection />
      <ExperienceSection />
      <PowerToolSection />
      <UnderImageSection />
      <CTASection />
    </div>
  );
}

