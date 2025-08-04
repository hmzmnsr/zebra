'use client';

import Image from 'next/image';
import Link from 'next/link';

const ImmersiveMultimediaSection = () => {
  const menuItems = [
    { id: 1, title: 'Storytelling immersivi', active: true },
    { id: 2, title: 'Soluzioni medico-terapeutiche', active: false },
    { id: 3, title: 'Installazioni interattive', active: false },
    { id: 4, title: 'Simulazione', active: false },
    { id: 5, title: 'Videomapping', active: false },
    { id: 6, title: 'Soluzioni per fiere ed eventi', active: false },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/homepage/bg1.jpg"
          alt="Immersive Multimedia Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Full-width heading above the panel */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="bg-black/30 backdrop-blur-md p-3 md:p-4 shadow-2xl">
          <div className="flex items-center pt-2 md:pt-4">
            <span className="text-white text-lg md:text-2xl font-thin mr-2 md:mr-3">1</span>
            <h2 className="text-lg md:text-2xl font-thin text-white leading-tight ml-8 md:ml-24">
              Soluzioni Multimediali Immersive
            </h2>
          </div>
        </div>
      </div>

      {/* Left Vertical Navigation Menu */}
      <div className="absolute top-16 md:top-20 z-10 left-2 md:left-0">
        {/* Table with borders */}
        <div className="border border-white/30 overflow-hidden w-64 md:w-80">
          <ul className="space-y-0">
            {menuItems.map((item) => (
              <li key={item.id} className="border-b border-white/30 last:border-b-0">
                <div className={`flex items-center justify-between py-2 md:py-3 px-3 md:px-4 hover:bg-white/10 transition-colors cursor-pointer ${
                  item.active ? 'bg-black/50' : ''
                }`}>
                  <span className="text-white/90 hover:text-white transition-colors text-sm md:text-base">
                    {item.title}
                  </span>
                  <div 
                    className={`w-1.5 md:w-2 h-1.5 md:h-2 ${
                      item.active ? 'bg-green-500' : 'bg-white/60'
                    }`}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center/Right Foreground Text Block */}
      <div className="absolute bottom-20 md:bottom-20 left-2 md:left-5 z-10 text-white max-w-xs md:max-w-2xl px-2 md:px-0">
        <p className="text-sm md:text-2xl leading-relaxed font-light text-white/95">
        Sistemi immersivi che avvolgono lo spettatore in un momento sensoriale unico, trasformando ogni ambiente in un viaggio emozionale capace di coinvolgere, stupire e lasciare un segno indelebile nella memoria.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <Link 
        href="/servizi/soluzioni-multimediali-immersive"
        className="absolute bottom-4 md:bottom-10 right-2 md:right-10 z-10 pl-8 md:pl-24 pr-2 md:pr-4 pt-8 md:pt-36 pb-2 md:pb-4 text-white border border-white/80 
                   hover:bg-white/10 transition-all 
                   duration-300 flex items-center gap-2 group text-xs md:text-sm"
      >
        <span className="font-medium">Scopri di più</span>
        <span className="text-sm md:text-lg group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </Link>

      {/* Foreground Person (if needed as separate element) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-5">
        {/* This could be a separate image if needed */}
      </div>
    </section>
  );
};

export default ImmersiveMultimediaSection; 