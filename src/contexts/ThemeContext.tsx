'use client';

import { createContext, use, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/themes/theme';
import { GlobalStyle } from '@/styles/globals';

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeMode>('light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    //seta cor do tema na montagem do componente
    useEffect(() => {
        //informa para o ts que o tipo retornado é 'light' | 'dark' ou null
        const storedTheme = localStorage.getItem('theme') as ThemeMode | null;
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    const themeObject = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeObject}>
            <GlobalStyle />
            <ThemeContext.Provider value={{ themeMode: theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext deve ser usado dentro do AppThemeProvider');
  }
  return context;
}