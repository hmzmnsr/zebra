import ProgettiHero from '../components/Progetti/ProgettiHero';
import ProjectShowcase from '../components/Progetti/ProjectShowcase';
import ContactCTA from '../components/ContactCTA';

export default function Progetti() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ProgettiHero />
      
      {/* Project Showcase Section */}
      <ProjectShowcase />
      
      {/* Contact CTA Section */}
      <ContactCTA />
      
      {/* Additional content sections can be added here */}
    </div>
  );
} 