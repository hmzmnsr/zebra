import CaseHero from '../../components/case1accenture/CaseHero';
import ImageSection from '../../components/case1accenture/ImageSection';
import ExperienceSection from '../../components/case1accenture/ExperienceSection';
import PowerToolSection from '../../components/case1accenture/PowerToolSection';
import CTASection from '../../components/case1accenture/CTASection';
import UnderImageSection from '../../components/case1accenture/UnderImageSection';
import NewImageSection from '../../components/case1accenture/newimagesection';


export default function Case() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[1920px]">
        <CaseHero />
        <ImageSection />
        <ExperienceSection />
        <PowerToolSection />
        <UnderImageSection />
        <NewImageSection/>
        <CTASection />
      </div>
    </div>
  );
}
