'use client';

import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/case2oniverse/1.jpg"
        alt="Produzione contenuti illustration"
        width={1920}
        height={600}
        className="w-full h-[40vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] object-cover"
        priority
      />
    </div>
  );
};

export default ImageSection; 