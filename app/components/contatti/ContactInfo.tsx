'use client';

import Image from 'next/image';

const ContactInfo = () => {
  return (
    <section className="w-full bg-[#222222] pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-32 lg:pb-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Section - ZEBRA Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="text-white">
              <div className="flex items-center mb-4 mt-8 sm:mt-12 lg:mt-20">
                <Image
                  src="/assets/contatti/cnt.PNG"
                  alt="ZEBRA Logo"
                  width={200}
                  height={80}
                  className="h-12 sm:h-14 lg:h-16 w-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div className="text-white">
            {/* Top Part */}
            <div className="mb-6 sm:mb-8">
              <div className="w-full h-px bg-gray-400 mb-4 sm:mb-6"></div>
              <h2 className="text-xl sm:text-2xl font-tight mb-2">ZEBRA MULTIMEDIA</h2>
              <p className="text-sm sm:text-md">zebra.it</p>
            </div>

            {/* Bottom Part - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Address */}
              <div>
                <h3 className="text-sm sm:text-md font-thin mb-3 sm:mb-4">Indirizzo</h3>
                <div className="text-sm sm:text-base space-y-1">
                  <p>ZEBRA S.R.L.</p>
                  <p>Via Rossi, 14</p>
                  <p>Palermo</p>
                  <p>+39321223311</p>
                </div>
              </div>

              {/* Right Column - Contacts */}
              <div>
                <h3 className="text-sm sm:text-md font-thin mb-3 sm:mb-4">Contatti</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p>(+39) 321-223311</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 