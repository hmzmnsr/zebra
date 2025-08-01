'use client';

import Image from 'next/image';

const ContactCTA = () => {
  return (
    <section className="bg-white py-32 flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Text */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-5xl font-medium text-black">
              Stai creando un progetto multimediale?
            </h2>
            <p className="text-2xl md:text-5xl text-black">
              Contattaci e insieme lo renderemo realtà
            </p>
          </div>

          {/* Contact Button */}
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
            <span className="text-black font-medium">Contattaci</span>
            <Image
              src="/assets/btn.PNG"
              alt="Contact icon"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 