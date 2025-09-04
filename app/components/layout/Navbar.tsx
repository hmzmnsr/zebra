'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isServiziOpen, setIsServiziOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServiziOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServiziOpen(false);
    }, 150); // Small delay to allow moving to dropdown content
  };

  const handleNavigationClick = () => {
    setIsServiziOpen(false);
    setIsMobileMenuOpen(false);
  };

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

  // Function to generate URL from servizio name
  const generateServizioUrl = (servizio: string) => {
    return `/servizi/${servizio.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`;
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black/40 backdrop-blur-md border-b border-white/20 text-white w-full h-[70px] flex items-center px-8 z-40 relative transition-all duration-300">
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
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors text-base"
                    style={{ fontWeight: 400 }}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Vertical separator */}
                  {index < navItems.length - 1 && (
                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-px h-6 bg-white/30"></div>
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
                 src="/assets/Logo_Light-1.png"
                 alt="Zebra Logo"
                 width={40}
                 height={16}
                 className="h-4 w-auto"
                 priority
               />
            </Link>
          </div>

            {/* Mobile Menu Button */}
            <button className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium">Menu</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation Bar */}
             <nav className={`w-full h-[70px] flex items-center px-8 z-40 relative transition-all duration-300 ${
         isScrolled 
           ? 'bg-black/40 backdrop-blur-md border-white/20 text-white lg:bg-black/40 lg:backdrop-blur-md lg:text-white lg:border-b' 
           : 'bg-black/40 backdrop-blur-md border-white/20 text-white lg:bg-black/40 lg:backdrop-blur-md lg:text-white lg:border-b'
       }`} style={{ borderBottomColor: '#cfe1e3' }}>
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
                   <div 
                     className="relative"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                   >
                     <div className="flex items-center gap-2">
                       <Link
                         href={item.href}
                         className="text-white hover:text-gray-300 transition-colors text-base"
                         style={{ fontWeight: 400 }}
                       >
                         {item.name}
                       </Link>
                       <span className="text-white hover:text-gray-300 transition-colors text-sm">
                         +
                       </span>
                     </div>
                   </div>
                 ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors text-base"
                    style={{ fontWeight: 400 }}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Vertical separator */}
                {index < navItems.length - 1 && (
                  <div className={`absolute -right-6 top-1/2 transform -translate-y-1/2 w-px h-6 transition-colors duration-300 ${
                    isScrolled ? 'bg-white/30' : 'bg-white/30'
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
                 src="/assets/Logo_Light-1.png"
                 alt="Zebra Logo"
                 width={40}
                 height={16}
                 className="h-4 w-auto"
                 priority
               />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-white"
          >
            <span className="text-sm font-medium">Menu</span>
            <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>

             {/* Full-width Dropdown Menu - Desktop */}
       {isServiziOpen && (
         <div 
          className={`hidden lg:block absolute top-[70px] w-screen backdrop-blur-md border-b shadow-lg z-50 transition-all duration-300 bg-black/40 border-white/20`}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
         >
          <div className="max-w-8xl mx-auto px-8 ml-64">
            <div className="flex justify-start">
              <div className="w-80 py-8 ml-[calc(50%-18rem)]">
                                 {serviziItems.map((servizio) => (
                  <div key={servizio} className={`border-b last:border-b-0 pb-4 mb-4 last:mb-0 transition-colors duration-300 ${
                    isScrolled ? 'border-white/20' : 'border-white/20'
                  }`}>
                    <Link
                      href={generateServizioUrl(servizio)}
                      onClick={handleNavigationClick}
                      className="block text-white hover:text-gray-300 transition-colors text-sm py-2"
                      style={{ fontWeight: 400 }}
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
        <div className={`lg:hidden absolute top-full left-0 w-full border-t shadow-lg z-50 transition-all duration-500 ease-in-out transform origin-top ${
          isMobileMenuOpen 
            ? 'scale-y-100 opacity-100' 
            : 'scale-y-0 opacity-0 pointer-events-none'
        } ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-md border-white/20' 
            : 'bg-black/40 backdrop-blur-md border-white/20'
        }`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={handleNavigationClick}
                        className="flex-1 px-3 py-2 text-white hover:bg-white/10 transition-colors"
                        style={{ fontWeight: 400 }}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setIsServiziOpen(!isServiziOpen)}
                        className="px-3 py-2 text-white hover:bg-white/10 transition-colors"
                      >
                        <span className="text-sm">
                          {isServiziOpen ? '-' : '+'}
                        </span>
                      </button>
                    </div>
                    <motion.div
                      className="pl-4"
                      style={{ overflow: 'hidden' }}
                      initial="closed"
                      animate={isServiziOpen ? 'open' : 'closed'}
                      variants={{
                        open: {
                          height: 'auto',
                          opacity: 1,
                          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                        },
                        closed: {
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                        }
                      }}
                      aria-hidden={!isServiziOpen}
                    >
                      {serviziItems.map((servizio) => (
                        <Link
                          key={servizio}
                          href={generateServizioUrl(servizio)}
                          onClick={handleNavigationClick}
                          className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                          style={{ fontWeight: 400 }}
                        >
                          {servizio}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleNavigationClick}
                    className="block px-3 py-2 text-white hover:bg-white/10 transition-colors"
                    style={{ fontWeight: 400 }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Navbar; 