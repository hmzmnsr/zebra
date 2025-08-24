'use client';

const TechStack = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Grid 1-2: Empty */}
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-1"></div>
          
          {/* Grid 3: with the brand's signature orange */}
          <div className="lg:col-span-1">
            <p className="text-base sm:text-lg md:text-xl lg:text-lg font-light text-[#1d2928] leading-relaxed">
              with the brand&apos;s signature orange.
            </p>
          </div>
          
          {/* Grid 4: Tech stack program1, Tech stack program1, Tech stack program1, Tech stack program1 */}
          <div className="lg:col-span-1">
            <p className="text-base sm:text-lg md:text-xl lg:text-lg font-light text-[#1d2928] leading-relaxed">
              Tech stack program1, Tech stack program1, Tech stack program1, Tech stack program1,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
