'use client';

import Image from 'next/image';

const ImageSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/assets/case1centro/1.jpg"
        alt="Produzione contenuti illustration"
        width={1921}
        height={974}
        className="w-full h-[85vh] sm:h-[90vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh] object-cover"
        priority
      />
    </div>
  );
};

export default ImageSection; 