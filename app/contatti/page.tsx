import ContattiHero from "../components/contatti/ContattiHero";
import ContactInfo from "../components/contatti/ContactInfo";
import ContactForm from "../components/contatti/ContactForm";

export default function Contatti() {
  return (
    <div className="min-h-screen bg-[#222222] flex justify-center">
      <div className="w-full max-w-[1920px]">
        {/* Hero Section */}
        <ContattiHero />
        
        {/* Contact Form Section */}
        <ContactForm />
        
        {/* Contact Information Section */}
        <ContactInfo />
      </div>
    </div>
  );
} 