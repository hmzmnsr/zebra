import ChiSiamoHero from '../components/chi-siamo/ChiSiamoHero';
import ChiSiamoStory from '../components/chi-siamo/ChiSiamoStory';
import ChiSiamoExperience from '../components/chi-siamo/ChiSiamoExperience';
import StatisticsSection from '../components/chi-siamo/StatisticsSection';
import CTASection from '../components/chi-siamo/CTASection';
import UnderImageSection from '../components/chi-siamo/UnderImageSection';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ChiSiamoHero />
       
      {/* Story Section */}
      <ChiSiamoStory />

      <UnderImageSection />
      
      {/* Experience Section */}
      <ChiSiamoExperience />
      <StatisticsSection />

      <CTASection />
      
      {/* Additional content sections can be added here */}
    </div>
  );
} 