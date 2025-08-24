'use client';

import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/case1centro/1.jpg"
        alt="Produzione contenuti illustration"
        width={1920}
        height={600}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-168 object-cover"
        priority
      />
    </div>
  );
};

export default ImageSection; 