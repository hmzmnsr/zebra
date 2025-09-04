'use client';

import Image from 'next/image';

const ShotGallery = () => {
  const images = [
    { src: '/assets/servizi1/8.jpg', alt: '360-degree camera in vineyard' },
    { src: '/assets/servizi1/12.jpg', alt: 'Drone controller with smartphone' },
    { src: '/assets/servizi1/10.jpg', alt: 'Aerial view of blue lake' },
    { src: '/assets/servizi1/11.jpg', alt: 'Purple grapes on vine' },
    { src: '/assets/servizi1/13.jpg', alt: 'Digital tower with smoke' },
    { src: '/assets/servizi1/9.jpg', alt: 'Power tool silhouette' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-1">
        {/* Header */}
        <div className="text-start px-4 sm:px-6 lg:ml-24 mb-12">
          <h3 className="text-black text-xs font-normal leading-tight">
            Spazi di nostra creazione
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-extralight text-black leading-tight">
            Gallery
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-12">
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