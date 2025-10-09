'use client';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/themes/theme';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  );
}
