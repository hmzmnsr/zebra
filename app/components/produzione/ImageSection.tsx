'use client';

import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/assets/servizi2/3.png"
        alt="Produzione contenuti illustration"
        width={1920}
        height={600}
        className="w-full h-[40vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover"
        priority
      />
      {/* Horizontal line */}
      <div className="absolute top-18 left-0 right-0 h-px bg-gray-500  ml-120"></div>
    </div>
  );
};

export default ImageSection; 