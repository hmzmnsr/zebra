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
        className="w-full h-88 sm:h-68 md:h-64 lg:h-168"
        priority
      />
    </div>
  );
};

export default ImageSection; 