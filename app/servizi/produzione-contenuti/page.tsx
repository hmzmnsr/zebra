import ProduzioneHero from '../../components/produzione/ProduzioneHero';
import ServiziServices from '../../components/produzione/ServiziServices';
import ProcessSection from '../../components/produzione/ProcessSection';
import ExperienceSection from '../../components/produzione/ExperienceSection';
import ImageSection from '../../components/produzione/ImageSection';
import UnderImageSection from '../../components/produzione/UnderImageSection';
import ImageTextSection from '../../components/produzione/ImageTextSection';
import ShotGallery from '../../components/produzione/ShotGallery';
import CTASection from '../../components/produzione/CTASection';

export default function ProduzionePage() {
  return (
    <main className="bg-[#222222] flex justify-center">
      <div className="w-full max-w-[1920px]">
        <ProduzioneHero />
        <ServiziServices />
        <ProcessSection />
        <ExperienceSection />
        <ImageSection />
        <UnderImageSection />
        <ImageTextSection />
        <ShotGallery />
        <CTASection /> 
      </div>
    </main>
  );
} 