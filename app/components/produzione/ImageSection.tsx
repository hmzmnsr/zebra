'use client';

import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/servizi2/3.png"
        alt="Produzione contenuti illustration"
        width={1920}
        height={600}
        className="w-full h-68 sm:h-48 md:h-64 lg:h-168"
        priority
      />
    </div>
  );
};

export default ImageSection; 