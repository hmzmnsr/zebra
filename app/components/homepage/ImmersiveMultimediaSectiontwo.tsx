'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

const ImmersiveMultimediaSectionTwo = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const currentIndex = activeItem;
    const nextIndex = currentIndex === menuItems.length ? 1 : currentIndex + 1;
    const prevIndex = currentIndex === 1 ? menuItems.length : currentIndex - 1;
    [nextIndex, prevIndex].forEach((idx) => {
      const src = menuItems.find(i => i.id === idx)?.image;
      if (src && !loadedImages[src] && typeof window !== 'undefined') {
        const img = new window.Image();
        img.src = src;
        img.onload = () => setLoadedImages(prev => ({ ...prev, [src]: true }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  const menuItems = [
    { 
      id: 1, 
      title: 'Video 3D', 
      active: activeItem === 1,
      image: '/assets/homepage/new111.png',
      content: 'Produzioni A-V pensate per comunicare in modo stupefacente, valorizzando prodotti e aziende tramite contenuti ottimizzati per canali social, YouTube, siti web e spot televisivi.',
      link: '/servizi/produzione-contenuti'
    },
    { 
      id: 2, 
      title: 'Riprese & Editing', 
      active: activeItem === 2,
      image: '/assets/homepage/new114.png',
      content: 'Produzioni A-V pensate per comunicare in modo stupefacente, valorizzando prodotti e aziende tramite contenuti ottimizzati per canali social, YouTube, siti web e spot televisivi.',
      link: '/servizi/soluzioni-multimediali-immersive'
    },
    { 
      id: 3, 
      title: 'Sound Design', 
      active: activeItem === 3,
      image: '/assets/homepage/new113.png',
      content: 'Produzioni A-V pensate per comunicare in modo stupefacente, valorizzando prodotti e aziende tramite contenuti ottimizzati per canali social, YouTube, siti web e spot televisivi.',
      link: '/servizi/ambienti-collaborativi-allavanguardia'
    },
  ];

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };

  const goToSlide = (targetIndex: number) => {
    const target = menuItems.find(item => item.id === targetIndex);
    const targetSrc = target?.image || '';
    const proceed = () => {
      setIsFading(true);
      setTimeout(() => {
        setActiveItem(targetIndex);
        setTimeout(() => setIsFading(false), 10);
      }, 300);
    };
    if (loadedImages[targetSrc]) {
      proceed();
    } else if (typeof window !== 'undefined' && targetSrc) {
      const img = new window.Image();
      img.src = targetSrc;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [targetSrc]: true }));
        proceed();
      };
      img.onerror = proceed;
    } else {
      proceed();
    }
  };

  const nextSlide = () => {
    const targetIndex = activeItem === menuItems.length ? 1 : activeItem + 1;
    goToSlide(targetIndex);
  };

  const prevSlide = () => {
    const targetIndex = activeItem === 1 ? menuItems.length : activeItem - 1;
    goToSlide(targetIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const deltaX = touchEndX - touchStartX;
    const threshold = 40;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const activeContent = menuItems.find(item => item.id === activeItem);

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image for desktop */}
      <div className={`absolute inset-0 md:block hidden transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={activeContent?.image || '/assets/homepage/bg3.png'}
          alt="Immersive Multimedia Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={65}
          fetchPriority="high"
          onLoadingComplete={() => {
            const src = activeContent?.image;
            if (src && !loadedImages[src]) {
              setLoadedImages(prev => ({ ...prev, [src]: true }));
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Preload all images */}
      <div className="hidden">
        {menuItems.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt=""
            width={1}
            height={1}
            priority={item.id === 1}
          />
        ))}
      </div>

      {/* Full-width heading above the panel */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="bg-black/30 backdrop-blur-md p-3 md:p-4 shadow-2xl">
          <div className="flex items-center pt-2 md:pt-4 md:pb-2">
            <span className="text-white text-lg md:text-2xl font-thin mr-2 md:mr-3">3</span>
            <h2 className="text-lg md:text-2xl font-thin text-white leading-tight ml-8 md:ml-24">
            Produzione contenuti
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile Carousel View with Swiper - Hidden on desktop */}
      <div className="md:hidden h-screen">
        <Swiper
          modules={[EffectFade, Pagination, Navigation]}
          effect="fade"
          speed={700}
          loop
          pagination={{ clickable: true }}
          navigation={{ prevEl: '.home-imm-prev', nextEl: '.home-imm-next' }}
          onSlideChange={(swiper) => setActiveItem((swiper.realIndex % menuItems.length) + 1)}
          className="h-full"
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt="Immersive Multimedia Background"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  quality={70}
                  priority={item.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute top-20 left-0 right-0 z-10 px-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <h3 className="text-white text-lg font-medium mb-2 text-center">{item.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed text-center">{item.content}</p>
                  </div>
                </div>
                <Link 
                  href={item.link}
                  className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center gap-2 text-sm"
                >
                  <span className="font-medium">Scopri di più</span>
                  <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
                <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-between px-4">
                  <button className="home-imm-prev bg-black/40 backdrop-blur-sm text-white p-3 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button className="home-imm-next bg-black/40 backdrop-blur-sm text-white p-3 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Left Vertical Navigation Menu */}
        <div className="absolute top-16 md:top-22 z-10 left-2 md:left-0">
          {/* Table with borders */}
          <div className="border-t border-r border-b border-white/30 overflow-hidden w-64 md:w-80">
            <ul className="space-y-0">
              {menuItems.map((item) => (
                <li key={item.id} className="border-b border-white/30 last:border-b-0">
                  <div 
                    className={`flex items-center justify-between py-2 md:py-3 px-3 md:px-4 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                      item.active ? 'bg-black/50' : ''
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
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
        <div className="absolute bottom-20 md:bottom-6 left-2 md:left-5 z-10 text-white max-w-xs md:max-w-3xl px-2 md:px-0">
          <div className="absolute -left-5 right-1 -top-4 border-t border-white pt-4"></div>
          <p className="text-sm md:text-3xl leading-relaxed font-light text-white transition-all duration-1000 ease-in-out" style={{ fontFamily: 'Arial, sans-serif' }}>
            {activeContent?.content}
          </p>
        </div>

        {/* Call-to-Action Button */}
        <Link 
          href={activeContent?.link || '/servizi/soluzioni-multimediali-immersive'}
          className="absolute bottom-4 md:bottom-10 right-2 md:right-10 z-10 pl-8 md:pl-24 pr-2 md:pr-4 pt-8 md:pt-36 pb-2 md:pb-4 text-white border border-white/80 
                     hover:bg-white/10 transition-all 
                     duration-300 flex items-center gap-2 group text-xs md:text-sm"
        >
          <span className="font-medium">Scopri di più</span>
          <span className="text-sm md:text-lg group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>

      {/* Foreground Person (if needed as separate element) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-5">
        {/* This could be a separate image if needed */}
      </div>
    </section>
  );
};

export default ImmersiveMultimediaSectionTwo; 