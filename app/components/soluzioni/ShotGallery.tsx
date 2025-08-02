'use client';

import Image from 'next/image';
import Link from 'next/link';

const ShotGallery = () => {
  const images = [
    { src: '/assets/servizi1/8.jpg', alt: '360-degree camera in vineyard' },
    { src: '/assets/servizi1/9.jpg', alt: 'Drone controller with smartphone' },
    { src: '/assets/servizi1/10.jpg', alt: 'Aerial view of blue lake' },
    { src: '/assets/servizi1/11.jpg', alt: 'Purple grapes on vine' },
    { src: '/assets/servizi1/12.jpg', alt: 'Digital tower with smoke' },
    { src: '/assets/servizi1/13.jpg', alt: 'Power tool silhouette' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-1">
        {/* Header */}
        <div className="text-start px-4 sm:px-6 lg:ml-24 mb-12">
          <h3 className="text-black text-xs font-thin leading-tight">
            Spazi di nostra creazione
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-thin text-black leading-tight">
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

        {/* Navigation */}
        <div className="flex justify-between items-center px-4 sm:px-6">
          <Link href="/servizi/soluzioni-multimediali-immersive" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <span className="mr-2">←</span>
            <span className="text-sm">Vai a Soluzioni multimediali immersive</span>
          </Link>
          <Link href="/servizi/produzione-contenuti" className="flex items-center text-black hover:text-gray-600 transition-colors">
            <span className="text-sm">Vai a produzioni video 3D</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShotGallery; 