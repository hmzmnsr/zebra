'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in on mount
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Trigger fade on route change (mobile only via CSS)
    setIsVisible(false);
    const t = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-300 md:duration-0 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}


