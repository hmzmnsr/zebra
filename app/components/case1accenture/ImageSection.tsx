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
        className="w-full h-64 sm:h-84 md:h-48 lg:h-56 xl:h-64 2xl:h-168 object-cover"
        priority
      />
    </div>
  );
};

export default ImageSection; 