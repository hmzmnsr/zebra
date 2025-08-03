import ContattiHero from "../components/contatti/ContattiHero";
import ContactInfo from "../components/contatti/ContactInfo";
import ContactForm from "../components/contatti/ContactForm";

export default function Contatti() {
  return (
    <div className="min-h-screen bg-[#222222]">
      {/* Hero Section */}
      <ContattiHero />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Contact Information Section */}
      <ContactInfo />
    </div>
  );
} 