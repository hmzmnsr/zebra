'use client';

import Image from 'next/image';

const HorizontalImage = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full">
        <Image
          src="/assets/case2betaise/img.png"
          alt="Case Betaise Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default HorizontalImage;
