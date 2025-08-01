import ChiSiamoHero from '../components/chi-siamo/ChiSiamoHero';
import ChiSiamoStory from '../components/chi-siamo/ChiSiamoStory';
import ChiSiamoExperience from '../components/chi-siamo/ChiSiamoExperience';
import ChiSiamoFeatures from '../components/chi-siamo/ChiSiamoFeatures';
import ChiSiamoThreeColumns from '../components/chi-siamo/ChiSiamoThreeColumns';
import ChiSiamoThreeColumnsRight from '../components/chi-siamo/ChiSiamoThreeColumnsRight';
import ChiSiamoGrid from '../components/chi-siamo/ChiSiamoGrid';
import ContactCTA from '../components/ContactCTA';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ChiSiamoHero />
      
      {/* Story Section */}
      <ChiSiamoStory />
      
      {/* Experience Section */}
      <ChiSiamoExperience />
      
      {/* Features Section */}
      <ChiSiamoFeatures />
      
      {/* Three Columns Section */}
      <ChiSiamoThreeColumns />
      
      {/* Three Columns Right Section */}
      <ChiSiamoThreeColumnsRight />
      
      {/* Grid Section */}
      <ChiSiamoGrid />
      
      {/* Contact CTA Section */}
      <ContactCTA />
      
      {/* Additional content sections can be added here */}
    </div>
  );
} 