'use client';

import Image from 'next/image';

const ShotGallery = () => {
  const images = [
    { src: '/assets/case2betaise/5.jpg', alt: '360-degree camera in vineyard' },
    { src: '/assets/case2betaise/6.jpg', alt: 'Drone controller with smartphone' },
    { src: '/assets/case2betaise/7.jpg', alt: 'Aerial view of blue lake' },
    { src: '/assets/case2betaise/8.jpg', alt: 'Purple grapes on vine' },
    { src: '/assets/case2betaise/9.jpg', alt: 'Digital tower with smoke' },
    { src: '/assets/case2betaise/10.png', alt: 'Power tool silhouette' }
  ];

  return (
    <div className="pt-8 sm:pt-12 md:pt-16 bg-white pb-28 lg:pb-0">
      <div className="max-w-8xl mx-auto px-1">
        {/* Header */}
        <div className="text-start px-4 sm:px-6 lg:ml-24 mb-6 sm:mb-8 md:mb-12">
          <h3 className="text-black text-xs font-thin leading-tight mb-2 sm:mb-3">
            In ogni frame l&apos;animo del brand
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-4xl font-thin text-black leading-tight">
            Shot gallery
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-6 sm:mb-8 md:mb-12">
          {images.map((image, index) => (
            <div key={index} className="aspect-[5/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ShotGallery; 