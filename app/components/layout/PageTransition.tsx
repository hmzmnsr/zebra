'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldShowContent, setShouldShowContent] = useState(true);

  useEffect(() => {
    // When pathname changes, immediately hide content and start transition
    setIsLoading(true);
    setShouldShowContent(false);
    
    // After transition completes, show new content
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShouldShowContent(true);
    }, 200); // Reduced from 600ms to 200ms
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Don't render content while transitioning
  if (!shouldShowContent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.1 }} // Reduced from 0.3s to 0.1s
        className="min-h-screen w-full bg-white"
      />
    );
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.3, // Reduced from 0.6s to 0.3s
        ease: "easeInOut"
      }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}


