'use client';

import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/case1accenture/1.jpg"
        alt="Produzione contenuti illustration"
        width={1920}
        height={600}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] 2xl:h-[50vh] object-cover"
        priority
      />
    </div>
  );
};

export default ImageSection; 