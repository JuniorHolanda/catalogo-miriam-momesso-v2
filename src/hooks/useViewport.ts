'use client';

import { useEffect, useState } from "react";

export type ViewportType = 'mobile' | 'tablet' | 'desktop' | null;

export function useViewport(breakpoint = 800) {
    const [viewport, setViewport] = useState<ViewportType>(null);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;

            if(width <= 600) {
                setViewport('mobile');
            } else if ( width < 1024) {
                setViewport('tablet')
            } else {
                setViewport('desktop')
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return viewport;
}