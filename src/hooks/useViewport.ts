'use client';

import { useEffect, useState } from 'react';

export type ViewportType = 'sm' | 'md' | 'lg' | 'xl' | null | string;

export function useViewport(breakpoint = 800) {
  const [viewport, setViewport] = useState(() => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768 ? "sm" : "lg";
  }
  return null;
});

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width <= 500) {
        setViewport('sm');
      } else if (width <= 900) {
        setViewport('md');
      } else if (width <= 1920) {
        setViewport('lg');
      } else {
        setViewport('xl');
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return viewport;
}
