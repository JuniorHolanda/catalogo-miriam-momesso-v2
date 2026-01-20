'use client';

import { useEffect, useState } from 'react';

export type ViewportType = 'sm' | 'md' | 'lg' | 'xl' | null;

export function useViewport(breakpoint = 800) {
  const [viewport, setViewport] = useState<ViewportType>(null);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width <= 958) {
        setViewport('sm');
      } else if (width <= 1430) {
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
