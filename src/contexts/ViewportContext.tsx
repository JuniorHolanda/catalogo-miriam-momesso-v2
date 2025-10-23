'use client';

import {createContext, useContext, ReactNode } from 'react';
import { useViewport, ViewportType } from '@/hooks/useViewport';


const ViewportContext = createContext<ViewportType>(null);

export function ViewportProvider({children} : { children: ReactNode }) {
    const viewport = useViewport()

    return (
        <ViewportContext.Provider value={viewport}>
            {children}
        </ViewportContext.Provider>
    )
}

export function useViewportContext() {
  return useContext(ViewportContext);
}