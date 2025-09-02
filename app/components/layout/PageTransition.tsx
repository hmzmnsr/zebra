'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [shouldShowContent, setShouldShowContent] = useState(true);

  useEffect(() => {
    // When pathname changes, immediately hide content and start transition
    setShouldShowContent(false);
    
    // After transition completes, show new content
    const timer = setTimeout(() => {
      setShouldShowContent(true);
    }, 350); // Adjusted to 350ms for smoother feel
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Don't render content while transitioning
  if (!shouldShowContent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.2 }} // Adjusted to 0.2s
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
        duration: 0.5, // Adjusted to 0.5s for smoother fade
        ease: "easeInOut"
      }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}


