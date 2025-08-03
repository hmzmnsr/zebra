
import Clients from "./components/homepage/Clients";
import InnovationSection from "./components/homepage/InnovationSection";
import StatisticsSection from "./components/homepage/StatisticsSection";
import ImmersiveMultimediaSection from "./components/homepage/ImmersiveMultimediaSection";
import ImmersiveMultimediaSectionOne from "./components/homepage/ImmersiveMultimediaSectionOne";
import ImmersiveMultimediaSectionTwo from "./components/homepage/ImmersiveMultimediaSectiontwo";
import ImmersiveMultimediaSectionThree from "./components/homepage/ImmersiveMultimediaSectionthree";
import IntegratedApproachSection from "./components/homepage/IntegratedApproachSection";
import HeroSection from "./components/homepage/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Integrated Approach Section */}
      <IntegratedApproachSection />
      
      {/* Immersive Multimedia Section */}
      <ImmersiveMultimediaSection />
      <ImmersiveMultimediaSectionOne />
      <ImmersiveMultimediaSectionTwo />
      <ImmersiveMultimediaSectionThree />
      <InnovationSection />
      
      {/* Statistics Section */}
      <StatisticsSection />

      {/* Clients Section */}
      <Clients />
    </div>
  );
}
