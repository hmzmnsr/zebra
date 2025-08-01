'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isServiziOpen, setIsServiziOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviziItems = [
    'Soluzioni multimediali immersive',
    'Produzione contenuti',
    'Ambienti collaborativi all\'avanguardia',
    'Sviluppo applicazioni'
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Servizi', href: '/servizi', hasDropdown: true },
    { name: 'Prodotti', href: '/prodotti' },
    { name: 'Education', href: '/education' },
    { name: 'Progetti', href: '/progetti' },
    { name: 'Chi siamo', href: '/chi-siamo' },
    { name: 'Contatti', href: '/contatti' }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile menu trigger - positioned outside main nav */}
      <div className="lg:hidden absolute top-0 left-0 z-50 p-4">
        <button
          onClick={() => setIsServiziOpen(!isServiziOpen)}
          className="flex items-center gap-2 text-white"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" />
          </svg>
          <span>Menu</span>
        </button>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`backdrop-blur-md border-b border-white/20 text-white w-full h-[70px] flex items-center px-8 z-40 relative transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#4F4F4E] border-gray-600' 
          : 'bg-white/10 border-white/20'
      }`}>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Zebra Logo"
                width={280}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-16 pr-24">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                                 {item.hasDropdown ? (
                   <div className="relative">
                     <div className="flex items-center gap-2">
                       <Link
                         href={item.href}
                         className="text-white hover:text-gray-300 transition-colors text-base font-medium"
                       >
                         {item.name}
                       </Link>
                       <button
                         onClick={() => setIsServiziOpen(!isServiziOpen)}
                         className="text-white hover:text-gray-300 transition-colors text-sm"
                       >
                         {isServiziOpen ? '-' : '+'}
                       </button>
                     </div>
                   </div>
                 ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Vertical separator */}
                {index < navItems.length - 1 && (
                  <div className={`absolute -right-6 top-1/2 transform -translate-y-1/2 w-px h-6 transition-colors duration-300 ${
                    isScrolled ? 'bg-gray-600' : 'bg-white/30'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between w-full">
          {/* Mobile Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Zebra Logo"
                width={140}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsServiziOpen(!isServiziOpen)}
            className="flex items-center gap-2 text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" />
            </svg>
            <span>Menu</span>
          </button>
        </div>
      </nav>

             {/* Full-width Dropdown Menu - Desktop */}
       {isServiziOpen && (
         <div 
           className={`hidden lg:block absolute top-[70px] left-0 w-screen backdrop-blur-md border-b shadow-lg z-50 transition-all duration-300 ${
             isScrolled 
               ? 'bg-[#4F4F4E] border-gray-600' 
               : 'bg-white/10 border-white/20'
           }`}
         >
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-start">
              <div className="w-80 py-8 ml-[calc(50%-18rem)]">
                                 {serviziItems.map((servizio, idx) => (
                   <div key={servizio} className={`border-b last:border-b-0 pb-4 mb-4 last:mb-0 transition-colors duration-300 ${
                     isScrolled ? 'border-gray-600' : 'border-white/20'
                   }`}>
                     <Link
                       href={`/servizi/${servizio.toLowerCase().replace(/\s+/g, '-')}`}
                       className="block text-white hover:text-gray-300 transition-colors text-sm py-2"
                     >
                       {servizio}
                     </Link>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Dropdown */}
      {isServiziOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-md border-t shadow-lg z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#4F4F4E] border-gray-600' 
            : 'bg-white/10 border-white/20'
        }`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServiziOpen(!isServiziOpen)}
                      className="w-full text-left px-3 py-2 text-white hover:bg-gray-700 transition-colors flex items-center justify-between"
                    >
                      {item.name}
                      <span className="text-sm">
                        {isServiziOpen ? '-' : '+'}
                      </span>
                    </button>
                    <div className="pl-4">
                                             {serviziItems.map((servizio) => (
                         <Link
                           key={servizio}
                           href={`/servizi/${servizio.toLowerCase().replace(/\s+/g, '-')}`}
                           className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                         >
                           {servizio}
                         </Link>
                       ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-white hover:bg-gray-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar; 