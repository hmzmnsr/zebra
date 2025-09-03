'use client';

import Image from 'next/image';
import Link from 'next/link';

const ShotGallery = () => {
  const images = [
    { src: '/assets/case2oniverse/4.jpg', alt: '360-degree camera in vineyard' },
    { src: '/assets/case2oniverse/5.jpg', alt: 'Drone controller with smartphone' },
    { src: '/assets/case2oniverse/6.jpg', alt: 'Aerial view of blue lake' },
    { src: '/assets/case2oniverse/7.jpg', alt: 'Purple grapes on vine' },
    { src: '/assets/case2oniverse/8.jpg', alt: 'Digital tower with smoke' },
    { src: '/assets/case2oniverse/9.jpg', alt: 'Power tool silhouette' }
  ];

  return (
    <div className="pt-8 md:pt-16 bg-[#FBFDFC] pb-28 lg:pb-0">
      <div className="max-w-8xl mx-auto px-1">
        {/* Header */}
        <div className="text-start px-4 sm:px-6 lg:ml-24 mb-8 md:mb-12">
          <h3 className="text-black text-xs font-thin leading-tight">
            In ogni frame l&apos;animo del brand
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-4xl font-thin text-black leading-tight">
            Shot gallery
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-8 md:mb-12">
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

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 sm:px-6 gap-4 md:gap-0">
          <Link href="/servizi/soluzioni-multimediali-immersive" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <span className="mr-2">←</span>
            <span className="text-xs md:text-sm">Vai a Soluzioni multimediali immersive</span>
          </Link>
          <Link href="/servizi/produzione-contenuti" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <span className="text-xs md:text-sm">Vai a produzioni video 3D</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShotGallery; 