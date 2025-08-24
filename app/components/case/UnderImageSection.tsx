'use client';

const UnderImageSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - Mobile: top, Desktop: center */}
      <div 
        className="w-full h-64 md:h-full md:absolute md:inset-0"
        style={{
          backgroundImage: 'url(/assets/case/bg.PNG)',
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Content - Mobile: below image, Desktop: overlay */}
      <div className="md:absolute md:inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-0">
          {/* Header Area */}
          <div className="mb-6 md:mb-8 lg:mb-12 leading-tight">
            <h3 className="text-black text-xs font-thin leading-tight">
              with the brands signature orange.
            </h3>
            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-3xl font-thin text-black leading-tight">
            Lorem ipsum dolor sit amet, 
            </h2>
          </div>

          {/* Content Area - Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-16 lg:mt-20 xl:mt-36">
            <div className="text-black text-sm leading-relaxed md:leading-tight">
            For IBMs latest Linux platform launch, we created a launch film that brought a fresh, playful energy to the hardware. <br/><br/>
            To celebrate the platforms signature openness, we leaned into an  original song (inspired by a reference) for an invitation few could  resist—capped with the brand&apos;s signature orange.
            </div>
            <div className="text-black text-sm leading-relaxed md:leading-tight">
            For IBMs latest Linux platform launch, we created a launch film that brought a fresh, playful energy to the hardware. <br/><br/>
            To celebrate the platforms signature openness, we leaned into an  original song (inspired by a reference) for an invitation few could  resist—capped with the brand&apos;s signature orange.
            </div>
            <div className="text-white text-sm leading-relaxed md:leading-tight">
              {/* Empty right section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderImageSection; 